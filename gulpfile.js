const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest('./dist/css'))
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function text() {
    return gulp.src('./src/text/**/*')
        .pipe(gulp.dest('./dist/text'))
}

exports.default = gulp.parallel(styles, images, text);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
};
