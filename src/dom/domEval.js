/**
 * @desc 动态的向dom文档中插入script语句并执行,代码copy自jquery4.0-pre
 * @param { String } js语句的字符串
 * @return { void }
 */
const document = require("../var/document");

var preservedScriptAttributes = {
	type: true,
	src: true,
	nonce: true,
	noModule: true
};

function DomEval( code, node, doc ) {
	doc = doc || document;

	var i, val,
		script = doc.createElement( "script" );

	script.text = code;
	if ( node ) {
		for ( i in preservedScriptAttributes ) {

			// Support: Firefox <=64 - 66+, Edge <=18+
			// Some browsers don't support the "nonce" property on scripts.
			// On the other hand, just using `getAttribute` is not enough as
			// the `nonce` attribute is reset to an empty string whenever it
			// becomes browsing-context connected.
			// See https://github.com/whatwg/html/issues/2369
			// See https://html.spec.whatwg.org/#nonce-attributes
			// The `node.getAttribute` check was added for the sake of
			// `jQuery.globalEval` so that it can fake a nonce-containing node
			// via an object.
			val = node[ i ] || node.getAttribute && node.getAttribute( i );
			if ( val ) {
				script.setAttribute( i, val );
			}
		}
	}
	doc.head.appendChild( script ).parentNode.removeChild( script );
}

module.exports = DomEval;
