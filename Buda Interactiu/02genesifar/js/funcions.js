var trans = 1200;
var sona=true;
var mutexvideo=false;
var slider1=slider2=slider3=slider4=false;
var zi=4;
$('#bso').click(function(){
    if(sona){
        $('#audio')[0].pause();
        sona=false;
        console.log('sona: '+sona);
    } else {
        $('#audio')[0].play();
        sona=true;
        console.log('sona: '+sona);
    }
});
function controlMouse(e){
    $('body').off('mousewheel');
    if(e.deltaY<0){                
        switch (pos) {
            case 10:
                passar(11);
                break;
            case 11:
                passar(12);
                break;
            case 12:
                passar(13);
                break;
            case 13:
                passar(14);
                break;
            case 14:
                passar(15);
                break;
            case 15:
                passar(16);
                break;
            case 16:
                passar(17);
                break;
            case 17:
                passar(18);
                break;
            case 18:
                passar(19);
                break;
            case 19:
                passar(20);
                break;
            case 20:
                passar(21);
                break;
            case 21:
                passar(22);
                break;
            case 22:
                passar(23);
                break;
            case 23:
                passar(24);
                break;
            case 24:
                passar(25);
                break;
            case 25:
                passar(26);
                break;
            case 26:
                passar(27);
                break;
            case 27:
                passar(28);
                break;
            case 28:
                passar(29);
                break;
            case 29:
                passar(30);
                break;
            case 30:
                passar(31);
                break;
            case 31:
                passar(32);
                break;
            case 32:
                passar(33);
                break;
            case 33:
                passar(34);
                break;
            case 34:
                passar(35);
                break;
            case 35:
                passar(36);
                break;
            case 36:
                passar(37);
                break;
            case 37:
                passar(38);
                break;
            case 38:
                passar(39);
                break;
            case 39:
                passar(40);
                break;
            case 40:
                passar(41);
                break;
            case 41:
                passar(42);
                break;
            case 42:
                passar(43);
                break;
            case 43:
                passar(44);
                break;
            case 44:
                passar(45);
                break;
            case 45:
                passar(46);
                break;
            case 46:
                passar(47);
                break;
            case 47:
                passar(48);
                break;
            case 48:
                passar(49);
                break;
            case 49:
                passar(50);
                break;
            case 50:
                passar(51);
                break;
            case 51:
                passar(52);
                break;
            default :
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
        }
    } else if(e.deltaY>0) {
        switch (pos) {
            case 11:
                passar(10);
                break;
            case 12:
                passar(110);
                break;
            case 13:
                passar(120);
                break;
            case 14:
                passar(130);
                break;
            case 15:
                passar(140);
                break;
            case 16:
                passar(150);
                break;
            case 17:
                passar(160);
                break;
            case 18:
                passar(170);
                break;
            case 19:
                passar(180);
                break;
            case 20:
                passar(190);
                break;
            case 21:
                passar(200);
                break;
            case 22:
                passar(210);
                break;
            case 23:
                passar(220);
                break;
            case 24:
                passar(230);
                break;
            case 25:
                passar(240);
                break;
            case 26:
                passar(250);
                break;
            case 27:
                passar(260);
                break;
            case 28:
                passar(270);
                break;
            case 29:
                passar(280);
                break;
            case 30:
                passar(290);
                break;
            case 31:
                passar(300);
                break;
            case 32:
                passar(310);
                break;
            case 33:
                passar(320);
                break;
            case 34:
                passar(330);
                break;
            case 35:
                passar(340);
                break;
            case 36:
                passar(350);
                break;
            case 37:
                passar(360);
                break;
            case 38:
                passar(370);
                break;
            case 39:
                passar(380);
                break;
            case 40:
                passar(390);
                break;
            case 41:
                passar(400);
                break;
            case 42:
                passar(410);
                break;
            case 43:
                passar(420);
                break;
            case 44:
                passar(430);
                break;
            case 45:
                passar(440);
                break;
            case 46:
                passar(450);
                break;
            case 47:
                passar(460);
                break;
            case 48:
                passar(470);
                break;
            case 49:
                passar(480);
                break;
            case 50:
                passar(490);
                break;
            case 51:
                passar(500);
                break;
            case 52:
                passar(510);
                break;
            default :
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
        }
    }
}
function diapositiva(id){
    switch (id) {
        case 1:
            $('#foto1-1').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#foto1-1text').show();
                $('#foto1-1text').animate({
                    'top': '12%'
                },trans,'swing');
                $('#foto1-1peu').delay('300').animate({
                    'left': '0'
                },trans,'swing');
                $('.scroll').delay('500').animate({
                    'bottom': '1.5%'
                },trans,'swing',function(){            
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                });
            });
            break;
        case 10:
            $('#foto1-2text p').animate({
                'top': '-300px'
            },trans,'swing');
            $('#foto1-2text').delay('200').animate({
                'top': '-185%'
            },trans,'swing');
            $('#foto1-2').delay('400').animate({
                'top': '100%'
            },trans,'swing');
            $('#foto1-1').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto1-1text').delay('600').animate({
                'top': '15%'
            },trans,'swing');
            $('#foto1-1peu').delay('800').animate({
                'left': '0'
            },trans,'swing');
            $('.scroll').delay('1000').animate({
                'bottom': '1.5%'
            },trans,'swing');
            break;
        case 11:
            $('.scroll').animate({
                'bottom': '-10%'
            },trans,'swing');
            $('#foto1-1peu').delay('200').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto1-1text').delay('400').animate({
                'top': '-212%'
            },trans,'swing');
            $('#foto1-1').delay('600').animate({
                'top': '-100%'
            },trans,'swing');
            $('#foto1-2').delay('600').animate({
                'top': '0'
            },trans,'swing');
            $('#foto1-2text').delay('800').animate({
                'top': '15%'
            },trans,'swing');
            $('#foto1-2text p').delay('1000').animate({
                'top': '0'
            },trans,'swing');
            break;
        case 110:
            $('#foto1-2peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto1-2text2').delay('200').animate({
                'top': '-185%'
            },trans,'swing');
            $('#foto1-2 .tapa').delay('400').animate({
                'opacity': '0'
            },trans,'swing');
            $('#foto1-2text').delay('600').animate({
                'top': '15%'
            },trans,'swing');
            $('#foto1-2text h2').delay('800').animate({
                'top': '0'
            },trans,'swing');
            break;
        case 12:
            $('#foto1-2text h2').animate({
                'top': '300px'
            },trans,'swing');
            $('#foto1-2text').delay('200').animate({
                'top': '215%'
            },trans,'swing');
            $('#foto1-2 .tapa').delay('400').animate({
                'opacity': '.7'
            },trans,'swing');
            $('#foto1-2text2').delay('600').animate({
                'top': '15%'
            },trans,'swing');
            $('#foto1-2peu').delay('800').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 120:
            $('#foto1-2peu').animate({
                'color': 'white'
            },trans,'swing');
            $('#foto1-2text3').delay('200').animate({
                'top': '-185%'
            },trans,'swing');
            $('#foto1-2 .tapa').delay('400').animate({
                'opacity': '.7'
            },trans,'swing');
            $('#foto1-2text2').delay('600').animate({
                'top': '15%'
            },trans,'swing');
            break;
        case 13:
            $('#foto1-2text2').animate({
                'top': '215%'
            },trans,'swing');
            $('#foto1-2 .tapa').delay('200').animate({
                'opacity': '.5'
            },trans,'swing');
            $('#foto1-2text3').delay('400').animate({
                'top': '15%'
            },trans,'swing');
            $('#foto1-2peu').delay('600').animate({
                'color': 'black'
            },trans,'swing');
            break;
        case 130:
            $('#foto1-3peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto1-3text p').delay('200').animate({
                'top': '-300px'
            },trans,'swing');
            $('#foto1-3text').delay('400').animate({
                'top': '-178%'
            },trans,'swing');
            $('#foto1-3').delay('600').animate({
                'top': '100%'
            },trans,'swing');
            $('#foto1-2').delay('600').animate({
                'top': '0'
            },trans,'swing');
            $('#foto1-2text3').delay('800').animate({
                'top': '15%'
            },trans,'swing');
            $('#foto1-2peu').delay('1000').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 14:
            $('#foto1-2peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto1-2text3').delay('200').animate({
                'top': '215%'
            },trans,'swing');
            $('#foto1-2').delay('400').animate({
                'top': '-100%'
            },trans,'swing');
            $('#foto1-3').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto1-3text').delay('600').animate({
                'top': '22%'
            },trans,'swing');
            $('#foto1-3text p').delay('800').animate({
                'top': '0'
            },trans,'swing');
            $('#foto1-3peu').delay('1000').animate({
                'left': '0'
            },trans,'swing');
            $('#foto1-3play').click(function(){
                $('body').off('mousewheel');
                $('#videos').load('apartat1video1.html',function(){
                    $('.videopopup').show();
                });
            });
            $('#apartat2').load('apartat2.html');
            break;
        case 140:
            $('#foto2-1peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto2-1text').delay('200').animate({
                'top': '-60%'
            },trans,'swing');
            $('#foto2-1').delay('400').animate({
                'top': '-100%'
            },trans,'swing',function(){
                $('#apartat2').hide();
            });
            $('#foto1-3').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto1-3text').delay('600').animate({
                'top': '22%'
            },trans,'swing');
            $('#play1-3').delay('800').animate({
                'top': '0'
            },trans,'swing');
            $('#foto1-3peu').delay('1000').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 15:
            $('#apartat2').show();
            $('#foto1-3peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#play1-3').delay('200').animate({
                'top': '300px'
            },trans,'swing');
            $('#foto1-3text').delay('400').animate({
                'top': '222%'
            },trans,'swing');
            $('#foto1-3').delay('600').animate({
                'top': '100%'
            },trans,'swing');
            $('#foto2-1').delay('600').animate({
                'top': '0'
            },trans,'swing');
            $('#foto2-1text').delay('800').animate({
                'top': '40%'
            },trans,'swing');
            $('#foto2-1peu').delay('1000').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 150:
            $('#foto2-1').show();
            $('#foto2-2text').animate({
                'bottom': '108%'
            },trans,'swing');
            $('#foto2-2peu').delay('200').animate({
                'opacity': '0'
            },trans,'swing');
            $('#foto2-2').delay('400').animate({
                'opacity': '0'
            },trans,'swing');
            $('#foto2-1text').delay('600').animate({
                'top': '40%'
            },trans,'swing');
            break;
        case 16:
            $('#foto2-1text').animate({
                'top': '140%'
            },trans,'swing');
            $('#foto2-2').delay('200').animate({
                'opacity': '1'
            },trans,'swing');
            $('#foto2-2peu').delay('400').animate({
                'opacity': '1'
            },trans,'swing',function(){
                $('#foto2-1').hide();
            });
            $('#foto2-2text').delay('600').animate({
                'bottom': '8%'
            },trans,'swing');
            break;
        case  160:
            $('#foto2-3peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto2-3text').delay('200').animate({
                'bottom': '108%'
            },trans,'swing');
            $('#foto2-3').delay('400').animate({
                'top': '-100%'
            },trans,'swing');
            $('#foto2-2').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto2-2text').delay('600').animate({
                'bottom': '8%'
            },trans,'swing');
            $('#foto2-2peu').delay('800').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 17:
            $('#foto2-2text').animate({
                'bottom': '-92%'
            },trans,'swing');
            $('#foto2-2peu').delay('200').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto2-2').delay('400').animate({
                'top': '100%'
            },trans,'swing');
            $('#foto2-3').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto2-3text').delay('600').animate({
                'bottom': '8%'
            },trans,'swing');
            $('#foto2-3peu').delay('800').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 170:
            $('#foto2-4peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto2-4text').delay('200').animate({
                'top': '-70%'
            },trans,'swing');
            $('#foto2-4').delay('400').animate({
                'top': '-100%'
            },trans,'swing');
            $('#foto2-3').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto2-3text').delay('600').animate({
                'bottom': '8%'
            },trans,'swing');
            $('#foto2-3peu').delay('800').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 18:
            $('#foto2-3peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto2-3text').delay('200').animate({
                'bottom': '-92%'
            },trans,'swing');
            $('#foto2-3').delay('400').animate({
                'top': '100%'
            },trans,'swing');
            $('#foto2-4').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto2-4text').delay('600').animate({
                'top': '30%'
            },trans,'swing');
            $('#foto2-4peu').delay('800').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 180:
            $('#foto2-5peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto2-5text').delay('200').animate({
                'top': '-70%'
            },trans,'swing');
            $('#foto2-5').delay('400').animate({
                'top': '-100%'
            },trans,'swing');
            $('#foto2-4').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto2-4text').delay('600').animate({
                'top': '30%'
            },trans,'swing');
            $('#foto2-4peu').delay('800').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 19:
            $('#foto2-4peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto2-4text').delay('200').animate({
                'top': '130%'
            },trans,'swing');
            $('#foto2-4').delay('400').animate({
                'top': '100%'
            },trans,'swing');
            $('#foto2-5').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto2-5text').delay('600').animate({
                'top': '30%'
            },trans,'swing');
            $('#foto2-5peu').delay('800').animate({
                'left': '0'
            },trans,'swing');
            $('#apartat3').load('apartat3.html');
            break;
        case 190:
            $('#foto3-1peu').animate({
                'bottom': '-50%'
            },trans,'swing');
            $('#foto3-1text').delay('200').animate({
                'top': '155%'
            },trans,'swing');
            $('#foto3-1').delay('400').animate({
                'left': '-100%'
            },trans,'swing',function(){
                $('#apartat3').hide();
            });
            $('#foto2-5').delay('400').animate({
                'left': '0'
            },trans,'swing');
            $('#foto2-5text').delay('600').animate({
                'top': '30%'
            },trans,'swing');
            $('#foto2-5peu').delay('800').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 20:
            $('#apartat3').show();
            $('#foto2-5peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto2-5text').delay('200').animate({
                'top': '130%'
            },trans,'swing');
            $('#foto2-5').delay('400').animate({
                'left': '100%'
            },trans,'swing');
            $('#foto3-1').delay('400').animate({
                'left': '0'
            },trans,'swing');
            $('#foto3-1text').delay('600').animate({
                'top': '55%'
            },trans,'swing');
            $('#foto3-1peu').delay('800').animate({
                'bottom': '10px'
            },trans,'swing');
            break;
        case 200:
            $('#foto3-2peu p').animate({
                'left': '-300px'
            },trans,'swing');
            $('#foto3-2peu').delay('200').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto3-2text').delay('400').animate({
                'top': '-180%'
            },trans,'swing');
            $('#foto3-2').delay('600').animate({
                'top': '100%'
            },trans,'swing');
            $('#foto3-1').delay('600').animate({
                'top': '0'
            },trans,'swing');
            $('#foto3-1text').delay('800').animate({
                'top': '55%'
            },trans,'swing');
            $('#foto3-1peu').delay('1000').animate({
                'bottom': '10px'
            },trans,'swing');
            break;
        case 21:
            $('#foto3-1peu').animate({
                'bottom': '-150%'
            },trans,'swing');
            $('#foto3-1text').delay('200').animate({
                'top': '-45%'
            },trans,'swing');
            $('#foto3-1').delay('400').animate({
                'top': '-100%'
            },trans,'swing');
            $('#foto3-2').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto3-2text').delay('600').animate({
                'top': '20%'
            },trans,'swing');
            $('#foto3-2peu').delay('800').animate({
                'left': '0'
            },trans,'swing');
            $('#foto3-2peu p').delay('1000').animate({
                'left': '0'
            },trans,'swing');
            $('#foto3-2play').click(function(){
                $('body').off('mousewheel');
                $('#videos').load('apartat3video1.html',function(){
                    $('.videopopup').show();
                });
            });
            break;
        case 210:
            $('#foto3-3 video')[0].pause();
            $('#foto3-3').animate({
                'top': '100%'
            },trans,'swing');
            $('#foto3-2').animate({
                'top': '0'
            },trans,'swing');
            $('#foto3-2text').delay('200').animate({
                'top': '20%'
            },trans,'swing');
            $('#foto3-2peu').delay('400').animate({
                'left': '0'
            },trans,'swing');
            $('#foto3-2peu p').delay('600').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 22:
            $('#foto3-2peu p').animate({
                'left': '-300px'
            },trans,'swing');
            $('#foto3-2peu').delay('200').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto3-2text').delay('400').animate({
                'top': '220%'
            },trans,'swing');
            $('#foto3-2').delay('600').animate({
                'top': '-100%'
            },trans,'swing');
            $('#foto3-3').delay('600').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#foto3-3 video')[0].play();
            });
            $('#foto3-3 video').on('ended',function(){
                pos=23;
                diapositiva(23);
            });
            break;
        case 220:
            $('#foto3-4peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto3-4text h3').delay('200').animate({
                'top': '-300px'
            },trans,'swing');
            $('#foto3-4text').delay('400').animate({
                'top': '-185%'
            },trans,'swing');
            $('#foto3-4').delay('600').animate({
                'top': '100%'
            },trans,'swing');
            $('#foto3-3').delay('600').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#foto3-3 video')[0].play();
            });
            break;
        case 23:
            $('#foto3-3 video')[0].pause();
            $('#foto3-3').animate({
                'top': '-100%'
            },trans,'swing');
            $('#foto3-4').animate({
                'top': '0'
            },trans,'swing');
            $('#foto3-4text').delay('200').animate({
                'top': '15%'
            },trans,'swing');
            $('#foto3-4text h3').delay('400').animate({
                'top': '0'
            },trans,'swing');
            $('#foto3-4peu').delay('600').animate({
                'left': '0'
            },trans,'swing');
            $('#foto3-4play').click(function(){
                $('body').off('mousewheel');
                $('#videos').load('apartat3video2.html',function(){
                    $('.videopopup').show();
                });
            });
            break;
        case 230:
            $('#foto3-5 img').animate({
                'top': '-180%',
                'left': '-180%',
                rotate: '90deg'
            },trans,'swing');
            $('#foto3-5peu').delay('200').animate({
                'left': '-50%'
            },trans,'swing');
            $('#foto3-5text').delay('400').animate({
                'top': '-185%'
            },trans,'swing');
            $('#foto3-5').delay('600').animate({
                'top': '100%'
            },trans,'swing');
            $('#foto3-4').delay('600').animate({
                'top': '0'
            },trans,'swing');
            $('#foto3-4text').delay('800').animate({
                'top': '15%'
            },trans,'swing');
            $('#play3-4').delay('1000').animate({
                'top': '0'
            },trans,'swing');
            $('#foto3-4peu').delay('1100').animate({
                'left': '0'
            },trans,'swing');
            break;
        case 24:
            $('#foto3-4peu').animate({
                'left': '-50%'
            },trans,'swing');
            $('#play3-4').delay('200').animate({
                'top': '300px'
            },trans,'swing');
            $('#foto3-4text').delay('400').animate({
                'top': '215%'
            },trans,'swing');
            $('#foto3-4').delay('600').animate({
                'top': '-100%'
            },trans,'swing');
            $('#foto3-5').delay('600').animate({
                'top': '0'
            },trans,'swing');
            $('#foto3-5text').delay('800').animate({
                'top': '15%'
            },trans,'swing');
            $('#foto3-5peu').delay('1000').animate({
                'left': '0'
            },trans,'swing');
            $('#foto3-5 img').rotate('90deg');
            $('#foto3-5 img').delay('1100').animate({
                'top': '15%',
                'left': '0',
                rotate: '10deg'
            },trans,'swing');
            $('#apartat4').load('apartat4.html');
            break;
        case 240:
            $('#foto4-1text').animate({
                'top': '120%'
            },trans,'swing');
            $('#foto4-1').delay('200').animate({
                'left': '100%'
            },trans,'swing',function(){
                $('#apartat4').hide();
            });
            $('#foto3-5').delay('200').animate({
                'left': '0'
            },trans,'swing');
            $('#foto3-5text').delay('400').animate({
                'top': '15%'
            },trans,'swing');
            $('#foto3-5peu').delay('600').animate({
                'left': '0'
            },trans,'swing');
            $('#foto3-5 img').delay('800').animate({
                'top': '15%',
                'left': '0',
                rotate: '10deg'
            },trans,'swing');
            break;
    }
}
function diapositiva25(){
    $('#apartat4').show();
    $('#foto3-5 img').animate({
        'top': '115%',
        'left': '180%',
        rotate: '-40deg'
    },trans,'swing');
    $('#foto3-5peu').delay('200').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto3-5text').delay('400').animate({
        'top': '115%'
    },trans,'swing');
    $('#foto3-5').delay('600').animate({
        'left': '-100%'
    },trans,'swing');
    $('#foto4-1').delay('600').animate({
        'left': '0'
    },trans,'swing');
    $('#foto4-1text').delay('800').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva25b(){
    $('#foto4-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-2foto').delay('200').animate({
        'top': '-100%',
        'left': '200%',
        rotate: '-90deg'
    },trans,'swing');
    $('#play4-2').delay('400').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto4-2text p').delay('600').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto4-2text').delay('800').animate({
        'top': '115%'
    },trans,'swing');
    $('#foto4-1 img').delay('1000').animate({
        'opacity': '1'
    },trans,'swing');
    $('#foto4-1text').delay('1200').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva26(){
    $('#foto4-1text').animate({
        'top': '-180%'
    },trans,'swing');
    $('#foto4-1 img').delay('200').animate({
        'opacity': '.5'
    },trans,'swing');
    $('#foto4-2text').delay('400').animate({
        'top': '15%'
    },trans,'swing');
    $('#foto4-2text p').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#play4-2').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-2foto').rotate('-90deg');
    $('#foto4-2foto').delay('1000').animate({
        'top': '15%',
        'left': '0',
        rotate: '10deg'
    },trans,'swing');
    $('#foto4-2peu').delay('1200').animate({
        'left': '0'
    },trans,'swing');
    $('#foto4-2play').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat4video1.html',function(){
            $('.videopopup').show();
        });
    });
}
function diapositiva26b(){
    $('#foto4-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-3text').delay('200').animate({
        'bottom': '-215%'
    },trans,'swing');
    $('#foto4-3').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto4-1').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-2text').delay('600').animate({
        'top': '15%'
    },trans,'swing');
    $('#foto4-2text p').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-2text h2').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-2foto').delay('2200').animate({
        'top': '15%',
        'left': '0',
        rotate: '10deg'
    },trans,'swing');
    $('#foto4-2peu').delay('1400').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva27(){
    $('#foto4-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-2foto').delay('200').animate({
        'top': '180%',
        'left': '180%',
        rotate: '-90deg'
    },trans,'swing');
    $('#foto4-2text h2').delay('400').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto4-2text p').delay('600').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto4-2text').delay('800').animate({
        'top': '-185%'
    },trans,'swing');
    $('#foto4-1').delay('1000').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto4-3').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-3text').delay('1200').animate({
        'bottom': '15%'
    },trans,'swing');
    $('#foto4-3peu').delay('1400').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva27b(){
    $('#foto4-4peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#play4-43').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#play4-42').delay('300').animate({
        'top': '300px'
    },trans,'swing');
    $('#play4-41').delay('400').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto4-4text').delay('500').animate({
        'top': '215%'
    },trans,'swing');
    $('#foto4-4').delay('700').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto4-3').delay('700').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-3text').delay('900').animate({
        'bottom': '15%'
    },trans,'swing');
    $('#foto4-3peu').delay('1100').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva28(){
    $('#foto4-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-3text').delay('200').animate({
        'bottom': '215%'
    },trans,'swing');
    $('#foto4-3').delay('400').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto4-4').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-4text').delay('600').animate({
        'top': '15%'
    },trans,'swing');
    $('#play4-41').delay('700').animate({
        'top': '0'
    },trans,'swing');
    $('#play4-42').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#play4-43').delay('900').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-4peu').delay('1100').animate({
        'left': '0'
    },trans,'swing');
    $('#foto4-41play').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat4video2.html',function(){
            $('.videopopup').show();
        });
    });
    $('#foto4-42play').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat4video3.html',function(){
            $('.videopopup').show();
        });
    });
    $('#foto4-43play').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat4video4.html',function(){
            $('.videopopup').show();
        });
    });
    $('#foto4-4text span').click(function(){
        $('body').append("<div id='mesinfo'><div>");
        $('body').off('mousewheel');
        $.ajax({
            url: "mesinfo.html",
            context: document.body
        }).done(function(data) {
            $('#mesinfo').html(data);
            $('#zonaactiva').click(function(){
                console.log('Tancar');
                $('#zonaactiva').off('click');
                $('#mesinfo').remove();
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
            });
        }).error(function(e){
            console.log(e);
        });
    });
    $('#apartat5').load('apartat5.html');
}
function diapositiva28b(){
    $('#foto5-1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto5-1text h2').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto5-1text').delay('400').animate({
        'top': '225%'
    },trans,'swing');
    $('#foto5-1').delay('600').animate({
        'top': '-100%'
    },trans,'swing',function(){
        $('#apartat5').hide();
    });
    $('#foto4-4').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-4text').delay('800').animate({
        'top': '15%'
    },trans,'swing');
    $('#play4-42').delay('900').animate({
        'top': '0'
    },trans,'swing');
    $('#play4-41').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-4text p').delay('1100').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-4peu').delay('1200').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva29(){
    $('#apartat5').show();
    $('#foto4-4peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-4text p').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#play4-41').delay('300').animate({
        'top': '-300px'
    },trans,'swing');
    $('#play4-42').delay('400').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto4-4text').delay('500').animate({
        'top': '-215%'
    },trans,'swing');
    $('#foto4-4').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto5-1').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-1text').delay('800').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto5-1text h2').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-1peu').delay('1200').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva29b(){
    $('#foto5-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto5-2boto').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto5-2text').delay('400').animate({
        'top': '240%'
    },trans,'swing');
    $('#foto5-2').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto5-1').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-1text').delay('800').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto5-1text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-1peu').delay('1200').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva30(){
    $('#foto5-1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto5-1text p').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto5-1text').delay('400').animate({
        'top': '-275%'
    },trans,'swing');
    $('#foto5-1').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto5-2').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-2text').delay('800').animate({
        'top': '40%'
    },trans,'swing');
    $('#foto5-2boto').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-2peu').delay('1200').animate({
        'left': '0'
    },trans,'swing');
    $('#foto5-2boto').click(function(){
        $('body').off('mousewheel');
        $('#foto5-2fotos').show();
        if(!slider1){
            $('#foto5-2fotos .sliderfotos').slick();
            slider1=true;
        }
        $('#foto5-2fotos .blau').click(function(){
            $('#foto5-2fotos').hide();
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
        });
    });
}
function diapositiva30b(){
    $('#foto5-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto5-3boto').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto5-3text').delay('400').animate({
        'top': '210%'
    },trans,'swing');
    $('#foto5-3').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto5-2').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-2text').delay('800').animate({
        'top': '40%'
    },trans,'swing');
    $('#foto5-2text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-2peu').delay('1200').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva31(){
    $('#foto5-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto5-2text p').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto5-2text').delay('400').animate({
        'top': '-260%'
    },trans,'swing');
    $('#foto5-2').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto5-3').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-3text').delay('800').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto5-3boto').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-3peu').delay('1200').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva31b(){
    $('#foto5-4peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto5-4boto2').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto5-4boto1').delay('400').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto5-4text').delay('600').animate({
        'top': '215%'
    },trans,'swing');
    $('#foto5-4').delay('800').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto5-3').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-3text').delay('1000').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto5-3text h3').delay('1200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-3peu').delay('1400').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva32(){
    $('#foto5-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto5-3text h3').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto5-3text').delay('400').animate({
        'top': '-290%'
    },trans,'swing');
    $('#foto5-3').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto5-4').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-4text').delay('800').animate({
        'top': '15%'
    },trans,'swing');
    $('#foto5-4boto1').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-4boto2').delay('1200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-4peu').delay('1400').animate({
        'left': '0'
    },trans,'swing');
    $('#foto5-4boto2').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat5video1.html',function(){
            $('.videopopup').show();
        });
    });
}
function diapositiva32b(){
    $('#foto5-5boto').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto5-5text').delay('200').animate({
        'top': '115%'
    },trans,'swing');
    $('#foto5-5').delay('400').animate({
        'opacity': '0'
    },trans,'swing',function(){
        $('#foto5-5').hide();
    });
    $('#foto5-4text').delay('600').animate({
        'top': '15%'
    },trans,'swing');
    $('#foto5-4boto1').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-4text h3').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-4peu').delay('1200').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva33(){
    $('#foto5-5').show();
    $('#foto5-4peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto5-4text h3').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto5-4boto1').delay('400').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto5-4text').delay('600').animate({
        'top': '-85%'
    },trans,'swing');
    $('#foto5-5').delay('800').animate({
        'opacity': '1'
    },trans,'swing');
    $('#foto5-5text').delay('1000').animate({
        'top': '15%'
    },trans,'swing');
    $('#foto5-5boto').delay('1200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto5-5boto').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat5video2.html',function(){
            $('.videopopup').show();
        });
    });
    $('#apartat6').load('apartat6.html');
}
function diapositiva33b(){
    $('#foto6-1text').animate({
        'top': '-80%'
    },trans,'swing');
    $('#foto6-1').delay('200').animate({
        'left': '100%'
    },trans,'swing',function(){
        $('#apartat6').hide();
    });
    $('#foto5-5').delay('200').animate({
        'left': '0'
    },trans,'swing');
    $('#foto5-5text').delay('400').animate({
        'top': '15%'
    },trans,'swing');
    $('#foto5-5text p').delay('600').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva34(){
    $('#apartat6').show();
    $('#foto5-5text p').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto5-5text').delay('200').animate({
        'top': '-85%'
    },trans,'swing');
    $('#foto5-5').delay('400').animate({
        'left': '-100%'
    },trans,'swing');
    $('#foto6-1').delay('400').animate({
        'left': '0'
    },trans,'swing');
    $('#foto6-1text').delay('600').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva34b(){
    $('#foto6-2text').animate({
        'top': '-80%'
    },trans,'swing');
    $('#foto6-2').delay('200').animate({
        'opacity': '0'
    },trans,'swing');
    $('#foto6-1text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva35(){
    $('#foto6-1text').animate({
        'top': '120%'
    },trans,'swing');
    $('#foto6-2').delay('200').animate({
        'opacity': '1'
    },trans,'swing');
    $('#foto6-2text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva35b(){
    $('#foto6-3text').animate({
        'top': '-190%'
    },trans,'swing');
    $('#foto6-3').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto6-2').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-2text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva36(){
    $('#foto6-2text').animate({
        'top': '220%'
    },trans,'swing');
    $('#foto6-2').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto6-3').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-3text').delay('400').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto6-3peu').delay('600').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva36b(){
    $('#foto6-4 video')[0].pause();
    $('#foto6-4peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto6-4').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto6-3').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-3text').delay('400').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto6-3peu').delay('600').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva37(){
    $('#foto6-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto6-3text').delay('200').animate({
        'top': '210%'
    },trans,'swing');
    $('#foto6-3').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto6-4').delay('400').animate({
        'top': '0'
    },trans,'swing',function(){
        $('#foto6-4 video')[0].play();
    });
    $('#foto6-4peu').delay('600').animate({
        'left': '0'
    },trans,'swing');
    $('#foto6-4 video').on('ended',function(){
        pos=38;
        diapositiva38();
    });
}
function diapositiva37b(){
    $('#foto6-5peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto6-5text').delay('200').animate({
        'top': '-180%'
    },trans,'swing');
    $('#foto6-5').delay('400').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto6-4').delay('400').animate({
        'top': '0'
    },trans,'swing',function(){
        $('#foto6-4 video')[0].play();
    });
    $('#foto6-4peu').delay('600').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva38(){
    $('#foto6-4 video')[0].pause();
    $('#foto6-4peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto6-4').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto6-5').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-5text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto6-5peu').delay('600').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva38b(){
    $('#foto6-6text').animate({
        'top': '-185%'
    },trans,'swing');
    $('#foto6-6').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto6-5').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-5text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto6-5peu').delay('600').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva39(){
    $('#foto6-5peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto6-5text').delay('200').animate({
        'top': '220%'
    },trans,'swing');
    $('#foto6-5').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto6-6').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-6text').delay('600').animate({
        'top': '15%'
    },trans,'swing');
}
function diapositiva39b(){
    $('#foto6-7peu').animate({
        'left': '105%'
    },trans,'swing');
    $('#foto6-7text').delay('200').animate({
        'top': '-170%'
    },trans,'swing');
    $('#foto6-7').delay('400').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto6-6').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-6text').delay('600').animate({
        'top': '15%'
    },trans,'swing');
}
function diapositiva40(){
    $('#foto6-6text').animate({
        'top': '115%'
    },trans,'swing');
    $('#foto6-6').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto6-7').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-7text').delay('400').animate({
        'top': '30%'
    },trans,'swing');
    $('#foto6-7peu').delay('600').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva40b(){
    $('#foto6-71').animate({
        'left': '0'
    },trans,'swing');
    $('#foto6-72').animate({
        'left': '100%'
    },trans,'swing');
}
function diapositiva41(){
    $('#foto6-71').animate({
        'left': '-100%'
    },trans,'swing');
    $('#foto6-72').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva41b(){
    $('#foto6-8peu').animate({
        'left': '105%'
    },trans,'swing');
    $('#foto6-8text h3').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto6-8boto1').delay('400').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto6-8boto2').delay('600').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto6-8text').delay('800').animate({
        'top': '-180%'
    },trans,'swing');
    $('#foto6-8').delay('1000').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto6-7').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-7text').delay('1200').animate({
        'top': '30%'
    },trans,'swing');
    $('#foto6-7peu').delay('1400').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva42(){
    $('#foto6-7peu').animate({
        'left': '105%'
    },trans,'swing');
    $('#foto6-7text').delay('200').animate({
        'top': '130%'
    },trans,'swing');
    $('#foto6-7').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto6-8').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-8text').delay('600').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto6-8boto2').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-8boto1').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-8text h3').delay('1200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-8peu').delay('1400').animate({
        'left': '0'
    },trans,'swing');
    $('#foto6-8boto1').click(function(){
        $('body').off('mousewheel');
        $('#foto6-8fotos').show();
        if(!slider2){
            $('#foto6-8fotos .sliderfotos').slick();
            slider2=true;
        }
        $('#foto6-8fotos .blau').click(function(){
            $('#foto6-8fotos').hide();
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
        });
    });
    $('#foto6-8boto3').click(function(){
        $('body').off('mousewheel');
        $('#foto6-8foto').show();
        $('#foto6-8foto').click(function(){
            $('#foto6-8foto').hide();
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
        });
    });
}
function diapositiva42b(){
    $('#foto6-9peu').animate({
        'left': '105%'
    },trans,'swing');
    $('#foto6-9text p').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto6-9text').delay('400').animate({
        'top': '-175%'
    },trans,'swing');
    $('#foto6-9').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto6-8').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-8text').delay('800').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto6-8boto1').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-8boto2').delay('1200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-8boto3').delay('1400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-8peu').delay('1600').animate({
        'left': '105%'
    },trans,'swing');
}
function diapositiva43(){
    $('#foto6-8peu').animate({
        'left': '105%'
    },trans,'swing');
    $('#foto6-8boto3').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto6-8boto2').delay('400').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto6-8boto1').delay('600').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto6-8text').delay('800').animate({
        'top': '120%'
    },trans,'swing');
    $('#foto6-8').delay('1000').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto6-9').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-9text').delay('1200').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto6-9text p').delay('1400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-9peu').delay('1600').animate({
        'left': '0'
    },trans,'swing');
    $('#foto6-9boto').click(function(){
        $('body').off('mousewheel');
        $('#foto6-9fotos').show();
        if(!slider3){
            $('#foto6-9fotos .sliderfotos').slick();
            slider3=true;
        }
        $('#foto6-9fotos .blau').click(function(){
            $('#foto6-9fotos').hide();
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
        });
    });
    $('#apartat7').load('apartat7.html');
}
function diapositiva43b(){
    $('#foto7-1text p').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto7-1text').delay('200').animate({
        'top': '-80%'
    },trans,'swing');
    $('#foto7-1').delay('400').animate({
        'left': '-100%'
    },trans,'swing',function(){
        $('#apartat7').hide();
    });
    $('#foto6-9').delay('400').animate({
        'left': '0'
    },trans,'swing');
    $('#foto6-9text').delay('600').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto6-9boto').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto6-9peu').delay('1000').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva44(){
    $('#apartat7').show();
    $('#foto6-9peu').animate({
        'left': '105%'
    },trans,'swing');
    $('#foto6-9boto').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto6-9text').delay('400').animate({
        'top': '125%'
    },trans,'swing');
    $('#foto6-9').delay('600').animate({
        'left': '100%'
    },trans,'swing');
    $('#foto7-1').delay('600').animate({
        'left': '0'
    },trans,'swing');
    $('#foto7-1text').delay('800').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto7-1text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva44b(){
    $('#foto7-2text').animate({
        'top': '-80%'
    },trans,'swing');
    $('#foto7-2').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto7-1').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-1text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto7-1text h2').delay('600').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva45(){
    $('#foto7-1text h2').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto7-1text').delay('200').animate({
        'top': '120%'
    },trans,'swing');
    $('#foto7-1').delay('400').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto7-2').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-2text').delay('600').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva45b(){
    $('#foto7-3text').animate({
        'top': '-70%'
    },trans,'swing');
    $('#foto7-3').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto7-2').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-2text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva46(){
    $('#foto7-2text').animate({
        'top': '120%'
    },trans,'swing');
    $('#foto7-2').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto7-3').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-3text').delay('400').animate({
        'top': '30%'
    },trans,'swing');
}
function diapositiva46b(){
    $('#foto7-4text').animate({
        'top': '-80%'
    },trans,'swing');
    $('#foto7-4').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto7-3').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-3text').delay('400').animate({
        'top': '30%'
    },trans,'swing');
}
function diapositiva47(){
    $('#foto7-3text').animate({
        'top': '130%'
    },trans,'swing');
    $('#foto7-3').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto7-4').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-4text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva47b(){
    $('#foto7-5text p').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto7-5text').delay('200').animate({
        'top': '-80%'
    },trans,'swing');
    $('#foto7-5').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto7-4').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-4text').delay('600').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva48(){
    $('#foto7-4text').animate({
        'top': '120%'
    },trans,'swing');
    $('#foto7-4').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto7-5').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-5text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto7-5text p').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-5boto').click(function(){
        $('body').off('mousewheel');
        $('#foto7-5fotos').show();
        if(!slider4){
            $('#foto7-5fotos .sliderfotos').slick();
            slider4=true;
        }
        $('#foto7-5fotos .blau').click(function(){
            $('#foto7-5fotos').hide();
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
        });
    });
}
function diapositiva48b(){
    $('#foto7-6text p').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto7-6text').delay('200').animate({
        'top': '-80%'
    },trans,'swing');
    $('#foto7-6').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto7-5').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-5text').delay('600').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto7-5boto').delay('800').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva49(){
    $('#foto7-5boto').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto7-5text').delay('200').animate({
        'top': '120%'
    },trans,'swing');
    $('#foto7-5').delay('400').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto7-6').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-6text').delay('600').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto7-6text p').delay('800').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva49b(){
    $('#foto7-7text p').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto7-7text i').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto7-7text').delay('400').animate({
        'top': '-90%'
    },trans,'swing');
    $('#foto7-7').delay('600').animate({
        'opacity': '0'
    },trans,'swing',function(){
        $('#foto7-7').hide();
    });
    $('#foto7-6text').delay('800').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto7-6text h2').delay('1000').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva50(){
    $('#foto7-7').show();
    $('#foto7-6text h2').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto7-6text').delay('200').animate({
        'top': '120%'
    },trans,'swing');
    $('#foto7-7').delay('400').animate({
        'opacity': '1'
    },trans,'swing');
    $('#foto7-7text').delay('600').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto7-7text i').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-7text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva50b(){
    $('#foto7-8text p').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto7-8text').delay('200').animate({
        'top': '-70%'
    },trans,'swing');
    $('#foto7-8').delay('400').animate({
        'opacity': '0'
    },trans,'swing',function(){
        $('#foto7-8').hide();
    });
    $('#foto7-7text').delay('600').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto7-7text i').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-7boto').delay('1000').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva51(){
    $('#foto7-8').show();
    $('#foto7-7boto').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto7-7text i').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto7-7text').delay('400').animate({
        'top': '110%'
    },trans,'swing');
    $('#foto7-8').delay('600').animate({
        'opacity': '1'
    },trans,'swing');
    $('#foto7-8text').delay('800').animate({
        'top': '30%'
    },trans,'swing');
    $('#foto7-8text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-8boto').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat7video1.html',function(){
            $('.videopopup').show();
        });
    });
}
function diapositiva51b(){
    $('#foto7-9text p:first').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto7-9text p:last').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto7-9boto1').delay('400').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto7-9text').delay('600').animate({
        'top': '-75%'
    },trans,'swing');
    $('#foto7-9').delay('800').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto7-8').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-8text').delay('1000').animate({
        'top': '30%'
    },trans,'swing');
    $('#foto7-8boto').delay('1200').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva52(){
    $('#foto7-8boto').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto7-8text').delay('200').animate({
        'top': '130%'
    },trans,'swing');
    $('#foto7-8').delay('400').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto7-9').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-9text').delay('600').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto7-9boto1').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-9text p:last').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-9text p:first').delay('1200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto7-9boto1').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat7video2.html',function(){
            $('.videopopup').show();
        });
    });
}


// Funcions de video

function tancarvideo(){
    $('.videopopup').hide();
    $('#videos').html('');
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
}

function passar(id){
    $('body').off('mousewheel');
    diapositiva(id);
    setTimeout(function(){
        if (id < 100){
            pos=id;
        } else {
            pos=id/10;
        }
        $('body').on('mousewheel',function(e){
            controlMouse(e);
        });
    },2000);
}