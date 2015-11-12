var trans = 1200;
var sona=true;
var mutexvideo=false;
$('#bso').click(function(){
    if(sona){
        $('#audio')[0].pause();
        sona=false;
    } else {
        $('#audio')[0].play();
        sona=true;
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
    $('#foto1-1aus img').animate({
        'left': '0'
    },trans,'swing',function(){
        $('#text1-1').animate({
            'top': '10%'
        },trans,'swing');
        $('.scroll').delay('100').animate({
            'bottom': '1.5%'
        },trans,'swing',function(){            
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
        });
    });
}
function diapositiva11(){
    $('.scroll').animate({
            'bottom': '-10%'
    },trans,'swing');
    $('#text1-1').delay('100').animate({
        'top': '100%'
    },trans,'swing');
    $('#foto1-1aus img').delay('300').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-2aus img').delay('300').animate({
        'top': '0%'
    },trans,'swing');
    $('#text1-2').delay('500').animate({
        'top': '40%'
    },trans,'swing');
    $('#text1-2 h3').delay('700').animate({
        'top': '0'
    },trans,'swing');
    $('#foto1-2aus p').delay('800').animate({
        'bottom': '10px'
    },trans,'swing');
}
function diapositiva12(){
    $('#foto1-2aus p').animate({
        'bottom': '-50px'
    },trans,'swing');
    $('#text1-2 h3').delay('100').animate({
        'top': '-200px'
    },trans,'swing');
    $('#text1-2').delay('300').animate({
        'top': '-50%'
    },trans,'swing');
    $('#foto1-2aus img').delay('500').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-3aus img').delay('500').animate({
        'top': '0%'
    },trans,'swing');
    $('#text1-3').delay('700').animate({
        'left': '50px'
    },trans,'swing');
}
function diapositiva13(){
    $('#text1-3').animate({
        'left': '-300px'
    },trans,'swing');
    $('#tapa1-4').delay('200').animate({
        'opacity': '0.9'
    },trans,'swing');
    $('#text1-4').delay('400').animate({
        'bottom': '10%'
    },trans,'swing');
    $('#text1-4 img').delay('600').animate({
        'left': '0px'
    },trans,'swing');
}
function diapositiva14(){
    $('#text1-4 img').animate({
        'top': '-300px'
    },trans,'swing');
    $('#text1-4').delay('200').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#tapa1-4').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-3aus img').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-5aus img').delay('400').animate({
        'top': '0%'
    },trans,'swing');
    $('#text1-5').delay('600').animate({
        'right': '50px'
    },trans,'swing');
}
// Funcions de video
function tancarvideo1(){
    $('#video1-3 video').get(0).pause();
    diapositiva20();
    pos=20;
}
function tancarvideo2(){
    $('.videopopup').hide();
    $('#videosapartat2').html('');
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
}