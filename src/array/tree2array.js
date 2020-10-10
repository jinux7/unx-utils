/**
 * @desc 树转数组扁平化结构, 深度优先遍历  递归
 * @param {Array} data 
 * @return {Array}
 */
// 方法一
function deepTraversal(data) {
    const result = [];
    data.forEach(item => {
        const loop = data => {
            result.push({
            	id: data.id,
				name: data.name,
				parentId: data.parentId
            });
            let child = data.children
            if(child){
            	for(let i = 0; i < child.length; i++){
					loop(child[i])
				}
            }
        }
        loop(item);
    })
    return result;
}
/**
 * @desc 广度优先,队列  先进先出
 * @param {Array} node 
 * @return {Array}
 */
// 方法二
function tree2array(node){
	let stack = node,
		data = [];
	while(stack.length != 0){
		let shift = stack.shift();
		data.push({
			id: shift.id,
			name: shift.name,
			parentId: shift.parentId
		})
		let children = shift.children
		if(children){
			for(let i = 0; i < children.length; i++){
				stack.push(children[i])
			}
		}
	}
	return data
}
module.exports = tree2array
