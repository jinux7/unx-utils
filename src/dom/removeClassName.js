/**
 * @desc 删除元素的类名
 * @param { Element } element 
 * @param { String } argClassName
 * @return { String } 删除成功后此元素的类名 
 */

function removeClassName(element, argClassName) {
  var arrClassName = element.className.split(' ');
  var arr = [];
  for(var i=0; i<arrClassName.length; i++) {
    if(arrClassName[i] !== argClassName) {
      arr.push(arrClassName[i]);
    }
  }
  element.className = arr.join(' ');
  return element.className;
}

module.exports = removeClassName;