



var gulp = require('gulp');
var eslint = require('gulp-eslint');

var FILES = [
  'gulpfile.js',
  'src/components/*.js',
  'src/data/*.js',
  'src/pages/*.js',
  'src/images/*.js'
];

gulp.task('eslint', function () {
  return gulp.src(FILES).pipe(eslint()).pipe(eslint.format());
});

gulp.task('default', function () {
});