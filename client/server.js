const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const sitemap = require('nextjs-sitemap-generator'); // Import the package
const apiPaths = {
  '/api': {
    target: 'http://localhost:5000',
    pathRewrite: {
      '^/api': '/api',
    },
    changeOrigin: true,
  },
};

const isDevelopment = process.env.NODE_ENV !== 'production';

sitemap({
  alternateUrls: {
    en: 'https://example.en',
    es: 'https://example.es',
    ja: 'https://example.jp',
    fr: 'https://example.fr',
  },
  baseUrl: 'https://example.com',
  ignoredPaths: ['admin'],
  extraPaths: ['/extraPath'],
  pagesDirectory: __dirname + '\\pages',
  targetDirectory: 'static/',
  sitemapFilename: 'sitemap.xml',
  nextConfigPath: __dirname + '\\next.config.js',
});

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
