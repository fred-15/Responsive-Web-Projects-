// Use Strict Mode (Optional)
"use strict";

// jQuery Document Ready Shorthand
$(function(){
    $('.slider').ripples({
        dropRadius: 7,
        perturbance: 0.01,
        interactive: true

    });

    var typed = new Typed('.text-animation', {
        strings: [' <strong>I love</strong> <strong class="primary">coding.</strong> ', 
        '<strong>and to</strong> <strong class ="primary">share!!</strong> '],
        typeSpeed: 20,
      });
});


