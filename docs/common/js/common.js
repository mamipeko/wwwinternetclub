/* cover
================================================== */
function cover() {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
}
cover();

/* preload
================================================== */
function preload() {
    for(var i = 0; i< arguments.length; i++){
        $("<img>").attr("src", arguments[i]);
    }
}
preload('/common/img/logo/logo-01.png',
		'/common/img/logo/logo-02.png',
		'/common/img/logo/logo-03.png',
		'/common/img/logo/logo-04.png',
		'/common/img/logo/logo-05.png',
		'/common/img/logo/logo-06.png',
		'/common/img/logo/logo-07.png',
		'/common/img/logo/logo-08.png',
		'/common/img/logo/logo-09.png',
		'/common/img/logo/logo.png');

/*
Licensed under the MIT license.
http://opensource.org/licenses/mit-license.php
Copyright © 2020 Michael
https://codepen.io/michaelnarine/pen/RKpBLg
================================================== */
var pix = document.getElementsByClassName("pixel");
for (var i = 0; i < pix.length; i++) {
  pix[i].style.animationDelay = Math.ceil(Math.random()*5000)+"ms";
}
