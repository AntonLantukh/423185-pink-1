"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var del = require("del");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var beautify = require('posthtml-beautify');
var include = require("posthtml-include");
var server = require("browser-sync").create();
var run = require("run-sequence");

// Стили
gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))

    .pipe(server.stream());
});

// Оптимизация изображений
gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
});

// Конвертация в webp
gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest("build/img"));
});

// Создание спрайта
gulp.task("sprite", function () {
  return gulp.src("source/img/sprite-icons/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"));
});

// Вставка спрайтов в html
gulp.task("html", function () {
  return gulp.src("source/*.html")
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest("build"));
});

// Красивый html
gulp.task("beautify", function() {
  return gulp.src("build/*.html")
    .pipe(posthtml([
      beautify({
        indent: 4,
        blankLines: '0'
      })
    ]))
    .pipe(gulp.dest("build"))
});

// Копирование папок
gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

// Удаление файлов
gulp.task("clean", function () {
  return del("build");
})

// Сервер и вотчер
gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/*.html", ["html"]);
});

// Сборка
gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "style",
    "sprite",
    "webp",
    "html",
    "beautify",
    done
  );
});
