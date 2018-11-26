var gulp 			= require('gulp');
var browserSync 	= require('browser-sync'); // BROWSER SYNC
var reload 			= browserSync.reload;

var sass 			= require('gulp-sass');
var autoprefixer 	= require('gulp-autoprefixer');

// Sass caminho
var scssPasta = ['site/assets/scss/**/*.scss','site/assets/scss/*.scss'];

// CSS destino 
var cssDest = 'site/assets/css/';

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
  //outputStyle: 'expanded'
}

gulp.task('serve', function() {
  browserSync.init(['site/**/*.html','site/assets/css/**/*.css', 'site/assets/js/**/*.js'], {
    server: {
      baseDir :'site'
    }
  })
});

gulp.task('sassprod', function() {
  return gulp.src(scssPasta)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    //.pipe(rename('brweek.css'))
    .pipe(gulp.dest(cssDest));
});


gulp.task('watch', ['serve', ], function() {
	gulp.watch(scssPasta, ['sassprod']);

} );

gulp.task('default', ['watch', 'sassprod']);
