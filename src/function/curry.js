/**
 * @desc 柯里化函数
 * @param { Function } 一个函数
 * @return { Function } 一个函数
 * @example
 * const pipe = (a,b,c) => a+b+c;
 * const rings = curry(pipe);
 * const ring_a = rings( 'a' );
 * const ring_ab = rings( 'a' , 'b' ); // 和 rings( 'a' )( 'b' ) 等价，缺少最后的管环
 * const ring_abc = rings( 'a' , 'b' , 'c' ); // 和 ring_ab( 'c' ) 等价，完成有输出 'abc'
 */

const curry = ( f,length ) => { 
  length = length || f.length ; 
  return (...usedArgs) => length - usedArgs.length > 0 ? 
          curry( (...restArgs) => f.call(null,...usedArgs,...restArgs), length - usedArgs.length) : 
          f.apply(null,usedArgs)}

module.exports = curry;