var trans = 1200;
$('#bso').click(function(){
    if($('#audio')[0].paused){
        $('#audio')[0].play();
    } else {
        $('#audio')[0].pause();
    }
});
function menu(){
    $('#menu1').click(function() {
        $('.menu').animate({
          right: '0px'
        }, 200);
    });
    $('#tancamenu').click(function() {
      $('.menu').animate({
        right: "-285px"
      }, 200);
    });
};
function controlMouse(e){
    $('body').off('mousewheel');
    if(e.deltaY<0){                
        switch (pos) {
            case 10:
                $('body').off('mousewheel');
                diapositiva11();
                setTimeout(function(){
                    pos=11;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 11:
                $('body').off('mousewheel');
                diapositiva12();
                $('#apartat2').load('apartat2.html');
                setTimeout(function(){
                    pos=12;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 12:
                $('body').off('mousewheel');
                $('#video1-3 video').get(0).pause();
                diapositiva20();
                setTimeout(function(){
                    pos=20;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 20:
                $('body').off('mousewheel');
                diapositiva21();
                setTimeout(function(){
                    pos=21;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 21:
                $('body').off('mousewheel');
                diapositiva22();
                setTimeout(function(){
                    pos=22;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
        }
    } else if(e.deltaY>0) {
        switch (pos) {
            case 11:
                $('body').off('mousewheel');
                diapositiva10();
                setTimeout(function(){
                    pos=10;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
        }
    }
}
function diapositiva1(){
    $('#imgcalaixos img').animate({
        'opacity': 1
    },'slow',function(){
        $('#titol1').animate({
            'top': '400px'
        },trans,'swing');
        $('#destacat1').delay('200').animate({
            'top': '180px'
        },trans,'swing');
        $('#imgcalaixos p').delay('600').animate({
            'bottom': '10px'
        },trans,'swing');
    });
}
function diapositiva11(){
    $('#imgcalaixos p').animate({
        'bottom': '-50px'
    },trans,'swing');
    $('#destacat1').delay('200').animate({
        'top': '-50%'
    },trans,'swing');
    $('#titol1').delay('300').animate({
        'top': '-50%'
    },trans,'swing');
    $('#tapa1-1').delay('500').animate({
        'opacity': 0.6
    });
    $('#text1-1 p').delay('700').animate({
        'top': '148px'
    },trans,'swing');    
    $('#text1-1 img').delay('900').animate({
        'right': '522px'
    },trans,'swing');
}
function diapositiva12(){
    $('#text1-1 img').animate({
        'right': '-30%'
    },trans,'swing');
    $('#text1-1 p').delay('200').animate({
        'top': '-50%'
    },trans,'swing');
    $('#tapa1-1').delay('300').animate({
        backgroundColor: '#000000'
    });
    $('#video1-3').delay('400').animate({
        'top':'0px'
    },trans,'swing',function(){
        $('#video1-3 video').get(0).play();
    });
}
function diapositiva20(){
    $('#apartat2').show();
    $('#video1-3').animate({
        'top': '-100%'
    },trans,'swing');
    $('#tapa1-1').delay('200').animate({
        'top':'-100%'
    },trans,'swing');
    $('#imgcalaixos img').delay('200').animate({
        'top':'-100%'
    },trans,'swing');
    $('#foto2guille img').delay('200').animate({
        'top':'0'
    },trans,'swing');
    $('#foto2guille h3').delay('400').animate({
        'top':'55%'
    },trans,'swing');
    $('#foto2guille p').delay('600').animate({
        'bottom':'10px'
    },trans,'swing');
}
function diapositiva21(){
    $('#foto2guille p').animate({
        'bottom':'-50px'
    },trans,'swing');
    $('#foto2guille h3').delay('200').animate({
        'top':'-50%'
    },trans,'swing');
    $('#tapa2-1').delay('400').animate({
        'opacity':'0.6'
    },trans,'swing');
    $('#text2-1').delay('600').animate({
        'top':'100px'
    },trans,'swing');
    $('#play2-1').delay('800').animate({
        'top':'0px'
    },trans,'swing');
    $('#marcacanyis').delay('1000').animate({
        'bottom':'50px'
    },trans,'swing');
}
function diapositiva22(){
    $('#marcacanyis').animate({
        'left':'75%'
    },trans,'swing');
    $('#play2-1').delay('200').animate({
        'top':'-200px'
    },trans,'swing');
    $('#text2-1').delay('400').animate({
        'top':'-50%'
    },trans,'swing');
}


// Funcions de video
function tancarvideo1(){
    $('#video1-3 video').get(0).pause();
    diapositiva20();
    pos=20;
}
function tancarvideo21(){
    $('.videopopup').hide();
    $('#videosapartat2').html('');
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
}