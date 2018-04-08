// 自带的库
const path = require('path')
module.exports = {
    entry:  './src/index.js', // 入口文件
    output: {
      path: path.resolve(__dirname, 'dist'), // 必须使用绝对地址，输出文件夹
      filename: "bundle.js" // 打包后输出文件的文件名
    },
    module: {
        rules: [
            {
            // js 文件才使用 babel
                test: /\.js$/,
             // 使用哪个 loader
                use: 'babel-loader',
            // 不包括路径
                exclude: /node_modules/
            }
        ]
    }   
  }
