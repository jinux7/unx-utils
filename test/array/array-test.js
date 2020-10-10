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
    describe('#array2tree()', () => {
      it('array2tree() should return Array', () => {
        let arr = [
          {id:1,name:'boss',parentId:-1},
          {id:2,name:'lily',parentId:1},
          {id:3,name:'jack',parentId:1},
          {id:4,name:'john',parentId:2},
          {id:5,name:'boss2',parentId:-1},
          {id:6,name:'boss2',parentId:2},
        ]
        let assertTree = [{"id":1,"name":"boss","parentId":-1,"children":[{"id":2,"name":"lily","parentId":1,"children":[{"id":4,"name":"john","parentId":2,"children":[]},{"id":6,"name":"boss2","parentId":2,"children":[]}]},{"id":3,"name":"jack","parentId":1,"children":[]}]},{"id":5,"name":"boss2","parentId":-1,"children":[]}]
        let tree = arrModule.array2tree(arr, -1);
        assert.deepEqual(tree, assertTree);
      });
    });
    describe('#tree2array()', () => {
      it('tree2array() should return Array', () => {
        let arr = [
          {id:1,name:'boss',parentId:-1},
          {id:2,name:'lily',parentId:1},
          {id:3,name:'jack',parentId:1},
          {id:4,name:'john',parentId:2},
          {id:5,name:'boss2',parentId:-1},
          {id:6,name:'boss2',parentId:2},
        ]
        let tree = [{"id":1,"name":"boss","parentId":-1,"children":[{"id":2,"name":"lily","parentId":1,"children":[{"id":4,"name":"john","parentId":2,"children":[]},{"id":6,"name":"boss2","parentId":2,"children":[]}]},{"id":3,"name":"jack","parentId":1,"children":[]}]},{"id":5,"name":"boss2","parentId":-1,"children":[]}]
        let assertArr = arrModule.tree2array(tree);
        assert.equal(arr.length, assertArr.length);
      });
    });
});