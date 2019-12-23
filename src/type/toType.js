// 此模块借鉴jquery
/**
 * @desc 返回所传参数的类型
 * @param { any }
 * @return { String } 具体的类型
 */
const class2type = require('../var/class2type');
const toString =  class2type.toString;
let typeArr = "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " );
typeArr.forEach(name => {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
});
function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}
	return typeof obj === "object" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}

module.exports = toType;
