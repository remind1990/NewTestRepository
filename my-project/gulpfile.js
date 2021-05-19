gulp.task("watch", ["browserSync", "sass"], function () {
  gulp.watch("app/scss/**/*.scss", ["sass"]);
  gulp.watch("app/*.html", browserSync.reload);
  gulp.watch("app/js/**/*.js", browserSync.reload);
});
gulp.task("html", function () {
  return gulp
    .src("app/*.html")
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulp.dest("dist"));
});
gulp.task("default", function (callback) {
  runSequence(["sass", "browserSync", "watch", "html"], callback);
});
