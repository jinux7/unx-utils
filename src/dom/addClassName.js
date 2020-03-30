/**
 * @desc 给一个元素添加类名
 * @param { Element } element 
 * @param { String } argClassName
 * @return { undefined } undefined 
 */

function addClassName(element, argClassName) {
  element.className += ' ' + argClassName;
}

module.exports = addClassName;