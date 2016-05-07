// $(document).ready(function(){var $target = $('.portfolio__overflow');
// var hold = 700;

// $.each($target,function(i,t){
//      var $this = $(t);
//      setTimeout(function(){ $this.show('normal'); },i*hold);
// });});

$(document).scroll(function(){
 $(function() {
     $('.portfolio__overflow img').each(function(n) {
         $(this).delay(n*100).fadeTo(1000, 1);
    })
 })
});