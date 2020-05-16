 // Wait for window load
 $(window).load(function() {
 	// Animate loader off screen
 	$(".loader-main").fadeOut("slow");
 	$("._footer-container").fadeIn();
});

// image click function
$('.toggle').click(function(){
	$('.avatar-main').toggleClass('on');
    $('.avatar-title').toggleClass('on');
    $('.quote').toggleClass('on');
});