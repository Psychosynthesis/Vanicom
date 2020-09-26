/////////////////////////////////////////////////////////////////////////////////////////
// CommonScripts.js - микрофреймворк с наиболее востребованными функциями,
// так или иначе используемыми в большинстве современных UI.
// Библиотека ориентируется на поддержку в браузерах не ниже IE9.
// Распространяеся по лицензии MIT (делайте что хотите).
// https://github.com/Psychosynthesis/CSC
/////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////
// Глобальные переменные и константы
/////////////////////////////////////////////////////////////////////////////////////////
var COOKIE_LIFETIME = 432000000; // Время жизни куки в миллисекундах (432000 - пять дней)

/////////////////////////////////////////////////////////////////////////////////////////
// Базовые функции, общие для всех систем
/////////////////////////////////////////////////////////////////////////////////////////
function trim(str) { return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''); }; // Вырезаем BOM и неразрывный пробел
function regExp(name){ return new RegExp('(^|\\s+)'+ name +'(\\s+|$)'); };
function forEach(list, fn, scope){ for (var i = 0; i < list.length; i++){ fn.call(scope, list[i]); } };
function isString(variable){ if (typeof(variable) !== "string"){ return false; } else { return true; } };
function isExistAndNotNull(val){ if ((typeof(val) === "undefined") || (val == null)){ return false; } else { return true; } }
function getRandomNum(){ return Math.floor(Math.random() * (10000000)); }
function getEventTarget(eve){ return eve.target || eve.currentTarget; }
function getCookie(name) {
    var cookie = document.cookie;
    var search = name + "=";
    var wantedCookie = '';
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset > -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset);
            if (end == -1) {end = cookie.length;}
            wantedCookie = unescape(cookie.substring(offset, end));
        }
    }
    return(wantedCookie);
}
function setCookie(name, value) {
    var expiration_date = new Date(new Date().getTime() + COOKIE_LIFETIME);
    var cookie_string = name + "=" + value + "; expires=" + expiration_date.toUTCString() + "; path=/;";
    document.cookie = cookie_string;
}

function getRandomString(length) {
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'z', 'q', 'w', 'x', 'v', 'k', 'b'];
	var lolRandomString = alphabet[getRandomIntInGap(0, alphabet.length)];
	for (var i = 0; i < length-1; i++) {
		if ((getRandomIntInGap(0, 1000) % 2) == 0) { lolRandomString += getRandomIntInGap(0, 9); }
		else { lolRandomString += alphabet[getRandomIntInGap(0, alphabet.length)]; }
	}
	return lolRandomString;
}

/////////////////////////////////////////////////////////////////////////////////////////
// Некоторые полифиллы для старых браузеров
/////////////////////////////////////////////////////////////////////////////////////////
(function() {
    // Полифилл для Class list object с основными методами для IE8/9, Safari.
    function ClassList(element){ this.element = element; }

    ClassList.prototype = {
        toggle: function(name){ return this.contains(name) ? (this.remove(name), false) : (this.add(name), true); },
        contains: function(name){ return regExp(name).test(this.element.className); },
        item: function(i){ return this.element.className.split(/\s+/)[i] || null; },
        add: function(){ forEach(arguments, function(name) { if (!this.contains(name)){ this.element.className = trim(this.element.className +' '+ name); } }, this); },
        remove: function(){ forEach(arguments, function(name){ this.element.className = trim(this.element.className.replace(regExp(name), ' ')); }, this); },
    };

    // IE8/9, Safari
    // Add this if statements to NOT override native classList.
    // if (!('classList' in Element.prototype))
    Object.defineProperty(Element.prototype, 'classList', { get: function(){ return new ClassList(this); } });

    // Полифилл для firstElementChild in IE8
    if(!("firstElementChild" in document.documentElement)){
        Object.defineProperty(Element.prototype, "firstElementChild", {
            get: function(){
                for(var nodes = this.children, n, i = 0, l = nodes.length; i < l; ++i){
                    if(n = nodes[i], 1 === n.nodeType){ return n; }
                    return null;
                }
            }
        });
    }

	// Полифилл для String.trim
	if (!String.prototype.trim) {
		(function() {
			String.prototype.trim = function() { return trim(this); };
		})();
	}

    // Полифилл для Element.closest()
    (function(e){
        e.closest = e.closest || function(css){
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        }
    })(Element.prototype);

    // Полифилл для Object.keys - перебор свойств объекта
    if (!Object.keys) {
        Object.keys = (function() {
            'use strict';
            var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
            dontEnums = [ 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
            dontEnumsLength = dontEnums.length;

            return function(obj) {
                var result = [], prop, i;
                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                    throw new TypeError('Object.keys called on non-object');
                }
                for (prop in obj) { if (hasOwnProperty.call(obj, prop)) { result.push(prop); } }
                if (hasDontEnumBug) {
                    for (var i = 0; i < dontEnumsLength; i++) { if (hasOwnProperty.call(obj, dontEnums[i])) { result.push(dontEnums[i]); } }
                }
                return result;
            };
        }());
    }
})();

/////////////////////////////////////////////////////////////////////////////////////////
// Наша реализация некоторых возможностей
/////////////////////////////////////////////////////////////////////////////////////////

function makeRequest(url, type, callback, context, data) {
    var httpRequest = null;
    if (window.XMLHttpRequest) { // Mozilla, Safari, etc...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        try { httpRequest = new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) {
            try { httpRequest = new ActiveXObject("Microsoft.XMLHTTP"); }
            catch (e) { console.error(e); }
        }
    }
    if (!httpRequest) {
        console.error('Cannot create an XMLHTTP instance');
        return false;
    }

    function serveContent(){
        if (httpRequest.readyState === 4) {
            if (httpRequest.status >= 200 && httpRequest.status < 400) {
                callback.call(context, httpRequest.responseText);
            } else {
                console.error('There was a problem with the request. Status: ', httpRequest.status);
            }
        }
    }

    httpRequest.onreadystatechange = serveContent;
    httpRequest.open(type, url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    if (type === 'get') { httpRequest.send(); }
    else { httpRequest.send(data); }
}

function responseHandler(response) {
    var parsedResponse = JSON.parse(response);
    if (parsedResponse.errors){
        return {success: false, data: parsedResponse.errors};
    } else {
        return {success: true, data: parsedResponse.data};
    }
}
