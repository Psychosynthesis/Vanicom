// Vanicom.js - микрофреймворк с наиболее востребованными функциями,
// так или иначе используемыми в большинстве современных UI.
// Библиотека обеспечивает работу в браузерах не ниже IE9.
// Распространяеся по лицензии MIT (делайте что хотите).
// https://github.com/Psychosynthesis/Vanicom
/////////////////////////////////////////////////////////////////////////////////////////

export const logg = console.log; // :)

export const isString = (variable) => { return (typeof(variable) === "string"); };

export const isObject = (value) => {
	if (Array.isArray(value)) return false;
	let val_type = typeof value;
  return value != null && (val_type === 'object');
};

export const isExistAndNotNull = (val) => { return !((typeof(val) === "undefined") || (val == null)); };

export const getRandomNum = function() { // Must be a not an arrow function to use arguments object
  const min = (arguments.length >= 1) ? arguments[0] : 0;
  const max = (arguments.length == 2) ? arguments[1] : 100000000;
	if (min > max) { throw new Error("First params describe a minimum and it must be smaller than " + max + ". If you need a bigger number use second argument"); }
  return Math.floor(Math.random() * (max - min) + min);
};

export const roundNumber = (num, precision) => {
	if (typeof(num) !== 'number') { throw new Error("First argument must be a number"); };
  const castedPrecision = (typeof(precision) === 'number') ? precision : 1;
  return (Math.round(num * Math.pow(10, castedPrecision)) / Math.pow(10, castedPrecision));
}

export const forEach = (list, fn, scope) => {
	if (!Array.isArray(list)) { throw new Error("First argument must be an array"); };
	if (!fn || typeof(fn) !== 'function') { throw new Error("Second argument must be a function"); };
	for (let i = 0; i < list.length; i++) { fn.call(scope, list[i]); }
};

 // Вырезаем BOM и любые скрытые пробелы из начала и конца строки
export const trim = (str) => {
	if (typeof(str) !== 'string') { throw new Error("Trim work only for strings"); };
	return str.replace(/^[\s\uFEFF\u2000-\u200f]+|[\s\uFEFF\u2000-\u200f]+$/g, '');
};

 // Вырезаем вообще все лишние пробелы
export const trimAllSpaces = (str) => {
	if (typeof(str) !== 'string') { throw new Error("Trim work only for strings"); };
	return str.replace(/[\s\uFEFF\u2000-\u200f]/g, '');
};

export const capz = (str) => {
  if (typeof(str) !== "string") throw new Error("Input for capitalize must be a String!");
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getRandomString = (length) => {
	if (length && typeof(length) !== "number") throw new Error("The length of the string, if specified, must be a positive number!");
	const lengthToGenerate = length ? length : 5;
	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'z', 'q', 'w', 'x', 'v', 'k', 'b'];
	let lol_random = alphabet[getRandomNum(0, alphabet.length)];
	for (let i = 0; i < lengthToGenerate-1; i++) {
		if ((getRandomNum(0, 1000) % 2) == 0) { lol_random += getRandomNum(0, 9); }
		else { lol_random += alphabet[getRandomNum(0, alphabet.length)]; }
	}
	return lol_random;
};

export const deleteNode = (node_to_delete) => { if (node_to_delete){ node_to_delete.parentNode.removeChild(node_to_delete); } };

export const getEventTarget = (eve) => { return eve.target || eve.currentTarget; };

export const getCookie = (name) => {
  const cookie = document.cookie;
  const search = name + "=";
  let wanted_cookie = '';
  let offset = 0;
  let end = 0;
  if (cookie.length > 0) {
      offset = cookie.indexOf(search);
      if (offset > -1) {
          offset += search.length;
          end = cookie.indexOf(";", offset);
          if (end === -1) { end = cookie.length; }
          wanted_cookie = unescape(cookie.substring(offset, end));
      }
  }
  return(wanted_cookie);
};

export const setCookie = (name, value, lifetime) => {
  const default_max_age = isExistAndNotNull(lifetime) ? lifetime : 31536000; // Время жизни куки в sec (31536000 - год)
  document.cookie = name + "=" + value + "; max-age=" + default_max_age + "; path=/;";
};

export const setLocalItem = (key, value, exp) => { // Caching values with expiry date to the LocalStorage.
  const item = { value, expiry: Date.now() + exp }; // exp - сколько времени ключ будет валиден в мс
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalItem = (key) => { // Getting values with expiry date from LocalStorage that stored with `setLocalItem`.
  const itemStr = localStorage.getItem(key);
  if (!itemStr) { return null; }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
