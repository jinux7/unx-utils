// 因为用到了cookie的读写，cookie在nodejs里需要jsdom模块来模拟document
const jsdom = require("jsdom"); 
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

require('./array/array-test.js');
require('./url/url-test.js');
require('./cookie/cookie-test.js');
require('./type/type-test.js');
require('./object/object-test.js');
require('./string/string-test.js');
require('./date/date-test.js');
require('./random/random-test.js');
// require('./dom/dom-test.js'); // 暂时无法测试,在test/index.html测试
// require('./bom/bom-test.js'); // 暂时无法测试,在test/index.html测试
