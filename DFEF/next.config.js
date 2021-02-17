const withImages = require('next-images');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
module.exports = withImages(withSass(withCss()));
