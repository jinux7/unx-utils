(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.nuxUtils = factory());
}(this, (function () { 'use strict';

    /**
     * 
     * @desc 判断两个数组是否相等
     * @param {Array} arr1 
     * @param {Array} arr2 
     * @return {Boolean}
     */
    function arrayEqual(arr1, arr2) {
        if (arr1 === arr2) return true;
        if (arr1.length != arr2.length) return false;
        for (var i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    var arrayEqual_1 = arrayEqual;

    var array = {
    	arrayEqual: arrayEqual_1
    };

    /**
     * @desc 对cookie的设置操作
     * @param {String} name cookie的名
     * @param {String} value cookie的值
     * @param {Date} expires cookie的过期时间
     * @param {String} domain 可以访问该Cookie的域名
     * @param {String} path Cookie的使用路径
     * @param {Boolean} secure 该Cookie是否仅被使用安全协议传输(https)
     */

    const setCookie = function (name, value, expires, domain, path, secure) {
      var cookieText = "";
      cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
      if (expires instanceof Date) {
          cookieText += "; expires=" + expires.toGMTString();
      }
      if (path) {
          cookieText += "; path=" + path;
      }
      if (domain) {
          cookieText += "; domain=" + domain;
      }
      if (secure) {
          cookieText += "; secure";
      }			
      document.cookie = cookieText;
    };

    var setCookie_1 = setCookie;

    /**
     * @desc 获取cookie的操作
     * @param {String} name cookie的名
     */

    const getCookie = function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = "";
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf (";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue; 
    };

    var getCookie_1 = getCookie;

    /**
     * @desc 获取cookie的操作
     * @param {String} name cookie的名
     * @param {String} domain 可以访问该Cookie的域名
     * @param {String} path Cookie的使用路径
     * @param {Boolean} secure 该Cookie是否仅被使用安全协议传输(https)
     */

    const removeCookie = function (name, domain, path, secure) {
        setCookie_1(name, "", Date(0), domain, path, secure);
    };

    var removeCookie_1 = removeCookie;

    var cookie = {
      setCookie: setCookie_1,
      getCookie: getCookie_1,
      removeCookie: removeCookie_1
    };

    /**
     * @desc   url参数转对象
     * @param  {String} url  default: window.location.href
     * @return {Object} 
     */
    function urlQuery2Object(url) {
      url = !url ? window.location.href : url;
      if(url.indexOf('?') === -1) {
          return {};
      }
      var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
      if (search === '') {
          return {};
      }
      search = search.split('&');
      var query = {};
      for (var i = 0; i < search.length; i++) {
          var pair = search[i].split('=');
          query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
      return query;
    }

    var urlQuery2Object_1 = urlQuery2Object;

    /**
     * 
     * @desc   对象序列化
     * @param  {Object} obj 
     * @return {String}
     */
    function object2UrlQuery(obj) {
        if (!obj) return '';
        var pairs = [];

        for (var key in obj) {
            var value = obj[key];

            if (value instanceof Array) {
                for (var i = 0; i < value.length; ++i) {
                    pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
                }
                continue;
            }

            pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }

        return pairs.join('&');
    }

    var object2UrlQuery_1 = object2UrlQuery;

    var url = {
      urlQuery2Object: urlQuery2Object_1,
      object2UrlQuery: object2UrlQuery_1
    };

    // 此模块借鉴jquery
    let class2type = {},
        toString =  class2type.toString;
    let typeArr = "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " );
    typeArr.forEach(name => {
      class2type[ "[object " + name + "]" ] = name.toLowerCase();
    });
    function toType( obj ) {
    	if ( obj == null ) {
    		return obj + "";
    	}
    	return typeof obj === "object" ?
    		class2type[ toString.call( obj ) ] || "object" :
    		typeof obj;
    }

    var toType_1 = toType;

    var type = {
      toType: toType_1
    };

    // array
    let arrayEqual$1 = array.arrayEqual;
    // cookie
    let setCookie$1 = cookie.setCookie;
    let getCookie$1 = cookie.getCookie;
    let removeCookie$1 = cookie.removeCookie;
    // url
    let urlQuery2Object$1 = url.urlQuery2Object;
    let object2UrlQuery$1 = url.object2UrlQuery;
    // type
    let toType$1 = type.toType;

    let utils = {
    	arrayEqual: arrayEqual$1,
    	setCookie: setCookie$1,
    	getCookie: getCookie$1,
    	removeCookie: removeCookie$1,
    	urlQuery2Object: urlQuery2Object$1,
    	object2UrlQuery: object2UrlQuery$1,
    	toType: toType$1
    };

    var unxUtils = utils;

    return unxUtils;

})));
