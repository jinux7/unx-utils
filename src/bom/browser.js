/**
 * @desc 获取浏览器的内核属性等信息
 * @return {Object} 例：{"isNode":false,"isMobile":true,"isPC":false,"isDoc":true,"-webkit":true,"-khtml":false,"-moz":false,"-ms":false,"-o":false,"edge":false,"firefox":false,"msie":false,"safari":true,"isLocalStorage":true,"isSessionStorage":true}
 */
const staticStrUndefined = require('../var/strUndefined');
const staticDocument = typeof document === staticStrUndefined ? 0 : document;
const staticWindow = typeof window === staticStrUndefined ? 0 : window;
const assign = require('../object/assign');
const arrayEach = require('../array/arrayEach')

/* eslint-disable valid-typeof */
function isBrowseStorage (storage) {
  try {
    var testKey = '__xe_t'
    storage.setItem(testKey, 1)
    storage.removeItem(testKey)
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
  var $body, isChrome, isEdge
  var isMobile = false
  var result = {
    isNode: false,
    isMobile: isMobile,
    isPC: false,
    isDoc: !!staticDocument
  }
  if (!staticWindow && typeof process !== staticStrUndefined) {
    result.isNode = true
  } else {
    isEdge = isBrowseType('Edge')
    isChrome = isBrowseType('Chrome')
    isMobile = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent)
    if (result.isDoc) {
      $body = staticDocument.body || staticDocument.documentElement
      arrayEach(['webkit', 'khtml', 'moz', 'ms', 'o'], function (core) {
        result['-' + core] = !!$body[core + 'MatchesSelector']
      })
    }
    assign(result, {
      edge: isEdge,
      firefox: isBrowseType('Firefox'),
      msie: !isEdge && result['-ms'],
      safari: !isChrome && !isEdge && isBrowseType('Safari'),
      isMobile: isMobile,
      isPC: !isMobile,
      isLocalStorage: isBrowseStorage(staticWindow.localStorage),
      isSessionStorage: isBrowseStorage(staticWindow.sessionStorage)
    })
  }
  return result
}

module.exports = browser;