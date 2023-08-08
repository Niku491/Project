(function($) {
    "use strict";

    var tpj = jQuery;
    var revapi24;

            //Function to animate slider captions 
            function doAnimations(elems) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd animationend';

                elems.each(function() {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function() {
                        $this.removeClass($animationType);
                    });
                });
            }

            //Variables on page load 
            var $myCarousel = $('#carousel-example-generic'),
                $firstAnimatingElems = $myCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");

            //Initialize carousel 
            $myCarousel.carousel();

            //Animate captions in first slide on page load 
            doAnimations($firstAnimatingElems);

            //Pause carousel  
            $myCarousel.carousel('pause');


            //Other slides to be animated on carousel slide event 
            $myCarousel.on('click slide.bs.carousel', function(e) {
                var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });



     $(document).ready(function() {
              $('.client_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
				autoplay:false,
        center: true,
				 smartSpeed: 1200,
                responsiveClass: true,
				navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 3,
                    nav: true
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 0
                  }
                }
              })
            })

    





      

    		
    //------------ counter-js------------// 

    $('.counter_section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });


     $(document).ready(function() {
              $('.product_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
                autoplay:false,
        center: true,
                 smartSpeed: 1200,
                responsiveClass: true,
                navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 3,
                    nav: true
                  },
                  1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                    margin: 0
                  }
                }
              })
            })

})(jQuery);	