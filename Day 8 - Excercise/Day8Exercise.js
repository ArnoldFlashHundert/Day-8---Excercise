// 1) Wait for the DOM (html page) to load
// 2) Listen for a <Click> event on h1
// 3) Console.log the text inside the h1 tag

window.addEventListener("DMContentLoaded", function(){

	document.getElementById("demo") = Function(){
		// document.getElementById("demo").innertext = "I told you I would change!";
		document.querySelector("demo").addEventListener("click"),function(){
			console.log("You clicked on my h1")
			// console.log(document.getElementById("demo").innertext);
		}
		
	}
});

