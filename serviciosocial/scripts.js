/*! jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.0",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i)return e.textContent;if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=ce.text(t);return n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},R=function(){V()},M=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&z(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function X(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&M(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function U(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function z(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",R),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:X(!1),disabled:X(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:U(function(){return[0]}),last:U(function(e,t){return[t-1]}),eq:U(function(e,t,n){return[n<0?n+t:n]}),even:U(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:U(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:U(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:U(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&z(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&z(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var R=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)R(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},M=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(M,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,X=new B,U=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,z=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:U.test(i)?JSON.parse(i):i)}catch(e){}X.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return X.hasData(e)||_.hasData(e)},data:function(e,t,n){return X.access(e,t,n)},removeData:function(e,t){X.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=X.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){X.set(this,n)}):R(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=X.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){X.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){X.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Re=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Me(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);X.hasData(e)&&(o=X.access(e),a=ce.extend({},o),X.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Re,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[X.expando]&&(n[X.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return R(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Me(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Me(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return R(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),Xe=/^--/,Ue=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},ze=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=Xe.test(t),u=e.style;return(n=n||Ue(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Ue(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=Xe.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return Xe.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):ze(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Ue(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-ze(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return R(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ue(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return R(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return R(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Rt=/%20/g,Mt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},Xt="*/".concat("*"),Ut=C.createElement("a");function zt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Ut.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Xt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:zt(Bt),ajaxTransport:zt(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ut.protocol+"//"+Ut.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Mt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Rt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Xt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return R(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return R(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});

;/*! DataTables 1.13.5
 * ©2008-2023 SpryMedia Ltd - datatables.net/license
 */
!function(n){"use strict";var a;"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,window,document)}):"object"==typeof exports?(a=require("jquery"),"undefined"!=typeof window?module.exports=function(t,e){return t=t||window,e=e||a(t),n(e,t,t.document)}:n(a,window,window.document)):window.DataTable=n(jQuery,window,document)}(function(P,j,y,H){"use strict";function d(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null}function l(t,e,n){var a=typeof t,r="string"==a;return"number"==a||"bigint"==a||(!!h(t)||(e&&r&&(t=$(t,e)),n&&r&&(t=t.replace(q,"")),!isNaN(parseFloat(t))&&isFinite(t)))}function a(t,e,n){var a;return!!h(t)||((h(a=t)||"string"==typeof a)&&!!l(t.replace(V,"").replace(/<script/i,""),e,n)||null)}function m(t,e,n,a){var r=[],o=0,i=e.length;if(a!==H)for(;o<i;o++)t[e[o]][n]&&r.push(t[e[o]][n][a]);else for(;o<i;o++)r.push(t[e[o]][n]);return r}function f(t,e){var n,a=[];e===H?(e=0,n=t):(n=e,e=t);for(var r=e;r<n;r++)a.push(r);return a}function _(t){for(var e=[],n=0,a=t.length;n<a;n++)t[n]&&e.push(t[n]);return e}function s(t,e){return-1!==this.indexOf(t,e=e===H?0:e)}var p,e,t,w=function(t,v){if(w.factory(t,v))return w;if(this instanceof w)return P(t).DataTable(v);v=t,this.$=function(t,e){return this.api(!0).$(t,e)},this._=function(t,e){return this.api(!0).rows(t,e).data()},this.api=function(t){return new B(t?ge(this[p.iApiIndex]):this)},this.fnAddData=function(t,e){var n=this.api(!0),t=(Array.isArray(t)&&(Array.isArray(t[0])||P.isPlainObject(t[0]))?n.rows:n.row).add(t);return e!==H&&!e||n.draw(),t.flatten().toArray()},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),n=e.settings()[0],a=n.oScroll;t===H||t?e.draw(!1):""===a.sX&&""===a.sY||Qt(n)},this.fnClearTable=function(t){var e=this.api(!0).clear();t!==H&&!t||e.draw()},this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,n){var a=this.api(!0),t=a.rows(t),r=t.settings()[0],o=r.aoData[t[0][0]];return t.remove(),e&&e.call(this,r,o),n!==H&&!n||a.draw(),o},this.fnDestroy=function(t){this.api(!0).destroy(t)},this.fnDraw=function(t){this.api(!0).draw(t)},this.fnFilter=function(t,e,n,a,r,o){var i=this.api(!0);(null===e||e===H?i:i.column(e)).search(t,n,a,o),i.draw()},this.fnGetData=function(t,e){var n,a=this.api(!0);return t!==H?(n=t.nodeName?t.nodeName.toLowerCase():"",e!==H||"td"==n||"th"==n?a.cell(t,e).data():a.row(t).data()||null):a.data().toArray()},this.fnGetNodes=function(t){var e=this.api(!0);return t!==H?e.row(t).node():e.rows().nodes().flatten().toArray()},this.fnGetPosition=function(t){var e=this.api(!0),n=t.nodeName.toUpperCase();return"TR"==n?e.row(t).index():"TD"==n||"TH"==n?[(n=e.cell(t).index()).row,n.columnVisible,n.column]:null},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()},this.fnOpen=function(t,e,n){return this.api(!0).row(t).child(e,n).show().child()[0]},this.fnPageChange=function(t,e){t=this.api(!0).page(t);e!==H&&!e||t.draw(!1)},this.fnSetColumnVis=function(t,e,n){t=this.api(!0).column(t).visible(e);n!==H&&!n||t.columns.adjust().draw()},this.fnSettings=function(){return ge(this[p.iApiIndex])},this.fnSort=function(t){this.api(!0).order(t).draw()},this.fnSortListener=function(t,e,n){this.api(!0).order.listener(t,e,n)},this.fnUpdate=function(t,e,n,a,r){var o=this.api(!0);return(n===H||null===n?o.row(e):o.cell(e,n)).data(t),r!==H&&!r||o.columns.adjust(),a!==H&&!a||o.draw(),0},this.fnVersionCheck=p.fnVersionCheck;var e,y=this,D=v===H,_=this.length;for(e in D&&(v={}),this.oApi=this.internal=p.internal,w.ext.internal)e&&(this[e]=$e(e));return this.each(function(){var r=1<_?be({},v,!0):v,o=0,t=this.getAttribute("id"),i=!1,e=w.defaults,l=P(this);if("table"!=this.nodeName.toLowerCase())W(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{K(e),Q(e.column),C(e,e,!0),C(e.column,e.column,!0),C(e,P.extend(r,l.data()),!0);for(var n=w.settings,o=0,s=n.length;o<s;o++){var a=n[o];if(a.nTable==this||a.nTHead&&a.nTHead.parentNode==this||a.nTFoot&&a.nTFoot.parentNode==this){var u=(r.bRetrieve!==H?r:e).bRetrieve,c=(r.bDestroy!==H?r:e).bDestroy;if(D||u)return a.oInstance;if(c){a.oInstance.fnDestroy();break}return void W(a,0,"Cannot reinitialise DataTable",3)}if(a.sTableId==this.id){n.splice(o,1);break}}null!==t&&""!==t||(t="DataTables_Table_"+w.ext._unique++,this.id=t);var f,d,h=P.extend(!0,{},w.models.oSettings,{sDestroyWidth:l[0].style.width,sInstance:t,sTableId:t}),p=(h.nTable=this,h.oApi=y.internal,h.oInit=r,n.push(h),h.oInstance=1===y.length?y:l.dataTable(),K(r),Z(r.oLanguage),r.aLengthMenu&&!r.iDisplayLength&&(r.iDisplayLength=(Array.isArray(r.aLengthMenu[0])?r.aLengthMenu[0]:r.aLengthMenu)[0]),r=be(P.extend(!0,{},e),r),F(h.oFeatures,r,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),F(h,r,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),F(h.oScroll,r,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),F(h.oLanguage,r,"fnInfoCallback"),L(h,"aoDrawCallback",r.fnDrawCallback,"user"),L(h,"aoServerParams",r.fnServerParams,"user"),L(h,"aoStateSaveParams",r.fnStateSaveParams,"user"),L(h,"aoStateLoadParams",r.fnStateLoadParams,"user"),L(h,"aoStateLoaded",r.fnStateLoaded,"user"),L(h,"aoRowCallback",r.fnRowCallback,"user"),L(h,"aoRowCreatedCallback",r.fnCreatedRow,"user"),L(h,"aoHeaderCallback",r.fnHeaderCallback,"user"),L(h,"aoFooterCallback",r.fnFooterCallback,"user"),L(h,"aoInitComplete",r.fnInitComplete,"user"),L(h,"aoPreDrawCallback",r.fnPreDrawCallback,"user"),h.rowIdFn=A(r.rowId),tt(h),h.oClasses),g=(P.extend(p,w.ext.classes,r.oClasses),l.addClass(p.sTable),h.iInitDisplayStart===H&&(h.iInitDisplayStart=r.iDisplayStart,h._iDisplayStart=r.iDisplayStart),null!==r.iDeferLoading&&(h.bDeferLoading=!0,t=Array.isArray(r.iDeferLoading),h._iRecordsDisplay=t?r.iDeferLoading[0]:r.iDeferLoading,h._iRecordsTotal=t?r.iDeferLoading[1]:r.iDeferLoading),h.oLanguage),t=(P.extend(!0,g,r.oLanguage),g.sUrl?(P.ajax({dataType:"json",url:g.sUrl,success:function(t){C(e.oLanguage,t),Z(t),P.extend(!0,g,t,h.oInit.oLanguage),R(h,null,"i18n",[h]),Jt(h)},error:function(){Jt(h)}}),i=!0):R(h,null,"i18n",[h]),null===r.asStripeClasses&&(h.asStripeClasses=[p.sStripeOdd,p.sStripeEven]),h.asStripeClasses),b=l.children("tbody").find("tr").eq(0),m=(-1!==P.inArray(!0,P.map(t,function(t,e){return b.hasClass(t)}))&&(P("tbody tr",this).removeClass(t.join(" ")),h.asDestroyStripes=t.slice()),[]),t=this.getElementsByTagName("thead");if(0!==t.length&&(wt(h.aoHeader,t[0]),m=Ct(h)),null===r.aoColumns)for(f=[],o=0,s=m.length;o<s;o++)f.push(null);else f=r.aoColumns;for(o=0,s=f.length;o<s;o++)nt(h,m?m[o]:null);st(h,r.aoColumnDefs,f,function(t,e){at(h,t,e)}),b.length&&(d=function(t,e){return null!==t.getAttribute("data-"+e)?e:null},P(b[0]).children("th, td").each(function(t,e){var n,a=h.aoColumns[t];a||W(h,0,"Incorrect column count",18),a.mData===t&&(n=d(e,"sort")||d(e,"order"),e=d(e,"filter")||d(e,"search"),null===n&&null===e||(a.mData={_:t+".display",sort:null!==n?t+".@data-"+n:H,type:null!==n?t+".@data-"+n:H,filter:null!==e?t+".@data-"+e:H},a._isArrayHost=!0,at(h,t)))}));var S=h.oFeatures,t=function(){if(r.aaSorting===H){var t=h.aaSorting;for(o=0,s=t.length;o<s;o++)t[o][1]=h.aoColumns[o].asSorting[0]}ce(h),S.bSort&&L(h,"aoDrawCallback",function(){var t,n;h.bSorted&&(t=I(h),n={},P.each(t,function(t,e){n[e.src]=e.dir}),R(h,null,"order",[h,t,n]),le(h))}),L(h,"aoDrawCallback",function(){(h.bSorted||"ssp"===E(h)||S.bDeferRender)&&ce(h)},"sc");var e=l.children("caption").each(function(){this._captionSide=P(this).css("caption-side")}),n=l.children("thead"),a=(0===n.length&&(n=P("<thead/>").appendTo(l)),h.nTHead=n[0],l.children("tbody")),n=(0===a.length&&(a=P("<tbody/>").insertAfter(n)),h.nTBody=a[0],l.children("tfoot"));if(0===(n=0===n.length&&0<e.length&&(""!==h.oScroll.sX||""!==h.oScroll.sY)?P("<tfoot/>").appendTo(l):n).length||0===n.children().length?l.addClass(p.sNoFooter):0<n.length&&(h.nTFoot=n[0],wt(h.aoFooter,h.nTFoot)),r.aaData)for(o=0;o<r.aaData.length;o++)x(h,r.aaData[o]);else!h.bDeferLoading&&"dom"!=E(h)||ut(h,P(h.nTBody).children("tr"));h.aiDisplay=h.aiDisplayMaster.slice(),!(h.bInitialised=!0)===i&&Jt(h)};L(h,"aoDrawCallback",de,"state_save"),r.bStateSave?(S.bStateSave=!0,he(h,0,t)):t()}}),y=null,this},c={},U=/[\r\n\u2028]/g,V=/<.*?>/g,X=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,J=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),q=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,h=function(t){return!t||!0===t||"-"===t},$=function(t,e){return c[e]||(c[e]=new RegExp(Ot(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(c[e],"."):t},N=function(t,e,n){var a=[],r=0,o=t.length;if(n!==H)for(;r<o;r++)t[r]&&t[r][e]&&a.push(t[r][e][n]);else for(;r<o;r++)t[r]&&a.push(t[r][e]);return a},G=function(t){if(!(t.length<2))for(var e=t.slice().sort(),n=e[0],a=1,r=e.length;a<r;a++){if(e[a]===n)return!1;n=e[a]}return!0},z=function(t){if(G(t))return t.slice();var e,n,a,r=[],o=t.length,i=0;t:for(n=0;n<o;n++){for(e=t[n],a=0;a<i;a++)if(r[a]===e)continue t;r.push(e),i++}return r},Y=function(t,e){if(Array.isArray(e))for(var n=0;n<e.length;n++)Y(t,e[n]);else t.push(e);return t};function i(n){var a,r,o={};P.each(n,function(t,e){(a=t.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(a[1]+" ")&&(r=t.replace(a[0],a[2].toLowerCase()),o[r]=t,"o"===a[1]&&i(n[t]))}),n._hungarianMap=o}function C(n,a,r){var o;n._hungarianMap||i(n),P.each(a,function(t,e){(o=n._hungarianMap[t])===H||!r&&a[o]!==H||("o"===o.charAt(0)?(a[o]||(a[o]={}),P.extend(!0,a[o],a[t]),C(n[o],a[o],r)):a[o]=a[t])})}function Z(t){var e,n=w.defaults.oLanguage,a=n.sDecimal;a&&Me(a),t&&(e=t.sZeroRecords,!t.sEmptyTable&&e&&"No data available in table"===n.sEmptyTable&&F(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&e&&"Loading..."===n.sLoadingRecords&&F(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands),(e=t.sDecimal)&&a!==e&&Me(e))}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.includes||(Array.prototype.includes=s),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),String.prototype.includes||(String.prototype.includes=s),w.util={throttle:function(a,t){var r,o,i=t!==H?t:200;return function(){var t=this,e=+new Date,n=arguments;r&&e<r+i?(clearTimeout(o),o=setTimeout(function(){r=H,a.apply(t,n)},i)):(r=e,a.apply(t,n))}},escapeRegex:function(t){return t.replace(J,"\\$1")},set:function(a){var d;return P.isPlainObject(a)?w.util.set(a._):null===a?function(){}:"function"==typeof a?function(t,e,n){a(t,"set",e,n)}:"string"!=typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("(")?function(t,e){t[a]=e}:(d=function(t,e,n){for(var a,r,o,i,l=dt(n),n=l[l.length-1],s=0,u=l.length-1;s<u;s++){if("__proto__"===l[s]||"constructor"===l[s])throw new Error("Cannot set prototype values");if(a=l[s].match(ft),r=l[s].match(g),a){if(l[s]=l[s].replace(ft,""),t[l[s]]=[],(a=l.slice()).splice(0,s+1),i=a.join("."),Array.isArray(e))for(var c=0,f=e.length;c<f;c++)d(o={},e[c],i),t[l[s]].push(o);else t[l[s]]=e;return}r&&(l[s]=l[s].replace(g,""),t=t[l[s]](e)),null!==t[l[s]]&&t[l[s]]!==H||(t[l[s]]={}),t=t[l[s]]}n.match(g)?t[n.replace(g,"")](e):t[n.replace(ft,"")]=e},function(t,e){return d(t,e,a)})},get:function(r){var o,d;return P.isPlainObject(r)?(o={},P.each(r,function(t,e){e&&(o[t]=w.util.get(e))}),function(t,e,n,a){var r=o[e]||o._;return r!==H?r(t,e,n,a):t}):null===r?function(t){return t}:"function"==typeof r?function(t,e,n,a){return r(t,e,n,a)}:"string"!=typeof r||-1===r.indexOf(".")&&-1===r.indexOf("[")&&-1===r.indexOf("(")?function(t,e){return t[r]}:(d=function(t,e,n){var a,r,o;if(""!==n)for(var i=dt(n),l=0,s=i.length;l<s;l++){if(f=i[l].match(ft),a=i[l].match(g),f){if(i[l]=i[l].replace(ft,""),""!==i[l]&&(t=t[i[l]]),r=[],i.splice(0,l+1),o=i.join("."),Array.isArray(t))for(var u=0,c=t.length;u<c;u++)r.push(d(t[u],e,o));var f=f[0].substring(1,f[0].length-1);t=""===f?r:r.join(f);break}if(a)i[l]=i[l].replace(g,""),t=t[i[l]]();else{if(null===t||null===t[i[l]])return null;if(t===H||t[i[l]]===H)return H;t=t[i[l]]}}return t},function(t,e){return d(t,e,r)})}};var r=function(t,e,n){t[e]!==H&&(t[n]=t[e])};function K(t){r(t,"ordering","bSort"),r(t,"orderMulti","bSortMulti"),r(t,"orderClasses","bSortClasses"),r(t,"orderCellsTop","bSortCellsTop"),r(t,"order","aaSorting"),r(t,"orderFixed","aaSortingFixed"),r(t,"paging","bPaginate"),r(t,"pagingType","sPaginationType"),r(t,"pageLength","iDisplayLength"),r(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":"");var e=t.aoSearchCols;if(e)for(var n=0,a=e.length;n<a;n++)e[n]&&C(w.models.oSearch,e[n])}function Q(t){r(t,"orderable","bSortable"),r(t,"orderData","aDataSort"),r(t,"orderSequence","asSorting"),r(t,"orderDataType","sortDataType");var e=t.aDataSort;"number"!=typeof e||Array.isArray(e)||(t.aDataSort=[e])}function tt(t){var e,n,a,r;w.__browser||(w.__browser=e={},r=(a=(n=P("<div/>").css({position:"fixed",top:0,left:-1*P(j).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(P("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(P("<div/>").css({width:"100%",height:10}))).appendTo("body")).children()).children(),e.barWidth=a[0].offsetWidth-a[0].clientWidth,e.bScrollOversize=100===r[0].offsetWidth&&100!==a[0].clientWidth,e.bScrollbarLeft=1!==Math.round(r.offset().left),e.bBounding=!!n[0].getBoundingClientRect().width,n.remove()),P.extend(t.oBrowser,w.__browser),t.oScroll.iBarWidth=w.__browser.barWidth}function et(t,e,n,a,r,o){var i,l=a,s=!1;for(n!==H&&(i=n,s=!0);l!==r;)t.hasOwnProperty(l)&&(i=s?e(i,t[l],l,t):t[l],s=!0,l+=o);return i}function nt(t,e){var n=w.defaults.column,a=t.aoColumns.length,n=P.extend({},w.models.oColumn,n,{nTh:e||y.createElement("th"),sTitle:n.sTitle||(e?e.innerHTML:""),aDataSort:n.aDataSort||[a],mData:n.mData||a,idx:a}),n=(t.aoColumns.push(n),t.aoPreSearchCols);n[a]=P.extend({},w.models.oSearch,n[a]),at(t,a,P(e).data())}function at(t,e,n){function a(t){return"string"==typeof t&&-1!==t.indexOf("@")}var e=t.aoColumns[e],r=t.oClasses,o=P(e.nTh),i=(e.sWidthOrig||(e.sWidthOrig=o.attr("width")||null,(u=(o.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/))&&(e.sWidthOrig=u[1])),n!==H&&null!==n&&(Q(n),C(w.defaults.column,n,!0),n.mDataProp===H||n.mData||(n.mData=n.mDataProp),n.sType&&(e._sManualType=n.sType),n.className&&!n.sClass&&(n.sClass=n.className),n.sClass&&o.addClass(n.sClass),u=e.sClass,P.extend(e,n),F(e,n,"sWidth","sWidthOrig"),u!==e.sClass&&(e.sClass=u+" "+e.sClass),n.iDataSort!==H&&(e.aDataSort=[n.iDataSort]),F(e,n,"aDataSort")),e.mData),l=A(i),s=e.mRender?A(e.mRender):null,u=(e._bAttrSrc=P.isPlainObject(i)&&(a(i.sort)||a(i.type)||a(i.filter)),e._setter=null,e.fnGetData=function(t,e,n){var a=l(t,e,H,n);return s&&e?s(a,e,t,n):a},e.fnSetData=function(t,e,n){return b(i)(t,e,n)},"number"==typeof i||e._isArrayHost||(t._rowReadObject=!0),t.oFeatures.bSort||(e.bSortable=!1,o.addClass(r.sSortableNone)),-1!==P.inArray("asc",e.asSorting)),n=-1!==P.inArray("desc",e.asSorting);e.bSortable&&(u||n)?u&&!n?(e.sSortingClass=r.sSortableAsc,e.sSortingClassJUI=r.sSortJUIAscAllowed):!u&&n?(e.sSortingClass=r.sSortableDesc,e.sSortingClassJUI=r.sSortJUIDescAllowed):(e.sSortingClass=r.sSortable,e.sSortingClassJUI=r.sSortJUI):(e.sSortingClass=r.sSortableNone,e.sSortingClassJUI="")}function O(t){if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns;ee(t);for(var n=0,a=e.length;n<a;n++)e[n].nTh.style.width=e[n].sWidth}var r=t.oScroll;""===r.sY&&""===r.sX||Qt(t),R(t,null,"column-sizing",[t])}function rt(t,e){t=it(t,"bVisible");return"number"==typeof t[e]?t[e]:null}function ot(t,e){t=it(t,"bVisible"),e=P.inArray(e,t);return-1!==e?e:null}function T(t){var n=0;return P.each(t.aoColumns,function(t,e){e.bVisible&&"none"!==P(e.nTh).css("display")&&n++}),n}function it(t,n){var a=[];return P.map(t.aoColumns,function(t,e){t[n]&&a.push(e)}),a}function lt(t){for(var e,n,a,r,o,i,l,s=t.aoColumns,u=t.aoData,c=w.ext.type.detect,f=0,d=s.length;f<d;f++)if(l=[],!(o=s[f]).sType&&o._sManualType)o.sType=o._sManualType;else if(!o.sType){for(e=0,n=c.length;e<n;e++){for(a=0,r=u.length;a<r&&(l[a]===H&&(l[a]=S(t,a,f,"type")),(i=c[e](l[a],t))||e===c.length-1)&&("html"!==i||h(l[a]));a++);if(i){o.sType=i;break}}o.sType||(o.sType="string")}}function st(t,e,n,a){var r,o,i,l,s=t.aoColumns;if(e)for(r=e.length-1;0<=r;r--)for(var u,c=(u=e[r]).target!==H?u.target:u.targets!==H?u.targets:u.aTargets,f=0,d=(c=Array.isArray(c)?c:[c]).length;f<d;f++)if("number"==typeof c[f]&&0<=c[f]){for(;s.length<=c[f];)nt(t);a(c[f],u)}else if("number"==typeof c[f]&&c[f]<0)a(s.length+c[f],u);else if("string"==typeof c[f])for(i=0,l=s.length;i<l;i++)"_all"!=c[f]&&!P(s[i].nTh).hasClass(c[f])||a(i,u);if(n)for(r=0,o=n.length;r<o;r++)a(r,n[r])}function x(t,e,n,a){for(var r=t.aoData.length,o=P.extend(!0,{},w.models.oRow,{src:n?"dom":"data",idx:r}),i=(o._aData=e,t.aoData.push(o),t.aoColumns),l=0,s=i.length;l<s;l++)i[l].sType=null;t.aiDisplayMaster.push(r);e=t.rowIdFn(e);return e!==H&&(t.aIds[e]=o),!n&&t.oFeatures.bDeferRender||St(t,r,n,a),r}function ut(n,t){var a;return(t=t instanceof P?t:P(t)).map(function(t,e){return a=mt(n,e),x(n,a.data,e,a.cells)})}function S(t,e,n,a){"search"===a?a="filter":"order"===a&&(a="sort");var r=t.iDraw,o=t.aoColumns[n],i=t.aoData[e]._aData,l=o.sDefaultContent,s=o.fnGetData(i,a,{settings:t,row:e,col:n});if(s===H)return t.iDrawError!=r&&null===l&&(W(t,0,"Requested unknown parameter "+("function"==typeof o.mData?"{function}":"'"+o.mData+"'")+" for row "+e+", column "+n,4),t.iDrawError=r),l;if(s!==i&&null!==s||null===l||a===H){if("function"==typeof s)return s.call(i)}else s=l;return null===s&&"display"===a?"":"filter"===a&&(e=w.ext.type.search)[o.sType]?e[o.sType](s):s}function ct(t,e,n,a){var r=t.aoColumns[n],o=t.aoData[e]._aData;r.fnSetData(o,a,{settings:t,row:e,col:n})}var ft=/\[.*?\]$/,g=/\(\)$/;function dt(t){return P.map(t.match(/(\\.|[^\.])+/g)||[""],function(t){return t.replace(/\\\./g,".")})}var A=w.util.get,b=w.util.set;function ht(t){return N(t.aoData,"_aData")}function pt(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={}}function gt(t,e,n){for(var a=-1,r=0,o=t.length;r<o;r++)t[r]==e?a=r:t[r]>e&&t[r]--;-1!=a&&n===H&&t.splice(a,1)}function bt(n,a,t,e){function r(t,e){for(;t.childNodes.length;)t.removeChild(t.firstChild);t.innerHTML=S(n,a,e,"display")}var o,i,l=n.aoData[a];if("dom"!==t&&(t&&"auto"!==t||"dom"!==l.src)){var s=l.anCells;if(s)if(e!==H)r(s[e],e);else for(o=0,i=s.length;o<i;o++)r(s[o],o)}else l._aData=mt(n,l,e,e===H?H:l._aData).data;l._aSortData=null,l._aFilterData=null;var u=n.aoColumns;if(e!==H)u[e].sType=null;else{for(o=0,i=u.length;o<i;o++)u[o].sType=null;vt(n,l)}}function mt(t,e,n,a){function r(t,e){var n;"string"==typeof t&&-1!==(n=t.indexOf("@"))&&(n=t.substring(n+1),b(t)(a,e.getAttribute(n)))}function o(t){n!==H&&n!==f||(l=d[f],s=t.innerHTML.trim(),l&&l._bAttrSrc?(b(l.mData._)(a,s),r(l.mData.sort,t),r(l.mData.type,t),r(l.mData.filter,t)):h?(l._setter||(l._setter=b(l.mData)),l._setter(a,s)):a[f]=s),f++}var i,l,s,u=[],c=e.firstChild,f=0,d=t.aoColumns,h=t._rowReadObject;a=a!==H?a:h?{}:[];if(c)for(;c;)"TD"!=(i=c.nodeName.toUpperCase())&&"TH"!=i||(o(c),u.push(c)),c=c.nextSibling;else for(var p=0,g=(u=e.anCells).length;p<g;p++)o(u[p]);var e=e.firstChild?e:e.nTr;return e&&(e=e.getAttribute("id"))&&b(t.rowId)(a,e),{data:a,cells:u}}function St(t,e,n,a){var r,o,i,l,s,u,c=t.aoData[e],f=c._aData,d=[];if(null===c.nTr){for(r=n||y.createElement("tr"),c.nTr=r,c.anCells=d,r._DT_RowIndex=e,vt(t,c),l=0,s=t.aoColumns.length;l<s;l++)i=t.aoColumns[l],(o=(u=!n)?y.createElement(i.sCellType):a[l])||W(t,0,"Incorrect column count",18),o._DT_CellIndex={row:e,column:l},d.push(o),!u&&(!i.mRender&&i.mData===l||P.isPlainObject(i.mData)&&i.mData._===l+".display")||(o.innerHTML=S(t,e,l,"display")),i.sClass&&(o.className+=" "+i.sClass),i.bVisible&&!n?r.appendChild(o):!i.bVisible&&n&&o.parentNode.removeChild(o),i.fnCreatedCell&&i.fnCreatedCell.call(t.oInstance,o,S(t,e,l),f,e,l);R(t,"aoRowCreatedCallback",null,[r,f,e,d])}}function vt(t,e){var n=e.nTr,a=e._aData;n&&((t=t.rowIdFn(a))&&(n.id=t),a.DT_RowClass&&(t=a.DT_RowClass.split(" "),e.__rowc=e.__rowc?z(e.__rowc.concat(t)):t,P(n).removeClass(e.__rowc.join(" ")).addClass(a.DT_RowClass)),a.DT_RowAttr&&P(n).attr(a.DT_RowAttr),a.DT_RowData&&P(n).data(a.DT_RowData))}function yt(t){var e,n,a,r=t.nTHead,o=t.nTFoot,i=0===P("th, td",r).length,l=t.oClasses,s=t.aoColumns;for(i&&(n=P("<tr/>").appendTo(r)),c=0,f=s.length;c<f;c++)a=s[c],e=P(a.nTh).addClass(a.sClass),i&&e.appendTo(n),t.oFeatures.bSort&&(e.addClass(a.sSortingClass),!1!==a.bSortable&&(e.attr("tabindex",t.iTabIndex).attr("aria-controls",t.sTableId),ue(t,a.nTh,c))),a.sTitle!=e[0].innerHTML&&e.html(a.sTitle),ve(t,"header")(t,e,a,l);if(i&&wt(t.aoHeader,r),P(r).children("tr").children("th, td").addClass(l.sHeaderTH),P(o).children("tr").children("th, td").addClass(l.sFooterTH),null!==o)for(var u=t.aoFooter[0],c=0,f=u.length;c<f;c++)(a=s[c])?(a.nTf=u[c].cell,a.sClass&&P(a.nTf).addClass(a.sClass)):W(t,0,"Incorrect column count",18)}function Dt(t,e,n){var a,r,o,i,l,s,u,c,f,d=[],h=[],p=t.aoColumns.length;if(e){for(n===H&&(n=!1),a=0,r=e.length;a<r;a++){for(d[a]=e[a].slice(),d[a].nTr=e[a].nTr,o=p-1;0<=o;o--)t.aoColumns[o].bVisible||n||d[a].splice(o,1);h.push([])}for(a=0,r=d.length;a<r;a++){if(u=d[a].nTr)for(;s=u.firstChild;)u.removeChild(s);for(o=0,i=d[a].length;o<i;o++)if(f=c=1,h[a][o]===H){for(u.appendChild(d[a][o].cell),h[a][o]=1;d[a+c]!==H&&d[a][o].cell==d[a+c][o].cell;)h[a+c][o]=1,c++;for(;d[a][o+f]!==H&&d[a][o].cell==d[a][o+f].cell;){for(l=0;l<c;l++)h[a+l][o+f]=1;f++}P(d[a][o].cell).attr("rowspan",c).attr("colspan",f)}}}}function v(t,e){n="ssp"==E(s=t),(l=s.iInitDisplayStart)!==H&&-1!==l&&(s._iDisplayStart=!n&&l>=s.fnRecordsDisplay()?0:l,s.iInitDisplayStart=-1);var n=R(t,"aoPreDrawCallback","preDraw",[t]);if(-1!==P.inArray(!1,n))D(t,!1);else{var a=[],r=0,o=t.asStripeClasses,i=o.length,l=t.oLanguage,s="ssp"==E(t),u=t.aiDisplay,n=t._iDisplayStart,c=t.fnDisplayEnd();if(t.bDrawing=!0,t.bDeferLoading)t.bDeferLoading=!1,t.iDraw++,D(t,!1);else if(s){if(!t.bDestroying&&!e)return void xt(t)}else t.iDraw++;if(0!==u.length)for(var f=s?t.aoData.length:c,d=s?0:n;d<f;d++){var h,p=u[d],g=t.aoData[p],b=(null===g.nTr&&St(t,p),g.nTr);0!==i&&(h=o[r%i],g._sRowStripe!=h&&(P(b).removeClass(g._sRowStripe).addClass(h),g._sRowStripe=h)),R(t,"aoRowCallback",null,[b,g._aData,r,d,p]),a.push(b),r++}else{e=l.sZeroRecords;1==t.iDraw&&"ajax"==E(t)?e=l.sLoadingRecords:l.sEmptyTable&&0===t.fnRecordsTotal()&&(e=l.sEmptyTable),a[0]=P("<tr/>",{class:i?o[0]:""}).append(P("<td />",{valign:"top",colSpan:T(t),class:t.oClasses.sRowEmpty}).html(e))[0]}R(t,"aoHeaderCallback","header",[P(t.nTHead).children("tr")[0],ht(t),n,c,u]),R(t,"aoFooterCallback","footer",[P(t.nTFoot).children("tr")[0],ht(t),n,c,u]);s=P(t.nTBody);s.children().detach(),s.append(P(a)),R(t,"aoDrawCallback","draw",[t]),t.bSorted=!1,t.bFiltered=!1,t.bDrawing=!1}}function u(t,e){var n=t.oFeatures,a=n.bSort,n=n.bFilter;a&&ie(t),n?Rt(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),t._drawHold=e,v(t),t._drawHold=!1}function _t(t){for(var e,n,a,r,o,i,l,s=t.oClasses,u=P(t.nTable),u=P("<div/>").insertBefore(u),c=t.oFeatures,f=P("<div/>",{id:t.sTableId+"_wrapper",class:s.sWrapper+(t.nTFoot?"":" "+s.sNoFooter)}),d=(t.nHolding=u[0],t.nTableWrapper=f[0],t.nTableReinsertBefore=t.nTable.nextSibling,t.sDom.split("")),h=0;h<d.length;h++){if(e=null,"<"==(n=d[h])){if(a=P("<div/>")[0],"'"==(r=d[h+1])||'"'==r){for(o="",i=2;d[h+i]!=r;)o+=d[h+i],i++;"H"==o?o=s.sJUIHeader:"F"==o&&(o=s.sJUIFooter),-1!=o.indexOf(".")?(l=o.split("."),a.id=l[0].substr(1,l[0].length-1),a.className=l[1]):"#"==o.charAt(0)?a.id=o.substr(1,o.length-1):a.className=o,h+=i}f.append(a),f=P(a)}else if(">"==n)f=f.parent();else if("l"==n&&c.bPaginate&&c.bLengthChange)e=Gt(t);else if("f"==n&&c.bFilter)e=Lt(t);else if("r"==n&&c.bProcessing)e=Zt(t);else if("t"==n)e=Kt(t);else if("i"==n&&c.bInfo)e=Ut(t);else if("p"==n&&c.bPaginate)e=zt(t);else if(0!==w.ext.feature.length)for(var p=w.ext.feature,g=0,b=p.length;g<b;g++)if(n==p[g].cFeature){e=p[g].fnInit(t);break}e&&((l=t.aanFeatures)[n]||(l[n]=[]),l[n].push(e),f.append(e))}u.replaceWith(f),t.nHolding=null}function wt(t,e){var n,a,r,o,i,l,s,u,c,f,d=P(e).children("tr");for(t.splice(0,t.length),r=0,l=d.length;r<l;r++)t.push([]);for(r=0,l=d.length;r<l;r++)for(a=(n=d[r]).firstChild;a;){if("TD"==a.nodeName.toUpperCase()||"TH"==a.nodeName.toUpperCase())for(u=(u=+a.getAttribute("colspan"))&&0!==u&&1!==u?u:1,c=(c=+a.getAttribute("rowspan"))&&0!==c&&1!==c?c:1,s=function(t,e,n){for(var a=t[e];a[n];)n++;return n}(t,r,0),f=1===u,i=0;i<u;i++)for(o=0;o<c;o++)t[r+o][s+i]={cell:a,unique:f},t[r+o].nTr=n;a=a.nextSibling}}function Ct(t,e,n){var a=[];n||(n=t.aoHeader,e&&wt(n=[],e));for(var r=0,o=n.length;r<o;r++)for(var i=0,l=n[r].length;i<l;i++)!n[r][i].unique||a[i]&&t.bSortCellsTop||(a[i]=n[r][i].cell);return a}function Tt(r,t,n){function e(t){var e=r.jqXHR?r.jqXHR.status:null;(null===t||"number"==typeof e&&204==e)&&Ft(r,t={},[]),(e=t.error||t.sError)&&W(r,0,e),r.json=t,R(r,null,"xhr",[r,t,r.jqXHR]),n(t)}R(r,"aoServerParams","serverParams",[t]),t&&Array.isArray(t)&&(a={},o=/(.*?)\[\]$/,P.each(t,function(t,e){var n=e.name.match(o);n?(n=n[0],a[n]||(a[n]=[]),a[n].push(e.value)):a[e.name]=e.value}),t=a);var a,o,i,l=r.ajax,s=r.oInstance,u=(P.isPlainObject(l)&&l.data&&(u="function"==typeof(i=l.data)?i(t,r):i,t="function"==typeof i&&u?u:P.extend(!0,t,u),delete l.data),{data:t,success:e,dataType:"json",cache:!1,type:r.sServerMethod,error:function(t,e,n){var a=R(r,null,"xhr",[r,null,r.jqXHR]);-1===P.inArray(!0,a)&&("parsererror"==e?W(r,0,"Invalid JSON response",1):4===t.readyState&&W(r,0,"Ajax error",7)),D(r,!1)}});r.oAjaxData=t,R(r,null,"preXhr",[r,t]),r.fnServerData?r.fnServerData.call(s,r.sAjaxSource,P.map(t,function(t,e){return{name:e,value:t}}),e,r):r.sAjaxSource||"string"==typeof l?r.jqXHR=P.ajax(P.extend(u,{url:l||r.sAjaxSource})):"function"==typeof l?r.jqXHR=l.call(s,t,e,r):(r.jqXHR=P.ajax(P.extend(u,l)),l.data=i)}function xt(e){e.iDraw++,D(e,!0);var n=e._drawHold;Tt(e,At(e),function(t){e._drawHold=n,It(e,t),e._drawHold=!1})}function At(t){for(var e,n,a,r=t.aoColumns,o=r.length,i=t.oFeatures,l=t.oPreviousSearch,s=t.aoPreSearchCols,u=[],c=I(t),f=t._iDisplayStart,d=!1!==i.bPaginate?t._iDisplayLength:-1,h=function(t,e){u.push({name:t,value:e})},p=(h("sEcho",t.iDraw),h("iColumns",o),h("sColumns",N(r,"sName").join(",")),h("iDisplayStart",f),h("iDisplayLength",d),{draw:t.iDraw,columns:[],order:[],start:f,length:d,search:{value:l.sSearch,regex:l.bRegex}}),g=0;g<o;g++)n=r[g],a=s[g],e="function"==typeof n.mData?"function":n.mData,p.columns.push({data:e,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:a.sSearch,regex:a.bRegex}}),h("mDataProp_"+g,e),i.bFilter&&(h("sSearch_"+g,a.sSearch),h("bRegex_"+g,a.bRegex),h("bSearchable_"+g,n.bSearchable)),i.bSort&&h("bSortable_"+g,n.bSortable);i.bFilter&&(h("sSearch",l.sSearch),h("bRegex",l.bRegex)),i.bSort&&(P.each(c,function(t,e){p.order.push({column:e.col,dir:e.dir}),h("iSortCol_"+t,e.col),h("sSortDir_"+t,e.dir)}),h("iSortingCols",c.length));f=w.ext.legacy.ajax;return null===f?t.sAjaxSource?u:p:f?u:p}function It(t,n){function e(t,e){return n[t]!==H?n[t]:n[e]}var a=Ft(t,n),r=e("sEcho","draw"),o=e("iTotalRecords","recordsTotal"),i=e("iTotalDisplayRecords","recordsFiltered");if(r!==H){if(+r<t.iDraw)return;t.iDraw=+r}a=a||[],pt(t),t._iRecordsTotal=parseInt(o,10),t._iRecordsDisplay=parseInt(i,10);for(var l=0,s=a.length;l<s;l++)x(t,a[l]);t.aiDisplay=t.aiDisplayMaster.slice(),v(t,!0),t._bInitComplete||qt(t,n),D(t,!1)}function Ft(t,e,n){t=P.isPlainObject(t.ajax)&&t.ajax.dataSrc!==H?t.ajax.dataSrc:t.sAjaxDataProp;if(!n)return"data"===t?e.aaData||e[t]:""!==t?A(t)(e):e;b(t)(e,n)}function Lt(n){function e(t){i.f;var e=this.value||"";o.return&&"Enter"!==t.key||e!=o.sSearch&&(Rt(n,{sSearch:e,bRegex:o.bRegex,bSmart:o.bSmart,bCaseInsensitive:o.bCaseInsensitive,return:o.return}),n._iDisplayStart=0,v(n))}var t=n.oClasses,a=n.sTableId,r=n.oLanguage,o=n.oPreviousSearch,i=n.aanFeatures,l='<input type="search" class="'+t.sFilterInput+'"/>',s=(s=r.sSearch).match(/_INPUT_/)?s.replace("_INPUT_",l):s+l,l=P("<div/>",{id:i.f?null:a+"_filter",class:t.sFilter}).append(P("<label/>").append(s)),t=null!==n.searchDelay?n.searchDelay:"ssp"===E(n)?400:0,u=P("input",l).val(o.sSearch).attr("placeholder",r.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",t?ne(e,t):e).on("mouseup.DT",function(t){setTimeout(function(){e.call(u[0],t)},10)}).on("keypress.DT",function(t){if(13==t.keyCode)return!1}).attr("aria-controls",a);return P(n.nTable).on("search.dt.DT",function(t,e){if(n===e)try{u[0]!==y.activeElement&&u.val(o.sSearch)}catch(t){}}),l[0]}function Rt(t,e,n){function a(t){o.sSearch=t.sSearch,o.bRegex=t.bRegex,o.bSmart=t.bSmart,o.bCaseInsensitive=t.bCaseInsensitive,o.return=t.return}function r(t){return t.bEscapeRegex!==H?!t.bEscapeRegex:t.bRegex}var o=t.oPreviousSearch,i=t.aoPreSearchCols;if(lt(t),"ssp"!=E(t)){Ht(t,e.sSearch,n,r(e),e.bSmart,e.bCaseInsensitive),a(e);for(var l=0;l<i.length;l++)jt(t,i[l].sSearch,l,r(i[l]),i[l].bSmart,i[l].bCaseInsensitive);Pt(t)}else a(e);t.bFiltered=!0,R(t,null,"search",[t])}function Pt(t){for(var e,n,a=w.ext.search,r=t.aiDisplay,o=0,i=a.length;o<i;o++){for(var l=[],s=0,u=r.length;s<u;s++)n=r[s],e=t.aoData[n],a[o](t,e._aFilterData,n,e._aData,s)&&l.push(n);r.length=0,P.merge(r,l)}}function jt(t,e,n,a,r,o){if(""!==e){for(var i,l=[],s=t.aiDisplay,u=Nt(e,a,r,o),c=0;c<s.length;c++)i=t.aoData[s[c]]._aFilterData[n],u.test(i)&&l.push(s[c]);t.aiDisplay=l}}function Ht(t,e,n,a,r,o){var i,l,s,u=Nt(e,a,r,o),r=t.oPreviousSearch.sSearch,o=t.aiDisplayMaster,c=[];if(0!==w.ext.search.length&&(n=!0),l=Wt(t),e.length<=0)t.aiDisplay=o.slice();else{for((l||n||a||r.length>e.length||0!==e.indexOf(r)||t.bSorted)&&(t.aiDisplay=o.slice()),i=t.aiDisplay,s=0;s<i.length;s++)u.test(t.aoData[i[s]]._sFilterRow)&&c.push(i[s]);t.aiDisplay=c}}function Nt(t,e,n,a){return t=e?t:Ot(t),n&&(t="^(?=.*?"+P.map(t.match(/["\u201C][^"\u201D]+["\u201D]|[^ ]+/g)||[""],function(t){var e;return'"'===t.charAt(0)?t=(e=t.match(/^"(.*)"$/))?e[1]:t:"“"===t.charAt(0)&&(t=(e=t.match(/^\u201C(.*)\u201D$/))?e[1]:t),t.replace('"',"")}).join(")(?=.*?")+").*$"),new RegExp(t,a?"i":"")}var Ot=w.util.escapeRegex,kt=P("<div>")[0],Mt=kt.textContent!==H;function Wt(t){for(var e,n,a,r,o,i=t.aoColumns,l=!1,s=0,u=t.aoData.length;s<u;s++)if(!(o=t.aoData[s])._aFilterData){for(a=[],e=0,n=i.length;e<n;e++)i[e].bSearchable?"string"!=typeof(r=null===(r=S(t,s,e,"filter"))?"":r)&&r.toString&&(r=r.toString()):r="",r.indexOf&&-1!==r.indexOf("&")&&(kt.innerHTML=r,r=Mt?kt.textContent:kt.innerText),r.replace&&(r=r.replace(/[\r\n\u2028]/g,"")),a.push(r);o._aFilterData=a,o._sFilterRow=a.join("  "),l=!0}return l}function Et(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}}function Bt(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}function Ut(t){var e=t.sTableId,n=t.aanFeatures.i,a=P("<div/>",{class:t.oClasses.sInfo,id:n?null:e+"_info"});return n||(t.aoDrawCallback.push({fn:Vt,sName:"information"}),a.attr("role","status").attr("aria-live","polite"),P(t.nTable).attr("aria-describedby",e+"_info")),a[0]}function Vt(t){var e,n,a,r,o,i,l=t.aanFeatures.i;0!==l.length&&(i=t.oLanguage,e=t._iDisplayStart+1,n=t.fnDisplayEnd(),a=t.fnRecordsTotal(),o=(r=t.fnRecordsDisplay())?i.sInfo:i.sInfoEmpty,r!==a&&(o+=" "+i.sInfoFiltered),o=Xt(t,o+=i.sInfoPostFix),null!==(i=i.fnInfoCallback)&&(o=i.call(t.oInstance,t,e,n,a,r,o)),P(l).html(o))}function Xt(t,e){var n=t.fnFormatNumber,a=t._iDisplayStart+1,r=t._iDisplayLength,o=t.fnRecordsDisplay(),i=-1===r;return e.replace(/_START_/g,n.call(t,a)).replace(/_END_/g,n.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,n.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(t,o)).replace(/_PAGE_/g,n.call(t,i?1:Math.ceil(a/r))).replace(/_PAGES_/g,n.call(t,i?1:Math.ceil(o/r)))}function Jt(n){var a,t,e,r=n.iInitDisplayStart,o=n.aoColumns,i=n.oFeatures,l=n.bDeferLoading;if(n.bInitialised){for(_t(n),yt(n),Dt(n,n.aoHeader),Dt(n,n.aoFooter),D(n,!0),i.bAutoWidth&&ee(n),a=0,t=o.length;a<t;a++)(e=o[a]).sWidth&&(e.nTh.style.width=M(e.sWidth));R(n,null,"preInit",[n]),u(n);i=E(n);"ssp"==i&&!l||("ajax"==i?Tt(n,[],function(t){var e=Ft(n,t);for(a=0;a<e.length;a++)x(n,e[a]);n.iInitDisplayStart=r,u(n),D(n,!1),qt(n,t)}):(D(n,!1),qt(n)))}else setTimeout(function(){Jt(n)},200)}function qt(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&O(t),R(t,null,"plugin-init",[t,e]),R(t,"aoInitComplete","init",[t,e])}function $t(t,e){e=parseInt(e,10);t._iDisplayLength=e,Se(t),R(t,null,"length",[t,e])}function Gt(a){for(var t=a.oClasses,e=a.sTableId,n=a.aLengthMenu,r=Array.isArray(n[0]),o=r?n[0]:n,i=r?n[1]:n,l=P("<select/>",{name:e+"_length","aria-controls":e,class:t.sLengthSelect}),s=0,u=o.length;s<u;s++)l[0][s]=new Option("number"==typeof i[s]?a.fnFormatNumber(i[s]):i[s],o[s]);var c=P("<div><label/></div>").addClass(t.sLength);return a.aanFeatures.l||(c[0].id=e+"_length"),c.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",l[0].outerHTML)),P("select",c).val(a._iDisplayLength).on("change.DT",function(t){$t(a,P(this).val()),v(a)}),P(a.nTable).on("length.dt.DT",function(t,e,n){a===e&&P("select",c).val(n)}),c[0]}function zt(t){function c(t){v(t)}var e=t.sPaginationType,f=w.ext.pager[e],d="function"==typeof f,e=P("<div/>").addClass(t.oClasses.sPaging+e)[0],h=t.aanFeatures;return d||f.fnInit(t,e,c),h.p||(e.id=t.sTableId+"_paginate",t.aoDrawCallback.push({fn:function(t){if(d)for(var e=t._iDisplayStart,n=t._iDisplayLength,a=t.fnRecordsDisplay(),r=-1===n,o=r?0:Math.ceil(e/n),i=r?1:Math.ceil(a/n),l=f(o,i),s=0,u=h.p.length;s<u;s++)ve(t,"pageButton")(t,h.p[s],s,l,o,i);else f.fnUpdate(t,c)},sName:"pagination"})),e}function Yt(t,e,n){var a=t._iDisplayStart,r=t._iDisplayLength,o=t.fnRecordsDisplay(),o=(0===o||-1===r?a=0:"number"==typeof e?o<(a=e*r)&&(a=0):"first"==e?a=0:"previous"==e?(a=0<=r?a-r:0)<0&&(a=0):"next"==e?a+r<o&&(a+=r):"last"==e?a=Math.floor((o-1)/r)*r:W(t,0,"Unknown paging action: "+e,5),t._iDisplayStart!==a);return t._iDisplayStart=a,o?(R(t,null,"page",[t]),n&&v(t)):R(t,null,"page-nc",[t]),o}function Zt(t){return P("<div/>",{id:t.aanFeatures.r?null:t.sTableId+"_processing",class:t.oClasses.sProcessing,role:"status"}).html(t.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(t.nTable)[0]}function D(t,e){t.oFeatures.bProcessing&&P(t.aanFeatures.r).css("display",e?"block":"none"),R(t,null,"processing",[t,e])}function Kt(t){var e,n,a,r,o,i,l,s,u,c,f,d,h=P(t.nTable),p=t.oScroll;return""===p.sX&&""===p.sY?t.nTable:(e=p.sX,n=p.sY,a=t.oClasses,o=(r=h.children("caption")).length?r[0]._captionSide:null,s=P(h[0].cloneNode(!1)),i=P(h[0].cloneNode(!1)),u=function(t){return t?M(t):null},(l=h.children("tfoot")).length||(l=null),s=P(f="<div/>",{class:a.sScrollWrapper}).append(P(f,{class:a.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:e?u(e):"100%"}).append(P(f,{class:a.sScrollHeadInner}).css({"box-sizing":"content-box",width:p.sXInner||"100%"}).append(s.removeAttr("id").css("margin-left",0).append("top"===o?r:null).append(h.children("thead"))))).append(P(f,{class:a.sScrollBody}).css({position:"relative",overflow:"auto",width:u(e)}).append(h)),l&&s.append(P(f,{class:a.sScrollFoot}).css({overflow:"hidden",border:0,width:e?u(e):"100%"}).append(P(f,{class:a.sScrollFootInner}).append(i.removeAttr("id").css("margin-left",0).append("bottom"===o?r:null).append(h.children("tfoot"))))),u=s.children(),c=u[0],f=u[1],d=l?u[2]:null,e&&P(f).on("scroll.DT",function(t){var e=this.scrollLeft;c.scrollLeft=e,l&&(d.scrollLeft=e)}),P(f).css("max-height",n),p.bCollapse||P(f).css("height",n),t.nScrollHead=c,t.nScrollBody=f,t.nScrollFoot=d,t.aoDrawCallback.push({fn:Qt,sName:"scrolling"}),s[0])}function Qt(n){function t(t){(t=t.style).paddingTop="0",t.paddingBottom="0",t.borderTopWidth="0",t.borderBottomWidth="0",t.height=0}var e,a,r,o,i,l=n.oScroll,s=l.sX,u=l.sXInner,c=l.sY,l=l.iBarWidth,f=P(n.nScrollHead),d=f[0].style,h=f.children("div"),p=h[0].style,h=h.children("table"),g=n.nScrollBody,b=P(g),m=g.style,S=P(n.nScrollFoot).children("div"),v=S.children("table"),y=P(n.nTHead),D=P(n.nTable),_=D[0],w=_.style,C=n.nTFoot?P(n.nTFoot):null,T=n.oBrowser,x=T.bScrollOversize,A=(N(n.aoColumns,"nTh"),[]),I=[],F=[],L=[],R=g.scrollHeight>g.clientHeight;n.scrollBarVis!==R&&n.scrollBarVis!==H?(n.scrollBarVis=R,O(n)):(n.scrollBarVis=R,D.children("thead, tfoot").remove(),C&&(R=C.clone().prependTo(D),i=C.find("tr"),a=R.find("tr"),R.find("[id]").removeAttr("id")),R=y.clone().prependTo(D),y=y.find("tr"),e=R.find("tr"),R.find("th, td").removeAttr("tabindex"),R.find("[id]").removeAttr("id"),s||(m.width="100%",f[0].style.width="100%"),P.each(Ct(n,R),function(t,e){r=rt(n,t),e.style.width=n.aoColumns[r].sWidth}),C&&k(function(t){t.style.width=""},a),f=D.outerWidth(),""===s?(w.width="100%",x&&(D.find("tbody").height()>g.offsetHeight||"scroll"==b.css("overflow-y"))&&(w.width=M(D.outerWidth()-l)),f=D.outerWidth()):""!==u&&(w.width=M(u),f=D.outerWidth()),k(t,e),k(function(t){var e=j.getComputedStyle?j.getComputedStyle(t).width:M(P(t).width());F.push(t.innerHTML),A.push(e)},e),k(function(t,e){t.style.width=A[e]},y),P(e).css("height",0),C&&(k(t,a),k(function(t){L.push(t.innerHTML),I.push(M(P(t).css("width")))},a),k(function(t,e){t.style.width=I[e]},i),P(a).height(0)),k(function(t,e){t.innerHTML='<div class="dataTables_sizing">'+F[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=A[e]},e),C&&k(function(t,e){t.innerHTML='<div class="dataTables_sizing">'+L[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=I[e]},a),Math.round(D.outerWidth())<Math.round(f)?(o=g.scrollHeight>g.offsetHeight||"scroll"==b.css("overflow-y")?f+l:f,x&&(g.scrollHeight>g.offsetHeight||"scroll"==b.css("overflow-y"))&&(w.width=M(o-l)),""!==s&&""===u||W(n,1,"Possible column misalignment",6)):o="100%",m.width=M(o),d.width=M(o),C&&(n.nScrollFoot.style.width=M(o)),c||x&&(m.height=M(_.offsetHeight+l)),R=D.outerWidth(),h[0].style.width=M(R),p.width=M(R),y=D.height()>g.clientHeight||"scroll"==b.css("overflow-y"),p[i="padding"+(T.bScrollbarLeft?"Left":"Right")]=y?l+"px":"0px",C&&(v[0].style.width=M(R),S[0].style.width=M(R),S[0].style[i]=y?l+"px":"0px"),D.children("colgroup").insertBefore(D.children("thead")),b.trigger("scroll"),!n.bSorted&&!n.bFiltered||n._drawHold||(g.scrollTop=0))}function k(t,e,n){for(var a,r,o=0,i=0,l=e.length;i<l;){for(a=e[i].firstChild,r=n?n[i].firstChild:null;a;)1===a.nodeType&&(n?t(a,r,o):t(a,o),o++),a=a.nextSibling,r=n?r.nextSibling:null;i++}}var te=/<.*?>/g;function ee(t){var e,n,a=t.nTable,r=t.aoColumns,o=t.oScroll,i=o.sY,l=o.sX,o=o.sXInner,s=r.length,u=it(t,"bVisible"),c=P("th",t.nTHead),f=a.getAttribute("width"),d=a.parentNode,h=!1,p=t.oBrowser,g=p.bScrollOversize,b=a.style.width;for(b&&-1!==b.indexOf("%")&&(f=b),D=0;D<u.length;D++)null!==(e=r[u[D]]).sWidth&&(e.sWidth=ae(e.sWidthOrig,d),h=!0);if(g||!h&&!l&&!i&&s==T(t)&&s==c.length)for(D=0;D<s;D++){var m=rt(t,D);null!==m&&(r[m].sWidth=M(c.eq(D).width()))}else{var b=P(a).clone().css("visibility","hidden").removeAttr("id"),S=(b.find("tbody tr").remove(),P("<tr/>").appendTo(b.find("tbody")));for(b.find("thead, tfoot").remove(),b.append(P(t.nTHead).clone()).append(P(t.nTFoot).clone()),b.find("tfoot th, tfoot td").css("width",""),c=Ct(t,b.find("thead")[0]),D=0;D<u.length;D++)e=r[u[D]],c[D].style.width=null!==e.sWidthOrig&&""!==e.sWidthOrig?M(e.sWidthOrig):"",e.sWidthOrig&&l&&P(c[D]).append(P("<div/>").css({width:e.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(t.aoData.length)for(D=0;D<u.length;D++)e=r[n=u[D]],P(re(t,n)).clone(!1).append(e.sContentPadding).appendTo(S);P("[name]",b).removeAttr("name");for(var v=P("<div/>").css(l||i?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(b).appendTo(d),y=(l&&o?b.width(o):l?(b.css("width","auto"),b.removeAttr("width"),b.width()<d.clientWidth&&f&&b.width(d.clientWidth)):i?b.width(d.clientWidth):f&&b.width(f),0),D=0;D<u.length;D++){var _=P(c[D]),w=_.outerWidth()-_.width(),_=p.bBounding?Math.ceil(c[D].getBoundingClientRect().width):_.outerWidth();y+=_,r[u[D]].sWidth=M(_-w)}a.style.width=M(y),v.remove()}f&&(a.style.width=M(f)),!f&&!l||t._reszEvt||(o=function(){P(j).on("resize.DT-"+t.sInstance,ne(function(){O(t)}))},g?setTimeout(o,1e3):o(),t._reszEvt=!0)}var ne=w.util.throttle;function ae(t,e){return t?(e=(t=P("<div/>").css("width",M(t)).appendTo(e||y.body))[0].offsetWidth,t.remove(),e):0}function re(t,e){var n,a=oe(t,e);return a<0?null:(n=t.aoData[a]).nTr?n.anCells[e]:P("<td/>").html(S(t,a,e,"display"))[0]}function oe(t,e){for(var n,a=-1,r=-1,o=0,i=t.aoData.length;o<i;o++)(n=(n=(n=S(t,o,e,"display")+"").replace(te,"")).replace(/&nbsp;/g," ")).length>a&&(a=n.length,r=o);return r}function M(t){return null===t?"0px":"number"==typeof t?t<0?"0px":t+"px":t.match(/\d$/)?t+"px":t}function I(t){function e(t){t.length&&!Array.isArray(t[0])?h.push(t):P.merge(h,t)}var n,a,r,o,i,l,s,u=[],c=t.aoColumns,f=t.aaSortingFixed,d=P.isPlainObject(f),h=[];for(Array.isArray(f)&&e(f),d&&f.pre&&e(f.pre),e(t.aaSorting),d&&f.post&&e(f.post),n=0;n<h.length;n++)for(r=(o=c[s=h[n][a=0]].aDataSort).length;a<r;a++)l=c[i=o[a]].sType||"string",h[n]._idx===H&&(h[n]._idx=P.inArray(h[n][1],c[i].asSorting)),u.push({src:s,col:i,dir:h[n][1],index:h[n]._idx,type:l,formatter:w.ext.type.order[l+"-pre"]});return u}function ie(t){var e,n,a,r,c,f=[],u=w.ext.type.order,d=t.aoData,o=(t.aoColumns,0),i=t.aiDisplayMaster;for(lt(t),e=0,n=(c=I(t)).length;e<n;e++)(r=c[e]).formatter&&o++,fe(t,r.col);if("ssp"!=E(t)&&0!==c.length){for(e=0,a=i.length;e<a;e++)f[i[e]]=e;o===c.length?i.sort(function(t,e){for(var n,a,r,o,i=c.length,l=d[t]._aSortData,s=d[e]._aSortData,u=0;u<i;u++)if(0!=(r=(n=l[(o=c[u]).col])<(a=s[o.col])?-1:a<n?1:0))return"asc"===o.dir?r:-r;return(n=f[t])<(a=f[e])?-1:a<n?1:0}):i.sort(function(t,e){for(var n,a,r,o=c.length,i=d[t]._aSortData,l=d[e]._aSortData,s=0;s<o;s++)if(n=i[(r=c[s]).col],a=l[r.col],0!==(r=(u[r.type+"-"+r.dir]||u["string-"+r.dir])(n,a)))return r;return(n=f[t])<(a=f[e])?-1:a<n?1:0})}t.bSorted=!0}function le(t){for(var e=t.aoColumns,n=I(t),a=t.oLanguage.oAria,r=0,o=e.length;r<o;r++){var i=e[r],l=i.asSorting,s=i.ariaTitle||i.sTitle.replace(/<.*?>/g,""),u=i.nTh;u.removeAttribute("aria-sort"),i=i.bSortable?s+("asc"===(0<n.length&&n[0].col==r&&(u.setAttribute("aria-sort","asc"==n[0].dir?"ascending":"descending"),l[n[0].index+1])||l[0])?a.sSortAscending:a.sSortDescending):s,u.setAttribute("aria-label",i)}}function se(t,e,n,a){function r(t,e){var n=t._idx;return(n=n===H?P.inArray(t[1],s):n)+1<s.length?n+1:e?null:0}var o,i=t.aoColumns[e],l=t.aaSorting,s=i.asSorting;"number"==typeof l[0]&&(l=t.aaSorting=[l]),n&&t.oFeatures.bSortMulti?-1!==(i=P.inArray(e,N(l,"0")))?null===(o=null===(o=r(l[i],!0))&&1===l.length?0:o)?l.splice(i,1):(l[i][1]=s[o],l[i]._idx=o):(l.push([e,s[0],0]),l[l.length-1]._idx=0):l.length&&l[0][0]==e?(o=r(l[0]),l.length=1,l[0][1]=s[o],l[0]._idx=o):(l.length=0,l.push([e,s[0]]),l[0]._idx=0),u(t),"function"==typeof a&&a(t)}function ue(e,t,n,a){var r=e.aoColumns[n];me(t,{},function(t){!1!==r.bSortable&&(e.oFeatures.bProcessing?(D(e,!0),setTimeout(function(){se(e,n,t.shiftKey,a),"ssp"!==E(e)&&D(e,!1)},0)):se(e,n,t.shiftKey,a))})}function ce(t){var e,n,a,r=t.aLastSort,o=t.oClasses.sSortColumn,i=I(t),l=t.oFeatures;if(l.bSort&&l.bSortClasses){for(e=0,n=r.length;e<n;e++)a=r[e].src,P(N(t.aoData,"anCells",a)).removeClass(o+(e<2?e+1:3));for(e=0,n=i.length;e<n;e++)a=i[e].src,P(N(t.aoData,"anCells",a)).addClass(o+(e<2?e+1:3))}t.aLastSort=i}function fe(t,e){for(var n,a,r,o=t.aoColumns[e],i=w.ext.order[o.sSortDataType],l=(i&&(n=i.call(t.oInstance,t,e,ot(t,e))),w.ext.type.order[o.sType+"-pre"]),s=0,u=t.aoData.length;s<u;s++)(a=t.aoData[s])._aSortData||(a._aSortData=[]),a._aSortData[e]&&!i||(r=i?n[s]:S(t,s,e,"sort"),a._aSortData[e]=l?l(r):r)}function de(n){var t;n._bLoadingState||(t={time:+new Date,start:n._iDisplayStart,length:n._iDisplayLength,order:P.extend(!0,[],n.aaSorting),search:Et(n.oPreviousSearch),columns:P.map(n.aoColumns,function(t,e){return{visible:t.bVisible,search:Et(n.aoPreSearchCols[e])}})},n.oSavedState=t,R(n,"aoStateSaveParams","stateSaveParams",[n,t]),n.oFeatures.bStateSave&&!n.bDestroying&&n.fnStateSaveCallback.call(n.oInstance,n,t))}function he(e,t,n){var a;if(e.oFeatures.bStateSave)return(a=e.fnStateLoadCallback.call(e.oInstance,e,function(t){pe(e,t,n)}))!==H&&pe(e,a,n),!0;n()}function pe(n,t,e){var a,r,o=n.aoColumns,i=(n._bLoadingState=!0,n._bInitComplete?new w.Api(n):null);if(t&&t.time){var l=R(n,"aoStateLoadParams","stateLoadParams",[n,t]);if(-1!==P.inArray(!1,l))n._bLoadingState=!1;else{l=n.iStateDuration;if(0<l&&t.time<+new Date-1e3*l)n._bLoadingState=!1;else if(t.columns&&o.length!==t.columns.length)n._bLoadingState=!1;else{if(n.oLoadedState=P.extend(!0,{},t),t.length!==H&&(i?i.page.len(t.length):n._iDisplayLength=t.length),t.start!==H&&(null===i?(n._iDisplayStart=t.start,n.iInitDisplayStart=t.start):Yt(n,t.start/n._iDisplayLength)),t.order!==H&&(n.aaSorting=[],P.each(t.order,function(t,e){n.aaSorting.push(e[0]>=o.length?[0,e[1]]:e)})),t.search!==H&&P.extend(n.oPreviousSearch,Bt(t.search)),t.columns){for(a=0,r=t.columns.length;a<r;a++){var s=t.columns[a];s.visible!==H&&(i?i.column(a).visible(s.visible,!1):o[a].bVisible=s.visible),s.search!==H&&P.extend(n.aoPreSearchCols[a],Bt(s.search))}i&&i.columns.adjust()}n._bLoadingState=!1,R(n,"aoStateLoaded","stateLoaded",[n,t])}}}else n._bLoadingState=!1;e()}function ge(t){var e=w.settings,t=P.inArray(t,N(e,"nTable"));return-1!==t?e[t]:null}function W(t,e,n,a){if(n="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+n,a&&(n+=". For more information about this error, please see http://datatables.net/tn/"+a),e)j.console&&console.log&&console.log(n);else{e=w.ext,e=e.sErrMode||e.errMode;if(t&&R(t,null,"error",[t,a,n]),"alert"==e)alert(n);else{if("throw"==e)throw new Error(n);"function"==typeof e&&e(t,a,n)}}}function F(n,a,t,e){Array.isArray(t)?P.each(t,function(t,e){Array.isArray(e)?F(n,a,e[0],e[1]):F(n,a,e)}):(e===H&&(e=t),a[t]!==H&&(n[e]=a[t]))}function be(t,e,n){var a,r;for(r in e)e.hasOwnProperty(r)&&(a=e[r],P.isPlainObject(a)?(P.isPlainObject(t[r])||(t[r]={}),P.extend(!0,t[r],a)):n&&"data"!==r&&"aaData"!==r&&Array.isArray(a)?t[r]=a.slice():t[r]=a);return t}function me(e,t,n){P(e).on("click.DT",t,function(t){P(e).trigger("blur"),n(t)}).on("keypress.DT",t,function(t){13===t.which&&(t.preventDefault(),n(t))}).on("selectstart.DT",function(){return!1})}function L(t,e,n,a){n&&t[e].push({fn:n,sName:a})}function R(n,t,e,a){var r=[];return t&&(r=P.map(n[t].slice().reverse(),function(t,e){return t.fn.apply(n.oInstance,a)})),null!==e&&(t=P.Event(e+".dt"),(e=P(n.nTable)).trigger(t,a),0===e.parents("body").length&&P("body").trigger(t,a),r.push(t.result)),r}function Se(t){var e=t._iDisplayStart,n=t.fnDisplayEnd(),a=t._iDisplayLength;n<=e&&(e=n-a),e-=e%a,t._iDisplayStart=e=-1===a||e<0?0:e}function ve(t,e){var t=t.renderer,n=w.ext.renderer[e];return P.isPlainObject(t)&&t[e]?n[t[e]]||n._:"string"==typeof t&&n[t]||n._}function E(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}function ye(t,n){var a;return Array.isArray(t)?P.map(t,function(t){return ye(t,n)}):"number"==typeof t?[n[t]]:(a=P.map(n,function(t,e){return t.nTable}),P(a).filter(t).map(function(t){var e=P.inArray(this,a);return n[e]}).toArray())}function De(r,o,t){var e,n;t&&(e=new B(r)).one("draw",function(){t(e.ajax.json())}),"ssp"==E(r)?u(r,o):(D(r,!0),(n=r.jqXHR)&&4!==n.readyState&&n.abort(),Tt(r,[],function(t){pt(r);for(var e=Ft(r,t),n=0,a=e.length;n<a;n++)x(r,e[n]);u(r,o),D(r,!1)}))}function _e(t,e,n,a,r){for(var o,i,l,s,u=[],c=typeof e,f=0,d=(e=e&&"string"!=c&&"function"!=c&&e.length!==H?e:[e]).length;f<d;f++)for(l=0,s=(i=e[f]&&e[f].split&&!e[f].match(/[\[\(:]/)?e[f].split(","):[e[f]]).length;l<s;l++)(o=n("string"==typeof i[l]?i[l].trim():i[l]))&&o.length&&(u=u.concat(o));var h=p.selector[t];if(h.length)for(f=0,d=h.length;f<d;f++)u=h[f](a,r,u);return z(u)}function we(t){return(t=t||{}).filter&&t.search===H&&(t.search=t.filter),P.extend({search:"none",order:"current",page:"all"},t)}function Ce(t){for(var e=0,n=t.length;e<n;e++)if(0<t[e].length)return t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t;return t.length=0,t}function Te(o,t,e,n){function i(t,e){var n;if(Array.isArray(t)||t instanceof P)for(var a=0,r=t.length;a<r;a++)i(t[a],e);else t.nodeName&&"tr"===t.nodeName.toLowerCase()?l.push(t):(n=P("<tr><td></td></tr>").addClass(e),P("td",n).addClass(e).html(t)[0].colSpan=T(o),l.push(n[0]))}var l=[];i(e,n),t._details&&t._details.detach(),t._details=P(l),t._detailsShow&&t._details.insertAfter(t.nTr)}function xe(t,e){var n=t.context;if(n.length&&t.length){var a=n[0].aoData[t[0]];if(a._details){(a._detailsShow=e)?(a._details.insertAfter(a.nTr),P(a.nTr).addClass("dt-hasChild")):(a._details.detach(),P(a.nTr).removeClass("dt-hasChild")),R(n[0],null,"childRow",[e,t.row(t[0])]);var s=n[0],r=new B(s),a=".dt.DT_details",e="draw"+a,t="column-sizing"+a,a="destroy"+a,u=s.aoData;if(r.off(e+" "+t+" "+a),N(u,"_details").length>0){r.on(e,function(t,e){if(s!==e)return;r.rows({page:"current"}).eq(0).each(function(t){var e=u[t];if(e._detailsShow)e._details.insertAfter(e.nTr)})});r.on(t,function(t,e,n,a){if(s!==e)return;var r,o=T(e);for(var i=0,l=u.length;i<l;i++){r=u[i];if(r._details)r._details.children("td[colspan]").attr("colspan",o)}});r.on(a,function(t,e){if(s!==e)return;for(var n=0,a=u.length;n<a;n++)if(u[n]._details)Re(r,n)})}Le(n)}}}function Ae(t,e,n,a,r){for(var o=[],i=0,l=r.length;i<l;i++)o.push(S(t,r[i],e));return o}var Ie=[],o=Array.prototype,B=function(t,e){if(!(this instanceof B))return new B(t,e);function n(t){var e,n,a,r;t=t,a=w.settings,r=P.map(a,function(t,e){return t.nTable}),(t=t?t.nTable&&t.oApi?[t]:t.nodeName&&"table"===t.nodeName.toLowerCase()?-1!==(e=P.inArray(t,r))?[a[e]]:null:t&&"function"==typeof t.settings?t.settings().toArray():("string"==typeof t?n=P(t):t instanceof P&&(n=t),n?n.map(function(t){return-1!==(e=P.inArray(this,r))?a[e]:null}).toArray():void 0):[])&&o.push.apply(o,t)}var o=[];if(Array.isArray(t))for(var a=0,r=t.length;a<r;a++)n(t[a]);else n(t);this.context=z(o),e&&P.merge(this,e),this.selector={rows:null,cols:null,opts:null},B.extend(this,this,Ie)},Fe=(w.Api=B,P.extend(B.prototype,{any:function(){return 0!==this.count()},concat:o.concat,context:[],count:function(){return this.flatten().length},each:function(t){for(var e=0,n=this.length;e<n;e++)t.call(this,this[e],e,this);return this},eq:function(t){var e=this.context;return e.length>t?new B(e[t],this[t]):null},filter:function(t){var e=[];if(o.filter)e=o.filter.call(this,t,this);else for(var n=0,a=this.length;n<a;n++)t.call(this,this[n],n,this)&&e.push(this[n]);return new B(this.context,e)},flatten:function(){var t=[];return new B(this.context,t.concat.apply(t,this.toArray()))},join:o.join,indexOf:o.indexOf||function(t,e){for(var n=e||0,a=this.length;n<a;n++)if(this[n]===t)return n;return-1},iterator:function(t,e,n,a){var r,o,i,l,s,u,c,f,d=[],h=this.context,p=this.selector;for("string"==typeof t&&(a=n,n=e,e=t,t=!1),o=0,i=h.length;o<i;o++){var g=new B(h[o]);if("table"===e)(r=n.call(g,h[o],o))!==H&&d.push(r);else if("columns"===e||"rows"===e)(r=n.call(g,h[o],this[o],o))!==H&&d.push(r);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(c=this[o],"column-rows"===e&&(u=Fe(h[o],p.opts)),l=0,s=c.length;l<s;l++)f=c[l],(r="cell"===e?n.call(g,h[o],f.row,f.column,o,l):n.call(g,h[o],f,o,l,u))!==H&&d.push(r)}return d.length||a?((t=(a=new B(h,t?d.concat.apply([],d):d)).selector).rows=p.rows,t.cols=p.cols,t.opts=p.opts,a):this},lastIndexOf:o.lastIndexOf||function(t,e){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){var e=[];if(o.map)e=o.map.call(this,t,this);else for(var n=0,a=this.length;n<a;n++)e.push(t.call(this,this[n],n));return new B(this.context,e)},pluck:function(t){var e=w.util.get(t);return this.map(function(t){return e(t)})},pop:o.pop,push:o.push,reduce:o.reduce||function(t,e){return et(this,t,e,0,this.length,1)},reduceRight:o.reduceRight||function(t,e){return et(this,t,e,this.length-1,-1,-1)},reverse:o.reverse,selector:null,shift:o.shift,slice:function(){return new B(this.context,this)},sort:o.sort,splice:o.splice,toArray:function(){return o.slice.call(this)},to$:function(){return P(this)},toJQuery:function(){return P(this)},unique:function(){return new B(this.context,z(this))},unshift:o.unshift}),B.extend=function(t,e,n){if(n.length&&e&&(e instanceof B||e.__dt_wrapper))for(var a,r=0,o=n.length;r<o;r++)e[(a=n[r]).name]="function"===a.type?function(e,n,a){return function(){var t=n.apply(e,arguments);return B.extend(t,t,a.methodExt),t}}(t,a.val,a):"object"===a.type?{}:a.val,e[a.name].__dt_wrapper=!0,B.extend(t,e[a.name],a.propExt)},B.register=e=function(t,e){if(Array.isArray(t))for(var n=0,a=t.length;n<a;n++)B.register(t[n],e);else for(var r=t.split("."),o=Ie,i=0,l=r.length;i<l;i++){var s,u,c=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n].name===e)return t[n];return null}(o,u=(s=-1!==r[i].indexOf("()"))?r[i].replace("()",""):r[i]);c||o.push(c={name:u,val:{},methodExt:[],propExt:[],type:"object"}),i===l-1?(c.val=e,c.type="function"==typeof e?"function":P.isPlainObject(e)?"object":"other"):o=s?c.methodExt:c.propExt}},B.registerPlural=t=function(t,e,n){B.register(t,n),B.register(e,function(){var t=n.apply(this,arguments);return t===this?this:t instanceof B?t.length?Array.isArray(t[0])?new B(t.context,t[0]):t[0]:H:t})},e("tables()",function(t){return t!==H&&null!==t?new B(ye(t,this.context)):this}),e("table()",function(t){var t=this.tables(t),e=t.context;return e.length?new B(e[0]):t}),t("tables().nodes()","table().node()",function(){return this.iterator("table",function(t){return t.nTable},1)}),t("tables().body()","table().body()",function(){return this.iterator("table",function(t){return t.nTBody},1)}),t("tables().header()","table().header()",function(){return this.iterator("table",function(t){return t.nTHead},1)}),t("tables().footer()","table().footer()",function(){return this.iterator("table",function(t){return t.nTFoot},1)}),t("tables().containers()","table().container()",function(){return this.iterator("table",function(t){return t.nTableWrapper},1)}),e("draw()",function(e){return this.iterator("table",function(t){"page"===e?v(t):u(t,!1===(e="string"==typeof e?"full-hold"!==e:e))})}),e("page()",function(e){return e===H?this.page.info().page:this.iterator("table",function(t){Yt(t,e)})}),e("page.info()",function(t){var e,n,a,r,o;return 0===this.context.length?H:(n=(e=this.context[0])._iDisplayStart,a=e.oFeatures.bPaginate?e._iDisplayLength:-1,r=e.fnRecordsDisplay(),{page:(o=-1===a)?0:Math.floor(n/a),pages:o?1:Math.ceil(r/a),start:n,end:e.fnDisplayEnd(),length:a,recordsTotal:e.fnRecordsTotal(),recordsDisplay:r,serverSide:"ssp"===E(e)})}),e("page.len()",function(e){return e===H?0!==this.context.length?this.context[0]._iDisplayLength:H:this.iterator("table",function(t){$t(t,e)})}),e("ajax.json()",function(){var t=this.context;if(0<t.length)return t[0].json}),e("ajax.params()",function(){var t=this.context;if(0<t.length)return t[0].oAjaxData}),e("ajax.reload()",function(e,n){return this.iterator("table",function(t){De(t,!1===n,e)})}),e("ajax.url()",function(e){var t=this.context;return e===H?0===t.length?H:(t=t[0]).ajax?P.isPlainObject(t.ajax)?t.ajax.url:t.ajax:t.sAjaxSource:this.iterator("table",function(t){P.isPlainObject(t.ajax)?t.ajax.url=e:t.ajax=e})}),e("ajax.url().load()",function(e,n){return this.iterator("table",function(t){De(t,!1===n,e)})}),function(t,e){var n,a=[],r=t.aiDisplay,o=t.aiDisplayMaster,i=e.search,l=e.order,e=e.page;if("ssp"==E(t))return"removed"===i?[]:f(0,o.length);if("current"==e)for(u=t._iDisplayStart,c=t.fnDisplayEnd();u<c;u++)a.push(r[u]);else if("current"==l||"applied"==l){if("none"==i)a=o.slice();else if("applied"==i)a=r.slice();else if("removed"==i){for(var s={},u=0,c=r.length;u<c;u++)s[r[u]]=null;a=P.map(o,function(t){return s.hasOwnProperty(t)?null:t})}}else if("index"==l||"original"==l)for(u=0,c=t.aoData.length;u<c;u++)("none"==i||-1===(n=P.inArray(u,r))&&"removed"==i||0<=n&&"applied"==i)&&a.push(u);return a}),Le=(e("rows()",function(e,n){e===H?e="":P.isPlainObject(e)&&(n=e,e=""),n=we(n);var t=this.iterator("table",function(t){return _e("row",e,function(n){var t=d(n),a=r.aoData;if(null!==t&&!o)return[t];if(i=i||Fe(r,o),null!==t&&-1!==P.inArray(t,i))return[t];if(null===n||n===H||""===n)return i;if("function"==typeof n)return P.map(i,function(t){var e=a[t];return n(t,e._aData,e.nTr)?t:null});if(n.nodeName)return t=n._DT_RowIndex,e=n._DT_CellIndex,t!==H?a[t]&&a[t].nTr===n?[t]:[]:e?a[e.row]&&a[e.row].nTr===n.parentNode?[e.row]:[]:(t=P(n).closest("*[data-dt-row]")).length?[t.data("dt-row")]:[];if("string"==typeof n&&"#"===n.charAt(0)){var e=r.aIds[n.replace(/^#/,"")];if(e!==H)return[e.idx]}t=_(m(r.aoData,i,"nTr"));return P(t).filter(n).map(function(){return this._DT_RowIndex}).toArray()},r=t,o=n);var r,o,i},1);return t.selector.rows=e,t.selector.opts=n,t}),e("rows().nodes()",function(){return this.iterator("row",function(t,e){return t.aoData[e].nTr||H},1)}),e("rows().data()",function(){return this.iterator(!0,"rows",function(t,e){return m(t.aoData,e,"_aData")},1)}),t("rows().cache()","row().cache()",function(n){return this.iterator("row",function(t,e){t=t.aoData[e];return"search"===n?t._aFilterData:t._aSortData},1)}),t("rows().invalidate()","row().invalidate()",function(n){return this.iterator("row",function(t,e){bt(t,e,n)})}),t("rows().indexes()","row().index()",function(){return this.iterator("row",function(t,e){return e},1)}),t("rows().ids()","row().id()",function(t){for(var e=[],n=this.context,a=0,r=n.length;a<r;a++)for(var o=0,i=this[a].length;o<i;o++){var l=n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);e.push((!0===t?"#":"")+l)}return new B(n,e)}),t("rows().remove()","row().remove()",function(){var f=this;return this.iterator("row",function(t,e,n){var a,r,o,i,l,s,u=t.aoData,c=u[e];for(u.splice(e,1),a=0,r=u.length;a<r;a++)if(s=(l=u[a]).anCells,null!==l.nTr&&(l.nTr._DT_RowIndex=a),null!==s)for(o=0,i=s.length;o<i;o++)s[o]._DT_CellIndex.row=a;gt(t.aiDisplayMaster,e),gt(t.aiDisplay,e),gt(f[n],e,!1),0<t._iRecordsDisplay&&t._iRecordsDisplay--,Se(t);n=t.rowIdFn(c._aData);n!==H&&delete t.aIds[n]}),this.iterator("table",function(t){for(var e=0,n=t.aoData.length;e<n;e++)t.aoData[e].idx=e}),this}),e("rows.add()",function(o){var t=this.iterator("table",function(t){for(var e,n=[],a=0,r=o.length;a<r;a++)(e=o[a]).nodeName&&"TR"===e.nodeName.toUpperCase()?n.push(ut(t,e)[0]):n.push(x(t,e));return n},1),e=this.rows(-1);return e.pop(),P.merge(e,t),e}),e("row()",function(t,e){return Ce(this.rows(t,e))}),e("row().data()",function(t){var e,n=this.context;return t===H?n.length&&this.length?n[0].aoData[this[0]]._aData:H:((e=n[0].aoData[this[0]])._aData=t,Array.isArray(t)&&e.nTr&&e.nTr.id&&b(n[0].rowId)(t,e.nTr.id),bt(n[0],this[0],"data"),this)}),e("row().node()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]].nTr||null}),e("row.add()",function(e){e instanceof P&&e.length&&(e=e[0]);var t=this.iterator("table",function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?ut(t,e)[0]:x(t,e)});return this.row(t[0])}),P(y).on("plugin-init.dt",function(t,e){var n=new B(e),a="on-plugin-init",r="stateSaveParams."+a,o="destroy. "+a,a=(n.on(r,function(t,e,n){for(var a=e.rowIdFn,r=e.aoData,o=[],i=0;i<r.length;i++)r[i]._detailsShow&&o.push("#"+a(r[i]._aData));n.childRows=o}),n.on(o,function(){n.off(r+" "+o)}),n.state.loaded());a&&a.childRows&&n.rows(P.map(a.childRows,function(t){return t.replace(/:/g,"\\:")})).every(function(){R(e,null,"requestChild",[this])})}),w.util.throttle(function(t){de(t[0])},500)),Re=function(t,e){var n=t.context;n.length&&(e=n[0].aoData[e!==H?e:t[0]])&&e._details&&(e._details.remove(),e._detailsShow=H,e._details=H,P(e.nTr).removeClass("dt-hasChild"),Le(n))},Pe="row().child",je=Pe+"()",He=(e(je,function(t,e){var n=this.context;return t===H?n.length&&this.length?n[0].aoData[this[0]]._details:H:(!0===t?this.child.show():!1===t?Re(this):n.length&&this.length&&Te(n[0],n[0].aoData[this[0]],t,e),this)}),e([Pe+".show()",je+".show()"],function(t){return xe(this,!0),this}),e([Pe+".hide()",je+".hide()"],function(){return xe(this,!1),this}),e([Pe+".remove()",je+".remove()"],function(){return Re(this),this}),e(Pe+".isShown()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]]._detailsShow||!1}),/^([^:]+):(name|visIdx|visible)$/),Ne=(e("columns()",function(n,a){n===H?n="":P.isPlainObject(n)&&(a=n,n=""),a=we(a);var t=this.iterator("table",function(t){return e=n,l=a,s=(i=t).aoColumns,u=N(s,"sName"),c=N(s,"nTh"),_e("column",e,function(n){var a,t=d(n);if(""===n)return f(s.length);if(null!==t)return[0<=t?t:s.length+t];if("function"==typeof n)return a=Fe(i,l),P.map(s,function(t,e){return n(e,Ae(i,e,0,0,a),c[e])?e:null});var r="string"==typeof n?n.match(He):"";if(r)switch(r[2]){case"visIdx":case"visible":var e,o=parseInt(r[1],10);return o<0?[(e=P.map(s,function(t,e){return t.bVisible?e:null}))[e.length+o]]:[rt(i,o)];case"name":return P.map(u,function(t,e){return t===r[1]?e:null});default:return[]}return n.nodeName&&n._DT_CellIndex?[n._DT_CellIndex.column]:(t=P(c).filter(n).map(function(){return P.inArray(this,c)}).toArray()).length||!n.nodeName?t:(t=P(n).closest("*[data-dt-column]")).length?[t.data("dt-column")]:[]},i,l);var i,e,l,s,u,c},1);return t.selector.cols=n,t.selector.opts=a,t}),t("columns().header()","column().header()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTh},1)}),t("columns().footer()","column().footer()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTf},1)}),t("columns().data()","column().data()",function(){return this.iterator("column-rows",Ae,1)}),t("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(t,e){return t.aoColumns[e].mData},1)}),t("columns().cache()","column().cache()",function(o){return this.iterator("column-rows",function(t,e,n,a,r){return m(t.aoData,r,"search"===o?"_aFilterData":"_aSortData",e)},1)}),t("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,e,n,a,r){return m(t.aoData,r,"anCells",e)},1)}),t("columns().visible()","column().visible()",function(f,n){var e=this,t=this.iterator("column",function(t,e){if(f===H)return t.aoColumns[e].bVisible;var n,a,r=e,e=f,o=t.aoColumns,i=o[r],l=t.aoData;if(e===H)i.bVisible;else if(i.bVisible!==e){if(e)for(var s=P.inArray(!0,N(o,"bVisible"),r+1),u=0,c=l.length;u<c;u++)a=l[u].nTr,n=l[u].anCells,a&&a.insertBefore(n[r],n[s]||null);else P(N(t.aoData,"anCells",r)).detach();i.bVisible=e}});return f!==H&&this.iterator("table",function(t){Dt(t,t.aoHeader),Dt(t,t.aoFooter),t.aiDisplay.length||P(t.nTBody).find("td[colspan]").attr("colspan",T(t)),de(t),e.iterator("column",function(t,e){R(t,null,"column-visibility",[t,e,f,n])}),n!==H&&!n||e.columns.adjust()}),t}),t("columns().indexes()","column().index()",function(n){return this.iterator("column",function(t,e){return"visible"===n?ot(t,e):e},1)}),e("columns.adjust()",function(){return this.iterator("table",function(t){O(t)},1)}),e("column.index()",function(t,e){var n;if(0!==this.context.length)return n=this.context[0],"fromVisible"===t||"toData"===t?rt(n,e):"fromData"===t||"toVisible"===t?ot(n,e):void 0}),e("column()",function(t,e){return Ce(this.columns(t,e))}),e("cells()",function(g,t,b){var a,r,o,i,l,s,e;return P.isPlainObject(g)&&(g.row===H?(b=g,g=null):(b=t,t=null)),P.isPlainObject(t)&&(b=t,t=null),null===t||t===H?this.iterator("table",function(t){return a=t,t=g,e=we(b),f=a.aoData,d=Fe(a,e),n=_(m(f,d,"anCells")),h=P(Y([],n)),p=a.aoColumns.length,_e("cell",t,function(t){var e,n="function"==typeof t;if(null===t||t===H||n){for(o=[],i=0,l=d.length;i<l;i++)for(r=d[i],s=0;s<p;s++)u={row:r,column:s},(!n||(c=f[r],t(u,S(a,r,s),c.anCells?c.anCells[s]:null)))&&o.push(u);return o}return P.isPlainObject(t)?t.column!==H&&t.row!==H&&-1!==P.inArray(t.row,d)?[t]:[]:(e=h.filter(t).map(function(t,e){return{row:e._DT_CellIndex.row,column:e._DT_CellIndex.column}}).toArray()).length||!t.nodeName?e:(c=P(t).closest("*[data-dt-row]")).length?[{row:c.data("dt-row"),column:c.data("dt-column")}]:[]},a,e);var a,e,r,o,i,l,s,u,c,f,d,n,h,p}):(e=b?{page:b.page,order:b.order,search:b.search}:{},a=this.columns(t,e),r=this.rows(g,e),e=this.iterator("table",function(t,e){var n=[];for(o=0,i=r[e].length;o<i;o++)for(l=0,s=a[e].length;l<s;l++)n.push({row:r[e][o],column:a[e][l]});return n},1),e=b&&b.selected?this.cells(e,b):e,P.extend(e.selector,{cols:t,rows:g,opts:b}),e)}),t("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,e,n){t=t.aoData[e];return t&&t.anCells?t.anCells[n]:H},1)}),e("cells().data()",function(){return this.iterator("cell",function(t,e,n){return S(t,e,n)},1)}),t("cells().cache()","cell().cache()",function(a){return a="search"===a?"_aFilterData":"_aSortData",this.iterator("cell",function(t,e,n){return t.aoData[e][a][n]},1)}),t("cells().render()","cell().render()",function(a){return this.iterator("cell",function(t,e,n){return S(t,e,n,a)},1)}),t("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(t,e,n){return{row:e,column:n,columnVisible:ot(t,n)}},1)}),t("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(t,e,n){bt(t,e,a,n)})}),e("cell()",function(t,e,n){return Ce(this.cells(t,e,n))}),e("cell().data()",function(t){var e=this.context,n=this[0];return t===H?e.length&&n.length?S(e[0],n[0].row,n[0].column):H:(ct(e[0],n[0].row,n[0].column,t),bt(e[0],n[0].row,"data",n[0].column),this)}),e("order()",function(e,t){var n=this.context;return e===H?0!==n.length?n[0].aaSorting:H:("number"==typeof e?e=[[e,t]]:e.length&&!Array.isArray(e[0])&&(e=Array.prototype.slice.call(arguments)),this.iterator("table",function(t){t.aaSorting=e.slice()}))}),e("order.listener()",function(e,n,a){return this.iterator("table",function(t){ue(t,e,n,a)})}),e("order.fixed()",function(e){var t;return e?this.iterator("table",function(t){t.aaSortingFixed=P.extend(!0,{},e)}):(t=(t=this.context).length?t[0].aaSortingFixed:H,Array.isArray(t)?{pre:t}:t)}),e(["columns().order()","column().order()"],function(a){var r=this;return this.iterator("table",function(t,e){var n=[];P.each(r[e],function(t,e){n.push([e,a])}),t.aaSorting=n})}),e("search()",function(e,n,a,r){var t=this.context;return e===H?0!==t.length?t[0].oPreviousSearch.sSearch:H:this.iterator("table",function(t){t.oFeatures.bFilter&&Rt(t,P.extend({},t.oPreviousSearch,{sSearch:e+"",bRegex:null!==n&&n,bSmart:null===a||a,bCaseInsensitive:null===r||r}),1)})}),t("columns().search()","column().search()",function(a,r,o,i){return this.iterator("column",function(t,e){var n=t.aoPreSearchCols;if(a===H)return n[e].sSearch;t.oFeatures.bFilter&&(P.extend(n[e],{sSearch:a+"",bRegex:null!==r&&r,bSmart:null===o||o,bCaseInsensitive:null===i||i}),Rt(t,t.oPreviousSearch,1))})}),e("state()",function(){return this.context.length?this.context[0].oSavedState:null}),e("state.clear()",function(){return this.iterator("table",function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})})}),e("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null}),e("state.save()",function(){return this.iterator("table",function(t){de(t)})}),w.use=function(t,e){"lib"===e||t.fn?P=t:"win"==e||t.document?y=(j=t).document:"datetime"!==e&&"DateTime"!==t.type||(w.DateTime=t)},w.factory=function(t,e){var n=!1;return t&&t.document&&(y=(j=t).document),e&&e.fn&&e.fn.jquery&&(P=e,n=!0),n},w.versionCheck=w.fnVersionCheck=function(t){for(var e,n,a=w.version.split("."),r=t.split("."),o=0,i=r.length;o<i;o++)if((e=parseInt(a[o],10)||0)!==(n=parseInt(r[o],10)||0))return n<e;return!0},w.isDataTable=w.fnIsDataTable=function(t){var r=P(t).get(0),o=!1;return t instanceof w.Api||(P.each(w.settings,function(t,e){var n=e.nScrollHead?P("table",e.nScrollHead)[0]:null,a=e.nScrollFoot?P("table",e.nScrollFoot)[0]:null;e.nTable!==r&&n!==r&&a!==r||(o=!0)}),o)},w.tables=w.fnTables=function(e){var t=!1,n=(P.isPlainObject(e)&&(t=e.api,e=e.visible),P.map(w.settings,function(t){if(!e||P(t.nTable).is(":visible"))return t.nTable}));return t?new B(n):n},w.camelToHungarian=C,e("$()",function(t,e){e=this.rows(e).nodes(),e=P(e);return P([].concat(e.filter(t).toArray(),e.find(t).toArray()))}),P.each(["on","one","off"],function(t,n){e(n+"()",function(){var t=Array.prototype.slice.call(arguments),e=(t[0]=P.map(t[0].split(/\s/),function(t){return t.match(/\.dt\b/)?t:t+".dt"}).join(" "),P(this.tables().nodes()));return e[n].apply(e,t),this})}),e("clear()",function(){return this.iterator("table",function(t){pt(t)})}),e("settings()",function(){return new B(this.context,this.context)}),e("init()",function(){var t=this.context;return t.length?t[0].oInit:null}),e("data()",function(){return this.iterator("table",function(t){return N(t.aoData,"_aData")}).flatten()}),e("destroy()",function(c){return c=c||!1,this.iterator("table",function(e){var n,t=e.oClasses,a=e.nTable,r=e.nTBody,o=e.nTHead,i=e.nTFoot,l=P(a),r=P(r),s=P(e.nTableWrapper),u=P.map(e.aoData,function(t){return t.nTr}),i=(e.bDestroying=!0,R(e,"aoDestroyCallback","destroy",[e]),c||new B(e).columns().visible(!0),s.off(".DT").find(":not(tbody *)").off(".DT"),P(j).off(".DT-"+e.sInstance),a!=o.parentNode&&(l.children("thead").detach(),l.append(o)),i&&a!=i.parentNode&&(l.children("tfoot").detach(),l.append(i)),e.aaSorting=[],e.aaSortingFixed=[],ce(e),P(u).removeClass(e.asStripeClasses.join(" ")),P("th, td",o).removeClass(t.sSortable+" "+t.sSortableAsc+" "+t.sSortableDesc+" "+t.sSortableNone),r.children().detach(),r.append(u),e.nTableWrapper.parentNode),o=c?"remove":"detach",u=(l[o](),s[o](),!c&&i&&(i.insertBefore(a,e.nTableReinsertBefore),l.css("width",e.sDestroyWidth).removeClass(t.sTable),(n=e.asDestroyStripes.length)&&r.children().each(function(t){P(this).addClass(e.asDestroyStripes[t%n])})),P.inArray(e,w.settings));-1!==u&&w.settings.splice(u,1)})}),P.each(["column","row","cell"],function(t,s){e(s+"s().every()",function(o){var i=this.selector.opts,l=this;return this.iterator(s,function(t,e,n,a,r){o.call(l[s](e,"cell"===s?n:i,"cell"===s?i:H),e,n,a,r)})})}),e("i18n()",function(t,e,n){var a=this.context[0],t=A(t)(a.oLanguage);return t===H&&(t=e),"string"==typeof(t=n!==H&&P.isPlainObject(t)?t[n]!==H?t[n]:t._:t)?t.replace("%d",n):t}),w.version="1.13.5",w.settings=[],w.models={},w.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0,return:!1},w.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},w.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},w.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch(t){return{}}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))}catch(t){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:P.extend({},w.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},i(w.defaults),w.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},i(w.defaults.column),w.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,jqXHR:null,json:H,oAjaxData:H,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==E(this)?+this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==E(this)?+this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,n=e+t,a=this.aiDisplay.length,r=this.oFeatures,o=r.bPaginate;return r.bServerSide?!1===o||-1===t?e+a:Math.min(e+t,this._iRecordsDisplay):!o||a<n||-1===t?a:n},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},w.ext=p={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:w.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:w.version},P.extend(p,{afnFiltering:p.search,aTypes:p.type.detect,ofnSearch:p.type.search,oSort:p.type.order,afnSortData:p.order,aoFeatures:p.feature,oApi:p.internal,oStdClasses:p.classes,oPagination:p.pager}),P.extend(w.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_desc_disabled",sSortableDesc:"sorting_asc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""}),w.ext.pager);function Oe(t,e){var n=[],a=Ne.numbers_length,r=Math.floor(a/2);return e<=a?n=f(0,e):t<=r?((n=f(0,a-2)).push("ellipsis"),n.push(e-1)):((e-1-r<=t?n=f(e-(a-2),e):((n=f(t-r+2,t+r-1)).push("ellipsis"),n.push(e-1),n)).splice(0,0,"ellipsis"),n.splice(0,0,0)),n.DT_el="span",n}P.extend(Ne,{simple:function(t,e){return["previous","next"]},full:function(t,e){return["first","previous","next","last"]},numbers:function(t,e){return[Oe(t,e)]},simple_numbers:function(t,e){return["previous",Oe(t,e),"next"]},full_numbers:function(t,e){return["first","previous",Oe(t,e),"next","last"]},first_last_numbers:function(t,e){return["first",Oe(t,e),"last"]},_numbers:Oe,numbers_length:7}),P.extend(!0,w.ext.renderer,{pageButton:{_:function(c,t,f,e,d,h){function p(t,e){for(var n,a,r,o=m.sPageButtonDisabled,i=function(t){Yt(c,t.data.action,!0)},l=0,s=e.length;l<s;l++)if(n=e[l],Array.isArray(n)){var u=P("<"+(n.DT_el||"div")+"/>").appendTo(t);p(u,n)}else{switch(g=null,b=n,a=c.iTabIndex,n){case"ellipsis":t.append('<span class="ellipsis">&#x2026;</span>');break;case"first":g=S.sFirst,0===d&&(a=-1,b+=" "+o);break;case"previous":g=S.sPrevious,0===d&&(a=-1,b+=" "+o);break;case"next":g=S.sNext,0!==h&&d!==h-1||(a=-1,b+=" "+o);break;case"last":g=S.sLast,0!==h&&d!==h-1||(a=-1,b+=" "+o);break;default:g=c.fnFormatNumber(n+1),b=d===n?m.sPageButtonActive:""}null!==g&&(u=c.oInit.pagingTag||"a",r=-1!==b.indexOf(o),me(P("<"+u+">",{class:m.sPageButton+" "+b,"aria-controls":c.sTableId,"aria-disabled":r?"true":null,"aria-label":v[n],role:"link","aria-current":b===m.sPageButtonActive?"page":null,"data-dt-idx":n,tabindex:a,id:0===f&&"string"==typeof n?c.sTableId+"_"+n:null}).html(g).appendTo(t),{action:n},i))}}var g,b,n,m=c.oClasses,S=c.oLanguage.oPaginate,v=c.oLanguage.oAria.paginate||{};try{n=P(t).find(y.activeElement).data("dt-idx")}catch(t){}p(P(t).empty(),e),n!==H&&P(t).find("[data-dt-idx="+n+"]").trigger("focus")}}}),P.extend(w.ext.type.detect,[function(t,e){e=e.oLanguage.sDecimal;return l(t,e)?"num"+e:null},function(t,e){var n;return(!t||t instanceof Date||X.test(t))&&(null!==(n=Date.parse(t))&&!isNaN(n)||h(t))?"date":null},function(t,e){e=e.oLanguage.sDecimal;return l(t,e,!0)?"num-fmt"+e:null},function(t,e){e=e.oLanguage.sDecimal;return a(t,e)?"html-num"+e:null},function(t,e){e=e.oLanguage.sDecimal;return a(t,e,!0)?"html-num-fmt"+e:null},function(t,e){return h(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),P.extend(w.ext.type.search,{html:function(t){return h(t)?t:"string"==typeof t?t.replace(U," ").replace(V,""):""},string:function(t){return!h(t)&&"string"==typeof t?t.replace(U," "):t}});function ke(t,e,n,a){var r;return 0===t||t&&"-"!==t?"number"==(r=typeof t)||"bigint"==r?t:((t=e?$(t,e):t).replace&&(n&&(t=t.replace(n,"")),a&&(t=t.replace(a,""))),+t):-1/0}function Me(n){P.each({num:function(t){return ke(t,n)},"num-fmt":function(t){return ke(t,n,q)},"html-num":function(t){return ke(t,n,V)},"html-num-fmt":function(t){return ke(t,n,V,q)}},function(t,e){p.type.order[t+n+"-pre"]=e,t.match(/^html\-/)&&(p.type.search[t+n]=p.type.search.html)})}P.extend(p.type.order,{"date-pre":function(t){t=Date.parse(t);return isNaN(t)?-1/0:t},"html-pre":function(t){return h(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""},"string-pre":function(t){return h(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""},"string-asc":function(t,e){return t<e?-1:e<t?1:0},"string-desc":function(t,e){return t<e?1:e<t?-1:0}}),Me(""),P.extend(!0,w.ext.renderer,{header:{_:function(r,o,i,l){P(r.nTable).on("order.dt.DT",function(t,e,n,a){r===e&&(e=i.idx,o.removeClass(l.sSortAsc+" "+l.sSortDesc).addClass("asc"==a[e]?l.sSortAsc:"desc"==a[e]?l.sSortDesc:i.sSortingClass))})},jqueryui:function(r,o,i,l){P("<div/>").addClass(l.sSortJUIWrapper).append(o.contents()).append(P("<span/>").addClass(l.sSortIcon+" "+i.sSortingClassJUI)).appendTo(o),P(r.nTable).on("order.dt.DT",function(t,e,n,a){r===e&&(e=i.idx,o.removeClass(l.sSortAsc+" "+l.sSortDesc).addClass("asc"==a[e]?l.sSortAsc:"desc"==a[e]?l.sSortDesc:i.sSortingClass),o.find("span."+l.sSortIcon).removeClass(l.sSortJUIAsc+" "+l.sSortJUIDesc+" "+l.sSortJUI+" "+l.sSortJUIAscAllowed+" "+l.sSortJUIDescAllowed).addClass("asc"==a[e]?l.sSortJUIAsc:"desc"==a[e]?l.sSortJUIDesc:i.sSortingClassJUI))})}}});function We(t){return"string"==typeof(t=Array.isArray(t)?t.join(","):t)?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t}function Ee(t,e,n,a,r){return j.moment?t[e](r):j.luxon?t[n](r):a?t[a](r):t}var Be=!1;function Ue(t,e,n){var a;if(j.moment){if(!(a=j.moment.utc(t,e,n,!0)).isValid())return null}else if(j.luxon){if(!(a=e&&"string"==typeof t?j.luxon.DateTime.fromFormat(t,e):j.luxon.DateTime.fromISO(t)).isValid)return null;a.setLocale(n)}else e?(Be||alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),Be=!0):a=new Date(t);return a}function Ve(s){return function(a,r,o,i){0===arguments.length?(o="en",a=r=null):1===arguments.length?(o="en",r=a,a=null):2===arguments.length&&(o=r,r=a,a=null);var l="datetime-"+r;return w.ext.type.order[l]||(w.ext.type.detect.unshift(function(t){return t===l&&l}),w.ext.type.order[l+"-asc"]=function(t,e){t=t.valueOf(),e=e.valueOf();return t===e?0:t<e?-1:1},w.ext.type.order[l+"-desc"]=function(t,e){t=t.valueOf(),e=e.valueOf();return t===e?0:e<t?-1:1}),function(t,e){var n;return null!==t&&t!==H||(t="--now"===i?(n=new Date,new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds()))):""),"type"===e?l:""===t?"sort"!==e?"":Ue("0000-01-01 00:00:00",null,o):!(null===r||a!==r||"sort"===e||"type"===e||t instanceof Date)||null===(n=Ue(t,a,o))?t:"sort"===e?n:(t=null===r?Ee(n,"toDate","toJSDate","")[s]():Ee(n,"format","toFormat","toISOString",r),"display"===e?We(t):t)}}}var Xe=",",Je=".";if(j.Intl!==H)try{for(var qe=(new Intl.NumberFormat).formatToParts(100000.1),n=0;n<qe.length;n++)"group"===qe[n].type?Xe=qe[n].value:"decimal"===qe[n].type&&(Je=qe[n].value)}catch(t){}function $e(e){return function(){var t=[ge(this[w.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return w.ext.internal[e].apply(this,t)}}return w.datetime=function(n,a){var r="datetime-detect-"+n;a=a||"en",w.ext.type.order[r]||(w.ext.type.detect.unshift(function(t){var e=Ue(t,n,a);return!(""!==t&&!e)&&r}),w.ext.type.order[r+"-pre"]=function(t){return Ue(t,n,a)||0})},w.render={date:Ve("toLocaleDateString"),datetime:Ve("toLocaleString"),time:Ve("toLocaleTimeString"),number:function(a,r,o,i,l){return null!==a&&a!==H||(a=Xe),null!==r&&r!==H||(r=Je),{display:function(t){if("number"!=typeof t&&"string"!=typeof t)return t;if(""===t||null===t)return t;var e=t<0?"-":"",n=parseFloat(t);if(isNaN(n))return We(t);n=n.toFixed(o),t=Math.abs(n);n=parseInt(t,10),t=o?r+(t-n).toFixed(o).substring(2):"";return(e=0===n&&0===parseFloat(t)?"":e)+(i||"")+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+t+(l||"")}}},text:function(){return{display:We,filter:We}}},P.extend(w.ext.internal,{_fnExternApiFunc:$e,_fnBuildAjax:Tt,_fnAjaxUpdate:xt,_fnAjaxParameters:At,_fnAjaxUpdateDraw:It,_fnAjaxDataSrc:Ft,_fnAddColumn:nt,_fnColumnOptions:at,_fnAdjustColumnSizing:O,_fnVisibleToColumnIndex:rt,_fnColumnIndexToVisible:ot,_fnVisbleColumns:T,_fnGetColumns:it,_fnColumnTypes:lt,_fnApplyColumnDefs:st,_fnHungarianMap:i,_fnCamelToHungarian:C,_fnLanguageCompat:Z,_fnBrowserDetect:tt,_fnAddData:x,_fnAddTr:ut,_fnNodeToDataIndex:function(t,e){return e._DT_RowIndex!==H?e._DT_RowIndex:null},_fnNodeToColumnIndex:function(t,e,n){return P.inArray(n,t.aoData[e].anCells)},_fnGetCellData:S,_fnSetCellData:ct,_fnSplitObjNotation:dt,_fnGetObjectDataFn:A,_fnSetObjectDataFn:b,_fnGetDataMaster:ht,_fnClearTable:pt,_fnDeleteIndex:gt,_fnInvalidate:bt,_fnGetRowElements:mt,_fnCreateTr:St,_fnBuildHead:yt,_fnDrawHead:Dt,_fnDraw:v,_fnReDraw:u,_fnAddOptionsHtml:_t,_fnDetectHeader:wt,_fnGetUniqueThs:Ct,_fnFeatureHtmlFilter:Lt,_fnFilterComplete:Rt,_fnFilterCustom:Pt,_fnFilterColumn:jt,_fnFilter:Ht,_fnFilterCreateSearch:Nt,_fnEscapeRegex:Ot,_fnFilterData:Wt,_fnFeatureHtmlInfo:Ut,_fnUpdateInfo:Vt,_fnInfoMacros:Xt,_fnInitialise:Jt,_fnInitComplete:qt,_fnLengthChange:$t,_fnFeatureHtmlLength:Gt,_fnFeatureHtmlPaginate:zt,_fnPageChange:Yt,_fnFeatureHtmlProcessing:Zt,_fnProcessingDisplay:D,_fnFeatureHtmlTable:Kt,_fnScrollDraw:Qt,_fnApplyToChildren:k,_fnCalculateColumnWidths:ee,_fnThrottle:ne,_fnConvertToWidth:ae,_fnGetWidestNode:re,_fnGetMaxLenString:oe,_fnStringToCss:M,_fnSortFlatten:I,_fnSort:ie,_fnSortAria:le,_fnSortListener:se,_fnSortAttachListener:ue,_fnSortingClasses:ce,_fnSortData:fe,_fnSaveState:de,_fnLoadState:he,_fnImplementState:pe,_fnSettingsFromNode:ge,_fnLog:W,_fnMap:F,_fnBindAction:me,_fnCallbackReg:L,_fnCallbackFire:R,_fnLengthOverflow:Se,_fnRenderer:ve,_fnDataSource:E,_fnRowAttributes:vt,_fnExtend:be,_fnCalculateEnd:function(){}}),((P.fn.dataTable=w).$=P).fn.dataTableSettings=w.settings,P.fn.dataTableExt=w.ext,P.fn.DataTable=function(t){return P(this).dataTable(t).api()},P.each(w,function(t,e){P.fn.DataTable[t]=e}),w});
;/*! Responsive 2.5.0
 * © SpryMedia Ltd - datatables.net/license
 */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		var jq = require('jquery');
		var cjsRequires = function (root, $) {
			if ( ! $.fn.dataTable ) {
				require('datatables.net')(root, $);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root, $) {
				if ( ! root ) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				if ( ! $ ) {
					$ = jq( root );
				}

				cjsRequires( root, $ );
				return factory( $, root, root.document );
			};
		}
		else {
			cjsRequires( window, jq );
			module.exports = factory( jq, window, window.document );
		}
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;



/**
 * @summary     Responsive
 * @description Responsive tables plug-in for DataTables
 * @version     2.5.0
 * @author      SpryMedia Ltd
 * @copyright   SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/**
 * Responsive is a plug-in for the DataTables library that makes use of
 * DataTables' ability to change the visibility of columns, changing the
 * visibility of columns so the displayed columns fit into the table container.
 * The end result is that complex tables will be dynamically adjusted to fit
 * into the viewport, be it on a desktop, tablet or mobile browser.
 *
 * Responsive for DataTables has two modes of operation, which can used
 * individually or combined:
 *
 * * Class name based control - columns assigned class names that match the
 *   breakpoint logic can be shown / hidden as required for each breakpoint.
 * * Automatic control - columns are automatically hidden when there is no
 *   room left to display them. Columns removed from the right.
 *
 * In additional to column visibility control, Responsive also has built into
 * options to use DataTables' child row display to show / hide the information
 * from the table that has been hidden. There are also two modes of operation
 * for this child row display:
 *
 * * Inline - when the control element that the user can use to show / hide
 *   child rows is displayed inside the first column of the table.
 * * Column - where a whole column is dedicated to be the show / hide control.
 *
 * Initialisation of Responsive is performed by:
 *
 * * Adding the class `responsive` or `dt-responsive` to the table. In this case
 *   Responsive will automatically be initialised with the default configuration
 *   options when the DataTable is created.
 * * Using the `responsive` option in the DataTables configuration options. This
 *   can also be used to specify the configuration options, or simply set to
 *   `true` to use the defaults.
 *
 *  @class
 *  @param {object} settings DataTables settings object for the host table
 *  @param {object} [opts] Configuration options
 *  @requires jQuery 1.7+
 *  @requires DataTables 1.10.3+
 *
 *  @example
 *      $('#example').DataTable( {
 *        responsive: true
 *      } );
 *    } );
 */
var Responsive = function (settings, opts) {
	// Sanity check that we are using DataTables 1.10 or newer
	if (!DataTable.versionCheck || !DataTable.versionCheck('1.10.10')) {
		throw 'DataTables Responsive requires DataTables 1.10.10 or newer';
	}

	this.s = {
		childNodeStore: {},
		columns: [],
		current: [],
		dt: new DataTable.Api(settings)
	};

	// Check if responsive has already been initialised on this table
	if (this.s.dt.settings()[0].responsive) {
		return;
	}

	// details is an object, but for simplicity the user can give it as a string
	// or a boolean
	if (opts && typeof opts.details === 'string') {
		opts.details = { type: opts.details };
	}
	else if (opts && opts.details === false) {
		opts.details = { type: false };
	}
	else if (opts && opts.details === true) {
		opts.details = { type: 'inline' };
	}

	this.c = $.extend(true, {}, Responsive.defaults, DataTable.defaults.responsive, opts);
	settings.responsive = this;
	this._constructor();
};

$.extend(Responsive.prototype, {
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Constructor
	 */

	/**
	 * Initialise the Responsive instance
	 *
	 * @private
	 */
	_constructor: function () {
		var that = this;
		var dt = this.s.dt;
		var dtPrivateSettings = dt.settings()[0];
		var oldWindowWidth = $(window).innerWidth();

		dt.settings()[0]._responsive = this;

		// Use DataTables' throttle function to avoid processor thrashing on
		// resize
		$(window).on(
			'resize.dtr orientationchange.dtr',
			DataTable.util.throttle(function () {
				// iOS has a bug whereby resize can fire when only scrolling
				// See: http://stackoverflow.com/questions/8898412
				var width = $(window).innerWidth();

				if (width !== oldWindowWidth) {
					that._resize();
					oldWindowWidth = width;
				}
			})
		);

		// DataTables doesn't currently trigger an event when a row is added, so
		// we need to hook into its private API to enforce the hidden rows when
		// new data is added
		dtPrivateSettings.oApi._fnCallbackReg(
			dtPrivateSettings,
			'aoRowCreatedCallback',
			function (tr, data, idx) {
				if ($.inArray(false, that.s.current) !== -1) {
					$('>td, >th', tr).each(function (i) {
						var idx = dt.column.index('toData', i);

						if (that.s.current[idx] === false) {
							$(this).css('display', 'none');
						}
					});
				}
			}
		);

		// Destroy event handler
		dt.on('destroy.dtr', function () {
			dt.off('.dtr');
			$(dt.table().body()).off('.dtr');
			$(window).off('resize.dtr orientationchange.dtr');
			dt.cells('.dtr-control').nodes().to$().removeClass('dtr-control');

			// Restore the columns that we've hidden
			$.each(that.s.current, function (i, val) {
				if (val === false) {
					that._setColumnVis(i, true);
				}
			});
		});

		// Reorder the breakpoints array here in case they have been added out
		// of order
		this.c.breakpoints.sort(function (a, b) {
			return a.width < b.width ? 1 : a.width > b.width ? -1 : 0;
		});

		this._classLogic();
		this._resizeAuto();

		// Details handler
		var details = this.c.details;

		if (details.type !== false) {
			that._detailsInit();

			// DataTables will trigger this event on every column it shows and
			// hides individually
			dt.on('column-visibility.dtr', function () {
				// Use a small debounce to allow multiple columns to be set together
				if (that._timer) {
					clearTimeout(that._timer);
				}

				that._timer = setTimeout(function () {
					that._timer = null;

					that._classLogic();
					that._resizeAuto();
					that._resize(true);

					that._redrawChildren();
				}, 100);
			});

			// Redraw the details box on each draw which will happen if the data
			// has changed. This is used until DataTables implements a native
			// `updated` event for rows
			dt.on('draw.dtr', function () {
				that._redrawChildren();
			});

			$(dt.table().node()).addClass('dtr-' + details.type);
		}

		dt.on('column-reorder.dtr', function (e, settings, details) {
			that._classLogic();
			that._resizeAuto();
			that._resize(true);
		});

		// Change in column sizes means we need to calc
		dt.on('column-sizing.dtr', function () {
			that._resizeAuto();
			that._resize();
		});

		// DT2 let's us tell it if we are hiding columns
		dt.on('column-calc.dt', function (e, d) {
			var curr = that.s.current;

			for (var i = 0; i < curr.length; i++) {
				var idx = d.visible.indexOf(i);

				if (curr[i] === false && idx >= 0) {
					d.visible.splice(idx, 1);
				}
			}
		});

		// On Ajax reload we want to reopen any child rows which are displayed
		// by responsive
		dt.on('preXhr.dtr', function () {
			var rowIds = [];
			dt.rows().every(function () {
				if (this.child.isShown()) {
					rowIds.push(this.id(true));
				}
			});

			dt.one('draw.dtr', function () {
				that._resizeAuto();
				that._resize();

				dt.rows(rowIds).every(function () {
					that._detailsDisplay(this, false);
				});
			});
		});

		dt.on('draw.dtr', function () {
			that._controlClass();
		}).on('init.dtr', function (e, settings, details) {
			if (e.namespace !== 'dt') {
				return;
			}

			that._resizeAuto();
			that._resize();

			// If columns were hidden, then DataTables needs to adjust the
			// column sizing
			if ($.inArray(false, that.s.current)) {
				dt.columns.adjust();
			}
		});

		// First pass - draw the table for the current viewport size
		this._resize();
	},

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Private methods
	 */

	/**
	 * Get and store nodes from a cell - use for node moving renderers
	 *
	 * @param {*} dt DT instance
	 * @param {*} row Row index
	 * @param {*} col Column index
	 */
	_childNodes: function (dt, row, col) {
		var name = row + '-' + col;

		if (this.s.childNodeStore[name]) {
			return this.s.childNodeStore[name];
		}

		// https://jsperf.com/childnodes-array-slice-vs-loop
		var nodes = [];
		var children = dt.cell(row, col).node().childNodes;
		for (var i = 0, ien = children.length; i < ien; i++) {
			nodes.push(children[i]);
		}

		this.s.childNodeStore[name] = nodes;

		return nodes;
	},

	/**
	 * Restore nodes from the cache to a table cell
	 *
	 * @param {*} dt DT instance
	 * @param {*} row Row index
	 * @param {*} col Column index
	 */
	_childNodesRestore: function (dt, row, col) {
		var name = row + '-' + col;

		if (!this.s.childNodeStore[name]) {
			return;
		}

		var node = dt.cell(row, col).node();
		var store = this.s.childNodeStore[name];
		var parent = store[0].parentNode;
		var parentChildren = parent.childNodes;
		var a = [];

		for (var i = 0, ien = parentChildren.length; i < ien; i++) {
			a.push(parentChildren[i]);
		}

		for (var j = 0, jen = a.length; j < jen; j++) {
			node.appendChild(a[j]);
		}

		this.s.childNodeStore[name] = undefined;
	},

	/**
	 * Calculate the visibility for the columns in a table for a given
	 * breakpoint. The result is pre-determined based on the class logic if
	 * class names are used to control all columns, but the width of the table
	 * is also used if there are columns which are to be automatically shown
	 * and hidden.
	 *
	 * @param  {string} breakpoint Breakpoint name to use for the calculation
	 * @return {array} Array of boolean values initiating the visibility of each
	 *   column.
	 *  @private
	 */
	_columnsVisiblity: function (breakpoint) {
		var dt = this.s.dt;
		var columns = this.s.columns;
		var i, ien;

		// Create an array that defines the column ordering based first on the
		// column's priority, and secondly the column index. This allows the
		// columns to be removed from the right if the priority matches
		var order = columns
			.map(function (col, idx) {
				return {
					columnIdx: idx,
					priority: col.priority
				};
			})
			.sort(function (a, b) {
				if (a.priority !== b.priority) {
					return a.priority - b.priority;
				}
				return a.columnIdx - b.columnIdx;
			});

		// Class logic - determine which columns are in this breakpoint based
		// on the classes. If no class control (i.e. `auto`) then `-` is used
		// to indicate this to the rest of the function
		var display = $.map(columns, function (col, i) {
			if (dt.column(i).visible() === false) {
				return 'not-visible';
			}
			return col.auto && col.minWidth === null
				? false
				: col.auto === true
				? '-'
				: $.inArray(breakpoint, col.includeIn) !== -1;
		});

		// Auto column control - first pass: how much width is taken by the
		// ones that must be included from the non-auto columns
		var requiredWidth = 0;
		for (i = 0, ien = display.length; i < ien; i++) {
			if (display[i] === true) {
				requiredWidth += columns[i].minWidth;
			}
		}

		// Second pass, use up any remaining width for other columns. For
		// scrolling tables we need to subtract the width of the scrollbar. It
		// may not be requires which makes this sub-optimal, but it would
		// require another full redraw to make complete use of those extra few
		// pixels
		var scrolling = dt.settings()[0].oScroll;
		var bar = scrolling.sY || scrolling.sX ? scrolling.iBarWidth : 0;
		var widthAvailable = dt.table().container().offsetWidth - bar;
		var usedWidth = widthAvailable - requiredWidth;

		// Control column needs to always be included. This makes it sub-
		// optimal in terms of using the available with, but to stop layout
		// thrashing or overflow. Also we need to account for the control column
		// width first so we know how much width is available for the other
		// columns, since the control column might not be the first one shown
		for (i = 0, ien = display.length; i < ien; i++) {
			if (columns[i].control) {
				usedWidth -= columns[i].minWidth;
			}
		}

		// Allow columns to be shown (counting by priority and then right to
		// left) until we run out of room
		var empty = false;
		for (i = 0, ien = order.length; i < ien; i++) {
			var colIdx = order[i].columnIdx;

			if (display[colIdx] === '-' && !columns[colIdx].control && columns[colIdx].minWidth) {
				// Once we've found a column that won't fit we don't let any
				// others display either, or columns might disappear in the
				// middle of the table
				if (empty || usedWidth - columns[colIdx].minWidth < 0) {
					empty = true;
					display[colIdx] = false;
				}
				else {
					display[colIdx] = true;
				}

				usedWidth -= columns[colIdx].minWidth;
			}
		}

		// Determine if the 'control' column should be shown (if there is one).
		// This is the case when there is a hidden column (that is not the
		// control column). The two loops look inefficient here, but they are
		// trivial and will fly through. We need to know the outcome from the
		// first , before the action in the second can be taken
		var showControl = false;

		for (i = 0, ien = columns.length; i < ien; i++) {
			if (!columns[i].control && !columns[i].never && display[i] === false) {
				showControl = true;
				break;
			}
		}

		for (i = 0, ien = columns.length; i < ien; i++) {
			if (columns[i].control) {
				display[i] = showControl;
			}

			// Replace not visible string with false from the control column detection above
			if (display[i] === 'not-visible') {
				display[i] = false;
			}
		}

		// Finally we need to make sure that there is at least one column that
		// is visible
		if ($.inArray(true, display) === -1) {
			display[0] = true;
		}

		return display;
	},

	/**
	 * Create the internal `columns` array with information about the columns
	 * for the table. This includes determining which breakpoints the column
	 * will appear in, based upon class names in the column, which makes up the
	 * vast majority of this method.
	 *
	 * @private
	 */
	_classLogic: function () {
		var that = this;
		var calc = {};
		var breakpoints = this.c.breakpoints;
		var dt = this.s.dt;
		var columns = dt
			.columns()
			.eq(0)
			.map(function (i) {
				var column = this.column(i);
				var className = column.header().className;
				var priority = dt.settings()[0].aoColumns[i].responsivePriority;
				var dataPriority = column.header().getAttribute('data-priority');

				if (priority === undefined) {
					priority =
						dataPriority === undefined || dataPriority === null
							? 10000
							: dataPriority * 1;
				}

				return {
					className: className,
					includeIn: [],
					auto: false,
					control: false,
					never: className.match(/\b(dtr\-)?never\b/) ? true : false,
					priority: priority
				};
			});

		// Simply add a breakpoint to `includeIn` array, ensuring that there are
		// no duplicates
		var add = function (colIdx, name) {
			var includeIn = columns[colIdx].includeIn;

			if ($.inArray(name, includeIn) === -1) {
				includeIn.push(name);
			}
		};

		var column = function (colIdx, name, operator, matched) {
			var size, i, ien;

			if (!operator) {
				columns[colIdx].includeIn.push(name);
			}
			else if (operator === 'max-') {
				// Add this breakpoint and all smaller
				size = that._find(name).width;

				for (i = 0, ien = breakpoints.length; i < ien; i++) {
					if (breakpoints[i].width <= size) {
						add(colIdx, breakpoints[i].name);
					}
				}
			}
			else if (operator === 'min-') {
				// Add this breakpoint and all larger
				size = that._find(name).width;

				for (i = 0, ien = breakpoints.length; i < ien; i++) {
					if (breakpoints[i].width >= size) {
						add(colIdx, breakpoints[i].name);
					}
				}
			}
			else if (operator === 'not-') {
				// Add all but this breakpoint
				for (i = 0, ien = breakpoints.length; i < ien; i++) {
					if (breakpoints[i].name.indexOf(matched) === -1) {
						add(colIdx, breakpoints[i].name);
					}
				}
			}
		};

		// Loop over each column and determine if it has a responsive control
		// class
		columns.each(function (col, i) {
			var classNames = col.className.split(' ');
			var hasClass = false;

			// Split the class name up so multiple rules can be applied if needed
			for (var k = 0, ken = classNames.length; k < ken; k++) {
				var className = classNames[k].trim();

				if (className === 'all' || className === 'dtr-all') {
					// Include in all
					hasClass = true;
					col.includeIn = $.map(breakpoints, function (a) {
						return a.name;
					});
					return;
				}
				else if (className === 'none' || className === 'dtr-none' || col.never) {
					// Include in none (default) and no auto
					hasClass = true;
					return;
				}
				else if (className === 'control' || className === 'dtr-control') {
					// Special column that is only visible, when one of the other
					// columns is hidden. This is used for the details control
					hasClass = true;
					col.control = true;
					return;
				}

				$.each(breakpoints, function (j, breakpoint) {
					// Does this column have a class that matches this breakpoint?
					var brokenPoint = breakpoint.name.split('-');
					var re = new RegExp(
						'(min\\-|max\\-|not\\-)?(' + brokenPoint[0] + ')(\\-[_a-zA-Z0-9])?'
					);
					var match = className.match(re);

					if (match) {
						hasClass = true;

						if (match[2] === brokenPoint[0] && match[3] === '-' + brokenPoint[1]) {
							// Class name matches breakpoint name fully
							column(i, breakpoint.name, match[1], match[2] + match[3]);
						}
						else if (match[2] === brokenPoint[0] && !match[3]) {
							// Class name matched primary breakpoint name with no qualifier
							column(i, breakpoint.name, match[1], match[2]);
						}
					}
				});
			}

			// If there was no control class, then automatic sizing is used
			if (!hasClass) {
				col.auto = true;
			}
		});

		this.s.columns = columns;
	},

	/**
	 * Update the cells to show the correct control class / button
	 * @private
	 */
	_controlClass: function () {
		if (this.c.details.type === 'inline') {
			var dt = this.s.dt;
			var columnsVis = this.s.current;
			var firstVisible = $.inArray(true, columnsVis);

			// Remove from any cells which shouldn't have it
			dt.cells(
				null,
				function (idx) {
					return idx !== firstVisible;
				},
				{ page: 'current' }
			)
				.nodes()
				.to$()
				.filter('.dtr-control')
				.removeClass('dtr-control');

			dt.cells(null, firstVisible, { page: 'current' }).nodes().to$().addClass('dtr-control');
		}
	},

	/**
	 * Show the details for the child row
	 *
	 * @param  {DataTables.Api} row    API instance for the row
	 * @param  {boolean}        update Update flag
	 * @private
	 */
	_detailsDisplay: function (row, update) {
		var that = this;
		var dt = this.s.dt;
		var details = this.c.details;
		var event = function (res) {
			$(row.node()).toggleClass('parent', res !== false);
			$(dt.table().node()).triggerHandler('responsive-display.dt', [dt, row, res, update]);
		};

		if (details && details.type !== false) {
			var renderer =
				typeof details.renderer === 'string'
					? Responsive.renderer[details.renderer]()
					: details.renderer;

			var res = details.display(
				row,
				update,
				function () {
					return renderer.call(that, dt, row[0], that._detailsObj(row[0]));
				},
				function () {
					event(false);
				}
			);

			if (typeof res === 'boolean') {
				event(res);
			}
		}
	},

	/**
	 * Initialisation for the details handler
	 *
	 * @private
	 */
	_detailsInit: function () {
		var that = this;
		var dt = this.s.dt;
		var details = this.c.details;

		// The inline type always uses the first child as the target
		if (details.type === 'inline') {
			details.target = 'td.dtr-control, th.dtr-control';
		}

		// Keyboard accessibility
		dt.on('draw.dtr', function () {
			that._tabIndexes();
		});
		that._tabIndexes(); // Initial draw has already happened

		$(dt.table().body()).on('keyup.dtr', 'td, th', function (e) {
			if (e.keyCode === 13 && $(this).data('dtr-keyboard')) {
				$(this).click();
			}
		});

		// type.target can be a string jQuery selector or a column index
		var target = details.target;
		var selector = typeof target === 'string' ? target : 'td, th';

		if (target !== undefined || target !== null) {
			// Click handler to show / hide the details rows when they are available
			$(dt.table().body()).on('click.dtr mousedown.dtr mouseup.dtr', selector, function (e) {
				// If the table is not collapsed (i.e. there is no hidden columns)
				// then take no action
				if (!$(dt.table().node()).hasClass('collapsed')) {
					return;
				}

				// Check that the row is actually a DataTable's controlled node
				if ($.inArray($(this).closest('tr').get(0), dt.rows().nodes().toArray()) === -1) {
					return;
				}

				// For column index, we determine if we should act or not in the
				// handler - otherwise it is already okay
				if (typeof target === 'number') {
					var targetIdx = target < 0 ? dt.columns().eq(0).length + target : target;

					if (dt.cell(this).index().column !== targetIdx) {
						return;
					}
				}

				// $().closest() includes itself in its check
				var row = dt.row($(this).closest('tr'));

				// Check event type to do an action
				if (e.type === 'click') {
					// The renderer is given as a function so the caller can execute it
					// only when they need (i.e. if hiding there is no point is running
					// the renderer)
					that._detailsDisplay(row, false);
				}
				else if (e.type === 'mousedown') {
					// For mouse users, prevent the focus ring from showing
					$(this).css('outline', 'none');
				}
				else if (e.type === 'mouseup') {
					// And then re-allow at the end of the click
					$(this).trigger('blur').css('outline', '');
				}
			});
		}
	},

	/**
	 * Get the details to pass to a renderer for a row
	 * @param  {int} rowIdx Row index
	 * @private
	 */
	_detailsObj: function (rowIdx) {
		var that = this;
		var dt = this.s.dt;

		return $.map(this.s.columns, function (col, i) {
			// Never and control columns should not be passed to the renderer
			if (col.never || col.control) {
				return;
			}

			var dtCol = dt.settings()[0].aoColumns[i];

			return {
				className: dtCol.sClass,
				columnIndex: i,
				data: dt.cell(rowIdx, i).render(that.c.orthogonal),
				hidden: dt.column(i).visible() && !that.s.current[i],
				rowIndex: rowIdx,
				title: dtCol.sTitle !== null ? dtCol.sTitle : $(dt.column(i).header()).text()
			};
		});
	},

	/**
	 * Find a breakpoint object from a name
	 *
	 * @param  {string} name Breakpoint name to find
	 * @return {object}      Breakpoint description object
	 * @private
	 */
	_find: function (name) {
		var breakpoints = this.c.breakpoints;

		for (var i = 0, ien = breakpoints.length; i < ien; i++) {
			if (breakpoints[i].name === name) {
				return breakpoints[i];
			}
		}
	},

	/**
	 * Re-create the contents of the child rows as the display has changed in
	 * some way.
	 *
	 * @private
	 */
	_redrawChildren: function () {
		var that = this;
		var dt = this.s.dt;

		dt.rows({ page: 'current' }).iterator('row', function (settings, idx) {
			that._detailsDisplay(dt.row(idx), true);
		});
	},

	/**
	 * Alter the table display for a resized viewport. This involves first
	 * determining what breakpoint the window currently is in, getting the
	 * column visibilities to apply and then setting them.
	 *
	 * @param  {boolean} forceRedraw Force a redraw
	 * @private
	 */
	_resize: function (forceRedraw) {
		var that = this;
		var dt = this.s.dt;
		var width = $(window).innerWidth();
		var breakpoints = this.c.breakpoints;
		var breakpoint = breakpoints[0].name;
		var columns = this.s.columns;
		var i, ien;
		var oldVis = this.s.current.slice();

		// Determine what breakpoint we are currently at
		for (i = breakpoints.length - 1; i >= 0; i--) {
			if (width <= breakpoints[i].width) {
				breakpoint = breakpoints[i].name;
				break;
			}
		}

		// Show the columns for that break point
		var columnsVis = this._columnsVisiblity(breakpoint);
		this.s.current = columnsVis;

		// Set the class before the column visibility is changed so event
		// listeners know what the state is. Need to determine if there are
		// any columns that are not visible but can be shown
		var collapsedClass = false;

		for (i = 0, ien = columns.length; i < ien; i++) {
			if (
				columnsVis[i] === false &&
				!columns[i].never &&
				!columns[i].control &&
				!dt.column(i).visible() === false
			) {
				collapsedClass = true;
				break;
			}
		}

		$(dt.table().node()).toggleClass('collapsed', collapsedClass);

		var changed = false;
		var visible = 0;

		dt.columns()
			.eq(0)
			.each(function (colIdx, i) {
				if (columnsVis[i] === true) {
					visible++;
				}

				if (forceRedraw || columnsVis[i] !== oldVis[i]) {
					changed = true;
					that._setColumnVis(colIdx, columnsVis[i]);
				}
			});

		// Always need to update the display, regardless of if it has changed or not, so nodes
		// can be re-inserted for listHiddenNodes
		this._redrawChildren();

		if (changed) {
			// Inform listeners of the change
			$(dt.table().node()).trigger('responsive-resize.dt', [dt, this.s.current]);

			// If no records, update the "No records" display element
			if (dt.page.info().recordsDisplay === 0) {
				$('td', dt.table().body()).eq(0).attr('colspan', visible);
			}
		}

		that._controlClass();
	},

	/**
	 * Determine the width of each column in the table so the auto column hiding
	 * has that information to work with. This method is never going to be 100%
	 * perfect since column widths can change slightly per page, but without
	 * seriously compromising performance this is quite effective.
	 *
	 * @private
	 */
	_resizeAuto: function () {
		var dt = this.s.dt;
		var columns = this.s.columns;
		var that = this;

		// Are we allowed to do auto sizing?
		if (!this.c.auto) {
			return;
		}

		// Are there any columns that actually need auto-sizing, or do they all
		// have classes defined
		if (
			$.inArray(
				true,
				$.map(columns, function (c) {
					return c.auto;
				})
			) === -1
		) {
			return;
		}

		// Need to restore all children. They will be reinstated by a re-render
		if (!$.isEmptyObject(this.s.childNodeStore)) {
			$.each(this.s.childNodeStore, function (key) {
				var idx = key.split('-');

				that._childNodesRestore(dt, idx[0] * 1, idx[1] * 1);
			});
		}

		// Clone the table with the current data in it
		var tableWidth = dt.table().node().offsetWidth;
		var columnWidths = dt.columns;
		var clonedTable = dt.table().node().cloneNode(false);
		var clonedHeader = $(dt.table().header().cloneNode(false)).appendTo(clonedTable);
		var clonedBody = $(dt.table().body()).clone(false, false).empty().appendTo(clonedTable); // use jQuery because of IE8

		clonedTable.style.width = 'auto';

		// Header
		var headerCells = dt
			.columns()
			.header()
			.filter(function (idx) {
				return dt.column(idx).visible();
			})
			.to$()
			.clone(false)
			.css('display', 'table-cell')
			.css('width', 'auto')
			.css('min-width', 0);

		// Body rows - we don't need to take account of DataTables' column
		// visibility since we implement our own here (hence the `display` set)
		$(clonedBody)
			.append($(dt.rows({ page: 'current' }).nodes()).clone(false))
			.find('th, td')
			.css('display', '');

		// Footer
		var footer = dt.table().footer();
		if (footer) {
			var clonedFooter = $(footer.cloneNode(false)).appendTo(clonedTable);
			var footerCells = dt
				.columns()
				.footer()
				.filter(function (idx) {
					return dt.column(idx).visible();
				})
				.to$()
				.clone(false)
				.css('display', 'table-cell');

			$('<tr/>').append(footerCells).appendTo(clonedFooter);
		}

		$('<tr/>').append(headerCells).appendTo(clonedHeader);

		// In the inline case extra padding is applied to the first column to
		// give space for the show / hide icon. We need to use this in the
		// calculation
		if (this.c.details.type === 'inline') {
			$(clonedTable).addClass('dtr-inline collapsed');
		}

		// It is unsafe to insert elements with the same name into the DOM
		// multiple times. For example, cloning and inserting a checked radio
		// clears the chcecked state of the original radio.
		$(clonedTable).find('[name]').removeAttr('name');

		// A position absolute table would take the table out of the flow of
		// our container element, bypassing the height and width (Scroller)
		$(clonedTable).css('position', 'relative');

		var inserted = $('<div/>')
			.css({
				width: 1,
				height: 1,
				overflow: 'hidden',
				clear: 'both'
			})
			.append(clonedTable);

		inserted.insertBefore(dt.table().node());

		// The cloned header now contains the smallest that each column can be
		headerCells.each(function (i) {
			var idx = dt.column.index('fromVisible', i);
			columns[idx].minWidth = this.offsetWidth || 0;
		});

		inserted.remove();
	},

	/**
	 * Get the state of the current hidden columns - controlled by Responsive only
	 */
	_responsiveOnlyHidden: function () {
		var dt = this.s.dt;

		return $.map(this.s.current, function (v, i) {
			// If the column is hidden by DataTables then it can't be hidden by
			// Responsive!
			if (dt.column(i).visible() === false) {
				return true;
			}
			return v;
		});
	},

	/**
	 * Set a column's visibility.
	 *
	 * We don't use DataTables' column visibility controls in order to ensure
	 * that column visibility can Responsive can no-exist. Since only IE8+ is
	 * supported (and all evergreen browsers of course) the control of the
	 * display attribute works well.
	 *
	 * @param {integer} col      Column index
	 * @param {boolean} showHide Show or hide (true or false)
	 * @private
	 */
	_setColumnVis: function (col, showHide) {
		var that = this;
		var dt = this.s.dt;
		var display = showHide ? '' : 'none'; // empty string will remove the attr

		$(dt.column(col).header()).css('display', display).toggleClass('dtr-hidden', !showHide);

		$(dt.column(col).footer()).css('display', display).toggleClass('dtr-hidden', !showHide);

		dt.column(col).nodes().to$().css('display', display).toggleClass('dtr-hidden', !showHide);

		// If the are child nodes stored, we might need to reinsert them
		if (!$.isEmptyObject(this.s.childNodeStore)) {
			dt.cells(null, col)
				.indexes()
				.each(function (idx) {
					that._childNodesRestore(dt, idx.row, idx.column);
				});
		}
	},

	/**
	 * Update the cell tab indexes for keyboard accessibility. This is called on
	 * every table draw - that is potentially inefficient, but also the least
	 * complex option given that column visibility can change on the fly. Its a
	 * shame user-focus was removed from CSS 3 UI, as it would have solved this
	 * issue with a single CSS statement.
	 *
	 * @private
	 */
	_tabIndexes: function () {
		var dt = this.s.dt;
		var cells = dt.cells({ page: 'current' }).nodes().to$();
		var ctx = dt.settings()[0];
		var target = this.c.details.target;

		cells.filter('[data-dtr-keyboard]').removeData('[data-dtr-keyboard]');

		if (typeof target === 'number') {
			dt.cells(null, target, { page: 'current' })
				.nodes()
				.to$()
				.attr('tabIndex', ctx.iTabIndex)
				.data('dtr-keyboard', 1);
		}
		else {
			// This is a bit of a hack - we need to limit the selected nodes to just
			// those of this table
			if (target === 'td:first-child, th:first-child') {
				target = '>td:first-child, >th:first-child';
			}

			$(target, dt.rows({ page: 'current' }).nodes())
				.attr('tabIndex', ctx.iTabIndex)
				.data('dtr-keyboard', 1);
		}
	}
});

/**
 * List of default breakpoints. Each item in the array is an object with two
 * properties:
 *
 * * `name` - the breakpoint name.
 * * `width` - the breakpoint width
 *
 * @name Responsive.breakpoints
 * @static
 */
Responsive.breakpoints = [
	{ name: 'desktop', width: Infinity },
	{ name: 'tablet-l', width: 1024 },
	{ name: 'tablet-p', width: 768 },
	{ name: 'mobile-l', width: 480 },
	{ name: 'mobile-p', width: 320 }
];

/**
 * Display methods - functions which define how the hidden data should be shown
 * in the table.
 *
 * @namespace
 * @name Responsive.defaults
 * @static
 */
Responsive.display = {
	childRow: function (row, update, render) {
		if (update) {
			if ($(row.node()).hasClass('parent')) {
				row.child(render(), 'child').show();

				return true;
			}
		}
		else {
			if (!row.child.isShown()) {
				row.child(render(), 'child').show();

				return true;
			}
			else {
				row.child(false);

				return false;
			}
		}
	},

	childRowImmediate: function (row, update, render) {
		if ((!update && row.child.isShown()) || !row.responsive.hasHidden()) {
			// User interaction and the row is show, or nothing to show
			row.child(false);

			return false;
		}
		else {
			// Display
			row.child(render(), 'child').show();

			return true;
		}
	},

	// This is a wrapper so the modal options for Bootstrap and jQuery UI can
	// have options passed into them. This specific one doesn't need to be a
	// function but it is for consistency in the `modal` name
	modal: function (options) {
		return function (row, update, render, closeCallback) {
			if (!update) {
				// Show a modal
				var close = function () {
					modal.remove(); // will tidy events for us
					$(document).off('keypress.dtr');
					$(row.node()).removeClass('parent');

					closeCallback();
				};

				var modal = $('<div class="dtr-modal"/>')
					.append(
						$('<div class="dtr-modal-display"/>')
							.append(
								$('<div class="dtr-modal-content"/>')
									.data('dtr-row-idx', row.index())
									.append(render())
							)
							.append(
								$('<div class="dtr-modal-close">&times;</div>').click(function () {
									close();
								})
							)
					)
					.append(
						$('<div class="dtr-modal-background"/>').click(function () {
							close();
						})
					)
					.appendTo('body');

				$(row.node()).addClass('parent');

				$(document).on('keyup.dtr', function (e) {
					if (e.keyCode === 27) {
						e.stopPropagation();

						close();
					}
				});
			}
			else {
				var modal = $('div.dtr-modal-content');

				if (modal.length && row.index() === modal.data('dtr-row-idx')) {
					modal.empty().append(render());
				}
				else {
					// Modal not shown, nothing to update
					return null;
				}
			}

			if (options && options.header) {
				$('div.dtr-modal-content').prepend('<h2>' + options.header(row) + '</h2>');
			}

			return true;
		};
	}
};

/**
 * Display methods - functions which define how the hidden data should be shown
 * in the table.
 *
 * @namespace
 * @name Responsive.defaults
 * @static
 */
Responsive.renderer = {
	listHiddenNodes: function () {
		return function (api, rowIdx, columns) {
			var that = this;
			var ul = $('<ul data-dtr-index="' + rowIdx + '" class="dtr-details"/>');
			var found = false;

			var data = $.each(columns, function (i, col) {
				if (col.hidden) {
					var klass = col.className ? 'class="' + col.className + '"' : '';

					$(
						'<li ' +
							klass +
							' data-dtr-index="' +
							col.columnIndex +
							'" data-dt-row="' +
							col.rowIndex +
							'" data-dt-column="' +
							col.columnIndex +
							'">' +
							'<span class="dtr-title">' +
							col.title +
							'</span> ' +
							'</li>'
					)
						.append(
							$('<span class="dtr-data"/>').append(
								that._childNodes(api, col.rowIndex, col.columnIndex)
							)
						) // api.cell( col.rowIndex, col.columnIndex ).node().childNodes ) )
						.appendTo(ul);

					found = true;
				}
			});

			return found ? ul : false;
		};
	},

	listHidden: function () {
		return function (api, rowIdx, columns) {
			var data = $.map(columns, function (col) {
				var klass = col.className ? 'class="' + col.className + '"' : '';

				return col.hidden
					? '<li ' +
							klass +
							' data-dtr-index="' +
							col.columnIndex +
							'" data-dt-row="' +
							col.rowIndex +
							'" data-dt-column="' +
							col.columnIndex +
							'">' +
							'<span class="dtr-title">' +
							col.title +
							'</span> ' +
							'<span class="dtr-data">' +
							col.data +
							'</span>' +
							'</li>'
					: '';
			}).join('');

			return data
				? $('<ul data-dtr-index="' + rowIdx + '" class="dtr-details"/>').append(data)
				: false;
		};
	},

	tableAll: function (options) {
		options = $.extend(
			{
				tableClass: ''
			},
			options
		);

		return function (api, rowIdx, columns) {
			var data = $.map(columns, function (col) {
				var klass = col.className ? 'class="' + col.className + '"' : '';

				return (
					'<tr ' +
					klass +
					' data-dt-row="' +
					col.rowIndex +
					'" data-dt-column="' +
					col.columnIndex +
					'">' +
					'<td>' +
					col.title +
					':' +
					'</td> ' +
					'<td>' +
					col.data +
					'</td>' +
					'</tr>'
				);
			}).join('');

			return $('<table class="' + options.tableClass + ' dtr-details" width="100%"/>').append(
				data
			);
		};
	}
};

/**
 * Responsive default settings for initialisation
 *
 * @namespace
 * @name Responsive.defaults
 * @static
 */
Responsive.defaults = {
	/**
	 * List of breakpoints for the instance. Note that this means that each
	 * instance can have its own breakpoints. Additionally, the breakpoints
	 * cannot be changed once an instance has been creased.
	 *
	 * @type {Array}
	 * @default Takes the value of `Responsive.breakpoints`
	 */
	breakpoints: Responsive.breakpoints,

	/**
	 * Enable / disable auto hiding calculations. It can help to increase
	 * performance slightly if you disable this option, but all columns would
	 * need to have breakpoint classes assigned to them
	 *
	 * @type {Boolean}
	 * @default  `true`
	 */
	auto: true,

	/**
	 * Details control. If given as a string value, the `type` property of the
	 * default object is set to that value, and the defaults used for the rest
	 * of the object - this is for ease of implementation.
	 *
	 * The object consists of the following properties:
	 *
	 * * `display` - A function that is used to show and hide the hidden details
	 * * `renderer` - function that is called for display of the child row data.
	 *   The default function will show the data from the hidden columns
	 * * `target` - Used as the selector for what objects to attach the child
	 *   open / close to
	 * * `type` - `false` to disable the details display, `inline` or `column`
	 *   for the two control types
	 *
	 * @type {Object|string}
	 */
	details: {
		display: Responsive.display.childRow,

		renderer: Responsive.renderer.listHidden(),

		target: 0,

		type: 'inline'
	},

	/**
	 * Orthogonal data request option. This is used to define the data type
	 * requested when Responsive gets the data to show in the child row.
	 *
	 * @type {String}
	 */
	orthogonal: 'display'
};

/*
 * API
 */
var Api = $.fn.dataTable.Api;

// Doesn't do anything - work around for a bug in DT... Not documented
Api.register('responsive()', function () {
	return this;
});

Api.register('responsive.index()', function (li) {
	li = $(li);

	return {
		column: li.data('dtr-index'),
		row: li.parent().data('dtr-index')
	};
});

Api.register('responsive.rebuild()', function () {
	return this.iterator('table', function (ctx) {
		if (ctx._responsive) {
			ctx._responsive._classLogic();
		}
	});
});

Api.register('responsive.recalc()', function () {
	return this.iterator('table', function (ctx) {
		if (ctx._responsive) {
			ctx._responsive._resizeAuto();
			ctx._responsive._resize();
		}
	});
});

Api.register('responsive.hasHidden()', function () {
	var ctx = this.context[0];

	return ctx._responsive
		? $.inArray(false, ctx._responsive._responsiveOnlyHidden()) !== -1
		: false;
});

Api.registerPlural('columns().responsiveHidden()', 'column().responsiveHidden()', function () {
	return this.iterator(
		'column',
		function (settings, column) {
			return settings._responsive
				? settings._responsive._responsiveOnlyHidden()[column]
				: false;
		},
		1
	);
});

/**
 * Version information
 *
 * @name Responsive.version
 * @static
 */
Responsive.version = '2.5.0';

$.fn.dataTable.Responsive = Responsive;
$.fn.DataTable.Responsive = Responsive;

// Attach a listener to the document which listens for DataTables initialisation
// events so we can automatically initialise
$(document).on('preInit.dt.dtr', function (e, settings, json) {
	if (e.namespace !== 'dt') {
		return;
	}

	if (
		$(settings.nTable).hasClass('responsive') ||
		$(settings.nTable).hasClass('dt-responsive') ||
		settings.oInit.responsive ||
		DataTable.defaults.responsive
	) {
		var init = settings.oInit.responsive;

		if (init !== false) {
			new Responsive(settings, $.isPlainObject(init) ? init : {});
		}
	}
});


return DataTable;
}));

;
//# sourceMappingURL=scripts.js.map