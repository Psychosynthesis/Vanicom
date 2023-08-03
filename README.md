# Vanicom.js
[![npm version](https://img.shields.io/npm/v/vanicom?color=%23047dec)](https://www.npmjs.org/package/vanicom)


## Introductory

Vanicom (vanilla commons) is a microframework that was conceived as a library
with small helper functions more commonly used in small projects, written in
[vanilla](http://vanilla-js.com/) JavaScript without external dependencies.

The library is focused on support in browsers no lower than IE9, so some of the
most requested ES6 functions are implemented as polyfills, which also
allows you to use Vanicom as a small helper for projects which don't using bundlers
like Babel or Webpack.

### Using as module
First add the library package with npm: \
`npm i vanicom`

For use in your applications, simply import all the functions from the library: \
`import * as Vanic from 'vanicom';`

Or import only neccessary: \
`import { logg, getRandomString } from 'vanicom';`

### Using as a standalone lib/helper
To use as a standalone library, download `vanicom.min.js`
[from last releases](https://github.com/Psychosynthesis/Vanicom/releases) and import it like this: \
 `<script type="text/javascript" src="vanicom.min.js"></script>`

Please note that it is desirable to import the Vanicom first or one of the first.

After that all functions will be available on global scope everywhere on page: \
`<script type="text/javascript">` \
`logg(getRandomString(3)); // print some random string for length 3` \
`</script>`

### Description and examples
`logg('Is just a shortname for console.log'); // No comments`

Checking if a variable is a string (just for convenience): \
`isString(4); // false` \
`isString('absolute string'); // true`

Checking if a variable is a object: \
`isObject(() => {}); // false` \
`isObject([]); // false`

Exists and is not null (obviously nowhere): \
`isExistAndNotNull(null); // false` \
`var testUndef;` \
`isExistAndNotNull(testUndef); // false`

Get random number. Can be used with or without arguments.
The first argument specifies the minimum value, the second the maximum.
The default minimum is zero, default maximum is 100000000: \
`getRandomNum(); // Return number between 0 and 100000000 ` \
`getRandomNum(1000); // Return number between 1000 and 100000000 ` \
`getRandomNum(1000, 1002); // Return 1001, lol `

Cut spaces (also hidden) from both start and end of string: \
`trim(' testing string  '); // return 'testing string' `

Cut totaly all spaces (also hidden) from string: \
`trimAllSpaces(' testing string  '); // return 'testingstring' `

Make first character uppercase: \
`capz('capzed'); // return 'Capzed' `

Get a random string (only Latin characters) of the specified length: \
`getRandomString(5);`

Delete DOM node: \
`deleteNode(document.getElementById("test"));`

Set cookie by name. If lifetime (in seconds) not specifed the year will be used. \
`setCookie('authHash', 'dfuydfgoudfgjeer', 36000);`

Get cookie by name. A string will be received, no conversions are performed: \
`getCookie('authHash');`

Caching values with expiry date to the LocalStorage: \
`setLocalItem('theme', 'dark', 3000000); // exp - how long the key will be valid in ms`

Getting cached values with expiry date from LocalStorage that stored with `setLocalItem`: \
`getLocalItem('theme')`;


Distributed under the MIT license (do whatever you want), but it would be nice to keep the author's name.

-----------------------------------------------------------------------------------

## Общие сведения

Vanicom (vanilla commons) — микрофреймворк, который задумывался как библиотека-хелпер
с небольшими вспомогательными функциями чаще остальных используемых в небольших проектах,
написанный на [ванильном](http://vanilla-js.com/) JavaScript без внешних зависимостей.

Библиотека ориентируется на поддержку в браузерах не ниже IE9, поэтому некоторые
востребованные функций ES6 реализованы в виде полифиллов, что позволяет использовать
Vanicom как небольшой хелпер для мелких проектов, позволяющий при разработке обойтись без
использования сборщиков типа Babel или Webpack.

### Использование в качестве модуля
Для начала установите Vanicom с помощью npm: \
`npm i vanicom`

Для использования в своих приложениях просто импортируйте все функции из библиотеки: \
`import * as Vanic from 'vanicom';`

Либо импортируйте только необходимые: \
`import { logg, getRandomString } from 'vanicom';`

### Использование в качестве отдельной библиотеки/помощника
Чтобы использовать как отдельную библиотеку и добавить полифиллы для своего сайта, просто загрузите `vanicom.min.js`
[из последнего релиза](https://github.com/Psychosynthesis/Vanicom/releases) и импортируйте ее следующим образом: \
  `<script type="text/javascript" src="vanicom.min.js"></script>`

Обратите внимание, что при таком использовании Vanicom желательно импортировать первым или одним из первых.

После этого все функции будут доступны в глобальном нэймспейсе везде на странице: \
  `<script type="text/javascript">` \
  `logg(getRandomString(3)); // print some random string for length 3` \
  `</script>`

### Описание и примеры
`logg('Is just a shortname for console.log'); // No comments`

Проверка, является ли переменная строкой (просто для удобства): \
`isString(4); // false` \
`isString('absolute string'); // true`

Проверка на объект: \
`isObject(() => {}); // false` \
`isObject([]); // false`

Существует и не null (очевиднее некуда): \
`isExistAndNotNull(null); // false` \
`var testUndef;` \
`isExistAndNotNull(testUndef); // false`

Получить случайное число. Можно использовать с аргументами или без.
Первый аргумент указывает минимальное значение, второй — максимальное.
Минимум по умолчанию ноль, максимум 100000000: \
`getRandomNum(); // Return number between 0 and 100000000 ` \
`getRandomNum(1000); // Return number between 1000 and 100000000 ` \
`getRandomNum(1000, 1002); // Return 1001, lol `

Удалить пробелы с начала и конца строки (включая скрытые): \
`trim(' testing string  '); // return 'testing string' `

Удалить из строки вообще все символы пробелов (включая скрытые): \
`trimAllSpaces(' testing string  '); // return 'testingstring' `

Сделать первую букву в строке заглавной: \
`capz('capzed'); // return 'Capzed' `

Получить случайную строку указанной длины. Аргумент может быть опущен, по дефолту вернёт строку длинной 5: \
`getRandomString(5);`

Удалить узел DOM: \
`deleteNode(document.getElementById("test"));`

Установить куку по ключу. Если время жизни (последний аргумент, в секундах) не указано, будет использован год. \
`setCookie('authHash', 'dfuydfgoudfgjeer', 36000);`

Получить значение куки по ключу. Будет получена строка, никаких преобразований не проводится: \
`getCookie('authHash');`

Кэширование значений с датой истечения срока действия в LocalStorage (есть смысл использовать только для реализации механизма истечения срока давности): \
`setLocalItem('theme', 'dark', 3000000); // exp - how long the key will be valid in ms`

Получить кэшированное значение установленное с `setLocalItem`: \
`getLocalItem('theme')`;

Распространяеся по лицензии MIT (делайте что хотите).
