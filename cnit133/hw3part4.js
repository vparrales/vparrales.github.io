//declare global variables

let firstNumber;
let secondNumber;
let theQuestion;
let theAnswer;

// onload function for new generated question.
function newRandomQuestion() {
	firstNumber = Math.floor(Math.random() * 10);
	secondNumber = Math.floor(Math.random() * 10);
	theQuestion = "What is " + firstNumber + " times " + secondNumber + "?";
	document.getElementById('theQuestion').innerHTML = theQuestion;
}

//Start, check if Correct button.
function learnMultiplication() {
	theAnswer = firstNumber * secondNumber;
	if (document.getElementById('theAnswer').value == theAnswer) {
		let correctConfirmMessage = confirm('Very Good! To continue press OK, otherwise Cancel.');
		document.getElementById('multiplyForm').reset();
	if (correctConfirmMessage) {
		newRandomQuestion()
	} 
	else {
		return
	}
	} else {
		alert('No. Please try again.');
		document.getElementById('multiplyForm').reset();
	}
}
// jQuery enter key trigger for learnMultiplication() function.
	$(document).keypress(function(enterKey) {
		if(enterKey.which === 13) {
			learnMultiplication ();
		}
	})
		