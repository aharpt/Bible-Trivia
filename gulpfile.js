var gulp = require("gulp");
var fixmyjs = require("gulp-fixmyjs");
var jshint = require("gulp-jshint");


gulp.task("fixmyjs", function () {
  gulp.src("./new-testament/script.js")
  .pipe(fixmyjs({

  }))
  .pipe(gulp.dest("./new-testament"));
});
