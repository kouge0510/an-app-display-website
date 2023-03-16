jQuery(window).on('load', function() {
       
    
    // HIDE PRELAODER
    $(".preloader").addClass("preloader-hidden");

    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $(".hero .animation-container").each(function(){

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 1000 );
   
    
});
$(document).ready(function () {

    $(".owl-carousel").owlCarousel();

});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    responsive: {
        1000: {
            items: 1
        
        },
       
    },
    autoplay: true,
   autoplayTimeout: 3000,
   autoplayHoverPause: false,
})
jQuery(document).ready(function($) {
	"use strict";
    
    
    $(window).on('load', function() {
        
        // HIDE PRELAODER
        $(".preloader").addClass("preloader-hidden");
        
        // SHOW/ANIMATE ANIMATION CONTAINER
        setTimeout(function(){
            
            $(".hero .animation-container").each(function(){

                var e = $(this);

                setTimeout(function(){
                    
                    e.addClass("run-animation");
                    
                }, e.data("animation-delay") );

            });
            
        }, 900 );
        
    });
    
    
    // INIT PARALLAX PLUGIN
    $(".hero .background-content.parallax-on").parallax({
        scalarX: 24,
        scalarY: 15,
        frictionX: 0.1,
        frictionY: 0.1,
    });
    
    
  
    
});