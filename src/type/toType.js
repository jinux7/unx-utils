// 此模块借鉴jquery
let class2type = {},
    toString =  class2type.toString;
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
