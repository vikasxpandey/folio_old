$(function() {

    // IE CHECK

    var ua = window.navigator.userAgent;
    var trident = ua.indexOf('Trident/');
    var msie = ua.indexOf('MSIE ');

    if (msie > 0 || trident > 0) {
        $("[data-aos^=fade][data-aos^=fade]").removeAttr('data-aos');
     } else {
         AOS.init();
     }

    //  LAX

    lax.setup();

	function updateLax() {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

    window.requestAnimationFrame(updateLax)
    
    // VIDEO

    $('#bg-video').get(0).play();

    // CONTACT CLICKER

    $('.contact-clicker').on('click', function() {
        console.log('1');
        Tawk_API.toggle();
    });

    // NAVBAR MENU HIDE

    $("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse').collapse('hide');
    });

    // DATE

    $('.current-year').html(new Date().getFullYear());
});