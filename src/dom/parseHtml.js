/**
 * @desc 对html代码片段字符串进行解析操作
 * @param { String } markup
 * @return { Element } 元素节点对象 
 */
function parseHTML(markup) {
  if (markup.toLowerCase().trim().indexOf('<!doctype') === 0) {
      var doc = document.implementation.createHTMLDocument("");
      doc.documentElement.innerHTML = markup;
      return doc;
  } else if ('content' in document.createElement('template')) {
     // Template tag exists!
     var el = document.createElement('template');
     el.innerHTML = markup;
     return el.content;
  } else {
     // Template tag doesn't exist!
     var docfrag = document.createDocumentFragment();
     var el = document.createElement('body');
     el.innerHTML = markup;
     for (i = 0; 0 < el.childNodes.length;) {
         docfrag.appendChild(el.childNodes[i]);
     }
     return docfrag;
  }
}

module.exports = parseHTML;