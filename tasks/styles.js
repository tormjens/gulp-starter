// Global Modules
var gulp       = require('gulp');
var rename     = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var gulpif     = require('gulp-if');
var argv       = require('minimist')(process.argv.slice(2));
var livereload = require('gulp-livereload');

// CSS Modules
var postcss    = require('gulp-postcss');
var cssnano    = require('gulp-cssnano');

// CLI options
var enabled = {
  // Disable source maps when `--production`
  maps: !argv.production,
  // Fail styles task on error when `--production`
  minify: argv.production,
};

gulp.task('styles', function () {

    return gulp.src('src/styles/style.scss')
        .pipe( gulpif( enabled.maps, sourcemaps.init() ) )
        .pipe( postcss([ 
        	require('postcss-nested'),
        	require('postcss-simple-vars'),
        	require('postcss-import'),
        	require('lost'), 
        	require('autoprefixer'), 
        	require('precss') 
        ]) )
        .pipe( rename('style.css') )
        .pipe( gulpif( enabled.maps, sourcemaps.write('.') ) )
        .pipe( gulpif( enabled.minify, cssnano() ) )
        .pipe( gulp.dest('build/css/') )
        .pipe( livereload() );
});