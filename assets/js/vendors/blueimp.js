!function(t){"use strict";"function"==typeof define&&define.amd?define(["./blueimp-helper"],t):(window.blueimp=window.blueimp||{},window.blueimp.Gallery=t(window.blueimp.helper||window.jQuery))}(function(t){"use strict";function i(t,s){return void 0===document.body.style.maxHeight?null:this&&this.options===i.prototype.options?t&&t.length?(this.list=t,this.num=t.length,this.initOptions(s),void this.initialize()):void this.console.log("blueimp Gallery: No or empty list provided as first argument.",t):new i(t,s)}return t.extend(i.prototype,{options:{container:"#blueimp-gallery",slidesContainer:"div",titleElement:"h3",displayClass:"blueimp-gallery-display",controlsClass:"blueimp-gallery-controls",singleClass:"blueimp-gallery-single",leftEdgeClass:"blueimp-gallery-left",rightEdgeClass:"blueimp-gallery-right",playingClass:"blueimp-gallery-playing",slideClass:"slide",slideLoadingClass:"slide-loading",slideErrorClass:"slide-error",slideContentClass:"slide-content",toggleClass:"toggle",prevClass:"prev",nextClass:"next",closeClass:"close",playPauseClass:"play-pause",typeProperty:"type",titleProperty:"title",urlProperty:"href",srcsetProperty:"urlset",displayTransition:!0,clearSlides:!0,stretchImages:!1,toggleControlsOnReturn:!0,toggleControlsOnSlideClick:!0,toggleSlideshowOnSpace:!0,enableKeyboardNavigation:!0,closeOnEscape:!0,closeOnSlideClick:!0,closeOnSwipeUpOrDown:!0,emulateTouchEvents:!0,stopTouchEventsPropagation:!1,hidePageScrollbars:!0,disableScroll:!0,carousel:!1,continuous:!0,unloadElements:!0,startSlideshow:!1,slideshowInterval:5e3,index:0,preloadRange:2,transitionSpeed:400,slideshowTransitionSpeed:void 0,event:void 0,onopen:void 0,onopened:void 0,onslide:void 0,onslideend:void 0,onslidecomplete:void 0,onclose:void 0,onclosed:void 0},carouselOptions:{hidePageScrollbars:!1,toggleControlsOnReturn:!1,toggleSlideshowOnSpace:!1,enableKeyboardNavigation:!1,closeOnEscape:!1,closeOnSlideClick:!1,closeOnSwipeUpOrDown:!1,disableScroll:!1,startSlideshow:!0},console:window.console&&"function"==typeof window.console.log?window.console:{log:function(){}},support:function(i){function s(){var t,s,e=o.transition;document.body.appendChild(i),e&&(t=e.name.slice(0,-9)+"ransform",void 0!==i.style[t]&&(i.style[t]="translateZ(0)",s=window.getComputedStyle(i).getPropertyValue(e.prefix+"transform"),o.transform={prefix:e.prefix,name:t,translate:!0,translateZ:!!s&&"none"!==s})),void 0!==i.style.backgroundSize&&(o.backgroundSize={},i.style.backgroundSize="contain",o.backgroundSize.contain="contain"===window.getComputedStyle(i).getPropertyValue("background-size"),i.style.backgroundSize="cover",o.backgroundSize.cover="cover"===window.getComputedStyle(i).getPropertyValue("background-size")),document.body.removeChild(i)}var e,o={touch:void 0!==window.ontouchstart||window.DocumentTouch&&document instanceof DocumentTouch},n={webkitTransition:{end:"webkitTransitionEnd",prefix:"-webkit-"},MozTransition:{end:"transitionend",prefix:"-moz-"},OTransition:{end:"otransitionend",prefix:"-o-"},transition:{end:"transitionend",prefix:""}};for(e in n)if(n.hasOwnProperty(e)&&void 0!==i.style[e]){o.transition=n[e],o.transition.name=e;break}return document.body?s():t(document).on("DOMContentLoaded",s),o}(document.createElement("div")),requestAnimationFrame:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,initialize:function(){return this.initStartIndex(),this.initWidget()===!1?!1:(this.initEventListeners(),this.onslide(this.index),this.ontransitionend(),void(this.options.startSlideshow&&this.play()))},slide:function(t,i){window.clearTimeout(this.timeout);var s,e,o,n=this.index;if(n!==t&&1!==this.num){if(i||(i=this.options.transitionSpeed),this.support.transform){for(this.options.continuous||(t=this.circle(t)),s=Math.abs(n-t)/(n-t),this.options.continuous&&(e=s,s=-this.positions[this.circle(t)]/this.slideWidth,s!==e&&(t=-s*this.num+t)),o=Math.abs(n-t)-1;o;)o-=1,this.move(this.circle((t>n?t:n)-o-1),this.slideWidth*s,0);t=this.circle(t),this.move(n,this.slideWidth*s,i),this.move(t,0,i),this.options.continuous&&this.move(this.circle(t-s),-(this.slideWidth*s),0)}else t=this.circle(t),this.animate(n*-this.slideWidth,t*-this.slideWidth,i);this.onslide(t)}},getIndex:function(){return this.index},getNumber:function(){return this.num},prev:function(){(this.options.continuous||this.index)&&this.slide(this.index-1)},next:function(){(this.options.continuous||this.index<this.num-1)&&this.slide(this.index+1)},play:function(t){var i=this;window.clearTimeout(this.timeout),this.interval=t||this.options.slideshowInterval,this.elements[this.index]>1&&(this.timeout=this.setTimeout(!this.requestAnimationFrame&&this.slide||function(t,s){i.animationFrameId=i.requestAnimationFrame.call(window,function(){i.slide(t,s)})},[this.index+1,this.options.slideshowTransitionSpeed],this.interval)),this.container.addClass(this.options.playingClass)},pause:function(){window.clearTimeout(this.timeout),this.interval=null,this.container.removeClass(this.options.playingClass)},add:function(t){var i;for(t.concat||(t=Array.prototype.slice.call(t)),this.list.concat||(this.list=Array.prototype.slice.call(this.list)),this.list=this.list.concat(t),this.num=this.list.length,this.num>2&&null===this.options.continuous&&(this.options.continuous=!0,this.container.removeClass(this.options.leftEdgeClass)),this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass),i=this.num-t.length;i<this.num;i+=1)this.addSlide(i),this.positionSlide(i);this.positions.length=this.num,this.initSlides(!0)},resetSlides:function(){this.slidesContainer.empty(),this.unloadAllSlides(),this.slides=[]},handleClose:function(){var t=this.options;this.destroyEventListeners(),this.pause(),this.container[0].style.display="none",this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass),t.hidePageScrollbars&&(document.body.style.overflow=this.bodyOverflowStyle),this.options.clearSlides&&this.resetSlides(),this.options.onclosed&&this.options.onclosed.call(this)},close:function(){function t(s){s.target===i.container[0]&&(i.container.off(i.support.transition.end,t),i.handleClose())}var i=this;this.options.onclose&&this.options.onclose.call(this),this.support.transition&&this.options.displayTransition?(this.container.on(this.support.transition.end,t),this.container.removeClass(this.options.displayClass)):this.handleClose()},circle:function(t){return(this.num+t%this.num)%this.num},move:function(t,i,s){this.translateX(t,i,s),this.positions[t]=i},translate:function(t,i,s,e){var o=this.slides[t].style,n=this.support.transition,l=this.support.transform;o[n.name+"Duration"]=e+"ms",o[l.name]="translate("+i+"px, "+s+"px)"+(l.translateZ?" translateZ(0)":"")},translateX:function(t,i,s){this.translate(t,i,0,s)},translateY:function(t,i,s){this.translate(t,0,i,s)},animate:function(t,i,s){if(!s)return void(this.slidesContainer[0].style.left=i+"px");var e=this,o=(new Date).getTime(),n=window.setInterval(function(){var l=(new Date).getTime()-o;return l>s?(e.slidesContainer[0].style.left=i+"px",e.ontransitionend(),void window.clearInterval(n)):void(e.slidesContainer[0].style.left=(i-t)*(Math.floor(l/s*100)/100)+t+"px")},4)},preventDefault:function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},stopPropagation:function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},onresize:function(){this.initSlides(!0)},onmousedown:function(t){t.which&&1===t.which&&"VIDEO"!==t.target.nodeName&&(t.preventDefault(),(t.originalEvent||t).touches=[{pageX:t.pageX,pageY:t.pageY}],this.ontouchstart(t))},onmousemove:function(t){this.touchStart&&((t.originalEvent||t).touches=[{pageX:t.pageX,pageY:t.pageY}],this.ontouchmove(t))},onmouseup:function(t){this.touchStart&&(this.ontouchend(t),delete this.touchStart)},onmouseout:function(i){if(this.touchStart){var s=i.target,e=i.relatedTarget;(!e||e!==s&&!t.contains(s,e))&&this.onmouseup(i)}},ontouchstart:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var i=(t.originalEvent||t).touches[0];this.touchStart={x:i.pageX,y:i.pageY,time:Date.now()},this.isScrolling=void 0,this.touchDelta={}},ontouchmove:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var i,s,e=(t.originalEvent||t).touches[0],o=(t.originalEvent||t).scale,n=this.index;if(!(e.length>1||o&&1!==o))if(this.options.disableScroll&&t.preventDefault(),this.touchDelta={x:e.pageX-this.touchStart.x,y:e.pageY-this.touchStart.y},i=this.touchDelta.x,void 0===this.isScrolling&&(this.isScrolling=this.isScrolling||Math.abs(i)<Math.abs(this.touchDelta.y)),this.isScrolling)this.translateY(n,this.touchDelta.y+this.positions[n],0);else for(t.preventDefault(),window.clearTimeout(this.timeout),this.options.continuous?s=[this.circle(n+1),n,this.circle(n-1)]:(this.touchDelta.x=i/=!n&&i>0||n===this.num-1&&0>i?Math.abs(i)/this.slideWidth+1:1,s=[n],n&&s.push(n-1),n<this.num-1&&s.unshift(n+1));s.length;)n=s.pop(),this.translateX(n,i+this.positions[n],0)},ontouchend:function(t){this.options.stopTouchEventsPropagation&&this.stopPropagation(t);var i,s,e,o,n,l=this.index,a=this.options.transitionSpeed,h=this.slideWidth,r=Number(Date.now()-this.touchStart.time)<250,d=r&&Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.x)>h/2,c=!l&&this.touchDelta.x>0||l===this.num-1&&this.touchDelta.x<0,u=!d&&this.options.closeOnSwipeUpOrDown&&(r&&Math.abs(this.touchDelta.y)>20||Math.abs(this.touchDelta.y)>this.slideHeight/2);this.options.continuous&&(c=!1),i=this.touchDelta.x<0?-1:1,this.isScrolling?u?this.close():this.translateY(l,0,a):d&&!c?(s=l+i,e=l-i,o=h*i,n=-h*i,this.options.continuous?(this.move(this.circle(s),o,0),this.move(this.circle(l-2*i),n,0)):s>=0&&s<this.num&&this.move(s,o,0),this.move(l,this.positions[l]+o,a),this.move(this.circle(e),this.positions[this.circle(e)]+o,a),l=this.circle(e),this.onslide(l)):this.options.continuous?(this.move(this.circle(l-1),-h,a),this.move(l,0,a),this.move(this.circle(l+1),h,a)):(l&&this.move(l-1,-h,a),this.move(l,0,a),l<this.num-1&&this.move(l+1,h,a))},ontouchcancel:function(t){this.touchStart&&(this.ontouchend(t),delete this.touchStart)},ontransitionend:function(t){var i=this.slides[this.index];t&&i!==t.target||(this.interval&&this.play(),this.setTimeout(this.options.onslideend,[this.index,i]))},oncomplete:function(i){var s,e=i.target||i.srcElement,o=e&&e.parentNode;e&&o&&(s=this.getNodeIndex(o),t(o).removeClass(this.options.slideLoadingClass),"error"===i.type?(t(o).addClass(this.options.slideErrorClass),this.elements[s]=3):this.elements[s]=2,e.clientHeight>this.container[0].clientHeight&&(e.style.maxHeight=this.container[0].clientHeight),this.interval&&this.slides[this.index]===o&&this.play(),this.setTimeout(this.options.onslidecomplete,[s,o]))},onload:function(t){this.oncomplete(t)},onerror:function(t){this.oncomplete(t)},onkeydown:function(t){switch(t.which||t.keyCode){case 13:this.options.toggleControlsOnReturn&&(this.preventDefault(t),this.toggleControls());break;case 27:this.options.closeOnEscape&&(this.close(),t.stopImmediatePropagation());break;case 32:this.options.toggleSlideshowOnSpace&&(this.preventDefault(t),this.toggleSlideshow());break;case 37:this.options.enableKeyboardNavigation&&(this.preventDefault(t),this.prev());break;case 39:this.options.enableKeyboardNavigation&&(this.preventDefault(t),this.next())}},handleClick:function(i){function s(i){return t(o).hasClass(i)||t(n).hasClass(i)}var e=this.options,o=i.target||i.srcElement,n=o.parentNode;s(e.toggleClass)?(this.preventDefault(i),this.toggleControls()):s(e.prevClass)?(this.preventDefault(i),this.prev()):s(e.nextClass)?(this.preventDefault(i),this.next()):s(e.closeClass)?(this.preventDefault(i),this.close()):s(e.playPauseClass)?(this.preventDefault(i),this.toggleSlideshow()):n===this.slidesContainer[0]?e.closeOnSlideClick?(this.preventDefault(i),this.close()):e.toggleControlsOnSlideClick&&(this.preventDefault(i),this.toggleControls()):n.parentNode&&n.parentNode===this.slidesContainer[0]&&e.toggleControlsOnSlideClick&&(this.preventDefault(i),this.toggleControls())},onclick:function(t){return this.options.emulateTouchEvents&&this.touchDelta&&(Math.abs(this.touchDelta.x)>20||Math.abs(this.touchDelta.y)>20)?void delete this.touchDelta:this.handleClick(t)},updateEdgeClasses:function(t){t?this.container.removeClass(this.options.leftEdgeClass):this.container.addClass(this.options.leftEdgeClass),t===this.num-1?this.container.addClass(this.options.rightEdgeClass):this.container.removeClass(this.options.rightEdgeClass)},handleSlide:function(t){this.options.continuous||this.updateEdgeClasses(t),this.loadElements(t),this.options.unloadElements&&this.unloadElements(t),this.setTitle(t)},onslide:function(t){this.index=t,this.handleSlide(t),this.setTimeout(this.options.onslide,[t,this.slides[t]])},setTitle:function(t){var i=this.slides[t].firstChild.title,s=this.titleElement;s.length&&(this.titleElement.empty(),i&&s[0].appendChild(document.createTextNode(i)))},setTimeout:function(t,i,s){var e=this;return t&&window.setTimeout(function(){t.apply(e,i||[])},s||0)},imageFactory:function(i,s){function e(i){if(!o){if(i={type:i.type,target:n},!n.parentNode)return a.setTimeout(e,[i]);o=!0,t(h).off("load error",e),d&&"load"===i.type&&(n.style.background='url("'+r+'") center no-repeat',n.style.backgroundSize=d),s(i)}}var o,n,l,a=this,h=this.imagePrototype.cloneNode(!1),r=i,d=this.options.stretchImages;return"string"!=typeof r&&(r=this.getItemProperty(i,this.options.urlProperty),l=this.getItemProperty(i,this.options.titleProperty)),d===!0&&(d="contain"),d=this.support.backgroundSize&&this.support.backgroundSize[d]&&d,d?n=this.elementPrototype.cloneNode(!1):(n=h,h.draggable=!1),l&&(n.title=l),t(h).on("load error",e),h.src=r,n},createElement:function(i,s){var e=i&&this.getItemProperty(i,this.options.typeProperty),o=e&&this[e.split("/")[0]+"Factory"]||this.imageFactory,n=i&&o.call(this,i,s),l=this.getItemProperty(i,this.options.srcsetProperty);return n||(n=this.elementPrototype.cloneNode(!1),this.setTimeout(s,[{type:"error",target:n}])),l&&n.setAttribute("srcset",l),t(n).addClass(this.options.slideContentClass),n},loadElement:function(i){this.elements[i]||(this.slides[i].firstChild?this.elements[i]=t(this.slides[i]).hasClass(this.options.slideErrorClass)?3:2:(this.elements[i]=1,t(this.slides[i]).addClass(this.options.slideLoadingClass),this.slides[i].appendChild(this.createElement(this.list[i],this.proxyListener))))},loadElements:function(t){var i,s=Math.min(this.num,2*this.options.preloadRange+1),e=t;for(i=0;s>i;i+=1)e+=i*(i%2===0?-1:1),e=this.circle(e),this.loadElement(e)},unloadElements:function(t){var i,s;for(i in this.elements)this.elements.hasOwnProperty(i)&&(s=Math.abs(t-i),s>this.options.preloadRange&&s+this.options.preloadRange<this.num&&(this.unloadSlide(i),delete this.elements[i]))},addSlide:function(t){var i=this.slidePrototype.cloneNode(!1);i.setAttribute("data-index",t),this.slidesContainer[0].appendChild(i),this.slides.push(i)},positionSlide:function(t){var i=this.slides[t];i.style.width=this.slideWidth+"px",this.support.transform&&(i.style.left=t*-this.slideWidth+"px",this.move(t,this.index>t?-this.slideWidth:this.index<t?this.slideWidth:0,0))},initSlides:function(i){var s,e;for(i||(this.positions=[],this.positions.length=this.num,this.elements={},this.imagePrototype=document.createElement("img"),this.elementPrototype=document.createElement("div"),this.slidePrototype=document.createElement("div"),t(this.slidePrototype).addClass(this.options.slideClass),this.slides=this.slidesContainer[0].children,s=this.options.clearSlides||this.slides.length!==this.num),this.slideWidth=this.container[0].offsetWidth,this.slideHeight=this.container[0].offsetHeight,this.slidesContainer[0].style.width=this.num*this.slideWidth+"px",s&&this.resetSlides(),e=0;e<this.num;e+=1)s&&this.addSlide(e),this.positionSlide(e);this.options.continuous&&this.support.transform&&(this.move(this.circle(this.index-1),-this.slideWidth,0),this.move(this.circle(this.index+1),this.slideWidth,0)),this.support.transform||(this.slidesContainer[0].style.left=this.index*-this.slideWidth+"px")},unloadSlide:function(t){var i,s;i=this.slides[t],s=i.firstChild,null!==s&&i.removeChild(s)},unloadAllSlides:function(){var t,i;for(t=0,i=this.slides.length;i>t;t++)this.unloadSlide(t)},toggleControls:function(){var t=this.options.controlsClass;this.container.hasClass(t)?this.container.removeClass(t):this.container.addClass(t)},toggleSlideshow:function(){this.interval?this.pause():this.play()},getNodeIndex:function(t){return parseInt(t.getAttribute("data-index"),10)},getNestedProperty:function(t,i){return i.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,function(i,s,e,o,n){var l=n||s||e||o&&parseInt(o,10);i&&t&&(t=t[l])}),t},getDataProperty:function(i,s){if(i.getAttribute){var e=i.getAttribute("data-"+s.replace(/([A-Z])/g,"-$1").toLowerCase());if("string"==typeof e){if(/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(e))try{return t.parseJSON(e)}catch(o){}return e}}},getItemProperty:function(t,i){var s=t[i];return void 0===s&&(s=this.getDataProperty(t,i),void 0===s&&(s=this.getNestedProperty(t,i))),s},initStartIndex:function(){var t,i=this.options.index,s=this.options.urlProperty;if(i&&"number"!=typeof i)for(t=0;t<this.num;t+=1)if(this.list[t]===i||this.getItemProperty(this.list[t],s)===this.getItemProperty(i,s)){i=t;break}this.index=this.circle(parseInt(i,10)||0)},initEventListeners:function(){function i(t){var i=s.support.transition&&s.support.transition.end===t.type?"transitionend":t.type;s["on"+i](t)}var s=this,e=this.slidesContainer;t(window).on("resize",i),t(document.body).on("keydown",i),this.container.on("click",i),this.support.touch?e.on("touchstart touchmove touchend touchcancel",i):this.options.emulateTouchEvents&&this.support.transition&&e.on("mousedown mousemove mouseup mouseout",i),this.support.transition&&e.on(this.support.transition.end,i),this.proxyListener=i},destroyEventListeners:function(){var i=this.slidesContainer,s=this.proxyListener;t(window).off("resize",s),t(document.body).off("keydown",s),this.container.off("click",s),this.support.touch?i.off("touchstart touchmove touchend touchcancel",s):this.options.emulateTouchEvents&&this.support.transition&&i.off("mousedown mousemove mouseup mouseout",s),this.support.transition&&i.off(this.support.transition.end,s)},handleOpen:function(){this.options.onopened&&this.options.onopened.call(this)},initWidget:function(){function i(t){t.target===s.container[0]&&(s.container.off(s.support.transition.end,i),s.handleOpen())}var s=this;return this.container=t(this.options.container),this.container.length?(this.slidesContainer=this.container.find(this.options.slidesContainer).first(),this.slidesContainer.length?(this.titleElement=this.container.find(this.options.titleElement).first(),1===this.num&&this.container.addClass(this.options.singleClass),this.options.onopen&&this.options.onopen.call(this),this.support.transition&&this.options.displayTransition?this.container.on(this.support.transition.end,i):this.handleOpen(),this.options.hidePageScrollbars&&(this.bodyOverflowStyle=document.body.style.overflow,document.body.style.overflow="hidden"),this.container[0].style.display="block",this.initSlides(),void this.container.addClass(this.options.displayClass)):(this.console.log("blueimp Gallery: Slides container not found.",this.options.slidesContainer),!1)):(this.console.log("blueimp Gallery: Widget container not found.",this.options.container),!1)},initOptions:function(i){this.options=t.extend({},this.options),(i&&i.carousel||this.options.carousel&&(!i||i.carousel!==!1))&&t.extend(this.options,this.carouselOptions),t.extend(this.options,i),this.num<3&&(this.options.continuous=this.options.continuous?null:!1),this.support.transition||(this.options.emulateTouchEvents=!1),this.options.event&&this.preventDefault(this.options.event)}}),i});
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./blueimp-gallery"],e):e(window.jQuery,window.blueimp.Gallery)}(function(e,n){"use strict";e(document).on("click","[data-gallery]",function(t){var i=e(this).data("gallery"),o=e(i),r=o.length&&o||e(n.prototype.options.container),l={onopen:function(){r.data("gallery",this).trigger("open")},onopened:function(){r.trigger("opened")},onslide:function(){r.trigger("slide",arguments)},onslideend:function(){r.trigger("slideend",arguments)},onslidecomplete:function(){r.trigger("slidecomplete",arguments)},onclose:function(){r.trigger("close")},onclosed:function(){r.trigger("closed").removeData("gallery")}},a=e.extend(r.data(),{container:r[0],index:this,event:t},l),d=e('[data-gallery="'+i+'"]');return a.filter&&(d=d.filter(a.filter)),new n(d,a)})});