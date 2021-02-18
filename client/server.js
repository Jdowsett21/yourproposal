const express = require('express');
const next = require('next');
const path = require('path');
const url = require('url');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const { createProxyMiddleware } = require('http-proxy-middleware');
// const sitemap = require('nextjs-sitemap-generator'); // Import the package

// sitemap({
//   baseUrl: 'https://smarterwebsolutions.ca',
//   pagesDirectory: __dirname + '/pages',
//   targetDirectory: 'static/',
// });
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const apiPaths = {
  '/api': {
    target: 'http://localhost:5000',
    pathRewrite: {
      '^/api': '/api',
    },
    changeOrigin: true,
  },
};

if (!dev && cluster.isMaster) {
  console.log(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = next({ dir: '.', dev });
  const handle = app.getRequestHandler();

  const isDevelopment = process.env.NODE_ENV !== 'production';

  app
    .prepare()
    .then(() => {
      const server = express();

      if (isDevelopment) {
        server.use('/api', createProxyMiddleware(apiPaths['/api']));
      }

      if (!dev) {
        // Enforce SSL & HSTS in production
        server.use(function (req, res, next) {
          var proto = req.headers['x-forwarded-proto'];
          if (proto === 'https') {
            res.set({
              'Strict-Transport-Security': 'max-age=31557600', // one-year
            });
            return next();
          }
          res.redirect('https://' + req.headers.host + req.url);
        });
      }

      // Static files
      // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
      server.use(
        '/static',
        express.static(path.join(__dirname, 'static'), {
          maxAge: dev ? '0' : '365d',
        })
      );
      server.get('/process', (req, res) => {
        return app.render(req, res, '/process', req.query);
      });
      server.get('/services', (req, res) => {
        return app.render(req, res, '/services', req.query);
      });
      server.get('/technical', (req, res) => {
        return app.render(req, res, '/technical', req.query);
      });
      server.get('/contact', (req, res) => {
        return app.render(req, res, '/contact', req.query);
      });

      server.get('*', (req, res) => {
        // res.set({
        //   'Cache-Control': 'public, max-age=3600'
        // });
        const parsedUrl = url.parse(req.url, true);
        handle(req, res, parsedUrl);
      });

      server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
      });
    })
    .catch((err) => {
      console.log('Error:::::', err);
    });
}
