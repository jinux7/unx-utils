/**
 * @desc 手动触发dom事件函数
 * @param { Element } el dom节点元素 
 * @param { String } evt 事件名称
 * @param { Object } detail 对该事件的描述信息对象 
 */
const trigger = function(el, evt, detail) {
	detail = detail || {};
    var e, opt = {
            bubbles: true,
            cancelable: true,
            detail: detail
        };

    try {
        if (typeof CustomEvent !== 'undefined') {
            e = new CustomEvent(evt, opt);
            if (el) {
                el.dispatchEvent(e);
            }
        } else {
            e = document.createEvent("CustomEvent");
            e.initCustomEvent(evt, true, true, detail);
            if (el) {
                el.dispatchEvent(e);
            }
        }
    } catch (ex) {
        console.warn("jinux-trigger is not supported by environment.");
    }
}

module.exports = trigger;