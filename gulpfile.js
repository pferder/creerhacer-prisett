var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var open = require('open');

var sources = {
    jade: "jade/*.jade",
    stylus: ["styl/styles.styl", "css/*.css"],
    scripts: "js/*.js",
    images: "images/**/*"
};

// Define destinations object
var destinations = {
    html: "www/",
    css: "www/css",
    js: "www/",
    images: "www/images"
};

// Compile and copy Jade
gulp.task("jade", function(event) {
    return gulp.src(sources.jade)
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest(destinations.html))
});

// Compile and copy Stylus
gulp.task("stylus", function(event) {
    return gulp.src(sources.stylus).pipe(stylus({
        style: "compressed"
    })).pipe(gulp.dest(destinations.css));
});

gulp.task("images", function(event) {
    gulp.src(sources.images)
        .pipe(gulp.dest(destinations.images));
});

// Minify and copy all JavaScript
gulp.task('scripts', function() {
    gulp.src(sources.scripts)
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destinations.js));
});

gulp.task('connect', function() {
    connect.server();
});

// Watch sources for change, executa tasks
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(sources.jade, ["jade", "refresh"]);
    gulp.watch(sources.stylus, ["stylus", "refresh"]);
    gulp.watch(sources.scripts, ["scripts", "refresh"]);
});

// Refresh task. Depends on Jade task completion
gulp.task("refresh", ["jade"], function() {
    livereload.changed();
    console.log('LiveReload is triggered');
});

// Define default task
gulp.task("default", ["jade", "stylus", "scripts", "connect", "watch"], function(event){
  open('http://localhost:8080/www');
  });
