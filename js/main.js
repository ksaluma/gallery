// $(document).ready(function() {

//    width = $(".galimg").width(),
//    height = $(".galimg").height(),


// 	if (width > height) {
// 		$('.galimg').addClass('landscape')
// 	}

// 	else { $('.galimg').addClass('landscape')
// 	}

// });

$(document).ready(function() {


  $('.galimg').each(function() {

    var width = $(this).children("img").width(),
        height = $(this).children("img").height();

    if (width < height) {
      $(this).addClass('portrait');
    } 

    else {
      $(this).addClass('landscape');
    }

  });
});


    // if (image.width() < 500) {
    //     $('.work-text').addClass('work-text-small');
    // }


    //   if (width < height) {
    //     $this.addClass('portrait');
    //   } else {
    //     $this.addClass('landscape');