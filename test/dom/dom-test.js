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
    describe('#className', () => {
        it("addClassName() should add a className into a element", () => {
            domModule.addClassName(document.body, 'test-class');
            assert.strictEqual(document.body.className.trim(), 'test-class');
        });
        it("hasClassName() should return boolean", () => {
            var flag = domModule.hasClassName(document.body, 'test-class');
            assert.strictEqual(flag, true);
        });
        it("removeClassName() should remove a className from a element", () => {
            domModule.removeClassName(document.body, 'test-class');
            assert.strictEqual(document.body.className, '');
        });
    });
});