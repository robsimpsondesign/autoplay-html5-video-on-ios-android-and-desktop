import autoprefixer from 'gulp-autoprefixer';
import gulp from 'gulp';
import include from 'gulp-file-include';
import sass from 'gulp-sass';
import server from 'gulp-server-livereload';

// Directory paths
const src = './source';
const dist = './build';

const srcpaths = {
	html: `${src}/html`,
	css: `${src}/sass`,
	js: `${src}/js`,
    img: `${src}/img`,
    fonts: `${src}/fonts`
};

const distpaths = {
	html: `${dist}`,
	css: `${dist}/css`,
	js: `${dist}/js`,
    img: `${dist}/img`,
    fonts: `${dist}/fonts`
};

// Compile HTML
gulp.task('html', () => {
	gulp.src([`${srcpaths.html}/*.html`])
		.pipe(include({
			prefix: '@',
			basepath: srcpaths.html,
			indent: true
		}))
		.pipe(gulp.dest(distpaths.html));
});

// Compile SASS to CSS
gulp.task('css', () => {
    gulp.src(`${srcpaths.css}/**/*.scss`)
		.pipe(sass({
			indentType: 'tab',
			indentWidth: 1,
			outputStyle: 'expanded'
		}))
        .pipe(autoprefixer({browsers: ['ie >= 11', 'ie_mob >= 11', 'ff >= 30', 'chrome >= 34', 'safari >= 7', 'opera >= 23', 'ios >= 7', 'android >= 4.4', 'bb >= 10']}))
		.pipe(gulp.dest(distpaths.css));
});

// Run livereload server
gulp.task('server', () => {
	gulp.src(dist)
		.pipe(server({
			livereload: true,
			open: true
	  	}));
  });

gulp.task('default', ['html', 'css', 'server'], () => {
	gulp.watch(`${srcpaths.html}/**/**/*.html`, ['html']);
	gulp.watch(`${srcpaths.css}/**/*.scss`, ['css']);
});