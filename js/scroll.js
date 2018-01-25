

$( document ).ready(function() {
  $("#scrollDown").click(function() {
      $('html, body').animate({
          scrollTop: $("#aboutme").offset().top
      }, 2000);
  });
});


$("#scrollDown").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutme").offset().top
    }, 2000);
});
