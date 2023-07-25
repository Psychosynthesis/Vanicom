# Vanicom.js
## Description

Vanicom (vanilla commons) is a micro-framework that was conceived as a library
with the most requested functions in one way or another used in small projects,
written in [vanilla](http://vanilla-js.com/) JavaScript without external dependencies.

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

To use as a standalone library, download `vanicom.min.js`
[from last releases](https://github.com/Psychosynthesis/Vanicom/releases) and import it like this: \
 `<script type="text/javascript" src="vanicom.min.js"></script>`

After that all functions will be available on global scope everywhere on page: \
`<script type="text/javascript">` \
`logg(getRandomString(3)); // print some random string for length 3` \
`</script>`

Please note that it is desirable to import the Vanicom first or one of the first.

Distributed under the MIT license (do whatever you want), but it would be nice to keep the author's name.

-----------------------------------------------------------------------------------

## Описание

Vanicom (vanilla commons) это микрофреймворк, который задумывался как библиотека с
наиболее востребованными функциями так или иначе используемыми в небольших проектах,
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

Чтобы использовать как отдельную библиотеку и добавить полифиллы для своего сайта, просто загрузите `vanicom.min.js`
[из последнего релиза](https://github.com/Psychosynthesis/Vanicom/releases) и импортируйте ее следующим образом: \
  `<script type="text/javascript" src="vanicom.min.js"></script>`

После этого все функции будут доступны в глобальном масштабе везде на странице: \
  `<script type="text/javascript">` \
  `logg(getRandomString(3)); // print some random string for length 3` \
  `</script>`

Обратите внимание, что Vanicom желательно импортировать первым или одним из первых.

Распространяеся по лицензии MIT (делайте что хотите).
