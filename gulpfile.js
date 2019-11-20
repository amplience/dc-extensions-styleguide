const gulp = require('gulp');
const log = require('fancy-log');
const prettier = require('gulp-prettier');
const postcss = require('gulp-postcss');
const stylemark = require('stylemark');
const browser = require('browser-sync').create();
const ghPages = require('gulp-gh-pages');

function generate() {
    log('Generating styleguide');

    stylemark({
        input: 'docs',
        output: 'dist',
        configPath: 'stylemark.yml'
    });
}

gulp.task('build', () => {
    log('Parsing css');

    return gulp
        .src('./styles/**/*.css')
        .pipe(postcss())
        .pipe(prettier())
        .pipe(gulp.dest('./css'))
        .on('end', generate)
});

gulp.task('default', () => {
    log('Watching');

    browser.init({
      server: {
        baseDir: './dist'
      }
    });

    gulp.watch(
        ['./styles/**/*.css', './docs/**/*.md'],
        { ignoreInitial: false },
        gulp.series(['build'])
    )
    .on('change', async function () {
        log('Files changed');
        browser.reload();
    });
});

gulp.task('docs', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});
