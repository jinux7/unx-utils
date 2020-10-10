/**
 * @desc 数组转树,非递归求解,利用数组和对象相互引用  时间复杂度O(n)
 * @param {Array} list 
 * @param {Number} parId 
 * @return {Array}
 */
  // 方法一
  function totree(list, parId) { 
      let obj = {};
      let result = [];
      //将数组中数据转为键值对结构 (这里的数组和obj会相互引用)
      list.map(el => {
          obj[el.id] = el;
      })
      for(let i=0, len = list.length; i < len; i++) {
          let id = list[i].parentId;
          if(id == parId) {
              result.push(list[i]);
              continue;
          }
          if(obj[id].children) {
              obj[id].children.push(list[i]);
          } else {
              obj[id].children = [list[i]];
          }
      }
      return result;
  }
  
  /**
 * @desc 数组转树  递归求解
 * @param {Array} list 
 * @param {Number} parId 
 * @return {Array}
 */
  // 方法二
  function array2tree(list, parId){
    let len = list.length
    function loop(parId){
      let res = [];
      for(let i = 0; i < len; i++){
        let item = list[i]
        if(item.parentId === parId){
          item.children = loop(item.id)
          res.push(item)
        }
      }
      return res
    }
    return loop(parId)
  }
  module.exports = array2tree
