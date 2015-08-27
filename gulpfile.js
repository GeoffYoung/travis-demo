var gulp   = require('gulp'),
    uglify = require('gulp-uglify');


gulp.task('js', function() {
  gulp.src('src/js/*')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('default', function() {
  gulp.start('js');
});
