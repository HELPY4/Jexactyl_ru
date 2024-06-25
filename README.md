<h1 align="center">Перевод Jexactyl</h1>

[![Logo Image](https://cdn.discordapp.com/attachments/1238497742515601439/1253440389000724561/24.png?ex=6675dcd4&is=66748b54&hm=69271263a6023e12be36398e1bf07841efafd5cb4c4b2e096cfc8c41603bb076&)](https://)

<h5 align="center">
    <strong>

       Автор перевода: helpy4

       Последнее обновление: 23 июня
   </strong>
</h5>

## Что сейчас переведено:

+ Вкладка Сервер/Сеть
+ Частично вкладка Сервер/Файлы
+ Чуть-чуть Тикеты
+ Авторизация (без Дискорда, 2FA, восстановления пароля и регистрации)
+ Все routers, кроме админ панели
+ Список серверов (от лица пользователя)
+ Использование сервера в Сервер/Консоль

## Новое:

+ Несколько улучшений интерфейса (это секрет).

## Зачем?
Я (helpy4) использую Jexactyl и я думаю, что моим клиентам (привет!) хотелось бы видеть панель управления их серверами на родном языке - на русском. Не каждый человек хорошо знает английский человек и я здесь, чтобы помочь им. До этого я переводил плагины Майнкрафт.

## Есть ли ещё какие-то изменения кроме перевода?
Да, я хочу сделать панель удобной и для этого я немного изменил внешний вид панели.

## Есть ли перевод панели администратора?
Нет. Я перевожу только то, что видит клиент (не администратор). Я считаю, что **хороший администратор должен минимально знать английский язык, хотя бы значения слов**. У Вас операционная система не полностью на русском!

## 100% бесплатно?
Нет. Нужно оплатить звёздочкой ;)

## Могу ли я использовать перевод в своих целях?
Да, конечно, но Вам нужно будет его немного подкорректировать (заменить название хостинга). И, пожалуйста, не удаляйте упоминания автора перевода и не выдавайте перевод за свою работу! Давайте уважать друг друга 😉

## Можно потестировать панель на демо сайте?
Да, напишите в Дискорде @helpy4 (не отправляйте запрос в друзья).

## Инструкция по установке:

В будущем будет дополнено. Эта инструкция протестирована, проверена и работает
1) Прочитайте всё, что написано выше. Это важно.
2) Создайте бэкап сервера! За все следущие действия отвечаете только Вы.
3) Скопируйте репозиторий в Вашу папку с установленным Jexactyl (обычно это /var/www/jexactyl).
4) Установите yarn (см. docs.jexactyl.com), но не "билдьте" панель.
5) Теперь нужно установить несколько новых фич. Для этого выполните `php artisan migrate`.
6) `sudo yarn build:production`