'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('favicon', function() {

  return gulp.src(config.favicon.src)
    .pipe(changed(config.favicon.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.favicon.dest))
    .pipe(browserSync.stream());

});
