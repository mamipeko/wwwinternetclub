$(".pixel").each(function () {
	$(this).css("animationDelay", Math.ceil(Math.random() * 5000) + "ms");
});
$(".pixel-list").addClass("pixel-animation");

var windowHeight;

$(window).on("load resize", function () {
	windowHeight = $(window).innerHeight();
});

$(window).on("load scroll", _.throttle(function () {
	var scrollTop = $(window).scrollTop();

	$(".animationable").each(function () {
		var thisOffsetTop = $(this).offset().top;
		var thisHeight = $(this).height();

		if (thisOffsetTop < windowHeight + scrollTop &&
			thisOffsetTop + thisHeight > scrollTop) {
			$(this).addClass("animationable-active");
		}
		else {
			$(this).removeClass("animationable-active");
		}
	});

	/* pixel
	================================================== */
	$(".photo").each(function () {
		if ($(this).offset().top < $(window).innerHeight() + $(window).scrollTop() &&
			$(this).offset().top + $(this).height() > $(window).scrollTop()) {
			$(this).addClass("pixel-active");
		}
		else {
			$(this).removeClass("pixel-active");
		}
	});

	$(".title").each(function () {
		if ($(this).offset().top < $(window).innerHeight() + $(window).scrollTop() &&
			$(this).offset().top + $(this).height() > $(window).scrollTop()) {
			$(this).addClass("title-active");
		}
		else {
			$(this).removeClass("title-active");
		}
	});

	$(".button").each(function () {
		if ($(this).offset().top < $(window).innerHeight() + $(window).scrollTop() &&
			$(this).offset().top + $(this).height() > $(window).scrollTop()) {
			$(this).addClass("button-active");
		}
		else {
			$(this).removeClass("button-active");
		}
	});

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

function setCursorPosition(event) {
	$(".cursor-wrapper").css("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
}

$("<span/>")
	.addClass("cursor-wrapper")
	.append($("<span/>").addClass("cursor"))
	.appendTo($("body"));

$("body")
	.on("mousemove", _.throttle(function (event) {
		setCursorPosition(event);
	}, 50));

$(window).on("load scroll", _.throttle(function () {
	if ($(window).scrollTop() > $(window).innerHeight()) {
		$(".cursor").addClass("cursor-active");
	}
}, 20));

$("html").css("--vh", (window.innerHeight * 0.01) + "px");

AOS.init({
	offset: 100,
	delay: 100,
	duration: 900,
	once: false,
	mirror: false,
	anchorPlacement: "top-bottom",
});
