const assert = require('assert');
const numberModule = require('../../src/number/index');

describe('#string.js', () => {
    describe('#bigNumAdd()', () => {
        it('bigNumAdd() should big string num sum', () => {
            assert.strictEqual(numberModule.bigNumAdd('888888888888888888888888888888', '1'), '888888888888888888888888888889');
        });
    });
});