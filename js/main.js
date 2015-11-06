$(document).ready(function() {


  $('.galimg').each(function() {


      // var width = $(this).width(),
      //     height = $(this).height();

    var width = $('.galimg').width(500),
        height = $('.galimg').height(500);

    if (width > height) {
      $(this).addClass('landscape');
    } 

    else {
      $(this).addClass('portrait');
    }

  });

});

