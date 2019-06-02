	$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});
	function calcGrade() {
	//define local variables
	var hwAvg;
	var midExam;
	var finalExam;
	var ACR;

	//change input string to interger
	hwAvg = parseInt(document.getElementById("hwAvg").value);
	midExam = parseInt(document.getElementById("midExam").value);
	finalExam = parseInt(document.getElementById("finalExam").value);
	ACR = parseInt(document.getElementById("ACR").value);

	//final average
	var finalAverage;
	finalAverage = (.5*hwAvg) + (.2*midExam) + (.2*finalExam) + (.1*ACR);

	//display grade in textarea
	var displayGrade;
	displayGrade = document.getElementById("results");

	//Checking for valid numeric input

	if  (Number.isNaN(hwAvg) || Number.isNaN(midExam) || Number.isNaN(finalExam) || Number.isNaN(ACR) || Number.isNaN(finalAverage) || hwAvg < 0 || hwAvg > 100 || midExam < 0 || midExam > 100 || finalExam < 0 || finalExam > 100 || ACR < 0 || ACR > 100) {
		alert("Enter only numbers between 0 and 100");
		// displayGrade.innerHTML = "Enter only numbers between 0 and 100";
	}
	else if (finalAverage >= 90 && finalAverage <= 100) {
		displayGrade.innerHTML = "Final grade is: " + finalAverage.toFixed(2) + " Excellent work, you earned an A!";
	}
	else if (finalAverage >= 80 && finalAverage <= 89) {
		displayGrade.innerHTML = "Final grade is: " + finalAverage.toFixed(2) + " Good work, you earned a B!";
	}
	else if (finalAverage >= 70 && finalAverage <= 79) {
		displayGrade.innerHTML = "Final grade is: " + finalAverage.toFixed(2) + " You earned a C!";
	}
	else if (finalAverage >= 60 && finalAverage <= 69) {
		alert("Final grade is: " + finalAverage.toFixed(2) + " Student must retake the course!");
		// displayGrade.innerHTML = "Final grade is: " + finalAverage + "Student must retake the course!";
	}
	else if (finalAverage >= 0 && finalAverage <= 59) {
		alert("Final grade is: " + finalAverage.toFixed(2) + " Student must retake the course!");
		// displayGrade.innerHTML = "Final grade is: " + finalAverage + " Student must retake the course!";
	}


	$(document).ready(function(){
	$("button").click(function() {
		$("textarea").fadeTo("slow", 0.35);
	});
});
}


