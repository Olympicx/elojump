$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});





/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){


   /* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	// $('.button-nav').click(function(){
	// 	$(this).toggleClass('active'), 
	// 	$('.main-nav-list').slideToggle(); 
	// 	return false;
	// });

	$(".up").hide();
    $(window).scroll(function (){
        // var top = $("html").height()/5;
        var top = 700;
        if ($(this).scrollTop() >= top){
            if (!$(this).hasClass('vis')) {
                $(".up").fadeIn('100').addClass('vis');
            }
        }
        else{
            $(".up").fadeOut('100').removeClass('vis');
        }
    });
    $(".up").click(function (){
        $("body,html").animate({
            scrollTop:0
        }, 1500);
        return false;
    });
	
	/* components */

	if($('.styled').length) {
		$('.styled').styler();
	};

	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			theme:"dark-thin"
	
		});
	};


	$('.filter_box-link').click(function(e){
		e.preventDefault();
		if ($(this).parent('.filter_box').find('.filter_box-list').length) {
			if ($(this).hasClass('open')) {
				$(this).removeClass('open').parent('.filter_box').find('.filter_box-list').slideUp();
			}	
			else{
				$(this).addClass('open').parent('.filter_box').find('.filter_box-list').stop(true,true).slideDown();
			}
		}
	})


	if($('.slider_header').length) {
		$('.slider_header').slick({
			dots: false,
			infinite: true,
			speed: 300,
			arrows: false,
			slidesToShow: 1,
			speed: 500,
            fade: true,
			autoplay: true,
			  responsive: [
			    {
			      breakpoint: 768,
			      settings: "unslick"
			    }
			  ]
	        });
	};


	/* components */

	   $('#toggle').click(function(e){
	   	if(!$(this).hasClass('on')){
        	$('#topmenu').stop(true,true).fadeIn(500).addClass('open');
            $(this).addClass('on');
        }
        else{
            $('#topmenu').hide().removeClass('open');
            $(this).removeClass('on');

        }
    });

    $('.btn_see').click(function(e){
    	e.preventDefault();
    	var blockActiv = $(this).closest('.flip-container');
        if(!blockActiv.hasClass('open')){
            blockActiv.find('.back').addClass('open');
            blockActiv.addClass('open');
        }
    });
    $('.btn-back').click(function(e){
    	e.preventDefault();
    	var blockActiv = $(this).closest('.flip-container');
        if(blockActiv.hasClass('open')){
            blockActiv.find('.back').removeClass('open');
            blockActiv.removeClass('open');
        }
    });

	$(document).click(function (event) { 

       var div = $('.block-menu_nav');

       if ($(window).width() < 991) {
          if (!div.is(event.target) 
              && div.has(event.target).length === 0) { 
              $('#topmenu').hide().removeClass('open');
              $('#toggle').removeClass('on');
          }
        }

        var div2 = $('.filter_container'); 
        if (!div2.is(event.target) 
            && div2.has(event.target).length === 0) { 
            $('.filter_box-link').removeClass('open').parent('.filter_box').find('.filter_box-list').slideUp();
        }


        var div3 = $('.flip-container'); 
        if (!div3.is(event.target) 
            && div3.has(event.target).length === 0) { 
        	console.log(div3);
        	 if($('.flip-container').hasClass('open')){
	            $('.flip-container').find('.back').removeClass('open');
	            $('.flip-container').removeClass('open');
	        }
        }
       //event.stopPropagation();

    });
	
	Mobile();
    
    $(window).resize(function () {
        Mobile();
    });

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



var isMobileType = $(window).width() >= 991



function Mobile() {
    if ((!window.isMobileType) && $(window).width() < 991) {
        window.isMobileType = true;
        $('#topmenu').css('display','none');
        // $('#toggle').removeClass('on');
    }
    if (window.isMobileType && $(window).width() >= 991) {
        window.isMobileType = false;
        $('#topmenu').css('display','block');
        $('#toggle').removeClass('on');
    }
}