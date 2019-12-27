const assert = require('assert');
const randomModule = require('../../src/random/index.js');

describe('#random.js', () => {
    describe('#randomNum()', () => {
        it('randomNum() should return random number', () => {
            assert.strictEqual(randomModule.randomNum(2,10,true)>=2&&randomModule.randomNum(2,10,true)<=10, true);
        });
    });
    describe('#randomColor()', () => {
        it('randomColor() should return random color string', () => {
            assert.strictEqual(/^\#[0-9a-f]{6,6}$/g.test(randomModule.randomColor()), true);
        });
    });
});