$(document).ready(function() {
	$(window).scroll(function() {
    if($(document).scrollTop() > 100) {
      $('.nav').addClass('shrink');
    } else {
      $('.nav').removeClass('shrink');
    }
	});
  $(window).scroll(function() {
    if($(document).scrollTop() > 100) {
      $('.navbar-brand').addClass('small');
    } else {
      $('.navbar-brand').removeClass('small');
    }
  });
});