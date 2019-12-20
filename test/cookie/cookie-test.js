const assert = require('assert');
// 因为用到了cookie的读写，cookie在nodejs里需要jsdom模块来模拟document
const jsdom = require("jsdom"); 
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const cookieModule = require('../../src/cookie/index');
global.document = dom;
describe('#cookie.js', () => {
    describe('#setCookie()&getCookie()', () => {
        it('getCookie() should return string', async () => {
            cookieModule.setCookie('test', 'value', new Date('2035-12-25'));
            assert.strictEqual(cookieModule.getCookie('test'), 'value');
        });
    });
    describe('#removeCookie()', () => {
        it('removeCookie() should return void', async () => {
            cookieModule.removeCookie('test');
            assert.strictEqual(cookieModule.getCookie('test'), '');
        });
    });
});