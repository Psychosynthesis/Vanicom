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
First add the library package with npm:
```bash
npm i vanicom
```

For use in your applications, simply import all the functions from the library:
```JS
import * as Vanic from 'vanicom';
```

Or import only neccessary:
```JS
import { logg, getRandomString } from 'vanicom';
```



### Using as a standalone lib/helper
To use as a standalone library, download `vanicom.min.js`
[from last releases](https://github.com/Psychosynthesis/Vanicom/releases) and import it like this:
 ```HTML
 <script type="text/javascript" src="vanicom.min.js"></script>
 ```

Please note that it is desirable to import the Vanicom first or one of the first.

After that all functions will be available on global scope everywhere on page:
```HTML
<script type="text/javascript">
  logg(getRandomString(3)); // print some random string for length 3
</script>
```



### Description and examples
```JS
logg('Is just a shortname for console.log');
```

 **Helpers for checking types. Usually it is more convenient than checking the type manually each time like `typeof(x) ==='y'`, besides it does not always work, like for example with `null`.**
```JS
// Checking if a variable is a string (just for convenience):
isString(4); // false
isString('absolute string'); // true

// Checking if a variable is an object:
isObject(() => {}); // false
isObject([]); // false

// Exists and is not null:
isExistAndNotNull(null); // false
var testUndef;
isExistAndNotNull(testUndef); // false
isExistAndNotNull(false); // true because boolean
```
 Note that you can't use `isExistAndNotNull` to check nested objects (like `obj.someField.some`), because the interpreter tries to access the nested property before passing it inside the function, so you should use something like lodash.get for such a check, although with the advent of the `?.` operator this seems to be no longer necessary.


**Get random number. Can be used with or without arguments. The first argument specifies the minimum value, the second the maximum. The default minimum is zero, default maximum is 100000000:**
```JS
getRandomNum(); // Return number between 0 and 100000000
getRandomNum(1000); // Return number between 1000 and 100000000
getRandomNum(1000, 1002); // Return 1001, lol
```

**Rounds a number to a specified number of decimal places. If precision is not specified, a number with one decimal place will be returned:**
```JS
var someNum = 43.3423;
roundNumber(someNum, 2); // 43.34
```


**Cut spaces (also hidden) from both start and end of string:**
```JS
trim(' testing string  '); // return 'testing string'
```


**Cut totaly all spaces (also hidden) from string:**
```JS
trimAllSpaces(' testing string  '); // return 'testingstring'
```


**Make first character uppercase:**
```JS
capz('capzed'); // return 'Capzed'
```


**Get a random string (only latin characters) of the specified length:**
```JS
getRandomString(5);
```


**Delete DOM node:**
```JS
deleteNode(document.getElementById("test"));
```


**Set cookie by name. If lifetime (in seconds) not specifed the year will be used:**
```JS
setCookie('authHash', 'dfuydfgoudfgjeer', 36000);
```


**Get cookie by name. A string will be received, no conversions are performed:**
```JS
getCookie('authHash');
```


**Caching values with expiry date to the LocalStorage:**
```JS
setLocalItem('theme', 'dark', 3000000); // exp - how long the key will be valid in ms
setLocalItem('theme', 'dark'); // Or justset item without expiry date
```


**Getting cached values with expiry date from LocalStorage that stored with `setLocalItem`:**
```JS
getLocalItem('theme');
```


**Distributed under the MIT license (do whatever you want), but it would be nice to keep the author's name.**


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
Для начала установите Vanicom с помощью npm:
```bash
npm i vanicom
```

Для использования в своих приложениях просто импортируйте все функции из библиотеки:
```JS
import * as Vanic from 'vanicom';
```

Либо импортируйте только необходимые:
```JS
import { logg, getRandomString } from 'vanicom';
```



### Использование в качестве отдельной библиотеки/помощника
Чтобы использовать как отдельную библиотеку и добавить полифиллы для своего сайта, просто загрузите `vanicom.min.js`
[из последнего релиза](https://github.com/Psychosynthesis/Vanicom/releases) и импортируйте ее следующим образом:
  ```HTML
  <script type="text/javascript" src="vanicom.min.js"></script>
  ```

Обратите внимание, что при таком использовании Vanicom желательно импортировать первым или одним из первых.

После этого все функции будут доступны в глобальном нэймспейсе везде на странице:
```HTML
<script type="text/javascript">
  logg(getRandomString(3)); // print some random string for length 3
</script>
```



### Описание и примеры
```JS
logg('Is just a shortname for console.log'); // No comments`
```

 **Короткие хелперы для проверки на типы. Обычно это удобнее чем каждый раз проверять самостоятельно типа как `typeof(x) ==='y'`, кроме того это не всегда работает, как например с null.**
```JS
// Проверка, является ли переменная строкой (просто для удобства):
isString(4); // false
isString('absolute string'); // true

// Проверка на объект:
isObject(() => {}); // false
isObject([]); // false

// Существует и не null:
isExistAndNotNull(null); // false
var testUndef;
isExistAndNotNull(testUndef); // false
```
 Обратите внимание, что вы не можете использовать `isExistAndNotNull` для проверки вложенных объектов (типа `obj.someField.some`), поскольку интерпретатор пытается получить доступ к вложенному свойству перед передачей его в функцию, поэтому для такой проверки следует использовать что-то вроде `lodash.get`, хотя с появлением оператора `?.` это, похоже, больше не нужно.


**Получить случайное число. Можно использовать с аргументами или без. Первый аргумент указывает минимальное значение, второй — максимальное. Минимум по умолчанию ноль, максимум 100000000:**
```JS
getRandomNum(); // Return number between 0 and 100000000
getRandomNum(1000); // Return number between 1000 and 100000000
getRandomNum(1000, 1002); // Return 1001, lol
```

**Округление числа до заданного числа знаков после запятой. Если точность не задана, вернётся число с одним знаком после запятой:**
```JS
var someNum = 43.3423;
roundNumber(someNum, 2); // 43.34
```


**Удалить пробелы с начала и конца строки (включая скрытые):**
```JS
trim(' testing string  '); // return 'testing string'
```


**Удалить из строки вообще все символы пробелов (включая скрытые):**
```JS
trimAllSpaces(' testing string  '); // return 'testingstring'
```


**Сделать первую букву в строке заглавной:**
```JS
capz('capzed'); // return 'Capzed'
```


**Получить случайную строку указанной длины. Аргумент может быть опущен, по дефолту вернёт строку длинной 5:**
```JS
getRandomString(5);
```


**Удалить узел DOM:**
```JS
deleteNode(document.getElementById("test"));
```


**Установить куку по ключу. Если время жизни (последний аргумент, в секундах) не указано, будет использован год:**
```JS
setCookie('authHash', 'dfuydfgoudfgjeer', 36000);
```


**Получить значение куки по ключу. Будет получена строка, никаких преобразований не проводится:**
```JS
getCookie('authHash');
```


**Кэширование значений с датой истечения срока действия в LocalStorage (есть смысл использовать только для реализации механизма истечения срока давности):**
```JS
setLocalItem('theme', 'dark', 3000000); // exp - how long the key will be valid in ms
setLocalItem('theme', 'dark'); // без срока
```


**Получить кэшированное значение установленное с `setLocalItem`:**
```JS
getLocalItem('theme');
```

**Показать короткое всплывающее сообщение (тост):**
```JS
toast({ message: 'Test message', duration: 3500, class: 'custom-class' });
// Для принудительного скрытия последнего сообщения:
hideToast();
```
Если не указать свой класс, к контейнеру будет назначен дефолтный класс `vanic-toast-container` и применена дефолтная стилизация:
```CSS
{
  position: fixed;
  top: 90px;
  right: 50%;
  max-width: 300px;
  padding: 10px 20px;
  z-index: 100000;
  background: #004a95;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  word-break: break-word;
}
```


Распространяеся по лицензии MIT (делайте что хотите).
