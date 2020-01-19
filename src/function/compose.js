/**
 * @desc 柯里化函数的组合函数
 * @param { Function } 可以传入多个curry处理的函数
 * @return { Function } 一个函数
 * @example
 * const pipe1 = curry( (x,y)  => x + y)
 * const pipe2 = x => x * x
 * const pipes = compose( pipe2 , pipe1(2) )
 * pipes( 1 ) // 9
 */

const compose = (...functions) => flowIn => functions.reduceRight( ( acc,f ) => f(acc), flowIn )

module.exports = compose;