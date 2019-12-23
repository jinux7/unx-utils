const assert = require('assert');
const domModule = require('../../src/dom/index');

describe('#dom.js', () => {
    describe('#domEval()', () => {
        it('domEval() should run js source string', () => {
            window.testDomEvalStr = 'domEvalTest';
            domModule.domEval('window.testDomEvalStr="new-domEvalTest"');
            assert.strictEqual(window.testDomEvalStr, 'new-domEvalTest');
        });
    });
});