/**
 * @desc 数组的遍历
 * @param {Array} obj 
 * @param {Function} function(item, index) {} 
 * @return {void}
 */
function arrayEach (obj, iterate, context) {
    if (obj) {
      if (obj.forEach) {
        obj.forEach(iterate, context)
      } else {
        for (var index = 0, len = obj.length; index < len; index++) {
          iterate.call(context, obj[index], index, obj)
        }
      }
    }
  }
  
  module.exports = arrayEach
