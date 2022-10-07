// scroll
jQuery(document).ready(function () {
	jQuery("a.scrollto").click(function () {
		elementClick = jQuery(this).attr("href");
		destination = jQuery(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate(
			{ scrollTop: destination },
			1100
		);
		return false;
	});
});

// menu burger
$(document).ready(function () {
	var link = $(".menu-link");
	var linkActive = $(".menu-link_active");
	var menu = $(".menu");
	var navLink = $(".menu a");

	link.click(function () {
		link.toggleClass("menu-link_active");
		menu.toggleClass("menu_active");
	});
	navLink.click(function () {
		link.removeClass("menu-link_active");
		menu.toggleClass("menu_active");
	});
});

// slider
$(document).ready(function () {
	$(".events-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		waitForAnimate: false,
		infinite: true,
		dots: true,
		arrows: true,
	});
});
