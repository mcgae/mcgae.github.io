$(document).ready(function(){var sideslider=$('[data-toggle=collapse-side]');var sel=sideslider.attr('data-target');var sel2=sideslider.attr('data-target-2');sideslider.click(function(event){$(sel).toggleClass('in');$(sel2).toggleClass('out')})});$('.owl-one').owlCarousel({loop:!0,margin:10,responsiveClass:!0,autoplay:!0,smartSpeed:1000,autoplayTimeout:4000,navText:['<i class="flaticon-arrows"></i>','<i class="flaticon-arrows-1"></i>'],responsive:{0:{items:1,nav:!1},600:{items:3,nav:!1},1000:{items:4,nav:!0,loop:!0,margin:20},1200:{items:6,nav:!0,loop:!0,margin:20}}})
$('.owl-two').owlCarousel({loop:!0,margin:10,responsiveClass:!0,autoplay:!0,smartSpeed:1000,autoplayTimeout:2500,touchDrag:!0,mouseDrag:!0,navText:['<i class="flaticon-arrows"></i>','<i class="flaticon-arrows-1"></i>'],responsive:{0:{items:1,nav:!1},650:{items:2,nav:!1},1000:{items:4,nav:!0,loop:!0,margin:0}}})
$('.owl-four').owlCarousel({loop:!0,margin:10,responsiveClass:!0,autoplay:!0,smartSpeed:1000,autoplayTimeout:3000,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1000:{items:2,nav:!0,loop:!0,margin:30}}})
$('.owl-five').owlCarousel({loop:!0,margin:10,responsiveClass:!0,autoplay:!0,smartSpeed:1000,autoplayTimeout:3000,navText:['<i class="flaticon-arrows"></i>','<i class="flaticon-arrows-1"></i>'],responsive:{0:{items:1,nav:!1},600:{items:2,nav:!1},1000:{items:3,nav:!1},1300:{items:3,nav:!1},1500:{items:4,nav:!0,loop:!0,margin:30}}})
$('.owl-vision').owlCarousel({loop:!0,margin:30,responsiveClass:!0,autoplay:!0,smartSpeed:1000,autoplayTimeout:3000,navText:['<img src="http://ugc.ae/wp-content/themes/UGC/images/design/left.png">','<img src="http://ugc.ae/wp-content/themes/UGC/images/design/right.png">'],responsive:{0:{items:1,nav:!1},480:{items:2,nav:!1},1000:{items:3,nav:!1},1300:{items:3,nav:!1},1500:{items:4,nav:!0,loop:!0,margin:30}}})
$(window).load(function(){$('.preloader').fadeOut('slow',function(){$(this).remove()});jQuery('footer .copy .copy-text, .slide-wrap, footer .copy .policy-text, footer .in-foot-logo, footer .foot-address .in-address .top-foot .call-foot, .mis, footer .foot-address .in-address .bottom-foot .loc, footer .foot-address .in-address .top-foot ul li, footer .foot-address .in-address .bottom-foot .mail, .clients .client-slider, .news .news-in .item figure, .news .news-in .item figcaption, .products .item, .products .viewall, .message-chairman .inner-msg .thump .small-img, .message-chairman .inner-msg .thump .title-img h5, .message-chairman .inner-msg .thump .title-img h6, .message-chairman .inner-msg .chair-txt p, .message-chairman .inner-msg a, .coppy, .head_ani, .about_1, .about_2').addClass("hideme").viewportChecker({classToAdd:'visible animated fadeInUp',});jQuery('.products h2, .clients h2, .in-img, .values, .message-chairman .inner-msg .chair-txt i.fa-quote-left, .owl-nav div.owl-prev, .history').addClass("hideme").viewportChecker({classToAdd:'visible animated fadeInLeft',});jQuery('.welcome .wel-text .in-text h2, .about_2, .welcome .wel-text .in-text p, .welcome .wel-text .in-text a, .message-chairman .inner-msg .chair-txt i.fa-quote-right, .owl-nav div.owl-next, .head_h3, .history').addClass("hideme").viewportChecker({classToAdd:'visible animated fadeInRight',})});$('#demo').RollingSlider({showArea:"#example",prev:"#jprev",next:"#jnext",moveSpeed:900,autoPlay:!0,speed:1000,moveInterval:1000,})