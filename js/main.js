
$(window).on('load resize', function() {

	var width = $('.galimg').width();
	var height = $('.galimg').height();


  $('.galimg').find('img').each(function() {


    if (width < height) {
      $(this).addClass('portrait')
    } 

    else {
      $(this).addClass('landscape')
    }

  });

  $('img').each(function() {

  	$(this).height(width);

  });

});

