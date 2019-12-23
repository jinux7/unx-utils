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

    /**
     * @desc 数组的遍历
     * @param {Array} obj 
     * @param {Function} function(item, index) {} 
     * @return {void}
     */
    function arrayEach (obj, iterate, context) {
        if (obj) {
          if (obj.forEach) {
            obj.forEach(iterate, context);
          } else {
            for (var index = 0, len = obj.length; index < len; index++) {
              iterate.call(context, obj[index], index, obj);
            }
          }
        }
      }
      
      var arrayEach_1 = arrayEach;

    var array = {
    	arrayEqual: arrayEqual_1,
    	arrayEach: arrayEach_1
    };

    var class2type = {};

    /**
     * @desc 判断指定参数是否是一个纯粹的对象，所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的。
     * @param { Object }
     * @return { Boolean }
     */

    const getProto = Object.getPrototypeOf;
    const hasOwn = class2type.hasOwnProperty;
    const fnToString = hasOwn.toString;
    const ObjectFunctionString = fnToString.call( Object );

    const isPlainObject = function( obj ) {
      var proto, Ctor;

      // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects
      if ( !obj || toString.call( obj ) !== "[object Object]" ) {
        return false;
      }

      proto = getProto( obj );

      // Objects with no prototype (e.g., `Object.create( null )`) are plain
      if ( !proto ) {
        return true;
      }

      // Objects with prototype are plain iff they were constructed by a global Object function
      Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
      return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
    };

    var isPlainObject_1 = isPlainObject;

    /**
     * @desc 这是一个assign函数，也可以叫做extend函数，这里的代码完全copy自jquery4.0-pre版本
     * @param { boolean } 可传可不传,传true,深assign
     * @param { Object } assign的目标对象
     * @param { Object } assign的源对象
     */

    const assign = function() {
    	var options, name, src, copy, copyIsArray, clone,
    		target = arguments[ 0 ] || {},
    		i = 1,
    		length = arguments.length,
    		deep = false;

    	// Handle a deep copy situation
    	if ( typeof target === "boolean" ) {
    		deep = target;

    		// Skip the boolean and the target
    		target = arguments[ i ] || {};
    		i++;
    	}

    	// Handle case when target is a string or something (possible in deep copy)
    	if ( typeof target !== "object" && typeof target !== "function" ) {
    		target = {};
    	}

      // 此处是jquery源码中，如果只有一个对象，那么把这个对象的属性直接assign到jquery的实例中去，这里不需要
    	// Extend jQuery itself if only one argument is passed
    	// if ( i === length ) {
    	// 	target = this;
    	// 	i--;
    	// }

    	for ( ; i < length; i++ ) {

    		// Only deal with non-null/undefined values
    		if ( ( options = arguments[ i ] ) != null ) {

    			// Extend the base object
    			for ( name in options ) {
    				copy = options[ name ];

    				// Prevent Object.prototype pollution
    				// Prevent never-ending loop
    				if ( name === "__proto__" || target === copy ) {
    					continue;
    				}

    				// Recurse if we're merging plain objects or arrays
    				if ( deep && copy && ( isPlainObject_1( copy ) ||
    					( copyIsArray = Array.isArray( copy ) ) ) ) {
    					src = target[ name ];

    					// Ensure proper type for the source value
    					if ( copyIsArray && !Array.isArray( src ) ) {
    						clone = [];
    					} else if ( !copyIsArray && !isPlainObject_1( src ) ) {
    						clone = {};
    					} else {
    						clone = src;
    					}
    					copyIsArray = false;

    					// Never move original objects, clone them
    					target[ name ] = assign( deep, clone, copy );

    				// Don't bring in undefined values
    				} else if ( copy !== undefined ) {
    					target[ name ] = copy;
    				}
    			}
    		}
    	}

    	// Return the modified object
    	return target;
    };
    var assign_1 = assign;

    var object = {
      isPlainObject: isPlainObject_1,
      assign: assign_1
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
    /**
     * @desc 返回所传参数的类型
     * @param { any }
     * @return { String } 具体的类型
     */

    const toString$1 =  class2type.toString;
    let typeArr = "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " );
    typeArr.forEach(name => {
      class2type[ "[object " + name + "]" ] = name.toLowerCase();
    });
    function toType( obj ) {
    	if ( obj == null ) {
    		return obj + "";
    	}
    	return typeof obj === "object" ?
    		class2type[ toString$1.call( obj ) ] || "object" :
    		typeof obj;
    }

    var toType_1 = toType;

    var type = {
      toType: toType_1
    };

    var strUndefined = {};

    /**
     * @desc 获取浏览器的内核属性等信息
     * @return {Object} 例：{"isNode":false,"isMobile":true,"isPC":false,"isDoc":true,"-webkit":true,"-khtml":false,"-moz":false,"-ms":false,"-o":false,"edge":false,"firefox":false,"msie":false,"safari":true,"isLocalStorage":true,"isSessionStorage":true}
     */

    const staticDocument = typeof document === strUndefined ? 0 : document;
    const staticWindow = typeof window === strUndefined ? 0 : window;



    /* eslint-disable valid-typeof */
    function isBrowseStorage (storage) {
      try {
        var testKey = '__xe_t';
        storage.setItem(testKey, 1);
        storage.removeItem(testKey);
        return true
      } catch (e) {
        return false
      }
    }

    function isBrowseType (type) {
      return navigator.userAgent.indexOf(type) > -1
    }

    /**
      * 获取浏览器内核
      * @return Object
      */
    function browser () {
      var $body, isChrome, isEdge;
      var isMobile = false;
      var result = {
        isNode: false,
        isMobile: isMobile,
        isPC: false,
        isDoc: !!staticDocument
      };
      if (!staticWindow && typeof process !== strUndefined) {
        result.isNode = true;
      } else {
        isEdge = isBrowseType('Edge');
        isChrome = isBrowseType('Chrome');
        isMobile = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent);
        if (result.isDoc) {
          $body = staticDocument.body || staticDocument.documentElement;
          arrayEach_1(['webkit', 'khtml', 'moz', 'ms', 'o'], function (core) {
            result['-' + core] = !!$body[core + 'MatchesSelector'];
          });
        }
        assign_1(result, {
          edge: isEdge,
          firefox: isBrowseType('Firefox'),
          msie: !isEdge && result['-ms'],
          safari: !isChrome && !isEdge && isBrowseType('Safari'),
          isMobile: isMobile,
          isPC: !isMobile,
          isLocalStorage: isBrowseStorage(staticWindow.localStorage),
          isSessionStorage: isBrowseStorage(staticWindow.sessionStorage)
        });
      }
      return result
    }

    var browser_1 = browser;

    var bom = {
    	browser: browser_1
    };

    var document$1 = window.document;

    /**
     * @desc 动态的向dom文档中插入script语句并执行,代码copy自jquery4.0-pre
     * @param { String } js语句的字符串
     * @return { void }
     */


    var preservedScriptAttributes = {
    	type: true,
    	src: true,
    	nonce: true,
    	noModule: true
    };

    function DomEval( code, node, doc ) {
    	doc = doc || document$1;

    	var i, val,
    		script = doc.createElement( "script" );

    	script.text = code;
    	if ( node ) {
    		for ( i in preservedScriptAttributes ) {

    			// Support: Firefox <=64 - 66+, Edge <=18+
    			// Some browsers don't support the "nonce" property on scripts.
    			// On the other hand, just using `getAttribute` is not enough as
    			// the `nonce` attribute is reset to an empty string whenever it
    			// becomes browsing-context connected.
    			// See https://github.com/whatwg/html/issues/2369
    			// See https://html.spec.whatwg.org/#nonce-attributes
    			// The `node.getAttribute` check was added for the sake of
    			// `jQuery.globalEval` so that it can fake a nonce-containing node
    			// via an object.
    			val = node[ i ] || node.getAttribute && node.getAttribute( i );
    			if ( val ) {
    				script.setAttribute( i, val );
    			}
    		}
    	}
    	doc.head.appendChild( script ).parentNode.removeChild( script );
    }

    var domEval = DomEval;

    /**
     * @desc 手动触发dom事件函数
     * @param { Element } el dom节点元素 
     * @param { String } evt 事件名称
     * @param { Object } detail 对该事件的描述信息对象 
     */
    const trigger = function(el, evt, detail) {
    	detail = detail || {};
        var e, opt = {
                bubbles: true,
                cancelable: true,
                detail: detail
            };

        try {
            if (typeof CustomEvent !== 'undefined') {
                e = new CustomEvent(evt, opt);
                if (el) {
                    el.dispatchEvent(e);
                }
            } else {
                e = document.createEvent("CustomEvent");
                e.initCustomEvent(evt, true, true, detail);
                if (el) {
                    el.dispatchEvent(e);
                }
            }
        } catch (ex) {
            console.warn("jinux-trigger is not supported by environment.");
        }
    };

    var trigger_1 = trigger;

    var dom = {
      domEval,
      trigger: trigger_1
    };

    /**
     * @desc   现金额转大写
     * @param  { Number } n 
     * @return { String }
     */
    function price2chinese(n) {
      var fraction = ['角', '分'];
      var digit = [
          '零', '壹', '贰', '叁', '肆',
          '伍', '陆', '柒', '捌', '玖'
      ];
      var unit = [
          ['元', '万', '亿'],
          ['', '拾', '佰', '仟']
      ];
      var head = n < 0 ? '欠' : '';
      n = Math.abs(n);
      var s = '';
      for (var i = 0; i < fraction.length; i++) {
          s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
      }
      s = s || '整';
      n = Math.floor(n);
      for (var i = 0; i < unit[0].length && n > 0; i++) {
          var p = '';
          for (var j = 0; j < unit[1].length && n > 0; j++) {
              p = digit[n % 10] + unit[1][j] + p;
              n = Math.floor(n / 10);
          }
          s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
      }
      return head + s.replace(/(零.)*零元/, '元')
          .replace(/(零.)+/g, '零')
          .replace(/^整$/, '零元整');
    }
    var price2chinese_1 = price2chinese;

    var string = {
      price2chinese: price2chinese_1
    };

    // array
    let arrayEqual$1 = array.arrayEqual;
    let arrayEach$1 = array.arrayEach;
    // object
    let isPlainObject$1 = object.isPlainObject;
    let assign$1 = object.assign;
    // cookie
    let setCookie$1 = cookie.setCookie;
    let getCookie$1 = cookie.getCookie;
    let removeCookie$1 = cookie.removeCookie;
    // url
    let urlQuery2Object$1 = url.urlQuery2Object;
    let object2UrlQuery$1 = url.object2UrlQuery;
    // type
    let toType$1 = type.toType;
    // bom
    let browser$1 = bom.browser;
    // dom
    let domEval$1 = dom.domEval;
    let trigger$1 = dom.trigger;
    // string
    let price2chinese$1 = string.price2chinese;
    let utils = {
    	// array
    	arrayEqual: arrayEqual$1,
    	arrayEach: arrayEach$1,
    	// object
    	isPlainObject: isPlainObject$1,
    	assign: assign$1,
    	// cookie
    	setCookie: setCookie$1,
    	getCookie: getCookie$1,
    	removeCookie: removeCookie$1,
    	// url
    	urlQuery2Object: urlQuery2Object$1,
    	object2UrlQuery: object2UrlQuery$1,
    	// type
    	toType: toType$1,
    	// bom
    	browser: browser$1,
    	// dom
    	domEval: domEval$1,
    	trigger: trigger$1,
    	// string
    	price2chinese: price2chinese$1,
    };

    var unxUtils = utils;

    return unxUtils;

})));
