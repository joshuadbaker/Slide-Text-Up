$(function(){

	var textHeight = $('.text').height(),
		textCount = $(".text").size(),
		pos = 0;

	//set height of the text tray
	$('#text_tray').height = textHeight * textCount;

	$('#slide_up').click(function(){		
		pos = -1;
		heightAmount = textHeight * pos;
		$('#text_tray').animate({top: heightAmount}, 600); 
	});




});