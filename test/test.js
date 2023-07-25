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
      assert.equal(Vanic.isString(null), false);
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
