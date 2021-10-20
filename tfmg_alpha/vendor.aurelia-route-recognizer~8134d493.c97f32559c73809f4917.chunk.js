(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"0esZ":function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r("iD3O"),s=function(){function t(t){this.charSpec=t,this.nextStates=[]}return t.prototype.get=function(t){var e=this.nextStates,r=Array.isArray(e),n=0;for(e=r?e:e[Symbol.iterator]();;){var s;if(r){if(n>=e.length)break;s=e[n++]}else{if((n=e.next()).done)break;s=n.value}var a=s;if(a.charSpec.validChars===t.validChars&&a.charSpec.invalidChars===t.invalidChars)return a}},t.prototype.put=function(e){var r=this.get(e);return r||(r=new t(e),this.nextStates.push(r),e.repeat&&r.nextStates.push(r),r)},t.prototype.match=function(t){for(var e=this.nextStates,r=[],n=0,s=e.length;n<s;n++){var a=e[n],i=a.charSpec;void 0!==i.validChars?-1!==i.validChars.indexOf(t)&&r.push(a):void 0!==i.invalidChars&&-1===i.invalidChars.indexOf(t)&&r.push(a)}return r},t}(),a=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\"].join("|\\")+")","g"),i=function(){function t(t,e){this.string=t,this.caseSensitive=e}return t.prototype.eachChar=function(t){for(var e=this.string,r=0,n=e.length;r<n;++r){var s=e[r];t({validChars:this.caseSensitive?s:s.toUpperCase()+s.toLowerCase()})}},t.prototype.regex=function(){return this.string.replace(a,"\\$1")},t.prototype.generate=function(){return this.string},t}(),o=function(){function t(t,e){this.name=t,this.optional=e}return t.prototype.eachChar=function(t){t({invalidChars:"/",repeat:!0})},t.prototype.regex=function(){return"([^/]+)"},t.prototype.generate=function(t,e){return e[this.name]=!0,t[this.name]},t}(),h=function(){function t(t){this.name=t}return t.prototype.eachChar=function(t){t({invalidChars:"",repeat:!0})},t.prototype.regex=function(){return"(.+)"},t.prototype.generate=function(t,e){return e[this.name]=!0,t[this.name]},t}(),u=function(){function t(){}return t.prototype.eachChar=function(){},t.prototype.regex=function(){return""},t.prototype.generate=function(){return""},t}(),p=function(){function t(){this.rootState=new s,this.names={},this.routes=new Map}return t.prototype.add=function(t){var e=this;if(!Array.isArray(t)){for(var r=this.rootState,n=[],s="^",a={statics:0,dynamics:0,stars:0},p=[],c=t.handler.name,f=!0,y=function(t,e,r,n){var s=t;"/"===t.charAt(0)&&(s=t.substr(1));for(var a=[],p=s.split("/"),c=0,f=p.length;c<f;++c){var l=p[c],y=l.match(/^:([^?]+)(\?)?$/);if(y){var v=y,d=v[1],g=v[2];if(-1!==d.indexOf("="))throw new Error("Parameter "+d+" in route "+t+" has a default value, which is not supported.");a.push(new o(d,!!g)),e.push(d),r.dynamics++}else(y=l.match(/^\*(.+)$/))?(a.push(new h(y[1])),e.push(y[1]),r.stars++):""===l?a.push(new u):(a.push(new i(l,n)),r.statics++)}return a}(t.path,p,a,t.caseSensitive),v=0,d=y.length;v<d;v++){var g=y[v];if(!(g instanceof u)){for(var m=l(r,g),w=m[0],x=m[1],C=0,S=n.length;C<S;C++)n[C].nextStates.push(w);g.optional?(n.push(x),s+="(?:/"+g.regex()+")?"):(r=x,s+="/"+g.regex(),n.length=0,f=!1)}}f&&(r=r.put({validChars:"/"}),s+="/?");var A=[{handler:t.handler,names:p}];if(this.routes.set(t.handler,{segments:y,handlers:A}),c)for(var b=Array.isArray(c)?c:[c],R=0;R<b.length;R++)b[R]in this.names||(this.names[b[R]]={segments:y,handlers:A});for(var E=0;E<n.length;E++){var O=n[E];O.handlers=A,O.regex=new RegExp(s+"$",t.caseSensitive?"":"i"),O.types=a}return r.handlers=A,r.regex=new RegExp(s+"$",t.caseSensitive?"":"i"),r.types=a,r}t.forEach((function(t){return e.add(t)}))},t.prototype.getRoute=function(t){return"string"==typeof t?this.names[t]:this.routes.get(t)},t.prototype.handlersFor=function(t){var e=this.getRoute(t);if(!e)throw new Error("There is no route named "+t);return[].concat(e.handlers)},t.prototype.hasRoute=function(t){return!!this.getRoute(t)},t.prototype.generate=function(t,e){var r=this.getRoute(t);if(!r)throw new Error("There is no route named "+t);var s=r.handlers[0].handler;if(s.generationUsesHref)return s.href;for(var a=Object.assign({},e),i=r.segments,o={},h="",p=0,c=i.length;p<c;p++){var f=i[p];if(!(f instanceof u)){var l=f.generate(a,o);if(null==l){if(!f.optional)throw new Error("A value is required for route parameter '"+f.name+"' in route '"+t+"'.")}else h+="/",h+=l}}for(var y in"/"!==h.charAt(0)&&(h="/"+h),o)delete a[y];var v=Object(n.a)(a);return h+=v?"?"+v:""},t.prototype.recognize=function(t){var e=[this.rootState],r={},s=!1,a=t,i=a.indexOf("?");if(-1!==i){var o=a.substr(i+1,a.length);a=a.substr(0,i),r=Object(n.c)(o)}"/"!==(a=decodeURI(a)).charAt(0)&&(a="/"+a);var h=a.length;h>1&&"/"===a.charAt(h-1)&&(a=a.substr(0,h-1),s=!0);for(var u=0,p=a.length;u<p&&(e=f(e,a.charAt(u))).length;u++);for(var l=[],y=0,v=e.length;y<v;y++)e[y].handlers&&l.push(e[y]);e=function(t){return t.sort((function(t,e){if(t.types.stars!==e.types.stars)return t.types.stars-e.types.stars;if(t.types.stars){if(t.types.statics!==e.types.statics)return e.types.statics-t.types.statics;if(t.types.dynamics!==e.types.dynamics)return e.types.dynamics-t.types.dynamics}return t.types.dynamics!==e.types.dynamics?t.types.dynamics-e.types.dynamics:t.types.statics!==e.types.statics?e.types.statics-t.types.statics:0}))}(l);var d=l[0];if(d&&d.handlers)return s&&"(.+)$"===d.regex.source.slice(-5)&&(a+="/"),function(t,e,r){for(var n=t.handlers,s=t.regex,a=e.match(s),i=1,o=new c(r),h=0,u=n.length;h<u;h++){for(var p=n[h],f=p.names,l={},y=0,v=f.length;y<v;y++)l[f[y]]=a[i++];o.push({handler:p.handler,params:l,isDynamic:!!f.length})}return o}(d,a,r)},t}(),c=function(t){this.splice=Array.prototype.splice,this.slice=Array.prototype.slice,this.push=Array.prototype.push,this.length=0,this.queryParams=t||{}};function f(t,e){for(var r=[],n=0,s=t.length;n<s;n++){var a=t[n];r.push.apply(r,a.match(e))}return r}function l(t,e){var r=t.put({validChars:"/"}),n=r;return e.eachChar((function(t){n=n.put(t)})),[r,n]}}}]);
//# sourceMappingURL=vendor.aurelia-route-recognizer~8134d493.c97f32559c73809f4917.bundle.map