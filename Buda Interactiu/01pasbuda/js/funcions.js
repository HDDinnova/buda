var trans = 1200;
$('#bso').click(function(){
    if($('#audio')[0].paused){
        $('#audio')[0].play();
    } else {
        $('#audio')[0].pause();
    }
});
function controlMouse(e){
    if(e.deltaY<0){                
        switch (pos) {
            case 10:
                $('body').off('mousewheel');
                diapositiva11();
                $('#apartat2').load('apartat2.html');
                setTimeout(function(){
                    pos=11;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 11:
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
                diapositiva21();
                setTimeout(function(){
                    pos=21;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;                
            case 21:
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
                diapositiva32();
                setTimeout(function(){
                    pos=32;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 32:
                $('body').off('mousewheel');
                diapositiva33();
                setTimeout(function(){
                    pos=33;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 33:
                $('body').off('mousewheel');
                diapositiva34();
                setTimeout(function(){
                    pos=34;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 34:
                $('body').off('mousewheel');
                diapositiva40();
                setTimeout(function(){
                    pos=40;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 40:
                $('body').off('mousewheel');
                diapositiva41();
                setTimeout(function(){
                    pos=41;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;
            case 41:
                $('body').off('mousewheel');
                diapositiva42();
                setTimeout(function(){
                    pos=42;
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                },1000);
                break;                
            case 42:
                $('body').off('mousewheel');
                diapositiva50();
                setTimeout(function(){
                    pos=50;
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
        }
    }
}
function diapositiva1(){
    $('#apartat1 video').animate({
        'opacity': 1
    },'slow',function(){
        $('#destacat1').animate({
            'top': '180px'
        },trans,'swing');
        $('#titol1').delay('200').animate({
            'top': '400px'
        },trans,'swing');
    });
    $('#apartat1 video').get(0).play();
}
function diapositiva10(){
    $('#apartat1 video').animate({
        'opacity': 1
    },trans,function(){
        $('#destacat1').animate({
            'top': '180px'
        },trans,'swing');
        $('#titol1').delay('200').animate({
            'top': '400px'
        },trans,'swing');
    });
    $('#apartat1 #tapa').animate({
        'opacity': 0
    },'slow');
    $('#destacat2').animate({
        'left': '-500px'
    },trans,'swing');
    $('#fotobarquesriba').delay('200').show().animate({
        'top': '-50%',
        'right': '-50%',
        rotate: '-45deg'
    },trans,'swing');
}
function diapositiva11(){
    $('#apartat1 #tapa').animate({
        'opacity': 0.5
    },'slow');
    $('#destacat1').animate({
        'top': '-300px'
    },trans,'swing');
    $('#titol1').animate({
        'top': '101%'
    },trans,'swing');
    $('#destacat2').delay('250').animate({
        'left': '5%'
    },trans,'swing');
    $('#fotobarquesriba').rotate('-45deg');
    $('#fotobarquesriba').delay('100').show().animate({
        'top': '90px',
        'right': '180px',
        rotate: '0deg'
    },trans,'swing');
}
function diapositiva11b(){
    $('#apartat1 #tapa').animate({
        'opacity': 0.8
    },'slow');
    $('#destacat2').delay('250').animate({
        'left': '5%'
    },trans,'swing');
    $('#fotobarquesriba').rotate('-45deg');
    $('#fotobarquesriba').delay('100').show().animate({
        'top': '90px',
        'right': '180px',
        rotate: '0deg'
    },trans,'swing');   
    $('#apartat1 video').animate({
        'bottom': '0%',
        'opacity': 1
    },trans,'swing');
    $('#apartat2 video').animate({
        'top': '100%'
    },trans,'swing');
    $('#apartat2 video').get(0).pause();
    $('#videotext').animate({
        'left': '-250px'
    },trans,'swing');
}
function diapositiva20(){
    $('#fotobarquesriba').animate({
        'top': '-50%',
        'right': '-50%',
        rotate: '-45deg'
    },trans,'swing');
    $('#destacat2').animate({
        'left': '-500px'
    },trans,'swing');    
    $('#apartat1 video').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#apartat2 video').get(0).play();
    $('#apartat2 video').animate({
        'top': '0%'
    },trans,'swing');
    $('#videotext').delay('300').animate({
        'left': '50px'
    },trans,'swing');
}
function diapositiva20b(){
    $('#apartat1').load('apartat1.html').show();
    $('#videotext').delay('600').animate({
        'left': '50px'
    },trans,'swing');
    $('#tapa2').delay('400').animate({
        'opacity':0.0
    });
    $('#text2').delay('200').animate({
        'top': '-50%'
    },trans,'swing');
    $('#play2').animate({
        'bottom': '-70px'
    },trans/2,'swing');
}
function diapositiva21(){
    $('#videotext').animate({
        'left': '-250px'
    },trans,'swing');
    $('#tapa2').delay('200').animate({
        'opacity':0.3
    });
    $('#text2').delay('500').animate({
        'top': '55%'
    },trans,'swing');
    $('#play2').delay('600').animate({
        'bottom': '80px'
    },trans/2,'swing');
    $('#apartat3').load('apartat3.html');
}
function diapositiva21b(){
    $('#apartat2').show();
    $('#tapa2').css({
        'opacity':0.3
    });
    $('#tapa3-1 .col-md-8 p').css({
        'transitionDelay': '10ms',
        'transform': 'translateY(1500px)'
    });
    $('#tapa3-1 .col-md-8 img').css({
        'transitionDelay': '400ms',
        'transform': 'translateY(1500px)'
    });
    $('#titul3-1').delay('300').animate({
        'left': '-500px'
    },trans,'swing');
    $('#video3fons').delay('100').animate({
        'bottom': '100%'
    },trans,'swing');
    $('#tapa3-1').delay('1000').animate({
        'top': '100%'
    },trans,'swing',function(){
        $('#apartat3').hide();
    });    
    $('#apartat2 video').delay('100').animate({
        'top': '0%'
    },trans,'swing');   
    $('#text2').delay('1100').animate({
        'top': '55%'
    },trans,'swing');
    $('#play2').delay('1300').animate({
        'bottom': '80px'
    },trans/2,'swing');
}
function diapositiva30(){
    $('#apartat1').html('').hide();
    $('#apartat3').show();
    $('#play2').animate({
        'bottom': '-70px'
    },trans/2,'swing');
    $('#text2').delay('200').animate({
        'top': '-50%'
    },trans,'swing');
    $('#video3fons').delay('900').animate({
        'bottom': '0%'
    },trans,'swing');
    $('#apartat2 video').delay('900').animate({
        'top': '100%'
    },trans,'swing');    
    $('#tapa3-1').animate({
        'top': 0
    },trans,'swing');
    $('#titul3-1').delay('600').animate({
        'left': '50px'
    },trans,'swing');
    $('#tapa3-1 .col-md-8 img').css({
        'transitionDelay': '800ms',
        'transform': 'translateY(0px)'
    });
    $('#tapa3-1 .col-md-8 p').css({
        'transitionDelay': '1s',
        'transform': 'translateY(0px)'
    });
}
function diapositiva30b(){
    $('#video3fons').get(0).pause();
    $('#tapa3-1').animate({
        'top': 0
    },trans,'swing');
    $('#titul3-1').delay('600').animate({
        'left': '50px'
    },trans,'swing');
    $('#tapa3-1 .col-md-8 img').css({
        'transitionDelay': '800ms',
        'transform': 'translateY(0px)'
    });
    $('#tapa3-1 .col-md-8 p').css({
        'transitionDelay': '1s',
        'transform': 'translateY(0px)'
    });
    $('#apartat2').load('apartat2.html');
}
function diapositiva31(){
    $('#tapa3-1 .col-md-8 p').css({
        'transitionDelay': '10ms',
        'transform': 'translateY(1500px)'
    });
    $('#tapa3-1 .col-md-8 img').css({
        'transitionDelay': '400ms',
        'transform': 'translateY(1500px)'
    });
    $('#titul3-1').delay('300').animate({
        'left': '-500px'
    },trans,'swing');
    $('#tapa3-1').delay('500').animate({
        'top': '100%'
    },trans,'swing',function(){
        $('#video3fons').get(0).play();
    });
}

function diapositiva31b(){
    $('#video3fons').animate({
        'bottom': '0%'
    },trans,'swing');
    $('#video3-2fons').animate({
        'top': '100%'
    },trans,'swing');
    $('#tapa3-2 .col-md-8 p').css({
        'transitionDelay': '50ms',
        'transform': 'translateY(1500px)'
    });
    $('#tapa3-2 .col-md-8 img').css({
        'transitionDelay': '200ms',
        'transform': 'translateY(1500px)'
    });
    $('#titul3-2').delay('400').animate({
        'right': '-500px'
    },trans,'swing');
    $('#tapa3-2').delay('800').animate({
        'top': '100%'
    },trans,'swing',function(){
        $('#video3fons').get(0).play();
    });
}
function diapositiva32(){
    $('#video3fons').get(0).pause();
    $('#tapa3-2').animate({
        'top': 0
    },trans,'swing');
    $('#tapa3-2 .col-md-8 img').css({
        'transitionDelay': '200ms',
        'transform': 'translateY(0px)'
    });
    $('#tapa3-2 .col-md-8 p').css({
        'transitionDelay': '300ms',
        'transform': 'translateY(0px)'
    });
    $('#titul3-2').delay('900').animate({
        'right': '50px'
    },trans,'swing');
    $('#video3-2fons').delay('600').animate({
        'top': '0%'
    },trans,'swing');
    $('#video3fons').delay('600').animate({
        'bottom': '100%'
    },trans,'swing');
}
function diapositiva32b(){
    $('#tapa3-2').delay('200').animate({
        'top': '0%'
    },trans,'swing');
    $('#tapa3-2 .col-md-8 img').css({
        'transitionDelay': '300ms',
        'transform': 'translateY(0px)'
    });
    $('#tapa3-2 .col-md-8 p').css({
        'transitionDelay': '400ms',
        'transform': 'translateY(0px)'
    });
    $('#subtitul3-2').delay('100').animate({
        'right': '-50%'
    },trans,'swing');
    $('#titul3-2').animate({
        backgroundColor: '#F58431',
        color: '#white'
    },trans,'swing');
}
function diapositiva33(){
    $('#tapa3-2').delay('200').animate({
        'top': '100%'
    },trans,'swing');
    $('#tapa3-2 .col-md-8 img').css({
        'transitionDelay': '100ms',
        'transform': 'translateY(1500px)'
    });
    $('#tapa3-2 .col-md-8 p').css({
        'transitionDelay': '10ms',
        'transform': 'translateY(1500px)'
    });
    $('#subtitul3-2').delay('400').animate({
        'right': '50px'
    },trans,'swing');
    $('#titul3-2').delay('500').animate({
        backgroundColor: 'white',
        color: '#F58431'
    },trans,'swing');
}
function diapositiva33b(){
    $('#subtitul3-2').delay('200').animate({
        'right': '50px'
    },trans,'swing');
    $('#titul3-2').animate({
        'right': '50px'
    },trans,'swing',function(){
        $('#video3-2fons').get(0).pause();
    });
}
function diapositiva34(){
    $('#titul3-2').animate({
        'right': '-50%'
    },trans,'swing',function(){
        $('#video3-2fons').get(0).play();
    });
    $('#subtitul3-2').delay('200').animate({
        'right': '-50%'
    },trans,'swing');
    $('#apartat4').load('apartat4.html');
}
function diapositiva34b(){
    $('#imgbarcassa p').animate({
        'bottom':'-50px'
    },trans,'swing');
    $('#destacat4').delay('100').animate({
        'top':'100%'
    },trans,'swing');
    $('#titol4').delay('400').animate({
        'top':'100%'
    },trans,'swing');
    $('#imgbarcassa img').delay('800').animate({
        'top':'100%'
    },trans,'swing');
    $('#video3-2fons').delay('800').animate({
        'top': '0%'
    },trans,'swing',function(){
        $('#video3-2fons').get(0).play();
    });    
}
function diapositiva40(){
    $('#apartat2').html('').hide();
    $('#apartat4').show();
    $('#video3-2fons').get(0).pause();
    $('#video3-2fons').animate({
        'top': '-100%'
    },trans,'swing');
    $('#imgbarcassa img').animate({
        'top':'0%'
    },trans,'swing');
    $('#titol4').delay('600').animate({
        'top':'45%'
    },trans,'swing');
    $('#destacat4').delay('900').animate({
        'top':'60%'
    },trans,'swing');
    $('#imgbarcassa p').delay('1100').animate({
        'bottom':'10px'
    },trans,'swing');
}
function diapositiva40b(){    
    $('#text4-1 p').css({
        'transitionDelay': '10ms',
        'transform': 'translateY(1500px)'
    });
    $('#text4-1 img').css({
        'transitionDelay': '300ms',
        'transform': 'translateY(1500px)'
    });
    $('#text4-1').delay('600').animate({
        'top':'100%'
    },trans,'swing');
    $('#tapa4-1').delay('800').animate({
        'opacity':0
    },trans,'swing');    
    $('#titol4').delay('1200').animate({
        'top':'45%'
    },trans,'swing');
    $('#destacat4').delay('1000').animate({
        'top':'60%'
    },trans,'swing');
    $('#imgbarcassa p').delay('1100').animate({
        'bottom':'10px'
    },trans,'swing');
}
function diapositiva41(){
    $('#imgbarcassa p').animate({
        'bottom':'-50px'
    },trans,'swing');
    $('#destacat4').delay('400').animate({
        'top':'-30%'
    },trans,'swing');
    $('#titol4').delay('100').animate({
        'top':'-30%'
    },trans,'swing');
    $('#tapa4-1').delay('600').animate({
        'opacity':0.3
    },trans,'swing');
    $('#text4-1').delay('700').animate({
        'top':'40%'
    },trans,'swing');
    $('#text4-1 img').css({
        'transitionDelay': '1s',
        'transform': 'translateY(0px)'
    });
    $('#text4-1 p').css({
        'transitionDelay': '1300ms',
        'transform': 'translateY(0px)'
    });
}
function diapositiva41b(){
    $('#imgbarcassa2 p').animate({
        'bottom':'-50px'
    },trans,'swing');
    $('#play4').delay('100').animate({
        'bottom':'-70px'
    },trans,'swing');
    $('#destacat4-2').delay('300').animate({
        'top':'100%'
    },trans,'swing');
    $('#titol4-2').delay('500').animate({
        'top':'100%'
    },trans,'swing');
    $('#imgbarcassa2 img').delay('600').animate({
        'top':'100%'
    },trans,'swing');
    $('#imgbarcassa img').delay('600').animate({
        'top':'0%'
    },trans,'swing');
    $('#tapa4-1').delay('600').animate({
        'top':'0%'
    },trans,'swing');
    $('#text4-1').delay('700').animate({
        'top':'40%'
    },trans,'swing');
    $('#text4-1 img').css({
        'transitionDelay': '1.3s',
        'transform': 'translateY(0px)'
    });
    $('#text4-1 p').css({
        'transitionDelay': '1s',
        'transform': 'translateY(0px)'
    });
}
function diapositiva42(){
    $('#text4-1 img').css({
        'transitionDelay': '1ms',
        'transform': 'translateY(-1500px)'
    });
    $('#text4-1 p').css({
        'transitionDelay': '200ms',
        'transform': 'translateY(-1500px)'
    });
    $('#text4-1').delay('300').animate({
        'top':'-100%'
    },trans,'swing');
    $('#imgbarcassa img').delay('400').animate({
        'top':'-100%'
    },trans,'swing');
    $('#tapa4-1').delay('400').animate({
        'top':'-100%'
    },trans,'swing');
    $('#imgbarcassa2 img').delay('400').animate({
        'top':'0%'
    },trans,'swing');
    $('#titol4-2').delay('600').animate({
        'top':'15%'
    },trans,'swing');
    $('#destacat4-2').delay('800').animate({
        'top':'25%'
    },trans,'swing');
    $('#play4').delay('1000').animate({
        'bottom':'25%'
    },trans,'swing');
    $('#imgbarcassa2 p').delay('1100').animate({
        'bottom':'10px'
    },trans,'swing');
    $('#apartat5').load('apartat5.html');
}
function diapositiva50(){
    $('#apartat5').show();
    $('#imgbarcassa2 p').animate({
        'bottom':'-50px'
    },trans,'swing');
    $('#titol4-2').delay('100').animate({
        'top':'-50%'
    },trans,'swing');
    $('#destacat4-2').delay('300').animate({
        'top':'-50%'
    },trans,'swing');
    $('#play4').delay('600').animate({
        'bottom':'150%'
    },trans,'swing');
    $('#apartat5 video').get(0).play();
    $('#imgbarcassa2 img').delay('800').animate({
        'top':'100%'
    },trans,'swing');
    $('#apartat5 video').delay('800').animate({
        'bottom':'0%'
    },trans,'swing');
}