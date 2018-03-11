var gulp = require('gulp');
var uncss = require('gulp-uncss');
 
// gulp.task('trim-css', function () {
//     return gulp.src('site.css')
//         .pipe(uncss({
//             html: ['index.html', 'posts/**/*.html', 'http://gottlieb.group']
//         }))
//         .pipe(gulp.dest('./out'));
// });

// Removing unused classes in CSS
gulp.task('trim-css', function() {
	return gulp.src('./assets/css/app.css')
		.pipe(uncss({
		html: ['./_site/**/*.html'],
		ignore: [/fp/],
		timeout: 1000
	}))
	.pipe(gulp.dest('./assets/css/uncss/'));
});