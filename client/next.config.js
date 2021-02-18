const withImages = require('next-optimized-images');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withImages(
  { responsive: { adapter: require('responsive-loader/sharp') } },
  withSass({ minified: true }, withCss()),
  {
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/services': { page: '/services' },
        '/process': { page: '/process' },
        '/services': { page: '/services' },
        '/services': { page: '/services' },
        '/services': { page: '/services' },
        '/services': { page: '/services' },
      };
    },
  }
);
