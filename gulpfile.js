var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var runSequence = require('run-sequence');





gulp.task('clean', function(callback) {
    del('compiled', {force:true}, callback);
});

gulp.task("test-transpile0", function() {
   return gulp.src("src/**/*.ts") 
    .pipe(sourcemaps.init())
    .pipe(typescript(
        {
            target:'ES5'
        })).js
    .pipe(sourcemaps.write('./', {
        includeContent:false
    }))
    .pipe(gulp.dest("compiled/test0"));
});

gulp.task("test-transpile1", function() {
   return gulp.src("src/**/*.ts") 
    .pipe(sourcemaps.init())
    .pipe(typescript(
        {
            target:'ES5'
        })).js
    .pipe(sourcemaps.write('./', {
        sourceRoot:'../..src/', 
        includeContent:false
    }))
    .pipe(gulp.dest("compiled/test1"));
});

gulp.task("test-transpile2", function() {
   return gulp.src("src/**/*.ts") 
    .pipe(sourcemaps.init())
    .pipe(typescript(
        {
            sourceRoot:'../..src/',
            target:'ES5'
        })).js
    .pipe(sourcemaps.write('./', {
         
        includeContent:false
    }))
    .pipe(gulp.dest("compiled/test2"));
});

gulp.task("test-transpile3", function() {
   return gulp.src("src/**/*.ts") 
    .pipe(sourcemaps.init())
    .pipe(typescript(
        {
            sourceRoot:'../..src/',
            target:'ES5'
        })).js
    .pipe(sourcemaps.write('./', {
        sourceRoot:'../..src/', 
        includeContent:false
    }))
    .pipe(gulp.dest("compiled/test3"));
});


gulp.task("default", function() {
    runSequence('clean','test-transpile0','test-transpile1','test-transpile2','test-transpile3');
});