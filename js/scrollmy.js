     $(window).scroll(function() {
        $('.testimonial__func,.footer__limiter').each(function(){
          if ($(this).offset().top < $(window).scrollTop()+850) {
            $(this).addClass('animated fadeInUp');
          }
        });
      });
   