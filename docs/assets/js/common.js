$(".pixel").each(function () {
	$(this)
		.css("animationDelay", Math.ceil(Math.random() * 5000) + "ms");
});
$(".pixel-list").addClass("pixel-animation");

$("html").css("--vh", (window.innerHeight * 0.01) + "px");

AOS.init({
	offset: 100,
	delay: 100,
	duration: 900,
	once: false,
	mirror: false,
	anchorPlacement: "top-bottom",
});

function setCursorPosition(event) {
	$(".cursor:not(.cursor-inner)").css("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
}

$("<span/>")
	.addClass("cursor")
	.append($("<span/>").addClass("cursor").addClass("cursor-inner"))
	.appendTo($("body"));

$("body")
	.on("mousemove", _.throttle(function (event) {
		setCursorPosition(event);
	}, 10));

$(window).on("scroll", _.throttle(function () {
	$('.mask').each(function () {
		if ($(this).hasClass("is-play")) {
			return;
		}

		var wh = $(window).height();
		if ($(window).scrollTop() > $(this).offset().top - wh + 100) {
			$(this).addClass("is-play");
		}
	});
}, 400));
