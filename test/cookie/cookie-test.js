const assert = require('assert');
const cookieModule = require('../../src/cookie/index');
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