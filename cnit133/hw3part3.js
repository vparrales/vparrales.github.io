function fahrenheitToCelsius () {

var F;
F = parseInt(document.getElementById("tempInput").value);

if (Number.isNaN(F)) {
	alert("Please enter a number.");
}
else {
	var celsius;
	celsius = Math.trunc(5/9 * (F - 32)); //Math.trunc, this method will NOT round the number up/down to the nearest integer, but simply remove the decimals.


	document.getElementById("results").value = celsius;
 }
}

function celsiusToFahrenheit () {

 var C;
 C = parseInt(document.getElementById("tempInput").value);

 if (Number.isNaN(C)) {
 	alert("Please enter a number");
 }
 else {
 	var fahrenheit;
 	fahrenheit = Math.trunc((9/5 * C) + 32); //Math.trunc, this method will NOT round the number up/down to the nearest integer, but simply remove the decimals.
 	document.getElementById("results").value = fahrenheit;
 }
}