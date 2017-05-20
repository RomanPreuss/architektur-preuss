(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();

    $(window).scroll(function() {
      if ($("#navigation").offset().top > 50) {
          $('#navigation').removeClass('transparent-navbar');
          $('#navigation').addClass('affix');
      } else {
        $('#navigation').removeClass('affix');
        $('#navigation').addClass('transparent-navbar');
      }
    });

    $(window).on('resize', function(){
       $('#logo-img').height( $('#office-text').height() );
    }).trigger('resize'); //on page load
  }); // end of document ready
})(jQuery); // end of jQuery name space
