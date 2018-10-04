var gulp = require("gulp"),
uglify = require("gulp-uglify"),
sass = require("gulp-sass");

// Scripts task
// Uglifies
gulp.task("scripts", function() {
  gulp.src("src/js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("dist/js"))
});

// Styles task
gulp.task()("styles", function() {
  gulp.src("src/scss/*.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/styles"))
})

gulp.task("default", ["scripts", "styles"]);
