const assert = require('assert');
const arrModule = require('../../src/array/index');

describe('#array.js', () => {
    describe('#arrayEqual()', () => {
        it('arrayEqual() should return true', () => {
          let arr1 = [1,2,3], arr2 = [1,2,3];
          assert.strictEqual(arrModule.arrayEqual(arr1, arr2), true);
        });
    });
    describe('#arrayEach()', () => {
        it('arrayEach() should return true', () => {
          let arr1 = [1,2,3], arr2 = [11,12,13];
          let arr3 = [];
          arrModule.arrayEach(arr1, function(item, index) {
            arr3.push(item + 10);
          });
          assert.deepEqual(arr3, arr2);
        });
    });
    describe('#arrFlat2complex()', () => {
      it('arrFlat2complex() should return Array', () => {
        let arr1 = [1,2,3,4,5,6], arr2 = [[1,2,3],[4,5,6]];
         var newArr = arrModule.arrFlat2complex(arr1, 3);
        assert.deepEqual(newArr, arr2);
      });
  });
});