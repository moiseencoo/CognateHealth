
$('#main-slider').owlCarousel( {

			  //Pagination
	      pagination : true,
	      paginationNumbers: false,
	      mouseDrag : false,
          touchDrag : true,
	 
	    // Responsive
		  items : 1,
		  singleItem: true,
		  autoplay: true
	}
);


$('#officers-slider').owlCarousel( {

			  //Pagination
	      pagination : true,
	      paginationNumbers: false,
	      mouseDrag : true,
          touchDrag : true,
		  autoplay: true,
	 
	    // Responsive
		  items : 2,
		  autoplay: true, 
		  navigation: true,
		  navigationText: false,
		  itemsDesktop : [1199,2],
  		  itemsDesktopSmall : [980,2],
   		  itemsTablet: [768,1],
   		  itemsMobile : [479,1]
	}
);


$('#professionals-slider').owlCarousel({
	items: 4, 
	pagination: false,
	autoplay: true,
	navigation: true,	
	navigationText: false,
	mouseDrag: true,
	itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,1],
    itemsMobile : [479,1]
});

$('#search-icon').click(function(){

	var hiddenInput = $('.hidden-search-input');

	if (hiddenInput.hasClass('active')) {

		hiddenInput.css('width', '0px');
		hiddenInput.removeClass('active');

	} else {

		hiddenInput.css('width', 'auto');
		hiddenInput.addClass('active');

	}

		

});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "105vw";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/* Fixed Navbar Add Class on Scroll */

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".header-nav").addClass("mainColorBg");
    } else {
        $(".header-nav").removeClass("mainColorBg");
    }
});