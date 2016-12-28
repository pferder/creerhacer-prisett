$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').addClass('u-dark-back');
       } else {
          $('#navbar').removeClass('u-dark-back');
       }
   });
});
