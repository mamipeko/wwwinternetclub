$(".pixel").each(function () {
	$(this).css("animationDelay", Math.ceil(Math.random() * 5000) + "ms");
});

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
}, 400));

$(window).on("load scroll", _.throttle(function () {
	if ($(window).scrollTop() > $(window).innerHeight()) {
		$(".cursor").addClass("cursor-active");
	}
}, 20));

$("<span/>")
	.addClass("cursor-wrapper")
	.append($("<span/>").addClass("cursor"))
	.appendTo($("body"));

$("body")
	.on("mousemove", _.throttle(function (event) {
		$(".cursor-wrapper").css("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
	}, 50));

$("html").css("--vh", (window.innerHeight * 0.01) + "px");

AOS.init({
	offset: 100,
	delay: 100,
	duration: 900,
	once: false,
	mirror: false,
	anchorPlacement: "top-bottom",
});
