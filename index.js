const array = require('./src/array/index.js')
const cookie = require('./src/cookie/index.js')
const url = require('./src/url/index.js')
const type = require('./src/type/index.js')

// array
let arrayEqual = array.arrayEqual;
// cookie
let setCookie = cookie.setCookie;
let getCookie = cookie.getCookie;
let removeCookie = cookie.removeCookie;
// url
let urlQuery2Object = url.urlQuery2Object;
let object2UrlQuery = url.object2UrlQuery;
// type
let toType = type.toType;

let utils = {
	arrayEqual,
	setCookie,
	getCookie,
	removeCookie,
	urlQuery2Object,
	object2UrlQuery,
	toType
};

module.exports = utils;