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

    lax.setup({
        breakpoints: { small: 0, large: 800 }
    });

	function updateLax() {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
});