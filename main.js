(function() {
  'use strict';

  $(document).scroll(function () {
    console.log($(document).scrollTop());

    if($(document).scrollTop() > 0) {
        $('header').addClass('headerTransparent');
    } else {
        $('header').removeClass('headerTransparent');
    }
  });
})();
