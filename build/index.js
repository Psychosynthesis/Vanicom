"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimAllSpaces = exports.trim = exports.setLocalItem = exports.setCookie = exports.regExp = exports.logg = exports.isString = exports.isObject = exports.isExistAndNotNull = exports.getRandomString = exports.getRandomNum = exports.getLocalItem = exports.getEventTarget = exports.getCookie = exports.forEach = exports.deleteNode = exports.capz = void 0;
var _arguments = typeof arguments === "undefined" ? void 0 : arguments;
// Vanicom.js - микрофреймворк с наиболее востребованными функциями,
// так или иначе используемыми в большинстве современных UI.
// Библиотека обеспечивает работу в браузерах не ниже IE9.
// Распространяеся по лицензии MIT (делайте что хотите).
// https://github.com/Psychosynthesis/Vanicom
/////////////////////////////////////////////////////////////////////////////////////////

var logg = console.log; // :)
exports.logg = logg;
var isString = function isString(variable) {
  return typeof variable === "string";
};
exports.isString = isString;
var isObject = function isObject(value) {
  if (Array.isArray(value)) return false;
  var val_type = typeof value;
  return value != null && val_type === 'object';
};
exports.isObject = isObject;
var isExistAndNotNull = function isExistAndNotNull(val) {
  return !(typeof val === "undefined" || val == null);
};
exports.isExistAndNotNull = isExistAndNotNull;
var getRandomNum = function getRandomNum() {
  var min = 0;
  var max = 10000000;
  if (_arguments.length >= 1) {
    min = _arguments[0];
  }
  if (_arguments.length == 2) {
    max = _arguments[1];
  }
  return Math.floor(Math.random() * (max - min) + min);
};
exports.getRandomNum = getRandomNum;
var regExp = function regExp(name) {
  return new RegExp('(^|\\s+)' + name + '(\\s+|$)');
};
exports.regExp = regExp;
var forEach = function forEach(list, fn, scope) {
  for (var i = 0; i < list.length; i++) {
    fn.call(scope, list[i]);
  }
};
exports.forEach = forEach;
var trim = function trim(str) {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}; // Вырезаем BOM и неразрывный пробел
exports.trim = trim;
var trimAllSpaces = function trimAllSpaces(str) {
  return str.replace(/\s+/g, '');
}; // Тестировать, проверить разницу между trim и trimAllSpaces
exports.trimAllSpaces = trimAllSpaces;
var capz = function capz(str) {
  if (typeof str !== "string") throw new Error("Input for capitalize must be a String!");
  return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capz = capz;
var getRandomString = function getRandomString(length) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'z', 'q', 'w', 'x', 'v', 'k', 'b'];
  var lol_random = alphabet[getRandomNum(0, alphabet.length)];
  for (var i = 0; i < length - 1; i++) {
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
  if (node_to_delete) {
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
  var offset = 0;
  var end = 0;
  if (cookie.length > 0) {
    offset = cookie.indexOf(search);
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
  document.cookie = name + "=" + value + "; max-age=" + default_max_age + "; path=/;";
};
exports.setCookie = setCookie;
var setLocalItem = function setLocalItem(key, value, exp) {
  // Caching values with expiry date to the LocalStorage.
  var now = new Date();
  var item = {
    // Объект-обёртка для хранимого значения
    value: value,
    expiry: now.getTime() + exp // exp - время до истечения действия ключа
  };

  localStorage.setItem(key, JSON.stringify(item));
};
exports.setLocalItem = setLocalItem;
var getLocalItem = function getLocalItem(key) {
  // Getting values with expiry date from LocalStorage that stored with `setLocalItem`.
  var itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  var item = JSON.parse(itemStr);
  var now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
exports.getLocalItem = getLocalItem;