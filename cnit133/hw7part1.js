var box = document.querySelector('body');

//Background Style

let backgroundUpdate = document.querySelector('#changeBackgroundColor');
backgroundUpdate.addEventListener("click", backgroundChange);

function backgroundChange (event) {
	let radioButton = event.target.defaultValue;
	if (radioButton == "yellow") {
		box.className = "backgroundColorYellow";
	} else if (radioButton == "tomato") {
		box.className = "backgroundColorTomato";
	} else if (radioButton == "limegreen") {
		box.className = "backgroundColorLimeGreen";
	}
}

// Font Size

let sizeOfFont = document.querySelector('#fontSize');
sizeOfFont.addEventListener('click', updateFont);

function updateFont(event){
	let buttonFont = event.target.innerHTML;
	if (buttonFont == "Small") {
		box.className = "smallFontSize";
	} else if (buttonFont == "Medium") {
		box.className = "mediumFontSize";
	} else if (buttonFont == "Large") {
		box.className = "largeFontSize";
	}
}

// Familia Font

let familiaFont = document.querySelector('#fontFamilia');
familiaFont.addEventListener('change', familiaFontUpdate);

function familiaFontUpdate (event) {
	let selectiones = event.target.value;
	if (selectiones == "times new roman") {
		if(!box.classList.contains('fontFamiliaTimesNewRoman')) {
			box.classList.remove("fontFamiliaCourier");
			box.classList.toggle("fontFamiliaTimesNewRoman");
		}
	} else if (selectiones == "courier") {
		if(!box.classList.contains("fontFamiliaCourier")) {
			box.classList.remove("fontFamiliaTimesNewRoman");
			box.classList.toggle("fontFamiliaCourier");
		}
	} else {
		box.className = "normalFontFamilia";
	}
}

// Style of Font

let styleOfFont = document.querySelector('#fontStyle');
styleOfFont.addEventListener('click', fontStyleUpdate);

function fontStyleUpdate(event) {
	let buttonOfFont = event.target.innerHTML;
	if (buttonOfFont == "Italic") {
		box.className = "italicFontStyle";
	} else if (buttonOfFont == "Normal") {
		box.className = "normalFontStyle";
	}
}

// Weight of Font

let weightOfFont = document.querySelector('#fontWeight');
weightOfFont.addEventListener('click', updateWeightOfFont);

function updateWeightOfFont(event) {
	let weightOfFont = event.target.innerHTML;
	if (weightOfFont == "Bolder") {
		box.className = "fontWeightBolder";
	} else if (weightOfFont == "100") {
		box.className = "lightFontWeight";
	}
}



