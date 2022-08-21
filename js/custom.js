(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);


// timeline
(function () {
  const items = document.querySelectorAll(".timeline-section--experience .li--experience");

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function slideIn() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("slide-in");
      } else {
        items[i].classList.remove("slide-in");
      }
    }
  }

  window.addEventListener("load", slideIn);
  window.addEventListener("scroll", slideIn);
  window.addEventListener("resize", slideIn);
})();


// Profiles
(function () {
  // add click animation to social links
  var socials = document.querySelectorAll("[class*=social_lnk]");
  var i = socials.length;
  var cls = "-clicked";
  while (i--) {
    socials[i].addEventListener("click", function(e) {
      var target = e.target;
      var lnk = (target.classList.contains("social_lnk")) ? target : target.parentElement;
      lnk.classList.add(cls);

      // Allow time for animation to complete then remove
      // Simpler, but less reliable, than testing for animation-end cross-browser
      setTimeout(function() {
        lnk.classList.remove(cls);
      }, 300);
    }, false);
  }
})();