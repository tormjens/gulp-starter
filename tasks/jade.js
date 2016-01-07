// Global Modules
var gulp       = require('gulp');
var rename     = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var gulpif     = require('gulp-if');
var argv       = require('minimist')(process.argv.slice(2));
var livereload = require('gulp-livereload');

// Jade Modules
var jade = require('gulp-jade');

// CLI options
var enabled = {
  // Disable source maps when `--production`
  maps: !argv.production,
  // Fail styles task on error when `--production`
  minify: argv.production,
};

gulp.task('templates', function() {
  gulp.src( './src/templates/**/*.jade' )
    .pipe( jade({
    	compileDebug: false,
    	pretty: !enabled.minify
    }) )
    .pipe( rename(function(path) {
    	path.extname = '.html'; // change to something else
    }) )
    .pipe( gulp.dest('./build/') ) 
    .pipe( livereload() )
});