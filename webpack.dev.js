const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: (content, loaderContext) => {
                if (loaderContext.resourcePath.includes('src')) {
                  return (
                    `@use '~/styles/abstract/variables'; @use '~/styles/abstract/mixins'; @use '~/styles/abstract/functions';` +
                    content
                  )
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env.development' // Specify the path to your development environment file
    })
  ],
  devServer: {
    port: 3000
  }
}
