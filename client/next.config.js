const withImages = require('next-images');
const withCss = require('@zeit/next-css');
const { withXDN, withServiceWorker } = require('@xdn/next/config');
const withSass = require('@zeit/next-sass');

module.exports = withImages(withSass(withCss()));
