import array from './src/array/index.js'
import cookie from './src/cookie/index.js'
// array
let arrayEqual = array.arrayEqual;
// cookie
let setCookie = cookie.setCookie;
let getCookie = cookie.getCookie;
let removeCookie = cookie.removeCookie;

let utils = {
	arrayEqual,
	setCookie,
	getCookie,
	removeCookie
};

export default utils;