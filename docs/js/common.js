/* cover
================================================== */
function cover() {
var height=window.innerHeight;
document.documentElement.style.setProperty( '--vh', height/100 + 'px');
}

/* preload
================================================== */
function preload() {
    for(var i = 0; i< arguments.length; i++){
        $("<img>").attr("src", arguments[i]);
    }
}

/* 
================================================== */
cover();
preload('/img/logo/logo-01.png', 
		'/img/logo/logo-02.png', 
		'/img/logo/logo-03.png', 
		'/img/logo/logo-04.png', 
		'/img/logo/logo-05.png', 
		'/img/logo/logo-06.png', 
		'/img/logo/logo-07.png', 
		'/img/logo/logo-08.png', 
		'/img/logo/logo-09.png', 
		'/img/logo/logo.png');

