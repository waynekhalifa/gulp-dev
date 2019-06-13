var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');

const STYLES_SRC = './src/styles/style.scss';
const STYLE_DEST = './public/assets/css/';

function styles() {
    return gulp.src(STYLES_SRC)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(STYLE_DEST));
}

module.exports = styles;