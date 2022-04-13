/*
$(document).ready(slideMenu);
$(window).resize(slideMenu);

*/
function slideMenu(){
        if ($(window).width() <= 850) {
            $('.wsmenucontent').addClass('menuclose');
            $('#navToggle').addClass('menuclose');
            $('.wsmenu').addClass('menuclose');

            $('#navToggle').on('click',function(){
                    $('.wsmenucontent').toggleClass('menuclose menuopen');
                    $(this).toggleClass('menuclose menuopen');
                    $('.wsmenu').toggleClass('menuclose menuopen');
            });
            $('.dropdown-list > a').before('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
            
            $('.wsmenu-click,.dropdown-list > a').on('click',function(){
                $(this).children('i').toggleClass('wsmenu-rotate');
                $(this).closest('.dropdown-list').children('.wsmenu-submenu,.megamenu').slideToggle();
            });
        } 
        else {
            $('.dropdown-list > span.wsmenu-click').remove();
            $('.wsmenucontent').removeClass('menuclose menuopen');
            $('#navToggle').removeClass('menuclose menuopen');
            $('.wsmenu').removeClass('menuclose menuopen');
            $('.wsmenu-submenu,.megamenu ').fadeOut('fast');
        }
}



$(window).resize(slideMenu);
$(document).ready(slideMenu);