var gulp = require('gulp');
var minify = require('gulp-minify-css');
var $gulp = require('gulp-load-plugins')({
    lazy: false
});

gulp.task('css', function () {
    return gulp.src(['./app/styles/app.less'])
        .pipe($gulp.less())
        .pipe(minify())
        .pipe($gulp.rev())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('clean', function () {
    return gulp.src(['./build'], {read: false})
        .pipe($gulp.clean());
});


gulp.task('html', ['css'], function () {
    return gulp.src('./app/index.html')
        .pipe($gulp.inject(gulp.src(['./build/css/*.css'], {
            read: false
        }), {
            addRootSlash: false,
            ignorePath: 'build'
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('build', ['clean'], function() {
    "use strict";
    return gulp.start('css', 'html');
});

gulp.task('default', function() {
    "use strict";
   return gulp.start('build');
});