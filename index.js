const array = require('./src/array/index.js')
const object = require('./src/object/index.js')
const cookie = require('./src/cookie/index.js')
const url = require('./src/url/index.js')
const type = require('./src/type/index.js')
const bom = require('./src/bom/index.js')
const dom = require('./src/dom/index.js')
const string = require('./src/string/index.js')
const date = require('./src/date/index.js')
const random = require('./src/random/index.js')
const fn = require('./src/function/index.js')

// array
let arrayEqual = array.arrayEqual;
let arrayEach = array.arrayEach;
let arrFlat2complex = array.arrFlat2complex;
// object
let isPlainObject = object.isPlainObject;
let assign = object.assign;
let deepClone = object.deepClone;
let isEmptyObject = object.isEmptyObject;
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
let ajax = bom.ajax;
// dom
let domEval = dom.domEval;
let trigger = dom.trigger;
let getStyle = dom.getStyle;
let parseHtml = dom.parseHtml;
let getTopLeftInBody = dom.getTopLeftInBody;
let hasClassName = dom.hasClassName;
let addClassName = dom.addClassName;
let removeClassName = dom.removeClassName;
// string
let price2chinese = string.price2chinese;
// date
let date2string = date.date2string;
let getRangeDate = date.getRangeDate;
// random
let randomNum = random.randomNum;
let randomColor = random.randomColor;
// function
let debounce = fn.debounce;
let throttle = fn.throttle;
let curry = fn.curry;
let compose = fn.compose;
let interval = fn.interval;

let utils = {
	// array
	arrayEqual,
	arrayEach,
	arrFlat2complex,
	// object
	isPlainObject,
	assign,
	deepClone,
	isEmptyObject,
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
	ajax,
	// dom
	domEval,
	trigger,
	getStyle,
	parseHtml,
	hasClassName,
	addClassName,
  removeClassName,
	// string
	price2chinese,
	// date
	date2string,
	getRangeDate,
	//random
	randomNum,
	randomColor,
	//function
	debounce,
	throttle,
	curry,
	compose,
	interval,
	getTopLeftInBody
};

module.exports = utils;