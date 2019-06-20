// select some elements
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var h1BackgroundDefault = "steelblue";

var messageDisplay = document.querySelector("#message");
var goalDisplay = document.querySelector("#goalDisplay");
var squares = document.querySelectorAll(".square");

var startButton = document.querySelector("#newGame");
var modeButtons = document.querySelectorAll(".modeSwitch");

var n = 6;
init(n);

function init(n) {
	setupButtons();
	setupSquares();

	reset(n);
}

function setupButtons() 
{
	for (var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? n = 3: n = 6;
			
			reset(n);
		});
	}

	startButton.addEventListener("click", function() {
		reset(n);
	});
}

function setupSquares()
{
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === goal)
			{
				messageDisplay.textContent = "Correct!";
				for (var i = 0; i < n; i++)
					squares[i].style.backgroundColor = clickedColor;
				h1.style.backgroundColor = clickedColor;
				startButton.textContent = "Play again?";
			}
			else
			{
				messageDisplay.textContent = "Try again!";
				this.style.backgroundColor = body.style.backgroundColor;
			}
		});
	}
}

function reset(n) {
	colors = getColors(n);
	goal = colors[getRandom(n) - 1];
	goalDisplay.textContent = goal;
	h1.style.backgroundColor = h1BackgroundDefault;
	messageDisplay.textContent = "";
	startButton.textContent = "New Colors";

	for (var i = 0; i < n; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	for(var i = n; i < 6; i++)
		squares[i].style.display = "none";

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