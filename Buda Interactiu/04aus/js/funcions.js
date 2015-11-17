var trans = 1200;
var sona=true;
var mutexvideo=false;
var zi=-4;
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
                diapositiva110();
                setTimeout(function(){
                    pos=110;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },2000);
                break;
            case 110:
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
                mutexvideo && $('#audio')[0].play();
                $('#video2-1 video')[0].pause();
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
                $('#video3-1 video')[0].pause();
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
                $('#video3-2 video')[0].pause();
                mutexvideo && $('#audio')[0].play();
                diapositiva34();
                setTimeout(function(){
                    pos=34;
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
    $('#foto1-1aus').animate({
        'left': '0'
    },trans,'swing',function(){
        $('#text1-1').animate({
            'top': '10%'
        },trans,'swing');
        $('.scroll').delay('300').animate({
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
    $('#foto1-1aus').delay('300').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-2aus').delay('300').animate({
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
    $('#foto1-2aus').delay('500').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-3aus').delay('500').animate({
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
        'opacity': '0.8'
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
    $('#foto1-3aus').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-5aus').delay('400').animate({
        'top': '0%'
    },trans,'swing');
    $('#text1-5').delay('600').animate({
        'right': '50px'
    },trans,'swing');
}
function diapositiva15(){
    $('#text1-5').animate({
        'right': '-500px'
    },trans,'swing');
    $('#tapa1-5').delay('200').animate({
        'opacity': '0.8'
    },trans,'swing');
    $('#text1-6').delay('400').animate({
        'top': '10%'
    },trans,'swing');
    $('#play1-6').delay('600').animate({
        'top': '0px'
    },trans,'swing');
}
function diapositiva16(){
    $('#text1-6 p').animate({
        'top': '-200px'
    },trans,'swing');
    $('#text1-6').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#tapa1-5').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-5aus').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-7aus').delay('400').animate({
        'top': '0%'
    },trans,'swing');
    $('#text1-7').delay('400').animate({
        'right': '50px'
    },trans,'swing');
}
function diapositiva17(){
    $('#text1-7').animate({
        'right': '-50%'
    },trans,'swing');
    $('#tapa1-7').delay('200').animate({
        'opacity': '0.5'
    },trans,'swing');
    $('#text1-8').delay('400').animate({
        'bottom': '10%'
    },trans,'swing');
}
function diapositiva18(){
    $('#text1-8').animate({
        'bottom': '-50%'
    },trans,'swing');
    $('#tapa1-7').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-7aus').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-9aus').delay('200').animate({
        'top': '0%'
    },trans,'swing');
    $('#text1-9').delay('400').animate({
        'left': '50px'
    },trans,'swing');
}
function diapositiva19(){
    $('#text1-9').animate({
        'left': '-50%'
    },trans,'swing');
    $('#tapa1-9').delay('200').animate({
        'opacity': '0.8'
    },trans,'swing');
    $('#text1-10').delay('400').animate({
        'bottom': '10%'
    },trans,'swing');
}
function diapositiva110(){
    $('#apartat2').load('apartat2.html');
    var angle=5;
    var posi=50;
    var pausa=0;
    $('#fotosaus1 img').rotate('40deg');
    $('#fotosaus1 img').each(function(){
        $(this).delay(pausa).animate({
            'top':'30%',
            'left':posi+'%',
            rotate: angle+'deg'
        },trans);
        angle-=3;
        posi+=1;
        pausa+=150;
    });
    $('#fotosaus1 img').click(function(){
        $(this).css('z-index',zi);
        zi++;
    });
}
function diapositiva20(){
    $('#apartat2').show();
    var pausa=0;
    $('#fotosaus1 img').each(function(){
        $(this).delay(pausa).animate({
            'top':'-50%',
            'left':'200%'
        },trans);
        pausa+=100;
    });
    $('#fotosaus1 img').off('click');
    $('#text1-10').delay('400').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#tapa1-9').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-9aus').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-1aus').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#text2-1').delay('800').animate({
        'top': '20%'
    },trans,'swing');
    $('#text2-1 p').delay('1200').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva21(){
    $('#text2-1 h2').animate({
        'top': '300px'
    },trans,'swing');
    $('#text2-1').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#tapa2-1').delay('400').animate({
        'opacity': '0.8'
    },trans,'swing');
    $('#video2-1').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#video2-1 .groc').delay('1000').animate({
        'left': '50px'
    },trans,'swing',function(){
        $('#audio')[0].paused ? mutexvideo=false : mutexvideo=true;
        mutexvideo && $('#audio')[0].pause();
        $('#video2-1 video')[0].play();
    });
}
function diapositiva22(){
    $('#tapa2-1').animate({
        'top': '-100%'
    },trans,'swing');
    $('#video2-1').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-1aus').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-2aus').animate({
        'top': '0%'
    },trans,'swing');
    $('#video221').css('top','-300px');
    $('#text2-2').delay('200').animate({
        'top': '33%'
    },trans,'swing',function(){
        $('#video221').on('click',function(){
            $('body').off('mousewheel');
            $('#videosapartat2').load('apartat2video1.html',function(){
                $('.videopopup').show();
            });

        });
        $('#video222').on('click',function(){
            $('body').off('mousewheel');
            $('#videosapartat2').load('apartat2video2.html',function(){
                $('#audio')[0].paused ? mutexvideo=false : mutexvideo=true;
                mutexvideo && $('#audio')[0].pause();
                $('.videopopup').show();
            });

        });
        $('#apartat3').load('apartat3.html');
    });
    $('#video221').delay('400').animate({
        'top': '0px'
    },trans,'swing');    
    $('#text2-2 p').delay('400').animate({
        'top': '0px'
    },trans,'swing');
}
function diapositiva30(){
    $('#apartat3').show();
    $('#video222').animate({
        'top': '300px'
    },trans,'swing');
    $('#video221').delay('200').animate({
        'top': '300px'
    },trans,'swing');    
    $('#text2-2').delay('400').animate({
        'top': '140%'
    },trans,'swing');
    $('#foto2-2aus').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto3-1aus').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#text3-1').delay('800').animate({
        'top': '20%'
    },trans,'swing');
    $('#text3-1 p').delay('1200').animate({
        'top': '0'
    },trans,'swing');
}
function diapositiva31(){
    $('#text3-1 h2').animate({
        'top': '300px'
    },trans,'swing');
    $('#text3-1').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#tapa3-1').delay('400').animate({
        'opacity': '0.8'
    },trans,'swing');
    $('#video3-1').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#video3-1 .groc').delay('900').animate({
        'left': '50px'
    },trans,'swing',function(){
        $('#video3-1 video')[0].play();
    });
}
function diapositiva32(){
    $('#video3-1 .groc').animate({
        'left': '-50%'
    },trans,'swing');
    $('#video3-1').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#tapa3-1').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto3-1aus').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto3-2aus').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#text3-2').delay('800').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto3-2aus p').delay('1000').animate({
        'bottom': '10px'
    },trans,'swing');
}
function diapositiva33(){
    $('#foto3-2aus p').animate({
        'bottom': '-50px'
    },trans,'swing');
    $('#text3-2').delay('200').animate({
        'top': '-50%'
    },trans,'swing');
    $('#tapa3-2').delay('400').animate({
        'opacity': '0.8'
    },trans,'swing');
    $('#video3-2').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#video3-2 .groc').delay('1000').animate({
        'left': '50px'
    },trans,'swing',function(){
        $('#audio')[0].paused ? mutexvideo=false : mutexvideo=true;
        mutexvideo && $('#audio')[0].pause();
        $('#video3-2 video')[0].play();
    });
}
function diapositiva34(){
    $('#video3-2 .groc').animate({
        'left': '-50%'
    },trans,'swing');
    $('#video3-2').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#tapa3-2').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto3-2aus').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto3-3aus').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#text3-3').delay('800').animate({
        'top': '40%'
    },trans,'swing');
    $('#foto3-3aus p').delay('1000').animate({
        'left': '50px'
    },trans,'swing');
}
// Funcions de video
$('#sarroaus1').on('click',function(){
    $('body').off('mousewheel');
    $('#videosapartat1').load('apartat1video1.html',function(){
        $('.videopopup').show();
    });
});
function tancarvideo1(){
    $('.videopopup').hide();
    $('#videosapartat1').html('');
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
}
function tancarvideo221(){
    $('.videopopup').hide();
    $('#videosapartat2').html('');
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
}
function tancarvideo222(){
    mutexvideo && $('#audio')[0].play();
    $('.videopopup').hide();
    $('#videosapartat2').html('');
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
}
function tancarvideo21(){
    mutexvideo && $('#audio')[0].play();
    $('#video2-1 video')[0].pause();
    diapositiva22();
    pos=22;
}
function tancarvideo31(){
    if(mutexvideo){
        $('#audio')[0].play();
    }
    $('#video3-1 video')[0].pause();
    diapositiva32();
    pos=32;
}
function tancarvideo32(){
    $('#video3-2 video')[0].pause();
    diapositiva34();
    pos=34;
}
// Funcions fotos
function drag_start(event){
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