var gulp = require('gulp') ;
var livereload = require('gulp-livereload') ;

gulp.task('watch', function() {
  livereload.listen({'basepath' : 'src'}) ;
//   gulp.watch('src/**/*.js');
});

gulp.task('run.dev', function(){

})