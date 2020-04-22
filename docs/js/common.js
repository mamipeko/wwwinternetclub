/* imageJustSize
================================================== */
$(document).ready(function(){
var hSize = $(window).height();
  $('.cover').height(hSize);
});
$(window).resize(function(){
var hSize = $(window).height();
  $('.cover').height(hSize);
});
