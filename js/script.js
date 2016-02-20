$(document).ready(function() {
	$(window).scroll(function() {
	    if($(document).scrollTop() > 100) {
	      $('.nav').addClass('shrink');
		  $('.navbar-toggle').addClass('resize');
		  $('.navbar-brand').addClass('small');
	    } else {
	      $('.nav').removeClass('shrink');
		  $('.navbar-toggle').removeClass('resize');
		  $('.navbar-brand').removeClass('small');
	    }

		if($(document).scrollTop() > 1200) {
			$('.projects-left').addClass('animated fadeInLeftBig');
			$('.projects-right').addClass('animated fadeInRightBig');
			$('.projects-left').removeClass('hideme');
			$('.projects-right').removeClass('hideme');
		} 
	});
});
