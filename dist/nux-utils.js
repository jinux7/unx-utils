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
    function arrayEach(obj, iterate, context) {
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

    var getProto = Object.getPrototypeOf;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);

    var isPlainObject = function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    };

    var isPlainObject_1 = isPlainObject;

    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    /**
     * @desc 这是一个assign函数，也可以叫做extend函数，这里的代码完全copy自jquery4.0-pre版本
     * @param { boolean } 可传可不传,传true,深assign
     * @param { Object } assign的目标对象
     * @param { Object } assign的源对象
     */

    var assign = function assign() {
      var options,
          name,
          src,
          copy,
          copyIsArray,
          clone,
          target = arguments[0] || {},
          i = 1,
          length = arguments.length,
          deep = false; // Handle a deep copy situation

      if (typeof target === "boolean") {
        deep = target; // Skip the boolean and the target

        target = arguments[i] || {};
        i++;
      } // Handle case when target is a string or something (possible in deep copy)


      if (_typeof(target) !== "object" && typeof target !== "function") {
        target = {};
      } // 此处是jquery源码中，如果只有一个对象，那么把这个对象的属性直接assign到jquery的实例中去，这里不需要
      // Extend jQuery itself if only one argument is passed
      // if ( i === length ) {
      // 	target = this;
      // 	i--;
      // }


      for (; i < length; i++) {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {
          // Extend the base object
          for (name in options) {
            copy = options[name]; // Prevent Object.prototype pollution
            // Prevent never-ending loop

            if (name === "__proto__" || target === copy) {
              continue;
            } // Recurse if we're merging plain objects or arrays


            if (deep && copy && (isPlainObject_1(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name]; // Ensure proper type for the source value

              if (copyIsArray && !Array.isArray(src)) {
                clone = [];
              } else if (!copyIsArray && !isPlainObject_1(src)) {
                clone = {};
              } else {
                clone = src;
              }

              copyIsArray = false; // Never move original objects, clone them

              target[name] = assign(deep, clone, copy); // Don't bring in undefined values
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      } // Return the modified object


      return target;
    };

    var assign_1 = assign;

    /**
     * @desc 深拷贝，支持常见类型
     * @param { Any } values
     * @return { Any } values
     */
    function deepClone(values) {
      var copy; // Handle the 3 simple types, and null or undefined

      if (null == values || "object" != _typeof(values)) return values; // Handle Date

      if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
      } // Handle Array


      if (values instanceof Array) {
        copy = [];

        for (var i = 0, len = values.length; i < len; i++) {
          copy[i] = deepClone(values[i]);
        }

        return copy;
      } // Handle Object


      if (values instanceof Object) {
        copy = {};

        for (var attr in values) {
          if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
        }

        return copy;
      }

      throw new Error("Unable to copy values! Its type isn't supported.");
    }

    var deepClone_1 = deepClone;

    /**
     * @desc   判断`obj`是否为空
     * @param  { Any } obj
     * @return {Boolean}
     */
    function isEmptyObject(obj) {
      if (!obj || _typeof(obj) !== 'object' || Array.isArray(obj)) return false;
      return !Object.keys(obj).length;
    }

    var isEmptyObject_1 = isEmptyObject;

    var object = {
      isPlainObject: isPlainObject_1,
      assign: assign_1,
      deepClone: deepClone_1,
      isEmptyObject: isEmptyObject_1
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
    var setCookie = function setCookie(name, value, expires, domain, path, secure) {
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
    var getCookie = function getCookie(name) {
      var cookieName = encodeURIComponent(name) + "=",
          cookieStart = document.cookie.indexOf(cookieName),
          cookieValue = "";

      if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(";", cookieStart);

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

    var removeCookie = function removeCookie(name, domain, path, secure) {
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

      if (url.indexOf('?') === -1) {
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

    /**
     * @desc 返回所传参数的类型
     * @param { any }
     * @return { String } 具体的类型
     */

    var toString$1 = class2type.toString;
    var typeArr = "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ");
    typeArr.forEach(function (name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });

    function toType(obj) {
      if (obj == null) {
        return obj + "";
      }

      return _typeof(obj) === "object" ? class2type[toString$1.call(obj)] || "object" : _typeof(obj);
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

    var staticDocument = (typeof document === "undefined" ? "undefined" : _typeof(document)) === strUndefined ? 0 : document;
    var staticWindow = (typeof window === "undefined" ? "undefined" : _typeof(window)) === strUndefined ? 0 : window;
    /* eslint-disable valid-typeof */

    function isBrowseStorage(storage) {
      try {
        var testKey = '__xe_t';
        storage.setItem(testKey, 1);
        storage.removeItem(testKey);
        return true;
      } catch (e) {
        return false;
      }
    }

    function isBrowseType(type) {
      return navigator.userAgent.indexOf(type) > -1;
    }
    /**
      * 获取浏览器内核
      * @return Object
      */


    function browser() {
      var $body, isChrome, isEdge;
      var isMobile = false;
      var result = {
        isNode: false,
        isMobile: isMobile,
        isPC: false,
        isDoc: !!staticDocument
      };

      if (!staticWindow && (typeof process === "undefined" ? "undefined" : _typeof(process)) !== strUndefined) {
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

      return result;
    }

    var browser_1 = browser;

    /**
     * @desc ajax请求的工具函数
     * @param  { Object } opt 参数的配置json对象
     * @param { String } opt.url ajax请求的地址
     * @param { String } opt.type ajax请求类型
     * @param { Object } opt.data ajax请求的数据，json格式
     * @param { String } opt.contentType request.hrader设置 如：'application/x-www-form-urlencoded','text/plain;charset=UTF-8','application/json','multipart/form-data'
     * @param { Number } opt.timeOut 超时ajax abort的时间设置
     * @param { Array } opt.files 当opt.contentType设置为multipart/form-data时，存储的是上传的文件数组
     * @param { Object } opt.progress 是一个json对象，opt.progress.enable=true时，开始上传进度功能，opt.progress.receiveHandle实时进度回调函数，opt.progress.successHandle上传进度完成的回调
     * @param { Function } opt.before ajax请求之前的回调函数
     * @param { Function } opt.success ajax请求成功的回调函数
     * @param { Function } opt.error ajax请求失败的回调函数
     * @param { Function } opt.complete ajax请求完成之后的回调函数
     */
    var ajax = function ajax(opt) {
      ieAjaxInit(); //默认参数配置

      var defaultOpt = {
        url: '',
        type: 'GET',
        data: null,
        contentType: 'application/x-www-form-urlencoded',
        //'text/plain;charset=UTF-8','application/json','multipart/form-data'
        timeOut: 5000,
        files: [],
        progress: null,
        before: fn,
        success: fn,
        error: fn,
        complete: fn
      }; //参数对象继承获取新参数对象

      if (Object.assign) {
        var opt = Object.assign({}, defaultOpt, opt);
      } else {
        for (var name in defaultOpt) {
          defaultOpt[name] = opt[name] || defaultOpt[name];
        }

        var opt = defaultOpt;
      }

      requestData(opt);
    }; //将json格式数据转成application/x-www-form-urlencoded格式数据


    function encodeFormData(data) {
      if (!data) return '';
      var pairs = [];

      for (var name in data) {
        if (!data.hasOwnProperty(name)) continue;
        if (typeof data[name] === 'function') continue;
        var value = data[name].toString();
        name = encodeURIComponent(name.replace('%20', '+'));
        value = encodeURIComponent(value.replace('%20', '+'));
        pairs.push(name + '=' + value);
      }

      return pairs.join('&');
    } //ajax的get请求函数


    function getData(opt) {
      var request = new window.XMLHttpRequest();
      var timeoutFlag = false; //是否超时
      //启动计时器，做超时处理

      var timer = setTimeout(function () {
        timeoutFlag = true;
        request.abort();
      }, opt.timeOut);
      request.open('GET', opt.url + '?' + encodeFormData(opt.data));
      opt.before(); //请求之前执行before函数

      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (timeoutFlag) return;
          clearTimeout(timer);

          if (request.status === 200) {
            var type = request.getResponseHeader('Content-Type'); //检查type类型做相应的解析处理

            if (type.indexOf('xml') !== -1 && request.responseXML) {
              //xml相应
              opt.success(request.responseXML);
            } else if (type.indexOf('application/json') !== -1) {
              //json相应
              opt.success(JSON.parse(request.responseText));
            } else {
              opt.success(request.responseText);
            }
          } else {
            opt.error(request);
          }

          opt.complete();
        }
      };

      request.send(null);
    } //ajax的post请求函数


    function postData(opt) {
      var request = new XMLHttpRequest(),
          sendData = null;
      var timeoutFlag = false; //是否超时
      //启动计时器，做超时处理

      var timer = setTimeout(function () {
        timeoutFlag = true;
        request.abort();
      }, opt.timeOut);
      request.open('POST', opt.url);

      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (timeoutFlag) return;
          clearTimeout(timer);

          if (request.status === 200) {
            var type = request.getResponseHeader('Content-Type'); //检查type类型做相应的解析处理

            if (type.indexOf('xml') !== -1 && request.responseXML) {
              //xml相应
              opt.success(request.responseXML);
            } else if (type.indexOf('application/json') !== -1) {
              //json相应
              opt.success(JSON.parse(request.responseText));
            } else {
              opt.success(request.responseText);
            }
          } else {
            opt.error(request);
          }

          opt.complete();
        }
      }; //处理接收进度事件


      if (opt.progress.enable && request.upload) {
        request.upload.onprogress = function (ev) {
          if (ev.lengthComputable) {
            opt.progress.receiveHandle(ev);
          }
        };

        request.upload.onload = function (ev) {
          opt.progress.successHandle(ev);
        };
      }

      if (opt.contentType === 'application/x-www-form-urlencoded') {
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        sendData = encodeFormData(opt.data);
      } else if (opt.contentType === 'application/json') {
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        sendData = JSON.stringify(opt.data);
      } else if (opt.contentType === 'multipart/form-data') {
        var fd = new FormData();

        for (var name in opt.data) {
          if (!opt.data.hasOwnProperty(name)) continue;
          if (typeof opt.data[name] === 'function') continue;
          fd.append(name, opt.data[name]);
        }

        for (var i = 0; i < opt.files.length; i++) {
          fd.append('file' + i, opt.files[i]);
        }

        sendData = fd;
      }

      request.send(sendData);
    } //ajax请求函数，在函数内再调用get或者post


    function requestData(opt) {
      if (opt.type === 'GET') {
        getData(opt);
      } else {
        postData(opt);
      }
    } // 定义一个空函数


    function fn() {} // 如果是ie6，创建XMLHttpRequest对象


    function ieAjaxInit() {
      if (window.XMLHttpRequest === undefined) {
        window.XMLHttpRequest = function () {
          try {
            return new ActiveXObject('Msxml2.XMLHTTP.6.0');
          } catch (e1) {
            try {
              return new ActiveXObject('Msxml2.XMLHTTP.3.0');
            } catch (e2) {
              throw new Error('不支持XMLHttpRequest');
            }
          }
        };
      }
    }

    var ajax_1 = ajax;

    var bom = {
      browser: browser_1,
      ajax: ajax_1
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

    function DomEval(code, node, doc) {
      doc = doc || document$1;
      var i,
          val,
          script = doc.createElement("script");
      script.text = code;

      if (node) {
        for (i in preservedScriptAttributes) {
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
          val = node[i] || node.getAttribute && node.getAttribute(i);

          if (val) {
            script.setAttribute(i, val);
          }
        }
      }

      doc.head.appendChild(script).parentNode.removeChild(script);
    }

    var domEval = DomEval;

    /**
     * @desc 手动触发dom事件函数
     * @param { Element } el dom节点元素 
     * @param { String } evt 事件名称
     * @param { Object } detail 对该事件的描述信息对象 
     */
    var trigger = function trigger(el, evt, detail) {
      detail = detail || {};
      var e,
          opt = {
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

    /**
     * @desc 获取元素的样式
     * @param { Element } element 
     * @param { String } attr
     * @return { String } 样式的值 
     */
    function getStyle(element, attr) {
      var computed;

      if (element.currentStyle) {
        computed = element.currentStyle;
      } else {
        computed = window.getComputedStyle(element, false);
      }

      return computed.getPropertyValue(attr) || computed[attr];
    }

    var getStyle_1 = getStyle;

    /**
     * @desc 对html代码片段字符串进行解析操作
     * @param { String } markup
     * @return { Element } 元素节点对象 
     */
    function parseHTML(markup) {
      if (markup.toLowerCase().trim().indexOf('<!doctype') === 0) {
        var doc = document.implementation.createHTMLDocument("");
        doc.documentElement.innerHTML = markup;
        return doc;
      } else if ('content' in document.createElement('template')) {
        // Template tag exists!
        var el = document.createElement('template');
        el.innerHTML = markup;
        return el.content;
      } else {
        // Template tag doesn't exist!
        var docfrag = document.createDocumentFragment();
        var el = document.createElement('body');
        el.innerHTML = markup;

        for (i = 0; 0 < el.childNodes.length;) {
          docfrag.appendChild(el.childNodes[i]);
        }

        return docfrag;
      }
    }

    var parseHtml = parseHTML;

    var dom = {
      domEval: domEval,
      trigger: trigger_1,
      getStyle: getStyle_1,
      parseHtml: parseHtml
    };

    /**
     * @desc   现金额转大写
     * @param  { Number } n 
     * @return { String }
     */
    function price2chinese(n) {
      var fraction = ['角', '分'];
      var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
      var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
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

      return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
    }
    var price2chinese_1 = price2chinese;

    var string = {
      price2chinese: price2chinese_1
    };

    var date2string = function date2string(argDate, argFormatStr, argShowTime) {
      var args = arguments,
          date = argDate || new Date(),
          formatStr = argFormatStr,
          showTime = argShowTime,
          result;
      if (args.length === 0) formatStr = '-';

      if (args.length === 1) {
        if (toType_1(date) === 'string') {
          formatStr = date;
          date = new Date();
        } else if (toType_1(date) == 'date') {
          formatStr = '-';
        } else if (toType_1(date) === 'boolean') {
          date = new Date();
          formatStr = '-';
          showTime = argDate;
        } else {
          return 'arguments error';
        }
      }

      if (args.length === 2) {
        if (toType_1(date) === 'date' && toType_1(formatStr) === 'string') ; else if (toType_1(date) === 'date' && toType_1(formatStr) === 'boolean') {
          formatStr = '-';
          showTime = argFormatStr;
        } else if (toType_1(date) === 'string' && toType_1(formatStr) === 'boolean') {
          date = new Date();
          formatStr = argDate;
          showTime = argFormatStr;
        } else {
          return 'arguments error';
        }
      }

      if (args.length >= 3 && (toType_1(date) !== 'date' || toType_1(formatStr) != 'string' || toType_1(showTime) != 'boolean')) {
        return 'arguments error';
      }

      var year = date.getFullYear(),
          month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
          day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      var hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours(),
          minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes(),
          second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
      result = year + formatStr + month + formatStr + day;
      if (showTime) result += ' ' + hour + ':' + minute + ':' + second;
      return result;
    };

    var date2string_1 = date2string;

    /**
     * @desc 获取今日，本周，本月的日期
     * @param { String } 'today' 'week' 'month'
     * @param { String } '-' '/' '~' default '-'
     * @return { Array } 今日['2018/08/20', '2018/08/20'] 本周['2018/08/19', '2018/08/25'] 本月['2018/08/01', '2018/08/31']
     */
    var getRangeDate = function getRangeDate(type, split) {
      // 年月日之间的间隔符
      var splitStr = split || '-';

      if (type === 'today') {
        var date = new Date();
        var y = date.getFullYear(),
            m = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
            d = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        var dateStr = y + splitStr + m + splitStr + d;
        return [dateStr, dateStr];
      } else if (type === 'week') {
        var _date = new Date(),
            arr = [];

        var _y = _date.getFullYear(),
            _m2 = _date.getMonth() + 1 > 9 ? _date.getMonth() + 1 : '0' + (_date.getMonth() + 1),
            w = _date.getDay(),
            _d = _date.getDate();

        _date.setDate(_d - w);

        arr.push(_y + splitStr + _m2 + splitStr + _date.getDate());

        _date.setDate(_date.getDate() + 6);

        arr.push(_y + splitStr + _m2 + splitStr + _date.getDate());
        return arr;
      } else {
        var _date2 = new Date(),
            _arr = [],
            _m,
            _d2;

        var _y2 = _date2.getFullYear(),
            _m3 = _date2.getMonth() + 1 > 9 ? _date2.getMonth() + 1 : '0' + (_date2.getMonth() + 1);

        _arr.push(_y2 + splitStr + _m3 + splitStr + '01');

        _m = _date2.getMonth();

        _date2.setDate(1);

        _date2.setMonth(_m + 1);

        _date2.setDate(0);

        _d2 = _date2.getDate();

        _arr.push(_y2 + splitStr + _m3 + splitStr + _d2);

        return _arr;
      }
    };

    var getRangeDate_1 = getRangeDate;

    var date = {
      date2string: date2string_1,
      getRangeDate: getRangeDate_1
    };

    /**
     * @desc 生成指定范围[min, max]的随机数
     * @param  { Number } min 
     * @param  { Number } max 
     * @param  { bInt } 返回值是否为整数
     * @return { Number } 
     */
    function randomNum(min, max, bInt) {
      if (bInt) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      } else {
        return Math.random() * (max - min) + min;
      }
    }

    var randomNum_1 = randomNum;

    /**
     * @desc 随机生成颜色
     * @return { String } #ffffff
     */
    function randomColor() {
      return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
    }

    var randomColor_1 = randomColor;

    var random = {
      randomNum: randomNum_1,
      randomColor: randomColor_1
    };

    /**
      * @desc 创建一个防反跳策略函数，在函数最后一次调用多少毫秒之后才会再次执行，如果在期间内重复调用会重新计算延迟
      * @param { Function } callback 回调
      * @param { Number } wait 多少秒毫
      * @param { Object } options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
      * @return { Function }
      */
    function debounce(callback, wait, options) {
      var args, context;
      var opts = options || {};
      var runFlag = false;
      var timeout = 0;
      var isLeading = typeof options === 'boolean';
      var optLeading = 'leading' in opts ? opts.leading : isLeading;
      var optTrailing = 'trailing' in opts ? opts.trailing : !isLeading;

      var runFn = function runFn() {
        runFlag = true;
        timeout = 0;
        callback.apply(context, args);
      };

      var endFn = function endFn() {
        if (optLeading === true) {
          timeout = 0;
        }

        if (!runFlag && optTrailing === true) {
          runFn();
        }
      };

      var cancelFn = function cancelFn() {
        var rest = timeout !== 0;
        clearTimeout(timeout);
        timeout = 0;
        return rest;
      };

      var debounced = function debounced() {
        runFlag = false;
        args = arguments;
        context = this;

        if (timeout === 0) {
          if (optLeading === true) {
            runFn();
          }
        } else {
          clearTimeout(timeout);
        }

        timeout = setTimeout(endFn, wait);
      };

      debounced.cancel = cancelFn;
      return debounced;
    }

    var debounce_1 = debounce;

    /**
      * @desc 创建一个策略函数，当被重复调用函数的时候，至少每隔多少秒毫秒调用一次该函数
      * @param { Function } callback 回调
      * @param { Number } wait 多少秒毫
      * @param { Object } options 参数{leading: 是否在之前执行, trailing: 是否在之后执行}
      * @return { Function }
      */
    function throttle(callback, wait, options) {
      var args, context;
      var opts = options || {};
      var runFlag = false;
      var timeout = 0;
      var optLeading = 'leading' in opts ? opts.leading : true;
      var optTrailing = 'trailing' in opts ? opts.trailing : false;

      var runFn = function runFn() {
        runFlag = true;
        callback.apply(context, args);
        timeout = setTimeout(endFn, wait);
      };

      var endFn = function endFn() {
        timeout = 0;

        if (!runFlag && optTrailing === true) {
          runFn();
        }
      };

      var cancelFn = function cancelFn() {
        var rest = timeout !== 0;
        clearTimeout(timeout);
        runFlag = false;
        timeout = 0;
        return rest;
      };

      var throttled = function throttled() {
        args = arguments;
        context = this;
        runFlag = false;

        if (timeout === 0) {
          if (optLeading === true) {
            runFn();
          } else if (optTrailing === true) {
            timeout = setTimeout(endFn, wait);
          }
        }
      };

      throttled.cancel = cancelFn;
      return throttled;
    }

    var throttle_1 = throttle;

    /**
     * @desc 柯里化函数
     * @param { Function } 一个函数
     * @return { Function } 一个函数
     * @example
     * const pipe = (a,b,c) => a+b+c;
     * const rings = curry(pipe);
     * const ring_a = rings( 'a' );
     * const ring_ab = rings( 'a' , 'b' ); // 和 rings( 'a' )( 'b' ) 等价，缺少最后的管环
     * const ring_abc = rings( 'a' , 'b' , 'c' ); // 和 ring_ab( 'c' ) 等价，完成有输出 'abc'
     */
    var curry = function curry(f, length) {
      length = length || f.length;
      return function () {
        for (var _len = arguments.length, usedArgs = new Array(_len), _key = 0; _key < _len; _key++) {
          usedArgs[_key] = arguments[_key];
        }

        return length - usedArgs.length > 0 ? curry(function () {
          for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            restArgs[_key2] = arguments[_key2];
          }

          return f.call.apply(f, [null].concat(usedArgs, restArgs));
        }, length - usedArgs.length) : f.apply(null, usedArgs);
      };
    };

    var curry_1 = curry;

    /**
     * @desc 柯里化函数的组合函数
     * @param { Function } 可以传入多个curry处理的函数
     * @return { Function } 一个函数
     * @example
     * const pipe1 = curry( (x,y)  => x + y)
     * const pipe2 = x => x * x
     * const pipes = compose( pipe2 , pipe1(2) )
     * pipes( 1 ) // 9
     */
    var compose = function compose() {
      for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
        functions[_key] = arguments[_key];
      }

      return function (flowIn) {
        return functions.reduceRight(function (acc, f) {
          return f(acc);
        }, flowIn);
      };
    };

    var compose_1 = compose;

    /**
     * @desc 定时器循环的功能函数
     * @param { Function } 定时器的回掉函数，下面返回的函数的参数
     * @param { Number } 定时器的延迟时间，下面返回的函数的参数
     * @return { Function } 创建的循环执行定时器函数
     * @example 
     *  var nStart = document.getElementById('start-id'); // 开始按钮
        var nStop = document.getElementById('stop-id'); // 结束按钮
        var demo;
        nStart.addEventListener('click', function(ev) {
          if(demo) return;
          demo = interval();
          demo(function() {
            console.log(555);
          }, 1000);
        }, false);
        nStop.addEventListener('click', function(ev) {
          if(demo) demo.stop();
          demo = null;
        }, false);
     */
    function interval() {
      var timer = true;

      var fn = function fn(callBack, timeout) {
        callBack();

        if (timer) {
          setTimeout(function () {
            fn(callBack, timeout);
          }, timeout);
        }
      };

      fn.stop = function () {
        timer = false;
      };

      return fn;
    }

    var interval_1 = interval;

    var _function = {
      debounce: debounce_1,
      throttle: throttle_1,
      curry: curry_1,
      compose: compose_1,
      interval: interval_1
    };

    var arrayEqual$1 = array.arrayEqual;
    var arrayEach$1 = array.arrayEach; // object

    var isPlainObject$1 = object.isPlainObject;
    var assign$1 = object.assign;
    var deepClone$1 = object.deepClone;
    var isEmptyObject$1 = object.isEmptyObject; // cookie

    var setCookie$1 = cookie.setCookie;
    var getCookie$1 = cookie.getCookie;
    var removeCookie$1 = cookie.removeCookie; // url

    var urlQuery2Object$1 = url.urlQuery2Object;
    var object2UrlQuery$1 = url.object2UrlQuery; // type

    var toType$1 = type.toType; // bom

    var browser$1 = bom.browser;
    var ajax$1 = bom.ajax; // dom

    var domEval$1 = dom.domEval;
    var trigger$1 = dom.trigger;
    var getStyle$1 = dom.getStyle;
    var parseHtml$1 = dom.parseHtml; // string

    var price2chinese$1 = string.price2chinese; // date

    var date2string$1 = date.date2string;
    var getRangeDate$1 = date.getRangeDate; // random

    var randomNum$1 = random.randomNum;
    var randomColor$1 = random.randomColor; // function

    var debounce$1 = _function.debounce;
    var throttle$1 = _function.throttle;
    var curry$1 = _function.curry;
    var compose$1 = _function.compose;
    var interval$1 = _function.interval;
    var utils = {
      // array
      arrayEqual: arrayEqual$1,
      arrayEach: arrayEach$1,
      // object
      isPlainObject: isPlainObject$1,
      assign: assign$1,
      deepClone: deepClone$1,
      isEmptyObject: isEmptyObject$1,
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
      ajax: ajax$1,
      // dom
      domEval: domEval$1,
      trigger: trigger$1,
      getStyle: getStyle$1,
      parseHtml: parseHtml$1,
      // string
      price2chinese: price2chinese$1,
      // date
      date2string: date2string$1,
      getRangeDate: getRangeDate$1,
      //random
      randomNum: randomNum$1,
      randomColor: randomColor$1,
      //function
      debounce: debounce$1,
      throttle: throttle$1,
      curry: curry$1,
      compose: compose$1,
      interval: interval$1
    };
    var unxUtils = utils;

    return unxUtils;

})));
