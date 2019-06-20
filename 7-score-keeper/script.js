var button1 = document.querySelector("#p1");
var button2 = document.querySelector("#p2");
var reset   = document.querySelector("#reset");

var score1Display  = document.querySelector("#score1Display");
var score2Display  = document.querySelector("#score2Display");
var score1 = Number(score1Display.textContent);
var score2 = Number(score2Display.textContent);

var targetDisplay  = document.querySelector("#target");
var targetInput = document.querySelector("#targetInput");
var target = Number(targetDisplay.textContent);

var gameOver = false;

button1.addEventListener("click", function(){
	if (!gameOver)
	{
		score1Display.textContent++;
		score1++;
	}

	if (score1 == target)
	{
		score1Display.classList.add("won");
		gameOver = true;
	}
});

button2.addEventListener("click", function(){
	if (!gameOver)
	{
		score2Display.textContent++;
		score2++;
	}

	if (score2 == target)
	{
		score2Display.classList.add("won");
		gameOver = true;
	}

});

function resetGame() {
	score1 = 0;
	score2 = 0;
	score1Display.textContent = 0;
	score2Display.textContent = 0;

	score1Display.classList.remove("won");
	score2Display.classList.remove("won");

	gameOver = false;
}

reset.addEventListener("click", function() {
	resetGame();
});

targetInput.addEventListener("change", function(){
	target = targetInput.value;
	targetDisplay.textContent = target;

	resetGame();
});