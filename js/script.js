const main_heading_textArr = ["Food For All", "Everyone Deserves Food", "Stop Food Wastage" ];
var mainHeadingTicker;
var mainHeadingTicker_ticks = 0;
const initialWindowSize = $(window).width();

$('document').ready(function(){

  validateWindowSize(initialWindowSize);
  cycleHeadingText(main_heading_textArr);

  $('.contact').hide();

  $(window).resize(function(){
    validateWindowSize($(window).width());
  });
  $('#navItem_contact').click(function(e){
    // navigate((this.id == "navItem_contact") ?  "home" : "contact" , "contact");
    $('.contact').show();
    $('.home').hide();
  });
  $('#navItem_home').click(function(e){
    // navigate((this.id == "navItem_home") ?  "home" : "contact" , "home");
    $('.home').show();
    $('.contact').hide();
  });
  $('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click(); //bootstrap 3.x by Richard
    $('.navbar-toggler').click(); //bootstrap 4.x
    $('#navbar-toggler_icon').click(); //bootstrap 4.x
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
    $('.thirdPage').off();
    $('.starterPage').off();
  }
}

function cycleHeadingText(stringArr){
  mainHeadingTicker = setInterval(function(){
    $('.mainHeading').text(stringArr[mainHeadingTicker_ticks]);
    if(mainHeadingTicker_ticks == stringArr.length - 1){
      mainHeadingTicker_ticks = 0;
    }else{
      mainHeadingTicker_ticks = mainHeadingTicker_ticks + 1;
    }

  }, 3000);
}

function DEVOVERRIDE(){
  // working on contactpage
  $('.home').hide();
  $('.contact').show();
}

function navigate(from, to){
  console.log(from, to);
  if (from == "home"){
    switch (to) {
      case to == "contact":
      console.log('dw');
      $('.home').show();
      $('.contact').hide();
        break;
      default:
      $('.home').show();
      $('.contact').hide();
    }
  } else if (from == "contact"){
    switch (to) {
      case to == "home":
      $('.home').show();
        $('.contact').hide();
        break;
      default:
      $('.contact').show();
      $('.home').hide();
    }
  }
}
