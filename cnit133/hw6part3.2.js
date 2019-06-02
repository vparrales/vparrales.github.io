$(document).ready(function() {
	jQuery(function($) {
		$("#phone").usPhoneFormat({
			format: '(xxx) xxx-xxxx', });
	});
});

function extractNumber() {
	if($("#phoneNumber").valid()) {
		var telephoneNumber = $('#phone').val();
		var tokens = telephoneNumber.split( ' ' );
		var tokens2 = tokens[1].split( '-' );
		$('#areaCode').val(tokens[0].substr(1,3));
		$('#sevenDigitNumber').val(tokens[0] + ' ' + tokens2[0] + '-' + tokens2[1]);
	} else {
		return false;
	}
}
