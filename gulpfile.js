var gulp = require("gulp");
var fixmyjs = require("gulp-fixmyjs");
var jshint = require("gulp-jshint");


gulp.task("fixmyjs", function () {
  gulp.src("./script.js")
  .pipe(fixmyjs({

  }))
  .pipe(gulp.dest("./"));
});

gulp.task("jslint", function () {
  return gulp.src("./section-4/script.js")
  .pipe(jslint({
    browser: true,
    devel: true,
    global: ["$", "window"]
  }))
  .pipe(jslint.reporter("default"));
});
