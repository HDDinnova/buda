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
                    pos=18;
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
    $('#foto1-1').animate({
        'bottom': '0'
    },trans,'swing',function(){
        $('#text1-1').animate({
            'top': '40%'
        },trans,'swing');
        $('#text1-1peu').delay('300').animate({
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
function diapositiva11(){
    $('.scroll').animate({
            'bottom': '-10%'
    },trans,'swing');
    $('#text1-1').delay('100').animate({
        'top': '100%'
    },trans,'swing');
    $('#text1-1peu').delay('200').animate({
        'bottom': '-10%'
    },trans,'swing');
    $('#foto1-1').delay('300').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#foto1-2').delay('300').animate({
        'top': '0%'
    },trans,'swing');
    $('#text1-2').delay('500').animate({
        'top': '40%'
    },trans,'swing');
    $('#text1-2 h3').delay('700').animate({
        'top': '0'
    },trans,'swing');
    $('#foto1-2 p').delay('800').animate({
        'right': '50px'
    },trans,'swing');
}
function diapositiva12(){
    $('#foto1-2 p').animate({
        'right': '-50%'
    },trans,'swing');
    $('#text1-2 p').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#text1-2').delay('400').animate({
        'top': '140%'
    },trans,'swing');
    $('#foto1-3').delay('600').animate({
        'opacity': '1'
    },trans,'swing',function(){
        $('#foto1-2').hide();
    });
    $('#text1-3').delay('400').animate({
        'left': '10%'
    },trans,'swing');
}
function diapositiva13(){
    $('#text1-3').animate({
        'top': '133%'
    },trans,'swing');
    $('#foto1-3').delay('200').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-4').delay('200').animate({
        'top': '0'
    },trans,'swing');
    $('#text1-4').delay('400').animate({
        'top': '30%'
    },trans,'swing');
    $('#text1-4 p').delay('600').animate({
        'top': '0'
    },trans,'swing');
    $('#foto1-4 p').delay('800').animate({
        'bottom': '10px'
    },trans,'swing');
}
function diapositiva14(){
    $('#foto1-4 p').animate({
        'bottom': '-10%'
    },trans,'swing');
    $('#text1-4 h3').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#text1-4').delay('400').animate({
        'top': '130%'
    },trans,'swing');
    $('#tapa1-4').delay('600').animate({
        'opacity': '0.8'
    },trans,'swing');
    $('#text1-5').delay('800').animate({
        'top': '70%'
    },trans,'swing');
}
function diapositiva15(){
    $('#text1-5').animate({
        'top': '120%'
    },trans,'swing');
    $('#tapa1-4').delay('200').animate({
        'opacity': '0.4'
    },trans,'swing');
    $('#fartet img').delay('400').animate({
        'left': '0'
    },trans,'swing');
    $('#fartet p').delay('600').animate({
        'left': '0'
    },trans,'swing');
    $('#barb img').delay('800').animate({
        'right': '0'
    },trans,'swing');
    $('#barb p').delay('1000').animate({
        'right': '0'
    },trans,'swing');
}
function diapositiva16(){
    $('#barb p').animate({
        'right': '-100%'
    },trans,'swing');
    $('#barb img').delay('200').animate({
        'right': '-100%'
    },trans,'swing');
    $('#fartet p').delay('400').animate({
        'left': '-100%'
    },trans,'swing');
    $('#fartet img').delay('600').animate({
        'left': '-100%'
    },trans,'swing',function(){
        $('#peixos1').hide();
    });
    $('#tapa1-4').delay('800').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-4').delay('800').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-5').delay('800').animate({
        'top': '0%'
    },trans,'swing');
    $('#foto1-5 p').delay('1000').animate({
        'right': '50px'
    },trans,'swing');
    $('#foto1-5text').delay('1200').animate({
        'top': '35%'
    },trans,'swing');
    $('#foto1-5text img').delay('1400').animate({
        'left': '0%'
    },trans,'swing');
}
function diapositiva17(){
    $('#foto1-5text img').animate({
        'left': '-100%'
    },trans,'swing');
    $('#foto1-5text').delay('200').animate({
        'top': '135%'
    },trans,'swing');
    $('#foto1-5 p').delay('400').animate({
        'right': '-50%'
    },trans,'swing');
    $('#foto1-5').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-6').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#foto1-6text p').delay('800').animate({
        'top': '60%'
    },trans,'swing');
    $('#foto1-6peu').delay('1000').animate({
        'top': '10%'
    },trans,'swing');
}
function diapositiva18(){
    $('#foto1-6peu').animate({
        'top': '-50%'
    },trans,'swing');
    $('#foto1-6text p').delay('200').animate({
        'top': '260%'
    },trans,'swing');
    $('#foto1-6').delay('400').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto1-7').delay('400').animate({
        'top': '0%'
    },trans,'swing');
    $('#tapa1-7').delay('400').animate({
        'top': '0%'
    },trans,'swing');
    $('#foto1-7text').delay('800').animate({
        'top': '30%'
    },trans,'swing');
    $('#foto1-7text img').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto1-7peu').delay('1200').animate({
        'bottom': '10px'
    },trans,'swing');
    $('#apartat2').load('apartat2.html');
}
function diapositiva20(){
    $('#apartat2').show();
    $('#foto1-7peu').animate({
        'bottom': '-50%'
    },trans,'swing');
    $('#foto1-7text img').delay('200').animate({
        'top': '-300px'
    },trans,'swing');
    $('#foto1-7text').delay('400').animate({
        'top': '-30%'
    },trans,'swing');
    $('#foto1-7').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-1').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#foto2-1text').delay('800').animate({
        'top': '45%'
    },trans,'swing');
    $('#foto2-1text p').delay('1000').animate({
        'top': '0'
    },trans,'swing');
    $('#foto2-1peu').delay('1200').animate({
        'bottom': '10px'
    },trans,'swing');
}
function diapositiva21(){
    $('#foto2-1peu').animate({
        'bottom': '-10%'
    },trans,'swing');
    $('#foto2-1text h2').delay('200').animate({
        'top': '300px'
    },trans,'swing');
    $('#foto2-1text').delay('400').animate({
        'top': '145%'
    },trans,'swing');
    $('#foto2-1').delay('600').animate({
        'top': '-100%'
    },trans,'swing');
    $('#foto2-2').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#foto2-2text').delay('800').animate({
        'top': '55%'
    },trans,'swing');
    $('#foto2-2peu').delay('1000').animate({
        'top': '100px'
    },trans,'swing');
}

// Funcions de video
$('#sarroaus1').on('click',function(){
    $('body').off('mousewheel');
    $('#videosapartat1').load('apartat1video1.html',function(){
        $('.videopopup').show();
    });
});

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