const Vanic = require('../build');
const assert = require('assert');

describe('Detect environments', () => {
  it('detect we are running in NodeJS', () => {
    assert.equal(Vanic.isNode(), true);
  });

  it('detect is test run', () => {
    assert.equal(Vanic.isTestEnv(), true);
  });
});

//////////////////////////////////////////////////////////////////////////

describe('isString testing', () => {
  describe('Detect string', function () {
    it('should return true when passing a string', function () {
      assert.equal(Vanic.isString('string'), true);
    });
  });

  describe('Detect array', function () {
    it('should return false when passing an array', function () {
      assert.equal(Vanic.isString([]), false);
    });
  });

  describe('Detect function', function () {
    it('should return false when passing a function', function () {
      assert.equal(Vanic.isString(() => {}), false);
    });
  });

  describe('Test on null', function () {
    it('should return false when passing a null-value', function () {
      assert.equal(Vanic.isString(null), false);
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('isNumber testing', () => {
  describe('Detect number', function () {
    it('should return true when passing a number', function () {
      assert.equal(Vanic.isNumber(0), true);
    });
  });

  describe('Detect string', function () {
    it('should return false when passing a number as a string', function () {
      assert.equal(Vanic.isNumber('1254'), false);
    });
  });

  describe('Test on BigInt', function () {
    it('should return false when passing a BigInt', function () {
      var huge = BigInt(9007199254740991);
      assert.equal(Vanic.isNumber(huge), false);
    });
  });

  describe('Detect NaN is not number', function () {
    it('should return false when passing a NaN', function () {
      assert.equal(Vanic.isNumber(0/0), false);
    });
  });

  describe('Detect undefined', function () {
    it('should return false when passing undefined', function () {
      assert.equal(Vanic.isNumber(), false);
    });
  });

  describe('Test on null', function () {
    it('should return false when passing a null-value', function () {
      assert.equal(Vanic.isNumber(null), false);
    });
  });

});

//////////////////////////////////////////////////////////////////////////

describe('isObject testing', () => {
  describe('Detect object', function () {
    it('should return true when passing an object', function () {
      assert.equal(Vanic.isObject({}), true);
    });
  });

  describe('Detect string', function () {
    it('should return false when passing a string', function () {
      assert.equal(Vanic.isObject('string'), false);
    });
  });

  describe('Detect array', function () {
    it('should return false when passing an array', function () {
      assert.equal(Vanic.isObject([]), false);
    });
  });

  describe('Detect function', function () {
    it('should return false when passing a function', function () {
      assert.equal(Vanic.isObject(() => {}), false);
    });
  });

  describe('Test on null', function () {
    it('should return false when passing a null-value', function () {
      assert.equal(Vanic.isObject(null), false);
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('isExistAndNotNull testing', () => {
  describe('Detect object', function () {
    it('should return true when passing an empty object', function () {
      assert.equal(Vanic.isExistAndNotNull({}), true);
    });
  });

  describe('Detect string', function () {
    it('should return true when passing a string', function () {
      assert.equal(Vanic.isExistAndNotNull('string'), true);
    });
  });

  describe('Detect array', function () {
    it('should return true when passing an empty array', function () {
      assert.equal(Vanic.isExistAndNotNull([]), true);
    });
  });

  describe('Detect function', function () {
    it('should return true when passing a function', function () {
      assert.equal(Vanic.isExistAndNotNull(() => {}), true);
    });
  });

  describe('Test on null', function () {
    it('should return false when passing a null-value', function () {
      assert.equal(Vanic.isExistAndNotNull(null), false);
    });
  });

  describe('Test on undefined', function () {
    it('should return false when passing an undef', function () {
      var x;
      assert.equal(Vanic.isExistAndNotNull(x), false);
    });
  });

  describe('Test on bool', function () {
    it('should return true when passing an false bool', function () {
      var x = false;
      assert.equal(Vanic.isExistAndNotNull(x), true);
    });
  });

  describe('Test on number zero', function () {
    it('should return true when passing an zero', function () {
      assert.equal(Vanic.isExistAndNotNull(0), true);
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('getRandomNum testing', () => {
  describe('Get random', function () {
    it('should return some number when run without args', function () {
      assert.equal(typeof(Vanic.getRandomNum()), "number");
    });
  });

  describe('Get random bigger than param', function () {
    it('should return number bigger than first arg', function () {
      assert.ok(Vanic.getRandomNum(89999999) >= 89999999);
    });
  });

  describe('Set lower limit bigger than 100000000', function() {
    it('should throw an error with the message "First params describe..."', function() {
      try {
        Vanic.getRandomNum(100000000000);
      } catch(error) {
        assert.strictEqual(
          error.message,
          "First params describe a minimum and it must be smaller than " + 100000000 + ". If you need a bigger number use second argument"
        );
      }
    });
  });

  describe('Get random in gap', function() {
    it('should return number in betwen first and second arg', function () {
      const rndmInGap = Vanic.getRandomNum(8999, 10000);
      assert.ok(rndmInGap >= 8999);
      assert.ok(rndmInGap <= 10000);
    });
  });

  describe('Get not random in gap, lol', function() {
    it('should return number equal for first and second arg', function () {
      const notRndmInGap = Vanic.getRandomNum(9000, 9000);
      assert.ok(notRndmInGap == 9000);
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('roundNumber testing', () => {
  describe('Just round number', function () {
    it('should return number with one decimal places when run without args', function () {
      assert.equal(Vanic.roundNumber(5.1111), 5.1);
    });
  });

  describe('Round with specified precision', function () {
    it('should return a number with three decimal places', function () {
      assert.ok(Vanic.roundNumber(8.09494, 3) === 8.095);
    });
  });

  describe('Send not a number in forEach', function() {
    it('should throw an error with the message "First argument must be..."', function() {
      try {
        Vanic.roundNumber('Not a number');
      } catch(error) {
        assert.strictEqual(error.message, "First argument must be a number");
      }
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('forEach testing', () => {
  describe('Send not a Array in forEach', function() {
    it('should throw an error with the message "First argument must be..."', function() {
      try {
        Vanic.forEach('Array');
      } catch(error) {
        assert.strictEqual(error.message, "First argument must be an array");
      }
    });
  });

  describe('Not set fn at forEach', function() {
    it('should throw an error with the message "Second argument must be..."', function() {
      try {
        Vanic.forEach([]);
      } catch(error) {
        assert.strictEqual(error.message, "Second argument must be a function");
      }
    });
  });

  describe('Send inccorrect second arg', function() {
    it('should throw an error with the message "Second argument must be..."', function() {
      try {
        Vanic.forEach([], 1);
      } catch(error) {
        assert.strictEqual(error.message, "Second argument must be a function");
      }
    });
  });

  describe('Check array processing', function() {
    it('must modify the array via callback', function() {
      const arr = [1, 2, 3];
      const result = [];

      Vanic.forEach(arr, (item) => result.push(item * 2));

      assert.deepStrictEqual(result, [2, 4, 6]);
    });

    it('must pass the index and source array to the callback', function() {
      let receivedIndexes = [];
      let receivedArrayRef;

      Vanic.forEach([10, 20], (item, index, array) => {
        receivedIndexes.push(index);
        receivedArrayRef = array;
      });

      assert.deepStrictEqual(receivedIndexes, [0, 1]);
      assert.strictEqual(receivedArrayRef.length, 2);
    });

    it('must preserve the scope of the call', function() {
      const scope = { multiplier: 3 };
      let result;

      Vanic.forEach([5], function(item) {
        result = item * this.multiplier;
      }, scope);

      assert.strictEqual(result, 15);
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('forEachKey testing', () => {
  describe('Send not an Object in forEachKey', function() {
    it('should throw an error ', function() {
      assert.throws(
        () => Vanic.forEachKey([], () => {}),
        /First argument must be a non-null object/
      );
    });
  });

  describe('Missing callback in forEachKey', function() {
    it('should throw an error ', function() {
      assert.throws(
        () => Vanic.forEachKey({ a: 1 }),
        /Second argument must be a function/
      );
    });
  });

  describe('Check object processing', function() {
    it('must process all keys of the object', function() {
      const obj = { a: 1, b: 2 };
      const resultKeys = [];
      const resultValues = [];

      Vanic.forEachKey(obj, (key, value) => {
        resultKeys.push(key);
        resultValues.push(value);
      });

      assert.deepStrictEqual(resultKeys.sort(), ['a', 'b']);
      assert.deepStrictEqual(resultValues.sort(), [1, 2]);
    });

    it('must pass the source object to the callback', function() {
      let receivedObj;
      const testObj = { x: 10 };

      Vanic.forEachKey(testObj, (key, value, obj) => {
        receivedObj = obj;
      });

      assert.strictEqual(receivedObj, testObj);
    });

    it('must preserve the scope of the call', function() {
      const scope = { postfix: '!' };
      let result;

      Vanic.forEachKey(
        { key: 'test' },
        function(key, value) { result = value + this.postfix; },
        scope
      );

      assert.strictEqual(result, 'test!');
    });
  });

  // Дополнительный тест для проверки вложенности
  describe('Check nested object processing', function() {
    it('should not handle inherited properties', function() {
      const parent = { inherited: true };
      const obj = Object.create(parent);
      obj.own = true;
      let processedKeys = [];
      Vanic.forEachKey(obj, (key) => processedKeys.push(key));
      assert.deepStrictEqual(processedKeys, ['own']);
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('getRandomString testing', () => {
  describe('Get random string', function () {
    it('should return some random string with length 5 when run without args', function () {
      assert.equal(typeof(Vanic.getRandomString()), "string");
      assert.ok(Vanic.getRandomString().length === 5);
    });
  });

  describe('Get random string with length', function () {
    it('should return string with length 5', function () {
      assert.ok(Vanic.getRandomString(5).length === 5);
    });
  });

  describe('Try get random string and send zero length', function () {
    it('should return string with length 5', function () {
      assert.ok(Vanic.getRandomString(0).length === 5);
    });
  });

  describe('Try get random string with inccorrect args', function () {
    it('should throw an error with the message "The length of the string..."', function() {
      try {
        Vanic.getRandomString('0');
      } catch(error) {
        assert.strictEqual(error.message, "The length of the string, if specified, must be a positive number!");
      }
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('trim testing', () => {
  describe('Simple trim string', function () {
    it('should return trimmed string without spaces around', function () {
      assert.equal(Vanic.trim(' trimmed '), "trimmed");
    });
  });

  describe('Trim zero width and non-break spaces at both end of string', function () {
    it('should return string with length 4 after removing spaces', function () {
      const stringToTrim = ' trim​'; // Try to check input length: Vanic.logg('Input strin for trim length: ', stringToTrim.length);
      assert.ok(Vanic.trim(stringToTrim).length === 4);
    });
  });

  describe('Send inccorrect arg', function() {
    it('should throw an error with the message "Trim work only for strings"', function() {
      try {
        Vanic.trim({});
      } catch(error) {
        assert.strictEqual(error.message, "Trim work only for strings");
      }
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('trimAllSpaces testing', () => {
  describe('Simple trim all spaces', function () {
    it('just remove all spaces', function () {
      assert.equal(Vanic.trimAllSpaces(' trim med '), "trimmed");
    });
  });

  describe('Remove any hidden spaces from string', function () {
    it('should return string with length 4 after removing all spaces', function () {
      const stringToTrim = ' t ri​​​​ ‍m​​​​ ‍'; // Try to check input length: Vanic.logg('Input strin for trim length: ', stringToTrim.length);
      assert.ok(Vanic.trimAllSpaces(stringToTrim).length === 4);
    });
  });

  describe('Send inccorrect arg', function() {
    it('should throw an error with the message "Trim work only for strings"', function() {
      try {
        Vanic.trimAllSpaces(4);
      } catch(error) {
        assert.strictEqual(error.message, "Trim work only for strings");
      }
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('Capitalize testing', () => {
  describe('Try send not a string', function () {
    it('should throw an error with the message "Input for capitalize must be a String!"', function() {
      try {
        Vanic.capz([]);
      } catch(error) {
        assert.strictEqual(error.message, "Input for capitalize must be a String!");
      }
    });
  });

  describe('Simple capitalize', function () {
    it('should capitalized string', function () {
      assert.equal(Vanic.capz('capzed'), "Capzed");
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('DOM Node util', () => {
  beforeEach(() => {
    document.cookie = '';
  });

  describe('deleteNode', () => {
    it('delete existsing node', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      Vanic.deleteNode(div);
      assert(!document.body.contains(div));
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('Cookies utils', () => {
  beforeEach(() => {
    document.cookie = '';
  });

  describe('Cookie functions', () => {
    it('setCookie/getCookie work fine', () => {
      Vanic.setCookie('test', 'value', 1000);
      assert.strictEqual(Vanic.getCookie('test'), 'value');
    });

    it('does not find non-existent cookie', () => {
      assert.strictEqual(Vanic.getCookie('unknown'), '');
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('LocalStorage utils', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('LocalStorage functions', () => {

    it('setLocalItem/getLocalItem saves and read data', () => {
      Vanic.setLocalItem('key', { data: 123 }, 5000);
      assert.deepStrictEqual(Vanic.getLocalItem('key'), { data: 123 });
    });

    it('returns null after expiration', (done) => {
      Vanic.setLocalItem('temp', 'value', 100);
      setTimeout(() => {
        assert.strictEqual(Vanic.getLocalItem('temp'), null);
        done();
      }, 200);
    });
  });
});

//////////////////////////////////////////////////////////////////////////

describe('Toast testing', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('create a container on first call', () => {
    Vanic.toast({ message: 'Test message' });
    const container = document.querySelector('.'+Vanic.DEF_TOAST_CLASSNAME);
    assert.ok(container, 'Контейнер не создан');
    assert.strictEqual(container.children.length, 1, 'Сообщение не добавлено');
  });

  it('applies default styles if class is not specified', () => {
    Vanic.toast({ message: 'Test message' });
    const container = document.querySelector('.'+Vanic.DEF_TOAST_CLASSNAME);
    assert.strictEqual(container.style.position, 'fixed', 'Default styles not applied');
  });

  it('uses a custom container class', () => {
    const custom_class = 'custom-class';
    Vanic.toast({ message: 'Test message', class: custom_class });
    const container = document.querySelector('.'+custom_class);
    assert.ok(
      container.className === Vanic.DEF_TOAST_CLASSNAME + ' ' + custom_class,
      'Classes are applied incorrectly'
    );
  });

  it('automatically hides the message via hideToast', (done) => {
    Vanic.toast({ message: 'Test message', duration: 350 });
    setTimeout(() => {
      const container = document.querySelector('.'+Vanic.DEF_TOAST_CLASSNAME);
      assert.strictEqual(container, null, 'Контейнер не удален');
      done();
    }, 700); // 500ms таймер + запас
  });

  it('deletes the last message if there are several', () => {
    Vanic.toast({ message: 'Test message' });
    Vanic.toast({ message: 'Test message 2' });
    Vanic.hideToast();
    const messages = document.querySelectorAll('.toast-message');
    assert.strictEqual(messages.length, 1, 'Сообщение не удалено');
  });
});

//////////////////////////////////////////////////////////////////////////
