var gulp = require('gulp');
var minify = require('gulp-minify-css');
var $gulp = require('gulp-load-plugins')({
    lazy: false
});
server = require('gulp-develop-server');

gulp.task('css', ['clean'], function () {
    return gulp.src(['./app/styles/app.less'])
        .pipe($gulp.less())
        .pipe(minify())
        .pipe($gulp.rev())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('server:start', ['build'], function() {
    "use strict";
    server.listen({path: 'index.js'}, $gulp.livereload.listen);
});

gulp.task('test:server', function() {
    "use strict";
    gulp.src('tests/*.spec.js', {read: false})
        .pipe($gulp.mocha({reporter: 'spec'}))
        .on('error', $gulp.util.log);

    gulp.watch([ 'index.js', 'routes.js', 'tests/*spec.js'], ['test:server']);
});

// restart server if app.js changed
gulp.task('watch', function () {
    gulp.watch([ 'index.js', 'routes.js', 'app/**/*' ], ['server:restart']);
});

// restart server if app.js changed
gulp.task('server:restart', ['build'], function () {
    function restart() {
        server.changed( function( error ) {
            if( ! error ) $gulp.livereload.changed();
        });
    }
    restart();
});

gulp.task('clean', function () {
    return gulp.src(['./build'], {read: false})
        .pipe($gulp.clean());
});


gulp.task('html', ['css', 'clean'], function () {
    return gulp.src('./app/index.html')
        .pipe($gulp.inject(gulp.src(['./build/css/*.css'], {
            read: false
        }), {
            addRootSlash: false,
            ignorePath: 'build'
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('build', ['clean', 'css', 'html']);

gulp.task('default', ['build', 'server:start', 'watch']);