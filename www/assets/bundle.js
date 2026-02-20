/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={46(t,e,i){var o;o=function(){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=20)}([function(t,e){var o={};t.exports=o,function(){o._baseDelta=1e3/60,o._nextId=0,o._seed=0,o._nowStartTime=+new Date,o._warnedOnce={},o._decomp=null,o.extend=function(t,e){var i,r;"boolean"==typeof e?(i=2,r=e):(i=1,r=!0);for(var s=i;s<arguments.length;s++){var n=arguments[s];if(n)for(var a in n)r&&n[a]&&n[a].constructor===Object?t[a]&&t[a].constructor!==Object?t[a]=n[a]:(t[a]=t[a]||{},o.extend(t[a],r,n[a])):t[a]=n[a]}return t},o.clone=function(t,e){return o.extend({},e,t)},o.keys=function(t){if(Object.keys)return Object.keys(t);var e=[];for(var i in t)e.push(i);return e},o.values=function(t){var e=[];if(Object.keys){for(var i=Object.keys(t),o=0;o<i.length;o++)e.push(t[i[o]]);return e}for(var r in t)e.push(t[r]);return e},o.get=function(t,e,i,o){e=e.split(".").slice(i,o);for(var r=0;r<e.length;r+=1)t=t[e[r]];return t},o.set=function(t,e,i,r,s){var n=e.split(".").slice(r,s);return o.get(t,e,0,-1)[n[n.length-1]]=i,i},o.shuffle=function(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(o.random()*(e+1)),r=t[e];t[e]=t[i],t[i]=r}return t},o.choose=function(t){return t[Math.floor(o.random()*t.length)]},o.isElement=function(t){return"undefined"!=typeof HTMLElement?t instanceof HTMLElement:!!(t&&t.nodeType&&t.nodeName)},o.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},o.isFunction=function(t){return"function"==typeof t},o.isPlainObject=function(t){return"object"==typeof t&&t.constructor===Object},o.isString=function(t){return"[object String]"===toString.call(t)},o.clamp=function(t,e,i){return t<e?e:t>i?i:t},o.sign=function(t){return t<0?-1:1},o.now=function(){if("undefined"!=typeof window&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-o._nowStartTime},o.random=function(e,i){return i=void 0!==i?i:1,(e=void 0!==e?e:0)+t()*(i-e)};var t=function(){return o._seed=(9301*o._seed+49297)%233280,o._seed/233280};o.colorToNumber=function(t){return 3==(t=t.replace("#","")).length&&(t=t.charAt(0)+t.charAt(0)+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)),parseInt(t,16)},o.logLevel=1,o.log=function(){console&&o.logLevel>0&&o.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},o.info=function(){console&&o.logLevel>0&&o.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},o.warn=function(){console&&o.logLevel>0&&o.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},o.warnOnce=function(){var t=Array.prototype.slice.call(arguments).join(" ");o._warnedOnce[t]||(o.warn(t),o._warnedOnce[t]=!0)},o.deprecated=function(t,e,i){t[e]=o.chain(function(){o.warnOnce("🔅 deprecated 🔅",i)},t[e])},o.nextId=function(){return o._nextId++},o.indexOf=function(t,e){if(t.indexOf)return t.indexOf(e);for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1},o.map=function(t,e){if(t.map)return t.map(e);for(var i=[],o=0;o<t.length;o+=1)i.push(e(t[o]));return i},o.topologicalSort=function(t){var e=[],i=[],r=[];for(var s in t)i[s]||r[s]||o._topologicalSort(s,i,r,t,e);return e},o._topologicalSort=function(t,e,i,r,s){var n=r[t]||[];i[t]=!0;for(var a=0;a<n.length;a+=1){var l=n[a];i[l]||e[l]||o._topologicalSort(l,e,i,r,s)}i[t]=!1,e[t]=!0,s.push(t)},o.chain=function(){for(var t=[],e=0;e<arguments.length;e+=1){var i=arguments[e];i._chained?t.push.apply(t,i._chained):t.push(i)}var o=function(){for(var e,i=new Array(arguments.length),o=0,r=arguments.length;o<r;o++)i[o]=arguments[o];for(o=0;o<t.length;o+=1){var s=t[o].apply(e,i);void 0!==s&&(e=s)}return e};return o._chained=t,o},o.chainPathBefore=function(t,e,i){return o.set(t,e,o.chain(i,o.get(t,e)))},o.chainPathAfter=function(t,e,i){return o.set(t,e,o.chain(o.get(t,e),i))},o.setDecomp=function(t){o._decomp=t},o.getDecomp=function(){var t=o._decomp;try{t||"undefined"==typeof window||(t=window.decomp),t||void 0===i.g||(t=i.g.decomp)}catch(e){t=null}return t}}()},function(t,e){var i={};t.exports=i,i.create=function(t){var e={min:{x:0,y:0},max:{x:0,y:0}};return t&&i.update(e,t),e},i.update=function(t,e,i){t.min.x=1/0,t.max.x=-1/0,t.min.y=1/0,t.max.y=-1/0;for(var o=0;o<e.length;o++){var r=e[o];r.x>t.max.x&&(t.max.x=r.x),r.x<t.min.x&&(t.min.x=r.x),r.y>t.max.y&&(t.max.y=r.y),r.y<t.min.y&&(t.min.y=r.y)}i&&(i.x>0?t.max.x+=i.x:t.min.x+=i.x,i.y>0?t.max.y+=i.y:t.min.y+=i.y)},i.contains=function(t,e){return e.x>=t.min.x&&e.x<=t.max.x&&e.y>=t.min.y&&e.y<=t.max.y},i.overlaps=function(t,e){return t.min.x<=e.max.x&&t.max.x>=e.min.x&&t.max.y>=e.min.y&&t.min.y<=e.max.y},i.translate=function(t,e){t.min.x+=e.x,t.max.x+=e.x,t.min.y+=e.y,t.max.y+=e.y},i.shift=function(t,e){var i=t.max.x-t.min.x,o=t.max.y-t.min.y;t.min.x=e.x,t.max.x=e.x+i,t.min.y=e.y,t.max.y=e.y+o}},function(t,e){var i={};t.exports=i,i.create=function(t,e){return{x:t||0,y:e||0}},i.clone=function(t){return{x:t.x,y:t.y}},i.magnitude=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},i.magnitudeSquared=function(t){return t.x*t.x+t.y*t.y},i.rotate=function(t,e,i){var o=Math.cos(e),r=Math.sin(e);i||(i={});var s=t.x*o-t.y*r;return i.y=t.x*r+t.y*o,i.x=s,i},i.rotateAbout=function(t,e,i,o){var r=Math.cos(e),s=Math.sin(e);o||(o={});var n=i.x+((t.x-i.x)*r-(t.y-i.y)*s);return o.y=i.y+((t.x-i.x)*s+(t.y-i.y)*r),o.x=n,o},i.normalise=function(t){var e=i.magnitude(t);return 0===e?{x:0,y:0}:{x:t.x/e,y:t.y/e}},i.dot=function(t,e){return t.x*e.x+t.y*e.y},i.cross=function(t,e){return t.x*e.y-t.y*e.x},i.cross3=function(t,e,i){return(e.x-t.x)*(i.y-t.y)-(e.y-t.y)*(i.x-t.x)},i.add=function(t,e,i){return i||(i={}),i.x=t.x+e.x,i.y=t.y+e.y,i},i.sub=function(t,e,i){return i||(i={}),i.x=t.x-e.x,i.y=t.y-e.y,i},i.mult=function(t,e){return{x:t.x*e,y:t.y*e}},i.div=function(t,e){return{x:t.x/e,y:t.y/e}},i.perp=function(t,e){return{x:(e=!0===e?-1:1)*-t.y,y:e*t.x}},i.neg=function(t){return{x:-t.x,y:-t.y}},i.angle=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)},i._temp=[i.create(),i.create(),i.create(),i.create(),i.create(),i.create()]},function(t,e,i){var o={};t.exports=o;var r=i(2),s=i(0);o.create=function(t,e){for(var i=[],o=0;o<t.length;o++){var r=t[o],s={x:r.x,y:r.y,index:o,body:e,isInternal:!1};i.push(s)}return i},o.fromPath=function(t,e){var i=[];return t.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,function(t,e,o){i.push({x:parseFloat(e),y:parseFloat(o)})}),o.create(i,e)},o.centre=function(t){for(var e,i,s,n=o.area(t,!0),a={x:0,y:0},l=0;l<t.length;l++)s=(l+1)%t.length,e=r.cross(t[l],t[s]),i=r.mult(r.add(t[l],t[s]),e),a=r.add(a,i);return r.div(a,6*n)},o.mean=function(t){for(var e={x:0,y:0},i=0;i<t.length;i++)e.x+=t[i].x,e.y+=t[i].y;return r.div(e,t.length)},o.area=function(t,e){for(var i=0,o=t.length-1,r=0;r<t.length;r++)i+=(t[o].x-t[r].x)*(t[o].y+t[r].y),o=r;return e?i/2:Math.abs(i)/2},o.inertia=function(t,e){for(var i,o,s=0,n=0,a=t,l=0;l<a.length;l++)o=(l+1)%a.length,s+=(i=Math.abs(r.cross(a[o],a[l])))*(r.dot(a[o],a[o])+r.dot(a[o],a[l])+r.dot(a[l],a[l])),n+=i;return e/6*(s/n)},o.translate=function(t,e,i){i=void 0!==i?i:1;var o,r=t.length,s=e.x*i,n=e.y*i;for(o=0;o<r;o++)t[o].x+=s,t[o].y+=n;return t},o.rotate=function(t,e,i){if(0!==e){var o,r,s,n,a=Math.cos(e),l=Math.sin(e),c=i.x,d=i.y,h=t.length;for(n=0;n<h;n++)r=(o=t[n]).x-c,s=o.y-d,o.x=c+(r*a-s*l),o.y=d+(r*l+s*a);return t}},o.contains=function(t,e){for(var i,o=e.x,r=e.y,s=t.length,n=t[s-1],a=0;a<s;a++){if(i=t[a],(o-n.x)*(i.y-n.y)+(r-n.y)*(n.x-i.x)>0)return!1;n=i}return!0},o.scale=function(t,e,i,s){if(1===e&&1===i)return t;var n,a;s=s||o.centre(t);for(var l=0;l<t.length;l++)n=t[l],a=r.sub(n,s),t[l].x=s.x+a.x*e,t[l].y=s.y+a.y*i;return t},o.chamfer=function(t,e,i,o,n){e="number"==typeof e?[e]:e||[8],i=void 0!==i?i:-1,o=o||2,n=n||14;for(var a=[],l=0;l<t.length;l++){var c=t[l-1>=0?l-1:t.length-1],d=t[l],h=t[(l+1)%t.length],u=e[l<e.length?l:e.length-1];if(0!==u){var p=r.normalise({x:d.y-c.y,y:c.x-d.x}),f=r.normalise({x:h.y-d.y,y:d.x-h.x}),m=Math.sqrt(2*Math.pow(u,2)),g=r.mult(s.clone(p),u),b=r.normalise(r.mult(r.add(p,f),.5)),v=r.sub(d,r.mult(b,m)),y=i;-1===i&&(y=1.75*Math.pow(u,.32)),(y=s.clamp(y,o,n))%2==1&&(y+=1);for(var x=Math.acos(r.dot(p,f))/y,_=0;_<y;_++)a.push(r.add(r.rotate(g,x*_),v))}else a.push(d)}return a},o.clockwiseSort=function(t){var e=o.mean(t);return t.sort(function(t,i){return r.angle(e,t)-r.angle(e,i)}),t},o.isConvex=function(t){var e,i,o,r,s=0,n=t.length;if(n<3)return null;for(e=0;e<n;e++)if(o=(e+2)%n,r=(t[i=(e+1)%n].x-t[e].x)*(t[o].y-t[i].y),(r-=(t[i].y-t[e].y)*(t[o].x-t[i].x))<0?s|=1:r>0&&(s|=2),3===s)return!1;return 0!==s||null},o.hull=function(t){var e,i,o=[],s=[];for((t=t.slice(0)).sort(function(t,e){var i=t.x-e.x;return 0!==i?i:t.y-e.y}),i=0;i<t.length;i+=1){for(e=t[i];s.length>=2&&r.cross3(s[s.length-2],s[s.length-1],e)<=0;)s.pop();s.push(e)}for(i=t.length-1;i>=0;i-=1){for(e=t[i];o.length>=2&&r.cross3(o[o.length-2],o[o.length-1],e)<=0;)o.pop();o.push(e)}return o.pop(),s.pop(),o.concat(s)}},function(t,e,i){var o={};t.exports=o;var r=i(3),s=i(2),n=i(7),a=i(0),l=i(1),c=i(11);!function(){o._timeCorrection=!0,o._inertiaScale=4,o._nextCollidingGroupId=1,o._nextNonCollidingGroupId=-1,o._nextCategory=1,o._baseDelta=1e3/60,o.create=function(e){var i={id:a.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:r.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:1e3/60,_original:null},o=a.extend(i,e);return t(o,e),o},o.nextGroup=function(t){return t?o._nextNonCollidingGroupId--:o._nextCollidingGroupId++},o.nextCategory=function(){return o._nextCategory=o._nextCategory<<1,o._nextCategory};var t=function(t,e){e=e||{},o.set(t,{bounds:t.bounds||l.create(t.vertices),positionPrev:t.positionPrev||s.clone(t.position),anglePrev:t.anglePrev||t.angle,vertices:t.vertices,parts:t.parts||[t],isStatic:t.isStatic,isSleeping:t.isSleeping,parent:t.parent||t}),r.rotate(t.vertices,t.angle,t.position),c.rotate(t.axes,t.angle),l.update(t.bounds,t.vertices,t.velocity),o.set(t,{axes:e.axes||t.axes,area:e.area||t.area,mass:e.mass||t.mass,inertia:e.inertia||t.inertia});var i=t.isStatic?"#14151f":a.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),n=t.isStatic?"#555":"#ccc",d=t.isStatic&&null===t.render.fillStyle?1:0;t.render.fillStyle=t.render.fillStyle||i,t.render.strokeStyle=t.render.strokeStyle||n,t.render.lineWidth=t.render.lineWidth||d,t.render.sprite.xOffset+=-(t.bounds.min.x-t.position.x)/(t.bounds.max.x-t.bounds.min.x),t.render.sprite.yOffset+=-(t.bounds.min.y-t.position.y)/(t.bounds.max.y-t.bounds.min.y)};o.set=function(t,e,i){var r;for(r in"string"==typeof e&&(r=e,(e={})[r]=i),e)if(Object.prototype.hasOwnProperty.call(e,r))switch(i=e[r],r){case"isStatic":o.setStatic(t,i);break;case"isSleeping":n.set(t,i);break;case"mass":o.setMass(t,i);break;case"density":o.setDensity(t,i);break;case"inertia":o.setInertia(t,i);break;case"vertices":o.setVertices(t,i);break;case"position":o.setPosition(t,i);break;case"angle":o.setAngle(t,i);break;case"velocity":o.setVelocity(t,i);break;case"angularVelocity":o.setAngularVelocity(t,i);break;case"speed":o.setSpeed(t,i);break;case"angularSpeed":o.setAngularSpeed(t,i);break;case"parts":o.setParts(t,i);break;case"centre":o.setCentre(t,i);break;default:t[r]=i}},o.setStatic=function(t,e){for(var i=0;i<t.parts.length;i++){var o=t.parts[i];e?(o.isStatic||(o._original={restitution:o.restitution,friction:o.friction,mass:o.mass,inertia:o.inertia,density:o.density,inverseMass:o.inverseMass,inverseInertia:o.inverseInertia}),o.restitution=0,o.friction=1,o.mass=o.inertia=o.density=1/0,o.inverseMass=o.inverseInertia=0,o.positionPrev.x=o.position.x,o.positionPrev.y=o.position.y,o.anglePrev=o.angle,o.angularVelocity=0,o.speed=0,o.angularSpeed=0,o.motion=0):o._original&&(o.restitution=o._original.restitution,o.friction=o._original.friction,o.mass=o._original.mass,o.inertia=o._original.inertia,o.density=o._original.density,o.inverseMass=o._original.inverseMass,o.inverseInertia=o._original.inverseInertia,o._original=null),o.isStatic=e}},o.setMass=function(t,e){var i=t.inertia/(t.mass/6);t.inertia=i*(e/6),t.inverseInertia=1/t.inertia,t.mass=e,t.inverseMass=1/t.mass,t.density=t.mass/t.area},o.setDensity=function(t,e){o.setMass(t,e*t.area),t.density=e},o.setInertia=function(t,e){t.inertia=e,t.inverseInertia=1/t.inertia},o.setVertices=function(t,e){e[0].body===t?t.vertices=e:t.vertices=r.create(e,t),t.axes=c.fromVertices(t.vertices),t.area=r.area(t.vertices),o.setMass(t,t.density*t.area);var i=r.centre(t.vertices);r.translate(t.vertices,i,-1),o.setInertia(t,o._inertiaScale*r.inertia(t.vertices,t.mass)),r.translate(t.vertices,t.position),l.update(t.bounds,t.vertices,t.velocity)},o.setParts=function(t,e,i){var s;for(e=e.slice(0),t.parts.length=0,t.parts.push(t),t.parent=t,s=0;s<e.length;s++){var n=e[s];n!==t&&(n.parent=t,t.parts.push(n))}if(1!==t.parts.length){if(i=void 0===i||i){var a=[];for(s=0;s<e.length;s++)a=a.concat(e[s].vertices);r.clockwiseSort(a);var l=r.hull(a),c=r.centre(l);o.setVertices(t,l),r.translate(t.vertices,c)}var d=o._totalProperties(t);t.area=d.area,t.parent=t,t.position.x=d.centre.x,t.position.y=d.centre.y,t.positionPrev.x=d.centre.x,t.positionPrev.y=d.centre.y,o.setMass(t,d.mass),o.setInertia(t,d.inertia),o.setPosition(t,d.centre)}},o.setCentre=function(t,e,i){i?(t.positionPrev.x+=e.x,t.positionPrev.y+=e.y,t.position.x+=e.x,t.position.y+=e.y):(t.positionPrev.x=e.x-(t.position.x-t.positionPrev.x),t.positionPrev.y=e.y-(t.position.y-t.positionPrev.y),t.position.x=e.x,t.position.y=e.y)},o.setPosition=function(t,e,i){var o=s.sub(e,t.position);i?(t.positionPrev.x=t.position.x,t.positionPrev.y=t.position.y,t.velocity.x=o.x,t.velocity.y=o.y,t.speed=s.magnitude(o)):(t.positionPrev.x+=o.x,t.positionPrev.y+=o.y);for(var n=0;n<t.parts.length;n++){var a=t.parts[n];a.position.x+=o.x,a.position.y+=o.y,r.translate(a.vertices,o),l.update(a.bounds,a.vertices,t.velocity)}},o.setAngle=function(t,e,i){var o=e-t.angle;i?(t.anglePrev=t.angle,t.angularVelocity=o,t.angularSpeed=Math.abs(o)):t.anglePrev+=o;for(var n=0;n<t.parts.length;n++){var a=t.parts[n];a.angle+=o,r.rotate(a.vertices,o,t.position),c.rotate(a.axes,o),l.update(a.bounds,a.vertices,t.velocity),n>0&&s.rotateAbout(a.position,o,t.position,a.position)}},o.setVelocity=function(t,e){var i=t.deltaTime/o._baseDelta;t.positionPrev.x=t.position.x-e.x*i,t.positionPrev.y=t.position.y-e.y*i,t.velocity.x=(t.position.x-t.positionPrev.x)/i,t.velocity.y=(t.position.y-t.positionPrev.y)/i,t.speed=s.magnitude(t.velocity)},o.getVelocity=function(t){var e=o._baseDelta/t.deltaTime;return{x:(t.position.x-t.positionPrev.x)*e,y:(t.position.y-t.positionPrev.y)*e}},o.getSpeed=function(t){return s.magnitude(o.getVelocity(t))},o.setSpeed=function(t,e){o.setVelocity(t,s.mult(s.normalise(o.getVelocity(t)),e))},o.setAngularVelocity=function(t,e){var i=t.deltaTime/o._baseDelta;t.anglePrev=t.angle-e*i,t.angularVelocity=(t.angle-t.anglePrev)/i,t.angularSpeed=Math.abs(t.angularVelocity)},o.getAngularVelocity=function(t){return(t.angle-t.anglePrev)*o._baseDelta/t.deltaTime},o.getAngularSpeed=function(t){return Math.abs(o.getAngularVelocity(t))},o.setAngularSpeed=function(t,e){o.setAngularVelocity(t,a.sign(o.getAngularVelocity(t))*e)},o.translate=function(t,e,i){o.setPosition(t,s.add(t.position,e),i)},o.rotate=function(t,e,i,r){if(i){var s=Math.cos(e),n=Math.sin(e),a=t.position.x-i.x,l=t.position.y-i.y;o.setPosition(t,{x:i.x+(a*s-l*n),y:i.y+(a*n+l*s)},r),o.setAngle(t,t.angle+e,r)}else o.setAngle(t,t.angle+e,r)},o.scale=function(t,e,i,s){var n=0,a=0;s=s||t.position;for(var d=0;d<t.parts.length;d++){var h=t.parts[d];r.scale(h.vertices,e,i,s),h.axes=c.fromVertices(h.vertices),h.area=r.area(h.vertices),o.setMass(h,t.density*h.area),r.translate(h.vertices,{x:-h.position.x,y:-h.position.y}),o.setInertia(h,o._inertiaScale*r.inertia(h.vertices,h.mass)),r.translate(h.vertices,{x:h.position.x,y:h.position.y}),d>0&&(n+=h.area,a+=h.inertia),h.position.x=s.x+(h.position.x-s.x)*e,h.position.y=s.y+(h.position.y-s.y)*i,l.update(h.bounds,h.vertices,t.velocity)}t.parts.length>1&&(t.area=n,t.isStatic||(o.setMass(t,t.density*n),o.setInertia(t,a))),t.circleRadius&&(e===i?t.circleRadius*=e:t.circleRadius=null)},o.update=function(t,e){var i=(e=(void 0!==e?e:1e3/60)*t.timeScale)*e,n=o._timeCorrection?e/(t.deltaTime||e):1,d=1-t.frictionAir*(e/a._baseDelta),h=(t.position.x-t.positionPrev.x)*n,u=(t.position.y-t.positionPrev.y)*n;t.velocity.x=h*d+t.force.x/t.mass*i,t.velocity.y=u*d+t.force.y/t.mass*i,t.positionPrev.x=t.position.x,t.positionPrev.y=t.position.y,t.position.x+=t.velocity.x,t.position.y+=t.velocity.y,t.deltaTime=e,t.angularVelocity=(t.angle-t.anglePrev)*d*n+t.torque/t.inertia*i,t.anglePrev=t.angle,t.angle+=t.angularVelocity;for(var p=0;p<t.parts.length;p++){var f=t.parts[p];r.translate(f.vertices,t.velocity),p>0&&(f.position.x+=t.velocity.x,f.position.y+=t.velocity.y),0!==t.angularVelocity&&(r.rotate(f.vertices,t.angularVelocity,t.position),c.rotate(f.axes,t.angularVelocity),p>0&&s.rotateAbout(f.position,t.angularVelocity,t.position,f.position)),l.update(f.bounds,f.vertices,t.velocity)}},o.updateVelocities=function(t){var e=o._baseDelta/t.deltaTime,i=t.velocity;i.x=(t.position.x-t.positionPrev.x)*e,i.y=(t.position.y-t.positionPrev.y)*e,t.speed=Math.sqrt(i.x*i.x+i.y*i.y),t.angularVelocity=(t.angle-t.anglePrev)*e,t.angularSpeed=Math.abs(t.angularVelocity)},o.applyForce=function(t,e,i){var o=e.x-t.position.x,r=e.y-t.position.y;t.force.x+=i.x,t.force.y+=i.y,t.torque+=o*i.y-r*i.x},o._totalProperties=function(t){for(var e={mass:0,area:0,inertia:0,centre:{x:0,y:0}},i=1===t.parts.length?0:1;i<t.parts.length;i++){var o=t.parts[i],r=o.mass!==1/0?o.mass:1;e.mass+=r,e.area+=o.area,e.inertia+=o.inertia,e.centre=s.add(e.centre,s.mult(o.position,r))}return e.centre=s.div(e.centre,e.mass),e}}()},function(t,e,i){var o={};t.exports=o;var r=i(0);o.on=function(t,e,i){for(var o,r=e.split(" "),s=0;s<r.length;s++)o=r[s],t.events=t.events||{},t.events[o]=t.events[o]||[],t.events[o].push(i);return i},o.off=function(t,e,i){if(e){"function"==typeof e&&(i=e,e=r.keys(t.events).join(" "));for(var o=e.split(" "),s=0;s<o.length;s++){var n=t.events[o[s]],a=[];if(i&&n)for(var l=0;l<n.length;l++)n[l]!==i&&a.push(n[l]);t.events[o[s]]=a}}else t.events={}},o.trigger=function(t,e,i){var o,s,n,a,l=t.events;if(l&&r.keys(l).length>0){i||(i={}),o=e.split(" ");for(var c=0;c<o.length;c++)if(n=l[s=o[c]]){(a=r.clone(i,!1)).name=s,a.source=t;for(var d=0;d<n.length;d++)n[d].apply(t,[a])}}}},function(t,e,i){var o={};t.exports=o;var r=i(5),s=i(0),n=i(1),a=i(4);o.create=function(t){return s.extend({id:s.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},t)},o.setModified=function(t,e,i,r){if(t.isModified=e,e&&t.cache&&(t.cache.allBodies=null,t.cache.allConstraints=null,t.cache.allComposites=null),i&&t.parent&&o.setModified(t.parent,e,i,r),r)for(var s=0;s<t.composites.length;s++){var n=t.composites[s];o.setModified(n,e,i,r)}},o.add=function(t,e){var i=[].concat(e);r.trigger(t,"beforeAdd",{object:e});for(var n=0;n<i.length;n++){var a=i[n];switch(a.type){case"body":if(a.parent!==a){s.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}o.addBody(t,a);break;case"constraint":o.addConstraint(t,a);break;case"composite":o.addComposite(t,a);break;case"mouseConstraint":o.addConstraint(t,a.constraint)}}return r.trigger(t,"afterAdd",{object:e}),t},o.remove=function(t,e,i){var s=[].concat(e);r.trigger(t,"beforeRemove",{object:e});for(var n=0;n<s.length;n++){var a=s[n];switch(a.type){case"body":o.removeBody(t,a,i);break;case"constraint":o.removeConstraint(t,a,i);break;case"composite":o.removeComposite(t,a,i);break;case"mouseConstraint":o.removeConstraint(t,a.constraint)}}return r.trigger(t,"afterRemove",{object:e}),t},o.addComposite=function(t,e){return t.composites.push(e),e.parent=t,o.setModified(t,!0,!0,!1),t},o.removeComposite=function(t,e,i){var r=s.indexOf(t.composites,e);if(-1!==r){var n=o.allBodies(e);o.removeCompositeAt(t,r);for(var a=0;a<n.length;a++)n[a].sleepCounter=0}if(i)for(a=0;a<t.composites.length;a++)o.removeComposite(t.composites[a],e,!0);return t},o.removeCompositeAt=function(t,e){return t.composites.splice(e,1),o.setModified(t,!0,!0,!1),t},o.addBody=function(t,e){return t.bodies.push(e),o.setModified(t,!0,!0,!1),t},o.removeBody=function(t,e,i){var r=s.indexOf(t.bodies,e);if(-1!==r&&(o.removeBodyAt(t,r),e.sleepCounter=0),i)for(var n=0;n<t.composites.length;n++)o.removeBody(t.composites[n],e,!0);return t},o.removeBodyAt=function(t,e){return t.bodies.splice(e,1),o.setModified(t,!0,!0,!1),t},o.addConstraint=function(t,e){return t.constraints.push(e),o.setModified(t,!0,!0,!1),t},o.removeConstraint=function(t,e,i){var r=s.indexOf(t.constraints,e);if(-1!==r&&o.removeConstraintAt(t,r),i)for(var n=0;n<t.composites.length;n++)o.removeConstraint(t.composites[n],e,!0);return t},o.removeConstraintAt=function(t,e){return t.constraints.splice(e,1),o.setModified(t,!0,!0,!1),t},o.clear=function(t,e,i){if(i)for(var r=0;r<t.composites.length;r++)o.clear(t.composites[r],e,!0);return e?t.bodies=t.bodies.filter(function(t){return t.isStatic}):t.bodies.length=0,t.constraints.length=0,t.composites.length=0,o.setModified(t,!0,!0,!1),t},o.allBodies=function(t){if(t.cache&&t.cache.allBodies)return t.cache.allBodies;for(var e=[].concat(t.bodies),i=0;i<t.composites.length;i++)e=e.concat(o.allBodies(t.composites[i]));return t.cache&&(t.cache.allBodies=e),e},o.allConstraints=function(t){if(t.cache&&t.cache.allConstraints)return t.cache.allConstraints;for(var e=[].concat(t.constraints),i=0;i<t.composites.length;i++)e=e.concat(o.allConstraints(t.composites[i]));return t.cache&&(t.cache.allConstraints=e),e},o.allComposites=function(t){if(t.cache&&t.cache.allComposites)return t.cache.allComposites;for(var e=[].concat(t.composites),i=0;i<t.composites.length;i++)e=e.concat(o.allComposites(t.composites[i]));return t.cache&&(t.cache.allComposites=e),e},o.get=function(t,e,i){var r,s;switch(i){case"body":r=o.allBodies(t);break;case"constraint":r=o.allConstraints(t);break;case"composite":r=o.allComposites(t).concat(t)}return r?0===(s=r.filter(function(t){return t.id.toString()===e.toString()})).length?null:s[0]:null},o.move=function(t,e,i){return o.remove(t,e),o.add(i,e),t},o.rebase=function(t){for(var e=o.allBodies(t).concat(o.allConstraints(t)).concat(o.allComposites(t)),i=0;i<e.length;i++)e[i].id=s.nextId();return t},o.translate=function(t,e,i){for(var r=i?o.allBodies(t):t.bodies,s=0;s<r.length;s++)a.translate(r[s],e);return t},o.rotate=function(t,e,i,r){for(var s=Math.cos(e),n=Math.sin(e),l=r?o.allBodies(t):t.bodies,c=0;c<l.length;c++){var d=l[c],h=d.position.x-i.x,u=d.position.y-i.y;a.setPosition(d,{x:i.x+(h*s-u*n),y:i.y+(h*n+u*s)}),a.rotate(d,e)}return t},o.scale=function(t,e,i,r,s){for(var n=s?o.allBodies(t):t.bodies,l=0;l<n.length;l++){var c=n[l],d=c.position.x-r.x,h=c.position.y-r.y;a.setPosition(c,{x:r.x+d*e,y:r.y+h*i}),a.scale(c,e,i)}return t},o.bounds=function(t){for(var e=o.allBodies(t),i=[],r=0;r<e.length;r+=1){var s=e[r];i.push(s.bounds.min,s.bounds.max)}return n.create(i)}},function(t,e,i){var o={};t.exports=o;var r=i(4),s=i(5),n=i(0);o._motionWakeThreshold=.18,o._motionSleepThreshold=.08,o._minBias=.9,o.update=function(t,e){for(var i=e/n._baseDelta,s=o._motionSleepThreshold,a=0;a<t.length;a++){var l=t[a],c=r.getSpeed(l),d=r.getAngularSpeed(l),h=c*c+d*d;if(0===l.force.x&&0===l.force.y){var u=Math.min(l.motion,h),p=Math.max(l.motion,h);l.motion=o._minBias*u+(1-o._minBias)*p,l.sleepThreshold>0&&l.motion<s?(l.sleepCounter+=1,l.sleepCounter>=l.sleepThreshold/i&&o.set(l,!0)):l.sleepCounter>0&&(l.sleepCounter-=1)}else o.set(l,!1)}},o.afterCollisions=function(t){for(var e=o._motionSleepThreshold,i=0;i<t.length;i++){var r=t[i];if(r.isActive){var s=r.collision,n=s.bodyA.parent,a=s.bodyB.parent;if(!(n.isSleeping&&a.isSleeping||n.isStatic||a.isStatic)&&(n.isSleeping||a.isSleeping)){var l=n.isSleeping&&!n.isStatic?n:a,c=l===n?a:n;!l.isStatic&&c.motion>e&&o.set(l,!1)}}}},o.set=function(t,e){var i=t.isSleeping;e?(t.isSleeping=!0,t.sleepCounter=t.sleepThreshold,t.positionImpulse.x=0,t.positionImpulse.y=0,t.positionPrev.x=t.position.x,t.positionPrev.y=t.position.y,t.anglePrev=t.angle,t.speed=0,t.angularSpeed=0,t.motion=0,i||s.trigger(t,"sleepStart")):(t.isSleeping=!1,t.sleepCounter=0,i&&s.trigger(t,"sleepEnd"))}},function(t,e,i){var o={};t.exports=o;var r,s,n,a=i(3),l=i(9);r=[],s={overlap:0,axis:null},n={overlap:0,axis:null},o.create=function(t,e){return{pair:null,collided:!1,bodyA:t,bodyB:e,parentA:t.parent,parentB:e.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},o.collides=function(t,e,i){if(o._overlapAxes(s,t.vertices,e.vertices,t.axes),s.overlap<=0)return null;if(o._overlapAxes(n,e.vertices,t.vertices,e.axes),n.overlap<=0)return null;var r,c,d=i&&i.table[l.id(t,e)];d?r=d.collision:((r=o.create(t,e)).collided=!0,r.bodyA=t.id<e.id?t:e,r.bodyB=t.id<e.id?e:t,r.parentA=r.bodyA.parent,r.parentB=r.bodyB.parent),t=r.bodyA,e=r.bodyB,c=s.overlap<n.overlap?s:n;var h=r.normal,u=r.tangent,p=r.penetration,f=r.supports,m=c.overlap,g=c.axis,b=g.x,v=g.y;b*(e.position.x-t.position.x)+v*(e.position.y-t.position.y)>=0&&(b=-b,v=-v),h.x=b,h.y=v,u.x=-v,u.y=b,p.x=b*m,p.y=v*m,r.depth=m;var y=o._findSupports(t,e,h,1),x=0;if(a.contains(t.vertices,y[0])&&(f[x++]=y[0]),a.contains(t.vertices,y[1])&&(f[x++]=y[1]),x<2){var _=o._findSupports(e,t,h,-1);a.contains(e.vertices,_[0])&&(f[x++]=_[0]),x<2&&a.contains(e.vertices,_[1])&&(f[x++]=_[1])}return 0===x&&(f[x++]=y[0]),r.supportCount=x,r},o._overlapAxes=function(t,e,i,o){var r,s,n,a,l,c,d=e.length,h=i.length,u=e[0].x,p=e[0].y,f=i[0].x,m=i[0].y,g=o.length,b=Number.MAX_VALUE,v=0;for(l=0;l<g;l++){var y=o[l],x=y.x,_=y.y,w=u*x+p*_,k=f*x+m*_,C=w,S=k;for(c=1;c<d;c+=1)(a=e[c].x*x+e[c].y*_)>C?C=a:a<w&&(w=a);for(c=1;c<h;c+=1)(a=i[c].x*x+i[c].y*_)>S?S=a:a<k&&(k=a);if((r=(s=C-k)<(n=S-w)?s:n)<b&&(b=r,v=l,r<=0))break}t.axis=o[v],t.overlap=b},o._findSupports=function(t,e,i,o){var s,n,a,l=e.vertices,c=l.length,d=t.position.x,h=t.position.y,u=i.x*o,p=i.y*o,f=l[0],m=f,g=u*(d-m.x)+p*(h-m.y);for(a=1;a<c;a+=1)(n=u*(d-(m=l[a]).x)+p*(h-m.y))<g&&(g=n,f=m);return g=u*(d-(s=l[(c+f.index-1)%c]).x)+p*(h-s.y),u*(d-(m=l[(f.index+1)%c]).x)+p*(h-m.y)<g?(r[0]=f,r[1]=m,r):(r[0]=f,r[1]=s,r)}},function(t,e,i){var o={};t.exports=o;var r=i(16);o.create=function(t,e){var i=t.bodyA,s=t.bodyB,n={id:o.id(i,s),bodyA:i,bodyB:s,collision:t,contacts:[r.create(),r.create()],contactCount:0,separation:0,isActive:!0,isSensor:i.isSensor||s.isSensor,timeCreated:e,timeUpdated:e,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return o.update(n,t,e),n},o.update=function(t,e,i){var o=e.supports,r=e.supportCount,s=t.contacts,n=e.parentA,a=e.parentB;t.isActive=!0,t.timeUpdated=i,t.collision=e,t.separation=e.depth,t.inverseMass=n.inverseMass+a.inverseMass,t.friction=n.friction<a.friction?n.friction:a.friction,t.frictionStatic=n.frictionStatic>a.frictionStatic?n.frictionStatic:a.frictionStatic,t.restitution=n.restitution>a.restitution?n.restitution:a.restitution,t.slop=n.slop>a.slop?n.slop:a.slop,t.contactCount=r,e.pair=t;var l=o[0],c=s[0],d=o[1],h=s[1];h.vertex!==l&&c.vertex!==d||(s[1]=c,s[0]=c=h,h=s[1]),c.vertex=l,h.vertex=d},o.setActive=function(t,e,i){e?(t.isActive=!0,t.timeUpdated=i):(t.isActive=!1,t.contactCount=0)},o.id=function(t,e){return t.id<e.id?t.id.toString(36)+":"+e.id.toString(36):e.id.toString(36)+":"+t.id.toString(36)}},function(t,e,i){var o={};t.exports=o;var r=i(3),s=i(2),n=i(7),a=i(1),l=i(11),c=i(0);o._warming=.4,o._torqueDampen=1,o._minLength=1e-6,o.create=function(t){var e=t;e.bodyA&&!e.pointA&&(e.pointA={x:0,y:0}),e.bodyB&&!e.pointB&&(e.pointB={x:0,y:0});var i=e.bodyA?s.add(e.bodyA.position,e.pointA):e.pointA,o=e.bodyB?s.add(e.bodyB.position,e.pointB):e.pointB,r=s.magnitude(s.sub(i,o));e.length=void 0!==e.length?e.length:r,e.id=e.id||c.nextId(),e.label=e.label||"Constraint",e.type="constraint",e.stiffness=e.stiffness||(e.length>0?1:.7),e.damping=e.damping||0,e.angularStiffness=e.angularStiffness||0,e.angleA=e.bodyA?e.bodyA.angle:e.angleA,e.angleB=e.bodyB?e.bodyB.angle:e.angleB,e.plugin={};var n={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return 0===e.length&&e.stiffness>.1?(n.type="pin",n.anchors=!1):e.stiffness<.9&&(n.type="spring"),e.render=c.extend(n,e.render),e},o.preSolveAll=function(t){for(var e=0;e<t.length;e+=1){var i=t[e],o=i.constraintImpulse;i.isStatic||0===o.x&&0===o.y&&0===o.angle||(i.position.x+=o.x,i.position.y+=o.y,i.angle+=o.angle)}},o.solveAll=function(t,e){for(var i=c.clamp(e/c._baseDelta,0,1),r=0;r<t.length;r+=1){var s=t[r],n=!s.bodyA||s.bodyA&&s.bodyA.isStatic,a=!s.bodyB||s.bodyB&&s.bodyB.isStatic;(n||a)&&o.solve(t[r],i)}for(r=0;r<t.length;r+=1)n=!(s=t[r]).bodyA||s.bodyA&&s.bodyA.isStatic,a=!s.bodyB||s.bodyB&&s.bodyB.isStatic,n||a||o.solve(t[r],i)},o.solve=function(t,e){var i=t.bodyA,r=t.bodyB,n=t.pointA,a=t.pointB;if(i||r){i&&!i.isStatic&&(s.rotate(n,i.angle-t.angleA,n),t.angleA=i.angle),r&&!r.isStatic&&(s.rotate(a,r.angle-t.angleB,a),t.angleB=r.angle);var l=n,c=a;if(i&&(l=s.add(i.position,n)),r&&(c=s.add(r.position,a)),l&&c){var d=s.sub(l,c),h=s.magnitude(d);h<o._minLength&&(h=o._minLength);var u,p,f,m,g,b=(h-t.length)/h,v=t.stiffness>=1||0===t.length?t.stiffness*e:t.stiffness*e*e,y=t.damping*e,x=s.mult(d,b*v),_=(i?i.inverseMass:0)+(r?r.inverseMass:0),w=_+((i?i.inverseInertia:0)+(r?r.inverseInertia:0));if(y>0){var k=s.create();f=s.div(d,h),g=s.sub(r&&s.sub(r.position,r.positionPrev)||k,i&&s.sub(i.position,i.positionPrev)||k),m=s.dot(f,g)}i&&!i.isStatic&&(p=i.inverseMass/_,i.constraintImpulse.x-=x.x*p,i.constraintImpulse.y-=x.y*p,i.position.x-=x.x*p,i.position.y-=x.y*p,y>0&&(i.positionPrev.x-=y*f.x*m*p,i.positionPrev.y-=y*f.y*m*p),u=s.cross(n,x)/w*o._torqueDampen*i.inverseInertia*(1-t.angularStiffness),i.constraintImpulse.angle-=u,i.angle-=u),r&&!r.isStatic&&(p=r.inverseMass/_,r.constraintImpulse.x+=x.x*p,r.constraintImpulse.y+=x.y*p,r.position.x+=x.x*p,r.position.y+=x.y*p,y>0&&(r.positionPrev.x+=y*f.x*m*p,r.positionPrev.y+=y*f.y*m*p),u=s.cross(a,x)/w*o._torqueDampen*r.inverseInertia*(1-t.angularStiffness),r.constraintImpulse.angle+=u,r.angle+=u)}}},o.postSolveAll=function(t){for(var e=0;e<t.length;e++){var i=t[e],c=i.constraintImpulse;if(!(i.isStatic||0===c.x&&0===c.y&&0===c.angle)){n.set(i,!1);for(var d=0;d<i.parts.length;d++){var h=i.parts[d];r.translate(h.vertices,c),d>0&&(h.position.x+=c.x,h.position.y+=c.y),0!==c.angle&&(r.rotate(h.vertices,c.angle,i.position),l.rotate(h.axes,c.angle),d>0&&s.rotateAbout(h.position,c.angle,i.position,h.position)),a.update(h.bounds,h.vertices,i.velocity)}c.angle*=o._warming,c.x*=o._warming,c.y*=o._warming}}},o.pointAWorld=function(t){return{x:(t.bodyA?t.bodyA.position.x:0)+(t.pointA?t.pointA.x:0),y:(t.bodyA?t.bodyA.position.y:0)+(t.pointA?t.pointA.y:0)}},o.pointBWorld=function(t){return{x:(t.bodyB?t.bodyB.position.x:0)+(t.pointB?t.pointB.x:0),y:(t.bodyB?t.bodyB.position.y:0)+(t.pointB?t.pointB.y:0)}},o.currentLength=function(t){var e=(t.bodyA?t.bodyA.position.x:0)+(t.pointA?t.pointA.x:0),i=(t.bodyA?t.bodyA.position.y:0)+(t.pointA?t.pointA.y:0),o=e-((t.bodyB?t.bodyB.position.x:0)+(t.pointB?t.pointB.x:0)),r=i-((t.bodyB?t.bodyB.position.y:0)+(t.pointB?t.pointB.y:0));return Math.sqrt(o*o+r*r)}},function(t,e,i){var o={};t.exports=o;var r=i(2),s=i(0);o.fromVertices=function(t){for(var e={},i=0;i<t.length;i++){var o=(i+1)%t.length,n=r.normalise({x:t[o].y-t[i].y,y:t[i].x-t[o].x}),a=0===n.y?1/0:n.x/n.y;e[a=a.toFixed(3).toString()]=n}return s.values(e)},o.rotate=function(t,e){if(0!==e)for(var i=Math.cos(e),o=Math.sin(e),r=0;r<t.length;r++){var s,n=t[r];s=n.x*i-n.y*o,n.y=n.x*o+n.y*i,n.x=s}}},function(t,e,i){var o={};t.exports=o;var r=i(3),s=i(0),n=i(4),a=i(1),l=i(2);o.rectangle=function(t,e,i,o,a){a=a||{};var l={label:"Rectangle Body",position:{x:t,y:e},vertices:r.fromPath("L 0 0 L "+i+" 0 L "+i+" "+o+" L 0 "+o)};if(a.chamfer){var c=a.chamfer;l.vertices=r.chamfer(l.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete a.chamfer}return n.create(s.extend({},l,a))},o.trapezoid=function(t,e,i,o,a,l){l=l||{},a>=1&&s.warn("Bodies.trapezoid: slope parameter must be < 1.");var c,d=i*(a*=.5),h=d+(1-2*a)*i,u=h+d;c=a<.5?"L 0 0 L "+d+" "+-o+" L "+h+" "+-o+" L "+u+" 0":"L 0 0 L "+h+" "+-o+" L "+u+" 0";var p={label:"Trapezoid Body",position:{x:t,y:e},vertices:r.fromPath(c)};if(l.chamfer){var f=l.chamfer;p.vertices=r.chamfer(p.vertices,f.radius,f.quality,f.qualityMin,f.qualityMax),delete l.chamfer}return n.create(s.extend({},p,l))},o.circle=function(t,e,i,r,n){r=r||{};var a={label:"Circle Body",circleRadius:i};n=n||25;var l=Math.ceil(Math.max(10,Math.min(n,i)));return l%2==1&&(l+=1),o.polygon(t,e,l,i,s.extend({},a,r))},o.polygon=function(t,e,i,a,l){if(l=l||{},i<3)return o.circle(t,e,a,l);for(var c=2*Math.PI/i,d="",h=.5*c,u=0;u<i;u+=1){var p=h+u*c,f=Math.cos(p)*a,m=Math.sin(p)*a;d+="L "+f.toFixed(3)+" "+m.toFixed(3)+" "}var g={label:"Polygon Body",position:{x:t,y:e},vertices:r.fromPath(d)};if(l.chamfer){var b=l.chamfer;g.vertices=r.chamfer(g.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete l.chamfer}return n.create(s.extend({},g,l))},o.fromVertices=function(t,e,i,o,c,d,h,u){var p,f,m,g,b,v,y,x,_,w,k=s.getDecomp();for(p=Boolean(k&&k.quickDecomp),o=o||{},m=[],c=void 0!==c&&c,d=void 0!==d?d:.01,h=void 0!==h?h:10,u=void 0!==u?u:.01,s.isArray(i[0])||(i=[i]),_=0;_<i.length;_+=1)if(b=i[_],!(g=r.isConvex(b))&&!p&&s.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),g||!p)b=g?r.clockwiseSort(b):r.hull(b),m.push({position:{x:t,y:e},vertices:b});else{var C=b.map(function(t){return[t.x,t.y]});k.makeCCW(C),!1!==d&&k.removeCollinearPoints(C,d),!1!==u&&k.removeDuplicatePoints&&k.removeDuplicatePoints(C,u);var S=k.quickDecomp(C);for(v=0;v<S.length;v++){var $=S[v].map(function(t){return{x:t[0],y:t[1]}});h>0&&r.area($)<h||m.push({position:r.centre($),vertices:$})}}for(v=0;v<m.length;v++)m[v]=n.create(s.extend(m[v],o));if(c)for(v=0;v<m.length;v++){var A=m[v];for(y=v+1;y<m.length;y++){var z=m[y];if(a.overlaps(A.bounds,z.bounds)){var E=A.vertices,T=z.vertices;for(x=0;x<A.vertices.length;x++)for(w=0;w<z.vertices.length;w++){var P=l.magnitudeSquared(l.sub(E[(x+1)%E.length],T[w])),M=l.magnitudeSquared(l.sub(E[x],T[(w+1)%T.length]));P<5&&M<5&&(E[x].isInternal=!0,T[w].isInternal=!0)}}}}return m.length>1?(f=n.create(s.extend({parts:m.slice(0)},o)),n.setPosition(f,{x:t,y:e}),f):m[0]}},function(t,e,i){var o={};t.exports=o;var r=i(0),s=i(8);o.create=function(t){return r.extend({bodies:[],collisions:[],pairs:null},t)},o.setBodies=function(t,e){t.bodies=e.slice(0)},o.clear=function(t){t.bodies=[],t.collisions=[]},o.collisions=function(t){var e,i,r=t.pairs,n=t.bodies,a=n.length,l=o.canCollide,c=s.collides,d=t.collisions,h=0;for(n.sort(o._compareBoundsX),e=0;e<a;e++){var u=n[e],p=u.bounds,f=u.bounds.max.x,m=u.bounds.max.y,g=u.bounds.min.y,b=u.isStatic||u.isSleeping,v=u.parts.length,y=1===v;for(i=e+1;i<a;i++){var x=n[i];if((z=x.bounds).min.x>f)break;if(!(m<z.min.y||g>z.max.y)&&(!b||!x.isStatic&&!x.isSleeping)&&l(u.collisionFilter,x.collisionFilter)){var _=x.parts.length;if(y&&1===_)($=c(u,x,r))&&(d[h++]=$);else for(var w=_>1?1:0,k=v>1?1:0;k<v;k++)for(var C=u.parts[k],S=(p=C.bounds,w);S<_;S++){var $,A=x.parts[S],z=A.bounds;p.min.x>z.max.x||p.max.x<z.min.x||p.max.y<z.min.y||p.min.y>z.max.y||($=c(C,A,r))&&(d[h++]=$)}}}}return d.length!==h&&(d.length=h),d},o.canCollide=function(t,e){return t.group===e.group&&0!==t.group?t.group>0:0!==(t.mask&e.category)&&0!==(e.mask&t.category)},o._compareBoundsX=function(t,e){return t.bounds.min.x-e.bounds.min.x}},function(t,e,i){var o={};t.exports=o;var r=i(0);o.create=function(t){var e={};return t||r.log("Mouse.create: element was undefined, defaulting to document.body","warn"),e.element=t||document.body,e.absolute={x:0,y:0},e.position={x:0,y:0},e.mousedownPosition={x:0,y:0},e.mouseupPosition={x:0,y:0},e.offset={x:0,y:0},e.scale={x:1,y:1},e.wheelDelta=0,e.button=-1,e.pixelRatio=parseInt(e.element.getAttribute("data-pixel-ratio"),10)||1,e.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},e.mousemove=function(t){var i=o._getRelativeMousePosition(t,e.element,e.pixelRatio);t.changedTouches&&(e.button=0,t.preventDefault()),e.absolute.x=i.x,e.absolute.y=i.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y,e.sourceEvents.mousemove=t},e.mousedown=function(t){var i=o._getRelativeMousePosition(t,e.element,e.pixelRatio);t.changedTouches?(e.button=0,t.preventDefault()):e.button=t.button,e.absolute.x=i.x,e.absolute.y=i.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y,e.mousedownPosition.x=e.position.x,e.mousedownPosition.y=e.position.y,e.sourceEvents.mousedown=t},e.mouseup=function(t){var i=o._getRelativeMousePosition(t,e.element,e.pixelRatio);t.changedTouches&&t.preventDefault(),e.button=-1,e.absolute.x=i.x,e.absolute.y=i.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y,e.mouseupPosition.x=e.position.x,e.mouseupPosition.y=e.position.y,e.sourceEvents.mouseup=t},e.mousewheel=function(t){e.wheelDelta=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail)),t.preventDefault(),e.sourceEvents.mousewheel=t},o.setElement(e,e.element),e},o.setElement=function(t,e){t.element=e,e.addEventListener("mousemove",t.mousemove,{passive:!0}),e.addEventListener("mousedown",t.mousedown,{passive:!0}),e.addEventListener("mouseup",t.mouseup,{passive:!0}),e.addEventListener("wheel",t.mousewheel,{passive:!1}),e.addEventListener("touchmove",t.mousemove,{passive:!1}),e.addEventListener("touchstart",t.mousedown,{passive:!1}),e.addEventListener("touchend",t.mouseup,{passive:!1})},o.clearSourceEvents=function(t){t.sourceEvents.mousemove=null,t.sourceEvents.mousedown=null,t.sourceEvents.mouseup=null,t.sourceEvents.mousewheel=null,t.wheelDelta=0},o.setOffset=function(t,e){t.offset.x=e.x,t.offset.y=e.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y},o.setScale=function(t,e){t.scale.x=e.x,t.scale.y=e.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y},o._getRelativeMousePosition=function(t,e,i){var o,r,s=e.getBoundingClientRect(),n=document.documentElement||document.body.parentNode||document.body,a=void 0!==window.pageXOffset?window.pageXOffset:n.scrollLeft,l=void 0!==window.pageYOffset?window.pageYOffset:n.scrollTop,c=t.changedTouches;return c?(o=c[0].pageX-s.left-a,r=c[0].pageY-s.top-l):(o=t.pageX-s.left-a,r=t.pageY-s.top-l),{x:o/(e.clientWidth/(e.width||e.clientWidth)*i),y:r/(e.clientHeight/(e.height||e.clientHeight)*i)}}},function(t,e,i){var o={};t.exports=o;var r=i(0);o._registry={},o.register=function(t){if(o.isPlugin(t)||r.warn("Plugin.register:",o.toString(t),"does not implement all required fields."),t.name in o._registry){var e=o._registry[t.name],i=o.versionParse(t.version).number,s=o.versionParse(e.version).number;i>s?(r.warn("Plugin.register:",o.toString(e),"was upgraded to",o.toString(t)),o._registry[t.name]=t):i<s?r.warn("Plugin.register:",o.toString(e),"can not be downgraded to",o.toString(t)):t!==e&&r.warn("Plugin.register:",o.toString(t),"is already registered to different plugin object")}else o._registry[t.name]=t;return t},o.resolve=function(t){return o._registry[o.dependencyParse(t).name]},o.toString=function(t){return"string"==typeof t?t:(t.name||"anonymous")+"@"+(t.version||t.range||"0.0.0")},o.isPlugin=function(t){return t&&t.name&&t.version&&t.install},o.isUsed=function(t,e){return t.used.indexOf(e)>-1},o.isFor=function(t,e){var i=t.for&&o.dependencyParse(t.for);return!t.for||e.name===i.name&&o.versionSatisfies(e.version,i.range)},o.use=function(t,e){if(t.uses=(t.uses||[]).concat(e||[]),0!==t.uses.length){for(var i=o.dependencies(t),s=r.topologicalSort(i),n=[],a=0;a<s.length;a+=1)if(s[a]!==t.name){var l=o.resolve(s[a]);l?o.isUsed(t,l.name)||(o.isFor(l,t)||(r.warn("Plugin.use:",o.toString(l),"is for",l.for,"but installed on",o.toString(t)+"."),l._warned=!0),l.install?l.install(t):(r.warn("Plugin.use:",o.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(n.push("🔶 "+o.toString(l)),delete l._warned):n.push("✅ "+o.toString(l)),t.used.push(l.name)):n.push("❌ "+s[a])}n.length>0&&r.info(n.join("  "))}else r.warn("Plugin.use:",o.toString(t),"does not specify any dependencies to install.")},o.dependencies=function(t,e){var i=o.dependencyParse(t),s=i.name;if(!(s in(e=e||{}))){t=o.resolve(t)||t,e[s]=r.map(t.uses||[],function(e){o.isPlugin(e)&&o.register(e);var s=o.dependencyParse(e),n=o.resolve(e);return n&&!o.versionSatisfies(n.version,s.range)?(r.warn("Plugin.dependencies:",o.toString(n),"does not satisfy",o.toString(s),"used by",o.toString(i)+"."),n._warned=!0,t._warned=!0):n||(r.warn("Plugin.dependencies:",o.toString(e),"used by",o.toString(i),"could not be resolved."),t._warned=!0),s.name});for(var n=0;n<e[s].length;n+=1)o.dependencies(e[s][n],e);return e}},o.dependencyParse=function(t){return r.isString(t)?(/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(t)||r.warn("Plugin.dependencyParse:",t,"is not a valid dependency string."),{name:t.split("@")[0],range:t.split("@")[1]||"*"}):{name:t.name,range:t.range||t.version}},o.versionParse=function(t){var e=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;e.test(t)||r.warn("Plugin.versionParse:",t,"is not a valid version or range.");var i=e.exec(t),o=Number(i[4]),s=Number(i[5]),n=Number(i[6]);return{isRange:Boolean(i[1]||i[2]),version:i[3],range:t,operator:i[1]||i[2]||"",major:o,minor:s,patch:n,parts:[o,s,n],prerelease:i[7],number:1e8*o+1e4*s+n}},o.versionSatisfies=function(t,e){e=e||"*";var i=o.versionParse(e),r=o.versionParse(t);if(i.isRange){if("*"===i.operator||"*"===t)return!0;if(">"===i.operator)return r.number>i.number;if(">="===i.operator)return r.number>=i.number;if("~"===i.operator)return r.major===i.major&&r.minor===i.minor&&r.patch>=i.patch;if("^"===i.operator)return i.major>0?r.major===i.major&&r.number>=i.number:i.minor>0?r.minor===i.minor&&r.patch>=i.patch:r.patch===i.patch}return t===e||"*"===t}},function(t,e){var i={};t.exports=i,i.create=function(t){return{vertex:t,normalImpulse:0,tangentImpulse:0}}},function(t,e,i){var o={};t.exports=o;var r=i(7),s=i(18),n=i(13),a=i(19),l=i(5),c=i(6),d=i(10),h=i(0),u=i(4);o._deltaMax=1e3/60,o.create=function(t){t=t||{};var e=h.extend({positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},t);return e.world=t.world||c.create({label:"World"}),e.pairs=t.pairs||a.create(),e.detector=t.detector||n.create(),e.detector.pairs=e.pairs,e.grid={buckets:[]},e.world.gravity=e.gravity,e.broadphase=e.grid,e.metrics={},e},o.update=function(t,e){var i,u=h.now(),p=t.world,f=t.detector,m=t.pairs,g=t.timing,b=g.timestamp;e>o._deltaMax&&h.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",o._deltaMax.toFixed(3),"ms."),e=void 0!==e?e:h._baseDelta,e*=g.timeScale,g.timestamp+=e,g.lastDelta=e;var v={timestamp:g.timestamp,delta:e};l.trigger(t,"beforeUpdate",v);var y=c.allBodies(p),x=c.allConstraints(p);for(p.isModified&&(n.setBodies(f,y),c.setModified(p,!1,!1,!0)),t.enableSleeping&&r.update(y,e),o._bodiesApplyGravity(y,t.gravity),e>0&&o._bodiesUpdate(y,e),l.trigger(t,"beforeSolve",v),d.preSolveAll(y),i=0;i<t.constraintIterations;i++)d.solveAll(x,e);d.postSolveAll(y);var _=n.collisions(f);a.update(m,_,b),t.enableSleeping&&r.afterCollisions(m.list),m.collisionStart.length>0&&l.trigger(t,"collisionStart",{pairs:m.collisionStart,timestamp:g.timestamp,delta:e});var w=h.clamp(20/t.positionIterations,0,1);for(s.preSolvePosition(m.list),i=0;i<t.positionIterations;i++)s.solvePosition(m.list,e,w);for(s.postSolvePosition(y),d.preSolveAll(y),i=0;i<t.constraintIterations;i++)d.solveAll(x,e);for(d.postSolveAll(y),s.preSolveVelocity(m.list),i=0;i<t.velocityIterations;i++)s.solveVelocity(m.list,e);return o._bodiesUpdateVelocities(y),m.collisionActive.length>0&&l.trigger(t,"collisionActive",{pairs:m.collisionActive,timestamp:g.timestamp,delta:e}),m.collisionEnd.length>0&&l.trigger(t,"collisionEnd",{pairs:m.collisionEnd,timestamp:g.timestamp,delta:e}),o._bodiesClearForces(y),l.trigger(t,"afterUpdate",v),t.timing.lastElapsed=h.now()-u,t},o.merge=function(t,e){if(h.extend(t,e),e.world){t.world=e.world,o.clear(t);for(var i=c.allBodies(t.world),s=0;s<i.length;s++){var n=i[s];r.set(n,!1),n.id=h.nextId()}}},o.clear=function(t){a.clear(t.pairs),n.clear(t.detector)},o._bodiesClearForces=function(t){for(var e=t.length,i=0;i<e;i++){var o=t[i];o.force.x=0,o.force.y=0,o.torque=0}},o._bodiesApplyGravity=function(t,e){var i=void 0!==e.scale?e.scale:.001,o=t.length;if((0!==e.x||0!==e.y)&&0!==i)for(var r=0;r<o;r++){var s=t[r];s.isStatic||s.isSleeping||(s.force.y+=s.mass*e.y*i,s.force.x+=s.mass*e.x*i)}},o._bodiesUpdate=function(t,e){for(var i=t.length,o=0;o<i;o++){var r=t[o];r.isStatic||r.isSleeping||u.update(r,e)}},o._bodiesUpdateVelocities=function(t){for(var e=t.length,i=0;i<e;i++)u.updateVelocities(t[i])}},function(t,e,i){var o={};t.exports=o;var r=i(3),s=i(0),n=i(1);o._restingThresh=2,o._restingThreshTangent=Math.sqrt(6),o._positionDampen=.9,o._positionWarming=.8,o._frictionNormalMultiplier=5,o._frictionMaxStatic=Number.MAX_VALUE,o.preSolvePosition=function(t){var e,i,o,r=t.length;for(e=0;e<r;e++)(i=t[e]).isActive&&(o=i.contactCount,i.collision.parentA.totalContacts+=o,i.collision.parentB.totalContacts+=o)},o.solvePosition=function(t,e,i){var r,n,a,l,c,d,h,u,p=o._positionDampen*(i||1),f=s.clamp(e/s._baseDelta,0,1),m=t.length;for(r=0;r<m;r++)(n=t[r]).isActive&&!n.isSensor&&(l=(a=n.collision).parentA,c=a.parentB,d=a.normal,n.separation=a.depth+d.x*(c.positionImpulse.x-l.positionImpulse.x)+d.y*(c.positionImpulse.y-l.positionImpulse.y));for(r=0;r<m;r++)(n=t[r]).isActive&&!n.isSensor&&(l=(a=n.collision).parentA,c=a.parentB,d=a.normal,u=n.separation-n.slop*f,(l.isStatic||c.isStatic)&&(u*=2),l.isStatic||l.isSleeping||(h=p/l.totalContacts,l.positionImpulse.x+=d.x*u*h,l.positionImpulse.y+=d.y*u*h),c.isStatic||c.isSleeping||(h=p/c.totalContacts,c.positionImpulse.x-=d.x*u*h,c.positionImpulse.y-=d.y*u*h))},o.postSolvePosition=function(t){for(var e=o._positionWarming,i=t.length,s=r.translate,a=n.update,l=0;l<i;l++){var c=t[l],d=c.positionImpulse,h=d.x,u=d.y,p=c.velocity;if(c.totalContacts=0,0!==h||0!==u){for(var f=0;f<c.parts.length;f++){var m=c.parts[f];s(m.vertices,d),a(m.bounds,m.vertices,p),m.position.x+=h,m.position.y+=u}c.positionPrev.x+=h,c.positionPrev.y+=u,h*p.x+u*p.y<0?(d.x=0,d.y=0):(d.x*=e,d.y*=e)}}},o.preSolveVelocity=function(t){var e,i,o=t.length;for(e=0;e<o;e++){var r=t[e];if(r.isActive&&!r.isSensor){var s=r.contacts,n=r.contactCount,a=r.collision,l=a.parentA,c=a.parentB,d=a.normal,h=a.tangent;for(i=0;i<n;i++){var u=s[i],p=u.vertex,f=u.normalImpulse,m=u.tangentImpulse;if(0!==f||0!==m){var g=d.x*f+h.x*m,b=d.y*f+h.y*m;l.isStatic||l.isSleeping||(l.positionPrev.x+=g*l.inverseMass,l.positionPrev.y+=b*l.inverseMass,l.anglePrev+=l.inverseInertia*((p.x-l.position.x)*b-(p.y-l.position.y)*g)),c.isStatic||c.isSleeping||(c.positionPrev.x-=g*c.inverseMass,c.positionPrev.y-=b*c.inverseMass,c.anglePrev-=c.inverseInertia*((p.x-c.position.x)*b-(p.y-c.position.y)*g))}}}}},o.solveVelocity=function(t,e){var i,r,n,a,l=e/s._baseDelta,c=l*l*l,d=-o._restingThresh*l,h=o._restingThreshTangent,u=o._frictionNormalMultiplier*l,p=o._frictionMaxStatic,f=t.length;for(n=0;n<f;n++){var m=t[n];if(m.isActive&&!m.isSensor){var g=m.collision,b=g.parentA,v=g.parentB,y=g.normal.x,x=g.normal.y,_=g.tangent.x,w=g.tangent.y,k=m.inverseMass,C=m.friction*m.frictionStatic*u,S=m.contacts,$=m.contactCount,A=1/$,z=b.position.x-b.positionPrev.x,E=b.position.y-b.positionPrev.y,T=b.angle-b.anglePrev,P=v.position.x-v.positionPrev.x,M=v.position.y-v.positionPrev.y,I=v.angle-v.anglePrev;for(a=0;a<$;a++){var O=S[a],D=O.vertex,L=D.x-b.position.x,B=D.y-b.position.y,R=D.x-v.position.x,F=D.y-v.position.y,V=z-B*T-(P-F*I),N=E+L*T-(M+R*I),H=y*V+x*N,U=_*V+w*N,j=m.separation+H,q=Math.min(j,1),W=(q=j<0?0:q)*C;U<-W||U>W?(r=U>0?U:-U,(i=m.friction*(U>0?1:-1)*c)<-r?i=-r:i>r&&(i=r)):(i=U,r=p);var K=L*x-B*y,X=R*x-F*y,G=A/(k+b.inverseInertia*K*K+v.inverseInertia*X*X),Y=(1+m.restitution)*H*G;if(i*=G,H<d)O.normalImpulse=0;else{var Z=O.normalImpulse;O.normalImpulse+=Y,O.normalImpulse>0&&(O.normalImpulse=0),Y=O.normalImpulse-Z}if(U<-h||U>h)O.tangentImpulse=0;else{var Q=O.tangentImpulse;O.tangentImpulse+=i,O.tangentImpulse<-r&&(O.tangentImpulse=-r),O.tangentImpulse>r&&(O.tangentImpulse=r),i=O.tangentImpulse-Q}var J=y*Y+_*i,tt=x*Y+w*i;b.isStatic||b.isSleeping||(b.positionPrev.x+=J*b.inverseMass,b.positionPrev.y+=tt*b.inverseMass,b.anglePrev+=(L*tt-B*J)*b.inverseInertia),v.isStatic||v.isSleeping||(v.positionPrev.x-=J*v.inverseMass,v.positionPrev.y-=tt*v.inverseMass,v.anglePrev-=(R*tt-F*J)*v.inverseInertia)}}}}},function(t,e,i){var o={};t.exports=o;var r=i(9),s=i(0);o.create=function(t){return s.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},t)},o.update=function(t,e,i){var o,s,n,a=r.update,l=r.create,c=r.setActive,d=t.table,h=t.list,u=h.length,p=u,f=t.collisionStart,m=t.collisionEnd,g=t.collisionActive,b=e.length,v=0,y=0,x=0;for(n=0;n<b;n++)(s=(o=e[n]).pair)?(s.isActive&&(g[x++]=s),a(s,o,i)):(d[(s=l(o,i)).id]=s,f[v++]=s,h[p++]=s);for(p=0,u=h.length,n=0;n<u;n++)(s=h[n]).timeUpdated>=i?h[p++]=s:(c(s,!1,i),s.collision.bodyA.sleepCounter>0&&s.collision.bodyB.sleepCounter>0?h[p++]=s:(m[y++]=s,delete d[s.id]));h.length!==p&&(h.length=p),f.length!==v&&(f.length=v),m.length!==y&&(m.length=y),g.length!==x&&(g.length=x)},o.clear=function(t){return t.table={},t.list.length=0,t.collisionStart.length=0,t.collisionActive.length=0,t.collisionEnd.length=0,t}},function(t,e,i){var o=t.exports=i(21);o.Axes=i(11),o.Bodies=i(12),o.Body=i(4),o.Bounds=i(1),o.Collision=i(8),o.Common=i(0),o.Composite=i(6),o.Composites=i(22),o.Constraint=i(10),o.Contact=i(16),o.Detector=i(13),o.Engine=i(17),o.Events=i(5),o.Grid=i(23),o.Mouse=i(14),o.MouseConstraint=i(24),o.Pair=i(9),o.Pairs=i(19),o.Plugin=i(15),o.Query=i(25),o.Render=i(26),o.Resolver=i(18),o.Runner=i(27),o.SAT=i(28),o.Sleeping=i(7),o.Svg=i(29),o.Vector=i(2),o.Vertices=i(3),o.World=i(30),o.Engine.run=o.Runner.run,o.Common.deprecated(o.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(t,e,i){var o={};t.exports=o;var r=i(15),s=i(0);o.name="matter-js",o.version="0.20.0",o.uses=[],o.used=[],o.use=function(){r.use(o,Array.prototype.slice.call(arguments))},o.before=function(t,e){return t=t.replace(/^Matter./,""),s.chainPathBefore(o,t,e)},o.after=function(t,e){return t=t.replace(/^Matter./,""),s.chainPathAfter(o,t,e)}},function(t,e,i){var o={};t.exports=o;var r=i(6),s=i(10),n=i(0),a=i(4),l=i(12),c=n.deprecated;o.stack=function(t,e,i,o,s,n,l){for(var c,d=r.create({label:"Stack"}),h=t,u=e,p=0,f=0;f<o;f++){for(var m=0,g=0;g<i;g++){var b=l(h,u,g,f,c,p);if(b){var v=b.bounds.max.y-b.bounds.min.y,y=b.bounds.max.x-b.bounds.min.x;v>m&&(m=v),a.translate(b,{x:.5*y,y:.5*v}),h=b.bounds.max.x+s,r.addBody(d,b),c=b,p+=1}else h+=s}u+=m+n,h=t}return d},o.chain=function(t,e,i,o,a,l){for(var c=t.bodies,d=1;d<c.length;d++){var h=c[d-1],u=c[d],p=h.bounds.max.y-h.bounds.min.y,f=h.bounds.max.x-h.bounds.min.x,m=u.bounds.max.y-u.bounds.min.y,g={bodyA:h,pointA:{x:f*e,y:p*i},bodyB:u,pointB:{x:(u.bounds.max.x-u.bounds.min.x)*o,y:m*a}},b=n.extend(g,l);r.addConstraint(t,s.create(b))}return t.label+=" Chain",t},o.mesh=function(t,e,i,o,a){var l,c,d,h,u,p=t.bodies;for(l=0;l<i;l++){for(c=1;c<e;c++)d=p[c-1+l*e],h=p[c+l*e],r.addConstraint(t,s.create(n.extend({bodyA:d,bodyB:h},a)));if(l>0)for(c=0;c<e;c++)d=p[c+(l-1)*e],h=p[c+l*e],r.addConstraint(t,s.create(n.extend({bodyA:d,bodyB:h},a))),o&&c>0&&(u=p[c-1+(l-1)*e],r.addConstraint(t,s.create(n.extend({bodyA:u,bodyB:h},a)))),o&&c<e-1&&(u=p[c+1+(l-1)*e],r.addConstraint(t,s.create(n.extend({bodyA:u,bodyB:h},a))))}return t.label+=" Mesh",t},o.pyramid=function(t,e,i,r,s,n,l){return o.stack(t,e,i,r,s,n,function(e,o,n,c,d,h){var u=Math.min(r,Math.ceil(i/2)),p=d?d.bounds.max.x-d.bounds.min.x:0;if(!(c>u||n<(c=u-c)||n>i-1-c))return 1===h&&a.translate(d,{x:(n+(i%2==1?1:-1))*p,y:0}),l(t+(d?n*p:0)+n*s,o,n,c,d,h)})},o.newtonsCradle=function(t,e,i,o,n){for(var a=r.create({label:"Newtons Cradle"}),c=0;c<i;c++){var d=l.circle(t+c*(1.9*o),e+n,o,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),h=s.create({pointA:{x:t+c*(1.9*o),y:e},bodyB:d});r.addBody(a,d),r.addConstraint(a,h)}return a},c(o,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),o.car=function(t,e,i,o,n){var c=a.nextGroup(!0),d=.5*-i+20,h=.5*i-20,u=r.create({label:"Car"}),p=l.rectangle(t,e,i,o,{collisionFilter:{group:c},chamfer:{radius:.5*o},density:2e-4}),f=l.circle(t+d,e+0,n,{collisionFilter:{group:c},friction:.8}),m=l.circle(t+h,e+0,n,{collisionFilter:{group:c},friction:.8}),g=s.create({bodyB:p,pointB:{x:d,y:0},bodyA:f,stiffness:1,length:0}),b=s.create({bodyB:p,pointB:{x:h,y:0},bodyA:m,stiffness:1,length:0});return r.addBody(u,p),r.addBody(u,f),r.addBody(u,m),r.addConstraint(u,g),r.addConstraint(u,b),u},c(o,"car","Composites.car ➤ moved to car example"),o.softBody=function(t,e,i,r,s,a,c,d,h,u){h=n.extend({inertia:1/0},h),u=n.extend({stiffness:.2,render:{type:"line",anchors:!1}},u);var p=o.stack(t,e,i,r,s,a,function(t,e){return l.circle(t,e,d,h)});return o.mesh(p,i,r,c,u),p.label="Soft Body",p},c(o,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")},function(t,e,i){var o={};t.exports=o;var r=i(9),s=i(0),n=s.deprecated;o.create=function(t){return s.extend({buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48},t)},o.update=function(t,e,i,r){var s,n,a,l,c,d=i.world,h=t.buckets,u=!1;for(s=0;s<e.length;s++){var p=e[s];if((!p.isSleeping||r)&&(!d.bounds||!(p.bounds.max.x<d.bounds.min.x||p.bounds.min.x>d.bounds.max.x||p.bounds.max.y<d.bounds.min.y||p.bounds.min.y>d.bounds.max.y))){var f=o._getRegion(t,p);if(!p.region||f.id!==p.region.id||r){p.region&&!r||(p.region=f);var m=o._regionUnion(f,p.region);for(n=m.startCol;n<=m.endCol;n++)for(a=m.startRow;a<=m.endRow;a++){l=h[c=o._getBucketId(n,a)];var g=n>=f.startCol&&n<=f.endCol&&a>=f.startRow&&a<=f.endRow,b=n>=p.region.startCol&&n<=p.region.endCol&&a>=p.region.startRow&&a<=p.region.endRow;!g&&b&&b&&l&&o._bucketRemoveBody(t,l,p),(p.region===f||g&&!b||r)&&(l||(l=o._createBucket(h,c)),o._bucketAddBody(t,l,p))}p.region=f,u=!0}}}u&&(t.pairsList=o._createActivePairsList(t))},n(o,"update","Grid.update ➤ replaced by Matter.Detector"),o.clear=function(t){t.buckets={},t.pairs={},t.pairsList=[]},n(o,"clear","Grid.clear ➤ replaced by Matter.Detector"),o._regionUnion=function(t,e){var i=Math.min(t.startCol,e.startCol),r=Math.max(t.endCol,e.endCol),s=Math.min(t.startRow,e.startRow),n=Math.max(t.endRow,e.endRow);return o._createRegion(i,r,s,n)},o._getRegion=function(t,e){var i=e.bounds,r=Math.floor(i.min.x/t.bucketWidth),s=Math.floor(i.max.x/t.bucketWidth),n=Math.floor(i.min.y/t.bucketHeight),a=Math.floor(i.max.y/t.bucketHeight);return o._createRegion(r,s,n,a)},o._createRegion=function(t,e,i,o){return{id:t+","+e+","+i+","+o,startCol:t,endCol:e,startRow:i,endRow:o}},o._getBucketId=function(t,e){return"C"+t+"R"+e},o._createBucket=function(t,e){return t[e]=[]},o._bucketAddBody=function(t,e,i){var o,s=t.pairs,n=r.id,a=e.length;for(o=0;o<a;o++){var l=e[o];if(!(i.id===l.id||i.isStatic&&l.isStatic)){var c=n(i,l),d=s[c];d?d[2]+=1:s[c]=[i,l,1]}}e.push(i)},o._bucketRemoveBody=function(t,e,i){var o,n=t.pairs,a=r.id;e.splice(s.indexOf(e,i),1);var l=e.length;for(o=0;o<l;o++){var c=n[a(i,e[o])];c&&(c[2]-=1)}},o._createActivePairsList=function(t){var e,i,o=t.pairs,r=s.keys(o),n=r.length,a=[];for(i=0;i<n;i++)(e=o[r[i]])[2]>0?a.push(e):delete o[r[i]];return a}},function(t,e,i){var o={};t.exports=o;var r=i(3),s=i(7),n=i(14),a=i(5),l=i(13),c=i(10),d=i(6),h=i(0),u=i(1);o.create=function(t,e){var i=(t?t.mouse:null)||(e?e.mouse:null);i||(t&&t.render&&t.render.canvas?i=n.create(t.render.canvas):e&&e.element?i=n.create(e.element):(i=n.create(),h.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var r={type:"mouseConstraint",mouse:i,element:null,body:null,constraint:c.create({label:"Mouse Constraint",pointA:i.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),collisionFilter:{category:1,mask:4294967295,group:0}},s=h.extend(r,e);return a.on(t,"beforeUpdate",function(){var e=d.allBodies(t.world);o.update(s,e),o._triggerEvents(s)}),s},o.update=function(t,e){var i=t.mouse,o=t.constraint,n=t.body;if(0===i.button){if(o.bodyB)s.set(o.bodyB,!1),o.pointA=i.position;else for(var c=0;c<e.length;c++)if(n=e[c],u.contains(n.bounds,i.position)&&l.canCollide(n.collisionFilter,t.collisionFilter))for(var d=n.parts.length>1?1:0;d<n.parts.length;d++){var h=n.parts[d];if(r.contains(h.vertices,i.position)){o.pointA=i.position,o.bodyB=t.body=n,o.pointB={x:i.position.x-n.position.x,y:i.position.y-n.position.y},o.angleB=n.angle,s.set(n,!1),a.trigger(t,"startdrag",{mouse:i,body:n});break}}}else o.bodyB=t.body=null,o.pointB=null,n&&a.trigger(t,"enddrag",{mouse:i,body:n})},o._triggerEvents=function(t){var e=t.mouse,i=e.sourceEvents;i.mousemove&&a.trigger(t,"mousemove",{mouse:e}),i.mousedown&&a.trigger(t,"mousedown",{mouse:e}),i.mouseup&&a.trigger(t,"mouseup",{mouse:e}),n.clearSourceEvents(e)}},function(t,e,i){var o={};t.exports=o;var r=i(2),s=i(8),n=i(1),a=i(12),l=i(3);o.collides=function(t,e){for(var i=[],o=e.length,r=t.bounds,a=s.collides,l=n.overlaps,c=0;c<o;c++){var d=e[c],h=d.parts.length,u=1===h?0:1;if(l(d.bounds,r))for(var p=u;p<h;p++){var f=d.parts[p];if(l(f.bounds,r)){var m=a(f,t);if(m){i.push(m);break}}}}return i},o.ray=function(t,e,i,s){s=s||1e-100;for(var n=r.angle(e,i),l=r.magnitude(r.sub(e,i)),c=.5*(i.x+e.x),d=.5*(i.y+e.y),h=a.rectangle(c,d,l,s,{angle:n}),u=o.collides(h,t),p=0;p<u.length;p+=1){var f=u[p];f.body=f.bodyB=f.bodyA}return u},o.region=function(t,e,i){for(var o=[],r=0;r<t.length;r++){var s=t[r],a=n.overlaps(s.bounds,e);(a&&!i||!a&&i)&&o.push(s)}return o},o.point=function(t,e){for(var i=[],o=0;o<t.length;o++){var r=t[o];if(n.contains(r.bounds,e))for(var s=1===r.parts.length?0:1;s<r.parts.length;s++){var a=r.parts[s];if(n.contains(a.bounds,e)&&l.contains(a.vertices,e)){i.push(r);break}}}return i}},function(t,e,i){var o={};t.exports=o;var r=i(4),s=i(0),n=i(6),a=i(1),l=i(5),c=i(2),d=i(14);!function(){var t,e;"undefined"!=typeof window&&(t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(function(){t(s.now())},1e3/60)},e=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),o._goodFps=30,o._goodDelta=1e3/60,o.create=function(t){var e={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!t.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},i=s.extend(e,t);return i.canvas&&(i.canvas.width=i.options.width||i.canvas.width,i.canvas.height=i.options.height||i.canvas.height),i.mouse=t.mouse,i.engine=t.engine,i.canvas=i.canvas||u(i.options.width,i.options.height),i.context=i.canvas.getContext("2d"),i.textures={},i.bounds=i.bounds||{min:{x:0,y:0},max:{x:i.canvas.width,y:i.canvas.height}},i.controller=o,i.options.showBroadphase=!1,1!==i.options.pixelRatio&&o.setPixelRatio(i,i.options.pixelRatio),s.isElement(i.element)&&i.element.appendChild(i.canvas),i},o.run=function(e){!function r(s){e.frameRequestId=t(r),i(e,s),o.world(e,s),e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0),(e.options.showStats||e.options.showDebug)&&o.stats(e,e.context,s),(e.options.showPerformance||e.options.showDebug)&&o.performance(e,e.context,s),e.context.setTransform(1,0,0,1,0,0)}()},o.stop=function(t){e(t.frameRequestId)},o.setPixelRatio=function(t,e){var i=t.options,o=t.canvas;"auto"===e&&(e=p(o)),i.pixelRatio=e,o.setAttribute("data-pixel-ratio",e),o.width=i.width*e,o.height=i.height*e,o.style.width=i.width+"px",o.style.height=i.height+"px"},o.setSize=function(t,e,i){t.options.width=e,t.options.height=i,t.bounds.max.x=t.bounds.min.x+e,t.bounds.max.y=t.bounds.min.y+i,1!==t.options.pixelRatio?o.setPixelRatio(t,t.options.pixelRatio):(t.canvas.width=e,t.canvas.height=i)},o.lookAt=function(t,e,i,o){o=void 0===o||o,e=s.isArray(e)?e:[e],i=i||{x:0,y:0};for(var r={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},n=0;n<e.length;n+=1){var a=e[n],l=a.bounds?a.bounds.min:a.min||a.position||a,c=a.bounds?a.bounds.max:a.max||a.position||a;l&&c&&(l.x<r.min.x&&(r.min.x=l.x),c.x>r.max.x&&(r.max.x=c.x),l.y<r.min.y&&(r.min.y=l.y),c.y>r.max.y&&(r.max.y=c.y))}var h=r.max.x-r.min.x+2*i.x,u=r.max.y-r.min.y+2*i.y,p=t.canvas.height,f=t.canvas.width/p,m=h/u,g=1,b=1;m>f?b=m/f:g=f/m,t.options.hasBounds=!0,t.bounds.min.x=r.min.x,t.bounds.max.x=r.min.x+h*g,t.bounds.min.y=r.min.y,t.bounds.max.y=r.min.y+u*b,o&&(t.bounds.min.x+=.5*h-h*g*.5,t.bounds.max.x+=.5*h-h*g*.5,t.bounds.min.y+=.5*u-u*b*.5,t.bounds.max.y+=.5*u-u*b*.5),t.bounds.min.x-=i.x,t.bounds.max.x-=i.x,t.bounds.min.y-=i.y,t.bounds.max.y-=i.y,t.mouse&&(d.setScale(t.mouse,{x:(t.bounds.max.x-t.bounds.min.x)/t.canvas.width,y:(t.bounds.max.y-t.bounds.min.y)/t.canvas.height}),d.setOffset(t.mouse,t.bounds.min))},o.startViewTransform=function(t){var e=t.bounds.max.x-t.bounds.min.x,i=t.bounds.max.y-t.bounds.min.y,o=e/t.options.width,r=i/t.options.height;t.context.setTransform(t.options.pixelRatio/o,0,0,t.options.pixelRatio/r,0,0),t.context.translate(-t.bounds.min.x,-t.bounds.min.y)},o.endViewTransform=function(t){t.context.setTransform(t.options.pixelRatio,0,0,t.options.pixelRatio,0,0)},o.world=function(t,e){var i,r=s.now(),h=t.engine,u=h.world,p=t.canvas,f=t.context,g=t.options,b=t.timing,v=n.allBodies(u),y=n.allConstraints(u),x=g.wireframes?g.wireframeBackground:g.background,_=[],w=[],k={timestamp:h.timing.timestamp};if(l.trigger(t,"beforeRender",k),t.currentBackground!==x&&m(t,x),f.globalCompositeOperation="source-in",f.fillStyle="transparent",f.fillRect(0,0,p.width,p.height),f.globalCompositeOperation="source-over",g.hasBounds){for(i=0;i<v.length;i++){var C=v[i];a.overlaps(C.bounds,t.bounds)&&_.push(C)}for(i=0;i<y.length;i++){var S=y[i],$=S.bodyA,A=S.bodyB,z=S.pointA,E=S.pointB;$&&(z=c.add($.position,S.pointA)),A&&(E=c.add(A.position,S.pointB)),z&&E&&(a.contains(t.bounds,z)||a.contains(t.bounds,E))&&w.push(S)}o.startViewTransform(t),t.mouse&&(d.setScale(t.mouse,{x:(t.bounds.max.x-t.bounds.min.x)/t.options.width,y:(t.bounds.max.y-t.bounds.min.y)/t.options.height}),d.setOffset(t.mouse,t.bounds.min))}else w=y,_=v,1!==t.options.pixelRatio&&t.context.setTransform(t.options.pixelRatio,0,0,t.options.pixelRatio,0,0);!g.wireframes||h.enableSleeping&&g.showSleeping?o.bodies(t,_,f):(g.showConvexHulls&&o.bodyConvexHulls(t,_,f),o.bodyWireframes(t,_,f)),g.showBounds&&o.bodyBounds(t,_,f),(g.showAxes||g.showAngleIndicator)&&o.bodyAxes(t,_,f),g.showPositions&&o.bodyPositions(t,_,f),g.showVelocity&&o.bodyVelocity(t,_,f),g.showIds&&o.bodyIds(t,_,f),g.showSeparations&&o.separations(t,h.pairs.list,f),g.showCollisions&&o.collisions(t,h.pairs.list,f),g.showVertexNumbers&&o.vertexNumbers(t,_,f),g.showMousePosition&&o.mousePosition(t,t.mouse,f),o.constraints(w,f),g.hasBounds&&o.endViewTransform(t),l.trigger(t,"afterRender",k),b.lastElapsed=s.now()-r},o.stats=function(t,e,i){for(var o=t.engine,r=o.world,s=n.allBodies(r),a=0,l=0,c=0;c<s.length;c+=1)a+=s[c].parts.length;var d={Part:a,Body:s.length,Cons:n.allConstraints(r).length,Comp:n.allComposites(r).length,Pair:o.pairs.list.length};for(var h in e.fillStyle="#0e0f19",e.fillRect(l,0,302.5,44),e.font="12px Arial",e.textBaseline="top",e.textAlign="right",d){var u=d[h];e.fillStyle="#aaa",e.fillText(h,l+55,8),e.fillStyle="#eee",e.fillText(u,l+55,26),l+=55}},o.performance=function(t,e){var i=t.engine,r=t.timing,n=r.deltaHistory,a=r.elapsedHistory,l=r.timestampElapsedHistory,c=r.engineDeltaHistory,d=r.engineUpdatesHistory,u=r.engineElapsedHistory,p=i.timing.lastUpdatesPerFrame,f=i.timing.lastDelta,m=h(n),g=h(a),b=h(c),v=h(d),y=h(u),x=h(l)/m||0,_=Math.round(m/f),w=1e3/m||0,k=60,C=69;e.fillStyle="#0e0f19",e.fillRect(0,50,442,34),o.status(e,10,C,k,4,n.length,Math.round(w)+" fps",w/o._goodFps,function(t){return n[t]/m-1}),o.status(e,82,C,k,4,c.length,f.toFixed(2)+" dt",o._goodDelta/f,function(t){return c[t]/b-1}),o.status(e,154,C,k,4,d.length,p+" upf",Math.pow(s.clamp(v/_||1,0,1),4),function(t){return d[t]/v-1}),o.status(e,226,C,k,4,u.length,y.toFixed(2)+" ut",1-p*y/o._goodFps,function(t){return u[t]/y-1}),o.status(e,298,C,k,4,a.length,g.toFixed(2)+" rt",1-g/o._goodFps,function(t){return a[t]/g-1}),o.status(e,370,C,k,4,l.length,x.toFixed(2)+" x",x*x*x,function(t){return(l[t]/n[t]/x||0)-1})},o.status=function(t,e,i,o,r,n,a,l,c){t.strokeStyle="#888",t.fillStyle="#444",t.lineWidth=1,t.fillRect(e,i+7,o,1),t.beginPath(),t.moveTo(e,i+7-r*s.clamp(.4*c(0),-2,2));for(var d=0;d<o;d+=1)t.lineTo(e+d,i+7-(d<n?r*s.clamp(.4*c(d),-2,2):0));t.stroke(),t.fillStyle="hsl("+s.clamp(25+95*l,0,120)+",100%,60%)",t.fillRect(e,i-7,4,4),t.font="12px Arial",t.textBaseline="middle",t.textAlign="right",t.fillStyle="#eee",t.fillText(a,e+o,i-5)},o.constraints=function(t,e){for(var i=e,o=0;o<t.length;o++){var r=t[o];if(r.render.visible&&r.pointA&&r.pointB){var n,a,l=r.bodyA,d=r.bodyB;if(n=l?c.add(l.position,r.pointA):r.pointA,"pin"===r.render.type)i.beginPath(),i.arc(n.x,n.y,3,0,2*Math.PI),i.closePath();else{if(a=d?c.add(d.position,r.pointB):r.pointB,i.beginPath(),i.moveTo(n.x,n.y),"spring"===r.render.type)for(var h,u=c.sub(a,n),p=c.perp(c.normalise(u)),f=Math.ceil(s.clamp(r.length/5,12,20)),m=1;m<f;m+=1)h=m%2==0?1:-1,i.lineTo(n.x+u.x*(m/f)+p.x*h*4,n.y+u.y*(m/f)+p.y*h*4);i.lineTo(a.x,a.y)}r.render.lineWidth&&(i.lineWidth=r.render.lineWidth,i.strokeStyle=r.render.strokeStyle,i.stroke()),r.render.anchors&&(i.fillStyle=r.render.strokeStyle,i.beginPath(),i.arc(n.x,n.y,3,0,2*Math.PI),i.arc(a.x,a.y,3,0,2*Math.PI),i.closePath(),i.fill())}}},o.bodies=function(t,e,i){var o,r,s,n,a=i,l=(t.engine,t.options),c=l.showInternalEdges||!l.wireframes;for(s=0;s<e.length;s++)if((o=e[s]).render.visible)for(n=o.parts.length>1?1:0;n<o.parts.length;n++)if((r=o.parts[n]).render.visible){if(l.showSleeping&&o.isSleeping?a.globalAlpha=.5*r.render.opacity:1!==r.render.opacity&&(a.globalAlpha=r.render.opacity),r.render.sprite&&r.render.sprite.texture&&!l.wireframes){var d=r.render.sprite,h=f(t,d.texture);a.translate(r.position.x,r.position.y),a.rotate(r.angle),a.drawImage(h,h.width*-d.xOffset*d.xScale,h.height*-d.yOffset*d.yScale,h.width*d.xScale,h.height*d.yScale),a.rotate(-r.angle),a.translate(-r.position.x,-r.position.y)}else{if(r.circleRadius)a.beginPath(),a.arc(r.position.x,r.position.y,r.circleRadius,0,2*Math.PI);else{a.beginPath(),a.moveTo(r.vertices[0].x,r.vertices[0].y);for(var u=1;u<r.vertices.length;u++)!r.vertices[u-1].isInternal||c?a.lineTo(r.vertices[u].x,r.vertices[u].y):a.moveTo(r.vertices[u].x,r.vertices[u].y),r.vertices[u].isInternal&&!c&&a.moveTo(r.vertices[(u+1)%r.vertices.length].x,r.vertices[(u+1)%r.vertices.length].y);a.lineTo(r.vertices[0].x,r.vertices[0].y),a.closePath()}l.wireframes?(a.lineWidth=1,a.strokeStyle=t.options.wireframeStrokeStyle,a.stroke()):(a.fillStyle=r.render.fillStyle,r.render.lineWidth&&(a.lineWidth=r.render.lineWidth,a.strokeStyle=r.render.strokeStyle,a.stroke()),a.fill())}a.globalAlpha=1}},o.bodyWireframes=function(t,e,i){var o,r,s,n,a,l=i,c=t.options.showInternalEdges;for(l.beginPath(),s=0;s<e.length;s++)if((o=e[s]).render.visible)for(a=o.parts.length>1?1:0;a<o.parts.length;a++){for(r=o.parts[a],l.moveTo(r.vertices[0].x,r.vertices[0].y),n=1;n<r.vertices.length;n++)!r.vertices[n-1].isInternal||c?l.lineTo(r.vertices[n].x,r.vertices[n].y):l.moveTo(r.vertices[n].x,r.vertices[n].y),r.vertices[n].isInternal&&!c&&l.moveTo(r.vertices[(n+1)%r.vertices.length].x,r.vertices[(n+1)%r.vertices.length].y);l.lineTo(r.vertices[0].x,r.vertices[0].y)}l.lineWidth=1,l.strokeStyle=t.options.wireframeStrokeStyle,l.stroke()},o.bodyConvexHulls=function(t,e,i){var o,r,s,n=i;for(n.beginPath(),r=0;r<e.length;r++)if((o=e[r]).render.visible&&1!==o.parts.length){for(n.moveTo(o.vertices[0].x,o.vertices[0].y),s=1;s<o.vertices.length;s++)n.lineTo(o.vertices[s].x,o.vertices[s].y);n.lineTo(o.vertices[0].x,o.vertices[0].y)}n.lineWidth=1,n.strokeStyle="rgba(255,255,255,0.2)",n.stroke()},o.vertexNumbers=function(t,e,i){var o,r,s,n=i;for(o=0;o<e.length;o++){var a=e[o].parts;for(s=a.length>1?1:0;s<a.length;s++){var l=a[s];for(r=0;r<l.vertices.length;r++)n.fillStyle="rgba(255,255,255,0.2)",n.fillText(o+"_"+r,l.position.x+.8*(l.vertices[r].x-l.position.x),l.position.y+.8*(l.vertices[r].y-l.position.y))}}},o.mousePosition=function(t,e,i){var o=i;o.fillStyle="rgba(255,255,255,0.8)",o.fillText(e.position.x+"  "+e.position.y,e.position.x+5,e.position.y-5)},o.bodyBounds=function(t,e,i){var o=i,r=(t.engine,t.options);o.beginPath();for(var s=0;s<e.length;s++)if(e[s].render.visible)for(var n=e[s].parts,a=n.length>1?1:0;a<n.length;a++){var l=n[a];o.rect(l.bounds.min.x,l.bounds.min.y,l.bounds.max.x-l.bounds.min.x,l.bounds.max.y-l.bounds.min.y)}r.wireframes?o.strokeStyle="rgba(255,255,255,0.08)":o.strokeStyle="rgba(0,0,0,0.1)",o.lineWidth=1,o.stroke()},o.bodyAxes=function(t,e,i){var o,r,s,n,a=i,l=(t.engine,t.options);for(a.beginPath(),r=0;r<e.length;r++){var c=e[r],d=c.parts;if(c.render.visible)if(l.showAxes)for(s=d.length>1?1:0;s<d.length;s++)for(o=d[s],n=0;n<o.axes.length;n++){var h=o.axes[n];a.moveTo(o.position.x,o.position.y),a.lineTo(o.position.x+20*h.x,o.position.y+20*h.y)}else for(s=d.length>1?1:0;s<d.length;s++)for(o=d[s],n=0;n<o.axes.length;n++)a.moveTo(o.position.x,o.position.y),a.lineTo((o.vertices[0].x+o.vertices[o.vertices.length-1].x)/2,(o.vertices[0].y+o.vertices[o.vertices.length-1].y)/2)}l.wireframes?(a.strokeStyle="indianred",a.lineWidth=1):(a.strokeStyle="rgba(255, 255, 255, 0.4)",a.globalCompositeOperation="overlay",a.lineWidth=2),a.stroke(),a.globalCompositeOperation="source-over"},o.bodyPositions=function(t,e,i){var o,r,s,n,a=i,l=(t.engine,t.options);for(a.beginPath(),s=0;s<e.length;s++)if((o=e[s]).render.visible)for(n=0;n<o.parts.length;n++)r=o.parts[n],a.arc(r.position.x,r.position.y,3,0,2*Math.PI,!1),a.closePath();for(l.wireframes?a.fillStyle="indianred":a.fillStyle="rgba(0,0,0,0.5)",a.fill(),a.beginPath(),s=0;s<e.length;s++)(o=e[s]).render.visible&&(a.arc(o.positionPrev.x,o.positionPrev.y,2,0,2*Math.PI,!1),a.closePath());a.fillStyle="rgba(255,165,0,0.8)",a.fill()},o.bodyVelocity=function(t,e,i){var o=i;o.beginPath();for(var s=0;s<e.length;s++){var n=e[s];if(n.render.visible){var a=r.getVelocity(n);o.moveTo(n.position.x,n.position.y),o.lineTo(n.position.x+a.x,n.position.y+a.y)}}o.lineWidth=3,o.strokeStyle="cornflowerblue",o.stroke()},o.bodyIds=function(t,e,i){var o,r,s=i;for(o=0;o<e.length;o++)if(e[o].render.visible){var n=e[o].parts;for(r=n.length>1?1:0;r<n.length;r++){var a=n[r];s.font="12px Arial",s.fillStyle="rgba(255,255,255,0.5)",s.fillText(a.id,a.position.x+10,a.position.y-10)}}},o.collisions=function(t,e,i){var o,r,s,n,a=i,l=t.options;for(a.beginPath(),s=0;s<e.length;s++)if((o=e[s]).isActive)for(r=o.collision,n=0;n<o.contactCount;n++){var c=o.contacts[n].vertex;a.rect(c.x-1.5,c.y-1.5,3.5,3.5)}for(l.wireframes?a.fillStyle="rgba(255,255,255,0.7)":a.fillStyle="orange",a.fill(),a.beginPath(),s=0;s<e.length;s++)if((o=e[s]).isActive&&(r=o.collision,o.contactCount>0)){var d=o.contacts[0].vertex.x,h=o.contacts[0].vertex.y;2===o.contactCount&&(d=(o.contacts[0].vertex.x+o.contacts[1].vertex.x)/2,h=(o.contacts[0].vertex.y+o.contacts[1].vertex.y)/2),r.bodyB===r.supports[0].body||!0===r.bodyA.isStatic?a.moveTo(d-8*r.normal.x,h-8*r.normal.y):a.moveTo(d+8*r.normal.x,h+8*r.normal.y),a.lineTo(d,h)}l.wireframes?a.strokeStyle="rgba(255,165,0,0.7)":a.strokeStyle="orange",a.lineWidth=1,a.stroke()},o.separations=function(t,e,i){var o,r,s,n,a,l=i,c=t.options;for(l.beginPath(),a=0;a<e.length;a++)if((o=e[a]).isActive){s=(r=o.collision).bodyA;var d=1;(n=r.bodyB).isStatic||s.isStatic||(d=.5),n.isStatic&&(d=0),l.moveTo(n.position.x,n.position.y),l.lineTo(n.position.x-r.penetration.x*d,n.position.y-r.penetration.y*d),d=1,n.isStatic||s.isStatic||(d=.5),s.isStatic&&(d=0),l.moveTo(s.position.x,s.position.y),l.lineTo(s.position.x+r.penetration.x*d,s.position.y+r.penetration.y*d)}c.wireframes?l.strokeStyle="rgba(255,165,0,0.5)":l.strokeStyle="orange",l.stroke()},o.inspector=function(t,e){t.engine;var i,o=t.selected,r=t.render,s=r.options;if(s.hasBounds){var n=r.bounds.max.x-r.bounds.min.x,a=r.bounds.max.y-r.bounds.min.y,l=n/r.options.width,c=a/r.options.height;e.scale(1/l,1/c),e.translate(-r.bounds.min.x,-r.bounds.min.y)}for(var d=0;d<o.length;d++){var h=o[d].data;switch(e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(255,165,0,0.9)",e.setLineDash([1,2]),h.type){case"body":i=h.bounds,e.beginPath(),e.rect(Math.floor(i.min.x-3),Math.floor(i.min.y-3),Math.floor(i.max.x-i.min.x+6),Math.floor(i.max.y-i.min.y+6)),e.closePath(),e.stroke();break;case"constraint":var u=h.pointA;h.bodyA&&(u=h.pointB),e.beginPath(),e.arc(u.x,u.y,10,0,2*Math.PI),e.closePath(),e.stroke()}e.setLineDash([]),e.translate(-.5,-.5)}null!==t.selectStart&&(e.translate(.5,.5),e.lineWidth=1,e.strokeStyle="rgba(255,165,0,0.6)",e.fillStyle="rgba(255,165,0,0.1)",i=t.selectBounds,e.beginPath(),e.rect(Math.floor(i.min.x),Math.floor(i.min.y),Math.floor(i.max.x-i.min.x),Math.floor(i.max.y-i.min.y)),e.closePath(),e.stroke(),e.fill(),e.translate(-.5,-.5)),s.hasBounds&&e.setTransform(1,0,0,1,0,0)};var i=function(t,e){var i=t.engine,r=t.timing,s=r.historySize,n=i.timing.timestamp;r.delta=e-r.lastTime||o._goodDelta,r.lastTime=e,r.timestampElapsed=n-r.lastTimestamp||0,r.lastTimestamp=n,r.deltaHistory.unshift(r.delta),r.deltaHistory.length=Math.min(r.deltaHistory.length,s),r.engineDeltaHistory.unshift(i.timing.lastDelta),r.engineDeltaHistory.length=Math.min(r.engineDeltaHistory.length,s),r.timestampElapsedHistory.unshift(r.timestampElapsed),r.timestampElapsedHistory.length=Math.min(r.timestampElapsedHistory.length,s),r.engineUpdatesHistory.unshift(i.timing.lastUpdatesPerFrame),r.engineUpdatesHistory.length=Math.min(r.engineUpdatesHistory.length,s),r.engineElapsedHistory.unshift(i.timing.lastElapsed),r.engineElapsedHistory.length=Math.min(r.engineElapsedHistory.length,s),r.elapsedHistory.unshift(r.lastElapsed),r.elapsedHistory.length=Math.min(r.elapsedHistory.length,s)},h=function(t){for(var e=0,i=0;i<t.length;i+=1)e+=t[i];return e/t.length||0},u=function(t,e){var i=document.createElement("canvas");return i.width=t,i.height=e,i.oncontextmenu=function(){return!1},i.onselectstart=function(){return!1},i},p=function(t){var e=t.getContext("2d");return(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)},f=function(t,e){var i=t.textures[e];return i||((i=t.textures[e]=new Image).src=e,i)},m=function(t,e){var i=e;/(jpg|gif|png)$/.test(e)&&(i="url("+e+")"),t.canvas.style.background=i,t.canvas.style.backgroundSize="contain",t.currentBackground=e}}()},function(t,e,i){var o={};t.exports=o;var r=i(5),s=i(17),n=i(0);!function(){o._maxFrameDelta=1e3/15,o._frameDeltaFallback=1e3/60,o._timeBufferMargin=1.5,o._elapsedNextEstimate=1,o._smoothingLowerBound=.1,o._smoothingUpperBound=.9,o.create=function(t){var e=n.extend({delta:1e3/60,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:1e3/30,lastUpdatesDeferred:0,enabled:!0},t);return e.fps=0,e},o.run=function(t,e){return t.timeBuffer=o._frameDeltaFallback,function i(r){t.frameRequestId=o._onNextFrame(t,i),r&&t.enabled&&o.tick(t,e,r)}(),t},o.tick=function(e,i,a){var l=n.now(),c=e.delta,d=0,h=a-e.timeLastTick;if((!h||!e.timeLastTick||h>Math.max(o._maxFrameDelta,e.maxFrameTime))&&(h=e.frameDelta||o._frameDeltaFallback),e.frameDeltaSmoothing){e.frameDeltaHistory.push(h),e.frameDeltaHistory=e.frameDeltaHistory.slice(-e.frameDeltaHistorySize);var u=e.frameDeltaHistory.slice(0).sort(),p=e.frameDeltaHistory.slice(u.length*o._smoothingLowerBound,u.length*o._smoothingUpperBound);h=t(p)||h}e.frameDeltaSnapping&&(h=1e3/Math.round(1e3/h)),e.frameDelta=h,e.timeLastTick=a,e.timeBuffer+=e.frameDelta,e.timeBuffer=n.clamp(e.timeBuffer,0,e.frameDelta+c*o._timeBufferMargin),e.lastUpdatesDeferred=0;var f=e.maxUpdates||Math.ceil(e.maxFrameTime/c),m={timestamp:i.timing.timestamp};r.trigger(e,"beforeTick",m),r.trigger(e,"tick",m);for(var g=n.now();c>0&&e.timeBuffer>=c*o._timeBufferMargin;){r.trigger(e,"beforeUpdate",m),s.update(i,c),r.trigger(e,"afterUpdate",m),e.timeBuffer-=c,d+=1;var b=n.now()-l,v=n.now()-g,y=b+o._elapsedNextEstimate*v/d;if(d>=f||y>e.maxFrameTime){e.lastUpdatesDeferred=Math.round(Math.max(0,e.timeBuffer/c-o._timeBufferMargin));break}}i.timing.lastUpdatesPerFrame=d,r.trigger(e,"afterTick",m),e.frameDeltaHistory.length>=100&&(e.lastUpdatesDeferred&&Math.round(e.frameDelta/c)>f?n.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):e.lastUpdatesDeferred&&n.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),void 0!==e.isFixed&&n.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(e.deltaMin||e.deltaMax)&&n.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),0!==e.fps&&n.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},o.stop=function(t){o._cancelNextFrame(t)},o._onNextFrame=function(t,e){if("undefined"==typeof window||!window.requestAnimationFrame)throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return t.frameRequestId=window.requestAnimationFrame(e),t.frameRequestId},o._cancelNextFrame=function(t){if("undefined"==typeof window||!window.cancelAnimationFrame)throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.");window.cancelAnimationFrame(t.frameRequestId)};var t=function(t){for(var e=0,i=t.length,o=0;o<i;o+=1)e+=t[o];return e/i||0}}()},function(t,e,i){var o={};t.exports=o;var r=i(8),s=i(0).deprecated;o.collides=function(t,e){return r.collides(t,e)},s(o,"collides","SAT.collides ➤ replaced by Collision.collides")},function(t,e,i){var o={};t.exports=o,i(1);var r=i(0);o.pathToVertices=function(t,e){"undefined"==typeof window||"SVGPathSeg"in window||r.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var i,s,n,a,l,c,d,h,u,p,f,m=[],g=0,b=0,v=0;e=e||15;var y=function(t,e,i){var o=i%2==1&&i>1;if(!u||t!=u.x||e!=u.y){u&&o?(p=u.x,f=u.y):(p=0,f=0);var r={x:p+t,y:f+e};!o&&u||(u=r),m.push(r),b=p+t,v=f+e}},x=function(t){var e=t.pathSegTypeAsLetter.toUpperCase();if("Z"!==e){switch(e){case"M":case"L":case"T":case"C":case"S":case"Q":b=t.x,v=t.y;break;case"H":b=t.x;break;case"V":v=t.y}y(b,v,t.pathSegType)}};for(o._svgPathToAbsolute(t),n=t.getTotalLength(),c=[],i=0;i<t.pathSegList.numberOfItems;i+=1)c.push(t.pathSegList.getItem(i));for(d=c.concat();g<n;){if((l=c[t.getPathSegAtLength(g)])!=h){for(;d.length&&d[0]!=l;)x(d.shift());h=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":a=t.getPointAtLength(g),y(a.x,a.y,0)}g+=e}for(i=0,s=d.length;i<s;++i)x(d[i]);return m},o._svgPathToAbsolute=function(t){for(var e,i,o,r,s,n,a=t.pathSegList,l=0,c=0,d=a.numberOfItems,h=0;h<d;++h){var u=a.getItem(h),p=u.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(p))"x"in u&&(l=u.x),"y"in u&&(c=u.y);else switch("x1"in u&&(o=l+u.x1),"x2"in u&&(s=l+u.x2),"y1"in u&&(r=c+u.y1),"y2"in u&&(n=c+u.y2),"x"in u&&(l+=u.x),"y"in u&&(c+=u.y),p){case"m":a.replaceItem(t.createSVGPathSegMovetoAbs(l,c),h);break;case"l":a.replaceItem(t.createSVGPathSegLinetoAbs(l,c),h);break;case"h":a.replaceItem(t.createSVGPathSegLinetoHorizontalAbs(l),h);break;case"v":a.replaceItem(t.createSVGPathSegLinetoVerticalAbs(c),h);break;case"c":a.replaceItem(t.createSVGPathSegCurvetoCubicAbs(l,c,o,r,s,n),h);break;case"s":a.replaceItem(t.createSVGPathSegCurvetoCubicSmoothAbs(l,c,s,n),h);break;case"q":a.replaceItem(t.createSVGPathSegCurvetoQuadraticAbs(l,c,o,r),h);break;case"t":a.replaceItem(t.createSVGPathSegCurvetoQuadraticSmoothAbs(l,c),h);break;case"a":a.replaceItem(t.createSVGPathSegArcAbs(l,c,u.r1,u.r2,u.angle,u.largeArcFlag,u.sweepFlag),h);break;case"z":case"Z":l=e,c=i}"M"!=p&&"m"!=p||(e=l,i=c)}}},function(t,e,i){var o={};t.exports=o;var r=i(6);i(0),o.create=r.create,o.add=r.add,o.remove=r.remove,o.clear=r.clear,o.addComposite=r.addComposite,o.addBody=r.addBody,o.addConstraint=r.addConstraint}])},t.exports=o()}},e={};function i(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,i),s.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t={};i.r(t),i.d(t,{backInDown:()=>Wn,backInLeft:()=>Kn,backInRight:()=>Xn,backInUp:()=>Gn,backOutDown:()=>Yn,backOutLeft:()=>Zn,backOutRight:()=>Qn,backOutUp:()=>Jn,bounce:()=>In,bounceIn:()=>ta,bounceInDown:()=>ea,bounceInLeft:()=>ia,bounceInRight:()=>oa,bounceInUp:()=>ra,bounceOut:()=>sa,bounceOutDown:()=>na,bounceOutLeft:()=>aa,bounceOutRight:()=>la,bounceOutUp:()=>ca,easings:()=>kl,fadeIn:()=>da,fadeInBottomLeft:()=>ha,fadeInBottomRight:()=>ua,fadeInDown:()=>pa,fadeInDownBig:()=>fa,fadeInLeft:()=>ma,fadeInLeftBig:()=>ga,fadeInRight:()=>ba,fadeInRightBig:()=>va,fadeInTopLeft:()=>ya,fadeInTopRight:()=>xa,fadeInUp:()=>_a,fadeInUpBig:()=>wa,fadeOut:()=>ka,fadeOutBottomLeft:()=>Ca,fadeOutBottomRight:()=>Sa,fadeOutDown:()=>$a,fadeOutDownBig:()=>Aa,fadeOutLeft:()=>za,fadeOutLeftBig:()=>Ea,fadeOutRight:()=>Ta,fadeOutRightBig:()=>Pa,fadeOutTopLeft:()=>Ma,fadeOutTopRight:()=>Ia,fadeOutUp:()=>Oa,fadeOutUpBig:()=>Da,flash:()=>On,flip:()=>La,flipInX:()=>Ba,flipInY:()=>Ra,flipOutX:()=>Fa,flipOutY:()=>Va,headShake:()=>Dn,heartBeat:()=>Ln,hinge:()=>cl,jackInTheBox:()=>dl,jello:()=>Bn,lightSpeedInLeft:()=>Na,lightSpeedInRight:()=>Ha,lightSpeedOutLeft:()=>Ua,lightSpeedOutRight:()=>ja,pulse:()=>Rn,rollIn:()=>hl,rollOut:()=>ul,rotateIn:()=>qa,rotateInDownLeft:()=>Wa,rotateInDownRight:()=>Ka,rotateInUpLeft:()=>Xa,rotateInUpRight:()=>Ga,rotateOut:()=>Ya,rotateOutDownLeft:()=>Za,rotateOutDownRight:()=>Qa,rotateOutUpLeft:()=>Ja,rotateOutUpRight:()=>tl,rubberBand:()=>Fn,shake:()=>Vn,shakeX:()=>Nn,shakeY:()=>Hn,slideInDown:()=>el,slideInLeft:()=>il,slideInRight:()=>ol,slideInUp:()=>rl,slideOutDown:()=>sl,slideOutLeft:()=>nl,slideOutRight:()=>al,slideOutUp:()=>ll,swing:()=>Un,tada:()=>jn,wobble:()=>qn,zoomIn:()=>pl,zoomInDown:()=>fl,zoomInLeft:()=>ml,zoomInRight:()=>gl,zoomInUp:()=>bl,zoomOut:()=>vl,zoomOutDown:()=>yl,zoomOutLeft:()=>xl,zoomOutRight:()=>_l,zoomOutUp:()=>wl});var e=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),d=t=>{throw TypeError(t)},h=(t,i,o)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,u=(t,e)=>{for(var i in e||(e={}))a.call(e,i)&&h(t,i,e[i]);if(n)for(var i of n(e))l.call(e,i)&&h(t,i,e[i]);return t},p=(t,e)=>o(t,s(e)),f=(t,i,o,s)=>{for(var n,a=s>1?void 0:s?r(i,o):i,l=t.length-1;l>=0;l--)(n=t[l])&&(a=(s?n(i,o,a):n(a))||a);return s&&a&&e(i,o,a),a},m=(t,e,i)=>e.has(t)||d("Cannot "+i),g=function(t,e){this[0]=t,this[1]=e},b=new WeakMap,v=new WeakMap,y=new WeakMap,x=new WeakSet,_=new WeakMap,w=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!r&&"string"==typeof i&&i.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach(e=>{t.formData.append(i,e.toString())}):t.formData.append(i,o.toString()))},this.handleFormSubmit=t=>{var e;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=b.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),_.set(this.host,[])},this.handleInteraction=t=>{const e=_.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=u({form:t=>{const e=t.form;if(e){const i=t.getRootNode().querySelector(`#${e}`);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),_.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),_.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,b.has(this.form)?b.get(this.form).add(this.host):b.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),v.has(this.form)||(v.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),y.has(this.form)||(y.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=b.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),v.has(this.form)&&(this.form.reportValidity=v.get(this.form),v.delete(this.form)),y.has(this.form)&&(this.form.checkValidity=y.get(this.form),y.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?x.add(t):x.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=Boolean(x.has(e)),o=Boolean(e.required);e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},k=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),C=Object.freeze(p(u({},k),{valid:!1,valueMissing:!0})),S=Object.freeze(p(u({},k),{valid:!1,customError:!0}));const $=globalThis,A=$.ShadowRoot&&(void 0===$.ShadyCSS||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),E=new WeakMap;class T{constructor(t,e,i){if(this._$cssResult$=!0,i!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(A&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=E.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&E.set(e,t))}return t}toString(){return this.cssText}}const P=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new T(i,t,z)},M=(t,e)=>{if(A)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),o=$.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}},I=A?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new T("string"==typeof t?t:t+"",void 0,z))(e)})(t):t,{is:O,defineProperty:D,getOwnPropertyDescriptor:L,getOwnPropertyNames:B,getOwnPropertySymbols:R,getPrototypeOf:F}=Object,V=globalThis,N=V.trustedTypes,H=N?N.emptyScript:"",U=V.reactiveElementPolyfillSupport,j=(t,e)=>t,q={toAttribute(t,e){switch(e){case Boolean:t=t?H:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},W=(t,e)=>!O(t,e),K={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??=Symbol("metadata"),V.litPropertyMetadata??=new WeakMap;class X extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&D(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=L(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const s=o?.call(this);r?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??K}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;const t=F(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){const t=this.properties,e=[...B(t),...R(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(I(t))}else void 0!==t&&e.push(I(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return M(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:q).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:q;this._$Em=o;const s=r.fromAttribute(e,t.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,i,o=!1,r){if(void 0!==t){const s=this.constructor;if(!1===o&&(r=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??W)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==r||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[j("elementProperties")]=new Map,X[j("finalized")]=new Map,U?.({ReactiveElement:X}),(V.reactiveElementVersions??=[]).push("2.1.2");const G=globalThis,Y=t=>t,Z=G.trustedTypes,Q=Z?Z.createPolicy("lit-html",{createHTML:t=>t}):void 0,J="$lit$",tt=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+tt,it=`<${et}>`,ot=document,rt=()=>ot.createComment(""),st=t=>null===t||"object"!=typeof t&&"function"!=typeof t,nt=Array.isArray,at=t=>nt(t)||"function"==typeof t?.[Symbol.iterator],lt="[ \t\n\f\r]",ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ht=/>/g,ut=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ft=/"/g,mt=/^(?:script|style|textarea|title)$/i,gt=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),bt=gt(1),vt=gt(2),yt=gt(3),xt=Symbol.for("lit-noChange"),_t=Symbol.for("lit-nothing"),wt=new WeakMap,kt=ot.createTreeWalker(ot,129);function Ct(t,e){if(!nt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Q?Q.createHTML(e):e}const St=(t,e)=>{const i=t.length-1,o=[];let r,s=2===e?"<svg>":3===e?"<math>":"",n=ct;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===ct?"!--"===l[1]?n=dt:void 0!==l[1]?n=ht:void 0!==l[2]?(mt.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=ut):void 0!==l[3]&&(n=ut):n===ut?">"===l[0]?(n=r??ct,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?ut:'"'===l[3]?ft:pt):n===ft||n===pt?n=ut:n===dt||n===ht?n=ct:(n=ut,r=void 0);const h=n===ut&&t[e+1].startsWith("/>")?" ":"";s+=n===ct?i+it:c>=0?(o.push(a),i.slice(0,c)+J+i.slice(c)+tt+h):i+tt+(-2===c?e:h)}return[Ct(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class $t{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0;const n=t.length-1,a=this.parts,[l,c]=St(t,e);if(this.el=$t.createElement(l,i),kt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=kt.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(J)){const e=c[s++],i=o.getAttribute(t).split(tt),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?Pt:"?"===n[1]?Mt:"@"===n[1]?It:Tt}),o.removeAttribute(t)}else t.startsWith(tt)&&(a.push({type:6,index:r}),o.removeAttribute(t));if(mt.test(o.tagName)){const t=o.textContent.split(tt),e=t.length-1;if(e>0){o.textContent=Z?Z.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],rt()),kt.nextNode(),a.push({type:2,index:++r});o.append(t[e],rt())}}}else if(8===o.nodeType)if(o.data===et)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(tt,t+1));)a.push({type:7,index:r}),t+=tt.length-1}r++}}static createElement(t,e){const i=ot.createElement("template");return i.innerHTML=t,i}}function At(t,e,i=t,o){if(e===xt)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const s=st(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=At(t,r._$AS(t,e.values),r,o)),e}class zt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??ot).importNode(e,!0);kt.currentNode=o;let r=kt.nextNode(),s=0,n=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new Ot(r,this,t)),this._$AV.push(e),a=i[++n]}s!==a?.index&&(r=kt.nextNode(),s++)}return kt.currentNode=ot,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=_t,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=At(this,t,e),st(t)?t===_t||null==t||""===t?(this._$AH!==_t&&this._$AR(),this._$AH=_t):t!==this._$AH&&t!==xt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):at(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_t&&st(this._$AH)?this._$AA.nextSibling.data=t:this.T(ot.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=$t.createElement(Ct(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new zt(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=wt.get(t.strings);return void 0===e&&wt.set(t.strings,e=new $t(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new Et(this.O(rt()),this.O(rt()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=Y(t).nextSibling;Y(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=_t,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_t}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(void 0===r)t=At(this,t,e,0),s=!st(t)||t!==this._$AH&&t!==xt,s&&(this._$AH=t);else{const o=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=At(this,o[i+n],e,n),a===xt&&(a=this._$AH[n]),s||=!st(a)||a!==this._$AH[n],a===_t?t=_t:t!==_t&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}s&&!o&&this.j(t)}j(t){t===_t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends Tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_t?void 0:t}}class Mt extends Tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_t)}}class It extends Tt{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=At(this,t,e,0)??_t)===xt)return;const i=this._$AH,o=t===_t&&i!==_t||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==_t&&(i===_t||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){At(this,t)}}const Dt={M:J,P:tt,A:et,C:1,L:St,R:zt,D:at,V:At,I:Et,H:Tt,N:Mt,U:It,B:Pt,F:Ot},Lt=G.litHtmlPolyfillSupport;Lt?.($t,Et),(G.litHtmlVersions??=[]).push("3.3.2");const Bt=globalThis;class Rt extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=i?.renderBefore??null;o._$litPart$=r=new Et(e.insertBefore(rt(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xt}}Rt._$litElement$=!0,Rt.finalized=!0,Bt.litElementHydrateSupport?.({LitElement:Rt});const Ft=Bt.litElementPolyfillSupport;Ft?.({LitElement:Rt}),(Bt.litElementVersions??=[]).push("4.2.2");var Vt=P`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Nt=P`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ht=(t="value")=>(e,i)=>{const o=e.constructor,r=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(e,s,n){var a;const l=o.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||q,o=("function"==typeof e?e:null!=(a=null==e?void 0:e.fromAttribute)?a:q.fromAttribute)(n,l.type);this[t]!==o&&(this[i]=o)}r.call(this,e,s,n)}},Ut=P`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,jt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},qt="";function Wt(t){qt=t}var Kt={name:"default",resolver:t=>function(t=""){if(!qt){const t=[...document.getElementsByTagName("script")],e=t.find(t=>t.hasAttribute("data-shoelace"));if(e)Wt(e.getAttribute("data-shoelace"));else{const e=t.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src));let i="";e&&(i=e.getAttribute("src")),Wt(i.split("/").slice(0,-1).join("/"))}}return qt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},Xt={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Gt=[Kt,{name:"system",resolver:t=>t in Xt?`data:image/svg+xml,${encodeURIComponent(Xt[t])}`:""}],Yt=[];function Zt(t){return Gt.find(e=>e.name===t)}var Qt=P`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function Jt(t,e){const i=u({waitUntilFirstUpdate:!1},e);return(e,o)=>{const{update:r}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach(e=>{const r=e;if(t.has(r)){const e=t.get(r),s=this[r];e!==s&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](e,s))}}),r.call(this,t)}}}var te=P`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;const ee={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:W},ie=(t=ee,e,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};function oe(t){return(e,i)=>"object"==typeof i?ie(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function re(t){return oe({...t,state:!0,attribute:!1})}function se(t){return(e,i)=>{const o="function"==typeof e?e:e[i];Object.assign(o,t)}}const ne=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function ae(t,e){return(i,o,r)=>{const s=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof o?i:r??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ne(i,o,{get(){let i=t.call(this);return void 0===i&&(i=s(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return ne(i,o,{get(){return s(this)}})}}var le,ce=class extends Rt{constructor(){var t,e;super(),t=this,(e=le).has(t)?d("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,false),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,u({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch(o){customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",s=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(s=" v"+o.version),r&&s&&r===s||console.warn(`Attempted to register <${t}>${r}, but <${t}>${s} has already been registered.`)}attributeChangedCallback(t,e,i){var o;m(this,o=le,"read from private field"),o.get(this)||(this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),((t,e,i)=>{m(t,e,"write to private field"),e.set(t,i)})(this,le,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)})}};le=new WeakMap,ce.version="2.20.1",ce.dependencies={},f([oe()],ce.prototype,"dir",2),f([oe()],ce.prototype,"lang",2);const{I:de}=Dt,he=t=>void 0===t.strings,ue={};var pe,fe=Symbol(),me=Symbol(),ge=new Map,be=class extends ce{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(null==e?void 0:e.spriteSheet)return this.svg=bt`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return 410===o.status?fe:me}catch(t){return me}try{const t=document.createElement("div");t.innerHTML=await o.text();const e=t.firstElementChild;if("svg"!==(null==(i=null==e?void 0:e.tagName)?void 0:i.toLowerCase()))return fe;pe||(pe=new DOMParser);const r=pe.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return r?(r.part.add("svg"),document.adoptNode(r)):fe}catch(t){return fe}}connectedCallback(){super.connectedCallback(),Yt.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Yt=Yt.filter(e=>e!==t)}getIconSource(){const t=Zt(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?Zt(this.library):void 0;if(!e)return void(this.svg=null);let r=ge.get(e);if(r||(r=this.resolveIcon(e,o),ge.set(e,r)),!this.initialRender)return;const s=await r;if(s===me&&ge.delete(e),e===this.getIconSource().url)if((t=>void 0!==t?._$litType$)(s)){if(this.svg=s,o){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof o.mutator&&t&&o.mutator(t)}}else switch(s){case me:case fe:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(t=null==o?void 0:o.mutator)||t.call(o,this.svg),this.emit("sl-load")}}render(){return this.svg}};be.styles=[te,Qt],f([re()],be.prototype,"svg",2),f([oe({reflect:!0})],be.prototype,"name",2),f([oe()],be.prototype,"src",2),f([oe()],be.prototype,"label",2),f([oe({reflect:!0})],be.prototype,"library",2),f([Jt("label")],be.prototype,"handleLabelChange",1),f([Jt(["name","src","library"])],be.prototype,"setIcon",1);const ve=t=>(...e)=>({_$litDirective$:t,values:e});class ye{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const xe=ve(class extends ye{constructor(t){if(super(t),1!==t.type||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||this.nt?.has(t)||(o?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return xt}}),_e=t=>t??_t,we=ve(class extends ye{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!he(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===xt||e===_t)return e;const i=t.element,o=t.name;if(3===t.type){if(e===i[o])return xt}else if(4===t.type){if(!!e===i.hasAttribute(o))return xt}else if(1===t.type&&i.getAttribute(o)===e+"")return xt;return((t,e=ue)=>{t._$AH=e})(t),e}});var ke=class extends ce{constructor(){super(...arguments),this.formControlController=new w(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new jt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return bt`
      <div
        class=${xe({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${xe({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${_e(this.value)}
            .indeterminate=${we(this.indeterminate)}
            .checked=${we(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?bt`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?bt`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ke.styles=[te,Ut,Nt],ke.dependencies={"sl-icon":be},f([ae('input[type="checkbox"]')],ke.prototype,"input",2),f([re()],ke.prototype,"hasFocus",2),f([oe()],ke.prototype,"title",2),f([oe()],ke.prototype,"name",2),f([oe()],ke.prototype,"value",2),f([oe({reflect:!0})],ke.prototype,"size",2),f([oe({type:Boolean,reflect:!0})],ke.prototype,"disabled",2),f([oe({type:Boolean,reflect:!0})],ke.prototype,"checked",2),f([oe({type:Boolean,reflect:!0})],ke.prototype,"indeterminate",2),f([Ht("checked")],ke.prototype,"defaultChecked",2),f([oe({reflect:!0})],ke.prototype,"form",2),f([oe({type:Boolean,reflect:!0})],ke.prototype,"required",2),f([oe({attribute:"help-text"})],ke.prototype,"helpText",2),f([Jt("disabled",{waitUntilFirstUpdate:!0})],ke.prototype,"handleDisabledChange",1),f([Jt(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ke.prototype,"handleStateChange",1);var Ce=P`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Se=new Set,$e=new Map;let Ae,ze="ltr",Ee="en";const Te="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Te){const t=new MutationObserver(Me);ze=document.documentElement.dir||"ltr",Ee=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Pe(...t){t.map(t=>{const e=t.$code.toLowerCase();$e.has(e)?$e.set(e,Object.assign(Object.assign({},$e.get(e)),t)):$e.set(e,t),Ae||(Ae=t)}),Me()}function Me(){Te&&(ze=document.documentElement.dir||"ltr",Ee=document.documentElement.lang||navigator.language),[...Se.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}class Ie{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Se.add(this.host)}hostDisconnected(){Se.delete(this.host)}dir(){return`${this.host.dir||ze}`.toLowerCase()}lang(){return`${this.host.lang||Ee}`.toLowerCase()}getTranslationData(t){var e,i;const o=new Intl.Locale(t.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),s=null!==(i=null===(e=null==o?void 0:o.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:r,region:s,primary:$e.get(`${r}-${s}`),secondary:$e.get(r)}}exists(t,e){var i;const{primary:o,secondary:r}=this.getTranslationData(null!==(i=e.lang)&&void 0!==i?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(o&&o[t]||r&&r[t]||e.includeFallback&&Ae&&Ae[t])}term(t,...e){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let r;if(i&&i[t])r=i[t];else if(o&&o[t])r=o[t];else{if(!Ae||!Ae[t])return console.error(`No translation found for: ${String(t)}`),String(t);r=Ae[t]}return"function"==typeof r?r(...e):r}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}}var Oe={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Pe(Oe);var De=Oe,Le=class extends Ie{};Pe(De);var Be=class extends ce{constructor(){super(...arguments),this.localize=new Le(this)}render(){return bt`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Be.styles=[te,Ce];var Re=new Map,Fe=new WeakMap;function Ve(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ne(t,e){Re.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function He(t,e,i){const o=Fe.get(t);if(null==o?void 0:o[e])return Ve(o[e],i.dir);const r=Re.get(e);return r?Ve(r,i.dir):{keyframes:[],options:{duration:0}}}function Ue(t,e,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,p(u({},i),{duration:qe()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function je(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function qe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function We(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function Ke(t,e){return t.map(t=>p(u({},t),{height:"auto"===t.height?`${e}px`:t.height}))}function Xe(t,e,i){return t?e(t):i?.(t)}var Ge=class t extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&"treeitem"===t.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await We(this.childrenContainer);const{keyframes:t,options:e}=He(this,"tree-item.collapse",{dir:this.localize.dir()});await Ue(this.childrenContainer,Ke(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&t.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await We(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:e}=He(this,"tree-item.expand",{dir:this.localize.dir()});await Ue(this.childrenContainer,Ke(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>t.isTreeItem(i)&&(e||!i.disabled)):[]}render(){const t="rtl"===this.localize.dir(),e=!this.loading&&(!this.isLeaf||this.lazy);return bt`
      <div
        part="base"
        class="${xe({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":"rtl"===this.localize.dir()})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${xe({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e})}
            aria-hidden="true"
          >
            ${Xe(this.loading,()=>bt` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Xe(this.selectable,()=>bt`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${we(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Ge.styles=[te,Vt],Ge.dependencies={"sl-checkbox":ke,"sl-icon":be,"sl-spinner":Be},f([re()],Ge.prototype,"indeterminate",2),f([re()],Ge.prototype,"isLeaf",2),f([re()],Ge.prototype,"loading",2),f([re()],Ge.prototype,"selectable",2),f([oe({type:Boolean,reflect:!0})],Ge.prototype,"expanded",2),f([oe({type:Boolean,reflect:!0})],Ge.prototype,"selected",2),f([oe({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2),f([oe({type:Boolean,reflect:!0})],Ge.prototype,"lazy",2),f([ae("slot:not([name])")],Ge.prototype,"defaultSlot",2),f([ae("slot[name=children]")],Ge.prototype,"childrenSlot",2),f([ae(".tree-item__item")],Ge.prototype,"itemElement",2),f([ae(".tree-item__children")],Ge.prototype,"childrenContainer",2),f([ae(".tree-item__expand-button slot")],Ge.prototype,"expandButtonSlot",2),f([Jt("loading",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleLoadingChange",1),f([Jt("disabled")],Ge.prototype,"handleDisabledChange",1),f([Jt("selected")],Ge.prototype,"handleSelectedChange",1),f([Jt("expanded",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleExpandedChange",1),f([Jt("expanded",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleExpandAnimation",1),f([Jt("lazy",{waitUntilFirstUpdate:!0})],Ge.prototype,"handleLazyChange",1);var Ye=Ge;Ne("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),Ne("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),Ye.define("sl-tree-item");var Ze=P`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Qe=P`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Je=Math.min,ti=Math.max,ei=Math.round,ii=Math.floor,oi=t=>({x:t,y:t}),ri={left:"right",right:"left",bottom:"top",top:"bottom"},si={start:"end",end:"start"};function ni(t,e,i){return ti(t,Je(e,i))}function ai(t,e){return"function"==typeof t?t(e):t}function li(t){return t.split("-")[0]}function ci(t){return t.split("-")[1]}function di(t){return"x"===t?"y":"x"}function hi(t){return"y"===t?"height":"width"}const ui=new Set(["top","bottom"]);function pi(t){return ui.has(li(t))?"y":"x"}function fi(t){return di(pi(t))}function mi(t){return t.replace(/start|end/g,t=>si[t])}const gi=["left","right"],bi=["right","left"],vi=["top","bottom"],yi=["bottom","top"];function xi(t){return t.replace(/left|right|bottom|top/g,t=>ri[t])}function _i(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function wi(t){const{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function ki(t,e,i){let{reference:o,floating:r}=t;const s=pi(e),n=fi(e),a=hi(n),l=li(e),c="y"===s,d=o.x+o.width/2-r.width/2,h=o.y+o.height/2-r.height/2,u=o[a]/2-r[a]/2;let p;switch(l){case"top":p={x:d,y:o.y-r.height};break;case"bottom":p={x:d,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:h};break;case"left":p={x:o.x-r.width,y:h};break;default:p={x:o.x,y:o.y}}switch(ci(e)){case"start":p[n]-=u*(i&&c?-1:1);break;case"end":p[n]+=u*(i&&c?-1:1)}return p}async function Ci(t,e){var i;void 0===e&&(e={});const{x:o,y:r,platform:s,rects:n,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:p=0}=ai(e,t),f=_i(p),m=a[u?"floating"===h?"reference":"floating":h],g=wi(await s.getClippingRect({element:null==(i=await(null==s.isElement?void 0:s.isElement(m)))||i?m:m.contextElement||await(null==s.getDocumentElement?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),b="floating"===h?{x:o,y:r,width:n.floating.width,height:n.floating.height}:n.reference,v=await(null==s.getOffsetParent?void 0:s.getOffsetParent(a.floating)),y=await(null==s.isElement?void 0:s.isElement(v))&&await(null==s.getScale?void 0:s.getScale(v))||{x:1,y:1},x=wi(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:v,strategy:l}):b);return{top:(g.top-x.top+f.top)/y.y,bottom:(x.bottom-g.bottom+f.bottom)/y.y,left:(g.left-x.left+f.left)/y.x,right:(x.right-g.right+f.right)/y.x}}const Si=new Set(["left","top"]);function $i(){return"undefined"!=typeof window}function Ai(t){return Ti(t)?(t.nodeName||"").toLowerCase():"#document"}function zi(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Ei(t){var e;return null==(e=(Ti(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Ti(t){return!!$i()&&(t instanceof Node||t instanceof zi(t).Node)}function Pi(t){return!!$i()&&(t instanceof Element||t instanceof zi(t).Element)}function Mi(t){return!!$i()&&(t instanceof HTMLElement||t instanceof zi(t).HTMLElement)}function Ii(t){return!(!$i()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof zi(t).ShadowRoot)}const Oi=new Set(["inline","contents"]);function Di(t){const{overflow:e,overflowX:i,overflowY:o,display:r}=Ki(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!Oi.has(r)}const Li=new Set(["table","td","th"]);function Bi(t){return Li.has(Ai(t))}const Ri=[":popover-open",":modal"];function Fi(t){return Ri.some(e=>{try{return t.matches(e)}catch(t){return!1}})}const Vi=["transform","translate","scale","rotate","perspective"],Ni=["transform","translate","scale","rotate","perspective","filter"],Hi=["paint","layout","strict","content"];function Ui(t){const e=ji(),i=Pi(t)?Ki(t):t;return Vi.some(t=>!!i[t]&&"none"!==i[t])||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||Ni.some(t=>(i.willChange||"").includes(t))||Hi.some(t=>(i.contain||"").includes(t))}function ji(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}const qi=new Set(["html","body","#document"]);function Wi(t){return qi.has(Ai(t))}function Ki(t){return zi(t).getComputedStyle(t)}function Xi(t){return Pi(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Gi(t){if("html"===Ai(t))return t;const e=t.assignedSlot||t.parentNode||Ii(t)&&t.host||Ei(t);return Ii(e)?e.host:e}function Yi(t){const e=Gi(t);return Wi(e)?t.ownerDocument?t.ownerDocument.body:t.body:Mi(e)&&Di(e)?e:Yi(e)}function Zi(t,e,i){var o;void 0===e&&(e=[]),void 0===i&&(i=!0);const r=Yi(t),s=r===(null==(o=t.ownerDocument)?void 0:o.body),n=zi(r);if(s){const t=Qi(n);return e.concat(n,n.visualViewport||[],Di(r)?r:[],t&&i?Zi(t):[])}return e.concat(r,Zi(r,[],i))}function Qi(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ji(t){const e=Ki(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=Mi(t),s=r?t.offsetWidth:i,n=r?t.offsetHeight:o,a=ei(i)!==s||ei(o)!==n;return a&&(i=s,o=n),{width:i,height:o,$:a}}function to(t){return Pi(t)?t:t.contextElement}function eo(t){const e=to(t);if(!Mi(e))return oi(1);const i=e.getBoundingClientRect(),{width:o,height:r,$:s}=Ji(e);let n=(s?ei(i.width):i.width)/o,a=(s?ei(i.height):i.height)/r;return n&&Number.isFinite(n)||(n=1),a&&Number.isFinite(a)||(a=1),{x:n,y:a}}const io=oi(0);function oo(t){const e=zi(t);return ji()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:io}function ro(t,e,i,o){void 0===e&&(e=!1),void 0===i&&(i=!1);const r=t.getBoundingClientRect(),s=to(t);let n=oi(1);e&&(o?Pi(o)&&(n=eo(o)):n=eo(t));const a=function(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==zi(t))&&e}(s,i,o)?oo(s):oi(0);let l=(r.left+a.x)/n.x,c=(r.top+a.y)/n.y,d=r.width/n.x,h=r.height/n.y;if(s){const t=zi(s),e=o&&Pi(o)?zi(o):o;let i=t,r=Qi(i);for(;r&&o&&e!==i;){const t=eo(r),e=r.getBoundingClientRect(),o=Ki(r),s=e.left+(r.clientLeft+parseFloat(o.paddingLeft))*t.x,n=e.top+(r.clientTop+parseFloat(o.paddingTop))*t.y;l*=t.x,c*=t.y,d*=t.x,h*=t.y,l+=s,c+=n,i=zi(r),r=Qi(i)}}return wi({width:d,height:h,x:l,y:c})}function so(t,e){const i=Xi(t).scrollLeft;return e?e.left+i:ro(Ei(t)).left+i}function no(t,e){const i=t.getBoundingClientRect();return{x:i.left+e.scrollLeft-so(t,i),y:i.top+e.scrollTop}}const ao=new Set(["absolute","fixed"]);function lo(t,e,i){let o;if("viewport"===e)o=function(t,e){const i=zi(t),o=Ei(t),r=i.visualViewport;let s=o.clientWidth,n=o.clientHeight,a=0,l=0;if(r){s=r.width,n=r.height;const t=ji();(!t||t&&"fixed"===e)&&(a=r.offsetLeft,l=r.offsetTop)}const c=so(o);if(c<=0){const t=o.ownerDocument,e=t.body,i=getComputedStyle(e),r="CSS1Compat"===t.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,n=Math.abs(o.clientWidth-e.clientWidth-r);n<=25&&(s-=n)}else c<=25&&(s+=c);return{width:s,height:n,x:a,y:l}}(t,i);else if("document"===e)o=function(t){const e=Ei(t),i=Xi(t),o=t.ownerDocument.body,r=ti(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=ti(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let n=-i.scrollLeft+so(t);const a=-i.scrollTop;return"rtl"===Ki(o).direction&&(n+=ti(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:n,y:a}}(Ei(t));else if(Pi(e))o=function(t,e){const i=ro(t,!0,"fixed"===e),o=i.top+t.clientTop,r=i.left+t.clientLeft,s=Mi(t)?eo(t):oi(1);return{width:t.clientWidth*s.x,height:t.clientHeight*s.y,x:r*s.x,y:o*s.y}}(e,i);else{const i=oo(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return wi(o)}function co(t,e){const i=Gi(t);return!(i===e||!Pi(i)||Wi(i))&&("fixed"===Ki(i).position||co(i,e))}function ho(t,e,i){const o=Mi(e),r=Ei(e),s="fixed"===i,n=ro(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=oi(0);function c(){l.x=so(r)}if(o||!o&&!s)if(("body"!==Ai(e)||Di(r))&&(a=Xi(e)),o){const t=ro(e,!0,s,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else r&&c();s&&!o&&r&&c();const d=!r||o||s?oi(0):no(r,a);return{x:n.left+a.scrollLeft-l.x-d.x,y:n.top+a.scrollTop-l.y-d.y,width:n.width,height:n.height}}function uo(t){return"static"===Ki(t).position}function po(t,e){if(!Mi(t)||"fixed"===Ki(t).position)return null;if(e)return e(t);let i=t.offsetParent;return Ei(t)===i&&(i=i.ownerDocument.body),i}function fo(t,e){const i=zi(t);if(Fi(t))return i;if(!Mi(t)){let e=Gi(t);for(;e&&!Wi(e);){if(Pi(e)&&!uo(e))return e;e=Gi(e)}return i}let o=po(t,e);for(;o&&Bi(o)&&uo(o);)o=po(o,e);return o&&Wi(o)&&uo(o)&&!Ui(o)?i:o||function(t){let e=Gi(t);for(;Mi(e)&&!Wi(e);){if(Ui(e))return e;if(Fi(e))return null;e=Gi(e)}return null}(t)||i}const mo={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t;const s="fixed"===r,n=Ei(o),a=!!e&&Fi(e.floating);if(o===n||a&&s)return i;let l={scrollLeft:0,scrollTop:0},c=oi(1);const d=oi(0),h=Mi(o);if((h||!h&&!s)&&(("body"!==Ai(o)||Di(n))&&(l=Xi(o)),Mi(o))){const t=ro(o);c=eo(o),d.x=t.x+o.clientLeft,d.y=t.y+o.clientTop}const u=!n||h||s?oi(0):no(n,l);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+d.x+u.x,y:i.y*c.y-l.scrollTop*c.y+d.y+u.y}},getDocumentElement:Ei,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t;const s=[..."clippingAncestors"===i?Fi(e)?[]:function(t,e){const i=e.get(t);if(i)return i;let o=Zi(t,[],!1).filter(t=>Pi(t)&&"body"!==Ai(t)),r=null;const s="fixed"===Ki(t).position;let n=s?Gi(t):t;for(;Pi(n)&&!Wi(n);){const e=Ki(n),i=Ui(n);i||"fixed"!==e.position||(r=null),(s?!i&&!r:!i&&"static"===e.position&&r&&ao.has(r.position)||Di(n)&&!i&&co(t,n))?o=o.filter(t=>t!==n):r=e,n=Gi(n)}return e.set(t,o),o}(e,this._c):[].concat(i),o],n=s[0],a=s.reduce((t,i)=>{const o=lo(e,i,r);return t.top=ti(o.top,t.top),t.right=Je(o.right,t.right),t.bottom=Je(o.bottom,t.bottom),t.left=ti(o.left,t.left),t},lo(e,n,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:fo,getElementRects:async function(t){const e=this.getOffsetParent||fo,i=this.getDimensions,o=await i(t.floating);return{reference:ho(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:i}=Ji(t);return{width:e,height:i}},getScale:eo,isElement:Pi,isRTL:function(t){return"rtl"===Ki(t).direction}};function go(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}const bo=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:r,middlewareData:s,rects:n,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...g}=ai(t,e);if(null!=(i=s.arrow)&&i.alignmentOffset)return{};const b=li(r),v=pi(a),y=li(a)===a,x=await(null==l.isRTL?void 0:l.isRTL(c.floating)),_=u||(y||!m?[xi(a)]:function(t){const e=xi(t);return[mi(t),e,mi(e)]}(a)),w="none"!==f;!u&&w&&_.push(...function(t,e,i,o){const r=ci(t);let s=function(t,e,i){switch(t){case"top":case"bottom":return i?e?bi:gi:e?gi:bi;case"left":case"right":return e?vi:yi;default:return[]}}(li(t),"start"===i,o);return r&&(s=s.map(t=>t+"-"+r),e&&(s=s.concat(s.map(mi)))),s}(a,m,f,x));const k=[a,..._],C=await l.detectOverflow(e,g),S=[];let $=(null==(o=s.flip)?void 0:o.overflows)||[];if(d&&S.push(C[b]),h){const t=function(t,e,i){void 0===i&&(i=!1);const o=ci(t),r=fi(t),s=hi(r);let n="x"===r?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=xi(n)),[n,xi(n)]}(r,n,x);S.push(C[t[0]],C[t[1]])}if($=[...$,{placement:r,overflows:S}],!S.every(t=>t<=0)){var A,z;const t=((null==(A=s.flip)?void 0:A.index)||0)+1,e=k[t];if(e&&("alignment"!==h||v===pi(e)||$.every(t=>pi(t.placement)!==v||t.overflows[0]>0)))return{data:{index:t,overflows:$},reset:{placement:e}};let i=null==(z=$.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:z.placement;if(!i)switch(p){case"bestFit":{var E;const t=null==(E=$.filter(t=>{if(w){const e=pi(t.placement);return e===v||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:E[0];t&&(i=t);break}case"initialPlacement":i=a}if(r!==i)return{reset:{placement:i}}}return{}}}},vo=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:r,rects:s,platform:n,elements:a}=e,{apply:l=()=>{},...c}=ai(t,e),d=await n.detectOverflow(e,c),h=li(r),u=ci(r),p="y"===pi(r),{width:f,height:m}=s.floating;let g,b;"top"===h||"bottom"===h?(g=h,b=u===(await(null==n.isRTL?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(b=h,g="end"===u?"top":"bottom");const v=m-d.top-d.bottom,y=f-d.left-d.right,x=Je(m-d[g],v),_=Je(f-d[b],y),w=!e.middlewareData.shift;let k=x,C=_;if(null!=(i=e.middlewareData.shift)&&i.enabled.x&&(C=y),null!=(o=e.middlewareData.shift)&&o.enabled.y&&(k=v),w&&!u){const t=ti(d.left,0),e=ti(d.right,0),i=ti(d.top,0),o=ti(d.bottom,0);p?C=f-2*(0!==t||0!==e?t+e:ti(d.left,d.right)):k=m-2*(0!==i||0!==o?i+o:ti(d.top,d.bottom))}await l({...e,availableWidth:C,availableHeight:k});const S=await n.getDimensions(a.floating);return f!==S.width||m!==S.height?{reset:{rects:!0}}:{}}}};function yo(t){return function(t){for(let e=t;e;e=xo(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=xo(t);e;e=xo(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||Ui(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function xo(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var _o=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let i=0,o=0,r=0,s=0,n=0,a=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(i=t.left,o=t.bottom,r=t.right,s=t.bottom,n=e.left,a=e.top,l=e.right,c=e.top):(i=e.left,o=e.bottom,r=e.right,s=e.bottom,n=t.left,a=t.top,l=t.right,c=t.top):t.left<e.left?(i=t.right,o=t.top,r=e.left,s=e.top,n=t.right,a=t.bottom,l=e.left,c=e.bottom):(i=e.right,o=e.top,r=t.left,s=t.top,n=e.right,a=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(t,e,i,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:n="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=o,c=to(t),d=r||s?[...c?Zi(c):[],...Zi(e)]:[];d.forEach(t=>{r&&t.addEventListener("scroll",i,{passive:!0}),s&&t.addEventListener("resize",i)});const h=c&&a?function(t,e){let i,o=null;const r=Ei(t);function s(){var t;clearTimeout(i),null==(t=o)||t.disconnect(),o=null}return function n(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),s();const c=t.getBoundingClientRect(),{left:d,top:h,width:u,height:p}=c;if(a||e(),!u||!p)return;const f={rootMargin:-ii(h)+"px "+-ii(r.clientWidth-(d+u))+"px "+-ii(r.clientHeight-(h+p))+"px "+-ii(d)+"px",threshold:ti(0,Je(1,l))||1};let m=!0;function g(e){const o=e[0].intersectionRatio;if(o!==l){if(!m)return n();o?n(!1,o):i=setTimeout(()=>{n(!1,1e-7)},1e3)}1!==o||go(c,t.getBoundingClientRect())||n(),m=!1}try{o=new IntersectionObserver(g,{...f,root:r.ownerDocument})}catch(t){o=new IntersectionObserver(g,f)}o.observe(t)}(!0),s}(c,i):null;let u,p=-1,f=null;n&&(f=new ResizeObserver(t=>{let[o]=t;o&&o.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var t;null==(t=f)||t.observe(e)})),i()}),c&&!l&&f.observe(c),f.observe(e));let m=l?ro(t):null;return l&&function e(){const o=ro(t);m&&!go(m,o)&&i(),m=o,u=requestAnimationFrame(e)}(),i(),()=>{var t;d.forEach(t=>{r&&t.removeEventListener("scroll",i),s&&t.removeEventListener("resize",i)}),null==h||h(),null==(t=f)||t.disconnect(),f=null,l&&cancelAnimationFrame(u)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[(e={mainAxis:this.distance,crossAxis:this.skidding},void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var i,o;const{x:r,y:s,placement:n,middlewareData:a}=t,l=await async function(t,e){const{placement:i,platform:o,elements:r}=t,s=await(null==o.isRTL?void 0:o.isRTL(r.floating)),n=li(i),a=ci(i),l="y"===pi(i),c=Si.has(n)?-1:1,d=s&&l?-1:1,h=ai(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:f}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&"number"==typeof f&&(p="end"===a?-1*f:f),l?{x:p*d,y:u*c}:{x:u*c,y:p*d}}(t,e);return n===(null==(i=a.offset)?void 0:i.placement)&&null!=(o=a.arrow)&&o.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:n}}}})];var e;this.sync?t.push(vo({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(bo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:r,platform:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...c}=ai(t,e),d={x:i,y:o},h=await s.detectOverflow(e,c),u=pi(li(r)),p=di(u);let f=d[p],m=d[u];if(n){const t="y"===p?"bottom":"right";f=ni(f+h["y"===p?"top":"left"],f,f-h[t])}if(a){const t="y"===u?"bottom":"right";m=ni(m+h["y"===u?"top":"left"],m,m-h[t])}const g=l.fn({...e,[p]:f,[u]:m});return{...g,data:{x:g.x-i,y:g.y-o,enabled:{[p]:n,[u]:a}}}}}}({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(vo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push((t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:r,rects:s,platform:n,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=ai(t,e)||{};if(null==c)return{};const h=_i(d),u={x:i,y:o},p=fi(r),f=hi(p),m=await n.getDimensions(c),g="y"===p,b=g?"top":"left",v=g?"bottom":"right",y=g?"clientHeight":"clientWidth",x=s.reference[f]+s.reference[p]-u[p]-s.floating[f],_=u[p]-s.reference[p],w=await(null==n.getOffsetParent?void 0:n.getOffsetParent(c));let k=w?w[y]:0;k&&await(null==n.isElement?void 0:n.isElement(w))||(k=a.floating[y]||s.floating[f]);const C=x/2-_/2,S=k/2-m[f]/2-1,$=Je(h[b],S),A=Je(h[v],S),z=$,E=k-m[f]-A,T=k/2-m[f]/2+C,P=ni(z,T,E),M=!l.arrow&&null!=ci(r)&&T!==P&&s.reference[f]/2-(T<z?$:A)-m[f]/2<0,I=M?T<z?T-z:T-E:0;return{[p]:u[p]+I,data:{[p]:P,centerOffset:T-P-I,...M&&{alignmentOffset:I}},reset:M}}}))({element:this.arrowEl,padding:this.arrowPadding}));const i="absolute"===this.strategy?t=>mo.getOffsetParent(t,yo):mo.getOffsetParent;((t,e,i)=>{const o=new Map,r={platform:mo,...i},s={...r.platform,_c:o};return(async(t,e,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:n}=i,a=s.filter(Boolean),l=await(null==n.isRTL?void 0:n.isRTL(e));let c=await n.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:h}=ki(c,o,l),u=o,p={},f=0;for(let i=0;i<a.length;i++){var m;const{name:s,fn:g}=a[i],{x:b,y:v,data:y,reset:x}=await g({x:d,y:h,initialPlacement:o,placement:u,strategy:r,middlewareData:p,rects:c,platform:{...n,detectOverflow:null!=(m=n.detectOverflow)?m:Ci},elements:{reference:t,floating:e}});d=null!=b?b:d,h=null!=v?v:h,p={...p,[s]:{...p[s],...y}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(u=x.placement),x.rects&&(c=!0===x.rects?await n.getElementRects({reference:t,floating:e,strategy:r}):x.rects),({x:d,y:h}=ki(c,u,l))),i=-1)}return{x:d,y:h,placement:u,strategy:r,middlewareData:p}})(t,e,{...r,platform:s})})(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:p(u({},mo),{getOffsetParent:i})}).then(({x:t,y:e,middlewareData:i,placement:o})=>{const r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=i.arrow.x,e=i.arrow.y;let o="",n="",a="",l="";if("start"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",n=r?i:"",l=r?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n=r?"":i,l=r?i:"",a="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",o="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:o,right:n,bottom:a,left:l,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return bt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${xe({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${xe({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?bt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function wo(t,e){return new Promise(i=>{t.addEventListener(e,function o(r){r.target===t&&(t.removeEventListener(e,o),i())})})}_o.styles=[te,Qe],f([ae(".popup")],_o.prototype,"popup",2),f([ae(".popup__arrow")],_o.prototype,"arrowEl",2),f([oe()],_o.prototype,"anchor",2),f([oe({type:Boolean,reflect:!0})],_o.prototype,"active",2),f([oe({reflect:!0})],_o.prototype,"placement",2),f([oe({reflect:!0})],_o.prototype,"strategy",2),f([oe({type:Number})],_o.prototype,"distance",2),f([oe({type:Number})],_o.prototype,"skidding",2),f([oe({type:Boolean})],_o.prototype,"arrow",2),f([oe({attribute:"arrow-placement"})],_o.prototype,"arrowPlacement",2),f([oe({attribute:"arrow-padding",type:Number})],_o.prototype,"arrowPadding",2),f([oe({type:Boolean})],_o.prototype,"flip",2),f([oe({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],_o.prototype,"flipFallbackPlacements",2),f([oe({attribute:"flip-fallback-strategy"})],_o.prototype,"flipFallbackStrategy",2),f([oe({type:Object})],_o.prototype,"flipBoundary",2),f([oe({attribute:"flip-padding",type:Number})],_o.prototype,"flipPadding",2),f([oe({type:Boolean})],_o.prototype,"shift",2),f([oe({type:Object})],_o.prototype,"shiftBoundary",2),f([oe({attribute:"shift-padding",type:Number})],_o.prototype,"shiftPadding",2),f([oe({attribute:"auto-size"})],_o.prototype,"autoSize",2),f([oe()],_o.prototype,"sync",2),f([oe({type:Object})],_o.prototype,"autoSizeBoundary",2),f([oe({attribute:"auto-size-padding",type:Number})],_o.prototype,"autoSizePadding",2),f([oe({attribute:"hover-bridge",type:Boolean})],_o.prototype,"hoverBridge",2);var ko=class extends ce{constructor(){super(),this.localize=new Le(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=je(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=je(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await We(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:i}=He(this,"tooltip.show",{dir:this.localize.dir()});await Ue(this.popup.popup,e,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await We(this.body);const{keyframes:t,options:i}=He(this,"tooltip.hide",{dir:this.localize.dir()});await Ue(this.popup.popup,t,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wo(this,"sl-after-hide")}render(){return bt`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${xe({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};ko.styles=[te,Ze],ko.dependencies={"sl-popup":_o},f([ae("slot:not([name])")],ko.prototype,"defaultSlot",2),f([ae(".tooltip__body")],ko.prototype,"body",2),f([ae("sl-popup")],ko.prototype,"popup",2),f([oe()],ko.prototype,"content",2),f([oe()],ko.prototype,"placement",2),f([oe({type:Boolean,reflect:!0})],ko.prototype,"disabled",2),f([oe({type:Number})],ko.prototype,"distance",2),f([oe({type:Boolean,reflect:!0})],ko.prototype,"open",2),f([oe({type:Number})],ko.prototype,"skidding",2),f([oe()],ko.prototype,"trigger",2),f([oe({type:Boolean})],ko.prototype,"hoist",2),f([Jt("open",{waitUntilFirstUpdate:!0})],ko.prototype,"handleOpenChange",1),f([Jt(["content","distance","hoist","placement","skidding"])],ko.prototype,"handleOptionsChange",1),f([Jt("disabled")],ko.prototype,"handleDisabledChange",1),Ne("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Ne("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),ko.define("sl-tooltip");var Co=P`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function So(t,e,i){return(t=>Object.is(t,-0)?0:t)(t<e?e:t>i?i:t)}function $o(t,e=!1){function i(t){const e=t.getChildrenItems({includeDisabled:!1});if(e.length){const i=e.every(t=>t.selected),o=e.every(t=>!t.selected&&!t.indeterminate);t.selected=i,t.indeterminate=!i&&!o}}!function t(o){for(const i of o.getChildrenItems())i.selected=e?o.selected||i.selected:!i.disabled&&o.selected,t(i);e&&i(o)}(t),function t(e){const o=e.parentElement;Ye.isTreeItem(o)&&(i(o),t(o))}(t)}var Ao=class extends ce{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Le(this),this.initTreeItem=t=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),o=this.getExpandButtonIcon(e);o&&(null===i?t.append(o):i.hasAttribute("data-default")&&i.replaceWith(o))})},this.handleTreeChanged=t=>{for(const e of t){const t=[...e.addedNodes].filter(Ye.isTreeItem),i=[...e.removedNodes].filter(Ye.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Ye.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}getExpandButtonIcon(t){const e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){const i=e.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),$o(t);else if("single"===this.selection||t.isLeaf){const e=this.getAllTreeItems();for(const i of e)i.selected=i===t}else"leaf"===this.selection&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(t=>!e.includes(t)))&&Promise.all(i.map(t=>t.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){null==t||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key))return;if(t.composedPath().some(t=>{var e;return["input","textarea"].includes(null==(e=null==t?void 0:t.tagName)?void 0:e.toLowerCase())}))return;const e=this.getFocusableItems(),i="ltr"===this.localize.dir(),o="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();const r=e.findIndex(t=>t.matches(":focus")),s=e[r],n=t=>{const i=e[So(t,0,e.length-1)];this.focusItem(i)},a=t=>{s.expanded=t};"ArrowDown"===t.key?n(r+1):"ArrowUp"===t.key?n(r-1):i&&"ArrowRight"===t.key||o&&"ArrowLeft"===t.key?!s||s.disabled||s.expanded||s.isLeaf&&!s.lazy?n(r+1):a(!0):i&&"ArrowLeft"===t.key||o&&"ArrowRight"===t.key?!s||s.disabled||s.isLeaf||!s.expanded?n(r-1):a(!1):"Home"===t.key?n(0):"End"===t.key?n(e.length-1):"Enter"!==t.key&&" "!==t.key||s.disabled||this.selectItem(s)}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),o=t.composedPath().some(t=>{var e;return null==(e=null==t?void 0:t.classList)?void 0:e.contains("tree-item__expand-button")});i&&!i.disabled&&e===this.clickTarget&&(o?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t="multiple"===this.selection,e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(t=>$o(t,!0)))}get selectedItems(){return this.getAllTreeItems().filter(t=>t.selected)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(t=>{var i;if(t.disabled)return!1;const o=null==(i=t.parentElement)?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||e.has(o))&&e.add(t),!e.has(t)})}render(){return bt`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ao.styles=[te,Co],f([ae("slot:not([name])")],Ao.prototype,"defaultSlot",2),f([ae("slot[name=expand-icon]")],Ao.prototype,"expandedIconSlot",2),f([ae("slot[name=collapse-icon]")],Ao.prototype,"collapsedIconSlot",2),f([oe()],Ao.prototype,"selection",2),f([Jt("selection")],Ao.prototype,"handleSelectionChange",1),Ao.define("sl-tree");var zo=P`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Eo=class extends ce{render(){return bt` <slot></slot> `}};Eo.styles=[te,zo],Eo.define("sl-visually-hidden");var To=P`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Po=0,Mo=class extends ce{constructor(){super(...arguments),this.attrId=++Po,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return bt`
      <slot
        part="base"
        class=${xe({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Mo.styles=[te,To],f([oe({reflect:!0})],Mo.prototype,"name",2),f([oe({type:Boolean,reflect:!0})],Mo.prototype,"active",2),f([Jt("active")],Mo.prototype,"handleActiveChange",1),Mo.define("sl-tab-panel");var Io=P`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Oo=P`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;const Do=Symbol.for(""),Lo=t=>{if(t?.r===Do)return t?._$litStatic$},Bo=(t,...e)=>({_$litStatic$:e.reduce((e,i,o)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:Do}),Ro=new Map,Fo=t=>(e,...i)=>{const o=i.length;let r,s;const n=[],a=[];let l,c=0,d=!1;for(;c<o;){for(l=e[c];c<o&&void 0!==(s=i[c],r=Lo(s));)l+=r+e[++c],d=!0;c!==o&&a.push(s),n.push(l),c++}if(c===o&&n.push(e[o]),d){const t=n.join("$$lit$$");void 0===(e=Ro.get(t))&&(n.raw=n,Ro.set(t,e=n)),i=a}return t(e,...i)},Vo=Fo(bt);Fo(vt),Fo(yt);var No=class extends ce{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?Bo`a`:Bo`button`;return Vo`
      <${e}
        part="base"
        class=${xe({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${_e(t?void 0:this.disabled)}
        type=${_e(t?void 0:"button")}
        href=${_e(t?this.href:void 0)}
        target=${_e(t?this.target:void 0)}
        download=${_e(t?this.download:void 0)}
        rel=${_e(t&&this.target?"noreferrer noopener":void 0)}
        role=${_e(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${_e(this.name)}
          library=${_e(this.library)}
          src=${_e(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};No.styles=[te,Oo],No.dependencies={"sl-icon":be},f([ae(".icon-button")],No.prototype,"button",2),f([re()],No.prototype,"hasFocus",2),f([oe()],No.prototype,"name",2),f([oe()],No.prototype,"library",2),f([oe()],No.prototype,"src",2),f([oe()],No.prototype,"href",2),f([oe()],No.prototype,"target",2),f([oe()],No.prototype,"download",2),f([oe()],No.prototype,"label",2),f([oe({type:Boolean,reflect:!0})],No.prototype,"disabled",2);var Ho=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return bt`
      <span
        part="base"
        class=${xe({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?bt`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Ho.styles=[te,Io],Ho.dependencies={"sl-icon-button":No},f([oe({reflect:!0})],Ho.prototype,"variant",2),f([oe({reflect:!0})],Ho.prototype,"size",2),f([oe({type:Boolean,reflect:!0})],Ho.prototype,"pill",2),f([oe({type:Boolean})],Ho.prototype,"removable",2),Ho.define("sl-tag");var Uo=P`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,jo=class extends ce{constructor(){super(...arguments),this.formControlController=new w(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new jt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&(null==(t=this.resizeObserver)||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){"auto"===this.resize?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){return t?("number"==typeof t.top&&(this.input.scrollTop=t.top),void("number"==typeof t.left&&(this.input.scrollLeft=t.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){const r=null!=e?e:this.input.selectionStart,s=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,r,s,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e;return bt`
      <div
        part="form-control"
        class=${xe({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${xe({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${_e(this.name)}
              .value=${we(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_e(this.placeholder)}
              rows=${_e(this.rows)}
              minlength=${_e(this.minlength)}
              maxlength=${_e(this.maxlength)}
              autocapitalize=${_e(this.autocapitalize)}
              autocorrect=${_e(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${_e(this.spellcheck)}
              enterkeyhint=${_e(this.enterkeyhint)}
              inputmode=${_e(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${"auto"!==this.resize}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};jo.styles=[te,Ut,Uo],f([ae(".textarea__control")],jo.prototype,"input",2),f([ae(".textarea__size-adjuster")],jo.prototype,"sizeAdjuster",2),f([re()],jo.prototype,"hasFocus",2),f([oe()],jo.prototype,"title",2),f([oe()],jo.prototype,"name",2),f([oe()],jo.prototype,"value",2),f([oe({reflect:!0})],jo.prototype,"size",2),f([oe({type:Boolean,reflect:!0})],jo.prototype,"filled",2),f([oe()],jo.prototype,"label",2),f([oe({attribute:"help-text"})],jo.prototype,"helpText",2),f([oe()],jo.prototype,"placeholder",2),f([oe({type:Number})],jo.prototype,"rows",2),f([oe()],jo.prototype,"resize",2),f([oe({type:Boolean,reflect:!0})],jo.prototype,"disabled",2),f([oe({type:Boolean,reflect:!0})],jo.prototype,"readonly",2),f([oe({reflect:!0})],jo.prototype,"form",2),f([oe({type:Boolean,reflect:!0})],jo.prototype,"required",2),f([oe({type:Number})],jo.prototype,"minlength",2),f([oe({type:Number})],jo.prototype,"maxlength",2),f([oe()],jo.prototype,"autocapitalize",2),f([oe()],jo.prototype,"autocorrect",2),f([oe()],jo.prototype,"autocomplete",2),f([oe({type:Boolean})],jo.prototype,"autofocus",2),f([oe()],jo.prototype,"enterkeyhint",2),f([oe({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],jo.prototype,"spellcheck",2),f([oe()],jo.prototype,"inputmode",2),f([Ht()],jo.prototype,"defaultValue",2),f([Jt("disabled",{waitUntilFirstUpdate:!0})],jo.prototype,"handleDisabledChange",1),f([Jt("rows",{waitUntilFirstUpdate:!0})],jo.prototype,"handleRowsChange",1),f([Jt("value",{waitUntilFirstUpdate:!0})],jo.prototype,"handleValueChange",1),jo.define("sl-textarea");var qo=P`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Wo=0,Ko=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.attrId=++Wo,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,bt`
      <div
        part="base"
        class=${xe({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?bt`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Ko.styles=[te,qo],Ko.dependencies={"sl-icon-button":No},f([ae(".tab")],Ko.prototype,"tab",2),f([oe({reflect:!0})],Ko.prototype,"panel",2),f([oe({type:Boolean,reflect:!0})],Ko.prototype,"active",2),f([oe({type:Boolean,reflect:!0})],Ko.prototype,"closable",2),f([oe({type:Boolean,reflect:!0})],Ko.prototype,"disabled",2),f([oe({type:Number,reflect:!0})],Ko.prototype,"tabIndex",2),f([Jt("active")],Ko.prototype,"handleActiveChange",1),f([Jt("disabled")],Ko.prototype,"handleDisabledChange",1),Ko.define("sl-tab");var Xo=P`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Go=P`
  :host {
    display: contents;
  }
`,Yo=class extends ce{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(null!==t){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(t=>this.resizeObserver.unobserve(t)),this.observedElements=[],e.forEach(t=>{this.resizeObserver.observe(t),this.observedElements.push(t)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return bt` <slot @slotchange=${this.handleSlotChange}></slot> `}};Yo.styles=[te,Go],f([oe({type:Boolean,reflect:!0})],Yo.prototype,"disabled",2),f([Jt("disabled",{waitUntilFirstUpdate:!0})],Yo.prototype,"handleDisabledChange",1);var Zo=new Set;function Qo(t){if(Zo.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Jo(t){Zo.delete(t),0===Zo.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function tr(t,e,i="vertical",o="smooth"){const r=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),s=r.top+e.scrollTop,n=r.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,d=e.scrollTop+e.offsetHeight;"horizontal"!==i&&"both"!==i||(n<a?e.scrollTo({left:n,behavior:o}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:o})),"vertical"!==i&&"both"!==i||(s<c?e.scrollTo({top:s,behavior:o}):s+t.clientHeight>d&&e.scrollTo({top:s-e.offsetHeight+t.clientHeight,behavior:o}))}var er=class extends ce{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Le(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const e=t.filter(({target:t})=>{if(t===this)return!0;if(t.closest("sl-tab-group")!==this)return!1;const e=t.tagName.toLowerCase();return"sl-tab"===e||"sl-tab-panel"===e});if(0!==e.length)if(e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>"disabled"===t.attributeName))this.syncTabsAndPanels();else if(e.some(t=>"active"===t.attributeName)){const t=e.filter(t=>"active"===t.attributeName&&"sl-tab"===t.target.tagName.toLowerCase()).map(t=>t.target),i=t.find(t=>t.active);i&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{const t=new IntersectionObserver((t,e)=>{var i;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(i=this.getActiveTab())?i:this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))});t.observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect(),this.nav&&(null==(e=this.resizeObserver)||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>"sl-tab-panel"===t.tagName.toLowerCase())}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const e=this.tabs.find(t=>t.matches(":focus")),i="rtl"===this.localize.dir();let o=null;if("sl-tab"===(null==e?void 0:e.tagName.toLowerCase())){if("Home"===t.key)o=this.focusableTabs[0];else if("End"===t.key)o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){const t=this.tabs.findIndex(t=>t===e);o=this.findNextFocusableTab(t,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){const t=this.tabs.findIndex(t=>t===e);o=this.findNextFocusableTab(t,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(t=>{t.tabIndex=t===o?0:-1}),["top","bottom"].includes(this.placement)&&tr(o,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=u({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.forEach(t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1}),this.panels.forEach(t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?void 0:e.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&tr(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(e=>e.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,o="rtl"===this.localize.dir(),r=this.getAllTabs(),s=r.slice(0,r.indexOf(t)).reduce((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?-1*s.left+"px":`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${s.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let i=null;const o="forward"===e?1:-1;let r=t+o;for(;t<this.tabs.length;){if(i=this.tabs[r]||null,null===i){i="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;r+=o}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(e=>e.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t="rtl"===this.localize.dir();return bt`
      <div
        part="base"
        class=${xe({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?bt`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${xe({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?bt`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${xe({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};er.styles=[te,Xo],er.dependencies={"sl-icon-button":No,"sl-resize-observer":Yo},f([ae(".tab-group")],er.prototype,"tabGroup",2),f([ae(".tab-group__body")],er.prototype,"body",2),f([ae(".tab-group__nav")],er.prototype,"nav",2),f([ae(".tab-group__indicator")],er.prototype,"indicator",2),f([re()],er.prototype,"hasScrollControls",2),f([re()],er.prototype,"shouldHideScrollStartButton",2),f([re()],er.prototype,"shouldHideScrollEndButton",2),f([oe()],er.prototype,"placement",2),f([oe()],er.prototype,"activation",2),f([oe({attribute:"no-scroll-controls",type:Boolean})],er.prototype,"noScrollControls",2),f([oe({attribute:"fixed-scroll-controls",type:Boolean})],er.prototype,"fixedScrollControls",2),f([se({passive:!0})],er.prototype,"updateScrollButtons",1),f([Jt("noScrollControls",{waitUntilFirstUpdate:!0})],er.prototype,"updateScrollControls",1),f([Jt("placement",{waitUntilFirstUpdate:!0})],er.prototype,"syncIndicator",1),er.define("sl-tab-group");var ir=P`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,or=class extends ce{constructor(){super(...arguments),this.effect="none"}render(){return bt`
      <div
        part="base"
        class=${xe({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};or.styles=[te,ir],f([oe()],or.prototype,"effect",2),or.define("sl-skeleton");var rr=P`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function sr(t,e){function i(i){const o=t.getBoundingClientRect(),r=t.ownerDocument.defaultView,s=o.left+r.scrollX,n=o.top+r.scrollY,a=i.pageX-s,l=i.pageY-n;(null==e?void 0:e.onMove)&&e.onMove(a,l)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",function t(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",t),(null==e?void 0:e.onStop)&&e.onStop()}),(null==e?void 0:e.initialEvent)instanceof PointerEvent&&i(e.initialEvent)}var nr=()=>null,ar=class extends ce{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Le(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=nr,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:i,size:o,snapThreshold:r,isRtl:s,vertical:n})=>{let a=i,l=Number.POSITIVE_INFINITY;return e.forEach(e=>{let c;if(e.startsWith("repeat(")){const e=t.substring(7,t.length-1),r=e.endsWith("%"),a=Number.parseFloat(e),l=r?o*(a/100):a;c=Math.round((s&&!n?o-i:i)/l)*l}else c=e.endsWith("%")?o*(Number.parseFloat(e)/100):Number.parseFloat(e);s&&!n&&(c=o-c);const d=Math.abs(i-c);d<=r&&d<l&&(a=c,l=d)}),a}}set snap(t){this.snapValue=null!=t?t:"",this.snapFunction=t?"string"==typeof t?this.toSnapFunction(t):t:nr}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e="rtl"===this.localize.dir();this.disabled||(t.cancelable&&t.preventDefault(),sr(this,{onMove:(t,i)=>{var o;let r=this.vertical?i:t;"end"===this.primary&&(r=this.size-r),r=null!=(o=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))?o:r,this.position=So(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*("end"===this.primary?-1:1);if(t.preventDefault(),("ArrowLeft"===t.key&&!this.vertical||"ArrowUp"===t.key&&this.vertical)&&(e-=i),("ArrowRight"===t.key&&!this.vertical||"ArrowDown"===t.key&&this.vertical)&&(e+=i),"Home"===t.key&&(e="end"===this.primary?100:0),"End"===t.key&&(e="end"===this.primary?0:100),"Enter"===t.key)if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const t=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=t})}this.position=So(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),o=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,r="auto";return"end"===this.primary?i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${o}`:i&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${r}`,this.style[e]="",bt`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${_e(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ar.styles=[te,rr],f([ae(".divider")],ar.prototype,"divider",2),f([oe({type:Number,reflect:!0})],ar.prototype,"position",2),f([oe({attribute:"position-in-pixels",type:Number})],ar.prototype,"positionInPixels",2),f([oe({type:Boolean,reflect:!0})],ar.prototype,"vertical",2),f([oe({type:Boolean,reflect:!0})],ar.prototype,"disabled",2),f([oe()],ar.prototype,"primary",2),f([oe({reflect:!0})],ar.prototype,"snap",1),f([oe({type:Number,attribute:"snap-threshold"})],ar.prototype,"snapThreshold",2),f([Jt("position")],ar.prototype,"handlePositionChange",1),f([Jt("positionInPixels")],ar.prototype,"handlePositionInPixelsChange",1),f([Jt("vertical")],ar.prototype,"handleVerticalChange",1),ar.define("sl-split-panel");var lr=P`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,cr=class extends ce{constructor(){super(...arguments),this.formControlController=new w(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new jt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return bt`
      <div
        class=${xe({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${xe({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${_e(this.value)}
            .checked=${we(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};cr.styles=[te,Ut,lr],f([ae('input[type="checkbox"]')],cr.prototype,"input",2),f([re()],cr.prototype,"hasFocus",2),f([oe()],cr.prototype,"title",2),f([oe()],cr.prototype,"name",2),f([oe()],cr.prototype,"value",2),f([oe({reflect:!0})],cr.prototype,"size",2),f([oe({type:Boolean,reflect:!0})],cr.prototype,"disabled",2),f([oe({type:Boolean,reflect:!0})],cr.prototype,"checked",2),f([Ht("checked")],cr.prototype,"defaultChecked",2),f([oe({reflect:!0})],cr.prototype,"form",2),f([oe({type:Boolean,reflect:!0})],cr.prototype,"required",2),f([oe({attribute:"help-text"})],cr.prototype,"helpText",2),f([Jt("checked",{waitUntilFirstUpdate:!0})],cr.prototype,"handleCheckedChange",1),f([Jt("disabled",{waitUntilFirstUpdate:!0})],cr.prototype,"handleDisabledChange",1),cr.define("sl-switch"),Yo.define("sl-resize-observer");var dr=P`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;class hr extends ye{constructor(t){if(super(t),this.it=_t,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===_t||null==t)return this._t=void 0,this.it=t;if(t===xt)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}hr.directiveName="unsafeHTML",hr.resultType=1;const ur=ve(hr);var pr=class extends ce{constructor(){super(...arguments),this.formControlController=new w(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new jt(this,"help-text","label"),this.localize=new Le(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>bt`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=null!==e.closest(".select__clear"),o=null!==e.closest("sl-icon-button");if(!i&&!o){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),i=e.indexOf(this.currentOption);let o=Math.max(0,i);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(o=i+1,o>e.length-1&&(o=0)):"ArrowUp"===t.key?(o=i-1,o<0&&(o=e.length-1)):"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),this.setCurrentOption(e[o])}if(t.key&&1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e)if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const e=t.composedPath().some(t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase());this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const e=t.target.closest("sl-option"),i=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],o=[];t.forEach(t=>o.push(t.value)),this.setSelectedOptions(t.filter(t=>i.includes(t.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(t=>{t.current=!1,t.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(t=>t.selected=!1),i.length&&i.forEach(t=>t.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const o=this.getAllOptions();this.selectedOptions=o.filter(t=>t.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=null!=(t=null==o?void 0:o.value)?t:"",this.displayLabel=null!=(i=null==(e=null==o?void 0:o.getTextLabel)?void 0:e.call(o))?i:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return bt`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof i?ur(i):i}
        </div>`}return e===this.maxOptionsVisible?bt`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:bt``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"value"===t){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(t=>e.includes(t.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await We(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=He(this,"select.show",{dir:this.localize.dir()});await Ue(this.popup.popup,t,e),this.currentOption&&tr(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await We(this);const{keyframes:t,options:e}=He(this,"select.hide",{dir:this.localize.dir()});await Ue(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,wo(this,"sl-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,wo(this,"sl-after-hide");this.open=!1}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value&&this.value.length<=0;return bt`
      <div
        part="form-control"
        class=${xe({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${xe({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?bt`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?bt`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};pr.styles=[te,Ut,dr],pr.dependencies={"sl-icon":be,"sl-popup":_o,"sl-tag":Ho},f([ae(".select")],pr.prototype,"popup",2),f([ae(".select__combobox")],pr.prototype,"combobox",2),f([ae(".select__display-input")],pr.prototype,"displayInput",2),f([ae(".select__value-input")],pr.prototype,"valueInput",2),f([ae(".select__listbox")],pr.prototype,"listbox",2),f([re()],pr.prototype,"hasFocus",2),f([re()],pr.prototype,"displayLabel",2),f([re()],pr.prototype,"currentOption",2),f([re()],pr.prototype,"selectedOptions",2),f([re()],pr.prototype,"valueHasChanged",2),f([oe()],pr.prototype,"name",2),f([re()],pr.prototype,"value",1),f([oe({attribute:"value"})],pr.prototype,"defaultValue",2),f([oe({reflect:!0})],pr.prototype,"size",2),f([oe()],pr.prototype,"placeholder",2),f([oe({type:Boolean,reflect:!0})],pr.prototype,"multiple",2),f([oe({attribute:"max-options-visible",type:Number})],pr.prototype,"maxOptionsVisible",2),f([oe({type:Boolean,reflect:!0})],pr.prototype,"disabled",2),f([oe({type:Boolean})],pr.prototype,"clearable",2),f([oe({type:Boolean,reflect:!0})],pr.prototype,"open",2),f([oe({type:Boolean})],pr.prototype,"hoist",2),f([oe({type:Boolean,reflect:!0})],pr.prototype,"filled",2),f([oe({type:Boolean,reflect:!0})],pr.prototype,"pill",2),f([oe()],pr.prototype,"label",2),f([oe({reflect:!0})],pr.prototype,"placement",2),f([oe({attribute:"help-text"})],pr.prototype,"helpText",2),f([oe({reflect:!0})],pr.prototype,"form",2),f([oe({type:Boolean,reflect:!0})],pr.prototype,"required",2),f([oe()],pr.prototype,"getTag",2),f([Jt("disabled",{waitUntilFirstUpdate:!0})],pr.prototype,"handleDisabledChange",1),f([Jt(["defaultValue","value"],{waitUntilFirstUpdate:!0})],pr.prototype,"handleValueChange",1),f([Jt("open",{waitUntilFirstUpdate:!0})],pr.prototype,"handleOpenChange",1),Ne("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),Ne("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),pr.define("sl-select"),Be.define("sl-spinner");var fr=P`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,mr=class extends ce{constructor(){super(...arguments),this.formControlController=new w(this),this.hasSlotController=new jt(this,"help-text","label"),this.localize=new Le(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",100*t+"%")}syncTooltip(t){if(null!==this.output){const e=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=e*t;if("rtl"===this.localize.dir()){const s=`${e-r}px + ${t} * ${o}`;this.output.style.translate=`calc((${s} - ${i/2}px - ${o} / 2))`}else{const e=`${r}px - ${t} * ${o}`;this.output.style.translate=`calc(${e} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e;return bt`
      <div
        part="form-control"
        class=${xe({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${xe({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${_e(this.name)}
              ?disabled=${this.disabled}
              min=${_e(this.min)}
              max=${_e(this.max)}
              step=${_e(this.step)}
              .value=${we(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"===this.tooltip||this.disabled?"":bt`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};mr.styles=[te,Ut,fr],f([ae(".range__control")],mr.prototype,"input",2),f([ae(".range__tooltip")],mr.prototype,"output",2),f([re()],mr.prototype,"hasFocus",2),f([re()],mr.prototype,"hasTooltip",2),f([oe()],mr.prototype,"title",2),f([oe()],mr.prototype,"name",2),f([oe({type:Number})],mr.prototype,"value",2),f([oe()],mr.prototype,"label",2),f([oe({attribute:"help-text"})],mr.prototype,"helpText",2),f([oe({type:Boolean,reflect:!0})],mr.prototype,"disabled",2),f([oe({type:Number})],mr.prototype,"min",2),f([oe({type:Number})],mr.prototype,"max",2),f([oe({type:Number})],mr.prototype,"step",2),f([oe()],mr.prototype,"tooltip",2),f([oe({attribute:!1})],mr.prototype,"tooltipFormatter",2),f([oe({reflect:!0})],mr.prototype,"form",2),f([Ht()],mr.prototype,"defaultValue",2),f([se({passive:!0})],mr.prototype,"handleThumbDragStart",1),f([Jt("value",{waitUntilFirstUpdate:!0})],mr.prototype,"handleValueChange",1),f([Jt("disabled",{waitUntilFirstUpdate:!0})],mr.prototype,"handleDisabledChange",1),f([Jt("hasTooltip",{waitUntilFirstUpdate:!0})],mr.prototype,"syncRange",1),mr.define("sl-range");var gr=P`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;const br="important",vr=" !"+br,yr=ve(class extends ye{constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const o=e[t];if(null!=o){this.ft.add(t);const e="string"==typeof o&&o.endsWith(vr);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?br:""):i[t]=o}}return xt}});var xr=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e="rtl"===this.localize.dir(),{left:i,right:o,width:r}=this.rating.getBoundingClientRect();return So(e?this.roundToPrecision((o-t)/r*this.max,this.precision):this.roundToPrecision((t-i)/r*this.max,this.precision),0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir(),o=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===t.key||e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-e),t.preventDefault()}if("ArrowUp"===t.key||e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key){const e=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+e),t.preventDefault()}"Home"===t.key&&(this.value=0,t.preventDefault()),"End"===t.key&&(this.value=this.max,t.preventDefault()),this.value!==o&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const i=1/e;return Math.ceil(t*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t="rtl"===this.localize.dir(),e=Array.from(Array(this.max).keys());let i=0;return i=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,bt`
      <div
        part="base"
        class=${xe({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(e=>i>e&&i<e+1?bt`
                <span
                  class=${xe({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1})}
                  role="presentation"
                >
                  <div
                    style=${yr({clipPath:t?`inset(0 ${100*(i-e)}% 0 0)`:`inset(0 0 0 ${100*(i-e)}%)`})}
                  >
                    ${ur(this.getSymbol(e+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${yr({clipPath:t?`inset(0 0 0 ${100-100*(i-e)}%)`:`inset(0 ${100-100*(i-e)}% 0 0)`})}
                  >
                    ${ur(this.getSymbol(e+1))}
                  </div>
                </span>
              `:bt`
              <span
                class=${xe({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===e+1,"rating__symbol--active":i>=e+1})}
                role="presentation"
              >
                ${ur(this.getSymbol(e+1))}
              </span>
            `)}
        </span>
      </div>
    `}};xr.styles=[te,gr],xr.dependencies={"sl-icon":be},f([ae(".rating")],xr.prototype,"rating",2),f([re()],xr.prototype,"hoverValue",2),f([re()],xr.prototype,"isHovering",2),f([oe()],xr.prototype,"label",2),f([oe({type:Number})],xr.prototype,"value",2),f([oe({type:Number})],xr.prototype,"max",2),f([oe({type:Number})],xr.prototype,"precision",2),f([oe({type:Boolean,reflect:!0})],xr.prototype,"readonly",2),f([oe({type:Boolean,reflect:!0})],xr.prototype,"disabled",2),f([oe()],xr.prototype,"getSymbol",2),f([se({passive:!0})],xr.prototype,"handleTouchMove",1),f([Jt("hoverValue")],xr.prototype,"handleHoverValueChange",1),f([Jt("isHovering")],xr.prototype,"handleIsHoveringChange",1),xr.define("sl-rating");var _r=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],wr=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=e.getTime()-t.getTime(),{unit:o,value:r}=_r.find(t=>Math.abs(i)<t.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/r),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let t;t=function(t){const e={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return e-Date.now()%e}("minute"===o?"second":"hour"===o?"minute":"day"===o?"hour":"day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),t)}return bt` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};f([re()],wr.prototype,"isoTime",2),f([re()],wr.prototype,"relativeTime",2),f([oe()],wr.prototype,"date",2),f([oe()],wr.prototype,"format",2),f([oe()],wr.prototype,"numeric",2),f([oe({type:Boolean})],wr.prototype,"sync",2),wr.define("sl-relative-time");var kr=P`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Cr=P`
  ${kr}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Sr=class extends ce{constructor(){super(...arguments),this.hasSlotController=new jt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Vo`
      <div part="base" role="presentation">
        <button
          part="${"button"+(this.checked?" button--checked":"")}"
          role="radio"
          aria-checked="${this.checked}"
          class=${xe({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${_e(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Sr.styles=[te,Cr],f([ae(".button")],Sr.prototype,"input",2),f([ae(".hidden-input")],Sr.prototype,"hiddenInput",2),f([re()],Sr.prototype,"hasFocus",2),f([oe({type:Boolean,reflect:!0})],Sr.prototype,"checked",2),f([oe()],Sr.prototype,"value",2),f([oe({type:Boolean,reflect:!0})],Sr.prototype,"disabled",2),f([oe({reflect:!0})],Sr.prototype,"size",2),f([oe({type:Boolean,reflect:!0})],Sr.prototype,"pill",2),f([Jt("disabled",{waitUntilFirstUpdate:!0})],Sr.prototype,"handleDisabledChange",1),Sr.define("sl-radio-button");var $r=P`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Ar=P`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,zr=class extends ce{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Er(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Er(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Er(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Er(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),o=Er(e);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",0===i),o.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),o.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),o.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===o.tagName.toLowerCase()))})}render(){return bt`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function Er(t){var e;const i="sl-button, sl-radio-button";return null!=(e=t.closest(i))?e:t.querySelector(i)}zr.styles=[te,Ar],f([ae("slot")],zr.prototype,"defaultSlot",2),f([re()],zr.prototype,"disableRole",2),f([oe()],zr.prototype,"label",2);var Tr=class extends ce{constructor(){super(...arguments),this.formControlController=new w(this),this.hasSlotController=new jt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return""!==this.customValidityMessage?S:t?C:k}get validationMessage(){const t=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),o=this.value;e&&!e.disabled&&(this.value=e.value,i.forEach(t=>t.checked=t===e),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(t=>!t.disabled),o=null!=(e=i.find(t=>t.checked))?e:i[0],r=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,s=this.value;let n=i.indexOf(o)+r;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(t=>{t.checked=!1,this.hasButtonGroup||t.setAttribute("tabindex","-1")}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].setAttribute("tabindex","0"),i[n].focus()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size})),this.hasButtonGroup=i.some(t=>"sl-radio-button"===t.tagName.toLowerCase()),i.length>0&&!i.some(t=>t.checked))if(this.hasButtonGroup){const e=null==(t=i[0].shadowRoot)?void 0:t.querySelector("button");e&&e.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const t=null==(e=this.shadowRoot)?void 0:e.querySelector("sl-button-group");t&&(t.disableRole=!0)}}syncRadios(){customElements.get("sl-radio")&&customElements.get("sl-radio-button")?this.syncRadioElements():(customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios()))}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=""!==this.customValidityMessage;return!t&&!e||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),i=e.find(t=>t.checked),o=e.find(t=>!t.disabled),r=i||o;r&&r.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=bt`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return bt`
      <fieldset
        part="form-control"
        class=${xe({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?bt`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Tr.styles=[te,Ut,$r],Tr.dependencies={"sl-button-group":zr},f([ae("slot:not([name])")],Tr.prototype,"defaultSlot",2),f([ae(".radio-group__validation-input")],Tr.prototype,"validationInput",2),f([re()],Tr.prototype,"hasButtonGroup",2),f([re()],Tr.prototype,"errorMessage",2),f([re()],Tr.prototype,"defaultValue",2),f([oe()],Tr.prototype,"label",2),f([oe({attribute:"help-text"})],Tr.prototype,"helpText",2),f([oe()],Tr.prototype,"name",2),f([oe({reflect:!0})],Tr.prototype,"value",2),f([oe({reflect:!0})],Tr.prototype,"size",2),f([oe({reflect:!0})],Tr.prototype,"form",2),f([oe({type:Boolean,reflect:!0})],Tr.prototype,"required",2),f([Jt("size",{waitUntilFirstUpdate:!0})],Tr.prototype,"handleSizeChange",1),f([Jt("value")],Tr.prototype,"handleValueChange",1),Tr.define("sl-radio-group");var Pr=P`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Mr=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),e=2*Math.PI*t,i=e-this.value/100*e;this.indicatorOffset=`${i}px`}}render(){return bt`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Mr.styles=[te,Pr],f([ae(".progress-ring__indicator")],Mr.prototype,"indicator",2),f([re()],Mr.prototype,"indicatorOffset",2),f([oe({type:Number,reflect:!0})],Mr.prototype,"value",2),f([oe()],Mr.prototype,"label",2),Mr.define("sl-progress-ring");var Ir=P`
  :host {
    display: inline-block;
  }
`;let Or=null;class Dr{}Dr.render=function(t,e){Or(t,e)},self.QrCreator=Dr,function(t){function e(e,i,o,r){var s={},n=t(o,i);n.u(e),n.J(),r=r||0;var a=n.h(),l=n.h()+2*r;return s.text=e,s.level=i,s.version=o,s.O=l,s.a=function(t,e){return e-=r,!(0>(t-=r)||t>=a||0>e||e>=a)&&n.a(t,e)},s}function i(t,e,i,o,r,s,n,a,l,c){function d(e,i,o,r,n,a,l){e?(t.lineTo(i+a,o+l),t.arcTo(i,o,r,n,s)):t.lineTo(i,o)}n?t.moveTo(e+s,i):t.moveTo(e,i),d(a,o,i,o,r,-s,0),d(l,o,r,e,r,0,-s),d(c,e,r,e,i,s,0),d(n,e,i,o,i,0,s)}function o(t,e,i,o,r,s,n,a,l,c){function d(e,i,o,r){t.moveTo(e+o,i),t.lineTo(e,i),t.lineTo(e,i+r),t.arcTo(e,i,e+o,i,s)}n&&d(e,i,s,s),a&&d(o,i,-s,s),l&&d(o,r,-s,-s),c&&d(e,r,s,-s)}function r(t,r){t:{var s=r.text,n=r.v,a=r.N,l=r.K,c=r.P;for(a=Math.max(1,a||1),l=Math.min(40,l||40);a<=l;a+=1)try{var d=e(s,n,a,c);break t}catch(t){}d=void 0}if(!d)return null;for(s=t.getContext("2d"),r.background&&(s.fillStyle=r.background,s.fillRect(r.left,r.top,r.size,r.size)),n=d.O,l=r.size/n,s.beginPath(),c=0;c<n;c+=1)for(a=0;a<n;a+=1){var h=s,u=r.left+a*l,p=r.top+c*l,f=c,m=a,g=d.a,b=u+l,v=p+l,y=f-1,x=f+1,_=m-1,w=m+1,k=Math.floor(Math.min(.5,Math.max(0,r.R))*l),C=g(f,m),S=g(y,_),$=g(y,m);y=g(y,w);var A=g(f,w);w=g(x,w),m=g(x,m),x=g(x,_),f=g(f,_),u=Math.round(u),p=Math.round(p),b=Math.round(b),v=Math.round(v),C?i(h,u,p,b,v,k,!$&&!f,!$&&!A,!m&&!A,!m&&!f):o(h,u,p,b,v,k,$&&f&&S,$&&A&&y,m&&A&&w,m&&f&&x)}return function(t,e){var i=e.fill;if("string"==typeof i)t.fillStyle=i;else{var o=i.type,r=i.colorStops;if(i=i.position.map(t=>Math.round(t*e.size)),"linear-gradient"===o)var s=t.createLinearGradient.apply(t,i);else{if("radial-gradient"!==o)throw Error("Unsupported fill");s=t.createRadialGradient.apply(t,i)}r.forEach(([t,e])=>{s.addColorStop(t,e)}),t.fillStyle=s}}(s,r),s.fill(),t}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Or=function(t,e){var i={};Object.assign(i,s,t),i.N=i.minVersion,i.K=i.maxVersion,i.v=i.ecLevel,i.left=i.left,i.top=i.top,i.size=i.size,i.fill=i.fill,i.background=i.background,i.text=i.text,i.R=i.radius,i.P=i.quiet,e instanceof HTMLCanvasElement?(e.width===i.size&&e.height===i.size||(e.width=i.size,e.height=i.size),e.getContext("2d").clearRect(0,0,e.width,e.height),r(e,i)):((t=document.createElement("canvas")).width=i.size,t.height=i.size,i=r(t,i),e.appendChild(i))}}(function(){function t(r,n){function a(t,e){for(var i=-1;7>=i;i+=1)if(!(-1>=t+i||h<=t+i))for(var o=-1;7>=o;o+=1)-1>=e+o||h<=e+o||(d[t+i][e+o]=0<=i&&6>=i&&(0==o||6==o)||0<=o&&6>=o&&(0==i||6==i)||2<=i&&4>=i&&2<=o&&4>=o)}function l(t,i){for(var n=h=4*r+17,l=Array(n),f=0;f<n;f+=1){l[f]=Array(n);for(var m=0;m<n;m+=1)l[f][m]=null}for(d=l,a(0,0),a(h-7,0),a(0,h-7),n=o.G(r),l=0;l<n.length;l+=1)for(f=0;f<n.length;f+=1){m=n[l];var g=n[f];if(null==d[m][g])for(var b=-2;2>=b;b+=1)for(var v=-2;2>=v;v+=1)d[m+b][g+v]=-2==b||2==b||-2==v||2==v||0==b&&0==v}for(n=8;n<h-8;n+=1)null==d[n][6]&&(d[n][6]=0==n%2);for(n=8;n<h-8;n+=1)null==d[6][n]&&(d[6][n]=0==n%2);for(n=o.w(c<<3|i),l=0;15>l;l+=1)f=!t&&1==(n>>l&1),d[6>l?l:8>l?l+1:h-15+l][8]=f,d[8][8>l?h-l-1:9>l?15-l:14-l]=f;if(d[h-8][8]=!t,7<=r){for(n=o.A(r),l=0;18>l;l+=1)f=!t&&1==(n>>l&1),d[Math.floor(l/3)][l%3+h-8-3]=f;for(l=0;18>l;l+=1)f=!t&&1==(n>>l&1),d[l%3+h-8-3][Math.floor(l/3)]=f}if(null==u){for(t=s.I(r,c),n=function(){var t=[],e=0,i={B:function(){return t},c:function(e){return 1==(t[Math.floor(e/8)]>>>7-e%8&1)},put:function(t,e){for(var o=0;o<e;o+=1)i.m(1==(t>>>e-o-1&1))},f:function(){return e},m:function(i){var o=Math.floor(e/8);t.length<=o&&t.push(0),i&&(t[o]|=128>>>e%8),e+=1}};return i}(),l=0;l<p.length;l+=1)f=p[l],n.put(4,4),n.put(f.b(),o.f(4,r)),f.write(n);for(l=f=0;l<t.length;l+=1)f+=t[l].j;if(n.f()>8*f)throw Error("code length overflow. ("+n.f()+">"+8*f+")");for(n.f()+4<=8*f&&n.put(0,4);0!=n.f()%8;)n.m(!1);for(;!(n.f()>=8*f||(n.put(236,8),n.f()>=8*f));)n.put(17,8);var y=0;for(f=l=0,m=Array(t.length),g=Array(t.length),b=0;b<t.length;b+=1){var x=t[b].j,_=t[b].o-x;for(l=Math.max(l,x),f=Math.max(f,_),m[b]=Array(x),v=0;v<m[b].length;v+=1)m[b][v]=255&n.B()[v+y];for(y+=x,v=o.C(_),x=e(m[b],v.b()-1).l(v),g[b]=Array(v.b()-1),v=0;v<g[b].length;v+=1)_=v+x.b()-g[b].length,g[b][v]=0<=_?x.c(_):0}for(v=n=0;v<t.length;v+=1)n+=t[v].o;for(n=Array(n),v=y=0;v<l;v+=1)for(b=0;b<t.length;b+=1)v<m[b].length&&(n[y]=m[b][v],y+=1);for(v=0;v<f;v+=1)for(b=0;b<t.length;b+=1)v<g[b].length&&(n[y]=g[b][v],y+=1);u=n}for(t=u,n=-1,l=h-1,f=7,m=0,i=o.F(i),g=h-1;0<g;g-=2)for(6==g&&--g;;){for(b=0;2>b;b+=1)null==d[l][g-b]&&(v=!1,m<t.length&&(v=1==(t[m]>>>f&1)),i(l,g-b)&&(v=!v),d[l][g-b]=v,-1==--f&&(m+=1,f=7));if(0>(l+=n)||h<=l){l-=n,n=-n;break}}}var c=i[n],d=null,h=0,u=null,p=[],f={u:function(e){e=function(e){var i=t.s(e);return{S:function(){return 4},b:function(){return i.length},write:function(t){for(var e=0;e<i.length;e+=1)t.put(i[e],8)}}}(e),p.push(e),u=null},a:function(t,e){if(0>t||h<=t||0>e||h<=e)throw Error(t+","+e);return d[t][e]},h:function(){return h},J:function(){for(var t=0,e=0,i=0;8>i;i+=1){l(!0,i);var r=o.D(f);(0==i||t>r)&&(t=r,e=i)}l(!1,e)}};return f}function e(t,i){if(void 0===t.length)throw Error(t.length+"/"+i);var o=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var o=Array(t.length-e+i),r=0;r<t.length-e;r+=1)o[r]=t[r+e];return o}(),s={c:function(t){return o[t]},b:function(){return o.length},multiply:function(t){for(var i=Array(s.b()+t.b()-1),o=0;o<s.b();o+=1)for(var n=0;n<t.b();n+=1)i[o+n]^=r.i(r.g(s.c(o))+r.g(t.c(n)));return e(i,0)},l:function(t){if(0>s.b()-t.b())return s;for(var i=r.g(s.c(0))-r.g(t.c(0)),o=Array(s.b()),n=0;n<s.b();n+=1)o[n]=s.c(n);for(n=0;n<t.b();n+=1)o[n]^=r.i(r.g(t.c(n))+i);return e(o,0).l(t)}};return s}t.s=function(t){for(var e=[],i=0;i<t.length;i++){var o=t.charCodeAt(i);128>o?e.push(o):2048>o?e.push(192|o>>6,128|63&o):55296>o||57344<=o?e.push(224|o>>12,128|o>>6&63,128|63&o):(i++,o=65536+((1023&o)<<10|1023&t.charCodeAt(i)),e.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|63&o))}return e};var i={L:1,M:0,Q:3,H:2},o=function(){function t(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e}var i=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],o={w:function(e){for(var i=e<<10;0<=t(i)-t(1335);)i^=1335<<t(i)-t(1335);return 21522^(e<<10|i)},A:function(e){for(var i=e<<12;0<=t(i)-t(7973);)i^=7973<<t(i)-t(7973);return e<<12|i},G:function(t){return i[t-1]},F:function(t){switch(t){case 0:return function(t,e){return 0==(t+e)%2};case 1:return function(t){return 0==t%2};case 2:return function(t,e){return 0==e%3};case 3:return function(t,e){return 0==(t+e)%3};case 4:return function(t,e){return 0==(Math.floor(t/2)+Math.floor(e/3))%2};case 5:return function(t,e){return 0==t*e%2+t*e%3};case 6:return function(t,e){return 0==(t*e%2+t*e%3)%2};case 7:return function(t,e){return 0==(t*e%3+(t+e)%2)%2};default:throw Error("bad maskPattern:"+t)}},C:function(t){for(var i=e([1],0),o=0;o<t;o+=1)i=i.multiply(e([1,r.i(o)],0));return i},f:function(t,e){if(4!=t||1>e||40<e)throw Error("mode: "+t+"; type: "+e);return 10>e?8:16},D:function(t){for(var e=t.h(),i=0,o=0;o<e;o+=1)for(var r=0;r<e;r+=1){for(var s=0,n=t.a(o,r),a=-1;1>=a;a+=1)if(!(0>o+a||e<=o+a))for(var l=-1;1>=l;l+=1)0>r+l||e<=r+l||(0!=a||0!=l)&&n==t.a(o+a,r+l)&&(s+=1);5<s&&(i+=3+s-5)}for(o=0;o<e-1;o+=1)for(r=0;r<e-1;r+=1)s=0,t.a(o,r)&&(s+=1),t.a(o+1,r)&&(s+=1),t.a(o,r+1)&&(s+=1),t.a(o+1,r+1)&&(s+=1),(0==s||4==s)&&(i+=3);for(o=0;o<e;o+=1)for(r=0;r<e-6;r+=1)t.a(o,r)&&!t.a(o,r+1)&&t.a(o,r+2)&&t.a(o,r+3)&&t.a(o,r+4)&&!t.a(o,r+5)&&t.a(o,r+6)&&(i+=40);for(r=0;r<e;r+=1)for(o=0;o<e-6;o+=1)t.a(o,r)&&!t.a(o+1,r)&&t.a(o+2,r)&&t.a(o+3,r)&&t.a(o+4,r)&&!t.a(o+5,r)&&t.a(o+6,r)&&(i+=40);for(r=s=0;r<e;r+=1)for(o=0;o<e;o+=1)t.a(o,r)&&(s+=1);return i+Math.abs(100*s/e/e-50)/5*10}};return o}(),r=function(){for(var t=Array(256),e=Array(256),i=0;8>i;i+=1)t[i]=1<<i;for(i=8;256>i;i+=1)t[i]=t[i-4]^t[i-5]^t[i-6]^t[i-8];for(i=0;255>i;i+=1)e[t[i]]=i;return{g:function(t){if(1>t)throw Error("glog("+t+")");return e[t]},i:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return t[e]}}}(),s=function(){function t(t,o){switch(o){case i.L:return e[4*(t-1)];case i.M:return e[4*(t-1)+1];case i.Q:return e[4*(t-1)+2];case i.H:return e[4*(t-1)+3]}}var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o={I:function(e,i){var o=t(e,i);if(void 0===o)throw Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+i);e=o.length/3,i=[];for(var r=0;r<e;r+=1)for(var s=o[3*r],n=o[3*r+1],a=o[3*r+2],l=0;l<s;l+=1){var c=a,d={};d.o=n,d.j=c,i.push(d)}return i}};return o}();return t}());const Lr=QrCreator;var Br=class extends ce{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Lr.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:2*this.size},this.canvas)}render(){var t;return bt`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${(null==(t=this.label)?void 0:t.length)>0?this.label:this.value}
        style=${yr({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Br.styles=[te,Ir],f([ae("canvas")],Br.prototype,"canvas",2),f([oe()],Br.prototype,"value",2),f([oe()],Br.prototype,"label",2),f([oe({type:Number})],Br.prototype,"size",2),f([oe()],Br.prototype,"fill",2),f([oe()],Br.prototype,"background",2),f([oe({type:Number})],Br.prototype,"radius",2),f([oe({attribute:"error-correction"})],Br.prototype,"errorCorrection",2),f([Jt(["background","errorCorrection","fill","radius","size","value"])],Br.prototype,"generate",1),Br.define("sl-qr-code");var Rr=P`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Fr=class extends ce{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return bt`
      <span
        part="base"
        class=${xe({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":"small"===this.size,"radio--medium":"medium"===this.size,"radio--large":"large"===this.size})}
      >
        <span part="${"control"+(this.checked?" control--checked":"")}" class="radio__control">
          ${this.checked?bt` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Fr.styles=[te,Rr],Fr.dependencies={"sl-icon":be},f([re()],Fr.prototype,"checked",2),f([re()],Fr.prototype,"hasFocus",2),f([oe()],Fr.prototype,"value",2),f([oe({reflect:!0})],Fr.prototype,"size",2),f([oe({type:Boolean,reflect:!0})],Fr.prototype,"disabled",2),f([Jt("checked")],Fr.prototype,"handleCheckedChange",1),f([Jt("disabled",{waitUntilFirstUpdate:!0})],Fr.prototype,"handleDisabledChange",1),Fr.define("sl-radio");var Vr=P`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Nr=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(t.hasAttribute("slot")||(e+=t.textContent)),t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e.trim()}render(){return bt`
      <div
        part="base"
        class=${xe({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Nr.styles=[te,Vr],Nr.dependencies={"sl-icon":be},f([ae(".option__label")],Nr.prototype,"defaultSlot",2),f([re()],Nr.prototype,"current",2),f([re()],Nr.prototype,"selected",2),f([re()],Nr.prototype,"hasHover",2),f([oe({reflect:!0})],Nr.prototype,"value",2),f([oe({type:Boolean,reflect:!0})],Nr.prototype,"disabled",2),f([Jt("disabled")],Nr.prototype,"handleDisabledChange",1),f([Jt("selected")],Nr.prototype,"handleSelectedChange",1),f([Jt("value")],Nr.prototype,"handleValueChange",1),Nr.define("sl-option"),_o.define("sl-popup");var Hr=P`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Ur=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return bt`
      <div
        part="base"
        class=${xe({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":"rtl"===this.localize.dir()})}
        role="progressbar"
        title=${_e(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${yr({width:`${this.value}%`})}>
          ${this.indeterminate?"":bt` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Ur.styles=[te,Hr],f([oe({type:Number,reflect:!0})],Ur.prototype,"value",2),f([oe({type:Boolean,reflect:!0})],Ur.prototype,"indeterminate",2),f([oe()],Ur.prototype,"label",2),Ur.define("sl-progress-bar");var jr=P`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,qr=class extends ce{render(){return bt` <slot part="base" class="menu-label"></slot> `}};qr.styles=[te,jr],qr.define("sl-menu-label");var Wr=P`
  :host {
    display: contents;
  }
`,Kr=class extends ce{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t="string"==typeof this.attr&&this.attr.length>0,e=t&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(t){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return bt` <slot></slot> `}};Kr.styles=[te,Wr],f([oe({reflect:!0})],Kr.prototype,"attr",2),f([oe({attribute:"attr-old-value",type:Boolean,reflect:!0})],Kr.prototype,"attrOldValue",2),f([oe({attribute:"char-data",type:Boolean,reflect:!0})],Kr.prototype,"charData",2),f([oe({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Kr.prototype,"charDataOldValue",2),f([oe({attribute:"child-list",type:Boolean,reflect:!0})],Kr.prototype,"childList",2),f([oe({type:Boolean,reflect:!0})],Kr.prototype,"disabled",2),f([Jt("disabled")],Kr.prototype,"handleDisabledChange",1),f([Jt("attr",{waitUntilFirstUpdate:!0}),Jt("attr-old-value",{waitUntilFirstUpdate:!0}),Jt("char-data",{waitUntilFirstUpdate:!0}),Jt("char-data-old-value",{waitUntilFirstUpdate:!0}),Jt("childList",{waitUntilFirstUpdate:!0})],Kr.prototype,"handleChange",1),Kr.define("sl-mutation-observer");var Xr=P`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Gr=class extends ce{constructor(){super(...arguments),this.formControlController=new w(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new jt(this,"help-text","label"),this.localize=new Le(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout(()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,o="preserve"){const r=null!=e?e:this.input.selectionStart,s=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,r,s,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,o=!!this.helpText||!!e,r=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return bt`
      <div
        part="form-control"
        class=${xe({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${xe({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${_e(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_e(this.placeholder)}
              minlength=${_e(this.minlength)}
              maxlength=${_e(this.maxlength)}
              min=${_e(this.min)}
              max=${_e(this.max)}
              step=${_e(this.step)}
              .value=${we(this.value)}
              autocapitalize=${_e(this.autocapitalize)}
              autocomplete=${_e(this.autocomplete)}
              autocorrect=${_e(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${_e(this.pattern)}
              enterkeyhint=${_e(this.enterkeyhint)}
              inputmode=${_e(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?bt`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?bt`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?bt`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:bt`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Gr.styles=[te,Ut,Xr],Gr.dependencies={"sl-icon":be},f([ae(".input__control")],Gr.prototype,"input",2),f([re()],Gr.prototype,"hasFocus",2),f([oe()],Gr.prototype,"title",2),f([oe({reflect:!0})],Gr.prototype,"type",2),f([oe()],Gr.prototype,"name",2),f([oe()],Gr.prototype,"value",2),f([Ht()],Gr.prototype,"defaultValue",2),f([oe({reflect:!0})],Gr.prototype,"size",2),f([oe({type:Boolean,reflect:!0})],Gr.prototype,"filled",2),f([oe({type:Boolean,reflect:!0})],Gr.prototype,"pill",2),f([oe()],Gr.prototype,"label",2),f([oe({attribute:"help-text"})],Gr.prototype,"helpText",2),f([oe({type:Boolean})],Gr.prototype,"clearable",2),f([oe({type:Boolean,reflect:!0})],Gr.prototype,"disabled",2),f([oe()],Gr.prototype,"placeholder",2),f([oe({type:Boolean,reflect:!0})],Gr.prototype,"readonly",2),f([oe({attribute:"password-toggle",type:Boolean})],Gr.prototype,"passwordToggle",2),f([oe({attribute:"password-visible",type:Boolean})],Gr.prototype,"passwordVisible",2),f([oe({attribute:"no-spin-buttons",type:Boolean})],Gr.prototype,"noSpinButtons",2),f([oe({reflect:!0})],Gr.prototype,"form",2),f([oe({type:Boolean,reflect:!0})],Gr.prototype,"required",2),f([oe()],Gr.prototype,"pattern",2),f([oe({type:Number})],Gr.prototype,"minlength",2),f([oe({type:Number})],Gr.prototype,"maxlength",2),f([oe()],Gr.prototype,"min",2),f([oe()],Gr.prototype,"max",2),f([oe()],Gr.prototype,"step",2),f([oe()],Gr.prototype,"autocapitalize",2),f([oe()],Gr.prototype,"autocorrect",2),f([oe()],Gr.prototype,"autocomplete",2),f([oe({type:Boolean})],Gr.prototype,"autofocus",2),f([oe()],Gr.prototype,"enterkeyhint",2),f([oe({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],Gr.prototype,"spellcheck",2),f([oe()],Gr.prototype,"inputmode",2),f([Jt("disabled",{waitUntilFirstUpdate:!0})],Gr.prototype,"handleDisabledChange",1),f([Jt("step",{waitUntilFirstUpdate:!0})],Gr.prototype,"handleStepChange",1),f([Jt("value",{waitUntilFirstUpdate:!0})],Gr.prototype,"handleValueChange",1),Gr.define("sl-input");var Yr=P`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Zr=class extends ce{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath(),o=i.find(t=>{var i;return e.includes((null==(i=null==t?void 0:t.getAttribute)?void 0:i.call(t,"role"))||"")});if(!o)return;if(i.find(t=>{var e;return"menu"===(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))})!==this)return;const r=o;"checkbox"===r.type&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}})}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let o=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?o++:"ArrowUp"===t.key?o--:"Home"===t.key?o=0:"End"===t.key&&(o=e.length-1),o<0&&(o=e.length-1),o>e.length-1&&(o=0),this.setCurrentItem(e[o]),e[o].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>"0"===t.getAttribute("tabindex"))}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return bt`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Zr.styles=[te,Yr],f([ae("slot")],Zr.prototype,"defaultSlot",2),Zr.define("sl-menu");var Qr=P`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;const Jr=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),Jr(t,e);return!0},ts=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},es=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),rs(e)}};function is(t){void 0!==this._$AN?(ts(this),this._$AM=t,es(this)):this._$AM=t}function os(t,e=!1,i=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(o))for(let t=i;t<o.length;t++)Jr(o[t],!1),ts(o[t]);else null!=o&&(Jr(o,!1),ts(o));else Jr(this,t)}const rs=t=>{2==t.type&&(t._$AP??=os,t._$AQ??=is)};class ss extends ye{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),es(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Jr(this,t),ts(this))}setValue(t){if(he(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class ns{}const as=new WeakMap,ls=ve(class extends ss{render(t){return _t}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),_t}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=as.get(e);void 0===i&&(i=new WeakMap,as.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?as.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var cs=class{constructor(t,e){this.popupRef=new ns,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],i="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:o,top:r,width:s,height:n}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+s:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+s:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+n}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(const t of e.assignedElements())if(i=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==i.length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let t=1;t!==i.length;++t)i[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((t,i)=>{var o;const r=null!=(o=e.get(i))?o:new CSSUnitValue(0,"px");return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?bt`
      <sl-popup
        ${ls(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:bt` <slot name="submenu" hidden></slot> `}},ds=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new jt(this,"submenu"),this.submenuController=new cs(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(i+=t.textContent)}),i}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return bt`
      <div
        id="anchor"
        part="base"
        class=${xe({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?bt` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ds.styles=[te,Qr],ds.dependencies={"sl-icon":be,"sl-popup":_o,"sl-spinner":Be},f([ae("slot:not([name])")],ds.prototype,"defaultSlot",2),f([ae(".menu-item")],ds.prototype,"menuItem",2),f([oe()],ds.prototype,"type",2),f([oe({type:Boolean,reflect:!0})],ds.prototype,"checked",2),f([oe()],ds.prototype,"value",2),f([oe({type:Boolean,reflect:!0})],ds.prototype,"loading",2),f([oe({type:Boolean,reflect:!0})],ds.prototype,"disabled",2),f([Jt("checked")],ds.prototype,"handleCheckedChange",1),f([Jt("disabled")],ds.prototype,"handleDisabledChange",1),f([Jt("type")],ds.prototype,"handleTypeChange",1),ds.define("sl-menu-item");var hs=P`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,us=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),i="rtl"===this.localize.dir();t.preventDefault(),sr(this.base,{onMove:t=>{this.position=parseFloat(So(t/e*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const o=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key)&&(r-=o),(e&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key)&&(r+=o),"Home"===t.key&&(r=0),"End"===t.key&&(r=100),r=So(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){const t="rtl"===this.localize.dir();return bt`
      <div
        part="base"
        id="image-comparer"
        class=${xe({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${yr({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${yr({left:t?100-this.position+"%":`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};us.styles=[te,hs],us.scopedElement={"sl-icon":be},f([ae(".image-comparer")],us.prototype,"base",2),f([ae(".image-comparer__handle")],us.prototype,"handle",2),f([oe({type:Number,reflect:!0})],us.prototype,"position",2),f([Jt("position",{waitUntilFirstUpdate:!0})],us.prototype,"handlePositionChange",1),us.define("sl-image-comparer");var ps=P`
  :host {
    display: block;
  }
`,fs=new Map,ms=class extends ce{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(t=>e.setAttribute(t.name,t.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await function(t,e="cors"){const i=fs.get(t);if(void 0!==i)return Promise.resolve(i);const o=fetch(t,{mode:e}).then(async e=>{const i={ok:e.ok,status:e.status,html:await e.text()};return fs.set(t,i),i});return fs.set(t,o),o}(t,this.mode);if(t!==this.src)return;if(!e.ok)return void this.emit("sl-error",{detail:{status:e.status}});this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(t=>this.executeScript(t)),this.emit("sl-load")}catch(t){this.emit("sl-error",{detail:{status:-1}})}}render(){return bt`<slot></slot>`}};ms.styles=[te,ps],f([oe()],ms.prototype,"src",2),f([oe()],ms.prototype,"mode",2),f([oe({attribute:"allow-scripts",type:Boolean})],ms.prototype,"allowScripts",2),f([Jt("src")],ms.prototype,"handleSrcChange",1),ms.define("sl-include"),be.define("sl-icon"),No.define("sl-icon-button");var gs=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t="bit"===this.unit?["","kilo","mega","giga","tera"]:["","kilo","mega","giga","tera","peta"],e=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),t.length-1)),i=t[e]+this.unit,o=parseFloat((this.value/Math.pow(1e3,e)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};f([oe({type:Number})],gs.prototype,"value",2),f([oe()],gs.prototype,"unit",2),f([oe()],gs.prototype,"display",2),gs.define("sl-format-bytes");var bs=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e="auto"===this.hourFormat?void 0:"12"===this.hourFormat;if(!isNaN(t.getMilliseconds()))return bt`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};f([oe()],bs.prototype,"date",2),f([oe()],bs.prototype,"weekday",2),f([oe()],bs.prototype,"era",2),f([oe()],bs.prototype,"year",2),f([oe()],bs.prototype,"month",2),f([oe()],bs.prototype,"day",2),f([oe()],bs.prototype,"hour",2),f([oe()],bs.prototype,"minute",2),f([oe()],bs.prototype,"second",2),f([oe({attribute:"time-zone-name"})],bs.prototype,"timeZoneName",2),f([oe({attribute:"time-zone"})],bs.prototype,"timeZone",2),f([oe({attribute:"hour-format"})],bs.prototype,"hourFormat",2),bs.define("sl-format-date");var vs=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};f([oe({type:Number})],vs.prototype,"value",2),f([oe()],vs.prototype,"type",2),f([oe({attribute:"no-grouping",type:Boolean})],vs.prototype,"noGrouping",2),f([oe()],vs.prototype,"currency",2),f([oe({attribute:"currency-display"})],vs.prototype,"currencyDisplay",2),f([oe({attribute:"minimum-integer-digits",type:Number})],vs.prototype,"minimumIntegerDigits",2),f([oe({attribute:"minimum-fraction-digits",type:Number})],vs.prototype,"minimumFractionDigits",2),f([oe({attribute:"maximum-fraction-digits",type:Number})],vs.prototype,"maximumFractionDigits",2),f([oe({attribute:"minimum-significant-digits",type:Number})],vs.prototype,"minimumSignificantDigits",2),f([oe({attribute:"maximum-significant-digits",type:Number})],vs.prototype,"maximumSignificantDigits",2),vs.define("sl-format-number");var ys=P`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,xs=class extends ce{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};xs.styles=[te,ys],f([oe({type:Boolean,reflect:!0})],xs.prototype,"vertical",2),f([Jt("vertical")],xs.prototype,"handleVerticalChange",1),xs.define("sl-divider");var _s=P`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*ws(t=document.activeElement){var e,i,o,r,s;null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(e=ws(t.shadowRoot.activeElement),o=e[c("asyncIterator")],r=!1,s={},null==o?(o=e[c("iterator")](),i=t=>s[t]=e=>o[t](e)):(o=o.call(e),i=t=>s[t]=e=>{if(r){if(r=!1,"throw"===t)throw e;return e}return r=!0,{done:!1,value:new g(new Promise(i=>{var r=o[t](e);r instanceof Object||d("Object expected"),i(r)}),1)}}),s[c("iterator")]=()=>s,i("next"),"throw"in o?i("throw"):s.throw=t=>{throw t},"return"in o&&i("return"),s)))}function ks(){return[...ws()].pop()}var Cs=new WeakMap;function Ss(t){let e=Cs.get(t);return e||(e=window.getComputedStyle(t,null),Cs.set(t,e)),e}function $s(t){const e=new WeakMap,i=[];return function o(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]"))return;if(e.has(r))return;e.set(r,!0),!i.includes(r)&&function(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1))return!1;if(t.hasAttribute("disabled"))return!1;if(t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){const e=t.getRootNode(),i=`input[type='radio'][name="${t.getAttribute("name")}"]`,o=e.querySelector(`${i}:checked`);return o?o===t:e.querySelector(i)===t}return!!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Ss(t);return"hidden"!==e.visibility&&"none"!==e.display}(t)&&(!("audio"!==e&&"video"!==e||!t.hasAttribute("controls"))||!!t.hasAttribute("tabindex")||!(!t.hasAttribute("contenteditable")||"false"===t.getAttribute("contenteditable"))||!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=Ss(t),{overflowY:i,overflowX:o}=e;return"scroll"===i||"scroll"===o||"auto"===i&&"auto"===o&&(t.scrollHeight>t.clientHeight&&"auto"===i||!(!(t.scrollWidth>t.clientWidth)||"auto"!==o))}(t))}(r)&&i.push(r),r instanceof HTMLSlotElement&&function(t,e){var i;return(null==(i=t.getRootNode({composed:!0}))?void 0:i.host)!==e}(r,t)&&r.assignedElements({flatten:!0}).forEach(t=>{o(t)}),null!==r.shadowRoot&&"open"===r.shadowRoot.mode&&o(r.shadowRoot)}for(const t of r.children)o(t)}(t),i.sort((t,e)=>{const i=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-i})}var As=[],zs=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const i=ks();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=$s(this.element);let r=o.findIndex(t=>t===i);this.previousFocus=this.currentFocus;const s="forward"===this.tabDirection?1:-1;for(;;){r+s>=o.length?r=0:r+s<0?r=o.length-1:r+=s,this.previousFocus=this.currentFocus;const i=o[r];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(i&&this.possiblyHasTabbableChildren(i))return;t.preventDefault(),this.currentFocus=i,null==(e=this.currentFocus)||e.focus({preventScroll:!1});const n=[...ws()];if(n.includes(this.currentFocus)||!n.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){As.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){As=As.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return As[As.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=$s(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],o="forward"===this.tabDirection?e:i;"function"==typeof(null==o?void 0:o.focus)&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}},Es=t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&(null==(e=document.activeElement)||e.blur())};function Ts(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Ps=class extends ce{constructor(){super(...arguments),this.hasSlotController=new jt(this,"footer"),this.localize=new Le(this),this.modal=new zs(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Qo(this)))}disconnectedCallback(){super.disconnectedCallback(),Jo(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=He(this,"drawer.denyClose",{dir:this.localize.dir()});return void Ue(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Qo(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([We(this.drawer),We(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=He(this,`drawer.show${Ts(this.placement)}`,{dir:this.localize.dir()}),i=He(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Ue(this.panel,e.keyframes,e.options),Ue(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Es(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Jo(this)),await Promise.all([We(this.drawer),We(this.overlay)]);const t=He(this,`drawer.hide${Ts(this.placement)}`,{dir:this.localize.dir()}),e=He(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ue(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Ue(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Qo(this)),this.open&&this.contained&&(this.modal.deactivate(),Jo(this))}async show(){if(!this.open)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wo(this,"sl-after-hide")}render(){return bt`
      <div
        part="base"
        class=${xe({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_e(this.noHeader?this.label:void 0)}
          aria-labelledby=${_e(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":bt`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ps.styles=[te,_s],Ps.dependencies={"sl-icon-button":No},f([ae(".drawer")],Ps.prototype,"drawer",2),f([ae(".drawer__panel")],Ps.prototype,"panel",2),f([ae(".drawer__overlay")],Ps.prototype,"overlay",2),f([oe({type:Boolean,reflect:!0})],Ps.prototype,"open",2),f([oe({reflect:!0})],Ps.prototype,"label",2),f([oe({reflect:!0})],Ps.prototype,"placement",2),f([oe({type:Boolean,reflect:!0})],Ps.prototype,"contained",2),f([oe({attribute:"no-header",type:Boolean,reflect:!0})],Ps.prototype,"noHeader",2),f([Jt("open",{waitUntilFirstUpdate:!0})],Ps.prototype,"handleOpenChange",1),f([Jt("contained",{waitUntilFirstUpdate:!0})],Ps.prototype,"handleNoModalChange",1),Ne("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),Ne("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),Ne("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),Ne("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),Ne("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),Ne("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),Ne("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),Ne("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),Ne("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),Ne("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Ne("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Ps.define("sl-drawer");var Ms=P`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Is=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();const i=(t,e)=>{if(!t)return null;const o=t.closest(e);if(o)return o;const r=t.getRootNode();return r instanceof ShadowRoot?i(r.host,e):null};setTimeout(()=>{var t;const e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?ks():document.activeElement;this.containingElement&&i(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const i=e.getAllItems(),o=i[0],r=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(o),o.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(t=>function(t){var e,i;const o=$s(t);return{start:null!=(e=o[0])?e:null,end:null!=(i=o[o.length-1])?i:null}}(t).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wo(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await We(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=He(this,"dropdown.show",{dir:this.localize.dir()});await Ue(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await We(this);const{keyframes:t,options:e}=He(this,"dropdown.hide",{dir:this.localize.dir()});await Ue(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return bt`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${_e(this.sync?this.sync:void 0)}
        class=${xe({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Is.styles=[te,Ms],Is.dependencies={"sl-popup":_o},f([ae(".dropdown")],Is.prototype,"popup",2),f([ae(".dropdown__trigger")],Is.prototype,"trigger",2),f([ae(".dropdown__panel")],Is.prototype,"panel",2),f([oe({type:Boolean,reflect:!0})],Is.prototype,"open",2),f([oe({reflect:!0})],Is.prototype,"placement",2),f([oe({type:Boolean,reflect:!0})],Is.prototype,"disabled",2),f([oe({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Is.prototype,"stayOpenOnSelect",2),f([oe({attribute:!1})],Is.prototype,"containingElement",2),f([oe({type:Number})],Is.prototype,"distance",2),f([oe({type:Number})],Is.prototype,"skidding",2),f([oe({type:Boolean})],Is.prototype,"hoist",2),f([oe({reflect:!0})],Is.prototype,"sync",2),f([Jt("open",{waitUntilFirstUpdate:!0})],Is.prototype,"handleOpenChange",1),Ne("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),Ne("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),Is.define("sl-dropdown");var Os=P`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Ds=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let r=this.from,s="";i?[r,s]=this.from.trim().split("."):o&&([r,s]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(r):null;n?t=o?n.getAttribute(s)||"":i?n[s]||"":n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(t)try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch(t){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),r="success"===t?this.successIcon:this.errorIcon,s=He(this,"copy.in",{dir:"ltr"}),n=He(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===t?i:o,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(s.keyframes,s.options).finished,setTimeout(async()=>{await r.animate(n.keyframes,n.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(s.keyframes,s.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return bt`
      <sl-tooltip
        class=${xe({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Ds.styles=[te,Os],Ds.dependencies={"sl-icon":be,"sl-tooltip":ko},f([ae('slot[name="copy-icon"]')],Ds.prototype,"copyIcon",2),f([ae('slot[name="success-icon"]')],Ds.prototype,"successIcon",2),f([ae('slot[name="error-icon"]')],Ds.prototype,"errorIcon",2),f([ae("sl-tooltip")],Ds.prototype,"tooltip",2),f([re()],Ds.prototype,"isCopying",2),f([re()],Ds.prototype,"status",2),f([oe()],Ds.prototype,"value",2),f([oe()],Ds.prototype,"from",2),f([oe({type:Boolean,reflect:!0})],Ds.prototype,"disabled",2),f([oe({attribute:"copy-label"})],Ds.prototype,"copyLabel",2),f([oe({attribute:"success-label"})],Ds.prototype,"successLabel",2),f([oe({attribute:"error-label"})],Ds.prototype,"errorLabel",2),f([oe({attribute:"feedback-duration",type:Number})],Ds.prototype,"feedbackDuration",2),f([oe({attribute:"tooltip-placement"})],Ds.prototype,"tooltipPlacement",2),f([oe({type:Boolean})],Ds.prototype,"hoist",2),Ne("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),Ne("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}}),Ds.define("sl-copy-button");var Ls=P`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Bs=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)"attributes"===e.type&&"open"===e.attributeName&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.detailsObserver)||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==t.key&&"ArrowLeft"!==t.key||(t.preventDefault(),this.hide()),"ArrowDown"!==t.key&&"ArrowRight"!==t.key||(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented)return this.open=!1,void(this.details.open=!1);await We(this.body);const{keyframes:t,options:e}=He(this,"details.show",{dir:this.localize.dir()});await Ue(this.body,Ke(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented)return this.details.open=!0,void(this.open=!0);await We(this.body);const{keyframes:t,options:e}=He(this,"details.hide",{dir:this.localize.dir()});await Ue(this.body,Ke(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,wo(this,"sl-after-hide")}render(){const t="rtl"===this.localize.dir();return bt`
      <details
        part="base"
        class=${xe({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Bs.styles=[te,Ls],Bs.dependencies={"sl-icon":be},f([ae(".details")],Bs.prototype,"details",2),f([ae(".details__header")],Bs.prototype,"header",2),f([ae(".details__body")],Bs.prototype,"body",2),f([ae(".details__expand-icon-slot")],Bs.prototype,"expandIconSlot",2),f([oe({type:Boolean,reflect:!0})],Bs.prototype,"open",2),f([oe()],Bs.prototype,"summary",2),f([oe({type:Boolean,reflect:!0})],Bs.prototype,"disabled",2),f([Jt("open",{waitUntilFirstUpdate:!0})],Bs.prototype,"handleOpenChange",1),Ne("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),Ne("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),Bs.define("sl-details");var Rs=P`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Fs=class extends ce{constructor(){super(...arguments),this.hasSlotController=new jt(this,"footer"),this.localize=new Le(this),this.modal=new zs(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Qo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Jo(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=He(this,"dialog.denyClose",{dir:this.localize.dir()});return void Ue(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Qo(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([We(this.dialog),We(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=He(this,"dialog.show",{dir:this.localize.dir()}),i=He(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ue(this.panel,e.keyframes,e.options),Ue(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Es(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([We(this.dialog),We(this.overlay)]);const t=He(this,"dialog.hide",{dir:this.localize.dir()}),e=He(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ue(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Ue(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Jo(this);const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wo(this,"sl-after-hide")}render(){return bt`
      <div
        part="base"
        class=${xe({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_e(this.noHeader?this.label:void 0)}
          aria-labelledby=${_e(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":bt`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Fs.styles=[te,Rs],Fs.dependencies={"sl-icon-button":No},f([ae(".dialog")],Fs.prototype,"dialog",2),f([ae(".dialog__panel")],Fs.prototype,"panel",2),f([ae(".dialog__overlay")],Fs.prototype,"overlay",2),f([oe({type:Boolean,reflect:!0})],Fs.prototype,"open",2),f([oe({reflect:!0})],Fs.prototype,"label",2),f([oe({attribute:"no-header",type:Boolean,reflect:!0})],Fs.prototype,"noHeader",2),f([Jt("open",{waitUntilFirstUpdate:!0})],Fs.prototype,"handleOpenChange",1),Ne("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Ne("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Ne("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),Ne("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Ne("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Fs.define("sl-dialog"),ke.define("sl-checkbox");var Vs=P`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ns=class extends ce{constructor(){super(...arguments),this.formControlController=new w(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new jt(this,"[default]","prefix","suffix"),this.localize=new Le(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:k}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Bo`a`:Bo`button`;return Vo`
      <${e}
        part="base"
        class=${xe({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${_e(t?void 0:this.disabled)}
        type=${_e(t?void 0:this.type)}
        title=${this.title}
        name=${_e(t?void 0:this.name)}
        value=${_e(t?void 0:this.value)}
        href=${_e(t&&!this.disabled?this.href:void 0)}
        target=${_e(t?this.target:void 0)}
        download=${_e(t?this.download:void 0)}
        rel=${_e(t?this.rel:void 0)}
        role=${_e(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Vo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Vo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};function Hs(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");const i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function Us(t){return Math.min(1,Math.max(0,t))}function js(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function qs(t){return Number(t)<=1?100*Number(t)+"%":t}function Ws(t){return 1===t.length?"0"+t:String(t)}function Ks(t,e,i){t=Hs(t,255),e=Hs(e,255),i=Hs(i,255);const o=Math.max(t,e,i),r=Math.min(t,e,i);let s=0,n=0;const a=(o+r)/2;if(o===r)n=0,s=0;else{const l=o-r;switch(n=a>.5?l/(2-o-r):l/(o+r),o){case t:s=(e-i)/l+(e<i?6:0);break;case e:s=(i-t)/l+2;break;case i:s=(t-e)/l+4}s/=6}return{h:s,s:n,l:a}}function Xs(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function Gs(t,e,i){t=Hs(t,255),e=Hs(e,255),i=Hs(i,255);const o=Math.max(t,e,i),r=Math.min(t,e,i);let s=0;const n=o,a=o-r,l=0===o?0:a/o;if(o===r)s=0;else{switch(o){case t:s=(e-i)/a+(e<i?6:0);break;case e:s=(i-t)/a+2;break;case i:s=(t-e)/a+4}s/=6}return{h:s,s:l,v:n}}function Ys(t,e,i,o){const r=[Ws(Math.round(t).toString(16)),Ws(Math.round(e).toString(16)),Ws(Math.round(i).toString(16))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Zs(t,e,i){let o=1-t/255,r=1-e/255,s=1-i/255,n=Math.min(o,r,s);return 1===n?(o=0,r=0,s=0):(o=(o-n)/(1-n)*100,r=(r-n)/(1-n)*100,s=(s-n)/(1-n)*100),n*=100,{c:Math.round(o),m:Math.round(r),y:Math.round(s),k:Math.round(n)}}function Qs(t){return Math.round(255*parseFloat(t)).toString(16)}function Js(t){return tn(t)/255}function tn(t){return parseInt(t,16)}Ns.styles=[te,kr],Ns.dependencies={"sl-icon":be,"sl-spinner":Be},f([ae(".button")],Ns.prototype,"button",2),f([re()],Ns.prototype,"hasFocus",2),f([re()],Ns.prototype,"invalid",2),f([oe()],Ns.prototype,"title",2),f([oe({reflect:!0})],Ns.prototype,"variant",2),f([oe({reflect:!0})],Ns.prototype,"size",2),f([oe({type:Boolean,reflect:!0})],Ns.prototype,"caret",2),f([oe({type:Boolean,reflect:!0})],Ns.prototype,"disabled",2),f([oe({type:Boolean,reflect:!0})],Ns.prototype,"loading",2),f([oe({type:Boolean,reflect:!0})],Ns.prototype,"outline",2),f([oe({type:Boolean,reflect:!0})],Ns.prototype,"pill",2),f([oe({type:Boolean,reflect:!0})],Ns.prototype,"circle",2),f([oe()],Ns.prototype,"type",2),f([oe()],Ns.prototype,"name",2),f([oe()],Ns.prototype,"value",2),f([oe()],Ns.prototype,"href",2),f([oe()],Ns.prototype,"target",2),f([oe()],Ns.prototype,"rel",2),f([oe()],Ns.prototype,"download",2),f([oe()],Ns.prototype,"form",2),f([oe({attribute:"formaction"})],Ns.prototype,"formAction",2),f([oe({attribute:"formenctype"})],Ns.prototype,"formEnctype",2),f([oe({attribute:"formmethod"})],Ns.prototype,"formMethod",2),f([oe({attribute:"formnovalidate",type:Boolean})],Ns.prototype,"formNoValidate",2),f([oe({attribute:"formtarget"})],Ns.prototype,"formTarget",2),f([Jt("disabled",{waitUntilFirstUpdate:!0})],Ns.prototype,"handleDisabledChange",1);const en={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};const on="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",rn="[\\s|\\(]+("+on+")[,|\\s]+("+on+")[,|\\s]+("+on+")\\s*\\)?",sn="[\\s|\\(]+("+on+")[,|\\s]+("+on+")[,|\\s]+("+on+")[,|\\s]+("+on+")\\s*\\)?",nn={CSS_UNIT:new RegExp(on),rgb:new RegExp("rgb"+rn),rgba:new RegExp("rgba"+sn),hsl:new RegExp("hsl"+rn),hsla:new RegExp("hsla"+sn),hsv:new RegExp("hsv"+rn),hsva:new RegExp("hsva"+sn),cmyk:new RegExp("cmyk"+sn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function an(t){return"number"==typeof t?!Number.isNaN(t):nn.CSS_UNIT.test(t)}class ln{constructor(t="",e={}){if(t instanceof ln)return t;"number"==typeof t&&(t=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(t)),this.originalInput=t;const i=function(t){let e={r:0,g:0,b:0},i=1,o=null,r=null,s=null,n=!1,a=!1;return"string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;let e=!1;if(en[t])t=en[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let i=nn.rgb.exec(t);return i?{r:i[1],g:i[2],b:i[3]}:(i=nn.rgba.exec(t),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=nn.hsl.exec(t),i?{h:i[1],s:i[2],l:i[3]}:(i=nn.hsla.exec(t),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=nn.hsv.exec(t),i?{h:i[1],s:i[2],v:i[3]}:(i=nn.hsva.exec(t),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=nn.cmyk.exec(t),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=nn.hex8.exec(t),i?{r:tn(i[1]),g:tn(i[2]),b:tn(i[3]),a:Js(i[4]),format:e?"name":"hex8"}:(i=nn.hex6.exec(t),i?{r:tn(i[1]),g:tn(i[2]),b:tn(i[3]),format:e?"name":"hex"}:(i=nn.hex4.exec(t),i?{r:tn(i[1]+i[1]),g:tn(i[2]+i[2]),b:tn(i[3]+i[3]),a:Js(i[4]+i[4]),format:e?"name":"hex8"}:(i=nn.hex3.exec(t),!!i&&{r:tn(i[1]+i[1]),g:tn(i[2]+i[2]),b:tn(i[3]+i[3]),format:e?"name":"hex"}))))))))))}(t)),"object"==typeof t&&(an(t.r)&&an(t.g)&&an(t.b)?(e=function(t,e,i){return{r:255*Hs(t,255),g:255*Hs(e,255),b:255*Hs(i,255)}}(t.r,t.g,t.b),n=!0,a="%"===String(t.r).substr(-1)?"prgb":"rgb"):an(t.h)&&an(t.s)&&an(t.v)?(o=qs(t.s),r=qs(t.v),e=function(t,e,i){t=6*Hs(t,360),e=Hs(e,100),i=Hs(i,100);const o=Math.floor(t),r=t-o,s=i*(1-e),n=i*(1-r*e),a=i*(1-(1-r)*e),l=o%6;return{r:255*[i,n,s,s,a,i][l],g:255*[a,i,i,n,s,s][l],b:255*[s,s,a,i,i,n][l]}}(t.h,o,r),n=!0,a="hsv"):an(t.h)&&an(t.s)&&an(t.l)?(o=qs(t.s),s=qs(t.l),e=function(t,e,i){let o,r,s;if(t=Hs(t,360),e=Hs(e,100),i=Hs(i,100),0===e)r=i,s=i,o=i;else{const n=i<.5?i*(1+e):i+e-i*e,a=2*i-n;o=Xs(a,n,t+1/3),r=Xs(a,n,t),s=Xs(a,n,t-1/3)}return{r:255*o,g:255*r,b:255*s}}(t.h,o,s),n=!0,a="hsl"):an(t.c)&&an(t.m)&&an(t.y)&&an(t.k)&&(e=function(t,e,i,o){const r=o/100;return{r:255*(1-t/100)*(1-r),g:255*(1-e/100)*(1-r),b:255*(1-i/100)*(1-r)}}(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=js(i),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??i.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3}getLuminance(){const t=this.toRgb();let e,i,o;const r=t.r/255,s=t.g/255,n=t.b/255;return e=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),i=s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4),o=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),.2126*e+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=js(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return 0===t}toHsv(){const t=Gs(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=Gs(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${i}%, ${o}%)`:`hsva(${e}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){const t=Ks(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){const t=Ks(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${i}%, ${o}%)`:`hsla(${e}, ${i}%, ${o}%, ${this.roundA})`}toHex(t=!1){return Ys(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return function(t,e,i,o,r){const s=[Ws(Math.round(t).toString(16)),Ws(Math.round(e).toString(16)),Ws(Math.round(i).toString(16)),Ws(Qs(o))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return 1===this.a?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?`rgb(${t}, ${e}, ${i})`:`rgba(${t}, ${e}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=t=>`${Math.round(100*Hs(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=t=>Math.round(100*Hs(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...Zs(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:e,y:i,k:o}=Zs(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${i}, ${o})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;const t="#"+Ys(this.r,this.g,this.b,!1);for(const[e,i]of Object.entries(en))if(t===i)return e;return!1}toString(t){const e=Boolean(t);t=t??this.format;let i=!1;const o=this.a<1&&this.a>=0;return e||!o||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),"cmyk"===t&&(i=this.toCmykString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ln(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=Us(e.l),new ln(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-t/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-t/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-t/100*255))),new ln(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=Us(e.l),new ln(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=Us(e.s),new ln(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=Us(e.s),new ln(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,new ln(e)}mix(t,e=50){const i=this.toRgb(),o=new ln(t).toRgb(),r=e/100,s={r:(o.r-i.r)*r+i.r,g:(o.g-i.g)*r+i.g,b:(o.b-i.b)*r+i.b,a:(o.a-i.a)*r+i.a};return new ln(s)}analogous(t=6,e=30){const i=this.toHsl(),o=360/e,r=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,r.push(new ln(i));return r}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ln(t)}monochromatic(t=6){const e=this.toHsv(),{h:i}=e,{s:o}=e;let{v:r}=e;const s=[],n=1/t;for(;t--;)s.push(new ln({h:i,s:o,v:r})),r=(r+n)%1;return s}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new ln({h:(e+72)%360,s:t.s,l:t.l}),new ln({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),i=new ln(t).toRgb(),o=e.a+i.a*(1-e.a);return new ln({r:(e.r*e.a+i.r*i.a*(1-e.a))/o,g:(e.g*e.a+i.g*i.a*(1-e.a))/o,b:(e.b*e.a+i.b*i.a*(1-e.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:i}=e,o=[this],r=360/t;for(let s=1;s<t;s++)o.push(new ln({h:(i+s*r)%360,s:e.s,l:e.l}));return o}equals(t){const e=new ln(t);return"cmyk"===this.format||"cmyk"===e.format?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}var cn="EyeDropper"in window,dn=class extends ce{constructor(){super(),this.formControlController=new w(this),this.isSafeValue=!1,this.localize=new Le(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:o}=e.getBoundingClientRect();let r=this.value,s=this.value;i.focus(),t.preventDefault(),sr(e,{onMove:t=>{this.alpha=So(t/o*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:o}=e.getBoundingClientRect();let r=this.value,s=this.value;i.focus(),t.preventDefault(),sr(e,{onMove:t=>{this.hue=So(t/o*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:o,height:r}=e.getBoundingClientRect();let s=this.value,n=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,sr(e,{onMove:(t,e)=>{this.saturation=So(t/o*100,0,100),this.brightness=So(100-e/r*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==s&&(s=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.alpha=So(this.alpha-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.alpha=So(this.alpha+e,0,100),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.alpha=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.hue=So(this.hue-e,0,360),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.hue=So(this.hue+e,0,360),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.hue=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.saturation=So(this.saturation-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.saturation=So(this.saturation+e,0,100),this.syncValues()),"ArrowUp"===t.key&&(t.preventDefault(),this.brightness=So(this.brightness+e,0,100),this.syncValues()),"ArrowDown"===t.key&&(t.preventDefault(),this.brightness=So(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if("Enter"===t.key){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new ln(t);if(!e.isValid)return null;const i=e.toHsl(),o={h:i.h,s:100*i.s,l:100*i.l,a:i.a},r=e.toRgb(),s=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:100*a.s,v:100*a.v,a:a.a};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return null!==e&&(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?100*e.hsva.a:100,this.syncValues(),!0)}setLetterCase(t){return"string"!=typeof t?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);null!==t&&("hsl"===this.format?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:"rgb"===this.format?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:"hsv"===this.format?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){cn&&(new EyeDropper).open().then(t=>{const e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,o=100){const r=new ln(`hsva(${t}, ${e}%, ${i}%, ${o/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);null!==i?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=100*i.hsva.a,this.syncValues()):this.inputValue=null!=t?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(null==(t=this.dropdown)?void 0:t.open)&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(null===e)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.inline||this.validity.valid?this.input.reportValidity():(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1)}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(t=>""!==t.trim()),o=bt`
      <div
        part="base"
        class=${xe({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?bt`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${yr({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${xe({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${yr({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${_e(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${yr({left:(0===this.hue?0:100/(360/this.hue))+"%"})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${_e(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?bt`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${yr({backgroundImage:`linear-gradient(\n                          to right,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%\n                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${yr({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${_e(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${yr({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":bt`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${cn?bt`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?bt`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(t=>{const e=this.parseColor(t);return e?bt`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${_e(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${t}
                      @click=${()=>this.selectSwatch(t)}
                      @keydown=${t=>!this.disabled&&"Enter"===t.key&&this.setColor(e.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${yr({backgroundColor:e.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${t}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?o:bt`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${xe({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":"small"===this.size,"color-dropdown__trigger--medium":"medium"===this.size,"color-dropdown__trigger--large":"large"===this.size,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${yr({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${o}
      </sl-dropdown>
    `}};dn.styles=[te,Vs],dn.dependencies={"sl-button-group":zr,"sl-button":Ns,"sl-dropdown":Is,"sl-icon":be,"sl-input":Gr,"sl-visually-hidden":Eo},f([ae('[part~="base"]')],dn.prototype,"base",2),f([ae('[part~="input"]')],dn.prototype,"input",2),f([ae(".color-dropdown")],dn.prototype,"dropdown",2),f([ae('[part~="preview"]')],dn.prototype,"previewButton",2),f([ae('[part~="trigger"]')],dn.prototype,"trigger",2),f([re()],dn.prototype,"hasFocus",2),f([re()],dn.prototype,"isDraggingGridHandle",2),f([re()],dn.prototype,"isEmpty",2),f([re()],dn.prototype,"inputValue",2),f([re()],dn.prototype,"hue",2),f([re()],dn.prototype,"saturation",2),f([re()],dn.prototype,"brightness",2),f([re()],dn.prototype,"alpha",2),f([oe()],dn.prototype,"value",2),f([Ht()],dn.prototype,"defaultValue",2),f([oe()],dn.prototype,"label",2),f([oe()],dn.prototype,"format",2),f([oe({type:Boolean,reflect:!0})],dn.prototype,"inline",2),f([oe({reflect:!0})],dn.prototype,"size",2),f([oe({attribute:"no-format-toggle",type:Boolean})],dn.prototype,"noFormatToggle",2),f([oe()],dn.prototype,"name",2),f([oe({type:Boolean,reflect:!0})],dn.prototype,"disabled",2),f([oe({type:Boolean})],dn.prototype,"hoist",2),f([oe({type:Boolean})],dn.prototype,"opacity",2),f([oe({type:Boolean})],dn.prototype,"uppercase",2),f([oe()],dn.prototype,"swatches",2),f([oe({reflect:!0})],dn.prototype,"form",2),f([oe({type:Boolean,reflect:!0})],dn.prototype,"required",2),f([se({passive:!1})],dn.prototype,"handleTouchMove",1),f([Jt("format",{waitUntilFirstUpdate:!0})],dn.prototype,"handleFormatChange",1),f([Jt("opacity",{waitUntilFirstUpdate:!0})],dn.prototype,"handleOpacityChange",1),f([Jt("value")],dn.prototype,"handleValueChange",1),dn.define("sl-color-picker");var hn=P`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,un=class extends ce{constructor(){super(...arguments),this.hasSlotController=new jt(this,"footer","header","image")}render(){return bt`
      <div
        part="base"
        class=${xe({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};un.styles=[te,hn],un.define("sl-card");var pn=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},fn=P`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,mn=class extends ce{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new pn(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new Le(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const o=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{e===o&&i===r||(t.scrollTo({left:o,top:r,behavior:qe()?"auto":"smooth"}),await wo(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(t=>[...t.addedNodes,...t.removedNodes].some(t=>this.isCarouselItem(t)&&!t.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:i,loop:o}=this,r=o?t/i:(t-e)/i+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),i=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+i*i)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,i="rtl"===this.localize.dir(),o=null!==e.closest('[part~="pagination-item"]'),r="ArrowDown"===t.key||!i&&"ArrowRight"===t.key||i&&"ArrowLeft"===t.key,s="ArrowUp"===t.key||!i&&"ArrowLeft"===t.key||i&&"ArrowRight"===t.key;t.preventDefault(),s&&this.previous(),r&&this.next(),"Home"===t.key&&this.goToSlide(0),"End"===t.key&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var t;const e=null==(t=this.shadowRoot)?void 0:t.querySelector('[part~="pagination-item--active"]');e&&e.focus()})}}handleMouseDragStart(t){this.mouseDragging&&0===t.button&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const t of e){const e=t.target;e.toggleAttribute("inert",!t.isIntersecting),e.classList.toggle("--in-view",t.isIntersecting),e.setAttribute("aria-hidden",t.isIntersecting?"false":"true")}const i=e.find(t=>t.isIntersecting);if(!i)return;const o=this.getSlides({excludeClones:!1}),r=this.getSlides().length,s=o.indexOf(i.target),n=this.loop?s-this.slidesPerPage:s;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){const t=Number(i.target.getAttribute("data-clone"));this.goToSlide(t,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){this.scrolling&&!this.dragging&&(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&"sl-carousel-item"===t.tagName.toLowerCase()}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("role","group"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),this.pagination&&(t.setAttribute("id",`slide-${e+1}`),t.setAttribute("role","tabpanel"),t.removeAttribute("aria-label"),t.setAttribute("aria-labelledby",`tab-${e+1}`)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,i=t.slice(-e),o=t.slice(0,e);i.reverse().forEach((e,i)=>{const o=e.cloneNode(!0);o.setAttribute("data-clone",String(t.length-i-1)),this.prepend(o)}),o.forEach((t,e)=>{const i=t.cloneNode(!0);i.setAttribute("data-clone",String(e)),this.append(i)})}handleSlideChange(){const t=this.getSlides();t.forEach((t,e)=>{t.classList.toggle("--is-active",e===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((t,i)=>{(i+e)%e===0?t.style.removeProperty("scroll-snap-align"):t.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:i,loop:o}=this,r=this.getSlides(),s=this.getSlides({excludeClones:!1});if(!r.length)return;const n=o?(t+r.length)%r.length:So(t,0,r.length-i);this.activeSlide=n;const a=s[So(t+(o?i:0)+("rtl"===this.localize.dir()?i-1:0),0,s.length-1)];this.scrollToSlide(a,qe()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,o=i.getBoundingClientRect(),r=t.getBoundingClientRect(),s=r.left-o.left,n=r.top-o.top;s||n?(this.pendingSlideChange=!0,i.scrollTo({left:s+i.scrollLeft,top:n+i.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,i=this.getPageCount(),o=this.getCurrentPage(),r=this.canScrollPrev(),s=this.canScrollNext(),n="ltr"===this.localize.dir();return bt`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${xe({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation,"carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?bt`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${xe({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${xe({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!s})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?bt`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${function*(t,e){if(void 0!==t){let i=0;for(const o of t)yield e(o,i++)}}(function*(t,e,i=1){const o=void 0===e?0:t;e??=t;for(let t=o;i>0?t<e:e<t;t+=i)yield t}(i),e=>{const r=e===o;return bt`
                    <button
                      part="pagination-item ${r?"pagination-item--active":""}"
                      class="${xe({"carousel__pagination-item":!0,"carousel__pagination-item--active":r})}"
                      role="tab"
                      id="tab-${e+1}"
                      aria-controls="slide-${e+1}"
                      aria-selected="${r?"true":"false"}"
                      aria-label="${r?this.localize.term("slideNum",e+1):this.localize.term("goToSlide",e+1,i)}"
                      tabindex=${r?"0":"-1"}
                      @click=${()=>this.goToSlide(e*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};mn.styles=[te,fn],mn.dependencies={"sl-icon":be},f([oe({type:Boolean,reflect:!0})],mn.prototype,"loop",2),f([oe({type:Boolean,reflect:!0})],mn.prototype,"navigation",2),f([oe({type:Boolean,reflect:!0})],mn.prototype,"pagination",2),f([oe({type:Boolean,reflect:!0})],mn.prototype,"autoplay",2),f([oe({type:Number,attribute:"autoplay-interval"})],mn.prototype,"autoplayInterval",2),f([oe({type:Number,attribute:"slides-per-page"})],mn.prototype,"slidesPerPage",2),f([oe({type:Number,attribute:"slides-per-move"})],mn.prototype,"slidesPerMove",2),f([oe()],mn.prototype,"orientation",2),f([oe({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],mn.prototype,"mouseDragging",2),f([ae(".carousel__slides")],mn.prototype,"scrollContainer",2),f([ae(".carousel__pagination")],mn.prototype,"paginationContainer",2),f([re()],mn.prototype,"activeSlide",2),f([re()],mn.prototype,"scrolling",2),f([re()],mn.prototype,"dragging",2),f([se({passive:!0})],mn.prototype,"handleScroll",1),f([Jt("loop",{waitUntilFirstUpdate:!0}),Jt("slidesPerPage",{waitUntilFirstUpdate:!0})],mn.prototype,"initializeSlides",1),f([Jt("activeSlide")],mn.prototype,"handleSlideChange",1),f([Jt("slidesPerMove")],mn.prototype,"updateSlidesSnap",1),f([Jt("autoplay")],mn.prototype,"handleAutoplayChange",1),mn.define("sl-carousel");var gn=(t,e)=>{let i=0;return function(...o){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...o)},e)}},bn=(t,e,i)=>{const o=t[e];t[e]=function(...t){o.call(this,...t),i.call(this,o,...t)}};(()=>{if("undefined"!=typeof window&&!("onscrollend"in window)){const t=new Set,e=new WeakMap,i=e=>{for(const i of e.changedTouches)t.add(i.identifier)},o=e=>{for(const i of e.changedTouches)t.delete(i.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),bn(EventTarget.prototype,"addEventListener",function(i,o){if("scrollend"!==o)return;const r=gn(()=>{t.size?r():this.dispatchEvent(new Event("scrollend"))},100);i.call(this,"scroll",r,{passive:!0}),e.set(this,r)}),bn(EventTarget.prototype,"removeEventListener",function(t,i){if("scrollend"!==i)return;const o=e.get(this);o&&t.call(this,"scroll",o,{passive:!0})})}})();var vn=P`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,yn=class extends ce{connectedCallback(){super.connectedCallback()}render(){return bt` <slot></slot> `}};yn.styles=[te,vn],yn.define("sl-carousel-item");var xn=P`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,_n=class extends ce{constructor(){super(...arguments),this.hasSlotController=new jt(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(t=>"sl-dropdown"===t.tagName.toLowerCase()).length>0;this.href?this.renderType="link":this.renderType=t?"dropdown":"button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return bt`
      <div
        part="base"
        class=${xe({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${"link"===this.renderType?bt`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${_e(this.target?this.target:void 0)}"
                rel=${_e(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${"button"===this.renderType?bt`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${"dropdown"===this.renderType?bt`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};_n.styles=[te,xn],f([ae("slot:not([name])")],_n.prototype,"defaultSlot",2),f([re()],_n.prototype,"renderType",2),f([oe()],_n.prototype,"href",2),f([oe()],_n.prototype,"target",2),f([oe()],_n.prototype,"rel",2),f([Jt("href",{waitUntilFirstUpdate:!0})],_n.prototype,"hrefChanged",1),_n.define("sl-breadcrumb-item"),zr.define("sl-button-group");var wn=P`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,kn=class extends ce{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=bt`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=bt``;return e=this.initials?bt`<div part="initials" class="avatar__initials">${this.initials}</div>`:bt`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,bt`
      <div
        part="base"
        class=${xe({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};kn.styles=[te,wn],kn.dependencies={"sl-icon":be},f([re()],kn.prototype,"hasError",2),f([oe()],kn.prototype,"image",2),f([oe()],kn.prototype,"label",2),f([oe()],kn.prototype,"initials",2),f([oe()],kn.prototype,"loading",2),f([oe({reflect:!0})],kn.prototype,"shape",2),f([Jt("image")],kn.prototype,"handleImageChange",1),kn.define("sl-avatar");var Cn=P`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Sn=class extends ce{constructor(){super(...arguments),this.localize=new Le(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>"sl-breadcrumb-item"===t.tagName.toLowerCase());t.forEach((e,i)=>{const o=e.querySelector('[slot="separator"]');null===o?e.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),i===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),bt`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${"rtl"===this.localize.dir()?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Sn.styles=[te,Cn],Sn.dependencies={"sl-icon":be},f([ae("slot")],Sn.prototype,"defaultSlot",2),f([ae('slot[name="separator"]')],Sn.prototype,"separatorSlot",2),f([oe()],Sn.prototype,"label",2),Sn.define("sl-breadcrumb"),Ns.define("sl-button");var $n=P`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,An=class extends ce{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:i}=this.animatedImage;t.width=e,t.height=i,t.getContext("2d").drawImage(this.animatedImage,0,0,e,i),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return bt`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?bt`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};An.styles=[te,$n],An.dependencies={"sl-icon":be},f([ae(".animated-image__animated")],An.prototype,"animatedImage",2),f([re()],An.prototype,"frozenFrame",2),f([re()],An.prototype,"isLoaded",2),f([oe()],An.prototype,"src",2),f([oe()],An.prototype,"alt",2),f([oe({type:Boolean,reflect:!0})],An.prototype,"play",2),f([Jt("play",{waitUntilFirstUpdate:!0})],An.prototype,"handlePlayChange",1),f([Jt("src")],An.prototype,"handleSrcChange",1),An.define("sl-animated-image");var zn=P`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,En=class extends ce{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return bt`
      <span
        part="base"
        class=${xe({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};En.styles=[te,zn],f([oe({reflect:!0})],En.prototype,"variant",2),f([oe({type:Boolean,reflect:!0})],En.prototype,"pill",2),f([oe({type:Boolean,reflect:!0})],En.prototype,"pulse",2),En.define("sl-badge");var Tn=P`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Pn=class t extends ce{constructor(){super(...arguments),this.hasSlotController=new jt(this,"icon","suffix"),this.localize=new Le(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;null==(t=this.countdownAnimation)||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),null==(t=this.countdownAnimation)||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,e="100%",i="0";this.countdownAnimation=t.animate([{width:e},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await We(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=He(this,"alert.show",{dir:this.localize.dir()});await Ue(this.base,t,e),this.emit("sl-after-show")}else{Es(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await We(this.base);const{keyframes:t,options:e}=He(this,"alert.hide",{dir:this.localize.dir()});await Ue(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wo(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),null===t.toastStack.parentElement&&document.body.append(t.toastStack),t.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{t.toastStack.removeChild(this),e(),null===t.toastStack.querySelector("sl-alert")&&t.toastStack.remove()},{once:!0})})}render(){return bt`
      <div
        part="base"
        class=${xe({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?bt`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?bt`
              <div
                class=${xe({alert__countdown:!0,"alert__countdown--ltr":"ltr"===this.countdown})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Pn.styles=[te,Tn],Pn.dependencies={"sl-icon-button":No},f([ae('[part~="base"]')],Pn.prototype,"base",2),f([ae(".alert__countdown-elapsed")],Pn.prototype,"countdownElement",2),f([oe({type:Boolean,reflect:!0})],Pn.prototype,"open",2),f([oe({type:Boolean,reflect:!0})],Pn.prototype,"closable",2),f([oe({reflect:!0})],Pn.prototype,"variant",2),f([oe({type:Number})],Pn.prototype,"duration",2),f([oe({type:String,reflect:!0})],Pn.prototype,"countdown",2),f([re()],Pn.prototype,"remainingTime",2),f([Jt("open",{waitUntilFirstUpdate:!0})],Pn.prototype,"handleOpenChange",1),f([Jt("duration")],Pn.prototype,"handleDurationChange",1);var Mn=Pn;Ne("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Ne("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Mn.define("sl-alert");const In=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],On=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Dn=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Ln=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Bn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Fn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Vn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Un=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],jn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],qn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Wn=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Kn=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Xn=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Gn=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Yn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Zn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Qn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Jn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],ta=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ea=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ia=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],oa=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ra=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],sa=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],na=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],aa=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],la=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],ca=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],da=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],ha=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ua=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pa=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fa=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ma=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ga=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ba=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],va=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ya=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xa=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_a=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wa=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ka=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Ca=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Sa=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],$a=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Aa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],za=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Ea=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Ta=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Pa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Ma=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Ia=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Oa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Da=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],La=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Ba=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Ra=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Fa=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Va=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Na=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ha=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ua=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],ja=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],qa=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Wa=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ka=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Xa=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ga=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ya=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Za=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Qa=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Ja=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],tl=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],el=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],il=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ol=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],rl=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],sl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],nl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],al=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],ll=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],cl=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],dl=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],hl=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ul=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],pl=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],fl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ml=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],gl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],bl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],vl=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],yl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],_l=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],wl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],kl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var Cl=P`
  :host {
    display: contents;
  }
`,Sl=class extends ce{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return null!=(e=null==(t=this.animation)?void 0:t.currentTime)?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,i;const o=null!=(e=kl[this.easing])?e:this.easing,r=null!=(i=this.keyframes)?i:t[this.name],s=(await this.defaultSlot).assignedElements()[0];return!(!s||!r||(this.destroyAnimation(),this.animation=s.animate(r,{delay:this.delay,direction:this.direction,duration:this.duration,easing:o,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),0))}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;null==(t=this.animation)||t.cancel()}finish(){var t;null==(t=this.animation)||t.finish()}render(){return bt` <slot @slotchange=${this.handleSlotChange}></slot> `}};Sl.styles=[te,Cl],f([(t,e)=>ne(t,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector("slot")??null}})],Sl.prototype,"defaultSlot",2),f([oe()],Sl.prototype,"name",2),f([oe({type:Boolean,reflect:!0})],Sl.prototype,"play",2),f([oe({type:Number})],Sl.prototype,"delay",2),f([oe()],Sl.prototype,"direction",2),f([oe({type:Number})],Sl.prototype,"duration",2),f([oe()],Sl.prototype,"easing",2),f([oe({attribute:"end-delay",type:Number})],Sl.prototype,"endDelay",2),f([oe()],Sl.prototype,"fill",2),f([oe({type:Number})],Sl.prototype,"iterations",2),f([oe({attribute:"iteration-start",type:Number})],Sl.prototype,"iterationStart",2),f([oe({attribute:!1})],Sl.prototype,"keyframes",2),f([oe({attribute:"playback-rate",type:Number})],Sl.prototype,"playbackRate",2),f([Jt(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Sl.prototype,"handleAnimationChange",1),f([Jt("play")],Sl.prototype,"handlePlayChange",1),f([Jt("playbackRate")],Sl.prototype,"handlePlaybackRateChange",1),Sl.define("sl-animation");var $l,Al,zl,El,Tl=i(46),Pl=i.n(Tl),Ml=!1,Il=!1,Ol=[],Dl=-1,Ll=!1;function Bl(t){let e=Ol.indexOf(t);-1!==e&&e>Dl&&Ol.splice(e,1)}function Rl(){if(!Il&&!Ml){if(Ll)return;Ml=!0,queueMicrotask(Fl)}}function Fl(){Ml=!1,Il=!0;for(let t=0;t<Ol.length;t++)Ol[t](),Dl=t;Ol.length=0,Dl=-1,Il=!1}var Vl=!0;function Nl(t){Al=t}function Hl(t,e){let i,o=!0,r=Al(()=>{let r=t();if(JSON.stringify(r),!o&&("object"==typeof r||r!==i)){let t=i;queueMicrotask(()=>{e(r,t)})}i=r,o=!1});return()=>zl(r)}async function Ul(t){Ll=!0;try{await t(),await Promise.resolve()}finally{Ll=!1,Rl()}}var jl=[],ql=[],Wl=[];function Kl(t,e){"function"==typeof e?(t._x_cleanups||(t._x_cleanups=[]),t._x_cleanups.push(e)):(e=t,ql.push(e))}function Xl(t){jl.push(t)}function Gl(t,e,i){t._x_attributeCleanups||(t._x_attributeCleanups={}),t._x_attributeCleanups[e]||(t._x_attributeCleanups[e]=[]),t._x_attributeCleanups[e].push(i)}function Yl(t,e){t._x_attributeCleanups&&Object.entries(t._x_attributeCleanups).forEach(([i,o])=>{(void 0===e||e.includes(i))&&(o.forEach(t=>t()),delete t._x_attributeCleanups[i])})}var Zl=new MutationObserver(sc),Ql=!1;function Jl(){Zl.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Ql=!0}function tc(){!function(){let t=Zl.takeRecords();ec.push(()=>t.length>0&&sc(t));let e=ec.length;queueMicrotask(()=>{if(ec.length===e)for(;ec.length>0;)ec.shift()()})}(),Zl.disconnect(),Ql=!1}var ec=[];function ic(t){if(!Ql)return t();tc();let e=t();return Jl(),e}var oc=!1,rc=[];function sc(t){if(oc)return void(rc=rc.concat(t));let e=[],i=new Set,o=new Map,r=new Map;for(let s=0;s<t.length;s++)if(!t[s].target._x_ignoreMutationObserver&&("childList"===t[s].type&&(t[s].removedNodes.forEach(t=>{1===t.nodeType&&t._x_marker&&i.add(t)}),t[s].addedNodes.forEach(t=>{1===t.nodeType&&(i.has(t)?i.delete(t):t._x_marker||e.push(t))})),"attributes"===t[s].type)){let e=t[s].target,i=t[s].attributeName,n=t[s].oldValue,a=()=>{o.has(e)||o.set(e,[]),o.get(e).push({name:i,value:e.getAttribute(i)})},l=()=>{r.has(e)||r.set(e,[]),r.get(e).push(i)};e.hasAttribute(i)&&null===n?a():e.hasAttribute(i)?(l(),a()):l()}r.forEach((t,e)=>{Yl(e,t)}),o.forEach((t,e)=>{jl.forEach(i=>i(e,t))});for(let t of i)e.some(e=>e.contains(t))||ql.forEach(e=>e(t));for(let t of e)t.isConnected&&Wl.forEach(e=>e(t));e=null,i=null,o=null,r=null}function nc(t){return cc(lc(t))}function ac(t,e,i){return t._x_dataStack=[e,...lc(i||t)],()=>{t._x_dataStack=t._x_dataStack.filter(t=>t!==e)}}function lc(t){return t._x_dataStack?t._x_dataStack:"function"==typeof ShadowRoot&&t instanceof ShadowRoot?lc(t.host):t.parentNode?lc(t.parentNode):[]}function cc(t){return new Proxy({objects:t},dc)}var dc={ownKeys:({objects:t})=>Array.from(new Set(t.flatMap(t=>Object.keys(t)))),has:({objects:t},e)=>e!=Symbol.unscopables&&t.some(t=>Object.prototype.hasOwnProperty.call(t,e)||Reflect.has(t,e)),get:({objects:t},e,i)=>"toJSON"==e?hc:Reflect.get(t.find(t=>Reflect.has(t,e))||{},e,i),set({objects:t},e,i,o){const r=t.find(t=>Object.prototype.hasOwnProperty.call(t,e))||t[t.length-1],s=Object.getOwnPropertyDescriptor(r,e);return s?.set&&s?.get?s.set.call(o,i)||!0:Reflect.set(r,e,i)}};function hc(){return Reflect.ownKeys(this).reduce((t,e)=>(t[e]=Reflect.get(this,e),t),{})}function uc(t){let e=(i,o="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([r,{value:s,enumerable:n}])=>{if(!1===n||void 0===s)return;if("object"==typeof s&&null!==s&&s.__v_skip)return;let a=""===o?r:`${o}.${r}`;var l;"object"==typeof s&&null!==s&&s._x_interceptor?i[r]=s.initialize(t,a,r):"object"!=typeof(l=s)||Array.isArray(l)||null===l||s===i||s instanceof Element||e(s,a)})};return e(t)}function pc(t,e=()=>{}){let i={initialValue:void 0,_x_interceptor:!0,initialize(e,i,o){return t(this.initialValue,()=>function(t,e){return e.split(".").reduce((t,e)=>t[e],t)}(e,i),t=>fc(e,i,t),i,o)}};return e(i),t=>{if("object"==typeof t&&null!==t&&t._x_interceptor){let e=i.initialize.bind(i);i.initialize=(o,r,s)=>{let n=t.initialize(o,r,s);return i.initialValue=n,e(o,r,s)}}else i.initialValue=t;return i}}function fc(t,e,i){if("string"==typeof e&&(e=e.split(".")),1!==e.length){if(0===e.length)throw error;return t[e[0]]||(t[e[0]]={}),fc(t[e[0]],e.slice(1),i)}t[e[0]]=i}var mc={};function gc(t,e){mc[t]=e}function bc(t,e){let i=function(t){let[e,i]=Fc(t),o={interceptor:pc,...e};return Kl(t,i),o}(e);return Object.entries(mc).forEach(([o,r])=>{Object.defineProperty(t,`$${o}`,{get:()=>r(e,i),enumerable:!1})}),t}function vc(t,e,i,...o){try{return i(...o)}catch(i){yc(i,t,e)}}function yc(...t){return xc(...t)}var xc=function(t,e,i=void 0){t=Object.assign(t??{message:"No error message given."},{el:e,expression:i}),console.warn(`Alpine Expression Error: ${t.message}\n\n${i?'Expression: "'+i+'"\n\n':""}`,e),setTimeout(()=>{throw t},0)},_c=!0;function wc(t){let e=_c;_c=!1;let i=t();return _c=e,i}function kc(t,e,i={}){let o;return Cc(t,e)(t=>o=t,i),o}function Cc(...t){return $c(...t)}var Sc,$c=Ac;function Ac(t,e){let i={};bc(i,t);let o=[i,...lc(t)],r="function"==typeof e?function(t,e){return(i=()=>{},{scope:o={},params:r=[],context:s}={})=>{_c?Ec(i,e.apply(cc([o,...t]),r)):Ec(i,e,cc([o,...t]),r)}}(o,e):function(t,e,i){let o=function(t,e){if(zc[t])return zc[t];let i=Object.getPrototypeOf(async function(){}).constructor,o=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t;let r=(()=>{try{let e=new i(["__self","scope"],`with (scope) { __self.result = ${o} }; __self.finished = true; return __self.result;`);return Object.defineProperty(e,"name",{value:`[Alpine] ${t}`}),e}catch(i){return yc(i,e,t),Promise.resolve()}})();return zc[t]=r,r}(e,i);return(r=()=>{},{scope:s={},params:n=[],context:a}={})=>{o.result=void 0,o.finished=!1;let l=cc([s,...t]);if("function"==typeof o){let t=o.call(a,o,l).catch(t=>yc(t,i,e));o.finished?(Ec(r,o.result,l,n,i),o.result=void 0):t.then(t=>{Ec(r,t,l,n,i)}).catch(t=>yc(t,i,e)).finally(()=>o.result=void 0)}}}(o,e,t);return vc.bind(null,t,e,r)}var zc={};function Ec(t,e,i,o,r){if(_c&&"function"==typeof e){let s=e.apply(i,o);s instanceof Promise?s.then(e=>Ec(t,e,i,o)).catch(t=>yc(t,r,e)):t(s)}else"object"==typeof e&&e instanceof Promise?e.then(e=>t(e)):t(e)}var Tc="x-";function Pc(t=""){return Tc+t}var Mc={};function Ic(t,e){return Mc[t]=e,{before(e){if(!Mc[e])return void console.warn(String.raw`Cannot find directive \`${e}\`. \`${t}\` will use the default order of execution`);const i=Kc.indexOf(e);Kc.splice(i>=0?i:Kc.indexOf("DEFAULT"),0,t)}}}function Oc(t,e,i){if(e=Array.from(e),t._x_virtualDirectives){let i=Object.entries(t._x_virtualDirectives).map(([t,e])=>({name:t,value:e})),o=Dc(i);i=i.map(t=>o.find(e=>e.name===t.name)?{name:`x-bind:${t.name}`,value:`"${t.value}"`}:t),e=e.concat(i)}let o={},r=e.map(Nc((t,e)=>o[t]=e)).filter(jc).map(function(t,e){return({name:i,value:o})=>{i===o&&(o="");let r=i.match(qc()),s=i.match(/:([a-zA-Z0-9\-_:]+)/),n=i.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=e||t[i]||i;return{type:r?r[1]:null,value:s?s[1]:null,modifiers:n.map(t=>t.replace(".","")),expression:o,original:a}}}(o,i)).sort(Xc);return r.map(e=>function(t,e){let i=Mc[e.type]||(()=>{}),[o,r]=Fc(t);Gl(t,e.original,r);let s=()=>{t._x_ignore||t._x_ignoreSelf||(i.inline&&i.inline(t,e,o),i=i.bind(i,t,e,o),Lc?Bc.get(Rc).push(i):i())};return s.runCleanups=r,s}(t,e))}function Dc(t){return Array.from(t).map(Nc()).filter(t=>!jc(t))}var Lc=!1,Bc=new Map,Rc=Symbol();function Fc(t){let e=[],[i,o]=function(t){let e=()=>{};return[i=>{let o=Al(i);return t._x_effects||(t._x_effects=new Set,t._x_runEffects=()=>{t._x_effects.forEach(t=>t())}),t._x_effects.add(o),e=()=>{void 0!==o&&(t._x_effects.delete(o),zl(o))},o},()=>{e()}]}(t);return e.push(o),[{Alpine:Xd,effect:i,cleanup:t=>e.push(t),evaluateLater:Cc.bind(Cc,t),evaluate:kc.bind(kc,t)},()=>e.forEach(t=>t())]}var Vc=(t,e)=>({name:i,value:o})=>(i.startsWith(t)&&(i=i.replace(t,e)),{name:i,value:o});function Nc(t=()=>{}){return({name:e,value:i})=>{let{name:o,value:r}=Hc.reduce((t,e)=>e(t),{name:e,value:i});return o!==e&&t(o,e),{name:o,value:r}}}var Hc=[];function Uc(t){Hc.push(t)}function jc({name:t}){return qc().test(t)}var qc=()=>new RegExp(`^${Tc}([^:^.]+)\\b`),Wc="DEFAULT",Kc=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",Wc,"teleport"];function Xc(t,e){let i=-1===Kc.indexOf(t.type)?Wc:t.type,o=-1===Kc.indexOf(e.type)?Wc:e.type;return Kc.indexOf(i)-Kc.indexOf(o)}function Gc(t,e,i={}){t.dispatchEvent(new CustomEvent(e,{detail:i,bubbles:!0,composed:!0,cancelable:!0}))}function Yc(t,e){if("function"==typeof ShadowRoot&&t instanceof ShadowRoot)return void Array.from(t.children).forEach(t=>Yc(t,e));let i=!1;if(e(t,()=>i=!0),i)return;let o=t.firstElementChild;for(;o;)Yc(o,e),o=o.nextElementSibling}function Zc(t,...e){console.warn(`Alpine Warning: ${t}`,...e)}var Qc=!1,Jc=[],td=[];function ed(){return Jc.map(t=>t())}function id(){return Jc.concat(td).map(t=>t())}function od(t){Jc.push(t)}function rd(t){td.push(t)}function sd(t,e=!1){return nd(t,t=>{if((e?id():ed()).some(e=>t.matches(e)))return!0})}function nd(t,e){if(t){if(e(t))return t;if(t._x_teleportBack&&(t=t._x_teleportBack),t.parentNode instanceof ShadowRoot)return nd(t.parentNode.host,e);if(t.parentElement)return nd(t.parentElement,e)}}var ad=[],ld=1;function cd(t,e=Yc,i=()=>{}){nd(t,t=>t._x_ignore)||function(){Lc=!0;let o=Symbol();Rc=o,Bc.set(o,[]);let r=()=>{for(;Bc.get(o).length;)Bc.get(o).shift()();Bc.delete(o)};e(t,(t,e)=>{t._x_marker||(i(t,e),ad.forEach(i=>i(t,e)),Oc(t,t.attributes).forEach(t=>t()),t._x_ignore||(t._x_marker=ld++),t._x_ignore&&e())}),Lc=!1,r()}()}function dd(t,e=Yc){e(t,t=>{!function(t){for(t._x_effects?.forEach(Bl);t._x_cleanups?.length;)t._x_cleanups.pop()()}(t),Yl(t),delete t._x_marker})}var hd=[],ud=!1;function pd(t=()=>{}){return queueMicrotask(()=>{ud||setTimeout(()=>{fd()})}),new Promise(e=>{hd.push(()=>{t(),e()})})}function fd(){for(ud=!1;hd.length;)hd.shift()()}function md(t,e){return Array.isArray(e)?gd(t,e.join(" ")):"object"==typeof e&&null!==e?function(t,e){let i=t=>t.split(" ").filter(Boolean),o=Object.entries(e).flatMap(([t,e])=>!!e&&i(t)).filter(Boolean),r=Object.entries(e).flatMap(([t,e])=>!e&&i(t)).filter(Boolean),s=[],n=[];return r.forEach(e=>{t.classList.contains(e)&&(t.classList.remove(e),n.push(e))}),o.forEach(e=>{t.classList.contains(e)||(t.classList.add(e),s.push(e))}),()=>{n.forEach(e=>t.classList.add(e)),s.forEach(e=>t.classList.remove(e))}}(t,e):"function"==typeof e?md(t,e()):gd(t,e)}function gd(t,e){return e=!0===e?e="":e||"",i=e.split(" ").filter(e=>!t.classList.contains(e)).filter(Boolean),t.classList.add(...i),()=>{t.classList.remove(...i)};var i}function bd(t,e){return"object"==typeof e&&null!==e?function(t,e){let i={};return Object.entries(e).forEach(([e,o])=>{i[e]=t.style[e],e.startsWith("--")||(e=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),t.style.setProperty(e,o)}),setTimeout(()=>{0===t.style.length&&t.removeAttribute("style")}),()=>{bd(t,i)}}(t,e):function(t,e){let i=t.getAttribute("style",e);return t.setAttribute("style",e),()=>{t.setAttribute("style",i||"")}}(t,e)}function vd(t,e=()=>{}){let i=!1;return function(){i?e.apply(this,arguments):(i=!0,t.apply(this,arguments))}}function yd(t,e,i={}){t._x_transition||(t._x_transition={enter:{during:i,start:i,end:i},leave:{during:i,start:i,end:i},in(i=()=>{},o=()=>{}){_d(t,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},i,o)},out(i=()=>{},o=()=>{}){_d(t,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},i,o)}})}function xd(t){let e=t.parentNode;if(e)return e._x_hidePromise?e:xd(e)}function _d(t,e,{during:i,start:o,end:r}={},s=()=>{},n=()=>{}){if(t._x_transitioning&&t._x_transitioning.cancel(),0===Object.keys(i).length&&0===Object.keys(o).length&&0===Object.keys(r).length)return s(),void n();let a,l,c;!function(t,e){let i,o,r,s=vd(()=>{ic(()=>{i=!0,o||e.before(),r||(e.end(),fd()),e.after(),t.isConnected&&e.cleanup(),delete t._x_transitioning})});t._x_transitioning={beforeCancels:[],beforeCancel(t){this.beforeCancels.push(t)},cancel:vd(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},ic(()=>{e.start(),e.during()}),ud=!0,requestAnimationFrame(()=>{if(i)return;let s=1e3*Number(getComputedStyle(t).transitionDuration.replace(/,.*/,"").replace("s","")),n=1e3*Number(getComputedStyle(t).transitionDelay.replace(/,.*/,"").replace("s",""));0===s&&(s=1e3*Number(getComputedStyle(t).animationDuration.replace("s",""))),ic(()=>{e.before()}),o=!0,requestAnimationFrame(()=>{i||(ic(()=>{e.end()}),fd(),setTimeout(t._x_transitioning.finish,s+n),r=!0)})})}(t,{start(){a=e(t,o)},during(){l=e(t,i)},before:s,end(){a(),c=e(t,r)},after:n,cleanup(){l(),c()}})}function wd(t,e,i){if(-1===t.indexOf(e))return i;const o=t[t.indexOf(e)+1];if(!o)return i;if("scale"===e&&isNaN(o))return i;if("duration"===e||"delay"===e){let t=o.match(/([0-9]+)ms/);if(t)return t[1]}return"origin"===e&&["top","right","left","center","bottom"].includes(t[t.indexOf(e)+2])?[o,t[t.indexOf(e)+2]].join(" "):o}Ic("transition",(t,{value:e,modifiers:i,expression:o},{evaluate:r})=>{"function"==typeof o&&(o=r(o)),!1!==o&&(o&&"boolean"!=typeof o?function(t,e,i){yd(t,md,""),{enter:e=>{t._x_transition.enter.during=e},"enter-start":e=>{t._x_transition.enter.start=e},"enter-end":e=>{t._x_transition.enter.end=e},leave:e=>{t._x_transition.leave.during=e},"leave-start":e=>{t._x_transition.leave.start=e},"leave-end":e=>{t._x_transition.leave.end=e}}[i](e)}(t,o,e):function(t,e,i){yd(t,bd);let o=!e.includes("in")&&!e.includes("out")&&!i,r=o||e.includes("in")||["enter"].includes(i),s=o||e.includes("out")||["leave"].includes(i);e.includes("in")&&!o&&(e=e.filter((t,i)=>i<e.indexOf("out"))),e.includes("out")&&!o&&(e=e.filter((t,i)=>i>e.indexOf("out")));let n=!e.includes("opacity")&&!e.includes("scale"),a=n||e.includes("opacity")?0:1,l=n||e.includes("scale")?wd(e,"scale",95)/100:1,c=wd(e,"delay",0)/1e3,d=wd(e,"origin","center"),h="opacity, transform",u=wd(e,"duration",150)/1e3,p=wd(e,"duration",75)/1e3,f="cubic-bezier(0.4, 0.0, 0.2, 1)";r&&(t._x_transition.enter.during={transformOrigin:d,transitionDelay:`${c}s`,transitionProperty:h,transitionDuration:`${u}s`,transitionTimingFunction:f},t._x_transition.enter.start={opacity:a,transform:`scale(${l})`},t._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(t._x_transition.leave.during={transformOrigin:d,transitionDelay:`${c}s`,transitionProperty:h,transitionDuration:`${p}s`,transitionTimingFunction:f},t._x_transition.leave.start={opacity:1,transform:"scale(1)"},t._x_transition.leave.end={opacity:a,transform:`scale(${l})`})}(t,i,e))}),window.Element.prototype._x_toggleAndCascadeWithTransitions=function(t,e,i,o){const r="visible"===document.visibilityState?requestAnimationFrame:setTimeout;let s=()=>r(i);e?t._x_transition&&(t._x_transition.enter||t._x_transition.leave)?t._x_transition.enter&&(Object.entries(t._x_transition.enter.during).length||Object.entries(t._x_transition.enter.start).length||Object.entries(t._x_transition.enter.end).length)?t._x_transition.in(i):s():t._x_transition?t._x_transition.in(i):s():(t._x_hidePromise=t._x_transition?new Promise((e,i)=>{t._x_transition.out(()=>{},()=>e(o)),t._x_transitioning&&t._x_transitioning.beforeCancel(()=>i({isFromCancelledTransition:!0}))}):Promise.resolve(o),queueMicrotask(()=>{let e=xd(t);e?(e._x_hideChildren||(e._x_hideChildren=[]),e._x_hideChildren.push(t)):r(()=>{let e=t=>{let i=Promise.all([t._x_hidePromise,...(t._x_hideChildren||[]).map(e)]).then(([t])=>t?.());return delete t._x_hidePromise,delete t._x_hideChildren,i};e(t).catch(t=>{if(!t.isFromCancelledTransition)throw t})})}))};var kd=!1;function Cd(t,e=()=>{}){return(...i)=>kd?e(...i):t(...i)}var Sd=[];function $d(t){Sd.push(t)}var Ad=!1;function zd(t){let e=Al;Nl((t,i)=>{let o=e(t);return zl(o),()=>{}}),t(),Nl(e)}function Ed(t,e,i,o=[]){switch(t._x_bindings||(t._x_bindings=$l({})),t._x_bindings[e]=i,e=o.includes("camel")?e.toLowerCase().replace(/-(\w)/g,(t,e)=>e.toUpperCase()):e){case"value":!function(t,e){if(Bd(t))void 0===t.attributes.value&&(t.value=e),window.fromModel&&(t.checked="boolean"==typeof e?Md(t.value)===e:Pd(t.value,e));else if(Ld(t))Number.isInteger(e)?t.value=e:Array.isArray(e)||"boolean"==typeof e||[null,void 0].includes(e)?Array.isArray(e)?t.checked=e.some(e=>Pd(e,t.value)):t.checked=!!e:t.value=String(e);else if("SELECT"===t.tagName)!function(t,e){const i=[].concat(e).map(t=>t+"");Array.from(t.options).forEach(t=>{t.selected=i.includes(t.value)})}(t,e);else{if(t.value===e)return;t.value=void 0===e?"":e}}(t,i);break;case"style":!function(t,e){t._x_undoAddedStyles&&t._x_undoAddedStyles(),t._x_undoAddedStyles=bd(t,e)}(t,i);break;case"class":!function(t,e){t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedClasses=md(t,e)}(t,i);break;case"selected":case"checked":!function(t,e,i){Td(t,e,i),function(t,e,i){t[e]!==i&&(t[e]=i)}(t,e,i)}(t,e,i);break;default:Td(t,e,i)}}function Td(t,e,i){[null,void 0,!1].includes(i)&&function(t){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(t)}(e)?t.removeAttribute(e):(Od(e)&&(i=e),function(t,e,i){t.getAttribute(e)!=i&&t.setAttribute(e,i)}(t,e,i))}function Pd(t,e){return t==e}function Md(t){return!![1,"1","true","on","yes",!0].includes(t)||![0,"0","false","off","no",!1].includes(t)&&(t?Boolean(t):null)}var Id=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Od(t){return Id.has(t)}function Dd(t,e,i){let o=t.getAttribute(e);return null===o?"function"==typeof i?i():i:""===o||(Od(e)?!![e,"true"].includes(o):o)}function Ld(t){return"checkbox"===t.type||"ui-checkbox"===t.localName||"ui-switch"===t.localName}function Bd(t){return"radio"===t.type||"ui-radio"===t.localName}function Rd(t,e){let i;return function(){const o=this,r=arguments;clearTimeout(i),i=setTimeout(function(){i=null,t.apply(o,r)},e)}}function Fd(t,e){let i;return function(){let o=arguments;i||(t.apply(this,o),i=!0,setTimeout(()=>i=!1,e))}}function Vd({get:t,set:e},{get:i,set:o}){let r,s,n=!0,a=Al(()=>{let a=t(),l=i();if(n)o(Nd(a)),n=!1;else{let t=JSON.stringify(a),i=JSON.stringify(l);t!==r?o(Nd(a)):t!==i&&e(Nd(l))}r=JSON.stringify(t()),s=JSON.stringify(i())});return()=>{zl(a)}}function Nd(t){return"object"==typeof t?JSON.parse(JSON.stringify(t)):t}var Hd={},Ud=!1,jd={};function qd(t,e,i){let o=[];for(;o.length;)o.pop()();let r=Object.entries(e).map(([t,e])=>({name:t,value:e})),s=Dc(r);return r=r.map(t=>s.find(e=>e.name===t.name)?{name:`x-bind:${t.name}`,value:`"${t.value}"`}:t),Oc(t,r,i).map(t=>{o.push(t.runCleanups),t()}),()=>{for(;o.length;)o.pop()()}}var Wd={},Kd={get reactive(){return $l},get release(){return zl},get effect(){return Al},get raw(){return El},get transaction(){return Ul},version:"3.15.8",flushAndStopDeferringMutations:function(){oc=!1,sc(rc),rc=[]},dontAutoEvaluateFunctions:wc,disableEffectScheduling:function(t){Vl=!1,t(),Vl=!0},startObservingMutations:Jl,stopObservingMutations:tc,setReactivityEngine:function(t){$l=t.reactive,zl=t.release,Al=e=>t.effect(e,{scheduler:t=>{Vl?function(t){var e;e=t,Ol.includes(e)||Ol.push(e),Rl()}(t):t()}}),El=t.raw},onAttributeRemoved:Gl,onAttributesAdded:Xl,closestDataStack:lc,skipDuringClone:Cd,onlyDuringClone:function(t){return(...e)=>kd&&t(...e)},addRootSelector:od,addInitSelector:rd,setErrorHandler:function(t){xc=t},interceptClone:$d,addScopeToNode:ac,deferMutations:function(){oc=!0},mapAttributes:Uc,evaluateLater:Cc,interceptInit:function(t){ad.push(t)},initInterceptors:uc,injectMagics:bc,setEvaluator:function(t){$c=t},setRawEvaluator:function(t){Sc=t},mergeProxies:cc,extractProp:function(t,e,i,o=!0){if(t._x_bindings&&void 0!==t._x_bindings[e])return t._x_bindings[e];if(t._x_inlineBindings&&void 0!==t._x_inlineBindings[e]){let i=t._x_inlineBindings[e];return i.extract=o,wc(()=>kc(t,i.expression))}return Dd(t,e,i)},findClosest:nd,onElRemoved:Kl,closestRoot:sd,destroyTree:dd,interceptor:pc,transition:_d,setStyles:bd,mutateDom:ic,directive:Ic,entangle:Vd,throttle:Fd,debounce:Rd,evaluate:kc,evaluateRaw:function(...t){return Sc(...t)},initTree:cd,nextTick:pd,prefixed:Pc,prefix:function(t){Tc=t},plugin:function(t){(Array.isArray(t)?t:[t]).forEach(t=>t(Xd))},magic:gc,store:function(t,e){if(Ud||(Hd=$l(Hd),Ud=!0),void 0===e)return Hd[t];Hd[t]=e,uc(Hd[t]),"object"==typeof e&&null!==e&&e.hasOwnProperty("init")&&"function"==typeof e.init&&Hd[t].init()},start:function(){var t;Qc&&Zc("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Qc=!0,document.body||Zc("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Gc(document,"alpine:init"),Gc(document,"alpine:initializing"),Jl(),t=t=>cd(t,Yc),Wl.push(t),Kl(t=>dd(t)),Xl((t,e)=>{Oc(t,e).forEach(t=>t())}),Array.from(document.querySelectorAll(id().join(","))).filter(t=>!sd(t.parentElement,!0)).forEach(t=>{cd(t)}),Gc(document,"alpine:initialized"),setTimeout(()=>{[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([t,e,i])=>{var o;o=e,Object.keys(Mc).includes(o)||i.some(e=>{if(document.querySelector(e))return Zc(`found "${e}", but missing ${t} plugin`),!0})})})},clone:function(t,e){e._x_dataStack||(e._x_dataStack=t._x_dataStack),kd=!0,Ad=!0,zd(()=>{!function(t){let e=!1;cd(t,(t,i)=>{Yc(t,(t,o)=>{if(e&&function(t){return ed().some(e=>t.matches(e))}(t))return o();e=!0,i(t,o)})})}(e)}),kd=!1,Ad=!1},cloneNode:function(t,e){Sd.forEach(i=>i(t,e)),kd=!0,zd(()=>{cd(e,(t,e)=>{e(t,()=>{})})}),kd=!1},bound:function(t,e,i){return t._x_bindings&&void 0!==t._x_bindings[e]?t._x_bindings[e]:Dd(t,e,i)},$data:nc,watch:Hl,walk:Yc,data:function(t,e){Wd[t]=e},bind:function(t,e){let i="function"!=typeof e?()=>e:e;return t instanceof Element?qd(t,i()):(jd[t]=i,()=>{})}},Xd=Kd;function Gd(t,e){const i=Object.create(null),o=t.split(",");for(let t=0;t<o.length;t++)i[o[t]]=!0;return e?t=>!!i[t.toLowerCase()]:t=>!!i[t]}var Yd,Zd=Object.freeze({}),Qd=(Object.freeze([]),Object.prototype.hasOwnProperty),Jd=(t,e)=>Qd.call(t,e),th=Array.isArray,eh=t=>"[object Map]"===sh(t),ih=t=>"symbol"==typeof t,oh=t=>null!==t&&"object"==typeof t,rh=Object.prototype.toString,sh=t=>rh.call(t),nh=t=>sh(t).slice(8,-1),ah=t=>"string"==typeof t&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,lh=t=>{const e=Object.create(null);return i=>e[i]||(e[i]=t(i))},ch=/-(\w)/g,dh=(lh(t=>t.replace(ch,(t,e)=>e?e.toUpperCase():"")),/\B([A-Z])/g),hh=(lh(t=>t.replace(dh,"-$1").toLowerCase()),lh(t=>t.charAt(0).toUpperCase()+t.slice(1))),uh=(lh(t=>t?`on${hh(t)}`:""),(t,e)=>t!==e&&(t==t||e==e)),ph=new WeakMap,fh=[],mh=Symbol("iterate"),gh=Symbol("Map key iterate"),bh=0;function vh(t){const{deps:e}=t;if(e.length){for(let i=0;i<e.length;i++)e[i].delete(t);e.length=0}}var yh=!0,xh=[];function _h(){const t=xh.pop();yh=void 0===t||t}function wh(t,e,i){if(!yh||void 0===Yd)return;let o=ph.get(t);o||ph.set(t,o=new Map);let r=o.get(i);r||o.set(i,r=new Set),r.has(Yd)||(r.add(Yd),Yd.deps.push(r),Yd.options.onTrack&&Yd.options.onTrack({effect:Yd,target:t,type:e,key:i}))}function kh(t,e,i,o,r,s){const n=ph.get(t);if(!n)return;const a=new Set,l=t=>{t&&t.forEach(t=>{(t!==Yd||t.allowRecurse)&&a.add(t)})};if("clear"===e)n.forEach(l);else if("length"===i&&th(t))n.forEach((t,e)=>{("length"===e||e>=o)&&l(t)});else switch(void 0!==i&&l(n.get(i)),e){case"add":th(t)?ah(i)&&l(n.get("length")):(l(n.get(mh)),eh(t)&&l(n.get(gh)));break;case"delete":th(t)||(l(n.get(mh)),eh(t)&&l(n.get(gh)));break;case"set":eh(t)&&l(n.get(mh))}a.forEach(n=>{n.options.onTrigger&&n.options.onTrigger({effect:n,target:t,key:i,type:e,newValue:o,oldValue:r,oldTarget:s}),n.options.scheduler?n.options.scheduler(n):n()})}var Ch=Gd("__proto__,__v_isRef,__isVue"),Sh=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ih)),$h=Th(),Ah=Th(!0),zh=Eh();function Eh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const i=du(this);for(let t=0,e=this.length;t<e;t++)wh(i,"get",t+"");const o=i[e](...t);return-1===o||!1===o?i[e](...t.map(du)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){xh.push(yh),yh=!1;const i=du(this)[e].apply(this,t);return _h(),i}}),t}function Th(t=!1,e=!1){return function(i,o,r){if("__v_isReactive"===o)return!t;if("__v_isReadonly"===o)return t;if("__v_raw"===o&&r===(t?e?nu:su:e?ru:ou).get(i))return i;const s=th(i);if(!t&&s&&Jd(zh,o))return Reflect.get(zh,o,r);const n=Reflect.get(i,o,r);return(ih(o)?Sh.has(o):Ch(o))?n:(t||wh(i,"get",o),e?n:hu(n)?s&&ah(o)?n:n.value:oh(n)?t?lu(n):au(n):n)}}function Ph(t=!1){return function(e,i,o,r){let s=e[i];if(!t&&(o=du(o),s=du(s),!th(e)&&hu(s)&&!hu(o)))return s.value=o,!0;const n=th(e)&&ah(i)?Number(i)<e.length:Jd(e,i),a=Reflect.set(e,i,o,r);return e===du(r)&&(n?uh(o,s)&&kh(e,"set",i,o,s):kh(e,"add",i,o)),a}}var Mh={get:$h,set:Ph(),deleteProperty:function(t,e){const i=Jd(t,e),o=t[e],r=Reflect.deleteProperty(t,e);return r&&i&&kh(t,"delete",e,void 0,o),r},has:function(t,e){const i=Reflect.has(t,e);return ih(e)&&Sh.has(e)||wh(t,"has",e),i},ownKeys:function(t){return wh(t,"iterate",th(t)?"length":mh),Reflect.ownKeys(t)}},Ih={get:Ah,set:(t,e)=>(console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0),deleteProperty:(t,e)=>(console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0)},Oh=t=>oh(t)?au(t):t,Dh=t=>oh(t)?lu(t):t,Lh=t=>t,Bh=t=>Reflect.getPrototypeOf(t);function Rh(t,e,i=!1,o=!1){const r=du(t=t.__v_raw),s=du(e);e!==s&&!i&&wh(r,"get",e),!i&&wh(r,"get",s);const{has:n}=Bh(r),a=o?Lh:i?Dh:Oh;return n.call(r,e)?a(t.get(e)):n.call(r,s)?a(t.get(s)):void(t!==r&&t.get(e))}function Fh(t,e=!1){const i=this.__v_raw,o=du(i),r=du(t);return t!==r&&!e&&wh(o,"has",t),!e&&wh(o,"has",r),t===r?i.has(t):i.has(t)||i.has(r)}function Vh(t,e=!1){return t=t.__v_raw,!e&&wh(du(t),"iterate",mh),Reflect.get(t,"size",t)}function Nh(t){t=du(t);const e=du(this);return Bh(e).has.call(e,t)||(e.add(t),kh(e,"add",t,t)),this}function Hh(t,e){e=du(e);const i=du(this),{has:o,get:r}=Bh(i);let s=o.call(i,t);s?iu(i,o,t):(t=du(t),s=o.call(i,t));const n=r.call(i,t);return i.set(t,e),s?uh(e,n)&&kh(i,"set",t,e,n):kh(i,"add",t,e),this}function Uh(t){const e=du(this),{has:i,get:o}=Bh(e);let r=i.call(e,t);r?iu(e,i,t):(t=du(t),r=i.call(e,t));const s=o?o.call(e,t):void 0,n=e.delete(t);return r&&kh(e,"delete",t,void 0,s),n}function jh(){const t=du(this),e=0!==t.size,i=eh(t)?new Map(t):new Set(t),o=t.clear();return e&&kh(t,"clear",void 0,void 0,i),o}function qh(t,e){return function(i,o){const r=this,s=r.__v_raw,n=du(s),a=e?Lh:t?Dh:Oh;return!t&&wh(n,"iterate",mh),s.forEach((t,e)=>i.call(o,a(t),a(e),r))}}function Wh(t,e,i){return function(...o){const r=this.__v_raw,s=du(r),n=eh(s),a="entries"===t||t===Symbol.iterator&&n,l="keys"===t&&n,c=r[t](...o),d=i?Lh:e?Dh:Oh;return!e&&wh(s,"iterate",l?gh:mh),{next(){const{value:t,done:e}=c.next();return e?{value:t,done:e}:{value:a?[d(t[0]),d(t[1])]:d(t),done:e}},[Symbol.iterator](){return this}}}}function Kh(t){return function(...e){{const i=e[0]?`on key "${e[0]}" `:"";console.warn(`${hh(t)} operation ${i}failed: target is readonly.`,du(this))}return"delete"!==t&&this}}function Xh(){const t={get(t){return Rh(this,t)},get size(){return Vh(this)},has:Fh,add:Nh,set:Hh,delete:Uh,clear:jh,forEach:qh(!1,!1)},e={get(t){return Rh(this,t,!1,!0)},get size(){return Vh(this)},has:Fh,add:Nh,set:Hh,delete:Uh,clear:jh,forEach:qh(!1,!0)},i={get(t){return Rh(this,t,!0)},get size(){return Vh(this,!0)},has(t){return Fh.call(this,t,!0)},add:Kh("add"),set:Kh("set"),delete:Kh("delete"),clear:Kh("clear"),forEach:qh(!0,!1)},o={get(t){return Rh(this,t,!0,!0)},get size(){return Vh(this,!0)},has(t){return Fh.call(this,t,!0)},add:Kh("add"),set:Kh("set"),delete:Kh("delete"),clear:Kh("clear"),forEach:qh(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Wh(r,!1,!1),i[r]=Wh(r,!0,!1),e[r]=Wh(r,!1,!0),o[r]=Wh(r,!0,!0)}),[t,i,e,o]}var[Gh,Yh,Zh,Qh]=Xh();function Jh(t,e){const i=e?t?Qh:Zh:t?Yh:Gh;return(e,o,r)=>"__v_isReactive"===o?!t:"__v_isReadonly"===o?t:"__v_raw"===o?e:Reflect.get(Jd(i,o)&&o in e?i:e,o,r)}var tu={get:Jh(!1,!1)},eu={get:Jh(!0,!1)};function iu(t,e,i){const o=du(i);if(o!==i&&e.call(t,o)){const e=nh(t);console.warn(`Reactive ${e} contains both the raw and reactive versions of the same object${"Map"===e?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var ou=new WeakMap,ru=new WeakMap,su=new WeakMap,nu=new WeakMap;function au(t){return t&&t.__v_isReadonly?t:cu(t,!1,Mh,tu,ou)}function lu(t){return cu(t,!0,Ih,eu,su)}function cu(t,e,i,o,r){if(!oh(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&(!e||!t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const n=(a=t).__v_skip||!Object.isExtensible(a)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(nh(a));var a;if(0===n)return t;const l=new Proxy(t,2===n?o:i);return r.set(t,l),l}function du(t){return t&&du(t.__v_raw)||t}function hu(t){return Boolean(t&&!0===t.__v_isRef)}gc("nextTick",()=>pd),gc("dispatch",t=>Gc.bind(Gc,t)),gc("watch",(t,{evaluateLater:e,cleanup:i})=>(t,o)=>{let r=e(t),s=Hl(()=>{let t;return r(e=>t=e),t},o);i(s)}),gc("store",function(){return Hd}),gc("data",t=>nc(t)),gc("root",t=>sd(t)),gc("refs",t=>(t._x_refs_proxy||(t._x_refs_proxy=cc(function(t){let e=[];return nd(t,t=>{t._x_refs&&e.push(t._x_refs)}),e}(t))),t._x_refs_proxy));var uu={};function pu(t){return uu[t]||(uu[t]=0),++uu[t]}function fu(t,e,i){gc(e,o=>Zc(`You can't use [$${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${i}`,o))}gc("id",(t,{cleanup:e})=>(i,o=null)=>function(t,e,i,o){if(t._x_id||(t._x_id={}),t._x_id[e])return t._x_id[e];let r=o();return t._x_id[e]=r,i(()=>{delete t._x_id[e]}),r}(t,`${i}${o?`-${o}`:""}`,e,()=>{let e=function(t,e){return nd(t,t=>{if(t._x_ids&&t._x_ids[e])return!0})}(t,i),r=e?e._x_ids[i]:pu(i);return o?`${i}-${r}-${o}`:`${i}-${r}`})),$d((t,e)=>{t._x_id&&(e._x_id=t._x_id)}),gc("el",t=>t),fu("Focus","focus","focus"),fu("Persist","persist","persist"),Ic("modelable",(t,{expression:e},{effect:i,evaluateLater:o,cleanup:r})=>{let s=o(e),n=()=>{let t;return s(e=>t=e),t},a=o(`${e} = __placeholder`),l=t=>a(()=>{},{scope:{__placeholder:t}}),c=n();l(c),queueMicrotask(()=>{if(!t._x_model)return;t._x_removeModelListeners.default();let e=t._x_model.get,i=t._x_model.set,o=Vd({get:()=>e(),set(t){i(t)}},{get:()=>n(),set(t){l(t)}});r(o)})}),Ic("teleport",(t,{modifiers:e,expression:i},{cleanup:o})=>{"template"!==t.tagName.toLowerCase()&&Zc("x-teleport can only be used on a <template> tag",t);let r=gu(i),s=t.content.cloneNode(!0).firstElementChild;t._x_teleport=s,s._x_teleportBack=t,t.setAttribute("data-teleport-template",!0),s.setAttribute("data-teleport-target",!0),t._x_forwardEvents&&t._x_forwardEvents.forEach(e=>{s.addEventListener(e,e=>{e.stopPropagation(),t.dispatchEvent(new e.constructor(e.type,e))})}),ac(s,{},t);let n=(t,e,i)=>{i.includes("prepend")?e.parentNode.insertBefore(t,e):i.includes("append")?e.parentNode.insertBefore(t,e.nextSibling):e.appendChild(t)};ic(()=>{n(s,r,e),Cd(()=>{cd(s)})()}),t._x_teleportPutBack=()=>{let o=gu(i);ic(()=>{n(t._x_teleport,o,e)})},o(()=>ic(()=>{s.remove(),dd(s)}))});var mu=document.createElement("div");function gu(t){let e=Cd(()=>document.querySelector(t),()=>mu)();return e||Zc(`Cannot find x-teleport element for selector: "${t}"`),e}var bu=()=>{};function vu(t,e,i,o){let r=t,s=t=>o(t),n={},a=(t,e)=>i=>e(t,i);if(i.includes("dot")&&(e=e.replace(/-/g,".")),i.includes("camel")&&(e=e.toLowerCase().replace(/-(\w)/g,(t,e)=>e.toUpperCase())),i.includes("passive")&&(n.passive=!0),i.includes("capture")&&(n.capture=!0),i.includes("window")&&(r=window),i.includes("document")&&(r=document),i.includes("debounce")){let t=i[i.indexOf("debounce")+1]||"invalid-wait",e=yu(t.split("ms")[0])?Number(t.split("ms")[0]):250;s=Rd(s,e)}if(i.includes("throttle")){let t=i[i.indexOf("throttle")+1]||"invalid-wait",e=yu(t.split("ms")[0])?Number(t.split("ms")[0]):250;s=Fd(s,e)}return i.includes("prevent")&&(s=a(s,(t,e)=>{e.preventDefault(),t(e)})),i.includes("stop")&&(s=a(s,(t,e)=>{e.stopPropagation(),t(e)})),i.includes("once")&&(s=a(s,(t,i)=>{t(i),r.removeEventListener(e,s,n)})),(i.includes("away")||i.includes("outside"))&&(r=document,s=a(s,(e,i)=>{t.contains(i.target)||!1!==i.target.isConnected&&(t.offsetWidth<1&&t.offsetHeight<1||!1!==t._x_isShown&&e(i))})),i.includes("self")&&(s=a(s,(e,i)=>{i.target===t&&e(i)})),"submit"===e&&(s=a(s,(t,e)=>{e.target._x_pendingModelUpdates&&e.target._x_pendingModelUpdates.forEach(t=>t()),t(e)})),(function(t){return["keydown","keyup"].includes(t)}(e)||xu(e))&&(s=a(s,(t,e)=>{(function(t,e){let i=e.filter(t=>!["window","document","prevent","stop","once","capture","self","away","outside","passive","preserve-scroll","blur","change","lazy"].includes(t));if(i.includes("debounce")){let t=i.indexOf("debounce");i.splice(t,yu((i[t+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.includes("throttle")){let t=i.indexOf("throttle");i.splice(t,yu((i[t+1]||"invalid-wait").split("ms")[0])?2:1)}if(0===i.length)return!1;if(1===i.length&&_u(t.key).includes(i[0]))return!1;const o=["ctrl","shift","alt","meta","cmd","super"].filter(t=>i.includes(t));if(i=i.filter(t=>!o.includes(t)),o.length>0&&o.filter(e=>("cmd"!==e&&"super"!==e||(e="meta"),t[`${e}Key`])).length===o.length){if(xu(t.type))return!1;if(_u(t.key).includes(i[0]))return!1}return!0})(e,i)||t(e)})),r.addEventListener(e,s,n),()=>{r.removeEventListener(e,s,n)}}function yu(t){return!Array.isArray(t)&&!isNaN(t)}function xu(t){return["contextmenu","click","mouse"].some(e=>t.includes(e))}function _u(t){if(!t)return[];var e;t=[" ","_"].includes(e=t)?e:e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase();let i={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return i[t]=t,Object.keys(i).map(e=>{if(i[e]===t)return e}).filter(t=>t)}function wu(t,e,i,o){return ic(()=>{if(i instanceof CustomEvent&&void 0!==i.detail)return null!==i.detail&&void 0!==i.detail?i.detail:i.target.value;if(Ld(t)){if(Array.isArray(o)){let t=null;return t=e.includes("number")?ku(i.target.value):e.includes("boolean")?Md(i.target.value):i.target.value,i.target.checked?o.includes(t)?o:o.concat([t]):o.filter(e=>!(e==t))}return i.target.checked}if("select"===t.tagName.toLowerCase()&&t.multiple)return e.includes("number")?Array.from(i.target.selectedOptions).map(t=>ku(t.value||t.text)):e.includes("boolean")?Array.from(i.target.selectedOptions).map(t=>Md(t.value||t.text)):Array.from(i.target.selectedOptions).map(t=>t.value||t.text);{let r;return r=Bd(t)?i.target.checked?i.target.value:o:i.target.value,e.includes("number")?ku(r):e.includes("boolean")?Md(r):e.includes("trim")?r.trim():r}})}function ku(t){let e=t?parseFloat(t):null;return i=e,Array.isArray(i)||isNaN(i)?t:e;var i}function Cu(t){return null!==t&&"object"==typeof t&&"function"==typeof t.get&&"function"==typeof t.set}bu.inline=(t,{modifiers:e},{cleanup:i})=>{e.includes("self")?t._x_ignoreSelf=!0:t._x_ignore=!0,i(()=>{e.includes("self")?delete t._x_ignoreSelf:delete t._x_ignore})},Ic("ignore",bu),Ic("effect",Cd((t,{expression:e},{effect:i})=>{i(Cc(t,e))})),Ic("model",(t,{modifiers:e,expression:i},{effect:o,cleanup:r})=>{let s=t;e.includes("parent")&&(s=t.parentNode);let n,a=Cc(s,i);n="string"==typeof i?Cc(s,`${i} = __placeholder`):"function"==typeof i&&"string"==typeof i()?Cc(s,`${i()} = __placeholder`):()=>{};let l=()=>{let t;return a(e=>t=e),Cu(t)?t.get():t},c=t=>{let e;a(t=>e=t),Cu(e)?e.set(t):n(()=>{},{scope:{__placeholder:t}})};"string"==typeof i&&"radio"===t.type&&ic(()=>{t.hasAttribute("name")||t.setAttribute("name",i)});let d,h=e.includes("change")||e.includes("lazy"),u=e.includes("blur"),p=e.includes("enter");if(kd)d=()=>{};else if(h||u||p){let i=[],o=i=>c(wu(t,e,i,l()));if(h&&i.push(vu(t,"change",e,o)),u&&(i.push(vu(t,"blur",e,o)),t.form)){let e=()=>o({target:t});t.form._x_pendingModelUpdates||(t.form._x_pendingModelUpdates=[]),t.form._x_pendingModelUpdates.push(e),r(()=>t.form._x_pendingModelUpdates.splice(t.form._x_pendingModelUpdates.indexOf(e),1))}p&&i.push(vu(t,"keydown",e,t=>{"Enter"===t.key&&o(t)})),d=()=>i.forEach(t=>t())}else{let i="select"===t.tagName.toLowerCase()||["checkbox","radio"].includes(t.type)?"change":"input";d=vu(t,i,e,i=>{c(wu(t,e,i,l()))})}if(e.includes("fill")&&([void 0,null,""].includes(l())||Ld(t)&&Array.isArray(l())||"select"===t.tagName.toLowerCase()&&t.multiple)&&c(wu(t,e,{target:t},l())),t._x_removeModelListeners||(t._x_removeModelListeners={}),t._x_removeModelListeners.default=d,r(()=>t._x_removeModelListeners.default()),t.form){let i=vu(t.form,"reset",[],i=>{pd(()=>t._x_model&&t._x_model.set(wu(t,e,{target:t},l())))});r(()=>i())}t._x_model={get:()=>l(),set(t){c(t)}},t._x_forceModelUpdate=e=>{void 0===e&&"string"==typeof i&&i.match(/\./)&&(e=""),window.fromModel=!0,ic(()=>Ed(t,"value",e)),delete window.fromModel},o(()=>{let i=l();e.includes("unintrusive")&&document.activeElement.isSameNode(t)||t._x_forceModelUpdate(i)})}),Ic("cloak",t=>queueMicrotask(()=>ic(()=>t.removeAttribute(Pc("cloak"))))),rd(()=>`[${Pc("init")}]`),Ic("init",Cd((t,{expression:e},{evaluate:i})=>"string"==typeof e?!!e.trim()&&i(e,{},!1):i(e,{},!1))),Ic("text",(t,{expression:e},{effect:i,evaluateLater:o})=>{let r=o(e);i(()=>{r(e=>{ic(()=>{t.textContent=e})})})}),Ic("html",(t,{expression:e},{effect:i,evaluateLater:o})=>{let r=o(e);i(()=>{r(e=>{ic(()=>{t.innerHTML=e,t._x_ignoreSelf=!0,cd(t),delete t._x_ignoreSelf})})})}),Uc(Vc(":",Pc("bind:")));var Su=(t,{value:e,modifiers:i,expression:o,original:r},{effect:s,cleanup:n})=>{if(!e){let e={};return a=e,Object.entries(jd).forEach(([t,e])=>{Object.defineProperty(a,t,{get:()=>(...t)=>e(...t)})}),void Cc(t,o)(e=>{qd(t,e,r)},{scope:e})}var a;if("key"===e)return function(t,e){t._x_keyExpression=e}(t,o);if(t._x_inlineBindings&&t._x_inlineBindings[e]&&t._x_inlineBindings[e].extract)return;let l=Cc(t,o);s(()=>l(r=>{void 0===r&&"string"==typeof o&&o.match(/\./)&&(r=""),ic(()=>Ed(t,e,r,i))})),n(()=>{t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedStyles&&t._x_undoAddedStyles()})};function $u(t,e,i,o){let r={};if(/^\[.*\]$/.test(t.item)&&Array.isArray(e)){let i=t.item.replace("[","").replace("]","").split(",").map(t=>t.trim());i.forEach((t,i)=>{r[t]=e[i]})}else if(/^\{.*\}$/.test(t.item)&&!Array.isArray(e)&&"object"==typeof e){let i=t.item.replace("{","").replace("}","").split(",").map(t=>t.trim());i.forEach(t=>{r[t]=e[t]})}else r[t.item]=e;return t.index&&(r[t.index]=i),t.collection&&(r[t.collection]=o),r}function Au(){}function zu(t,e,i){Ic(e,o=>Zc(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${i}`,o))}Su.inline=(t,{value:e,modifiers:i,expression:o})=>{e&&(t._x_inlineBindings||(t._x_inlineBindings={}),t._x_inlineBindings[e]={expression:o,extract:!1})},Ic("bind",Su),od(()=>`[${Pc("data")}]`),Ic("data",(t,{expression:e},{cleanup:i})=>{if(function(t){return!!kd&&(!!Ad||t.hasAttribute("data-has-alpine-state"))}(t))return;e=""===e?"{}":e;let o={};bc(o,t);let r={};var s,n;s=r,n=o,Object.entries(Wd).forEach(([t,e])=>{Object.defineProperty(s,t,{get:()=>(...t)=>e.bind(n)(...t),enumerable:!1})});let a=kc(t,e,{scope:r});void 0!==a&&!0!==a||(a={}),bc(a,t);let l=$l(a);uc(l);let c=ac(t,l);l.init&&kc(t,l.init),i(()=>{l.destroy&&kc(t,l.destroy),c()})}),$d((t,e)=>{t._x_dataStack&&(e._x_dataStack=t._x_dataStack,e.setAttribute("data-has-alpine-state",!0))}),Ic("show",(t,{modifiers:e,expression:i},{effect:o})=>{let r=Cc(t,i);t._x_doHide||(t._x_doHide=()=>{ic(()=>{t.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),t._x_doShow||(t._x_doShow=()=>{ic(()=>{1===t.style.length&&"none"===t.style.display?t.removeAttribute("style"):t.style.removeProperty("display")})});let s,n=()=>{t._x_doHide(),t._x_isShown=!1},a=()=>{t._x_doShow(),t._x_isShown=!0},l=()=>setTimeout(a),c=vd(t=>t?a():n(),e=>{"function"==typeof t._x_toggleAndCascadeWithTransitions?t._x_toggleAndCascadeWithTransitions(t,e,a,n):e?l():n()}),d=!0;o(()=>r(t=>{(d||t!==s)&&(e.includes("immediate")&&(t?l():n()),c(t),s=t,d=!1)}))}),Ic("for",(t,{expression:e},{effect:i,cleanup:o})=>{let r=function(t){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,i=t.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);if(!i)return;let o={};o.items=i[2].trim();let r=i[1].replace(/^\s*\(|\)\s*$/g,"").trim(),s=r.match(e);return s?(o.item=r.replace(e,"").trim(),o.index=s[1].trim(),s[2]&&(o.collection=s[2].trim())):o.item=r,o}(e),s=Cc(t,r.items),n=Cc(t,t._x_keyExpression||"index");t._x_prevKeys=[],t._x_lookup={},i(()=>function(t,e,i,o){let r=t;i(i=>{var s;s=i,!Array.isArray(s)&&!isNaN(s)&&i>=0&&(i=Array.from(Array(i).keys(),t=>t+1)),void 0===i&&(i=[]);let n=t._x_lookup,a=t._x_prevKeys,l=[],c=[];if((t=>"object"==typeof t&&!Array.isArray(t))(i))i=Object.entries(i).map(([r,s])=>{let n=$u(e,s,r,i);o(e=>{c.includes(e)&&Zc("Duplicate key on x-for",t),c.push(e)},{scope:{index:r,...n}}),l.push(n)});else for(let r=0;r<i.length;r++){let s=$u(e,i[r],r,i);o(e=>{c.includes(e)&&Zc("Duplicate key on x-for",t),c.push(e)},{scope:{index:r,...s}}),l.push(s)}let d=[],h=[],u=[],p=[];for(let t=0;t<a.length;t++){let e=a[t];-1===c.indexOf(e)&&u.push(e)}a=a.filter(t=>!u.includes(t));let f="template";for(let t=0;t<c.length;t++){let e=c[t],i=a.indexOf(e);if(-1===i)a.splice(t,0,e),d.push([f,t]);else if(i!==t){let e=a.splice(t,1)[0],o=a.splice(i-1,1)[0];a.splice(t,0,o),a.splice(i,0,e),h.push([e,o])}else p.push(e);f=e}for(let t=0;t<u.length;t++){let e=u[t];e in n&&(ic(()=>{dd(n[e]),n[e].remove()}),delete n[e])}for(let t=0;t<h.length;t++){let[e,i]=h[t],o=n[e],s=n[i],a=document.createElement("div");ic(()=>{s||Zc('x-for ":key" is undefined or invalid',r,i,n),s.after(a),o.after(s),s._x_currentIfEl&&s.after(s._x_currentIfEl),a.before(o),o._x_currentIfEl&&o.after(o._x_currentIfEl),a.remove()}),s._x_refreshXForScope(l[c.indexOf(i)])}for(let t=0;t<d.length;t++){let[e,i]=d[t],o="template"===e?r:n[e];o._x_currentIfEl&&(o=o._x_currentIfEl);let s=l[i],a=c[i],h=document.importNode(r.content,!0).firstElementChild,u=$l(s);ac(h,u,r),h._x_refreshXForScope=t=>{Object.entries(t).forEach(([t,e])=>{u[t]=e})},ic(()=>{o.after(h),Cd(()=>cd(h))()}),"object"==typeof a&&Zc("x-for key cannot be an object, it must be a string or an integer",r),n[a]=h}for(let t=0;t<p.length;t++)n[p[t]]._x_refreshXForScope(l[c.indexOf(p[t])]);r._x_prevKeys=c})}(t,r,s,n)),o(()=>{Object.values(t._x_lookup).forEach(t=>ic(()=>{dd(t),t.remove()})),delete t._x_prevKeys,delete t._x_lookup})}),Au.inline=(t,{expression:e},{cleanup:i})=>{let o=sd(t);o._x_refs||(o._x_refs={}),o._x_refs[e]=t,i(()=>delete o._x_refs[e])},Ic("ref",Au),Ic("if",(t,{expression:e},{effect:i,cleanup:o})=>{"template"!==t.tagName.toLowerCase()&&Zc("x-if can only be used on a <template> tag",t);let r=Cc(t,e);i(()=>r(e=>{e?(()=>{if(t._x_currentIfEl)return t._x_currentIfEl;let e=t.content.cloneNode(!0).firstElementChild;ac(e,{},t),ic(()=>{t.after(e),Cd(()=>cd(e))()}),t._x_currentIfEl=e,t._x_undoIf=()=>{ic(()=>{dd(e),e.remove()}),delete t._x_currentIfEl}})():t._x_undoIf&&(t._x_undoIf(),delete t._x_undoIf)})),o(()=>t._x_undoIf&&t._x_undoIf())}),Ic("id",(t,{expression:e},{evaluate:i})=>{i(e).forEach(e=>function(t,e){t._x_ids||(t._x_ids={}),t._x_ids[e]||(t._x_ids[e]=pu(e))}(t,e))}),$d((t,e)=>{t._x_ids&&(e._x_ids=t._x_ids)}),Uc(Vc("@",Pc("on:"))),Ic("on",Cd((t,{value:e,modifiers:i,expression:o},{cleanup:r})=>{let s=o?Cc(t,o):()=>{};"template"===t.tagName.toLowerCase()&&(t._x_forwardEvents||(t._x_forwardEvents=[]),t._x_forwardEvents.includes(e)||t._x_forwardEvents.push(e));let n=vu(t,e,i,t=>{s(()=>{},{scope:{$event:t},params:[t]})});r(()=>n())})),zu("Collapse","collapse","collapse"),zu("Intersect","intersect","intersect"),zu("Focus","trap","focus"),zu("Mask","mask","mask"),Xd.setEvaluator(Ac),Xd.setRawEvaluator(function(t,e,i={}){let o={};bc(o,t);let r=[o,...lc(t)],s=cc([i.scope??{},...r]),n=i.params??[];if(e.includes("await"))return new(0,Object.getPrototypeOf(async function(){}).constructor)(["scope"],`with (scope) { let __result = ${/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e}; return __result }`).call(i.context,s);{let t=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(()=>{ ${e} })()`:e,o=new Function(["scope"],`with (scope) { let __result = ${t}; return __result }`).call(i.context,s);return"function"==typeof o&&_c?o.apply(s,n):o}}),Xd.setReactivityEngine({reactive:au,effect:function(t,e=Zd){(function(t){return t&&!0===t._isEffect})(t)&&(t=t.raw);const i=function(t,e){const i=function(){if(!i.active)return t();if(!fh.includes(i)){vh(i);try{return xh.push(yh),yh=!0,fh.push(i),Yd=i,t()}finally{fh.pop(),_h(),Yd=fh[fh.length-1]}}};return i.id=bh++,i.allowRecurse=!!e.allowRecurse,i._isEffect=!0,i.active=!0,i.raw=t,i.deps=[],i.options=e,i}(t,e);return e.lazy||i(),i},release:function(t){t.active&&(vh(t),t.options.onStop&&t.options.onStop(),t.active=!1)},raw:du});var Eu=Xd;Wt("/");var Tu=Pl().Engine,Pu=Pl().Render;Pl().Runner,Pl().Bodies,Pl().Composite,window.Alpine=Eu,Eu.start();var Mu=Tu.create(),Iu=Pu.create({element:document.getElementById("main"),engine:Mu});Pu.run(Iu),window.onerror=function(t,e,i){document.body.innerHTML=`<div style="color:red; background:white; padding:20px;">\n        <h1>ERROR DETECTADO:</h1>\n        <p>${t}</p>\n        <p>En: ${e} (Línea ${i})</p>\n    </div>`}})()})();