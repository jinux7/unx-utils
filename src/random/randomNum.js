/**
 * @desc 生成指定范围[min, max]的随机数
 * @param  { Number } min 
 * @param  { Number } max 
 * @param  { bInt } 返回值是否为整数
 * @return { Number } 
 */
function randomNum(min, max, bInt) {
  if(bInt) {
    return Math.floor(Math.random() * (max-min+1) )+ min;
  }else {
    return Math.random() * (max-min) + min;
  }
}

module.exports = randomNum;