jQuery(document).ready(function($){
	  $(".homepage-slides").owlCarousel({
	  	items: 1,
	  	loop: true,
	  	nav: true,
	  	dots: true,
	  	navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
	  	autoplay: false,
		smartSpeed: 1000
	  });
    $(".team-list").owlCarousel({
      items: 3,
      margin: 30,
      loop: true,
      nav: false,
      dots: true,
      autoplay: false,
    });

    $(".testimonial-list").owlCarousel({
      items: 3,
      margin: 30,
      loop: true,
      nav: false,
      dots: true,
      autoplay: false,
    });

    $(".logo-carousel").owlCarousel({
      items: 5,
      margin: 30,
      loop: true,
      nav: false,
      dots: false,
      autoplay: false,
    });
    
	  $('#web-design-skillbar').circleProgress({
    value: 0.90,
    size: 270,
    thickness: 2,
    fill: '#0ABBC1',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(90 * progress) + '<i>%</i>');
  });

  $('#graphic-design-skillbar').circleProgress({
    value: 0.95,
    size: 270,
    thickness: 2,
    fill: '#0ABBC1',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(95 * progress) + '<i>%</i>');
  });

  $('#digital-marketing-skillbar').circleProgress({
    value: 0.84,
    size: 270,
    thickness: 2,
    fill: '#0ABBC1',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.skill-count-no').html(Math.round(84 * progress) + '<i>%</i>');
  });

  $(".porfolio-filter li").on('click', function() {
    $(".porfolio-filter li").removeClass("active");
    $(this).addClass("active");

    var filterValue = $(this).attr("data-filter");

    $(".portfolio-list").isotope({
    filter: filterValue,
    masonry: {
      columnWidth: '.col-md-3',
      horizontalOrder: false
    }

 });

  });

 $(".portfolio-list").isotope({
  layoutMode: 'masonry',
  masonry: {
    columnWidth: '.col-md-3',
    horizontalOrder: false
  }
 });

});