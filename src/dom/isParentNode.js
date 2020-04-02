/**
 * @desc 判断是否为父节点或者父辈节点
 * @param { Element } 子节点 childNode 
 * @param { Element } 父节点 parentNode 
 * @param { Boolean } true判断父辈节点，false判断父节点 
 * @return { Boolean } 是或否 
 */

function isParentNode(childNode, parentNode, flag) {
  if(!(childNode instanceof window.Element) || !(parentNode instanceof window.Element)) throw new Error('传入的参数不是dom对象');
  if(flag) {
    return childNode.parentNode === parentNode;
  }else {
    while(childNode != undefined && childNode != null && childNode.tagName.toUpperCase() != 'BODY') {
      if(childNode === parentNode) return true;
      childNode = childNode.parentNode; 
    }
    return false;
  }
}

module.exports = isParentNode;