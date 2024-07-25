const withFonts = require('next-fonts');

module.exports = withFonts({
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          mimetype: 'application/font-woff',
          name: 'static/fonts/[name].[ext]',
        },
      },
    });

    return config;
  },
});