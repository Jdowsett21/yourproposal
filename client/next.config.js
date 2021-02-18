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
        '/about': { page: '/about' },
        '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
        '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
        '/p/deploy-nextjs': {
          page: '/post',
          query: { title: 'deploy-nextjs' },
        },
      };
    },
  }
);
