var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('serve', function(){
	browserSync({
		server:{
			baseDir: ['./'],
      routes : {
        '/bower_components' : 'bower_components'
      }
		}
	});
  gulp.start('watch');
});

gulp.task('default', ['serve']);
