var stateInfo = [
		["AL", "ALABAMA", "Montgomery", "4,779,436"],
		["AK", "ALASKA", "Juneau", "710,231"],
		["AZ", "ARIZONA", "Phonenix", "6,392,017"],
		["AR", "ARKANSAS", "Little Rock", "2,915,918"],
		["CA", "CALIFORNIA", "Sacramento", "37,253,956"],
		["CO", "COLORADO", "Denver", "5,029,196"]
];

function stateInfoButton() {
	var searchKey = document.forms["formInput"].elements["stateVal"].value;
	searchKey = searchKey.toUpperCase();

	var found = false;
	for (var row = 0; row < stateInfo.length; row++) {
		if ((stateInfo[row][0] == searchKey) || (stateInfo[row][1] == searchKey)) {
			document.forms["formInput"].elements["name"].value = stateInfo[row][1];
			document.forms["formInput"].elements["capital"].value = stateInfo[row][2];
			document.forms["formInput"].elements["population"].value = stateInfo[row][3];
			row = stateInfo.length;
			found = true;
		}
	}
	if (found == false) {
		document.forms["formInput"].elements["name"].value = "State not found!";
		document.forms["formInput"].elements["capital"].value = "Capital not found!";
		document.forms["formInput"].elements["population"].value = "Population not found!";
	}
}
	// jQuery enter key trigger for stateInfoButton() function.
	$(document).keypress(function(enterKey) {
		if(enterKey.which === 13) {
			stateInfoButton ();
		}
	})
