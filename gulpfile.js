var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    concatCss = require('gulp-concat-css'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    purgecss = require('gulp-purgecss');

gulp.task('dev-css', function () {
    return gulp.src('./src/css/page.css')
      .pipe(postcss([
        require('tailwindcss'),
        require('autoprefixer'),
      ]))
      .pipe(concatCss('page.css'))
      .pipe(cssnano({
        reduceIdents: false,
        discardComments: {removeAll: true}
      }))
      .pipe(gulp.dest('./static/css/'))
});

gulp.task('build-css', function () {
    return gulp.src('./src/css/page.css')
      .pipe(postcss([
        require('tailwindcss'),
        require('autoprefixer'),
      ]))
      .pipe(purgecss({
        content: ['./layouts/**/*.html','./content/**/*.md'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        whitelist: [':focus', 'button', 'button:focus'],
        // whitelistPatterns: [/(:\w+)/g]
      }))
      .pipe(concatCss('page.css'))
      .pipe(cssnano({
        reduceIdents: false,
        discardComments: {removeAll: true}
      }))
      .pipe(gulp.dest('./static/css/'))
});

gulp.task('watchcss', function() {
  gulp.watch('./src/css/*.css', gulp.series('procss'));
});

gulp.task('dev', gulp.series('dev-css'));

gulp.task('build', gulp.series('build-css'));