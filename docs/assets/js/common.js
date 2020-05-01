/*
Licensed under the MIT license.
http://opensource.org/licenses/mit-license.php
Copyright (c) 2020 Michael
https://codepen.io/michaelnarine/pen/RKpBLg
================================================== */
// var pix = document.getElementsByClassName("pixel");
// for (var i = 0; i < pix.length; i++) {
// 	pix[i].style.animationDelay = Math.ceil(Math.random() * 5000) + "ms";
// }
// $(".pixel").addClass("pixel-animation");

/* Full Screen
================================================== */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

/*
Licensed under the MIT license.
http://opensource.org/licenses/mit-license.php
Copyright (c) 2015 Michał Sajnóg
https://github.com/michalsnik/aos
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
Licensed under the MIT license.
http://opensource.org/licenses/mit-license.php
Copyright (c) 2020 Murtaza
https://codepen.io/murtazamzk/pen/zYGBeva
================================================== */
// const root = document.querySelector('html');
// const cursor = document.createElement('span');
// cursor.classList.add('cursor');
// root.appendChild(cursor);
// const cursorInner = document.createElement('span');
// cursorInner.classList.add('cursor', 'cursor__inner');
// cursor.appendChild(cursorInner);
// root.addEventListener('mousemove', e => {
// 	setPosition(cursor, e);
// });
// function setPosition(element, e) {
// 	element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
// }
