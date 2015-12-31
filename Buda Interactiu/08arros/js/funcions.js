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
function diapositiva11(){
    $('.scroll').animate({
        'bottom': '-50%'
    },trans,'swing');
    $('#foto1-1peu').delay('200').animate({
        'left': '-50%'
    },trans,'swing');
    $('#foto1-1text').delay('400').animate({
        'top': '140%'
    },trans,'swing');
    $('#foto1-1tapa').delay('600').animate({
        'opacity': '.8'
    },trans,'swing');
    $('#foto1-1text2').delay('800').animate({
        'top': '25%'
    },trans,'swing');
}
function diapositiva12(){
    $('#foto1-1text2').animate({
        'top': '125%'
    },trans,'swing');
    $('#foto1-1video').delay('200').animate({
        'top': '0'
    },trans,'swing',function(){
        $('#foto1-1video video')[0].play();
        //console.log($('#foto1-1video video').offset().left);
    });
    $('#foto1-1videopeu').delay('400').animate({
        'left': ($('#foto1-1video video').offset().left-200)+'px'
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