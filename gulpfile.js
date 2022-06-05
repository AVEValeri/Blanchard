const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const ttf2woff2 = require('gulp-ttf2woff2')
const image = require('gulp-image')
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const uglify = require('gulp-uglify-es').default
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()
const cheerio = require('gulp-cheerio')
const fileinclude = require('gulp-file-include')

const clean = () => {
  return del(['dist'])
}

const resources = () => {
  return (src('src/resources/**'))
    .pipe(dest('dist'))
}

const fonts = () => {
  return src('src/fonts/**/*.ttf')
    .pipe(ttf2woff2())
    .pipe(dest('dist/fonts/'))
}

const styles = () => {
  return src('src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', notify.onError()))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/styles'))
    .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src('src/index.html')
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
  return src('src/images/svg/**/*.svg')
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        },
      }
    }))
    .pipe(dest('dist/images'))
}

const scripts = () => {
  return src([
    'src/js/components/**/*.js',
    'src/js/vendor/**/*.js',
    'src/js/main.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const images = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.png',
    'src/images/**/*.svg',
    'src/images/*.svg',
    'src/images/**/*.jpeg',
  ])
    .pipe(image())
    .pipe(dest('dist/images'))
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/**/*.html', htmlMinify)
watch('src/**/*.scss', styles)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)
watch('src/images/**/*.jpg', images)
watch('src/images/**/*.png', images)
watch('src/images/*.svg', svgSprites)
watch('src/images/**/*.jpeg', images)
watch('src/images/**/*.svg', images)
watch('src/fonts/**/*.ttf', fonts)

exports.scripts = scripts
exports.styles = styles
exports.htmlMinify = htmlMinify

exports.default = series(clean, resources, htmlMinify, fonts, scripts, styles, images, svgSprites, watchFiles)