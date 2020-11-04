$(document).ready(function () {
    $(".tabz .html").mouseover(function(event) {
        $("#tabContainer").addClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });
    $(".tabz .css").mouseover(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").addClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });
    $(".tabz .js").mouseover(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").addClass("jshovered");
    });
    $("#tabContainer").mouseleave(function(event) {
        $("#tabContainer").removeClass("htmlhovered");
        $("#tabContainer").removeClass("csshovered");
        $("#tabContainer").removeClass("jshovered");
    });

});

$( document ).ready(function() {
     /*$('#blogFeed').html('<h3>Latest Articles</h3><iframe style="width: 100%; height: 280px; overflow: hidden;" src="https://html-online.com/articles/frici_blog_feed.php?numberposts=10" scrolling="no">Iframes not supported</iframe>');*/	
}); 

//========================
//PRELOADER
//========================
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow');
    // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
})
//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
    mousescrollstep: 70,
    cursorcolor: "#ea9312",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none",
});


//========================
//SMOOTHSCROLL
//========================
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//========================
//NAVBAR
//========================
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 40) {
                $('.navbar')
                .removeClass('animated fadeOutUp')
                .addClass('animated fadeInDown')
                .fadeIn();
                
            } else {
                $('.navbar')
                .removeClass('animated fadeInDown')
                .addClass('animated fadeOutUp')
                .fadeOut();
            }
        });
    });

});
  }(jQuery));

//========================
//icon hover effect
//========================
$('#services img').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('animated pulse') })