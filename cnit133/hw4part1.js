var sum = 0;

for (var number = 5; number <= 20; number += 3) {
	sum += number;
}

document.getElementById('addingByThree').innerHTML = 'The sum of every third number is ' + sum;
document.getElementById('addingByThreeText').innerHTML = '5 + 8 + 11 + 14 + 17 + 20 = ' + sum;

var product = 1;

for ( var product3 = 5; product3 <= 20; product3 += 3) {
	product = product * product3;
}

document.getElementById('multiplyByThree').innerHTML = 'The product of every third number is ' + product.toLocaleString();
document.getElementById('multiplyByThreeText').innerHTML = '5 * 8 * 11 * 14 * 17 * 20 = ' + product.toLocaleString();


var x = 3;
var sumB = 3;

while (x < 31) {
	x =  x + 4;
	sumB = x + sumB;
}

document.getElementById('addingByFour').innerHTML = 'The sum of every fourth number from 3 to 31 is ' + sumB;
document.getElementById('addingByFourText').innerHTML = '3 + 7 + 11 + 15 + 19 + 23 + 27 + 31 = ' + sumB;

var p = 3;
var sump = 3;

while (p < 31) {
	p = p + 4;
	sump = p * sump;
}

document.getElementById('multiplyByFour').innerHTML = 'The product of every fourth number from 3 to 31 is ' + sump.toLocaleString();
document.getElementById('multiplyByFourText').innerHTML = '3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 = ' + sump.toLocaleString();


  $( function() {
    $( "#draggable" ).draggable();
  } );


 // var product = 0;

// var addByThree;
// var sum = 0;
// var product = 1;

// for (addByThree = 5; addByThree <= 20; addByThree += 3) {
// 	sum = sum + addByThree;
// 	product = product * addByThree;
// }

//  document.getElementById("addingByThree").innerHTML = 'The sum of every third number from 5 to 20 is ' + sum + '.';
// document.getElementById("addingByThreeText").innerHTML = '5 + 8 + 11 + 14 + 17 + 20 = ' + sum;
//  document.getElementById("multiplyByThree").innerHTML = 'The product of every third number from 5 to 20 is ' + product + '.';
// document.getElementById("multiplyByThreeText").innerHTML = '5 * 8 * 11 * 14 * 17 * 20 = ' + product;