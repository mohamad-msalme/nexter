const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    clean: true,
    assetModuleFilename: 'assets/images/[name][ext]'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      hooks: path.join(__dirname, 'src/hooks'),
      components: path.join(__dirname, 'src/components'),
      assets: path.join(__dirname, 'assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Your Dynamic Title',
      fontUrl:
        'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700&display=swap',
      meta: [
        { property: 'og:title', content: 'Open Graph Title' },
        { name: 'description', content: 'Your description here' }
      ]
    })
  ]
}
