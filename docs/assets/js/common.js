$(".pixel").each(function () {
	$(this)
		.css("animationDelay", Math.ceil(Math.random() * 5000) + "ms")
		.addClass("pixel-animation");
});

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
	$(".cursor").css("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
}

$("<span/>")
	.addClass("cursor")
	.append($("<span/>").addClass("cursor").addClass("cursor-inner"))
	.appendTo($("body"));

$("body")
	.on("mousemove", function (event) {
		setCursorPosition(event);
	});

$(window).on("scroll", function () {
	$('.mask').each(function () {
		if ($(this).hasClass("is-play")) {
			return;
		}

		var wh = $(window).height();
		if ($(window).scrollTop() > $(this).offset().top - wh + (wh / 4)) {
			$(this).addClass("is-play");
		}
	});
});
