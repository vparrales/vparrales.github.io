function process() {
	var number1, number2, number3, n1, n2, n3, sum;
	number1 = document.getElementById("num1").value;
	number2 = document.getElementById("num2").value;
	number3 = document.getElementById("num3").value;
	// number1 = document.forms["myform"].elements["num1"].value;
	// number2 = document.forms["myform"].elements["num2"].value;
	// number3 = document.forms["myform"].elements["num3"].value;
	n1 = parseInt(number1);
	n2 = parseInt(number2);
	n3 = parseInt(number3);
	sum = n1 + n2 + n3;
	average = (n1 + n2 + n3) / 3;
	product = (n1 * n2 * n3);
	smallest = (Math.min(n1, n2, n3));
	largest = (Math.max(n1, n2, n3));

	alert("The sum of the numbers is " + sum + 
		"\nThe average of the numbers is " + average + 
		"\nThe procuct of the numbers is " + product + 
		"\nThe smallest of the numbers is " + smallest + 
		"\nThe largest of the numbers is " + largest);
}