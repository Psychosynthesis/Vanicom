const Vanic = require('../build');
const assert = require('assert');

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
