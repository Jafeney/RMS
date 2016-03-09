'use strict';

var gulp = require('gulp'),                         // gulp核心模块
	DEST = 'public',                                // 编译目录 
	CSS_DEST = 'public/css',                        // css编译目录
	JS_DEST = 'public/js',                          // js编译目录
	IMG_DEST = 'public/img',                        // img编译目录
	HTML_DEST = 'public/html',                      // html编译目录
	WEB_PORT = 9000,                                // 服务器监听的端口
	$ = require('gulp-load-plugins')();             // gulp插件加载模块

// 处理less
gulp.task('styles', function() {
	return gulp.src('src/less/**/*.less')
		.pipe($.less())
		.pipe($.autoprefixer('last 2 version','safari 5','ie 8','ie 9','opera 12.1','ios 6','android 4'))
		.pipe(gulp.dest(CSS_DEST))
		.pipe($.rename({
			suffix: '.min'
		}))
		.pipe($.minifyCss())
		.pipe(gulp.dest(CSS_DEST))
		.pipe($.livereload())
		.pipe($.notify({
			message: 'Styles task complete'
		}));
});

// 处理javascript 
gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		.pipe($.jshint('.jshintrc'))
		.pipe($.jshint.reporter('default'))
		.pipe($.browserify())
		.pipe(gulp.dest(JS_DEST))
		.pipe($.rename({
			suffix: '.min'
		}))
		.pipe($.uglify())
		.pipe(gulp.dest(JS_DEST))
		.pipe($.livereload())
		.pipe($.notify({
			message: 'Scripts task complete'
		}));
});

// 处理图片
gulp.task('images', function() {
	return gulp.src('src/img/**/*')
		.pipe($.cache($.imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		})))
		.pipe(gulp.dest(IMG_DEST))
		.pipe($.livereload())
		.pipe($.notify({
			message: 'Images task complete'
		}))
});

// 处理html
gulp.task('htmls', function() {
	return gulp.src('src/html/**/*.html')
		.pipe($.rename({
			suffix: '.min'
		}))
		.pipe($.minifyHtml())
		.pipe(gulp.dest(HTML_DEST))
		.pipe($.livereload())
		.pipe($.notify({
			message: 'Htmls task complete'
		}))
});

// 清理build目录
gulp.task('clean', function() {
	return gulp.src([HTML_DEST,JS_DEST,CSS_DEST,IMG_DEST], {
		read: false
	})
	.pipe($.clean())
	.pipe($.notify({
		message: 'Clean task complete'
	}));
});

// 设置服务器
gulp.task('http', function() {
    $.connect.server({
        root: DEST,
        port: WEB_PORT,
        livereload: true
    });
});

// 监听文件变化
gulp.task('watch', function() {

	// 监听livereload
	$.livereload.listen();

	// 监听less
	gulp.watch('src/less/**/*.less', ['styles']);

	// 监听js
	gulp.watch('src/js/**/*.js', ['scripts']);

	// 监听图片
	gulp.watch('src/img/**/*', ['images']);

	// 监听html
	gulp.watch('src/html/**/*.html', ['htmls']);

});

// build任务
gulp.task('build', function(cb){
	$.sequence('clean',['styles','scripts','images','htmls','watch'])(cb)
});

// 主任务
gulp.task('main', function(cb){
	$.sequence('build', ['http'])(cb)
});

// 默认任务
gulp.task('default',['main']);











