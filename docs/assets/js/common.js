/*
Copyright (c) 2020 by Michael (https://codepen.io/michaelnarine/pen/RKpBLg)
================================================== */
var pix = document.getElementsByClassName("pixel");
for (var i = 0; i < pix.length; i++) {
	pix[i].style.animationDelay = Math.ceil(Math.random() * 5000) + "ms";
}
$(".pixel").addClass("pixel-animation");

/* Full Screen
================================================== */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

/*
Copyright (c) 2015 by Michał Sajnóg (https://github.com/michalsnik/aos)
================================================== */
AOS.init({
	offset: 100,
	delay: 100,
	duration: 900,
	once: false,
	mirror: false,
	anchorPlacement: 'top-bottom',
});

/* cursor
Copyright (c) 2020 by Murtaza (https://codepen.io/murtazamzk/pen/zYGBeva)
================================================== */
const root = document.querySelector('html');
const cursor = document.createElement('span');
cursor.classList.add('cursor');
root.appendChild(cursor);
const cursorInner = document.createElement('span');
cursorInner.classList.add('cursor', 'cursor__inner');
cursor.appendChild(cursorInner);
root.addEventListener('mousemove', e => {
	setPosition(cursor, e);
});
function setPosition(element, e) {
	element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

/* 
Copyright (c) 2020 by ryohei (https://codepen.io/intotheprogram/pen/GPRXEP)
================================================== */
$(window).on('load scroll', function () {
	var elem = $('.mask');
	elem.each(function () {
		var isPlay = 'isPlay';
		var elemOffset = $(this).offset().top;
		var scrollPos = $(window).scrollTop();
		var wh = $(window).height();
		if (scrollPos > elemOffset - wh + (wh / 4)) {
			$(this).addClass(isPlay);
		}
	});
});
