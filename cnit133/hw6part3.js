var currentDate = new Date();
document.writeln( "Using toString() method: " + currentDate.toString() + 
"<br> Using toLocaleString() method: " + currentDate.toLocaleString() +
"<br> Using toUTCString() method: " + currentDate.toUTCString() + 
"<br> PST/PDT and UTC difference in hours: " + currentDate.getTimezoneOffset() / 60 +
"<br> EST and UTC difference in hours: " + ((currentDate.getTimezoneOffset() / 60) - 3) +
"<br> EDT and UTC difference in hours: " + ((currentDate.getTimezoneOffset() / 60) - 2));
