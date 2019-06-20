// select some elements
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var goalDisplay = document.querySelector("#goalDisplay");
var startButton = document.querySelector("#newGame");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var squares = document.querySelectorAll(".square");

var n = 6;
var h1BackgroundDefault = "steelblue";

colors = getColors(n);
goal = colors[getRandom(n) - 1];
goalDisplay.textContent = goal;
h1.style.backgroundColor = h1BackgroundDefault;
messageDisplay.textContent = "";

easyButton.addEventListener("click", function() {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");

	n = 3;
	colors = getColors(n);
	goal = colors[getRandom(n) - 1];
	goalDisplay.textContent = goal;
	h1.style.backgroundColor = h1BackgroundDefault;
	messageDisplay.textContent = "";

	for (var i = 0; i < 3; i++)
		squares[i].style.backgroundColor = colors[i];
	for(var i = 3; i < 6; i++)
		squares[i].style.display = "none";
});

hardButton.addEventListener("click", function() {
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");

	n = 6;
	colors = getColors(n);
	goal = colors[getRandom(n) - 1];
	goalDisplay.textContent = goal;
	h1.style.backgroundColor = h1BackgroundDefault;
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++)
		squares[i].style.backgroundColor = colors[i];
	for(var i = 3; i < 6; i++)
		squares[i].style.display = "block";
});

startButton.addEventListener("click", function() {
	colors = getColors(n);
	goal = colors[getRandom(n) - 1];
	goalDisplay.textContent = goal;
	h1.style.backgroundColor = h1BackgroundDefault;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";

	for (var i = 0; i < squares.length; i++)
		squares[i].style.backgroundColor = colors[i];
});

for (var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === goal)
		{
			messageDisplay.textContent = "Correct!";
			// change all squares to the given color
			for (var i = 0; i < n; i++)
				squares[i].style.backgroundColor = clickedColor;

			// and the heading
			h1.style.backgroundColor = clickedColor;

			// and the button
			startButton.textContent = "Play again?";
		}
		else
		{
			messageDisplay.textContent = "Try again!";
			this.style.backgroundColor = body.style.backgroundColor;
		}
	});
}

// returns a random integer between 1 and n (inclusive)
function getRandom(n)
{
	return Math.floor(Math.random() * n + 1);
}

// returns an array of n random colors
function getColors(n)
{
	var colors = [];
	for(var i = 0; i < n; i++)
	{
		r = getRandom(255);
		g = getRandom(255);
		b = getRandom(255);
		colors[i] = "rgb(" + r + ", " + g + ", " + b + ")";
	}

	return colors;
}