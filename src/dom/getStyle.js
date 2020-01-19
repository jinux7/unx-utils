/**
 * @desc 获取元素的样式
 * @param { Element } element 
 * @param { String } attr
 * @return { String } 样式的值 
 */

function getStyle(element, attr) {
  var computed;
  if(element.currentStyle) {
    computed = element.currentStyle;
  } else {
    computed = window.getComputedStyle(element, false);
  }
  return computed.getPropertyValue( attr ) || computed[ attr ];
}

module.exports = getStyle;