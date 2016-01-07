var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
	livereload.listen();

	gulp.watch('./src/styles/**/*.scss', ['css']);
	gulp.watch('./src/templates/**/*.jade', ['templates']);
	gulp.watch('./src/scripts/**/*.coffee', ['scripts']);
});