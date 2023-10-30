const assert = require('assert');
const missingNumber = require('./missingNumber');

describe('missingNumber', function () {
    it('should return "2" when given [3, 0, 1]', function () {
      assert.equal(missingNumber([3, 0, 1]), 2);
    });

    it('should return "2" when given [0, 1]', function () {
      assert.equal(missingNumber([0, 1]), 2);
    });

    it('should return "8" when given [9, 6, 4, 2, 3, 5, 7, 0, 1]', function () {
      assert.equal(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
    });

    it('should return "0" when given [1, 2, 3, 4, 5]', function () {
      assert.equal(missingNumber([1, 2, 3, 4, 5]), 0);
    });

    it('should return "1" when given [10, 8, 6, 7, 9, 5, 0, 4, 3, 2]', function () {
      assert.equal(missingNumber([10, 8, 6, 7, 9, 5, 0, 4, 3, 2]), 1);
    });
});
