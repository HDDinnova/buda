$('.mini').on('click',function(){
    switch($(this).data('ambit')){
        case 'literatura':
            clicaLite();
            break;
        case 'cinema':
            clicaCine();
            break;
        case 'fotografia':
            clicaFoto();
            break;
        case 'ornitologia':
            clicaOrni();
            break;
        case 'noreg':
            window.open('00metaforadelta/','_self');
            break;
        case 'reg':
            activaambits();
            break;
    }
});

$('.pers').on('click',function(){
    switch($(this).data('ambit')){
        case 'literatura':
            clicaLite();
            break;
        case 'cinema':
            clicaCine();
            break;
        case 'fotografia':
            clicaFoto();
            break;
        case 'ornitologia':
            clicaOrni();
            break;                     
    }
});

function activaambits(){
    $('.registre').animate({
        'scale':'0'
    },200,function(){
        $('.registre').hide();
    });
    $('.noregistre').delay('200').animate({
        'scale':'0'
    },200,function(){
        $('.noregistre').hide();
    });
    setTimeout(function(){
        $('#ambit').addClass('ambit').show();
    },400);
    setTimeout(function(){
        $('#literatura').addClass('literatura').show();
    },500);
    setTimeout(function(){
        $('#cinema').addClass('cinema').show();
    },600);
    setTimeout(function(){
        $('#fotografia').addClass('fotografia').show();
    },700);
    setTimeout(function(){
        $('#ornitologia').addClass('ornitologia').show();
    },800);
}

var menu1 = function(){
    $('#menu1').click(function() {
        $('.menu').animate({
          right: '0px'
        }, 200);
    });
      $('.icon-close').click(function() {
        $('.menu').animate({
          right: "-285px"
        }, 200);
      });
};

function clicaLite(){
    if($('.literatura').hasClass('negre')){
        console.log('negre');
    }else if($('.literatura').hasClass('gris')){
        lite2();
    } else {
        lite1();
    }
    $('#go').attr('href','registre.php?a=lite');
}
function clicaCine(){
     if($('.cinema').hasClass('negre')){
        console.log('negre');
    }else if($('.cinema').hasClass('gris')){
        cine2();
    } else {
        cine1();
    }
    $('#go').attr('href','registre.php?a=cine');
}
function clicaFoto(){
     if($('.fotografia').hasClass('negre')){
        console.log('negre');
    }else if($('.fotografia').hasClass('gris')){
        foto2()
    } else {
        foto1();
    } 
    $('#go').attr('href','registre.php?a=foto');
}
function clicaOrni(){
     if($('.ornitologia').hasClass('negre')){
        console.log('negre');
    }else if($('.ornitologia').hasClass('gris')){
        orni2();
    } else {
        orni1();
    }
    $('#go').attr('href','registre.php?a=orni');
}

function lite1(){
    $('#porni').fadeOut(300);
    $('#corni').fadeOut(300,function(){
      $('#pfoto').fadeOut(300);
      $('#cfoto').fadeOut(300,function(){
        $('#pcine').fadeOut(300);
        $('#ccine').fadeOut(300,function(){
          $('#plite').animate({
            'height':'95vh',
            'top':'6%'
          },function(){
              $('#cl2').fadeIn('slow').addClass('persgran');
          }).addClass('persgran');
        });
      });
    });
    $('#clite').fadeOut('slow');
    $('.cinema').animate({
      backgroundColor:'gray',
      'top':c1
    }).addClass('gris');
    $('.fotografia').animate({
      backgroundColor:'gray',
      'top':c2
    }).addClass('gris');
    $('.ornitologia').animate({
      backgroundColor:'gray',
      'top':c3
    }).addClass('gris');
    $('.literatura').animate({
      backgroundColor:'#000000',
      'top':c4
    }).addClass('negre');
    $('.ambit').animate({
      backgroundColor:'#EEC41B'
    },function(){
      $('.text').addClass('groc');
      $('.text p').html(tlite);
      $('.text').show('slow');
    });
}
function cine1(){
    $('#porni').fadeOut(300);
    $('#corni').fadeOut(300,function(){
      $('#pfoto').fadeOut(300);
      $('#cfoto').fadeOut(300,function(){
        $('#plite').fadeOut(300);
        $('#clite').fadeOut(300,function(){
          $('#pcine').animate({
            'height':'95vh',
            'top':'6%',
            'right':'12%'
          },function(){
              $('#cc2').fadeIn('slow').addClass('persgran');
          }).addClass('persgran');
        });
      });
    });
    $('#ccine').fadeOut('slow');
    $('.cinema').animate({
      backgroundColor:'black',
      'top':c4
    }).addClass('negre');
    $('.fotografia').animate({
      backgroundColor:'gray',
      'top':c2
    }).addClass('gris');
    $('.ornitologia').animate({
      backgroundColor:'gray',
      'top':c3
    }).addClass('gris');
    $('.literatura').animate({
      backgroundColor:'gray'
    }).addClass('gris');
    $('.ambit').animate({
      backgroundColor:'#66A8C8'
    },function(){
      $('.text').addClass('blau');
      $('.text p').html(tcine);
      $('.text').show('slow');
    });
}
function foto1(){
    $('#porni').fadeOut(300);
    $('#corni').fadeOut(300,function(){
      $('#pcine').fadeOut(300);
      $('#ccine').fadeOut(300,function(){
        $('#plite').fadeOut(300);
        $('#clite').fadeOut(300,function(){
          $('#pfoto').animate({
            'height':'95vh',
            'top':'6%',
            'right':'12%'
          },function(){
              $('#cf2').fadeIn('slow').addClass('persgran');
          }).addClass('persgran');
        });
      });
    });
    $('#cfoto').fadeOut('slow');
    $('.cinema').animate({
      backgroundColor:'gray'
    }).addClass('gris');
    $('.fotografia').animate({
      backgroundColor:'black',
      'top':c4
    }).addClass('negre');
    $('.ornitologia').animate({
      backgroundColor:'gray',
      'top':c3
    }).addClass('gris');
    $('.literatura').animate({
      backgroundColor:'gray'
    }).addClass('gris');
    $('.ambit').animate({
      backgroundColor:'#F15D42'
    },function(){
      $('.text').addClass('roig');
      $('.text p').html(tfoto);
      $('.text').show('slow');
    });
}
function orni1(){
    $('#pfoto').fadeOut(300);
    $('#cfoto').fadeOut(300,function(){
      $('#pcine').fadeOut(300);
      $('#ccine').fadeOut(300,function(){
        $('#plite').fadeOut(300);
        $('#clite').fadeOut(300,function(){
          $('#porni').animate({
            'height':'95vh',
            'top':'6%',
            'right':'12%'
          },function(){
              $('#co2').fadeIn('slow').addClass('persgran');
          }).addClass('persgran');
        });
      });
    });
    $('#corni').fadeOut('slow');
    $('.cinema').animate({
      backgroundColor:'gray'
    }).addClass('gris');
    $('.fotografia').animate({
      backgroundColor:'gray'
    }).addClass('gris');
    $('.ornitologia').animate({
      backgroundColor:'black'
    }).addClass('negre');
    $('.literatura').animate({
      backgroundColor:'gray'
    }).addClass('gris');
    $('.ambit').animate({
      backgroundColor:'#ABB057'
    },function(){
      $('.text').addClass('verd');
      $('.text p').html(torni);
      $('.text').show('slow');
    });    
}

function lite2(){
    $('.persgran').fadeOut(100,function(){
        $('#plite').css('height','95vh').css('top','6%');
        $('#plite').show(function(){
            $('#cl2').fadeIn(200).addClass('persgran');
        }).addClass('persgran');
    });
    $('.cinema').animate({
      backgroundColor:'gray',
      'top':c1
    }).removeClass('gris').addClass('gris').removeClass('negre');
    $('.fotografia').animate({
      backgroundColor:'gray',
      'top':c2
    }).removeClass('gris').addClass('gris').removeClass('negre');
    $('.ornitologia').animate({
      backgroundColor:'gray',
      'top':c3
    }).removeClass('gris').addClass('gris').removeClass('negre');
    $('.literatura').animate({
      backgroundColor:'#000000',
      'top':c4
    }).addClass('negre').removeClass('gris');   
    $('.ambit').animate({
      backgroundColor:'#EEC41B'
    },function(){
      $('.text').removeClass('blau').removeClass('roig').removeClass('verd').animate({
        backgroundColor:'#EEC41B'
      });
      $('.text p').html(tlite);
      $('.text').show('slow');
    });
}
function cine2(){
    $('.persgran').fadeOut(100,function(){
        $('#pcine').css('height','95vh').css('top','6%').css('right','12%');
        $('#pcine').show(function(){
            $('#cc2').fadeIn(200).addClass('persgran');
        }).addClass('persgran');
    });
    $('.cinema').animate({
      backgroundColor:'black',
      'top':c4
    }).addClass('negre').removeClass('gris');
    $('.fotografia').animate({
      backgroundColor:'gray',
      'top':c2
    }).removeClass('gris').addClass('gris').removeClass('negre');
    $('.ornitologia').animate({
      backgroundColor:'gray',
      'top':c3
    }).removeClass('gris').addClass('gris').removeClass('negre');
    $('.literatura').animate({
      backgroundColor:'gray',
      'top':c1
    }).removeClass('gris').addClass('gris').removeClass('negre');   
    $('.ambit').animate({
      backgroundColor:'#66A8C8'
    },function(){
      $('.text').removeClass('groc').removeClass('roig').removeClass('verd').animate({
        backgroundColor:'#66A8C8'
      });
      $('.text p').html(tcine);
      $('.text').show('slow');
    });
}
function foto2(){
    $('.persgran').fadeOut(100,function(){
        $('#pfoto').css('height','95vh').css('top','6%').css('right','12%');
        $('#pfoto').show(function(){
            $('#cf2').fadeIn(200).addClass('persgran');
        }).addClass('persgran');
    });
    $('.cinema').animate({
      backgroundColor:'gray',
      'top':c2
    }).removeClass('gris').addClass('gris').removeClass('negre');
    $('.fotografia').animate({
      backgroundColor:'black',
      'top':c4
    }).removeClass('gris').addClass('negre');
    $('.ornitologia').animate({
      backgroundColor:'gray',
      'top':c3
    }).removeClass('gris').addClass('gris').removeClass('negre');
    $('.literatura').animate({
      backgroundColor:'gray',
      'top':c1
    }).removeClass('gris').addClass('gris').removeClass('negre');   
    $('.ambit').animate({
      backgroundColor:'#F15D42'
    },function(){
      $('.text').removeClass('groc').removeClass('roig').removeClass('verd').animate({
        backgroundColor:'#F15D42'
      });
      $('.text p').html(tfoto);
      $('.text').show('slow');
    });
}
function orni2(){
    $('.persgran').fadeOut(100,function(){
        $('#porni').css('height','95vh').css('top','6%').css('right','12%');
        $('#porni').show(function(){
            $('#co2').fadeIn(200).addClass('persgran');
        }).addClass('persgran');
    });
    $('.cinema').animate({
      backgroundColor:'gray',
      'top':c2
    }).removeClass('gris').addClass('gris').removeClass('negre');
    $('.fotografia').animate({
      backgroundColor:'gray',
      'top':c3
    }).removeClass('gris').addClass('gray').removeClass('negre');
    $('.ornitologia').animate({
      backgroundColor:'black',
      'top':c4
    }).removeClass('gris').addClass('negre');
    $('.literatura').animate({
      backgroundColor:'gray',
      'top':c1
    }).removeClass('gris').addClass('gris').removeClass('negre');   
    $('.ambit').animate({
      backgroundColor:'#ABB057'
    },function(){
      $('.text').removeClass('groc').removeClass('roig').removeClass('verd').animate({
        backgroundColor:'#ABB057'
      });
      $('.text p').html(torni);
      $('.text').show('slow');
    });
}