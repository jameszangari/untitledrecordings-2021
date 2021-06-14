const path = require('path')

module.exports = {
  // Target must be serverless
  target: 'serverless',
  /* Add Your Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')]
  },
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })
    config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' })
    return config
  }
}
