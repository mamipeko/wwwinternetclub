/*
Licensed under the MIT license.
http://opensource.org/licenses/mit-license.php
Copyright © 2020 Michael
https://codepen.io/michaelnarine/pen/RKpBLg
================================================== */
var pix = document.getElementsByClassName("pixel");
for (var i = 0; i < pix.length; i++) {
	pix[i].style.animationDelay = Math.ceil(Math.random() * 5000) + "ms";
}

/* Full Screen
================================================== */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

/*
Licensed under the MIT license.
http://opensource.org/licenses/mit-license.php
Copyright © 2015 Michał Sajnóg
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