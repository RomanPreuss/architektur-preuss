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

    $("#showMaps").click(function(){
      $("#maps-placeholder").remove();
      var iframe = document.createElement('iframe');
      iframe.className = 'responsive-map';
      iframe.frameBorder = 0;
      iframe.style = 'border:0';
      iframe.allowFullscreen = true;
      iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1321.7645564600211!2d9.205474476095732!3d48.50392087193681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799f2059fe8dda9%3A0x937454a575d395c2!2sArchitekturb%C3%BCro+Preuss!5e0!3m2!1sde!2sus!4v1494515053904';
      $("#maps").append(iframe);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
