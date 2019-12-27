const assert = require('assert');
const objModule = require('../../src/object/index');

describe('#object.js', () => {
    describe('#isPlainObject()', () => {
        it('isPlainObject() should return true', () => {
          let obj = {};
          assert.strictEqual(objModule.isPlainObject(obj), true);
        });
    });
    describe('#assign()', () => {
      it('assign() should return true', () => {
        let obj = {work: 'student'}, 
            parentObj = {name: 'mike', age: 18},
            targetObj = {name: 'mike', age: 18, work: 'student'}
        assert.deepEqual(objModule.assign(false, obj, parentObj), targetObj);
      });
    });
    describe('#deepClone()', () => {
      it('deepClone() should return clone value', () => {
        let obj = {children: {name: 'mike'}};
        let cloneObj = objModule.deepClone(obj);
        cloneObj.children.name = 'william';
        assert.strictEqual(obj.children.name, 'mike');
      });
    });
    describe('#isEmptyObject()', () => {
      it('isEmptyObject() should return true', () => {
        let obj = {};
        assert.strictEqual(objModule.isEmptyObject(obj), true);
      });
    });
});