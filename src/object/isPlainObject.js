/**
 * @desc 判断指定参数是否是一个纯粹的对象，所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的。
 * @param { Object }
 * @return { Boolean }
 */
const class2type = require('../var/class2type');
const getProto = Object.getPrototypeOf;
const hasOwn = class2type.hasOwnProperty;
const fnToString = hasOwn.toString;
const ObjectFunctionString = fnToString.call( Object )

const isPlainObject = function( obj ) {
  var proto, Ctor;

  // Detect obvious negatives
  // Use toString instead of jQuery.type to catch host objects
  if ( !obj || toString.call( obj ) !== "[object Object]" ) {
    return false;
  }

  proto = getProto( obj );

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if ( !proto ) {
    return true;
  }

  // Objects with prototype are plain iff they were constructed by a global Object function
  Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
  return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
};

module.exports = isPlainObject;