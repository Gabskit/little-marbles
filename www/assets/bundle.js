/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={46(e,t,i){var o;o=function(){return function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=20)}([function(e,t){var o={};e.exports=o,function(){o._baseDelta=1e3/60,o._nextId=0,o._seed=0,o._nowStartTime=+new Date,o._warnedOnce={},o._decomp=null,o.extend=function(e,t){var i,n;"boolean"==typeof t?(i=2,n=t):(i=1,n=!0);for(var r=i;r<arguments.length;r++){var s=arguments[r];if(s)for(var a in s)n&&s[a]&&s[a].constructor===Object?e[a]&&e[a].constructor!==Object?e[a]=s[a]:(e[a]=e[a]||{},o.extend(e[a],n,s[a])):e[a]=s[a]}return e},o.clone=function(e,t){return o.extend({},t,e)},o.keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var i in e)t.push(i);return t},o.values=function(e){var t=[];if(Object.keys){for(var i=Object.keys(e),o=0;o<i.length;o++)t.push(e[i[o]]);return t}for(var n in e)t.push(e[n]);return t},o.get=function(e,t,i,o){t=t.split(".").slice(i,o);for(var n=0;n<t.length;n+=1)e=e[t[n]];return e},o.set=function(e,t,i,n,r){var s=t.split(".").slice(n,r);return o.get(e,t,0,-1)[s[s.length-1]]=i,i},o.shuffle=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(o.random()*(t+1)),n=e[t];e[t]=e[i],e[i]=n}return e},o.choose=function(e){return e[Math.floor(o.random()*e.length)]},o.isElement=function(e){return"undefined"!=typeof HTMLElement?e instanceof HTMLElement:!!(e&&e.nodeType&&e.nodeName)},o.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},o.isFunction=function(e){return"function"==typeof e},o.isPlainObject=function(e){return"object"==typeof e&&e.constructor===Object},o.isString=function(e){return"[object String]"===toString.call(e)},o.clamp=function(e,t,i){return e<t?t:e>i?i:e},o.sign=function(e){return e<0?-1:1},o.now=function(){if("undefined"!=typeof window&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-o._nowStartTime},o.random=function(t,i){return i=void 0!==i?i:1,(t=void 0!==t?t:0)+e()*(i-t)};var e=function(){return o._seed=(9301*o._seed+49297)%233280,o._seed/233280};o.colorToNumber=function(e){return 3==(e=e.replace("#","")).length&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},o.logLevel=1,o.log=function(){console&&o.logLevel>0&&o.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},o.info=function(){console&&o.logLevel>0&&o.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},o.warn=function(){console&&o.logLevel>0&&o.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},o.warnOnce=function(){var e=Array.prototype.slice.call(arguments).join(" ");o._warnedOnce[e]||(o.warn(e),o._warnedOnce[e]=!0)},o.deprecated=function(e,t,i){e[t]=o.chain(function(){o.warnOnce("🔅 deprecated 🔅",i)},e[t])},o.nextId=function(){return o._nextId++},o.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var i=0;i<e.length;i++)if(e[i]===t)return i;return-1},o.map=function(e,t){if(e.map)return e.map(t);for(var i=[],o=0;o<e.length;o+=1)i.push(t(e[o]));return i},o.topologicalSort=function(e){var t=[],i=[],n=[];for(var r in e)i[r]||n[r]||o._topologicalSort(r,i,n,e,t);return t},o._topologicalSort=function(e,t,i,n,r){var s=n[e]||[];i[e]=!0;for(var a=0;a<s.length;a+=1){var l=s[a];i[l]||t[l]||o._topologicalSort(l,t,i,n,r)}i[e]=!1,t[e]=!0,r.push(e)},o.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var i=arguments[t];i._chained?e.push.apply(e,i._chained):e.push(i)}var o=function(){for(var t,i=new Array(arguments.length),o=0,n=arguments.length;o<n;o++)i[o]=arguments[o];for(o=0;o<e.length;o+=1){var r=e[o].apply(t,i);void 0!==r&&(t=r)}return t};return o._chained=e,o},o.chainPathBefore=function(e,t,i){return o.set(e,t,o.chain(i,o.get(e,t)))},o.chainPathAfter=function(e,t,i){return o.set(e,t,o.chain(o.get(e,t),i))},o.setDecomp=function(e){o._decomp=e},o.getDecomp=function(){var e=o._decomp;try{e||"undefined"==typeof window||(e=window.decomp),e||void 0===i.g||(e=i.g.decomp)}catch(t){e=null}return e}}()},function(e,t){var i={};e.exports=i,i.create=function(e){var t={min:{x:0,y:0},max:{x:0,y:0}};return e&&i.update(t,e),t},i.update=function(e,t,i){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var o=0;o<t.length;o++){var n=t[o];n.x>e.max.x&&(e.max.x=n.x),n.x<e.min.x&&(e.min.x=n.x),n.y>e.max.y&&(e.max.y=n.y),n.y<e.min.y&&(e.min.y=n.y)}i&&(i.x>0?e.max.x+=i.x:e.min.x+=i.x,i.y>0?e.max.y+=i.y:e.min.y+=i.y)},i.contains=function(e,t){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},i.overlaps=function(e,t){return e.min.x<=t.max.x&&e.max.x>=t.min.x&&e.max.y>=t.min.y&&e.min.y<=t.max.y},i.translate=function(e,t){e.min.x+=t.x,e.max.x+=t.x,e.min.y+=t.y,e.max.y+=t.y},i.shift=function(e,t){var i=e.max.x-e.min.x,o=e.max.y-e.min.y;e.min.x=t.x,e.max.x=t.x+i,e.min.y=t.y,e.max.y=t.y+o}},function(e,t){var i={};e.exports=i,i.create=function(e,t){return{x:e||0,y:t||0}},i.clone=function(e){return{x:e.x,y:e.y}},i.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},i.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},i.rotate=function(e,t,i){var o=Math.cos(t),n=Math.sin(t);i||(i={});var r=e.x*o-e.y*n;return i.y=e.x*n+e.y*o,i.x=r,i},i.rotateAbout=function(e,t,i,o){var n=Math.cos(t),r=Math.sin(t);o||(o={});var s=i.x+((e.x-i.x)*n-(e.y-i.y)*r);return o.y=i.y+((e.x-i.x)*r+(e.y-i.y)*n),o.x=s,o},i.normalise=function(e){var t=i.magnitude(e);return 0===t?{x:0,y:0}:{x:e.x/t,y:e.y/t}},i.dot=function(e,t){return e.x*t.x+e.y*t.y},i.cross=function(e,t){return e.x*t.y-e.y*t.x},i.cross3=function(e,t,i){return(t.x-e.x)*(i.y-e.y)-(t.y-e.y)*(i.x-e.x)},i.add=function(e,t,i){return i||(i={}),i.x=e.x+t.x,i.y=e.y+t.y,i},i.sub=function(e,t,i){return i||(i={}),i.x=e.x-t.x,i.y=e.y-t.y,i},i.mult=function(e,t){return{x:e.x*t,y:e.y*t}},i.div=function(e,t){return{x:e.x/t,y:e.y/t}},i.perp=function(e,t){return{x:(t=!0===t?-1:1)*-e.y,y:t*e.x}},i.neg=function(e){return{x:-e.x,y:-e.y}},i.angle=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},i._temp=[i.create(),i.create(),i.create(),i.create(),i.create(),i.create()]},function(e,t,i){var o={};e.exports=o;var n=i(2),r=i(0);o.create=function(e,t){for(var i=[],o=0;o<e.length;o++){var n=e[o],r={x:n.x,y:n.y,index:o,body:t,isInternal:!1};i.push(r)}return i},o.fromPath=function(e,t){var i=[];return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,function(e,t,o){i.push({x:parseFloat(t),y:parseFloat(o)})}),o.create(i,t)},o.centre=function(e){for(var t,i,r,s=o.area(e,!0),a={x:0,y:0},l=0;l<e.length;l++)r=(l+1)%e.length,t=n.cross(e[l],e[r]),i=n.mult(n.add(e[l],e[r]),t),a=n.add(a,i);return n.div(a,6*s)},o.mean=function(e){for(var t={x:0,y:0},i=0;i<e.length;i++)t.x+=e[i].x,t.y+=e[i].y;return n.div(t,e.length)},o.area=function(e,t){for(var i=0,o=e.length-1,n=0;n<e.length;n++)i+=(e[o].x-e[n].x)*(e[o].y+e[n].y),o=n;return t?i/2:Math.abs(i)/2},o.inertia=function(e,t){for(var i,o,r=0,s=0,a=e,l=0;l<a.length;l++)o=(l+1)%a.length,r+=(i=Math.abs(n.cross(a[o],a[l])))*(n.dot(a[o],a[o])+n.dot(a[o],a[l])+n.dot(a[l],a[l])),s+=i;return t/6*(r/s)},o.translate=function(e,t,i){i=void 0!==i?i:1;var o,n=e.length,r=t.x*i,s=t.y*i;for(o=0;o<n;o++)e[o].x+=r,e[o].y+=s;return e},o.rotate=function(e,t,i){if(0!==t){var o,n,r,s,a=Math.cos(t),l=Math.sin(t),c=i.x,d=i.y,u=e.length;for(s=0;s<u;s++)n=(o=e[s]).x-c,r=o.y-d,o.x=c+(n*a-r*l),o.y=d+(n*l+r*a);return e}},o.contains=function(e,t){for(var i,o=t.x,n=t.y,r=e.length,s=e[r-1],a=0;a<r;a++){if(i=e[a],(o-s.x)*(i.y-s.y)+(n-s.y)*(s.x-i.x)>0)return!1;s=i}return!0},o.scale=function(e,t,i,r){if(1===t&&1===i)return e;var s,a;r=r||o.centre(e);for(var l=0;l<e.length;l++)s=e[l],a=n.sub(s,r),e[l].x=r.x+a.x*t,e[l].y=r.y+a.y*i;return e},o.chamfer=function(e,t,i,o,s){t="number"==typeof t?[t]:t||[8],i=void 0!==i?i:-1,o=o||2,s=s||14;for(var a=[],l=0;l<e.length;l++){var c=e[l-1>=0?l-1:e.length-1],d=e[l],u=e[(l+1)%e.length],h=t[l<t.length?l:t.length-1];if(0!==h){var p=n.normalise({x:d.y-c.y,y:c.x-d.x}),f=n.normalise({x:u.y-d.y,y:d.x-u.x}),m=Math.sqrt(2*Math.pow(h,2)),g=n.mult(r.clone(p),h),b=n.normalise(n.mult(n.add(p,f),.5)),v=n.sub(d,n.mult(b,m)),y=i;-1===i&&(y=1.75*Math.pow(h,.32)),(y=r.clamp(y,o,s))%2==1&&(y+=1);for(var x=Math.acos(n.dot(p,f))/y,_=0;_<y;_++)a.push(n.add(n.rotate(g,x*_),v))}else a.push(d)}return a},o.clockwiseSort=function(e){var t=o.mean(e);return e.sort(function(e,i){return n.angle(t,e)-n.angle(t,i)}),e},o.isConvex=function(e){var t,i,o,n,r=0,s=e.length;if(s<3)return null;for(t=0;t<s;t++)if(o=(t+2)%s,n=(e[i=(t+1)%s].x-e[t].x)*(e[o].y-e[i].y),(n-=(e[i].y-e[t].y)*(e[o].x-e[i].x))<0?r|=1:n>0&&(r|=2),3===r)return!1;return 0!==r||null},o.hull=function(e){var t,i,o=[],r=[];for((e=e.slice(0)).sort(function(e,t){var i=e.x-t.x;return 0!==i?i:e.y-t.y}),i=0;i<e.length;i+=1){for(t=e[i];r.length>=2&&n.cross3(r[r.length-2],r[r.length-1],t)<=0;)r.pop();r.push(t)}for(i=e.length-1;i>=0;i-=1){for(t=e[i];o.length>=2&&n.cross3(o[o.length-2],o[o.length-1],t)<=0;)o.pop();o.push(t)}return o.pop(),r.pop(),o.concat(r)}},function(e,t,i){var o={};e.exports=o;var n=i(3),r=i(2),s=i(7),a=i(0),l=i(1),c=i(11);!function(){o._timeCorrection=!0,o._inertiaScale=4,o._nextCollidingGroupId=1,o._nextNonCollidingGroupId=-1,o._nextCategory=1,o._baseDelta=1e3/60,o.create=function(t){var i={id:a.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:n.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:1e3/60,_original:null},o=a.extend(i,t);return e(o,t),o},o.nextGroup=function(e){return e?o._nextNonCollidingGroupId--:o._nextCollidingGroupId++},o.nextCategory=function(){return o._nextCategory=o._nextCategory<<1,o._nextCategory};var e=function(e,t){t=t||{},o.set(e,{bounds:e.bounds||l.create(e.vertices),positionPrev:e.positionPrev||r.clone(e.position),anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e}),n.rotate(e.vertices,e.angle,e.position),c.rotate(e.axes,e.angle),l.update(e.bounds,e.vertices,e.velocity),o.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia});var i=e.isStatic?"#14151f":a.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),s=e.isStatic?"#555":"#ccc",d=e.isStatic&&null===e.render.fillStyle?1:0;e.render.fillStyle=e.render.fillStyle||i,e.render.strokeStyle=e.render.strokeStyle||s,e.render.lineWidth=e.render.lineWidth||d,e.render.sprite.xOffset+=-(e.bounds.min.x-e.position.x)/(e.bounds.max.x-e.bounds.min.x),e.render.sprite.yOffset+=-(e.bounds.min.y-e.position.y)/(e.bounds.max.y-e.bounds.min.y)};o.set=function(e,t,i){var n;for(n in"string"==typeof t&&(n=t,(t={})[n]=i),t)if(Object.prototype.hasOwnProperty.call(t,n))switch(i=t[n],n){case"isStatic":o.setStatic(e,i);break;case"isSleeping":s.set(e,i);break;case"mass":o.setMass(e,i);break;case"density":o.setDensity(e,i);break;case"inertia":o.setInertia(e,i);break;case"vertices":o.setVertices(e,i);break;case"position":o.setPosition(e,i);break;case"angle":o.setAngle(e,i);break;case"velocity":o.setVelocity(e,i);break;case"angularVelocity":o.setAngularVelocity(e,i);break;case"speed":o.setSpeed(e,i);break;case"angularSpeed":o.setAngularSpeed(e,i);break;case"parts":o.setParts(e,i);break;case"centre":o.setCentre(e,i);break;default:e[n]=i}},o.setStatic=function(e,t){for(var i=0;i<e.parts.length;i++){var o=e.parts[i];t?(o.isStatic||(o._original={restitution:o.restitution,friction:o.friction,mass:o.mass,inertia:o.inertia,density:o.density,inverseMass:o.inverseMass,inverseInertia:o.inverseInertia}),o.restitution=0,o.friction=1,o.mass=o.inertia=o.density=1/0,o.inverseMass=o.inverseInertia=0,o.positionPrev.x=o.position.x,o.positionPrev.y=o.position.y,o.anglePrev=o.angle,o.angularVelocity=0,o.speed=0,o.angularSpeed=0,o.motion=0):o._original&&(o.restitution=o._original.restitution,o.friction=o._original.friction,o.mass=o._original.mass,o.inertia=o._original.inertia,o.density=o._original.density,o.inverseMass=o._original.inverseMass,o.inverseInertia=o._original.inverseInertia,o._original=null),o.isStatic=t}},o.setMass=function(e,t){var i=e.inertia/(e.mass/6);e.inertia=i*(t/6),e.inverseInertia=1/e.inertia,e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},o.setDensity=function(e,t){o.setMass(e,t*e.area),e.density=t},o.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},o.setVertices=function(e,t){t[0].body===e?e.vertices=t:e.vertices=n.create(t,e),e.axes=c.fromVertices(e.vertices),e.area=n.area(e.vertices),o.setMass(e,e.density*e.area);var i=n.centre(e.vertices);n.translate(e.vertices,i,-1),o.setInertia(e,o._inertiaScale*n.inertia(e.vertices,e.mass)),n.translate(e.vertices,e.position),l.update(e.bounds,e.vertices,e.velocity)},o.setParts=function(e,t,i){var r;for(t=t.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,r=0;r<t.length;r++){var s=t[r];s!==e&&(s.parent=e,e.parts.push(s))}if(1!==e.parts.length){if(i=void 0===i||i){var a=[];for(r=0;r<t.length;r++)a=a.concat(t[r].vertices);n.clockwiseSort(a);var l=n.hull(a),c=n.centre(l);o.setVertices(e,l),n.translate(e.vertices,c)}var d=o._totalProperties(e);e.area=d.area,e.parent=e,e.position.x=d.centre.x,e.position.y=d.centre.y,e.positionPrev.x=d.centre.x,e.positionPrev.y=d.centre.y,o.setMass(e,d.mass),o.setInertia(e,d.inertia),o.setPosition(e,d.centre)}},o.setCentre=function(e,t,i){i?(e.positionPrev.x+=t.x,e.positionPrev.y+=t.y,e.position.x+=t.x,e.position.y+=t.y):(e.positionPrev.x=t.x-(e.position.x-e.positionPrev.x),e.positionPrev.y=t.y-(e.position.y-e.positionPrev.y),e.position.x=t.x,e.position.y=t.y)},o.setPosition=function(e,t,i){var o=r.sub(t,e.position);i?(e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.velocity.x=o.x,e.velocity.y=o.y,e.speed=r.magnitude(o)):(e.positionPrev.x+=o.x,e.positionPrev.y+=o.y);for(var s=0;s<e.parts.length;s++){var a=e.parts[s];a.position.x+=o.x,a.position.y+=o.y,n.translate(a.vertices,o),l.update(a.bounds,a.vertices,e.velocity)}},o.setAngle=function(e,t,i){var o=t-e.angle;i?(e.anglePrev=e.angle,e.angularVelocity=o,e.angularSpeed=Math.abs(o)):e.anglePrev+=o;for(var s=0;s<e.parts.length;s++){var a=e.parts[s];a.angle+=o,n.rotate(a.vertices,o,e.position),c.rotate(a.axes,o),l.update(a.bounds,a.vertices,e.velocity),s>0&&r.rotateAbout(a.position,o,e.position,a.position)}},o.setVelocity=function(e,t){var i=e.deltaTime/o._baseDelta;e.positionPrev.x=e.position.x-t.x*i,e.positionPrev.y=e.position.y-t.y*i,e.velocity.x=(e.position.x-e.positionPrev.x)/i,e.velocity.y=(e.position.y-e.positionPrev.y)/i,e.speed=r.magnitude(e.velocity)},o.getVelocity=function(e){var t=o._baseDelta/e.deltaTime;return{x:(e.position.x-e.positionPrev.x)*t,y:(e.position.y-e.positionPrev.y)*t}},o.getSpeed=function(e){return r.magnitude(o.getVelocity(e))},o.setSpeed=function(e,t){o.setVelocity(e,r.mult(r.normalise(o.getVelocity(e)),t))},o.setAngularVelocity=function(e,t){var i=e.deltaTime/o._baseDelta;e.anglePrev=e.angle-t*i,e.angularVelocity=(e.angle-e.anglePrev)/i,e.angularSpeed=Math.abs(e.angularVelocity)},o.getAngularVelocity=function(e){return(e.angle-e.anglePrev)*o._baseDelta/e.deltaTime},o.getAngularSpeed=function(e){return Math.abs(o.getAngularVelocity(e))},o.setAngularSpeed=function(e,t){o.setAngularVelocity(e,a.sign(o.getAngularVelocity(e))*t)},o.translate=function(e,t,i){o.setPosition(e,r.add(e.position,t),i)},o.rotate=function(e,t,i,n){if(i){var r=Math.cos(t),s=Math.sin(t),a=e.position.x-i.x,l=e.position.y-i.y;o.setPosition(e,{x:i.x+(a*r-l*s),y:i.y+(a*s+l*r)},n),o.setAngle(e,e.angle+t,n)}else o.setAngle(e,e.angle+t,n)},o.scale=function(e,t,i,r){var s=0,a=0;r=r||e.position;for(var d=0;d<e.parts.length;d++){var u=e.parts[d];n.scale(u.vertices,t,i,r),u.axes=c.fromVertices(u.vertices),u.area=n.area(u.vertices),o.setMass(u,e.density*u.area),n.translate(u.vertices,{x:-u.position.x,y:-u.position.y}),o.setInertia(u,o._inertiaScale*n.inertia(u.vertices,u.mass)),n.translate(u.vertices,{x:u.position.x,y:u.position.y}),d>0&&(s+=u.area,a+=u.inertia),u.position.x=r.x+(u.position.x-r.x)*t,u.position.y=r.y+(u.position.y-r.y)*i,l.update(u.bounds,u.vertices,e.velocity)}e.parts.length>1&&(e.area=s,e.isStatic||(o.setMass(e,e.density*s),o.setInertia(e,a))),e.circleRadius&&(t===i?e.circleRadius*=t:e.circleRadius=null)},o.update=function(e,t){var i=(t=(void 0!==t?t:1e3/60)*e.timeScale)*t,s=o._timeCorrection?t/(e.deltaTime||t):1,d=1-e.frictionAir*(t/a._baseDelta),u=(e.position.x-e.positionPrev.x)*s,h=(e.position.y-e.positionPrev.y)*s;e.velocity.x=u*d+e.force.x/e.mass*i,e.velocity.y=h*d+e.force.y/e.mass*i,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.deltaTime=t,e.angularVelocity=(e.angle-e.anglePrev)*d*s+e.torque/e.inertia*i,e.anglePrev=e.angle,e.angle+=e.angularVelocity;for(var p=0;p<e.parts.length;p++){var f=e.parts[p];n.translate(f.vertices,e.velocity),p>0&&(f.position.x+=e.velocity.x,f.position.y+=e.velocity.y),0!==e.angularVelocity&&(n.rotate(f.vertices,e.angularVelocity,e.position),c.rotate(f.axes,e.angularVelocity),p>0&&r.rotateAbout(f.position,e.angularVelocity,e.position,f.position)),l.update(f.bounds,f.vertices,e.velocity)}},o.updateVelocities=function(e){var t=o._baseDelta/e.deltaTime,i=e.velocity;i.x=(e.position.x-e.positionPrev.x)*t,i.y=(e.position.y-e.positionPrev.y)*t,e.speed=Math.sqrt(i.x*i.x+i.y*i.y),e.angularVelocity=(e.angle-e.anglePrev)*t,e.angularSpeed=Math.abs(e.angularVelocity)},o.applyForce=function(e,t,i){var o=t.x-e.position.x,n=t.y-e.position.y;e.force.x+=i.x,e.force.y+=i.y,e.torque+=o*i.y-n*i.x},o._totalProperties=function(e){for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},i=1===e.parts.length?0:1;i<e.parts.length;i++){var o=e.parts[i],n=o.mass!==1/0?o.mass:1;t.mass+=n,t.area+=o.area,t.inertia+=o.inertia,t.centre=r.add(t.centre,r.mult(o.position,n))}return t.centre=r.div(t.centre,t.mass),t}}()},function(e,t,i){var o={};e.exports=o;var n=i(0);o.on=function(e,t,i){for(var o,n=t.split(" "),r=0;r<n.length;r++)o=n[r],e.events=e.events||{},e.events[o]=e.events[o]||[],e.events[o].push(i);return i},o.off=function(e,t,i){if(t){"function"==typeof t&&(i=t,t=n.keys(e.events).join(" "));for(var o=t.split(" "),r=0;r<o.length;r++){var s=e.events[o[r]],a=[];if(i&&s)for(var l=0;l<s.length;l++)s[l]!==i&&a.push(s[l]);e.events[o[r]]=a}}else e.events={}},o.trigger=function(e,t,i){var o,r,s,a,l=e.events;if(l&&n.keys(l).length>0){i||(i={}),o=t.split(" ");for(var c=0;c<o.length;c++)if(s=l[r=o[c]]){(a=n.clone(i,!1)).name=r,a.source=e;for(var d=0;d<s.length;d++)s[d].apply(e,[a])}}}},function(e,t,i){var o={};e.exports=o;var n=i(5),r=i(0),s=i(1),a=i(4);o.create=function(e){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},e)},o.setModified=function(e,t,i,n){if(e.isModified=t,t&&e.cache&&(e.cache.allBodies=null,e.cache.allConstraints=null,e.cache.allComposites=null),i&&e.parent&&o.setModified(e.parent,t,i,n),n)for(var r=0;r<e.composites.length;r++){var s=e.composites[r];o.setModified(s,t,i,n)}},o.add=function(e,t){var i=[].concat(t);n.trigger(e,"beforeAdd",{object:t});for(var s=0;s<i.length;s++){var a=i[s];switch(a.type){case"body":if(a.parent!==a){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}o.addBody(e,a);break;case"constraint":o.addConstraint(e,a);break;case"composite":o.addComposite(e,a);break;case"mouseConstraint":o.addConstraint(e,a.constraint)}}return n.trigger(e,"afterAdd",{object:t}),e},o.remove=function(e,t,i){var r=[].concat(t);n.trigger(e,"beforeRemove",{object:t});for(var s=0;s<r.length;s++){var a=r[s];switch(a.type){case"body":o.removeBody(e,a,i);break;case"constraint":o.removeConstraint(e,a,i);break;case"composite":o.removeComposite(e,a,i);break;case"mouseConstraint":o.removeConstraint(e,a.constraint)}}return n.trigger(e,"afterRemove",{object:t}),e},o.addComposite=function(e,t){return e.composites.push(t),t.parent=e,o.setModified(e,!0,!0,!1),e},o.removeComposite=function(e,t,i){var n=r.indexOf(e.composites,t);if(-1!==n){var s=o.allBodies(t);o.removeCompositeAt(e,n);for(var a=0;a<s.length;a++)s[a].sleepCounter=0}if(i)for(a=0;a<e.composites.length;a++)o.removeComposite(e.composites[a],t,!0);return e},o.removeCompositeAt=function(e,t){return e.composites.splice(t,1),o.setModified(e,!0,!0,!1),e},o.addBody=function(e,t){return e.bodies.push(t),o.setModified(e,!0,!0,!1),e},o.removeBody=function(e,t,i){var n=r.indexOf(e.bodies,t);if(-1!==n&&(o.removeBodyAt(e,n),t.sleepCounter=0),i)for(var s=0;s<e.composites.length;s++)o.removeBody(e.composites[s],t,!0);return e},o.removeBodyAt=function(e,t){return e.bodies.splice(t,1),o.setModified(e,!0,!0,!1),e},o.addConstraint=function(e,t){return e.constraints.push(t),o.setModified(e,!0,!0,!1),e},o.removeConstraint=function(e,t,i){var n=r.indexOf(e.constraints,t);if(-1!==n&&o.removeConstraintAt(e,n),i)for(var s=0;s<e.composites.length;s++)o.removeConstraint(e.composites[s],t,!0);return e},o.removeConstraintAt=function(e,t){return e.constraints.splice(t,1),o.setModified(e,!0,!0,!1),e},o.clear=function(e,t,i){if(i)for(var n=0;n<e.composites.length;n++)o.clear(e.composites[n],t,!0);return t?e.bodies=e.bodies.filter(function(e){return e.isStatic}):e.bodies.length=0,e.constraints.length=0,e.composites.length=0,o.setModified(e,!0,!0,!1),e},o.allBodies=function(e){if(e.cache&&e.cache.allBodies)return e.cache.allBodies;for(var t=[].concat(e.bodies),i=0;i<e.composites.length;i++)t=t.concat(o.allBodies(e.composites[i]));return e.cache&&(e.cache.allBodies=t),t},o.allConstraints=function(e){if(e.cache&&e.cache.allConstraints)return e.cache.allConstraints;for(var t=[].concat(e.constraints),i=0;i<e.composites.length;i++)t=t.concat(o.allConstraints(e.composites[i]));return e.cache&&(e.cache.allConstraints=t),t},o.allComposites=function(e){if(e.cache&&e.cache.allComposites)return e.cache.allComposites;for(var t=[].concat(e.composites),i=0;i<e.composites.length;i++)t=t.concat(o.allComposites(e.composites[i]));return e.cache&&(e.cache.allComposites=t),t},o.get=function(e,t,i){var n,r;switch(i){case"body":n=o.allBodies(e);break;case"constraint":n=o.allConstraints(e);break;case"composite":n=o.allComposites(e).concat(e)}return n?0===(r=n.filter(function(e){return e.id.toString()===t.toString()})).length?null:r[0]:null},o.move=function(e,t,i){return o.remove(e,t),o.add(i,t),e},o.rebase=function(e){for(var t=o.allBodies(e).concat(o.allConstraints(e)).concat(o.allComposites(e)),i=0;i<t.length;i++)t[i].id=r.nextId();return e},o.translate=function(e,t,i){for(var n=i?o.allBodies(e):e.bodies,r=0;r<n.length;r++)a.translate(n[r],t);return e},o.rotate=function(e,t,i,n){for(var r=Math.cos(t),s=Math.sin(t),l=n?o.allBodies(e):e.bodies,c=0;c<l.length;c++){var d=l[c],u=d.position.x-i.x,h=d.position.y-i.y;a.setPosition(d,{x:i.x+(u*r-h*s),y:i.y+(u*s+h*r)}),a.rotate(d,t)}return e},o.scale=function(e,t,i,n,r){for(var s=r?o.allBodies(e):e.bodies,l=0;l<s.length;l++){var c=s[l],d=c.position.x-n.x,u=c.position.y-n.y;a.setPosition(c,{x:n.x+d*t,y:n.y+u*i}),a.scale(c,t,i)}return e},o.bounds=function(e){for(var t=o.allBodies(e),i=[],n=0;n<t.length;n+=1){var r=t[n];i.push(r.bounds.min,r.bounds.max)}return s.create(i)}},function(e,t,i){var o={};e.exports=o;var n=i(4),r=i(5),s=i(0);o._motionWakeThreshold=.18,o._motionSleepThreshold=.08,o._minBias=.9,o.update=function(e,t){for(var i=t/s._baseDelta,r=o._motionSleepThreshold,a=0;a<e.length;a++){var l=e[a],c=n.getSpeed(l),d=n.getAngularSpeed(l),u=c*c+d*d;if(0===l.force.x&&0===l.force.y){var h=Math.min(l.motion,u),p=Math.max(l.motion,u);l.motion=o._minBias*h+(1-o._minBias)*p,l.sleepThreshold>0&&l.motion<r?(l.sleepCounter+=1,l.sleepCounter>=l.sleepThreshold/i&&o.set(l,!0)):l.sleepCounter>0&&(l.sleepCounter-=1)}else o.set(l,!1)}},o.afterCollisions=function(e){for(var t=o._motionSleepThreshold,i=0;i<e.length;i++){var n=e[i];if(n.isActive){var r=n.collision,s=r.bodyA.parent,a=r.bodyB.parent;if(!(s.isSleeping&&a.isSleeping||s.isStatic||a.isStatic)&&(s.isSleeping||a.isSleeping)){var l=s.isSleeping&&!s.isStatic?s:a,c=l===s?a:s;!l.isStatic&&c.motion>t&&o.set(l,!1)}}}},o.set=function(e,t){var i=e.isSleeping;t?(e.isSleeping=!0,e.sleepCounter=e.sleepThreshold,e.positionImpulse.x=0,e.positionImpulse.y=0,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.anglePrev=e.angle,e.speed=0,e.angularSpeed=0,e.motion=0,i||r.trigger(e,"sleepStart")):(e.isSleeping=!1,e.sleepCounter=0,i&&r.trigger(e,"sleepEnd"))}},function(e,t,i){var o={};e.exports=o;var n,r,s,a=i(3),l=i(9);n=[],r={overlap:0,axis:null},s={overlap:0,axis:null},o.create=function(e,t){return{pair:null,collided:!1,bodyA:e,bodyB:t,parentA:e.parent,parentB:t.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},o.collides=function(e,t,i){if(o._overlapAxes(r,e.vertices,t.vertices,e.axes),r.overlap<=0)return null;if(o._overlapAxes(s,t.vertices,e.vertices,t.axes),s.overlap<=0)return null;var n,c,d=i&&i.table[l.id(e,t)];d?n=d.collision:((n=o.create(e,t)).collided=!0,n.bodyA=e.id<t.id?e:t,n.bodyB=e.id<t.id?t:e,n.parentA=n.bodyA.parent,n.parentB=n.bodyB.parent),e=n.bodyA,t=n.bodyB,c=r.overlap<s.overlap?r:s;var u=n.normal,h=n.tangent,p=n.penetration,f=n.supports,m=c.overlap,g=c.axis,b=g.x,v=g.y;b*(t.position.x-e.position.x)+v*(t.position.y-e.position.y)>=0&&(b=-b,v=-v),u.x=b,u.y=v,h.x=-v,h.y=b,p.x=b*m,p.y=v*m,n.depth=m;var y=o._findSupports(e,t,u,1),x=0;if(a.contains(e.vertices,y[0])&&(f[x++]=y[0]),a.contains(e.vertices,y[1])&&(f[x++]=y[1]),x<2){var _=o._findSupports(t,e,u,-1);a.contains(t.vertices,_[0])&&(f[x++]=_[0]),x<2&&a.contains(t.vertices,_[1])&&(f[x++]=_[1])}return 0===x&&(f[x++]=y[0]),n.supportCount=x,n},o._overlapAxes=function(e,t,i,o){var n,r,s,a,l,c,d=t.length,u=i.length,h=t[0].x,p=t[0].y,f=i[0].x,m=i[0].y,g=o.length,b=Number.MAX_VALUE,v=0;for(l=0;l<g;l++){var y=o[l],x=y.x,_=y.y,w=h*x+p*_,k=f*x+m*_,C=w,S=k;for(c=1;c<d;c+=1)(a=t[c].x*x+t[c].y*_)>C?C=a:a<w&&(w=a);for(c=1;c<u;c+=1)(a=i[c].x*x+i[c].y*_)>S?S=a:a<k&&(k=a);if((n=(r=C-k)<(s=S-w)?r:s)<b&&(b=n,v=l,n<=0))break}e.axis=o[v],e.overlap=b},o._findSupports=function(e,t,i,o){var r,s,a,l=t.vertices,c=l.length,d=e.position.x,u=e.position.y,h=i.x*o,p=i.y*o,f=l[0],m=f,g=h*(d-m.x)+p*(u-m.y);for(a=1;a<c;a+=1)(s=h*(d-(m=l[a]).x)+p*(u-m.y))<g&&(g=s,f=m);return g=h*(d-(r=l[(c+f.index-1)%c]).x)+p*(u-r.y),h*(d-(m=l[(f.index+1)%c]).x)+p*(u-m.y)<g?(n[0]=f,n[1]=m,n):(n[0]=f,n[1]=r,n)}},function(e,t,i){var o={};e.exports=o;var n=i(16);o.create=function(e,t){var i=e.bodyA,r=e.bodyB,s={id:o.id(i,r),bodyA:i,bodyB:r,collision:e,contacts:[n.create(),n.create()],contactCount:0,separation:0,isActive:!0,isSensor:i.isSensor||r.isSensor,timeCreated:t,timeUpdated:t,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return o.update(s,e,t),s},o.update=function(e,t,i){var o=t.supports,n=t.supportCount,r=e.contacts,s=t.parentA,a=t.parentB;e.isActive=!0,e.timeUpdated=i,e.collision=t,e.separation=t.depth,e.inverseMass=s.inverseMass+a.inverseMass,e.friction=s.friction<a.friction?s.friction:a.friction,e.frictionStatic=s.frictionStatic>a.frictionStatic?s.frictionStatic:a.frictionStatic,e.restitution=s.restitution>a.restitution?s.restitution:a.restitution,e.slop=s.slop>a.slop?s.slop:a.slop,e.contactCount=n,t.pair=e;var l=o[0],c=r[0],d=o[1],u=r[1];u.vertex!==l&&c.vertex!==d||(r[1]=c,r[0]=c=u,u=r[1]),c.vertex=l,u.vertex=d},o.setActive=function(e,t,i){t?(e.isActive=!0,e.timeUpdated=i):(e.isActive=!1,e.contactCount=0)},o.id=function(e,t){return e.id<t.id?e.id.toString(36)+":"+t.id.toString(36):t.id.toString(36)+":"+e.id.toString(36)}},function(e,t,i){var o={};e.exports=o;var n=i(3),r=i(2),s=i(7),a=i(1),l=i(11),c=i(0);o._warming=.4,o._torqueDampen=1,o._minLength=1e-6,o.create=function(e){var t=e;t.bodyA&&!t.pointA&&(t.pointA={x:0,y:0}),t.bodyB&&!t.pointB&&(t.pointB={x:0,y:0});var i=t.bodyA?r.add(t.bodyA.position,t.pointA):t.pointA,o=t.bodyB?r.add(t.bodyB.position,t.pointB):t.pointB,n=r.magnitude(r.sub(i,o));t.length=void 0!==t.length?t.length:n,t.id=t.id||c.nextId(),t.label=t.label||"Constraint",t.type="constraint",t.stiffness=t.stiffness||(t.length>0?1:.7),t.damping=t.damping||0,t.angularStiffness=t.angularStiffness||0,t.angleA=t.bodyA?t.bodyA.angle:t.angleA,t.angleB=t.bodyB?t.bodyB.angle:t.angleB,t.plugin={};var s={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return 0===t.length&&t.stiffness>.1?(s.type="pin",s.anchors=!1):t.stiffness<.9&&(s.type="spring"),t.render=c.extend(s,t.render),t},o.preSolveAll=function(e){for(var t=0;t<e.length;t+=1){var i=e[t],o=i.constraintImpulse;i.isStatic||0===o.x&&0===o.y&&0===o.angle||(i.position.x+=o.x,i.position.y+=o.y,i.angle+=o.angle)}},o.solveAll=function(e,t){for(var i=c.clamp(t/c._baseDelta,0,1),n=0;n<e.length;n+=1){var r=e[n],s=!r.bodyA||r.bodyA&&r.bodyA.isStatic,a=!r.bodyB||r.bodyB&&r.bodyB.isStatic;(s||a)&&o.solve(e[n],i)}for(n=0;n<e.length;n+=1)s=!(r=e[n]).bodyA||r.bodyA&&r.bodyA.isStatic,a=!r.bodyB||r.bodyB&&r.bodyB.isStatic,s||a||o.solve(e[n],i)},o.solve=function(e,t){var i=e.bodyA,n=e.bodyB,s=e.pointA,a=e.pointB;if(i||n){i&&!i.isStatic&&(r.rotate(s,i.angle-e.angleA,s),e.angleA=i.angle),n&&!n.isStatic&&(r.rotate(a,n.angle-e.angleB,a),e.angleB=n.angle);var l=s,c=a;if(i&&(l=r.add(i.position,s)),n&&(c=r.add(n.position,a)),l&&c){var d=r.sub(l,c),u=r.magnitude(d);u<o._minLength&&(u=o._minLength);var h,p,f,m,g,b=(u-e.length)/u,v=e.stiffness>=1||0===e.length?e.stiffness*t:e.stiffness*t*t,y=e.damping*t,x=r.mult(d,b*v),_=(i?i.inverseMass:0)+(n?n.inverseMass:0),w=_+((i?i.inverseInertia:0)+(n?n.inverseInertia:0));if(y>0){var k=r.create();f=r.div(d,u),g=r.sub(n&&r.sub(n.position,n.positionPrev)||k,i&&r.sub(i.position,i.positionPrev)||k),m=r.dot(f,g)}i&&!i.isStatic&&(p=i.inverseMass/_,i.constraintImpulse.x-=x.x*p,i.constraintImpulse.y-=x.y*p,i.position.x-=x.x*p,i.position.y-=x.y*p,y>0&&(i.positionPrev.x-=y*f.x*m*p,i.positionPrev.y-=y*f.y*m*p),h=r.cross(s,x)/w*o._torqueDampen*i.inverseInertia*(1-e.angularStiffness),i.constraintImpulse.angle-=h,i.angle-=h),n&&!n.isStatic&&(p=n.inverseMass/_,n.constraintImpulse.x+=x.x*p,n.constraintImpulse.y+=x.y*p,n.position.x+=x.x*p,n.position.y+=x.y*p,y>0&&(n.positionPrev.x+=y*f.x*m*p,n.positionPrev.y+=y*f.y*m*p),h=r.cross(a,x)/w*o._torqueDampen*n.inverseInertia*(1-e.angularStiffness),n.constraintImpulse.angle+=h,n.angle+=h)}}},o.postSolveAll=function(e){for(var t=0;t<e.length;t++){var i=e[t],c=i.constraintImpulse;if(!(i.isStatic||0===c.x&&0===c.y&&0===c.angle)){s.set(i,!1);for(var d=0;d<i.parts.length;d++){var u=i.parts[d];n.translate(u.vertices,c),d>0&&(u.position.x+=c.x,u.position.y+=c.y),0!==c.angle&&(n.rotate(u.vertices,c.angle,i.position),l.rotate(u.axes,c.angle),d>0&&r.rotateAbout(u.position,c.angle,i.position,u.position)),a.update(u.bounds,u.vertices,i.velocity)}c.angle*=o._warming,c.x*=o._warming,c.y*=o._warming}}},o.pointAWorld=function(e){return{x:(e.bodyA?e.bodyA.position.x:0)+(e.pointA?e.pointA.x:0),y:(e.bodyA?e.bodyA.position.y:0)+(e.pointA?e.pointA.y:0)}},o.pointBWorld=function(e){return{x:(e.bodyB?e.bodyB.position.x:0)+(e.pointB?e.pointB.x:0),y:(e.bodyB?e.bodyB.position.y:0)+(e.pointB?e.pointB.y:0)}},o.currentLength=function(e){var t=(e.bodyA?e.bodyA.position.x:0)+(e.pointA?e.pointA.x:0),i=(e.bodyA?e.bodyA.position.y:0)+(e.pointA?e.pointA.y:0),o=t-((e.bodyB?e.bodyB.position.x:0)+(e.pointB?e.pointB.x:0)),n=i-((e.bodyB?e.bodyB.position.y:0)+(e.pointB?e.pointB.y:0));return Math.sqrt(o*o+n*n)}},function(e,t,i){var o={};e.exports=o;var n=i(2),r=i(0);o.fromVertices=function(e){for(var t={},i=0;i<e.length;i++){var o=(i+1)%e.length,s=n.normalise({x:e[o].y-e[i].y,y:e[i].x-e[o].x}),a=0===s.y?1/0:s.x/s.y;t[a=a.toFixed(3).toString()]=s}return r.values(t)},o.rotate=function(e,t){if(0!==t)for(var i=Math.cos(t),o=Math.sin(t),n=0;n<e.length;n++){var r,s=e[n];r=s.x*i-s.y*o,s.y=s.x*o+s.y*i,s.x=r}}},function(e,t,i){var o={};e.exports=o;var n=i(3),r=i(0),s=i(4),a=i(1),l=i(2);o.rectangle=function(e,t,i,o,a){a=a||{};var l={label:"Rectangle Body",position:{x:e,y:t},vertices:n.fromPath("L 0 0 L "+i+" 0 L "+i+" "+o+" L 0 "+o)};if(a.chamfer){var c=a.chamfer;l.vertices=n.chamfer(l.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete a.chamfer}return s.create(r.extend({},l,a))},o.trapezoid=function(e,t,i,o,a,l){l=l||{},a>=1&&r.warn("Bodies.trapezoid: slope parameter must be < 1.");var c,d=i*(a*=.5),u=d+(1-2*a)*i,h=u+d;c=a<.5?"L 0 0 L "+d+" "+-o+" L "+u+" "+-o+" L "+h+" 0":"L 0 0 L "+u+" "+-o+" L "+h+" 0";var p={label:"Trapezoid Body",position:{x:e,y:t},vertices:n.fromPath(c)};if(l.chamfer){var f=l.chamfer;p.vertices=n.chamfer(p.vertices,f.radius,f.quality,f.qualityMin,f.qualityMax),delete l.chamfer}return s.create(r.extend({},p,l))},o.circle=function(e,t,i,n,s){n=n||{};var a={label:"Circle Body",circleRadius:i};s=s||25;var l=Math.ceil(Math.max(10,Math.min(s,i)));return l%2==1&&(l+=1),o.polygon(e,t,l,i,r.extend({},a,n))},o.polygon=function(e,t,i,a,l){if(l=l||{},i<3)return o.circle(e,t,a,l);for(var c=2*Math.PI/i,d="",u=.5*c,h=0;h<i;h+=1){var p=u+h*c,f=Math.cos(p)*a,m=Math.sin(p)*a;d+="L "+f.toFixed(3)+" "+m.toFixed(3)+" "}var g={label:"Polygon Body",position:{x:e,y:t},vertices:n.fromPath(d)};if(l.chamfer){var b=l.chamfer;g.vertices=n.chamfer(g.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete l.chamfer}return s.create(r.extend({},g,l))},o.fromVertices=function(e,t,i,o,c,d,u,h){var p,f,m,g,b,v,y,x,_,w,k=r.getDecomp();for(p=Boolean(k&&k.quickDecomp),o=o||{},m=[],c=void 0!==c&&c,d=void 0!==d?d:.01,u=void 0!==u?u:10,h=void 0!==h?h:.01,r.isArray(i[0])||(i=[i]),_=0;_<i.length;_+=1)if(b=i[_],!(g=n.isConvex(b))&&!p&&r.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),g||!p)b=g?n.clockwiseSort(b):n.hull(b),m.push({position:{x:e,y:t},vertices:b});else{var C=b.map(function(e){return[e.x,e.y]});k.makeCCW(C),!1!==d&&k.removeCollinearPoints(C,d),!1!==h&&k.removeDuplicatePoints&&k.removeDuplicatePoints(C,h);var S=k.quickDecomp(C);for(v=0;v<S.length;v++){var T=S[v].map(function(e){return{x:e[0],y:e[1]}});u>0&&n.area(T)<u||m.push({position:n.centre(T),vertices:T})}}for(v=0;v<m.length;v++)m[v]=s.create(r.extend(m[v],o));if(c)for(v=0;v<m.length;v++){var A=m[v];for(y=v+1;y<m.length;y++){var E=m[y];if(a.overlaps(A.bounds,E.bounds)){var $=A.vertices,P=E.vertices;for(x=0;x<A.vertices.length;x++)for(w=0;w<E.vertices.length;w++){var D=l.magnitudeSquared(l.sub($[(x+1)%$.length],P[w])),z=l.magnitudeSquared(l.sub($[x],P[(w+1)%P.length]));D<5&&z<5&&($[x].isInternal=!0,P[w].isInternal=!0)}}}}return m.length>1?(f=s.create(r.extend({parts:m.slice(0)},o)),s.setPosition(f,{x:e,y:t}),f):m[0]}},function(e,t,i){var o={};e.exports=o;var n=i(0),r=i(8);o.create=function(e){return n.extend({bodies:[],collisions:[],pairs:null},e)},o.setBodies=function(e,t){e.bodies=t.slice(0)},o.clear=function(e){e.bodies=[],e.collisions=[]},o.collisions=function(e){var t,i,n=e.pairs,s=e.bodies,a=s.length,l=o.canCollide,c=r.collides,d=e.collisions,u=0;for(s.sort(o._compareBoundsX),t=0;t<a;t++){var h=s[t],p=h.bounds,f=h.bounds.max.x,m=h.bounds.max.y,g=h.bounds.min.y,b=h.isStatic||h.isSleeping,v=h.parts.length,y=1===v;for(i=t+1;i<a;i++){var x=s[i];if((E=x.bounds).min.x>f)break;if(!(m<E.min.y||g>E.max.y)&&(!b||!x.isStatic&&!x.isSleeping)&&l(h.collisionFilter,x.collisionFilter)){var _=x.parts.length;if(y&&1===_)(T=c(h,x,n))&&(d[u++]=T);else for(var w=_>1?1:0,k=v>1?1:0;k<v;k++)for(var C=h.parts[k],S=(p=C.bounds,w);S<_;S++){var T,A=x.parts[S],E=A.bounds;p.min.x>E.max.x||p.max.x<E.min.x||p.max.y<E.min.y||p.min.y>E.max.y||(T=c(C,A,n))&&(d[u++]=T)}}}}return d.length!==u&&(d.length=u),d},o.canCollide=function(e,t){return e.group===t.group&&0!==e.group?e.group>0:0!==(e.mask&t.category)&&0!==(t.mask&e.category)},o._compareBoundsX=function(e,t){return e.bounds.min.x-t.bounds.min.x}},function(e,t,i){var o={};e.exports=o;var n=i(0);o.create=function(e){var t={};return e||n.log("Mouse.create: element was undefined, defaulting to document.body","warn"),t.element=e||document.body,t.absolute={x:0,y:0},t.position={x:0,y:0},t.mousedownPosition={x:0,y:0},t.mouseupPosition={x:0,y:0},t.offset={x:0,y:0},t.scale={x:1,y:1},t.wheelDelta=0,t.button=-1,t.pixelRatio=parseInt(t.element.getAttribute("data-pixel-ratio"),10)||1,t.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},t.mousemove=function(e){var i=o._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&(t.button=0,e.preventDefault()),t.absolute.x=i.x,t.absolute.y=i.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.sourceEvents.mousemove=e},t.mousedown=function(e){var i=o._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches?(t.button=0,e.preventDefault()):t.button=e.button,t.absolute.x=i.x,t.absolute.y=i.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mousedownPosition.x=t.position.x,t.mousedownPosition.y=t.position.y,t.sourceEvents.mousedown=e},t.mouseup=function(e){var i=o._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&e.preventDefault(),t.button=-1,t.absolute.x=i.x,t.absolute.y=i.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mouseupPosition.x=t.position.x,t.mouseupPosition.y=t.position.y,t.sourceEvents.mouseup=e},t.mousewheel=function(e){t.wheelDelta=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),e.preventDefault(),t.sourceEvents.mousewheel=e},o.setElement(t,t.element),t},o.setElement=function(e,t){e.element=t,t.addEventListener("mousemove",e.mousemove,{passive:!0}),t.addEventListener("mousedown",e.mousedown,{passive:!0}),t.addEventListener("mouseup",e.mouseup,{passive:!0}),t.addEventListener("wheel",e.mousewheel,{passive:!1}),t.addEventListener("touchmove",e.mousemove,{passive:!1}),t.addEventListener("touchstart",e.mousedown,{passive:!1}),t.addEventListener("touchend",e.mouseup,{passive:!1})},o.clearSourceEvents=function(e){e.sourceEvents.mousemove=null,e.sourceEvents.mousedown=null,e.sourceEvents.mouseup=null,e.sourceEvents.mousewheel=null,e.wheelDelta=0},o.setOffset=function(e,t){e.offset.x=t.x,e.offset.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},o.setScale=function(e,t){e.scale.x=t.x,e.scale.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},o._getRelativeMousePosition=function(e,t,i){var o,n,r=t.getBoundingClientRect(),s=document.documentElement||document.body.parentNode||document.body,a=void 0!==window.pageXOffset?window.pageXOffset:s.scrollLeft,l=void 0!==window.pageYOffset?window.pageYOffset:s.scrollTop,c=e.changedTouches;return c?(o=c[0].pageX-r.left-a,n=c[0].pageY-r.top-l):(o=e.pageX-r.left-a,n=e.pageY-r.top-l),{x:o/(t.clientWidth/(t.width||t.clientWidth)*i),y:n/(t.clientHeight/(t.height||t.clientHeight)*i)}}},function(e,t,i){var o={};e.exports=o;var n=i(0);o._registry={},o.register=function(e){if(o.isPlugin(e)||n.warn("Plugin.register:",o.toString(e),"does not implement all required fields."),e.name in o._registry){var t=o._registry[e.name],i=o.versionParse(e.version).number,r=o.versionParse(t.version).number;i>r?(n.warn("Plugin.register:",o.toString(t),"was upgraded to",o.toString(e)),o._registry[e.name]=e):i<r?n.warn("Plugin.register:",o.toString(t),"can not be downgraded to",o.toString(e)):e!==t&&n.warn("Plugin.register:",o.toString(e),"is already registered to different plugin object")}else o._registry[e.name]=e;return e},o.resolve=function(e){return o._registry[o.dependencyParse(e).name]},o.toString=function(e){return"string"==typeof e?e:(e.name||"anonymous")+"@"+(e.version||e.range||"0.0.0")},o.isPlugin=function(e){return e&&e.name&&e.version&&e.install},o.isUsed=function(e,t){return e.used.indexOf(t)>-1},o.isFor=function(e,t){var i=e.for&&o.dependencyParse(e.for);return!e.for||t.name===i.name&&o.versionSatisfies(t.version,i.range)},o.use=function(e,t){if(e.uses=(e.uses||[]).concat(t||[]),0!==e.uses.length){for(var i=o.dependencies(e),r=n.topologicalSort(i),s=[],a=0;a<r.length;a+=1)if(r[a]!==e.name){var l=o.resolve(r[a]);l?o.isUsed(e,l.name)||(o.isFor(l,e)||(n.warn("Plugin.use:",o.toString(l),"is for",l.for,"but installed on",o.toString(e)+"."),l._warned=!0),l.install?l.install(e):(n.warn("Plugin.use:",o.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(s.push("🔶 "+o.toString(l)),delete l._warned):s.push("✅ "+o.toString(l)),e.used.push(l.name)):s.push("❌ "+r[a])}s.length>0&&n.info(s.join("  "))}else n.warn("Plugin.use:",o.toString(e),"does not specify any dependencies to install.")},o.dependencies=function(e,t){var i=o.dependencyParse(e),r=i.name;if(!(r in(t=t||{}))){e=o.resolve(e)||e,t[r]=n.map(e.uses||[],function(t){o.isPlugin(t)&&o.register(t);var r=o.dependencyParse(t),s=o.resolve(t);return s&&!o.versionSatisfies(s.version,r.range)?(n.warn("Plugin.dependencies:",o.toString(s),"does not satisfy",o.toString(r),"used by",o.toString(i)+"."),s._warned=!0,e._warned=!0):s||(n.warn("Plugin.dependencies:",o.toString(t),"used by",o.toString(i),"could not be resolved."),e._warned=!0),r.name});for(var s=0;s<t[r].length;s+=1)o.dependencies(t[r][s],t);return t}},o.dependencyParse=function(e){return n.isString(e)?(/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(e)||n.warn("Plugin.dependencyParse:",e,"is not a valid dependency string."),{name:e.split("@")[0],range:e.split("@")[1]||"*"}):{name:e.name,range:e.range||e.version}},o.versionParse=function(e){var t=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;t.test(e)||n.warn("Plugin.versionParse:",e,"is not a valid version or range.");var i=t.exec(e),o=Number(i[4]),r=Number(i[5]),s=Number(i[6]);return{isRange:Boolean(i[1]||i[2]),version:i[3],range:e,operator:i[1]||i[2]||"",major:o,minor:r,patch:s,parts:[o,r,s],prerelease:i[7],number:1e8*o+1e4*r+s}},o.versionSatisfies=function(e,t){t=t||"*";var i=o.versionParse(t),n=o.versionParse(e);if(i.isRange){if("*"===i.operator||"*"===e)return!0;if(">"===i.operator)return n.number>i.number;if(">="===i.operator)return n.number>=i.number;if("~"===i.operator)return n.major===i.major&&n.minor===i.minor&&n.patch>=i.patch;if("^"===i.operator)return i.major>0?n.major===i.major&&n.number>=i.number:i.minor>0?n.minor===i.minor&&n.patch>=i.patch:n.patch===i.patch}return e===t||"*"===e}},function(e,t){var i={};e.exports=i,i.create=function(e){return{vertex:e,normalImpulse:0,tangentImpulse:0}}},function(e,t,i){var o={};e.exports=o;var n=i(7),r=i(18),s=i(13),a=i(19),l=i(5),c=i(6),d=i(10),u=i(0),h=i(4);o._deltaMax=1e3/60,o.create=function(e){e=e||{};var t=u.extend({positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},e);return t.world=e.world||c.create({label:"World"}),t.pairs=e.pairs||a.create(),t.detector=e.detector||s.create(),t.detector.pairs=t.pairs,t.grid={buckets:[]},t.world.gravity=t.gravity,t.broadphase=t.grid,t.metrics={},t},o.update=function(e,t){var i,h=u.now(),p=e.world,f=e.detector,m=e.pairs,g=e.timing,b=g.timestamp;t>o._deltaMax&&u.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",o._deltaMax.toFixed(3),"ms."),t=void 0!==t?t:u._baseDelta,t*=g.timeScale,g.timestamp+=t,g.lastDelta=t;var v={timestamp:g.timestamp,delta:t};l.trigger(e,"beforeUpdate",v);var y=c.allBodies(p),x=c.allConstraints(p);for(p.isModified&&(s.setBodies(f,y),c.setModified(p,!1,!1,!0)),e.enableSleeping&&n.update(y,t),o._bodiesApplyGravity(y,e.gravity),t>0&&o._bodiesUpdate(y,t),l.trigger(e,"beforeSolve",v),d.preSolveAll(y),i=0;i<e.constraintIterations;i++)d.solveAll(x,t);d.postSolveAll(y);var _=s.collisions(f);a.update(m,_,b),e.enableSleeping&&n.afterCollisions(m.list),m.collisionStart.length>0&&l.trigger(e,"collisionStart",{pairs:m.collisionStart,timestamp:g.timestamp,delta:t});var w=u.clamp(20/e.positionIterations,0,1);for(r.preSolvePosition(m.list),i=0;i<e.positionIterations;i++)r.solvePosition(m.list,t,w);for(r.postSolvePosition(y),d.preSolveAll(y),i=0;i<e.constraintIterations;i++)d.solveAll(x,t);for(d.postSolveAll(y),r.preSolveVelocity(m.list),i=0;i<e.velocityIterations;i++)r.solveVelocity(m.list,t);return o._bodiesUpdateVelocities(y),m.collisionActive.length>0&&l.trigger(e,"collisionActive",{pairs:m.collisionActive,timestamp:g.timestamp,delta:t}),m.collisionEnd.length>0&&l.trigger(e,"collisionEnd",{pairs:m.collisionEnd,timestamp:g.timestamp,delta:t}),o._bodiesClearForces(y),l.trigger(e,"afterUpdate",v),e.timing.lastElapsed=u.now()-h,e},o.merge=function(e,t){if(u.extend(e,t),t.world){e.world=t.world,o.clear(e);for(var i=c.allBodies(e.world),r=0;r<i.length;r++){var s=i[r];n.set(s,!1),s.id=u.nextId()}}},o.clear=function(e){a.clear(e.pairs),s.clear(e.detector)},o._bodiesClearForces=function(e){for(var t=e.length,i=0;i<t;i++){var o=e[i];o.force.x=0,o.force.y=0,o.torque=0}},o._bodiesApplyGravity=function(e,t){var i=void 0!==t.scale?t.scale:.001,o=e.length;if((0!==t.x||0!==t.y)&&0!==i)for(var n=0;n<o;n++){var r=e[n];r.isStatic||r.isSleeping||(r.force.y+=r.mass*t.y*i,r.force.x+=r.mass*t.x*i)}},o._bodiesUpdate=function(e,t){for(var i=e.length,o=0;o<i;o++){var n=e[o];n.isStatic||n.isSleeping||h.update(n,t)}},o._bodiesUpdateVelocities=function(e){for(var t=e.length,i=0;i<t;i++)h.updateVelocities(e[i])}},function(e,t,i){var o={};e.exports=o;var n=i(3),r=i(0),s=i(1);o._restingThresh=2,o._restingThreshTangent=Math.sqrt(6),o._positionDampen=.9,o._positionWarming=.8,o._frictionNormalMultiplier=5,o._frictionMaxStatic=Number.MAX_VALUE,o.preSolvePosition=function(e){var t,i,o,n=e.length;for(t=0;t<n;t++)(i=e[t]).isActive&&(o=i.contactCount,i.collision.parentA.totalContacts+=o,i.collision.parentB.totalContacts+=o)},o.solvePosition=function(e,t,i){var n,s,a,l,c,d,u,h,p=o._positionDampen*(i||1),f=r.clamp(t/r._baseDelta,0,1),m=e.length;for(n=0;n<m;n++)(s=e[n]).isActive&&!s.isSensor&&(l=(a=s.collision).parentA,c=a.parentB,d=a.normal,s.separation=a.depth+d.x*(c.positionImpulse.x-l.positionImpulse.x)+d.y*(c.positionImpulse.y-l.positionImpulse.y));for(n=0;n<m;n++)(s=e[n]).isActive&&!s.isSensor&&(l=(a=s.collision).parentA,c=a.parentB,d=a.normal,h=s.separation-s.slop*f,(l.isStatic||c.isStatic)&&(h*=2),l.isStatic||l.isSleeping||(u=p/l.totalContacts,l.positionImpulse.x+=d.x*h*u,l.positionImpulse.y+=d.y*h*u),c.isStatic||c.isSleeping||(u=p/c.totalContacts,c.positionImpulse.x-=d.x*h*u,c.positionImpulse.y-=d.y*h*u))},o.postSolvePosition=function(e){for(var t=o._positionWarming,i=e.length,r=n.translate,a=s.update,l=0;l<i;l++){var c=e[l],d=c.positionImpulse,u=d.x,h=d.y,p=c.velocity;if(c.totalContacts=0,0!==u||0!==h){for(var f=0;f<c.parts.length;f++){var m=c.parts[f];r(m.vertices,d),a(m.bounds,m.vertices,p),m.position.x+=u,m.position.y+=h}c.positionPrev.x+=u,c.positionPrev.y+=h,u*p.x+h*p.y<0?(d.x=0,d.y=0):(d.x*=t,d.y*=t)}}},o.preSolveVelocity=function(e){var t,i,o=e.length;for(t=0;t<o;t++){var n=e[t];if(n.isActive&&!n.isSensor){var r=n.contacts,s=n.contactCount,a=n.collision,l=a.parentA,c=a.parentB,d=a.normal,u=a.tangent;for(i=0;i<s;i++){var h=r[i],p=h.vertex,f=h.normalImpulse,m=h.tangentImpulse;if(0!==f||0!==m){var g=d.x*f+u.x*m,b=d.y*f+u.y*m;l.isStatic||l.isSleeping||(l.positionPrev.x+=g*l.inverseMass,l.positionPrev.y+=b*l.inverseMass,l.anglePrev+=l.inverseInertia*((p.x-l.position.x)*b-(p.y-l.position.y)*g)),c.isStatic||c.isSleeping||(c.positionPrev.x-=g*c.inverseMass,c.positionPrev.y-=b*c.inverseMass,c.anglePrev-=c.inverseInertia*((p.x-c.position.x)*b-(p.y-c.position.y)*g))}}}}},o.solveVelocity=function(e,t){var i,n,s,a,l=t/r._baseDelta,c=l*l*l,d=-o._restingThresh*l,u=o._restingThreshTangent,h=o._frictionNormalMultiplier*l,p=o._frictionMaxStatic,f=e.length;for(s=0;s<f;s++){var m=e[s];if(m.isActive&&!m.isSensor){var g=m.collision,b=g.parentA,v=g.parentB,y=g.normal.x,x=g.normal.y,_=g.tangent.x,w=g.tangent.y,k=m.inverseMass,C=m.friction*m.frictionStatic*h,S=m.contacts,T=m.contactCount,A=1/T,E=b.position.x-b.positionPrev.x,$=b.position.y-b.positionPrev.y,P=b.angle-b.anglePrev,D=v.position.x-v.positionPrev.x,z=v.position.y-v.positionPrev.y,M=v.angle-v.anglePrev;for(a=0;a<T;a++){var O=S[a],I=O.vertex,L=I.x-b.position.x,N=I.y-b.position.y,B=I.x-v.position.x,F=I.y-v.position.y,j=E-N*P-(D-F*M),R=$+L*P-(z+B*M),H=y*j+x*R,q=_*j+w*R,U=m.separation+H,V=Math.min(U,1),W=(V=U<0?0:V)*C;q<-W||q>W?(n=q>0?q:-q,(i=m.friction*(q>0?1:-1)*c)<-n?i=-n:i>n&&(i=n)):(i=q,n=p);var K=L*x-N*y,X=B*x-F*y,G=A/(k+b.inverseInertia*K*K+v.inverseInertia*X*X),Y=(1+m.restitution)*H*G;if(i*=G,H<d)O.normalImpulse=0;else{var Z=O.normalImpulse;O.normalImpulse+=Y,O.normalImpulse>0&&(O.normalImpulse=0),Y=O.normalImpulse-Z}if(q<-u||q>u)O.tangentImpulse=0;else{var Q=O.tangentImpulse;O.tangentImpulse+=i,O.tangentImpulse<-n&&(O.tangentImpulse=-n),O.tangentImpulse>n&&(O.tangentImpulse=n),i=O.tangentImpulse-Q}var J=y*Y+_*i,ee=x*Y+w*i;b.isStatic||b.isSleeping||(b.positionPrev.x+=J*b.inverseMass,b.positionPrev.y+=ee*b.inverseMass,b.anglePrev+=(L*ee-N*J)*b.inverseInertia),v.isStatic||v.isSleeping||(v.positionPrev.x-=J*v.inverseMass,v.positionPrev.y-=ee*v.inverseMass,v.anglePrev-=(B*ee-F*J)*v.inverseInertia)}}}}},function(e,t,i){var o={};e.exports=o;var n=i(9),r=i(0);o.create=function(e){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},e)},o.update=function(e,t,i){var o,r,s,a=n.update,l=n.create,c=n.setActive,d=e.table,u=e.list,h=u.length,p=h,f=e.collisionStart,m=e.collisionEnd,g=e.collisionActive,b=t.length,v=0,y=0,x=0;for(s=0;s<b;s++)(r=(o=t[s]).pair)?(r.isActive&&(g[x++]=r),a(r,o,i)):(d[(r=l(o,i)).id]=r,f[v++]=r,u[p++]=r);for(p=0,h=u.length,s=0;s<h;s++)(r=u[s]).timeUpdated>=i?u[p++]=r:(c(r,!1,i),r.collision.bodyA.sleepCounter>0&&r.collision.bodyB.sleepCounter>0?u[p++]=r:(m[y++]=r,delete d[r.id]));u.length!==p&&(u.length=p),f.length!==v&&(f.length=v),m.length!==y&&(m.length=y),g.length!==x&&(g.length=x)},o.clear=function(e){return e.table={},e.list.length=0,e.collisionStart.length=0,e.collisionActive.length=0,e.collisionEnd.length=0,e}},function(e,t,i){var o=e.exports=i(21);o.Axes=i(11),o.Bodies=i(12),o.Body=i(4),o.Bounds=i(1),o.Collision=i(8),o.Common=i(0),o.Composite=i(6),o.Composites=i(22),o.Constraint=i(10),o.Contact=i(16),o.Detector=i(13),o.Engine=i(17),o.Events=i(5),o.Grid=i(23),o.Mouse=i(14),o.MouseConstraint=i(24),o.Pair=i(9),o.Pairs=i(19),o.Plugin=i(15),o.Query=i(25),o.Render=i(26),o.Resolver=i(18),o.Runner=i(27),o.SAT=i(28),o.Sleeping=i(7),o.Svg=i(29),o.Vector=i(2),o.Vertices=i(3),o.World=i(30),o.Engine.run=o.Runner.run,o.Common.deprecated(o.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(e,t,i){var o={};e.exports=o;var n=i(15),r=i(0);o.name="matter-js",o.version="0.20.0",o.uses=[],o.used=[],o.use=function(){n.use(o,Array.prototype.slice.call(arguments))},o.before=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathBefore(o,e,t)},o.after=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathAfter(o,e,t)}},function(e,t,i){var o={};e.exports=o;var n=i(6),r=i(10),s=i(0),a=i(4),l=i(12),c=s.deprecated;o.stack=function(e,t,i,o,r,s,l){for(var c,d=n.create({label:"Stack"}),u=e,h=t,p=0,f=0;f<o;f++){for(var m=0,g=0;g<i;g++){var b=l(u,h,g,f,c,p);if(b){var v=b.bounds.max.y-b.bounds.min.y,y=b.bounds.max.x-b.bounds.min.x;v>m&&(m=v),a.translate(b,{x:.5*y,y:.5*v}),u=b.bounds.max.x+r,n.addBody(d,b),c=b,p+=1}else u+=r}h+=m+s,u=e}return d},o.chain=function(e,t,i,o,a,l){for(var c=e.bodies,d=1;d<c.length;d++){var u=c[d-1],h=c[d],p=u.bounds.max.y-u.bounds.min.y,f=u.bounds.max.x-u.bounds.min.x,m=h.bounds.max.y-h.bounds.min.y,g={bodyA:u,pointA:{x:f*t,y:p*i},bodyB:h,pointB:{x:(h.bounds.max.x-h.bounds.min.x)*o,y:m*a}},b=s.extend(g,l);n.addConstraint(e,r.create(b))}return e.label+=" Chain",e},o.mesh=function(e,t,i,o,a){var l,c,d,u,h,p=e.bodies;for(l=0;l<i;l++){for(c=1;c<t;c++)d=p[c-1+l*t],u=p[c+l*t],n.addConstraint(e,r.create(s.extend({bodyA:d,bodyB:u},a)));if(l>0)for(c=0;c<t;c++)d=p[c+(l-1)*t],u=p[c+l*t],n.addConstraint(e,r.create(s.extend({bodyA:d,bodyB:u},a))),o&&c>0&&(h=p[c-1+(l-1)*t],n.addConstraint(e,r.create(s.extend({bodyA:h,bodyB:u},a)))),o&&c<t-1&&(h=p[c+1+(l-1)*t],n.addConstraint(e,r.create(s.extend({bodyA:h,bodyB:u},a))))}return e.label+=" Mesh",e},o.pyramid=function(e,t,i,n,r,s,l){return o.stack(e,t,i,n,r,s,function(t,o,s,c,d,u){var h=Math.min(n,Math.ceil(i/2)),p=d?d.bounds.max.x-d.bounds.min.x:0;if(!(c>h||s<(c=h-c)||s>i-1-c))return 1===u&&a.translate(d,{x:(s+(i%2==1?1:-1))*p,y:0}),l(e+(d?s*p:0)+s*r,o,s,c,d,u)})},o.newtonsCradle=function(e,t,i,o,s){for(var a=n.create({label:"Newtons Cradle"}),c=0;c<i;c++){var d=l.circle(e+c*(1.9*o),t+s,o,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),u=r.create({pointA:{x:e+c*(1.9*o),y:t},bodyB:d});n.addBody(a,d),n.addConstraint(a,u)}return a},c(o,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),o.car=function(e,t,i,o,s){var c=a.nextGroup(!0),d=.5*-i+20,u=.5*i-20,h=n.create({label:"Car"}),p=l.rectangle(e,t,i,o,{collisionFilter:{group:c},chamfer:{radius:.5*o},density:2e-4}),f=l.circle(e+d,t+0,s,{collisionFilter:{group:c},friction:.8}),m=l.circle(e+u,t+0,s,{collisionFilter:{group:c},friction:.8}),g=r.create({bodyB:p,pointB:{x:d,y:0},bodyA:f,stiffness:1,length:0}),b=r.create({bodyB:p,pointB:{x:u,y:0},bodyA:m,stiffness:1,length:0});return n.addBody(h,p),n.addBody(h,f),n.addBody(h,m),n.addConstraint(h,g),n.addConstraint(h,b),h},c(o,"car","Composites.car ➤ moved to car example"),o.softBody=function(e,t,i,n,r,a,c,d,u,h){u=s.extend({inertia:1/0},u),h=s.extend({stiffness:.2,render:{type:"line",anchors:!1}},h);var p=o.stack(e,t,i,n,r,a,function(e,t){return l.circle(e,t,d,u)});return o.mesh(p,i,n,c,h),p.label="Soft Body",p},c(o,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")},function(e,t,i){var o={};e.exports=o;var n=i(9),r=i(0),s=r.deprecated;o.create=function(e){return r.extend({buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48},e)},o.update=function(e,t,i,n){var r,s,a,l,c,d=i.world,u=e.buckets,h=!1;for(r=0;r<t.length;r++){var p=t[r];if((!p.isSleeping||n)&&(!d.bounds||!(p.bounds.max.x<d.bounds.min.x||p.bounds.min.x>d.bounds.max.x||p.bounds.max.y<d.bounds.min.y||p.bounds.min.y>d.bounds.max.y))){var f=o._getRegion(e,p);if(!p.region||f.id!==p.region.id||n){p.region&&!n||(p.region=f);var m=o._regionUnion(f,p.region);for(s=m.startCol;s<=m.endCol;s++)for(a=m.startRow;a<=m.endRow;a++){l=u[c=o._getBucketId(s,a)];var g=s>=f.startCol&&s<=f.endCol&&a>=f.startRow&&a<=f.endRow,b=s>=p.region.startCol&&s<=p.region.endCol&&a>=p.region.startRow&&a<=p.region.endRow;!g&&b&&b&&l&&o._bucketRemoveBody(e,l,p),(p.region===f||g&&!b||n)&&(l||(l=o._createBucket(u,c)),o._bucketAddBody(e,l,p))}p.region=f,h=!0}}}h&&(e.pairsList=o._createActivePairsList(e))},s(o,"update","Grid.update ➤ replaced by Matter.Detector"),o.clear=function(e){e.buckets={},e.pairs={},e.pairsList=[]},s(o,"clear","Grid.clear ➤ replaced by Matter.Detector"),o._regionUnion=function(e,t){var i=Math.min(e.startCol,t.startCol),n=Math.max(e.endCol,t.endCol),r=Math.min(e.startRow,t.startRow),s=Math.max(e.endRow,t.endRow);return o._createRegion(i,n,r,s)},o._getRegion=function(e,t){var i=t.bounds,n=Math.floor(i.min.x/e.bucketWidth),r=Math.floor(i.max.x/e.bucketWidth),s=Math.floor(i.min.y/e.bucketHeight),a=Math.floor(i.max.y/e.bucketHeight);return o._createRegion(n,r,s,a)},o._createRegion=function(e,t,i,o){return{id:e+","+t+","+i+","+o,startCol:e,endCol:t,startRow:i,endRow:o}},o._getBucketId=function(e,t){return"C"+e+"R"+t},o._createBucket=function(e,t){return e[t]=[]},o._bucketAddBody=function(e,t,i){var o,r=e.pairs,s=n.id,a=t.length;for(o=0;o<a;o++){var l=t[o];if(!(i.id===l.id||i.isStatic&&l.isStatic)){var c=s(i,l),d=r[c];d?d[2]+=1:r[c]=[i,l,1]}}t.push(i)},o._bucketRemoveBody=function(e,t,i){var o,s=e.pairs,a=n.id;t.splice(r.indexOf(t,i),1);var l=t.length;for(o=0;o<l;o++){var c=s[a(i,t[o])];c&&(c[2]-=1)}},o._createActivePairsList=function(e){var t,i,o=e.pairs,n=r.keys(o),s=n.length,a=[];for(i=0;i<s;i++)(t=o[n[i]])[2]>0?a.push(t):delete o[n[i]];return a}},function(e,t,i){var o={};e.exports=o;var n=i(3),r=i(7),s=i(14),a=i(5),l=i(13),c=i(10),d=i(6),u=i(0),h=i(1);o.create=function(e,t){var i=(e?e.mouse:null)||(t?t.mouse:null);i||(e&&e.render&&e.render.canvas?i=s.create(e.render.canvas):t&&t.element?i=s.create(t.element):(i=s.create(),u.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var n={type:"mouseConstraint",mouse:i,element:null,body:null,constraint:c.create({label:"Mouse Constraint",pointA:i.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),collisionFilter:{category:1,mask:4294967295,group:0}},r=u.extend(n,t);return a.on(e,"beforeUpdate",function(){var t=d.allBodies(e.world);o.update(r,t),o._triggerEvents(r)}),r},o.update=function(e,t){var i=e.mouse,o=e.constraint,s=e.body;if(0===i.button){if(o.bodyB)r.set(o.bodyB,!1),o.pointA=i.position;else for(var c=0;c<t.length;c++)if(s=t[c],h.contains(s.bounds,i.position)&&l.canCollide(s.collisionFilter,e.collisionFilter))for(var d=s.parts.length>1?1:0;d<s.parts.length;d++){var u=s.parts[d];if(n.contains(u.vertices,i.position)){o.pointA=i.position,o.bodyB=e.body=s,o.pointB={x:i.position.x-s.position.x,y:i.position.y-s.position.y},o.angleB=s.angle,r.set(s,!1),a.trigger(e,"startdrag",{mouse:i,body:s});break}}}else o.bodyB=e.body=null,o.pointB=null,s&&a.trigger(e,"enddrag",{mouse:i,body:s})},o._triggerEvents=function(e){var t=e.mouse,i=t.sourceEvents;i.mousemove&&a.trigger(e,"mousemove",{mouse:t}),i.mousedown&&a.trigger(e,"mousedown",{mouse:t}),i.mouseup&&a.trigger(e,"mouseup",{mouse:t}),s.clearSourceEvents(t)}},function(e,t,i){var o={};e.exports=o;var n=i(2),r=i(8),s=i(1),a=i(12),l=i(3);o.collides=function(e,t){for(var i=[],o=t.length,n=e.bounds,a=r.collides,l=s.overlaps,c=0;c<o;c++){var d=t[c],u=d.parts.length,h=1===u?0:1;if(l(d.bounds,n))for(var p=h;p<u;p++){var f=d.parts[p];if(l(f.bounds,n)){var m=a(f,e);if(m){i.push(m);break}}}}return i},o.ray=function(e,t,i,r){r=r||1e-100;for(var s=n.angle(t,i),l=n.magnitude(n.sub(t,i)),c=.5*(i.x+t.x),d=.5*(i.y+t.y),u=a.rectangle(c,d,l,r,{angle:s}),h=o.collides(u,e),p=0;p<h.length;p+=1){var f=h[p];f.body=f.bodyB=f.bodyA}return h},o.region=function(e,t,i){for(var o=[],n=0;n<e.length;n++){var r=e[n],a=s.overlaps(r.bounds,t);(a&&!i||!a&&i)&&o.push(r)}return o},o.point=function(e,t){for(var i=[],o=0;o<e.length;o++){var n=e[o];if(s.contains(n.bounds,t))for(var r=1===n.parts.length?0:1;r<n.parts.length;r++){var a=n.parts[r];if(s.contains(a.bounds,t)&&l.contains(a.vertices,t)){i.push(n);break}}}return i}},function(e,t,i){var o={};e.exports=o;var n=i(4),r=i(0),s=i(6),a=i(1),l=i(5),c=i(2),d=i(14);!function(){var e,t;"undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(function(){e(r.now())},1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),o._goodFps=30,o._goodDelta=1e3/60,o.create=function(e){var t={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!e.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},i=r.extend(t,e);return i.canvas&&(i.canvas.width=i.options.width||i.canvas.width,i.canvas.height=i.options.height||i.canvas.height),i.mouse=e.mouse,i.engine=e.engine,i.canvas=i.canvas||h(i.options.width,i.options.height),i.context=i.canvas.getContext("2d"),i.textures={},i.bounds=i.bounds||{min:{x:0,y:0},max:{x:i.canvas.width,y:i.canvas.height}},i.controller=o,i.options.showBroadphase=!1,1!==i.options.pixelRatio&&o.setPixelRatio(i,i.options.pixelRatio),r.isElement(i.element)&&i.element.appendChild(i.canvas),i},o.run=function(t){!function n(r){t.frameRequestId=e(n),i(t,r),o.world(t,r),t.context.setTransform(t.options.pixelRatio,0,0,t.options.pixelRatio,0,0),(t.options.showStats||t.options.showDebug)&&o.stats(t,t.context,r),(t.options.showPerformance||t.options.showDebug)&&o.performance(t,t.context,r),t.context.setTransform(1,0,0,1,0,0)}()},o.stop=function(e){t(e.frameRequestId)},o.setPixelRatio=function(e,t){var i=e.options,o=e.canvas;"auto"===t&&(t=p(o)),i.pixelRatio=t,o.setAttribute("data-pixel-ratio",t),o.width=i.width*t,o.height=i.height*t,o.style.width=i.width+"px",o.style.height=i.height+"px"},o.setSize=function(e,t,i){e.options.width=t,e.options.height=i,e.bounds.max.x=e.bounds.min.x+t,e.bounds.max.y=e.bounds.min.y+i,1!==e.options.pixelRatio?o.setPixelRatio(e,e.options.pixelRatio):(e.canvas.width=t,e.canvas.height=i)},o.lookAt=function(e,t,i,o){o=void 0===o||o,t=r.isArray(t)?t:[t],i=i||{x:0,y:0};for(var n={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},s=0;s<t.length;s+=1){var a=t[s],l=a.bounds?a.bounds.min:a.min||a.position||a,c=a.bounds?a.bounds.max:a.max||a.position||a;l&&c&&(l.x<n.min.x&&(n.min.x=l.x),c.x>n.max.x&&(n.max.x=c.x),l.y<n.min.y&&(n.min.y=l.y),c.y>n.max.y&&(n.max.y=c.y))}var u=n.max.x-n.min.x+2*i.x,h=n.max.y-n.min.y+2*i.y,p=e.canvas.height,f=e.canvas.width/p,m=u/h,g=1,b=1;m>f?b=m/f:g=f/m,e.options.hasBounds=!0,e.bounds.min.x=n.min.x,e.bounds.max.x=n.min.x+u*g,e.bounds.min.y=n.min.y,e.bounds.max.y=n.min.y+h*b,o&&(e.bounds.min.x+=.5*u-u*g*.5,e.bounds.max.x+=.5*u-u*g*.5,e.bounds.min.y+=.5*h-h*b*.5,e.bounds.max.y+=.5*h-h*b*.5),e.bounds.min.x-=i.x,e.bounds.max.x-=i.x,e.bounds.min.y-=i.y,e.bounds.max.y-=i.y,e.mouse&&(d.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height}),d.setOffset(e.mouse,e.bounds.min))},o.startViewTransform=function(e){var t=e.bounds.max.x-e.bounds.min.x,i=e.bounds.max.y-e.bounds.min.y,o=t/e.options.width,n=i/e.options.height;e.context.setTransform(e.options.pixelRatio/o,0,0,e.options.pixelRatio/n,0,0),e.context.translate(-e.bounds.min.x,-e.bounds.min.y)},o.endViewTransform=function(e){e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0)},o.world=function(e,t){var i,n=r.now(),u=e.engine,h=u.world,p=e.canvas,f=e.context,g=e.options,b=e.timing,v=s.allBodies(h),y=s.allConstraints(h),x=g.wireframes?g.wireframeBackground:g.background,_=[],w=[],k={timestamp:u.timing.timestamp};if(l.trigger(e,"beforeRender",k),e.currentBackground!==x&&m(e,x),f.globalCompositeOperation="source-in",f.fillStyle="transparent",f.fillRect(0,0,p.width,p.height),f.globalCompositeOperation="source-over",g.hasBounds){for(i=0;i<v.length;i++){var C=v[i];a.overlaps(C.bounds,e.bounds)&&_.push(C)}for(i=0;i<y.length;i++){var S=y[i],T=S.bodyA,A=S.bodyB,E=S.pointA,$=S.pointB;T&&(E=c.add(T.position,S.pointA)),A&&($=c.add(A.position,S.pointB)),E&&$&&(a.contains(e.bounds,E)||a.contains(e.bounds,$))&&w.push(S)}o.startViewTransform(e),e.mouse&&(d.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.options.width,y:(e.bounds.max.y-e.bounds.min.y)/e.options.height}),d.setOffset(e.mouse,e.bounds.min))}else w=y,_=v,1!==e.options.pixelRatio&&e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0);!g.wireframes||u.enableSleeping&&g.showSleeping?o.bodies(e,_,f):(g.showConvexHulls&&o.bodyConvexHulls(e,_,f),o.bodyWireframes(e,_,f)),g.showBounds&&o.bodyBounds(e,_,f),(g.showAxes||g.showAngleIndicator)&&o.bodyAxes(e,_,f),g.showPositions&&o.bodyPositions(e,_,f),g.showVelocity&&o.bodyVelocity(e,_,f),g.showIds&&o.bodyIds(e,_,f),g.showSeparations&&o.separations(e,u.pairs.list,f),g.showCollisions&&o.collisions(e,u.pairs.list,f),g.showVertexNumbers&&o.vertexNumbers(e,_,f),g.showMousePosition&&o.mousePosition(e,e.mouse,f),o.constraints(w,f),g.hasBounds&&o.endViewTransform(e),l.trigger(e,"afterRender",k),b.lastElapsed=r.now()-n},o.stats=function(e,t,i){for(var o=e.engine,n=o.world,r=s.allBodies(n),a=0,l=0,c=0;c<r.length;c+=1)a+=r[c].parts.length;var d={Part:a,Body:r.length,Cons:s.allConstraints(n).length,Comp:s.allComposites(n).length,Pair:o.pairs.list.length};for(var u in t.fillStyle="#0e0f19",t.fillRect(l,0,302.5,44),t.font="12px Arial",t.textBaseline="top",t.textAlign="right",d){var h=d[u];t.fillStyle="#aaa",t.fillText(u,l+55,8),t.fillStyle="#eee",t.fillText(h,l+55,26),l+=55}},o.performance=function(e,t){var i=e.engine,n=e.timing,s=n.deltaHistory,a=n.elapsedHistory,l=n.timestampElapsedHistory,c=n.engineDeltaHistory,d=n.engineUpdatesHistory,h=n.engineElapsedHistory,p=i.timing.lastUpdatesPerFrame,f=i.timing.lastDelta,m=u(s),g=u(a),b=u(c),v=u(d),y=u(h),x=u(l)/m||0,_=Math.round(m/f),w=1e3/m||0,k=60,C=69;t.fillStyle="#0e0f19",t.fillRect(0,50,442,34),o.status(t,10,C,k,4,s.length,Math.round(w)+" fps",w/o._goodFps,function(e){return s[e]/m-1}),o.status(t,82,C,k,4,c.length,f.toFixed(2)+" dt",o._goodDelta/f,function(e){return c[e]/b-1}),o.status(t,154,C,k,4,d.length,p+" upf",Math.pow(r.clamp(v/_||1,0,1),4),function(e){return d[e]/v-1}),o.status(t,226,C,k,4,h.length,y.toFixed(2)+" ut",1-p*y/o._goodFps,function(e){return h[e]/y-1}),o.status(t,298,C,k,4,a.length,g.toFixed(2)+" rt",1-g/o._goodFps,function(e){return a[e]/g-1}),o.status(t,370,C,k,4,l.length,x.toFixed(2)+" x",x*x*x,function(e){return(l[e]/s[e]/x||0)-1})},o.status=function(e,t,i,o,n,s,a,l,c){e.strokeStyle="#888",e.fillStyle="#444",e.lineWidth=1,e.fillRect(t,i+7,o,1),e.beginPath(),e.moveTo(t,i+7-n*r.clamp(.4*c(0),-2,2));for(var d=0;d<o;d+=1)e.lineTo(t+d,i+7-(d<s?n*r.clamp(.4*c(d),-2,2):0));e.stroke(),e.fillStyle="hsl("+r.clamp(25+95*l,0,120)+",100%,60%)",e.fillRect(t,i-7,4,4),e.font="12px Arial",e.textBaseline="middle",e.textAlign="right",e.fillStyle="#eee",e.fillText(a,t+o,i-5)},o.constraints=function(e,t){for(var i=t,o=0;o<e.length;o++){var n=e[o];if(n.render.visible&&n.pointA&&n.pointB){var s,a,l=n.bodyA,d=n.bodyB;if(s=l?c.add(l.position,n.pointA):n.pointA,"pin"===n.render.type)i.beginPath(),i.arc(s.x,s.y,3,0,2*Math.PI),i.closePath();else{if(a=d?c.add(d.position,n.pointB):n.pointB,i.beginPath(),i.moveTo(s.x,s.y),"spring"===n.render.type)for(var u,h=c.sub(a,s),p=c.perp(c.normalise(h)),f=Math.ceil(r.clamp(n.length/5,12,20)),m=1;m<f;m+=1)u=m%2==0?1:-1,i.lineTo(s.x+h.x*(m/f)+p.x*u*4,s.y+h.y*(m/f)+p.y*u*4);i.lineTo(a.x,a.y)}n.render.lineWidth&&(i.lineWidth=n.render.lineWidth,i.strokeStyle=n.render.strokeStyle,i.stroke()),n.render.anchors&&(i.fillStyle=n.render.strokeStyle,i.beginPath(),i.arc(s.x,s.y,3,0,2*Math.PI),i.arc(a.x,a.y,3,0,2*Math.PI),i.closePath(),i.fill())}}},o.bodies=function(e,t,i){var o,n,r,s,a=i,l=(e.engine,e.options),c=l.showInternalEdges||!l.wireframes;for(r=0;r<t.length;r++)if((o=t[r]).render.visible)for(s=o.parts.length>1?1:0;s<o.parts.length;s++)if((n=o.parts[s]).render.visible){if(l.showSleeping&&o.isSleeping?a.globalAlpha=.5*n.render.opacity:1!==n.render.opacity&&(a.globalAlpha=n.render.opacity),n.render.sprite&&n.render.sprite.texture&&!l.wireframes){var d=n.render.sprite,u=f(e,d.texture);a.translate(n.position.x,n.position.y),a.rotate(n.angle),a.drawImage(u,u.width*-d.xOffset*d.xScale,u.height*-d.yOffset*d.yScale,u.width*d.xScale,u.height*d.yScale),a.rotate(-n.angle),a.translate(-n.position.x,-n.position.y)}else{if(n.circleRadius)a.beginPath(),a.arc(n.position.x,n.position.y,n.circleRadius,0,2*Math.PI);else{a.beginPath(),a.moveTo(n.vertices[0].x,n.vertices[0].y);for(var h=1;h<n.vertices.length;h++)!n.vertices[h-1].isInternal||c?a.lineTo(n.vertices[h].x,n.vertices[h].y):a.moveTo(n.vertices[h].x,n.vertices[h].y),n.vertices[h].isInternal&&!c&&a.moveTo(n.vertices[(h+1)%n.vertices.length].x,n.vertices[(h+1)%n.vertices.length].y);a.lineTo(n.vertices[0].x,n.vertices[0].y),a.closePath()}l.wireframes?(a.lineWidth=1,a.strokeStyle=e.options.wireframeStrokeStyle,a.stroke()):(a.fillStyle=n.render.fillStyle,n.render.lineWidth&&(a.lineWidth=n.render.lineWidth,a.strokeStyle=n.render.strokeStyle,a.stroke()),a.fill())}a.globalAlpha=1}},o.bodyWireframes=function(e,t,i){var o,n,r,s,a,l=i,c=e.options.showInternalEdges;for(l.beginPath(),r=0;r<t.length;r++)if((o=t[r]).render.visible)for(a=o.parts.length>1?1:0;a<o.parts.length;a++){for(n=o.parts[a],l.moveTo(n.vertices[0].x,n.vertices[0].y),s=1;s<n.vertices.length;s++)!n.vertices[s-1].isInternal||c?l.lineTo(n.vertices[s].x,n.vertices[s].y):l.moveTo(n.vertices[s].x,n.vertices[s].y),n.vertices[s].isInternal&&!c&&l.moveTo(n.vertices[(s+1)%n.vertices.length].x,n.vertices[(s+1)%n.vertices.length].y);l.lineTo(n.vertices[0].x,n.vertices[0].y)}l.lineWidth=1,l.strokeStyle=e.options.wireframeStrokeStyle,l.stroke()},o.bodyConvexHulls=function(e,t,i){var o,n,r,s=i;for(s.beginPath(),n=0;n<t.length;n++)if((o=t[n]).render.visible&&1!==o.parts.length){for(s.moveTo(o.vertices[0].x,o.vertices[0].y),r=1;r<o.vertices.length;r++)s.lineTo(o.vertices[r].x,o.vertices[r].y);s.lineTo(o.vertices[0].x,o.vertices[0].y)}s.lineWidth=1,s.strokeStyle="rgba(255,255,255,0.2)",s.stroke()},o.vertexNumbers=function(e,t,i){var o,n,r,s=i;for(o=0;o<t.length;o++){var a=t[o].parts;for(r=a.length>1?1:0;r<a.length;r++){var l=a[r];for(n=0;n<l.vertices.length;n++)s.fillStyle="rgba(255,255,255,0.2)",s.fillText(o+"_"+n,l.position.x+.8*(l.vertices[n].x-l.position.x),l.position.y+.8*(l.vertices[n].y-l.position.y))}}},o.mousePosition=function(e,t,i){var o=i;o.fillStyle="rgba(255,255,255,0.8)",o.fillText(t.position.x+"  "+t.position.y,t.position.x+5,t.position.y-5)},o.bodyBounds=function(e,t,i){var o=i,n=(e.engine,e.options);o.beginPath();for(var r=0;r<t.length;r++)if(t[r].render.visible)for(var s=t[r].parts,a=s.length>1?1:0;a<s.length;a++){var l=s[a];o.rect(l.bounds.min.x,l.bounds.min.y,l.bounds.max.x-l.bounds.min.x,l.bounds.max.y-l.bounds.min.y)}n.wireframes?o.strokeStyle="rgba(255,255,255,0.08)":o.strokeStyle="rgba(0,0,0,0.1)",o.lineWidth=1,o.stroke()},o.bodyAxes=function(e,t,i){var o,n,r,s,a=i,l=(e.engine,e.options);for(a.beginPath(),n=0;n<t.length;n++){var c=t[n],d=c.parts;if(c.render.visible)if(l.showAxes)for(r=d.length>1?1:0;r<d.length;r++)for(o=d[r],s=0;s<o.axes.length;s++){var u=o.axes[s];a.moveTo(o.position.x,o.position.y),a.lineTo(o.position.x+20*u.x,o.position.y+20*u.y)}else for(r=d.length>1?1:0;r<d.length;r++)for(o=d[r],s=0;s<o.axes.length;s++)a.moveTo(o.position.x,o.position.y),a.lineTo((o.vertices[0].x+o.vertices[o.vertices.length-1].x)/2,(o.vertices[0].y+o.vertices[o.vertices.length-1].y)/2)}l.wireframes?(a.strokeStyle="indianred",a.lineWidth=1):(a.strokeStyle="rgba(255, 255, 255, 0.4)",a.globalCompositeOperation="overlay",a.lineWidth=2),a.stroke(),a.globalCompositeOperation="source-over"},o.bodyPositions=function(e,t,i){var o,n,r,s,a=i,l=(e.engine,e.options);for(a.beginPath(),r=0;r<t.length;r++)if((o=t[r]).render.visible)for(s=0;s<o.parts.length;s++)n=o.parts[s],a.arc(n.position.x,n.position.y,3,0,2*Math.PI,!1),a.closePath();for(l.wireframes?a.fillStyle="indianred":a.fillStyle="rgba(0,0,0,0.5)",a.fill(),a.beginPath(),r=0;r<t.length;r++)(o=t[r]).render.visible&&(a.arc(o.positionPrev.x,o.positionPrev.y,2,0,2*Math.PI,!1),a.closePath());a.fillStyle="rgba(255,165,0,0.8)",a.fill()},o.bodyVelocity=function(e,t,i){var o=i;o.beginPath();for(var r=0;r<t.length;r++){var s=t[r];if(s.render.visible){var a=n.getVelocity(s);o.moveTo(s.position.x,s.position.y),o.lineTo(s.position.x+a.x,s.position.y+a.y)}}o.lineWidth=3,o.strokeStyle="cornflowerblue",o.stroke()},o.bodyIds=function(e,t,i){var o,n,r=i;for(o=0;o<t.length;o++)if(t[o].render.visible){var s=t[o].parts;for(n=s.length>1?1:0;n<s.length;n++){var a=s[n];r.font="12px Arial",r.fillStyle="rgba(255,255,255,0.5)",r.fillText(a.id,a.position.x+10,a.position.y-10)}}},o.collisions=function(e,t,i){var o,n,r,s,a=i,l=e.options;for(a.beginPath(),r=0;r<t.length;r++)if((o=t[r]).isActive)for(n=o.collision,s=0;s<o.contactCount;s++){var c=o.contacts[s].vertex;a.rect(c.x-1.5,c.y-1.5,3.5,3.5)}for(l.wireframes?a.fillStyle="rgba(255,255,255,0.7)":a.fillStyle="orange",a.fill(),a.beginPath(),r=0;r<t.length;r++)if((o=t[r]).isActive&&(n=o.collision,o.contactCount>0)){var d=o.contacts[0].vertex.x,u=o.contacts[0].vertex.y;2===o.contactCount&&(d=(o.contacts[0].vertex.x+o.contacts[1].vertex.x)/2,u=(o.contacts[0].vertex.y+o.contacts[1].vertex.y)/2),n.bodyB===n.supports[0].body||!0===n.bodyA.isStatic?a.moveTo(d-8*n.normal.x,u-8*n.normal.y):a.moveTo(d+8*n.normal.x,u+8*n.normal.y),a.lineTo(d,u)}l.wireframes?a.strokeStyle="rgba(255,165,0,0.7)":a.strokeStyle="orange",a.lineWidth=1,a.stroke()},o.separations=function(e,t,i){var o,n,r,s,a,l=i,c=e.options;for(l.beginPath(),a=0;a<t.length;a++)if((o=t[a]).isActive){r=(n=o.collision).bodyA;var d=1;(s=n.bodyB).isStatic||r.isStatic||(d=.5),s.isStatic&&(d=0),l.moveTo(s.position.x,s.position.y),l.lineTo(s.position.x-n.penetration.x*d,s.position.y-n.penetration.y*d),d=1,s.isStatic||r.isStatic||(d=.5),r.isStatic&&(d=0),l.moveTo(r.position.x,r.position.y),l.lineTo(r.position.x+n.penetration.x*d,r.position.y+n.penetration.y*d)}c.wireframes?l.strokeStyle="rgba(255,165,0,0.5)":l.strokeStyle="orange",l.stroke()},o.inspector=function(e,t){e.engine;var i,o=e.selected,n=e.render,r=n.options;if(r.hasBounds){var s=n.bounds.max.x-n.bounds.min.x,a=n.bounds.max.y-n.bounds.min.y,l=s/n.options.width,c=a/n.options.height;t.scale(1/l,1/c),t.translate(-n.bounds.min.x,-n.bounds.min.y)}for(var d=0;d<o.length;d++){var u=o[d].data;switch(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.9)",t.setLineDash([1,2]),u.type){case"body":i=u.bounds,t.beginPath(),t.rect(Math.floor(i.min.x-3),Math.floor(i.min.y-3),Math.floor(i.max.x-i.min.x+6),Math.floor(i.max.y-i.min.y+6)),t.closePath(),t.stroke();break;case"constraint":var h=u.pointA;u.bodyA&&(h=u.pointB),t.beginPath(),t.arc(h.x,h.y,10,0,2*Math.PI),t.closePath(),t.stroke()}t.setLineDash([]),t.translate(-.5,-.5)}null!==e.selectStart&&(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.6)",t.fillStyle="rgba(255,165,0,0.1)",i=e.selectBounds,t.beginPath(),t.rect(Math.floor(i.min.x),Math.floor(i.min.y),Math.floor(i.max.x-i.min.x),Math.floor(i.max.y-i.min.y)),t.closePath(),t.stroke(),t.fill(),t.translate(-.5,-.5)),r.hasBounds&&t.setTransform(1,0,0,1,0,0)};var i=function(e,t){var i=e.engine,n=e.timing,r=n.historySize,s=i.timing.timestamp;n.delta=t-n.lastTime||o._goodDelta,n.lastTime=t,n.timestampElapsed=s-n.lastTimestamp||0,n.lastTimestamp=s,n.deltaHistory.unshift(n.delta),n.deltaHistory.length=Math.min(n.deltaHistory.length,r),n.engineDeltaHistory.unshift(i.timing.lastDelta),n.engineDeltaHistory.length=Math.min(n.engineDeltaHistory.length,r),n.timestampElapsedHistory.unshift(n.timestampElapsed),n.timestampElapsedHistory.length=Math.min(n.timestampElapsedHistory.length,r),n.engineUpdatesHistory.unshift(i.timing.lastUpdatesPerFrame),n.engineUpdatesHistory.length=Math.min(n.engineUpdatesHistory.length,r),n.engineElapsedHistory.unshift(i.timing.lastElapsed),n.engineElapsedHistory.length=Math.min(n.engineElapsedHistory.length,r),n.elapsedHistory.unshift(n.lastElapsed),n.elapsedHistory.length=Math.min(n.elapsedHistory.length,r)},u=function(e){for(var t=0,i=0;i<e.length;i+=1)t+=e[i];return t/e.length||0},h=function(e,t){var i=document.createElement("canvas");return i.width=e,i.height=t,i.oncontextmenu=function(){return!1},i.onselectstart=function(){return!1},i},p=function(e){var t=e.getContext("2d");return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)},f=function(e,t){var i=e.textures[t];return i||((i=e.textures[t]=new Image).src=t,i)},m=function(e,t){var i=t;/(jpg|gif|png)$/.test(t)&&(i="url("+t+")"),e.canvas.style.background=i,e.canvas.style.backgroundSize="contain",e.currentBackground=t}}()},function(e,t,i){var o={};e.exports=o;var n=i(5),r=i(17),s=i(0);!function(){o._maxFrameDelta=1e3/15,o._frameDeltaFallback=1e3/60,o._timeBufferMargin=1.5,o._elapsedNextEstimate=1,o._smoothingLowerBound=.1,o._smoothingUpperBound=.9,o.create=function(e){var t=s.extend({delta:1e3/60,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:1e3/30,lastUpdatesDeferred:0,enabled:!0},e);return t.fps=0,t},o.run=function(e,t){return e.timeBuffer=o._frameDeltaFallback,function i(n){e.frameRequestId=o._onNextFrame(e,i),n&&e.enabled&&o.tick(e,t,n)}(),e},o.tick=function(t,i,a){var l=s.now(),c=t.delta,d=0,u=a-t.timeLastTick;if((!u||!t.timeLastTick||u>Math.max(o._maxFrameDelta,t.maxFrameTime))&&(u=t.frameDelta||o._frameDeltaFallback),t.frameDeltaSmoothing){t.frameDeltaHistory.push(u),t.frameDeltaHistory=t.frameDeltaHistory.slice(-t.frameDeltaHistorySize);var h=t.frameDeltaHistory.slice(0).sort(),p=t.frameDeltaHistory.slice(h.length*o._smoothingLowerBound,h.length*o._smoothingUpperBound);u=e(p)||u}t.frameDeltaSnapping&&(u=1e3/Math.round(1e3/u)),t.frameDelta=u,t.timeLastTick=a,t.timeBuffer+=t.frameDelta,t.timeBuffer=s.clamp(t.timeBuffer,0,t.frameDelta+c*o._timeBufferMargin),t.lastUpdatesDeferred=0;var f=t.maxUpdates||Math.ceil(t.maxFrameTime/c),m={timestamp:i.timing.timestamp};n.trigger(t,"beforeTick",m),n.trigger(t,"tick",m);for(var g=s.now();c>0&&t.timeBuffer>=c*o._timeBufferMargin;){n.trigger(t,"beforeUpdate",m),r.update(i,c),n.trigger(t,"afterUpdate",m),t.timeBuffer-=c,d+=1;var b=s.now()-l,v=s.now()-g,y=b+o._elapsedNextEstimate*v/d;if(d>=f||y>t.maxFrameTime){t.lastUpdatesDeferred=Math.round(Math.max(0,t.timeBuffer/c-o._timeBufferMargin));break}}i.timing.lastUpdatesPerFrame=d,n.trigger(t,"afterTick",m),t.frameDeltaHistory.length>=100&&(t.lastUpdatesDeferred&&Math.round(t.frameDelta/c)>f?s.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):t.lastUpdatesDeferred&&s.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),void 0!==t.isFixed&&s.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(t.deltaMin||t.deltaMax)&&s.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),0!==t.fps&&s.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},o.stop=function(e){o._cancelNextFrame(e)},o._onNextFrame=function(e,t){if("undefined"==typeof window||!window.requestAnimationFrame)throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return e.frameRequestId=window.requestAnimationFrame(t),e.frameRequestId},o._cancelNextFrame=function(e){if("undefined"==typeof window||!window.cancelAnimationFrame)throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.");window.cancelAnimationFrame(e.frameRequestId)};var e=function(e){for(var t=0,i=e.length,o=0;o<i;o+=1)t+=e[o];return t/i||0}}()},function(e,t,i){var o={};e.exports=o;var n=i(8),r=i(0).deprecated;o.collides=function(e,t){return n.collides(e,t)},r(o,"collides","SAT.collides ➤ replaced by Collision.collides")},function(e,t,i){var o={};e.exports=o,i(1);var n=i(0);o.pathToVertices=function(e,t){"undefined"==typeof window||"SVGPathSeg"in window||n.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var i,r,s,a,l,c,d,u,h,p,f,m=[],g=0,b=0,v=0;t=t||15;var y=function(e,t,i){var o=i%2==1&&i>1;if(!h||e!=h.x||t!=h.y){h&&o?(p=h.x,f=h.y):(p=0,f=0);var n={x:p+e,y:f+t};!o&&h||(h=n),m.push(n),b=p+e,v=f+t}},x=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();if("Z"!==t){switch(t){case"M":case"L":case"T":case"C":case"S":case"Q":b=e.x,v=e.y;break;case"H":b=e.x;break;case"V":v=e.y}y(b,v,e.pathSegType)}};for(o._svgPathToAbsolute(e),s=e.getTotalLength(),c=[],i=0;i<e.pathSegList.numberOfItems;i+=1)c.push(e.pathSegList.getItem(i));for(d=c.concat();g<s;){if((l=c[e.getPathSegAtLength(g)])!=u){for(;d.length&&d[0]!=l;)x(d.shift());u=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":a=e.getPointAtLength(g),y(a.x,a.y,0)}g+=t}for(i=0,r=d.length;i<r;++i)x(d[i]);return m},o._svgPathToAbsolute=function(e){for(var t,i,o,n,r,s,a=e.pathSegList,l=0,c=0,d=a.numberOfItems,u=0;u<d;++u){var h=a.getItem(u),p=h.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(p))"x"in h&&(l=h.x),"y"in h&&(c=h.y);else switch("x1"in h&&(o=l+h.x1),"x2"in h&&(r=l+h.x2),"y1"in h&&(n=c+h.y1),"y2"in h&&(s=c+h.y2),"x"in h&&(l+=h.x),"y"in h&&(c+=h.y),p){case"m":a.replaceItem(e.createSVGPathSegMovetoAbs(l,c),u);break;case"l":a.replaceItem(e.createSVGPathSegLinetoAbs(l,c),u);break;case"h":a.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l),u);break;case"v":a.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c),u);break;case"c":a.replaceItem(e.createSVGPathSegCurvetoCubicAbs(l,c,o,n,r,s),u);break;case"s":a.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(l,c,r,s),u);break;case"q":a.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(l,c,o,n),u);break;case"t":a.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(l,c),u);break;case"a":a.replaceItem(e.createSVGPathSegArcAbs(l,c,h.r1,h.r2,h.angle,h.largeArcFlag,h.sweepFlag),u);break;case"z":case"Z":l=t,c=i}"M"!=p&&"m"!=p||(t=l,i=c)}}},function(e,t,i){var o={};e.exports=o;var n=i(6);i(0),o.create=n.create,o.add=n.add,o.remove=n.remove,o.clear=n.clear,o.addComposite=n.addComposite,o.addBody=n.addBody,o.addConstraint=n.addConstraint}])},e.exports=o()},146(e,t,i){var o;!function(n,r){var s,a,l=typeof r,c=n.document,d=n.location,u=n.jQuery,h=n.$,p={},f=[],m="1.9.1",g=f.concat,b=f.push,v=f.slice,y=f.indexOf,x=p.toString,_=p.hasOwnProperty,w=m.trim,k=function(e,t){return new k.fn.init(e,t,a)},C=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,S=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,A=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,$=/^[\],:{}\s]*$/,P=/(?:^|:|,)(?:\s*\[)+/g,D=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,M=/^-ms-/,O=/-([\da-z])/gi,I=function(e,t){return t.toUpperCase()},L=function(e){(c.addEventListener||"load"===e.type||"complete"===c.readyState)&&(N(),k.ready())},N=function(){c.addEventListener?(c.removeEventListener("DOMContentLoaded",L,!1),n.removeEventListener("load",L,!1)):(c.detachEvent("onreadystatechange",L),n.detachEvent("onload",L))};function B(e){var t=e.length,i=k.type(e);return!k.isWindow(e)&&(!(1!==e.nodeType||!t)||"array"===i||"function"!==i&&(0===t||"number"==typeof t&&t>0&&t-1 in e))}k.fn=k.prototype={jquery:m,constructor:k,init:function(e,t,i){var o,n;if(!e)return this;if("string"==typeof e){if(!(o="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:A.exec(e))||!o[1]&&t)return!t||t.jquery?(t||i).find(e):this.constructor(t).find(e);if(o[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(o[1],t&&t.nodeType?t.ownerDocument||t:c,!0)),E.test(o[1])&&k.isPlainObject(t))for(o in t)k.isFunction(this[o])?this[o](t[o]):this.attr(o,t[o]);return this}if((n=c.getElementById(o[2]))&&n.parentNode){if(n.id!==o[2])return i.find(e);this.length=1,this[0]=n}return this.context=c,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):k.isFunction(e)?i.ready(e):(e.selector!==r&&(this.selector=e.selector,this.context=e.context),k.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return v.call(this)},get:function(e){return null==e?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return k.each(this,e,t)},ready:function(e){return k.ready.promise().done(e),this},slice:function(){return this.pushStack(v.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,i=+e+(e<0?t:0);return this.pushStack(i>=0&&i<t?[this[i]]:[])},map:function(e){return this.pushStack(k.map(this,function(t,i){return e.call(t,i,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:b,sort:[].sort,splice:[].splice},k.fn.init.prototype=k.fn,k.extend=k.fn.extend=function(){var e,t,i,o,n,s,a=arguments[0]||{},l=1,c=arguments.length,d=!1;for("boolean"==typeof a&&(d=a,a=arguments[1]||{},l=2),"object"==typeof a||k.isFunction(a)||(a={}),c===l&&(a=this,--l);l<c;l++)if(null!=(n=arguments[l]))for(o in n)e=a[o],a!==(i=n[o])&&(d&&i&&(k.isPlainObject(i)||(t=k.isArray(i)))?(t?(t=!1,s=e&&k.isArray(e)?e:[]):s=e&&k.isPlainObject(e)?e:{},a[o]=k.extend(d,s,i)):i!==r&&(a[o]=i));return a},k.extend({noConflict:function(e){return n.$===k&&(n.$=h),e&&n.jQuery===k&&(n.jQuery=u),k},isReady:!1,readyWait:1,holdReady:function(e){e?k.readyWait++:k.ready(!0)},ready:function(e){if(!(!0===e?--k.readyWait:k.isReady)){if(!c.body)return setTimeout(k.ready);k.isReady=!0,!0!==e&&--k.readyWait>0||(s.resolveWith(c,[k]),k.fn.trigger&&k(c).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===k.type(e)},isArray:Array.isArray||function(e){return"array"===k.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?p[x.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==k.type(e)||e.nodeType||k.isWindow(e))return!1;try{if(e.constructor&&!_.call(e,"constructor")&&!_.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}var t;for(t in e);return t===r||_.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,i){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(i=t,t=!1),t=t||c;var o=E.exec(e),n=!i&&[];return o?[t.createElement(o[1])]:(o=k.buildFragment([e],t,n),n&&k(n).remove(),k.merge([],o.childNodes))},parseJSON:function(e){return n.JSON&&n.JSON.parse?n.JSON.parse(e):null===e?e:"string"==typeof e&&(e=k.trim(e))&&$.test(e.replace(D,"@").replace(z,"]").replace(P,""))?new Function("return "+e)():void k.error("Invalid JSON: "+e)},parseXML:function(e){var t;if(!e||"string"!=typeof e)return null;try{n.DOMParser?t=(new DOMParser).parseFromString(e,"text/xml"):((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e))}catch(e){t=r}return t&&t.documentElement&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){e&&k.trim(e)&&(n.execScript||function(e){n.eval.call(n,e)})(e)},camelCase:function(e){return e.replace(M,"ms-").replace(O,I)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,i){var o=0,n=e.length,r=B(e);if(i){if(r)for(;o<n&&!1!==t.apply(e[o],i);o++);else for(o in e)if(!1===t.apply(e[o],i))break}else if(r)for(;o<n&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},trim:w&&!w.call("\ufeff ")?function(e){return null==e?"":w.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(B(Object(e))?k.merge(i,"string"==typeof e?[e]:e):b.call(i,e)),i},inArray:function(e,t,i){var o;if(t){if(y)return y.call(t,e,i);for(o=t.length,i=i?i<0?Math.max(0,o+i):i:0;i<o;i++)if(i in t&&t[i]===e)return i}return-1},merge:function(e,t){var i=t.length,o=e.length,n=0;if("number"==typeof i)for(;n<i;n++)e[o++]=t[n];else for(;t[n]!==r;)e[o++]=t[n++];return e.length=o,e},grep:function(e,t,i){var o=[],n=0,r=e.length;for(i=!!i;n<r;n++)i!==!!t(e[n],n)&&o.push(e[n]);return o},map:function(e,t,i){var o,n=0,r=e.length,s=[];if(B(e))for(;n<r;n++)null!=(o=t(e[n],n,i))&&(s[s.length]=o);else for(n in e)null!=(o=t(e[n],n,i))&&(s[s.length]=o);return g.apply([],s)},guid:1,proxy:function(e,t){var i,o,n;return"string"==typeof t&&(n=e[t],t=e,e=n),k.isFunction(e)?(i=v.call(arguments,2),o=function(){return e.apply(t||this,i.concat(v.call(arguments)))},o.guid=e.guid=e.guid||k.guid++,o):r},access:function(e,t,i,o,n,s,a){var l=0,c=e.length,d=null==i;if("object"===k.type(i))for(l in n=!0,i)k.access(e,t,l,i[l],!0,s,a);else if(o!==r&&(n=!0,k.isFunction(o)||(a=!0),d&&(a?(t.call(e,o),t=null):(d=t,t=function(e,t,i){return d.call(k(e),i)})),t))for(;l<c;l++)t(e[l],i,a?o:o.call(e[l],l,t(e[l],i)));return n?e:d?t.call(e):c?t(e[0],i):s},now:function(){return(new Date).getTime()}}),k.ready.promise=function(e){if(!s)if(s=k.Deferred(),"complete"===c.readyState)setTimeout(k.ready);else if(c.addEventListener)c.addEventListener("DOMContentLoaded",L,!1),n.addEventListener("load",L,!1);else{c.attachEvent("onreadystatechange",L),n.attachEvent("onload",L);var t=!1;try{t=null==n.frameElement&&c.documentElement}catch(e){}t&&t.doScroll&&function e(){if(!k.isReady){try{t.doScroll("left")}catch(t){return setTimeout(e,50)}N(),k.ready()}}()}return s.promise(e)},k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){p["[object "+t+"]"]=t.toLowerCase()}),a=k(c);var F={};k.Callbacks=function(e){e="string"==typeof e?F[e]||function(e){var t=F[e]={};return k.each(e.match(S)||[],function(e,i){t[i]=!0}),t}(e):k.extend({},e);var t,i,o,n,s,a,l=[],c=!e.once&&[],d=function(r){for(i=e.memory&&r,o=!0,s=a||0,a=0,n=l.length,t=!0;l&&s<n;s++)if(!1===l[s].apply(r[0],r[1])&&e.stopOnFalse){i=!1;break}t=!1,l&&(c?c.length&&d(c.shift()):i?l=[]:u.disable())},u={add:function(){if(l){var o=l.length;!function t(i){k.each(i,function(i,o){var n=k.type(o);"function"===n?e.unique&&u.has(o)||l.push(o):o&&o.length&&"string"!==n&&t(o)})}(arguments),t?n=l.length:i&&(a=o,d(i))}return this},remove:function(){return l&&k.each(arguments,function(e,i){for(var o;(o=k.inArray(i,l,o))>-1;)l.splice(o,1),t&&(o<=n&&n--,o<=s&&s--)}),this},has:function(e){return e?k.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],this},disable:function(){return l=c=i=r,this},disabled:function(){return!l},lock:function(){return c=r,i||u.disable(),this},locked:function(){return!c},fireWith:function(e,i){return i=[e,(i=i||[]).slice?i.slice():i],!l||o&&!c||(t?c.push(i):d(i)),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!o}};return u},k.extend({Deferred:function(e){var t=[["resolve","done",k.Callbacks("once memory"),"resolved"],["reject","fail",k.Callbacks("once memory"),"rejected"],["notify","progress",k.Callbacks("memory")]],i="pending",o={state:function(){return i},always:function(){return n.done(arguments).fail(arguments),this},then:function(){var e=arguments;return k.Deferred(function(i){k.each(t,function(t,r){var s=r[0],a=k.isFunction(e[t])&&e[t];n[r[1]](function(){var e=a&&a.apply(this,arguments);e&&k.isFunction(e.promise)?e.promise().done(i.resolve).fail(i.reject).progress(i.notify):i[s+"With"](this===o?i.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?k.extend(e,o):o}},n={};return o.pipe=o.then,k.each(t,function(e,r){var s=r[2],a=r[3];o[r[1]]=s.add,a&&s.add(function(){i=a},t[1^e][2].disable,t[2][2].lock),n[r[0]]=function(){return n[r[0]+"With"](this===n?o:this,arguments),this},n[r[0]+"With"]=s.fireWith}),o.promise(n),e&&e.call(n,n),n},when:function(e){var t,i,o,n=0,r=v.call(arguments),s=r.length,a=1!==s||e&&k.isFunction(e.promise)?s:0,l=1===a?e:k.Deferred(),c=function(e,i,o){return function(n){i[e]=this,o[e]=arguments.length>1?v.call(arguments):n,o===t?l.notifyWith(i,o):--a||l.resolveWith(i,o)}};if(s>1)for(t=new Array(s),i=new Array(s),o=new Array(s);n<s;n++)r[n]&&k.isFunction(r[n].promise)?r[n].promise().done(c(n,o,r)).fail(l.reject).progress(c(n,i,t)):--a;return a||l.resolveWith(o,r),l.promise()}}),k.support=function(){var e,t,i,o,r,s,a,d,u,h,p=c.createElement("div");if(p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",t=p.getElementsByTagName("*"),i=p.getElementsByTagName("a")[0],!t||!i||!t.length)return{};a=(r=c.createElement("select")).appendChild(c.createElement("option")),o=p.getElementsByTagName("input")[0],i.style.cssText="top:1px;float:left;opacity:.5",e={getSetAttribute:"t"!==p.className,leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:"/a"===i.getAttribute("href"),opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:!!o.value,optSelected:a.selected,enctype:!!c.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==c.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===c.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},o.checked=!0,e.noCloneChecked=o.cloneNode(!0).checked,r.disabled=!0,e.optDisabled=!a.disabled;try{delete p.test}catch(t){e.deleteExpando=!1}for(h in(o=c.createElement("input")).setAttribute("value",""),e.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),e.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),(s=c.createDocumentFragment()).appendChild(o),e.appendChecked=o.checked,e.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent("onclick",function(){e.noCloneEvent=!1}),p.cloneNode(!0).click()),{submit:!0,change:!0,focusin:!0})p.setAttribute(d="on"+h,"t"),e[h+"Bubbles"]=d in n||!1===p.attributes[d].expando;return p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle="content-box"===p.style.backgroundClip,k(function(){var t,i,o,r="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",s=c.getElementsByTagName("body")[0];s&&((t=c.createElement("div")).style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(t).appendChild(p),p.innerHTML="<table><tr><td></td><td>t</td></tr></table>",(o=p.getElementsByTagName("td"))[0].style.cssText="padding:0;margin:0;border:0;display:none",u=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",e.reliableHiddenOffsets=u&&0===o[0].offsetHeight,p.innerHTML="",p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",e.boxSizing=4===p.offsetWidth,e.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,n.getComputedStyle&&(e.pixelPosition="1%"!==(n.getComputedStyle(p,null)||{}).top,e.boxSizingReliable="4px"===(n.getComputedStyle(p,null)||{width:"4px"}).width,(i=p.appendChild(c.createElement("div"))).style.cssText=p.style.cssText=r,i.style.marginRight=i.style.width="0",p.style.width="1px",e.reliableMarginRight=!parseFloat((n.getComputedStyle(i,null)||{}).marginRight)),typeof p.style.zoom!==l&&(p.innerHTML="",p.style.cssText=r+"width:1px;padding:1px;display:inline;zoom:1",e.inlineBlockNeedsLayout=3===p.offsetWidth,p.style.display="block",p.innerHTML="<div></div>",p.firstChild.style.width="5px",e.shrinkWrapBlocks=3!==p.offsetWidth,e.inlineBlockNeedsLayout&&(s.style.zoom=1)),s.removeChild(t),t=p=o=i=null)}),t=r=s=a=i=o=null,e}();var j=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,R=/([A-Z])/g;function H(e,t,i,o){if(k.acceptData(e)){var n,s,a=k.expando,l="string"==typeof t,c=e.nodeType,d=c?k.cache:e,u=c?e[a]:e[a]&&a;if(u&&d[u]&&(o||d[u].data)||!l||i!==r)return u||(c?e[a]=u=f.pop()||k.guid++:u=a),d[u]||(d[u]={},c||(d[u].toJSON=k.noop)),"object"!=typeof t&&"function"!=typeof t||(o?d[u]=k.extend(d[u],t):d[u].data=k.extend(d[u].data,t)),n=d[u],o||(n.data||(n.data={}),n=n.data),i!==r&&(n[k.camelCase(t)]=i),l?null==(s=n[t])&&(s=n[k.camelCase(t)]):s=n,s}}function q(e,t,i){if(k.acceptData(e)){var o,n,r,s=e.nodeType,a=s?k.cache:e,l=s?e[k.expando]:k.expando;if(a[l]){if(t&&(r=i?a[l]:a[l].data)){for((o=0,n=(t=k.isArray(t)?t.concat(k.map(t,k.camelCase)):t in r||(t=k.camelCase(t))in r?[t]:t.split(" ")).length);o<n;o++)delete r[t[o]];if(!(i?V:k.isEmptyObject)(r))return}(i||(delete a[l].data,V(a[l])))&&(s?k.cleanData([e],!0):k.support.deleteExpando||a!=a.window?delete a[l]:a[l]=null)}}}function U(e,t,i){if(i===r&&1===e.nodeType){var o="data-"+t.replace(R,"-$1").toLowerCase();if("string"==typeof(i=e.getAttribute(o))){try{i="true"===i||"false"!==i&&("null"===i?null:+i+""===i?+i:j.test(i)?k.parseJSON(i):i)}catch(e){}k.data(e,t,i)}else i=r}return i}function V(e){var t;for(t in e)if(("data"!==t||!k.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}k.extend({cache:{},expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return!!(e=e.nodeType?k.cache[e[k.expando]]:e[k.expando])&&!V(e)},data:function(e,t,i){return H(e,t,i)},removeData:function(e,t){return q(e,t)},_data:function(e,t,i){return H(e,t,i,!0)},_removeData:function(e,t){return q(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&k.noData[e.nodeName.toLowerCase()];return!t||!0!==t&&e.getAttribute("classid")===t}}),k.fn.extend({data:function(e,t){var i,o,n=this[0],s=0,a=null;if(e===r){if(this.length&&(a=k.data(n),1===n.nodeType&&!k._data(n,"parsedAttrs"))){for(i=n.attributes;s<i.length;s++)(o=i[s].name).indexOf("data-")||(o=k.camelCase(o.slice(5)),U(n,o,a[o]));k._data(n,"parsedAttrs",!0)}return a}return"object"==typeof e?this.each(function(){k.data(this,e)}):k.access(this,function(t){if(t===r)return n?U(n,e,k.data(n,e)):null;this.each(function(){k.data(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){k.removeData(this,e)})}}),k.extend({queue:function(e,t,i){var o;if(e)return t=(t||"fx")+"queue",o=k._data(e,t),i&&(!o||k.isArray(i)?o=k._data(e,t,k.makeArray(i)):o.push(i)),o||[]},dequeue:function(e,t){t=t||"fx";var i=k.queue(e,t),o=i.length,n=i.shift(),r=k._queueHooks(e,t);"inprogress"===n&&(n=i.shift(),o--),r.cur=n,n&&("fx"===t&&i.unshift("inprogress"),delete r.stop,n.call(e,function(){k.dequeue(e,t)},r)),!o&&r&&r.empty.fire()},_queueHooks:function(e,t){var i=t+"queueHooks";return k._data(e,i)||k._data(e,i,{empty:k.Callbacks("once memory").add(function(){k._removeData(e,t+"queue"),k._removeData(e,i)})})}}),k.fn.extend({queue:function(e,t){var i=2;return"string"!=typeof e&&(t=e,e="fx",i--),arguments.length<i?k.queue(this[0],e):t===r?this:this.each(function(){var i=k.queue(this,e,t);k._queueHooks(this,e),"fx"===e&&"inprogress"!==i[0]&&k.dequeue(this,e)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},delay:function(e,t){return e=k.fx&&k.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,i){var o=setTimeout(t,e);i.stop=function(){clearTimeout(o)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var i,o=1,n=k.Deferred(),s=this,a=this.length,l=function(){--o||n.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=r),e=e||"fx";a--;)(i=k._data(s[a],e+"queueHooks"))&&i.empty&&(o++,i.empty.add(l));return l(),n.promise(t)}});var W,K,X=/[\t\r\n]/g,G=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,Z=/^(?:a|area)$/i,Q=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,J=/^(?:checked|selected)$/i,ee=k.support.getSetAttribute,te=k.support.input;k.fn.extend({attr:function(e,t){return k.access(this,k.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})},prop:function(e,t){return k.access(this,k.prop,e,t,arguments.length>1)},removeProp:function(e){return e=k.propFix[e]||e,this.each(function(){try{this[e]=r,delete this[e]}catch(e){}})},addClass:function(e){var t,i,o,n,r,s=0,a=this.length,l="string"==typeof e&&e;if(k.isFunction(e))return this.each(function(t){k(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(S)||[];s<a;s++)if(o=1===(i=this[s]).nodeType&&(i.className?(" "+i.className+" ").replace(X," "):" ")){for(r=0;n=t[r++];)o.indexOf(" "+n+" ")<0&&(o+=n+" ");i.className=k.trim(o)}return this},removeClass:function(e){var t,i,o,n,r,s=0,a=this.length,l=0===arguments.length||"string"==typeof e&&e;if(k.isFunction(e))return this.each(function(t){k(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(S)||[];s<a;s++)if(o=1===(i=this[s]).nodeType&&(i.className?(" "+i.className+" ").replace(X," "):"")){for(r=0;n=t[r++];)for(;o.indexOf(" "+n+" ")>=0;)o=o.replace(" "+n+" "," ");i.className=e?k.trim(o):""}return this},toggleClass:function(e,t){var i=typeof e,o="boolean"==typeof t;return k.isFunction(e)?this.each(function(i){k(this).toggleClass(e.call(this,i,this.className,t),t)}):this.each(function(){if("string"===i)for(var n,r=0,s=k(this),a=t,c=e.match(S)||[];n=c[r++];)a=o?a:!s.hasClass(n),s[a?"addClass":"removeClass"](n);else i!==l&&"boolean"!==i||(this.className&&k._data(this,"__className__",this.className),this.className=this.className||!1===e?"":k._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",i=0,o=this.length;i<o;i++)if(1===this[i].nodeType&&(" "+this[i].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,i,o,n=this[0];return arguments.length?(o=k.isFunction(e),this.each(function(t){var n,s=k(this);1===this.nodeType&&(null==(n=o?e.call(this,t,s.val()):e)?n="":"number"==typeof n?n+="":k.isArray(n)&&(n=k.map(n,function(e){return null==e?"":e+""})),(i=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&i.set(this,n,"value")!==r||(this.value=n))})):n?(i=k.valHooks[n.type]||k.valHooks[n.nodeName.toLowerCase()])&&"get"in i&&(t=i.get(n,"value"))!==r?t:"string"==typeof(t=n.value)?t.replace(G,""):null==t?"":t:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,i,o=e.options,n=e.selectedIndex,r="select-one"===e.type||n<0,s=r?null:[],a=r?n+1:o.length,l=n<0?a:r?n:0;l<a;l++)if(((i=o[l]).selected||l===n)&&(k.support.optDisabled?!i.disabled:null===i.getAttribute("disabled"))&&(!i.parentNode.disabled||!k.nodeName(i.parentNode,"optgroup"))){if(t=k(i).val(),r)return t;s.push(t)}return s},set:function(e,t){var i=k.makeArray(t);return k(e).find("option").each(function(){this.selected=k.inArray(k(this).val(),i)>=0}),i.length||(e.selectedIndex=-1),i}}},attr:function(e,t,i){var o,n,s,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===l?k.prop(e,t,i):((n=1!==a||!k.isXMLDoc(e))&&(t=t.toLowerCase(),o=k.attrHooks[t]||(Q.test(t)?K:W)),i===r?o&&n&&"get"in o&&null!==(s=o.get(e,t))?s:(typeof e.getAttribute!==l&&(s=e.getAttribute(t)),null==s?r:s):null!==i?o&&n&&"set"in o&&(s=o.set(e,i,t))!==r?s:(e.setAttribute(t,i+""),i):void k.removeAttr(e,t))},removeAttr:function(e,t){var i,o,n=0,r=t&&t.match(S);if(r&&1===e.nodeType)for(;i=r[n++];)o=k.propFix[i]||i,Q.test(i)?!ee&&J.test(i)?e[k.camelCase("default-"+i)]=e[o]=!1:e[o]=!1:k.attr(e,i,""),e.removeAttribute(ee?i:o)},attrHooks:{type:{set:function(e,t){if(!k.support.radioValue&&"radio"===t&&k.nodeName(e,"input")){var i=e.value;return e.setAttribute("type",t),i&&(e.value=i),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,t,i){var o,n,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return(1!==s||!k.isXMLDoc(e))&&(t=k.propFix[t]||t,n=k.propHooks[t]),i!==r?n&&"set"in n&&(o=n.set(e,i,t))!==r?o:e[t]=i:n&&"get"in n&&null!==(o=n.get(e,t))?o:e[t]},propHooks:{tabIndex:{get:function(e){var t=e.getAttributeNode("tabindex");return t&&t.specified?parseInt(t.value,10):Y.test(e.nodeName)||Z.test(e.nodeName)&&e.href?0:r}}}}),K={get:function(e,t){var i=k.prop(e,t),o="boolean"==typeof i&&e.getAttribute(t),n="boolean"==typeof i?te&&ee?null!=o:J.test(t)?e[k.camelCase("default-"+t)]:!!o:e.getAttributeNode(t);return n&&!1!==n.value?t.toLowerCase():r},set:function(e,t,i){return!1===t?k.removeAttr(e,i):te&&ee||!J.test(i)?e.setAttribute(!ee&&k.propFix[i]||i,i):e[k.camelCase("default-"+i)]=e[i]=!0,i}},te&&ee||(k.attrHooks.value={get:function(e,t){var i=e.getAttributeNode(t);return k.nodeName(e,"input")?e.defaultValue:i&&i.specified?i.value:r},set:function(e,t,i){if(!k.nodeName(e,"input"))return W&&W.set(e,t,i);e.defaultValue=t}}),ee||(W=k.valHooks.button={get:function(e,t){var i=e.getAttributeNode(t);return i&&("id"===t||"name"===t||"coords"===t?""!==i.value:i.specified)?i.value:r},set:function(e,t,i){var o=e.getAttributeNode(i);return o||e.setAttributeNode(o=e.ownerDocument.createAttribute(i)),o.value=t+="","value"===i||t===e.getAttribute(i)?t:r}},k.attrHooks.contenteditable={get:W.get,set:function(e,t,i){W.set(e,""!==t&&t,i)}},k.each(["width","height"],function(e,t){k.attrHooks[t]=k.extend(k.attrHooks[t],{set:function(e,i){if(""===i)return e.setAttribute(t,"auto"),i}})})),k.support.hrefNormalized||(k.each(["href","src","width","height"],function(e,t){k.attrHooks[t]=k.extend(k.attrHooks[t],{get:function(e){var i=e.getAttribute(t,2);return null==i?r:i}})}),k.each(["href","src"],function(e,t){k.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),k.support.style||(k.attrHooks.style={get:function(e){return e.style.cssText||r},set:function(e,t){return e.style.cssText=t+""}}),k.support.optSelected||(k.propHooks.selected=k.extend(k.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),k.support.enctype||(k.propFix.enctype="encoding"),k.support.checkOn||k.each(["radio","checkbox"],function(){k.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]=k.extend(k.valHooks[this],{set:function(e,t){if(k.isArray(t))return e.checked=k.inArray(k(e).val(),t)>=0}})});var ie=/^(?:input|select|textarea)$/i,oe=/^key/,ne=/^(?:mouse|contextmenu)|click/,re=/^(?:focusinfocus|focusoutblur)$/,se=/^([^.]*)(?:\.(.+)|)$/;function ae(){return!0}function le(){return!1}k.event={global:{},add:function(e,t,i,o,n){var s,a,c,d,u,h,p,f,m,g,b,v=k._data(e);if(v){for(i.handler&&(i=(d=i).handler,n=d.selector),i.guid||(i.guid=k.guid++),(a=v.events)||(a=v.events={}),(h=v.handle)||(h=v.handle=function(e){return typeof k===l||e&&k.event.triggered===e.type?r:k.event.dispatch.apply(h.elem,arguments)},h.elem=e),c=(t=(t||"").match(S)||[""]).length;c--;)m=b=(s=se.exec(t[c])||[])[1],g=(s[2]||"").split(".").sort(),u=k.event.special[m]||{},m=(n?u.delegateType:u.bindType)||m,u=k.event.special[m]||{},p=k.extend({type:m,origType:b,data:o,handler:i,guid:i.guid,selector:n,needsContext:n&&k.expr.match.needsContext.test(n),namespace:g.join(".")},d),(f=a[m])||((f=a[m]=[]).delegateCount=0,u.setup&&!1!==u.setup.call(e,o,g,h)||(e.addEventListener?e.addEventListener(m,h,!1):e.attachEvent&&e.attachEvent("on"+m,h))),u.add&&(u.add.call(e,p),p.handler.guid||(p.handler.guid=i.guid)),n?f.splice(f.delegateCount++,0,p):f.push(p),k.event.global[m]=!0;e=null}},remove:function(e,t,i,o,n){var r,s,a,l,c,d,u,h,p,f,m,g=k.hasData(e)&&k._data(e);if(g&&(d=g.events)){for(c=(t=(t||"").match(S)||[""]).length;c--;)if(p=m=(a=se.exec(t[c])||[])[1],f=(a[2]||"").split(".").sort(),p){for(u=k.event.special[p]||{},h=d[p=(o?u.delegateType:u.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=r=h.length;r--;)s=h[r],!n&&m!==s.origType||i&&i.guid!==s.guid||a&&!a.test(s.namespace)||o&&o!==s.selector&&("**"!==o||!s.selector)||(h.splice(r,1),s.selector&&h.delegateCount--,u.remove&&u.remove.call(e,s));l&&!h.length&&(u.teardown&&!1!==u.teardown.call(e,f,g.handle)||k.removeEvent(e,p,g.handle),delete d[p])}else for(p in d)k.event.remove(e,p+t[c],i,o,!0);k.isEmptyObject(d)&&(delete g.handle,k._removeData(e,"events"))}},trigger:function(e,t,i,o){var s,a,l,d,u,h,p,f=[i||c],m=_.call(e,"type")?e.type:e,g=_.call(e,"namespace")?e.namespace.split("."):[];if(l=h=i=i||c,3!==i.nodeType&&8!==i.nodeType&&!re.test(m+k.event.triggered)&&(m.indexOf(".")>=0&&(g=m.split("."),m=g.shift(),g.sort()),a=m.indexOf(":")<0&&"on"+m,(e=e[k.expando]?e:new k.Event(m,"object"==typeof e&&e)).isTrigger=!0,e.namespace=g.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=r,e.target||(e.target=i),t=null==t?[e]:k.makeArray(t,[e]),u=k.event.special[m]||{},o||!u.trigger||!1!==u.trigger.apply(i,t))){if(!o&&!u.noBubble&&!k.isWindow(i)){for(d=u.delegateType||m,re.test(d+m)||(l=l.parentNode);l;l=l.parentNode)f.push(l),h=l;h===(i.ownerDocument||c)&&f.push(h.defaultView||h.parentWindow||n)}for(p=0;(l=f[p++])&&!e.isPropagationStopped();)e.type=p>1?d:u.bindType||m,(s=(k._data(l,"events")||{})[e.type]&&k._data(l,"handle"))&&s.apply(l,t),(s=a&&l[a])&&k.acceptData(l)&&s.apply&&!1===s.apply(l,t)&&e.preventDefault();if(e.type=m,!o&&!e.isDefaultPrevented()&&(!u._default||!1===u._default.apply(i.ownerDocument,t))&&("click"!==m||!k.nodeName(i,"a"))&&k.acceptData(i)&&a&&i[m]&&!k.isWindow(i)){(h=i[a])&&(i[a]=null),k.event.triggered=m;try{i[m]()}catch(e){}k.event.triggered=r,h&&(i[a]=h)}return e.result}},dispatch:function(e){e=k.event.fix(e);var t,i,o,n,s,a,l=v.call(arguments),c=(k._data(this,"events")||{})[e.type]||[],d=k.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,e)){for(a=k.event.handlers.call(this,e,c),t=0;(n=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=n.elem,s=0;(o=n.handlers[s++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(o.namespace)||(e.handleObj=o,e.data=o.data,(i=((k.event.special[o.origType]||{}).handle||o.handler).apply(n.elem,l))!==r&&!1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,e),e.result}},handlers:function(e,t){var i,o,n,s,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&(!e.button||"click"!==e.type))for(;c!=this;c=c.parentNode||this)if(1===c.nodeType&&(!0!==c.disabled||"click"!==e.type)){for(n=[],s=0;s<l;s++)n[i=(o=t[s]).selector+" "]===r&&(n[i]=o.needsContext?k(i,this).index(c)>=0:k.find(i,this,null,[c]).length),n[i]&&n.push(o);n.length&&a.push({elem:c,handlers:n})}return l<t.length&&a.push({elem:this,handlers:t.slice(l)}),a},fix:function(e){if(e[k.expando])return e;var t,i,o,n=e.type,r=e,s=this.fixHooks[n];for(s||(this.fixHooks[n]=s=ne.test(n)?this.mouseHooks:oe.test(n)?this.keyHooks:{}),o=s.props?this.props.concat(s.props):this.props,e=new k.Event(r),t=o.length;t--;)e[i=o[t]]=r[i];return e.target||(e.target=r.srcElement||c),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var i,o,n,s=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(n=(o=e.target.ownerDocument||c).documentElement,i=o.body,e.pageX=t.clientX+(n&&n.scrollLeft||i&&i.scrollLeft||0)-(n&&n.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(n&&n.scrollTop||i&&i.scrollTop||0)-(n&&n.clientTop||i&&i.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||s===r||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){if(k.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1}},focus:{trigger:function(){if(this!==c.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===c.activeElement&&this.blur)return this.blur(),!1},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==r&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,i,o){var n=k.extend(new k.Event,i,{type:e,isSimulated:!0,originalEvent:{}});o?k.event.trigger(n,null,t):k.event.dispatch.call(t,n),n.isDefaultPrevented()&&i.preventDefault()}},k.removeEvent=c.removeEventListener?function(e,t,i){e.removeEventListener&&e.removeEventListener(t,i,!1)}:function(e,t,i){var o="on"+t;e.detachEvent&&(typeof e[o]===l&&(e[o]=null),e.detachEvent(o,i))},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||!1===e.returnValue||e.getPreventDefault&&e.getPreventDefault()?ae:le):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||k.now(),this[k.expando]=!0},k.Event.prototype={isDefaultPrevented:le,isPropagationStopped:le,isImmediatePropagationStopped:le,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ae,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ae,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ae,this.stopPropagation()}},k.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){k.event.special[e]={delegateType:t,bindType:t,handle:function(e){var i,o=e.relatedTarget,n=e.handleObj;return o&&(o===this||k.contains(this,o))||(e.type=n.origType,i=n.handler.apply(this,arguments),e.type=t),i}}}),k.support.submitBubbles||(k.event.special.submit={setup:function(){if(k.nodeName(this,"form"))return!1;k.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,i=k.nodeName(t,"input")||k.nodeName(t,"button")?t.form:r;i&&!k._data(i,"submitBubbles")&&(k.event.add(i,"submit._submit",function(e){e._submit_bubble=!0}),k._data(i,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&k.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(k.nodeName(this,"form"))return!1;k.event.remove(this,"._submit")}}),k.support.changeBubbles||(k.event.special.change={setup:function(){if(ie.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(k.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),k.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),k.event.simulate("change",this,e,!0)})),!1;k.event.add(this,"beforeactivate._change",function(e){var t=e.target;ie.test(t.nodeName)&&!k._data(t,"changeBubbles")&&(k.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||k.event.simulate("change",this.parentNode,e,!0)}),k._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return k.event.remove(this,"._change"),!ie.test(this.nodeName)}}),k.support.focusinBubbles||k.each({focus:"focusin",blur:"focusout"},function(e,t){var i=0,o=function(e){k.event.simulate(t,e.target,k.event.fix(e),!0)};k.event.special[t]={setup:function(){0===i++&&c.addEventListener(e,o,!0)},teardown:function(){0===--i&&c.removeEventListener(e,o,!0)}}}),k.fn.extend({on:function(e,t,i,o,n){var s,a;if("object"==typeof e){for(s in"string"!=typeof t&&(i=i||t,t=r),e)this.on(s,t,i,e[s],n);return this}if(null==i&&null==o?(o=t,i=t=r):null==o&&("string"==typeof t?(o=i,i=r):(o=i,i=t,t=r)),!1===o)o=le;else if(!o)return this;return 1===n&&(a=o,o=function(e){return k().off(e),a.apply(this,arguments)},o.guid=a.guid||(a.guid=k.guid++)),this.each(function(){k.event.add(this,e,o,i,t)})},one:function(e,t,i,o){return this.on(e,t,i,o,1)},off:function(e,t,i){var o,n;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,k(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if("object"==typeof e){for(n in e)this.off(n,t,e[n]);return this}return!1!==t&&"function"!=typeof t||(i=t,t=r),!1===i&&(i=le),this.each(function(){k.event.remove(this,e,i,t)})},bind:function(e,t,i){return this.on(e,null,t,i)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,i,o){return this.on(t,e,i,o)},undelegate:function(e,t,i){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",i)},trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var i=this[0];if(i)return k.event.trigger(e,t,i,!0)}}),function(e,t){var i,o,n,r,s,a,l,c,d,u,h,p,f,m,g,b,v,y="sizzle"+-new Date,x=e.document,_={},w=0,C=0,S=ie(),T=ie(),A=ie(),E=typeof t,$=1<<31,P=[],D=P.pop,z=P.push,M=P.slice,O=P.indexOf||function(e){for(var t=0,i=this.length;t<i;t++)if(this[t]===e)return t;return-1},I="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=L.replace("w","w#"),B="\\["+I+"*("+L+")"+I+"*(?:([*^$|!~]?=)"+I+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+N+")|)|)"+I+"*\\]",F=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",j=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),R=new RegExp("^"+I+"*,"+I+"*"),H=new RegExp("^"+I+"*([\\x20\\t\\r\\n\\f>+~])"+I+"*"),q=new RegExp(F),U=new RegExp("^"+N+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),NAME:new RegExp("^\\[name=['\"]?("+L+")['\"]?\\]"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},W=/[\x20\t\r\n\f]*[+~]/,K=/^[^{]+\{\s*\[native code/,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/'|\\/g,Q=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,J=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,ee=function(e,t){var i="0x"+t-65536;return i!=i?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)};try{M.call(x.documentElement.childNodes,0)[0].nodeType}catch(e){M=function(e){for(var t,i=[];t=this[e++];)i.push(t);return i}}function te(e){return K.test(e+"")}function ie(){var e,t=[];return e=function(i,o){return t.push(i+=" ")>n.cacheLength&&delete e[t.shift()],e[i]=o}}function oe(e){return e[y]=!0,e}function ne(e){var t=u.createElement("div");try{return e(t)}catch(e){return!1}finally{t=null}}function re(e,t,i,o){var r,s,l,c,h,m,g,v,w,k;if((t?t.ownerDocument||t:x)!==u&&d(t),i=i||[],!e||"string"!=typeof e)return i;if(1!==(c=(t=t||u).nodeType)&&9!==c)return[];if(!p&&!o){if(r=X.exec(e))if(l=r[1]){if(9===c){if(!(s=t.getElementById(l))||!s.parentNode)return i;if(s.id===l)return i.push(s),i}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(l))&&b(t,s)&&s.id===l)return i.push(s),i}else{if(r[2])return z.apply(i,M.call(t.getElementsByTagName(e),0)),i;if((l=r[3])&&_.getByClassName&&t.getElementsByClassName)return z.apply(i,M.call(t.getElementsByClassName(l),0)),i}if(_.qsa&&!f.test(e)){if(g=!0,v=y,w=t,k=9===c&&e,1===c&&"object"!==t.nodeName.toLowerCase()){for(m=de(e),(g=t.getAttribute("id"))?v=g.replace(Z,"\\$&"):t.setAttribute("id",v),v="[id='"+v+"'] ",h=m.length;h--;)m[h]=v+ue(m[h]);w=W.test(e)&&t.parentNode||t,k=m.join(",")}if(k)try{return z.apply(i,M.call(w.querySelectorAll(k),0)),i}catch(e){}finally{g||t.removeAttribute("id")}}}return function(e,t,i,o){var r,s,l,c,d,u=de(e);if(!o&&1===u.length){if((s=u[0]=u[0].slice(0)).length>2&&"ID"===(l=s[0]).type&&9===t.nodeType&&!p&&n.relative[s[1].type]){if(!(t=n.find.ID(l.matches[0].replace(J,ee),t)[0]))return i;e=e.slice(s.shift().value.length)}for(r=V.needsContext.test(e)?0:s.length;r--&&(l=s[r],!n.relative[c=l.type]);)if((d=n.find[c])&&(o=d(l.matches[0].replace(J,ee),W.test(s[0].type)&&t.parentNode||t))){if(s.splice(r,1),!(e=o.length&&ue(s)))return z.apply(i,M.call(o,0)),i;break}}return a(e,u)(o,t,p,i,W.test(e)),i}(e.replace(j,"$1"),t,i,o)}function se(e,t){var i=t&&e,o=i&&(~t.sourceIndex||$)-(~e.sourceIndex||$);if(o)return o;if(i)for(;i=i.nextSibling;)if(i===t)return-1;return e?1:-1}function ae(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function le(e){return function(t){var i=t.nodeName.toLowerCase();return("input"===i||"button"===i)&&t.type===e}}function ce(e){return oe(function(t){return t=+t,oe(function(i,o){for(var n,r=e([],i.length,t),s=r.length;s--;)i[n=r[s]]&&(i[n]=!(o[n]=i[n]))})})}for(i in s=re.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},d=re.setDocument=function(e){var i=e?e.ownerDocument||e:x;return i!==u&&9===i.nodeType&&i.documentElement?(u=i,h=i.documentElement,p=s(i),_.tagNameNoComments=ne(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),_.attributes=ne(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),_.getByClassName=ne(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!(!e.getElementsByClassName||!e.getElementsByClassName("e").length)&&(e.lastChild.className="e",2===e.getElementsByClassName("e").length)}),_.getByName=ne(function(e){e.id=y+0,e.innerHTML="<a name='"+y+"'></a><div name='"+y+"'></div>",h.insertBefore(e,h.firstChild);var t=i.getElementsByName&&i.getElementsByName(y).length===2+i.getElementsByName(y+0).length;return _.getIdNotName=!i.getElementById(y),h.removeChild(e),t}),n.attrHandle=ne(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==E&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},_.getIdNotName?(n.find.ID=function(e,t){if(typeof t.getElementById!==E&&!p){var i=t.getElementById(e);return i&&i.parentNode?[i]:[]}},n.filter.ID=function(e){var t=e.replace(J,ee);return function(e){return e.getAttribute("id")===t}}):(n.find.ID=function(e,i){if(typeof i.getElementById!==E&&!p){var o=i.getElementById(e);return o?o.id===e||typeof o.getAttributeNode!==E&&o.getAttributeNode("id").value===e?[o]:t:[]}},n.filter.ID=function(e){var t=e.replace(J,ee);return function(e){var i=typeof e.getAttributeNode!==E&&e.getAttributeNode("id");return i&&i.value===t}}),n.find.TAG=_.tagNameNoComments?function(e,t){if(typeof t.getElementsByTagName!==E)return t.getElementsByTagName(e)}:function(e,t){var i,o=[],n=0,r=t.getElementsByTagName(e);if("*"===e){for(;i=r[n++];)1===i.nodeType&&o.push(i);return o}return r},n.find.NAME=_.getByName&&function(e,t){if(typeof t.getElementsByName!==E)return t.getElementsByName(name)},n.find.CLASS=_.getByClassName&&function(e,t){if(typeof t.getElementsByClassName!==E&&!p)return t.getElementsByClassName(e)},m=[],f=[":focus"],(_.qsa=te(i.querySelectorAll))&&(ne(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||f.push("\\["+I+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||f.push(":checked")}),ne(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&f.push("[*^$]="+I+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||f.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),f.push(",.*:")})),(_.matchesSelector=te(g=h.matchesSelector||h.mozMatchesSelector||h.webkitMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ne(function(e){_.disconnectedMatch=g.call(e,"div"),g.call(e,"[s!='']:x"),m.push("!=",F)}),f=new RegExp(f.join("|")),m=new RegExp(m.join("|")),b=te(h.contains)||h.compareDocumentPosition?function(e,t){var i=9===e.nodeType?e.documentElement:e,o=t&&t.parentNode;return e===o||!(!o||1!==o.nodeType||!(i.contains?i.contains(o):e.compareDocumentPosition&&16&e.compareDocumentPosition(o)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},v=h.compareDocumentPosition?function(e,t){var o;return e===t?(l=!0,0):(o=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&o||e.parentNode&&11===e.parentNode.nodeType?e===i||b(x,e)?-1:t===i||b(x,t)?1:0:4&o?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var o,n=0,r=e.parentNode,s=t.parentNode,a=[e],c=[t];if(e===t)return l=!0,0;if(!r||!s)return e===i?-1:t===i?1:r?-1:s?1:0;if(r===s)return se(e,t);for(o=e;o=o.parentNode;)a.unshift(o);for(o=t;o=o.parentNode;)c.unshift(o);for(;a[n]===c[n];)n++;return n?se(a[n],c[n]):a[n]===x?-1:c[n]===x?1:0},l=!1,[0,0].sort(v),_.detectDuplicates=l,u):u},re.matches=function(e,t){return re(e,null,null,t)},re.matchesSelector=function(e,t){if((e.ownerDocument||e)!==u&&d(e),t=t.replace(Q,"='$1']"),_.matchesSelector&&!p&&(!m||!m.test(t))&&!f.test(t))try{var i=g.call(e,t);if(i||_.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return re(t,u,null,[e]).length>0},re.contains=function(e,t){return(e.ownerDocument||e)!==u&&d(e),b(e,t)},re.attr=function(e,t){var i;return(e.ownerDocument||e)!==u&&d(e),p||(t=t.toLowerCase()),(i=n.attrHandle[t])?i(e):p||_.attributes?e.getAttribute(t):((i=e.getAttributeNode(t))||e.getAttribute(t))&&!0===e[t]?t:i&&i.specified?i.value:null},re.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},re.uniqueSort=function(e){var t,i=[],o=1,n=0;if(l=!_.detectDuplicates,e.sort(v),l){for(;t=e[o];o++)t===e[o-1]&&(n=i.push(o));for(;n--;)e.splice(i[n],1)}return e},r=re.getText=function(e){var t,i="",o=0,n=e.nodeType;if(n){if(1===n||9===n||11===n){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)i+=r(e)}else if(3===n||4===n)return e.nodeValue}else for(;t=e[o];o++)i+=r(t);return i},n=re.selectors={cacheLength:50,createPseudo:oe,match:V,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(J,ee),e[3]=(e[4]||e[5]||"").replace(J,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||re.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&re.error(e[0]),e},PSEUDO:function(e){var t,i=!e[5]&&e[2];return V.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:i&&q.test(i)&&(t=de(i,!0))&&(t=i.indexOf(")",i.length-t)-i.length)&&(e[0]=e[0].slice(0,t),e[2]=i.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(J,ee).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=S[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&S(e,function(e){return t.test(e.className||typeof e.getAttribute!==E&&e.getAttribute("class")||"")})},ATTR:function(e,t,i){return function(o){var n=re.attr(o,e);return null==n?"!="===t:!t||(n+="","="===t?n===i:"!="===t?n!==i:"^="===t?i&&0===n.indexOf(i):"*="===t?i&&n.indexOf(i)>-1:"$="===t?i&&n.slice(-i.length)===i:"~="===t?(" "+n+" ").indexOf(i)>-1:"|="===t&&(n===i||n.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,i,o,n){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===o&&0===n?function(e){return!!e.parentNode}:function(t,i,l){var c,d,u,h,p,f,m=r!==s?"nextSibling":"previousSibling",g=t.parentNode,b=a&&t.nodeName.toLowerCase(),v=!l&&!a;if(g){if(r){for(;m;){for(u=t;u=u[m];)if(a?u.nodeName.toLowerCase()===b:1===u.nodeType)return!1;f=m="only"===e&&!f&&"nextSibling"}return!0}if(f=[s?g.firstChild:g.lastChild],s&&v){for(p=(c=(d=g[y]||(g[y]={}))[e]||[])[0]===w&&c[1],h=c[0]===w&&c[2],u=p&&g.childNodes[p];u=++p&&u&&u[m]||(h=p=0)||f.pop();)if(1===u.nodeType&&++h&&u===t){d[e]=[w,p,h];break}}else if(v&&(c=(t[y]||(t[y]={}))[e])&&c[0]===w)h=c[1];else for(;(u=++p&&u&&u[m]||(h=p=0)||f.pop())&&((a?u.nodeName.toLowerCase()!==b:1!==u.nodeType)||!++h||(v&&((u[y]||(u[y]={}))[e]=[w,h]),u!==t)););return(h-=n)===o||h%o===0&&h/o>=0}}},PSEUDO:function(e,t){var i,o=n.pseudos[e]||n.setFilters[e.toLowerCase()]||re.error("unsupported pseudo: "+e);return o[y]?o(t):o.length>1?(i=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?oe(function(e,i){for(var n,r=o(e,t),s=r.length;s--;)e[n=O.call(e,r[s])]=!(i[n]=r[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:oe(function(e){var t=[],i=[],o=a(e.replace(j,"$1"));return o[y]?oe(function(e,t,i,n){for(var r,s=o(e,null,n,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,n,r){return t[0]=e,o(t,null,r,i),!i.pop()}}),has:oe(function(e){return function(t){return re(e,t).length>0}}),contains:oe(function(e){return function(t){return(t.textContent||t.innerText||r(t)).indexOf(e)>-1}}),lang:oe(function(e){return U.test(e||"")||re.error("unsupported lang: "+e),e=e.replace(J,ee).toLowerCase(),function(t){var i;do{if(i=p?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return(i=i.toLowerCase())===e||0===i.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var i=e.location&&e.location.hash;return i&&i.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===u.activeElement&&(!u.hasFocus||u.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ce(function(){return[0]}),last:ce(function(e,t){return[t-1]}),eq:ce(function(e,t,i){return[i<0?i+t:i]}),even:ce(function(e,t){for(var i=0;i<t;i+=2)e.push(i);return e}),odd:ce(function(e,t){for(var i=1;i<t;i+=2)e.push(i);return e}),lt:ce(function(e,t,i){for(var o=i<0?i+t:i;--o>=0;)e.push(o);return e}),gt:ce(function(e,t,i){for(var o=i<0?i+t:i;++o<t;)e.push(o);return e})}},{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[i]=ae(i);for(i in{submit:!0,reset:!0})n.pseudos[i]=le(i);function de(e,t){var i,o,r,s,a,l,c,d=T[e+" "];if(d)return t?0:d.slice(0);for(a=e,l=[],c=n.preFilter;a;){for(s in i&&!(o=R.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=H.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(j," ")}),a=a.slice(i.length)),n.filter)!(o=V[s].exec(a))||c[s]&&!(o=c[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return t?a.length:a?re.error(e):T(e,l).slice(0)}function ue(e){for(var t=0,i=e.length,o="";t<i;t++)o+=e[t].value;return o}function he(e,t,i){var n=t.dir,r=i&&"parentNode"===n,s=C++;return t.first?function(t,i,o){for(;t=t[n];)if(1===t.nodeType||r)return e(t,i,o)}:function(t,i,a){var l,c,d,u=w+" "+s;if(a){for(;t=t[n];)if((1===t.nodeType||r)&&e(t,i,a))return!0}else for(;t=t[n];)if(1===t.nodeType||r)if((c=(d=t[y]||(t[y]={}))[n])&&c[0]===u){if(!0===(l=c[1])||l===o)return!0===l}else if((c=d[n]=[u])[1]=e(t,i,a)||o,!0===c[1])return!0}}function pe(e){return e.length>1?function(t,i,o){for(var n=e.length;n--;)if(!e[n](t,i,o))return!1;return!0}:e[0]}function fe(e,t,i,o,n){for(var r,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(r=e[a])&&(i&&!i(r,o,n)||(s.push(r),c&&t.push(a)));return s}function me(e,t,i,o,n,r){return o&&!o[y]&&(o=me(o)),n&&!n[y]&&(n=me(n,r)),oe(function(r,s,a,l){var c,d,u,h=[],p=[],f=s.length,m=r||function(e,t,i){for(var o=0,n=t.length;o<n;o++)re(e,t[o],i);return i}(t||"*",a.nodeType?[a]:a,[]),g=!e||!r&&t?m:fe(m,h,e,a,l),b=i?n||(r?e:f||o)?[]:s:g;if(i&&i(g,b,a,l),o)for(c=fe(b,p),o(c,[],a,l),d=c.length;d--;)(u=c[d])&&(b[p[d]]=!(g[p[d]]=u));if(r){if(n||e){if(n){for(c=[],d=b.length;d--;)(u=b[d])&&c.push(g[d]=u);n(null,b=[],c,l)}for(d=b.length;d--;)(u=b[d])&&(c=n?O.call(r,u):h[d])>-1&&(r[c]=!(s[c]=u))}}else b=fe(b===s?b.splice(f,b.length):b),n?n(null,s,b,l):z.apply(s,b)})}function ge(e){for(var t,i,o,r=e.length,s=n.relative[e[0].type],a=s||n.relative[" "],l=s?1:0,d=he(function(e){return e===t},a,!0),u=he(function(e){return O.call(t,e)>-1},a,!0),h=[function(e,i,o){return!s&&(o||i!==c)||((t=i).nodeType?d(e,i,o):u(e,i,o))}];l<r;l++)if(i=n.relative[e[l].type])h=[he(pe(h),i)];else{if((i=n.filter[e[l].type].apply(null,e[l].matches))[y]){for(o=++l;o<r&&!n.relative[e[o].type];o++);return me(l>1&&pe(h),l>1&&ue(e.slice(0,l-1)).replace(j,"$1"),i,l<o&&ge(e.slice(l,o)),o<r&&ge(e=e.slice(o)),o<r&&ue(e))}h.push(i)}return pe(h)}function be(){}a=re.compile=function(e,t){var i,r=[],s=[],a=A[e+" "];if(!a){for(t||(t=de(e)),i=t.length;i--;)(a=ge(t[i]))[y]?r.push(a):s.push(a);a=A(e,function(e,t){var i=0,r=t.length>0,s=e.length>0,a=function(a,l,d,h,p){var f,m,g,b=[],v=0,y="0",x=a&&[],_=null!=p,k=c,C=a||s&&n.find.TAG("*",p&&l.parentNode||l),S=w+=null==k?1:Math.random()||.1;for(_&&(c=l!==u&&l,o=i);null!=(f=C[y]);y++){if(s&&f){for(m=0;g=e[m++];)if(g(f,l,d)){h.push(f);break}_&&(w=S,o=++i)}r&&((f=!g&&f)&&v--,a&&x.push(f))}if(v+=y,r&&y!==v){for(m=0;g=t[m++];)g(x,b,l,d);if(a){if(v>0)for(;y--;)x[y]||b[y]||(b[y]=D.call(h));b=fe(b)}z.apply(h,b),_&&!a&&b.length>0&&v+t.length>1&&re.uniqueSort(h)}return _&&(w=S,c=k),x};return r?oe(a):a}(s,r))}return a},n.pseudos.nth=n.pseudos.eq,n.filters=be.prototype=n.pseudos,n.setFilters=new be,d(),re.attr=k.attr,k.find=re,k.expr=re.selectors,k.expr[":"]=k.expr.pseudos,k.unique=re.uniqueSort,k.text=re.getText,k.isXMLDoc=re.isXML,k.contains=re.contains}(n);var ce=/Until$/,de=/^(?:parents|prev(?:Until|All))/,ue=/^.[^:#\[\.,]*$/,he=k.expr.match.needsContext,pe={children:!0,contents:!0,next:!0,prev:!0};function fe(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}function me(e,t,i){if(t=t||0,k.isFunction(t))return k.grep(e,function(e,o){return!!t.call(e,o,e)===i});if(t.nodeType)return k.grep(e,function(e){return e===t===i});if("string"==typeof t){var o=k.grep(e,function(e){return 1===e.nodeType});if(ue.test(t))return k.filter(t,o,!i);t=k.filter(t,o)}return k.grep(e,function(e){return k.inArray(e,t)>=0===i})}function ge(e){var t=be.split("|"),i=e.createDocumentFragment();if(i.createElement)for(;t.length;)i.createElement(t.pop());return i}k.fn.extend({find:function(e){var t,i,o,n=this.length;if("string"!=typeof e)return o=this,this.pushStack(k(e).filter(function(){for(t=0;t<n;t++)if(k.contains(o[t],this))return!0}));for(i=[],t=0;t<n;t++)k.find(e,this[t],i);return(i=this.pushStack(n>1?k.unique(i):i)).selector=(this.selector?this.selector+" ":"")+e,i},has:function(e){var t,i=k(e,this),o=i.length;return this.filter(function(){for(t=0;t<o;t++)if(k.contains(this,i[t]))return!0})},not:function(e){return this.pushStack(me(this,e,!1))},filter:function(e){return this.pushStack(me(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?he.test(e)?k(e,this.context).index(this[0])>=0:k.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var i,o=0,n=this.length,r=[],s=he.test(e)||"string"!=typeof e?k(e,t||this.context):0;o<n;o++)for(i=this[o];i&&i.ownerDocument&&i!==t&&11!==i.nodeType;){if(s?s.index(i)>-1:k.find.matchesSelector(i,e)){r.push(i);break}i=i.parentNode}return this.pushStack(r.length>1?k.unique(r):r)},index:function(e){return e?"string"==typeof e?k.inArray(this[0],k(e)):k.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var i="string"==typeof e?k(e,t):k.makeArray(e&&e.nodeType?[e]:e),o=k.merge(this.get(),i);return this.pushStack(k.unique(o))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.fn.andSelf=k.fn.addBack,k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k.dir(e,"parentNode")},parentsUntil:function(e,t,i){return k.dir(e,"parentNode",i)},next:function(e){return fe(e,"nextSibling")},prev:function(e){return fe(e,"previousSibling")},nextAll:function(e){return k.dir(e,"nextSibling")},prevAll:function(e){return k.dir(e,"previousSibling")},nextUntil:function(e,t,i){return k.dir(e,"nextSibling",i)},prevUntil:function(e,t,i){return k.dir(e,"previousSibling",i)},siblings:function(e){return k.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return k.sibling(e.firstChild)},contents:function(e){return k.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:k.merge([],e.childNodes)}},function(e,t){k.fn[e]=function(i,o){var n=k.map(this,t,i);return ce.test(e)||(o=i),o&&"string"==typeof o&&(n=k.filter(o,n)),n=this.length>1&&!pe[e]?k.unique(n):n,this.length>1&&de.test(e)&&(n=n.reverse()),this.pushStack(n)}}),k.extend({filter:function(e,t,i){return i&&(e=":not("+e+")"),1===t.length?k.find.matchesSelector(t[0],e)?[t[0]]:[]:k.find.matches(e,t)},dir:function(e,t,i){for(var o=[],n=e[t];n&&9!==n.nodeType&&(i===r||1!==n.nodeType||!k(n).is(i));)1===n.nodeType&&o.push(n),n=n[t];return o},sibling:function(e,t){for(var i=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&i.push(e);return i}});var be="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ve=/ jQuery\d+="(?:null|\d+)"/g,ye=new RegExp("<(?:"+be+")[\\s/>]","i"),xe=/^\s+/,_e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,we=/<([\w:]+)/,ke=/<tbody/i,Ce=/<|&#?\w+;/,Se=/<(?:script|style|link)/i,Te=/^(?:checkbox|radio)$/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ee=/^$|\/(?:java|ecma)script/i,$e=/^true\/(.*)/,Pe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,De={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},ze=ge(c).appendChild(c.createElement("div"));function Me(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Oe(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function Ie(e){var t=$e.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Le(e,t){for(var i,o=0;null!=(i=e[o]);o++)k._data(i,"globalEval",!t||k._data(t[o],"globalEval"))}function Ne(e,t){if(1===t.nodeType&&k.hasData(e)){var i,o,n,r=k._data(e),s=k._data(t,r),a=r.events;if(a)for(i in delete s.handle,s.events={},a)for(o=0,n=a[i].length;o<n;o++)k.event.add(t,i,a[i][o]);s.data&&(s.data=k.extend({},s.data))}}function Be(e,t){var i,o,n;if(1===t.nodeType){if(i=t.nodeName.toLowerCase(),!k.support.noCloneEvent&&t[k.expando]){for(o in(n=k._data(t)).events)k.removeEvent(t,o,n.handle);t.removeAttribute(k.expando)}"script"===i&&t.text!==e.text?(Oe(t).text=e.text,Ie(t)):"object"===i?(t.parentNode&&(t.outerHTML=e.outerHTML),k.support.html5Clone&&e.innerHTML&&!k.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===i&&Te.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===i?t.defaultSelected=t.selected=e.defaultSelected:"input"!==i&&"textarea"!==i||(t.defaultValue=e.defaultValue)}}function Fe(e,t){var i,o,n=0,s=typeof e.getElementsByTagName!==l?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==l?e.querySelectorAll(t||"*"):r;if(!s)for(s=[],i=e.childNodes||e;null!=(o=i[n]);n++)!t||k.nodeName(o,t)?s.push(o):k.merge(s,Fe(o,t));return t===r||t&&k.nodeName(e,t)?k.merge([e],s):s}function je(e){Te.test(e.type)&&(e.defaultChecked=e.checked)}De.optgroup=De.option,De.tbody=De.tfoot=De.colgroup=De.caption=De.thead,De.th=De.td,k.fn.extend({text:function(e){return k.access(this,function(e){return e===r?k.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(k.isFunction(e))return this.each(function(t){k(this).wrapAll(e.call(this,t))});if(this[0]){var t=k(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return k.isFunction(e)?this.each(function(t){k(this).wrapInner(e.call(this,t))}):this.each(function(){var t=k(this),i=t.contents();i.length?i.wrapAll(e):t.append(e)})},wrap:function(e){var t=k.isFunction(e);return this.each(function(i){k(this).wrapAll(t?e.call(this,i):e)})},unwrap:function(){return this.parent().each(function(){k.nodeName(this,"body")||k(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var i,o=0;null!=(i=this[o]);o++)(!e||k.filter(e,[i]).length>0)&&(t||1!==i.nodeType||k.cleanData(Fe(i)),i.parentNode&&(t&&k.contains(i.ownerDocument,i)&&Le(Fe(i,"script")),i.parentNode.removeChild(i)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&k.cleanData(Fe(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&k.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return k.access(this,function(e){var t=this[0]||{},i=0,o=this.length;if(e===r)return 1===t.nodeType?t.innerHTML.replace(ve,""):r;if("string"==typeof e&&!Se.test(e)&&(k.support.htmlSerialize||!ye.test(e))&&(k.support.leadingWhitespace||!xe.test(e))&&!De[(we.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(_e,"<$1></$2>");try{for(;i<o;i++)1===(t=this[i]||{}).nodeType&&(k.cleanData(Fe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return k.isFunction(e)||"string"==typeof e||(e=k(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,i=this.parentNode;i&&(k(this).remove(),i.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,i){e=g.apply([],e);var o,n,s,a,l,c,d=0,u=this.length,h=this,p=u-1,f=e[0],m=k.isFunction(f);if(m||!(u<=1||"string"!=typeof f||k.support.checkClone)&&Ae.test(f))return this.each(function(o){var n=h.eq(o);m&&(e[0]=f.call(this,o,t?n.html():r)),n.domManip(e,t,i)});if(u&&(o=(c=k.buildFragment(e,this[0].ownerDocument,!1,this)).firstChild,1===c.childNodes.length&&(c=o),o)){for(t=t&&k.nodeName(o,"tr"),s=(a=k.map(Fe(c,"script"),Oe)).length;d<u;d++)n=c,d!==p&&(n=k.clone(n,!0,!0),s&&k.merge(a,Fe(n,"script"))),i.call(t&&k.nodeName(this[d],"table")?Me(this[d],"tbody"):this[d],n,d);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Ie),d=0;d<s;d++)n=a[d],Ee.test(n.type||"")&&!k._data(n,"globalEval")&&k.contains(l,n)&&(n.src?k.ajax({url:n.src,type:"GET",dataType:"script",async:!1,global:!1,throws:!0}):k.globalEval((n.text||n.textContent||n.innerHTML||"").replace(Pe,"")));c=o=null}return this}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){k.fn[e]=function(e){for(var i,o=0,n=[],r=k(e),s=r.length-1;o<=s;o++)i=o===s?this:this.clone(!0),k(r[o])[t](i),b.apply(n,i.get());return this.pushStack(n)}}),k.extend({clone:function(e,t,i){var o,n,r,s,a,l=k.contains(e.ownerDocument,e);if(k.support.html5Clone||k.isXMLDoc(e)||!ye.test("<"+e.nodeName+">")?r=e.cloneNode(!0):(ze.innerHTML=e.outerHTML,ze.removeChild(r=ze.firstChild)),!(k.support.noCloneEvent&&k.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(o=Fe(r),a=Fe(e),s=0;null!=(n=a[s]);++s)o[s]&&Be(n,o[s]);if(t)if(i)for(a=a||Fe(e),o=o||Fe(r),s=0;null!=(n=a[s]);s++)Ne(n,o[s]);else Ne(e,r);return(o=Fe(r,"script")).length>0&&Le(o,!l&&Fe(e,"script")),o=a=n=null,r},buildFragment:function(e,t,i,o){for(var n,r,s,a,l,c,d,u=e.length,h=ge(t),p=[],f=0;f<u;f++)if((r=e[f])||0===r)if("object"===k.type(r))k.merge(p,r.nodeType?[r]:r);else if(Ce.test(r)){for(a=a||h.appendChild(t.createElement("div")),l=(we.exec(r)||["",""])[1].toLowerCase(),d=De[l]||De._default,a.innerHTML=d[1]+r.replace(_e,"<$1></$2>")+d[2],n=d[0];n--;)a=a.lastChild;if(!k.support.leadingWhitespace&&xe.test(r)&&p.push(t.createTextNode(xe.exec(r)[0])),!k.support.tbody)for(n=(r="table"!==l||ke.test(r)?"<table>"!==d[1]||ke.test(r)?0:a:a.firstChild)&&r.childNodes.length;n--;)k.nodeName(c=r.childNodes[n],"tbody")&&!c.childNodes.length&&r.removeChild(c);for(k.merge(p,a.childNodes),a.textContent="";a.firstChild;)a.removeChild(a.firstChild);a=h.lastChild}else p.push(t.createTextNode(r));for(a&&h.removeChild(a),k.support.appendChecked||k.grep(Fe(p,"input"),je),f=0;r=p[f++];)if((!o||-1===k.inArray(r,o))&&(s=k.contains(r.ownerDocument,r),a=Fe(h.appendChild(r),"script"),s&&Le(a),i))for(n=0;r=a[n++];)Ee.test(r.type||"")&&i.push(r);return a=null,h},cleanData:function(e,t){for(var i,o,n,r,s=0,a=k.expando,c=k.cache,d=k.support.deleteExpando,u=k.event.special;null!=(i=e[s]);s++)if((t||k.acceptData(i))&&(r=(n=i[a])&&c[n])){if(r.events)for(o in r.events)u[o]?k.event.remove(i,o):k.removeEvent(i,o,r.handle);c[n]&&(delete c[n],d?delete i[a]:typeof i.removeAttribute!==l?i.removeAttribute(a):i[a]=null,f.push(n))}}});var Re,He,qe,Ue=/alpha\([^)]*\)/i,Ve=/opacity\s*=\s*([^)]*)/,We=/^(top|right|bottom|left)$/,Ke=/^(none|table(?!-c[ea]).+)/,Xe=/^margin/,Ge=new RegExp("^("+C+")(.*)$","i"),Ye=new RegExp("^("+C+")(?!px)[a-z%]+$","i"),Ze=new RegExp("^([+-])=("+C+")","i"),Qe={BODY:"block"},Je={position:"absolute",visibility:"hidden",display:"block"},et={letterSpacing:0,fontWeight:400},tt=["Top","Right","Bottom","Left"],it=["Webkit","O","Moz","ms"];function ot(e,t){if(t in e)return t;for(var i=t.charAt(0).toUpperCase()+t.slice(1),o=t,n=it.length;n--;)if((t=it[n]+i)in e)return t;return o}function nt(e,t){return e=t||e,"none"===k.css(e,"display")||!k.contains(e.ownerDocument,e)}function rt(e,t){for(var i,o,n,r=[],s=0,a=e.length;s<a;s++)(o=e[s]).style&&(r[s]=k._data(o,"olddisplay"),i=o.style.display,t?(r[s]||"none"!==i||(o.style.display=""),""===o.style.display&&nt(o)&&(r[s]=k._data(o,"olddisplay",ct(o.nodeName)))):r[s]||(n=nt(o),(i&&"none"!==i||!n)&&k._data(o,"olddisplay",n?i:k.css(o,"display"))));for(s=0;s<a;s++)(o=e[s]).style&&(t&&"none"!==o.style.display&&""!==o.style.display||(o.style.display=t?r[s]||"":"none"));return e}function st(e,t,i){var o=Ge.exec(t);return o?Math.max(0,o[1]-(i||0))+(o[2]||"px"):t}function at(e,t,i,o,n){for(var r=i===(o?"border":"content")?4:"width"===t?1:0,s=0;r<4;r+=2)"margin"===i&&(s+=k.css(e,i+tt[r],!0,n)),o?("content"===i&&(s-=k.css(e,"padding"+tt[r],!0,n)),"margin"!==i&&(s-=k.css(e,"border"+tt[r]+"Width",!0,n))):(s+=k.css(e,"padding"+tt[r],!0,n),"padding"!==i&&(s+=k.css(e,"border"+tt[r]+"Width",!0,n)));return s}function lt(e,t,i){var o=!0,n="width"===t?e.offsetWidth:e.offsetHeight,r=He(e),s=k.support.boxSizing&&"border-box"===k.css(e,"boxSizing",!1,r);if(n<=0||null==n){if(((n=qe(e,t,r))<0||null==n)&&(n=e.style[t]),Ye.test(n))return n;o=s&&(k.support.boxSizingReliable||n===e.style[t]),n=parseFloat(n)||0}return n+at(e,t,i||(s?"border":"content"),o,r)+"px"}function ct(e){var t=c,i=Qe[e];return i||("none"!==(i=dt(e,t))&&i||((t=((Re=(Re||k("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement))[0].contentWindow||Re[0].contentDocument).document).write("<!doctype html><html><body>"),t.close(),i=dt(e,t),Re.detach()),Qe[e]=i),i}function dt(e,t){var i=k(t.createElement(e)).appendTo(t.body),o=k.css(i[0],"display");return i.remove(),o}k.fn.extend({css:function(e,t){return k.access(this,function(e,t,i){var o,n,s={},a=0;if(k.isArray(t)){for(n=He(e),o=t.length;a<o;a++)s[t[a]]=k.css(e,t[a],!1,n);return s}return i!==r?k.style(e,t,i):k.css(e,t)},e,t,arguments.length>1)},show:function(){return rt(this,!0)},hide:function(){return rt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nt(this))?k(this).show():k(this).hide()})}}),k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var i=qe(e,"opacity");return""===i?"1":i}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:k.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,i,o){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var n,s,a,l=k.camelCase(t),c=e.style;if(t=k.cssProps[l]||(k.cssProps[l]=ot(c,l)),a=k.cssHooks[t]||k.cssHooks[l],i===r)return a&&"get"in a&&(n=a.get(e,!1,o))!==r?n:c[t];if("string"==(s=typeof i)&&(n=Ze.exec(i))&&(i=(n[1]+1)*n[2]+parseFloat(k.css(e,t)),s="number"),!(null==i||"number"===s&&isNaN(i)||("number"!==s||k.cssNumber[l]||(i+="px"),k.support.clearCloneStyle||""!==i||0!==t.indexOf("background")||(c[t]="inherit"),a&&"set"in a&&(i=a.set(e,i,o))===r)))try{c[t]=i}catch(e){}}},css:function(e,t,i,o){var n,s,a,l=k.camelCase(t);return t=k.cssProps[l]||(k.cssProps[l]=ot(e.style,l)),(a=k.cssHooks[t]||k.cssHooks[l])&&"get"in a&&(s=a.get(e,!0,i)),s===r&&(s=qe(e,t,o)),"normal"===s&&t in et&&(s=et[t]),""===i||i?(n=parseFloat(s),!0===i||k.isNumeric(n)?n||0:s):s},swap:function(e,t,i,o){var n,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];for(r in n=i.apply(e,o||[]),t)e.style[r]=s[r];return n}}),n.getComputedStyle?(He=function(e){return n.getComputedStyle(e,null)},qe=function(e,t,i){var o,n,s,a=i||He(e),l=a?a.getPropertyValue(t)||a[t]:r,c=e.style;return a&&(""!==l||k.contains(e.ownerDocument,e)||(l=k.style(e,t)),Ye.test(l)&&Xe.test(t)&&(o=c.width,n=c.minWidth,s=c.maxWidth,c.minWidth=c.maxWidth=c.width=l,l=a.width,c.width=o,c.minWidth=n,c.maxWidth=s)),l}):c.documentElement.currentStyle&&(He=function(e){return e.currentStyle},qe=function(e,t,i){var o,n,s,a=i||He(e),l=a?a[t]:r,c=e.style;return null==l&&c&&c[t]&&(l=c[t]),Ye.test(l)&&!We.test(t)&&(o=c.left,(s=(n=e.runtimeStyle)&&n.left)&&(n.left=e.currentStyle.left),c.left="fontSize"===t?"1em":l,l=c.pixelLeft+"px",c.left=o,s&&(n.left=s)),""===l?"auto":l}),k.each(["height","width"],function(e,t){k.cssHooks[t]={get:function(e,i,o){if(i)return 0===e.offsetWidth&&Ke.test(k.css(e,"display"))?k.swap(e,Je,function(){return lt(e,t,o)}):lt(e,t,o)},set:function(e,i,o){var n=o&&He(e);return st(0,i,o?at(e,t,o,k.support.boxSizing&&"border-box"===k.css(e,"boxSizing",!1,n),n):0)}}}),k.support.opacity||(k.cssHooks.opacity={get:function(e,t){return Ve.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var i=e.style,o=e.currentStyle,n=k.isNumeric(t)?"alpha(opacity="+100*t+")":"",r=o&&o.filter||i.filter||"";i.zoom=1,(t>=1||""===t)&&""===k.trim(r.replace(Ue,""))&&i.removeAttribute&&(i.removeAttribute("filter"),""===t||o&&!o.filter)||(i.filter=Ue.test(r)?r.replace(Ue,n):r+" "+n)}}),k(function(){k.support.reliableMarginRight||(k.cssHooks.marginRight={get:function(e,t){if(t)return k.swap(e,{display:"inline-block"},qe,[e,"marginRight"])}}),!k.support.pixelPosition&&k.fn.position&&k.each(["top","left"],function(e,t){k.cssHooks[t]={get:function(e,i){if(i)return i=qe(e,t),Ye.test(i)?k(e).position()[t]+"px":i}}})}),k.expr&&k.expr.filters&&(k.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!k.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||k.css(e,"display"))},k.expr.filters.visible=function(e){return!k.expr.filters.hidden(e)}),k.each({margin:"",padding:"",border:"Width"},function(e,t){k.cssHooks[e+t]={expand:function(i){for(var o=0,n={},r="string"==typeof i?i.split(" "):[i];o<4;o++)n[e+tt[o]+t]=r[o]||r[o-2]||r[0];return n}},Xe.test(e)||(k.cssHooks[e+t].set=st)});var ut=/%20/g,ht=/\[\]$/,pt=/\r?\n/g,ft=/^(?:submit|button|image|reset|file)$/i,mt=/^(?:input|select|textarea|keygen)/i;function gt(e,t,i,o){var n;if(k.isArray(t))k.each(t,function(t,n){i||ht.test(e)?o(e,n):gt(e+"["+("object"==typeof n?t:"")+"]",n,i,o)});else if(i||"object"!==k.type(t))o(e,t);else for(n in t)gt(e+"["+n+"]",t[n],i,o)}k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&mt.test(this.nodeName)&&!ft.test(e)&&(this.checked||!Te.test(e))}).map(function(e,t){var i=k(this).val();return null==i?null:k.isArray(i)?k.map(i,function(e){return{name:t.name,value:e.replace(pt,"\r\n")}}):{name:t.name,value:i.replace(pt,"\r\n")}}).get()}}),k.param=function(e,t){var i,o=[],n=function(e,t){t=k.isFunction(t)?t():null==t?"":t,o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===r&&(t=k.ajaxSettings&&k.ajaxSettings.traditional),k.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){n(this.name,this.value)});else for(i in e)gt(i,e[i],t,n);return o.join("&").replace(ut,"+")},k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){k.fn[t]=function(e,i){return arguments.length>0?this.on(t,null,e,i):this.trigger(t)}}),k.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var bt,vt,yt=k.now(),xt=/\?/,_t=/#.*$/,wt=/([?&])_=[^&]*/,kt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ct=/^(?:GET|HEAD)$/,St=/^\/\//,Tt=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,At=k.fn.load,Et={},$t={},Pt="*/".concat("*");try{vt=d.href}catch(e){(vt=c.createElement("a")).href="",vt=vt.href}function Dt(e){return function(t,i){"string"!=typeof t&&(i=t,t="*");var o,n=0,r=t.toLowerCase().match(S)||[];if(k.isFunction(i))for(;o=r[n++];)"+"===o[0]?(o=o.slice(1)||"*",(e[o]=e[o]||[]).unshift(i)):(e[o]=e[o]||[]).push(i)}}function zt(e,t,i,o){var n={},r=e===$t;function s(a){var l;return n[a]=!0,k.each(e[a]||[],function(e,a){var c=a(t,i,o);return"string"!=typeof c||r||n[c]?r?!(l=c):void 0:(t.dataTypes.unshift(c),s(c),!1)}),l}return s(t.dataTypes[0])||!n["*"]&&s("*")}function Mt(e,t){var i,o,n=k.ajaxSettings.flatOptions||{};for(o in t)t[o]!==r&&((n[o]?e:i||(i={}))[o]=t[o]);return i&&k.extend(!0,e,i),e}bt=Tt.exec(vt.toLowerCase())||[],k.fn.load=function(e,t,i){if("string"!=typeof e&&At)return At.apply(this,arguments);var o,n,s,a=this,l=e.indexOf(" ");return l>=0&&(o=e.slice(l,e.length),e=e.slice(0,l)),k.isFunction(t)?(i=t,t=r):t&&"object"==typeof t&&(s="POST"),a.length>0&&k.ajax({url:e,type:s,dataType:"html",data:t}).done(function(e){n=arguments,a.html(o?k("<div>").append(k.parseHTML(e)).find(o):e)}).complete(i&&function(e,t){a.each(i,n||[e.responseText,t,e])}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.each(["get","post"],function(e,t){k[t]=function(e,i,o,n){return k.isFunction(i)&&(n=n||o,o=i,i=r),k.ajax({url:e,type:t,dataType:n,data:i,success:o})}}),k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:vt,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":n.String,"text html":!0,"text json":k.parseJSON,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mt(Mt(e,k.ajaxSettings),t):Mt(k.ajaxSettings,e)},ajaxPrefilter:Dt(Et),ajaxTransport:Dt($t),ajax:function(e,t){"object"==typeof e&&(t=e,e=r),t=t||{};var i,o,n,s,a,l,c,d,u=k.ajaxSetup({},t),h=u.context||u,p=u.context&&(h.nodeType||h.jquery)?k(h):k.event,f=k.Deferred(),m=k.Callbacks("once memory"),g=u.statusCode||{},b={},v={},y=0,x="canceled",_={readyState:0,getResponseHeader:function(e){var t;if(2===y){if(!d)for(d={};t=kt.exec(s);)d[t[1].toLowerCase()]=t[2];t=d[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===y?s:null},setRequestHeader:function(e,t){var i=e.toLowerCase();return y||(e=v[i]=v[i]||e,b[e]=t),this},overrideMimeType:function(e){return y||(u.mimeType=e),this},statusCode:function(e){var t;if(e)if(y<2)for(t in e)g[t]=[g[t],e[t]];else _.always(e[_.status]);return this},abort:function(e){var t=e||x;return c&&c.abort(t),w(0,t),this}};if(f.promise(_).complete=m.add,_.success=_.done,_.error=_.fail,u.url=((e||u.url||vt)+"").replace(_t,"").replace(St,bt[1]+"//"),u.type=t.method||t.type||u.method||u.type,u.dataTypes=k.trim(u.dataType||"*").toLowerCase().match(S)||[""],null==u.crossDomain&&(i=Tt.exec(u.url.toLowerCase()),u.crossDomain=!(!i||i[1]===bt[1]&&i[2]===bt[2]&&(i[3]||("http:"===i[1]?80:443))==(bt[3]||("http:"===bt[1]?80:443)))),u.data&&u.processData&&"string"!=typeof u.data&&(u.data=k.param(u.data,u.traditional)),zt(Et,u,t,_),2===y)return _;for(o in(l=u.global)&&0===k.active++&&k.event.trigger("ajaxStart"),u.type=u.type.toUpperCase(),u.hasContent=!Ct.test(u.type),n=u.url,u.hasContent||(u.data&&(n=u.url+=(xt.test(n)?"&":"?")+u.data,delete u.data),!1===u.cache&&(u.url=wt.test(n)?n.replace(wt,"$1_="+yt++):n+(xt.test(n)?"&":"?")+"_="+yt++)),u.ifModified&&(k.lastModified[n]&&_.setRequestHeader("If-Modified-Since",k.lastModified[n]),k.etag[n]&&_.setRequestHeader("If-None-Match",k.etag[n])),(u.data&&u.hasContent&&!1!==u.contentType||t.contentType)&&_.setRequestHeader("Content-Type",u.contentType),_.setRequestHeader("Accept",u.dataTypes[0]&&u.accepts[u.dataTypes[0]]?u.accepts[u.dataTypes[0]]+("*"!==u.dataTypes[0]?", "+Pt+"; q=0.01":""):u.accepts["*"]),u.headers)_.setRequestHeader(o,u.headers[o]);if(u.beforeSend&&(!1===u.beforeSend.call(h,_,u)||2===y))return _.abort();for(o in x="abort",{success:1,error:1,complete:1})_[o](u[o]);if(c=zt($t,u,t,_)){_.readyState=1,l&&p.trigger("ajaxSend",[_,u]),u.async&&u.timeout>0&&(a=setTimeout(function(){_.abort("timeout")},u.timeout));try{y=1,c.send(b,w)}catch(e){if(!(y<2))throw e;w(-1,e)}}else w(-1,"No Transport");function w(e,t,i,o){var d,b,v,x,w,C=t;2!==y&&(y=2,a&&clearTimeout(a),c=r,s=o||"",_.readyState=e>0?4:0,i&&(x=function(e,t,i){var o,n,s,a,l=e.contents,c=e.dataTypes,d=e.responseFields;for(a in d)a in i&&(t[d[a]]=i[a]);for(;"*"===c[0];)c.shift(),n===r&&(n=e.mimeType||t.getResponseHeader("Content-Type"));if(n)for(a in l)if(l[a]&&l[a].test(n)){c.unshift(a);break}if(c[0]in i)s=c[0];else{for(a in i){if(!c[0]||e.converters[a+" "+c[0]]){s=a;break}o||(o=a)}s=s||o}if(s)return s!==c[0]&&c.unshift(s),i[s]}(u,_,i)),e>=200&&e<300||304===e?(u.ifModified&&((w=_.getResponseHeader("Last-Modified"))&&(k.lastModified[n]=w),(w=_.getResponseHeader("etag"))&&(k.etag[n]=w)),204===e?(d=!0,C="nocontent"):304===e?(d=!0,C="notmodified"):(d=function(e,t){var i,o,n,r,s={},a=0,l=e.dataTypes.slice(),c=l[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l[1])for(n in e.converters)s[n.toLowerCase()]=e.converters[n];for(;o=l[++a];)if("*"!==o){if("*"!==c&&c!==o){if(!(n=s[c+" "+o]||s["* "+o]))for(i in s)if((r=i.split(" "))[1]===o&&(n=s[c+" "+r[0]]||s["* "+r[0]])){!0===n?n=s[i]:!0!==s[i]&&(o=r[0],l.splice(a--,0,o));break}if(!0!==n)if(n&&e.throws)t=n(t);else try{t=n(t)}catch(e){return{state:"parsererror",error:n?e:"No conversion from "+c+" to "+o}}}c=o}return{state:"success",data:t}}(u,x),C=d.state,b=d.data,d=!(v=d.error))):(v=C,!e&&C||(C="error",e<0&&(e=0))),_.status=e,_.statusText=(t||C)+"",d?f.resolveWith(h,[b,C,_]):f.rejectWith(h,[_,C,v]),_.statusCode(g),g=r,l&&p.trigger(d?"ajaxSuccess":"ajaxError",[_,u,d?b:v]),m.fireWith(h,[_,C]),l&&(p.trigger("ajaxComplete",[_,u]),--k.active||k.event.trigger("ajaxStop")))}return _},getScript:function(e,t){return k.get(e,r,t,"script")},getJSON:function(e,t,i){return k.get(e,t,i,"json")}}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){e.cache===r&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),k.ajaxTransport("script",function(e){if(e.crossDomain){var t,i=c.head||k("head")[0]||c.documentElement;return{send:function(o,n){(t=c.createElement("script")).async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,i){(i||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,i||n(200,"success"))},i.insertBefore(t,i.firstChild)},abort:function(){t&&t.onload(r,!0)}}}});var Ot=[],It=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ot.pop()||k.expando+"_"+yt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,i){var o,s,a,l=!1!==e.jsonp&&(It.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&It.test(e.data)&&"data");if(l||"jsonp"===e.dataTypes[0])return o=e.jsonpCallback=k.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,l?e[l]=e[l].replace(It,"$1"+o):!1!==e.jsonp&&(e.url+=(xt.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return a||k.error(o+" was not called"),a[0]},e.dataTypes[0]="json",s=n[o],n[o]=function(){a=arguments},i.always(function(){n[o]=s,e[o]&&(e.jsonpCallback=t.jsonpCallback,Ot.push(o)),a&&k.isFunction(s)&&s(a[0]),a=s=r}),"script"});var Lt,Nt,Bt=0,Ft=n.ActiveXObject&&function(){var e;for(e in Lt)Lt[e](r,!0)};function jt(){try{return new n.XMLHttpRequest}catch(e){}}k.ajaxSettings.xhr=n.ActiveXObject?function(){return!this.isLocal&&jt()||function(){try{return new n.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}()}:jt,Nt=k.ajaxSettings.xhr(),k.support.cors=!!Nt&&"withCredentials"in Nt,(Nt=k.support.ajax=!!Nt)&&k.ajaxTransport(function(e){var t;if(!e.crossDomain||k.support.cors)return{send:function(i,o){var s,a,l=e.xhr();if(e.username?l.open(e.type,e.url,e.async,e.username,e.password):l.open(e.type,e.url,e.async),e.xhrFields)for(a in e.xhrFields)l[a]=e.xhrFields[a];e.mimeType&&l.overrideMimeType&&l.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(a in i)l.setRequestHeader(a,i[a])}catch(e){}l.send(e.hasContent&&e.data||null),t=function(i,n){var a,c,d,u;try{if(t&&(n||4===l.readyState))if(t=r,s&&(l.onreadystatechange=k.noop,Ft&&delete Lt[s]),n)4!==l.readyState&&l.abort();else{u={},a=l.status,c=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(u.text=l.responseText);try{d=l.statusText}catch(e){d=""}a||!e.isLocal||e.crossDomain?1223===a&&(a=204):a=u.text?200:404}}catch(e){n||o(-1,e)}u&&o(a,d,u,c)},e.async?4===l.readyState?setTimeout(t):(s=++Bt,Ft&&(Lt||(Lt={},k(n).unload(Ft)),Lt[s]=t),l.onreadystatechange=t):t()},abort:function(){t&&t(r,!0)}}});var Rt,Ht,qt=/^(?:toggle|show|hide)$/,Ut=new RegExp("^(?:([+-])=|)("+C+")([a-z%]*)$","i"),Vt=/queueHooks$/,Wt=[function(e,t,i){var o,n,r,s,a,l,c,d,u,h=this,p=e.style,f={},m=[],g=e.nodeType&&nt(e);for(n in i.queue||(null==(d=k._queueHooks(e,"fx")).unqueued&&(d.unqueued=0,u=d.empty.fire,d.empty.fire=function(){d.unqueued||u()}),d.unqueued++,h.always(function(){h.always(function(){d.unqueued--,k.queue(e,"fx").length||d.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(i.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===k.css(e,"display")&&"none"===k.css(e,"float")&&(k.support.inlineBlockNeedsLayout&&"inline"!==ct(e.nodeName)?p.zoom=1:p.display="inline-block")),i.overflow&&(p.overflow="hidden",k.support.shrinkWrapBlocks||h.always(function(){p.overflow=i.overflow[0],p.overflowX=i.overflow[1],p.overflowY=i.overflow[2]})),t)if(s=t[n],qt.exec(s)){if(delete t[n],l=l||"toggle"===s,s===(g?"hide":"show"))continue;m.push(n)}if(r=m.length){"hidden"in(a=k._data(e,"fxshow")||k._data(e,"fxshow",{}))&&(g=a.hidden),l&&(a.hidden=!g),g?k(e).show():h.done(function(){k(e).hide()}),h.done(function(){var t;for(t in k._removeData(e,"fxshow"),f)k.style(e,t,f[t])});for(n=0;n<r;n++)o=m[n],c=h.createTween(o,g?a[o]:0),f[o]=a[o]||k.style(e,o),o in a||(a[o]=c.start,g&&(c.end=c.start,c.start="width"===o||"height"===o?1:0))}}],Kt={"*":[function(e,t){var i,o,n=this.createTween(e,t),r=Ut.exec(t),s=n.cur(),a=+s||0,l=1,c=20;if(r){if(i=+r[2],"px"!==(o=r[3]||(k.cssNumber[e]?"":"px"))&&a){a=k.css(n.elem,e,!0)||i||1;do{a/=l=l||".5",k.style(n.elem,e,a+o)}while(l!==(l=n.cur()/s)&&1!==l&&--c)}n.unit=o,n.start=a,n.end=r[1]?a+(r[1]+1)*i:i}return n}]};function Xt(){return setTimeout(function(){Rt=r}),Rt=k.now()}function Gt(e,t,i){var o,n,r=0,s=Wt.length,a=k.Deferred().always(function(){delete l.elem}),l=function(){if(n)return!1;for(var t=Rt||Xt(),i=Math.max(0,c.startTime+c.duration-t),o=1-(i/c.duration||0),r=0,s=c.tweens.length;r<s;r++)c.tweens[r].run(o);return a.notifyWith(e,[c,o,i]),o<1&&s?i:(a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:k.extend({},t),opts:k.extend(!0,{specialEasing:{}},i),originalProperties:t,originalOptions:i,startTime:Rt||Xt(),duration:i.duration,tweens:[],createTween:function(t,i){var o=k.Tween(e,c.opts,t,i,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(o),o},stop:function(t){var i=0,o=t?c.tweens.length:0;if(n)return this;for(n=!0;i<o;i++)c.tweens[i].run(1);return t?a.resolveWith(e,[c,t]):a.rejectWith(e,[c,t]),this}}),d=c.props;for(function(e,t){var i,o,n,r,s;for(n in e)if(r=t[o=k.camelCase(n)],i=e[n],k.isArray(i)&&(r=i[1],i=e[n]=i[0]),n!==o&&(e[o]=i,delete e[n]),(s=k.cssHooks[o])&&"expand"in s)for(n in i=s.expand(i),delete e[o],i)n in e||(e[n]=i[n],t[n]=r);else t[o]=r}(d,c.opts.specialEasing);r<s;r++)if(o=Wt[r].call(c,e,d,c.opts))return o;return function(e,t){k.each(t,function(t,i){for(var o=(Kt[t]||[]).concat(Kt["*"]),n=0,r=o.length;n<r;n++)if(o[n].call(e,t,i))return})}(c,d),k.isFunction(c.opts.start)&&c.opts.start.call(e,c),k.fx.timer(k.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function Yt(e,t,i,o,n){return new Yt.prototype.init(e,t,i,o,n)}function Zt(e,t){var i,o={height:e},n=0;for(t=t?1:0;n<4;n+=2-t)o["margin"+(i=tt[n])]=o["padding"+i]=e;return t&&(o.opacity=o.width=e),o}function Qt(e){return k.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}k.Animation=k.extend(Gt,{tweener:function(e,t){k.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var i,o=0,n=e.length;o<n;o++)i=e[o],Kt[i]=Kt[i]||[],Kt[i].unshift(t)},prefilter:function(e,t){t?Wt.unshift(e):Wt.push(e)}}),k.Tween=Yt,Yt.prototype={constructor:Yt,init:function(e,t,i,o,n,r){this.elem=e,this.prop=i,this.easing=n||"swing",this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=r||(k.cssNumber[i]?"":"px")},cur:function(){var e=Yt.propHooks[this.prop];return e&&e.get?e.get(this):Yt.propHooks._default.get(this)},run:function(e){var t,i=Yt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):Yt.propHooks._default.set(this),this}},Yt.prototype.init.prototype=Yt.prototype,Yt.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[k.cssProps[e.prop]]||k.cssHooks[e.prop])?k.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yt.propHooks.scrollTop=Yt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.each(["toggle","show","hide"],function(e,t){var i=k.fn[t];k.fn[t]=function(e,o,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(Zt(t,!0),e,o,n)}}),k.fn.extend({fadeTo:function(e,t,i,o){return this.filter(nt).css("opacity",0).show().end().animate({opacity:t},e,i,o)},animate:function(e,t,i,o){var n=k.isEmptyObject(e),r=k.speed(t,i,o),s=function(){var t=Gt(this,k.extend({},e),r);s.finish=function(){t.stop(!0)},(n||k._data(this,"finish"))&&t.stop(!0)};return s.finish=s,n||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(e,t,i){var o=function(e){var t=e.stop;delete e.stop,t(i)};return"string"!=typeof e&&(i=t,t=e,e=r),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",r=k.timers,s=k._data(this);if(n)s[n]&&s[n].stop&&o(s[n]);else for(n in s)s[n]&&s[n].stop&&Vt.test(n)&&o(s[n]);for(n=r.length;n--;)r[n].elem!==this||null!=e&&r[n].queue!==e||(r[n].anim.stop(i),t=!1,r.splice(n,1));!t&&i||k.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,i=k._data(this),o=i[e+"queue"],n=i[e+"queueHooks"],r=k.timers,s=o?o.length:0;for(i.finish=!0,k.queue(this,e,[]),n&&n.cur&&n.cur.finish&&n.cur.finish.call(this),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;t<s;t++)o[t]&&o[t].finish&&o[t].finish.call(this);delete i.finish})}}),k.each({slideDown:Zt("show"),slideUp:Zt("hide"),slideToggle:Zt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){k.fn[e]=function(e,i,o){return this.animate(t,e,i,o)}}),k.speed=function(e,t,i){var o=e&&"object"==typeof e?k.extend({},e):{complete:i||!i&&t||k.isFunction(e)&&e,duration:e,easing:i&&t||t&&!k.isFunction(t)&&t};return o.duration=k.fx.off?0:"number"==typeof o.duration?o.duration:o.duration in k.fx.speeds?k.fx.speeds[o.duration]:k.fx.speeds._default,null!=o.queue&&!0!==o.queue||(o.queue="fx"),o.old=o.complete,o.complete=function(){k.isFunction(o.old)&&o.old.call(this),o.queue&&k.dequeue(this,o.queue)},o},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},k.timers=[],k.fx=Yt.prototype.init,k.fx.tick=function(){var e,t=k.timers,i=0;for(Rt=k.now();i<t.length;i++)(e=t[i])()||t[i]!==e||t.splice(i--,1);t.length||k.fx.stop(),Rt=r},k.fx.timer=function(e){e()&&k.timers.push(e)&&k.fx.start()},k.fx.interval=13,k.fx.start=function(){Ht||(Ht=setInterval(k.fx.tick,k.fx.interval))},k.fx.stop=function(){clearInterval(Ht),Ht=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fx.step={},k.expr&&k.expr.filters&&(k.expr.filters.animated=function(e){return k.grep(k.timers,function(t){return e===t.elem}).length}),k.fn.offset=function(e){if(arguments.length)return e===r?this:this.each(function(t){k.offset.setOffset(this,e,t)});var t,i,o={top:0,left:0},n=this[0],s=n&&n.ownerDocument;return s?(t=s.documentElement,k.contains(t,n)?(typeof n.getBoundingClientRect!==l&&(o=n.getBoundingClientRect()),i=Qt(s),{top:o.top+(i.pageYOffset||t.scrollTop)-(t.clientTop||0),left:o.left+(i.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):o):void 0},k.offset={setOffset:function(e,t,i){var o=k.css(e,"position");"static"===o&&(e.style.position="relative");var n,r,s=k(e),a=s.offset(),l=k.css(e,"top"),c=k.css(e,"left"),d={},u={};("absolute"===o||"fixed"===o)&&k.inArray("auto",[l,c])>-1?(n=(u=s.position()).top,r=u.left):(n=parseFloat(l)||0,r=parseFloat(c)||0),k.isFunction(t)&&(t=t.call(e,i,a)),null!=t.top&&(d.top=t.top-a.top+n),null!=t.left&&(d.left=t.left-a.left+r),"using"in t?t.using.call(e,d):s.css(d)}},k.fn.extend({position:function(){if(this[0]){var e,t,i={top:0,left:0},o=this[0];return"fixed"===k.css(o,"position")?t=o.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),k.nodeName(e[0],"html")||(i=e.offset()),i.top+=k.css(e[0],"borderTopWidth",!0),i.left+=k.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-k.css(o,"marginTop",!0),left:t.left-i.left-k.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||c.documentElement;e&&!k.nodeName(e,"html")&&"static"===k.css(e,"position");)e=e.offsetParent;return e||c.documentElement})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var i=/Y/.test(t);k.fn[e]=function(o){return k.access(this,function(e,o,n){var s=Qt(e);if(n===r)return s?t in s?s[t]:s.document.documentElement[o]:e[o];s?s.scrollTo(i?k(s).scrollLeft():n,i?n:k(s).scrollTop()):e[o]=n},e,o,arguments.length,null)}}),k.each({Height:"height",Width:"width"},function(e,t){k.each({padding:"inner"+e,content:t,"":"outer"+e},function(i,o){k.fn[o]=function(o,n){var s=arguments.length&&(i||"boolean"!=typeof o),a=i||(!0===o||!0===n?"margin":"border");return k.access(this,function(t,i,o){var n;return k.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(n=t.documentElement,Math.max(t.body["scroll"+e],n["scroll"+e],t.body["offset"+e],n["offset"+e],n["client"+e])):o===r?k.css(t,i,a):k.style(t,i,o,a)},t,s?o:r,s,null)}})}),n.jQuery=n.$=k,i.amdO.jQuery&&((o=function(){return k}.apply(t,[]))===r||(e.exports=o))}(window)},131(e,t,i){var o,n,r,s;r=this,s=document,o=[i(146)],n=function(e){return function(e,t,i,o){!function(e){e.mobile={}}(e),function(e,t){var o={};e.mobile=e.extend(e.mobile,{version:"1.3.2",ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:250,touchOverflowEnabled:!1,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"e",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,orientationChangeEnabled:!0,buttonMarkup:{hoverDelay:200},window:e(t),document:e(i),keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},behaviors:{},silentScroll:function(i){"number"!==e.type(i)&&(i=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,i),e.mobile.document.trigger("silentscroll",{x:0,y:i})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},nsNormalizeDict:o,nsNormalize:function(t){return t?o[t]||(o[t]=e.camelCase(e.mobile.ns+t)):void 0},getInheritedTheme:function(e,t){for(var i,o,n=e[0],r="",s=/ui-(bar|body|overlay)-([a-z])\b/;n&&!((i=n.className||"")&&(o=s.exec(i))&&(r=o[2]));)n=n.parentNode;return r||t||"a"},closestPageData:function(e){return e.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("mobile-page")},enhanceable:function(e){return this.haveParents(e,"enhance")},hijackable:function(e){return this.haveParents(e,"ajax")},haveParents:function(t,i){if(!e.mobile.ignoreContentEnabled)return t;for(var o,n,r,s=t.length,a=e(),l=0;s>l;l++){for(n=t.eq(l),r=!1,o=t[l];o;){if("false"===(o.getAttribute?o.getAttribute("data-"+e.mobile.ns+i):"")){r=!0;break}o=o.parentNode}r||(a=a.add(n))}return a},getScreenHeight:function(){return t.innerHeight||e.mobile.window.height()}},e.mobile),e.fn.jqmData=function(t,i){var o;return void 0!==t&&(t&&(t=e.mobile.nsNormalize(t)),o=arguments.length<2||void 0===i?this.data(t):this.data(t,i)),o},e.jqmData=function(t,i,o){var n;return void 0!==i&&(n=e.data(t,i?e.mobile.nsNormalize(i):i,o)),n},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,i){return e.removeData(t,e.mobile.nsNormalize(i))},e.fn.removeWithDependents=function(){e.removeWithDependents(this)},e.removeWithDependents=function(t){var i=e(t);(i.jqmData("dependents")||e()).remove(),i.remove()},e.fn.addDependents=function(t){e.addDependents(e(this),t)},e.addDependents=function(t,i){var o=e(t).jqmData("dependents")||e();e(t).jqmData("dependents",e.merge(o,i))},e.fn.getEncodedText=function(){return e("<div/>").text(e(this).text()).html()},e.fn.jqmEnhanceable=function(){return e.mobile.enhanceable(this)},e.fn.jqmHijackable=function(){return e.mobile.hijackable(this)};var n=e.find,r=/:jqmData\(([^)]*)\)/g;e.find=function(t,i,o,s){return t=t.replace(r,"[data-"+(e.mobile.ns||"")+"$1]"),n.call(this,t,i,o,s)},e.extend(e.find,n),e.find.matches=function(t,i){return e.find(t,null,null,i)},e.find.matchesSelector=function(t,i){return e.find(i,null,null,[t]).length>0}}(e,this),function(e,t){var i=0,o=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,o=0;null!=(i=t[o]);o++)try{e(i).triggerHandler("remove")}catch(e){}n(t)},e.widget=function(t,i,o){var n,r,s,a,l=t.split(".")[0];t=t.split(".")[1],n=l+"-"+t,o||(o=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},r=e[l][t],s=e[l][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new s(e,t)},e.extend(s,r,{version:o.version,_proto:e.extend({},o),_childConstructors:[]}),(a=new i).options=e.widget.extend({},a.options),e.each(o,function(t,n){e.isFunction(n)&&(o[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},o=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,r=this._superApply;return this._super=e,this._superApply=o,t=n.apply(this,arguments),this._super=i,this._superApply=r,t}}())}),s.prototype=e.widget.extend(a,{widgetEventPrefix:r?a.widgetEventPrefix:t},o,{constructor:s,namespace:l,widgetName:t,widgetFullName:n}),r?(e.each(r._childConstructors,function(t,i){var o=i.prototype;e.widget(o.namespace+"."+o.widgetName,s,i._proto)}),delete r._childConstructors):i._childConstructors.push(s),e.widget.bridge(t,s)},e.widget.extend=function(i){for(var n,r,s=o.call(arguments,1),a=0,l=s.length;l>a;a++)for(n in s[a])r=s[a][n],s[a].hasOwnProperty(n)&&r!==t&&(i[n]=e.isPlainObject(r)?e.isPlainObject(i[n])?e.widget.extend({},i[n],r):e.widget.extend({},r):r);return i},e.widget.bridge=function(i,n){var r=n.prototype.widgetFullName||i;e.fn[i]=function(s){var a="string"==typeof s,l=o.call(arguments,1),c=this;return s=!a&&l.length?e.widget.extend.apply(null,[s].concat(l)):s,a?this.each(function(){var o,n=e.data(this,r);return n?e.isFunction(n[s])&&"_"!==s.charAt(0)?(o=n[s].apply(n,l))!==n&&o!==t?(c=o&&o.jquery?c.pushStack(o.get()):o,!1):void 0:e.error("no such method '"+s+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+s+"'")}):this.each(function(){var t=e.data(this,r);t?t.option(s||{})._init():e.data(this,r,new n(s,this))}),c}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,o){o=e(o||this.defaultElement||this)[0],this.element=e(o),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),o!==this&&(e.data(o,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===o&&this.destroy()}}),this.document=e(o.style?o.ownerDocument:o.document||o),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,o){var n,r,s,a=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(a={},n=i.split("."),i=n.shift(),n.length){for(r=a[i]=e.widget.extend({},this.options[i]),s=0;s<n.length-1;s++)r[n[s]]=r[n[s]]||{},r=r[n[s]];if(i=n.pop(),o===t)return r[i]===t?null:r[i];r[i]=o}else{if(o===t)return this.options[i]===t?null:this.options[i];a[i]=o}return this._setOptions(a),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,i,o){var n,r=this;"boolean"!=typeof t&&(o=i,i=t,t=!1),o?(i=n=e(i),this.bindings=this.bindings.add(i)):(o=i,i=this.element,n=this.widget()),e.each(o,function(o,s){function a(){return t||!0!==r.options.disabled&&!e(this).hasClass("ui-state-disabled")?("string"==typeof s?r[s]:s).apply(r,arguments):void 0}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||e.guid++);var l=o.match(/^(\w+)\s*(.*)$/),c=l[1]+r.eventNamespace,d=l[2];d?n.delegate(d,c,a):i.bind(c,a)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){var i=this;return setTimeout(function(){return("string"==typeof e?i[e]:e).apply(i,arguments)},t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,o){var n,r,s=this.options[t];if(o=o||{},(i=e.Event(i)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],r=i.originalEvent)for(n in r)n in i||(i[n]=r[n]);return this.element.trigger(i,o),!(e.isFunction(s)&&!1===s.apply(this.element[0],[i].concat(o))||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(o,n,r){"string"==typeof n&&(n={effect:n});var s,a=n?!0===n||"number"==typeof n?i:n.effect||i:t;"number"==typeof(n=n||{})&&(n={duration:n}),s=!e.isEmptyObject(n),n.complete=r,n.delay&&o.delay(n.delay),s&&e.effects&&e.effects.effect[a]?o[t](n):a!==t&&o[a]?o[a](n.duration,n.easing,r):o.queue(function(i){e(this)[t](),r&&r.call(o[0]),i()})}})}(e),function(e){e.widget("mobile.widget",{_createWidget:function(){e.Widget.prototype._createWidget.apply(this,arguments),this._trigger("init")},_getCreateOptions:function(){var t=this.element,i={};return e.each(this.options,function(e){var o=t.jqmData(e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}));void 0!==o&&(i[e]=o)}),i},enhanceWithin:function(t,i){this.enhance(e(this.options.initSelector,e(t)),i)},enhance:function(t,i){var o,n,r=e(t);r=e.mobile.enhanceable(r),i&&r.length&&(n=(o=e.mobile.closestPageData(r))&&o.keepNativeSelector()||"",r=r.not(n)),r[this.widgetName]()},raise:function(e){throw"Widget ["+this.widgetName+"]: "+e}})}(e),function(e){e.extend(e.mobile,{loadingMessageTextVisible:o,loadingMessageTheme:o,loadingMessage:o,showPageLoadingMsg:function(t,i,o){e.mobile.loading("show",t,i,o)},hidePageLoadingMsg:function(){e.mobile.loading("hide")},loading:function(){this.loaderWidget.loader.apply(this.loaderWidget,arguments)}});var t="ui-loader",i=e("html"),n=e.mobile.window;e.widget("mobile.loader",{options:{theme:"a",textVisible:!1,html:"",text:"loading"},defaultHtml:"<div class='"+t+"'><span class='ui-icon ui-icon-loading'></span><h1></h1></div>",fakeFixLoader:function(){var t=e("."+e.mobile.activeBtnClass).first();this.element.css({top:e.support.scrollTop&&n.scrollTop()+n.height()/2||t.length&&t.offset().top||100})},checkLoaderPosition:function(){var t=this.element.offset(),i=n.scrollTop(),o=e.mobile.getScreenHeight();(t.top<i||t.top-i>o)&&(this.element.addClass("ui-loader-fakefix"),this.fakeFixLoader(),n.unbind("scroll",this.checkLoaderPosition).bind("scroll",e.proxy(this.fakeFixLoader,this)))},resetHtml:function(){this.element.html(e(this.defaultHtml).html())},show:function(r,s,a){var l,c,d;this.resetHtml(),"object"===e.type(r)?r=(d=e.extend({},this.options,r)).theme||e.mobile.loadingMessageTheme:(d=this.options,r=r||e.mobile.loadingMessageTheme||d.theme),c=s||e.mobile.loadingMessage||d.text,i.addClass("ui-loading"),(!1!==e.mobile.loadingMessage||d.html)&&(l=e.mobile.loadingMessageTextVisible!==o?e.mobile.loadingMessageTextVisible:d.textVisible,this.element.attr("class",t+" ui-corner-all ui-body-"+r+" ui-loader-"+(l||s||r.text?"verbose":"default")+(d.textonly||a?" ui-loader-textonly":"")),d.html?this.element.html(d.html):this.element.find("h1").text(c),this.element.appendTo(e.mobile.pageContainer),this.checkLoaderPosition(),n.bind("scroll",e.proxy(this.checkLoaderPosition,this)))},hide:function(){i.removeClass("ui-loading"),e.mobile.loadingMessage&&this.element.removeClass("ui-loader-fakefix"),e.mobile.window.unbind("scroll",this.fakeFixLoader),e.mobile.window.unbind("scroll",this.checkLoaderPosition)}}),n.bind("pagecontainercreate",function(){e.mobile.loaderWidget=e.mobile.loaderWidget||e(e.mobile.loader.prototype.defaultHtml).loader()})}(e),function(e,t,o){function n(e){return"#"+(e=e||location.href).replace(/^[^#]*#?(.*)$/,"$1")}var r,s="hashchange",a=i,l=e.event.special,c=a.documentMode,d="on"+s in t&&(c===o||c>7);e.fn[s]=function(e){return e?this.bind(s,e):this.trigger(s)},e.fn[s].delay=50,l[s]=e.extend(l[s],{setup:function(){return!d&&void e(r.start)},teardown:function(){return!d&&void e(r.stop)}}),r=function(){function i(){var o=n(),a=p(c);o!==c?(h(c=o,a),e(t).trigger(s)):a!==c&&(location.href=location.href.replace(/#.*/,"")+a),r=setTimeout(i,e.fn[s].delay)}var r,l={},c=n(),u=function(e){return e},h=u,p=u;return l.start=function(){r||i()},l.stop=function(){r&&clearTimeout(r),r=o},t.attachEvent&&!t.addEventListener&&!d&&function(){var t,o;l.start=function(){t||(o=(o=e.fn[s].src)&&o+n(),t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){o||h(n()),i()}).attr("src",o||"javascript:0").insertAfter("body")[0].contentWindow,a.onpropertychange=function(){try{"title"===event.propertyName&&(t.document.title=a.title)}catch(e){}})},l.stop=u,p=function(){return n(t.location.href)},h=function(i,o){var n=t.document,r=e.fn[s].domain;i!==o&&(n.title=a.title,n.open(),r&&n.write('<script>document.domain="'+r+'"<\/script>'),n.close(),t.location.hash=i)}}(),l}()}(e,this),function(e){t.matchMedia=t.matchMedia||function(e){var t,i=e.documentElement,o=i.firstElementChild||i.firstChild,n=e.createElement("body"),r=e.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",n.style.background="none",n.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',i.insertBefore(n,o),t=42===r.offsetWidth,i.removeChild(n),{matches:t,media:e}}}(i),e.mobile.media=function(e){return t.matchMedia(e).matches}}(e),function(e){var t={touch:"ontouchend"in i};e.mobile.support=e.mobile.support||{},e.extend(e.support,t),e.extend(e.mobile.support,t)}(e),function(e){e.extend(e.support,{orientation:"orientation"in t&&"onorientationchange"in t})}(e),function(e,o){function n(e){var t=e.charAt(0).toUpperCase()+e.substr(1),i=(e+" "+a.join(t+" ")+t).split(" ");for(var n in i)if(s[i[n]]!==o)return!0}var r=e("<body>").prependTo("html"),s=r[0].style,a=["Webkit","Moz","O"],l="palmGetResource"in t,c=t.opera,d=t.operamini&&"[object OperaMini]"==={}.toString.call(t.operamini),u=t.blackberry&&!n("-webkit-transform");e.extend(e.mobile,{browser:{}}),e.mobile.browser.oldIE=function(){var e=3,t=i.createElement("div"),o=t.all||[];do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><br><![endif]--\x3e"}while(o[0]);return e>4?e:!e}(),e.extend(e.support,{cssTransitions:"WebKitTransitionEvent"in t||function(e,t,o){for(var n,r=i.createElement("div"),s=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},l=function(i){var o=function(e){return""===e?"":"-"+e.charAt(0).toLowerCase()+e.substr(1)+"-"}(i)+e+": "+t+";",a=s(i),l=a+(""===a?e:s(e));r.setAttribute("style",o),r.style[l]&&(n=!0)},c=o||a,d=0;d<c.length;d++)l(c[d]);return!!n}("transition","height 100ms linear",["Webkit","Moz",""])&&!e.mobile.browser.oldIE&&!c,pushState:"pushState"in history&&"replaceState"in history&&!(t.navigator.userAgent.indexOf("Firefox")>=0&&t.top!==t)&&-1===t.navigator.userAgent.search(/CriOS/),mediaquery:e.mobile.media("only all"),cssPseudoElement:!!n("content"),touchOverflow:!!n("overflowScrolling"),cssTransform3d:function(){var n="transform-3d",s=e.mobile.media("(-"+a.join("-"+n+"),(-")+"-"+n+"),("+n+")");if(s)return!!s;var l=i.createElement("div"),c={MozTransform:"-moz-transform",transform:"transform"};for(var d in r.append(l),c)l.style[d]!==o&&(l.style[d]="translate3d( 100px, 1px, 1px )",s=t.getComputedStyle(l).getPropertyValue(c[d]));return!!s&&"none"!==s}(),boxShadow:!!n("boxShadow")&&!u,fixedPosition:function(){var e=t,i=navigator.userAgent,o=navigator.platform,n=i.match(/AppleWebKit\/([0-9]+)/),r=!!n&&n[1],s=i.match(/Fennec\/([0-9]+)/),a=!!s&&s[1],l=i.match(/Opera Mobi\/([0-9]+)/),c=!!l&&l[1];return!((o.indexOf("iPhone")>-1||o.indexOf("iPad")>-1||o.indexOf("iPod")>-1)&&r&&534>r||e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)||l&&7458>c||i.indexOf("Android")>-1&&r&&533>r||a&&6>a||"palmGetResource"in t&&r&&534>r||i.indexOf("MeeGo")>-1&&i.indexOf("NokiaBrowser/8.5.0")>-1)}(),scrollTop:("pageXOffset"in t||"scrollTop"in i.documentElement||"scrollTop"in r[0])&&!l&&!d,dynamicBaseTag:function(){var t,i=location.protocol+"//"+location.host+location.pathname+"ui-dir/",o=e("head base"),n=null,s="";return o.length?s=o.attr("href"):o=n=e("<base>",{href:i}).appendTo("head"),t=e("<a href='testurl' />").prependTo(r)[0].href,o[0].href=s||location.pathname,n&&n.remove(),0===t.indexOf(i)}(),cssPointerEvents:function(){var e,o=i.createElement("x"),n=i.documentElement,r=t.getComputedStyle;return"pointerEvents"in o.style&&(o.style.pointerEvents="auto",o.style.pointerEvents="x",n.appendChild(o),e=r&&"auto"===r(o,"").pointerEvents,n.removeChild(o),!!e)}(),boundingRect:void 0!==i.createElement("div").getBoundingClientRect}),r.remove();var h=function(){var e=t.navigator.userAgent;return e.indexOf("Nokia")>-1&&(e.indexOf("Symbian/3")>-1||e.indexOf("Series60/5")>-1)&&e.indexOf("AppleWebKit")>-1&&e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}();e.mobile.gradeA=function(){return(e.support.mediaquery||e.mobile.browser.oldIE&&e.mobile.browser.oldIE>=7)&&(e.support.boundingRect||null!==e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))},e.mobile.ajaxBlacklist=t.blackberry&&!t.WebKitPoint||d||h,h&&e(function(){e("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),e.support.boxShadow||e("html").addClass("ui-mobile-nosupport-boxshadow")}(e),function(e){var t,i=e.mobile.window;e.event.special.navigate=t={bound:!1,pushStateEnabled:!0,originalEventName:void 0,isPushStateEnabled:function(){return e.support.pushState&&!0===e.mobile.pushStateEnabled&&this.isHashChangeEnabled()},isHashChangeEnabled:function(){return!0===e.mobile.hashListeningEnabled},popstate:function(t){var o=new e.Event("navigate"),n=new e.Event("beforenavigate"),r=t.originalEvent.state||{};location.href,i.trigger(n),n.isDefaultPrevented()||(t.historyState&&e.extend(r,t.historyState),o.originalEvent=t,setTimeout(function(){i.trigger(o,{state:r})},0))},hashchange:function(t){var o=new e.Event("navigate"),n=new e.Event("beforenavigate");i.trigger(n),n.isDefaultPrevented()||(o.originalEvent=t,i.trigger(o,{state:t.hashchangeState||{}}))},setup:function(){t.bound||(t.bound=!0,t.isPushStateEnabled()?(t.originalEventName="popstate",i.bind("popstate.navigate",t.popstate)):t.isHashChangeEnabled()&&(t.originalEventName="hashchange",i.bind("hashchange.navigate",t.hashchange)))}}}(e),function(e,i){var o,n,r="&ui-state=dialog";e.mobile.path=o={uiStateKey:"&ui-state",urlParseRE:/^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,getLocation:function(e){var t=e?this.parseUrl(e):location,i=this.parseUrl(e||location.href).hash;return i="#"===i?"":i,t.protocol+"//"+t.host+t.pathname+t.search+i},parseLocation:function(){return this.parseUrl(this.getLocation())},parseUrl:function(t){if("object"===e.type(t))return t;var i=o.urlParseRE.exec(t||"")||[];return{href:i[0]||"",hrefNoHash:i[1]||"",hrefNoSearch:i[2]||"",domain:i[3]||"",protocol:i[4]||"",doubleSlash:i[5]||"",authority:i[6]||"",username:i[8]||"",password:i[9]||"",host:i[10]||"",hostname:i[11]||"",port:i[12]||"",pathname:i[13]||"",directory:i[14]||"",filename:i[15]||"",search:i[16]||"",hash:i[17]||""}},makePathAbsolute:function(e,t){if(e&&"/"===e.charAt(0))return e;e=e||"";for(var i=(t=t?t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"")?t.split("/"):[],o=e.split("/"),n=0;n<o.length;n++){var r=o[n];switch(r){case".":break;case"..":i.length&&i.pop();break;default:i.push(r)}}return"/"+i.join("/")},isSameDomain:function(e,t){return o.parseUrl(e).domain===o.parseUrl(t).domain},isRelativeUrl:function(e){return""===o.parseUrl(e).protocol},isAbsoluteUrl:function(e){return""!==o.parseUrl(e).protocol},makeUrlAbsolute:function(e,t){if(!o.isRelativeUrl(e))return e;t===i&&(t=this.documentBase);var n=o.parseUrl(e),r=o.parseUrl(t),s=n.protocol||r.protocol,a=n.protocol?n.doubleSlash:n.doubleSlash||r.doubleSlash,l=n.authority||r.authority,c=""!==n.pathname;return s+a+l+o.makePathAbsolute(n.pathname||r.filename,r.pathname)+(n.search||!c&&r.search||"")+n.hash},addSearchParams:function(t,i){var n=o.parseUrl(t),r="object"==typeof i?e.param(i):i,s=n.search||"?";return n.hrefNoSearch+s+("?"!==s.charAt(s.length-1)?"&":"")+r+(n.hash||"")},convertUrlToDataUrl:function(e){var i=o.parseUrl(e);return o.isEmbeddedPage(i)?i.hash.split(r)[0].replace(/^#/,"").replace(/\?.*$/,""):o.isSameDomain(i,this.documentBase)?i.hrefNoHash.replace(this.documentBase.domain,"").split(r)[0]:t.decodeURIComponent(e)},get:function(e){return e===i&&(e=o.parseLocation().hash),o.stripHash(e).replace(/[^\/]*\.[^\/*]+$/,"")},set:function(e){location.hash=e},isPath:function(e){return/\//.test(e)},clean:function(e){return e.replace(this.documentBase.domain,"")},stripHash:function(e){return e.replace(/^#/,"")},stripQueryParams:function(e){return e.replace(/\?.*$/,"")},cleanHash:function(e){return o.stripHash(e.replace(/\?.*$/,"").replace(r,""))},isHashValid:function(e){return/^#[^#]+$/.test(e)},isExternal:function(e){var t=o.parseUrl(e);return!(!t.protocol||t.domain===this.documentUrl.domain)},hasProtocol:function(e){return/^(:?\w+:)/.test(e)},isEmbeddedPage:function(e){var t=o.parseUrl(e);return""!==t.protocol?!this.isPath(t.hash)&&t.hash&&(t.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&t.hrefNoHash===this.documentBase.hrefNoHash):/^#/.test(t.href)},squash:function(e,t){var i,n,r,s,a=this.isPath(e),l=this.parseUrl(e),c=l.hash,d="";return t=t||(o.isPath(e)?o.getLocation():o.getDocumentUrl()),n=a?o.stripHash(e):e,(s=(n=o.isPath(l.hash)?o.stripHash(l.hash):n).indexOf(this.uiStateKey))>-1&&(d=n.slice(s),n=n.slice(0,s)),i=o.makeUrlAbsolute(n,t),r=this.parseUrl(i).search,a?((o.isPath(c)||0===c.replace("#","").indexOf(this.uiStateKey))&&(c=""),d&&-1===c.indexOf(this.uiStateKey)&&(c+=d),-1===c.indexOf("#")&&""!==c&&(c="#"+c),i=(i=o.parseUrl(i)).protocol+"//"+i.host+i.pathname+r+c):i+=i.indexOf("#")>-1?d:"#"+d,i},isPreservableHash:function(e){return 0===e.replace("#","").indexOf(this.uiStateKey)}},o.documentUrl=o.parseLocation(),n=e("head").find("base"),o.documentBase=n.length?o.parseUrl(o.makeUrlAbsolute(n.attr("href"),o.documentUrl.href)):o.documentUrl,o.documentBaseDiffers=o.documentUrl.hrefNoHash!==o.documentBase.hrefNoHash,o.getDocumentUrl=function(t){return t?e.extend({},o.documentUrl):o.documentUrl.href},o.getDocumentBase=function(t){return t?e.extend({},o.documentBase):o.documentBase.href}}(e),function(e,t){e.mobile.path,e.mobile.History=function(e,t){this.stack=e||[],this.activeIndex=t||0},e.extend(e.mobile.History.prototype,{getActive:function(){return this.stack[this.activeIndex]},getLast:function(){return this.stack[this.previousIndex]},getNext:function(){return this.stack[this.activeIndex+1]},getPrev:function(){return this.stack[this.activeIndex-1]},add:function(e,t){t=t||{},this.getNext()&&this.clearForward(),t.hash&&-1===t.hash.indexOf("#")&&(t.hash="#"+t.hash),t.url=e,this.stack.push(t),this.activeIndex=this.stack.length-1},clearForward:function(){this.stack=this.stack.slice(0,this.activeIndex+1)},find:function(e,t,i){var o,n,r,s=(t=t||this.stack).length;for(n=0;s>n;n++)if(o=t[n],(decodeURIComponent(e)===decodeURIComponent(o.url)||decodeURIComponent(e)===decodeURIComponent(o.hash))&&(r=n,i))return r;return r},closest:function(e){var i,o=this.activeIndex;return(i=this.find(e,this.stack.slice(0,o)))===t&&(i=(i=this.find(e,this.stack.slice(o),!0))===t?i:i+o),i},direct:function(i){var o=this.closest(i.url),n=this.activeIndex;o!==t&&(this.activeIndex=o,this.previousIndex=n),n>o?(i.present||i.back||e.noop)(this.getActive(),"back"):o>n?(i.present||i.forward||e.noop)(this.getActive(),"forward"):o===t&&i.missing&&i.missing(this.getActive())}})}(e),function(e){var o=e.mobile.path,n=location.href;e.mobile.Navigator=function(t){this.history=t,this.ignoreInitialHashChange=!0,e.mobile.window.bind({"popstate.history":e.proxy(this.popstate,this),"hashchange.history":e.proxy(this.hashchange,this)})},e.extend(e.mobile.Navigator.prototype,{squash:function(n,r){var s,a,l=o.isPath(n)?o.stripHash(n):n;return a=o.squash(n),s=e.extend({hash:l,url:a},r),t.history.replaceState(s,s.title||i.title,a),s},hash:function(e,t){var i,n,r;if(i=o.parseUrl(e),(n=o.parseLocation()).pathname+n.search===i.pathname+i.search)r=i.hash?i.hash:i.pathname+i.search;else if(o.isPath(e)){var s=o.parseUrl(t);r=s.pathname+s.search+(o.isPreservableHash(s.hash)?s.hash.replace("#",""):"")}else r=e;return r},go:function(n,r,s){var a,l,c,d,u=e.event.special.navigate.isPushStateEnabled();l=o.squash(n),c=this.hash(n,l),s&&c!==o.stripHash(o.parseLocation().hash)&&(this.preventNextHashChange=s),this.preventHashAssignPopState=!0,t.location.hash=c,this.preventHashAssignPopState=!1,a=e.extend({url:l,hash:c,title:i.title},r),u&&((d=new e.Event("popstate")).originalEvent={type:"popstate",state:null},this.squash(n,a),s||(this.ignorePopState=!0,e.mobile.window.trigger(d))),this.history.add(a.url,a)},popstate:function(t){var i,r;if(e.event.special.navigate.isPushStateEnabled())return this.preventHashAssignPopState?(this.preventHashAssignPopState=!1,void t.stopImmediatePropagation()):this.ignorePopState?void(this.ignorePopState=!1):!t.originalEvent.state&&1===this.history.stack.length&&this.ignoreInitialHashChange&&(this.ignoreInitialHashChange=!1,location.href===n)?void t.preventDefault():(i=o.parseLocation().hash,!t.originalEvent.state&&i?(r=this.squash(i),this.history.add(r.url,r),void(t.historyState=r)):void this.history.direct({url:(t.originalEvent.state||{}).url||i,present:function(i,o){t.historyState=e.extend({},i),t.historyState.direction=o}}))},hashchange:function(t){var n,r;if(e.event.special.navigate.isHashChangeEnabled()&&!e.event.special.navigate.isPushStateEnabled()){if(this.preventNextHashChange)return this.preventNextHashChange=!1,void t.stopImmediatePropagation();n=this.history,r=o.parseLocation().hash,this.history.direct({url:r,present:function(i,o){t.hashchangeState=e.extend({},i),t.hashchangeState.direction=o},missing:function(){n.add(r,{hash:r,title:i.title})}})}}})}(e),function(e){e.mobile.navigate=function(t,i,o){e.mobile.navigate.navigator.go(t,i,o)},e.mobile.navigate.history=new e.mobile.History,e.mobile.navigate.navigator=new e.mobile.Navigator(e.mobile.navigate.history);var t=e.mobile.path.parseLocation();e.mobile.navigate.history.add(t.href,{hash:t.hash})}(e),function(e,t,i){function o(e){for(;e&&void 0!==e.originalEvent;)e=e.originalEvent;return e}function n(t,i){var n,r,s,a,l,c,d,u,h,p=t.type;if((t=e.Event(t)).type=i,n=t.originalEvent,r=e.event.props,p.search(/^(mouse|click)/)>-1&&(r=S),n)for(d=r.length;d;)t[a=r[--d]]=n[a];if(p.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1),-1!==p.search(/^touch/)&&(p=(s=o(n)).touches,l=s.changedTouches,c=p&&p.length?p[0]:l&&l.length?l[0]:void 0))for(u=0,h=k.length;h>u;u++)t[a=k[u]]=c[a];return t}function r(t){for(var i,o,n={};t;){for(o in i=e.data(t,x))i[o]&&(n[o]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function s(){M=!0}function a(){M=!1}function l(){c(),A=setTimeout(function(){A=0,N=0,D.length=0,z=!1,s()},e.vmouse.resetTimerDuration)}function c(){A&&(clearTimeout(A),A=0)}function d(t,i,o){var r;return(o&&o[t]||!o&&function(t,i){for(var o;t;){if((o=e.data(t,x))&&(!i||o[i]))return t;t=t.parentNode}return null}(i.target,t))&&(r=n(i,t),e(i.target).trigger(r)),r}function u(t){var i=e.data(t.target,_);if(!(z||N&&N===i)){var o=d("v"+t.type,t);o&&(o.isDefaultPrevented()&&t.preventDefault(),o.isPropagationStopped()&&t.stopPropagation(),o.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}}function h(t){var i,n,s=o(t).touches;if(s&&1===s.length&&(n=r(i=t.target)).hasVirtualBinding){N=L++,e.data(i,_,N),c(),a(),P=!1;var l=o(t).touches[0];E=l.pageX,$=l.pageY,d("vmouseover",t,n),d("vmousedown",t,n)}}function p(e){M||(P||d("vmousecancel",e,r(e.target)),P=!0,l())}function f(t){if(!M){var i=o(t).touches[0],n=P,s=e.vmouse.moveDistanceThreshold,a=r(t.target);(P=P||Math.abs(i.pageX-E)>s||Math.abs(i.pageY-$)>s)&&!n&&d("vmousecancel",t,a),d("vmousemove",t,a),l()}}function m(e){if(!M){s();var t,i=r(e.target);if(d("vmouseup",e,i),!P){var n=d("vclick",e,i);n&&n.isDefaultPrevented()&&(t=o(e).changedTouches[0],D.push({touchID:N,x:t.clientX,y:t.clientY}),z=!0)}d("vmouseout",e,i),P=!1,l()}}function g(t){var i,o=e.data(t,x);if(o)for(i in o)if(o[i])return!0;return!1}function b(){}function v(t){var i=t.substr(1);return{setup:function(){g(this)||e.data(this,x,{}),e.data(this,x)[t]=!0,T[t]=(T[t]||0)+1,1===T[t]&&I.bind(i,u),e(this).bind(i,b),O&&(T.touchstart=(T.touchstart||0)+1,1===T.touchstart&&I.bind("touchstart",h).bind("touchend",m).bind("touchmove",f).bind("scroll",p))},teardown:function(){--T[t],T[t]||I.unbind(i,u),O&&(--T.touchstart,T.touchstart||I.unbind("touchstart",h).unbind("touchmove",f).unbind("touchend",m).unbind("scroll",p));var o=e(this),n=e.data(this,x);n&&(n[t]=!1),o.unbind(i,b),g(this)||o.removeData(x)}}}var y,x="virtualMouseBindings",_="virtualTouchID",w="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),k="clientX clientY pageX pageY screenX screenY".split(" "),C=e.event.mouseHooks?e.event.mouseHooks.props:[],S=e.event.props.concat(C),T={},A=0,E=0,$=0,P=!1,D=[],z=!1,M=!1,O="addEventListener"in i,I=e(i),L=1,N=0;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var B=0;B<w.length;B++)e.event.special[w[B]]=v(w[B]);O&&i.addEventListener("click",function(t){var i,o,n,r,s,a=D.length,l=t.target;if(a)for(i=t.clientX,o=t.clientY,y=e.vmouse.clickDistanceThreshold,n=l;n;){for(r=0;a>r;r++)if(s=D[r],n===l&&Math.abs(s.x-i)<y&&Math.abs(s.y-o)<y||e.data(n,_)===s.touchID)return t.preventDefault(),void t.stopPropagation();n=n.parentNode}},!0)}(e,0,i),function(e){function t(t,i,o){var n=o.type;o.type=i,e.event.dispatch.call(t,o),o.type=n}var o=e(i);e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,i){e.fn[i]=function(e){return e?this.bind(i,e):this.trigger(i)},e.attrFn&&(e.attrFn[i]=!0)});var n=e.mobile.support.touch,r=n?"touchstart":"mousedown",s=n?"touchend":"mouseup",a=n?"touchmove":"mousemove";e.event.special.scrollstart={enabled:!0,setup:function(){function i(e,i){t(r,(o=i)?"scrollstart":"scrollstop",e)}var o,n,r=this;e(r).bind("touchmove scroll",function(t){e.event.special.scrollstart.enabled&&(o||i(t,!0),clearTimeout(n),n=setTimeout(function(){i(t,!1)},50))})}},e.event.special.tap={tapholdThreshold:750,setup:function(){var i=this,n=e(i);n.bind("vmousedown",function(r){function s(){clearTimeout(c)}function a(){s(),n.unbind("vclick",l).unbind("vmouseup",s),o.unbind("vmousecancel",a)}function l(e){a(),d===e.target&&t(i,"tap",e)}if(r.which&&1!==r.which)return!1;var c,d=r.target;r.originalEvent,n.bind("vmouseup",s).bind("vclick",l),o.bind("vmousecancel",a),c=setTimeout(function(){t(i,"taphold",e.Event("taphold",{target:d}))},e.event.special.tap.tapholdThreshold)})}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(t){var i=t.originalEvent.touches?t.originalEvent.touches[0]:t;return{time:(new Date).getTime(),coords:[i.pageX,i.pageY],origin:e(t.target)}},stop:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e;return{time:(new Date).getTime(),coords:[t.pageX,t.pageY]}},handleSwipe:function(t,i){i.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-i.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-i.coords[1])<e.event.special.swipe.verticalDistanceThreshold&&t.origin.trigger("swipe").trigger(t.coords[0]>i.coords[0]?"swipeleft":"swiperight")},setup:function(){var t=e(this);t.bind(r,function(i){function o(t){r&&(n=e.event.special.swipe.stop(t),Math.abs(r.coords[0]-n.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault())}var n,r=e.event.special.swipe.start(i);t.bind(a,o).one(s,function(){t.unbind(a,o),r&&n&&e.event.special.swipe.handleSwipe(r,n),r=n=void 0})})}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,i){e.event.special[t]={setup:function(){e(this).bind(i,e.noop)}}})}(e),function(e){e.event.special.throttledresize={setup:function(){e(this).bind("resize",n)},teardown:function(){e(this).unbind("resize",n)}};var t,i,o,n=function(){i=(new Date).getTime(),(o=i-r)>=250?(r=i,e(this).trigger("throttledresize")):(t&&clearTimeout(t),t=setTimeout(n,250-o))},r=0}(e),function(e,t){function o(){var e=n();e!==r&&(r=e,l.trigger(c))}var n,r,s,a,l=e(t),c="orientationchange",d={0:!0,180:!0};if(e.support.orientation){var u=t.innerWidth||l.width(),h=t.innerHeight||l.height();s=u>h&&u-h>50,a=d[t.orientation],(s&&a||!s&&!a)&&(d={"-90":!0,90:!0})}e.event.special.orientationchange=e.extend({},e.event.special.orientationchange,{setup:function(){return!(e.support.orientation&&!e.event.special.orientationchange.disabled)&&(r=n(),void l.bind("throttledresize",o))},teardown:function(){return!(e.support.orientation&&!e.event.special.orientationchange.disabled)&&void l.unbind("throttledresize",o)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=n(),t.apply(this,arguments)}}}),e.event.special.orientationchange.orientation=n=function(){var o=i.documentElement;return(e.support.orientation?d[t.orientation]:o&&o.clientWidth/o.clientHeight<1.1)?"portrait":"landscape"},e.fn[c]=function(e){return e?this.bind(c,e):this.trigger(c)},e.attrFn&&(e.attrFn[c]=!0)}(e,this),function(e){e.widget("mobile.page",e.mobile.widget,{options:{theme:"c",domCache:!1,keepNativeDefault:":jqmData(role='none'), :jqmData(role='nojs')"},_create:function(){return!1!==this._trigger("beforecreate")&&(this.element.attr("tabindex","0").addClass("ui-page ui-body-"+this.options.theme),void this._on(this.element,{pagebeforehide:"removeContainerBackground",pagebeforeshow:"_handlePageBeforeShow"}))},_handlePageBeforeShow:function(){this.setContainerBackground()},removeContainerBackground:function(){e.mobile.pageContainer.removeClass("ui-overlay-"+e.mobile.getInheritedTheme(this.element.parent()))},setContainerBackground:function(t){this.options.theme&&e.mobile.pageContainer.addClass("ui-overlay-"+(t||this.options.theme))},keepNativeSelector:function(){var t=this.options;return t.keepNative&&e.trim(t.keepNative)&&t.keepNative!==t.keepNativeDefault?[t.keepNative,t.keepNativeDefault].join(", "):t.keepNativeDefault}})}(e),function(e,t){var i=function(i){return void 0===i&&(i=!0),function(o,n,r,s){var a=new e.Deferred,l=n?" reverse":"",c=e.mobile.urlHistory.getActive().lastScroll||e.mobile.defaultHomeScroll,d=e.mobile.getScreenHeight(),u=!1!==e.mobile.maxTransitionWidth&&e.mobile.window.width()>e.mobile.maxTransitionWidth,h=!e.support.cssTransitions||u||!o||"none"===o||Math.max(e.mobile.window.scrollTop(),c)>e.mobile.getMaxScrollForTransition(),p=" ui-page-pre-in",f=function(){e.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-"+o)},m=function(){e.event.special.scrollstart.enabled=!1,t.scrollTo(0,c),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},g=function(){s.removeClass(e.mobile.activePageClass+" out in reverse "+o).height("")},b=function(){s&&i&&g(),v()},v=function(){r.css("z-index",-10),r.addClass(e.mobile.activePageClass+p),e.mobile.focusPage(r),r.height(d+c),m(),r.css("z-index",""),h||r.animationComplete(y),r.removeClass(p).addClass(o+" in"+l),h&&y()},y=function(){i||s&&g(),r.removeClass("out in reverse "+o).height(""),f(),e.mobile.window.scrollTop()!==c&&m(),a.resolve(o,n,r,s,!0)};return f(),s&&!h?(i?s.animationComplete(b):b(),s.height(d+e.mobile.window.scrollTop()).addClass(o+" out"+l)):b(),a.promise()}},o=i(),n=i(!1);e.mobile.defaultTransitionHandler=o,e.mobile.transitionHandlers={default:e.mobile.defaultTransitionHandler,sequential:o,simultaneous:n},e.mobile.transitionFallbacks={},e.mobile._maybeDegradeTransition=function(t){return t&&!e.support.cssTransform3d&&e.mobile.transitionFallbacks[t]&&(t=e.mobile.transitionFallbacks[t]),t},e.mobile.getMaxScrollForTransition=e.mobile.getMaxScrollForTransition||function(){return 3*e.mobile.getScreenHeight()}}(e,this),function(e,o){function n(t){!f||f.closest("."+e.mobile.activePageClass).length&&!t||f.removeClass(e.mobile.activeBtnClass),f=null}function r(){v=!1,b.length>0&&e.mobile.changePage.apply(null,b.pop())}function s(t,i){i&&t.attr("data-"+e.mobile.ns+"role",i),t.page()}function a(){return e.mobile.activePage&&c(e.mobile.activePage)||w.hrefNoHash}function l(e){for(;e&&("string"!=typeof e.nodeName||"a"!==e.nodeName.toLowerCase());)e=e.parentNode;return e}function c(t){var i=e(t).closest(".ui-page").jqmData("url"),o=w.hrefNoHash;return i&&h.isPath(i)||(i=o),h.makeUrlAbsolute(i,o)}var d=e.mobile.window,u=(e("html"),e("head")),h=e.extend(e.mobile.path,{getFilePath:function(t){var i="&"+e.mobile.subPageUrlKey;return t&&t.split(i)[0].split(y)[0]},isFirstPageUrl:function(t){var i=h.parseUrl(h.makeUrlAbsolute(t,this.documentBase)),n=i.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&i.hrefNoHash===this.documentBase.hrefNoHash,r=e.mobile.firstPage,s=r&&r[0]?r[0].id:o;return n&&(!i.hash||"#"===i.hash||s&&i.hash.replace(/^#/,"")===s)},isPermittedCrossDomainRequest:function(t,i){return e.mobile.allowCrossDomainPages&&"file:"===t.protocol&&-1!==i.search(/^https?:/)}}),p=null,f=null,m=e.Deferred(),g=e.mobile.navigate.history,b=[],v=!1,y="&ui-state=dialog",x=u.children("base"),_=h.documentUrl,w=h.documentBase,k=(h.documentBaseDiffers,e.mobile.getScreenHeight),C=e.support.dynamicBaseTag?{element:x.length?x:e("<base>",{href:w.hrefNoHash}).prependTo(u),set:function(e){e=h.parseUrl(e).hrefNoHash,C.element.attr("href",h.makeUrlAbsolute(e,w))},reset:function(){C.element.attr("href",w.hrefNoSearch)}}:o;e.mobile.getDocumentUrl=h.getDocumentUrl,e.mobile.getDocumentBase=h.getDocumentBase,e.mobile.back=function(){var e=t.navigator;this.phonegapNavigationEnabled&&e&&e.app&&e.app.backHistory?e.app.backHistory():t.history.back()},e.mobile.focusPage=function(e){var t=e.find("[autofocus]"),i=e.find(".ui-title:eq(0)");return t.length?void t.focus():void(i.length?i.focus():e.focus())};var S,T,A=!0;S=function(){if(A){var t=e.mobile.urlHistory.getActive();if(t){var i=d.scrollTop();t.lastScroll=i<e.mobile.minScrollBack?e.mobile.defaultHomeScroll:i}}},T=function(){setTimeout(S,100)},d.bind(e.support.pushState?"popstate":"hashchange",function(){A=!1}),d.one(e.support.pushState?"popstate":"hashchange",function(){A=!0}),d.one("pagecontainercreate",function(){e.mobile.pageContainer.bind("pagechange",function(){A=!0,d.unbind("scrollstop",T),d.bind("scrollstop",T)})}),d.bind("scrollstop",T),e.mobile._maybeDegradeTransition=e.mobile._maybeDegradeTransition||function(e){return e},e.mobile.resetActivePageHeight=function(t){var i=e("."+e.mobile.activePageClass),o=parseFloat(i.css("padding-top")),n=parseFloat(i.css("padding-bottom")),r=parseFloat(i.css("border-top-width")),s=parseFloat(i.css("border-bottom-width"));t="number"==typeof t?t:k(),i.css("min-height",t-o-n-r-s)},e.fn.animationComplete=function(t){return e.support.cssTransitions?e(this).one("webkitAnimationEnd animationend",t):(setTimeout(t,0),e(this))},e.mobile.path=h,e.mobile.base=C,e.mobile.urlHistory=g,e.mobile.dialogHashKey=y,e.mobile.allowCrossDomainPages=!1,e.mobile._bindPageRemove=function(){var t=e(this);!t.data("mobile-page").options.domCache&&t.is(":jqmData(external-page='true')")&&t.bind("pagehide.remove",function(){var t=e(this),i=new e.Event("pageremove");t.trigger(i),i.isDefaultPrevented()||t.removeWithDependents()})},e.mobile.loadPage=function(t,i){var n=e.Deferred(),r=e.extend({},e.mobile.loadPage.defaults,i),l=null,c=null,d=h.makeUrlAbsolute(t,a());r.data&&"get"===r.type&&(d=h.addSearchParams(d,r.data),r.data=o),r.data&&"post"===r.type&&(r.reloadPage=!0);var u=h.getFilePath(d),p=h.convertUrlToDataUrl(d);if(r.pageContainer=r.pageContainer||e.mobile.pageContainer,0===(l=r.pageContainer.children("[data-"+e.mobile.ns+"url='"+p+"']")).length&&p&&!h.isPath(p)&&(l=r.pageContainer.children("#"+p).attr("data-"+e.mobile.ns+"url",p).jqmData("url",p)),0===l.length)if(e.mobile.firstPage&&h.isFirstPageUrl(u))e.mobile.firstPage.parent().length&&(l=e(e.mobile.firstPage));else if(h.isEmbeddedPage(u))return n.reject(d,i),n.promise();if(l.length){if(!r.reloadPage)return s(l,r.role),n.resolve(d,i,l),C&&!i.prefetch&&C.set(t),n.promise();c=l}var f=r.pageContainer,m=new e.Event("pagebeforeload"),g={url:t,absUrl:d,dataUrl:p,deferred:n,options:r};if(f.trigger(m,g),m.isDefaultPrevented())return n.promise();if(r.showLoadMsg)var b=setTimeout(function(){e.mobile.showPageLoadingMsg()},r.loadMsgDelay),v=function(){clearTimeout(b),e.mobile.hidePageLoadingMsg()};return!C||void 0!==i&&void 0!==i.prefetch||C.reset(),e.mobile.allowCrossDomainPages||h.isSameDomain(_,d)?e.ajax({url:u,type:r.type,data:r.data,contentType:r.contentType,dataType:"html",success:function(o,a,f){var m=e("<div></div>"),b=o.match(/<title[^>]*>([^<]*)/)&&RegExp.$1,y=new RegExp("(<[^>]+\\bdata-"+e.mobile.ns+"role=[\"']?page[\"']?[^>]*>)"),x=new RegExp("\\bdata-"+e.mobile.ns+"url=[\"']?([^\"'>]*)[\"']?");if(y.test(o)&&RegExp.$1&&x.test(RegExp.$1)&&RegExp.$1&&(t=u=h.getFilePath(e("<div>"+RegExp.$1+"</div>").text())),!C||void 0!==i&&void 0!==i.prefetch||C.set(u),m.get(0).innerHTML=o,(l=m.find(":jqmData(role='page'), :jqmData(role='dialog')").first()).length||(l=e("<div data-"+e.mobile.ns+"role='page'>"+(o.split(/<\/?body[^>]*>/gim)[1]||"")+"</div>")),b&&!l.jqmData("title")&&(~b.indexOf("&")&&(b=e("<div>"+b+"</div>").text()),l.jqmData("title",b)),!e.support.dynamicBaseTag){var _=h.get(u);l.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function(){var t=e(this).is("[href]")?"href":e(this).is("[src]")?"src":"action",i=e(this).attr(t);i=i.replace(location.protocol+"//"+location.host+location.pathname,""),/^(\w+:|#|\/)/.test(i)||e(this).attr(t,_+i)})}l.attr("data-"+e.mobile.ns+"url",h.convertUrlToDataUrl(u)).attr("data-"+e.mobile.ns+"external-page",!0).appendTo(r.pageContainer),l.one("pagecreate",e.mobile._bindPageRemove),s(l,r.role),d.indexOf("&"+e.mobile.subPageUrlKey)>-1&&(l=r.pageContainer.children("[data-"+e.mobile.ns+"url='"+p+"']")),r.showLoadMsg&&v(),g.xhr=f,g.textStatus=a,g.page=l,r.pageContainer.trigger("pageload",g),n.resolve(d,i,l,c)},error:function(t,o,s){C&&C.set(h.get()),g.xhr=t,g.textStatus=o,g.errorThrown=s;var a=new e.Event("pageloadfailed");r.pageContainer.trigger(a,g),a.isDefaultPrevented()||(r.showLoadMsg&&(v(),e.mobile.showPageLoadingMsg(e.mobile.pageLoadErrorMessageTheme,e.mobile.pageLoadErrorMessage,!0),setTimeout(e.mobile.hidePageLoadingMsg,1500)),n.reject(d,i))}}):n.reject(d,i),n.promise()},e.mobile.loadPage.defaults={type:"get",data:o,reloadPage:!1,role:o,showLoadMsg:!1,pageContainer:o,loadMsgDelay:50},e.mobile.changePage=function(t,l){if(v)b.unshift(arguments);else{var c,d=e.extend({},e.mobile.changePage.defaults,l);d.pageContainer=d.pageContainer||e.mobile.pageContainer,d.fromPage=d.fromPage||e.mobile.activePage,c="string"==typeof t;var u=d.pageContainer,p=new e.Event("pagebeforechange"),f={toPage:t,options:d};if(f.absUrl=c?h.makeUrlAbsolute(t,a()):t.data("absUrl"),u.trigger(p,f),!p.isDefaultPrevented()){if(t=f.toPage,v=!0,c="string"==typeof t)return d.target=t,void e.mobile.loadPage(t,d).done(function(t,i,o,n){v=!1,i.duplicateCachedPage=n,o.data("absUrl",f.absUrl),e.mobile.changePage(o,i)}).fail(function(){n(!0),r(),d.pageContainer.trigger("pagechangefailed",f)});t[0]!==e.mobile.firstPage[0]||d.dataUrl||(d.dataUrl=_.hrefNoHash);var m=d.fromPage,x=d.dataUrl&&h.convertUrlToDataUrl(d.dataUrl)||t.jqmData("url"),w=x,k=(h.getFilePath(x),g.getActive()),C=0===g.activeIndex,S=0,T=i.title,A="dialog"===d.role||"dialog"===t.jqmData("role");if(m&&m[0]===t[0]&&!d.allowSamePageTransition)return v=!1,u.trigger("pagechange",f),void(d.fromHashChange&&g.direct({url:x}));s(t,d.role),d.fromHashChange&&(S="back"===l.direction?-1:1);try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()?e(i.activeElement).blur():e("input:focus, textarea:focus, select:focus").blur()}catch(e){}var E=!1;A&&k&&(k.url&&k.url.indexOf(y)>-1&&e.mobile.activePage&&!e.mobile.activePage.is(".ui-dialog")&&g.activeIndex>0&&(d.changeHash=!1,E=!0),x=k.url||"",x+=!E&&x.indexOf("#")>-1?y:"#"+y,0===g.activeIndex&&x===g.initialDst&&(x+=y));var $,P=k?t.jqmData("title")||t.children(":jqmData(role='header')").find(".ui-title").text():T;P&&T===i.title&&(T=P),t.jqmData("title")||t.jqmData("title",T),d.transition=d.transition||(S&&!C?k.transition:o)||(A?e.mobile.defaultDialogTransition:e.mobile.defaultPageTransition),!S&&E&&(g.getActive().pageUrl=w),x&&!d.fromHashChange&&(!h.isPath(x)&&x.indexOf("#")<0&&(x="#"+x),$={transition:d.transition,title:T,pageUrl:w,role:d.role},!1!==d.changeHash&&e.mobile.hashListeningEnabled?e.mobile.navigate(x,$,!0):t[0]!==e.mobile.firstPage[0]&&e.mobile.navigate.history.add(x,$)),i.title=T,e.mobile.activePage=t,d.reverse=d.reverse||0>S,function(t,i,o,n){i&&i.data("mobile-page")._trigger("beforehide",null,{nextPage:t}),t.data("mobile-page")._trigger("beforeshow",null,{prevPage:i||e("")}),e.mobile.hidePageLoadingMsg(),o=e.mobile._maybeDegradeTransition(o);var r=(e.mobile.transitionHandlers[o||"default"]||e.mobile.defaultTransitionHandler)(o,n,t,i);return r.done(function(){i&&i.data("mobile-page")._trigger("hide",null,{nextPage:t}),t.data("mobile-page")._trigger("show",null,{prevPage:i||e("")})}),r}(t,m,d.transition,d.reverse).done(function(i,o,s,a,l){n(),d.duplicateCachedPage&&d.duplicateCachedPage.remove(),l||e.mobile.focusPage(t),r(),u.trigger("pagechange",f)})}}},e.mobile.changePage.defaults={transition:o,reverse:!1,changeHash:!0,fromHashChange:!1,role:o,duplicateCachedPage:o,pageContainer:o,showLoadMsg:!0,dataUrl:o,fromPage:o,allowSamePageTransition:!1},e.mobile.navreadyDeferred=e.Deferred(),e.mobile._registerInternalEvents=function(){var i=function(t,i){var o,n,r,s,a=!0;return!(!e.mobile.ajaxEnabled||t.is(":jqmData(ajax='false')")||!t.jqmHijackable().length||t.attr("target"))&&(o=t.attr("action"),s=(t.attr("method")||"get").toLowerCase(),o||(o=c(t),"get"===s&&(o=h.parseUrl(o).hrefNoSearch),o===w.hrefNoHash&&(o=_.hrefNoSearch)),o=h.makeUrlAbsolute(o,c(t)),!(h.isExternal(o)&&!h.isPermittedCrossDomainRequest(_,o))&&(i||(n=t.serializeArray(),p&&p[0].form===t[0]&&(r=p.attr("name"))&&(e.each(n,function(e,t){return t.name===r?(r="",!1):void 0}),r&&n.push({name:r,value:p.attr("value")})),a={url:o,options:{type:s,data:e.param(n),transition:t.jqmData("transition"),reverse:"reverse"===t.jqmData("direction"),reloadPage:!0}}),a))};e.mobile.document.delegate("form","submit",function(t){var o=i(e(this));o&&(e.mobile.changePage(o.url,o.options),t.preventDefault())}),e.mobile.document.bind("vclick",function(t){var o,r,s=t.target,a=!1;if(!(t.which>1)&&e.mobile.linkBindingEnabled){if(p=e(s),e.data(s,"mobile-button")){if(!i(e(s).closest("form"),!0))return;s.parentNode&&(s=s.parentNode)}else{if(!(s=l(s))||"#"===h.parseUrl(s.getAttribute("href")||"#").hash)return;if(!e(s).jqmHijackable().length)return}~s.className.indexOf("ui-link-inherit")?s.parentNode&&(r=e.data(s.parentNode,"buttonElements")):r=e.data(s,"buttonElements"),r?s=r.outer:a=!0,o=e(s),a&&(o=o.closest(".ui-btn")),o.length>0&&!o.hasClass("ui-disabled")&&(n(!0),(f=o).addClass(e.mobile.activeBtnClass))}}),e.mobile.document.bind("click",function(i){if(e.mobile.linkBindingEnabled&&!i.isDefaultPrevented()){var r,s=l(i.target),a=e(s);if(s&&!(i.which>1)&&a.jqmHijackable().length){if(r=function(){t.setTimeout(function(){n(!0)},200)},a.is(":jqmData(rel='back')"))return e.mobile.back(),!1;var d=c(a),u=h.makeUrlAbsolute(a.attr("href")||"#",d);if(!e.mobile.ajaxEnabled&&!h.isEmbeddedPage(u))return void r();if(-1!==u.search("#")){if(!(u=u.replace(/[^#]*#/,"")))return void i.preventDefault();u=h.isPath(u)?h.makeUrlAbsolute(u,d):h.makeUrlAbsolute("#"+u,_.hrefNoHash)}if(a.is("[rel='external']")||a.is(":jqmData(ajax='false')")||a.is("[target]")||h.isExternal(u)&&!h.isPermittedCrossDomainRequest(_,u))return void r();var p=a.jqmData("transition"),f="reverse"===a.jqmData("direction")||a.jqmData("back"),m=a.attr("data-"+e.mobile.ns+"rel")||o;e.mobile.changePage(u,{transition:p,reverse:f,role:m,link:a}),i.preventDefault()}}}),e.mobile.document.delegate(".ui-page","pageshow.prefetch",function(){var t=[];e(this).find("a:jqmData(prefetch)").each(function(){var i=e(this),o=i.attr("href");o&&-1===e.inArray(o,t)&&(t.push(o),e.mobile.loadPage(o,{role:i.attr("data-"+e.mobile.ns+"rel"),prefetch:!0}))})}),e.mobile._handleHashChange=function(i,n){var r=h.stripHash(i),s=0===e.mobile.urlHistory.stack.length?"none":o,a={changeHash:!1,fromHashChange:!0,reverse:"back"===n.direction};if(e.extend(a,n,{transition:(g.getLast()||{}).transition||s}),g.activeIndex>0&&r.indexOf(y)>-1&&g.initialDst!==r){if(e.mobile.activePage&&!e.mobile.activePage.is(".ui-dialog"))return void("back"===n.direction?e.mobile.back():t.history.forward());r=n.pageUrl;var l=e.mobile.urlHistory.getActive();e.extend(a,{role:l.role,transition:l.transition,reverse:"back"===n.direction})}r?((r=h.isPath(r)?r:h.makeUrlAbsolute("#"+r,w))===h.makeUrlAbsolute("#"+g.initialDst,w)&&g.stack.length&&g.stack[0].url!==g.initialDst.replace(y,"")&&(r=e.mobile.firstPage),e.mobile.changePage(r,a)):e.mobile.changePage(e.mobile.firstPage,a)},d.bind("navigate",function(t,i){var o;t.originalEvent&&t.originalEvent.isDefaultPrevented()||((o=e.event.special.navigate.originalEventName.indexOf("hashchange")>-1?i.state.hash:i.state.url)||(o=e.mobile.path.parseLocation().hash),o&&"#"!==o&&0!==o.indexOf("#"+e.mobile.path.uiStateKey)||(o=location.href),e.mobile._handleHashChange(o,i.state))}),e.mobile.document.bind("pageshow",e.mobile.resetActivePageHeight),e.mobile.window.bind("throttledresize",e.mobile.resetActivePageHeight)},e(function(){m.resolve()}),e.when(m,e.mobile.navreadyDeferred).done(function(){e.mobile._registerInternalEvents()})}(e),function(e){e.mobile.transitionFallbacks.flip="fade"}(e),function(e){e.mobile.transitionFallbacks.flow="fade"}(e),function(e){e.mobile.transitionFallbacks.pop="fade"}(e),function(e){e.mobile.transitionHandlers.slide=e.mobile.transitionHandlers.simultaneous,e.mobile.transitionFallbacks.slide="fade"}(e),function(e){e.mobile.transitionFallbacks.slidedown="fade"}(e),function(e){e.mobile.transitionFallbacks.slidefade="fade"}(e),function(e){e.mobile.transitionFallbacks.slideup="fade"}(e),function(e){e.mobile.transitionFallbacks.turn="fade"}(e),function(e){e.mobile.page.prototype.options.degradeInputs={color:!1,date:!1,datetime:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:"number",search:"text",tel:!1,time:!1,url:!1,week:!1},e.mobile.document.bind("pagecreate create",function(t){var i,o=e.mobile.closestPageData(e(t.target));o&&(i=o.options,e(t.target).find("input").not(o.keepNativeSelector()).each(function(){var t=e(this),o=this.getAttribute("type"),n=i.degradeInputs[o]||"text";if(i.degradeInputs[o]){var r=e("<div>").html(t.clone()).html(),s=r.indexOf(" type=")>-1,a=s?/\s+type=["']?\w+['"]?/:/\/?>/,l=' type="'+n+'" data-'+e.mobile.ns+'type="'+o+'"'+(s?"":">");t.replaceWith(r.replace(a,l))}}))})}(e),function(e){e.widget("mobile.dialog",e.mobile.widget,{options:{closeBtn:"left",closeBtnText:"Close",overlayTheme:"a",corners:!0,initSelector:":jqmData(role='dialog')"},_handlePageBeforeShow:function(){this._isCloseable=!0,this.options.overlayTheme&&this.element.page("removeContainerBackground").page("setContainerBackground",this.options.overlayTheme)},_handlePageBeforeHide:function(){this._isCloseable=!1},_create:function(){var t=this.element,i=this.options.corners?" ui-corner-all":"",o=e("<div/>",{role:"dialog",class:"ui-dialog-contain ui-overlay-shadow"+i});t.addClass("ui-dialog ui-overlay-"+this.options.overlayTheme),t.wrapInner(o),t.bind("vclick submit",function(t){var i,o=e(t.target).closest("vclick"===t.type?"a":"form");o.length&&!o.jqmData("transition")&&(i=e.mobile.urlHistory.getActive()||{},o.attr("data-"+e.mobile.ns+"transition",i.transition||e.mobile.defaultDialogTransition).attr("data-"+e.mobile.ns+"direction","reverse"))}),this._on(t,{pagebeforeshow:"_handlePageBeforeShow",pagebeforehide:"_handlePageBeforeHide"}),e.extend(this,{_createComplete:!1}),this._setCloseBtn(this.options.closeBtn)},_setCloseBtn:function(t){var i,o=this;this._headerCloseButton&&(this._headerCloseButton.remove(),this._headerCloseButton=null),"none"!==t&&(i=e("<a href='#' class='ui-btn-"+("left"===t?"left":"right")+"' data-"+e.mobile.ns+"icon='delete' data-"+e.mobile.ns+"iconpos='notext'>"+this.options.closeBtnText+"</a>"),this.element.children().find(":jqmData(role='header')").first().prepend(i),this._createComplete&&e.fn.buttonMarkup&&i.buttonMarkup(),this._createComplete=!0,i.bind("click",function(){o.close()}),this._headerCloseButton=i)},_setOption:function(e,t){"closeBtn"===e&&this._setCloseBtn(t),this._super(e,t)},close:function(){var t,i,o=e.mobile.navigate.history;this._isCloseable&&(this._isCloseable=!1,e.mobile.hashListeningEnabled&&o.activeIndex>0?e.mobile.back():(t=Math.max(0,o.activeIndex-1),i=o.stack[t].pageUrl||o.stack[t].url,o.previousIndex=o.activeIndex,o.activeIndex=t,e.mobile.path.isPath(i)||(i=e.mobile.path.makeUrlAbsolute("#"+i)),e.mobile.changePage(i,{direction:"back",changeHash:!1,fromHashChange:!0})))}}),e.mobile.document.delegate(e.mobile.dialog.prototype.options.initSelector,"pagecreate",function(){e.mobile.dialog.prototype.enhance(this)})}(e),function(e){e.mobile.page.prototype.options.backBtnText="Back",e.mobile.page.prototype.options.addBackBtn=!1,e.mobile.page.prototype.options.backBtnTheme=null,e.mobile.page.prototype.options.headerTheme="a",e.mobile.page.prototype.options.footerTheme="a",e.mobile.page.prototype.options.contentTheme=null,e.mobile.document.bind("pagecreate",function(t){var i=e(t.target),o=i.data("mobile-page").options,n=i.jqmData("role"),r=o.theme;e(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')",i).jqmEnhanceable().each(function(){var t,s,a,l=e(this),c=l.jqmData("role"),d=l.jqmData("theme"),u=d||o.contentTheme||"dialog"===n&&r;if(l.addClass("ui-"+c),"header"===c||"footer"===c){var h=d||("header"===c?o.headerTheme:o.footerTheme)||r;l.addClass("ui-bar-"+h).attr("role","header"===c?"banner":"contentinfo"),"header"===c&&(s=(t=l.children("a, button")).hasClass("ui-btn-left"),a=t.hasClass("ui-btn-right"),s=s||t.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length,a=a||t.eq(1).addClass("ui-btn-right").length),o.addBackBtn&&"header"===c&&e(".ui-page").length>1&&i.jqmData("url")!==e.mobile.path.stripHash(location.hash)&&!s&&e("<a href='javascript:void(0);' class='ui-btn-left' data-"+e.mobile.ns+"rel='back' data-"+e.mobile.ns+"icon='arrow-l'>"+o.backBtnText+"</a>").attr("data-"+e.mobile.ns+"theme",o.backBtnTheme||h).prependTo(l),l.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({role:"heading","aria-level":"1"})}else"content"===c&&(u&&l.addClass("ui-body-"+u),l.attr("role","main"))})})}(e),function(e,t){function o(e){for(var t;e&&!((t="string"==typeof e.className&&e.className+" ")&&t.indexOf("ui-btn ")>-1&&t.indexOf("ui-disabled ")<0);)e=e.parentNode;return e}function n(o,n,r,s,a){var l=e.data(o[0],"buttonElements");o.removeClass(n).addClass(r),l&&(l.bcls=e(i.createElement("div")).addClass(l.bcls+" "+r).removeClass(n).attr("class"),s!==t&&(l.hover=s),l.state=a)}var r=function(e,i){var o=e.getAttribute(i);return"true"===o||"false"!==o&&(null===o?t:o)};e.fn.buttonMarkup=function(o){var n,a="data-"+e.mobile.ns;o=o&&"object"===e.type(o)?o:{};for(var l=0;l<this.length;l++){var c,d,u,h,p,f,m=this.eq(l),g=m[0],b=e.extend({},e.fn.buttonMarkup.defaults,{icon:o.icon!==t?o.icon:r(g,a+"icon"),iconpos:o.iconpos!==t?o.iconpos:r(g,a+"iconpos"),theme:o.theme!==t?o.theme:r(g,a+"theme")||e.mobile.getInheritedTheme(m,"c"),inline:o.inline!==t?o.inline:r(g,a+"inline"),shadow:o.shadow!==t?o.shadow:r(g,a+"shadow"),corners:o.corners!==t?o.corners:r(g,a+"corners"),iconshadow:o.iconshadow!==t?o.iconshadow:r(g,a+"iconshadow"),mini:o.mini!==t?o.mini:r(g,a+"mini")},o),v=!1,y="up";for(n in b)b[n]===t||null===b[n]?m.removeAttr(a+n):g.setAttribute(a+n,b[n]);for((f=e.data("INPUT"===g.tagName||"BUTTON"===g.tagName?g.parentNode:g,"buttonElements"))?(g=f.outer,m=e(g),u=f.inner,h=f.text,e(f.icon).remove(),f.icon=null,v=f.hover,y=f.state):(u=i.createElement(b.wrapperEls),h=i.createElement(b.wrapperEls)),p=b.icon?i.createElement("span"):null,s&&!f&&s(),b.theme||(b.theme=e.mobile.getInheritedTheme(m,"c")),c="ui-btn ",c+=v?"ui-btn-hover-"+b.theme:"",c+=y?" ui-btn-"+y+"-"+b.theme:"",c+=b.shadow?" ui-shadow":"",c+=b.corners?" ui-btn-corner-all":"",b.mini!==t&&(c+=!0===b.mini?" ui-mini":" ui-fullsize"),b.inline!==t&&(c+=!0===b.inline?" ui-btn-inline":" ui-btn-block"),b.icon&&(b.icon="ui-icon-"+b.icon,b.iconpos=b.iconpos||"left",d="ui-icon "+b.icon,b.iconshadow&&(d+=" ui-icon-shadow")),b.iconpos&&(c+=" ui-btn-icon-"+b.iconpos,"notext"!==b.iconpos||m.attr("title")||m.attr("title",m.getEncodedText())),f&&m.removeClass(f.bcls||""),m.removeClass("ui-link").addClass(c),u.className="ui-btn-inner",h.className="ui-btn-text",f||u.appendChild(h),p&&(p.className=d,f&&f.icon||(p.innerHTML="&#160;",u.appendChild(p)));g.firstChild&&!f;)h.appendChild(g.firstChild);f||g.appendChild(u),f={hover:v,state:y,bcls:c,outer:g,inner:u,text:h,icon:p},e.data(g,"buttonElements",f),e.data(u,"buttonElements",f),e.data(h,"buttonElements",f),p&&e.data(p,"buttonElements",f)}return this},e.fn.buttonMarkup.defaults={corners:!0,shadow:!0,iconshadow:!0,wrapperEls:"span"};var s=function(){var i,r,a=e.mobile.buttonMarkup.hoverDelay;e.mobile.document.bind({"vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart":function(s){var l,c=e(o(s.target)),d=s.originalEvent&&/^touch/.test(s.originalEvent.type),u=s.type;c.length&&(l=c.attr("data-"+e.mobile.ns+"theme"),"vmousedown"===u?d?i=setTimeout(function(){n(c,"ui-btn-up-"+l,"ui-btn-down-"+l,t,"down")},a):n(c,"ui-btn-up-"+l,"ui-btn-down-"+l,t,"down"):"vmousecancel"===u||"vmouseup"===u?n(c,"ui-btn-down-"+l,"ui-btn-up-"+l,t,"up"):"vmouseover"===u||"focus"===u?d?r=setTimeout(function(){n(c,"ui-btn-up-"+l,"ui-btn-hover-"+l,!0,"")},a):n(c,"ui-btn-up-"+l,"ui-btn-hover-"+l,!0,""):("vmouseout"===u||"blur"===u||"scrollstart"===u)&&(n(c,"ui-btn-hover-"+l+" ui-btn-down-"+l,"ui-btn-up-"+l,!1,"up"),i&&clearTimeout(i),r&&clearTimeout(r)))},"focusin focus":function(t){e(o(t.target)).addClass(e.mobile.focusClass)},"focusout blur":function(t){e(o(t.target)).removeClass(e.mobile.focusClass)}}),s=null};e.mobile.document.bind("pagecreate create",function(t){e(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a",t.target).jqmEnhanceable().not("button, input, .ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()})}(e),function(e){e.widget("mobile.collapsible",e.mobile.widget,{options:{expandCueText:" click to expand contents",collapseCueText:" click to collapse contents",collapsed:!0,heading:"h1,h2,h3,h4,h5,h6,legend",collapsedIcon:"plus",expandedIcon:"minus",iconpos:"left",theme:null,contentTheme:null,inset:!0,corners:!0,mini:!1,initSelector:":jqmData(role='collapsible')"},_create:function(){var t=this.element,i=this.options,o=t.addClass("ui-collapsible"),n=t.children(i.heading).first(),r=o.wrapInner("<div class='ui-collapsible-content'></div>").children(".ui-collapsible-content"),s=t.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set"),a="";n.is("legend")&&(n=e("<div role='heading'>"+n.html()+"</div>").insertBefore(n)).next().remove(),s.length?(i.theme||(i.theme=s.jqmData("theme")||e.mobile.getInheritedTheme(s,"c")),i.contentTheme||(i.contentTheme=s.jqmData("content-theme")),i.collapsedIcon=t.jqmData("collapsed-icon")||s.jqmData("collapsed-icon")||i.collapsedIcon,i.expandedIcon=t.jqmData("expanded-icon")||s.jqmData("expanded-icon")||i.expandedIcon,i.iconpos=t.jqmData("iconpos")||s.jqmData("iconpos")||i.iconpos,i.inset=void 0===s.jqmData("inset")||s.jqmData("inset"),i.corners=!1,i.mini||(i.mini=s.jqmData("mini"))):i.theme||(i.theme=e.mobile.getInheritedTheme(t,"c")),i.inset&&(a+=" ui-collapsible-inset",i.corners&&(a+=" ui-corner-all")),i.contentTheme&&(a+=" ui-collapsible-themed-content",r.addClass("ui-body-"+i.contentTheme)),""!==a&&o.addClass(a),n.insertBefore(r).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({shadow:!1,corners:!1,iconpos:i.iconpos,icon:i.collapsedIcon,mini:i.mini,theme:i.theme}),o.bind("expand collapse",function(t){if(!t.isDefaultPrevented()){var o=e(this),s="collapse"===t.type;t.preventDefault(),n.toggleClass("ui-collapsible-heading-collapsed",s).find(".ui-collapsible-heading-status").text(s?i.expandCueText:i.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-"+i.expandedIcon,!s).toggleClass("ui-icon-"+i.collapsedIcon,s||i.expandedIcon===i.collapsedIcon).end().find("a").first().removeClass(e.mobile.activeBtnClass),o.toggleClass("ui-collapsible-collapsed",s),r.toggleClass("ui-collapsible-content-collapsed",s).attr("aria-hidden",s),r.trigger("updatelayout")}}).trigger(i.collapsed?"collapse":"expand"),n.bind("tap",function(){n.find("a").first().addClass(e.mobile.activeBtnClass)}).bind("click",function(e){var t=n.is(".ui-collapsible-heading-collapsed")?"expand":"collapse";o.trigger(t),e.preventDefault(),e.stopPropagation()})}}),e.mobile.document.bind("pagecreate create",function(t){e.mobile.collapsible.prototype.enhanceWithin(t.target)})}(e),function(e){e.mobile.behaviors.addFirstLastClasses={_getVisibles:function(e,t){var i;return(t||0===(i=e.filter(":visible")).length)&&(i=e.not(".ui-screen-hidden")),i},_addFirstLastClasses:function(e,t,i){e.removeClass("ui-first-child ui-last-child"),t.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"),i||this.element.trigger("updatelayout")}}}(e),function(e,t){e.widget("mobile.collapsibleset",e.mobile.widget,e.extend({options:{initSelector:":jqmData(role='collapsible-set')"},_create:function(){var i=this.element.addClass("ui-collapsible-set"),o=this.options;o.theme||(o.theme=e.mobile.getInheritedTheme(i,"c")),o.contentTheme||(o.contentTheme=i.jqmData("content-theme")),o.corners||(o.corners=i.jqmData("corners")),i.jqmData("inset")!==t&&(o.inset=i.jqmData("inset")),o.inset=o.inset===t||o.inset,o.corners=o.corners===t||o.corners,o.corners&&o.inset&&i.addClass("ui-corner-all"),i.jqmData("collapsiblebound")||i.jqmData("collapsiblebound",!0).bind("expand",function(t){var i=e(t.target).closest(".ui-collapsible");i.parent().is(":jqmData(role='collapsible-set')")&&i.siblings(".ui-collapsible").trigger("collapse")})},_init:function(){var e=this.element.children(":jqmData(role='collapsible')").filter(":jqmData(collapsed='false')");this._refresh("true"),e.trigger("expand")},_refresh:function(t){var i=this.element.children(":jqmData(role='collapsible')");e.mobile.collapsible.prototype.enhance(i.not(".ui-collapsible")),this._addFirstLastClasses(i,this._getVisibles(i,t),t)},refresh:function(){this._refresh(!1)}},e.mobile.behaviors.addFirstLastClasses)),e.mobile.document.bind("pagecreate create",function(t){e.mobile.collapsibleset.prototype.enhanceWithin(t.target)})}(e),function(e){e.fn.fieldcontain=function(){return this.addClass("ui-field-contain ui-body ui-br").contents().filter(function(){return 3===this.nodeType&&!/\S/.test(this.nodeValue)}).remove()},e(i).bind("pagecreate create",function(t){e(":jqmData(role='fieldcontain')",t.target).jqmEnhanceable().fieldcontain()})}(e),function(e){e.fn.grid=function(t){return this.each(function(){var i,o=e(this),n=e.extend({grid:null},t),r=o.children(),s={solo:1,a:2,b:3,c:4,d:5},a=n.grid;if(!a)if(r.length<=5)for(var l in s)s[l]===r.length&&(a=l);else a="a",o.addClass("ui-grid-duo");i=s[a],o.addClass("ui-grid-"+a),r.filter(":nth-child("+i+"n+1)").addClass("ui-block-a"),i>1&&r.filter(":nth-child("+i+"n+2)").addClass("ui-block-b"),i>2&&r.filter(":nth-child("+i+"n+3)").addClass("ui-block-c"),i>3&&r.filter(":nth-child("+i+"n+4)").addClass("ui-block-d"),i>4&&r.filter(":nth-child("+i+"n+5)").addClass("ui-block-e")})}}(e),function(e){e.widget("mobile.navbar",e.mobile.widget,{options:{iconpos:"top",grid:null,initSelector:":jqmData(role='navbar')"},_create:function(){var t=this.element,o=t.find("a"),n=o.filter(":jqmData(icon)").length?this.options.iconpos:void 0;t.addClass("ui-navbar ui-mini").attr("role","navigation").find("ul").jqmEnhanceable().grid({grid:this.options.grid}),o.buttonMarkup({corners:!1,shadow:!1,inline:!0,iconpos:n}),t.delegate("a","vclick",function(t){if(!(e(t.target).is("a")?e(this):e(this).parent("a")).is(".ui-disabled, .ui-btn-active")){o.removeClass(e.mobile.activeBtnClass),e(this).addClass(e.mobile.activeBtnClass);var n=e(this);e(i).one("pagehide",function(){n.removeClass(e.mobile.activeBtnClass)})}}),t.closest(".ui-page").bind("pagebeforeshow",function(){o.filter(".ui-state-persist").addClass(e.mobile.activeBtnClass)})}}),e.mobile.document.bind("pagecreate create",function(t){e.mobile.navbar.prototype.enhanceWithin(t.target)})}(e),function(e){var t={};e.widget("mobile.listview",e.mobile.widget,e.extend({options:{theme:null,countTheme:"c",headerTheme:"b",dividerTheme:"b",icon:"arrow-r",splitIcon:"arrow-r",splitTheme:"b",corners:!0,shadow:!0,inset:!1,initSelector:":jqmData(role='listview')"},_create:function(){var e=this,t="";t+=e.options.inset?" ui-listview-inset":"",e.options.inset&&(t+=e.options.corners?" ui-corner-all":"",t+=e.options.shadow?" ui-shadow":""),e.element.addClass(function(e,i){return i+" ui-listview"+t}),e.refresh(!0)},_findFirstElementByTagName:function(e,t,i,o){var n={};for(n[i]=n[o]=!0;e;){if(n[e.nodeName])return e;e=e[t]}return null},_getChildrenByTagName:function(t,i,o){var n=[],r={};for(r[i]=r[o]=!0,t=t.firstChild;t;)r[t.nodeName]&&n.push(t),t=t.nextSibling;return e(n)},_addThumbClasses:function(t){var i,o,n=t.length;for(i=0;n>i;i++)(o=e(this._findFirstElementByTagName(t[i].firstChild,"nextSibling","img","IMG"))).length&&(o.addClass("ui-li-thumb"),e(this._findFirstElementByTagName(o[0].parentNode,"parentNode","li","LI")).addClass(o.is(".ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb"))},refresh:function(t){this.parentPage=this.element.closest(".ui-page"),this._createSubPages();var o,n,r,s,a,l,c,d,u,h,p,f=this.options,m=this.element,g=m.jqmData("dividertheme")||f.dividerTheme,b=m.jqmData("splittheme"),v=m.jqmData("spliticon"),y=m.jqmData("icon"),x=this._getChildrenByTagName(m[0],"li","LI"),_=!!e.nodeName(m[0],"ol"),w=!e.support.cssPseudoElement,k=m.attr("start"),C={};_&&w&&m.find(".ui-li-dec").remove(),_&&(k||0===k?w?c=parseInt(k,10):(d=parseInt(k,10)-1,m.css("counter-reset","listnumbering "+d)):w&&(c=1)),f.theme||(f.theme=e.mobile.getInheritedTheme(this.element,"c"));for(var S=0,T=x.length;T>S;S++){if(o=x.eq(S),n="ui-li",t||!o.hasClass("ui-li")){r=o.jqmData("theme")||f.theme,s=this._getChildrenByTagName(o[0],"a","A");var A="list-divider"===o.jqmData("role");s.length&&!A?(h=o.jqmData("icon"),o.buttonMarkup({wrapperEls:"div",shadow:!1,corners:!1,iconpos:"right",icon:!(s.length>1||!1===h)&&(h||y||f.icon),theme:r}),!1!==h&&1===s.length&&o.addClass("ui-li-has-arrow"),s.first().removeClass("ui-link").addClass("ui-link-inherit"),s.length>1&&(n+=" ui-li-has-alt",a=s.last(),l=b||a.jqmData("theme")||f.splitTheme,p=a.jqmData("icon"),a.appendTo(o).attr("title",e.trim(a.getEncodedText())).addClass("ui-li-link-alt").empty().buttonMarkup({shadow:!1,corners:!1,theme:r,icon:!1,iconpos:"notext"}).find(".ui-btn-inner").append(e(i.createElement("span")).buttonMarkup({shadow:!0,corners:!0,theme:l,iconpos:"notext",icon:p||h||v||f.splitIcon})))):A?(n+=" ui-li-divider ui-bar-"+(o.jqmData("theme")||g),o.attr("role","heading"),_&&(k||0===k?w?c=parseInt(k,10):(u=parseInt(k,10)-1,o.css("counter-reset","listnumbering "+u)):w&&(c=1))):n+=" ui-li-static ui-btn-up-"+r}_&&w&&n.indexOf("ui-li-divider")<0&&(n.indexOf("ui-li-static")>0?o:o.find(".ui-link-inherit")).addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>"+c+++". </span>"),C[n]||(C[n]=[]),C[n].push(o[0])}for(n in C)e(C[n]).addClass(n).children(".ui-btn-inner").addClass(n);m.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function(){var t=e(this);t.prependTo(t.parent())}).end().find(".ui-li-count").each(function(){e(this).closest("li").addClass("ui-li-has-count")}).addClass("ui-btn-up-"+(m.jqmData("counttheme")||this.options.countTheme)+" ui-btn-corner-all"),this._addThumbClasses(x),this._addThumbClasses(m.find(".ui-link-inherit")),this._addFirstLastClasses(x,this._getVisibles(x,t),t),this._trigger("afterrefresh")},_idStringEscape:function(e){return e.replace(/[^a-zA-Z0-9]/g,"-")},_createSubPages:function(){var i,o=this.element,n=o.closest(".ui-page"),r=n.jqmData("url"),s=r||n[0][e.expando],a=o.attr("id"),l=this.options,c="data-"+e.mobile.ns,d=this,u=n.find(":jqmData(role='footer')").jqmData("id");if(void 0===t[s]&&(t[s]=-1),a=a||++t[s],e(o.find("li>ul, li>ol").toArray().reverse()).each(function(t){var n,s=e(this),d=s.attr("id")||a+"-"+t,h=s.parent(),p=e(s.prevAll().toArray().reverse()),f=p.length?p:e("<span>"+e.trim(h.contents()[0].nodeValue)+"</span>"),m=f.first().getEncodedText(),g=(r||"")+"&"+e.mobile.subPageUrlKey+"="+d,b=s.jqmData("theme")||l.theme,v=s.jqmData("counttheme")||o.jqmData("counttheme")||l.countTheme;i=!0,s.detach().wrap("<div "+c+"role='page' "+c+"url='"+g+"' "+c+"theme='"+b+"' "+c+"count-theme='"+v+"'><div "+c+"role='content'></div></div>").parent().before("<div "+c+"role='header' "+c+"theme='"+l.headerTheme+"'><div class='ui-title'>"+m+"</div></div>").after(u?e("<div "+c+"role='footer' "+c+"id='"+u+"'>"):"").parent().appendTo(e.mobile.pageContainer).page(),(n=h.find("a:first")).length||(n=e("<a/>").html(f||m).prependTo(h.empty())),n.attr("href","#"+g)}).listview(),i&&n.is(":jqmData(external-page='true')")&&!1===n.data("mobile-page").options.domCache){n.unbind("pagehide.remove").bind("pagehide.remove",function(t,i){var o=i.nextPage,s=new e.Event("pageremove");i.nextPage&&0!==o.jqmData("url").indexOf(r+"&"+e.mobile.subPageUrlKey)&&(d.childPages().remove(),n.trigger(s),s.isDefaultPrevented()||n.removeWithDependents())})}},childPages:function(){var t=this.parentPage.jqmData("url");return e(":jqmData(url^='"+t+"&"+e.mobile.subPageUrlKey+"')")}},e.mobile.behaviors.addFirstLastClasses)),e.mobile.document.bind("pagecreate create",function(t){e.mobile.listview.prototype.enhanceWithin(t.target)})}(e),function(e){var t=e("meta[name=viewport]"),i=t.attr("content"),o=i+",maximum-scale=1, user-scalable=no",n=i+",maximum-scale=10, user-scalable=yes",r=/(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(i);e.mobile.zoom=e.extend({},{enabled:!r,locked:!1,disable:function(i){r||e.mobile.zoom.locked||(t.attr("content",o),e.mobile.zoom.enabled=!1,e.mobile.zoom.locked=i||!1)},enable:function(i){r||e.mobile.zoom.locked&&!0!==i||(t.attr("content",n),e.mobile.zoom.enabled=!0,e.mobile.zoom.locked=!1)},restore:function(){r||(t.attr("content",i),e.mobile.zoom.enabled=!0)}})}(e),function(e){e.widget("mobile.textinput",e.mobile.widget,{options:{theme:null,mini:!1,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,initSelector:"input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type]), input[type='file']",clearBtn:!1,clearSearchButtonText:null,clearBtnText:"clear text",disabled:!1},_create:function(){function t(){setTimeout(function(){o.toggleClass("ui-input-clear-hidden",!r.val())},0)}var i,o,n=this,r=this.element,s=this.options,a=s.theme||e.mobile.getInheritedTheme(this.element,"c"),l=" ui-body-"+a,c=s.mini?" ui-mini":"",d=r.is("[type='search'], :jqmData(type='search')"),u=s.clearSearchButtonText||s.clearBtnText,h=r.is("textarea, :jqmData(type='range')"),p=!!s.clearBtn&&!h,f=r.is("input")&&!r.is(":jqmData(type='range')");if(e("label[for='"+r.attr("id")+"']").addClass("ui-input-text"),i=r.addClass("ui-input-text ui-body-"+a),void 0===r[0].autocorrect||e.support.touchOverflow||(r[0].setAttribute("autocorrect","off"),r[0].setAttribute("autocomplete","off")),d?i=r.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield"+l+c+"'></div>").parent():f&&(i=r.wrap("<div class='ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow"+l+c+"'></div>").parent()),p||d?(o=e("<a href='#' class='ui-input-clear' title='"+u+"'>"+u+"</a>").bind("click",function(e){r.val("").focus().trigger("change"),o.addClass("ui-input-clear-hidden"),e.preventDefault()}).appendTo(i).buttonMarkup({icon:"delete",iconpos:"notext",corners:!0,shadow:!0,mini:s.mini}),d||i.addClass("ui-input-has-clear"),t(),r.bind("paste cut keyup input focus change blur",t)):f||d||r.addClass("ui-corner-all ui-shadow-inset"+l+c),r.focus(function(){s.preventFocusZoom&&e.mobile.zoom.disable(!0),i.addClass(e.mobile.focusClass)}).blur(function(){i.removeClass(e.mobile.focusClass),s.preventFocusZoom&&e.mobile.zoom.enable(!0)}),r.is("textarea")){var m;this._keyup=function(){var e=r[0].scrollHeight;if(e>r[0].clientHeight){var t=parseFloat(r.css("padding-top"))+parseFloat(r.css("padding-bottom"));r.height(e-t+15)}},r.on("keyup change input paste",function(){clearTimeout(m),m=setTimeout(n._keyup,100)}),this._on(!0,e.mobile.document,{pagechange:"_keyup"}),e.trim(r.val())&&this._on(!0,e.mobile.window,{load:"_keyup"})}r.attr("disabled")&&this.disable()},disable:function(){var e=this.element.is("[type='search'], :jqmData(type='search')"),t=this.element.is("input")&&!this.element.is(":jqmData(type='range')");return(this.element.attr("disabled",!0)&&(t||e)?this.element.parent():this.element).addClass("ui-disabled"),this._setOption("disabled",!0)},enable:function(){var e=this.element.is("[type='search'], :jqmData(type='search')"),t=this.element.is("input")&&!this.element.is(":jqmData(type='range')");return(this.element.attr("disabled",!1)&&(t||e)?this.element.parent():this.element).removeClass("ui-disabled"),this._setOption("disabled",!1)}}),e.mobile.document.bind("pagecreate create",function(t){e.mobile.textinput.prototype.enhanceWithin(t.target,!0)})}(e),function(e){e.mobile.listview.prototype.options.filter=!1,e.mobile.listview.prototype.options.filterPlaceholder="Filter items...",e.mobile.listview.prototype.options.filterTheme="c",e.mobile.listview.prototype.options.filterReveal=!1;var t=function(e,t){return-1===e.toString().toLowerCase().indexOf(t)};e.mobile.listview.prototype.options.filterCallback=t,e.mobile.document.delegate("ul, ol","listviewcreate",function(){var i=e(this),o=i.data("mobile-listview");if(o&&o.options.filter){o.options.filterReveal&&i.children().addClass("ui-screen-hidden");var n=e("<form>",{class:"ui-listview-filter ui-bar-"+o.options.filterTheme,role:"search"}).submit(function(e){e.preventDefault(),r.blur()}),r=e("<input>",{placeholder:o.options.filterPlaceholder}).attr("data-"+e.mobile.ns+"type","search").jqmData("lastval","").bind("keyup change input",function(){var n,r=e(this),s=this.value.toLowerCase(),a=null,l=i.children(),c=r.jqmData("lastval")+"",d=!1,u="",h=o.options.filterCallback!==t;if(!c||c!==s){if(o._trigger("beforefilter","beforefilter",{input:this}),r.jqmData("lastval",s),h||s.length<c.length||0!==s.indexOf(c)?a=i.children():!(a=i.children(":not(.ui-screen-hidden)")).length&&o.options.filterReveal&&(a=i.children(".ui-screen-hidden")),s){for(var p=a.length-1;p>=0;p--)u=(n=e(a[p])).jqmData("filtertext")||n.text(),n.is("li:jqmData(role=list-divider)")?(n.toggleClass("ui-filter-hidequeue",!d),d=!1):o.options.filterCallback(u,s,n)?n.toggleClass("ui-filter-hidequeue",!0):d=!0;a.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden",!1),a.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden",!0).toggleClass("ui-filter-hidequeue",!1)}else a.toggleClass("ui-screen-hidden",!!o.options.filterReveal);o._addFirstLastClasses(l,o._getVisibles(l,!1),!1)}}).appendTo(n).textinput();o.options.inset&&n.addClass("ui-listview-filter-inset"),n.bind("submit",function(){return!1}).insertBefore(i)}})}(e),function(e){e.mobile.listview.prototype.options.autodividers=!1,e.mobile.listview.prototype.options.autodividersSelector=function(t){var i=e.trim(t.text())||null;return i?i=i.slice(0,1).toUpperCase():null},e.mobile.document.delegate("ul,ol","listviewcreate",function(){var t=e(this),o=t.data("mobile-listview");if(o&&o.options.autodividers){var n=function(){t.unbind("listviewafterrefresh",n),function(){t.find("li:jqmData(role='list-divider')").remove();for(var n,r,s=t.find("li"),a=null,l=0;l<s.length;l++){if(n=s[l],(r=o.options.autodividersSelector(e(n)))&&a!==r){var c=i.createElement("li");c.appendChild(i.createTextNode(r)),c.setAttribute("data-"+e.mobile.ns+"role","list-divider"),n.parentNode.insertBefore(c,n)}a=r}}(),o.refresh(),t.bind("listviewafterrefresh",n)};n()}})}(e),function(e){e(i).bind("pagecreate create",function(t){e(":jqmData(role='nojs')",t.target).addClass("ui-nojs")})}(e),function(e){e.mobile.behaviors.formReset={_handleFormReset:function(){this._on(this.element.closest("form"),{reset:function(){this._delay("_reset")}})}}}(e),function(e){e.widget("mobile.checkboxradio",e.mobile.widget,e.extend({options:{theme:null,mini:!1,initSelector:"input[type='checkbox'],input[type='radio']"},_create:function(){var t=this,o=this.element,n=this.options,r=function(e,t){return e.jqmData(t)||e.closest("form, fieldset").jqmData(t)},s=e(o).closest("label"),a=s.length?s:e(o).closest("form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')").find("label").filter("[for='"+o[0].id+"']").first(),l=o[0].type,c=r(o,"mini")||n.mini,d=l+"-on",u=l+"-off",h=r(o,"iconpos"),p="ui-"+d,f="ui-"+u;if("checkbox"===l||"radio"===l){e.extend(this,{label:a,inputtype:l,checkedClass:p,uncheckedClass:f,checkedicon:d,uncheckedicon:u}),n.theme||(n.theme=e.mobile.getInheritedTheme(this.element,"c")),a.buttonMarkup({theme:n.theme,icon:u,shadow:!1,mini:c,iconpos:h});var m=i.createElement("div");m.className="ui-"+l,o.add(a).wrapAll(m),a.bind({vmouseover:function(t){e(this).parent().is(".ui-disabled")&&t.stopPropagation()},vclick:function(e){return o.is(":disabled")?void e.preventDefault():(t._cacheVals(),o.prop("checked","radio"===l||!o.prop("checked")),o.triggerHandler("click"),t._getInputSet().not(o).prop("checked",!1),t._updateAll(),!1)}}),o.bind({vmousedown:function(){t._cacheVals()},vclick:function(){var i=e(this);i.is(":checked")?(i.prop("checked",!0),t._getInputSet().not(i).prop("checked",!1)):i.prop("checked",!1),t._updateAll()},focus:function(){a.addClass(e.mobile.focusClass)},blur:function(){a.removeClass(e.mobile.focusClass)}}),this._handleFormReset(),this.refresh()}},_cacheVals:function(){this._getInputSet().each(function(){e(this).jqmData("cacheVal",this.checked)})},_getInputSet:function(){return"checkbox"===this.inputtype?this.element:this.element.closest("form, :jqmData(role='page'), :jqmData(role='dialog')").find("input[name='"+this.element[0].name+"'][type='"+this.inputtype+"']")},_updateAll:function(){var t=this;this._getInputSet().each(function(){var i=e(this);(this.checked||"checkbox"===t.inputtype)&&i.trigger("change")}).checkboxradio("refresh")},_reset:function(){this.refresh()},refresh:function(){var t=this.element[0],i=" "+e.mobile.activeBtnClass,o=this.checkedClass+(this.element.parents(".ui-controlgroup-horizontal").length?i:""),n=this.label;t.checked?n.removeClass(this.uncheckedClass+i).addClass(o).buttonMarkup({icon:this.checkedicon}):n.removeClass(o).addClass(this.uncheckedClass).buttonMarkup({icon:this.uncheckedicon}),t.disabled?this.disable():this.enable()},disable:function(){this.element.prop("disabled",!0).parent().addClass("ui-disabled")},enable:function(){this.element.prop("disabled",!1).parent().removeClass("ui-disabled")}},e.mobile.behaviors.formReset)),e.mobile.document.bind("pagecreate create",function(t){e.mobile.checkboxradio.prototype.enhanceWithin(t.target,!0)})}(e),function(e){e.widget("mobile.button",e.mobile.widget,{options:{theme:null,icon:null,iconpos:null,corners:!0,shadow:!0,iconshadow:!0,inline:null,mini:null,initSelector:"button, [type='button'], [type='submit'], [type='reset']"},_create:function(){var t,i=this.element,o=function(e){var t,i={};for(t in e)null!==e[t]&&"initSelector"!==t&&(i[t]=e[t]);return i}(this.options),n="";return"A"===i[0].tagName?void(i.hasClass("ui-btn")||i.buttonMarkup()):(this.options.theme||(this.options.theme=e.mobile.getInheritedTheme(this.element,"c")),~i[0].className.indexOf("ui-btn-left")&&(n="ui-btn-left"),~i[0].className.indexOf("ui-btn-right")&&(n="ui-btn-right"),("submit"===i.attr("type")||"reset"===i.attr("type"))&&(n?n+=" ui-submit":n="ui-submit"),e("label[for='"+i.attr("id")+"']").addClass("ui-submit"),this.button=e("<div></div>")[i.html()?"html":"text"](i.html()||i.val()).insertBefore(i).buttonMarkup(o).addClass(n).append(i.addClass("ui-btn-hidden")),t=this.button,i.bind({focus:function(){t.addClass(e.mobile.focusClass)},blur:function(){t.removeClass(e.mobile.focusClass)}}),void this.refresh())},_setOption:function(t,i){var o={};o[t]=i,"initSelector"!==t&&(this.button.buttonMarkup(o),this.element.attr("data-"+(e.mobile.ns||"")+t.replace(/([A-Z])/,"-$1").toLowerCase(),i)),this._super("_setOption",t,i)},enable:function(){return this.element.attr("disabled",!1),this.button.removeClass("ui-disabled").attr("aria-disabled",!1),this._setOption("disabled",!1)},disable:function(){return this.element.attr("disabled",!0),this.button.addClass("ui-disabled").attr("aria-disabled",!0),this._setOption("disabled",!0)},refresh:function(){var t=this.element;t.prop("disabled")?this.disable():this.enable(),e(this.button.data("buttonElements").text)[t.html()?"html":"text"](t.html()||t.val())}}),e.mobile.document.bind("pagecreate create",function(t){e.mobile.button.prototype.enhanceWithin(t.target,!0)})}(e),function(e,o){e.widget("mobile.slider",e.mobile.widget,e.extend({widgetEventPrefix:"slide",options:{theme:null,trackTheme:null,disabled:!1,initSelector:"input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",mini:!1,highlight:!1},_create:function(){var n,r,s=this.element,a=e.mobile.getInheritedTheme(s,"c"),l=this.options.theme||a,c=this.options.trackTheme||a,d=s[0].nodeName.toLowerCase(),u=(this.isToggleSwitch="select"===d,s.parent().is(":jqmData(role='rangeslider')")),h=this.isToggleSwitch?"ui-slider-switch":"",p=s.attr("id"),f=e("[for='"+p+"']"),m=f.attr("id")||p+"-label",g=f.attr("id",m),b=this.isToggleSwitch?0:parseFloat(s.attr("min")),v=this.isToggleSwitch?s.find("option").length-1:parseFloat(s.attr("max")),y=t.parseFloat(s.attr("step")||1),x=this.options.mini||s.jqmData("mini")?" ui-mini":"",_=i.createElement("a"),w=e(_),k=i.createElement("div"),C=e(k),S=!(!this.options.highlight||this.isToggleSwitch)&&function(){var t=i.createElement("div");return t.className="ui-slider-bg "+e.mobile.activeBtnClass+" ui-btn-corner-all",e(t).prependTo(C)}();if(_.setAttribute("href","#"),k.setAttribute("role","application"),k.className=[this.isToggleSwitch?"ui-slider ":"ui-slider-track ",h," ui-btn-down-",c," ui-btn-corner-all",x].join(""),_.className="ui-slider-handle",k.appendChild(_),w.buttonMarkup({corners:!0,theme:l,shadow:!0}).attr({role:"slider","aria-valuemin":b,"aria-valuemax":v,"aria-valuenow":this._value(),"aria-valuetext":this._value(),title:this._value(),"aria-labelledby":m}),e.extend(this,{slider:C,handle:w,type:d,step:y,max:v,min:b,valuebg:S,isRangeslider:u,dragging:!1,beforeStart:null,userModified:!1,mouseMoved:!1}),this.isToggleSwitch){(r=i.createElement("div")).className="ui-slider-inneroffset";for(var T=0,A=k.childNodes.length;A>T;T++)r.appendChild(k.childNodes[T]);k.appendChild(r),w.addClass("ui-slider-handle-snapping");for(var E=0,$=(n=s.find("option")).length;$>E;E++){var P=E?"a":"b",D=E?" "+e.mobile.activeBtnClass:" ui-btn-down-"+c,z=(i.createElement("div"),i.createElement("span"));z.className=["ui-slider-label ui-slider-label-",P,D," ui-btn-corner-all"].join(""),z.setAttribute("role","img"),z.appendChild(i.createTextNode(n[E].innerHTML)),e(z).prependTo(C)}this._labels=e(".ui-slider-label",C)}g.addClass("ui-slider"),s.addClass(this.isToggleSwitch?"ui-slider-switch":"ui-slider-input"),this._on(s,{change:"_controlChange",keyup:"_controlKeyup",blur:"_controlBlur",vmouseup:"_controlVMouseUp"}),C.bind("vmousedown",e.proxy(this._sliderVMouseDown,this)).bind("vclick",!1),this._on(i,{vmousemove:"_preventDocumentDrag"}),this._on(C.add(i),{vmouseup:"_sliderVMouseUp"}),C.insertAfter(s),this.isToggleSwitch||u||(r=this.options.mini?"<div class='ui-slider ui-mini'>":"<div class='ui-slider'>",s.add(C).wrapAll(r)),this.isToggleSwitch&&this.handle.bind({focus:function(){C.addClass(e.mobile.focusClass)},blur:function(){C.removeClass(e.mobile.focusClass)}}),this._on(this.handle,{vmousedown:"_handleVMouseDown",keydown:"_handleKeydown",keyup:"_handleKeyup"}),this.handle.bind("vclick",!1),this._handleFormReset(),this.refresh(o,o,!0)},_controlChange:function(e){return!1!==this._trigger("controlchange",e)&&void(this.mouseMoved||this.refresh(this._value(),!0))},_controlKeyup:function(){this.refresh(this._value(),!0,!0)},_controlBlur:function(){this.refresh(this._value(),!0)},_controlVMouseUp:function(){this._checkedRefresh()},_handleVMouseDown:function(){this.handle.focus()},_handleKeydown:function(t){var i=this._value();if(!this.options.disabled){switch(t.keyCode){case e.mobile.keyCode.HOME:case e.mobile.keyCode.END:case e.mobile.keyCode.PAGE_UP:case e.mobile.keyCode.PAGE_DOWN:case e.mobile.keyCode.UP:case e.mobile.keyCode.RIGHT:case e.mobile.keyCode.DOWN:case e.mobile.keyCode.LEFT:t.preventDefault(),this._keySliding||(this._keySliding=!0,this.handle.addClass("ui-state-active"))}switch(t.keyCode){case e.mobile.keyCode.HOME:this.refresh(this.min);break;case e.mobile.keyCode.END:this.refresh(this.max);break;case e.mobile.keyCode.PAGE_UP:case e.mobile.keyCode.UP:case e.mobile.keyCode.RIGHT:this.refresh(i+this.step);break;case e.mobile.keyCode.PAGE_DOWN:case e.mobile.keyCode.DOWN:case e.mobile.keyCode.LEFT:this.refresh(i-this.step)}}},_handleKeyup:function(){this._keySliding&&(this._keySliding=!1,this.handle.removeClass("ui-state-active"))},_sliderVMouseDown:function(e){return this.options.disabled||1!==e.which&&0!==e.which&&e.which!==o||!1===this._trigger("beforestart",e)||(this.dragging=!0,this.userModified=!1,this.mouseMoved=!1,this.isToggleSwitch&&(this.beforeStart=this.element[0].selectedIndex),this.refresh(e),this._trigger("start")),!1},_sliderVMouseUp:function(){return this.dragging?(this.dragging=!1,this.isToggleSwitch&&(this.handle.addClass("ui-slider-handle-snapping"),this.mouseMoved?this.userModified?this.refresh(0===this.beforeStart?1:0):this.refresh(this.beforeStart):this.refresh(0===this.beforeStart?1:0)),this.mouseMoved=!1,this._trigger("stop"),!1):void 0},_preventDocumentDrag:function(e){return!1!==this._trigger("drag",e)&&(this.dragging&&!this.options.disabled?(this.mouseMoved=!0,this.isToggleSwitch&&this.handle.removeClass("ui-slider-handle-snapping"),this.refresh(e),this.userModified=this.beforeStart!==this.element[0].selectedIndex,!1):void 0)},_checkedRefresh:function(){this.value!==this._value()&&this.refresh(this._value())},_value:function(){return this.isToggleSwitch?this.element[0].selectedIndex:parseFloat(this.element.val())},_reset:function(){this.refresh(o,!1,!0)},refresh:function(t,o,n){var r,s,a,l=this,c=e.mobile.getInheritedTheme(this.element,"c"),d=this.options.theme||c,u=this.options.trackTheme||c;l.slider[0].className=[this.isToggleSwitch?"ui-slider ui-slider-switch":"ui-slider-track"," ui-btn-down-"+u," ui-btn-corner-all",this.options.mini?" ui-mini":""].join(""),(this.options.disabled||this.element.attr("disabled"))&&this.disable(),this.value=this._value(),this.options.highlight&&!this.isToggleSwitch&&0===this.slider.find(".ui-slider-bg").length&&(this.valuebg=function(){var t=i.createElement("div");return t.className="ui-slider-bg "+e.mobile.activeBtnClass+" ui-btn-corner-all",e(t).prependTo(l.slider)}()),this.handle.buttonMarkup({corners:!0,theme:d,shadow:!0});var h,p,f=this.element,m=!this.isToggleSwitch,g=m?[]:f.find("option"),b=m?parseFloat(f.attr("min")):0,v=m?parseFloat(f.attr("max")):g.length-1,y=m&&parseFloat(f.attr("step"))>0?parseFloat(f.attr("step")):1;if("object"==typeof t){if(a=t,r=this.slider.offset().left,h=(s=this.slider.width())/((v-b)/y),!this.dragging||a.pageX<r-8||a.pageX>r+s+8)return;p=h>1?(a.pageX-r)/s*100:Math.round((a.pageX-r)/s*100)}else null==t&&(t=m?parseFloat(f.val()||0):f[0].selectedIndex),p=(parseFloat(t)-b)/(v-b)*100;if(!isNaN(p)){var x=p/100*(v-b)+b,_=(x-b)%y,w=x-_;2*Math.abs(_)>=y&&(w+=_>0?y:-y);var k=100/((v-b)/y);if(x=parseFloat(w.toFixed(5)),void 0===h&&(h=s/((v-b)/y)),h>1&&m&&(p=(x-b)*k*(1/y)),0>p&&(p=0),p>100&&(p=100),b>x&&(x=b),x>v&&(x=v),this.handle.css("left",p+"%"),this.handle[0].setAttribute("aria-valuenow",m?x:g.eq(x).attr("value")),this.handle[0].setAttribute("aria-valuetext",m?x:g.eq(x).getEncodedText()),this.handle[0].setAttribute("title",m?x:g.eq(x).getEncodedText()),this.valuebg&&this.valuebg.css("width",p+"%"),this._labels){var C=this.handle.width()/this.slider.width()*100,S=p&&C+(100-C)*p/100,T=100===p?0:Math.min(C+100-S,100);this._labels.each(function(){var t=e(this).is(".ui-slider-label-a");e(this).width((t?S:T)+"%")})}if(!n){var A=!1;if(m?(A=f.val()!==x,f.val(x)):(A=f[0].selectedIndex!==x,f[0].selectedIndex=x),!1===this._trigger("beforechange",t))return!1;!o&&A&&f.trigger("change")}}},enable:function(){return this.element.attr("disabled",!1),this.slider.removeClass("ui-disabled").attr("aria-disabled",!1),this._setOption("disabled",!1)},disable:function(){return this.element.attr("disabled",!0),this.slider.addClass("ui-disabled").attr("aria-disabled",!0),this._setOption("disabled",!0)}},e.mobile.behaviors.formReset)),e.mobile.document.bind("pagecreate create",function(t){e.mobile.slider.prototype.enhanceWithin(t.target,!0)})}(e),function(e){e.widget("mobile.rangeslider",e.mobile.widget,{options:{theme:null,trackTheme:null,disabled:!1,initSelector:":jqmData(role='rangeslider')",mini:!1,highlight:!0},_create:function(){var t=this.element,i=this.options.mini?"ui-rangeslider ui-mini":"ui-rangeslider",o=t.find("input").first(),n=t.find("input").last(),r=t.find("label").first(),s=e.data(o.get(0),"mobileSlider").slider,a=e.data(n.get(0),"mobileSlider").slider,l=e.data(o.get(0),"mobileSlider").handle,c=e('<div class="ui-rangeslider-sliders" />').appendTo(t);t.find("label").length>1&&t.find("label").last().hide(),o.addClass("ui-rangeslider-first"),n.addClass("ui-rangeslider-last"),t.addClass(i),s.appendTo(c),a.appendTo(c),r.prependTo(t),l.prependTo(a),e.extend(this,{_inputFirst:o,_inputLast:n,_sliderFirst:s,_sliderLast:a,_targetVal:null,_sliderTarget:!1,_sliders:c,_proxy:!1}),this.refresh(),this._on(this.element.find("input.ui-slider-input"),{slidebeforestart:"_slidebeforestart",slidestop:"_slidestop",slidedrag:"_slidedrag",slidebeforechange:"_change",blur:"_change",keyup:"_change"}),this._on({mousedown:"_change"}),this._on(this.element.closest("form"),{reset:"_handleReset"}),this._on(l,{vmousedown:"_dragFirstHandle"})},_handleReset:function(){var e=this;setTimeout(function(){e._updateHighlight()},0)},_dragFirstHandle:function(t){return e.data(this._inputFirst.get(0),"mobileSlider").dragging=!0,e.data(this._inputFirst.get(0),"mobileSlider").refresh(t),!1},_slidedrag:function(t){var i=e(t.target).is(this._inputFirst),o=i?this._inputLast:this._inputFirst;return this._sliderTarget=!1,"first"===this._proxy&&i||"last"===this._proxy&&!i?(e.data(o.get(0),"mobileSlider").dragging=!0,e.data(o.get(0),"mobileSlider").refresh(t),!1):void 0},_slidestop:function(t){var i=e(t.target).is(this._inputFirst);this._proxy=!1,this.element.find("input").trigger("vmouseup"),this._sliderFirst.css("z-index",i?1:"")},_slidebeforestart:function(t){this._sliderTarget=!1,e(t.originalEvent.target).hasClass("ui-slider-track")&&(this._sliderTarget=!0,this._targetVal=e(t.target).val())},_setOption:function(e){this._superApply(e),this.refresh()},refresh:function(){var e=this.element,t=this.options;e.find("input").slider({theme:t.theme,trackTheme:t.trackTheme,disabled:t.disabled,mini:t.mini,highlight:t.highlight}).slider("refresh"),this._updateHighlight()},_change:function(t){if("keyup"===t.type)return this._updateHighlight(),!1;var i=this,o=parseFloat(this._inputFirst.val(),10),n=parseFloat(this._inputLast.val(),10),r=e(t.target).hasClass("ui-rangeslider-first"),s=r?this._inputFirst:this._inputLast,a=r?this._inputLast:this._inputFirst;if(this._inputFirst.val()>this._inputLast.val()&&"mousedown"===t.type&&!e(t.target).hasClass("ui-slider-handle"))s.blur();else if("mousedown"===t.type)return;return o>n&&!this._sliderTarget?(s.val(r?n:o).slider("refresh"),this._trigger("normalize")):o>n&&(s.val(this._targetVal).slider("refresh"),setTimeout(function(){a.val(r?o:n).slider("refresh"),e.data(a.get(0),"mobileSlider").handle.focus(),i._sliderFirst.css("z-index",r?"":1),i._trigger("normalize")},0),this._proxy=r?"first":"last"),o===n?(e.data(s.get(0),"mobileSlider").handle.css("z-index",1),e.data(a.get(0),"mobileSlider").handle.css("z-index",0)):(e.data(a.get(0),"mobileSlider").handle.css("z-index",""),e.data(s.get(0),"mobileSlider").handle.css("z-index","")),this._updateHighlight(),!(o>=n)&&void 0},_updateHighlight:function(){var t=parseInt(e.data(this._inputFirst.get(0),"mobileSlider").handle.get(0).style.left,10),i=parseInt(e.data(this._inputLast.get(0),"mobileSlider").handle.get(0).style.left,10)-t;this.element.find(".ui-slider-bg").css({"margin-left":t+"%",width:i+"%"})},_destroy:function(){this.element.removeClass("ui-rangeslider ui-mini").find("label").show(),this._inputFirst.after(this._sliderFirst),this._inputLast.after(this._sliderLast),this._sliders.remove(),this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")}}),e.widget("mobile.rangeslider",e.mobile.rangeslider,e.mobile.behaviors.formReset),e(i).bind("pagecreate create",function(t){e.mobile.rangeslider.prototype.enhanceWithin(t.target,!0)})}(e),function(e){e.widget("mobile.selectmenu",e.mobile.widget,e.extend({options:{theme:null,disabled:!1,icon:"arrow-d",iconpos:"right",inline:!1,corners:!0,shadow:!0,iconshadow:!0,overlayTheme:"a",dividerTheme:"b",hidePlaceholderMenuItems:!0,closeText:"Close",nativeMenu:!0,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,initSelector:"select:not( :jqmData(role='slider') )",mini:!1},_button:function(){return e("<div/>")},_setDisabled:function(e){return this.element.attr("disabled",e),this.button.attr("aria-disabled",e),this._setOption("disabled",e)},_focusButton:function(){var e=this;setTimeout(function(){e.button.focus()},40)},_selectOptions:function(){return this.select.find("option")},_preExtension:function(){var t="";~this.element[0].className.indexOf("ui-btn-left")&&(t=" ui-btn-left"),~this.element[0].className.indexOf("ui-btn-right")&&(t=" ui-btn-right"),this.select=this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select"+t+"'>"),this.selectID=this.select.attr("id"),this.label=e("label[for='"+this.selectID+"']").addClass("ui-select"),this.isMultiple=this.select[0].multiple,this.options.theme||(this.options.theme=e.mobile.getInheritedTheme(this.select,"c"))},_destroy:function(){var e=this.element.parents(".ui-select");e.length>0&&(e.is(".ui-btn-left, .ui-btn-right")&&this.element.addClass(e.is(".ui-btn-left")?"ui-btn-left":"ui-btn-right"),this.element.insertAfter(e),e.remove())},_create:function(){this._preExtension(),this._trigger("beforeCreate"),this.button=this._button();var i=this,o=this.options,n=o.inline||this.select.jqmData("inline"),r=o.mini||this.select.jqmData("mini"),s=!!o.icon&&(o.iconpos||this.select.jqmData("iconpos")),a=(-1===this.select[0].selectedIndex||this.select[0].selectedIndex,this.button.insertBefore(this.select).buttonMarkup({theme:o.theme,icon:o.icon,iconpos:s,inline:n,corners:o.corners,shadow:o.shadow,iconshadow:o.iconshadow,mini:r}));this.setButtonText(),o.nativeMenu&&t.opera&&t.opera.version&&a.addClass("ui-select-nativeonly"),this.isMultiple&&(this.buttonCount=e("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(a.addClass("ui-li-has-count"))),(o.disabled||this.element.attr("disabled"))&&this.disable(),this.select.change(function(){i.refresh(),o.nativeMenu&&this.blur()}),this._handleFormReset(),this.build()},build:function(){var t=this;this.select.appendTo(t.button).bind("vmousedown",function(){t.button.addClass(e.mobile.activeBtnClass)}).bind("focus",function(){t.button.addClass(e.mobile.focusClass)}).bind("blur",function(){t.button.removeClass(e.mobile.focusClass)}).bind("focus vmouseover",function(){t.button.trigger("vmouseover")}).bind("vmousemove",function(){t.button.removeClass(e.mobile.activeBtnClass)}).bind("change blur vmouseout",function(){t.button.trigger("vmouseout").removeClass(e.mobile.activeBtnClass)}).bind("change blur",function(){t.button.removeClass("ui-btn-down-"+t.options.theme)}),t.button.bind("vmousedown",function(){t.options.preventFocusZoom&&e.mobile.zoom.disable(!0)}),t.label.bind("click focus",function(){t.options.preventFocusZoom&&e.mobile.zoom.disable(!0)}),t.select.bind("focus",function(){t.options.preventFocusZoom&&e.mobile.zoom.disable(!0)}),t.button.bind("mouseup",function(){t.options.preventFocusZoom&&setTimeout(function(){e.mobile.zoom.enable(!0)},0)}),t.select.bind("blur",function(){t.options.preventFocusZoom&&e.mobile.zoom.enable(!0)})},selected:function(){return this._selectOptions().filter(":selected")},selectedIndices:function(){var e=this;return this.selected().map(function(){return e._selectOptions().index(this)}).get()},setButtonText:function(){var t=this,o=this.selected(),n=this.placeholder,r=e(i.createElement("span"));this.button.find(".ui-btn-text").html(function(){return n=o.length?o.map(function(){return e(this).text()}).get().join(", "):t.placeholder,r.text(n).addClass(t.select.attr("class")).addClass(o.attr("class"))})},setButtonCount:function(){var e=this.selected();this.isMultiple&&this.buttonCount[e.length>1?"show":"hide"]().text(e.length)},_reset:function(){this.refresh()},refresh:function(){this.setButtonText(),this.setButtonCount()},open:e.noop,close:e.noop,disable:function(){this._setDisabled(!0),this.button.addClass("ui-disabled")},enable:function(){this._setDisabled(!1),this.button.removeClass("ui-disabled")}},e.mobile.behaviors.formReset)),e.mobile.document.bind("pagecreate create",function(t){e.mobile.selectmenu.prototype.enhanceWithin(t.target,!0)})}(e),function(e,o){function n(e,t,i,o){return t>e?i+(e-t)/2:Math.min(Math.max(i,o-t/2),i+e-t)}function r(){var i=e.mobile.window;return{x:i.scrollLeft(),y:i.scrollTop(),cx:t.innerWidth||i.width(),cy:t.innerHeight||i.height()}}e.widget("mobile.popup",e.mobile.widget,{options:{theme:null,overlayTheme:null,shadow:!0,corners:!0,transition:"none",positionTo:"origin",tolerance:null,initSelector:":jqmData(role='popup')",closeLinkSelector:"a:jqmData(rel='back')",closeLinkEvents:"click.popup",navigateEvents:"navigate.popup",closeEvents:"navigate.popup pagebeforechange.popup",dismissible:!0,history:!e.mobile.browser.oldIE},_eatEventAndClose:function(e){return e.preventDefault(),e.stopImmediatePropagation(),this.options.dismissible&&this.close(),!1},_resizeScreen:function(){var e=this._ui.container.outerHeight(!0);this._ui.screen.removeAttr("style"),e>this._ui.screen.height()&&this._ui.screen.height(e)},_handleWindowKeyUp:function(t){return this._isOpen&&t.keyCode===e.mobile.keyCode.ESCAPE?this._eatEventAndClose(t):void 0},_expectResizeEvent:function(){var t=r();if(this._resizeData){if(t.x===this._resizeData.winCoords.x&&t.y===this._resizeData.winCoords.y&&t.cx===this._resizeData.winCoords.cx&&t.cy===this._resizeData.winCoords.cy)return!1;clearTimeout(this._resizeData.timeoutId)}return this._resizeData={timeoutId:setTimeout(e.proxy(this,"_resizeTimeout"),200),winCoords:t},!0},_resizeTimeout:function(){this._isOpen?this._expectResizeEvent()||(this._ui.container.hasClass("ui-popup-hidden")&&(this._ui.container.removeClass("ui-popup-hidden"),this.reposition({positionTo:"window"}),this._ignoreResizeEvents()),this._resizeScreen(),this._resizeData=null,this._orientationchangeInProgress=!1):(this._resizeData=null,this._orientationchangeInProgress=!1)},_ignoreResizeEvents:function(){var e=this;this._ignoreResizeTo&&clearTimeout(this._ignoreResizeTo),this._ignoreResizeTo=setTimeout(function(){e._ignoreResizeTo=0},1e3)},_handleWindowResize:function(){this._isOpen&&0===this._ignoreResizeTo&&(!this._expectResizeEvent()&&!this._orientationchangeInProgress||this._ui.container.hasClass("ui-popup-hidden")||this._ui.container.addClass("ui-popup-hidden").removeAttr("style"))},_handleWindowOrientationchange:function(){!this._orientationchangeInProgress&&this._isOpen&&0===this._ignoreResizeTo&&(this._expectResizeEvent(),this._orientationchangeInProgress=!0)},_handleDocumentFocusIn:function(t){var o,n=t.target,r=this._ui;if(this._isOpen){if(n!==r.container[0]){if(0===(o=e(t.target)).parents().filter(r.container[0]).length)return e(i.activeElement).one("focus",function(){o.blur()}),r.focusElement.focus(),t.preventDefault(),t.stopImmediatePropagation(),!1;r.focusElement[0]===r.container[0]&&(r.focusElement=o)}this._ignoreResizeEvents()}},_create:function(){var t={screen:e("<div class='ui-screen-hidden ui-popup-screen'></div>"),placeholder:e("<div style='display: none;'>\x3c!-- placeholder --\x3e</div>"),container:e("<div class='ui-popup-container ui-popup-hidden'></div>")},i=this.element.closest(".ui-page"),o=this.element.attr("id"),n=this.options;n.history=n.history&&e.mobile.ajaxEnabled&&e.mobile.hashListeningEnabled,0===i.length&&(i=e("body")),n.container=n.container||e.mobile.pageContainer||i,i.append(t.screen),t.container.insertAfter(t.screen),t.placeholder.insertAfter(this.element),o&&(t.screen.attr("id",o+"-screen"),t.container.attr("id",o+"-popup"),t.placeholder.html("\x3c!-- placeholder for "+o+" --\x3e")),t.container.append(this.element),t.focusElement=t.container,this.element.addClass("ui-popup"),e.extend(this,{_scrollTop:0,_page:i,_ui:t,_fallbackTransition:"",_currentTransition:!1,_prereqs:null,_isOpen:!1,_tolerance:null,_resizeData:null,_ignoreResizeTo:0,_orientationchangeInProgress:!1}),this._applyTheme(this.element,n.theme,"body"),this._applyTheme(this._ui.screen,n.overlayTheme,"overlay"),this._applyTransition(n.transition),this.element.toggleClass("ui-overlay-shadow",n.shadow).toggleClass("ui-corner-all",n.corners),this._setTolerance(n.tolerance),t.screen.bind("vclick",e.proxy(this,"_eatEventAndClose")),this._on(e.mobile.window,{orientationchange:e.proxy(this,"_handleWindowOrientationchange"),resize:e.proxy(this,"_handleWindowResize"),keyup:e.proxy(this,"_handleWindowKeyUp")}),this._on(e.mobile.document,{focusin:e.proxy(this,"_handleDocumentFocusIn")})},_applyTheme:function(e,t,i){for(var o,n=(e.attr("class")||"").split(" "),r=null,s=String(t);n.length>0;){if(r=n.pop(),(o=new RegExp("^ui-"+i+"-([a-z])$").exec(r))&&o.length>1){r=o[1];break}r=null}t!==r&&(e.removeClass("ui-"+i+"-"+r),null!==t&&"none"!==t&&e.addClass("ui-"+i+"-"+s))},_setTheme:function(e){this._applyTheme(this.element,e,"body")},_setOverlayTheme:function(e){this._applyTheme(this._ui.screen,e,"overlay"),this._isOpen&&this._ui.screen.addClass("in")},_setShadow:function(e){this.element.toggleClass("ui-overlay-shadow",e)},_setCorners:function(e){this.element.toggleClass("ui-corner-all",e)},_applyTransition:function(t){this._ui.container.removeClass(this._fallbackTransition),t&&"none"!==t&&(this._fallbackTransition=e.mobile._maybeDegradeTransition(t),"none"===this._fallbackTransition&&(this._fallbackTransition=""),this._ui.container.addClass(this._fallbackTransition))},_setTransition:function(e){this._currentTransition||this._applyTransition(e)},_setTolerance:function(t){var i={t:30,r:15,b:30,l:15};if(t!==o){var n=String(t).split(",");switch(e.each(n,function(e,t){n[e]=parseInt(t,10)}),n.length){case 1:isNaN(n[0])||(i.t=i.r=i.b=i.l=n[0]);break;case 2:isNaN(n[0])||(i.t=i.b=n[0]),isNaN(n[1])||(i.l=i.r=n[1]);break;case 4:isNaN(n[0])||(i.t=n[0]),isNaN(n[1])||(i.r=n[1]),isNaN(n[2])||(i.b=n[2]),isNaN(n[3])||(i.l=n[3])}}this._tolerance=i},_setOption:function(e,t){var i="_set"+e.charAt(0).toUpperCase()+e.slice(1);this[i]!==o&&this[i](t),this._super(e,t)},_placementCoords:function(e){var t,o,s=r(),a={x:this._tolerance.l,y:s.y+this._tolerance.t,cx:s.cx-this._tolerance.l-this._tolerance.r,cy:s.cy-this._tolerance.t-this._tolerance.b};this._ui.container.css("max-width",a.cx),t={cx:this._ui.container.outerWidth(!0),cy:this._ui.container.outerHeight(!0)},(o={x:n(a.cx,t.cx,a.x,e.x),y:n(a.cy,t.cy,a.y,e.y)}).y=Math.max(0,o.y);var l=i.documentElement,c=i.body,d=Math.max(l.clientHeight,c.scrollHeight,c.offsetHeight,l.scrollHeight,l.offsetHeight);return o.y-=Math.min(o.y,Math.max(0,o.y+t.cy-d)),{left:o.x,top:o.y}},_createPrereqs:function(t,i,o){var n,r=this;(n={screen:e.Deferred(),container:e.Deferred()}).screen.then(function(){n===r._prereqs&&t()}),n.container.then(function(){n===r._prereqs&&i()}),e.when(n.screen,n.container).done(function(){n===r._prereqs&&(r._prereqs=null,o())}),r._prereqs=n},_animate:function(t){return this._ui.screen.removeClass(t.classToRemove).addClass(t.screenClassToAdd),t.prereqs.screen.resolve(),t.transition&&"none"!==t.transition&&(t.applyTransition&&this._applyTransition(t.transition),this._fallbackTransition)?void this._ui.container.animationComplete(e.proxy(t.prereqs.container,"resolve")).addClass(t.containerClassToAdd).removeClass(t.classToRemove):(this._ui.container.removeClass(t.classToRemove),void t.prereqs.container.resolve())},_desiredCoords:function(t){var i,o=null,n=r(),s=t.x,a=t.y,l=t.positionTo;if(l&&"origin"!==l)if("window"===l)s=n.cx/2+n.x,a=n.cy/2+n.y;else{try{o=e(l)}catch(e){o=null}o&&(o.filter(":visible"),0===o.length&&(o=null))}return o&&(s=(i=o.offset()).left+o.outerWidth()/2,a=i.top+o.outerHeight()/2),("number"!==e.type(s)||isNaN(s))&&(s=n.cx/2+n.x),("number"!==e.type(a)||isNaN(a))&&(a=n.cy/2+n.y),{x:s,y:a}},_reposition:function(e){e={x:e.x,y:e.y,positionTo:e.positionTo},this._trigger("beforeposition",o,e),this._ui.container.offset(this._placementCoords(this._desiredCoords(e)))},reposition:function(e){this._isOpen&&this._reposition(e)},_openPrereqsComplete:function(){this._ui.container.addClass("ui-popup-active"),this._isOpen=!0,this._resizeScreen(),this._ui.container.attr("tabindex","0").focus(),this._ignoreResizeEvents(),this._trigger("afteropen")},_open:function(t){var i=e.extend({},this.options,t),o=function(){var e=navigator.userAgent,t=e.match(/AppleWebKit\/([0-9\.]+)/),i=!!t&&t[1],o=e.match(/Android (\d+(?:\.\d+))/),n=!!o&&o[1],r=e.indexOf("Chrome")>-1;return!(!(null!==o&&"4.0"===n&&i&&i>534.13)||r)}();this._createPrereqs(e.noop,e.noop,e.proxy(this,"_openPrereqsComplete")),this._currentTransition=i.transition,this._applyTransition(i.transition),this.options.theme||this._setTheme(this._page.jqmData("theme")||e.mobile.getInheritedTheme(this._page,"c")),this._ui.screen.removeClass("ui-screen-hidden"),this._ui.container.removeClass("ui-popup-hidden"),this._reposition(i),this.options.overlayTheme&&o&&this.element.closest(".ui-page").addClass("ui-popup-open"),this._animate({additionalCondition:!0,transition:i.transition,classToRemove:"",screenClassToAdd:"in",containerClassToAdd:"in",applyTransition:!1,prereqs:this._prereqs})},_closePrereqScreen:function(){this._ui.screen.removeClass("out").addClass("ui-screen-hidden")},_closePrereqContainer:function(){this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden").removeAttr("style")},_closePrereqsDone:function(){var t=this._ui.container;t.removeAttr("tabindex"),e.mobile.popup.active=o,e(":focus",t[0]).add(t[0]).blur(),this._trigger("afterclose")},_close:function(t){this._ui.container.removeClass("ui-popup-active"),this._page.removeClass("ui-popup-open"),this._isOpen=!1,this._createPrereqs(e.proxy(this,"_closePrereqScreen"),e.proxy(this,"_closePrereqContainer"),e.proxy(this,"_closePrereqsDone")),this._animate({additionalCondition:this._ui.screen.hasClass("in"),transition:t?"none":this._currentTransition,classToRemove:"in",screenClassToAdd:"out",containerClassToAdd:"reverse out",applyTransition:!0,prereqs:this._prereqs})},_unenhance:function(){this._setTheme("none"),this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all"),this._ui.screen.remove(),this._ui.container.remove(),this._ui.placeholder.remove()},_destroy:function(){e.mobile.popup.active===this?(this.element.one("popupafterclose",e.proxy(this,"_unenhance")),this.close()):this._unenhance()},_closePopup:function(i,o){var n,r,s=this.options,a=!1;t.scrollTo(0,this._scrollTop),i&&"pagebeforechange"===i.type&&o&&(n="string"==typeof o.toPage?o.toPage:o.toPage.jqmData("url"),r=(n=e.mobile.path.parseUrl(n)).pathname+n.search+n.hash,this._myUrl!==e.mobile.path.makeUrlAbsolute(r)?a=!0:i.preventDefault()),s.container.unbind(s.closeEvents),this.element.undelegate(s.closeLinkSelector,s.closeLinkEvents),this._close(a)},_bindContainerClose:function(){this.options.container.one(this.options.closeEvents,e.proxy(this,"_closePopup"))},open:function(i){var o,n,r,s,a=this,l=this.options;if(!e.mobile.popup.active){if(e.mobile.popup.active=this,this._scrollTop=e.mobile.window.scrollTop(),!l.history)return a._open(i),a._bindContainerClose(),void a.element.delegate(l.closeLinkSelector,l.closeLinkEvents,function(e){a.close(),e.preventDefault()});if(s=e.mobile.urlHistory,n=e.mobile.dialogHashKey,r=e.mobile.activePage.is(".ui-dialog"),this._myUrl=o=s.getActive().url,o.indexOf(n)>-1&&!r&&s.activeIndex>0)return a._open(i),void a._bindContainerClose();-1!==o.indexOf(n)||r?o=e.mobile.path.parseLocation().hash+n:o+=o.indexOf("#")>-1?n:"#"+n,0===s.activeIndex&&o===s.initialDst&&(o+=n),e(t).one("beforenavigate",function(e){e.preventDefault(),a._open(i),a._bindContainerClose()}),this.urlAltered=!0,e.mobile.navigate(o,{role:"dialog"})}},close:function(){e.mobile.popup.active===this&&(this._scrollTop=e.mobile.window.scrollTop(),this.options.history&&this.urlAltered?(e.mobile.back(),this.urlAltered=!1):this._closePopup())}}),e.mobile.popup.handleLink=function(t){var i,o=t.closest(":jqmData(role='page')"),n=0===o.length?e("body"):o,r=e(e.mobile.path.parseUrl(t.attr("href")).hash,n[0]);r.data("mobile-popup")&&(i=t.offset(),r.popup("open",{x:i.left+t.outerWidth()/2,y:i.top+t.outerHeight()/2,transition:t.jqmData("transition"),positionTo:t.jqmData("position-to")})),setTimeout(function(){var i=t.parent().parent();i.hasClass("ui-li")&&(t=i.parent()),t.removeClass(e.mobile.activeBtnClass)},300)},e.mobile.document.bind("pagebeforechange",function(t,i){"popup"===i.options.role&&(e.mobile.popup.handleLink(i.options.link),t.preventDefault())}),e.mobile.document.bind("pagecreate create",function(t){e.mobile.popup.prototype.enhanceWithin(t.target,!0)})}(e),function(e,t){var o=function(o){var n,r=(o.select,o._destroy),s=o.selectID,a=s||(e.mobile.ns||"")+"uuid-"+o.uuid,l=a+"-listbox",c=a+"-dialog",d=o.label,u=o.select.closest(".ui-page"),h=o._selectOptions(),p=o.isMultiple=o.select[0].multiple,f=s+"-button",m=s+"-menu",g=e("<div data-"+e.mobile.ns+"role='dialog' id='"+c+"' data-"+e.mobile.ns+"theme='"+o.options.theme+"' data-"+e.mobile.ns+"overlay-theme='"+o.options.overlayTheme+"'><div data-"+e.mobile.ns+"role='header'><div class='ui-title'>"+d.getEncodedText()+"</div></div><div data-"+e.mobile.ns+"role='content'></div></div>"),b=e("<div id='"+l+"' class='ui-selectmenu'>").insertAfter(o.select).popup({theme:o.options.overlayTheme}),v=e("<ul>",{class:"ui-selectmenu-list",id:m,role:"listbox","aria-labelledby":f}).attr("data-"+e.mobile.ns+"theme",o.options.theme).attr("data-"+e.mobile.ns+"divider-theme",o.options.dividerTheme).appendTo(b),y=e("<div>",{class:"ui-header ui-bar-"+o.options.theme}).prependTo(b),x=e("<h1>",{class:"ui-title"}).appendTo(y);o.isMultiple&&(n=e("<a>",{text:o.options.closeText,href:"#",class:"ui-btn-left"}).attr("data-"+e.mobile.ns+"iconpos","notext").attr("data-"+e.mobile.ns+"icon","delete").appendTo(y).buttonMarkup()),e.extend(o,{select:o.select,selectID:s,buttonId:f,menuId:m,popupID:l,dialogID:c,thisPage:u,menuPage:g,label:d,selectOptions:h,isMultiple:p,theme:o.options.theme,listbox:b,list:v,header:y,headerTitle:x,headerClose:n,menuPageContent:void 0,menuPageClose:void 0,placeholder:"",build:function(){var i=this,n=function(e){return e.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,"\\$1")};i.refresh(),i._origTabIndex===t&&(i._origTabIndex=null!==i.select[0].getAttribute("tabindex")&&i.select.attr("tabindex")),i.select.attr("tabindex","-1").focus(function(){e(this).blur(),i.button.focus()}),i.button.bind("vclick keydown",function(t){i.options.disabled||i.isOpen||("vclick"===t.type||t.keyCode&&(t.keyCode===e.mobile.keyCode.ENTER||t.keyCode===e.mobile.keyCode.SPACE))&&(i._decideFormat(),"overlay"===i.menuType?i.button.attr("href","#"+n(i.popupID)).attr("data-"+(e.mobile.ns||"")+"rel","popup"):i.button.attr("href","#"+n(i.dialogID)).attr("data-"+(e.mobile.ns||"")+"rel","dialog"),i.isOpen=!0)}),i.list.attr("role","listbox").bind("focusin",function(t){e(t.target).attr("tabindex","0").trigger("vmouseover")}).bind("focusout",function(t){e(t.target).attr("tabindex","-1").trigger("vmouseout")}).delegate("li:not(.ui-disabled, .ui-li-divider)","click",function(t){var n=i.select[0].selectedIndex,r=i.list.find("li:not(.ui-li-divider)").index(this),s=i._selectOptions().eq(r)[0];s.selected=!i.isMultiple||!s.selected,i.isMultiple&&e(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on",s.selected).toggleClass("ui-icon-checkbox-off",!s.selected),(i.isMultiple||n!==r)&&i.select.trigger("change"),i.isMultiple?i.list.find("li:not(.ui-li-divider)").eq(r).addClass("ui-btn-down-"+o.options.theme).find("a").first().focus():i.close(),t.preventDefault()}).keydown(function(t){var i,n,r=e(t.target),s=r.closest("li");switch(t.keyCode){case 38:return(i=s.prev().not(".ui-selectmenu-placeholder")).is(".ui-li-divider")&&(i=i.prev()),i.length&&(r.blur().attr("tabindex","-1"),i.addClass("ui-btn-down-"+o.options.theme).find("a").first().focus()),!1;case 40:return(n=s.next()).is(".ui-li-divider")&&(n=n.next()),n.length&&(r.blur().attr("tabindex","-1"),n.addClass("ui-btn-down-"+o.options.theme).find("a").first().focus()),!1;case 13:case 32:return r.trigger("click"),!1}}),i.menuPage.bind("pagehide",function(){e.mobile._bindPageRemove.call(i.thisPage)}),i.listbox.bind("popupafterclose",function(){i.close()}),i.isMultiple&&i.headerClose.click(function(){return"overlay"===i.menuType?(i.close(),!1):void 0}),i.thisPage.addDependents(this.menuPage)},_isRebuildRequired:function(){var e=this.list.find("li");return this._selectOptions().text()!==e.text()},selected:function(){return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")},refresh:function(t){var i,o=this;this.element,this.isMultiple,(t||this._isRebuildRequired())&&o._buildList(),i=this.selectedIndices(),o.setButtonText(),o.setButtonCount(),o.list.find("li:not(.ui-li-divider)").removeClass(e.mobile.activeBtnClass).attr("aria-selected",!1).each(function(t){if(e.inArray(t,i)>-1){var n=e(this);n.attr("aria-selected",!0),o.isMultiple?n.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on"):n.is(".ui-selectmenu-placeholder")?n.next().addClass(e.mobile.activeBtnClass):n.addClass(e.mobile.activeBtnClass)}})},close:function(){if(!this.options.disabled&&this.isOpen){var e=this;"page"===e.menuType?(e.menuPage.dialog("close"),e.list.appendTo(e.listbox)):e.listbox.popup("close"),e._focusButton(),e.isOpen=!1}},open:function(){this.button.click()},_decideFormat:function(){function t(){var t=i.list.find("."+e.mobile.activeBtnClass+" a");0===t.length&&(t=i.list.find("li.ui-btn:not( :jqmData(placeholder='true') ) a")),t.first().focus().closest("li").addClass("ui-btn-down-"+o.options.theme)}var i=this,n=e.mobile.window,r=i.list.parent(),s=r.outerHeight(),a=(r.outerWidth(),e("."+e.mobile.activePageClass),n.scrollTop()),l=i.button.offset().top,c=n.height();n.width(),s>c-80||!e.support.scrollTop?(i.menuPage.appendTo(e.mobile.pageContainer).page(),i.menuPageContent=g.find(".ui-content"),i.menuPageClose=g.find(".ui-header a"),i.thisPage.unbind("pagehide.remove"),0===a&&l>c&&i.thisPage.one("pagehide",function(){e(this).jqmData("lastScroll",l)}),i.menuPage.one("pageshow",function(){t()}).one("pagehide",function(){i.close()}),i.menuType="page",i.menuPageContent.append(i.list),i.menuPage.find("div .ui-title").text(i.label.text())):(i.menuType="overlay",i.listbox.one("popupafteropen",t))},_buildList:function(){var t=this,o=this.options,n=this.placeholder,r=!0,s=t.isMultiple?"checkbox-off":"false";t.list.empty().filter(".ui-listview").listview("destroy");for(var a,l=t.select.find("option"),c=l.length,d=this.select[0],u="data-"+e.mobile.ns,h=u+"option-index",p=u+"icon",f=u+"role",m=u+"placeholder",g=i.createDocumentFragment(),b=!1,v=0;c>v;v++,b=!1){var y=l[v],x=e(y),_=y.parentNode,w=x.text(),k=i.createElement("a"),C=[];if(k.setAttribute("href","#"),k.appendChild(i.createTextNode(w)),_!==d&&"optgroup"===_.nodeName.toLowerCase()){var S=_.getAttribute("label");if(S!==a){var T=i.createElement("li");T.setAttribute(f,"list-divider"),T.setAttribute("role","option"),T.setAttribute("tabindex","-1"),T.appendChild(i.createTextNode(S)),g.appendChild(T),a=S}}!r||y.getAttribute("value")&&0!==w.length&&!x.jqmData("placeholder")||(r=!1,b=!0,null===y.getAttribute(m)&&(this._removePlaceholderAttr=!0),y.setAttribute(m,!0),o.hidePlaceholderMenuItems&&C.push("ui-selectmenu-placeholder"),n!==w&&(n=t.placeholder=w));var A=i.createElement("li");y.disabled&&(C.push("ui-disabled"),A.setAttribute("aria-disabled",!0)),A.setAttribute(h,v),A.setAttribute(p,s),b&&A.setAttribute(m,!0),A.className=C.join(" "),A.setAttribute("role","option"),k.setAttribute("tabindex","-1"),A.appendChild(k),g.appendChild(A)}t.list[0].appendChild(g),this.isMultiple||n.length?this.headerTitle.text(this.placeholder):this.header.hide(),t.list.listview()},_button:function(){return e("<a>",{href:"#",role:"button",id:this.buttonId,"aria-haspopup":"true","aria-owns":this.menuId})},_destroy:function(){this.close(),this._origTabIndex!==t&&(!1!==this._origTabIndex?this.select.attr("tabindex",this._origTabIndex):this.select.removeAttr("tabindex")),this._removePlaceholderAttr&&this._selectOptions().removeAttr("data-"+e.mobile.ns+"placeholder"),this.listbox.remove(),this.menuPage.remove(),r.apply(this,arguments)}})};e.mobile.document.bind("selectmenubeforecreate",function(t){var i=e(t.target).data("mobile-selectmenu");i.options.nativeMenu||0!==i.element.parents(":jqmData(role='popup')").length||o(i)})}(e),function(e,t){e.widget("mobile.controlgroup",e.mobile.widget,e.extend({options:{shadow:!1,corners:!0,excludeInvisible:!0,type:"vertical",mini:!1,initSelector:":jqmData(role='controlgroup')"},_create:function(){var i=this.element,o={inner:e("<div class='ui-controlgroup-controls'></div>"),legend:e("<div role='heading' class='ui-controlgroup-label'></div>")},n=i.children("legend"),r=this;i.wrapInner(o.inner),n.length&&o.legend.append(n).insertBefore(i.children(0)),i.addClass("ui-corner-all ui-controlgroup"),e.extend(this,{_initialRefresh:!0}),e.each(this.options,function(e,i){r.options[e]=t,r._setOption(e,i,!0)})},_init:function(){this.refresh()},_setOption:function(i,o){var n="_set"+i.charAt(0).toUpperCase()+i.slice(1);this[n]!==t&&this[n](o),this._super(i,o),this.element.attr("data-"+(e.mobile.ns||"")+i.replace(/([A-Z])/,"-$1").toLowerCase(),o)},_setType:function(e){this.element.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-"+e),this.refresh()},_setCorners:function(e){this.element.toggleClass("ui-corner-all",e)},_setShadow:function(e){this.element.toggleClass("ui-shadow",e)},_setMini:function(e){this.element.toggleClass("ui-mini",e)},container:function(){return this.element.children(".ui-controlgroup-controls")},refresh:function(){var t=this.element.find(".ui-btn").not(".ui-slider-handle"),i=this._initialRefresh;e.mobile.checkboxradio&&this.element.find(":mobile-checkboxradio").checkboxradio("refresh"),this._addFirstLastClasses(t,this.options.excludeInvisible?this._getVisibles(t,i):t,i),this._initialRefresh=!1}},e.mobile.behaviors.addFirstLastClasses)),e(function(){e.mobile.document.bind("pagecreate create",function(t){e.mobile.controlgroup.prototype.enhanceWithin(t.target,!0)})})}(e),function(e){e(i).bind("pagecreate create",function(t){e(t.target).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function(){var t=this,o=e(this).attr("href"),n=o.substring(1);t.setAttribute("aria-haspopup",!0),t.setAttribute("aria-owns",n),t.setAttribute("aria-expanded",!1),e(i).on("popupafteropen",o,function(){t.setAttribute("aria-expanded",!0)}).on("popupafterclose",o,function(){t.setAttribute("aria-expanded",!1)})}).end().not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")})}(e),function(e){e.widget("mobile.fixedtoolbar",e.mobile.widget,{options:{visibleOnPageShow:!0,disablePageZoom:!0,transition:"slide",fullscreen:!1,tapToggle:!0,tapToggleBlacklist:"a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-popup, .ui-panel, .ui-panel-dismiss-open",hideDuringFocus:"input, textarea, select",updatePagePadding:!0,trackPersistentToolbars:!0,supportBlacklist:function(){return!e.support.fixedPosition},initSelector:":jqmData(position='fixed')"},_create:function(){var t=this,i=t.options,o=t.element,n=o.is(":jqmData(role='header')")?"header":"footer",r=o.closest(".ui-page");return i.supportBlacklist()?void t.destroy():(o.addClass("ui-"+n+"-fixed"),i.fullscreen?(o.addClass("ui-"+n+"-fullscreen"),r.addClass("ui-page-"+n+"-fullscreen")):r.addClass("ui-page-"+n+"-fixed"),e.extend(this,{_thisPage:null}),t._addTransitionClass(),t._bindPageEvents(),void t._bindToggleHandlers())},_addTransitionClass:function(){var e=this.options.transition;e&&"none"!==e&&("slide"===e&&(e=this.element.is(".ui-header")?"slidedown":"slideup"),this.element.addClass(e))},_bindPageEvents:function(){this._thisPage=this.element.closest(".ui-page"),this._on(this._thisPage,{pagebeforeshow:"_handlePageBeforeShow",webkitAnimationStart:"_handleAnimationStart",animationstart:"_handleAnimationStart",updatelayout:"_handleAnimationStart",pageshow:"_handlePageShow",pagebeforehide:"_handlePageBeforeHide"})},_handlePageBeforeShow:function(){var t=this.options;t.disablePageZoom&&e.mobile.zoom.disable(!0),t.visibleOnPageShow||this.hide(!0)},_handleAnimationStart:function(){this.options.updatePagePadding&&this.updatePagePadding(this._thisPage)},_handlePageShow:function(){this.updatePagePadding(this._thisPage),this.options.updatePagePadding&&this._on(e.mobile.window,{throttledresize:"updatePagePadding"})},_handlePageBeforeHide:function(t,i){var o=this.options;if(o.disablePageZoom&&e.mobile.zoom.enable(!0),o.updatePagePadding&&this._off(e.mobile.window,"throttledresize"),o.trackPersistentToolbars){var n=e(".ui-footer-fixed:jqmData(id)",this._thisPage),r=e(".ui-header-fixed:jqmData(id)",this._thisPage),s=n.length&&i.nextPage&&e(".ui-footer-fixed:jqmData(id='"+n.jqmData("id")+"')",i.nextPage)||e(),a=r.length&&i.nextPage&&e(".ui-header-fixed:jqmData(id='"+r.jqmData("id")+"')",i.nextPage)||e();(s.length||a.length)&&(s.add(a).appendTo(e.mobile.pageContainer),i.nextPage.one("pageshow",function(){a.prependTo(this),s.appendTo(this)}))}},_visible:!0,updatePagePadding:function(t){var i=this.element,o=i.is(".ui-header"),n=parseFloat(i.css(o?"top":"bottom"));this.options.fullscreen||(t=t&&void 0===t.type&&t||this._thisPage||i.closest(".ui-page"),e(t).css("padding-"+(o?"top":"bottom"),i.outerHeight()+n))},_useTransition:function(t){var i=e.mobile.window,o=this.element,n=i.scrollTop(),r=o.height(),s=o.closest(".ui-page").height(),a=e.mobile.getScreenHeight(),l=o.is(":jqmData(role='header')")?"header":"footer";return!t&&(this.options.transition&&"none"!==this.options.transition&&("header"===l&&!this.options.fullscreen&&n>r||"footer"===l&&!this.options.fullscreen&&s-r>n+a)||this.options.fullscreen)},show:function(e){var t="ui-fixed-hidden",i=this.element;this._useTransition(e)?i.removeClass("out "+t).addClass("in").animationComplete(function(){i.removeClass("in")}):i.removeClass(t),this._visible=!0},hide:function(e){var t="ui-fixed-hidden",i=this.element,o="out"+("slide"===this.options.transition?" reverse":"");this._useTransition(e)?i.addClass(o).removeClass("in").animationComplete(function(){i.addClass(t).removeClass(o)}):i.addClass(t).removeClass(o),this._visible=!1},toggle:function(){this[this._visible?"hide":"show"]()},_bindToggleHandlers:function(){var t,i,o=this,n=o.options,r=o.element,s=!0;r.closest(".ui-page").bind("vclick",function(t){n.tapToggle&&!e(t.target).closest(n.tapToggleBlacklist).length&&o.toggle()}).bind("focusin focusout",function(r){screen.width<1025&&e(r.target).is(n.hideDuringFocus)&&!e(r.target).closest(".ui-header-fixed, .ui-footer-fixed").length&&("focusout"!==r.type||s?"focusin"===r.type&&s&&(clearTimeout(t),s=!1,i=setTimeout(function(){o.hide()},0)):(s=!0,clearTimeout(i),t=setTimeout(function(){o.show()},0)))})},_destroy:function(){var e=this.element,t=e.is(".ui-header");e.closest(".ui-page").css("padding-"+(t?"top":"bottom"),""),e.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"),e.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen")}}),e.mobile.document.bind("pagecreate create",function(t){e(t.target).jqmData("fullscreen")&&e(e.mobile.fixedtoolbar.prototype.options.initSelector,t.target).not(":jqmData(fullscreen)").jqmData("fullscreen",!0),e.mobile.fixedtoolbar.prototype.enhanceWithin(t.target)})}(e),function(e){e.widget("mobile.fixedtoolbar",e.mobile.fixedtoolbar,{_create:function(){this._super(),this._workarounds()},_workarounds:function(){var e=navigator.userAgent,t=navigator.platform,i=e.match(/AppleWebKit\/([0-9]+)/),o=!!i&&i[1],n=null,r=this;if(t.indexOf("iPhone")>-1||t.indexOf("iPad")>-1||t.indexOf("iPod")>-1)n="ios";else{if(!(e.indexOf("Android")>-1))return;n="android"}if("ios"===n)r._bindScrollWorkaround();else{if(!("android"===n&&o&&534>o))return;r._bindScrollWorkaround(),r._bindListThumbWorkaround()}},_viewportOffset:function(){var t=this.element,i=t.is(".ui-header"),o=Math.abs(t.offset().top-e.mobile.window.scrollTop());return i||(o=Math.round(o-e.mobile.window.height()+t.outerHeight())-60),o},_bindScrollWorkaround:function(){var t=this;this._on(e.mobile.window,{scrollstop:function(){t._viewportOffset()>2&&t._visible&&t._triggerRedraw()}})},_bindListThumbWorkaround:function(){this.element.closest(".ui-page").addClass("ui-android-2x-fixed")},_triggerRedraw:function(){var t=parseFloat(e(".ui-page-active").css("padding-bottom"));e(".ui-page-active").css("padding-bottom",t+1+"px"),setTimeout(function(){e(".ui-page-active").css("padding-bottom",t+"px")},0)},destroy:function(){this._super(),this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")}})}(e),function(e){e.widget("mobile.panel",e.mobile.widget,{options:{classes:{panel:"ui-panel",panelOpen:"ui-panel-open",panelClosed:"ui-panel-closed",panelFixed:"ui-panel-fixed",panelInner:"ui-panel-inner",modal:"ui-panel-dismiss",modalOpen:"ui-panel-dismiss-open",pagePanel:"ui-page-panel",pagePanelOpen:"ui-page-panel-open",contentWrap:"ui-panel-content-wrap",contentWrapOpen:"ui-panel-content-wrap-open",contentWrapClosed:"ui-panel-content-wrap-closed",contentFixedToolbar:"ui-panel-content-fixed-toolbar",contentFixedToolbarOpen:"ui-panel-content-fixed-toolbar-open",contentFixedToolbarClosed:"ui-panel-content-fixed-toolbar-closed",animate:"ui-panel-animate"},animate:!0,theme:"c",position:"left",dismissible:!0,display:"reveal",initSelector:":jqmData(role='panel')",swipeClose:!0,positionFixed:!1},_panelID:null,_closeLink:null,_page:null,_modal:null,_panelInner:null,_wrapper:null,_fixedToolbar:null,_create:function(){var t=this,i=t.element,o=i.closest(":jqmData(role='page')"),n=function(){return"ui-body-"+e.data(o[0],"mobilePage").options.theme};e.extend(this,{_panelID:i.attr("id"),_closeLink:i.find(":jqmData(rel='close')"),_page:i.closest(":jqmData(role='page')"),_pageTheme:n(),_panelInner:function(){var e=i.find("."+t.options.classes.panelInner);return 0===e.length&&(e=i.children().wrapAll('<div class="'+t.options.classes.panelInner+'" />').parent()),e}(),_wrapper:function(){var i=o.find("."+t.options.classes.contentWrap);return 0===i.length&&(i=o.children(".ui-header:not(:jqmData(position='fixed')), .ui-content:not(:jqmData(role='popup')), .ui-footer:not(:jqmData(position='fixed'))").wrapAll('<div class="'+t.options.classes.contentWrap+" "+n()+'" />').parent(),e.support.cssTransform3d&&t.options.animate&&i.addClass(t.options.classes.animate)),i}(),_fixedToolbar:function(){var i=o.find("."+t.options.classes.contentFixedToolbar);return 0===i.length&&(i=o.find(".ui-header:jqmData(position='fixed'), .ui-footer:jqmData(position='fixed')").addClass(t.options.classes.contentFixedToolbar),e.support.cssTransform3d&&t.options.animate&&i.addClass(t.options.classes.animate)),i}()}),t._addPanelClasses(),t._wrapper.addClass(this.options.classes.contentWrapClosed),t._fixedToolbar.addClass(this.options.classes.contentFixedToolbarClosed),t._page.addClass(t.options.classes.pagePanel),e.support.cssTransform3d&&t.options.animate&&this.element.addClass(t.options.classes.animate),t._bindUpdateLayout(),t._bindCloseEvents(),t._bindLinkListeners(),t._bindPageEvents(),t.options.dismissible&&t._createModal(),t._bindSwipeEvents()},_createModal:function(){var t=this;t._modal=e("<div class='"+t.options.classes.modal+"' data-panelid='"+t._panelID+"'></div>").on("mousedown",function(){t.close()}).appendTo(this._page)},_getPosDisplayClasses:function(e){return e+"-position-"+this.options.position+" "+e+"-display-"+this.options.display},_getPanelClasses:function(){var e=this.options.classes.panel+" "+this._getPosDisplayClasses(this.options.classes.panel)+" "+this.options.classes.panelClosed;return this.options.theme&&(e+=" ui-body-"+this.options.theme),this.options.positionFixed&&(e+=" "+this.options.classes.panelFixed),e},_addPanelClasses:function(){this.element.addClass(this._getPanelClasses())},_bindCloseEvents:function(){var e=this;e._closeLink.on("click.panel",function(t){return t.preventDefault(),e.close(),!1}),e.element.on("click.panel","a:jqmData(ajax='false')",function(){e.close()})},_positionPanel:function(){var t=this,i=t._panelInner.outerHeight(),o=i>e.mobile.getScreenHeight();o||!t.options.positionFixed?(o&&(t._unfixPanel(),e.mobile.resetActivePageHeight(i)),t._scrollIntoView(i)):t._fixPanel()},_scrollIntoView:function(i){i<e(t).scrollTop()&&t.scrollTo(0,0)},_bindFixListener:function(){this._on(e(t),{throttledresize:"_positionPanel"})},_unbindFixListener:function(){this._off(e(t),"throttledresize")},_unfixPanel:function(){this.options.positionFixed&&e.support.fixedPosition&&this.element.removeClass(this.options.classes.panelFixed)},_fixPanel:function(){this.options.positionFixed&&e.support.fixedPosition&&this.element.addClass(this.options.classes.panelFixed)},_bindUpdateLayout:function(){var e=this;e.element.on("updatelayout",function(){e._open&&e._positionPanel()})},_bindLinkListeners:function(){var t=this;t._page.on("click.panel","a",function(i){if(this.href.split("#")[1]===t._panelID&&void 0!==t._panelID){i.preventDefault();var o,n=e(this);return n.hasClass("ui-link")||((o=n.parent().parent()).hasClass("ui-li")&&(n=o.parent()),n.addClass(e.mobile.activeBtnClass),t.element.one("panelopen panelclose",function(){n.removeClass(e.mobile.activeBtnClass)})),t.toggle(),!1}})},_bindSwipeEvents:function(){var e=this,t=e._modal?e.element.add(e._modal):e.element;e.options.swipeClose&&("left"===e.options.position?t.on("swipeleft.panel",function(){e.close()}):t.on("swiperight.panel",function(){e.close()}))},_bindPageEvents:function(){var e=this;e._page.on("panelbeforeopen",function(t){e._open&&t.target!==e.element[0]&&e.close()}).on("pagehide",function(){e._open&&e.close(!0)}).on("keyup.panel",function(t){27===t.keyCode&&e._open&&e.close()})},_open:!1,_contentWrapOpenClasses:null,_fixedToolbarOpenClasses:null,_modalOpenClasses:null,open:function(t){if(!this._open){var i=this,o=i.options,n=function(){i._page.off("panelclose"),i._page.jqmData("panel","open"),!t&&e.support.cssTransform3d&&o.animate?i.element.add(i._wrapper).on(i._transitionEndEvents,r):setTimeout(r,0),i.options.theme&&"overlay"!==i.options.display&&i._page.removeClass(i._pageTheme).addClass("ui-body-"+i.options.theme),i.element.removeClass(o.classes.panelClosed).addClass(o.classes.panelOpen),i._positionPanel(),i.options.theme&&"overlay"!==i.options.display&&i._wrapper.css("min-height",i._page.css("min-height")),i._contentWrapOpenClasses=i._getPosDisplayClasses(o.classes.contentWrap),i._wrapper.removeClass(o.classes.contentWrapClosed).addClass(i._contentWrapOpenClasses+" "+o.classes.contentWrapOpen),i._fixedToolbarOpenClasses=i._getPosDisplayClasses(o.classes.contentFixedToolbar),i._fixedToolbar.removeClass(o.classes.contentFixedToolbarClosed).addClass(i._fixedToolbarOpenClasses+" "+o.classes.contentFixedToolbarOpen),i._modalOpenClasses=i._getPosDisplayClasses(o.classes.modal)+" "+o.classes.modalOpen,i._modal&&i._modal.addClass(i._modalOpenClasses)},r=function(){i.element.add(i._wrapper).off(i._transitionEndEvents,r),i._page.addClass(o.classes.pagePanelOpen),i._bindFixListener(),i._trigger("open")};this.element.closest(".ui-page-active").length<0&&(t=!0),i._trigger("beforeopen"),"open"===i._page.jqmData("panel")?i._page.on("panelclose",function(){n()}):n(),i._open=!0}},close:function(t){if(this._open){var i=this.options,o=this,n=function(){o.options.theme&&"overlay"!==o.options.display&&(o._page.removeClass("ui-body-"+o.options.theme).addClass(o._pageTheme),o._wrapper.css("min-height","")),o.element.add(o._wrapper).off(o._transitionEndEvents,n),o.element.addClass(i.classes.panelClosed),o._wrapper.removeClass(o._contentWrapOpenClasses).addClass(i.classes.contentWrapClosed),o._fixedToolbar.removeClass(o._fixedToolbarOpenClasses).addClass(i.classes.contentFixedToolbarClosed),o._fixPanel(),o._unbindFixListener(),e.mobile.resetActivePageHeight(),o._page.jqmRemoveData("panel"),o._trigger("close")};this.element.closest(".ui-page-active").length<0&&(t=!0),o._trigger("beforeclose"),!t&&e.support.cssTransform3d&&i.animate?o.element.add(o._wrapper).on(o._transitionEndEvents,n):setTimeout(n,0),o._page.removeClass(i.classes.pagePanelOpen),o.element.removeClass(i.classes.panelOpen),o._wrapper.removeClass(i.classes.contentWrapOpen),o._fixedToolbar.removeClass(i.classes.contentFixedToolbarOpen),o._modal&&o._modal.removeClass(o._modalOpenClasses),o._open=!1}},toggle:function(){this[this._open?"close":"open"]()},_transitionEndEvents:"webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd",_destroy:function(){var t=this.options.classes,i=this.options.theme;this.element.siblings("."+t.panel).length?this._open&&(this._wrapper.removeClass(t.contentWrapOpen),this._fixedToolbar.removeClass(t.contentFixedToolbarOpen),this._page.jqmRemoveData("panel"),this._page.removeClass(t.pagePanelOpen),i&&this._page.removeClass("ui-body-"+i).addClass(this._pageTheme)):(this._wrapper.children().unwrap(),this._page.find("a").unbind("panelopen panelclose"),this._page.removeClass(t.pagePanel),this._open&&(this._page.jqmRemoveData("panel"),this._page.removeClass(t.pagePanelOpen),i&&this._page.removeClass("ui-body-"+i).addClass(this._pageTheme),e.mobile.resetActivePageHeight())),this._panelInner.children().unwrap(),this.element.removeClass([this._getPanelClasses(),t.panelAnimate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"),this._closeLink.off("click.panel"),this._modal&&this._modal.remove(),this.element.off(this._transitionEndEvents).removeClass([t.panelUnfixed,t.panelClosed,t.panelOpen].join(" "))}}),e(i).bind("pagecreate create",function(t){e.mobile.panel.prototype.enhanceWithin(t.target)})}(e),function(e,t){e.widget("mobile.table",e.mobile.widget,{options:{classes:{table:"ui-table"},initSelector:":jqmData(role='table')"},_create:function(){this.refresh(!0)},refresh:function(i){var o=this,n=this.element.find("thead tr");i&&this.element.addClass(this.options.classes.table),o.headers=this.element.find("tr:eq(0)").children(),o.allHeaders=o.headers.add(n.children()),n.each(function(){var r=0;e(this).children().each(function(){var s=parseInt(e(this).attr("colspan"),10),a=":nth-child("+(r+1)+")";if(e(this).jqmData("colstart",r+1),s)for(var l=0;s-1>l;l++)a+=", :nth-child("+(1+ ++r)+")";i===t&&e(this).jqmData("cells",""),e(this).jqmData("cells",o.element.find("tr").not(n.eq(0)).not(this).children(a)),r++})}),i===t&&this.element.trigger("refresh")}}),e.mobile.document.bind("pagecreate create",function(t){e.mobile.table.prototype.enhanceWithin(t.target)})}(e),function(e){e.mobile.table.prototype.options.mode="columntoggle",e.mobile.table.prototype.options.columnBtnTheme=null,e.mobile.table.prototype.options.columnPopupTheme=null,e.mobile.table.prototype.options.columnBtnText="Columns...",e.mobile.table.prototype.options.classes=e.extend(e.mobile.table.prototype.options.classes,{popup:"ui-table-columntoggle-popup",columnBtn:"ui-table-columntoggle-btn",priorityPrefix:"ui-table-priority-",columnToggleTable:"ui-table-columntoggle"}),e.mobile.document.delegate(":jqmData(role='table')","tablecreate refresh",function(t){var i,o,n,r,s=e(this),a=s.data("mobile-table"),l=t.type,c=a.options,d=e.mobile.ns,u=(s.attr("id")||c.classes.popup)+"-popup";"columntoggle"===c.mode&&("refresh"!==l&&(a.element.addClass(c.classes.columnToggleTable),i=e("<a href='#"+u+"' class='"+c.classes.columnBtn+"' data-"+d+"rel='popup' data-"+d+"mini='true'>"+c.columnBtnText+"</a>"),o=e("<div data-"+d+"role='popup' data-"+d+"role='fieldcontain' class='"+c.classes.popup+"' id='"+u+"'></div>"),n=e("<fieldset data-"+d+"role='controlgroup'></fieldset>")),a.headers.not("td").each(function(t){var i=e(this).jqmData("priority"),o=e(this).add(e(this).jqmData("cells"));i&&(o.addClass(c.classes.priorityPrefix+i),"refresh"!==l?e("<label><input type='checkbox' checked />"+e(this).text()+"</label>").appendTo(n).children(0).jqmData("cells",o).checkboxradio({theme:c.columnPopupTheme}):e("#"+u+" fieldset div:eq("+t+")").find("input").jqmData("cells",o))}),"refresh"!==l&&n.appendTo(o),r=void 0===n?e("#"+u+" fieldset"):n,"refresh"!==l&&(r.on("change","input",function(){this.checked?e(this).jqmData("cells").removeClass("ui-table-cell-hidden").addClass("ui-table-cell-visible"):e(this).jqmData("cells").removeClass("ui-table-cell-visible").addClass("ui-table-cell-hidden")}),i.insertBefore(s).buttonMarkup({theme:c.columnBtnTheme}),o.insertBefore(s).popup()),a.update=function(){r.find("input").each(function(){this.checked?(this.checked="table-cell"===e(this).jqmData("cells").eq(0).css("display"),"refresh"===l&&e(this).jqmData("cells").addClass("ui-table-cell-visible")):e(this).jqmData("cells").addClass("ui-table-cell-hidden"),e(this).checkboxradio("refresh")})},e.mobile.window.on("throttledresize",a.update),a.update())})}(e),function(e){e.mobile.table.prototype.options.mode="reflow",e.mobile.table.prototype.options.classes=e.extend(e.mobile.table.prototype.options.classes,{reflowTable:"ui-table-reflow",cellLabels:"ui-table-cell-label"}),e.mobile.document.delegate(":jqmData(role='table')","tablecreate refresh",function(t){var i=e(this),o=t.type,n=i.data("mobile-table"),r=n.options;"reflow"===r.mode&&("refresh"!==o&&n.element.addClass(r.classes.reflowTable),e(n.allHeaders.get().reverse()).each(function(){var t=e(this).jqmData("cells"),i=e(this).jqmData("colstart"),o=t.not(this).filter("thead th").length&&" ui-table-cell-label-top",n=e(this).text();if(""!==n)if(o){var s=parseInt(e(this).attr("colspan"),10),a="";s&&(a="td:nth-child("+s+"n + "+i+")"),t.filter(a).prepend("<b class='"+r.classes.cellLabels+o+"'>"+n+"</b>")}else t.prepend("<b class='"+r.classes.cellLabels+"'>"+n+"</b>")}))})}(e),function(e,t){function i(e){n=e.originalEvent,l=n.accelerationIncludingGravity,r=Math.abs(l.x),s=Math.abs(l.y),a=Math.abs(l.z),!t.orientation&&(r>7||(a>6&&8>s||8>a&&s>6)&&r>5)?c.enabled&&c.disable():c.enabled||c.enable()}e.mobile.iosorientationfixEnabled=!0;var o=navigator.userAgent;if(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(o)&&o.indexOf("AppleWebKit")>-1){var n,r,s,a,l,c=e.mobile.zoom;e.mobile.document.on("mobileinit",function(){e.mobile.iosorientationfixEnabled&&e.mobile.window.bind("orientationchange.iosorientationfix",c.enable).bind("devicemotion.iosorientationfix",i)})}else e.mobile.iosorientationfixEnabled=!1}(e,this),function(e,t){function o(){n.removeClass("ui-mobile-rendering")}var n=e("html"),r=(e("head"),e.mobile.window);e(t.document).trigger("mobileinit"),e.mobile.gradeA()&&(e.mobile.ajaxBlacklist&&(e.mobile.ajaxEnabled=!1),n.addClass("ui-mobile ui-mobile-rendering"),setTimeout(o,5e3),e.extend(e.mobile,{initializePage:function(){var t=e.mobile.path,n=e(":jqmData(role='page'), :jqmData(role='dialog')"),s=t.stripHash(t.stripQueryParams(t.parseLocation().hash)),a=i.getElementById(s);n.length||(n=e("body").wrapInner("<div data-"+e.mobile.ns+"role='page'></div>").children(0)),n.each(function(){var t=e(this);t.jqmData("url")||t.attr("data-"+e.mobile.ns+"url",t.attr("id")||location.pathname+location.search)}),e.mobile.firstPage=n.first(),e.mobile.pageContainer=e.mobile.firstPage.parent().addClass("ui-mobile-viewport"),e.mobile.navreadyDeferred.resolve(),r.trigger("pagecontainercreate"),e.mobile.showPageLoadingMsg(),o(),e.mobile.hashListeningEnabled&&e.mobile.path.isHashValid(location.hash)&&(e(a).is(':jqmData(role="page")')||e.mobile.path.isPath(s)||s===e.mobile.dialogHashKey)?e.event.special.navigate.isPushStateEnabled()?(e.mobile.navigate.history.stack=[],e.mobile.navigate(e.mobile.path.isPath(location.hash)?location.hash:location.href)):r.trigger("hashchange",[!0]):(e.mobile.path.isHashValid(location.hash)&&(e.mobile.urlHistory.initialDst=s.replace("#","")),e.event.special.navigate.isPushStateEnabled()&&e.mobile.navigate.navigator.squash(t.parseLocation().href),e.mobile.changePage(e.mobile.firstPage,{transition:"none",reverse:!0,changeHash:!1,fromHashChange:!0}))}}),e(function(){t.scrollTo(0,1),e.mobile.defaultHomeScroll=e.support.scrollTop&&1!==e.mobile.window.scrollTop()?1:0,e.mobile.autoInitializePage&&e.mobile.initializePage(),r.load(e.mobile.silentScroll),e.support.cssPointerEvents||e.mobile.document.delegate(".ui-disabled","vclick",function(e){e.preventDefault(),e.stopImmediatePropagation()})}))}(e,this)}(e,r,s),e.mobile}.apply(t,o),void 0===n||(e.exports=n)}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,i),r.exports}i.amdO={},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};i.r(e),i.d(e,{backInDown:()=>Ws,backInLeft:()=>Ks,backInRight:()=>Xs,backInUp:()=>Gs,backOutDown:()=>Ys,backOutLeft:()=>Zs,backOutRight:()=>Qs,backOutUp:()=>Js,bounce:()=>Ms,bounceIn:()=>ea,bounceInDown:()=>ta,bounceInLeft:()=>ia,bounceInRight:()=>oa,bounceInUp:()=>na,bounceOut:()=>ra,bounceOutDown:()=>sa,bounceOutLeft:()=>aa,bounceOutRight:()=>la,bounceOutUp:()=>ca,easings:()=>kl,fadeIn:()=>da,fadeInBottomLeft:()=>ua,fadeInBottomRight:()=>ha,fadeInDown:()=>pa,fadeInDownBig:()=>fa,fadeInLeft:()=>ma,fadeInLeftBig:()=>ga,fadeInRight:()=>ba,fadeInRightBig:()=>va,fadeInTopLeft:()=>ya,fadeInTopRight:()=>xa,fadeInUp:()=>_a,fadeInUpBig:()=>wa,fadeOut:()=>ka,fadeOutBottomLeft:()=>Ca,fadeOutBottomRight:()=>Sa,fadeOutDown:()=>Ta,fadeOutDownBig:()=>Aa,fadeOutLeft:()=>Ea,fadeOutLeftBig:()=>$a,fadeOutRight:()=>Pa,fadeOutRightBig:()=>Da,fadeOutTopLeft:()=>za,fadeOutTopRight:()=>Ma,fadeOutUp:()=>Oa,fadeOutUpBig:()=>Ia,flash:()=>Os,flip:()=>La,flipInX:()=>Na,flipInY:()=>Ba,flipOutX:()=>Fa,flipOutY:()=>ja,headShake:()=>Is,heartBeat:()=>Ls,hinge:()=>cl,jackInTheBox:()=>dl,jello:()=>Ns,lightSpeedInLeft:()=>Ra,lightSpeedInRight:()=>Ha,lightSpeedOutLeft:()=>qa,lightSpeedOutRight:()=>Ua,pulse:()=>Bs,rollIn:()=>ul,rollOut:()=>hl,rotateIn:()=>Va,rotateInDownLeft:()=>Wa,rotateInDownRight:()=>Ka,rotateInUpLeft:()=>Xa,rotateInUpRight:()=>Ga,rotateOut:()=>Ya,rotateOutDownLeft:()=>Za,rotateOutDownRight:()=>Qa,rotateOutUpLeft:()=>Ja,rotateOutUpRight:()=>el,rubberBand:()=>Fs,shake:()=>js,shakeX:()=>Rs,shakeY:()=>Hs,slideInDown:()=>tl,slideInLeft:()=>il,slideInRight:()=>ol,slideInUp:()=>nl,slideOutDown:()=>rl,slideOutLeft:()=>sl,slideOutRight:()=>al,slideOutUp:()=>ll,swing:()=>qs,tada:()=>Us,wobble:()=>Vs,zoomIn:()=>pl,zoomInDown:()=>fl,zoomInLeft:()=>ml,zoomInRight:()=>gl,zoomInUp:()=>bl,zoomOut:()=>vl,zoomOutDown:()=>yl,zoomOutLeft:()=>xl,zoomOutRight:()=>_l,zoomOutUp:()=>wl}),i(146),i(131);var t=Object.defineProperty,o=Object.defineProperties,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),d=e=>{throw TypeError(e)},u=(e,i,o)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[i]=o,h=(e,t)=>{for(var i in t||(t={}))a.call(t,i)&&u(e,i,t[i]);if(s)for(var i of s(t))l.call(t,i)&&u(e,i,t[i]);return e},p=(e,t)=>o(e,r(t)),f=(e,i,o,r)=>{for(var s,a=r>1?void 0:r?n(i,o):i,l=e.length-1;l>=0;l--)(s=e[l])&&(a=(r?s(i,o,a):s(a))||a);return r&&a&&t(i,o,a),a},m=(e,t,i)=>t.has(e)||d("Cannot "+i),g=function(e,t){this[0]=e,this[1]=t},b=new WeakMap,v=new WeakMap,y=new WeakMap,x=new WeakSet,_=new WeakMap,w=class{constructor(e,t){this.handleFormData=e=>{const t=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),n="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!n&&"string"==typeof i&&i.length>0&&void 0!==o&&(Array.isArray(o)?o.forEach(t=>{e.formData.append(i,t.toString())}):e.formData.append(i,o.toString()))},this.handleFormSubmit=e=>{var t;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=b.get(this.form))||t.forEach(e=>{this.setUserInteracted(e,!0)})),!this.form||this.form.noValidate||i||o(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),_.set(this.host,[])},this.handleInteraction=e=>{const t=_.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if("function"==typeof t.checkValidity&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if("function"==typeof t.reportValidity&&!t.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=h({form:e=>{const t=e.form;if(t){const i=e.getRootNode().querySelector(`#${t}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),_.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),_.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,b.has(this.form)?b.get(this.form).add(this.host):b.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),v.has(this.form)||(v.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),y.has(this.form)||(y.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=b.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),v.has(this.form)&&(this.form.reportValidity=v.get(this.form),v.delete(this.form)),y.has(this.form)&&(this.form.checkValidity=y.get(this.form),y.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?x.add(e):x.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{t.hasAttribute(e)&&i.setAttribute(e,t.getAttribute(e))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=Boolean(x.has(t)),o=Boolean(t.required);t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},k=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),C=Object.freeze(p(h({},k),{valid:!1,valueMissing:!0})),S=Object.freeze(p(h({},k),{valid:!1,customError:!0}));const T=globalThis,A=T.ShadowRoot&&(void 0===T.ShadyCSS||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,E=Symbol(),$=new WeakMap;class P{constructor(e,t,i){if(this._$cssResult$=!0,i!==E)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(A&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=$.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&$.set(t,e))}return e}toString(){return this.cssText}}const D=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new P(i,e,E)},z=(e,t)=>{if(A)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),o=T.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}},M=A?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new P("string"==typeof e?e:e+"",void 0,E))(t)})(e):e,{is:O,defineProperty:I,getOwnPropertyDescriptor:L,getOwnPropertyNames:N,getOwnPropertySymbols:B,getPrototypeOf:F}=Object,j=globalThis,R=j.trustedTypes,H=R?R.emptyScript:"",q=j.reactiveElementPolyfillSupport,U=(e,t)=>e,V={toAttribute(e,t){switch(t){case Boolean:e=e?H:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},W=(e,t)=>!O(e,t),K={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;class X extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=K){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&I(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=L(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const r=o?.call(this);n?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??K}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=F(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,t=[...N(e),...B(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(M(e))}else void 0!==e&&t.push(M(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return z(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:V).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:V;this._$Em=o;const r=n.fromAttribute(t,e.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(e,t,i,o=!1,n){if(void 0!==e){const r=this.constructor;if(!1===o&&(n=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??W)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[U("elementProperties")]=new Map,X[U("finalized")]=new Map,q?.({ReactiveElement:X}),(j.reactiveElementVersions??=[]).push("2.1.2");const G=globalThis,Y=e=>e,Z=G.trustedTypes,Q=Z?Z.createPolicy("lit-html",{createHTML:e=>e}):void 0,J="$lit$",ee=`lit$${Math.random().toFixed(9).slice(2)}$`,te="?"+ee,ie=`<${te}>`,oe=document,ne=()=>oe.createComment(""),re=e=>null===e||"object"!=typeof e&&"function"!=typeof e,se=Array.isArray,ae=e=>se(e)||"function"==typeof e?.[Symbol.iterator],le="[ \t\n\f\r]",ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,de=/-->/g,ue=/>/g,he=RegExp(`>|${le}(?:([^\\s"'>=/]+)(${le}*=${le}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),pe=/'/g,fe=/"/g,me=/^(?:script|style|textarea|title)$/i,ge=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),be=ge(1),ve=ge(2),ye=ge(3),xe=Symbol.for("lit-noChange"),_e=Symbol.for("lit-nothing"),we=new WeakMap,ke=oe.createTreeWalker(oe,129);function Ce(e,t){if(!se(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Q?Q.createHTML(t):t}const Se=(e,t)=>{const i=e.length-1,o=[];let n,r=2===t?"<svg>":3===t?"<math>":"",s=ce;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===ce?"!--"===l[1]?s=de:void 0!==l[1]?s=ue:void 0!==l[2]?(me.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=he):void 0!==l[3]&&(s=he):s===he?">"===l[0]?(s=n??ce,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?he:'"'===l[3]?fe:pe):s===fe||s===pe?s=he:s===de||s===ue?s=ce:(s=he,n=void 0);const u=s===he&&e[t+1].startsWith("/>")?" ":"";r+=s===ce?i+ie:c>=0?(o.push(a),i.slice(0,c)+J+i.slice(c)+ee+u):i+ee+(-2===c?t:u)}return[Ce(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class Te{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,r=0;const s=e.length-1,a=this.parts,[l,c]=Se(e,t);if(this.el=Te.createElement(l,i),ke.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ke.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(J)){const t=c[r++],i=o.getAttribute(e).split(ee),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?De:"?"===s[1]?ze:"@"===s[1]?Me:Pe}),o.removeAttribute(e)}else e.startsWith(ee)&&(a.push({type:6,index:n}),o.removeAttribute(e));if(me.test(o.tagName)){const e=o.textContent.split(ee),t=e.length-1;if(t>0){o.textContent=Z?Z.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],ne()),ke.nextNode(),a.push({type:2,index:++n});o.append(e[t],ne())}}}else if(8===o.nodeType)if(o.data===te)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(ee,e+1));)a.push({type:7,index:n}),e+=ee.length-1}n++}}static createElement(e,t){const i=oe.createElement("template");return i.innerHTML=e,i}}function Ae(e,t,i=e,o){if(t===xe)return t;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const r=re(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(t=Ae(e,n._$AS(e,t.values),n,o)),t}class Ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??oe).importNode(t,!0);ke.currentNode=o;let n=ke.nextNode(),r=0,s=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new $e(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new Oe(n,this,e)),this._$AV.push(t),a=i[++s]}r!==a?.index&&(n=ke.nextNode(),r++)}return ke.currentNode=oe,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class $e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=_e,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ae(this,e,t),re(e)?e===_e||null==e||""===e?(this._$AH!==_e&&this._$AR(),this._$AH=_e):e!==this._$AH&&e!==xe&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ae(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_e&&re(this._$AH)?this._$AA.nextSibling.data=e:this.T(oe.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Te.createElement(Ce(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Ee(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=we.get(e.strings);return void 0===t&&we.set(e.strings,t=new Te(e)),t}k(e){se(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new $e(this.O(ne()),this.O(ne()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=Y(e).nextSibling;Y(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=_e,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_e}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(void 0===n)e=Ae(this,e,t,0),r=!re(e)||e!==this._$AH&&e!==xe,r&&(this._$AH=e);else{const o=e;let s,a;for(e=n[0],s=0;s<n.length-1;s++)a=Ae(this,o[i+s],t,s),a===xe&&(a=this._$AH[s]),r||=!re(a)||a!==this._$AH[s],a===_e?e=_e:e!==_e&&(e+=(a??"")+n[s+1]),this._$AH[s]=a}r&&!o&&this.j(e)}j(e){e===_e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class De extends Pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_e?void 0:e}}class ze extends Pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_e)}}class Me extends Pe{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=Ae(this,e,t,0)??_e)===xe)return;const i=this._$AH,o=e===_e&&i!==_e||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==_e&&(i===_e||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ae(this,e)}}const Ie={M:J,P:ee,A:te,C:1,L:Se,R:Ee,D:ae,V:Ae,I:$e,H:Pe,N:ze,U:Me,B:De,F:Oe},Le=G.litHtmlPolyfillSupport;Le?.(Te,$e),(G.litHtmlVersions??=[]).push("3.3.2");const Ne=globalThis;class Be extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=i?.renderBefore??null;o._$litPart$=n=new $e(t.insertBefore(ne(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xe}}Be._$litElement$=!0,Be.finalized=!0,Ne.litElementHydrateSupport?.({LitElement:Be});const Fe=Ne.litElementPolyfillSupport;Fe?.({LitElement:Be}),(Ne.litElementVersions??=[]).push("4.2.2");var je=D`
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
`,Re=D`
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
`,He=(e="value")=>(t,i)=>{const o=t.constructor,n=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(t,r,s){var a;const l=o.getPropertyOptions(e);if(t===("string"==typeof l.attribute?l.attribute:e)){const t=l.converter||V,o=("function"==typeof t?t:null!=(a=null==t?void 0:t.fromAttribute)?a:V.fromAttribute)(s,l.type);this[e]!==o&&(this[i]=o)}n.call(this,t,r,s)}},qe=D`
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
`,Ue=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Ve="";function We(e){Ve=e}var Ke={name:"default",resolver:e=>function(e=""){if(!Ve){const e=[...document.getElementsByTagName("script")],t=e.find(e=>e.hasAttribute("data-shoelace"));if(t)We(t.getAttribute("data-shoelace"));else{const t=e.find(e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src));let i="";t&&(i=t.getAttribute("src")),We(i.split("/").slice(0,-1).join("/"))}}return Ve.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}(`assets/icons/${e}.svg`)},Xe={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Ge=[Ke,{name:"system",resolver:e=>e in Xe?`data:image/svg+xml,${encodeURIComponent(Xe[e])}`:""}],Ye=[];function Ze(e){return Ge.find(t=>t.name===e)}var Qe=D`
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
`;function Je(e,t){const i=h({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:n}=t,r=Array.isArray(e)?e:[e];t.update=function(e){r.forEach(t=>{const n=t;if(e.has(n)){const t=e.get(n),r=this[n];t!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,r))}}),n.call(this,e)}}}var et=D`
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
`;const tt={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:W},it=(e=tt,t,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function ot(e){return(t,i)=>"object"==typeof i?it(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function nt(e){return ot({...e,state:!0,attribute:!1})}function rt(e){return(t,i)=>{const o="function"==typeof t?t:t[i];Object.assign(o,e)}}const st=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function at(e,t){return(i,o,n)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof o?i:n??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return st(i,o,{get(){let i=e.call(this);return void 0===i&&(i=r(this),(null!==i||this.hasUpdated)&&t.call(this,i)),i}})}return st(i,o,{get(){return r(this)}})}}var lt,ct=class extends Be{constructor(){var e,t;super(),e=this,(t=lt).has(e)?d("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,false),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const i=new CustomEvent(e,h({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,i)}catch(o){customElements.define(e,class extends t{},i)}return}let n=" (unknown version)",r=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in o&&o.version&&(r=" v"+o.version),n&&r&&n===r||console.warn(`Attempted to register <${e}>${n}, but <${e}>${r} has already been registered.`)}attributeChangedCallback(e,t,i){var o;m(this,o=lt,"read from private field"),o.get(this)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),((e,t,i)=>{m(e,t,"write to private field"),t.set(e,i)})(this,lt,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}};lt=new WeakMap,ct.version="2.20.1",ct.dependencies={},f([ot()],ct.prototype,"dir",2),f([ot()],ct.prototype,"lang",2);const{I:dt}=Ie,ut=e=>void 0===e.strings,ht={};var pt,ft=Symbol(),mt=Symbol(),gt=new Map,bt=class extends ct{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let o;if(null==t?void 0:t.spriteSheet)return this.svg=be`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return 410===o.status?ft:mt}catch(e){return mt}try{const e=document.createElement("div");e.innerHTML=await o.text();const t=e.firstElementChild;if("svg"!==(null==(i=null==t?void 0:t.tagName)?void 0:i.toLowerCase()))return ft;pt||(pt=new DOMParser);const n=pt.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):ft}catch(e){return ft}}connectedCallback(){super.connectedCallback(),Ye.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,Ye=Ye.filter(t=>t!==e)}getIconSource(){const e=Ze(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:i}=this.getIconSource(),o=i?Ze(this.library):void 0;if(!t)return void(this.svg=null);let n=gt.get(t);if(n||(n=this.resolveIcon(t,o),gt.set(t,n)),!this.initialRender)return;const r=await n;if(r===mt&&gt.delete(t),t===this.getIconSource().url)if((e=>void 0!==e?._$litType$)(r)){if(this.svg=r,o){await this.updateComplete;const e=this.shadowRoot.querySelector("[part='svg']");"function"==typeof o.mutator&&e&&o.mutator(e)}}else switch(r){case mt:case ft:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(e=null==o?void 0:o.mutator)||e.call(o,this.svg),this.emit("sl-load")}}render(){return this.svg}};bt.styles=[et,Qe],f([nt()],bt.prototype,"svg",2),f([ot({reflect:!0})],bt.prototype,"name",2),f([ot()],bt.prototype,"src",2),f([ot()],bt.prototype,"label",2),f([ot({reflect:!0})],bt.prototype,"library",2),f([Je("label")],bt.prototype,"handleLabelChange",1),f([Je(["name","src","library"])],bt.prototype,"setIcon",1);const vt=e=>(...t)=>({_$litDirective$:e,values:t});class yt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const xt=vt(class extends yt{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return xe}}),_t=e=>e??_e,wt=vt(class extends yt{constructor(e){if(super(e),3!==e.type&&1!==e.type&&4!==e.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!ut(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===xe||t===_e)return t;const i=e.element,o=e.name;if(3===e.type){if(t===i[o])return xe}else if(4===e.type){if(!!t===i.hasAttribute(o))return xe}else if(1===e.type&&i.getAttribute(o)===t+"")return xe;return((e,t=ht)=>{e._$AH=t})(e),t}});var kt=class extends ct{constructor(){super(...arguments),this.formControlController=new w(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Ue(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=!!this.helpText||!!e;return be`
      <div
        class=${xt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${xt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${_t(this.value)}
            .indeterminate=${wt(this.indeterminate)}
            .checked=${wt(this.checked)}
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
            ${this.checked?be`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?be`
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
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};kt.styles=[et,qe,Re],kt.dependencies={"sl-icon":bt},f([at('input[type="checkbox"]')],kt.prototype,"input",2),f([nt()],kt.prototype,"hasFocus",2),f([ot()],kt.prototype,"title",2),f([ot()],kt.prototype,"name",2),f([ot()],kt.prototype,"value",2),f([ot({reflect:!0})],kt.prototype,"size",2),f([ot({type:Boolean,reflect:!0})],kt.prototype,"disabled",2),f([ot({type:Boolean,reflect:!0})],kt.prototype,"checked",2),f([ot({type:Boolean,reflect:!0})],kt.prototype,"indeterminate",2),f([He("checked")],kt.prototype,"defaultChecked",2),f([ot({reflect:!0})],kt.prototype,"form",2),f([ot({type:Boolean,reflect:!0})],kt.prototype,"required",2),f([ot({attribute:"help-text"})],kt.prototype,"helpText",2),f([Je("disabled",{waitUntilFirstUpdate:!0})],kt.prototype,"handleDisabledChange",1),f([Je(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],kt.prototype,"handleStateChange",1);var Ct=D`
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
`;const St=new Set,Tt=new Map;let At,Et="ltr",$t="en";const Pt="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Pt){const e=new MutationObserver(zt);Et=document.documentElement.dir||"ltr",$t=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Dt(...e){e.map(e=>{const t=e.$code.toLowerCase();Tt.has(t)?Tt.set(t,Object.assign(Object.assign({},Tt.get(t)),e)):Tt.set(t,e),At||(At=e)}),zt()}function zt(){Pt&&(Et=document.documentElement.dir||"ltr",$t=document.documentElement.lang||navigator.language),[...St.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}class Mt{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){St.add(this.host)}hostDisconnected(){St.delete(this.host)}dir(){return`${this.host.dir||Et}`.toLowerCase()}lang(){return`${this.host.lang||$t}`.toLowerCase()}getTranslationData(e){var t,i;const o=new Intl.Locale(e.replace(/_/g,"-")),n=null==o?void 0:o.language.toLowerCase(),r=null!==(i=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==i?i:"";return{locale:o,language:n,region:r,primary:Tt.get(`${n}-${r}`),secondary:Tt.get(n)}}exists(e,t){var i;const{primary:o,secondary:n}=this.getTranslationData(null!==(i=t.lang)&&void 0!==i?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||n&&n[e]||t.includeFallback&&At&&At[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let n;if(i&&i[e])n=i[e];else if(o&&o[e])n=o[e];else{if(!At||!At[e])return console.error(`No translation found for: ${String(e)}`),String(e);n=At[e]}return"function"==typeof n?n(...t):n}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}var Ot={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Dt(Ot);var It=Ot,Lt=class extends Mt{};Dt(It);var Nt=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this)}render(){return be`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Nt.styles=[et,Ct];var Bt=new Map,Ft=new WeakMap;function jt(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Rt(e,t){Bt.set(e,function(e){return null!=e?e:{keyframes:[],options:{duration:0}}}(t))}function Ht(e,t,i){const o=Ft.get(e);if(null==o?void 0:o[t])return jt(o[t],i.dir);const n=Bt.get(t);return n?jt(n,i.dir):{keyframes:[],options:{duration:0}}}function qt(e,t,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,p(h({},i),{duration:Vt()?0:i.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})})}function Ut(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function Vt(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Wt(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function Kt(e,t){return e.map(e=>p(h({},e),{height:"auto"===e.height?`${t}px`:e.height}))}function Xt(e,t,i){return e?t(e):i?.(e)}var Gt=class e extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&"treeitem"===e.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Wt(this.childrenContainer);const{keyframes:e,options:t}=Ht(this,"tree-item.collapse",{dir:this.localize.dir()});await qt(this.childrenContainer,Kt(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&e.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Wt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:t}=Ht(this,"tree-item.expand",{dir:this.localize.dir()});await qt(this.childrenContainer,Kt(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>e.isTreeItem(i)&&(t||!i.disabled)):[]}render(){const e="rtl"===this.localize.dir(),t=!this.loading&&(!this.isLeaf||this.lazy);return be`
      <div
        part="base"
        class="${xt({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":"rtl"===this.localize.dir()})}"
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
            class=${xt({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${Xt(this.loading,()=>be` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Xt(this.selectable,()=>be`
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
                ?checked="${wt(this.selected)}"
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
    `}};Gt.styles=[et,je],Gt.dependencies={"sl-checkbox":kt,"sl-icon":bt,"sl-spinner":Nt},f([nt()],Gt.prototype,"indeterminate",2),f([nt()],Gt.prototype,"isLeaf",2),f([nt()],Gt.prototype,"loading",2),f([nt()],Gt.prototype,"selectable",2),f([ot({type:Boolean,reflect:!0})],Gt.prototype,"expanded",2),f([ot({type:Boolean,reflect:!0})],Gt.prototype,"selected",2),f([ot({type:Boolean,reflect:!0})],Gt.prototype,"disabled",2),f([ot({type:Boolean,reflect:!0})],Gt.prototype,"lazy",2),f([at("slot:not([name])")],Gt.prototype,"defaultSlot",2),f([at("slot[name=children]")],Gt.prototype,"childrenSlot",2),f([at(".tree-item__item")],Gt.prototype,"itemElement",2),f([at(".tree-item__children")],Gt.prototype,"childrenContainer",2),f([at(".tree-item__expand-button slot")],Gt.prototype,"expandButtonSlot",2),f([Je("loading",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleLoadingChange",1),f([Je("disabled")],Gt.prototype,"handleDisabledChange",1),f([Je("selected")],Gt.prototype,"handleSelectedChange",1),f([Je("expanded",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleExpandedChange",1),f([Je("expanded",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleExpandAnimation",1),f([Je("lazy",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleLazyChange",1);var Yt=Gt;Rt("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),Rt("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),Yt.define("sl-tree-item");var Zt=D`
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
`,Qt=D`
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
`;const Jt=Math.min,ei=Math.max,ti=Math.round,ii=Math.floor,oi=e=>({x:e,y:e}),ni={left:"right",right:"left",bottom:"top",top:"bottom"},ri={start:"end",end:"start"};function si(e,t,i){return ei(e,Jt(t,i))}function ai(e,t){return"function"==typeof e?e(t):e}function li(e){return e.split("-")[0]}function ci(e){return e.split("-")[1]}function di(e){return"x"===e?"y":"x"}function ui(e){return"y"===e?"height":"width"}const hi=new Set(["top","bottom"]);function pi(e){return hi.has(li(e))?"y":"x"}function fi(e){return di(pi(e))}function mi(e){return e.replace(/start|end/g,e=>ri[e])}const gi=["left","right"],bi=["right","left"],vi=["top","bottom"],yi=["bottom","top"];function xi(e){return e.replace(/left|right|bottom|top/g,e=>ni[e])}function _i(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function wi(e){const{x:t,y:i,width:o,height:n}=e;return{width:o,height:n,top:i,left:t,right:t+o,bottom:i+n,x:t,y:i}}function ki(e,t,i){let{reference:o,floating:n}=e;const r=pi(t),s=fi(t),a=ui(s),l=li(t),c="y"===r,d=o.x+o.width/2-n.width/2,u=o.y+o.height/2-n.height/2,h=o[a]/2-n[a]/2;let p;switch(l){case"top":p={x:d,y:o.y-n.height};break;case"bottom":p={x:d,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:u};break;case"left":p={x:o.x-n.width,y:u};break;default:p={x:o.x,y:o.y}}switch(ci(t)){case"start":p[s]-=h*(i&&c?-1:1);break;case"end":p[s]+=h*(i&&c?-1:1)}return p}async function Ci(e,t){var i;void 0===t&&(t={});const{x:o,y:n,platform:r,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:p=0}=ai(t,e),f=_i(p),m=a[h?"floating"===u?"reference":"floating":u],g=wi(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(m)))||i?m:m.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),b="floating"===u?{x:o,y:n,width:s.floating.width,height:s.floating.height}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),y=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},x=wi(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:v,strategy:l}):b);return{top:(g.top-x.top+f.top)/y.y,bottom:(x.bottom-g.bottom+f.bottom)/y.y,left:(g.left-x.left+f.left)/y.x,right:(x.right-g.right+f.right)/y.x}}const Si=new Set(["left","top"]);function Ti(){return"undefined"!=typeof window}function Ai(e){return Pi(e)?(e.nodeName||"").toLowerCase():"#document"}function Ei(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function $i(e){var t;return null==(t=(Pi(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Pi(e){return!!Ti()&&(e instanceof Node||e instanceof Ei(e).Node)}function Di(e){return!!Ti()&&(e instanceof Element||e instanceof Ei(e).Element)}function zi(e){return!!Ti()&&(e instanceof HTMLElement||e instanceof Ei(e).HTMLElement)}function Mi(e){return!(!Ti()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof Ei(e).ShadowRoot)}const Oi=new Set(["inline","contents"]);function Ii(e){const{overflow:t,overflowX:i,overflowY:o,display:n}=Ki(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!Oi.has(n)}const Li=new Set(["table","td","th"]);function Ni(e){return Li.has(Ai(e))}const Bi=[":popover-open",":modal"];function Fi(e){return Bi.some(t=>{try{return e.matches(t)}catch(e){return!1}})}const ji=["transform","translate","scale","rotate","perspective"],Ri=["transform","translate","scale","rotate","perspective","filter"],Hi=["paint","layout","strict","content"];function qi(e){const t=Ui(),i=Di(e)?Ki(e):e;return ji.some(e=>!!i[e]&&"none"!==i[e])||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||Ri.some(e=>(i.willChange||"").includes(e))||Hi.some(e=>(i.contain||"").includes(e))}function Ui(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}const Vi=new Set(["html","body","#document"]);function Wi(e){return Vi.has(Ai(e))}function Ki(e){return Ei(e).getComputedStyle(e)}function Xi(e){return Di(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gi(e){if("html"===Ai(e))return e;const t=e.assignedSlot||e.parentNode||Mi(e)&&e.host||$i(e);return Mi(t)?t.host:t}function Yi(e){const t=Gi(e);return Wi(t)?e.ownerDocument?e.ownerDocument.body:e.body:zi(t)&&Ii(t)?t:Yi(t)}function Zi(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);const n=Yi(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),s=Ei(n);if(r){const e=Qi(s);return t.concat(s,s.visualViewport||[],Ii(n)?n:[],e&&i?Zi(e):[])}return t.concat(n,Zi(n,[],i))}function Qi(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ji(e){const t=Ki(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const n=zi(e),r=n?e.offsetWidth:i,s=n?e.offsetHeight:o,a=ti(i)!==r||ti(o)!==s;return a&&(i=r,o=s),{width:i,height:o,$:a}}function eo(e){return Di(e)?e:e.contextElement}function to(e){const t=eo(e);if(!zi(t))return oi(1);const i=t.getBoundingClientRect(),{width:o,height:n,$:r}=Ji(t);let s=(r?ti(i.width):i.width)/o,a=(r?ti(i.height):i.height)/n;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const io=oi(0);function oo(e){const t=Ei(e);return Ui()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:io}function no(e,t,i,o){void 0===t&&(t=!1),void 0===i&&(i=!1);const n=e.getBoundingClientRect(),r=eo(e);let s=oi(1);t&&(o?Di(o)&&(s=to(o)):s=to(e));const a=function(e,t,i){return void 0===t&&(t=!1),!(!i||t&&i!==Ei(e))&&t}(r,i,o)?oo(r):oi(0);let l=(n.left+a.x)/s.x,c=(n.top+a.y)/s.y,d=n.width/s.x,u=n.height/s.y;if(r){const e=Ei(r),t=o&&Di(o)?Ei(o):o;let i=e,n=Qi(i);for(;n&&o&&t!==i;){const e=to(n),t=n.getBoundingClientRect(),o=Ki(n),r=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,s=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;l*=e.x,c*=e.y,d*=e.x,u*=e.y,l+=r,c+=s,i=Ei(n),n=Qi(i)}}return wi({width:d,height:u,x:l,y:c})}function ro(e,t){const i=Xi(e).scrollLeft;return t?t.left+i:no($i(e)).left+i}function so(e,t){const i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-ro(e,i),y:i.top+t.scrollTop}}const ao=new Set(["absolute","fixed"]);function lo(e,t,i){let o;if("viewport"===t)o=function(e,t){const i=Ei(e),o=$i(e),n=i.visualViewport;let r=o.clientWidth,s=o.clientHeight,a=0,l=0;if(n){r=n.width,s=n.height;const e=Ui();(!e||e&&"fixed"===t)&&(a=n.offsetLeft,l=n.offsetTop)}const c=ro(o);if(c<=0){const e=o.ownerDocument,t=e.body,i=getComputedStyle(t),n="CSS1Compat"===e.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,s=Math.abs(o.clientWidth-t.clientWidth-n);s<=25&&(r-=s)}else c<=25&&(r+=c);return{width:r,height:s,x:a,y:l}}(e,i);else if("document"===t)o=function(e){const t=$i(e),i=Xi(e),o=e.ownerDocument.body,n=ei(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=ei(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+ro(e);const a=-i.scrollTop;return"rtl"===Ki(o).direction&&(s+=ei(t.clientWidth,o.clientWidth)-n),{width:n,height:r,x:s,y:a}}($i(e));else if(Di(t))o=function(e,t){const i=no(e,!0,"fixed"===t),o=i.top+e.clientTop,n=i.left+e.clientLeft,r=zi(e)?to(e):oi(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:n*r.x,y:o*r.y}}(t,i);else{const i=oo(e);o={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return wi(o)}function co(e,t){const i=Gi(e);return!(i===t||!Di(i)||Wi(i))&&("fixed"===Ki(i).position||co(i,t))}function uo(e,t,i){const o=zi(t),n=$i(t),r="fixed"===i,s=no(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=oi(0);function c(){l.x=ro(n)}if(o||!o&&!r)if(("body"!==Ai(t)||Ii(n))&&(a=Xi(t)),o){const e=no(t,!0,r,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else n&&c();r&&!o&&n&&c();const d=!n||o||r?oi(0):so(n,a);return{x:s.left+a.scrollLeft-l.x-d.x,y:s.top+a.scrollTop-l.y-d.y,width:s.width,height:s.height}}function ho(e){return"static"===Ki(e).position}function po(e,t){if(!zi(e)||"fixed"===Ki(e).position)return null;if(t)return t(e);let i=e.offsetParent;return $i(e)===i&&(i=i.ownerDocument.body),i}function fo(e,t){const i=Ei(e);if(Fi(e))return i;if(!zi(e)){let t=Gi(e);for(;t&&!Wi(t);){if(Di(t)&&!ho(t))return t;t=Gi(t)}return i}let o=po(e,t);for(;o&&Ni(o)&&ho(o);)o=po(o,t);return o&&Wi(o)&&ho(o)&&!qi(o)?i:o||function(e){let t=Gi(e);for(;zi(t)&&!Wi(t);){if(qi(t))return t;if(Fi(t))return null;t=Gi(t)}return null}(e)||i}const mo={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:n}=e;const r="fixed"===n,s=$i(o),a=!!t&&Fi(t.floating);if(o===s||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=oi(1);const d=oi(0),u=zi(o);if((u||!u&&!r)&&(("body"!==Ai(o)||Ii(s))&&(l=Xi(o)),zi(o))){const e=no(o);c=to(o),d.x=e.x+o.clientLeft,d.y=e.y+o.clientTop}const h=!s||u||r?oi(0):so(s,l);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+d.x+h.x,y:i.y*c.y-l.scrollTop*c.y+d.y+h.y}},getDocumentElement:$i,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:n}=e;const r=[..."clippingAncestors"===i?Fi(t)?[]:function(e,t){const i=t.get(e);if(i)return i;let o=Zi(e,[],!1).filter(e=>Di(e)&&"body"!==Ai(e)),n=null;const r="fixed"===Ki(e).position;let s=r?Gi(e):e;for(;Di(s)&&!Wi(s);){const t=Ki(s),i=qi(s);i||"fixed"!==t.position||(n=null),(r?!i&&!n:!i&&"static"===t.position&&n&&ao.has(n.position)||Ii(s)&&!i&&co(e,s))?o=o.filter(e=>e!==s):n=t,s=Gi(s)}return t.set(e,o),o}(t,this._c):[].concat(i),o],s=r[0],a=r.reduce((e,i)=>{const o=lo(t,i,n);return e.top=ei(o.top,e.top),e.right=Jt(o.right,e.right),e.bottom=Jt(o.bottom,e.bottom),e.left=ei(o.left,e.left),e},lo(t,s,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:fo,getElementRects:async function(e){const t=this.getOffsetParent||fo,i=this.getDimensions,o=await i(e.floating);return{reference:uo(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:i}=Ji(e);return{width:t,height:i}},getScale:to,isElement:Di,isRTL:function(e){return"rtl"===Ki(e).direction}};function go(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}const bo=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:n,middlewareData:r,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...g}=ai(e,t);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const b=li(n),v=pi(a),y=li(a)===a,x=await(null==l.isRTL?void 0:l.isRTL(c.floating)),_=h||(y||!m?[xi(a)]:function(e){const t=xi(e);return[mi(e),t,mi(t)]}(a)),w="none"!==f;!h&&w&&_.push(...function(e,t,i,o){const n=ci(e);let r=function(e,t,i){switch(e){case"top":case"bottom":return i?t?bi:gi:t?gi:bi;case"left":case"right":return t?vi:yi;default:return[]}}(li(e),"start"===i,o);return n&&(r=r.map(e=>e+"-"+n),t&&(r=r.concat(r.map(mi)))),r}(a,m,f,x));const k=[a,..._],C=await l.detectOverflow(t,g),S=[];let T=(null==(o=r.flip)?void 0:o.overflows)||[];if(d&&S.push(C[b]),u){const e=function(e,t,i){void 0===i&&(i=!1);const o=ci(e),n=fi(e),r=ui(n);let s="x"===n?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=xi(s)),[s,xi(s)]}(n,s,x);S.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:n,overflows:S}],!S.every(e=>e<=0)){var A,E;const e=((null==(A=r.flip)?void 0:A.index)||0)+1,t=k[e];if(t&&("alignment"!==u||v===pi(t)||T.every(e=>pi(e.placement)!==v||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let i=null==(E=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:E.placement;if(!i)switch(p){case"bestFit":{var $;const e=null==($=T.filter(e=>{if(w){const t=pi(e.placement);return t===v||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:$[0];e&&(i=e);break}case"initialPlacement":i=a}if(n!==i)return{reset:{placement:i}}}return{}}}},vo=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var i,o;const{placement:n,rects:r,platform:s,elements:a}=t,{apply:l=()=>{},...c}=ai(e,t),d=await s.detectOverflow(t,c),u=li(n),h=ci(n),p="y"===pi(n),{width:f,height:m}=r.floating;let g,b;"top"===u||"bottom"===u?(g=u,b=h===(await(null==s.isRTL?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(b=u,g="end"===h?"top":"bottom");const v=m-d.top-d.bottom,y=f-d.left-d.right,x=Jt(m-d[g],v),_=Jt(f-d[b],y),w=!t.middlewareData.shift;let k=x,C=_;if(null!=(i=t.middlewareData.shift)&&i.enabled.x&&(C=y),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(k=v),w&&!h){const e=ei(d.left,0),t=ei(d.right,0),i=ei(d.top,0),o=ei(d.bottom,0);p?C=f-2*(0!==e||0!==t?e+t:ei(d.left,d.right)):k=m-2*(0!==i||0!==o?i+o:ei(d.top,d.bottom))}await l({...t,availableWidth:C,availableHeight:k});const S=await s.getDimensions(a.floating);return f!==S.width||m!==S.height?{reset:{rects:!0}}:{}}}};function yo(e){return function(e){for(let t=e;t;t=xo(t))if(t instanceof Element&&"none"===getComputedStyle(t).display)return null;for(let t=xo(e);t;t=xo(t)){if(!(t instanceof Element))continue;const e=getComputedStyle(t);if("contents"!==e.display){if("static"!==e.position||qi(e))return t;if("BODY"===t.tagName)return t}}return null}(e)}function xo(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var _o=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect();let i=0,o=0,n=0,r=0,s=0,a=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?e.top<t.top?(i=e.left,o=e.bottom,n=e.right,r=e.bottom,s=t.left,a=t.top,l=t.right,c=t.top):(i=t.left,o=t.bottom,n=t.right,r=t.bottom,s=e.left,a=e.top,l=e.right,c=e.top):e.left<t.left?(i=e.right,o=e.top,n=t.left,r=t.top,s=e.right,a=e.bottom,l=t.left,c=t.bottom):(i=t.right,o=t.top,n=e.left,r=e.top,s=t.right,a=t.bottom,l=e.left,c=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||function(e){return null!==e&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,i,o){void 0===o&&(o={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=o,c=eo(e),d=n||r?[...c?Zi(c):[],...Zi(t)]:[];d.forEach(e=>{n&&e.addEventListener("scroll",i,{passive:!0}),r&&e.addEventListener("resize",i)});const u=c&&a?function(e,t){let i,o=null;const n=$i(e);function r(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return function s(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),r();const c=e.getBoundingClientRect(),{left:d,top:u,width:h,height:p}=c;if(a||t(),!h||!p)return;const f={rootMargin:-ii(u)+"px "+-ii(n.clientWidth-(d+h))+"px "+-ii(n.clientHeight-(u+p))+"px "+-ii(d)+"px",threshold:ei(0,Jt(1,l))||1};let m=!0;function g(t){const o=t[0].intersectionRatio;if(o!==l){if(!m)return s();o?s(!1,o):i=setTimeout(()=>{s(!1,1e-7)},1e3)}1!==o||go(c,e.getBoundingClientRect())||s(),m=!1}try{o=new IntersectionObserver(g,{...f,root:n.ownerDocument})}catch(e){o=new IntersectionObserver(g,f)}o.observe(e)}(!0),r}(c,i):null;let h,p=-1,f=null;s&&(f=new ResizeObserver(e=>{let[o]=e;o&&o.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var e;null==(e=f)||e.observe(t)})),i()}),c&&!l&&f.observe(c),f.observe(t));let m=l?no(e):null;return l&&function t(){const o=no(e);m&&!go(m,o)&&i(),m=o,h=requestAnimationFrame(t)}(),i(),()=>{var e;d.forEach(e=>{n&&e.removeEventListener("scroll",i),r&&e.removeEventListener("resize",i)}),null==u||u(),null==(e=f)||e.disconnect(),f=null,l&&cancelAnimationFrame(h)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[(t={mainAxis:this.distance,crossAxis:this.skidding},void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:n,y:r,placement:s,middlewareData:a}=e,l=await async function(e,t){const{placement:i,platform:o,elements:n}=e,r=await(null==o.isRTL?void 0:o.isRTL(n.floating)),s=li(i),a=ci(i),l="y"===pi(i),c=Si.has(s)?-1:1,d=r&&l?-1:1,u=ai(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:f}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&"number"==typeof f&&(p="end"===a?-1*f:f),l?{x:p*d,y:h*c}:{x:h*c,y:p*d}}(e,t);return s===(null==(i=a.offset)?void 0:i.placement)&&null!=(o=a.arrow)&&o.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:s}}}})];var t;this.sync?e.push(vo({apply:({rects:e})=>{const t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(bo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:n,platform:r}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...c}=ai(e,t),d={x:i,y:o},u=await r.detectOverflow(t,c),h=pi(li(n)),p=di(h);let f=d[p],m=d[h];if(s){const e="y"===p?"bottom":"right";f=si(f+u["y"===p?"top":"left"],f,f-u[e])}if(a){const e="y"===h?"bottom":"right";m=si(m+u["y"===h?"top":"left"],m,m-u[e])}const g=l.fn({...t,[p]:f,[h]:m});return{...g,data:{x:g.x-i,y:g.y-o,enabled:{[p]:s,[h]:a}}}}}}({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(vo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:i,y:o,placement:n,rects:r,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:d=0}=ai(e,t)||{};if(null==c)return{};const u=_i(d),h={x:i,y:o},p=fi(n),f=ui(p),m=await s.getDimensions(c),g="y"===p,b=g?"top":"left",v=g?"bottom":"right",y=g?"clientHeight":"clientWidth",x=r.reference[f]+r.reference[p]-h[p]-r.floating[f],_=h[p]-r.reference[p],w=await(null==s.getOffsetParent?void 0:s.getOffsetParent(c));let k=w?w[y]:0;k&&await(null==s.isElement?void 0:s.isElement(w))||(k=a.floating[y]||r.floating[f]);const C=x/2-_/2,S=k/2-m[f]/2-1,T=Jt(u[b],S),A=Jt(u[v],S),E=T,$=k-m[f]-A,P=k/2-m[f]/2+C,D=si(E,P,$),z=!l.arrow&&null!=ci(n)&&P!==D&&r.reference[f]/2-(P<E?T:A)-m[f]/2<0,M=z?P<E?P-E:P-$:0;return{[p]:h[p]+M,data:{[p]:D,centerOffset:P-D-M,...z&&{alignmentOffset:M}},reset:z}}}))({element:this.arrowEl,padding:this.arrowPadding}));const i="absolute"===this.strategy?e=>mo.getOffsetParent(e,yo):mo.getOffsetParent;((e,t,i)=>{const o=new Map,n={platform:mo,...i},r={...n.platform,_c:o};return(async(e,t,i)=>{const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:s}=i,a=r.filter(Boolean),l=await(null==s.isRTL?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:n}),{x:d,y:u}=ki(c,o,l),h=o,p={},f=0;for(let i=0;i<a.length;i++){var m;const{name:r,fn:g}=a[i],{x:b,y:v,data:y,reset:x}=await g({x:d,y:u,initialPlacement:o,placement:h,strategy:n,middlewareData:p,rects:c,platform:{...s,detectOverflow:null!=(m=s.detectOverflow)?m:Ci},elements:{reference:e,floating:t}});d=null!=b?b:d,u=null!=v?v:u,p={...p,[r]:{...p[r],...y}},x&&f<=50&&(f++,"object"==typeof x&&(x.placement&&(h=x.placement),x.rects&&(c=!0===x.rects?await s.getElementRects({reference:e,floating:t,strategy:n}):x.rects),({x:d,y:u}=ki(c,h,l))),i=-1)}return{x:d,y:u,placement:h,strategy:n,middlewareData:p}})(e,t,{...n,platform:r})})(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:p(h({},mo),{getOffsetParent:i})}).then(({x:e,y:t,middlewareData:i,placement:o})=>{const n="rtl"===this.localize.dir(),r={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){const e=i.arrow.x,t=i.arrow.y;let o="",s="",a="",l="";if("start"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",s=n?i:"",l=n?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s=n?"":i,l=n?i:"",a="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:s,bottom:a,left:l,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return be`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${xt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${xt({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?be`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function wo(e,t){return new Promise(i=>{e.addEventListener(t,function o(n){n.target===e&&(e.removeEventListener(t,o),i())})})}_o.styles=[et,Qt],f([at(".popup")],_o.prototype,"popup",2),f([at(".popup__arrow")],_o.prototype,"arrowEl",2),f([ot()],_o.prototype,"anchor",2),f([ot({type:Boolean,reflect:!0})],_o.prototype,"active",2),f([ot({reflect:!0})],_o.prototype,"placement",2),f([ot({reflect:!0})],_o.prototype,"strategy",2),f([ot({type:Number})],_o.prototype,"distance",2),f([ot({type:Number})],_o.prototype,"skidding",2),f([ot({type:Boolean})],_o.prototype,"arrow",2),f([ot({attribute:"arrow-placement"})],_o.prototype,"arrowPlacement",2),f([ot({attribute:"arrow-padding",type:Number})],_o.prototype,"arrowPadding",2),f([ot({type:Boolean})],_o.prototype,"flip",2),f([ot({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],_o.prototype,"flipFallbackPlacements",2),f([ot({attribute:"flip-fallback-strategy"})],_o.prototype,"flipFallbackStrategy",2),f([ot({type:Object})],_o.prototype,"flipBoundary",2),f([ot({attribute:"flip-padding",type:Number})],_o.prototype,"flipPadding",2),f([ot({type:Boolean})],_o.prototype,"shift",2),f([ot({type:Object})],_o.prototype,"shiftBoundary",2),f([ot({attribute:"shift-padding",type:Number})],_o.prototype,"shiftPadding",2),f([ot({attribute:"auto-size"})],_o.prototype,"autoSize",2),f([ot()],_o.prototype,"sync",2),f([ot({type:Object})],_o.prototype,"autoSizeBoundary",2),f([ot({attribute:"auto-size-padding",type:Number})],_o.prototype,"autoSizePadding",2),f([ot({attribute:"hover-bridge",type:Boolean})],_o.prototype,"hoverBridge",2);var ko=class extends ct{constructor(){super(),this.localize=new Lt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Ut(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Ut(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Wt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:i}=Ht(this,"tooltip.show",{dir:this.localize.dir()});await qt(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Wt(this.body);const{keyframes:e,options:i}=Ht(this,"tooltip.hide",{dir:this.localize.dir()});await qt(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wo(this,"sl-after-hide")}render(){return be`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${xt({tooltip:!0,"tooltip--open":this.open})}
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
    `}};ko.styles=[et,Zt],ko.dependencies={"sl-popup":_o},f([at("slot:not([name])")],ko.prototype,"defaultSlot",2),f([at(".tooltip__body")],ko.prototype,"body",2),f([at("sl-popup")],ko.prototype,"popup",2),f([ot()],ko.prototype,"content",2),f([ot()],ko.prototype,"placement",2),f([ot({type:Boolean,reflect:!0})],ko.prototype,"disabled",2),f([ot({type:Number})],ko.prototype,"distance",2),f([ot({type:Boolean,reflect:!0})],ko.prototype,"open",2),f([ot({type:Number})],ko.prototype,"skidding",2),f([ot()],ko.prototype,"trigger",2),f([ot({type:Boolean})],ko.prototype,"hoist",2),f([Je("open",{waitUntilFirstUpdate:!0})],ko.prototype,"handleOpenChange",1),f([Je(["content","distance","hoist","placement","skidding"])],ko.prototype,"handleOptionsChange",1),f([Je("disabled")],ko.prototype,"handleDisabledChange",1),Rt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),Rt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),ko.define("sl-tooltip");var Co=D`
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
`;function So(e,t,i){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>i?i:e)}function To(e,t=!1){function i(e){const t=e.getChildrenItems({includeDisabled:!1});if(t.length){const i=t.every(e=>e.selected),o=t.every(e=>!e.selected&&!e.indeterminate);e.selected=i,e.indeterminate=!i&&!o}}!function e(o){for(const i of o.getChildrenItems())i.selected=t?o.selected||i.selected:!i.disabled&&o.selected,e(i);t&&i(o)}(e),function e(t){const o=t.parentElement;Yt.isTreeItem(o)&&(i(o),e(o))}(e)}var Ao=class extends ct{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Lt(this),this.initTreeItem=e=>{e.selectable="multiple"===this.selection,["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(t=>{const i=e.querySelector(`[slot="${t}-icon"]`),o=this.getExpandButtonIcon(t);o&&(null===i?e.append(o):i.hasAttribute("data-default")&&i.replaceWith(o))})},this.handleTreeChanged=e=>{for(const t of e){const e=[...t.addedNodes].filter(Yt.isTreeItem),i=[...t.removedNodes].filter(Yt.isTreeItem);e.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;t&&this.contains(t)||(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Yt.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.mutationObserver)||e.disconnect()}getExpandButtonIcon(e){const t=("expand"===e?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(t){const i=t.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(e=>e.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}selectItem(e){const t=[...this.selectedItems];if("multiple"===this.selection)e.selected=!e.selected,e.lazy&&(e.expanded=!0),To(e);else if("single"===this.selection||e.isLeaf){const t=this.getAllTreeItems();for(const i of t)i.selected=i===e}else"leaf"===this.selection&&(e.expanded=!e.expanded);const i=this.selectedItems;(t.length!==i.length||i.some(e=>!t.includes(e)))&&Promise.all(i.map(e=>e.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){null==e||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key))return;if(e.composedPath().some(e=>{var t;return["input","textarea"].includes(null==(t=null==e?void 0:e.tagName)?void 0:t.toLowerCase())}))return;const t=this.getFocusableItems(),i="ltr"===this.localize.dir(),o="rtl"===this.localize.dir();if(t.length>0){e.preventDefault();const n=t.findIndex(e=>e.matches(":focus")),r=t[n],s=e=>{const i=t[So(e,0,t.length-1)];this.focusItem(i)},a=e=>{r.expanded=e};"ArrowDown"===e.key?s(n+1):"ArrowUp"===e.key?s(n-1):i&&"ArrowRight"===e.key||o&&"ArrowLeft"===e.key?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?s(n+1):a(!0):i&&"ArrowLeft"===e.key||o&&"ArrowRight"===e.key?!r||r.disabled||r.isLeaf||!r.expanded?s(n-1):a(!1):"Home"===e.key?s(0):"End"===e.key?s(t.length-1):"Enter"!==e.key&&" "!==e.key||r.disabled||this.selectItem(r)}}handleClick(e){const t=e.target,i=t.closest("sl-tree-item"),o=e.composedPath().some(e=>{var t;return null==(t=null==e?void 0:e.classList)?void 0:t.contains("tree-item__expand-button")});i&&!i.disabled&&t===this.clickTarget&&(o?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e="multiple"===this.selection,t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const i of t)i.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(e=>To(e,!0)))}get selectedItems(){return this.getAllTreeItems().filter(e=>e.selected)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(e=>{var i;if(e.disabled)return!1;const o=null==(i=e.parentElement)?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||t.has(o))&&t.add(e),!t.has(e)})}render(){return be`
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
    `}};Ao.styles=[et,Co],f([at("slot:not([name])")],Ao.prototype,"defaultSlot",2),f([at("slot[name=expand-icon]")],Ao.prototype,"expandedIconSlot",2),f([at("slot[name=collapse-icon]")],Ao.prototype,"collapsedIconSlot",2),f([ot()],Ao.prototype,"selection",2),f([Je("selection")],Ao.prototype,"handleSelectionChange",1),Ao.define("sl-tree");var Eo=D`
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
`,$o=class extends ct{render(){return be` <slot></slot> `}};$o.styles=[et,Eo],$o.define("sl-visually-hidden");var Po=D`
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
`,Do=0,zo=class extends ct{constructor(){super(...arguments),this.attrId=++Do,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return be`
      <slot
        part="base"
        class=${xt({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};zo.styles=[et,Po],f([ot({reflect:!0})],zo.prototype,"name",2),f([ot({type:Boolean,reflect:!0})],zo.prototype,"active",2),f([Je("active")],zo.prototype,"handleActiveChange",1),zo.define("sl-tab-panel");var Mo=D`
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
`,Oo=D`
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
`;const Io=Symbol.for(""),Lo=e=>{if(e?.r===Io)return e?._$litStatic$},No=(e,...t)=>({_$litStatic$:t.reduce((t,i,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:Io}),Bo=new Map,Fo=e=>(t,...i)=>{const o=i.length;let n,r;const s=[],a=[];let l,c=0,d=!1;for(;c<o;){for(l=t[c];c<o&&void 0!==(r=i[c],n=Lo(r));)l+=n+t[++c],d=!0;c!==o&&a.push(r),s.push(l),c++}if(c===o&&s.push(t[o]),d){const e=s.join("$$lit$$");void 0===(t=Bo.get(e))&&(s.raw=s,Bo.set(e,t=s)),i=a}return e(t,...i)},jo=Fo(be);Fo(ve),Fo(ye);var Ro=class extends ct{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?No`a`:No`button`;return jo`
      <${t}
        part="base"
        class=${xt({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${_t(e?void 0:this.disabled)}
        type=${_t(e?void 0:"button")}
        href=${_t(e?this.href:void 0)}
        target=${_t(e?this.target:void 0)}
        download=${_t(e?this.download:void 0)}
        rel=${_t(e&&this.target?"noreferrer noopener":void 0)}
        role=${_t(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${_t(this.name)}
          library=${_t(this.library)}
          src=${_t(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Ro.styles=[et,Oo],Ro.dependencies={"sl-icon":bt},f([at(".icon-button")],Ro.prototype,"button",2),f([nt()],Ro.prototype,"hasFocus",2),f([ot()],Ro.prototype,"name",2),f([ot()],Ro.prototype,"library",2),f([ot()],Ro.prototype,"src",2),f([ot()],Ro.prototype,"href",2),f([ot()],Ro.prototype,"target",2),f([ot()],Ro.prototype,"download",2),f([ot()],Ro.prototype,"label",2),f([ot({type:Boolean,reflect:!0})],Ro.prototype,"disabled",2);var Ho=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return be`
      <span
        part="base"
        class=${xt({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?be`
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
    `}};Ho.styles=[et,Mo],Ho.dependencies={"sl-icon-button":Ro},f([ot({reflect:!0})],Ho.prototype,"variant",2),f([ot({reflect:!0})],Ho.prototype,"size",2),f([ot({type:Boolean,reflect:!0})],Ho.prototype,"pill",2),f([ot({type:Boolean})],Ho.prototype,"removable",2),Ho.define("sl-tag");var qo=D`
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
`,Uo=class extends ct{constructor(){super(...arguments),this.formControlController=new w(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ue(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&(null==(e=this.resizeObserver)||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){"auto"===this.resize?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){return e?("number"==typeof e.top&&(this.input.scrollTop=e.top),void("number"==typeof e.left&&(this.input.scrollLeft=e.left))):{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o="preserve"){const n=null!=t?t:this.input.selectionStart,r=null!=i?i:this.input.selectionEnd;this.input.setRangeText(e,n,r,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,o=!!this.helpText||!!t;return be`
      <div
        part="form-control"
        class=${xt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${xt({textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${_t(this.name)}
              .value=${wt(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_t(this.placeholder)}
              rows=${_t(this.rows)}
              minlength=${_t(this.minlength)}
              maxlength=${_t(this.maxlength)}
              autocapitalize=${_t(this.autocapitalize)}
              autocorrect=${_t(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${_t(this.spellcheck)}
              enterkeyhint=${_t(this.enterkeyhint)}
              inputmode=${_t(this.inputmode)}
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
    `}};Uo.styles=[et,qe,qo],f([at(".textarea__control")],Uo.prototype,"input",2),f([at(".textarea__size-adjuster")],Uo.prototype,"sizeAdjuster",2),f([nt()],Uo.prototype,"hasFocus",2),f([ot()],Uo.prototype,"title",2),f([ot()],Uo.prototype,"name",2),f([ot()],Uo.prototype,"value",2),f([ot({reflect:!0})],Uo.prototype,"size",2),f([ot({type:Boolean,reflect:!0})],Uo.prototype,"filled",2),f([ot()],Uo.prototype,"label",2),f([ot({attribute:"help-text"})],Uo.prototype,"helpText",2),f([ot()],Uo.prototype,"placeholder",2),f([ot({type:Number})],Uo.prototype,"rows",2),f([ot()],Uo.prototype,"resize",2),f([ot({type:Boolean,reflect:!0})],Uo.prototype,"disabled",2),f([ot({type:Boolean,reflect:!0})],Uo.prototype,"readonly",2),f([ot({reflect:!0})],Uo.prototype,"form",2),f([ot({type:Boolean,reflect:!0})],Uo.prototype,"required",2),f([ot({type:Number})],Uo.prototype,"minlength",2),f([ot({type:Number})],Uo.prototype,"maxlength",2),f([ot()],Uo.prototype,"autocapitalize",2),f([ot()],Uo.prototype,"autocorrect",2),f([ot()],Uo.prototype,"autocomplete",2),f([ot({type:Boolean})],Uo.prototype,"autofocus",2),f([ot()],Uo.prototype,"enterkeyhint",2),f([ot({type:Boolean,converter:{fromAttribute:e=>!(!e||"false"===e),toAttribute:e=>e?"true":"false"}})],Uo.prototype,"spellcheck",2),f([ot()],Uo.prototype,"inputmode",2),f([He()],Uo.prototype,"defaultValue",2),f([Je("disabled",{waitUntilFirstUpdate:!0})],Uo.prototype,"handleDisabledChange",1),f([Je("rows",{waitUntilFirstUpdate:!0})],Uo.prototype,"handleRowsChange",1),f([Je("value",{waitUntilFirstUpdate:!0})],Uo.prototype,"handleValueChange",1),Uo.define("sl-textarea");var Vo=D`
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
`,Wo=0,Ko=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.attrId=++Wo,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,be`
      <div
        part="base"
        class=${xt({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?be`
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
    `}};Ko.styles=[et,Vo],Ko.dependencies={"sl-icon-button":Ro},f([at(".tab")],Ko.prototype,"tab",2),f([ot({reflect:!0})],Ko.prototype,"panel",2),f([ot({type:Boolean,reflect:!0})],Ko.prototype,"active",2),f([ot({type:Boolean,reflect:!0})],Ko.prototype,"closable",2),f([ot({type:Boolean,reflect:!0})],Ko.prototype,"disabled",2),f([ot({type:Number,reflect:!0})],Ko.prototype,"tabIndex",2),f([Je("active")],Ko.prototype,"handleActiveChange",1),f([Je("disabled")],Ko.prototype,"handleDisabledChange",1),Ko.define("sl-tab");var Xo=D`
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
`,Go=D`
  :host {
    display: contents;
  }
`,Yo=class extends ct{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(null!==e){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return be` <slot @slotchange=${this.handleSlotChange}></slot> `}};Yo.styles=[et,Go],f([ot({type:Boolean,reflect:!0})],Yo.prototype,"disabled",2),f([Je("disabled",{waitUntilFirstUpdate:!0})],Yo.prototype,"handleDisabledChange",1);var Zo=new Set;function Qo(e){if(Zo.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const e=function(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}()+function(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}();let t=getComputedStyle(document.documentElement).scrollbarGutter;t&&"auto"!==t||(t="stable"),e<2&&(t=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",t),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Jo(e){Zo.delete(e),0===Zo.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function en(e,t,i="vertical",o="smooth"){const n=function(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}(e,t),r=n.top+t.scrollTop,s=n.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,c=t.scrollTop,d=t.scrollTop+t.offsetHeight;"horizontal"!==i&&"both"!==i||(s<a?t.scrollTo({left:s,behavior:o}):s+e.clientWidth>l&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:o})),"vertical"!==i&&"both"!==i||(r<c?t.scrollTo({top:r,behavior:o}):r+e.clientHeight>d&&t.scrollTo({top:r-t.offsetHeight+e.clientHeight,behavior:o}))}var tn=class extends ct{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Lt(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{const t=e.filter(({target:e})=>{if(e===this)return!0;if(e.closest("sl-tab-group")!==this)return!1;const t=e.tagName.toLowerCase();return"sl-tab"===t||"sl-tab-panel"===t});if(0!==t.length)if(t.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>"disabled"===e.attributeName))this.syncTabsAndPanels();else if(t.some(e=>"active"===e.attributeName)){const e=t.filter(e=>"active"===e.attributeName&&"sl-tab"===e.target.tagName.toLowerCase()).map(e=>e.target),i=e.find(e=>e.active);i&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{const e=new IntersectionObserver((e,t)=>{var i;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(i=this.getActiveTab())?i:this.tabs[0],{emitEvents:!1}),t.unobserve(e[0].target))});e.observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),null==(e=this.mutationObserver)||e.disconnect(),this.nav&&(null==(t=this.resizeObserver)||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>"sl-tab-panel"===e.tagName.toLowerCase())}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const t=e.target.closest("sl-tab");(null==t?void 0:t.closest("sl-tab-group"))===this&&null!==t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}handleKeyDown(e){const t=e.target.closest("sl-tab");if((null==t?void 0:t.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&null!==t&&(this.setActiveTab(t,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const t=this.tabs.find(e=>e.matches(":focus")),i="rtl"===this.localize.dir();let o=null;if("sl-tab"===(null==t?void 0:t.tagName.toLowerCase())){if("Home"===e.key)o=this.focusableTabs[0];else if("End"===e.key)o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===e.key){const e=this.tabs.findIndex(e=>e===t);o=this.findNextFocusableTab(e,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===e.key){const e=this.tabs.findIndex(e=>e===t);o=this.findNextFocusableTab(e,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(e=>{e.tabIndex=e===o?0:-1}),["top","bottom"].includes(this.placement)&&en(o,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=h({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const i=this.activeTab;this.activeTab=e,this.tabs.forEach(e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1}),this.panels.forEach(e=>{var t;return e.active=e.name===(null==(t=this.activeTab)?void 0:t.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&en(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(t=>t.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,i=e.clientHeight,o="rtl"===this.localize.dir(),n=this.getAllTabs(),r=n.slice(0,n.indexOf(e)).reduce((e,t)=>({left:e.left+t.clientWidth,top:e.top+t.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?-1*r.left+"px":`${r.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${r.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let i=null;const o="forward"===t?1:-1;let n=e+o;for(;e<this.tabs.length;){if(i=this.tabs[n]||null,null===i){i="forward"===t?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;n+=o}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(t=>t.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e="rtl"===this.localize.dir();return be`
      <div
        part="base"
        class=${xt({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?be`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${xt({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
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

          ${this.hasScrollControls?be`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${xt({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
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
    `}};tn.styles=[et,Xo],tn.dependencies={"sl-icon-button":Ro,"sl-resize-observer":Yo},f([at(".tab-group")],tn.prototype,"tabGroup",2),f([at(".tab-group__body")],tn.prototype,"body",2),f([at(".tab-group__nav")],tn.prototype,"nav",2),f([at(".tab-group__indicator")],tn.prototype,"indicator",2),f([nt()],tn.prototype,"hasScrollControls",2),f([nt()],tn.prototype,"shouldHideScrollStartButton",2),f([nt()],tn.prototype,"shouldHideScrollEndButton",2),f([ot()],tn.prototype,"placement",2),f([ot()],tn.prototype,"activation",2),f([ot({attribute:"no-scroll-controls",type:Boolean})],tn.prototype,"noScrollControls",2),f([ot({attribute:"fixed-scroll-controls",type:Boolean})],tn.prototype,"fixedScrollControls",2),f([rt({passive:!0})],tn.prototype,"updateScrollButtons",1),f([Je("noScrollControls",{waitUntilFirstUpdate:!0})],tn.prototype,"updateScrollControls",1),f([Je("placement",{waitUntilFirstUpdate:!0})],tn.prototype,"syncIndicator",1),tn.define("sl-tab-group");var on=D`
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
`,nn=class extends ct{constructor(){super(...arguments),this.effect="none"}render(){return be`
      <div
        part="base"
        class=${xt({skeleton:!0,"skeleton--pulse":"pulse"===this.effect,"skeleton--sheen":"sheen"===this.effect})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};nn.styles=[et,on],f([ot()],nn.prototype,"effect",2),nn.define("sl-skeleton");var rn=D`
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
`;function sn(e,t){function i(i){const o=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,r=o.left+n.scrollX,s=o.top+n.scrollY,a=i.pageX-r,l=i.pageY-s;(null==t?void 0:t.onMove)&&t.onMove(a,l)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",function e(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",e),(null==t?void 0:t.onStop)&&t.onStop()}),(null==t?void 0:t.initialEvent)instanceof PointerEvent&&i(t.initialEvent)}var an=()=>null,ln=class extends ct{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Lt(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=an,this.snapThreshold=12}toSnapFunction(e){const t=e.split(" ");return({pos:i,size:o,snapThreshold:n,isRtl:r,vertical:s})=>{let a=i,l=Number.POSITIVE_INFINITY;return t.forEach(t=>{let c;if(t.startsWith("repeat(")){const t=e.substring(7,e.length-1),n=t.endsWith("%"),a=Number.parseFloat(t),l=n?o*(a/100):a;c=Math.round((r&&!s?o-i:i)/l)*l}else c=t.endsWith("%")?o*(Number.parseFloat(t)/100):Number.parseFloat(t);r&&!s&&(c=o-c);const d=Math.abs(i-c);d<=n&&d<l&&(a=c,l=d)}),a}}set snap(e){this.snapValue=null!=e?e:"",this.snapFunction=e?"string"==typeof e?this.toSnapFunction(e):e:an}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.resizeObserver)||e.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t="rtl"===this.localize.dir();this.disabled||(e.cancelable&&e.preventDefault(),sn(this,{onMove:(e,i)=>{var o;let n=this.vertical?i:e;"end"===this.primary&&(n=this.size-n),n=null!=(o=this.snapFunction({pos:n,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))?o:n,this.position=So(this.pixelsToPercentage(n),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const i=(e.shiftKey?10:1)*("end"===this.primary?-1:1);if(e.preventDefault(),("ArrowLeft"===e.key&&!this.vertical||"ArrowUp"===e.key&&this.vertical)&&(t-=i),("ArrowRight"===e.key&&!this.vertical||"ArrowDown"===e.key&&this.vertical)&&(t+=i),"Home"===e.key&&(t="end"===this.primary?100:0),"End"===e.key&&(t="end"===this.primary?0:100),"Enter"===e.key)if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const e=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=e})}this.position=So(t,0,100)}}handleResize(e){const{width:t,height:i}=e[0].contentRect;this.size=this.vertical?i:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),o=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,n="auto";return"end"===this.primary?i&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${n}`:this.style[e]=`${n} var(--divider-width) ${o}`:i&&!this.vertical?this.style[e]=`${n} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${n}`,this.style[t]="",be`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${_t(this.disabled?void 0:"0")}
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
    `}};ln.styles=[et,rn],f([at(".divider")],ln.prototype,"divider",2),f([ot({type:Number,reflect:!0})],ln.prototype,"position",2),f([ot({attribute:"position-in-pixels",type:Number})],ln.prototype,"positionInPixels",2),f([ot({type:Boolean,reflect:!0})],ln.prototype,"vertical",2),f([ot({type:Boolean,reflect:!0})],ln.prototype,"disabled",2),f([ot()],ln.prototype,"primary",2),f([ot({reflect:!0})],ln.prototype,"snap",1),f([ot({type:Number,attribute:"snap-threshold"})],ln.prototype,"snapThreshold",2),f([Je("position")],ln.prototype,"handlePositionChange",1),f([Je("positionInPixels")],ln.prototype,"handlePositionInPixelsChange",1),f([Je("vertical")],ln.prototype,"handleVerticalChange",1),ln.define("sl-split-panel");var cn=D`
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
`,dn=class extends ct{constructor(){super(...arguments),this.formControlController=new w(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Ue(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){"ArrowLeft"===e.key&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===e.key&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=!!this.helpText||!!e;return be`
      <div
        class=${xt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${xt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${_t(this.value)}
            .checked=${wt(this.checked)}
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
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};dn.styles=[et,qe,cn],f([at('input[type="checkbox"]')],dn.prototype,"input",2),f([nt()],dn.prototype,"hasFocus",2),f([ot()],dn.prototype,"title",2),f([ot()],dn.prototype,"name",2),f([ot()],dn.prototype,"value",2),f([ot({reflect:!0})],dn.prototype,"size",2),f([ot({type:Boolean,reflect:!0})],dn.prototype,"disabled",2),f([ot({type:Boolean,reflect:!0})],dn.prototype,"checked",2),f([He("checked")],dn.prototype,"defaultChecked",2),f([ot({reflect:!0})],dn.prototype,"form",2),f([ot({type:Boolean,reflect:!0})],dn.prototype,"required",2),f([ot({attribute:"help-text"})],dn.prototype,"helpText",2),f([Je("checked",{waitUntilFirstUpdate:!0})],dn.prototype,"handleCheckedChange",1),f([Je("disabled",{waitUntilFirstUpdate:!0})],dn.prototype,"handleDisabledChange",1),dn.define("sl-switch"),Yo.define("sl-resize-observer");var un=D`
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
`;class hn extends yt{constructor(e){if(super(e),this.it=_e,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_e||null==e)return this._t=void 0,this.it=e;if(e===xe)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}hn.directiveName="unsafeHTML",hn.resultType=1;const pn=vt(hn);var fn=class extends ct{constructor(){super(...arguments),this.formControlController=new w(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ue(this,"help-text","label"),this.localize=new Lt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>be`
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
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,i=null!==t.closest(".select__clear"),o=null!==t.closest("sl-icon-button");if(!i&&!o){if("Escape"===e.key&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===e.key||" "===e.key&&""===this.typeToSelectString)return e.preventDefault(),e.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this.getAllOptions(),i=t.indexOf(this.currentOption);let o=Math.max(0,i);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===e.key?(o=i+1,o>t.length-1&&(o=0)):"ArrowUp"===e.key?(o=i-1,o<0&&(o=t.length-1)):"Home"===e.key?o=0:"End"===e.key&&(o=t.length-1),this.setCurrentOption(t[o])}if(e.key&&1===e.key.length||"Backspace"===e.key){const t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if("Backspace"===e.key)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===e.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const e of t)if(e.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(" "):Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(e=this.closeWatcher)||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const t=e.composedPath().some(e=>e instanceof Element&&"sl-icon-button"===e.tagName.toLowerCase());this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){"Tab"!==e.key&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const t=e.target.closest("sl-option"),i=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(t)?t:[t],o=[];e.forEach(e=>o.push(e.value)),this.setSelectedOptions(e.filter(e=>i.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),i.length&&i.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){e.selected=!0===t||!1===t?t:!e.selected,this.selectionChanged()}selectionChanged(){var e,t,i;const o=this.getAllOptions();this.selectedOptions=o.filter(e=>e.selected);const n=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=null!=(e=null==o?void 0:o.value)?e:"",this.displayLabel=null!=(i=null==(t=null==o?void 0:o.getTextLabel)?void 0:t.call(o))?i:""}this.valueHasChanged=n,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(e,t);return be`<div @sl-remove=${t=>this.handleTagRemove(t,e)}>
          ${"string"==typeof i?pn(i):i}
        </div>`}return t===this.maxOptionsVisible?be`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`:be``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"value"===e){const e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){const e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Wt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=Ht(this,"select.show",{dir:this.localize.dir()});await qt(this.popup.popup,e,t),this.currentOption&&en(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Wt(this);const{keyframes:e,options:t}=Ht(this,"select.hide",{dir:this.localize.dir()});await qt(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,wo(this,"sl-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,wo(this,"sl-after-hide");this.open=!1}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,o=!!this.helpText||!!t,n=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return be`
      <div
        part="form-control"
        class=${xt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${xt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
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

              ${this.multiple?be`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${n?be`
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
    `}};fn.styles=[et,qe,un],fn.dependencies={"sl-icon":bt,"sl-popup":_o,"sl-tag":Ho},f([at(".select")],fn.prototype,"popup",2),f([at(".select__combobox")],fn.prototype,"combobox",2),f([at(".select__display-input")],fn.prototype,"displayInput",2),f([at(".select__value-input")],fn.prototype,"valueInput",2),f([at(".select__listbox")],fn.prototype,"listbox",2),f([nt()],fn.prototype,"hasFocus",2),f([nt()],fn.prototype,"displayLabel",2),f([nt()],fn.prototype,"currentOption",2),f([nt()],fn.prototype,"selectedOptions",2),f([nt()],fn.prototype,"valueHasChanged",2),f([ot()],fn.prototype,"name",2),f([nt()],fn.prototype,"value",1),f([ot({attribute:"value"})],fn.prototype,"defaultValue",2),f([ot({reflect:!0})],fn.prototype,"size",2),f([ot()],fn.prototype,"placeholder",2),f([ot({type:Boolean,reflect:!0})],fn.prototype,"multiple",2),f([ot({attribute:"max-options-visible",type:Number})],fn.prototype,"maxOptionsVisible",2),f([ot({type:Boolean,reflect:!0})],fn.prototype,"disabled",2),f([ot({type:Boolean})],fn.prototype,"clearable",2),f([ot({type:Boolean,reflect:!0})],fn.prototype,"open",2),f([ot({type:Boolean})],fn.prototype,"hoist",2),f([ot({type:Boolean,reflect:!0})],fn.prototype,"filled",2),f([ot({type:Boolean,reflect:!0})],fn.prototype,"pill",2),f([ot()],fn.prototype,"label",2),f([ot({reflect:!0})],fn.prototype,"placement",2),f([ot({attribute:"help-text"})],fn.prototype,"helpText",2),f([ot({reflect:!0})],fn.prototype,"form",2),f([ot({type:Boolean,reflect:!0})],fn.prototype,"required",2),f([ot()],fn.prototype,"getTag",2),f([Je("disabled",{waitUntilFirstUpdate:!0})],fn.prototype,"handleDisabledChange",1),f([Je(["defaultValue","value"],{waitUntilFirstUpdate:!0})],fn.prototype,"handleValueChange",1),f([Je("open",{waitUntilFirstUpdate:!0})],fn.prototype,"handleOpenChange",1),Rt("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),Rt("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),fn.define("sl-select"),Nt.define("sl-spinner");var mn=D`
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
`,gn=class extends ct{constructor(){super(...arguments),this.formControlController=new w(this),this.hasSlotController=new Ue(this,"help-text","label"),this.localize=new Lt(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.resizeObserver)||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",100*e+"%")}syncTooltip(e){if(null!==this.output){const t=this.input.offsetWidth,i=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),n=t*e;if("rtl"===this.localize.dir()){const r=`${t-n}px + ${e} * ${o}`;this.output.style.translate=`calc((${r} - ${i/2}px - ${o} / 2))`}else{const t=`${n}px - ${e} * ${o}`;this.output.style.translate=`calc(${t} - ${i/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,o=!!this.helpText||!!t;return be`
      <div
        part="form-control"
        class=${xt({"form-control":!0,"form-control--medium":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${xt({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
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
              name=${_t(this.name)}
              ?disabled=${this.disabled}
              min=${_t(this.min)}
              max=${_t(this.max)}
              step=${_t(this.step)}
              .value=${wt(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"===this.tooltip||this.disabled?"":be`
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
    `}};gn.styles=[et,qe,mn],f([at(".range__control")],gn.prototype,"input",2),f([at(".range__tooltip")],gn.prototype,"output",2),f([nt()],gn.prototype,"hasFocus",2),f([nt()],gn.prototype,"hasTooltip",2),f([ot()],gn.prototype,"title",2),f([ot()],gn.prototype,"name",2),f([ot({type:Number})],gn.prototype,"value",2),f([ot()],gn.prototype,"label",2),f([ot({attribute:"help-text"})],gn.prototype,"helpText",2),f([ot({type:Boolean,reflect:!0})],gn.prototype,"disabled",2),f([ot({type:Number})],gn.prototype,"min",2),f([ot({type:Number})],gn.prototype,"max",2),f([ot({type:Number})],gn.prototype,"step",2),f([ot()],gn.prototype,"tooltip",2),f([ot({attribute:!1})],gn.prototype,"tooltipFormatter",2),f([ot({reflect:!0})],gn.prototype,"form",2),f([He()],gn.prototype,"defaultValue",2),f([rt({passive:!0})],gn.prototype,"handleThumbDragStart",1),f([Je("value",{waitUntilFirstUpdate:!0})],gn.prototype,"handleValueChange",1),f([Je("disabled",{waitUntilFirstUpdate:!0})],gn.prototype,"handleDisabledChange",1),f([Je("hasTooltip",{waitUntilFirstUpdate:!0})],gn.prototype,"syncRange",1),gn.define("sl-range");var bn=D`
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
`;const vn="important",yn=" !"+vn,xn=vt(class extends yt{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(yn);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?vn:""):i[e]=o}}return xe}});var _n=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t="rtl"===this.localize.dir(),{left:i,right:o,width:n}=this.rating.getBoundingClientRect();return So(t?this.roundToPrecision((o-e)/n*this.max,this.precision):this.roundToPrecision((e-i)/n*this.max,this.precision),0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t="ltr"===this.localize.dir(),i="rtl"===this.localize.dir(),o=this.value;if(!this.disabled&&!this.readonly){if("ArrowDown"===e.key||t&&"ArrowLeft"===e.key||i&&"ArrowRight"===e.key){const t=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-t),e.preventDefault()}if("ArrowUp"===e.key||t&&"ArrowRight"===e.key||i&&"ArrowLeft"===e.key){const t=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+t),e.preventDefault()}"Home"===e.key&&(this.value=0,e.preventDefault()),"End"===e.key&&(this.value=this.max,e.preventDefault()),this.value!==o&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const i=1/t;return Math.ceil(e*i)/i}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e="rtl"===this.localize.dir(),t=Array.from(Array(this.max).keys());let i=0;return i=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,be`
      <div
        part="base"
        class=${xt({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
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
          ${t.map(t=>i>t&&i<t+1?be`
                <span
                  class=${xt({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===t+1})}
                  role="presentation"
                >
                  <div
                    style=${xn({clipPath:e?`inset(0 ${100*(i-t)}% 0 0)`:`inset(0 0 0 ${100*(i-t)}%)`})}
                  >
                    ${pn(this.getSymbol(t+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${xn({clipPath:e?`inset(0 0 0 ${100-100*(i-t)}%)`:`inset(0 ${100-100*(i-t)}% 0 0)`})}
                  >
                    ${pn(this.getSymbol(t+1))}
                  </div>
                </span>
              `:be`
              <span
                class=${xt({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===t+1,"rating__symbol--active":i>=t+1})}
                role="presentation"
              >
                ${pn(this.getSymbol(t+1))}
              </span>
            `)}
        </span>
      </div>
    `}};_n.styles=[et,bn],_n.dependencies={"sl-icon":bt},f([at(".rating")],_n.prototype,"rating",2),f([nt()],_n.prototype,"hoverValue",2),f([nt()],_n.prototype,"isHovering",2),f([ot()],_n.prototype,"label",2),f([ot({type:Number})],_n.prototype,"value",2),f([ot({type:Number})],_n.prototype,"max",2),f([ot({type:Number})],_n.prototype,"precision",2),f([ot({type:Boolean,reflect:!0})],_n.prototype,"readonly",2),f([ot({type:Boolean,reflect:!0})],_n.prototype,"disabled",2),f([ot()],_n.prototype,"getSymbol",2),f([rt({passive:!0})],_n.prototype,"handleTouchMove",1),f([Je("hoverValue")],_n.prototype,"handleHoverValueChange",1),f([Je("isHovering")],_n.prototype,"handleIsHoveringChange",1),_n.define("sl-rating");var wn=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],kn=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const i=t.getTime()-e.getTime(),{unit:o,value:n}=wn.find(e=>Math.abs(i)<e.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(i/n),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let e;e=function(e){const t={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return t-Date.now()%t}("minute"===o?"second":"hour"===o?"minute":"day"===o?"hour":"day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),e)}return be` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};f([nt()],kn.prototype,"isoTime",2),f([nt()],kn.prototype,"relativeTime",2),f([ot()],kn.prototype,"date",2),f([ot()],kn.prototype,"format",2),f([ot()],kn.prototype,"numeric",2),f([ot({type:Boolean})],kn.prototype,"sync",2),kn.define("sl-relative-time");var Cn=D`
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
`,Sn=D`
  ${Cn}

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
`,Tn=class extends ct{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled)return e.preventDefault(),void e.stopPropagation();this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return jo`
      <div part="base" role="presentation">
        <button
          part="${"button"+(this.checked?" button--checked":"")}"
          role="radio"
          aria-checked="${this.checked}"
          class=${xt({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${_t(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Tn.styles=[et,Sn],f([at(".button")],Tn.prototype,"input",2),f([at(".hidden-input")],Tn.prototype,"hiddenInput",2),f([nt()],Tn.prototype,"hasFocus",2),f([ot({type:Boolean,reflect:!0})],Tn.prototype,"checked",2),f([ot()],Tn.prototype,"value",2),f([ot({type:Boolean,reflect:!0})],Tn.prototype,"disabled",2),f([ot({reflect:!0})],Tn.prototype,"size",2),f([ot({type:Boolean,reflect:!0})],Tn.prototype,"pill",2),f([Je("disabled",{waitUntilFirstUpdate:!0})],Tn.prototype,"handleDisabledChange",1),Tn.define("sl-radio-button");var An=D`
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
`,En=D`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,$n=class extends ct{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Pn(e.target);null==t||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=Pn(e.target);null==t||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=Pn(e.target);null==t||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=Pn(e.target);null==t||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const i=e.indexOf(t),o=Pn(t);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",0===i),o.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<e.length-1),o.toggleAttribute("data-sl-button-group__button--last",i===e.length-1),o.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===o.tagName.toLowerCase()))})}render(){return be`
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
    `}};function Pn(e){var t;const i="sl-button, sl-radio-button";return null!=(t=e.closest(i))?t:e.querySelector(i)}$n.styles=[et,En],f([at("slot")],$n.prototype,"defaultSlot",2),f([nt()],$n.prototype,"disableRole",2),f([ot()],$n.prototype,"label",2);var Dn=class extends ct{constructor(){super(...arguments),this.formControlController=new w(this),this.hasSlotController=new Ue(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return""!==this.customValidityMessage?S:e?C:k}get validationMessage(){const e=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),o=this.value;t&&!t.disabled&&(this.value=t.value,i.forEach(e=>e.checked=e===t),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const i=this.getAllRadios().filter(e=>!e.disabled),o=null!=(t=i.find(e=>e.checked))?t:i[0],n=" "===e.key?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,r=this.value;let s=i.indexOf(o)+n;s<0&&(s=i.length-1),s>i.length-1&&(s=0),this.getAllRadios().forEach(e=>{e.checked=!1,this.hasButtonGroup||e.setAttribute("tabindex","-1")}),this.value=i[s].value,i[s].checked=!0,this.hasButtonGroup?i[s].shadowRoot.querySelector("button").focus():(i[s].setAttribute("tabindex","0"),i[s].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const i=this.getAllRadios();if(await Promise.all(i.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=i.some(e=>"sl-radio-button"===e.tagName.toLowerCase()),i.length>0&&!i.some(e=>e.checked))if(this.hasButtonGroup){const t=null==(e=i[0].shadowRoot)?void 0:e.querySelector("button");t&&t.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const e=null==(t=this.shadowRoot)?void 0:t.querySelector("sl-button-group");e&&(e.disableRole=!0)}}syncRadios(){customElements.get("sl-radio")&&customElements.get("sl-radio-button")?this.syncRadioElements():(customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios()))}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=""!==this.customValidityMessage;return!e&&!t||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),i=t.find(e=>e.checked),o=t.find(e=>!e.disabled),n=i||o;n&&n.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,o=!!this.helpText||!!t,n=be`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return be`
      <fieldset
        part="form-control"
        class=${xt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":o})}
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

          ${this.hasButtonGroup?be`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${n}
                </sl-button-group>
              `:n}
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
    `}};Dn.styles=[et,qe,An],Dn.dependencies={"sl-button-group":$n},f([at("slot:not([name])")],Dn.prototype,"defaultSlot",2),f([at(".radio-group__validation-input")],Dn.prototype,"validationInput",2),f([nt()],Dn.prototype,"hasButtonGroup",2),f([nt()],Dn.prototype,"errorMessage",2),f([nt()],Dn.prototype,"defaultValue",2),f([ot()],Dn.prototype,"label",2),f([ot({attribute:"help-text"})],Dn.prototype,"helpText",2),f([ot()],Dn.prototype,"name",2),f([ot({reflect:!0})],Dn.prototype,"value",2),f([ot({reflect:!0})],Dn.prototype,"size",2),f([ot({reflect:!0})],Dn.prototype,"form",2),f([ot({type:Boolean,reflect:!0})],Dn.prototype,"required",2),f([Je("size",{waitUntilFirstUpdate:!0})],Dn.prototype,"handleSizeChange",1),f([Je("value")],Dn.prototype,"handleValueChange",1),Dn.define("sl-radio-group");var zn=D`
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
`,Mn=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),t=2*Math.PI*e,i=t-this.value/100*t;this.indicatorOffset=`${i}px`}}render(){return be`
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
    `}};Mn.styles=[et,zn],f([at(".progress-ring__indicator")],Mn.prototype,"indicator",2),f([nt()],Mn.prototype,"indicatorOffset",2),f([ot({type:Number,reflect:!0})],Mn.prototype,"value",2),f([ot()],Mn.prototype,"label",2),Mn.define("sl-progress-ring");var On=D`
  :host {
    display: inline-block;
  }
`;let In=null;class Ln{}Ln.render=function(e,t){In(e,t)},self.QrCreator=Ln,function(e){function t(t,i,o,n){var r={},s=e(o,i);s.u(t),s.J(),n=n||0;var a=s.h(),l=s.h()+2*n;return r.text=t,r.level=i,r.version=o,r.O=l,r.a=function(e,t){return t-=n,!(0>(e-=n)||e>=a||0>t||t>=a)&&s.a(e,t)},r}function i(e,t,i,o,n,r,s,a,l,c){function d(t,i,o,n,s,a,l){t?(e.lineTo(i+a,o+l),e.arcTo(i,o,n,s,r)):e.lineTo(i,o)}s?e.moveTo(t+r,i):e.moveTo(t,i),d(a,o,i,o,n,-r,0),d(l,o,n,t,n,0,-r),d(c,t,n,t,i,r,0),d(s,t,i,o,i,0,r)}function o(e,t,i,o,n,r,s,a,l,c){function d(t,i,o,n){e.moveTo(t+o,i),e.lineTo(t,i),e.lineTo(t,i+n),e.arcTo(t,i,t+o,i,r)}s&&d(t,i,r,r),a&&d(o,i,-r,r),l&&d(o,n,-r,-r),c&&d(t,n,r,-r)}function n(e,n){e:{var r=n.text,s=n.v,a=n.N,l=n.K,c=n.P;for(a=Math.max(1,a||1),l=Math.min(40,l||40);a<=l;a+=1)try{var d=t(r,s,a,c);break e}catch(e){}d=void 0}if(!d)return null;for(r=e.getContext("2d"),n.background&&(r.fillStyle=n.background,r.fillRect(n.left,n.top,n.size,n.size)),s=d.O,l=n.size/s,r.beginPath(),c=0;c<s;c+=1)for(a=0;a<s;a+=1){var u=r,h=n.left+a*l,p=n.top+c*l,f=c,m=a,g=d.a,b=h+l,v=p+l,y=f-1,x=f+1,_=m-1,w=m+1,k=Math.floor(Math.min(.5,Math.max(0,n.R))*l),C=g(f,m),S=g(y,_),T=g(y,m);y=g(y,w);var A=g(f,w);w=g(x,w),m=g(x,m),x=g(x,_),f=g(f,_),h=Math.round(h),p=Math.round(p),b=Math.round(b),v=Math.round(v),C?i(u,h,p,b,v,k,!T&&!f,!T&&!A,!m&&!A,!m&&!f):o(u,h,p,b,v,k,T&&f&&S,T&&A&&y,m&&A&&w,m&&f&&x)}return function(e,t){var i=t.fill;if("string"==typeof i)e.fillStyle=i;else{var o=i.type,n=i.colorStops;if(i=i.position.map(e=>Math.round(e*t.size)),"linear-gradient"===o)var r=e.createLinearGradient.apply(e,i);else{if("radial-gradient"!==o)throw Error("Unsupported fill");r=e.createRadialGradient.apply(e,i)}n.forEach(([e,t])=>{r.addColorStop(e,t)}),e.fillStyle=r}}(r,n),r.fill(),e}var r={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};In=function(e,t){var i={};Object.assign(i,r,e),i.N=i.minVersion,i.K=i.maxVersion,i.v=i.ecLevel,i.left=i.left,i.top=i.top,i.size=i.size,i.fill=i.fill,i.background=i.background,i.text=i.text,i.R=i.radius,i.P=i.quiet,t instanceof HTMLCanvasElement?(t.width===i.size&&t.height===i.size||(t.width=i.size,t.height=i.size),t.getContext("2d").clearRect(0,0,t.width,t.height),n(t,i)):((e=document.createElement("canvas")).width=i.size,e.height=i.size,i=n(e,i),t.appendChild(i))}}(function(){function e(n,s){function a(e,t){for(var i=-1;7>=i;i+=1)if(!(-1>=e+i||u<=e+i))for(var o=-1;7>=o;o+=1)-1>=t+o||u<=t+o||(d[e+i][t+o]=0<=i&&6>=i&&(0==o||6==o)||0<=o&&6>=o&&(0==i||6==i)||2<=i&&4>=i&&2<=o&&4>=o)}function l(e,i){for(var s=u=4*n+17,l=Array(s),f=0;f<s;f+=1){l[f]=Array(s);for(var m=0;m<s;m+=1)l[f][m]=null}for(d=l,a(0,0),a(u-7,0),a(0,u-7),s=o.G(n),l=0;l<s.length;l+=1)for(f=0;f<s.length;f+=1){m=s[l];var g=s[f];if(null==d[m][g])for(var b=-2;2>=b;b+=1)for(var v=-2;2>=v;v+=1)d[m+b][g+v]=-2==b||2==b||-2==v||2==v||0==b&&0==v}for(s=8;s<u-8;s+=1)null==d[s][6]&&(d[s][6]=0==s%2);for(s=8;s<u-8;s+=1)null==d[6][s]&&(d[6][s]=0==s%2);for(s=o.w(c<<3|i),l=0;15>l;l+=1)f=!e&&1==(s>>l&1),d[6>l?l:8>l?l+1:u-15+l][8]=f,d[8][8>l?u-l-1:9>l?15-l:14-l]=f;if(d[u-8][8]=!e,7<=n){for(s=o.A(n),l=0;18>l;l+=1)f=!e&&1==(s>>l&1),d[Math.floor(l/3)][l%3+u-8-3]=f;for(l=0;18>l;l+=1)f=!e&&1==(s>>l&1),d[l%3+u-8-3][Math.floor(l/3)]=f}if(null==h){for(e=r.I(n,c),s=function(){var e=[],t=0,i={B:function(){return e},c:function(t){return 1==(e[Math.floor(t/8)]>>>7-t%8&1)},put:function(e,t){for(var o=0;o<t;o+=1)i.m(1==(e>>>t-o-1&1))},f:function(){return t},m:function(i){var o=Math.floor(t/8);e.length<=o&&e.push(0),i&&(e[o]|=128>>>t%8),t+=1}};return i}(),l=0;l<p.length;l+=1)f=p[l],s.put(4,4),s.put(f.b(),o.f(4,n)),f.write(s);for(l=f=0;l<e.length;l+=1)f+=e[l].j;if(s.f()>8*f)throw Error("code length overflow. ("+s.f()+">"+8*f+")");for(s.f()+4<=8*f&&s.put(0,4);0!=s.f()%8;)s.m(!1);for(;!(s.f()>=8*f||(s.put(236,8),s.f()>=8*f));)s.put(17,8);var y=0;for(f=l=0,m=Array(e.length),g=Array(e.length),b=0;b<e.length;b+=1){var x=e[b].j,_=e[b].o-x;for(l=Math.max(l,x),f=Math.max(f,_),m[b]=Array(x),v=0;v<m[b].length;v+=1)m[b][v]=255&s.B()[v+y];for(y+=x,v=o.C(_),x=t(m[b],v.b()-1).l(v),g[b]=Array(v.b()-1),v=0;v<g[b].length;v+=1)_=v+x.b()-g[b].length,g[b][v]=0<=_?x.c(_):0}for(v=s=0;v<e.length;v+=1)s+=e[v].o;for(s=Array(s),v=y=0;v<l;v+=1)for(b=0;b<e.length;b+=1)v<m[b].length&&(s[y]=m[b][v],y+=1);for(v=0;v<f;v+=1)for(b=0;b<e.length;b+=1)v<g[b].length&&(s[y]=g[b][v],y+=1);h=s}for(e=h,s=-1,l=u-1,f=7,m=0,i=o.F(i),g=u-1;0<g;g-=2)for(6==g&&--g;;){for(b=0;2>b;b+=1)null==d[l][g-b]&&(v=!1,m<e.length&&(v=1==(e[m]>>>f&1)),i(l,g-b)&&(v=!v),d[l][g-b]=v,-1==--f&&(m+=1,f=7));if(0>(l+=s)||u<=l){l-=s,s=-s;break}}}var c=i[s],d=null,u=0,h=null,p=[],f={u:function(t){t=function(t){var i=e.s(t);return{S:function(){return 4},b:function(){return i.length},write:function(e){for(var t=0;t<i.length;t+=1)e.put(i[t],8)}}}(t),p.push(t),h=null},a:function(e,t){if(0>e||u<=e||0>t||u<=t)throw Error(e+","+t);return d[e][t]},h:function(){return u},J:function(){for(var e=0,t=0,i=0;8>i;i+=1){l(!0,i);var n=o.D(f);(0==i||e>n)&&(e=n,t=i)}l(!1,t)}};return f}function t(e,i){if(void 0===e.length)throw Error(e.length+"/"+i);var o=function(){for(var t=0;t<e.length&&0==e[t];)t+=1;for(var o=Array(e.length-t+i),n=0;n<e.length-t;n+=1)o[n]=e[n+t];return o}(),r={c:function(e){return o[e]},b:function(){return o.length},multiply:function(e){for(var i=Array(r.b()+e.b()-1),o=0;o<r.b();o+=1)for(var s=0;s<e.b();s+=1)i[o+s]^=n.i(n.g(r.c(o))+n.g(e.c(s)));return t(i,0)},l:function(e){if(0>r.b()-e.b())return r;for(var i=n.g(r.c(0))-n.g(e.c(0)),o=Array(r.b()),s=0;s<r.b();s+=1)o[s]=r.c(s);for(s=0;s<e.b();s+=1)o[s]^=n.i(n.g(e.c(s))+i);return t(o,0).l(e)}};return r}e.s=function(e){for(var t=[],i=0;i<e.length;i++){var o=e.charCodeAt(i);128>o?t.push(o):2048>o?t.push(192|o>>6,128|63&o):55296>o||57344<=o?t.push(224|o>>12,128|o>>6&63,128|63&o):(i++,o=65536+((1023&o)<<10|1023&e.charCodeAt(i)),t.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|63&o))}return t};var i={L:1,M:0,Q:3,H:2},o=function(){function e(e){for(var t=0;0!=e;)t+=1,e>>>=1;return t}var i=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],o={w:function(t){for(var i=t<<10;0<=e(i)-e(1335);)i^=1335<<e(i)-e(1335);return 21522^(t<<10|i)},A:function(t){for(var i=t<<12;0<=e(i)-e(7973);)i^=7973<<e(i)-e(7973);return t<<12|i},G:function(e){return i[e-1]},F:function(e){switch(e){case 0:return function(e,t){return 0==(e+t)%2};case 1:return function(e){return 0==e%2};case 2:return function(e,t){return 0==t%3};case 3:return function(e,t){return 0==(e+t)%3};case 4:return function(e,t){return 0==(Math.floor(e/2)+Math.floor(t/3))%2};case 5:return function(e,t){return 0==e*t%2+e*t%3};case 6:return function(e,t){return 0==(e*t%2+e*t%3)%2};case 7:return function(e,t){return 0==(e*t%3+(e+t)%2)%2};default:throw Error("bad maskPattern:"+e)}},C:function(e){for(var i=t([1],0),o=0;o<e;o+=1)i=i.multiply(t([1,n.i(o)],0));return i},f:function(e,t){if(4!=e||1>t||40<t)throw Error("mode: "+e+"; type: "+t);return 10>t?8:16},D:function(e){for(var t=e.h(),i=0,o=0;o<t;o+=1)for(var n=0;n<t;n+=1){for(var r=0,s=e.a(o,n),a=-1;1>=a;a+=1)if(!(0>o+a||t<=o+a))for(var l=-1;1>=l;l+=1)0>n+l||t<=n+l||(0!=a||0!=l)&&s==e.a(o+a,n+l)&&(r+=1);5<r&&(i+=3+r-5)}for(o=0;o<t-1;o+=1)for(n=0;n<t-1;n+=1)r=0,e.a(o,n)&&(r+=1),e.a(o+1,n)&&(r+=1),e.a(o,n+1)&&(r+=1),e.a(o+1,n+1)&&(r+=1),(0==r||4==r)&&(i+=3);for(o=0;o<t;o+=1)for(n=0;n<t-6;n+=1)e.a(o,n)&&!e.a(o,n+1)&&e.a(o,n+2)&&e.a(o,n+3)&&e.a(o,n+4)&&!e.a(o,n+5)&&e.a(o,n+6)&&(i+=40);for(n=0;n<t;n+=1)for(o=0;o<t-6;o+=1)e.a(o,n)&&!e.a(o+1,n)&&e.a(o+2,n)&&e.a(o+3,n)&&e.a(o+4,n)&&!e.a(o+5,n)&&e.a(o+6,n)&&(i+=40);for(n=r=0;n<t;n+=1)for(o=0;o<t;o+=1)e.a(o,n)&&(r+=1);return i+Math.abs(100*r/t/t-50)/5*10}};return o}(),n=function(){for(var e=Array(256),t=Array(256),i=0;8>i;i+=1)e[i]=1<<i;for(i=8;256>i;i+=1)e[i]=e[i-4]^e[i-5]^e[i-6]^e[i-8];for(i=0;255>i;i+=1)t[e[i]]=i;return{g:function(e){if(1>e)throw Error("glog("+e+")");return t[e]},i:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return e[t]}}}(),r=function(){function e(e,o){switch(o){case i.L:return t[4*(e-1)];case i.M:return t[4*(e-1)+1];case i.Q:return t[4*(e-1)+2];case i.H:return t[4*(e-1)+3]}}var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o={I:function(t,i){var o=e(t,i);if(void 0===o)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+i);t=o.length/3,i=[];for(var n=0;n<t;n+=1)for(var r=o[3*n],s=o[3*n+1],a=o[3*n+2],l=0;l<r;l+=1){var c=a,d={};d.o=s,d.j=c,i.push(d)}return i}};return o}();return e}());const Nn=QrCreator;var Bn=class extends ct{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Nn.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:2*this.size},this.canvas)}render(){var e;return be`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${(null==(e=this.label)?void 0:e.length)>0?this.label:this.value}
        style=${xn({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Bn.styles=[et,On],f([at("canvas")],Bn.prototype,"canvas",2),f([ot()],Bn.prototype,"value",2),f([ot()],Bn.prototype,"label",2),f([ot({type:Number})],Bn.prototype,"size",2),f([ot()],Bn.prototype,"fill",2),f([ot()],Bn.prototype,"background",2),f([ot({type:Number})],Bn.prototype,"radius",2),f([ot({attribute:"error-correction"})],Bn.prototype,"errorCorrection",2),f([Je(["background","errorCorrection","fill","radius","size","value"])],Bn.prototype,"generate",1),Bn.define("sl-qr-code");var Fn=D`
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
`,jn=class extends ct{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return be`
      <span
        part="base"
        class=${xt({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":"small"===this.size,"radio--medium":"medium"===this.size,"radio--large":"large"===this.size})}
      >
        <span part="${"control"+(this.checked?" control--checked":"")}" class="radio__control">
          ${this.checked?be` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};jn.styles=[et,Fn],jn.dependencies={"sl-icon":bt},f([nt()],jn.prototype,"checked",2),f([nt()],jn.prototype,"hasFocus",2),f([ot()],jn.prototype,"value",2),f([ot({reflect:!0})],jn.prototype,"size",2),f([ot({type:Boolean,reflect:!0})],jn.prototype,"disabled",2),f([Je("checked")],jn.prototype,"handleCheckedChange",1),f([Je("disabled",{waitUntilFirstUpdate:!0})],jn.prototype,"handleDisabledChange",1),jn.define("sl-radio");var Rn=D`
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
`,Hn=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute("slot")||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return be`
      <div
        part="base"
        class=${xt({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Hn.styles=[et,Rn],Hn.dependencies={"sl-icon":bt},f([at(".option__label")],Hn.prototype,"defaultSlot",2),f([nt()],Hn.prototype,"current",2),f([nt()],Hn.prototype,"selected",2),f([nt()],Hn.prototype,"hasHover",2),f([ot({reflect:!0})],Hn.prototype,"value",2),f([ot({type:Boolean,reflect:!0})],Hn.prototype,"disabled",2),f([Je("disabled")],Hn.prototype,"handleDisabledChange",1),f([Je("selected")],Hn.prototype,"handleSelectedChange",1),f([Je("value")],Hn.prototype,"handleValueChange",1),Hn.define("sl-option"),_o.define("sl-popup");var qn=D`
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
`,Un=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return be`
      <div
        part="base"
        class=${xt({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":"rtl"===this.localize.dir()})}
        role="progressbar"
        title=${_t(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${xn({width:`${this.value}%`})}>
          ${this.indeterminate?"":be` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Un.styles=[et,qn],f([ot({type:Number,reflect:!0})],Un.prototype,"value",2),f([ot({type:Boolean,reflect:!0})],Un.prototype,"indeterminate",2),f([ot()],Un.prototype,"label",2),Un.define("sl-progress-bar");var Vn=D`
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
`,Wn=class extends ct{render(){return be` <slot part="base" class="menu-label"></slot> `}};Wn.styles=[et,Vn],Wn.define("sl-menu-label");var Kn=D`
  :host {
    display: contents;
  }
`,Xn=class extends ct{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e="string"==typeof this.attr&&this.attr.length>0,t=e&&"*"!==this.attr?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch(e){}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return be` <slot></slot> `}};Xn.styles=[et,Kn],f([ot({reflect:!0})],Xn.prototype,"attr",2),f([ot({attribute:"attr-old-value",type:Boolean,reflect:!0})],Xn.prototype,"attrOldValue",2),f([ot({attribute:"char-data",type:Boolean,reflect:!0})],Xn.prototype,"charData",2),f([ot({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Xn.prototype,"charDataOldValue",2),f([ot({attribute:"child-list",type:Boolean,reflect:!0})],Xn.prototype,"childList",2),f([ot({type:Boolean,reflect:!0})],Xn.prototype,"disabled",2),f([Je("disabled")],Xn.prototype,"handleDisabledChange",1),f([Je("attr",{waitUntilFirstUpdate:!0}),Je("attr-old-value",{waitUntilFirstUpdate:!0}),Je("char-data",{waitUntilFirstUpdate:!0}),Je("char-data-old-value",{waitUntilFirstUpdate:!0}),Je("childList",{waitUntilFirstUpdate:!0})],Xn.prototype,"handleChange",1),Xn.define("sl-mutation-observer");var Gn=D`
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
`,Yn=class extends ct{constructor(){super(...arguments),this.formControlController=new w(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ue(this,"help-text","label"),this.localize=new Lt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(e=this.input)?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,(null==(e=this.input)?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;"Enter"!==e.key||t||setTimeout(()=>{e.defaultPrevented||e.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,o="preserve"){const n=null!=t?t:this.input.selectionStart,r=null!=i?i:this.input.selectionEnd;this.input.setRangeText(e,n,r,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,o=!!this.helpText||!!t,n=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return be`
      <div
        part="form-control"
        class=${xt({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":o})}
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
            class=${xt({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${_t(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_t(this.placeholder)}
              minlength=${_t(this.minlength)}
              maxlength=${_t(this.maxlength)}
              min=${_t(this.min)}
              max=${_t(this.max)}
              step=${_t(this.step)}
              .value=${wt(this.value)}
              autocapitalize=${_t(this.autocapitalize)}
              autocomplete=${_t(this.autocomplete)}
              autocorrect=${_t(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${_t(this.pattern)}
              enterkeyhint=${_t(this.enterkeyhint)}
              inputmode=${_t(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?be`
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
            ${this.passwordToggle&&!this.disabled?be`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?be`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:be`
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
    `}};Yn.styles=[et,qe,Gn],Yn.dependencies={"sl-icon":bt},f([at(".input__control")],Yn.prototype,"input",2),f([nt()],Yn.prototype,"hasFocus",2),f([ot()],Yn.prototype,"title",2),f([ot({reflect:!0})],Yn.prototype,"type",2),f([ot()],Yn.prototype,"name",2),f([ot()],Yn.prototype,"value",2),f([He()],Yn.prototype,"defaultValue",2),f([ot({reflect:!0})],Yn.prototype,"size",2),f([ot({type:Boolean,reflect:!0})],Yn.prototype,"filled",2),f([ot({type:Boolean,reflect:!0})],Yn.prototype,"pill",2),f([ot()],Yn.prototype,"label",2),f([ot({attribute:"help-text"})],Yn.prototype,"helpText",2),f([ot({type:Boolean})],Yn.prototype,"clearable",2),f([ot({type:Boolean,reflect:!0})],Yn.prototype,"disabled",2),f([ot()],Yn.prototype,"placeholder",2),f([ot({type:Boolean,reflect:!0})],Yn.prototype,"readonly",2),f([ot({attribute:"password-toggle",type:Boolean})],Yn.prototype,"passwordToggle",2),f([ot({attribute:"password-visible",type:Boolean})],Yn.prototype,"passwordVisible",2),f([ot({attribute:"no-spin-buttons",type:Boolean})],Yn.prototype,"noSpinButtons",2),f([ot({reflect:!0})],Yn.prototype,"form",2),f([ot({type:Boolean,reflect:!0})],Yn.prototype,"required",2),f([ot()],Yn.prototype,"pattern",2),f([ot({type:Number})],Yn.prototype,"minlength",2),f([ot({type:Number})],Yn.prototype,"maxlength",2),f([ot()],Yn.prototype,"min",2),f([ot()],Yn.prototype,"max",2),f([ot()],Yn.prototype,"step",2),f([ot()],Yn.prototype,"autocapitalize",2),f([ot()],Yn.prototype,"autocorrect",2),f([ot()],Yn.prototype,"autocomplete",2),f([ot({type:Boolean})],Yn.prototype,"autofocus",2),f([ot()],Yn.prototype,"enterkeyhint",2),f([ot({type:Boolean,converter:{fromAttribute:e=>!(!e||"false"===e),toAttribute:e=>e?"true":"false"}})],Yn.prototype,"spellcheck",2),f([ot()],Yn.prototype,"inputmode",2),f([Je("disabled",{waitUntilFirstUpdate:!0})],Yn.prototype,"handleDisabledChange",1),f([Je("step",{waitUntilFirstUpdate:!0})],Yn.prototype,"handleStepChange",1),f([Je("value",{waitUntilFirstUpdate:!0})],Yn.prototype,"handleValueChange",1),Yn.define("sl-input");var Zn=D`
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
`,Qn=class extends ct{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],i=e.composedPath(),o=i.find(e=>{var i;return t.includes((null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,"role"))||"")});if(!o)return;if(i.find(e=>{var t;return"menu"===(null==(t=null==e?void 0:e.getAttribute)?void 0:t.call(e,"role"))})!==this)return;const n=o;"checkbox"===n.type&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(e){if("Enter"===e.key||" "===e.key){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),null==t||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),i=this.getCurrentItem();let o=i?t.indexOf(i):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),"ArrowDown"===e.key?o++:"ArrowUp"===e.key?o--:"Home"===e.key?o=0:"End"===e.key&&(o=t.length-1),o<0&&(o=t.length-1),o>t.length-1&&(o=0),this.setCurrentItem(t[o]),t[o].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return"sl-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(t=e.getAttribute("role"))?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>"0"===e.getAttribute("tabindex"))}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute("tabindex",t===e?"0":"-1")})}render(){return be`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Qn.styles=[et,Zn],f([at("slot")],Qn.prototype,"defaultSlot",2),Qn.define("sl-menu");var Jn=D`
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
`;const er=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),er(e,t);return!0},tr=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},ir=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),rr(t)}};function or(e){void 0!==this._$AN?(tr(this),this._$AM=e,ir(this)):this._$AM=e}function nr(e,t=!1,i=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)er(o[e],!1),tr(o[e]);else null!=o&&(er(o,!1),tr(o));else er(this,e)}const rr=e=>{2==e.type&&(e._$AP??=nr,e._$AQ??=or)};class sr extends yt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),ir(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(er(this,e),tr(this))}setValue(e){if(ut(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class ar{}const lr=new WeakMap,cr=vt(class extends sr{render(e){return _e}update(e,[t]){const i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),_e}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let i=lr.get(t);void 0===i&&(i=new WeakMap,lr.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?lr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var dr=class{constructor(e,t){this.popupRef=new ar,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${e.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e)}},this.handleClick=e=>{var t;e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&("sl-menu-item"===e.target.tagName||(null==(t=e.target.role)?void 0:t.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{const e=this.host.renderRoot.querySelector("slot[name='submenu']"),t=null==e?void 0:e.assignedElements({flatten:!0}).filter(e=>"sl-menu"===e.localName)[0],i="rtl"===getComputedStyle(this.host).direction;if(!t)return;const{left:o,top:n,width:r,height:s}=t.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+r:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+r:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+s}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(const e of t.assignedElements())if(i=e.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==i.length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let e=1;e!==i.length;++e)i[e].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!(null==(e=this.host.parentElement)?void 0:e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((e,i)=>{var o;const n=null!=(o=t.get(i))?o:new CSSUnitValue(0,"px");return e-(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const e="rtl"===getComputedStyle(this.host).direction;return this.isConnected?be`
      <sl-popup
        ${cr(this.popupRef)}
        placement=${e?"left-start":"right-start"}
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
    `:be` <slot name="submenu" hidden></slot> `}},ur=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Ue(this,"submenu"),this.submenuController=new dr(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();void 0!==this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=e}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let i="";return[...t].forEach(e=>{e.nodeType===Node.TEXT_NODE&&(i+=e.textContent)}),i}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e="rtl"===this.localize.dir(),t=this.submenuController.isExpanded();return be`
      <div
        id="anchor"
        part="base"
        class=${xt({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?be` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ur.styles=[et,Jn],ur.dependencies={"sl-icon":bt,"sl-popup":_o,"sl-spinner":Nt},f([at("slot:not([name])")],ur.prototype,"defaultSlot",2),f([at(".menu-item")],ur.prototype,"menuItem",2),f([ot()],ur.prototype,"type",2),f([ot({type:Boolean,reflect:!0})],ur.prototype,"checked",2),f([ot()],ur.prototype,"value",2),f([ot({type:Boolean,reflect:!0})],ur.prototype,"loading",2),f([ot({type:Boolean,reflect:!0})],ur.prototype,"disabled",2),f([Je("checked")],ur.prototype,"handleCheckedChange",1),f([Je("disabled")],ur.prototype,"handleDisabledChange",1),f([Je("type")],ur.prototype,"handleTypeChange",1),ur.define("sl-menu-item");var hr=D`
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
`,pr=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),i="rtl"===this.localize.dir();e.preventDefault(),sn(this.base,{onMove:e=>{this.position=parseFloat(So(e/t*100,0,100).toFixed(2)),i&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t="ltr"===this.localize.dir(),i="rtl"===this.localize.dir();if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const o=e.shiftKey?10:1;let n=this.position;e.preventDefault(),(t&&"ArrowLeft"===e.key||i&&"ArrowRight"===e.key)&&(n-=o),(t&&"ArrowRight"===e.key||i&&"ArrowLeft"===e.key)&&(n+=o),"Home"===e.key&&(n=0),"End"===e.key&&(n=100),n=So(n,0,100),this.position=n}}handlePositionChange(){this.emit("sl-change")}render(){const e="rtl"===this.localize.dir();return be`
      <div
        part="base"
        id="image-comparer"
        class=${xt({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${xn({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${xn({left:e?100-this.position+"%":`${this.position}%`})}
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
    `}};pr.styles=[et,hr],pr.scopedElement={"sl-icon":bt},f([at(".image-comparer")],pr.prototype,"base",2),f([at(".image-comparer__handle")],pr.prototype,"handle",2),f([ot({type:Number,reflect:!0})],pr.prototype,"position",2),f([Je("position",{waitUntilFirstUpdate:!0})],pr.prototype,"handlePositionChange",1),pr.define("sl-image-comparer");var fr=D`
  :host {
    display: block;
  }
`,mr=new Map,gr=class extends ct{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(e=>t.setAttribute(e.name,e.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await function(e,t="cors"){const i=mr.get(e);if(void 0!==i)return Promise.resolve(i);const o=fetch(e,{mode:t}).then(async t=>{const i={ok:t.ok,status:t.status,html:await t.text()};return mr.set(e,i),i});return mr.set(e,o),o}(e,this.mode);if(e!==this.src)return;if(!t.ok)return void this.emit("sl-error",{detail:{status:t.status}});this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(e=>this.executeScript(e)),this.emit("sl-load")}catch(e){this.emit("sl-error",{detail:{status:-1}})}}render(){return be`<slot></slot>`}};gr.styles=[et,fr],f([ot()],gr.prototype,"src",2),f([ot()],gr.prototype,"mode",2),f([ot({attribute:"allow-scripts",type:Boolean})],gr.prototype,"allowScripts",2),f([Je("src")],gr.prototype,"handleSrcChange",1),gr.define("sl-include"),bt.define("sl-icon"),Ro.define("sl-icon-button");var br=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e="bit"===this.unit?["","kilo","mega","giga","tera"]:["","kilo","mega","giga","tera","peta"],t=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),e.length-1)),i=e[t]+this.unit,o=parseFloat((this.value/Math.pow(1e3,t)).toPrecision(3));return this.localize.number(o,{style:"unit",unit:i,unitDisplay:this.display})}};f([ot({type:Number})],br.prototype,"value",2),f([ot()],br.prototype,"unit",2),f([ot()],br.prototype,"display",2),br.define("sl-format-bytes");var vr=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t="auto"===this.hourFormat?void 0:"12"===this.hourFormat;if(!isNaN(e.getMilliseconds()))return be`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};f([ot()],vr.prototype,"date",2),f([ot()],vr.prototype,"weekday",2),f([ot()],vr.prototype,"era",2),f([ot()],vr.prototype,"year",2),f([ot()],vr.prototype,"month",2),f([ot()],vr.prototype,"day",2),f([ot()],vr.prototype,"hour",2),f([ot()],vr.prototype,"minute",2),f([ot()],vr.prototype,"second",2),f([ot({attribute:"time-zone-name"})],vr.prototype,"timeZoneName",2),f([ot({attribute:"time-zone"})],vr.prototype,"timeZone",2),f([ot({attribute:"hour-format"})],vr.prototype,"hourFormat",2),vr.define("sl-format-date");var yr=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};f([ot({type:Number})],yr.prototype,"value",2),f([ot()],yr.prototype,"type",2),f([ot({attribute:"no-grouping",type:Boolean})],yr.prototype,"noGrouping",2),f([ot()],yr.prototype,"currency",2),f([ot({attribute:"currency-display"})],yr.prototype,"currencyDisplay",2),f([ot({attribute:"minimum-integer-digits",type:Number})],yr.prototype,"minimumIntegerDigits",2),f([ot({attribute:"minimum-fraction-digits",type:Number})],yr.prototype,"minimumFractionDigits",2),f([ot({attribute:"maximum-fraction-digits",type:Number})],yr.prototype,"maximumFractionDigits",2),f([ot({attribute:"minimum-significant-digits",type:Number})],yr.prototype,"minimumSignificantDigits",2),f([ot({attribute:"maximum-significant-digits",type:Number})],yr.prototype,"maximumSignificantDigits",2),yr.define("sl-format-number");var xr=D`
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
`,_r=class extends ct{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};_r.styles=[et,xr],f([ot({type:Boolean,reflect:!0})],_r.prototype,"vertical",2),f([Je("vertical")],_r.prototype,"handleVerticalChange",1),_r.define("sl-divider");var wr=D`
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
`;function*kr(e=document.activeElement){var t,i,o,n,r;null!=e&&(yield e,"shadowRoot"in e&&e.shadowRoot&&"closed"!==e.shadowRoot.mode&&(yield*(t=kr(e.shadowRoot.activeElement),o=t[c("asyncIterator")],n=!1,r={},null==o?(o=t[c("iterator")](),i=e=>r[e]=t=>o[e](t)):(o=o.call(t),i=e=>r[e]=t=>{if(n){if(n=!1,"throw"===e)throw t;return t}return n=!0,{done:!1,value:new g(new Promise(i=>{var n=o[e](t);n instanceof Object||d("Object expected"),i(n)}),1)}}),r[c("iterator")]=()=>r,i("next"),"throw"in o?i("throw"):r.throw=e=>{throw e},"return"in o&&i("return"),r)))}function Cr(){return[...kr()].pop()}var Sr=new WeakMap;function Tr(e){let t=Sr.get(e);return t||(t=window.getComputedStyle(e,null),Sr.set(e,t)),t}function Ar(e){const t=new WeakMap,i=[];return function o(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]"))return;if(t.has(n))return;t.set(n,!0),!i.includes(n)&&function(e){const t=e.tagName.toLowerCase(),i=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(i)||i<=-1))return!1;if(e.hasAttribute("disabled"))return!1;if(e.closest("[inert]"))return!1;if("input"===t&&"radio"===e.getAttribute("type")){const t=e.getRootNode(),i=`input[type='radio'][name="${e.getAttribute("name")}"]`,o=t.querySelector(`${i}:checked`);return o?o===e:t.querySelector(i)===e}return!!function(e){if("function"==typeof e.checkVisibility)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Tr(e);return"hidden"!==t.visibility&&"none"!==t.display}(e)&&(!("audio"!==t&&"video"!==t||!e.hasAttribute("controls"))||!!e.hasAttribute("tabindex")||!(!e.hasAttribute("contenteditable")||"false"===e.getAttribute("contenteditable"))||!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)||function(e){const t=Tr(e),{overflowY:i,overflowX:o}=t;return"scroll"===i||"scroll"===o||"auto"===i&&"auto"===o&&(e.scrollHeight>e.clientHeight&&"auto"===i||!(!(e.scrollWidth>e.clientWidth)||"auto"!==o))}(e))}(n)&&i.push(n),n instanceof HTMLSlotElement&&function(e,t){var i;return(null==(i=e.getRootNode({composed:!0}))?void 0:i.host)!==t}(n,e)&&n.assignedElements({flatten:!0}).forEach(e=>{o(e)}),null!==n.shadowRoot&&"open"===n.shadowRoot.mode&&o(n.shadowRoot)}for(const e of n.children)o(e)}(e),i.sort((e,t)=>{const i=Number(e.getAttribute("tabindex"))||0;return(Number(t.getAttribute("tabindex"))||0)-i})}var Er=[],$r=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t;if("Tab"!==e.key||this.isExternalActivated)return;if(!this.isActive())return;const i=Cr();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=Ar(this.element);let n=o.findIndex(e=>e===i);this.previousFocus=this.currentFocus;const r="forward"===this.tabDirection?1:-1;for(;;){n+r>=o.length?n=0:n+r<0?n=o.length-1:n+=r,this.previousFocus=this.currentFocus;const i=o[n];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(i&&this.possiblyHasTabbableChildren(i))return;e.preventDefault(),this.currentFocus=i,null==(t=this.currentFocus)||t.focus({preventScroll:!1});const s=[...kr()];if(s.includes(this.currentFocus)||!s.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Er.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Er=Er.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Er[Er.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Ar(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],o="forward"===this.tabDirection?t:i;"function"==typeof(null==o?void 0:o.focus)&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},Pr=e=>{var t;const{activeElement:i}=document;i&&e.contains(i)&&(null==(t=document.activeElement)||t.blur())};function Dr(e){return e.charAt(0).toUpperCase()+e.slice(1)}var zr=class extends ct{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"footer"),this.localize=new Lt(this),this.modal=new $r(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||"Escape"===e.key&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Qo(this)))}disconnectedCallback(){super.disconnectedCallback(),Jo(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=Ht(this,"drawer.denyClose",{dir:this.localize.dir()});return void qt(this.panel,e.keyframes,e.options)}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(e=this.closeWatcher)||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Qo(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Wt(this.drawer),Wt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Ht(this,`drawer.show${Dr(this.placement)}`,{dir:this.localize.dir()}),i=Ht(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([qt(this.panel,t.keyframes,t.options),qt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Pr(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Jo(this)),await Promise.all([Wt(this.drawer),Wt(this.overlay)]);const e=Ht(this,`drawer.hide${Dr(this.placement)}`,{dir:this.localize.dir()}),t=Ht(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([qt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),qt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Qo(this)),this.open&&this.contained&&(this.modal.deactivate(),Jo(this))}async show(){if(!this.open)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wo(this,"sl-after-hide")}render(){return be`
      <div
        part="base"
        class=${xt({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_t(this.noHeader?this.label:void 0)}
          aria-labelledby=${_t(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":be`
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
    `}};zr.styles=[et,wr],zr.dependencies={"sl-icon-button":Ro},f([at(".drawer")],zr.prototype,"drawer",2),f([at(".drawer__panel")],zr.prototype,"panel",2),f([at(".drawer__overlay")],zr.prototype,"overlay",2),f([ot({type:Boolean,reflect:!0})],zr.prototype,"open",2),f([ot({reflect:!0})],zr.prototype,"label",2),f([ot({reflect:!0})],zr.prototype,"placement",2),f([ot({type:Boolean,reflect:!0})],zr.prototype,"contained",2),f([ot({attribute:"no-header",type:Boolean,reflect:!0})],zr.prototype,"noHeader",2),f([Je("open",{waitUntilFirstUpdate:!0})],zr.prototype,"handleOpenChange",1),f([Je("contained",{waitUntilFirstUpdate:!0})],zr.prototype,"handleNoModalChange",1),Rt("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),Rt("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),Rt("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),Rt("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),Rt("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),Rt("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),Rt("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),Rt("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),Rt("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),Rt("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Rt("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),zr.define("sl-drawer");var Mr=D`
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
`,Or=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&"Escape"===e.key&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if("Escape"===e.key&&this.open&&!this.closeWatcher)return e.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===e.key){if(this.open&&"sl-menu-item"===(null==(t=document.activeElement)?void 0:t.tagName.toLowerCase()))return e.preventDefault(),this.hide(),void this.focusOnTrigger();const i=(e,t)=>{if(!e)return null;const o=e.closest(t);if(o)return o;const n=e.getRootNode();return n instanceof ShadowRoot?i(n.host,t):null};setTimeout(()=>{var e;const t=(null==(e=this.containingElement)?void 0:e.getRootNode())instanceof ShadowRoot?Cr():document.activeElement;this.containingElement&&i(t,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;this.stayOpenOnSelect||"sl-menu"!==t.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==e?void 0:e.focus)&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>"sl-menu"===e.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key))return e.preventDefault(),void this.handleTriggerClick();const t=this.getMenu();if(t){const i=t.getAllItems(),o=i[0],n=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{"ArrowDown"!==e.key&&"Home"!==e.key||(t.setCurrentItem(o),o.focus()),"ArrowUp"!==e.key&&"End"!==e.key||(t.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(e){" "===e.key&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(e=>function(e){var t,i;const o=Ar(e);return{start:null!=(t=o[0])?t:null,end:null!=(i=o[o.length-1])?i:null}}(e).start);let t;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=e.button;break;default:t=e}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wo(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(e=this.closeWatcher)||e.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Wt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Ht(this,"dropdown.show",{dir:this.localize.dir()});await qt(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Wt(this);const{keyframes:e,options:t}=Ht(this,"dropdown.hide",{dir:this.localize.dir()});await qt(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return be`
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
        sync=${_t(this.sync?this.sync:void 0)}
        class=${xt({dropdown:!0,"dropdown--open":this.open})}
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
    `}};Or.styles=[et,Mr],Or.dependencies={"sl-popup":_o},f([at(".dropdown")],Or.prototype,"popup",2),f([at(".dropdown__trigger")],Or.prototype,"trigger",2),f([at(".dropdown__panel")],Or.prototype,"panel",2),f([ot({type:Boolean,reflect:!0})],Or.prototype,"open",2),f([ot({reflect:!0})],Or.prototype,"placement",2),f([ot({type:Boolean,reflect:!0})],Or.prototype,"disabled",2),f([ot({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Or.prototype,"stayOpenOnSelect",2),f([ot({attribute:!1})],Or.prototype,"containingElement",2),f([ot({type:Number})],Or.prototype,"distance",2),f([ot({type:Number})],Or.prototype,"skidding",2),f([ot({type:Boolean})],Or.prototype,"hoist",2),f([ot({reflect:!0})],Or.prototype,"sync",2),f([Je("open",{waitUntilFirstUpdate:!0})],Or.prototype,"handleOpenChange",1),Rt("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),Rt("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),Or.define("sl-dropdown");var Ir=D`
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
`,Lr=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),i=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let n=this.from,r="";i?[n,r]=this.from.trim().split("."):o&&([n,r]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in t?t.getElementById(n):null;s?e=o?s.getAttribute(r)||"":i?s[r]||"":s.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(e)try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch(e){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),n="success"===e?this.successIcon:this.errorIcon,r=Ht(this,"copy.in",{dir:"ltr"}),s=Ht(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===e?i:o,await this.copyIcon.animate(s.keyframes,s.options).finished,this.copyIcon.hidden=!0,this.status=e,n.hidden=!1,await n.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await n.animate(s.keyframes,s.options).finished,n.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return be`
      <sl-tooltip
        class=${xt({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status})}
        content=${e}
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
    `}};Lr.styles=[et,Ir],Lr.dependencies={"sl-icon":bt,"sl-tooltip":ko},f([at('slot[name="copy-icon"]')],Lr.prototype,"copyIcon",2),f([at('slot[name="success-icon"]')],Lr.prototype,"successIcon",2),f([at('slot[name="error-icon"]')],Lr.prototype,"errorIcon",2),f([at("sl-tooltip")],Lr.prototype,"tooltip",2),f([nt()],Lr.prototype,"isCopying",2),f([nt()],Lr.prototype,"status",2),f([ot()],Lr.prototype,"value",2),f([ot()],Lr.prototype,"from",2),f([ot({type:Boolean,reflect:!0})],Lr.prototype,"disabled",2),f([ot({attribute:"copy-label"})],Lr.prototype,"copyLabel",2),f([ot({attribute:"success-label"})],Lr.prototype,"successLabel",2),f([ot({attribute:"error-label"})],Lr.prototype,"errorLabel",2),f([ot({attribute:"feedback-duration",type:Number})],Lr.prototype,"feedbackDuration",2),f([ot({attribute:"tooltip-placement"})],Lr.prototype,"tooltipPlacement",2),f([ot({type:Boolean})],Lr.prototype,"hoist",2),Rt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),Rt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}}),Lr.define("sl-copy-button");var Nr=D`
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
`,Br=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)"attributes"===t.type&&"open"===t.attributeName&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.detailsObserver)||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==e.key&&"ArrowLeft"!==e.key||(e.preventDefault(),this.hide()),"ArrowDown"!==e.key&&"ArrowRight"!==e.key||(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented)return this.open=!1,void(this.details.open=!1);await Wt(this.body);const{keyframes:e,options:t}=Ht(this,"details.show",{dir:this.localize.dir()});await qt(this.body,Kt(e,this.body.scrollHeight),t),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented)return this.details.open=!0,void(this.open=!0);await Wt(this.body);const{keyframes:e,options:t}=Ht(this,"details.hide",{dir:this.localize.dir()});await qt(this.body,Kt(e,this.body.scrollHeight),t),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,wo(this,"sl-after-hide")}render(){const e="rtl"===this.localize.dir();return be`
      <details
        part="base"
        class=${xt({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
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
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Br.styles=[et,Nr],Br.dependencies={"sl-icon":bt},f([at(".details")],Br.prototype,"details",2),f([at(".details__header")],Br.prototype,"header",2),f([at(".details__body")],Br.prototype,"body",2),f([at(".details__expand-icon-slot")],Br.prototype,"expandIconSlot",2),f([ot({type:Boolean,reflect:!0})],Br.prototype,"open",2),f([ot()],Br.prototype,"summary",2),f([ot({type:Boolean,reflect:!0})],Br.prototype,"disabled",2),f([Je("open",{waitUntilFirstUpdate:!0})],Br.prototype,"handleOpenChange",1),Rt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),Rt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),Br.define("sl-details");var Fr=D`
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
`,jr=class extends ct{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"footer"),this.localize=new Lt(this),this.modal=new $r(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{"Escape"===e.key&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Qo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Jo(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const e=Ht(this,"dialog.denyClose",{dir:this.localize.dir()});return void qt(this.panel,e.keyframes,e.options)}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Qo(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Wt(this.dialog),Wt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Ht(this,"dialog.show",{dir:this.localize.dir()}),i=Ht(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([qt(this.panel,t.keyframes,t.options),qt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Pr(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Wt(this.dialog),Wt(this.overlay)]);const e=Ht(this,"dialog.hide",{dir:this.localize.dir()}),t=Ht(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([qt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),qt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Jo(this);const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wo(this,"sl-after-hide")}render(){return be`
      <div
        part="base"
        class=${xt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_t(this.noHeader?this.label:void 0)}
          aria-labelledby=${_t(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":be`
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
    `}};jr.styles=[et,Fr],jr.dependencies={"sl-icon-button":Ro},f([at(".dialog")],jr.prototype,"dialog",2),f([at(".dialog__panel")],jr.prototype,"panel",2),f([at(".dialog__overlay")],jr.prototype,"overlay",2),f([ot({type:Boolean,reflect:!0})],jr.prototype,"open",2),f([ot({reflect:!0})],jr.prototype,"label",2),f([ot({attribute:"no-header",type:Boolean,reflect:!0})],jr.prototype,"noHeader",2),f([Je("open",{waitUntilFirstUpdate:!0})],jr.prototype,"handleOpenChange",1),Rt("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Rt("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),Rt("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),Rt("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Rt("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),jr.define("sl-dialog"),kt.define("sl-checkbox");var Rr=D`
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
`,Hr=class extends ct{constructor(){super(...arguments),this.formControlController=new w(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Ue(this,"[default]","prefix","suffix"),this.localize=new Lt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:k}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?No`a`:No`button`;return jo`
      <${t}
        part="base"
        class=${xt({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${_t(e?void 0:this.disabled)}
        type=${_t(e?void 0:this.type)}
        title=${this.title}
        name=${_t(e?void 0:this.name)}
        value=${_t(e?void 0:this.value)}
        href=${_t(e&&!this.disabled?this.href:void 0)}
        target=${_t(e?this.target:void 0)}
        download=${_t(e?this.download:void 0)}
        rel=${_t(e?this.rel:void 0)}
        role=${_t(e?void 0:"button")}
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
        ${this.caret?jo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?jo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};function qr(e,t){(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");const i=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===t?e:Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:e=360===t?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t))}function Ur(e){return Math.min(1,Math.max(0,e))}function Vr(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Wr(e){return Number(e)<=1?100*Number(e)+"%":e}function Kr(e){return 1===e.length?"0"+e:String(e)}function Xr(e,t,i){e=qr(e,255),t=qr(t,255),i=qr(i,255);const o=Math.max(e,t,i),n=Math.min(e,t,i);let r=0,s=0;const a=(o+n)/2;if(o===n)s=0,r=0;else{const l=o-n;switch(s=a>.5?l/(2-o-n):l/(o+n),o){case e:r=(t-i)/l+(t<i?6:0);break;case t:r=(i-e)/l+2;break;case i:r=(e-t)/l+4}r/=6}return{h:r,s,l:a}}function Gr(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+6*i*(t-e):i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function Yr(e,t,i){e=qr(e,255),t=qr(t,255),i=qr(i,255);const o=Math.max(e,t,i),n=Math.min(e,t,i);let r=0;const s=o,a=o-n,l=0===o?0:a/o;if(o===n)r=0;else{switch(o){case e:r=(t-i)/a+(t<i?6:0);break;case t:r=(i-e)/a+2;break;case i:r=(e-t)/a+4}r/=6}return{h:r,s:l,v:s}}function Zr(e,t,i,o){const n=[Kr(Math.round(e).toString(16)),Kr(Math.round(t).toString(16)),Kr(Math.round(i).toString(16))];return o&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Qr(e,t,i){let o=1-e/255,n=1-t/255,r=1-i/255,s=Math.min(o,n,r);return 1===s?(o=0,n=0,r=0):(o=(o-s)/(1-s)*100,n=(n-s)/(1-s)*100,r=(r-s)/(1-s)*100),s*=100,{c:Math.round(o),m:Math.round(n),y:Math.round(r),k:Math.round(s)}}function Jr(e){return Math.round(255*parseFloat(e)).toString(16)}function es(e){return ts(e)/255}function ts(e){return parseInt(e,16)}Hr.styles=[et,Cn],Hr.dependencies={"sl-icon":bt,"sl-spinner":Nt},f([at(".button")],Hr.prototype,"button",2),f([nt()],Hr.prototype,"hasFocus",2),f([nt()],Hr.prototype,"invalid",2),f([ot()],Hr.prototype,"title",2),f([ot({reflect:!0})],Hr.prototype,"variant",2),f([ot({reflect:!0})],Hr.prototype,"size",2),f([ot({type:Boolean,reflect:!0})],Hr.prototype,"caret",2),f([ot({type:Boolean,reflect:!0})],Hr.prototype,"disabled",2),f([ot({type:Boolean,reflect:!0})],Hr.prototype,"loading",2),f([ot({type:Boolean,reflect:!0})],Hr.prototype,"outline",2),f([ot({type:Boolean,reflect:!0})],Hr.prototype,"pill",2),f([ot({type:Boolean,reflect:!0})],Hr.prototype,"circle",2),f([ot()],Hr.prototype,"type",2),f([ot()],Hr.prototype,"name",2),f([ot()],Hr.prototype,"value",2),f([ot()],Hr.prototype,"href",2),f([ot()],Hr.prototype,"target",2),f([ot()],Hr.prototype,"rel",2),f([ot()],Hr.prototype,"download",2),f([ot()],Hr.prototype,"form",2),f([ot({attribute:"formaction"})],Hr.prototype,"formAction",2),f([ot({attribute:"formenctype"})],Hr.prototype,"formEnctype",2),f([ot({attribute:"formmethod"})],Hr.prototype,"formMethod",2),f([ot({attribute:"formnovalidate",type:Boolean})],Hr.prototype,"formNoValidate",2),f([ot({attribute:"formtarget"})],Hr.prototype,"formTarget",2),f([Je("disabled",{waitUntilFirstUpdate:!0})],Hr.prototype,"handleDisabledChange",1);const is={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};const os="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",ns="[\\s|\\(]+("+os+")[,|\\s]+("+os+")[,|\\s]+("+os+")\\s*\\)?",rs="[\\s|\\(]+("+os+")[,|\\s]+("+os+")[,|\\s]+("+os+")[,|\\s]+("+os+")\\s*\\)?",ss={CSS_UNIT:new RegExp(os),rgb:new RegExp("rgb"+ns),rgba:new RegExp("rgba"+rs),hsl:new RegExp("hsl"+ns),hsla:new RegExp("hsla"+rs),hsv:new RegExp("hsv"+ns),hsva:new RegExp("hsva"+rs),cmyk:new RegExp("cmyk"+rs),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function as(e){return"number"==typeof e?!Number.isNaN(e):ss.CSS_UNIT.test(e)}class ls{constructor(e="",t={}){if(e instanceof ls)return e;"number"==typeof e&&(e=function(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}(e)),this.originalInput=e;const i=function(e){let t={r:0,g:0,b:0},i=1,o=null,n=null,r=null,s=!1,a=!1;return"string"==typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;let t=!1;if(is[e])e=is[e],t=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};let i=ss.rgb.exec(e);return i?{r:i[1],g:i[2],b:i[3]}:(i=ss.rgba.exec(e),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=ss.hsl.exec(e),i?{h:i[1],s:i[2],l:i[3]}:(i=ss.hsla.exec(e),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=ss.hsv.exec(e),i?{h:i[1],s:i[2],v:i[3]}:(i=ss.hsva.exec(e),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=ss.cmyk.exec(e),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=ss.hex8.exec(e),i?{r:ts(i[1]),g:ts(i[2]),b:ts(i[3]),a:es(i[4]),format:t?"name":"hex8"}:(i=ss.hex6.exec(e),i?{r:ts(i[1]),g:ts(i[2]),b:ts(i[3]),format:t?"name":"hex"}:(i=ss.hex4.exec(e),i?{r:ts(i[1]+i[1]),g:ts(i[2]+i[2]),b:ts(i[3]+i[3]),a:es(i[4]+i[4]),format:t?"name":"hex8"}:(i=ss.hex3.exec(e),!!i&&{r:ts(i[1]+i[1]),g:ts(i[2]+i[2]),b:ts(i[3]+i[3]),format:t?"name":"hex"}))))))))))}(e)),"object"==typeof e&&(as(e.r)&&as(e.g)&&as(e.b)?(t=function(e,t,i){return{r:255*qr(e,255),g:255*qr(t,255),b:255*qr(i,255)}}(e.r,e.g,e.b),s=!0,a="%"===String(e.r).substr(-1)?"prgb":"rgb"):as(e.h)&&as(e.s)&&as(e.v)?(o=Wr(e.s),n=Wr(e.v),t=function(e,t,i){e=6*qr(e,360),t=qr(t,100),i=qr(i,100);const o=Math.floor(e),n=e-o,r=i*(1-t),s=i*(1-n*t),a=i*(1-(1-n)*t),l=o%6;return{r:255*[i,s,r,r,a,i][l],g:255*[a,i,i,s,r,r][l],b:255*[r,r,a,i,i,s][l]}}(e.h,o,n),s=!0,a="hsv"):as(e.h)&&as(e.s)&&as(e.l)?(o=Wr(e.s),r=Wr(e.l),t=function(e,t,i){let o,n,r;if(e=qr(e,360),t=qr(t,100),i=qr(i,100),0===t)n=i,r=i,o=i;else{const s=i<.5?i*(1+t):i+t-i*t,a=2*i-s;o=Gr(a,s,e+1/3),n=Gr(a,s,e),r=Gr(a,s,e-1/3)}return{r:255*o,g:255*n,b:255*r}}(e.h,o,r),s=!0,a="hsl"):as(e.c)&&as(e.m)&&as(e.y)&&as(e.k)&&(t=function(e,t,i,o){const n=o/100;return{r:255*(1-e/100)*(1-n),g:255*(1-t/100)*(1-n),b:255*(1-i/100)*(1-n)}}(e.c,e.m,e.y,e.k),s=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(i=e.a)),i=Vr(i),{ok:s,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:i}}(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=t.format??i.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3}getLuminance(){const e=this.toRgb();let t,i,o;const n=e.r/255,r=e.g/255,s=e.b/255;return t=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),i=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),o=s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4),.2126*t+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(e){return this.a=Vr(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return 0===e}toHsv(){const e=Yr(this.r,this.g,this.b);return{h:360*e.h,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Yr(this.r,this.g,this.b),t=Math.round(360*e.h),i=Math.round(100*e.s),o=Math.round(100*e.v);return 1===this.a?`hsv(${t}, ${i}%, ${o}%)`:`hsva(${t}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){const e=Xr(this.r,this.g,this.b);return{h:360*e.h,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Xr(this.r,this.g,this.b),t=Math.round(360*e.h),i=Math.round(100*e.s),o=Math.round(100*e.l);return 1===this.a?`hsl(${t}, ${i}%, ${o}%)`:`hsla(${t}, ${i}%, ${o}%, ${this.roundA})`}toHex(e=!1){return Zr(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return function(e,t,i,o,n){const r=[Kr(Math.round(e).toString(16)),Kr(Math.round(t).toString(16)),Kr(Math.round(i).toString(16)),Kr(Jr(o))];return n&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return 1===this.a?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),t=Math.round(this.g),i=Math.round(this.b);return 1===this.a?`rgb(${e}, ${t}, ${i})`:`rgba(${e}, ${t}, ${i}, ${this.roundA})`}toPercentageRgb(){const e=e=>`${Math.round(100*qr(e,255))}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=e=>Math.round(100*qr(e,255));return 1===this.a?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Qr(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:t,y:i,k:o}=Qr(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${i}, ${o})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;const e="#"+Zr(this.r,this.g,this.b,!1);for(const[t,i]of Object.entries(is))if(e===i)return t;return!1}toString(e){const t=Boolean(e);e=e??this.format;let i=!1;const o=this.a<1&&this.a>=0;return t||!o||!e.startsWith("hex")&&"name"!==e?("rgb"===e&&(i=this.toRgbString()),"prgb"===e&&(i=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(i=this.toHexString()),"hex3"===e&&(i=this.toHexString(!0)),"hex4"===e&&(i=this.toHex8String(!0)),"hex8"===e&&(i=this.toHex8String()),"name"===e&&(i=this.toName()),"hsl"===e&&(i=this.toHslString()),"hsv"===e&&(i=this.toHsvString()),"cmyk"===e&&(i=this.toCmykString()),i||this.toHexString()):"name"===e&&0===this.a?this.toName():this.toRgbString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ls(this.toString())}lighten(e=10){const t=this.toHsl();return t.l+=e/100,t.l=Ur(t.l),new ls(t)}brighten(e=10){const t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-e/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-e/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-e/100*255))),new ls(t)}darken(e=10){const t=this.toHsl();return t.l-=e/100,t.l=Ur(t.l),new ls(t)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const t=this.toHsl();return t.s-=e/100,t.s=Ur(t.s),new ls(t)}saturate(e=10){const t=this.toHsl();return t.s+=e/100,t.s=Ur(t.s),new ls(t)}greyscale(){return this.desaturate(100)}spin(e){const t=this.toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,new ls(t)}mix(e,t=50){const i=this.toRgb(),o=new ls(e).toRgb(),n=t/100,r={r:(o.r-i.r)*n+i.r,g:(o.g-i.g)*n+i.g,b:(o.b-i.b)*n+i.b,a:(o.a-i.a)*n+i.a};return new ls(r)}analogous(e=6,t=30){const i=this.toHsl(),o=360/t,n=[this];for(i.h=(i.h-(o*e>>1)+720)%360;--e;)i.h=(i.h+o)%360,n.push(new ls(i));return n}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new ls(e)}monochromatic(e=6){const t=this.toHsv(),{h:i}=t,{s:o}=t;let{v:n}=t;const r=[],s=1/e;for(;e--;)r.push(new ls({h:i,s:o,v:n})),n=(n+s)%1;return r}splitcomplement(){const e=this.toHsl(),{h:t}=e;return[this,new ls({h:(t+72)%360,s:e.s,l:e.l}),new ls({h:(t+216)%360,s:e.s,l:e.l})]}onBackground(e){const t=this.toRgb(),i=new ls(e).toRgb(),o=t.a+i.a*(1-t.a);return new ls({r:(t.r*t.a+i.r*i.a*(1-t.a))/o,g:(t.g*t.a+i.g*i.a*(1-t.a))/o,b:(t.b*t.a+i.b*i.a*(1-t.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const t=this.toHsl(),{h:i}=t,o=[this],n=360/e;for(let r=1;r<e;r++)o.push(new ls({h:(i+r*n)%360,s:t.s,l:t.l}));return o}equals(e){const t=new ls(e);return"cmyk"===this.format||"cmyk"===t.format?this.toCmykString()===t.toCmykString():this.toRgbString()===t.toRgbString()}}var cs="EyeDropper"in window,ds=class extends ct{constructor(){super(),this.formControlController=new w(this),this.isSafeValue=!1,this.localize=new Lt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=t.querySelector(".color-picker__slider-handle"),{width:o}=t.getBoundingClientRect();let n=this.value,r=this.value;i.focus(),e.preventDefault(),sn(t,{onMove:e=>{this.alpha=So(e/o*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=t.querySelector(".color-picker__slider-handle"),{width:o}=t.getBoundingClientRect();let n=this.value,r=this.value;i.focus(),e.preventDefault(),sn(t,{onMove:e=>{this.hue=So(e/o*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),i=t.querySelector(".color-picker__grid-handle"),{width:o,height:n}=t.getBoundingClientRect();let r=this.value,s=this.value;i.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,sn(t,{onMove:(e,t)=>{this.saturation=So(e/o*100,0,100),this.brightness=So(100-t/n*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,i=this.value;"ArrowLeft"===e.key&&(e.preventDefault(),this.alpha=So(this.alpha-t,0,100),this.syncValues()),"ArrowRight"===e.key&&(e.preventDefault(),this.alpha=So(this.alpha+t,0,100),this.syncValues()),"Home"===e.key&&(e.preventDefault(),this.alpha=0,this.syncValues()),"End"===e.key&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,i=this.value;"ArrowLeft"===e.key&&(e.preventDefault(),this.hue=So(this.hue-t,0,360),this.syncValues()),"ArrowRight"===e.key&&(e.preventDefault(),this.hue=So(this.hue+t,0,360),this.syncValues()),"Home"===e.key&&(e.preventDefault(),this.hue=0,this.syncValues()),"End"===e.key&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,i=this.value;"ArrowLeft"===e.key&&(e.preventDefault(),this.saturation=So(this.saturation-t,0,100),this.syncValues()),"ArrowRight"===e.key&&(e.preventDefault(),this.saturation=So(this.saturation+t,0,100),this.syncValues()),"ArrowUp"===e.key&&(e.preventDefault(),this.brightness=So(this.brightness+t,0,100),this.syncValues()),"ArrowDown"===e.key&&(e.preventDefault(),this.brightness=So(this.brightness-t,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,i=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if("Enter"===e.key){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new ls(e);if(!t.isValid)return null;const i=t.toHsl(),o={h:i.h,s:100*i.s,l:100*i.l,a:i.a},n=t.toRgb(),r=t.toHexString(),s=t.toHex8String(),a=t.toHsv(),l={h:a.h,s:100*a.s,v:100*a.v,a:a.a};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:n.r,g:n.g,b:n.b,string:this.setLetterCase(`rgb(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)})`)},rgba:{r:n.r,g:n.g,b:n.b,a:n.a,string:this.setLetterCase(`rgba(${Math.round(n.r)}, ${Math.round(n.g)}, ${Math.round(n.b)}, ${n.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(s)}}setColor(e){const t=this.parseColor(e);return null!==t&&(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?100*t.hsva.a:100,this.syncValues(),!0)}setLetterCase(e){return"string"!=typeof e?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);null!==e&&("hsl"===this.format?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:"rgb"===this.format?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:"hsv"===this.format?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){cs&&(new EyeDropper).open().then(e=>{const t=this.value;this.setColor(e.sRGBHex),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,i,o=100){const n=new ls(`hsva(${e}, ${t}%, ${i}%, ${o/100})`);return n.isValid?n.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(t);null!==i?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=100*i.hsva.a,this.syncValues()):this.inputValue=null!=e?e:""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(null==(e=this.dropdown)?void 0:e.open)&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(null===t)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.inline||this.validity.valid?this.input.reportValidity():(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1)}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(e=>""!==e.trim()),o=be`
      <div
        part="base"
        class=${xt({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?be`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${xn({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${xt({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${xn({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${_t(this.disabled?void 0:"0")}
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
                style=${xn({left:(0===this.hue?0:100/(360/this.hue))+"%"})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${_t(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?be`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${xn({backgroundImage:`linear-gradient(\n                          to right,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%\n                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${xn({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${_t(this.disabled?void 0:"0")}
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
            style=${xn({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":be`
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
            ${cs?be`
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

        ${i.length>0?be`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(e=>{const t=this.parseColor(e);return t?be`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${_t(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${e}
                      @click=${()=>this.selectSwatch(e)}
                      @keydown=${e=>!this.disabled&&"Enter"===e.key&&this.setColor(t.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${xn({backgroundColor:t.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${e}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?o:be`
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
          class=${xt({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":"small"===this.size,"color-dropdown__trigger--medium":"medium"===this.size,"color-dropdown__trigger--large":"large"===this.size,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${xn({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${o}
      </sl-dropdown>
    `}};ds.styles=[et,Rr],ds.dependencies={"sl-button-group":$n,"sl-button":Hr,"sl-dropdown":Or,"sl-icon":bt,"sl-input":Yn,"sl-visually-hidden":$o},f([at('[part~="base"]')],ds.prototype,"base",2),f([at('[part~="input"]')],ds.prototype,"input",2),f([at(".color-dropdown")],ds.prototype,"dropdown",2),f([at('[part~="preview"]')],ds.prototype,"previewButton",2),f([at('[part~="trigger"]')],ds.prototype,"trigger",2),f([nt()],ds.prototype,"hasFocus",2),f([nt()],ds.prototype,"isDraggingGridHandle",2),f([nt()],ds.prototype,"isEmpty",2),f([nt()],ds.prototype,"inputValue",2),f([nt()],ds.prototype,"hue",2),f([nt()],ds.prototype,"saturation",2),f([nt()],ds.prototype,"brightness",2),f([nt()],ds.prototype,"alpha",2),f([ot()],ds.prototype,"value",2),f([He()],ds.prototype,"defaultValue",2),f([ot()],ds.prototype,"label",2),f([ot()],ds.prototype,"format",2),f([ot({type:Boolean,reflect:!0})],ds.prototype,"inline",2),f([ot({reflect:!0})],ds.prototype,"size",2),f([ot({attribute:"no-format-toggle",type:Boolean})],ds.prototype,"noFormatToggle",2),f([ot()],ds.prototype,"name",2),f([ot({type:Boolean,reflect:!0})],ds.prototype,"disabled",2),f([ot({type:Boolean})],ds.prototype,"hoist",2),f([ot({type:Boolean})],ds.prototype,"opacity",2),f([ot({type:Boolean})],ds.prototype,"uppercase",2),f([ot()],ds.prototype,"swatches",2),f([ot({reflect:!0})],ds.prototype,"form",2),f([ot({type:Boolean,reflect:!0})],ds.prototype,"required",2),f([rt({passive:!1})],ds.prototype,"handleTouchMove",1),f([Je("format",{waitUntilFirstUpdate:!0})],ds.prototype,"handleFormatChange",1),f([Je("opacity",{waitUntilFirstUpdate:!0})],ds.prototype,"handleOpacityChange",1),f([Je("value")],ds.prototype,"handleValueChange",1),ds.define("sl-color-picker");var us=D`
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
`,hs=class extends ct{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"footer","header","image")}render(){return be`
      <div
        part="base"
        class=${xt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};hs.styles=[et,us],hs.define("sl-card");var ps=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},fs=D`
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
`,ms=class extends ct{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new ps(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new Lt(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,i=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const o=e.scrollLeft,n=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:i,behavior:"instant"}),requestAnimationFrame(async()=>{t===o&&i===n||(e.scrollTo({left:o,top:n,behavior:Vt()?"auto":"smooth"}),await wo(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(e=>[...e.addedNodes,...e.removedNodes].some(e=>this.isCarouselItem(e)&&!e.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.mutationObserver)||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:i,loop:o}=this,n=o?e/i:(e-t)/i+1;return Math.ceil(n)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const t=Math.abs(this.dragStartPosition[0]-e.clientX),i=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+i*i)>=10&&e.preventDefault()}}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,i="rtl"===this.localize.dir(),o=null!==t.closest('[part~="pagination-item"]'),n="ArrowDown"===e.key||!i&&"ArrowRight"===e.key||i&&"ArrowLeft"===e.key,r="ArrowUp"===e.key||!i&&"ArrowLeft"===e.key||i&&"ArrowRight"===e.key;e.preventDefault(),r&&this.previous(),n&&this.next(),"Home"===e.key&&this.goToSlide(0),"End"===e.key&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector('[part~="pagination-item--active"]');t&&t.focus()})}}handleMouseDragStart(e){this.mouseDragging&&0===e.button&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const e of t){const t=e.target;t.toggleAttribute("inert",!e.isIntersecting),t.classList.toggle("--in-view",e.isIntersecting),t.setAttribute("aria-hidden",e.isIntersecting?"false":"true")}const i=t.find(e=>e.isIntersecting);if(!i)return;const o=this.getSlides({excludeClones:!1}),n=this.getSlides().length,r=o.indexOf(i.target),s=this.loop?r-this.slidesPerPage:r;if(this.activeSlide=(Math.ceil(s/this.slidesPerMove)*this.slidesPerMove+n)%n,!this.scrolling&&this.loop&&i.target.hasAttribute("data-clone")){const e=Number(i.target.getAttribute("data-clone"));this.goToSlide(e,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){this.scrolling&&!this.dragging&&(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&"sl-carousel-item"===e.tagName.toLowerCase()}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("role","group"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),this.pagination&&(e.setAttribute("id",`slide-${t+1}`),e.setAttribute("role","tabpanel"),e.removeAttribute("aria-label"),e.setAttribute("aria-labelledby",`tab-${t+1}`)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const e=this.getSlides(),t=this.slidesPerPage,i=e.slice(-t),o=e.slice(0,t);i.reverse().forEach((t,i)=>{const o=t.cloneNode(!0);o.setAttribute("data-clone",String(e.length-i-1)),this.prepend(o)}),o.forEach((e,t)=>{const i=e.cloneNode(!0);i.setAttribute("data-clone",String(t)),this.append(i)})}handleSlideChange(){const e=this.getSlides();e.forEach((e,t)=>{e.classList.toggle("--is-active",t===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((e,i)=>{(i+t)%t===0?e.style.removeProperty("scroll-snap-align"):e.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:i,loop:o}=this,n=this.getSlides(),r=this.getSlides({excludeClones:!1});if(!n.length)return;const s=o?(e+n.length)%n.length:So(e,0,n.length-i);this.activeSlide=s;const a=r[So(e+(o?i:0)+("rtl"===this.localize.dir()?i-1:0),0,r.length-1)];this.scrollToSlide(a,Vt()?"auto":t)}scrollToSlide(e,t="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const i=this.scrollContainer,o=i.getBoundingClientRect(),n=e.getBoundingClientRect(),r=n.left-o.left,s=n.top-o.top;r||s?(this.pendingSlideChange=!0,i.scrollTo({left:r+i.scrollLeft,top:s+i.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:e,scrolling:t}=this,i=this.getPageCount(),o=this.getCurrentPage(),n=this.canScrollPrev(),r=this.canScrollNext(),s="ltr"===this.localize.dir();return be`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${xt({carousel__slides:!0,"carousel__slides--horizontal":"horizontal"===this.orientation,"carousel__slides--vertical":"vertical"===this.orientation,"carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
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

        ${this.navigation?be`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${xt({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!n})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${n?"false":"true"}"
                  @click=${n?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${s?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${xt({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${s?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?be`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${function*(e,t){if(void 0!==e){let i=0;for(const o of e)yield t(o,i++)}}(function*(e,t,i=1){const o=void 0===t?0:e;t??=e;for(let e=o;i>0?e<t:t<e;e+=i)yield e}(i),t=>{const n=t===o;return be`
                    <button
                      part="pagination-item ${n?"pagination-item--active":""}"
                      class="${xt({"carousel__pagination-item":!0,"carousel__pagination-item--active":n})}"
                      role="tab"
                      id="tab-${t+1}"
                      aria-controls="slide-${t+1}"
                      aria-selected="${n?"true":"false"}"
                      aria-label="${n?this.localize.term("slideNum",t+1):this.localize.term("goToSlide",t+1,i)}"
                      tabindex=${n?"0":"-1"}
                      @click=${()=>this.goToSlide(t*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ms.styles=[et,fs],ms.dependencies={"sl-icon":bt},f([ot({type:Boolean,reflect:!0})],ms.prototype,"loop",2),f([ot({type:Boolean,reflect:!0})],ms.prototype,"navigation",2),f([ot({type:Boolean,reflect:!0})],ms.prototype,"pagination",2),f([ot({type:Boolean,reflect:!0})],ms.prototype,"autoplay",2),f([ot({type:Number,attribute:"autoplay-interval"})],ms.prototype,"autoplayInterval",2),f([ot({type:Number,attribute:"slides-per-page"})],ms.prototype,"slidesPerPage",2),f([ot({type:Number,attribute:"slides-per-move"})],ms.prototype,"slidesPerMove",2),f([ot()],ms.prototype,"orientation",2),f([ot({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ms.prototype,"mouseDragging",2),f([at(".carousel__slides")],ms.prototype,"scrollContainer",2),f([at(".carousel__pagination")],ms.prototype,"paginationContainer",2),f([nt()],ms.prototype,"activeSlide",2),f([nt()],ms.prototype,"scrolling",2),f([nt()],ms.prototype,"dragging",2),f([rt({passive:!0})],ms.prototype,"handleScroll",1),f([Je("loop",{waitUntilFirstUpdate:!0}),Je("slidesPerPage",{waitUntilFirstUpdate:!0})],ms.prototype,"initializeSlides",1),f([Je("activeSlide")],ms.prototype,"handleSlideChange",1),f([Je("slidesPerMove")],ms.prototype,"updateSlidesSnap",1),f([Je("autoplay")],ms.prototype,"handleAutoplayChange",1),ms.define("sl-carousel");var gs=(e,t)=>{let i=0;return function(...o){window.clearTimeout(i),i=window.setTimeout(()=>{e.call(this,...o)},t)}},bs=(e,t,i)=>{const o=e[t];e[t]=function(...e){o.call(this,...e),i.call(this,o,...e)}};(()=>{if("undefined"!=typeof window&&!("onscrollend"in window)){const e=new Set,t=new WeakMap,i=t=>{for(const i of t.changedTouches)e.add(i.identifier)},o=t=>{for(const i of t.changedTouches)e.delete(i.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),bs(EventTarget.prototype,"addEventListener",function(i,o){if("scrollend"!==o)return;const n=gs(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);i.call(this,"scroll",n,{passive:!0}),t.set(this,n)}),bs(EventTarget.prototype,"removeEventListener",function(e,i){if("scrollend"!==i)return;const o=t.get(this);o&&e.call(this,"scroll",o,{passive:!0})})}})();var vs=D`
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
`,ys=class extends ct{connectedCallback(){super.connectedCallback()}render(){return be` <slot></slot> `}};ys.styles=[et,vs],ys.define("sl-carousel-item");var xs=D`
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
`,_s=class extends ct{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const e=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>"sl-dropdown"===e.tagName.toLowerCase()).length>0;this.href?this.renderType="link":this.renderType=e?"dropdown":"button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return be`
      <div
        part="base"
        class=${xt({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${"link"===this.renderType?be`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${_t(this.target?this.target:void 0)}"
                rel=${_t(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${"button"===this.renderType?be`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${"dropdown"===this.renderType?be`
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
    `}};_s.styles=[et,xs],f([at("slot:not([name])")],_s.prototype,"defaultSlot",2),f([nt()],_s.prototype,"renderType",2),f([ot()],_s.prototype,"href",2),f([ot()],_s.prototype,"target",2),f([ot()],_s.prototype,"rel",2),f([Je("href",{waitUntilFirstUpdate:!0})],_s.prototype,"hrefChanged",1),_s.define("sl-breadcrumb-item"),$n.define("sl-button-group");var ws=D`
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
`,ks=class extends ct{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const e=be`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let t=be``;return t=this.initials?be`<div part="initials" class="avatar__initials">${this.initials}</div>`:be`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,be`
      <div
        part="base"
        class=${xt({avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};ks.styles=[et,ws],ks.dependencies={"sl-icon":bt},f([nt()],ks.prototype,"hasError",2),f([ot()],ks.prototype,"image",2),f([ot()],ks.prototype,"label",2),f([ot()],ks.prototype,"initials",2),f([ot()],ks.prototype,"loading",2),f([ot({reflect:!0})],ks.prototype,"shape",2),f([Je("image")],ks.prototype,"handleImageChange",1),ks.define("sl-avatar");var Cs=D`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ss=class extends ct{constructor(){super(...arguments),this.localize=new Lt(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(e=>e.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>"sl-breadcrumb-item"===e.tagName.toLowerCase());e.forEach((t,i)=>{const o=t.querySelector('[slot="separator"]');null===o?t.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),i===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),be`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${"rtl"===this.localize.dir()?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ss.styles=[et,Cs],Ss.dependencies={"sl-icon":bt},f([at("slot")],Ss.prototype,"defaultSlot",2),f([at('slot[name="separator"]')],Ss.prototype,"separatorSlot",2),f([ot()],Ss.prototype,"label",2),Ss.define("sl-breadcrumb"),Hr.define("sl-button");var Ts=D`
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
`,As=class extends ct{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:i}=this.animatedImage;e.width=t,e.height=i,e.getContext("2d").drawImage(this.animatedImage,0,0,t,i),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return be`
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

        ${this.isLoaded?be`
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
    `}};As.styles=[et,Ts],As.dependencies={"sl-icon":bt},f([at(".animated-image__animated")],As.prototype,"animatedImage",2),f([nt()],As.prototype,"frozenFrame",2),f([nt()],As.prototype,"isLoaded",2),f([ot()],As.prototype,"src",2),f([ot()],As.prototype,"alt",2),f([ot({type:Boolean,reflect:!0})],As.prototype,"play",2),f([Je("play",{waitUntilFirstUpdate:!0})],As.prototype,"handlePlayChange",1),f([Je("src")],As.prototype,"handleSrcChange",1),As.define("sl-animated-image");var Es=D`
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
`,$s=class extends ct{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return be`
      <span
        part="base"
        class=${xt({badge:!0,"badge--primary":"primary"===this.variant,"badge--success":"success"===this.variant,"badge--neutral":"neutral"===this.variant,"badge--warning":"warning"===this.variant,"badge--danger":"danger"===this.variant,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};$s.styles=[et,Es],f([ot({reflect:!0})],$s.prototype,"variant",2),f([ot({type:Boolean,reflect:!0})],$s.prototype,"pill",2),f([ot({type:Boolean,reflect:!0})],$s.prototype,"pulse",2),$s.define("sl-badge");var Ps=D`
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
`,Ds=class e extends ct{constructor(){super(...arguments),this.hasSlotController=new Ue(this,"icon","suffix"),this.localize=new Lt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;null==(e=this.countdownAnimation)||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),null==(e=this.countdownAnimation)||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,t="100%",i="0";this.countdownAnimation=e.animate([{width:t},{width:i}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Wt(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Ht(this,"alert.show",{dir:this.localize.dir()});await qt(this.base,e,t),this.emit("sl-after-show")}else{Pr(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Wt(this.base);const{keyframes:e,options:t}=Ht(this,"alert.hide",{dir:this.localize.dir()});await qt(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,wo(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,wo(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),null===e.toastStack.parentElement&&document.body.append(e.toastStack),e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{e.toastStack.removeChild(this),t(),null===e.toastStack.querySelector("sl-alert")&&e.toastStack.remove()},{once:!0})})}render(){return be`
      <div
        part="base"
        class=${xt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":"primary"===this.variant,"alert--success":"success"===this.variant,"alert--neutral":"neutral"===this.variant,"alert--warning":"warning"===this.variant,"alert--danger":"danger"===this.variant})}
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

        ${this.closable?be`
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

        ${this.countdown?be`
              <div
                class=${xt({alert__countdown:!0,"alert__countdown--ltr":"ltr"===this.countdown})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Ds.styles=[et,Ps],Ds.dependencies={"sl-icon-button":Ro},f([at('[part~="base"]')],Ds.prototype,"base",2),f([at(".alert__countdown-elapsed")],Ds.prototype,"countdownElement",2),f([ot({type:Boolean,reflect:!0})],Ds.prototype,"open",2),f([ot({type:Boolean,reflect:!0})],Ds.prototype,"closable",2),f([ot({reflect:!0})],Ds.prototype,"variant",2),f([ot({type:Number})],Ds.prototype,"duration",2),f([ot({type:String,reflect:!0})],Ds.prototype,"countdown",2),f([nt()],Ds.prototype,"remainingTime",2),f([Je("open",{waitUntilFirstUpdate:!0})],Ds.prototype,"handleOpenChange",1),f([Je("duration")],Ds.prototype,"handleDurationChange",1);var zs=Ds;Rt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),Rt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),zs.define("sl-alert");const Ms=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Os=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Is=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Ls=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Ns=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bs=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Fs=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],js=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Rs=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hs=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],qs=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Us=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Vs=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ws=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ks=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Xs=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Gs=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ys=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Zs=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Qs=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Js=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],ea=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ta=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ia=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],oa=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],na=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ra=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],sa=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],aa=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],la=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],ca=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],da=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],ua=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ha=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pa=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fa=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ma=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ga=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ba=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],va=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ya=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xa=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_a=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wa=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ka=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],Ca=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Sa=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Ta=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Aa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],Ea=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],$a=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Pa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Da=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],za=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Ma=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Oa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Ia=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],La=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",easing:"ease-out"},{offset:.5,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",easing:"ease-in"},{offset:.8,transform:"perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Na=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Ba=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Fa=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],ja=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Ra=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ha=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],qa=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Ua=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Va=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Wa=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ka=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Xa=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ga=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ya=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Za=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Qa=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Ja=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],el=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],tl=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],il=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ol=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],nl=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],rl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],sl=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],al=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],ll=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],cl=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],dl=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],ul=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hl=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],pl=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],fl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ml=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],gl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],bl=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],vl=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],yl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],_l=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],wl=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],kl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};var Cl=D`
  :host {
    display: contents;
  }
`,Sl=class extends ct{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return null!=(t=null==(e=this.animation)?void 0:e.currentTime)?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,i;const o=null!=(t=kl[this.easing])?t:this.easing,n=null!=(i=this.keyframes)?i:e[this.name],r=(await this.defaultSlot).assignedElements()[0];return!(!r||!n||(this.destroyAnimation(),this.animation=r.animate(n,{delay:this.delay,direction:this.direction,duration:this.duration,easing:o,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),0))}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return!!this.animation&&(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0)}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;null==(e=this.animation)||e.cancel()}finish(){var e;null==(e=this.animation)||e.finish()}render(){return be` <slot @slotchange=${this.handleSlotChange}></slot> `}};Sl.styles=[et,Cl],f([(e,t)=>st(e,t,{async get(){return await this.updateComplete,this.renderRoot?.querySelector("slot")??null}})],Sl.prototype,"defaultSlot",2),f([ot()],Sl.prototype,"name",2),f([ot({type:Boolean,reflect:!0})],Sl.prototype,"play",2),f([ot({type:Number})],Sl.prototype,"delay",2),f([ot()],Sl.prototype,"direction",2),f([ot({type:Number})],Sl.prototype,"duration",2),f([ot()],Sl.prototype,"easing",2),f([ot({attribute:"end-delay",type:Number})],Sl.prototype,"endDelay",2),f([ot()],Sl.prototype,"fill",2),f([ot({type:Number})],Sl.prototype,"iterations",2),f([ot({attribute:"iteration-start",type:Number})],Sl.prototype,"iterationStart",2),f([ot({attribute:!1})],Sl.prototype,"keyframes",2),f([ot({attribute:"playback-rate",type:Number})],Sl.prototype,"playbackRate",2),f([Je(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Sl.prototype,"handleAnimationChange",1),f([Je("play")],Sl.prototype,"handlePlayChange",1),f([Je("playbackRate")],Sl.prototype,"handlePlaybackRateChange",1),Sl.define("sl-animation");var Tl,Al,El,$l,Pl=i(46),Dl=i.n(Pl),zl=!1,Ml=!1,Ol=[],Il=-1,Ll=!1;function Nl(e){let t=Ol.indexOf(e);-1!==t&&t>Il&&Ol.splice(t,1)}function Bl(){if(!Ml&&!zl){if(Ll)return;zl=!0,queueMicrotask(Fl)}}function Fl(){zl=!1,Ml=!0;for(let e=0;e<Ol.length;e++)Ol[e](),Il=e;Ol.length=0,Il=-1,Ml=!1}var jl=!0;function Rl(e){Al=e}function Hl(e,t){let i,o=!0,n=Al(()=>{let n=e();if(JSON.stringify(n),!o&&("object"==typeof n||n!==i)){let e=i;queueMicrotask(()=>{t(n,e)})}i=n,o=!1});return()=>El(n)}async function ql(e){Ll=!0;try{await e(),await Promise.resolve()}finally{Ll=!1,Bl()}}var Ul=[],Vl=[],Wl=[];function Kl(e,t){"function"==typeof t?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,Vl.push(t))}function Xl(e){Ul.push(e)}function Gl(e,t,i){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(i)}function Yl(e,t){e._x_attributeCleanups&&Object.entries(e._x_attributeCleanups).forEach(([i,o])=>{(void 0===t||t.includes(i))&&(o.forEach(e=>e()),delete e._x_attributeCleanups[i])})}var Zl=new MutationObserver(rc),Ql=!1;function Jl(){Zl.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Ql=!0}function ec(){!function(){let e=Zl.takeRecords();tc.push(()=>e.length>0&&rc(e));let t=tc.length;queueMicrotask(()=>{if(tc.length===t)for(;tc.length>0;)tc.shift()()})}(),Zl.disconnect(),Ql=!1}var tc=[];function ic(e){if(!Ql)return e();ec();let t=e();return Jl(),t}var oc=!1,nc=[];function rc(e){if(oc)return void(nc=nc.concat(e));let t=[],i=new Set,o=new Map,n=new Map;for(let r=0;r<e.length;r++)if(!e[r].target._x_ignoreMutationObserver&&("childList"===e[r].type&&(e[r].removedNodes.forEach(e=>{1===e.nodeType&&e._x_marker&&i.add(e)}),e[r].addedNodes.forEach(e=>{1===e.nodeType&&(i.has(e)?i.delete(e):e._x_marker||t.push(e))})),"attributes"===e[r].type)){let t=e[r].target,i=e[r].attributeName,s=e[r].oldValue,a=()=>{o.has(t)||o.set(t,[]),o.get(t).push({name:i,value:t.getAttribute(i)})},l=()=>{n.has(t)||n.set(t,[]),n.get(t).push(i)};t.hasAttribute(i)&&null===s?a():t.hasAttribute(i)?(l(),a()):l()}n.forEach((e,t)=>{Yl(t,e)}),o.forEach((e,t)=>{Ul.forEach(i=>i(t,e))});for(let e of i)t.some(t=>t.contains(e))||Vl.forEach(t=>t(e));for(let e of t)e.isConnected&&Wl.forEach(t=>t(e));t=null,i=null,o=null,n=null}function sc(e){return cc(lc(e))}function ac(e,t,i){return e._x_dataStack=[t,...lc(i||e)],()=>{e._x_dataStack=e._x_dataStack.filter(e=>e!==t)}}function lc(e){return e._x_dataStack?e._x_dataStack:"function"==typeof ShadowRoot&&e instanceof ShadowRoot?lc(e.host):e.parentNode?lc(e.parentNode):[]}function cc(e){return new Proxy({objects:e},dc)}var dc={ownKeys:({objects:e})=>Array.from(new Set(e.flatMap(e=>Object.keys(e)))),has:({objects:e},t)=>t!=Symbol.unscopables&&e.some(e=>Object.prototype.hasOwnProperty.call(e,t)||Reflect.has(e,t)),get:({objects:e},t,i)=>"toJSON"==t?uc:Reflect.get(e.find(e=>Reflect.has(e,t))||{},t,i),set({objects:e},t,i,o){const n=e.find(e=>Object.prototype.hasOwnProperty.call(e,t))||e[e.length-1],r=Object.getOwnPropertyDescriptor(n,t);return r?.set&&r?.get?r.set.call(o,i)||!0:Reflect.set(n,t,i)}};function uc(){return Reflect.ownKeys(this).reduce((e,t)=>(e[t]=Reflect.get(this,t),e),{})}function hc(e){let t=(i,o="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([n,{value:r,enumerable:s}])=>{if(!1===s||void 0===r)return;if("object"==typeof r&&null!==r&&r.__v_skip)return;let a=""===o?n:`${o}.${n}`;var l;"object"==typeof r&&null!==r&&r._x_interceptor?i[n]=r.initialize(e,a,n):"object"!=typeof(l=r)||Array.isArray(l)||null===l||r===i||r instanceof Element||t(r,a)})};return t(e)}function pc(e,t=()=>{}){let i={initialValue:void 0,_x_interceptor:!0,initialize(t,i,o){return e(this.initialValue,()=>function(e,t){return t.split(".").reduce((e,t)=>e[t],e)}(t,i),e=>fc(t,i,e),i,o)}};return t(i),e=>{if("object"==typeof e&&null!==e&&e._x_interceptor){let t=i.initialize.bind(i);i.initialize=(o,n,r)=>{let s=e.initialize(o,n,r);return i.initialValue=s,t(o,n,r)}}else i.initialValue=e;return i}}function fc(e,t,i){if("string"==typeof t&&(t=t.split(".")),1!==t.length){if(0===t.length)throw error;return e[t[0]]||(e[t[0]]={}),fc(e[t[0]],t.slice(1),i)}e[t[0]]=i}var mc={};function gc(e,t){mc[e]=t}function bc(e,t){let i=function(e){let[t,i]=Fc(e),o={interceptor:pc,...t};return Kl(e,i),o}(t);return Object.entries(mc).forEach(([o,n])=>{Object.defineProperty(e,`$${o}`,{get:()=>n(t,i),enumerable:!1})}),e}function vc(e,t,i,...o){try{return i(...o)}catch(i){yc(i,e,t)}}function yc(...e){return xc(...e)}var xc=function(e,t,i=void 0){e=Object.assign(e??{message:"No error message given."},{el:t,expression:i}),console.warn(`Alpine Expression Error: ${e.message}\n\n${i?'Expression: "'+i+'"\n\n':""}`,t),setTimeout(()=>{throw e},0)},_c=!0;function wc(e){let t=_c;_c=!1;let i=e();return _c=t,i}function kc(e,t,i={}){let o;return Cc(e,t)(e=>o=e,i),o}function Cc(...e){return Tc(...e)}var Sc,Tc=Ac;function Ac(e,t){let i={};bc(i,e);let o=[i,...lc(e)],n="function"==typeof t?function(e,t){return(i=()=>{},{scope:o={},params:n=[],context:r}={})=>{_c?$c(i,t.apply(cc([o,...e]),n)):$c(i,t,cc([o,...e]),n)}}(o,t):function(e,t,i){let o=function(e,t){if(Ec[e])return Ec[e];let i=Object.getPrototypeOf(async function(){}).constructor,o=/^[\n\s]*if.*\(.*\)/.test(e.trim())||/^(let|const)\s/.test(e.trim())?`(async()=>{ ${e} })()`:e;let n=(()=>{try{let t=new i(["__self","scope"],`with (scope) { __self.result = ${o} }; __self.finished = true; return __self.result;`);return Object.defineProperty(t,"name",{value:`[Alpine] ${e}`}),t}catch(i){return yc(i,t,e),Promise.resolve()}})();return Ec[e]=n,n}(t,i);return(n=()=>{},{scope:r={},params:s=[],context:a}={})=>{o.result=void 0,o.finished=!1;let l=cc([r,...e]);if("function"==typeof o){let e=o.call(a,o,l).catch(e=>yc(e,i,t));o.finished?($c(n,o.result,l,s,i),o.result=void 0):e.then(e=>{$c(n,e,l,s,i)}).catch(e=>yc(e,i,t)).finally(()=>o.result=void 0)}}}(o,t,e);return vc.bind(null,e,t,n)}var Ec={};function $c(e,t,i,o,n){if(_c&&"function"==typeof t){let r=t.apply(i,o);r instanceof Promise?r.then(t=>$c(e,t,i,o)).catch(e=>yc(e,n,t)):e(r)}else"object"==typeof t&&t instanceof Promise?t.then(t=>e(t)):e(t)}var Pc="x-";function Dc(e=""){return Pc+e}var zc={};function Mc(e,t){return zc[e]=t,{before(t){if(!zc[t])return void console.warn(String.raw`Cannot find directive \`${t}\`. \`${e}\` will use the default order of execution`);const i=Kc.indexOf(t);Kc.splice(i>=0?i:Kc.indexOf("DEFAULT"),0,e)}}}function Oc(e,t,i){if(t=Array.from(t),e._x_virtualDirectives){let i=Object.entries(e._x_virtualDirectives).map(([e,t])=>({name:e,value:t})),o=Ic(i);i=i.map(e=>o.find(t=>t.name===e.name)?{name:`x-bind:${e.name}`,value:`"${e.value}"`}:e),t=t.concat(i)}let o={},n=t.map(Rc((e,t)=>o[e]=t)).filter(Uc).map(function(e,t){return({name:i,value:o})=>{i===o&&(o="");let n=i.match(Vc()),r=i.match(/:([a-zA-Z0-9\-_:]+)/),s=i.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=t||e[i]||i;return{type:n?n[1]:null,value:r?r[1]:null,modifiers:s.map(e=>e.replace(".","")),expression:o,original:a}}}(o,i)).sort(Xc);return n.map(t=>function(e,t){let i=zc[t.type]||(()=>{}),[o,n]=Fc(e);Gl(e,t.original,n);let r=()=>{e._x_ignore||e._x_ignoreSelf||(i.inline&&i.inline(e,t,o),i=i.bind(i,e,t,o),Lc?Nc.get(Bc).push(i):i())};return r.runCleanups=n,r}(e,t))}function Ic(e){return Array.from(e).map(Rc()).filter(e=>!Uc(e))}var Lc=!1,Nc=new Map,Bc=Symbol();function Fc(e){let t=[],[i,o]=function(e){let t=()=>{};return[i=>{let o=Al(i);return e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(e=>e())}),e._x_effects.add(o),t=()=>{void 0!==o&&(e._x_effects.delete(o),El(o))},o},()=>{t()}]}(e);return t.push(o),[{Alpine:Xd,effect:i,cleanup:e=>t.push(e),evaluateLater:Cc.bind(Cc,e),evaluate:kc.bind(kc,e)},()=>t.forEach(e=>e())]}var jc=(e,t)=>({name:i,value:o})=>(i.startsWith(e)&&(i=i.replace(e,t)),{name:i,value:o});function Rc(e=()=>{}){return({name:t,value:i})=>{let{name:o,value:n}=Hc.reduce((e,t)=>t(e),{name:t,value:i});return o!==t&&e(o,t),{name:o,value:n}}}var Hc=[];function qc(e){Hc.push(e)}function Uc({name:e}){return Vc().test(e)}var Vc=()=>new RegExp(`^${Pc}([^:^.]+)\\b`),Wc="DEFAULT",Kc=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",Wc,"teleport"];function Xc(e,t){let i=-1===Kc.indexOf(e.type)?Wc:e.type,o=-1===Kc.indexOf(t.type)?Wc:t.type;return Kc.indexOf(i)-Kc.indexOf(o)}function Gc(e,t,i={}){e.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0,cancelable:!0}))}function Yc(e,t){if("function"==typeof ShadowRoot&&e instanceof ShadowRoot)return void Array.from(e.children).forEach(e=>Yc(e,t));let i=!1;if(t(e,()=>i=!0),i)return;let o=e.firstElementChild;for(;o;)Yc(o,t),o=o.nextElementSibling}function Zc(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}var Qc=!1,Jc=[],ed=[];function td(){return Jc.map(e=>e())}function id(){return Jc.concat(ed).map(e=>e())}function od(e){Jc.push(e)}function nd(e){ed.push(e)}function rd(e,t=!1){return sd(e,e=>{if((t?id():td()).some(t=>e.matches(t)))return!0})}function sd(e,t){if(e){if(t(e))return e;if(e._x_teleportBack&&(e=e._x_teleportBack),e.parentNode instanceof ShadowRoot)return sd(e.parentNode.host,t);if(e.parentElement)return sd(e.parentElement,t)}}var ad=[],ld=1;function cd(e,t=Yc,i=()=>{}){sd(e,e=>e._x_ignore)||function(){Lc=!0;let o=Symbol();Bc=o,Nc.set(o,[]);let n=()=>{for(;Nc.get(o).length;)Nc.get(o).shift()();Nc.delete(o)};t(e,(e,t)=>{e._x_marker||(i(e,t),ad.forEach(i=>i(e,t)),Oc(e,e.attributes).forEach(e=>e()),e._x_ignore||(e._x_marker=ld++),e._x_ignore&&t())}),Lc=!1,n()}()}function dd(e,t=Yc){t(e,e=>{!function(e){for(e._x_effects?.forEach(Nl);e._x_cleanups?.length;)e._x_cleanups.pop()()}(e),Yl(e),delete e._x_marker})}var ud=[],hd=!1;function pd(e=()=>{}){return queueMicrotask(()=>{hd||setTimeout(()=>{fd()})}),new Promise(t=>{ud.push(()=>{e(),t()})})}function fd(){for(hd=!1;ud.length;)ud.shift()()}function md(e,t){return Array.isArray(t)?gd(e,t.join(" ")):"object"==typeof t&&null!==t?function(e,t){let i=e=>e.split(" ").filter(Boolean),o=Object.entries(t).flatMap(([e,t])=>!!t&&i(e)).filter(Boolean),n=Object.entries(t).flatMap(([e,t])=>!t&&i(e)).filter(Boolean),r=[],s=[];return n.forEach(t=>{e.classList.contains(t)&&(e.classList.remove(t),s.push(t))}),o.forEach(t=>{e.classList.contains(t)||(e.classList.add(t),r.push(t))}),()=>{s.forEach(t=>e.classList.add(t)),r.forEach(t=>e.classList.remove(t))}}(e,t):"function"==typeof t?md(e,t()):gd(e,t)}function gd(e,t){return t=!0===t?t="":t||"",i=t.split(" ").filter(t=>!e.classList.contains(t)).filter(Boolean),e.classList.add(...i),()=>{e.classList.remove(...i)};var i}function bd(e,t){return"object"==typeof t&&null!==t?function(e,t){let i={};return Object.entries(t).forEach(([t,o])=>{i[t]=e.style[t],t.startsWith("--")||(t=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),e.style.setProperty(t,o)}),setTimeout(()=>{0===e.style.length&&e.removeAttribute("style")}),()=>{bd(e,i)}}(e,t):function(e,t){let i=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",i||"")}}(e,t)}function vd(e,t=()=>{}){let i=!1;return function(){i?t.apply(this,arguments):(i=!0,e.apply(this,arguments))}}function yd(e,t,i={}){e._x_transition||(e._x_transition={enter:{during:i,start:i,end:i},leave:{during:i,start:i,end:i},in(i=()=>{},o=()=>{}){_d(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},i,o)},out(i=()=>{},o=()=>{}){_d(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},i,o)}})}function xd(e){let t=e.parentNode;if(t)return t._x_hidePromise?t:xd(t)}function _d(e,t,{during:i,start:o,end:n}={},r=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),0===Object.keys(i).length&&0===Object.keys(o).length&&0===Object.keys(n).length)return r(),void s();let a,l,c;!function(e,t){let i,o,n,r=vd(()=>{ic(()=>{i=!0,o||t.before(),n||(t.end(),fd()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(e){this.beforeCancels.push(e)},cancel:vd(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();r()}),finish:r},ic(()=>{t.start(),t.during()}),hd=!0,requestAnimationFrame(()=>{if(i)return;let r=1e3*Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s","")),s=1e3*Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""));0===r&&(r=1e3*Number(getComputedStyle(e).animationDuration.replace("s",""))),ic(()=>{t.before()}),o=!0,requestAnimationFrame(()=>{i||(ic(()=>{t.end()}),fd(),setTimeout(e._x_transitioning.finish,r+s),n=!0)})})}(e,{start(){a=t(e,o)},during(){l=t(e,i)},before:r,end(){a(),c=t(e,n)},after:s,cleanup(){l(),c()}})}function wd(e,t,i){if(-1===e.indexOf(t))return i;const o=e[e.indexOf(t)+1];if(!o)return i;if("scale"===t&&isNaN(o))return i;if("duration"===t||"delay"===t){let e=o.match(/([0-9]+)ms/);if(e)return e[1]}return"origin"===t&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[o,e[e.indexOf(t)+2]].join(" "):o}Mc("transition",(e,{value:t,modifiers:i,expression:o},{evaluate:n})=>{"function"==typeof o&&(o=n(o)),!1!==o&&(o&&"boolean"!=typeof o?function(e,t,i){yd(e,md,""),{enter:t=>{e._x_transition.enter.during=t},"enter-start":t=>{e._x_transition.enter.start=t},"enter-end":t=>{e._x_transition.enter.end=t},leave:t=>{e._x_transition.leave.during=t},"leave-start":t=>{e._x_transition.leave.start=t},"leave-end":t=>{e._x_transition.leave.end=t}}[i](t)}(e,o,t):function(e,t,i){yd(e,bd);let o=!t.includes("in")&&!t.includes("out")&&!i,n=o||t.includes("in")||["enter"].includes(i),r=o||t.includes("out")||["leave"].includes(i);t.includes("in")&&!o&&(t=t.filter((e,i)=>i<t.indexOf("out"))),t.includes("out")&&!o&&(t=t.filter((e,i)=>i>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),a=s||t.includes("opacity")?0:1,l=s||t.includes("scale")?wd(t,"scale",95)/100:1,c=wd(t,"delay",0)/1e3,d=wd(t,"origin","center"),u="opacity, transform",h=wd(t,"duration",150)/1e3,p=wd(t,"duration",75)/1e3,f="cubic-bezier(0.4, 0.0, 0.2, 1)";n&&(e._x_transition.enter.during={transformOrigin:d,transitionDelay:`${c}s`,transitionProperty:u,transitionDuration:`${h}s`,transitionTimingFunction:f},e._x_transition.enter.start={opacity:a,transform:`scale(${l})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),r&&(e._x_transition.leave.during={transformOrigin:d,transitionDelay:`${c}s`,transitionProperty:u,transitionDuration:`${p}s`,transitionTimingFunction:f},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:a,transform:`scale(${l})`})}(e,i,t))}),window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,i,o){const n="visible"===document.visibilityState?requestAnimationFrame:setTimeout;let r=()=>n(i);t?e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(i):r():e._x_transition?e._x_transition.in(i):r():(e._x_hidePromise=e._x_transition?new Promise((t,i)=>{e._x_transition.out(()=>{},()=>t(o)),e._x_transitioning&&e._x_transitioning.beforeCancel(()=>i({isFromCancelledTransition:!0}))}):Promise.resolve(o),queueMicrotask(()=>{let t=xd(e);t?(t._x_hideChildren||(t._x_hideChildren=[]),t._x_hideChildren.push(e)):n(()=>{let t=e=>{let i=Promise.all([e._x_hidePromise,...(e._x_hideChildren||[]).map(t)]).then(([e])=>e?.());return delete e._x_hidePromise,delete e._x_hideChildren,i};t(e).catch(e=>{if(!e.isFromCancelledTransition)throw e})})}))};var kd=!1;function Cd(e,t=()=>{}){return(...i)=>kd?t(...i):e(...i)}var Sd=[];function Td(e){Sd.push(e)}var Ad=!1;function Ed(e){let t=Al;Rl((e,i)=>{let o=t(e);return El(o),()=>{}}),e(),Rl(t)}function $d(e,t,i,o=[]){switch(e._x_bindings||(e._x_bindings=Tl({})),e._x_bindings[t]=i,t=o.includes("camel")?t.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase()):t){case"value":!function(e,t){if(Nd(e))void 0===e.attributes.value&&(e.value=t),window.fromModel&&(e.checked="boolean"==typeof t?zd(e.value)===t:Dd(e.value,t));else if(Ld(e))Number.isInteger(t)?e.value=t:Array.isArray(t)||"boolean"==typeof t||[null,void 0].includes(t)?Array.isArray(t)?e.checked=t.some(t=>Dd(t,e.value)):e.checked=!!t:e.value=String(t);else if("SELECT"===e.tagName)!function(e,t){const i=[].concat(t).map(e=>e+"");Array.from(e.options).forEach(e=>{e.selected=i.includes(e.value)})}(e,t);else{if(e.value===t)return;e.value=void 0===t?"":t}}(e,i);break;case"style":!function(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=bd(e,t)}(e,i);break;case"class":!function(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=md(e,t)}(e,i);break;case"selected":case"checked":!function(e,t,i){Pd(e,t,i),function(e,t,i){e[t]!==i&&(e[t]=i)}(e,t,i)}(e,t,i);break;default:Pd(e,t,i)}}function Pd(e,t,i){[null,void 0,!1].includes(i)&&function(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}(t)?e.removeAttribute(t):(Od(t)&&(i=t),function(e,t,i){e.getAttribute(t)!=i&&e.setAttribute(t,i)}(e,t,i))}function Dd(e,t){return e==t}function zd(e){return!![1,"1","true","on","yes",!0].includes(e)||![0,"0","false","off","no",!1].includes(e)&&(e?Boolean(e):null)}var Md=new Set(["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","shadowrootclonable","shadowrootdelegatesfocus","shadowrootserializable"]);function Od(e){return Md.has(e)}function Id(e,t,i){let o=e.getAttribute(t);return null===o?"function"==typeof i?i():i:""===o||(Od(t)?!![t,"true"].includes(o):o)}function Ld(e){return"checkbox"===e.type||"ui-checkbox"===e.localName||"ui-switch"===e.localName}function Nd(e){return"radio"===e.type||"ui-radio"===e.localName}function Bd(e,t){let i;return function(){const o=this,n=arguments;clearTimeout(i),i=setTimeout(function(){i=null,e.apply(o,n)},t)}}function Fd(e,t){let i;return function(){let o=arguments;i||(e.apply(this,o),i=!0,setTimeout(()=>i=!1,t))}}function jd({get:e,set:t},{get:i,set:o}){let n,r,s=!0,a=Al(()=>{let a=e(),l=i();if(s)o(Rd(a)),s=!1;else{let e=JSON.stringify(a),i=JSON.stringify(l);e!==n?o(Rd(a)):e!==i&&t(Rd(l))}n=JSON.stringify(e()),r=JSON.stringify(i())});return()=>{El(a)}}function Rd(e){return"object"==typeof e?JSON.parse(JSON.stringify(e)):e}var Hd={},qd=!1,Ud={};function Vd(e,t,i){let o=[];for(;o.length;)o.pop()();let n=Object.entries(t).map(([e,t])=>({name:e,value:t})),r=Ic(n);return n=n.map(e=>r.find(t=>t.name===e.name)?{name:`x-bind:${e.name}`,value:`"${e.value}"`}:e),Oc(e,n,i).map(e=>{o.push(e.runCleanups),e()}),()=>{for(;o.length;)o.pop()()}}var Wd={},Kd={get reactive(){return Tl},get release(){return El},get effect(){return Al},get raw(){return $l},get transaction(){return ql},version:"3.15.8",flushAndStopDeferringMutations:function(){oc=!1,rc(nc),nc=[]},dontAutoEvaluateFunctions:wc,disableEffectScheduling:function(e){jl=!1,e(),jl=!0},startObservingMutations:Jl,stopObservingMutations:ec,setReactivityEngine:function(e){Tl=e.reactive,El=e.release,Al=t=>e.effect(t,{scheduler:e=>{jl?function(e){var t;t=e,Ol.includes(t)||Ol.push(t),Bl()}(e):e()}}),$l=e.raw},onAttributeRemoved:Gl,onAttributesAdded:Xl,closestDataStack:lc,skipDuringClone:Cd,onlyDuringClone:function(e){return(...t)=>kd&&e(...t)},addRootSelector:od,addInitSelector:nd,setErrorHandler:function(e){xc=e},interceptClone:Td,addScopeToNode:ac,deferMutations:function(){oc=!0},mapAttributes:qc,evaluateLater:Cc,interceptInit:function(e){ad.push(e)},initInterceptors:hc,injectMagics:bc,setEvaluator:function(e){Tc=e},setRawEvaluator:function(e){Sc=e},mergeProxies:cc,extractProp:function(e,t,i,o=!0){if(e._x_bindings&&void 0!==e._x_bindings[t])return e._x_bindings[t];if(e._x_inlineBindings&&void 0!==e._x_inlineBindings[t]){let i=e._x_inlineBindings[t];return i.extract=o,wc(()=>kc(e,i.expression))}return Id(e,t,i)},findClosest:sd,onElRemoved:Kl,closestRoot:rd,destroyTree:dd,interceptor:pc,transition:_d,setStyles:bd,mutateDom:ic,directive:Mc,entangle:jd,throttle:Fd,debounce:Bd,evaluate:kc,evaluateRaw:function(...e){return Sc(...e)},initTree:cd,nextTick:pd,prefixed:Dc,prefix:function(e){Pc=e},plugin:function(e){(Array.isArray(e)?e:[e]).forEach(e=>e(Xd))},magic:gc,store:function(e,t){if(qd||(Hd=Tl(Hd),qd=!0),void 0===t)return Hd[e];Hd[e]=t,hc(Hd[e]),"object"==typeof t&&null!==t&&t.hasOwnProperty("init")&&"function"==typeof t.init&&Hd[e].init()},start:function(){var e;Qc&&Zc("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Qc=!0,document.body||Zc("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Gc(document,"alpine:init"),Gc(document,"alpine:initializing"),Jl(),e=e=>cd(e,Yc),Wl.push(e),Kl(e=>dd(e)),Xl((e,t)=>{Oc(e,t).forEach(e=>e())}),Array.from(document.querySelectorAll(id().join(","))).filter(e=>!rd(e.parentElement,!0)).forEach(e=>{cd(e)}),Gc(document,"alpine:initialized"),setTimeout(()=>{[["ui","dialog",["[x-dialog], [x-popover]"]],["anchor","anchor",["[x-anchor]"]],["sort","sort",["[x-sort]"]]].forEach(([e,t,i])=>{(function(e){return Object.keys(zc).includes(e)})(t)||i.some(t=>{if(document.querySelector(t))return Zc(`found "${t}", but missing ${e} plugin`),!0})})})},clone:function(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),kd=!0,Ad=!0,Ed(()=>{!function(e){let t=!1;cd(e,(e,i)=>{Yc(e,(e,o)=>{if(t&&function(e){return td().some(t=>e.matches(t))}(e))return o();t=!0,i(e,o)})})}(t)}),kd=!1,Ad=!1},cloneNode:function(e,t){Sd.forEach(i=>i(e,t)),kd=!0,Ed(()=>{cd(t,(e,t)=>{t(e,()=>{})})}),kd=!1},bound:function(e,t,i){return e._x_bindings&&void 0!==e._x_bindings[t]?e._x_bindings[t]:Id(e,t,i)},$data:sc,watch:Hl,walk:Yc,data:function(e,t){Wd[e]=t},bind:function(e,t){let i="function"!=typeof t?()=>t:t;return e instanceof Element?Vd(e,i()):(Ud[e]=i,()=>{})}},Xd=Kd;function Gd(e,t){const i=Object.create(null),o=e.split(",");for(let e=0;e<o.length;e++)i[o[e]]=!0;return t?e=>!!i[e.toLowerCase()]:e=>!!i[e]}var Yd,Zd=Object.freeze({}),Qd=(Object.freeze([]),Object.prototype.hasOwnProperty),Jd=(e,t)=>Qd.call(e,t),eu=Array.isArray,tu=e=>"[object Map]"===ru(e),iu=e=>"symbol"==typeof e,ou=e=>null!==e&&"object"==typeof e,nu=Object.prototype.toString,ru=e=>nu.call(e),su=e=>ru(e).slice(8,-1),au=e=>"string"==typeof e&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,lu=e=>{const t=Object.create(null);return i=>t[i]||(t[i]=e(i))},cu=/-(\w)/g,du=(lu(e=>e.replace(cu,(e,t)=>t?t.toUpperCase():"")),/\B([A-Z])/g),uu=(lu(e=>e.replace(du,"-$1").toLowerCase()),lu(e=>e.charAt(0).toUpperCase()+e.slice(1))),hu=(lu(e=>e?`on${uu(e)}`:""),(e,t)=>e!==t&&(e==e||t==t)),pu=new WeakMap,fu=[],mu=Symbol("iterate"),gu=Symbol("Map key iterate"),bu=0;function vu(e){const{deps:t}=e;if(t.length){for(let i=0;i<t.length;i++)t[i].delete(e);t.length=0}}var yu=!0,xu=[];function _u(){const e=xu.pop();yu=void 0===e||e}function wu(e,t,i){if(!yu||void 0===Yd)return;let o=pu.get(e);o||pu.set(e,o=new Map);let n=o.get(i);n||o.set(i,n=new Set),n.has(Yd)||(n.add(Yd),Yd.deps.push(n),Yd.options.onTrack&&Yd.options.onTrack({effect:Yd,target:e,type:t,key:i}))}function ku(e,t,i,o,n,r){const s=pu.get(e);if(!s)return;const a=new Set,l=e=>{e&&e.forEach(e=>{(e!==Yd||e.allowRecurse)&&a.add(e)})};if("clear"===t)s.forEach(l);else if("length"===i&&eu(e))s.forEach((e,t)=>{("length"===t||t>=o)&&l(e)});else switch(void 0!==i&&l(s.get(i)),t){case"add":eu(e)?au(i)&&l(s.get("length")):(l(s.get(mu)),tu(e)&&l(s.get(gu)));break;case"delete":eu(e)||(l(s.get(mu)),tu(e)&&l(s.get(gu)));break;case"set":tu(e)&&l(s.get(mu))}a.forEach(s=>{s.options.onTrigger&&s.options.onTrigger({effect:s,target:e,key:i,type:t,newValue:o,oldValue:n,oldTarget:r}),s.options.scheduler?s.options.scheduler(s):s()})}var Cu=Gd("__proto__,__v_isRef,__isVue"),Su=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(iu)),Tu=Pu(),Au=Pu(!0),Eu=$u();function $u(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const i=dh(this);for(let e=0,t=this.length;e<t;e++)wu(i,"get",e+"");const o=i[t](...e);return-1===o||!1===o?i[t](...e.map(dh)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){xu.push(yu),yu=!1;const i=dh(this)[t].apply(this,e);return _u(),i}}),e}function Pu(e=!1,t=!1){return function(i,o,n){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&n===(e?t?sh:rh:t?nh:oh).get(i))return i;const r=eu(i);if(!e&&r&&Jd(Eu,o))return Reflect.get(Eu,o,n);const s=Reflect.get(i,o,n);return(iu(o)?Su.has(o):Cu(o))?s:(e||wu(i,"get",o),t?s:uh(s)?r&&au(o)?s:s.value:ou(s)?e?lh(s):ah(s):s)}}function Du(e=!1){return function(t,i,o,n){let r=t[i];if(!e&&(o=dh(o),r=dh(r),!eu(t)&&uh(r)&&!uh(o)))return r.value=o,!0;const s=eu(t)&&au(i)?Number(i)<t.length:Jd(t,i),a=Reflect.set(t,i,o,n);return t===dh(n)&&(s?hu(o,r)&&ku(t,"set",i,o,r):ku(t,"add",i,o)),a}}var zu={get:Tu,set:Du(),deleteProperty:function(e,t){const i=Jd(e,t),o=e[t],n=Reflect.deleteProperty(e,t);return n&&i&&ku(e,"delete",t,void 0,o),n},has:function(e,t){const i=Reflect.has(e,t);return iu(t)&&Su.has(t)||wu(e,"has",t),i},ownKeys:function(e){return wu(e,"iterate",eu(e)?"length":mu),Reflect.ownKeys(e)}},Mu={get:Au,set:(e,t)=>(console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0),deleteProperty:(e,t)=>(console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0)},Ou=e=>ou(e)?ah(e):e,Iu=e=>ou(e)?lh(e):e,Lu=e=>e,Nu=e=>Reflect.getPrototypeOf(e);function Bu(e,t,i=!1,o=!1){const n=dh(e=e.__v_raw),r=dh(t);t!==r&&!i&&wu(n,"get",t),!i&&wu(n,"get",r);const{has:s}=Nu(n),a=o?Lu:i?Iu:Ou;return s.call(n,t)?a(e.get(t)):s.call(n,r)?a(e.get(r)):void(e!==n&&e.get(t))}function Fu(e,t=!1){const i=this.__v_raw,o=dh(i),n=dh(e);return e!==n&&!t&&wu(o,"has",e),!t&&wu(o,"has",n),e===n?i.has(e):i.has(e)||i.has(n)}function ju(e,t=!1){return e=e.__v_raw,!t&&wu(dh(e),"iterate",mu),Reflect.get(e,"size",e)}function Ru(e){e=dh(e);const t=dh(this);return Nu(t).has.call(t,e)||(t.add(e),ku(t,"add",e,e)),this}function Hu(e,t){t=dh(t);const i=dh(this),{has:o,get:n}=Nu(i);let r=o.call(i,e);r?ih(i,o,e):(e=dh(e),r=o.call(i,e));const s=n.call(i,e);return i.set(e,t),r?hu(t,s)&&ku(i,"set",e,t,s):ku(i,"add",e,t),this}function qu(e){const t=dh(this),{has:i,get:o}=Nu(t);let n=i.call(t,e);n?ih(t,i,e):(e=dh(e),n=i.call(t,e));const r=o?o.call(t,e):void 0,s=t.delete(e);return n&&ku(t,"delete",e,void 0,r),s}function Uu(){const e=dh(this),t=0!==e.size,i=tu(e)?new Map(e):new Set(e),o=e.clear();return t&&ku(e,"clear",void 0,void 0,i),o}function Vu(e,t){return function(i,o){const n=this,r=n.__v_raw,s=dh(r),a=t?Lu:e?Iu:Ou;return!e&&wu(s,"iterate",mu),r.forEach((e,t)=>i.call(o,a(e),a(t),n))}}function Wu(e,t,i){return function(...o){const n=this.__v_raw,r=dh(n),s=tu(r),a="entries"===e||e===Symbol.iterator&&s,l="keys"===e&&s,c=n[e](...o),d=i?Lu:t?Iu:Ou;return!t&&wu(r,"iterate",l?gu:mu),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function Ku(e){return function(...t){{const i=t[0]?`on key "${t[0]}" `:"";console.warn(`${uu(e)} operation ${i}failed: target is readonly.`,dh(this))}return"delete"!==e&&this}}function Xu(){const e={get(e){return Bu(this,e)},get size(){return ju(this)},has:Fu,add:Ru,set:Hu,delete:qu,clear:Uu,forEach:Vu(!1,!1)},t={get(e){return Bu(this,e,!1,!0)},get size(){return ju(this)},has:Fu,add:Ru,set:Hu,delete:qu,clear:Uu,forEach:Vu(!1,!0)},i={get(e){return Bu(this,e,!0)},get size(){return ju(this,!0)},has(e){return Fu.call(this,e,!0)},add:Ku("add"),set:Ku("set"),delete:Ku("delete"),clear:Ku("clear"),forEach:Vu(!0,!1)},o={get(e){return Bu(this,e,!0,!0)},get size(){return ju(this,!0)},has(e){return Fu.call(this,e,!0)},add:Ku("add"),set:Ku("set"),delete:Ku("delete"),clear:Ku("clear"),forEach:Vu(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{e[n]=Wu(n,!1,!1),i[n]=Wu(n,!0,!1),t[n]=Wu(n,!1,!0),o[n]=Wu(n,!0,!0)}),[e,i,t,o]}var[Gu,Yu,Zu,Qu]=Xu();function Ju(e,t){const i=t?e?Qu:Zu:e?Yu:Gu;return(t,o,n)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(Jd(i,o)&&o in t?i:t,o,n)}var eh={get:Ju(!1,!1)},th={get:Ju(!0,!1)};function ih(e,t,i){const o=dh(i);if(o!==i&&t.call(e,o)){const t=su(e);console.warn(`Reactive ${t} contains both the raw and reactive versions of the same object${"Map"===t?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var oh=new WeakMap,nh=new WeakMap,rh=new WeakMap,sh=new WeakMap;function ah(e){return e&&e.__v_isReadonly?e:ch(e,!1,zu,eh,oh)}function lh(e){return ch(e,!0,Mu,th,rh)}function ch(e,t,i,o,n){if(!ou(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const r=n.get(e);if(r)return r;const s=(a=e).__v_skip||!Object.isExtensible(a)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(su(a));var a;if(0===s)return e;const l=new Proxy(e,2===s?o:i);return n.set(e,l),l}function dh(e){return e&&dh(e.__v_raw)||e}function uh(e){return Boolean(e&&!0===e.__v_isRef)}gc("nextTick",()=>pd),gc("dispatch",e=>Gc.bind(Gc,e)),gc("watch",(e,{evaluateLater:t,cleanup:i})=>(e,o)=>{let n=t(e),r=Hl(()=>{let e;return n(t=>e=t),e},o);i(r)}),gc("store",function(){return Hd}),gc("data",e=>sc(e)),gc("root",e=>rd(e)),gc("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=cc(function(e){let t=[];return sd(e,e=>{e._x_refs&&t.push(e._x_refs)}),t}(e))),e._x_refs_proxy));var hh={};function ph(e){return hh[e]||(hh[e]=0),++hh[e]}function fh(e,t,i){gc(t,o=>Zc(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,o))}gc("id",(e,{cleanup:t})=>(i,o=null)=>function(e,t,i,o){if(e._x_id||(e._x_id={}),e._x_id[t])return e._x_id[t];let n=o();return e._x_id[t]=n,i(()=>{delete e._x_id[t]}),n}(e,`${i}${o?`-${o}`:""}`,t,()=>{let t=function(e,t){return sd(e,e=>{if(e._x_ids&&e._x_ids[t])return!0})}(e,i),n=t?t._x_ids[i]:ph(i);return o?`${i}-${n}-${o}`:`${i}-${n}`})),Td((e,t)=>{e._x_id&&(t._x_id=e._x_id)}),gc("el",e=>e),fh("Focus","focus","focus"),fh("Persist","persist","persist"),Mc("modelable",(e,{expression:t},{effect:i,evaluateLater:o,cleanup:n})=>{let r=o(t),s=()=>{let e;return r(t=>e=t),e},a=o(`${t} = __placeholder`),l=e=>a(()=>{},{scope:{__placeholder:e}}),c=s();l(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let t=e._x_model.get,i=e._x_model.set,o=jd({get:()=>t(),set(e){i(e)}},{get:()=>s(),set(e){l(e)}});n(o)})}),Mc("teleport",(e,{modifiers:t,expression:i},{cleanup:o})=>{"template"!==e.tagName.toLowerCase()&&Zc("x-teleport can only be used on a <template> tag",e);let n=gh(i),r=e.content.cloneNode(!0).firstElementChild;e._x_teleport=r,r._x_teleportBack=e,e.setAttribute("data-teleport-template",!0),r.setAttribute("data-teleport-target",!0),e._x_forwardEvents&&e._x_forwardEvents.forEach(t=>{r.addEventListener(t,t=>{t.stopPropagation(),e.dispatchEvent(new t.constructor(t.type,t))})}),ac(r,{},e);let s=(e,t,i)=>{i.includes("prepend")?t.parentNode.insertBefore(e,t):i.includes("append")?t.parentNode.insertBefore(e,t.nextSibling):t.appendChild(e)};ic(()=>{s(r,n,t),Cd(()=>{cd(r)})()}),e._x_teleportPutBack=()=>{let o=gh(i);ic(()=>{s(e._x_teleport,o,t)})},o(()=>ic(()=>{r.remove(),dd(r)}))});var mh=document.createElement("div");function gh(e){let t=Cd(()=>document.querySelector(e),()=>mh)();return t||Zc(`Cannot find x-teleport element for selector: "${e}"`),t}var bh=()=>{};function vh(e,t,i,o){let n=e,r=e=>o(e),s={},a=(e,t)=>i=>t(e,i);if(i.includes("dot")&&(t=t.replace(/-/g,".")),i.includes("camel")&&(t=t.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())),i.includes("passive")&&(s.passive=!0),i.includes("capture")&&(s.capture=!0),i.includes("window")&&(n=window),i.includes("document")&&(n=document),i.includes("debounce")){let e=i[i.indexOf("debounce")+1]||"invalid-wait",t=yh(e.split("ms")[0])?Number(e.split("ms")[0]):250;r=Bd(r,t)}if(i.includes("throttle")){let e=i[i.indexOf("throttle")+1]||"invalid-wait",t=yh(e.split("ms")[0])?Number(e.split("ms")[0]):250;r=Fd(r,t)}return i.includes("prevent")&&(r=a(r,(e,t)=>{t.preventDefault(),e(t)})),i.includes("stop")&&(r=a(r,(e,t)=>{t.stopPropagation(),e(t)})),i.includes("once")&&(r=a(r,(e,i)=>{e(i),n.removeEventListener(t,r,s)})),(i.includes("away")||i.includes("outside"))&&(n=document,r=a(r,(t,i)=>{e.contains(i.target)||!1!==i.target.isConnected&&(e.offsetWidth<1&&e.offsetHeight<1||!1!==e._x_isShown&&t(i))})),i.includes("self")&&(r=a(r,(t,i)=>{i.target===e&&t(i)})),"submit"===t&&(r=a(r,(e,t)=>{t.target._x_pendingModelUpdates&&t.target._x_pendingModelUpdates.forEach(e=>e()),e(t)})),(function(e){return["keydown","keyup"].includes(e)}(t)||xh(t))&&(r=a(r,(e,t)=>{(function(e,t){let i=t.filter(e=>!["window","document","prevent","stop","once","capture","self","away","outside","passive","preserve-scroll","blur","change","lazy"].includes(e));if(i.includes("debounce")){let e=i.indexOf("debounce");i.splice(e,yh((i[e+1]||"invalid-wait").split("ms")[0])?2:1)}if(i.includes("throttle")){let e=i.indexOf("throttle");i.splice(e,yh((i[e+1]||"invalid-wait").split("ms")[0])?2:1)}if(0===i.length)return!1;if(1===i.length&&_h(e.key).includes(i[0]))return!1;const o=["ctrl","shift","alt","meta","cmd","super"].filter(e=>i.includes(e));if(i=i.filter(e=>!o.includes(e)),o.length>0&&o.filter(t=>("cmd"!==t&&"super"!==t||(t="meta"),e[`${t}Key`])).length===o.length){if(xh(e.type))return!1;if(_h(e.key).includes(i[0]))return!1}return!0})(t,i)||e(t)})),n.addEventListener(t,r,s),()=>{n.removeEventListener(t,r,s)}}function yh(e){return!Array.isArray(e)&&!isNaN(e)}function xh(e){return["contextmenu","click","mouse"].some(t=>e.includes(t))}function _h(e){if(!e)return[];var t;e=[" ","_"].includes(t=e)?t:t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase();let i={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",comma:",",equal:"=",minus:"-",underscore:"_"};return i[e]=e,Object.keys(i).map(t=>{if(i[t]===e)return t}).filter(e=>e)}function wh(e,t,i,o){return ic(()=>{if(i instanceof CustomEvent&&void 0!==i.detail)return null!==i.detail&&void 0!==i.detail?i.detail:i.target.value;if(Ld(e)){if(Array.isArray(o)){let e=null;return e=t.includes("number")?kh(i.target.value):t.includes("boolean")?zd(i.target.value):i.target.value,i.target.checked?o.includes(e)?o:o.concat([e]):o.filter(t=>!(t==e))}return i.target.checked}if("select"===e.tagName.toLowerCase()&&e.multiple)return t.includes("number")?Array.from(i.target.selectedOptions).map(e=>kh(e.value||e.text)):t.includes("boolean")?Array.from(i.target.selectedOptions).map(e=>zd(e.value||e.text)):Array.from(i.target.selectedOptions).map(e=>e.value||e.text);{let n;return n=Nd(e)?i.target.checked?i.target.value:o:i.target.value,t.includes("number")?kh(n):t.includes("boolean")?zd(n):t.includes("trim")?n.trim():n}})}function kh(e){let t=e?parseFloat(e):null;return i=t,Array.isArray(i)||isNaN(i)?e:t;var i}function Ch(e){return null!==e&&"object"==typeof e&&"function"==typeof e.get&&"function"==typeof e.set}bh.inline=(e,{modifiers:t},{cleanup:i})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,i(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})},Mc("ignore",bh),Mc("effect",Cd((e,{expression:t},{effect:i})=>{i(Cc(e,t))})),Mc("model",(e,{modifiers:t,expression:i},{effect:o,cleanup:n})=>{let r=e;t.includes("parent")&&(r=e.parentNode);let s,a=Cc(r,i);s="string"==typeof i?Cc(r,`${i} = __placeholder`):"function"==typeof i&&"string"==typeof i()?Cc(r,`${i()} = __placeholder`):()=>{};let l=()=>{let e;return a(t=>e=t),Ch(e)?e.get():e},c=e=>{let t;a(e=>t=e),Ch(t)?t.set(e):s(()=>{},{scope:{__placeholder:e}})};"string"==typeof i&&"radio"===e.type&&ic(()=>{e.hasAttribute("name")||e.setAttribute("name",i)});let d,u=t.includes("change")||t.includes("lazy"),h=t.includes("blur"),p=t.includes("enter");if(kd)d=()=>{};else if(u||h||p){let i=[],o=i=>c(wh(e,t,i,l()));if(u&&i.push(vh(e,"change",t,o)),h&&(i.push(vh(e,"blur",t,o)),e.form)){let t=()=>o({target:e});e.form._x_pendingModelUpdates||(e.form._x_pendingModelUpdates=[]),e.form._x_pendingModelUpdates.push(t),n(()=>e.form._x_pendingModelUpdates.splice(e.form._x_pendingModelUpdates.indexOf(t),1))}p&&i.push(vh(e,"keydown",t,e=>{"Enter"===e.key&&o(e)})),d=()=>i.forEach(e=>e())}else{let i="select"===e.tagName.toLowerCase()||["checkbox","radio"].includes(e.type)?"change":"input";d=vh(e,i,t,i=>{c(wh(e,t,i,l()))})}if(t.includes("fill")&&([void 0,null,""].includes(l())||Ld(e)&&Array.isArray(l())||"select"===e.tagName.toLowerCase()&&e.multiple)&&c(wh(e,t,{target:e},l())),e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=d,n(()=>e._x_removeModelListeners.default()),e.form){let i=vh(e.form,"reset",[],i=>{pd(()=>e._x_model&&e._x_model.set(wh(e,t,{target:e},l())))});n(()=>i())}e._x_model={get:()=>l(),set(e){c(e)}},e._x_forceModelUpdate=t=>{void 0===t&&"string"==typeof i&&i.match(/\./)&&(t=""),window.fromModel=!0,ic(()=>$d(e,"value",t)),delete window.fromModel},o(()=>{let i=l();t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate(i)})}),Mc("cloak",e=>queueMicrotask(()=>ic(()=>e.removeAttribute(Dc("cloak"))))),nd(()=>`[${Dc("init")}]`),Mc("init",Cd((e,{expression:t},{evaluate:i})=>"string"==typeof t?!!t.trim()&&i(t,{},!1):i(t,{},!1))),Mc("text",(e,{expression:t},{effect:i,evaluateLater:o})=>{let n=o(t);i(()=>{n(t=>{ic(()=>{e.textContent=t})})})}),Mc("html",(e,{expression:t},{effect:i,evaluateLater:o})=>{let n=o(t);i(()=>{n(t=>{ic(()=>{e.innerHTML=t,e._x_ignoreSelf=!0,cd(e),delete e._x_ignoreSelf})})})}),qc(jc(":",Dc("bind:")));var Sh=(e,{value:t,modifiers:i,expression:o,original:n},{effect:r,cleanup:s})=>{if(!t){let t={};return a=t,Object.entries(Ud).forEach(([e,t])=>{Object.defineProperty(a,e,{get:()=>(...e)=>t(...e)})}),void Cc(e,o)(t=>{Vd(e,t,n)},{scope:t})}var a;if("key"===t)return function(e,t){e._x_keyExpression=t}(e,o);if(e._x_inlineBindings&&e._x_inlineBindings[t]&&e._x_inlineBindings[t].extract)return;let l=Cc(e,o);r(()=>l(n=>{void 0===n&&"string"==typeof o&&o.match(/\./)&&(n=""),ic(()=>$d(e,t,n,i))})),s(()=>{e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedStyles&&e._x_undoAddedStyles()})};function Th(e,t,i,o){let n={};if(/^\[.*\]$/.test(e.item)&&Array.isArray(t)){let i=e.item.replace("[","").replace("]","").split(",").map(e=>e.trim());i.forEach((e,i)=>{n[e]=t[i]})}else if(/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&"object"==typeof t){let i=e.item.replace("{","").replace("}","").split(",").map(e=>e.trim());i.forEach(e=>{n[e]=t[e]})}else n[e.item]=t;return e.index&&(n[e.index]=i),e.collection&&(n[e.collection]=o),n}function Ah(){}function Eh(e,t,i){Mc(t,o=>Zc(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,o))}Sh.inline=(e,{value:t,modifiers:i,expression:o})=>{t&&(e._x_inlineBindings||(e._x_inlineBindings={}),e._x_inlineBindings[t]={expression:o,extract:!1})},Mc("bind",Sh),od(()=>`[${Dc("data")}]`),Mc("data",(e,{expression:t},{cleanup:i})=>{if(function(e){return!!kd&&(!!Ad||e.hasAttribute("data-has-alpine-state"))}(e))return;t=""===t?"{}":t;let o={};bc(o,e);let n={};var r,s;r=n,s=o,Object.entries(Wd).forEach(([e,t])=>{Object.defineProperty(r,e,{get:()=>(...e)=>t.bind(s)(...e),enumerable:!1})});let a=kc(e,t,{scope:n});void 0!==a&&!0!==a||(a={}),bc(a,e);let l=Tl(a);hc(l);let c=ac(e,l);l.init&&kc(e,l.init),i(()=>{l.destroy&&kc(e,l.destroy),c()})}),Td((e,t)=>{e._x_dataStack&&(t._x_dataStack=e._x_dataStack,t.setAttribute("data-has-alpine-state",!0))}),Mc("show",(e,{modifiers:t,expression:i},{effect:o})=>{let n=Cc(e,i);e._x_doHide||(e._x_doHide=()=>{ic(()=>{e.style.setProperty("display","none",t.includes("important")?"important":void 0)})}),e._x_doShow||(e._x_doShow=()=>{ic(()=>{1===e.style.length&&"none"===e.style.display?e.removeAttribute("style"):e.style.removeProperty("display")})});let r,s=()=>{e._x_doHide(),e._x_isShown=!1},a=()=>{e._x_doShow(),e._x_isShown=!0},l=()=>setTimeout(a),c=vd(e=>e?a():s(),t=>{"function"==typeof e._x_toggleAndCascadeWithTransitions?e._x_toggleAndCascadeWithTransitions(e,t,a,s):t?l():s()}),d=!0;o(()=>n(e=>{(d||e!==r)&&(t.includes("immediate")&&(e?l():s()),c(e),r=e,d=!1)}))}),Mc("for",(e,{expression:t},{effect:i,cleanup:o})=>{let n=function(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,i=e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);if(!i)return;let o={};o.items=i[2].trim();let n=i[1].replace(/^\s*\(|\)\s*$/g,"").trim(),r=n.match(t);return r?(o.item=n.replace(t,"").trim(),o.index=r[1].trim(),r[2]&&(o.collection=r[2].trim())):o.item=n,o}(t),r=Cc(e,n.items),s=Cc(e,e._x_keyExpression||"index");e._x_prevKeys=[],e._x_lookup={},i(()=>function(e,t,i,o){let n=e;i(i=>{var r;r=i,!Array.isArray(r)&&!isNaN(r)&&i>=0&&(i=Array.from(Array(i).keys(),e=>e+1)),void 0===i&&(i=[]);let s=e._x_lookup,a=e._x_prevKeys,l=[],c=[];if((e=>"object"==typeof e&&!Array.isArray(e))(i))i=Object.entries(i).map(([n,r])=>{let s=Th(t,r,n,i);o(t=>{c.includes(t)&&Zc("Duplicate key on x-for",e),c.push(t)},{scope:{index:n,...s}}),l.push(s)});else for(let n=0;n<i.length;n++){let r=Th(t,i[n],n,i);o(t=>{c.includes(t)&&Zc("Duplicate key on x-for",e),c.push(t)},{scope:{index:n,...r}}),l.push(r)}let d=[],u=[],h=[],p=[];for(let e=0;e<a.length;e++){let t=a[e];-1===c.indexOf(t)&&h.push(t)}a=a.filter(e=>!h.includes(e));let f="template";for(let e=0;e<c.length;e++){let t=c[e],i=a.indexOf(t);if(-1===i)a.splice(e,0,t),d.push([f,e]);else if(i!==e){let t=a.splice(e,1)[0],o=a.splice(i-1,1)[0];a.splice(e,0,o),a.splice(i,0,t),u.push([t,o])}else p.push(t);f=t}for(let e=0;e<h.length;e++){let t=h[e];t in s&&(ic(()=>{dd(s[t]),s[t].remove()}),delete s[t])}for(let e=0;e<u.length;e++){let[t,i]=u[e],o=s[t],r=s[i],a=document.createElement("div");ic(()=>{r||Zc('x-for ":key" is undefined or invalid',n,i,s),r.after(a),o.after(r),r._x_currentIfEl&&r.after(r._x_currentIfEl),a.before(o),o._x_currentIfEl&&o.after(o._x_currentIfEl),a.remove()}),r._x_refreshXForScope(l[c.indexOf(i)])}for(let e=0;e<d.length;e++){let[t,i]=d[e],o="template"===t?n:s[t];o._x_currentIfEl&&(o=o._x_currentIfEl);let r=l[i],a=c[i],u=document.importNode(n.content,!0).firstElementChild,h=Tl(r);ac(u,h,n),u._x_refreshXForScope=e=>{Object.entries(e).forEach(([e,t])=>{h[e]=t})},ic(()=>{o.after(u),Cd(()=>cd(u))()}),"object"==typeof a&&Zc("x-for key cannot be an object, it must be a string or an integer",n),s[a]=u}for(let e=0;e<p.length;e++)s[p[e]]._x_refreshXForScope(l[c.indexOf(p[e])]);n._x_prevKeys=c})}(e,n,r,s)),o(()=>{Object.values(e._x_lookup).forEach(e=>ic(()=>{dd(e),e.remove()})),delete e._x_prevKeys,delete e._x_lookup})}),Ah.inline=(e,{expression:t},{cleanup:i})=>{let o=rd(e);o._x_refs||(o._x_refs={}),o._x_refs[t]=e,i(()=>delete o._x_refs[t])},Mc("ref",Ah),Mc("if",(e,{expression:t},{effect:i,cleanup:o})=>{"template"!==e.tagName.toLowerCase()&&Zc("x-if can only be used on a <template> tag",e);let n=Cc(e,t);i(()=>n(t=>{t?(()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let t=e.content.cloneNode(!0).firstElementChild;ac(t,{},e),ic(()=>{e.after(t),Cd(()=>cd(t))()}),e._x_currentIfEl=t,e._x_undoIf=()=>{ic(()=>{dd(t),t.remove()}),delete e._x_currentIfEl}})():e._x_undoIf&&(e._x_undoIf(),delete e._x_undoIf)})),o(()=>e._x_undoIf&&e._x_undoIf())}),Mc("id",(e,{expression:t},{evaluate:i})=>{i(t).forEach(t=>function(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=ph(t))}(e,t))}),Td((e,t)=>{e._x_ids&&(t._x_ids=e._x_ids)}),qc(jc("@",Dc("on:"))),Mc("on",Cd((e,{value:t,modifiers:i,expression:o},{cleanup:n})=>{let r=o?Cc(e,o):()=>{};"template"===e.tagName.toLowerCase()&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=vh(e,t,i,e=>{r(()=>{},{scope:{$event:e},params:[e]})});n(()=>s())})),Eh("Collapse","collapse","collapse"),Eh("Intersect","intersect","intersect"),Eh("Focus","trap","focus"),Eh("Mask","mask","mask"),Xd.setEvaluator(Ac),Xd.setRawEvaluator(function(e,t,i={}){let o={};bc(o,e);let n=[o,...lc(e)],r=cc([i.scope??{},...n]),s=i.params??[];if(t.includes("await"))return new(0,Object.getPrototypeOf(async function(){}).constructor)(["scope"],`with (scope) { let __result = ${/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t}; return __result }`).call(i.context,r);{let e=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(()=>{ ${t} })()`:t,o=new Function(["scope"],`with (scope) { let __result = ${e}; return __result }`).call(i.context,r);return"function"==typeof o&&_c?o.apply(r,s):o}}),Xd.setReactivityEngine({reactive:ah,effect:function(e,t=Zd){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const i=function(e,t){const i=function(){if(!i.active)return e();if(!fu.includes(i)){vu(i);try{return xu.push(yu),yu=!0,fu.push(i),Yd=i,e()}finally{fu.pop(),_u(),Yd=fu[fu.length-1]}}};return i.id=bu++,i.allowRecurse=!!t.allowRecurse,i._isEffect=!0,i.active=!0,i.raw=e,i.deps=[],i.options=t,i}(e,t);return t.lazy||i(),i},release:function(e){e.active&&(vu(e),e.options.onStop&&e.options.onStop(),e.active=!1)},raw:dh});var $h=Xd;We("/");var Ph=Dl().Engine,Dh=Dl().Render;Dl().Runner,Dl().Bodies,Dl().Composite,window.Alpine=$h,$h.start();var zh=Ph.create(),Mh=Dh.create({element:document.getElementById("main"),engine:zh});Dh.run(Mh),window.onerror=function(e,t,i){document.body.innerHTML=`<div style="color:red; background:white; padding:20px;">\n        <h1>ERROR DETECTADO:</h1>\n        <p>${e}</p>\n        <p>En: ${t} (Línea ${i})</p>\n    </div>`}})()})();