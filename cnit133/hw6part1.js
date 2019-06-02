function mathRoundNumber() {
	var wrongInput = "Invalid Input, please input a number with at LEAST four decimal places!";

	if (Number.isNaN(document.getElementById("decimalNumber").value) || (document.getElementById("decimalNumber").value) == "") {
		document.getElementById("errorMessage").innerHTML = wrongInput;
	} else {
		var number = parseFloat(document.getElementById("decimalNumber").value);
		document.mathForm.decimalNumberOutput.value = "The entered number is " + number + 
		"\n Number rounded to the nearest integer:" + integerRound(number) +
		"\n The square root of the number rounded to nearest interger: " + integerRoundSqrt(number) + 
		"\n Number rounded to the nearest tenth: " + integerRoundTenth(number) + 
		"\n Number rounded to the nearest hundredth: " + integerRoundHundredth (number) + 
		"\n Number rounded to the nearest thousandths: " + integerRoundThousandth(number);
	}
}

function integerRound (number) {
	return(Math.round(number));
}

function integerRoundSqrt (number) {
	return(Math.round(Math.sqrt(number)));
}

function integerRoundTenth (number) {
	return(number.toFixed(1));
}

function integerRoundHundredth (number) {
	return(Math.floor(number * 100 + .5) / 100);
}

function integerRoundThousandth (number) {
	return(Math.round(number * 1000) / 1000);
}

function resetForm() {
	document.getElementById("errorMessage").innerHTML = "";
	document.getElementById("decimalNumber").focus();
}

