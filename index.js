const array = require('./src/array/index.js')
const cookie = require('./src/cookie/index.js')
const url = require('./src/url/index.js')
const type = require('./src/type/index.js')
const bom = require('./src/bom/index.js')

// array
let arrayEqual = array.arrayEqual;
let arrayEach = array.arrayEach;
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

let utils = {
	arrayEqual,
	arrayEach,
	setCookie,
	getCookie,
	removeCookie,
	urlQuery2Object,
	object2UrlQuery,
	toType,
	browser
};

module.exports = utils;