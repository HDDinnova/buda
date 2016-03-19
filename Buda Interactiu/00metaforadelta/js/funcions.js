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
                diapositiva13();
                setTimeout(function(){
                    pos=13;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 13:
                $('body').off('mousewheel');
                diapositiva14();
                setTimeout(function(){
                    pos=14;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 14:
                $('body').off('mousewheel');
                diapositiva15();
                setTimeout(function(){
                    pos=15;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 15:
                $('body').off('mousewheel');
                diapositiva16();
                setTimeout(function(){
                    pos=16;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 16:
                $('body').off('mousewheel');
                diapositiva17();
                setTimeout(function(){
                    pos=17;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
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
                },1000);
                break;
            case 12:
                $('body').off('mousewheel');
                diapositiva11b();
                setTimeout(function(){
                    pos=11;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 13:
                $('body').off('mousewheel');
                diapositiva12b();
                setTimeout(function(){
                    pos=12;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 14:
                $('body').off('mousewheel');
                diapositiva13b();
                setTimeout(function(){
                    pos=13;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 15:
                $('body').off('mousewheel');
                diapositiva14b();
                setTimeout(function(){
                    pos=14;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 16:
                $('body').off('mousewheel');
                diapositiva15b();
                setTimeout(function(){
                    pos=15;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
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
        'opacity': 1
    },trans,function(){
        $('#foto1-1text').animate({
            'top': '30%'
        },trans);
        $('#foto1-1text h2').delay('200').animate({
            'top': '0'
        },trans);
        $('#foto1-1peu').delay('400').animate({
            'left': '100px'
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
    $('#foto1-1text2 p').animate({
        'top': '-300px'
    },trans);
    $('#foto1-1text2').delay('200').animate({
        'top': '-50%'
    },trans);
    $('#foto1-1 .tapa').delay('400').animate({
        'opacity': '0'
    },trans);
    $('#foto1-1text').delay('600').animate({
        'top': '50%'
    },trans);
    $('#foto1-1text p').delay('800').animate({
        'top': '0'
    },trans);
    $('#foto1-1peu').delay('1000').animate({
        'left': '100px'
    },trans);
    $('.scroll').delay('1200').animate({
        'bottom': '10px'
    },trans);
}
function diapositiva11(){
    $('.scroll').animate({
        'bottom': '-50%'
    },trans);
    $('#foto1-1peu').delay('200').animate({
        'left': '-50%'
    },trans);
    $('#foto1-1text p').delay('400').animate({
        'top': '300px'
    },trans);
    $('#foto1-1text').delay('600').animate({
        'top': '150%'
    },trans);
    $('#foto1-1 .tapa').delay('800').animate({
        'opacity': '.6'
    },trans);
    $('#foto1-1text2').delay('1000').animate({
        'top': '10%'
    },trans);
    $('#foto1-1text2 p').delay('1200').animate({
        'top': '0'
    },trans);
    $('#foto1-1i').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat1video.html',function(){
            $('.videopopup').show();
        });        
    });
}
function diapositiva11b(){
    $('#foto1-1text3').animate({
        'bottom': '110%'
    },trans);
    $('#foto1-1text2').delay('200').animate({
        'top': '10%'
    },trans);
    $('#foto1-1b').delay('400').animate({
        'top': '0'
    },trans);
}
function diapositiva12(){
    $('#foto1-1b').animate({
        'top': '300px'
    },trans);
    $('#foto1-1text2').delay('200').animate({
        'top': '150%'
    },trans);
    $('#foto1-1text3').delay('400').animate({
        'bottom': '10%'
    },trans);
}
function diapositiva12b(){
    $('#foto1-1peufotos').animate({
        'left': '-50%'
    },trans);
    var pausa=200;
    $('#foto1-1 .f').each(function(){
        $(this).delay(pausa).animate({
            'top':'-80%',
            'left':'-80%'
        },trans);
        pausa+=150;
    });
    $('#foto1-1text3').delay(800).animate({
        'bottom': '10%'
    },trans);
}
function diapositiva13(){
    $('#foto1-1text3').animate({
        'bottom': '-90%'
    },trans);
    var angle=5;
    var posi=18;
    var pausa=200;
    $('#foto1-1 .f').rotate('40deg');
    $('#foto1-1 .f').each(function(){
        $(this).delay(pausa).animate({
            'top':'15%',
            'left':posi+'%',
            rotate: angle+'deg'
        },trans);
        angle-=3;
        posi+=5;
        pausa+=150;
    });
    $('#foto1-1 .f').click(function(){
        $(this).css('z-index',zi);
    });
    $('#foto1-1peufotos').delay(800).animate({
        'left': '100px'
    },trans);
    $('#apartat2').load('apartat2.html');
}
function diapositiva13b(){
    $('#foto1-2peu').animate({
        'left': '-50%'
    },trans);
    $('#foto1-2text p').delay(200).animate({
        'top': '300px'
    },trans);
    $('#foto1-2text').delay(400).animate({
        'top': '140%'
    },trans);
    $('#foto1-2').delay(600).animate({
        'top': '100%'
    },trans);
    $('#foto1-1').delay(600).animate({
        'top': '0'
    },trans);
    $('#foto1-1peufotos').delay(1000).animate({
        'left': '100px'
    },trans);
    var pausa=800;
    var posi=18;
    $('#foto1-1 .f').each(function(){
        $(this).delay(pausa).animate({
            'top':'15%',
            'left':posi+'%'
        },trans);
        pausa+=150;
        posi+=5;
    });
}
function diapositiva14(){
    $('#apartat2').show();
    var pausa=0;
    $('#foto1-1 .f').each(function(){
        $(this).delay(pausa).animate({
            'top':'-80%',
            'left':'180%'
        },trans);
        pausa+=150;
    });
    $('#foto1-1peufotos').delay(500).animate({
        'left': '-50%'
    },trans);
    $('#foto1-1').delay(800).animate({
        'top': '-100%'
    },trans);
    $('#foto1-2').delay(800).animate({
        'top': '0'
    },trans);
    $('#foto1-2text').delay(1000).animate({
        'top': '40%'
    },trans);
    $('#foto1-2text p').delay(1200).animate({
        'top': '0'
    },trans);
    $('#foto1-2peu').delay(1400).animate({
        'left': '100px'
    },trans);
}
function diapositiva14b(){
    $('#foto1-2b2').animate({
        'top': '300px'
    },trans);
    $('#foto1-2b1').delay(200).animate({
        'top': '300px'
    },trans);
    $('#foto1-2text2').delay(400).animate({
        'bottom': '-90%'
    },trans);
    $('#foto1-2 .tapa').delay(600).animate({
        'opacity': '0'
    },trans);
    $('#foto1-2text').delay(800).animate({
        'top': '40%'
    },trans);
    $('#foto1-2text h2').delay(1000).animate({
        'top': '0'
    },trans);
    $('#foto1-2peu').delay(1200).animate({
        'left': '100px'
    },trans);
}
function diapositiva15(){
    $('#foto1-2peu').animate({
        'left': '-50%'
    },trans);
    $('#foto1-2text h2').delay(200).animate({
        'top': '-300px'
    },trans);
    $('#foto1-2text').delay(400).animate({
        'top': '-60%'
    },trans);
    $('#foto1-2 .tapa').delay(600).animate({
        'opacity': '.6'
    },trans);
    $('#foto1-2text2').delay(800).animate({
        'bottom': '10%'
    },trans);
    $('#foto1-2b1').delay(1000).animate({
        'top': '0'
    },trans);
    $('#foto1-2b2').delay(1200).animate({
        'top': '0'
    },trans);
    $('#foto1-2i1').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat2video1.html',function(){
            $('.videopopup').show();
        });        
    });
    $('#foto1-2i2').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat2video2.html',function(){
            $('.videopopup').show();
        });        
    });
}
function diapositiva15b(){
    $('#foto1-3 video')[0].pause();
    $('#foto1-3b2').animate({
        'top': '300px'
    },trans);
    $('#foto1-3b1').delay(200).animate({
        'top': '300px'
    },trans);
    $('#foto1-3text').delay(400).animate({
        'top': '110%'
    },trans);
    $('#foto1-3').delay(600).animate({
        'top': '100%'
    },trans);
    $('#foto1-2').delay(600).animate({
        'top': '0'
    },trans);
    $('#foto1-2text2').delay(800).animate({
        'bottom': '10%'
    },trans);
    $('#foto1-2b1').delay(1000).animate({
        'top': '0'
    },trans);
    $('#foto1-2text2 p').delay(1200).animate({
        'top': '0'
    },trans);
}
function diapositiva16(){
    $('#foto1-2text2 p').animate({
        'top': '-300px'
    },trans);
    $('#foto1-2b1').delay(200).animate({
        'top': '-300px'
    },trans);
    $('#foto1-2text2').delay(400).animate({
        'bottom': '110%'
    },trans);
    $('#foto1-2').delay(600).animate({
        'top': '-100%'
    },trans);
    $('#foto1-3').delay(600).animate({
        'top': '0'
    },trans);
    $('#foto1-3text').delay(800).animate({
        'top': '10%'
    },trans);
    $('#foto1-3b1').delay(1000).animate({
        'top': '0'
    },trans);
    $('#foto1-3b2').delay(1200).animate({
        'top': '0'
    },trans,function(){
        $('#foto1-3 video')[0].play();
    });
    $('#foto1-3i1').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat2video3.html',function(){
            $('.videopopup').show();
        });        
    });
    $('#foto1-3i2').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat2video4.html',function(){
            $('.videopopup').show();
        });        
    });
}
function diapositiva17(){
    $('.final').animate({
        'opacity': '1'
    },3000);
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