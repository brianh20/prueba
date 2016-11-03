var gulp = require('gulp'),
		jshint = require('gulp-jshint')
		stylish = require('jshint-stylish'),
		less = require('gulp-less'),
		concat = require('gulp-concat'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;
/*
gulp.task('jshint', function(){
	return gulp.src('./src*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
}) ;*/

gulp.task('watch', function(){
	gulp.watch('*.js', reload);
	gulp.watch('*.html', reload);
	gulp.watch('webapp/*.js', reload);
	gulp.watch('webapp/*.html', reload);
	gulp.watch('webapp/*.json', reload);
	gulp.watch('webapp/controller/*.js', reload);
	gulp.watch('webapp/model/*.js', reload);
	gulp.watch('webapp/view/*.xml', reload);
	gulp.watch('webapp/css/style.css', reload);
});

/*
gulp.task('less', function() {
    return gulp.src('./srcless')
	    .pipe(sourcemaps.init())
	    .pipe(less())
	    .pipe(concat('bundle.css'))
	    .pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('./src/styles/css'));
});*/

gulp.task('serve', function(){
	browserSync({
		server:{
			baseDir: ['./webapp'],
      routes : {
        '/bower_components' : 'bower_components'
      }
		}
	});
  gulp.start('watch');
});

gulp.task('default', ['serve', 'watch']);
