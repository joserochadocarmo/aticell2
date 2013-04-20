(function(){var e,t,n,o,r,a,i,l,c,s,u,d,v,f,h,p,m,g,w,b,y,k,x,_,E,A,T,N,S,C,R,M,L,D,H,O,X,P,j,q,$,B,F,Z,z,K,Q,Y={}.hasOwnProperty,G=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};k=!1,d=null,M=document.location.href,A=null,C={},s=null,q=(null!=(Q=document.cookie.match(/request_method=(\w+)/))?Q[1].toUpperCase():void 0)||"",K=null,z=function(e){return a&&r?(i(),L(e),g(e)):document.location.href=e},g=function(e){var t;return Z("page:fetch"),t=P(e),null!=K&&K.abort(),K=new XMLHttpRequest,K.open("GET",t,!0),K.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),K.setRequestHeader("X-XHR-Referer",M),K.onload=function(){var e;return Z("page:receive"),E(K)||n(e=s(K.responseText))?document.location.reload():(l.apply(null,h(e)),D(K),document.location.hash?document.location.href=document.location.href:B(),Z("page:load"))},K.onloadend=function(){return K=null},K.onabort=function(){return O()},K.onerror=function(){return document.location.href=e},K.send()},m=function(e){var t;return i(),(t=C[e.position])?(null!=K&&K.abort(),l(t.title,t.body),R(t),Z("page:restore")):g(document.location.href)},i=function(){return X(),C[d.position]={url:document.location.href,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset},c(10)},c=function(e){var t,n;for(t in C)Y.call(C,t)&&(n=C[t],d.position-e>=t&&(C[t]=null))},l=function(t,n,o,r){return document.title=t,document.documentElement.replaceChild(n,document.body),null!=o&&e.update(o),j(),r&&v(),d=window.history.state,Z("page:change")},v=function(){var e,t,n,o,r,a,i,l,c,s,u,d;for(a=Array.prototype.slice.call(document.body.getElementsByTagName("script")),i=0,c=a.length;c>i;i++)if(r=a[i],""===(u=r.type)||"text/javascript"===u){for(t=document.createElement("script"),d=r.attributes,l=0,s=d.length;s>l;l++)e=d[l],t.setAttribute(e.name,e.value);t.appendChild(document.createTextNode(r.innerHTML)),o=r.parentNode,n=r.nextSibling,o.removeChild(r),o.insertBefore(t,n)}},j=function(){var e,t,n,o;for(t=Array.prototype.slice.call(document.body.getElementsByTagName("noscript")),n=0,o=t.length;o>n;n++)e=t[n],e.parentNode.removeChild(e)},L=function(e){return e!==document.location.href?(M=document.location.href,window.history.pushState({turbolinks:!0,position:d.position+1},"",e)):void 0},D=function(e){var t;return(t=e.getResponseHeader("X-XHR-Current-Location"))&&t!==document.location.pathname+document.location.search?window.history.replaceState(d,"",t+document.location.hash):void 0},O=function(){return window.history.replaceState({turbolinks:!0,position:Date.now()},"",document.location.href)},H=function(){return d=window.history.state},X=function(){return k?void 0:(O(),H(),s=o(),k=!0)},R=function(e){return window.scrollTo(e.positionX,e.positionY)},B=function(){return window.scrollTo(0,0)},P=function(e){var t;return t=e,null==e.href&&(t=document.createElement("A"),t.href=e),t.href.replace(t.hash,"")},Z=function(e){var t;return t=document.createEvent("Events"),t.initEvent(e,!0,!0),document.dispatchEvent(t)},E=function(e){return!e.getResponseHeader("Content-Type").match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},p=function(e){var t,n,o,r,a;for(r=e.head.childNodes,a=[],n=0,o=r.length;o>n;n++)t=r[n],null!=("function"==typeof t.getAttribute?t.getAttribute("data-turbolinks-track"):void 0)&&a.push(t.src||t.href);return a},n=function(e){var t;return A||(A=p(document)),t=p(e),t.length!==A.length||_(t,A).length!==A.length},_=function(e,t){var n,o,r,a,i;for(e.length>t.length&&(a=[t,e],e=a[0],t=a[1]),i=[],o=0,r=e.length;r>o;o++)n=e[o],G.call(t,n)>=0&&i.push(n);return i},h=function(t){var n;return n=t.querySelector("title"),[null!=n?n.textContent:void 0,t.body,e.get(t).token,"runScripts"]},e={get:function(e){var t;return null==e&&(e=document),{node:t=e.querySelector('meta[name="csrf-token"]'),token:null!=t?"function"==typeof t.getAttribute?t.getAttribute("content"):void 0:void 0}},update:function(e){var t;return t=this.get(),null!=t.token&&null!=e&&t.token!==e?t.node.setAttribute("content",e):void 0}},o=function(){var e,t,n,o,r,a;t=function(e){return(new DOMParser).parseFromString(e,"text/html")},e=function(e){var t;return t=document.implementation.createHTMLDocument(""),t.documentElement.innerHTML=e,t},n=function(e){var t;return t=document.implementation.createHTMLDocument(""),t.open("replace"),t.write(e),t.close(),t};try{if(window.DOMParser)return r=t("<html><body><p>test"),t}catch(i){return o=i,r=e("<html><body><p>test"),e}finally{if(1!==(null!=r?null!=(a=r.body)?a.childNodes.length:void 0:void 0))return n}},x=function(e){return e.defaultPrevented?void 0:(document.removeEventListener("click",w,!1),document.addEventListener("click",w,!1))},w=function(e){var t;return e.defaultPrevented||(t=f(e),"A"!==t.nodeName||b(e,t))?void 0:(z(t.href),e.preventDefault())},f=function(e){var t;for(t=e.target;t.parentNode&&"A"!==t.nodeName;)t=t.parentNode;return t},u=function(e){return location.protocol!==e.protocol||location.host!==e.host},t=function(e){return(e.hash&&P(e))===P(location)||e.href===location.href+"#"},N=function(e){var t;return t=P(e),t.match(/\.[a-z]+(\?.*)?$/g)&&!t.match(/\.html?(\?.*)?$/g)},T=function(e){for(var t;!t&&e!==document;)t=null!=e.getAttribute("data-no-turbolink"),e=e.parentNode;return t},F=function(e){return 0!==e.target.length},S=function(e){return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},b=function(e,n){return u(n)||t(n)||N(n)||T(n)||F(n)||S(e)},y=function(){return document.addEventListener("click",x,!0),window.addEventListener("popstate",function(e){var t;return(null!=(t=e.state)?t.turbolinks:void 0)?m(e.state):void 0},!1)},a=window.history&&window.history.pushState&&window.history.replaceState&&void 0!==window.history.state,r=!navigator.userAgent.match(/CriOS\//),$="GET"===q||""===q,a&&r&&$&&y(),this.Turbolinks={visit:z}}).call(this),function(e){var t=0;e(document).on("click",".add_fields",function(n){n.preventDefault();var o=e(this),r=o.data("association"),a=o.data("associations"),i=o.data("association-insertion-template"),l=o.data("association-insertion-method")||o.data("association-insertion-position")||"before";insertionNode=o.data("association-insertion-node"),insertionTraversal=o.data("association-insertion-traversal"),regexp_braced=new RegExp("\\[new_"+r+"\\](.*?\\s)","g"),regexp_underscord=new RegExp("_new_"+r+"_(\\w*)","g"),new_id=(new Date).getTime()+t++,newcontent_braced="["+new_id+"]",newcontent_underscord="_"+new_id+"_",new_content=i.replace(regexp_braced,"["+new_id+"]$1"),new_content==i&&(regexp_braced=new RegExp("\\[new_"+a+"\\](.*?\\s)","g"),regexp_underscord=new RegExp("_new_"+a+"_(\\w*)","g"),new_content=i.replace(regexp_braced,"["+new_id+"]$1")),new_content=new_content.replace(regexp_underscord,newcontent_underscord+"$1"),insertionNode=insertionNode?insertionTraversal?o[insertionTraversal](insertionNode):"this"==insertionNode?o:e(insertionNode):o.parent();var c=e(new_content);insertionNode.trigger("cocoon:before-insert",[c]),insertionNode[l](c),insertionNode.trigger("cocoon:after-insert",[c])}),e(document).on("click",".remove_fields.dynamic, .remove_fields.existing",function(t){var n=e(this),o=n.closest(".nested-fields"),r=o.parent();t.preventDefault(),r.trigger("cocoon:before-remove",[o]);var a=r.data("remove-timeout")||0;setTimeout(function(){n.hasClass("dynamic")?n.closest(".nested-fields").remove():(n.prev("input[type=hidden]").val("1"),n.closest(".nested-fields").hide()),r.trigger("cocoon:after-remove",[o])},a)})}(jQuery),function(e){e.browser||(e.browser={},e.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase()),e.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase()),e.browser.opera=/opera/.test(navigator.userAgent.toLowerCase()),e.browser.msie=/msie/.test(navigator.userAgent.toLowerCase()));var t={destroy:function(){var t=e(this);return t.unbind(".maskMoney"),e.browser.msie&&(this.onpaste=null),this},mask:function(){return this.trigger("mask")},init:function(t){return t=e.extend({symbol:"",symbolStay:!1,thousands:",",decimal:".",precision:2,defaultZero:!0,allowZero:!1,allowNegative:!1},t),this.each(function(){function n(){w=!0}function o(){w=!1}function r(t){t=t||window.event;var r=t.which||t.charCode||t.keyCode;if(void 0==r)return!1;if(48>r||r>57)return 45==r?(n(),g.val(h(g)),!1):43==r?(n(),g.val(g.val().replace("-","")),!1):13==r||9==r?(w&&(o(),e(this).change()),!0):!e.browser.mozilla||37!=r&&39!=r||0!=t.charCode?(c(t),!0):!0;if(g.val().length>=g.attr("maxlength"))return!1;c(t);var a=String.fromCharCode(r),i=g.get(0),l=m(i),u=l.start,d=l.end;return i.value=i.value.substring(0,u)+a+i.value.substring(d,i.value.length),s(i,u+1),n(),!1}function a(t){t=t||window.event;var r=t.which||t.charCode||t.keyCode;if(void 0==r)return!1;var a=g.get(0),i=m(a),l=i.start,u=i.end;return 8==r?(c(t),l==u?(a.value=a.value.substring(0,l-1)+a.value.substring(u,a.value.length),l-=1):a.value=a.value.substring(0,l)+a.value.substring(u,a.value.length),s(a,l),n(),!1):9==r?(w&&(e(this).change(),o()),!0):46==r||63272==r?(c(t),a.value=a.selectionStart==a.selectionEnd?a.value.substring(0,l)+a.value.substring(u+1,a.value.length):a.value.substring(0,l)+a.value.substring(u,a.value.length),s(a,l),n(),!1):!0}function i(){var e=v();if(g.val()==e?g.val(""):""==g.val()&&t.defaultZero?g.val(f(e)):g.val(f(g.val())),this.createTextRange){var n=this.createTextRange();n.collapse(!1),n.select()}}function l(n){e.browser.msie&&r(n),""==g.val()||g.val()==f(v())||g.val()==t.symbol?t.allowZero?t.symbolStay?g.val(f(v())):g.val(v()):g.val(""):t.symbolStay?t.symbolStay&&g.val()==t.symbol&&g.val(f(v())):g.val(g.val().replace(t.symbol,""))}function c(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function s(e,t){var n=g.val().length;g.val(d(e.value));var o=g.val().length;t-=n-o,p(g,t)}function u(){var e=g.val();g.val(d(e))}function d(e){e=e.replace(t.symbol,"");var n="0123456789",o=e.length,r="",a="",i="";if(0!=o&&"-"==e.charAt(0)&&(e=e.replace("-",""),t.allowNegative&&(i="-")),0==o){if(!t.defaultZero)return a;a="0.00"}for(var l=0;o>l&&("0"==e.charAt(l)||e.charAt(l)==t.decimal);l++);for(;o>l;l++)-1!=n.indexOf(e.charAt(l))&&(r+=e.charAt(l));var c=parseFloat(r);c=isNaN(c)?0:c/Math.pow(10,t.precision),a=c.toFixed(t.precision),l=0==t.precision?0:1;var s,u=(a=a.split("."))[l].substr(0,t.precision);for(s=(a=a[0]).length;(s-=3)>=1;)a=a.substr(0,s)+t.thousands+a.substr(s);return t.precision>0?f(i+a+t.decimal+u+Array(t.precision+1-u.length).join(0)):f(i+a)}function v(){var e=parseFloat("0")/Math.pow(10,t.precision);return e.toFixed(t.precision).replace(new RegExp("\\.","g"),t.decimal)}function f(e){if(""!=t.symbol){var n="";0!=e.length&&"-"==e.charAt(0)&&(e=e.replace("-",""),n="-"),e.substr(0,t.symbol.length)!=t.symbol&&(e=n+t.symbol+e)}return e}function h(e){var n=e.val();return t.allowNegative?""!=n&&"-"==n.charAt(0)?n.replace("-",""):"-"+n:n}function p(t,n){return e(t).each(function(e,t){if(t.setSelectionRange)t.focus(),t.setSelectionRange(n,n);else if(t.createTextRange){var o=t.createTextRange();o.collapse(!0),o.moveEnd("character",n),o.moveStart("character",n),o.select()}}),this}function m(e){var t,n,o,r,a,i=0,l=0;return"number"==typeof e.selectionStart&&"number"==typeof e.selectionEnd?(i=e.selectionStart,l=e.selectionEnd):(n=document.selection.createRange(),n&&n.parentElement()==e&&(r=e.value.length,t=e.value.replace(/\r\n/g,"\n"),o=e.createTextRange(),o.moveToBookmark(n.getBookmark()),a=e.createTextRange(),a.collapse(!1),o.compareEndPoints("StartToEnd",a)>-1?i=l=r:(i=-o.moveStart("character",-r),i+=t.slice(0,i).split("\n").length-1,o.compareEndPoints("EndToEnd",a)>-1?l=r:(l=-o.moveEnd("character",-r),l+=t.slice(0,l).split("\n").length-1)))),{start:i,end:l}}var g=e(this),w=!1;g.attr("readonly")||(g.unbind(".maskMoney"),g.bind("keypress.maskMoney",r),g.bind("keydown.maskMoney",a),g.bind("blur.maskMoney",l),g.bind("focus.maskMoney",i),g.bind("mask.maskMoney",u))})}};e.fn.maskMoney=function(n){return t[n]?t[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?(e.error("Method "+n+" does not exist on jQuery.maskMoney"),void 0):t.init.apply(this,arguments)}}(jQuery);