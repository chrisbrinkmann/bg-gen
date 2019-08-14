var _ = require('lodash-core')

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

/*
Display initial background in 'h3'-
HTMLElement.style only returns the inline style,
We can use window.getComputedStyle to capture the style from the external stylesheet
ALSO NOTE that we reference the background-image css property
by writing backgroundImage (no dash, camelCase)
*/
css.textContent = window.getComputedStyle(body).backgroundImage + ";";

// sets the colors for the background gradient image & displays values in 'h3'
function setGradient() {
	
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// returns a random hex color value
function getRandomHexColor(){
	/*
	The value returned from math.random().toString(16) is a hex decimal
	Since toString will cut off any trailing 0's, we pad with extra on the right
	Slicing 2,8 will cut off the leading "0." as well as any extra digits or
	"0"s from the padding
	*/
	return "#" + (Math.random().toString(16) + "0000000").slice(2, 8);
}

// randomizes both gradient colors and applies to background & inputs
function randomizeGradient(){

	color1.value = getRandomHexColor();
	color2.value = getRandomHexColor();

	setGradient();
}

// event listeners
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomizeGradient);
