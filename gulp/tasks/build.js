var gulp          = require('gulp');
var sequence      = require('run-sequence');

gulp.task('build', function(done) {
    sequence('clean', 'jekyll-build', ['sass', 'trim-css', 'javascript', 'copy'], done);
});
