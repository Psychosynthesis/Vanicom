// Vanicom.js - микрофреймворк с наиболее востребованными функциями,
// так или иначе используемыми в большинстве современных UI.
// Библиотека обеспечивает работу в браузерах не ниже IE9.
// Распространяеся по лицензии MIT (делайте что хотите).
// https://github.com/Psychosynthesis/Vanicom
/////////////////////////////////////////////////////////////////////////////////////////

export const trim = (str) => { return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''); }; // Вырезаем BOM и неразрывный пробел

export const trimAllSpaces = (str) => { return str.replace(/\s+/g, ''); }; // Тестировать, проверить разницу между trim и trimAllSpaces

export const capz = (str) => {
  if (typeof str !== "string") throw new Error("Input for capitalize must be a String!");
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const logg = console.log; // Просто для удобства

export const getRandomString = (length) => {
	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'z', 'q', 'w', 'x', 'v', 'k', 'b'];
	let lol_random = alphabet[getRandomInGap(0, alphabet.length)];
	for (let i = 0; i < length-1; i++) {
		if ((getRandomInGap(0, 1000) % 2) == 0) { lol_random += getRandomInGap(0, 9); }
		else { lol_random += alphabet[getRandomInGap(0, alphabet.length)]; }
	}
	return lol_random;
};

export const regExp = (name) => { return new RegExp('(^|\\s+)'+ name +'(\\s+|$)'); };

export const forEach = (list, fn, scope) => { for (let i = 0; i < list.length; i++) { fn.call(scope, list[i]); } };

export const isString = (variable) => { return (typeof(variable) === "string"); };

export const isObject = (value) => {
	if (Array.isArray(value)) return false;
	let val_type = typeof value;
  return value != null && (val_type === 'object');
};

export const isExistAndNotNull = (val) => { return !((typeof(val) === "undefined") || (val == null)); };

export const getRandomNum = () => { return Math.floor(Math.random() * (10000000)); };

export const getRandomInGap = (min, max) => { return Math.floor(Math.random() * (max - min) + min); };

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
          if (end == -1) { end = cookie.length; }
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
  const now = new Date();
  // The item is the object that holds the original value
  // as well as the expiration date.
  const item = {
    value,
    expiry: now.getTime() + exp, // exp - время до истечения действия ключа
  };

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
