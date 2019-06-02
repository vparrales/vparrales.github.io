function searchInput () {
	var textInput = document.getElementById("textInput").value;
	var characterSearch = document.getElementById("search").value;
	var lengthOfText = textInput.length;
	var inputCount = 0;

for (var i = 0; i < lengthOfText; i++) {
	if (textInput.charAt(i) == characterSearch) {
		inputCount ++;
	}
}if (inputCount > 0) {
	document.forms["input"].elements["outputResults"].value = ("The charater: " + characterSearch + " was inputted " + inputCount + " times.");
} else {
	var popWindow = "<html>\n";
		popWindow += "<head>\n";
		popWindow += "<title>Error Message</title>\n";
		popWindow += "</head>\n";
		popWindow += "<body>\n";
		popWindow += "<div align='center'>\n";
		popWindow += "<p><i>Search character " + characterSearch + " not found in text string!</i></p>\n";
		popWindow += "<input type='button' value='Close' onclick='window.close()'>\n";
		popWindow += "</div>\n";
		popWindow += "</body>\n";
		popWindow += "</html>\n";

		var windowError = window.open("", "newWidow", "top= 555, left= 475, width=300, height=100");
		windowError.focus();
		windowError.document.write(popWindow);
		windowError.document.close();
	}		
}

