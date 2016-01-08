/**
 * Created by Frank on 10/26/2015.
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha');

    gulp.task('default',function(){
        nodemon({
            script:'app.js',
            ext:'js',
            env:{
                PORT:8000
            },
            ignore:['*/node_modules/**']
        })
        .on('restart',function(){
            var time = new Date();
           console.log('restarting');
        });
    });

    gulp.task('test',function(){
        gulp.src('tests/*.js',{read:false})
            .pipe(mocha({reporter:'nyan'}))
    });
