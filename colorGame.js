var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var heading = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i< modeButtons.length; i++)
{
	modeButtons[i].addEventListener("click",function(){
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent === "Easy"){
    	numSquares = 3;
    }
    else
    {
    	numSquares = 6;
    }
    reset();

    //figure how many squares to show
    //pick new colors
    //pick a new pickedColor
    //update page to reflect changes

	});
}

function reset(){
colors = generateRandomColors(numSquares);

	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match the picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for (var i=0; i < squares.length; i++)
{
	//Add initial colors to squares
	if(colors[i]){
	squares[i].style.backgroundColor = colors[i];
}
else
{
	sqaures[i].style.backgroundColor = "none"
}
}

heading.style.background="steelblue";
messageDisplay.textContent="";
}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
//     numSquares =3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 	  if(colors[i])	{
// 	  	squares[i].style.backgroundColor = colors[i];
// 	  }
// 	  else
// 	  {
// 	  	squares[i].style.display = "none";
// 	  }
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares=6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 	  	squares[i].style.backgroundColor = colors[i];
// 	  	squares[i].style.display = "block";
// 	  }
// });

resetButton.addEventListener("click", function()
{
	//generate new colours
	colors = generateRandomColors(numSquares);

	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match the picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    for (var i=0; i < squares.length; i++)
{
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
}

heading.style.background="steelblue";
messageDisplay.textContent="";

})

colorDisplay.textContent = pickedColor;

for (var i=0; i < squares.length; i++)
{
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//Add click listeners to squares
	squares[i].addEventListener("click",function()
	{
	// Grab Color of clicked square
	var clickedColor = this.style.backgroundColor;
	// Compare color to pickedColor
	if(clickedColor === pickedColor)
	{
		messageDisplay.textContent="Correct";
		changeColors(clickedColor);
		heading.style.backgroundColor = clickedColor;
		reset.textContent= "PLAY AGAIN? " ;

	}
	else
	{
		this.style.backgroundColor = "#232323"
		messageDisplay.textContent="Try Again";
	}
	});
}

function changeColors(color) {
	//Loop through all squares to change
	// each color to match given color
   for (var i=0; i < squares.length; i++)
   {
   	squares[i].style.backgroundColor=color;
   }

}

function pickColor()
{


	var  random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	// Make an array. Add num random colors to the array and retur
	var arr = []
	for( var i=0; i<num; i++)
	{
      arr.push(randomColor());
	}
	// Return the array at the end
	return arr;


}

function randomColor(){
	// Pick a red from 0 - 255
	  var r =   Math.floor(Math.random() * 256);
	  var g =   Math.floor(Math.random() * 256);
	  var b =   Math.floor(Math.random() * 256);

	// Pick a green from 0 - 255
	// Pick a blue from 0 - 255

     return "rgb(" + r + ", " + g + ", " + b + ")";
}