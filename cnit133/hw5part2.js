function newWebSite(myForm) {
	var newUrlDestination = myForm.listOptions.options[myForm.listOptions.selectedIndex].value;
	window.location = newUrlDestination;
}