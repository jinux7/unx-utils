/**
 * @desc js大数位相加 方法
 * @param {String} a
 * @param {String} b
 * @return {String} 
 */
function bigNumAdd(a,b) {
    var res='', c=0;
    a = a.split(''); // 把传进来的数字进行切割
    b = b.split(''); // 把传进来的数字进行切割
    while (a.length || b.length || c){ // 确保加到最后一位
        c += ~~a.pop() + ~~b.pop(); // ~拿组数最后一位进行
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
}

module.exports = bigNumAdd;

