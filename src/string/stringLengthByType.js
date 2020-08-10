/**
 * @desc   计算字符串长度，中文是3，英文是1
 * @param  { String } str 
 * @return { Number }
 */

function stringLengthByType(str) {
    var count = 0;
    for(var i=0, len=str.length; i<len; i++) {
      if(/[\u4e00-\u9fa5]/.test(str[i])) {
        count += 3;
      }else {
        count++;
      }
    }
    return count;
}
module.exports = stringLengthByType;
