$(".pixels").each(function () {
	var numberOfPixels = $(this).data("pixels");

	for (var i = 0; i < numberOfPixels; i++) {
		$(this).append(
			$("<li/>")
				.append($("<span/>")
					.addClass("pixel")
					.css("animationDelay", Math.ceil(Math.random() * 5000) + "ms"))
		);
	}
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
	if ($(window).scrollTop() > $(window).innerHeight() / 2) {
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

AOS.init({
	offset: 200,
	delay: 100,
	duration: 500,
});

console.log("📶📶📶📶📶📶📶📶📶📶📶📶📶📶📶\n📶 インターネットクラブ の ルール 📶\n📶📶📶📶📶📶📶📶📶📶📶📶📶📶📶\n\nインターネットクラブについて\nオフラインで話してはならない💬\nインターネットクラブについて\nオフラインで話してはならない💬\nインターネットにはひとりで接続する⚡\nハンドルネームでコミュニケーションをとる📛\nインターネットに時間制限はなし🕘\nインターネットクラブに初めて参加したものは必ず\nインターネットクラブのホームページに\nアクセスしなければならない💻");
