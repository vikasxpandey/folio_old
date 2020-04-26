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

    //  RELLAX

    var rellax = new Rellax('.rellax');
    
});