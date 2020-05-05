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

/* button
================================================== */
$(window).on("load scroll", _.throttle(function () {
	$(".button").each(function () {
		if ($(this).offset().top < $(window).innerHeight() + $(window).scrollTop() &&
			$(this).offset().top + $(this).height() > $(window).scrollTop()) {
			$(this).addClass("button-active");
		}
		else {
			$(this).removeClass("button-active");
		}
	});
}, 400));

/* summary
================================================== */
$(window).on("load scroll", _.throttle(function () {
	$(".summary").each(function () {
		if ($(this).offset().top < $(window).innerHeight() + $(window).scrollTop() &&
			$(this).offset().top + $(this).height() > $(window).scrollTop()) {
			$(this).addClass("summary-active");
		}
		else {
			$(this).removeClass("summary-active");
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





// $("html").css("--vh", (window.innerHeight * 0.01) + "px");

AOS.init({
	offset: 100,
	delay: 100,
	duration: 900,
	once: false,
	mirror: false,
	anchorPlacement: "top-bottom",
});
