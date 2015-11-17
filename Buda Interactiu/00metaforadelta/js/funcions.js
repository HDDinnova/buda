var trans = 1200;
var zi=-4;
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
                },1000);
                break;
            case 11:
                $('body').off('mousewheel');
                diapositiva12();
                setTimeout(function(){
                    pos=12;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 12:
                $('body').off('mousewheel');
                diapositiva20();
                setTimeout(function(){
                    pos=20;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 20:
                $('body').off('mousewheel');
                diapositiva30();
                setTimeout(function(){
                    pos=30;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 30:
                $('body').off('mousewheel');
                diapositiva31();
                setTimeout(function(){
                    pos=31;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 31:
                $('body').off('mousewheel');
                diapositiva40();
                setTimeout(function(){
                    pos=40;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
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
                },1000);
                break;
            case 20:
                $('body').off('mousewheel');
                diapositiva11b();
                setTimeout(function(){
                    pos=11;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 21:
                $('body').off('mousewheel');
                diapositiva20b();
                setTimeout(function(){
                    pos=20;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 30:
                $('body').off('mousewheel');
                diapositiva21b();
                setTimeout(function(){
                    pos=21;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 31:
                $('body').off('mousewheel');
                diapositiva30b();
                setTimeout(function(){
                    pos=30;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 32:
                $('body').off('mousewheel');
                diapositiva31b();
                setTimeout(function(){
                    pos=31;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 33:
                $('body').off('mousewheel');
                diapositiva32b();
                setTimeout(function(){
                    pos=32;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 34:
                $('body').off('mousewheel');
                diapositiva33b();
                setTimeout(function(){
                    pos=33;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 40:
                $('body').off('mousewheel');
                diapositiva34b();
                setTimeout(function(){
                    pos=34;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 41:
                $('body').off('mousewheel');
                diapositiva40b();
                setTimeout(function(){
                    pos=40;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 42:
                $('body').off('mousewheel');
                diapositiva41b();
                setTimeout(function(){
                    pos=41;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 50:
                $('body').off('mousewheel');
                diapositiva42b();
                setTimeout(function(){
                    pos=42;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
        }
    }
}function drag_start(event){
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' 
            + (parseInt(style.getPropertyValue("top")) - event.clientY)+ ',' + event.target.id;
    event.dataTransfer.setData("Text",str);
}
function drop(event){
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    dm.style.zIndex = zi;
    zi++;
    event.preventDefault();
    return false;
}
function drag_over(event){
    event.preventDefault();
    return false;
}
function diapositiva1(){
    $('#imgdelta1 img').animate({
        'opacity': 1
    },trans,function(){
        $('#titol1').animate({
            'top': '30%'
        },trans);
        $('#destacat1').delay('200').animate({
            'top': '45%'
        },trans);
        $('#imgdelta1 p').delay('400').animate({
            'bottom': '10px'
        },trans,function(){            
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
        });
        $('.scroll').delay('600').animate({
            'bottom': '10px'
        },trans);
    });
}
function diapositiva10(){
    
}
function diapositiva11(){
    $('.scroll').animate({
        'bottom': '-10%'
    },trans);
    $('#imgdelta1 p').animate({
        'bottom': '-50px'
    },trans);
    $('#destacat1').delay('200').animate({
        'top': '105%'
    },trans);
    $('#titol1').delay('400').animate({
        'top': '105%'
    },trans);
    $('#tapa1-1').delay('500').animate({
        'opacity':0.8
    },trans);
    $('#destacat1-2').delay('700').animate({
        'top': '10%'
    },trans);
}
function diapositiva12(){
    $('#destacat1-2').animate({
        'top': '100%'
    },trans);
    $('#destacat1-3').delay('300').animate({
        'top': '45%'
    },trans,function(){
        $('#apartat2').load('apartat2.html');
    });
}
function diapositiva20(){
    $('#apartat2').show();
    $('#destacat1-3').animate({
        'top': '105%'
    },trans);
    var angle=5;
    var posi=18;
    var pausa=0;
    $('#apartat2 img').rotate('40deg');
    $('#apartat2 img').each(function(){
        $(this).delay(pausa).animate({
            'top':'15%',
            'left':posi+'%',
            rotate: angle+'deg'
        },trans);
        angle-=3;
        posi+=5;
        pausa+=150;
    });
    $('#apartat2 .groc').delay('700').animate({
        'right':'12%'
    },trans,function(){
        $('#apartat2 img').click(function(){
            $(this).css('z-index',zi);
            zi++;
        });
        $('#apartat3').load('apartat3.html');
    });
}
function diapositiva20b(){
    
}
function diapositiva30(){
    $('#apartat3').show();
    var pausa=0;
    $('#apartat2 img').each(function(){
        $(this).delay(pausa).animate({
            'top':'-50%',
            'left':'150%'
        },trans);
        pausa+=100;
    });
    $('#apartat2 .groc').delay('300').animate({
        'right':'-50%'
    });
    $('#tapa1-1').delay('400').animate({
        'top':'-100%'
    },trans);
    $('#imgdelta1 img').delay('400').animate({
        'bottom':'100%'
    },trans);
    $('#imgdelta3 img').delay('400').animate({
        'top':'0%'
    },trans);
    $('#titol3').delay('800').animate({
        'top': '30%'
    },trans);
    $('#destacat3').delay('1000').animate({
        'top': '45%'
    },trans);
    $('#imgdelta3 p').delay('1200').animate({
        'bottom': '10px'
    },trans);
}
function diapositiva30b(){
    
}
function diapositiva31(){
    $('#imgdelta3 p').animate({
        'bottom': '-50px'
    },trans);
    $('#destacat3').delay('200').animate({
        'top': '105%'
    },trans);
    $('#titol3').delay('400').animate({
        'top': '105%'
    },trans);
    $('#tapa3-1').delay('600').animate({
        'opacity': '0.6'
    },trans);
    $('#destacat3-2').delay('800').animate({
        'bottom': '10%'
    },trans);
    $('#apartat4').load('apartat4.html');
}
function diapositiva31b(){
    
}
function diapositiva40(){
    $('#apartat4').show();
    $('#destacat3-2').animate({
        'bottom': '150%'
    },trans);
    $('#tapa3-1').delay('200').animate({
        'top': '-100%'
    },trans);
    $('#imgdelta3 img').delay('200').animate({
        'top':'-100%'
    },trans);
    $('#apartat4 #video4fons').delay('200').animate({
        'top':'0%'
    },trans,function(){
        $('#apartat4 #video4fons')[0].play();
    });
    $('#destacat4').delay('400').animate({
        'top':'10%'
    },trans);
}