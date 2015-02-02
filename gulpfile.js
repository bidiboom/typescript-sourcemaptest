var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var util = require("gulp-util");

var del = require('del');
var runSequence = require('run-sequence');
var exec = require("child_process").exec;
var glob = require("glob");




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

gulp.task("test-transpile4", function() {
   return gulp.src("src/**/*.ts") 
    .pipe(sourcemaps.init())
    .pipe(typescript(
        {
            sourceRoot:"",
            target:'ES5'
        })).js
    .pipe(sourcemaps.write('./', {
        includeContent:false
    }))
    .pipe(gulp.dest("compiled/test4"));
});

gulp.task("test-transpile5", function(callback) {
    glob("src/**/*.ts",function (err, files) {
        if (err) {
            util.log("error : " + err);
            throw new util.PluginError('build', "unable to handle tranpiling " + err);
        }
        exec(
            'node node_modules/typescript/bin/tsc --outDir compiled/test5 --sourceMap ""'+ files.join(" "), 
            function (error, stdout, stderr) {
                if (error) {
                    throw new util.PluginError('build', 'unable to launch node tsc : ' + error);
                }
                
                util.log("transpiling finished");
                callback();
            }
        );
        
    });
    
});

gulp.task("default", function(cb) {
    runSequence('clean','test-transpile0','test-transpile1','test-transpile2','test-transpile3','test-transpile4','test-transpile5',cb);
});