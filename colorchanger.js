var bodyone = document.querySelector("body");
var button = document.querySelector("button");
var isPurple = false;

// button.addEventListener("click", function()
// {
//  if(isPurple){


//  bodyone.style.background = "white";
// }
// else
// {
// 	 bodyone.style.background = "purple";
// }
// isPurple = !(isPurple);
// })


button.addEventListener("click", function()
{
	bodyone.classList.toggle("purple");

})

