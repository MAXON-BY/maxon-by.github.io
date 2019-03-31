$(document).ready(function() {

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	/* mixit UP */
	$(function () {
		/* mixit up */
		var containerEl = document.querySelector('.portfolio');
		var mixer = mixitup(containerEl);
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

	});

	// /* bg video */
	// $(document).ready(function() {
	// 	var videobackground = new $.backgroundVideo($('#home'), {
	// 		"align": "centerXY",
	// 		"width": 1280,
	// 		"height": 720,
	// 		"path": "video/",
	// 		"filename": "cover_1",
	// 		"types": ["mp4","ogg","webm"],
	// 		"preload": true,
	// 		"autoplay": true,
	// 		"loop": true
	// 	});
	//
	// 	/* anim */
	// 	$('.scroll-down').delay(4000).animate({'opacity':'1'},500);
	// });


});