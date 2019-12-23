const assert = require('assert');
const stringModule = require('../../src/string/index.js');

describe('#string.js', () => {
    describe('#price2chinese()', () => {
        it('price2chinese() should return chinese string', () => {
            assert.strictEqual(stringModule.price2chinese(66666.66), '陆万陆仟陆佰陆拾陆元陆角陆分');
        });
    });
});