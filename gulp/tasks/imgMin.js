const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');

module.exports = function imgMin() {
 /* return gulp.src('src/img/!*.{gif,png,jpg,svg,webp}')
             /!*.pipe(imagemin([
                              imagemin.gifsicle({interlaced: true}),
                              imagemin.mozjpeg({
                                                 quality: 75,
                                                 progressive: true
                                               }),
                              imagemin.optipng({optimizationLevel: 5}),
                              imagemin.svgo({
                                              plugins: [
                                                {removeViewBox: true},
                                                {cleanupIDs: false}
                                              ]
                                            })
                            ]))*!/
             .pipe(gulp.dest('build'));*/
  return gulp.src('src/img/*.png')
             .pipe(gulp.dest('build/icons/'));
};