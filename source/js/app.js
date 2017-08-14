
// @codekit-prepend 'lib/jquery.1.12.4.js'
// @codekit-prepend 'lib/bootstrap.js'
// @codekit-prepend 'lib/velocity.js'
// @codekit-prepend 'lib/velocity.ui.js'

$(document).ready(function () {

  $('.timeline-content').each(function (i){
      var bottom_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      if (bottom_of_window > bottom_of_object) {

        if (!$(this).hasClass('in-viewport')) {
          $(this).addClass('in-viewport');
          $(this).css("opacity", "1");
        }

      }
  });

  $('.timeline-content-opposite').each(function (i){
      var bottom_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      if (bottom_of_window > bottom_of_object) {

        if (!$(this).hasClass('in-viewport')) {
          $(this).addClass('in-viewport');
          $(this).css("opacity", "1");
        }

      }
  });

  $('.timeline-id').each(function (i){
      var bottom_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      if (bottom_of_window > bottom_of_object) {

        if (!$(this).hasClass('in-viewport')) {
          $(this).addClass('in-viewport');
          $(this).css("opacity", "1");
          $(this).addClass("flex");
        }

      }
  });

});

/* Scroll animation */

$(document).scroll(function (){

    $('.timeline-id').each(function (i){
      var bottom_of_object = $(this).offset().top + 100;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      if (bottom_of_window > bottom_of_object) {

        if (!$(this).hasClass('in-viewport')) {
          $(this).velocity('fadeIn', { stagger: 700 }).delay(2000);
          $(this).addClass('in-viewport');
          $(this).addClass("flex");
        }

      }
    });

    var screenResolution = $(document).width();

    if (screenResolution <= 425) {

        $('.left').each(function (i){
            var bottom_of_object = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if (bottom_of_window > bottom_of_object) {

              if (!$(this).hasClass('in-viewport')) {
                $(this).velocity('transition.slideRightIn', { stagger: 700 }).delay(2000);
                $(this).addClass('in-viewport');
              }

            }
        });

        $('.right').each(function (i){
            var bottom_of_object = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if (bottom_of_window > bottom_of_object) {

              if (!$(this).hasClass('in-viewport')) {
                $(this).velocity('transition.slideRightIn', { stagger: 700 }).delay(2000);
                $(this).addClass('in-viewport');
              }

            }
        });

    } else {

        $('.left').each(function (i){
            var bottom_of_object = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if (bottom_of_window > bottom_of_object) {

              if (!$(this).hasClass('in-viewport')) {
                $(this).velocity('transition.slideLeftIn', { stagger: 700 }).delay(2000);
                $(this).addClass('in-viewport');
              }

            }
        });

        $('.right').each(function (i){
            var bottom_of_object = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if (bottom_of_window > bottom_of_object) {

              if (!$(this).hasClass('in-viewport')) {
                $(this).velocity('transition.slideRightIn', { stagger: 700 }).delay(2000);
                $(this).addClass('in-viewport');
              }

            }
        });

    }

});
