(function($){$.fn.viewportChecker=function(useroptions){var options={classToAdd:'visible',offset:0,callbackFunction:function(elem){}};$.extend(options,useroptions);var $elem=this,windowHeight=$(window).height();this.checkElements=function(){var viewportTop=Math.max($('html').scrollTop(),$('body').scrollTop(),$(window).scrollTop()),viewportBottom=(viewportTop+windowHeight);$elem.each(function(){var $obj=$(this);if($obj.hasClass(options.classToAdd)){return}
var elemTop=Math.round($obj.offset().top)+options.offset,elemBottom=elemTop+($obj.height());if((elemTop<viewportBottom)&&(elemBottom>viewportTop)){$obj.addClass(options.classToAdd);options.callbackFunction($obj)}})};$(window).scroll(this.checkElements);this.checkElements();$(window).resize(function(e){windowHeight=e.currentTarget.innerHeight})}})(jQuery)