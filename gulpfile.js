var gulp = require('gulp');
var path = require('path');
var minify = require('gulp-minify-css');
var $gulp = require('gulp-load-plugins')({
    lazy: false
});
server = require('gulp-develop-server');
var prependBowerPath = function (packageName) {
    return path.join('./app/bower_components/', packageName);
};

var vendors = ['angular/angular.js']
    .map(prependBowerPath);

var appScripts = ['app/app.js'];

gulp.task('clean', ['clean:js', 'clean:css']);

gulp.task('jshint', function () {
    return gulp.src(['app/app*.js'])
        .pipe($gulp.jshint())
        .pipe($gulp.jshint.reporter('default'));

});

gulp.task('clean:js', function () {
    return gulp.src(['./build/js'], {read: false})
        .pipe($gulp.rimraf());
});
gulp.task('clean:css', function () {
    return gulp.src(['./build/css'], {read: false})
        .pipe($gulp.rimraf());
});

gulp.task('css', ['clean:css'], function () {
    return gulp.src(['./app/styles/app.less'])
        .pipe($gulp.less())
        .pipe(minify())
        .pipe($gulp.rev())
        .pipe(gulp.dest('build/css/'))
        .pipe($gulp.size({showFiles: true}));
});

gulp.task('vendors', ['clean:js'], function () {
    return gulp.src(vendors)
        .pipe($gulp.uglify())
        .pipe($gulp.concat('vendors.min.js'))
        .pipe($gulp.rev())
        .pipe(gulp.dest('build/js/'))
        .pipe($gulp.size({showFiles: true}));
});

gulp.task('js', ['clean:js', 'jshint'], function () {
    return gulp.src(appScripts)
        .pipe($gulp.uglify())
        .pipe($gulp.concat('app.min.js'))
        .pipe($gulp.rev())
        .pipe(gulp.dest('build/js/'))
        .pipe($gulp.size({showFiles: true}));
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
});

gulp.task('test:server:watch', function() {
    "use strict";
    gulp.start('test:server');
    gulp.watch([ 'index.js', 'routes.js', 'tests/*spec.js'], ['test:server']);
});

// restart server if app.js changed
gulp.task('watch', function () {
    gulp.watch([ 'index.js', 'routes.js', 'app/**/*' ], ['server:restart']);
    gulp.watch(['app/app*.js'], ['jshint']);
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



gulp.task('html', ['css', 'vendors', 'js', 'clean'], function () {
    return gulp.src('./app/index.html')
        .pipe($gulp.inject(gulp.src(['./build/css/app*'], { read: false }), {
            addRootSlash: false,
            ignorePath: 'build'
        }))
        .pipe($gulp.inject(gulp.src(['./build/js/vendors*'], { read: false }), {
            addRootSlash: false,
            ignorePath: 'build', name: 'vendors'
        }))
        .pipe($gulp.inject(gulp.src(['./build/js/app*'], { read: false }), {
            addRootSlash: false,
            ignorePath: 'build', name: 'app'
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('build', ['clean', 'vendors', 'js', 'css', 'html']);

gulp.task('default', ['build', 'server:start', 'watch']);