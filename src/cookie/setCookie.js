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

module.exports = setCookie;