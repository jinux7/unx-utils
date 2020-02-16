/**
 * @desc 获取元素在页面中距离body元素左上角点的距离(未做单元测试)
 * @param { Element } dom中的元素节点
 * @return { Object } obj.left obj.top
 */

 function getTopLeftInBody(element) {
  var actualTop = element.offsetTop,
      actualLeft = element.offsetLeft;
  var current = element.offsetParent;
  while (current !== null){
  　actualTop += current.offsetTop;
    actualLeft += current.offsetLeft; 
  　current = current.offsetParent;
  }
  return {
    top: 　actualTop,
    left: actualLeft
  }
 }

module.exports = getTopLeftInBody;