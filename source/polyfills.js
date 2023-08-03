/////////////////////////////////////////////////////////////////////////////////////////
// Полифиллы для старых браузеров
/////////////////////////////////////////////////////////////////////////////////////////
(function() {
    // Полифилл для [].map - итератор с колбэком
    if (!Array.prototype.map) {
      Array.prototype.map = function (callBack) {
        const result_array = [];
        if (typeof callBack !== "function") { throw Error('Callback passed to Array.map' + callBack + ' is not a function'); }
        for (let i = 0; i < this.length; i++) { result_array.push(callBack(this[i], i, this)); }
        return result_array;
      }
    }

    // Добавляем выбор случайного элемента массива в прототипы
    Object.defineProperty(Array.prototype, 'getRandomItem', {
      get: () => { return this[Math.floor(Math.random()*this.length)]; }
    });

    // Полифилл для String.trim
    if (!String.prototype.trim) {
      (function() {
        String.prototype.trim = function() { return trim(this); };
      })();
    }

    // Полифилл для Object.keys - перебор свойств объекта
    if (!Object.keys) {
        Object.keys = (function() {
            'use strict';
            const hasOwnProperty = Object.prototype.hasOwnProperty;
            const hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
            const dontEnums = [ 'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
            const dontEnumsLength = dontEnums.length;

            return function(obj) {
                let result = [], prop;
                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                    throw new TypeError('Object.keys called on non-object');
                }
                for (prop in obj) { if (hasOwnProperty.call(obj, prop)) { result.push(prop); } }
                if (hasDontEnumBug) {
                    for (let i = 0; i < dontEnumsLength; i++) { if (hasOwnProperty.call(obj, dontEnums[i])) { result.push(dontEnums[i]); } }
                }
                return result;
            };
        }());
    }

    // Полифилл для Class list object с основными методами для IE8/9, Safari.
    function ClassList(element){ this.element = element; }
    ClassList.prototype = {
        add: function(){
          var addArgs = Array.prototype.slice.call(arguments);
          forEach(addArgs.sort(), function(name) { if (!this.contains(name)){ this.element.className = trim(this.element.className +' '+ name); } }, this);
        },
        remove: function(){
          var removeArgs = Array.prototype.slice.call(arguments);
          forEach(removeArgs.sort(), function(name){ this.element.className = trim(this.element.className.replace(regExp(name), ' ')); }, this);
        },
        toggle: function(name){ return this.contains(name) ? (this.remove(name), false) : (this.add(name), true); },
        contains: function(name){ return regExp(name).test(this.element.className); },
        item: function(i){ return this.element.className.split(/\s+/)[i] || null; },
    };

    // IE8/9, Safari
    // Add this if statements to NOT override native classList.
    // if (!('classList' in Element.prototype))
    Object.defineProperty(Element.prototype, 'classList', { get: function(){ return new ClassList(this); } });

    // Полифилл для firstElementChild (IE10 и выше)
    if(!("firstElementChild" in document.documentElement)){
        Object.defineProperty(Element.prototype, "firstElementChild", {
            get: function(){
                for (let nodes = this.children, n, i = 0, l = nodes.length; i < l; ++i){
                    if (n = nodes[i], 1 === n.nodeType){ return n; }
                    return null;
                }
            }
        });
    }

    // Полифилл Element.nextElementSibling для IE9+ и Safari
    (function(arr) {
      arr.forEach(function(item) {
        if (item.hasOwnProperty('nextElementSibling')) { return; }
        Object.defineProperty(item, 'nextElementSibling', {
          configurable: true,
          enumerable: true,
          get: function() {
            let elem = this;
            while (elem = elem.nextSibling) {
              if (elem.nodeType === 1) { return elem; }
            }
            return null;
          },
          set: undefined
        });
      });
    })([Element.prototype, CharacterData.prototype]);

    // Полифилл для Element.closest()
    (function(elem){
        elem.closest = elem.closest || function(css){
            let node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        }
    })(Element.prototype);
})();
