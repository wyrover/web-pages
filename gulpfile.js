var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var webpack = require('gulp-webpack')
var realWebpack = require('webpack')
var del = require('del')

const ENTRY_DIR = './src/view/'

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
    startPath: 'view/'
  })

  gulp.watch(['view/*.html', 'js/*.js', 'css/*.css']).on('change', browserSync.reload)
})

// webpack处理js
var task = require('./task.json')
var webpackConfig = {
  watch: true,
  entry: task,
  output: {
    filename: '[name].js'
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
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  devtool: '#source-map'
}

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

// 开发环境
gulp.task('dev', ['webpack-dev', 'server'])

// 生产环境
gulp.task('build', ['webpack-prod', 'clean:map'])