export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}` /* бозовая папка откуда нужно запустить файл */
        },
        notify: false,
        port: 3000
    })
}