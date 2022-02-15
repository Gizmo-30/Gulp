import fonter from 'gulp-fonter'; /* Переобразует из otf в ttf */

export const otfToItf = () => {
    // ищем файлы с форматом otf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {}) /* обращение к папке с исходником */
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "FONTS",
        message: "Error: <%= error.message %>"
    })))
    // конвертируем в формат в ttf
    .pipe(fonter({
        formats: ['ttf'],
    }))
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonst/`))
}

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})    
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "FONTS",
        message: "Error: <%= error.message %>"
    })))
    .pipe(fonter({
        formats: ['woff'],
    }))
    .pipe(app.gulp.dest(app.path.build.fonts))
}