function process(){
	var number1, number2, number3, number4, number5, n1, n2, n3, n4, n5;
	var countNegative;
	var countPositive;
	var countZero;

	countNegative = 0;
	countPositive = 0;
	countZero = 0;

	number1 = document.getElementById("num1").value;
	number2 = document.getElementById("num2").value;
	number3 = document.getElementById("num3").value;
	number4 = document.getElementById("num4").value;
	number5 = document.getElementById("num5").value;

	n1 = parseInt(number1);
	n2 = parseInt(number2);
	n3 = parseInt(number3);
	n4 = parseInt(number4);
	n5 = parseInt(number5);


if (n1 < 0)
	countNegative += 1;
if (n2 < 0)
	countNegative += 1;
if (n3 < 0)
	countNegative += 1;
if (n4 < 0)
	countNegative += 1;
if (n5 < 0)
	countNegative += 1;

if (n1 === 0)
	countZero += 1;
if (n2 === 0)
	countZero += 1;
if (n3 === 0)
	countZero += 1;
if (n4 === 0)
	countZero += 1;
if (n5 === 0)
	countZero += 1;

if (n1 > 0)
	countPositive += 1;
if (n2 > 0)
	countPositive += 1;
if (n3 > 0)
	countPositive += 1;
if (n4 > 0)
	countPositive += 1;
if (n5 > 0)
	countPositive += 1;

document.getElementById("results").value = ("The five numbers inputted were: " 
	+ n1 + "," + n2 + "," + n3 + "," + n4 + "," + n5 + "." + "\nThere was " + countNegative + " negative numbers inputted." + 
	"\nThere was " + countZero + " zero inputted." + "\nThere was " + countPositive + " positive numbers inputted.");


$(document).ready(function(){
	$("button").click(function() {
		$("textarea").fadeTo("slow", 0.35);
	});
});
}