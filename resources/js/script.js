$(document).ready(function() {
	navigationScroll();
});



function dropdownMenu() {
		var x = document.getElementById("dropdownClick");
		if (x.className === "topnav") {
			x.className += " responsive";
			/*change topnav to topnav.responsive*/
		} else {
			x.className = "topnav";
		}
}

/* Navigation scroll */
var navigationScroll = function(){
    $(function() {
       $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }

       });
    });
};