let mainDiv = document.getElementById("main");
let gameDiv = document.getElementById("game");
let numbersPre = document.getElementById("numbers");
let index = 0;
let answers = "";

function toDecimal(a, b, c, d, e, f, g) {
	return a * 64 + b * 32 + c * 16 + d * 8 + e * 4 + f * 2 + g * 1;
}

function generateNumbers(index) {
	let str = "";
	let count = 0;
	for (let n = 0; n < 100; n++) {
		let bin = n.toString(2);
		let binstr = "0000000".substring(bin.length) + bin;
		let dec = parseInt(binstr, 2);
		let selChar = binstr[binstr.length - (index + 1)];
		
		if (selChar == "1") {
			str += `${dec} `;
			if (count >= 5) str += '\n';
			count = (count + 1) % 6;
		}
	}

	return str;
}


function display() {
	numbers.innerText = generateNumbers(index);
}

function start() {
	mainDiv.style = "display: none;";
	gameDiv.style = "display: initial;";
	display();
}


function answer(yes) {
	answers += yes ? "1" : "0";
	index++;

	if (index <= 6) {
		display();
	} else {
		alert(finalAnswer());
	}
}

function finalAnswer() {
	return parseInt(answers.split("").reverse().join(""), 2);
}
