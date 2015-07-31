var gulp = require("gulp");
var gulpInstall = require("gulp-install");
var browserSync = require("browser-sync").create();

gulp.task("install", function(){
	gulp.src(["./package.json", "./bower.json"])
	    .pipe(gulpInstall());
});

gulp.task("browse", function(){
	var option = {
		ui: {
				port:8080
		},
        server: {
				baseDir: "./",
				index: "word_stream.html"
		},
        files: ["./*.css"],
        plugins: [
            {
                module: "bs-html-injector",
                options: {
                    files: ["./*.html"]
                }
            }
        ]
    };
	browserSync.init(option);
});

gulp.task("default", ["browse"]);
