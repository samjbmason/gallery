'use strict';

var gulp = require('gulp');
var getLmnTask = require('lmn-gulp-tasks');
var browserSync = require('browser-sync');

var jsOptions = {
  src: './src/js/main.js',
  dest: './dist/js/bundle.js',
}

// Run js through browserify to get all nice and ES6-y!
gulp.task('js', getLmnTask('browserify', jsOptions));

gulp.task('js-watch', getLmnTask('browserify', {
  src: jsOptions.src,
  dest: jsOptions.dest,
  watch: true
}));


// Sass all the files
gulp.task('scss', getLmnTask('scss', {
  src: './src/scss/*.scss',
  dest: './dist/css'
}));

// Move images from src to dist
gulp.task('move-images', getLmnTask('copy', {
  src: './src/imgs/*',
  dest: './dist/imgs',
  rev: false,
  flatten: false
}));

// Final build task to run to get distributable code
gulp.task('build', ['scss', 'js', 'move-images']);

gulp.task('default', ['build', 'js-watch'], function() {
  var config = {
    server: {
      baseDir: '.'
    },
    startPath: '/dist/index.html'
  };

  browserSync.init([
    'dist/**/*.css',
    'dist/**/*.js',
    'dist/**/*.html',
    'dist/imgs/**/*',
    'test/**/*.js'
  ], config);

  gulp.watch('./src/scss/**/*.scss', ['scss']);
});