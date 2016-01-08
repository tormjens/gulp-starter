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

// Configuration
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config.json'));

// CLI options
var enabled = {
  // Disable source maps when `--production`
  maps: !argv.production,
  // Fail styles task on error when `--production`
  minify: argv.production,
};

gulp.task('styles', function () {

    var source_dir = config.src_dir + config.styles.src_dir;
    var dest_dir = config.dest_dir + config.styles.dest_dir;
    console.log(dest_dir);

    return gulp.src(source_dir + 'style' + config.styles.extension)
        .pipe( gulpif( enabled.maps, sourcemaps.init() ) )
        .pipe( postcss([ 
            require('postcss-conditionals'),
            require('postcss-import'),
            require('postcss-sassy-mixins'),
            require('postcss-map')({
                basePath: source_dir + 'config/',
                maps: [ 'breakpoints.yml' ]
            }),
        	require('postcss-nested'),
            require('postcss-simple-vars'),
        	require('lost'), 
            require('rucksack-css'),
        	require('autoprefixer'), 
        	require('precss') 
        ]) )
        .pipe( rename('style.css') )
        .pipe( gulpif( enabled.maps, sourcemaps.write('.') ) )
        .pipe( gulpif( enabled.minify, cssnano() ) )
        .pipe( gulp.dest(dest_dir) )
        .pipe( livereload() );
});