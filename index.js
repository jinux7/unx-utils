import array from './src/array/index.js'
import cookie from './src/cookie/index.js'
import url from './src/url/index.js'
// array
let arrayEqual = array.arrayEqual;
// cookie
let setCookie = cookie.setCookie;
let getCookie = cookie.getCookie;
let removeCookie = cookie.removeCookie;
// url
let urlQuery2Object = url.urlQuery2Object;
let object2UrlQuery = url.object2UrlQuery;


let utils = {
	arrayEqual,
	setCookie,
	getCookie,
	removeCookie,
	urlQuery2Object,
	object2UrlQuery
};

export default utils;