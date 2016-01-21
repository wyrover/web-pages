### 开发多页面的vue脚手架

技术栈: `ES6 + Vue + Webpack + Sass`   

#### 需要的功能

1: js模块化 (webpack)  √     
2: 页面组件化 (vue + webpack) √      
3: 使用sass (gulp || webpack) √   
4: 使用es6进行开发 (webpack)  √   
5: 文件压缩 (gulp)  √   
6: 小图自动base64 (gulp)    √   
7: 浏览器自动刷新 (browser-sync) √       
8: 页面文件加上时间戳 (gulp)      √    

### 开发工具

1: gulp      
2: webpack           
3: browser-sync   

### 目录解析    


--app   
  --css           `打包出来的css`    
  --img           `图片等静态资源`   
  --js            `webpack打包出来的js`    
  --src           `工作目录`    
  --view          `页面文件`    
  --task.js       `要开发那个页面把页面文件写入`    
  
### 使用    

1: `npm install`       

// development    
2: `npm run dev`    
// production   
3: `npm run build`    