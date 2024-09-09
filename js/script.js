$(function(){
  $('.button').click(function(){
    $('#work, header').fadeIn();
    $('#work div section, header').css({'display':'block'});
    $('.intro').fadeOut();
  })
  $('header h1').click(function(){
    $('.intro').fadeIn();
    $('#work, header').hide();
  })
})
// 인트로 클릭 시 화면전환

$(function(){
  $('.b1').mouseenter(function(){
    $('.b1').attr({'src':'img/workBanner1-1.jpg'});
  })
  $('.b1').mouseleave(function(){
    $('.b1').attr({'src':'img/workBanner1.png'});
  })
})
// b1 마우스오버

$(function(){
  $('.b2').mouseenter(function(){
    $('.b2').attr({'src':'img/workBanner2-1.jpg'});
  })
  $('.b2').mouseleave(function(){
    $('.b2').attr({'src':'img/workBanner2.png'});
  })
})
// b2 마우스오버

$(function(){
  $('.b3').mouseenter(function(){
    $('.b3').attr({'src':'img/workBanner3-1.jpg'});
  })
  $('.b3').mouseleave(function(){
    $('.b3').attr({'src':'img/workBanner3.png'});
  })
})
// b3 마우스오버

$(function(){
  $('.b4').mouseenter(function(){
    $('.b4').attr({'src':'img/workBanner4-1.jpg'});
  })
  $('.b4').mouseleave(function(){
    $('.b4').attr({'src':'img/workBanner4.png'});
  })
})
// b4 마우스오버

$(function(){
  $('.b5').mouseenter(function(){
    $('.b5').attr({'src':'img/workBanner5-1.jpg'});
  })
  $('.b5').mouseleave(function(){
    $('.b5').attr({'src':'img/workBanner5.png'});
  })
})
// b5 마우스오버

$(function(){
  $('.b6').mouseenter(function(){
    $('.b6').attr({'src':'img/workBanner6-1.jpg'});
  })
  $('.b6').mouseleave(function(){
    $('.b6').attr({'src':'img/workBanner6.png'});
  })
})
// b6 마우스오버

$(function(){
  $('.b7').mouseenter(function(){
    $('.b7').attr({'src':'img/workBanner7-1.jpg'});
  })
  $('.b7').mouseleave(function(){
    $('.b7').attr({'src':'img/workBanner7.png'});
  })
})
// b7 마우스오버

$(function(){
  $('header ul li:nth-child(2)').click(function(){
    $('#work, #work_web').show();
    $('#work_video, #work_2d, #work_profile, .info, #web1, #web2, #vid1, #vid2, #vid3, #td1, #td2').hide();
    $('.web').css({'margin-bottom':'0'});
  })
  $('header ul li:nth-child(3)').click(function(){
    $('#work, #work_video').show();
    $('#work_web, #work_2d, #work_profile, .info, #web1, #web2, #vid1, #vid2, #vid3, #td1, #td2').hide();
    $('.vid').css({'margin-bottom':'0'});
  })
  $('header ul li:nth-child(4)').click(function(){
    $('#work, #work_2d').show();
    $('#work_video, #work_web, #work_profile, .info, #web1, #web2, #vid1, #vid2, #vid3, #td1, #td2').hide();
    $('.two').css({'margin-bottom':'0'});
  })
  $('header ul li:last-child').click(function(){
    $('#work_profile').show();
    $('#work, .info, #web1, #web2, #vid1, #vid2, #vid3, #td1, #td2').hide();
    $('#work_profile').css({'display':'flex'});
  })
  $('header ul li:first-child').click(function(){
    $('#work, #work_web, #work_video, #work_2d').show();
    $('#work_profile, .info, #web1, #web2, #vid1, #vid2, #vid3, #td1, #td2').hide();
    $('.work_all').scrollTop(0);
    $('.web, .vid').css({'margin-bottom':'4.5%'});
  })
})
// 선택한 탭의 배너만 보이게

$(function(){
  $('header ul li a').click(function(){
    $(this).parent().addClass('underline').siblings().removeClass('underline');
  })
})
// 선택한 탭에 밑줄

$(function(){
  $('.b1').click(function(){
    $('.info, #web1').fadeIn();
    $('#work').fadeOut();
  })
  $('.back').click(function(){
    $('.info, #web1').fadeOut();
    $('#work').fadeIn();
  })
})
// web1 info on/off

$(function(){
  $('.b2').click(function(){
    $('.info, #web2').fadeIn();
    $('#work').fadeOut();
  })
  $('.back').click(function(){
    $('.info, #web2').fadeOut();
    $('#work').fadeIn();
  })
})
// web2 info on/off



$(function(){
  $('.b3').click(function(){
    $('.info, #vid1').fadeIn();
    $('#work').fadeOut();
  })
  $('.back').click(function(){
    $('.info, #vid1').fadeOut();
    $('#work').fadeIn();
  })
})
// vid1 info on/off

$(function(){
  $('.b4').click(function(){
    $('.info, #vid2').fadeIn();
    $('#work').fadeOut();
  })
  $('.back').click(function(){
    $('.info, #vid2').fadeOut();
    $('#work').fadeIn();
  })
})
// vid2 info on/off

$(function(){
  $('.b5').click(function(){
    $('.info, #vid3').fadeIn();
    $('#work').fadeOut();
  })
  $('.back').click(function(){
    $('.info, #vid3').fadeOut();
    $('#work').fadeIn();
  })
})
// vid3 info on/off



$(function(){
  $('.b6').click(function(){
    $('.info, #td1').fadeIn();
    $('#work').fadeOut();
  })
  $('.back').click(function(){
    $('.info, #td1').fadeOut();
    $('#work').fadeIn();
  })
})
// two1 info on/off

$(function(){
  $('.b7').click(function(){
    $('.info, #td2').fadeIn();
    $('#work').fadeOut();
  })
  $('.back').click(function(){
    $('.info, #td2').fadeOut();
    $('#work').fadeIn();
  })
})
// two2 info on/off