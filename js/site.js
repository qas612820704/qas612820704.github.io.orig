$(function() {
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  var once_flag = {};
  once_flag.timeline = {};
  $(window).scroll(function() {
    // var navbar_opacity = $(window).scrollTop() / 250;
    // if (navbar_opacity > 1)
    //   navbar_opacity = 1
    // $('.navbar-fixed').css('opacity', navbar_opacity);
    var bottom_of_window = $(window).scrollTop() + $(window).height(); 

    var begin_text_opacity = 1 - $(window).scrollTop() / 250;
    if (begin_text_opacity < 0)
      begin_text_opacity = 0;
    // $('div.begin-text>p').css('opacity', begin_text_opacity);
    if ( $(window).scrollTop() > $('#home').outerHeight() / 9 ) {
      $('.begin-text').animate({
        top: '-50%',
      }, 2000);
    }

    $('.self-intro').each( function(){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 150;
      
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},500);
      }
    });
    var $showMoreBtnAuto = $('.showMoreBtnAuto');
    if ( typeof once_flag.timeline.length === 'undefined'
      || ($('.showMoreBtnAuto').length > once_flag.timeline.length))  {
      $showMoreBtnAuto.each(function(index) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight()+100;
        if( !once_flag.timeline[index]) {
          if( bottom_of_window > bottom_of_object ) {
            $(this).click();
            once_flag.timeline[index] = true;
          }
        }
      });
    }
    if ( !once_flag.skill) {
      var top_of_skill = $('#skill').offset().top + 200;
      if( bottom_of_window > top_of_skill ) {
        $('.score').each(function(index) {
          $('.rank').eq(index).animate({width:$(this).attr('score')+'0%'}, 1500);
        });
        once_flag.skill = true;
      }
    }
  });
  $('.link').click(function() {
    var $scrollTop = $($(this).attr('scrollTo'));
    $('html, body').stop().animate({
        scrollTop: $scrollTop.offset().top,
    }, 2000);
  });
});
