document.addEventListener("DOMContentLoaded",function(){

	initializeClock(); // set the number of seconds
	// setInterval(updateMyClock,1000, "myHours");
	// setInterval(updateMyClock,1000, "myMinutes");
	setInterval(updateMyClock,1000, "mySeconds");
});

function updateMyClock(ElementId){
	var ElId = document.getElementById(ElementId) // get element
	ElId.innerText = parseInt(ElId.innerText)+1;
	var hoursRight = 24;
	var minutesRight = 60;
	var secondsRight = 62;

	if (parseInt(ElId.innerText)+1 == secondsRight) {
		ElId.innerText = 1;
	};

}






function initializeClock(){
	var myDate = new Date();
	document.getElementById("myHours").innerText = myDate.getHours();
	document.getElementById("myMinutes").innerText = myDate.getMinutes();
	document.getElementById("mySeconds").innerText = myDate.getSeconds();
var ElId = document.getElementById("mySeconds") // get element
ElId.innerText = 55;
}





// 1) Capture date (w/hours, minutes & seconds)
// 2) Declare var's & assign time values to var's
// 3) Capture each .innerText/id
// 4) Replace each .innerText w/time vars

// document.getElementById("demo") = Function(){


