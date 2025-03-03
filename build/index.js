"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimAllSpaces = exports.trim = exports.setLocalItem = exports.setCookie = exports.roundNumber = exports.logg = exports.isString = exports.isObject = exports.isExistAndNotNull = exports.getRandomString = exports.getRandomNum = exports.getLocalItem = exports.getEventTarget = exports.getCookie = exports.forEachKey = exports.forEach = exports.deleteNode = exports.capz = exports.Toast = exports.HideToast = exports.DEF_TOAST_CLASSNAME = void 0;
// Vanicom.js - микрофреймворк с наиболее востребованными функциями,
// так или иначе используемыми в большинстве современных UI.
// Библиотека обеспечивает работу в браузерах не ниже IE9.
// Распространяеся по лицензии MIT (делайте что хотите).
// https://github.com/Psychosynthesis/Vanicom
/////////////////////////////////////////////////////////////////////////////////////////

var DEF_TOAST_CLASSNAME = 'vanic-toast-container';
exports.DEF_TOAST_CLASSNAME = DEF_TOAST_CLASSNAME;
var logg = console.log; // :)
exports.logg = logg;
var isString = function isString(variable) {
  return typeof variable === "string";
};
exports.isString = isString;
var isObject = function isObject(value) {
  if (Array.isArray(value)) return false;
  var val_type = typeof value;
  return value !== null && val_type === 'object';
};
exports.isObject = isObject;
var isExistAndNotNull = function isExistAndNotNull(val) {
  return !(typeof val === "undefined" || val === null);
};
exports.isExistAndNotNull = isExistAndNotNull;
var getRandomNum = function getRandomNum() {
  // Must be a not an arrow function to use arguments object
  var min = arguments.length >= 1 ? arguments[0] : 0;
  var max = arguments.length == 2 ? arguments[1] : 100000000;
  if (min > max) {
    throw new Error("First params describe a minimum and it must be smaller than " + max + ". If you need a bigger number use second argument");
  }
  return Math.floor(Math.random() * (max - min) + min);
};
exports.getRandomNum = getRandomNum;
var roundNumber = function roundNumber(num, precision) {
  if (typeof num !== 'number') {
    throw new Error("First argument must be a number");
  }
  ;
  var castedPrecision = typeof precision === 'number' ? precision : 1;
  return Math.round(num * Math.pow(10, castedPrecision)) / Math.pow(10, castedPrecision);
};
exports.roundNumber = roundNumber;
var forEach = function forEach(list, fn, scope) {
  if (!Array.isArray(list)) {
    throw new Error("First argument must be an array");
  }
  ;
  if (!fn || typeof fn !== 'function') {
    throw new Error("Second argument must be a function");
  }
  ;
  for (var i = 0; i < list.length; i++) {
    fn.call(scope, list[i], i, list);
  }
};
exports.forEach = forEach;
var forEachKey = function forEachKey(obj, fn, scope) {
  if (!isObject(obj)) {
    throw new Error("First argument must be a non-null object");
  }
  ;
  if (!fn || typeof fn !== 'function') {
    throw new Error("Second argument must be a function");
  }
  ;
  var keysForFor = Object.keys(obj);
  // Передаем ключ, значение и объект в колбэк
  forEach(keysForFor, function (key) {
    return fn.call(scope, key, obj[key], obj);
  }, scope);
};

// Вырезаем BOM и любые скрытые пробелы из начала и конца строки
exports.forEachKey = forEachKey;
var trim = function trim(str) {
  if (typeof str !== 'string') {
    throw new Error("Trim work only for strings");
  }
  ;
  return str.replace(/^[\s\uFEFF\u2000-\u200f]+|[\s\uFEFF\u2000-\u200f]+$/g, '');
};

// Вырезаем вообще все лишние пробелы
exports.trim = trim;
var trimAllSpaces = function trimAllSpaces(str) {
  if (typeof str !== 'string') {
    throw new Error("Trim work only for strings");
  }
  ;
  return str.replace(/[\s\uFEFF\u2000-\u200f]/g, '');
};
exports.trimAllSpaces = trimAllSpaces;
var capz = function capz(str) {
  if (typeof str !== "string") throw new Error("Input for capitalize must be a String!");
  return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capz = capz;
var getRandomString = function getRandomString(length) {
  if (length && typeof length !== "number") throw new Error("The length of the string, if specified, must be a positive number!");
  var lengthToGenerate = length ? length : 5;
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'z', 'q', 'w', 'x', 'v', 'k', 'b'];
  var lol_random = alphabet[getRandomNum(0, alphabet.length)];
  for (var i = 0; i < lengthToGenerate - 1; i++) {
    if (getRandomNum(0, 1000) % 2 == 0) {
      lol_random += getRandomNum(0, 9);
    } else {
      lol_random += alphabet[getRandomNum(0, alphabet.length)];
    }
  }
  return lol_random;
};
exports.getRandomString = getRandomString;
var deleteNode = function deleteNode(node_to_delete) {
  if (node_to_delete && node_to_delete.parentNode) {
    node_to_delete.parentNode.removeChild(node_to_delete);
  }
};
exports.deleteNode = deleteNode;
var getEventTarget = function getEventTarget(eve) {
  return eve.target || eve.currentTarget;
};
exports.getEventTarget = getEventTarget;
var getCookie = function getCookie(name) {
  var cookie = document.cookie;
  var search = name + "=";
  var wanted_cookie = '';
  var end = 0;
  if (cookie.length > 0) {
    var offset = cookie.search(new RegExp("\\b".concat(search, "\\b")));
    if (offset > -1) {
      offset += search.length;
      end = cookie.indexOf(";", offset);
      if (end === -1) {
        end = cookie.length;
      }
      wanted_cookie = unescape(cookie.substring(offset, end));
    }
  }
  return wanted_cookie;
};
exports.getCookie = getCookie;
var setCookie = function setCookie(name, value, lifetime) {
  var default_max_age = isExistAndNotNull(lifetime) ? lifetime : 31536000; // Время жизни куки в sec (31536000 - год)
  document.cookie = name + "=" + value + "; max-age=" + default_max_age + "; path=/; SameSite=Strict;";
};
exports.setCookie = setCookie;
var setLocalItem = function setLocalItem(key, value, exp) {
  // Caching values with expiry date to the LocalStorage.
  var item = {
    value: value,
    expiry: Date.now() + exp
  }; // exp - сколько времени ключ будет валиден в мс
  localStorage.setItem(key, JSON.stringify(item));
};
exports.setLocalItem = setLocalItem;
var getLocalItem = function getLocalItem(key) {
  // Getting values with expiry date from LocalStorage that stored with `setLocalItem`.
  var itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  try {
    var item = JSON.parse(itemStr);
    var now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  } catch (_unused) {
    return null;
  }
};

// Супер-простое всплывающее сообщение пользователю
exports.getLocalItem = getLocalItem;
var Toast = function Toast(params) {
  var containerClass = DEF_TOAST_CLASSNAME,
    duration = 3000,
    message;
  if (isString(params)) {
    message = params;
  } else {
    message = isExistAndNotNull(params.message) ? params.message : 'Message...';
    containerClass += isString(params.class) && params.class.trim() !== '' ? ' ' + params.class : '';
    duration = isExistAndNotNull(params.duration) ? params.duration : 3000;
  }
  var container;
  var existContainer = document.getElementsByClassName(DEF_TOAST_CLASSNAME);
  var messageDiv = document.createElement('div');
  var defaultStyles = {
    position: 'fixed',
    top: '90px',
    right: '50%',
    maxWidth: '300px',
    padding: '10px 20px',
    zIndex: '100000',
    background: '#004a95',
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '5px',
    wordBreak: 'break-word'
  };
  messageDiv.classList.add('toast-message');
  messageDiv.textContent = message;
  if (existContainer.length === 0) {
    container = document.createElement('div');
    container.className = containerClass;
    // Дефолтные стили только если не передан класс
    if (containerClass === DEF_TOAST_CLASSNAME) {
      forEachKey(defaultStyles, function (key, val) {
        container.style[key] = val;
      });
    }
    document.body.append(container);
    if (isExistAndNotNull(duration) && duration > 0) {
      setTimeout(HideToast, duration > 0 ? duration : 3000);
    }
  } else {
    container = existContainer[0];
  }
  container.append(messageDiv);
};
exports.Toast = Toast;
var HideToast = function HideToast() {
  var checkContainer = document.getElementsByClassName(DEF_TOAST_CLASSNAME)[0];
  if (!checkContainer) {
    return;
  }
  var toastsMessages = checkContainer.getElementsByClassName('toast-message');
  if (toastsMessages.length > 1) {
    checkContainer.removeChild(toastsMessages[toastsMessages.length - 1]);
    setTimeout(HideToast, 3000);
  } else {
    document.body.removeChild(checkContainer);
  }
};
exports.HideToast = HideToast;