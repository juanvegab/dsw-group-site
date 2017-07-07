+function(t){"use strict";function e(s,i){this.$body=t(document.body),this.$scrollElement=t(t(s).is(document.body)?window:s),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function s(s){return this.each(function(){var i=t(this),a=i.data("bs.scrollspy"),o="object"==typeof s&&s;a||i.data("bs.scrollspy",a=new e(this,o)),"string"==typeof s&&a[s]()})}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,s="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(s="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),a=e.data("target")||e.attr("href"),o=/^#./.test(a)&&t(a);return o&&o.length&&o.is(":visible")&&[[o[s]().top+i,a]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,s=this.getScrollHeight(),i=this.options.offset+s-this.$scrollElement.height(),a=this.offsets,o=this.targets,n=this.activeTarget;if(this.scrollHeight!=s&&this.refresh(),e>=i)return n!=(t=o[o.length-1])&&this.activate(t);if(n&&e<a[0])return this.activeTarget=null,this.clear();for(t=a.length;t--;)n!=o[t]&&e>=a[t]&&(void 0===a[t+1]||e<a[t+1])&&this.activate(o[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var s=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(s).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=s,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);s.call(e,e.data())})})}(jQuery),function(t){"use strict";function e(e){return this.each(function(){var i=t(this),a=i.data("bs.tab");a||i.data("bs.tab",a=new s(this)),"string"==typeof e&&a[e]()})}var s=function(e){this.element=t(e)};s.VERSION="3.3.7",s.TRANSITION_DURATION=150,s.prototype.show=function(){var e=this.element,s=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var a=s.find(".active:last a"),o=t.Event("hide.bs.tab",{relatedTarget:e[0]}),n=t.Event("show.bs.tab",{relatedTarget:a[0]});if(a.trigger(o),e.trigger(n),!n.isDefaultPrevented()&&!o.isDefaultPrevented()){var r=t(i);this.activate(e.closest("li"),s),this.activate(r,r.parent(),function(){a.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:a[0]})})}}},s.prototype.activate=function(e,i,a){function o(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),a&&a()}var n=i.find("> .active"),r=a&&t.support.transition&&(n.length&&n.hasClass("fade")||!!i.find("> .fade").length);n.length&&r?n.one("bsTransitionEnd",o).emulateTransitionEnd(s.TRANSITION_DURATION):o(),n.removeClass("in")};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=s,t.fn.tab.noConflict=function(){return t.fn.tab=i,this};var a=function(s){s.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',a).on("click.bs.tab.data-api",'[data-toggle="pill"]',a)}(jQuery);