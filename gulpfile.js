var gulp = require("gulp"),
uglify = require("gulp-uglify");

// Scripts task
// Uglifies
gulp.task("scripts", function() {
  gulp.src("src/js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("dist/js"))
});

// Styles task
gulp.task("styles", function() {
  console.log("runs styles");
});

gulp.task("default", ["scripts", "styles"]);
