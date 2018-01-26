$( document ).ready(function() {

  $('#virtualWallet').hide();
  $('#homeFinder').hide()
  $('#simon').hide();
  $('#goalTrackerShow').css('color', 'red')


  $("#scrollAboutMe").click(function() {
      $('main').animate({
          scrollTop: $("#aboutme").offset().top - $('main').offset().top + $('main').scrollTop()
      }, 700);
  });

  $("#scrollPortfolio").click(function() {
      $('main').animate({
          scrollTop: $("#portfolio").offset().top - $('main').offset().top + $('main').scrollTop()
      }, 700);
  });

  $("#scrollContact").click(function() {
      $('main').animate({
          scrollTop: $("#contact").offset().top - $('main').offset().top + $('main').scrollTop()
      }, 700);
  });

  $("#scrollHome").click(function() {
      $('main').animate({
          scrollTop: $("#home").offset().top - $('main').offset().top + $('main').scrollTop()
      }, 700);
  });

  $('#goalTrackerShow').click(function () {
      $(this).css('color', 'red')
      $(this).siblings().css('color', 'black')
      $('#goalTracker').show().siblings().hide();
  });

  $('#virtualWalletShow').click(function () {
      $(this).css('color', 'red')
      $(this).siblings().css('color', 'black')
      $('#virtualWallet').show().siblings().hide();
  });

  $('#homeFinderShow').click(function () {
      $(this).css('color', 'red')
      $(this).siblings().css('color', 'black')
      $('#homeFinder').show().siblings().hide();
  });

  $('#simonShow').click(function () {
      $(this).css('color', 'red')
      $(this).siblings().css('color', 'black')
      $('#simon').show().siblings().hide();
  });

});
