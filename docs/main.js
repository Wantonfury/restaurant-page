(()=>{"use strict";var n={810:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([n.id,"#about-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    gap: 40px;\n    \n    width: 100%;\n    min-height: 100vh;\n    height: 100%;\n    \n    padding-top: 20px;\n    padding-bottom: 40px;\n}\n\n.about-desc {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    width: 60%;\n    text-indent: 100px;\n    \n    gap: 10px;\n}\n\n.about-desc > h4 {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.about-desc > p {\n    font-size: 20px;\n}\n\n.about-desc > p:nth-of-type(2) {\n    text-indent: 50px;\n}",""]);const s=r},309:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([n.id,"#home-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    gap: 40px;\n    \n    width: 100%;\n    min-height: 100vh;\n    height: 100%;\n    \n    padding-top: 20px;\n    padding-bottom: 40px;\n}\n\n.background-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n    \n    width: 94%;\n    height: 1200px;\n    padding: 0px 40px;\n}\n\n.background-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    \n    width: 100%;\n    height: 100%;\n    border: 4px solid black;\n    \n    filter: brightness(0.6);\n}\n\n.background-text > h4,\n.background-text > p {\n    color: gold;\n    font-size: 60px;\n    font-weight: 700;\n    \n    -webkit-text-stroke: 1px black;\n    z-index: 1;\n}\n\n.background-text > p {\n    font-size: 40px;\n    margin-top: 0px;\n    text-indent: 100px;\n}\n\n.background-text > p:nth-of-type(3) {\n    text-indent: 0px !important;\n}\n\n.small-note {\n    font-size: 20px !important;\n    font-weight: 400 !important;\n    -webkit-text-stroke: 1px black !important;\n    \n    position: absolute;\n    bottom: 0;\n    right: 0;\n}",""]);const s=r},771:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([n.id,"html {\n    height: 100%;\n}\n\nhtml * {\n    font-family: sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    \n    width: 100%;\n    min-height: 100vh;\n    padding: 0px;\n    margin: 0px;\n}\n\n@keyframes btn-pop {\n    0% {\n        transform: scale(1);\n        border-top-right-radius: 50%;\n        border-top-left-radius: 50%;\n    }\n    33% {\n        transform: scale(0.95);\n        border-top-right-radius: 54%;\n        border-top-left-radius: 54%;\n    }\n    \n    66% {\n        transform: scale(1.05);\n        border-top-right-radius: 46%;\n        border-top-left-radius: 46%;\n    }\n    \n    100% {\n        transform: scale(1);\n        border-top-right-radius: 50%;\n        border-top-left-radius: 50%;\n    }\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n        transform: translateY(40px) translateX(0%);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0%) translateX(0%);\n    }\n}\n\n.fade-in {\n    animation: fade-in 0.5s;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    \n    background-color: black;\n    color: white;\n    \n    width: 100%;\n    height: 80px;\n    gap: 10px;\n}\n\n#logo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: nowrap;\n    \n    margin-left: 2%;\n    gap: 10px;\n    \n    font-weight: 700;\n    font-size: 40px;\n}\n\n#logo span:first-child {\n    -webkit-text-stroke: 1px gold;\n    -webkit-text-fill-color: white;\n    font-style: italic;\n}\n\n#logo span:first-child + span {\n    color: gold;\n}\n\n#menu-container {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    \n    gap: 4%;\n    overflow: hidden;\n    \n    margin-left: auto;\n    margin-right: 2%;\n    \n    width: 30%;\n    min-width: 260px;\n    height: 100%;\n}\n\n.menu-btn {\n    border: none;\n    position: relative;\n    /*background-color: orange;*/\n    background-color: black;\n    \n    -webkit-text-stroke: 1px gold;\n    -webkit-text-fill-color: white;\n    \n    font-weight: 700;\n    font-size: 24px;\n    font-size: max(1.5vw, 18px);\n    \n    \n    width: 40%;\n    max-width: 200px;\n    min-width: 80px;\n    height: 70px;\n    margin-top: 30px;\n    \n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    border: 2px dotted gold;\n    \n    user-select: none;\n    overflow: hidden;\n    z-index: 1;\n    \n    transition: -webkit-text-fill-color .5s, -webkit-text-stroke .5s;\n}\n\n.menu-btn::after {\n    content: '';\n    position: absolute;\n    bottom: -50%;\n    left: 0;\n    \n    background: gold;\n    width: 100%;\n    height: 100%;\n    \n    transform: scaleY(0);\n    transition: transform 0.5s;\n    z-index: -1;\n}\n\n.menu-btn:hover {\n    animation: btn-pop 0.2s;\n    cursor: pointer;\n}\n\n.menu-btn.active {\n    -webkit-text-stroke: 1px white;\n    -webkit-text-fill-color: black;\n}\n\n.menu-btn.active::after {\n    transform: scaleY(2);\n}\n\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    \n    background-color: gold;\n    width: 100%;\n    height: 100%;\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    \n    background-color: gold;\n    height: 40px;\n    width: 100%;\n}\n\n#footer > img {\n    max-width: 24px;\n    max-height: 24px;\n    \n    transition: 200ms ease-in-out;\n}\n\n#footer > img:hover {\n    transform: rotateZ(360deg);\n}",""]);const s=r},195:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),a=t(645),r=t.n(a)()(i());r.push([n.id,"#menu-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    gap: 40px;\n    \n    width: 100%;\n    height: 100%;\n    \n    padding-top: 40px;\n    padding-bottom: 40px;\n}\n\n.image {\n    border-radius: 10%;\n    border: 4px solid black;\n}\n\n#burger-presentation {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 20px;\n}\n\n.desc {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    \n    width: 400px;\n}\n\n.desc-title {\n    font-size: 30px;\n    font-weight: 700;\n    \n}\n\n.desc-body {\n    display: flex;\n    align-items: center;\n    \n    font-size: 24px;\n    font-weight: 500;\n}\n\n#burger-menu {\n    display: grid;\n    grid-template-columns: repeat(2, 500px);\n    grid-template-rows: 400px 500px 400px;\n    grid-gap: 80px;\n    margin-top: 100px;\n}\n\n#burger-menu > .desc:nth-of-type(2) {\n    color: gold;\n    grid-column: 1 / 3;\n    width: 1000px;\n    padding-left: 40px;\n    border-radius: 6%;\n    \n}\n\n#burger-menu img {\n    border: 4px solid black;\n    border-radius: 10%;\n}\n\n.burger-2 {\n    width: 40%;\n}",""]);const s=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(r[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],s=0;s<n.length;s++){var d=n[s],c=o.base?d[0]+o.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=t(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=i(h,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=t(a[r]);e[s].references--}for(var d=o(n,i),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),a=t(569),r=t.n(a),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),h=t(771),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=r().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var f=t(309),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=r().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const b=t.p+"2d16970cdf033f839e80.jpg";var x=t(195),y={};y.styleTagTransform=u(),y.setAttributes=d(),y.insert=r().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=l(),e()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;const v=t.p+"170c0d268905f7a0bb2e.jpg",w=t.p+"33c2185f11f88a540cf8.webp",A=t.p+"03ead919a941b4b97b29.jpg",E=t.p+"63a0d9b02f7608842e3f.jpg";var L=t(810),C={};C.styleTagTransform=u(),C.setAttributes=d(),C.insert=r().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=l(),e()(L.Z,C),L.Z&&L.Z.locals&&L.Z.locals;const k=new class{header=document.createElement("div");content=document.createElement("div");footer=document.createElement("div");clearActive(){this.home.classList.remove("active"),this.menu.classList.remove("active"),this.about.classList.remove("active")}switchHome(){this.clearActive(),this.home.classList.add("active"),this.content.innerHTML="",function(n){const e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("div"),i=document.createElement("h4"),a=[],r=document.createElement("p");e.id="home-content",t.style.backgroundImage="url("+b+")",t.style.backgroundSize="100% 100%",t.classList.add("background-image","fade-in"),i.textContent="Welcome to Burger John's deliciously greasly website!",i.classList.add("fade-in"),i.style.animationDuration="0.7s",a[0]=document.createElement("p"),a[0].textContent="At Burger John we bring you the very best burgers John has ever made! Alas, not so many that we cannot    count on our hands. Or hand.",a[1]=document.createElement("p"),a[1].textContent="Nevertheless, we focus wholly on nothing but quality at Burger John! Each single burger is as good as    two dozen burgers at any of our competitors!",a[2]=document.createElement("p"),a[2].textContent="We guarantee* it.";for(const n of a)n.classList.add("fade-in"),n.style.animationDuration="1s";r.textContent="*We do not provide any compensations or discounts.",r.classList.add("small-note","fade-in"),r.style.animationDuration=".7s",o.classList.add("background-text"),o.append(i,a[0],a[1],a[2],r,t),e.append(o),n.appendChild(e)}(this.content)}switchMenu(){this.clearActive(),this.menu.classList.add("active"),this.content.innerHTML="",function(n){const e=document.createElement("div");e.id="menu-content",e.append(function(){const n=document.createElement("div"),e=document.createElement("div"),t=new Image,o=document.createElement("h4"),i=document.createElement("p");return o.textContent="Burger John's famous burgers!",i.textContent="Here you can find all of the famous burgers of Burger John. All of the personally tasted and approved    by his excellent taste buds.",t.src=v,t.width="300",t.classList.add("fade-in","image"),n.id="burger-presentation",e.classList.add("desc"),o.classList.add("desc-title","fade-in"),o.style.animationDuration="0.8s",i.classList.add("desc-body","fade-in"),i.style.animationDuration="1s",e.append(o,i),n.append(t,e),n}(),function(){const n=document.createElement("div"),e=new Image,t=new Image,o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),r=document.createElement("h4"),s=document.createElement("p"),d=document.createElement("h4"),c=document.createElement("p"),l=document.createElement("h4"),p=document.createElement("p"),u=document.createElement("div");e.src=w,e.width="500",e.height="400",e.classList.add("fade-in"),t.src=E,t.width="500",t.height="400",t.classList.add("fade-in"),o.append(r,s),o.classList.add("desc"),i.classList.add("desc","fade-in"),i.style.width="100%",i.style.height="100%",i.style.backgroundImage="url("+A+")",i.style.backgroundSize="100% 100%",u.append(d,c),u.classList.add("burger-2"),i.append(u),a.append(l,p),a.classList.add("desc");for(const n of[o,u,a])n.firstChild.classList.add("desc-title","fade-in"),n.firstChild.style.animationDuration="0.8s",n.lastChild.classList.add("desc-body","fade-in"),n.lastChild.style.animationDuration="1s";return r.textContent="Knife Burger",s.textContent="A famous burger with a sharp taste of steel and a dash of fries. Eat it very carefully.",d.textContent="Bacon Burger",c.textContent="A burger so filled with bacon it will skyrocket your heart rate! Fries included so you, too, can cover your week's calories in one meal.",l.textContent="Somewhat Vegan Burger",p.textContent="A burger that has so much health in it it's almost vegan. Meat included.",n.id="burger-menu",n.append(e,o,i,t,a),n}()),n.appendChild(e)}(this.content)}switchAbout(){this.clearActive(),this.about.classList.add("active"),this.content.innerHTML="",function(n){const e=document.createElement("div"),t=document.createElement("h4"),o=[],i=document.createElement("div");i.append(t),i.classList.add("about-desc"),t.textContent="All the burgers. All on one plate. All delicious.",t.classList.add("fade-in");for(let n=0;n<3;++n)o[n]=document.createElement("p"),o[n].classList.add("fade-in"),o[n].style.animationDuration=".8s",i.append(o[n]);o[0].textContent="We are passionate in bringing all the best flavors together to bewitch your taste buds. Nothing else will make us happier than the smile on your face.",o[1].textContent="We have traveled all around the world - including and especially John's place of birth - to bring to you all the flavors you will never be able to live your life without ever again. Such is the path we are forging before our feet.",o[2].textContent="So come on in and enjoy flavors that will blow your mind. The only thing you have to lose is the time it takes to chew!",e.append(i),e.id="about-content",n.appendChild(e)}(this.content)}populateHeader(){const n=document.createElement("h2"),e=document.createElement("span"),t=document.createElement("span");e.textContent="BURGER",t.textContent="JOHN",n.id="logo",n.appendChild(e),n.appendChild(t),header.appendChild(n);const o=document.createElement("div");this.home=document.createElement("button"),this.menu=document.createElement("button"),this.about=document.createElement("button"),this.home.textContent="Home",this.menu.textContent="Menu",this.about.textContent="About",this.home.addEventListener("click",this.switchHome.bind(this)),this.menu.addEventListener("click",this.switchMenu.bind(this)),this.about.addEventListener("click",this.switchAbout.bind(this)),this.home.classList.add("menu-btn"),this.menu.classList.add("menu-btn"),this.about.classList.add("menu-btn"),this.home.id="home",this.menu.id="menu",this.about.id="about",o.id="menu-container",o.append(this.home,this.menu,this.about),header.appendChild(o)}populateFooter(){const n=document.createElement("h6"),e=new Image;n.textContent="Copyright © Wantonfury",e.src="data:image/png;base64,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",footer.append(n,e)}init(){this.populateHeader(),this.populateFooter(),this.switchHome()}constructor(){const n=document.querySelector("body");this.header.id="header",this.content.id="content",this.footer.id="footer",n.appendChild(this.header),n.appendChild(this.content),n.appendChild(this.footer)}};k.init()})()})();