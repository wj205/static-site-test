$(document).ready(function(){
  $('a').mouseenter(function(){
    $('p').css('opacity', '0.75');
    $(this).addClass('red');
  });
  $('a').mouseleave(function(){
    $('p').css('opacity', '0.6');
    $(this).removeClass('red');
  });
});