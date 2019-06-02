	$( function() {
    $( document ).tooltip();
  } );

function saleComission() {
	// declare local variables
	var item1;
	var item2;
	var item3;
	var item4;

	item1 = parseInt(document.getElementById("item1").value);
	item2 = parseInt(document.getElementById("item2").value);
	item3 = parseInt(document.getElementById("item3").value);
	item4 = parseInt(document.getElementById("item4").value);

	//Table inputs only positive numbers

	if (Number.isNaN(item1) || (Number.isNaN (item2)) || (Number.isNaN (item3)) || (Number.isNaN (item4)) || item1 < 0 || item2 < 0 || item3 < 0 || item4 < 0) {
		alert("# of Items Sold must be filled out with positive intergers");
	}
	else {
		document.getElementById("item1sold").value = item1;
		document.getElementById("item2sold").value = item2;
		document.getElementById("item3sold").value = item3;
		document.getElementById("item4sold").value = item4;

		var item1total;
		var item2total;
		var item3total;
		var item4total;


		item1total = item1 * 239.99;
		item2total = item2 * 129.75;
		item3total = item3 * 99.95;
		item4total = item4 * 350.89;

		document.getElementById("item1total").value = item1total.toFixed(2);
		document.getElementById("item2total").value = item2total.toFixed(2);
		document.getElementById("item3total").value = item3total.toFixed(2);
		document.getElementById("item4total").value = item4total.toFixed(2);

		var total;

		total = item1total + item2total + item3total + item4total;
		document.getElementById("totalSold").value = total.toFixed(2);

		var earnings;

		earnings = 200 + (total * .09);
		document.getElementById("totalEarnings").value = earnings.toFixed(2);


	}
}