$('document').ready(function(){
  console.log('ready');
  const initialWindowSize = $(window).width();
  validateWindowSize(initialWindowSize);
  $(window).resize(function(){
    validateWindowSize($(window).width());
  });
});

function validateWindowSize(windowWidth){
  if (windowWidth > 991){
    $('.thirdPage').hover(function(){
      $('.secondPage').hide();
    });
    $('.starterPage').hover(function(){
      $('.secondPage').show();
    });
  }else{

  }
}
