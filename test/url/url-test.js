const assert = require('assert');
const urlModule = require('../../src/url/index');

describe('#url.js', () => {
    describe('#urlQuery2Object()', () => {
        it('urlQuery2Object() should return object', () => {
          let url = 'http://127.0.0.1?name=mike&age=18';
          let obj = {
              name: 'mike',
              age: '18'
          };
          assert.deepEqual(urlModule.urlQuery2Object(url), obj);
        });
    });
    describe('#object2UrlQuery()', () => {
        it('object2UrlQuery() should return string', () => {
          let url = 'name=mike&age=18';
          let obj = {
              name: 'mike',
              age: '18'
          };
          assert.strictEqual(urlModule.object2UrlQuery(obj), url);
        });
    });
});