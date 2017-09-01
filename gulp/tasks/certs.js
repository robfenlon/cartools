'use strict';

import gulp   from 'gulp';

gulp.task('certs', function() {
   
  return gulp.src('*.pem')
    .pipe(gulp.dest('./build'));
  
});
