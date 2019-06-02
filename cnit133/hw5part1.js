$(document).ready(function(){
	$( "#myform" ).validate({
// 		rules: {
//     myform: {
//       required: true,
//       url: true
//       	}
// }
		messages: {
			name: "Please enter your full name",
			TvSeries: "Please choose your favorite tv show",
			faveFruit: "Please choose your favorite fruit",
			options: "Please select a language to learn",
		},

	errorPlacement: function(error, element) {
		if (element.is(":radio") || element.is(":checkbox")) {
			error.appendTo ( element.parent());
		} else {
			error.insertAfter(element);
		}
	}
	});
});