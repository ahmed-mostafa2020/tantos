/*global $ , alert, console*/ 

$(function(){
    'use strict';

    //trigger nice scroll
    // $('html').niceScroll();

    //change header height
    $('.header').height($(window).height());

    //scroll to features sec
    $('.header ').on('click','.arrow',function(e){
        e.preventDefault();

        $('html , body').animate({
            scrollTop : $('.features').offset().top
        },1000);
    });

    //show hidden cards from work
    $('.work ').on('click','button.show',function(){
        $('.work .more').toggle(500);

        if ($(this).text()=='show more'){
            $(this).text('show less');
        }
        else{
            $(this).text('show more');
        }
    });

    //

});


