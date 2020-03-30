/**
 * @desc 判断元素是否包含类名
 * @param { Element } element 
 * @param { String } argClassName
 * @return { Boolean } true or false 
 */

function hasClassName(element, argClassName) {
  var arrClassName = element.className.split(' ');
  var flag = false;
  for(var i=0; i<arrClassName.length; i++) {
    if(arrClassName[i] === argClassName) {
      flag = true;
      break;
    }
  }
  return flag;
}

module.exports = hasClassName;