var windowHeight; $(".pixels").each(function () { for (var n = $(this).data("pixels"), o = 0; o < n; o++)$(this).append($("<li/>").append($("<span/>").addClass("pixel").css("animationDelay", Math.ceil(5e3 * Math.random()) + "ms"))) }), $(window).on("load resize", function () { windowHeight = $(window).innerHeight() }), $(window).on("load scroll", _.throttle(function () { var n = $(window).scrollTop(); $(".animationable").each(function () { var o = $(this).offset().top, a = $(this).height(); o < windowHeight + n && o + a > n ? $(this).addClass("animationable-active") : $(this).removeClass("animationable-active") }) }, 400)), $(window).on("load scroll", _.throttle(function () { $(window).scrollTop() > $(window).innerHeight() / 2 && $(".cursor").addClass("cursor-active") }, 20)), $("<span/>").addClass("cursor-wrapper").append($("<span/>").addClass("cursor")).appendTo($("body")), $("body").on("mousemove", _.throttle(function (n) { $(".cursor-wrapper").css("transform", `translate3d(${n.clientX}px, ${n.clientY}px, 0)`) }, 50)), AOS.init({ offset: 200, delay: 100, duration: 500 }), console.log("📶📶📶📶📶📶📶📶📶📶📶📶📶📶📶\n📶 インターネットクラブ の ルール 📶\n📶📶📶📶📶📶📶📶📶📶📶📶📶📶📶\n\nインターネットクラブへようこそ👋\n\nインターネットクラブについて\nオフラインで話してはならない💬\nインターネットクラブについて\nオフラインで話してはならない💬\nインターネットにはひとりで接続する🔌\nハンドルネームでコミュニケーションをとる📛\nインターネットに時間制限はなし🕘\nインターネットクラブに\n初めて参加したものは必ず\nインターネットクラブのホームページに\nアクセスしなければならない💻\n\nこれを知ってしまったあなたは\nもうインターネットクラブです👥\n\n");
