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
    $('#imgcalaixos img').animate({
        'opacity': 1
    },'slow',function(){
        $('#titol1').animate({
            'top': '400px'
        },trans,'swing');
        $('#destacat1').delay('200').animate({
            'top': '180px'
        },trans,'swing');
        $('#imgcalaixos p').delay('600').animate({
            'bottom': '10px'
        },trans,'swing',function(){            
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
        });
    });
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