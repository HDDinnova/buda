var trans = 1200;
var sona=true;
var mutexvideo=false;
var diari1=false;
var diari2=false;
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
                setTimeout(function(){
                    pos=12;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 12:
                $('body').off('mousewheel');
                diapositiva13();
                setTimeout(function(){
                    pos=13;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 13:
                $('body').off('mousewheel');
                diapositiva14();
                setTimeout(function(){
                    pos=14;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 14:
                $('body').off('mousewheel');
                diapositiva15();
                setTimeout(function(){
                    pos=15;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 15:
                $('body').off('mousewheel');
                diapositiva16();
                setTimeout(function(){
                    pos=16;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 16:
                $('body').off('mousewheel');
                diapositiva17();
                setTimeout(function(){
                    pos=17;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 17:
                $('body').off('mousewheel');
                diapositiva18();
                setTimeout(function(){
                    pos=18;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 18:
                $('body').off('mousewheel');
                diapositiva19();
                setTimeout(function(){
                    pos=19;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 19:
                $('body').off('mousewheel');
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
            case 22:
                $('body').off('mousewheel');
                diapositiva23();
                setTimeout(function(){
                    pos=23;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 23:
                $('body').off('mousewheel');
                diapositiva24();
                setTimeout(function(){
                    pos=24;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 24:
                $('body').off('mousewheel');
                diapositiva25();
                setTimeout(function(){
                    pos=25;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 25:
                $('body').off('mousewheel');
                diapositiva26();
                setTimeout(function(){
                    pos=26;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 26:
                $('body').off('mousewheel');
                diapositiva27();
                setTimeout(function(){
                    pos=27;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            default :
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
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
            case 12:
                $('body').off('mousewheel');
                diapositiva11b();
                setTimeout(function(){
                    pos=11;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 13:
                $('body').off('mousewheel');
                diapositiva12b();
                setTimeout(function(){
                    pos=12;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 14:
                $('body').off('mousewheel');
                diapositiva13b();
                setTimeout(function(){
                    pos=13;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 15:
                $('body').off('mousewheel');
                diapositiva14b();
                setTimeout(function(){
                    pos=14;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 16:
                $('body').off('mousewheel');
                diapositiva15b();
                setTimeout(function(){
                    pos=15;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 17:
                $('body').off('mousewheel');
                diapositiva16b();
                setTimeout(function(){
                    pos=16;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 18:
                $('body').off('mousewheel');
                diapositiva17b();
                setTimeout(function(){
                    pos=17;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 19:
                $('body').off('mousewheel');
                diapositiva18b();
                setTimeout(function(){
                    pos=18;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 20:
                $('body').off('mousewheel');
                diapositiva19b();
                setTimeout(function(){
                    pos=19;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 21:
                $('body').off('mousewheel');
                diapositiva20b();
                setTimeout(function(){
                    pos=20;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 22:
                $('body').off('mousewheel');
                diapositiva21b();
                setTimeout(function(){
                    pos=21;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 23:
                $('body').off('mousewheel');
                diapositiva22b();
                setTimeout(function(){
                    pos=22;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 24:
                $('body').off('mousewheel');
                diapositiva23b();
                setTimeout(function(){
                    pos=23;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 25:
                $('body').off('mousewheel');
                diapositiva24b();
                setTimeout(function(){
                    pos=24;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 26:
                $('body').off('mousewheel');
                diapositiva25b();
                setTimeout(function(){
                    pos=25;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 27:
                $('body').off('mousewheel');
                diapositiva26b();
                setTimeout(function(){
                    pos=26;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            default :
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
        }
    }
}
function diapositiva1(){
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
}
function diapositiva10(){
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
}
function diapositiva11(){
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
}
function diapositiva11b(){
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
}
function diapositiva12(){
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
}
function diapositiva12b(){
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
}
function diapositiva13(){
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
}
function diapositiva13b(){
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
}
function diapositiva14(){
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
}
function diapositiva14b(){
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
}
function diapositiva15(){
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
}
function diapositiva15b(){
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
}
function diapositiva16(){
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
}
function diapositiva16b(){
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
}
function diapositiva17(){
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
}
function diapositiva17b(){
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
}
function diapositiva18(){
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
}
function diapositiva18b(){
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
}
function diapositiva19(){
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
}
function diapositiva19b(){
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
}
function diapositiva20(){
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
}
function diapositiva20b(){
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
}
function diapositiva21(){
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
}


// Funcions de video

function tancarvideo(){
    $('.videopopup').hide();
    $('#videos').html('');
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
}