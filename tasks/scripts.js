// Global Modules
var gulp       = require('gulp');
var rename     = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var gulpif     = require('gulp-if');
var argv       = require('minimist')(process.argv.slice(2));
var livereload = require('gulp-livereload');
var concat     = require('gulp-concat');
var gutil      = require('gulp-util');

// Scripts Modules
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var coffeeify = require('coffeeify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');

// CLI options
var enabled = {
  // Disable source maps when `--production`
  maps: !argv.production,
  // Fail styles task on error when `--production`
  minify: argv.production,
};

gulp.task('scripts', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
      extensions: ['.coffee']
    });

    b.transform(coffeeify, {
      bare: false,
      header: true
    });

    b.add('./src/scripts/app.coffee')

    return b.bundle()
      .pipe(source('./src/scripts/app.coffee'))
      // .pipe( gulpif( enabled.maps, sourcemaps.init({ loadMaps: true }) ) )
      .pipe( gulpif( enabled.minify, uglify() ) )
      .on('error', gutil.log)
      .pipe( rename('scripts.js') )
      // .pipe( gulpif( enabled.maps, sourcemaps.write('.') ) )
      .pipe( gulp.dest('./build/js/') )
      .pipe( livereload() );
});