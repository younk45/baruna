(function(e) {
    e(window.jQuery, window, document);
})(function($, window, document) {

    var app = {

        // ==============================================================================================
        // Call your function here to become a single function
        // * This method make your code more modular and make it easy to toggle your function
        // * If you want to disable a function, just commented on function that you need to disable below
        // ==============================================================================================

        init: function($) {
            app.owlSlider();
        },

        // ======================================================================
        // Your function here
        // * Don't forget to use proper function name to describes your function
        // ======================================================================
        owlSlider: function() {
            $('.testi__slider').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                navText: ["<img src='img/icons/back.svg'>","<img src='img/icons/next.svg'>"],
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })

            $('.portfolio__slider').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                dots: false,
                navText: ["<img src='img/icons/back.svg'>","<img src='img/icons/next.svg'>"],
                autoplay: true,
                responsive:{
                    0:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })
        },
  

    };

    // This code will initialize your whole function in this JS file
    $(function() {
        app.init($);
    });

    $(window).resize(function() {
        // Insert your JS function here that need to triggered when window resize
        
    });
});
