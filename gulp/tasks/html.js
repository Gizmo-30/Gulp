// src() - получает доступ к файлам и папкам по указаному пути
// pipe() - действие
// dest() - вывод результата файла в папку назначения (пунк назначения).
// Если нужно использовать html нужно будет установить плагин gulp-include
import pug from 'gulp-pug';
import versionNumber from 'gulp-version-number'; /* Чтобы данные не кэшировались а обновлялись постоянно */



export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "HTML",
        message: "Error: <%= error.message %>"
    })))
    .pipe(pug())
    .pipe(versionNumber({
        'value': '%DT%', /* Указываем текущую дату */
        'append': {
            'key': '_v',
            'cover': 0,
            'to': ['css', 'js']
        },
        'output': {
            'file': 'gulp/version.json' /* будут хранится ключи */
        }
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}

