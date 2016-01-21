var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var webpack = require('gulp-webpack')
var realWebpack = require('webpack')
var del = require('del')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var replace = require('gulp-replace')

const ENTRY_DIR = './src/view/'
var task = require('./task.js')

// static server 静态资源服务器
gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './'
    },
    ui: {
      port: 8081,
      weinre: {
        port: 9090
      }
    },
    port: 8080,
    startPath: 'view/' + Object.keys(task)[0] + '.html'
  })

  gulp.watch(['view/*.html', 'js/*.js', 'css/*.css']).on('change', browserSync.reload)
})

// webpack处理js
var webpackConfig = {
  watch: true,
  entry: task,
  output: {
    filename: '[name].js',
    chunkFilename: '../js/[name].chunk.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '../img/[name].[ext]?[hash]'
        }
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  devtool: '#source-map',
  plugins: [
    new realWebpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
  ]
}
//  指定打包公共资源库
webpackConfig.entry.vendor = ['vue']

gulp.task('webpack-dev', () => {
  return gulp.src(ENTRY_DIR + 'Index/index.js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest('js/'))
})

gulp.task('webpack-prod', () => {
  webpackConfig.devtool = false
  webpackConfig.watch = false
  webpackConfig.plugins = [
    new realWebpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new realWebpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new realWebpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
  return gulp.src(ENTRY_DIR + 'Index/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('js/'))
})
// 清理map
gulp.task('clean:map', (cb) => {
  del(['js/*.map'], cb)
})
// html文件加时间戳
gulp.task('timestamp', () => {
  var date = new Date().getTime()
  gulp.src('view/' + Object.keys(task)[0] + '.html')
      .pipe(replace(/_VERSION_/gi, date))
      .pipe(gulp.dest('view/'))
})

// 处理全局性的css和js  一般这个任务很少用 主要用来生成全局性的东西
gulp.task('global:css', () => {
  gulp.src('./src/sass/global.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./css'))
})
gulp.task('global:js', () => {
  gulp.src(['./src/module/global.js', './src/module/global2.js'])
      .pipe(concat('global.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./js'))
})

gulp.task('global', ['global:css', 'global:js'])
// 开发环境
gulp.task('dev', ['webpack-dev', 'server'])
// 生产环境
gulp.task('build', ['webpack-prod', 'clean:map', 'timestamp'])