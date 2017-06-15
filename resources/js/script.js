//$(document).ready(function() {
//	dropdownMenu();
//});
//
//
//var dropdownMenu = function () {
//	var x = document.getElementById("dropdownClick");
//	if (x.className === "topnav") {
//		x.className += " responsive";
//	} else {
//		x.className = "topnav";
//	}
//}

function dropdownMenu() {
		var x = document.getElementById("dropdownClick");
		if (x.className === "topnav") {
			x.className += " responsive";
			/*change topnav to topnav.responsive*/
		} else {
			x.className = "topnav";
		}
}