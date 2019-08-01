# webNav 网址导航
## 功能
- 点击键盘对应字母即可跳转到网站，可以修改字母对应的网站   
- 搜索功能，google(需FQ)、bing、百度三个搜索方式供用户选择


## webpack的使用

### 本项目结构

![项目结构](https://i.loli.net/2018/04/08/5aca0c7440db0.png)

使用命令行 `npm init` 会在项目中生成 **package.json** 文件，这个文件中记录了项目的一些信息

```
{
  "name": "webNav",
  "version": "1.0.0",
  "description": "网站导航页",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/clydeqin7/webNav.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/clydeqin7/webNav/issues"
  },
  "homepage": "https://github.com/clydeqin7/webNav#readme",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.6.1",
    "file-loader": "^1.1.11",
    "url-loader": "^1.0.1",
    "webpack": "^4.5.0",
    "webpack-cli": "^2.0.14"
  }
}
```

创建一个 **webpack.config.js** 文件，在文件中配置webpack相关信息

```
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
```

**babel**将ES6转化成ES5语法





