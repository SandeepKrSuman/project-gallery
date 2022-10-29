/**
*	mCard (HTML)
*	Copyright © mCard by beshleyua. All Rights Reserved.
**/

$(function () {
	'use strict';
	
	var width = $(window).width();
	var height = $(window).height();
	
	/* Preloader */
	$(window).on('load', function() {
		$(".preloader .spinner").fadeOut(function(){
			$('.preloader').fadeOut();
			$('body').addClass('ready');
		});
	});

	/* Fade animations on scroll */
	if (width > 720) {
		window.sr = ScrollReveal();
		sr.reveal('.animated');
	}

	/* Youtube video background */
	var myPlayer = $("#video-bg").YTPlayer();

	/* Smoothscroll */
	if($('#home-section').length) {
		$(window).on('scroll', function(){
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.offset().top - 30 <= scrollPos) {
					$('.top-menu ul li').removeClass("active");
					currLink.closest('li').addClass("active");
				}
			});
		});
	}

	/* Top Menu */
	if($('#home-section').length) {
		$('.top-menu ul li a').on('click', function(){
			var id = $(this).attr('href');
			var h = parseFloat($(id).offset().top);
			
			$('body,html').animate({
				scrollTop: h
			}, 800);
			
			return false;
		});
		$('.section').on('click', '.contact-btn', function(){
			$('.top-menu li a[href="#contact-section"]').click();
			
			return false;
		});
	}

	/* Open Top Menu */
	$('.page').on('click', '.menu-btn', function(){
		if($('.top-menu').hasClass('active')){
			$('.top-menu').removeClass('active');
		} else {
			$('.top-menu').addClass('active');
		}

		return false;
	});

	/* Fixed Top Menu on scroll */
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 100) {
			$('.top-menu').addClass('fixed');
		} 
		else {
			$('.top-menu').removeClass('fixed');
		}
	});

	/* Clients carousel */
	$(".reviews-carousel .owl-carousel").owlCarousel({
		items: 1,
		margin: 0,
		nav: false,
		dots: true,
		loop: false,
		smartSpeed: 600,
		mouseDrag: true,
		touchDrag: true,
		autoplay: false
	});

	/* Button hover effect */
	$('.btn_animated').on('mouseenter', '.circle', function(e){
		if ($(this).find(".ink").length === 0) {
			$(this).prepend("<span class='ink'></span>");
		}
		var ink = $(this).find(".ink");
		ink.removeClass("animate");
		if (!ink.height() && !ink.width()) {
			var d = Math.max($(this).outerWidth(), $(this).outerHeight());
			ink.css({
				height: d,
				width: d
			});
		}
		var x = e.pageX - $(this).offset().left - ink.width() / 2;
		var y = e.pageY - $(this).offset().top - ink.height() / 2;
		ink.css({
			top: y + 'px',
			left: x + 'px'
		}).addClass("animate");
	});
	
	/* Validate contact form */
	$("#cform").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			subject: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
			$.ajax({
				url: 'mailer/feedback.php',
				type: 'post',
				dataType: 'json',
				data: 'name='+ $("#cform").find('input[name="name"]').val() + '&email='+ $("#cform").find('input[name="email"]').val() + '&subject='+ $("#cform").find('input[name="subject"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
				beforeSend: function() {
				
				},
				complete: function() {
				
				},
				success: function(data) {
					$('#cform').fadeOut();
					$('.alert-success').delay(1000).fadeIn();
				}
			});
		}
	});

	/* Validate contact form */
	$("#blog-form").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
			$('#blog-form').fadeOut();
			$('.alert-success').delay(1000).fadeIn();
		}
	});
	
	/* Initialize masonry items */
	var $container = $('.box-items');
	
	$container.imagesLoaded(function(){
		$container.multipleFilterMasonry({
			itemSelector: '.box-item',
			filtersGroupSelector: '.filters',
			percentPosition: true,
			gutter: 0
		});
	});
	
	/* 12. Initialize masonry filter */
	$('.filters label').on('change', 'input[type="radio"]', function() {
		if ($(this).is(':checked')) {
			$('.f_btn').removeClass('active');
			$(this).closest('.f_btn').addClass('active');
		}
		/* Refresh Portfolio magnific popup */
		$('.has-popup').magnificPopup({
			type: 'inline',
			overflowY: 'auto',
			closeBtnInside: true,
			mainClass: 'mfp-fade'
		});
	});
	
	/* Portfolio magnific popup */
	$('.has-popup').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade'
	});
	
	/* gallery */
	$('.post-lightbox').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});

	if($('#home-section').length) {
		google.maps.event.addDomListener(window, 'load', initMap);
	}

});

/* Google Map Options */
function initMap() {
	var myLatlng = new google.maps.LatLng(40.773328,-73.960088); // <- Your latitude and longitude
	var styles = [
	{
		"featureType": "water",
		"stylers": [{
			"color": "#d8dee9"
		},
		{
			"visibility": "on"
		}]
	},
	{
		"featureType": "landscape",
		"stylers": [{
			"color": "#eeeeee"
		}]
	},
	{
		"featureType": "road",
		"stylers": [{
			"saturation": -100
		},
		{
			"lightness": 45
		}]
	},
	{
		"featureType": "road.highway",
		"stylers": [{
			"visibility": "simplified"
		}]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "on"
		}]
	},
	{
		"featureType": "administrative",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#363636"
		}]
	},
	{
		"featureType": "transit",
		"stylers": [{
			"visibility": "off"
		}]
	},
	{
		"featureType": "poi",
		"stylers": [{
			"visibility": "off"
		}]
	}]

	var mapOptions = {
		zoom: 14,
		center: myLatlng,
		mapTypeControl: false,
		disableDefaultUI: true,
		zoomControl: true,
		scrollwheel: false,
		styles: styles
	}
	
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'We are here!'
	});
}