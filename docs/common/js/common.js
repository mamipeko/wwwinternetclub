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
