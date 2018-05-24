(function($){
  $(function(){
    $('.modal').modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .1 // Opacity of modal background
    });
    $('#modal1').modal('open');
    $("body").css("overflow","auto");
    $(".modal-overlay").remove();
  }); // end of document ready
})(jQuery); // end of jQuery name space
