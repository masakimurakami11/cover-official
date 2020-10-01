$ (function(){
  $('.select-icon-1').click(function(){
    $('.select-bar-space').fadeIn(1000);
    $('.select-bar-1').fadeIn(1000);
    setTimeout(function(){
      $('.select-bar-space').fadeOut(1000);
      $('.select-bar-1').fadeOut(1000);
      },6000);
  });
})

$(function(){
  $(window).load(function(){
    setTimeout(function(){
      $('.top-image-1').fadeOut(3000).animate({'left':'100vw'},{
        duration:3000,
        queue: false
      });
      $('.select-icon-5').css({'color': 'gray'})
      $('.select-icon-6').css({'color': 'black'})
    },3000);
    setTimeout(function(){
      $('.top-image-2').fadeOut(3000).animate({'left':'100vw'},{
        duration:3000,
        queue: false
      });
      $('.top-image-1').css({'z-index':'1'})
      $('.top-image-2').css({'z-index':'8'})
      $('.top-image-3').css({'z-index':'5'})
      $('.top-image-1').fadeIn(0).animate({'left':'0'},{
        duration:3000,
        queue: false
      });
      $('.select-icon-6').css({'color': 'gray'})
      $('.select-icon-7').css({'color': 'black'})
    },6000);
    setTimeout(function(){
      $('.top-image-3').fadeOut(3000).animate({'left':'100vw'},{
        duration:3000,
        queue: false
      });
      $('.top-image-1').css({'z-index':'5'})
      $('.top-image-2').css({'z-index':'1'})
      $('.top-image-3').css({'z-index':'8'})
      $('.top-image-2').fadeIn(0).animate({'left':'0'},{
        duration:3000,
        queue: false
      });
      $('.select-icon-7').css({'color': 'gray'})
      $('.select-icon-5').css({'color': 'black'})
    },9000);
    setTimeout(function(){
      $('.top-image-3').fadeIn(0).animate({'left':'0'},{
        duration:3000,
        queue: false
      });
      $('.top-image-1').css({'z-index':'8'})
      $('.top-image-2').css({'z-index':'5'})
      $('.top-image-3').css({'z-index':'1'})
    },12000);
    setInterval(function(){
      setTimeout(function(){
        $('.top-image-1').fadeOut(3000).animate({'left':'100vw'},{
          duration:3000,
          queue: false
        });
        $('.select-icon-5').css({'color': 'gray'})
        $('.select-icon-6').css({'color': 'black'})
      },3000);
      setTimeout(function(){
        $('.top-image-2').fadeOut(3000).animate({'left':'100vw'},{
          duration:3000,
          queue: false
        });
        $('.top-image-1').css({'z-index':'1'})
        $('.top-image-2').css({'z-index':'8'})
        $('.top-image-3').css({'z-index':'5'})
        $('.top-image-1').fadeIn(0).animate({'left':'0'},{
          duration:3000,
          queue: false
        });
        $('.select-icon-6').css({'color': 'gray'})
        $('.select-icon-7').css({'color': 'black'})
      },6000);
      setTimeout(function(){
        $('.top-image-3').fadeOut(3000).animate({'left':'100vw'},{
          duration:3000,
          queue: false
        });
        $('.top-image-1').css({'z-index':'5'})
        $('.top-image-2').css({'z-index':'1'})
        $('.top-image-3').css({'z-index':'8'})
        $('.top-image-2').fadeIn(0).animate({'left':'0'},{
          duration:3000,
          queue: false
        });
        $('.select-icon-7').css({'color': 'gray'})
        $('.select-icon-5').css({'color': 'black'})
      },9000);
      setTimeout(function(){
        $('.top-image-3').fadeIn(0).animate({'left':'0'},{
          duration:3000,
          queue: false
        });
        $('.top-image-1').css({'z-index':'8'})
        $('.top-image-2').css({'z-index':'5'})
        $('.top-image-3').css({'z-index':'1'})
      },12000);
    },9000);
  });
});

$ (function(){
  $('.products-image-mini-1').click(function(){
    $('.products-image-mini-1').css({'opacity':'1'});
    $('.products-image-mini-2').css({'opacity':'0.5'});
    $('.products-image-mini-3').css({'opacity':'0.5'});
    $('.products-image-mini-4').css({'opacity':'0.5'});
    $('.products-image-1').css('z-index', '2');
    $('.products-image-2').css('z-index', '1');
    $('.products-image-3').css('z-index', '1');
    $('.products-image-4').css('z-index', '1');
  });
  $('.products-image-mini-2').click(function(){
    $('.products-image-mini-1').css({'opacity':'0.5'});
    $('.products-image-mini-2').css({'opacity':'1'});
    $('.products-image-mini-3').css({'opacity':'0.5'});
    $('.products-image-mini-4').css({'opacity':'0.5'});
    $('.products-image-1').css('z-index', '1');
    $('.products-image-2').css('z-index', '2');
    $('.products-image-3').css('z-index', '1');
    $('.products-image-4').css('z-index', '1');
  });
  $('.products-image-mini-3').click(function(){
    $('.products-image-mini-1').css({'opacity':'0.5'});
    $('.products-image-mini-2').css({'opacity':'0.5'});
    $('.products-image-mini-3').css({'opacity':'1'});
    $('.products-image-mini-4').css({'opacity':'0.5'});
    $('.products-image-1').css('z-index', '1');
    $('.products-image-2').css('z-index', '1');
    $('.products-image-3').css('z-index', '2');
    $('.products-image-4').css('z-index', '1');
  });
  $('.products-image-mini-4').click(function(){
    $('.products-image-mini-1').css({'opacity':'0.5'});
    $('.products-image-mini-2').css({'opacity':'0.5'});
    $('.products-image-mini-3').css({'opacity':'0.5'});
    $('.products-image-mini-4').css({'opacity':'1'});
    $('.products-image-1').css('z-index', '1');
    $('.products-image-2').css('z-index', '1');
    $('.products-image-3').css('z-index', '1');
    $('.products-image-4').css('z-index', '2');
  });
});