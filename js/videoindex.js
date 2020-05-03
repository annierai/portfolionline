var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


$(document).ready(function(){
	setTimeout(function(){
		var portfolioHeight = $('.portfolio-wrapper .brand img').height();
		console.log(portfolioHeight);
		$('.home .portfolio-wrapper').height(portfolioHeight + 'px');

		var emptyheight = $('.portfolio .portfolio-wrapper .brand:first-child img').height();

		$('.portfolio .portfolio-wrapper .no-image').height(emptyheight);
		
	}, 200)
	
	

	$(window).resize(function(){
		var portfolioHeightResize = $('.portfolio-wrapper img').height();
		console.log(portfolioHeightResize);
		$('.home .portfolio-wrapper').height(portfolioHeightResize + 'px');
		$('.bx-viewport').css('height', portfolioHeightResize + 'px');

		var emptyheight = $('.portfolio .portfolio-wrapper .brand:first-child img').height();
		$('.portfolio-wrapper .no-image').height(emptyheight);

	});

	$('.nav-mobile').click(function(){
		$('nav').toggle();
		$('.portfolio .logo-sub').toggle();
		$('.nav-mobile').toggleClass('nav-mobile-active');
		$('body').toggleClass('no-scroll');
	});

	$('.drop .dropdown span').click(function(){
		$(this).parent('.dropdown').toggleClass('drop-open');
	});

	$('.drop .dropdown a').click(function(){
		$(this).parent('.dropdown').find('.active').removeClass('active');
		$(this).addClass('active');
		parent = $(this).parent('.dropdown');
		$(this).prependTo(parent);
		$(this).parent('.dropdown').toggleClass('drop-open');
		value = $(this).text();
		$(this).parent().parent().find('.hidden-input').val(value);
	});

	$('.bxslider').bxSlider();



});
