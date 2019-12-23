const array = require('./src/array/index.js')
const object = require('./src/object/index.js')
const cookie = require('./src/cookie/index.js')
const url = require('./src/url/index.js')
const type = require('./src/type/index.js')
const bom = require('./src/bom/index.js')
const dom = require('./src/dom/index.js')

// array
let arrayEqual = array.arrayEqual;
let arrayEach = array.arrayEach;
// object
let isPlainObject = object.isPlainObject;
let assign = object.assign;
// cookie
let setCookie = cookie.setCookie;
let getCookie = cookie.getCookie;
let removeCookie = cookie.removeCookie;
// url
let urlQuery2Object = url.urlQuery2Object;
let object2UrlQuery = url.object2UrlQuery;
// type
let toType = type.toType;
// bom
let browser = bom.browser;
// dom
let domEval = dom.domEval;

let utils = {
	// array
	arrayEqual,
	arrayEach,
	// object
	isPlainObject,
	assign,
	// cookie
	setCookie,
	getCookie,
	removeCookie,
	// url
	urlQuery2Object,
	object2UrlQuery,
	// type
	toType,
	// bom
	browser,
	// dom
	domEval
};

module.exports = utils;