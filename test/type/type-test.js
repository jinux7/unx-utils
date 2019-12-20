const assert = require('assert');
const typeModule = require('../../src/type/index');

describe('#type.js', () => {
    describe('#toType()', () => {
        it('toType() should return string', () => {
            assert.strictEqual(typeModule.toType({}), 'object');
        });
        it('toType() should return string', () => {
            assert.strictEqual(typeModule.toType([]), 'array');
        });
        it('toType() should return string', () => {
            assert.strictEqual(typeModule.toType(true), 'boolean');
        });
        it('toType() should return string', () => {
            assert.strictEqual(typeModule.toType(25), 'number');
        });
        it('toType() should return string', () => {
            assert.strictEqual(typeModule.toType('str'), 'string');
        });
        it('toType() should return string', () => {
            assert.strictEqual(typeModule.toType(function() {}), 'function');
        });
        it('toType() should return string', () => {
            assert.strictEqual(typeModule.toType(new Date()), 'date');
        });
        it('toType() should return string', () => {
            assert.strictEqual(typeModule.toType(/regexp/g), 'regexp');
        });
        it('toType() should return string', () => {
            assert.strictEqual(typeModule.toType(new Error()), 'error');
        });
        it('toType() should return string', () => {
            assert.strictEqual(typeModule.toType(Symbol()), 'symbol');
        });
    });
});