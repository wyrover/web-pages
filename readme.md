### 开发多页面的vue脚手架

技术栈: `ES6 + Vue + Webpack + Sass`

发现现在流行的前端框架热衷于追求单页程序spa,每个新项目貌似都是以为一个工程只有一个页面而构建,但是
现实情况是很多项目都是多页面,但也想用到流行的前端框架比如vue,也想进行组件化,然后页面里面的js加上md5,
发现很少有这样的配置,看来只能使用gulp + webpack 进行配置,折腾了几个小时发现webpack真难折腾,本来想用
webpack-dev-server进行代码热替换这个酷炫功能,没想到这个dev-server太难配了,他就是为了但页面而生的,
对多页面...呵呵,最后决定使用一下技术搞定下一步的技术栈

#### 需要的功能

1: js模块化 (webpack)  
2: 页面组件化 (vue + webpack)  
3: 使用sass (gulp || webpack) 
4: 使用es6进行开发 (webpack)  
5: 文件压缩 (gulp)  
6: 小图自动base64,多个小图自动合并雪碧图(尽管很少用) (gulp)    
7: 浏览器自动刷新 (browser-sync)    
8: 页面文件加上md5戳 (gulp)      

### 开发工具

1: gulp 
2: webpack  
3: browser-sync 