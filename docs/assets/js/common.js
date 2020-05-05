/* pixel
================================================== */
$(".pixel").each(function () {
	$(this).css("animationDelay", Math.ceil(Math.random() * 5000) + "ms");
});
$(".pixel-list").addClass("pixel-animation");


$(window).on("load scroll", _.throttle(function () {
	$(".photo").each(function () {
		if ($(this).offset().top < $(window).innerHeight() + $(window).scrollTop() &&
			$(this).offset().top + $(this).height() > $(window).scrollTop()) {
			$(this).addClass("pixel-active");
		}
		else {
			$(this).removeClass("pixel-active");
		}
	});
}, 400));

/* title
================================================== */
$(window).on("load scroll", _.throttle(function () {
	$(".title").each(function () {
		if ($(this).offset().top < $(window).innerHeight() + $(window).scrollTop() &&
			$(this).offset().top + $(this).height() > $(window).scrollTop()) {
			$(this).addClass("title-active");
		}
		else {
			$(this).removeClass("title-active");
		}
	});
}, 400));



// function setCursorPosition(event) {
// 	$(".cursor:not(.cursor-inner)").css("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
// }

// $("<span/>")
// 	.addClass("cursor")
// 	.append($("<span/>").addClass("cursor").addClass("cursor-inner"))
// 	.appendTo($("body"));

// $("body")
// 	.on("mousemove", _.throttle(function (event) {
// 		setCursorPosition(event);
// 	}, 50));

// $(window).on("scroll", _.throttle(function () {
// 	$('.mask').each(function () {
// 		if ($(this).hasClass("is-play")) {
// 			return;
// 		}

// 		var wh = $(window).height();
// 		if ($(window).scrollTop() > $(this).offset().top - wh + 100) {
// 			$(this).addClass("is-play");
// 		}
// 	});
// }, 400));




// $("html").css("--vh", (window.innerHeight * 0.01) + "px");

AOS.init({
	offset: 100,
	delay: 100,
	duration: 900,
	once: false,
	mirror: false,
	anchorPlacement: "top-bottom",
});
