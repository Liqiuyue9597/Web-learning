// webpack配置文件
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
//配置工程资源入口文件
  // entry: './app.js',
  // 配置输出 
  output: {
    // 必须是绝对路径
    // path: path.join(__dirname, 'dist'),
    // filename: 'bundle.js'
  },
  // 配置服务端
  devServer: {
    //设置服务端口
    // port: 3000, 
    publicPath: '/dist' //设置服务端打包的路径
  },
  // 文件加载器-loader
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader的加载顺序和use的顺序相反
        use: ['style-loader','css-loader']
      }
    ]
  },
  // plugin插件
  plugins: [
    new UglifyJSPlugin()
  ]
}