import plumber from 'gulp-plumber'; /* Обработка ошибок */
import notify from 'gulp-notify'; /* Сообщения (подсказки) */
import browsersync from 'browser-sync'; /* этот плагин для открытия браузера и перезагрузки */
import newer from 'gulp-newer'; /* Проверка обновлений. Проверяем есть ли у нас такая картинка */

// экспортируем объект
export const plugins = {
    plumber,
    notify,
    browsersync,
    newer
}