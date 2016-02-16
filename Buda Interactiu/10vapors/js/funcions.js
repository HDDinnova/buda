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
            'top': '45%'
        },trans,'swing');
        $('#foto1-1peu').delay('300').animate({
            'left': '100px'
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
    $('#foto1-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-2').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-1').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto1-1text').delay('400').animate({
        'top': '45%'
    },trans,'swing');
    $('#foto1-1peu').delay('600').animate({
        'left': '100px'
    },trans,'swing');
    $('.scroll').delay('800').animate({
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
        'top': '-140%'
    },trans,'swing');
    $('#foto1-1').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto1-2').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto1-2peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva11b(){
    $('#foto1-2text').animate({
        'top': '110%'
    },trans,'swing',function(){
        $('#foto1-2text').hide();
    });
    $('#foto1-2 .tapa').delay('200').animate({
        'opacity': '0'
    },trans,'swing');
    $('#foto1-2peu').delay('400').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva12(){
    $('#foto1-2text').show();
    $('#foto1-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-2 .tapa').delay('200').animate({
        'opacity': '.7'
    },trans,'swing');
    $('#foto1-2text').delay('400').animate({
        'top': '10%'
    },trans,'swing');
}
function diapositiva12b(){
    $('#foto1-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-3text').delay('200').animate({
        'top': '220%'
    },trans,'swing');
    $('#foto1-3').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-2').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto1-2text').delay('600').animate({
        'top': '10%'
    },trans,'swing');
}
function diapositiva13(){
    $('#foto1-2text').animate({
        'top': '-200%'
    },trans,'swing');
    $('#foto1-2').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto1-3').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto1-3text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto1-3peu').delay('600').animate({
        'left': '100px'
    },trans,'swing');
    $('#apartat2').load('apartat2.html');
}
function diapositiva13b(){
    $('#foto2-1 video')[0].pause();
    $('#foto2-1text h2').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto2-1text').delay('200').animate({
        'top': '110%'
    },trans,'swing');
    $('#foto2-1').delay('400').animate({
        'left': '100%'
    },trans,'swing');
    $('#foto1-3').delay('400').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-3text').delay('600').animate({
        'top': '20%'
    },trans,'swing');
    $('#foto1-3peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva14(){
    $('#apartat2').show();
    $('#foto1-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-3text').delay('200').animate({
        'top': '-80%'
    },trans,'swing');
    $('#foto1-3').delay('400').animate({
        'left': '-100%'
    },trans,'swing');
    $('#foto2-1').delay('400').animate({
        'left': '0'
    },trans,'swing');
    $('#foto2-1text').delay('600').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto2-1text h2').delay('800').animate({
        'top': '0'
    },trans,'swing',function(){
        $('#foto2-1 video')[0].play();
    });
}
function diapositiva14b(){
    $('#foto2-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-2b').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto2-2text').delay('400').animate({
        'top': '230%'
    },trans,'swing');
    $('#foto2-2').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-1').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-1text').delay('800').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto2-1text p').delay('1000').animate({
        'top': '0'
    },trans,'swing',function(){
        $('#foto2-1 video')[0].play();
    });
}
function diapositiva15(){
    $('#foto2-1 video')[0].pause();
    $('#foto2-1text p').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto2-1text').delay('200').animate({
        'top': '-190%'
    },trans,'swing');
    $('#foto2-1').delay('400').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto2-2').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-2text').delay('600').animate({
        'top': '30%'
    },trans,'swing');
    $('#foto2-2b').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-2peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
    $('#apartat3').load('apartat3.html');
}
function diapositiva15b(){
    $('#foto3-1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto3-1text p').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto3-1text').delay('400').animate({
        'top': '-50%'
    },trans,'swing');
    $('#foto3-1').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-2').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-2text').delay('800').animate({
        'top': '30%'
    },trans,'swing');
    $('#foto2-2text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-2peu').delay('1200').animate({
        'left': '-50%'
    },trans,'swing');
}
function diapositiva16(){
    $('#apartat3').show();
    $('#foto2-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-2text p').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto2-2text').delay('400').animate({
        'top': '-170%'
    },trans,'swing');
    $('#foto2-2').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto3-1').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-1text').delay('800').animate({
        'top': '50%'
    },trans,'swing');
    $('#foto3-1text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-1peu').delay('1200').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva16b(){
    $('#foto3-2 video')[0].pause();
    $('#foto3-2text').animate({
        'top': '-50%'
    },trans,'swing');
    $('#foto3-2').delay('200').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto3-1').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-1text').delay('400').animate({
        'top': '50%'
    },trans,'swing');
    $('#foto3-1text h2').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-1peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva17(){
    $('#foto3-1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto3-1text h2').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto3-1text').delay('400').animate({
        'top': '150%'
    },trans,'swing');
    $('#foto3-1').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto3-2').delay('600').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto3-2text').delay('800').animate({
        'top': '50%'
    },trans,'swing',function(){
        $('#foto3-2 video')[0].play();
    });
}
function diapositiva17b(){
    $('#foto3-3 video')[0].pause();
    $('#foto3-3').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto3-2').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-2 video')[0].play();
    });
    $('#foto3-2text').delay('200').animate({
        'top': '50%'
    },trans,'swing');
}
function diapositiva18(){
    $('#foto3-2 video')[0].pause();
    $('#foto3-2text').animate({
        'top': '250%'
    },trans,'swing');
    $('#foto3-2').delay('200').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto3-3').delay('200').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-3 video')[0].play();
    });
}
function diapositiva18b(){
    $('#foto3-4 video')[0].pause();
    $('#foto3-4text').animate({
        'top': '-80%'
    },trans,'swing');
    $('#foto3-3').delay('200').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-3 video')[0].play();
    });
    $('#foto3-4').delay('200').animate({
        'bottom': '100%'
    },trans,'swing');
}
function diapositiva19(){
    $('#foto3-3 video')[0].pause();
    $('#foto3-3').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto3-4').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-4 video')[0].play();
    });
    $('#foto3-4text').delay('200').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva19b(){
    $('#foto3-5 video')[0].pause();
    $('#foto3-5text').animate({
        'top': '-40%'
    },trans,'swing');
    $('#foto3-5').delay('200').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto3-4').delay('200').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-4 video')[0].play();
    });
    $('#foto3-4text').delay('400').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva20(){
    $('#foto3-4 video')[0].pause();
    $('#foto3-4text').animate({
        'top': '120%'
    },trans,'swing');
    $('#foto3-4').delay('200').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto3-5').delay('200').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-5 video')[0].play();
    });
    $('#foto3-5text').delay('400').animate({
        'top': '60%'
    },trans,'swing');
}
function diapositiva20b(){
    $('#foto3-6 video')[0].pause();
    $('#foto3-6').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto3-5').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-5 video')[0].play();
    });
    $('#foto3-5text').delay('200').animate({
        'top': '60%'
    },trans,'swing');
}
function diapositiva21(){
    $('#foto3-5 video')[0].pause();
    $('#foto3-5text').animate({
        'top': '160%'
    },trans,'swing');
    $('#foto3-5').delay('200').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto3-6').delay('200').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-6 video')[0].play();
    });
}
function diapositiva21b(){
    $('#foto3-7 video')[0].pause();
    $('#foto3-7text').animate({
        'top': '-80%'
    },trans,'swing');
    $('#foto3-7').delay('200').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto3-6').delay('200').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-6 video')[0].play();
    });
}
function diapositiva22(){
    $('#foto3-6 video')[0].pause();
    $('#foto3-6').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto3-7').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-7 video')[0].play();
    });
    $('#foto3-7text').delay('200').animate({
        'top': '60%'
    },trans,'swing');
}
function diapositiva22b(){
    $('#foto3-8 video')[0].pause();
    $('#foto3-8text').animate({
        'top': '-60%'
    },trans,'swing');
    $('#foto3-8').delay('200').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto3-7').delay('200').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-7 video')[0].play();
    });
    $('#foto3-7text').delay('400').animate({
        'top': '60%'
    },trans,'swing');
}
function diapositiva23(){
    $('#foto3-7 video')[0].pause();
    $('#foto3-7text').animate({
        'top': '160%'
    },trans,'swing');
    $('#foto3-7').delay('200').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto3-8').delay('200').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-8 video')[0].play();
    });
    $('#foto3-8text').delay('400').animate({
        'top': '60%'
    },trans,'swing');
    $('#apartat4').load('apartat4.html');
}
function diapositiva23b(){
    $('#foto4-1text p').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto4-1text').delay('200').animate({
        'top': '-50%'
    },trans,'swing');
    $('#foto4-1').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto3-8').delay('400').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-8 video')[0].play();
    });
    $('#foto3-8text').delay('600').animate({
        'top': '60%'
    },trans,'swing');
}
function diapositiva24(){
    $('#apartat4').show();
    $('#foto3-8 video')[0].pause();
    $('#foto3-8text').animate({
        'top': '160%'
    },trans,'swing');
    $('#foto3-8').delay('200').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto4-1').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-1text').delay('400').animate({
        'top': '15%'
    },trans,'swing');
    $('#foto4-1text p').delay('600').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva24b(){
    $('#foto4-1diari1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-1diari1').delay('200').animate({
        'left': '100%'
    },trans,'swing');
    $('#foto4-1text2').delay('400').animate({
        'bottom': '-180%'
    },trans,'swing');
    $('#foto4-1 .tapa').delay('600').animate({
        'opacity': '0'
    },trans,'swing');
    $('#foto4-1text').delay('800').animate({
        'top': '15%'
    },trans,'swing');
    $('#foto4-1text h2').delay('1000').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva25(){
    $('#foto4-1text h2').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto4-1text').delay('200').animate({
        'top': '115%'
    },trans,'swing');
    $('#foto4-1 .tapa').delay('400').animate({
        'opacity': '.6'
    },trans,'swing');
    $('#foto4-1text2').delay('600').animate({
        'bottom': '10%'
    },trans,'swing');
    $('#foto4-1diari1').delay('800').animate({
        'left': '0'
    },trans,'swing',function(){
        if (!diari1){
            $("#foto4-1diari1zoom").elevateZoom({
                scrollZoom : true,
                zoomType: "lens",
                lensShape: "square",
                loadingIcon: "true",
                lensSize: 400
            });
            diari1 = !diari1;
        }
    });
    $('#foto4-1diari1peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva25b(){
    $('#foto4-1diari2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-1diari2').delay('200').animate({
        'left': '100%'
    },trans,'swing');
    $('#foto4-1diari1').delay('200').animate({
        'left': '0'
    },trans,'swing');
    $('#foto4-1diari1peu').delay('400').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva26(){
    $('#foto4-1diari1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-1diari1').delay('200').animate({
        'left': '-100%'
    },trans,'swing');
    $('#foto4-1diari2').delay('200').animate({
        'left': '0'
    },trans,'swing',function(){
        if (!diari2){
            $("#foto4-1diari2zoom").elevateZoom({
                scrollZoom : true,
                zoomType: "lens",
                lensShape: "square",
                loadingIcon: "true",
                lensSize: 400
            });
            diari2 = !diari2;
        }
    });
    $('#foto4-1diari2peu').delay('400').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva26b(){
    $('#foto4-2 video')[0].pause();
    $('#foto4-2peu').animate({
        'left': '-150%'
    },trans,'swing');
    $('#foto4-1 .tapa').delay('200').animate({
        'backgroundColor': '#F15D42',
        'opacity': '.6'
    },trans,'swing');
    $('#foto4-2').delay('200').animate({
        'left': '100%'
    },trans,'swing');
    $('#foto4-1diari2').delay('200').animate({
        'left': '0'
    },trans,'swing');
    $('#foto4-1text2').delay('400').animate({
        'bottom': '10%'
    },trans,'swing');
    $('#foto4-1diari2peu').delay('600').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva27(){
    $('#foto4-1diari2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-1text2').delay('200').animate({
        'bottom': '-180%'
    },trans,'swing');
    $('#foto4-1diari2').delay('400').animate({
        'left': '-100%'
    },trans,'swing');
    $('#foto4-2').delay('400').animate({
        'left': '0'
    },trans,'swing',function(){
        $('#foto4-2 video')[0].play();
    });
    $('#foto4-1 .tapa').delay('400').animate({
        'backgroundColor': 'black',
        'opacity': '.8'
    },trans,'swing');
    $('#foto4-2peu').delay('600').animate({
        'left': '100px'
    },trans,'swing');
}

// Funcions de video

function tancarvideo(){
    $('.videopopup').hide();
    $('#videos').html('');
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
}