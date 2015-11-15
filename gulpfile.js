var gulp = require('gulp');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

//PLUGINS
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifyHTML = require('gulp-minify-html');

//TASKS

	// --LESS
	gulp.task('less', function () {
	  return gulp.src('source/less/*.less')
	    .pipe(less({ paths: [ 'source/less'] }))
	    .pipe(autoprefixer())
	    .pipe(minifyCSS())
	    .pipe(rename('style.css'))
	    .pipe(gulp.dest('_build/source/css'))
	    .pipe(browserSync.reload({stream:true}))
	});

	// -- CSS
	gulp.task('css', function () {
	  return gulp.src([
	  	'bower_components/bootstrap-css/css/bootstrap.min.css',
	  	'source/css/*.css'
	  	])
	    .pipe(gulp.dest('_build/source/css'))
	});

	// --BOOTSTRAP FONTS
	gulp.task('fonts', function () {
	  return gulp.src('bower_components/bootstrap-css/fonts/*')
	    .pipe(gulp.dest('_build/source/fonts'))
	});

	// --HMTL
	/*gulp.task('html', function() {
	  gulp.src('source/jade/*.jade')
	    .pipe(jade())
	    .pipe(gulp.dest('_build'))
	    .pipe(browserSync.reload({stream:true}))
	});*/
	gulp.task('html', function() {
	  gulp.src('source/index.html')
	    .pipe(gulp.dest('_build'))
	    .pipe(browserSync.reload({stream:true}))
	});

	// --JS
	gulp.task('js', function() {
		gulp.src([
		    'bower_components/jquery/dist/jquery.js',
		    'bower_components/bootstrap-css/js/bootstrap.js',
		    'source/js/ekko-lightbox.min.js',
		    'source/js/jquery.easing.min.js',
		    'source/js/scripts.js'
		  ])
	    .pipe( concat('scripts.min.js') ) // concat pulls all our files together before minifying them
	    .pipe(uglify())
	    .pipe(gulp.dest('_build/source/js'))
	});

	// --IMAGE MIN
	gulp.task('img', function () {
	    return gulp.src('source/images/*')
	        .pipe(imagemin({
	            progressive: true,
	            svgoPlugins: [{removeViewBox: false}],
	            use: [pngquant()]
	        }))
	        .pipe(gulp.dest('_build/source/images'));
	});

	// -- MINIFY HTML
	gulp.task('minify-html', function() {
	  var opts = {
	    conditionals: true,
	    spare:true
	  };
	 
	  return gulp.src('source/*.html')
	    .pipe(minifyHTML(opts))
	    .pipe(gulp.dest('./_build/'))
	    .pipe(browserSync.reload({stream:true}))
	});

	// --WATCH
	gulp.task('watch', function () {
	   gulp.watch('source/less/*.less', ['less']);
	   //gulp.watch('source/jade/*.jade', ['html']);
	   gulp.watch('source/index.html', ['minify-html']);
	   gulp.watch('source/images/*', ['img']);
	   gulp.watch('source/js/*', ['js']);
	});


	// * * * //

	// --BROWSER SYNC
	gulp.task('browser-sync', function() {
	  browserSync({
	    server: {
	      baseDir: "_build"
	    }
	  });
	});


	// --START
	gulp.task('start', ['browser-sync', 'watch']);


	// * * * //

	// --DEFAULT
	gulp.task('default', ['css', 'html', 'js', 'bootstrap', 'fonts']);