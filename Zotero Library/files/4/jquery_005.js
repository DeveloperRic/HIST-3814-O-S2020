!function(e){function t(e){var t,i=e;try{for(t=e.previousSibling;t&&1!=t.nodeType;)i=t,t=t.previousSibling}catch(n){return console.log(n),topOffset=-15,i}return t?t:i}e.event.special.tripleclick={setup:function(e,t){var i=this,n=jQuery(i);n.bind("click",jQuery.event.special.tripleclick.handler)},teardown:function(e){var t=this,i=jQuery(t);i.unbind("click",jQuery.event.special.tripleclick.handler)},handler:function(e){var t=this,i=jQuery(t),n=i.data("clicks")||0;n+=1,3===n&&(n=0,e.type="tripleclick",jQuery.event.dispatch.apply(this,arguments)),i.data("clicks",n)}};var i=!0,n="",r="";"1"==cp_is_touch&&"1"==cp_touch_testing&&(n=" touchstart.highlighter",r=" touchend.highlighter");var o={init:function(o){var c,s=e.extend({selector:".highlighter-container",minWords:0,complete:function(){}},o),l=0,u=0,h=0,a=!1;return this.each(function(){function o(n){if(i!==!1){var r="<span class='dummy'></span>";if(u=0,h=0,l===n){var o,a,d,p,m="Microsoft Internet Explorer"===navigator.appName;if(window.getSelection){if(o=window.getSelection(),c=o.toString(),""===e.trim(c)||c.split(" ").length<s.minWords)return;if(o.getRangeAt&&o.rangeCount){a=window.getSelection().getRangeAt(0),d=a.cloneRange(),d.collapse(!1);var f=document.createElement("div");f.innerHTML=r;var g=document.createElement("span");if(0===a.startOffset&&0===a.endOffset){var y=d.startContainer,v=t(y);try{d.selectNode(v.lastChild)}catch(b){h=40,u=-15,d.selectNode(v)}d.collapse(!1)}else 0===a.endOffset&&(u=-25,h=40);if(l!==n)return;e(s.selector).hide(),m||e.trim(c)!==e.trim(d.startContainer.innerText)?m||e.trim(c)!==e.trim(d.endContainer.innerText)?(d.insertNode(g),p=e(g).offset(),g.parentNode.removeChild(g)):(d.endContainer.innerHTML+="<span class='dummy'>&nbsp;</span>",p=e(".dummy").offset(),e(".dummy").remove()):(d.startContainer.innerHTML+="<span class='dummy'>&nbsp;</span>",p=e(".dummy").offset(),e(".dummy").remove())}}else if(document.selection&&document.selection.createRange){if(a=document.selection.createRange(),d=a.duplicate(),c=d.text,""===e.trim(c)||c.split(" ").length<s.minWords)return;a.collapse(!1),a.pasteHTML(r),d.setEndPoint("EndToEnd",a),d.select(),p=e(".dummy").offset(),e(".dummy").remove()}e(s.selector).css("top",p.top+u+"px"),e(s.selector).css("left",p.left+h+"px"),e(s.selector).show(300,function(){s.complete(c)})}}}e(s.selector).hide(),e(s.selector).css("position","absolute"),e(document).bind("mouseup.highlighter"+r,function(e){a&&(l=1,clicks=0,setTimeout(function(){o(1)},300),a=!1)}),e(this).bind("mouseup.highlighter"+r,function(e){l=1,clicks=0,setTimeout(function(){o(1)},300)}),e(this).bind("tripleclick.highlighter",function(e){l=3,setTimeout(function(){o(3)},200)}),e(this).bind("dblclick.highlighter",function(e){l=2,setTimeout(function(){o(2)},300)}),e(this).bind("mousedown.highlighter"+n,function(t){e(s.selector).hide(),a=!0})})},enable:function(){i=!0},disable:function(){i=!1},destroy:function(t){return this.each(function(){e(document).unbind("mouseup.highlighter"+r),e(this).unbind("mouseup.highlighter"+r),e(this).unbind("tripleclick.highlighter"),e(this).unbind("dblclick.highlighter"),e(this).unbind("mousedown.highlighter"+n)})}};e.fn.highlighter=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.highlighter"):o.init.apply(this,arguments)}}(jQuery);