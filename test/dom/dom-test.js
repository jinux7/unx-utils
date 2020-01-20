const assert = require('assert');
const domModule = require('../../src/dom/index');

describe('#dom.js', () => {
    // 此环境下不好使
    // describe('#domEval()', () => {
    //     it('domEval() should run js source string', () => {
    //         window.testDomEvalStr = 'domEvalTest';
    //         domModule.domEval('window.testDomEvalStr="new-domEvalTest"');
    //         assert.strictEqual(window.testDomEvalStr, 'new-domEvalTest');
    //     });
    // });
    describe('#getStyle()', () => {
        it("getStyle() should return selected Element's css style", () => {
            var color = "blue";
            document.body.style.color = color;
            var strStyle = domModule.getStyle(document.body, 'color');
            assert.strictEqual(strStyle, color);
        });
    });
    describe('#parseHtml()', () => {
        it("parseHtml() should parse html string,return Element Object", () => {
            var htmlStr = '<div><span>hello parseHtml</span></div>'
            var nSpan = domModule.parseHtml(htmlStr).querySelector('span');
            assert.strictEqual(nSpan.innerHTML, 'hello parseHtml');
        });
    });
});