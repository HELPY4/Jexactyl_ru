<h1 align="center">Русский Jexactyl</h1>

Представьте, что это зелёный дракон с медведями, караваем и балалайкой.
[![Logo Image](https://cdn.discordapp.com/attachments/1238497742515601439/1253440389000724561/24.png?ex=6675dcd4&is=66748b54&hm=69271263a6023e12be36398e1bf07841efafd5cb4c4b2e096cfc8c41603bb076&)](https://)

<h5 align="center">
    <strong>

       Автор перевода: helpy4

       Последнее обновление перевода: 14 июля
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
Да, я хочу сделать панель удобной и для этого я немного изменил внешний вид панели. Например, я добавил progress bar как на ПК в мобильную версию панели и добавил отображение названий серверов (вместо пустых прямоугольников) в мобильной версии панели.

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
3) Скопируйте репозиторий в Вашу папку с установленным Jexactyl (обычно это /var/www/jexactyl):

`sudo apt install git` Установка git (если не установлен)

`cd /var/www/jexactyl` Перемещение в папку Jexactyl. У Вас может быть другой путь до папки панели.

`git clone https://github.com/HELPY4/Jexactyl_ru` Копирование перевода в папку `/var/www/jexactyl/Jexactyl_ru`

`cd Jexactyl_ru` Перемещение в папку Jexactyl_ru (здесь можно написать `cd J` и нажать Tab)

`sudo cp -r * /var/www/jexactyl` Копирование файлов. `-r` копирует все файлы и папки, что находятся в текущей папке. **Важно:** не удаляйте *, иначе все файлы в /var/www/jexactyl будут удалены (случайно проверено автором перевода).

`cd ..` Возвращение в `/var/www/jexactyl`

`sudo rm -r Jexactyl_ru` Удаление папки Jexactyl_ru. Это нужно сделать для избежания ошибки git во время следующего копирования перевода "Папка Jexactyl_ru уже существует и не пуста".

4) Установите yarn (см. docs.jexactyl.com), но не "билдьте" панель.
5) `sudo yarn build:production`
6) Если при входе в панель Вы получаете ошибку 500, почините права на файлы.