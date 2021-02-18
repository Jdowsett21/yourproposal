const express = require('express');
const next = require('next');
const path = require('path');
const url = require('url');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const { createProxyMiddleware } = require('http-proxy-middleware');
// const sitemap = require('nextjs-sitemap-generator'); // Import the package

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

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

// sitemap({
//   baseUrl: 'https://smarterwebsolutions.ca',
//   pagesDirectory: __dirname + '/pages',
//   targetDirectory: 'static/',
// });
const isDevelopment = process.env.NODE_ENV !== 'production';

app
  .prepare()
  .then(() => {
    const server = express();

    if (isDevelopment) {
      server.use('/api', createProxyMiddleware(apiPaths['/api']));
    }

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('Error:::::', err);
  });
