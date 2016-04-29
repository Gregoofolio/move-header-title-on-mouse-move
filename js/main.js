$(document).ready(function(){
	
  var $moveable = $('.move-rect');
  var rectPosY = parseInt($('.move-rect').css('top'), 10);
  var rectPosX = parseInt($('.move-rect').css('left'), 10);
  $(".area").mousemove(function(e){
      $moveable.css({'top': rectPosY-e.pageY/40,'left': rectPosX-e.pageX/40});
  });
});