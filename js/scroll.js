$( document ).ready(function() {
  $("#scrollAboutMe").click(function() {
      $('main').animate({
          // scrollTop: $("#aboutme").offset().top
          scrollTop: $("#aboutme").offset().top - $('main').offset().top + $('main').scrollTop()
      }, 700);
  });
});
