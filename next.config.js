const { i18n } = require('./il8n.config.js');

module.exports = {
  i18n,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};