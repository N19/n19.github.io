var path = require('path')
  , gulp = require('gulp')
  , rename = require('gulp-rename')
  , jade = require('gulp-jade')
  , sass = require('gulp-sass')
  , autoprefixer = require('gulp-autoprefixer')
  , uglify = require('gulp-uglify');

var src = {
    html: path.join(__dirname, 'src/jade/**/*.jade')
  , css: path.join(__dirname, 'src/scss/*.scss')
  , js: path.join(__dirname, 'src/js/**/*.js')
};
var dest = {
    html: path.join(__dirname)
  , css: path.join(__dirname, 'assets/css')
  , js: path.join(__dirname, 'assets/js')
};
var tasks = {

  html: function() {
    gulp
      .src(src.html)
      .pipe(jade())
      .pipe(gulp.dest(dest.html));
  },

  css: function() {
    gulp
      .src(src.css)
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(autoprefixer())
      .pipe(rename(function(path) {
        path.basename += '.min';
      }))
      .pipe(gulp.dest(dest.css));
  },

  js: function() {
    gulp
      .src(src.js)
      .pipe(uglify())
      .pipe(rename(function(path) {
        path.basename += '.min';
      }))
      .pipe(gulp.dest(dest.js));
  },

  watch: function() {
    gulp.watch(src.html, ['html']);
    gulp.watch(src.css, ['css']);
    gulp.watch(src.js, ['js']);
  }

};

for (var t in tasks) {
  gulp.task(t, tasks[t]);
}

gulp.task('default', Object.keys(tasks));