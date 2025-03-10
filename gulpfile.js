const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

// Compile SCSS into CSS
function compileSass() {
  return gulp
    .src("./assets/raw/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest("./assets/css"));
}

// Minify JavaScript files
function minifyScripts() {
  return gulp
    .src("./assets/raw/js/*.js")
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./assets/js"));
}

// Watch for changes in SCSS and JS files
function watchFiles() {
  gulp.watch("./assets/raw/scss/**/*.scss", compileSass);
  gulp.watch("./assets/raw/js/*.js", minifyScripts);
}

// Define default task
exports.default = gulp.series(
  gulp.parallel(compileSass, minifyScripts),
  watchFiles
);

// Export individual tasks
exports.compileSass = compileSass;
exports.minifyScripts = minifyScripts;
exports.watch = watchFiles;
