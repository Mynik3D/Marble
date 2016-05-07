$(document).scroll(function(){
 $(function() {
     $('.service__image').each(function(n) {
         $(this).delay(n*100).fadeTo(1000, 1);
    })
 })
});