$( document ).ready(function() {

  $('#virtualWallet').hide();
  $('#homeFinder').hide()
  $('#simon').hide();

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
      $('#goalTracker').show().siblings().hide();
  });

  $('#virtualWalletShow').click(function () {
      $('#virtualWallet').show().siblings().hide();
  });

  $('#homeFinderShow').click(function () {
      $('#homeFinder').show().siblings().hide();
  });

  $('#simonShow').click(function () {
      $('#simon').show().siblings().hide();
  });

});
