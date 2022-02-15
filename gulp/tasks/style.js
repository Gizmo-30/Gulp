
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries'; /* Группировка media зпросов */
import autoPrefixer from 'gulp-autoprefixer'; /* Добавление префиксов */
import rename from 'gulp-rename'; /* изменение имени файла */
const sass = gulpSass(dartSass);

export const style = () => {
    return app.gulp.src(app.path.src.style, {sourcemaps: true}) /* sourcemaps - нужен вносить быстрые правки. Карты исходников */
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "CSS",
        message: "Error: <%= error.message %>"
    })))
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowserlist: ["last 3 version"], /* Поддержка версий браузера. Последнии 3 версии */
        cascade: true
    }))
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.style))
    .pipe(app.plugins.browsersync.stream())
}