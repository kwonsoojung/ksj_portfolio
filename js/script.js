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
  $('header ul li:nth-child(2)').click(function(){
    $('#work, #work_web').fadeIn();
    $('#work_video, #work_2d, #work_profile, .info, #web1, #web2, #vid1, #vid2, #vid3, #td1, #td2').fadeOut();
    $('.web').css({'margin-bottom':'0'});
  })
  $('header ul li:nth-child(3)').click(function(){
    $('#work, #work_video').fadeIn();
    $('#work_web, #work_2d, #work_profile, .info, #web1, #web2, #vid1, #vid2, #vid3, #td1, #td2').fadeOut();
    $('.vid').css({'margin-bottom':'0'});
  })
  $('header ul li:nth-child(4)').click(function(){
    $('#work, #work_2d').fadeIn();
    $('#work_video, #work_web, #work_profile, .info, #web1, #web2, #vid1, #vid2, #vid3, #td1, #td2').fadeOut();
    $('.two').css({'margin-bottom':'0'});
  })
  $('header ul li:last-child').click(function(){
    $('#work_profile').fadeIn();
    $('#work, .info, #web1, #web2, #vid1, #vid2, #vid3, #td1, #td2').fadeOut();
    $('#work_profile').css({'display':'flex'});
  })
  $('header ul li:first-child').click(function(){
    $('#work, #work_web, #work_video, #work_2d').fadeIn();
    $('#work_profile, .info, #web1, #web2, #vid1, #vid2, #vid3, #td1, #td2').fadeOut();
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