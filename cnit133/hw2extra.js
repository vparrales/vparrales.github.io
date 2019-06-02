$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

	$('#textfield').focus(function() {
		$(this).css('background-color','red');
	});