var gulp = require('gulp');
var $gulp = require('gulp-load-plugins')({
    lazy: false
});

gulp.task('css', function () {
    gulp.src(['./app/styles/app.less'])
        .pipe($gulp.less())
        .pipe(gulp.dest('build/css/'));
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

