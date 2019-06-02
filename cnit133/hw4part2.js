// Interest rate from 5% to 10%

for (let interestRate = 5; interestRate <=10; interestRate++) {
	document.write('<table><tr><th>Year</th><th>Amount on deposit</th><th>Interest Rate</th></tr>');

	for (let numberOfYears = 1; numberOfYears <= 10; numberOfYears++) {
		let accumulatedMoney = 0;

		// A = P(1 + r)^n
		// accumulatedMoney = 1000 (1 + interestRate/100)^numberOfYears

		accumulatedMoney = 1000 * (Math.pow(1 + interestRate/100, numberOfYears));
		// accumulatedMoney = accumulatedMoney.toFixed(2);
		var o, fn;
		o = {style: "currency", currency: "USD"};
		fn = accumulatedMoney.toLocaleString("en", o);
		document.write('<tr><td>'+numberOfYears+'</td><td>'+fn+'</td><td>'+interestRate/100+'</td></tr>');
	}
	document.write('</table>');
}