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

export default getCookie;