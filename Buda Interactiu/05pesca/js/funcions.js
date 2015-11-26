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