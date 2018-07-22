$(document).ready(function(){
	

	
	$('#menu').click(function(){

  $('#mobilenav').slideToggle('slow');
  $(this).toggleClass('active');
  })
	
	
	
	$('.toggleclass').click(function(){
		
		$('.togglethis').toggle();
	});
	
});