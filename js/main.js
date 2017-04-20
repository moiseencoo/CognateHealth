
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
	navigation: true,
	mouseDrag: true,
	itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,1],
    itemsMobile : [479,1]
});