var trans = 1200;
var sona=true;
var mutexvideo=false;
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
                $('#foto1-1video video')[0].pause();
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
                $('#foto1-6video video')[0].pause();
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
                $('#foto2-5video video')[0].pause();
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
            case 27:
                $('body').off('mousewheel');
                diapositiva28();
                setTimeout(function(){
                    pos=28;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 28:
                $('body').off('mousewheel');
                diapositiva29();
                setTimeout(function(){
                    pos=29;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 29:
                $('body').off('mousewheel');
                diapositiva210();
                setTimeout(function(){
                    pos=210;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 210:
                $('body').off('mousewheel');
                $('#foto2-9video video')[0].pause();
                diapositiva211();
                setTimeout(function(){
                    pos=211;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 211:
                $('body').off('mousewheel');
                diapositiva30();
                setTimeout(function(){
                    pos=30;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 30:
                $('body').off('mousewheel');
                diapositiva31();
                setTimeout(function(){
                    pos=31;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 31:
                $('body').off('mousewheel');
                $('#foto3-1video video')[0].pause();
                diapositiva32();
                setTimeout(function(){
                    pos=32;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 32:
                $('body').off('mousewheel');
                diapositiva33();
                setTimeout(function(){
                    pos=33;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 33:
                $('body').off('mousewheel');
                diapositiva40();
                setTimeout(function(){
                    pos=40;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 40:
                $('body').off('mousewheel');
                diapositiva41();
                setTimeout(function(){
                    pos=41;
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
                $('#foto1-6video video')[0].pause();
                diapositiva16b();
                setTimeout(function(){
                    pos=16;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 20:
                $('body').off('mousewheel');
                $('#foto1-6video video')[0].pause();
                diapositiva17b();
                setTimeout(function(){
                    pos=17;
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
                $('#foto2-5video video')[0].pause();
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
                $('#foto2-5video video')[0].pause();
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
            case 28:
                $('body').off('mousewheel');
                diapositiva27b();
                setTimeout(function(){
                    pos=27;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 29:
                $('body').off('mousewheel');
                diapositiva28b();
                setTimeout(function(){
                    pos=28;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 210:
                $('body').off('mousewheel');
                $('#foto2-9video video')[0].pause();
                diapositiva29b();
                setTimeout(function(){
                    pos=29;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 211:
                $('body').off('mousewheel');
                diapositiva210b();
                setTimeout(function(){
                    pos=210;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 30:
                $('body').off('mousewheel');
                diapositiva211b();
                setTimeout(function(){
                    pos=211;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 31:
                $('body').off('mousewheel');
                $('#foto3-1video video')[0].pause();
                diapositiva30b();
                setTimeout(function(){
                    pos=30;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 32:
                $('body').off('mousewheel');
                diapositiva31b();
                setTimeout(function(){
                    pos=31;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 33:
                $('body').off('mousewheel');
                diapositiva32b();
                setTimeout(function(){
                    pos=32;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 40:
                $('body').off('mousewheel');
                diapositiva33b();
                setTimeout(function(){
                    pos=33;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 41:
                $('body').off('mousewheel');
                diapositiva40b();
                setTimeout(function(){
                    pos=40;
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
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto1-1text').animate({
            'top': '40%'
        },trans,'swing');
        $('#foto1-1peu').delay('300').animate({
            'left': '50px'
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
    $('#foto1-1text2').animate({
        'top': '-150%'
    },trans,'swing');
    $('#foto1-1tapa').delay('200').animate({
        'opacity': '0'
    },trans,'swing');
    $('#foto1-1text').animate({
        'top': '40%'
    },trans,'swing');
    $('#foto1-1peu').delay('300').animate({
        'left': '50px'
    },trans,'swing');
}
function diapositiva11(){
    $('.scroll').animate({
        'bottom': '-150%'
    },trans,'swing');
    $('#foto1-1peu').delay('200').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-1text').delay('400').animate({
        'top': '240%'
    },trans,'swing');
    $('#foto1-1tapa').delay('600').animate({
        'opacity': '.8'
    },trans,'swing');
    $('#foto1-1text2').delay('800').animate({
        'top': '25%'
    },trans,'swing');
}
function diapositiva11b(){
    $('#foto1-1videopeu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-1video video')[0].pause();
    $('#foto1-1video').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-1tapa').delay('200').animate({
        backgroundColor: '#888D57'
    },trans,'swing');
    $('#foto1-1text2').delay('400').animate({
        'top': '25%'
    },trans,'swing');
}
function diapositiva12(){
    $('#foto1-1text2').animate({
        'top': '225%'
    },trans,'swing');
    $('#foto1-1tapa').animate({
        backgroundColor: '#000000'
    },trans,'swing');
    $('#foto1-1video').delay('200').animate({
        'top': '0'
    },trans,'swing',function(){
        $('#foto1-1video video')[0].play();
    });
    $('#foto1-1videopeu').delay('400').animate({
        'left': ($('#foto1-1video video').offset().left-200)+'px'
    },trans,'swing');
    $('#foto1-1video video').on('ended',function(){
        pos=13;
        diapositiva13();
    });
}
function diapositiva12b(){
    $('#foto1-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-2text p').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto1-2text').delay('400').animate({
        'top': '-150%'
    },trans,'swing');
    $('#foto1-2').delay('600').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto1-1').delay('600').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-1video').delay('800').animate({
        'top': '0'
    },trans,'swing',function(){
        $('#foto1-1video video')[0].play();
    });
    $('#foto1-1videopeu').delay('1000').animate({
        'left': ($('#foto1-1video video').offset().left-200)+'px'
    },trans,'swing');
}
function diapositiva13(){
    $('#foto1-1videopeu').animate({
        'left': '-150%'
    },trans,'swing');
    $('#foto1-1video').delay('200').animate({
        'top': '200%'
    },trans,'swing');
    $('#foto1-1').delay('600').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto1-2').delay('600').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-2text').delay('800').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto1-2text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto1-2peu').delay('1200').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva13b(){
    $('#foto1-3text').animate({
        'top': '-150%'
    },trans,'swing');
    $('#foto1-3').delay('200').animate({
        'opacity': '0'
    },trans,'swing');
    $('#foto1-2text').delay('400').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto1-2text h2').delay('600').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva14(){
    $('#foto1-2text h2').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto1-2text').delay('400').animate({
        'top': '225%'
    },trans,'swing');
    $('#foto1-3').delay('600').animate({
        'opacity': '1'
    },trans,'swing');
    $('#foto1-3text').delay('800').animate({
        'top': '22%'
    },trans,'swing');
}
function diapositiva14b(){
    $('#foto1-4peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-4text').delay('200').animate({
        'top': '-200%'
    },trans,'swing');
    $('#foto1-4').delay('400').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto1-3').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-3text').delay('600').animate({
        'top': '22%'
    },trans,'swing');
    $('#foto1-2peu').delay('600').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva15(){
    $('#foto1-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-3text').delay('200').animate({
        'top': '122%'
    },trans,'swing');
    $('#foto1-3').delay('400').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto1-4').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-4text').delay('600').animate({
        'top': '40%'
    },trans,'swing');
    $('#foto1-4peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva15b(){
    $('#foto1-5text').animate({
        'top': '-200%'
    },trans,'swing');
    $('#foto1-5').delay('200').animate({
        'opacity': '0'
    },trans,'swing');
    $('#foto1-4text').delay('400').animate({
        'top': '40%'
    },trans,'swing');
}
function diapositiva16(){
    $('#foto1-4text').animate({
        'top': '140%'
    },trans,'swing');
    $('#foto1-5').delay('200').animate({
        'opacity': '1'
    },trans,'swing');
    $('#foto1-5text').delay('400').animate({
        'top': '40%'
    },trans,'swing');
}
function diapositiva16b(){
    $('#foto1-6video p').animate({
        'right': '-50%'
    },trans,'swing');
    $('#foto1-6video').delay('200').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto1-5text').delay('400').animate({
        'top': '40%'
    },trans,'swing');
    $('#foto1-4peu').delay('600').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva17(){
    $('#foto1-4peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-5text').delay('200').animate({
        'top': '140%'
    },trans,'swing');
    $('#foto1-6video').delay('400').animate({
        'bottom': '0'
    },trans,'swing',function(){
         $('#foto1-6video video')[0].play();
    });
    $('#foto1-6video p').delay('600').animate({
        'right': '10px'
    },trans,'swing');
    $('#foto1-6video video').on('ended',function(){
        pos=20;
        diapositiva20();
    });
}
function diapositiva17b(){
    $('#foto2-1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-1text h2').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto2-1text').delay('400').animate({
        'top': '225%'
    },trans,'swing');
    $('#foto1-5').delay('600').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-6video').delay('600').animate({
        'bottom': '0'
    },trans,'swing',function(){
         $('#foto1-6video video')[0].play();
    });
    $('#foto2-1').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-6video p').delay('1000').animate({
        'right': '10px'
    },trans,'swing');
}
function diapositiva20(){
    $('#apartat2').show();
    $('#foto1-6video p').animate({
        'right': '-50%'
    },trans,'swing');
    $('#foto1-5').delay('200').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto1-6video').delay('200').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto2-1').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-1text').delay('600').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto2-1text h2').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-1peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva20b(){
    $('#foto2-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-2text p').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto2-2text').delay('400').animate({
        'top': '250%'
    },trans,'swing');
    $('#foto2-1').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-2').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-1peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
    $('#foto2-1text').delay('1000').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto2-1text p').delay('1200').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva21(){
    $('#foto2-1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-1text p').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto2-1text').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-1').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto2-2').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-2text').delay('800').animate({
        'top': '50%'
    },trans,'swing');
    $('#foto2-2text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-2peu').delay('1200').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva21b(){
    $('#foto2-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-3').delay('200').animate({
        'left': '-100%'
    },trans,'swing');
    $('#foto2-2').delay('200').animate({
        'left': '0'
    },trans,'swing');
    $('#foto2-2peu').delay('400').animate({
        'left': '100px'
    },trans,'swing');
    $('#foto2-2text').delay('600').animate({
        'top': '50%'
    },trans,'swing');
    $('#foto2-2text h4').delay('800').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva22(){
    $('#foto2-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-2text h4').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto2-2text').delay('400').animate({
        'top': '-150%'
    },trans,'swing');
    $('#foto2-2').delay('600').animate({
        'left': '100%'
    },trans,'swing');
    $('#foto2-3').delay('600').animate({
        'left': '0'
    },trans,'swing');
    $('#foto2-3peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva22b(){
    $('#foto2-4text').animate({
        'top': '220%'
    },trans,'swing');
    $('#foto2-3').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-4').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-3peu').delay('400').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva23(){
    $('#foto2-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-3').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto2-4').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-4text').delay('200').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva23b(){
    $('#foto2-5peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-5text p').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto2-5text').delay('400').animate({
        'top': '250%'
    },trans,'swing');
    $('#foto2-5').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-4').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-4text').delay('800').animate({
        'top': '20%'
    },trans,'swing');
}
function diapositiva24(){
    $('#foto2-4text').animate({
        'top': '-220%'
    },trans,'swing');
    $('#foto2-4').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto2-5').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-5text').delay('400').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto2-5text p').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-5peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva24b(){
    $('#foto2-5video p').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-5video').delay('200').animate({
        'opacity': '0'
    },trans,'swing');
    $('#foto2-5text').delay('400').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto2-5text h4').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-5peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva25(){
    $('#foto2-5peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-5text h4').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto2-5text').delay('400').animate({
        'top': '-225%'
    },trans,'swing');
    $('#foto2-5video').delay('600').animate({
        'opacity': '1'
    },trans,'swing',function(){
        $('#foto2-5video video')[0].play();
    });
    $('#foto2-5video p').delay('1200').animate({
        'left': ($('#foto2-5video video').offset().left-200)+'px'
    },trans,'swing');
    $('#foto2-5video video').on('ended',function(){
        pos=26;
        diapositiva26();
    });
}
function diapositiva25b(){
    $('#foto2-6peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-6text p').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto2-6text').delay('400').animate({
        'top': '235%'
    },trans,'swing');
    $('#foto2-6').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-5').delay('600').animate({
        'top': '0'
    },trans,'swing',function(){
        $('#foto2-5video video')[0].play();
    });
    $('#foto2-5video p').delay('800').animate({
        'left': ($('#foto2-5video video').offset().left-200)+'px'
    },trans,'swing');
}
function diapositiva26(){
    $('#foto2-5video p').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-5').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto2-6').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-6text').delay('400').animate({
        'top': '35%'
    },trans,'swing');
    $('#foto2-6text p').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-6peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
    $('#foto2-6play').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat2video1.html',function(){
            $('.videopopup').show();
        });
    });
}
function diapositiva26b(){
    $('#foto2-7peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-7text').delay('200').animate({
        'top': '240%'
    },trans,'swing');
    $('#foto2-7').delay('400').animate({
        'opacity': '0'
    },trans,'swing',function(){
        $('#foto2-7').hide();
    });
    $('#foto2-6text').delay('600').animate({
        'top': '35%'
    },trans,'swing');
    $('#play2-6').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-6peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva27(){
    $('#foto2-7').show();
    $('#foto2-6peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#play2-6').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto2-6text').delay('400').animate({
        'top': '-135%'
    },trans,'swing');
    $('#foto2-7').delay('600').animate({
        'opacity': '1'
    },trans,'swing');
    $('#foto2-7text').delay('800').animate({
        'top': '40%'
    },trans,'swing');
    $('#foto2-7peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva27b(){
    $('#foto2-8peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-8text p').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto2-8text').delay('400').animate({
        'top': '225%'
    },trans,'swing');
    $('#foto2-8').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-7').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-7text').delay('800').animate({
        'top': '40%'
    },trans,'swing');
    $('#foto2-7peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva28(){
    $('#foto2-7peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-7text').delay('200').animate({
        'top': '-140%'
    },trans,'swing');
    $('#foto2-7').delay('400').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto2-8').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-8text').delay('600').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto2-8text p').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-8peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva28b(){
    $('#foto2-9peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-9text p').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto2-9text').delay('400').animate({
        'top': '230%'
    },trans,'swing');
    $('#foto2-9').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-8').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-8text').delay('800').animate({
        'top': '25%'
    },trans,'swing');
    $('#foto2-8text h4').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-8peu').delay('1200').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva29(){
    $('#foto2-8peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-8text h4').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto2-8text').delay('400').animate({
        'top': '-125%'
    },trans,'swing');
    $('#foto2-8').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto2-9').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-9text').delay('600').animate({
        'top': '30%'
    },trans,'swing');
    $('#foto2-9text p').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-9peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva29b(){
    $('#foto2-9video p').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-9video').delay('200').animate({
        'bottom': '-200%'
    },trans,'swing');
    $('#foto2-9tapa').delay('400').animate({
        'opacity': '0'
    },trans,'swing');
    $('#foto2-9text').delay('600').animate({
        'top': '30%'
    },trans,'swing');
    $('#foto2-9text h4').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-9peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva210(){
    $('#foto2-9peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-9text h4').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto2-9text').delay('400').animate({
        'top': '-130%'
    },trans,'swing');
    $('#foto2-9tapa').delay('600').animate({
        'opacity': '.7'
    },trans,'swing');
    $('#foto2-9video').delay('800').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto2-9video video')[0].play();
    });
    $('#foto2-9video p').delay('1000').animate({
        'left': ($('#foto2-9video video').offset().left-200)+'px'
    },trans,'swing');
    $('#foto2-9video video').on('ended',function(){
        pos=211;
        diapositiva211();
    });
}
function diapositiva210b(){
    $('#foto2-9text2').animate({
        'top': '250%'
    },trans,'swing');
    $('#foto2-9tapa').delay('200').animate({
        backgroundColor: '#000000'
    },trans,'swing');
    $('#foto2-9video').delay('400').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto2-9video video')[0].play();
    });
    $('#foto2-9video p').delay('600').animate({
        'left': ($('#foto2-9video video').offset().left-200)+'px'
    },trans,'swing');
}
function diapositiva211(){
    $('#foto2-9video p').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto2-9video').delay('200').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto2-9tapa').delay('400').animate({
        backgroundColor: '#888D57'
    },trans,'swing');
    $('#foto2-9text2').delay('600').animate({
        'top': '50%'
    },trans,'swing');
}
function diapositiva211b(){
    $('#foto3-1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto3-1text h2').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto3-1text').delay('400').animate({
        'top': '250%'
    },trans,'swing');
    $('#foto3-1').delay('600').animate({
        'top': '-100%'
    },trans,'swing',function(){
        $('#apartat3').hide();
    });
    $('#foto2-9').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-9text2').delay('800').animate({
        'top': '50%'
    },trans,'swing');
}
function diapositiva30(){
    $('#apartat3').show();
    $('#foto2-9text2').animate({
        'top': '-150%'
    },trans,'swing');
    $('#foto2-9').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto3-1').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-1text').delay('400').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto3-1text h2').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-1peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva30b(){
    $('#foto3-1video p').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto3-1video').delay('200').animate({
        'bottom': '-200%'
    },trans,'swing');
    $('#foto3-1tapa').delay('400').animate({
        'opacity': '0'
    },trans,'swing');
    $('#foto3-1text').delay('600').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto3-1text p').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-1peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva31(){
    $('#foto3-1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto3-1text p').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto3-1text').delay('400').animate({
        'top': '-110%'
    },trans,'swing');
    $('#foto3-1tapa').delay('600').animate({
        'opacity': '.7'
    },trans,'swing');
    $('#foto3-1video').delay('400').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#foto3-1video video')[0].play();
    });
    $('#foto3-1video p').delay('600').animate({
        'left': ($('#foto3-1video video').offset().left-200)+'px'
    },trans,'swing');
    $('#foto3-1video video').on('ended',function(){
        pos=32;
        diapositiva32();
    });
}
function diapositiva31b(){
    $('#play3-1').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto3-1text2').delay('200').animate({
        'top': '250%'
    },trans,'swing');
    $('#foto3-1tapa').delay('400').animate({
        backgroundColor: '#000000'
    },trans,'swing');
    $('#foto3-1video').delay('600').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto3-1video p').delay('800').animate({
        'left': ($('#foto3-1video video').offset().left-200)+'px'
    },trans,'swing');
}
function diapositiva32(){
    $('#foto3-1video p').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto3-1video').delay('200').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto3-1tapa').delay('400').animate({
        backgroundColor: '#888D57'
    },trans,'swing');
    $('#foto3-1text2').delay('600').animate({
        'top': '10%'
    },trans,'swing');
    $('#play3-1').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-1play').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat3video1.html',function(){
            $('.videopopup').show();
        });
    });
}
function diapositiva32b(){
    $('#foto3-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto3-2text').delay('200').animate({
        'top': '250%'
    },trans,'swing');
    $('#foto3-2').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto3-1').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-1text2').delay('600').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto3-1text2 p').delay('800').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva33(){
    $('#foto3-1text2 p').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto3-1text2').delay('200').animate({
        'top': '-110%'
    },trans,'swing');
    $('#foto3-1').delay('400').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto3-2').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-2text').delay('600').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto3-2peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva33b(){
    $('#foto4-1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-1text h2').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto4-1text').delay('400').animate({
        'top': '215%'
    },trans,'swing');
    $('#foto4-1').delay('600').animate({
        'top': '-100%'
    },trans,'swing',function(){
        $('#apartat4').hide();
    });
    $('#foto3-2').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto3-2text').delay('800').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto3-2peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva40(){
    $('#apartat4').show();
    $('#foto3-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto3-2text').delay('200').animate({
        'top': '-210%'
    },trans,'swing');
    $('#foto3-2').delay('400').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto4-1').delay('400').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-1text').delay('600').animate({
        'top': '15%'
    },trans,'swing');
    $('#foto4-1text h2').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-1peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva40b(){
    $('#foto4-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#play4-2').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto4-2text').delay('400').animate({
        'top': '250%'
    },trans,'swing');
    $('#foto4-2').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto4-1').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-1text').delay('800').animate({
        'top': '15%'
    },trans,'swing');
    $('#foto4-1text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-1peu').delay('1200').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva41(){
    $('#foto4-1peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto4-1text p').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto4-1text').delay('400').animate({
        'top': '-115%'
    },trans,'swing');
    $('#foto4-1').delay('600').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto4-2').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-2text').delay('800').animate({
        'top': '50%'
    },trans,'swing');
    $('#play4-2').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#foto4-2peu').delay('1200').animate({
        'left': '100px'
    },trans,'swing');
    $('#foto4-2play').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat4video1.html',function(){
            var amplada = ($(window).width()*0.55)*0.95;
            console.log(amplada);
            var altura=(315*amplada)/560;
            console.log(altura);
            $('.videopopup iframe').css('height',(315*amplada)/560);
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

// Funcions fotos
//function drag_start(event){
//    var style = window.getComputedStyle(event.target, null);
//    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' 
//            + (parseInt(style.getPropertyValue("top")) - event.clientY)+ ',' + event.target.id;
//    event.dataTransfer.setData("Text",str);
//}
//function drop(event){
//    var offset = event.dataTransfer.getData("Text").split(',');
//    var dm = document.getElementById(offset[2]);
//    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
//    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
//    dm.style.zIndex = zi;
//    zi++;
//    event.preventDefault();
//    return false;
//}
//function drag_over(event){
//    event.preventDefault();
//    return false;
//}