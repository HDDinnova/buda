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
        $('#foto1-1text').show();
        $('#foto1-1text').animate({
            'bottom': '15%'
        },trans,'swing');
        $('#foto1-1peu').delay('300').animate({
            'bottom': '10px'
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
    $('#foto1-2text').delay('200').animate({
        'top': '-150%'
    },trans,'swing');
    $('#foto1-2').delay('400').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto1-1').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-1text').delay('600').animate({
        'bottom': '15%'
    },trans,'swing');
    $('#foto1-1peu').delay('800').animate({
        'bottom': '10px'
    },trans,'swing');
    $('.scroll').delay('1000').animate({
        'bottom': '1.5%'
    },trans,'swing');
}
function diapositiva11(){
    $('.scroll').animate({
        'bottom': '-110%'
    },trans,'swing');
    $('#foto1-1peu').delay('200').animate({
        'bottom': '-150%'
    },trans,'swing');
    $('#foto1-1text').delay('400').animate({
        'bottom': '-115%'
    },trans,'swing');
    $('#foto1-1').delay('600').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto1-2').delay('600').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-2text').delay('800').animate({
        'top': '60%'
    },trans,'swing');
    $('#foto1-2peu').delay('1000').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva11b(){
    $('#foto1-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-3text').delay('200').animate({
        'top': '-150%'
    },trans,'swing');
    $('#foto1-3').delay('400').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto1-2').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-2text').delay('600').animate({
        'top': '60%'
    },trans,'swing');
    $('#foto1-2peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva12(){
    $('#foto1-2peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-2text').delay('200').animate({
        'top': '160%'
    },trans,'swing');
    $('#foto1-2').delay('400').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto1-3').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-3text').delay('600').animate({
        'top': '100px'
    },trans,'swing');
    $('#foto1-3peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva12b(){
    $('#foto1-3b').animate({
        'left': '-100%'
    },trans,'swing');
    $('#foto1-3').animate({
        'left': '0'
    },trans,'swing');
}
function diapositiva13(){
    $('#foto1-3b').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-3').animate({
        'left': '100%'
    },trans,'swing');
}
function diapositiva13b(){
    $('#foto1-4peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-4text').delay('200').animate({
        'top': '-150%'
    },trans,'swing');
    $('#foto1-4').delay('400').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto1-3b').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-3text').delay('600').animate({
        'top': '100px'
    },trans,'swing');
    $('#foto1-3peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva14(){
    $('#foto1-3peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-3text').delay('200').animate({
        'top': '110%'
    },trans,'swing');
    $('#foto1-3b').delay('400').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto1-4').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-4text').delay('600').animate({
        'top': '100px'
    },trans,'swing');
    $('#foto1-4peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva14b(){
    $('#foto1-4').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-4b').animate({
        'left': '-100%'
    },trans,'swing');
}
function diapositiva15(){
    $('#foto1-4b').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-4').animate({
        'left': '100%'
    },trans,'swing');
}
function diapositiva15b(){
    $('#foto1-4b').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-4c').animate({
        'left': '-100%'
    },trans,'swing');
}
function diapositiva16(){
    $('#foto1-4c').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-4b').animate({
        'left': '100%'
    },trans,'swing');
}
function diapositiva16b(){
    $('#foto1-5peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-5text').delay('200').animate({
        'top': '-150%'
    },trans,'swing');
    $('#foto1-5').delay('400').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto1-4c').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-4text').delay('600').animate({
        'top': '100px'
    },trans,'swing');
    $('#foto1-4peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva17(){
    $('#foto1-4peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-4text').delay('200').animate({
        'top': '110%'
    },trans,'swing');
    $('#foto1-4c').delay('400').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto1-5').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-5text').delay('600').animate({
        'top': '35%'
    },trans,'swing');
    $('#foto1-5peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva17b(){
    $('#foto1-5').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-5b').animate({
        'left': '-100%'
    },trans,'swing');
}
function diapositiva18(){
    $('#foto1-5b').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-5').animate({
        'left': '100%'
    },trans,'swing');
}
function diapositiva18b(){
    $('#foto1-6peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-6text').delay('200').animate({
        'top': '-150%'
    },trans,'swing');
    $('#foto1-6').delay('400').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto1-5b').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-5text').delay('600').animate({
        'top': '35%'
    },trans,'swing');
    $('#foto1-5peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva19(){
    $('#foto1-5peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-5text').delay('200').animate({
        'top': '135%'
    },trans,'swing');
    $('#foto1-5b').delay('400').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto1-6').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-6text').delay('600').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto1-6peu').delay('600').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva19b(){
    $('#foto1-7peu p').animate({
        'left': '-300px'
    },trans,'swing');
    $('#foto1-7peu').delay('200').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-7').delay('400').animate({
        'left': '-100%'
    },trans,'swing');
    $('#foto1-6').delay('400').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-6text').delay('600').animate({
        'top': '10%'
    },trans,'swing');
    $('#foto1-6peu').delay('800').animate({
        'left': '100px'
    },trans,'swing');
}
function diapositiva20(){
    $('#foto1-6peu').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-6text').delay('200').animate({
        'top': '150%'
    },trans,'swing');
    $('#foto1-6').delay('400').animate({
        'left': '100%'
    },trans,'swing');
    $('#foto1-7').delay('400').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-7peu').delay('600').animate({
        'left': '100px'
    },trans,'swing');
    $('#foto1-7peu p').delay('800').animate({
        'left': '0'
    },trans,'swing');
    $('#foto1-7recull').click(function(){
        $('body').off('mousewheel');
        $("#recull1-7fotozoom").elevateZoom({
            scrollZoom : true,
            zoomType: "lens",
            lensShape: "square",
            lensSize: 400
        });
        $("#recull1-7foto").show();
    });
    $("#recull1-7foto").click(function(){
        $("#recull1-7foto").hide();
        $('body').on('mousewheel',function(e){
            controlMouse(e);
        });
    });
}
function diapositiva21(){
    $('#foto1-7peu p').animate({
        'left': '-300px'
    },trans,'swing');
    $('#foto1-7peu').delay('200').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-7').delay('400').animate({
        'bottom': '-100%'
    },trans,'swing');
    $('#foto1-8').delay('400').animate({
        'bottom': '0'
    },trans,'swing');
    $('#foto1-8text').delay('600').animate({
        'top': '30%'
    },trans,'swing');
    $('#video1-8').delay('800').animate({
        'top': '0'
    },trans,'swing');
    $('#fotos1-8').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#recull1-8').delay('1200').animate({
        'top': '0'
    },trans,'swing');
    $('#foto1-8peu').delay('1400').animate({
        'left': '100px'
    },trans,'swing');
    $('#video1-8').click(function(){
        $('body').off('mousewheel');
        $('#videos').load('apartat1video1.html',function(){
            $('.videopopup').show();
        });        
    });
    $('#fotos1-8').click(function(){
        $('body').off('mousewheel');
        $('#fotos1-8fotos').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });
        $('#fotos1-8fotos').show();
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