$(document).ready(function(){
	$('.practice__columns').slick({
		arrows:true,
		dots:false,
		mobileFirst: true,
		adaptiveHeight:true,
		slidesToShow: 1,
		responsive: [{
    		breakpoint: 564,
    		settings: 'unslick'
  		}]
	});
	$('.header__burger').click(function(){
		$('.header__burger, .header__menu, .header__logo').toggleClass('active');
		$('body').toggleClass('lock');
	});
});