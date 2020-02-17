/**
 * @desc flat的相反函数，将一维数组转为二维数组,[1,2,3,4,5,6]=>[[1,2,3],[4,5,6]]
 * @param { Array } 处理的数组
 * @param { Number } 二维数组里单个元素数组里的个数
 * return { Array } 处理成的二维数组 
 */

function arrFlat2complex(arr, num) {
  var newArr = [],
      splitNum = Math.ceil(arr.length/num);
  for(let i=0; i<splitNum; i++) {
    newArr.push(arr.slice(i*num, i*num+num));
  }
  return newArr;
}

module.exports = arrFlat2complex;