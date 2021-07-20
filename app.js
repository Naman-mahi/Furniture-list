
var Product = function(){
    
    var Intro = function(){
        // Image header...
        TweenMax.to($('.js-header-image'), 1,{
            delay: 0.3,
            autoAlpha: 1,
            ease: Expo.easeInOut
        });
        
        // Text content...
        TweenMax.to($('.js-header-name'), 0.5,{
            delay: 0.6,
            autoAlpha: 1,
            ease: Expo.easeInOut,
            onComplete: function(){
                // Text...
                TweenMax.to($('.js-header-name h1'), 0.8,{
                    delay: 0,
                    y: 0,
                    ease: Expo.easeInOut
                });
                
                // Items...
                TweenMax.to($('.page__section'), 0.8,{
                    delay: 0,
                    autoAlpha: 1,
                    ease: Expo.easeInOut
                });
            }
        });
    }
    
    var Images = function(){
        $(".is-background").imgLiquid();
    }
    
    var Animation = function(){
        var wow = new WOW({
            boxClass:     'set',
            animateClass: 'animation',
        });
        wow.init();
    }

  return{
    init: function(){
            Animation();
            Images();
            Intro();
    }
  };
}();

// Run...
Product.init();

