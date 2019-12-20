// 因为用到了cookie的读写，cookie在nodejs里需要jsdom模块来模拟document
const jsdom = require("jsdom"); 
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.document = dom;
require('./array/array-test.js');
require('./url/url-test.js');
require('./cookie/cookie-test.js');
require('./type/type-test.js');
