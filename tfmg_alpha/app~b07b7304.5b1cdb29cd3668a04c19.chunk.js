(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Aae":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("mUjK"),i=n("EfK0"),a=n("++kE"),o=n("ztCj"),u={icon:new r.a,item:new i.a,rounder:a.a,DS:null,idb:{set:o.f,get:o.d,del:o.c,clear:o.b,list:o.e}}},"Kh/G":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("7jDb"),i={inv:{items:[]},workshop:{entities:[]}};r.a.provide_CCC("player.inventoryPush",(function(e,t){var n=t.getNamedObject("global").player.workshop.entities;e.which.itemStack.count>0&&t.data.entity[e.which.itemStack.name]&&t.addNewObject(e.to.entities,"player.entity",{name:e.which.itemStack.name,idx:n.length})&&(e.which.itemStack.count--,t.view.signaler.signal("entityUpdate"),t.view.signaler.signal("generalUpdate"))}),{which:"itemStack",to:"entities"}),r.a.CCC_addUtility("workshop.moveEntity",(function(e,t,n,r){var i=r.getNamedObject("global").player.workshop.entities,a=r.getId(t.which);t.to=a.order<t.to?Math.min(t.to,i.length-1):Math.max(t.to,0);var o=i.find((function(e){return r.getId(e).order==t.to}));(o=r.getId(o)).order=a.order,a.order=t.to,r.view.signaler.signal("entityUpdate")}));var a=function(e,t){var n=t.getId(e.which.entity);t.processTEMP(n,"entity.clearProcess",{return:e.player.inventory}),t.processTEMP(e.player.inventory,"inventory.add",{itemStacks:[{name:n.name,count:1}]});var r=t.getNamedObject("global").player.workshop.entities,i=r.findIndex((function(t){return t==e.which.entity}));r.splice(i,1);var a=n.order;r.forEach((function(e){var n=t.getId(e);n.order>a&&n.order--})),t.deleteObject(n),t.view.signaler.signal("entityUpdate")};a.signature={which:"entity",player:"inventory"},r.a.provide_CCC("workshop.recover",a,a.signature);var o=function(e,t){var n=e.which.obj.order+e.dir.number;if(n<0||n>e.list.objs.length)return t.view.warnToast("Cannot move");if("string"==typeof e.list.objs[0]){var r=e.list.objs.find((function(e){return t.getId(e).order==n}));t.getId(r).order-=e.dir.number,e.which.obj.order+=e.dir.number}else{e.list.objs.find((function(e){return e.order==n})).order-=e.dir.number,e.which.obj.order+=e.dir.number}t.view.signaler.signal("generalUpdate")};o.signature={which:"obj",list:"objs",dir:"number"},r.a.provide_CCC("object.move",o,o.signature);var u=function(e,t){t.processTEMP(e.which.obj,e.which.obj.$_type+".delete",t)};u.signature={which:"obj",list:"objs"},r.a.provide_CCC("object.delete",u,u.signature)},main:function(e,t,n){"use strict";n.d(t,"configure",(function(){return i}));n("ls82"),n("SYky");var r=n("BEPO");n("70NS");function i(e){e.use.standardConfiguration().plugin("aurelia-animator-css").plugin("aurelia-dialog").feature("resources/index"),e.use.developmentLogging(r.a?"debug":"warn"),r.b&&e.use.plugin("aurelia-testing"),e.start().then((function(){e.setRoot("app")}))}window.debugIf=function(e,t){e.$$_debug&&e.$$_debug.includes(t)},window.debugCheck=function(e,t){!e.$$_debug&&(e.$$_debug=[]),e.$$_debug.push(t)},Object.walkPath=function(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,i=n.length;r<i;++r){var a=n[r];"object"==typeof e&&a in e?e=e[a]:Error("Couldn't walk the path completely")}return e}},uH5N:function(e,t,n){"use strict";var r=n("7jDb");function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}
//! I don't think these will work under all circumstances,
function o(e,t,n,r){if(n){for(var i,a=-1,o=4,u=r||0;u<e.length;u++)i=e[u],o>3&&!i&&(o=3,a=u),o>2&&i&&0==i.count&&(o=2,a=u),o>1&&i&&i.name==t&&(o=1,a=u);return 2==o&&(e[a].icon=null),a}var s=e.slice().reverse().findIndex((function(e){return e&&e.name==t&&e.count>0}));return-1==s?-1:e.length-1-s}function u(e,t,n,r){if("string"==typeof e&&e.includes("id")&&(e=r.getId(e).items),e.items&&(e=e.items),t.name){n._result=0;for(var a,o=i(e);!(a=o()).done;){var u=a.value;u&&u.name==t.name&&(n._result+=u.count)}}else if(t.names)for(var s,c=i(e);!(s=c()).done;){var d=s.value;d&&t.names.indexOf(d.name)>-1&&(!n[d.name]&&(n[d.name]=0),n[d.name]+=d.count)}}r.a.addOperation("inventory.add",(function(e,t,n,r){
//! needs to handle a multiplier from args
var a=t.itemStacks;Array.isArray(a)||(a=[a]);for(var u,s=[],c=0,d=i(a);!(u=d()).done;){var m=u.value;if(!m.count&&m.amount&&(m.count=m.amount),0!=m.count){var l=m.count*(t.multi||1);c=e.stackSize||r.data.item[m.name].stack_size,t.force&&(c*=2);for(var f=o(e.items,m.name,c),v=0,h=void 0;!(t.stackLimit&&v>=t.stackLimit)&&f>-1&&l>0;)void 0===e.items[f]?(h=Math.min(c,l),e.items[f]={name:m.name,count:h},l-=h):e.items[f].restricted&&e.items[f].name!=m.name||(l-=h=Math.min(c-e.items[f].count,l),e.items[f].name=m.name,e.items[f].count+=h,0===h&&v++),l&&(f=o(e.items,m.name,c,f+1));-1!=f||e.maxStacks&&!(e.items.length<e.maxStacks)||t.stackLimit&&v>=t.stackLimit||(e.items.push({name:m.name,count:l}),l=0),l>0&&(
//! Theoretically, this would be the case of all existing inventory
//!   is different than the item or full
t.stackLimit?s.push({name:m.name,count:m.count-l}):s.push({name:m.name,count:l}))}}n.part=s,n.complete=0==s.length}
//! This performs multiple loops, could be optimized later
)),r.a.addOperation("inventory.consume",(function(e,t,n,r){var a=t.itemStacks;Array.isArray(a)||(a=[a]);var u=[],s=t.multi||1;if(s>1&&(s=a.reduce((function(t,n){if(-1==t)return-1;var i=r.processTEMP(e,"inventory.total",{name:n.name});return i<n.count?-1:Math.min(t,Math.floor(i/n.count))}),s))<1&&!t.partial)n._result=!1;else{for(var c,d=i(a);!(c=d()).done;){var m=c.value;!m.count&&m.amount&&(m.count=m.amount);for(var l=o(e.items,m.name),f=m.count*s;l>-1&&f;){var v=Math.min(e.items[l].count,f);e.items[l].count-=v,f-=v,l=o(e.items,m.name)}if(u.push({name:m.name,count:m.count*s-f}),f&&!t.partial)
//! we have failed to consume all
return r.processTEMP(e,"inventory.add",{itemStacks:u}),n._result=!1,n}n._result=t.partial&&u||s||!0}})),r.a.addOperation("inventory.total",u),r.a.CCC_addUtility("inventory.total",u)}}]);
//# sourceMappingURL=app~b07b7304.5b1cdb29cd3668a04c19.bundle.map