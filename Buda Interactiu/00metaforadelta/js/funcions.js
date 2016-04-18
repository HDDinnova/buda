var trans = 1200;
var sona=true;
var mutexvideo=false;
var diari1=false;
var diari2=false;
var zi=4;
var tecla;
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
    $(document).off( "keydown" );
    if(e.deltaY<0 || e==40){
        switch (pos) {
            case 10:
                passar(11);
                break;
            case 11:
                passar(12);
                break;
            case 12:
                passar(13);
                break;
            case 13:
                passar(14);
                break;
            case 14:
                passar(15);
                break;
            case 15:
                passar(16);
                break;
            case 16:
                passar(17);
                break;
            default :
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
        }
    } else if(e.deltaY>0) {
        switch (pos) {
            case 11:
                passar(10);
                break;
            case 12:
                passar(110);
                break;
            case 13:
                passar(120);
                break;
            case 14:
                passar(130);
                break;
            case 15:
                passar(140);
                break;
            case 16:
                passar(150);
                break;
            default :
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
        }
    }
}
function diapositiva(id){
    console.log(id);
    switch (id) {
        case 1:
            $('#foto1-1').animate({
                'opacity': 1
            },trans,function(){
                animat('#foto1-1text','0','30%');
                animat('#foto1-1text h2','200','0');
                animal('#foto1-1peu','400','0');
                $('.scroll').delay('600').animate({
                    'bottom': '1.5%'
                },trans,function(){
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                    $(document).keydown(function(e){
                        tecla = e.which;
                        controlMouse(tecla);
                    });
                });
            });
            break;
        case 10:
            animat('#foto1-1text2 p','0','-300px');
            animat('#foto1-1text2','200','-50%');
            animao('#foto1-1 .tapa','400','0');
            animat('#foto1-1text','600','50%');
            animat('#foto1-1text p','800','0');
            animal('#foto1-1peu','1000','0');
            animab('.scroll','1200','10px');
            break;
        case 11:
            animab('.scroll','0','-50%');
            animal('#foto1-1peu','200','-50%');
            animat('#foto1-1text p','400','300px');
            animat('#foto1-1text','600','150%');
            animao('#foto1-1 .tapa','800','.6');
            animat('#foto1-1text2','1000','10%');
            animat('#foto1-1text2 p','1200','0');
            video('#foto1-1i','apartat1video.html');
            break;
        case 110:
            animab('#foto1-1text3','0','110%');
            animat('#foto1-1text2','200','10%');
            animat('#foto1-1b','400','0');
            break;
        case 12:
            animat('#foto1-1b','0','300px');
            animat('#foto1-1text2','200','150%');
            animab('#foto1-1text3','400','10%');
            break;
        case 120:
            animal('#foto1-1peufotos','0','-50%');
            var pausa=200;
            $('#foto1-1 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80%',
                    'left':'-80%'
                },trans);
                pausa+=150;
            });
            animab('#foto1-1text3','800','10%');
            break;
        case 13:
            animab('#foto1-1text3','0','-90%');
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
            animal('#foto1-1peufotos','800','100px');
            $('#apartat2').load('apartat2.html');
            break;
        case 130:
            animal('#foto1-2peu','0','-50%');
            animat('#foto1-2text p','200','0');
            animat('#foto1-2text','400','140%');
            animat('#foto1-2','600','100%');
            animat('#foto1-1','600','0');
            animal('#foto1-1peufotos','1000','100px');
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
            break;
        case 14:
            $('#apartat2').show();
            var pausa=0;
            $('#foto1-1 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80%',
                    'left':'180%'
                },trans);
                pausa+=150;
            });
            animal('#foto1-1peufotos','500','-50%');
            animat('#foto1-1','800','-100%');
            animat('#foto1-2','800','0');
            animat('#foto1-2text','1000','40%');
            animat('#foto1-2text p','1200','0');
            animal('#foto1-2peu','1400','100px');
            break;
        case 140:
            animat('#foto1-2b2','0','300px');
            animat('#foto1-2b1','200','300px');
            animab('#foto1-2text2','400','-90%');
            animao('#foto1-2 .tapa','600','0');
            animat('#foto1-2text','800','40%');
            animat('#foto1-2text h2','1000','0');
            animal('#foto1-2peu','1200','100px');
            break;
        case 15:
            animal('#foto1-2peu','0','-50%');
            animat('#foto1-2text h2','200','-300px');
            animat('#foto1-2text','400','-60%');
            animao('#foto1-2 .tapa','600','.6');
            animab('#foto1-2text2','800','10%');
            animat('#foto1-2b1','1000','0');
            animat('#foto1-2b2','1200','0');
            video('#foto1-2i1','apartat2video1.html');
            video('#foto1-2i2','apartat2video2.html');
            break;
        case 150:
            $('#foto1-3 video')[0].pause();
            animat('#foto1-3b2','0','300px');
            animat('#foto1-3b1','200','300px');
            animat('#foto1-3text','400','110%');
            animat('#foto1-3','600','100%');
            animat('#foto1-2','600','0');
            animab('#foto1-2text2','800','10%');
            animat('#foto1-2b1','1000','0');
            animat('#foto1-2text2 p','1200','0');
            break;
        case 16:
            animat('#foto1-2text2 p','0','-300px');
            animat('#foto1-2b1','200','-300px');
            animab('#foto1-2text2','400','110%');
            animat('#foto1-2','600','-100%');
            animat('#foto1-3','600','0');
            animat('#foto1-3text','800','10%');
            animat('#foto1-3b1','1000','0');
            $('#foto1-3b2').delay(1200).animate({
                'top': '0'
            },trans,function(){
                $('#foto1-3 video')[0].play();
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
            });
            video('#foto1-3i1','apartat2video3.html');
            video('#foto1-3i2','apartat2video4.html');
            break;
        case 17:
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            break;
    }
}

// Funcions de video
function tancarvideo(){
    $('.videopopup').hide();
    $('#videos').html('');
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
    $(document).keydown(function(e){
        tecla = e.which;
        controlMouse(tecla);
    });
}

function video(boto,video){
    $(boto).click(function(){
        $('body').off('mousewheel');
        $(document).off( "keydown" );
        $('#videos').load(video,function(){
            $('.videopopup').show();
        });
    });
}

function passar(id){
    $('body').off('mousewheel');
    $(document).off( "keydown" );
    diapositiva(id);
    setTimeout(function(){
        if (id < 100 || id >=2000){
            if (id >= 20000) {
                pos = id/10;
            } else {
                pos=id;
            }
        } else {
            pos=id/10;
        }
        $('body').on('mousewheel',function(e){
            controlMouse(e);
        });
        $(document).keydown(function(e){
            tecla = e.which;
            controlMouse(tecla);
        });
        console.log('event');
    },2000);
}

function animat(element,delay,pos) {
    $(element).delay(delay).animate({
        'top' : pos
    },trans,'swing');
}
function animab(element,delay,pos) {
    $(element).delay(delay).animate({
        'bottom' : pos
    },trans,'swing');
}
function animal(element,delay,pos) {
    $(element).delay(delay).animate({
        'left' : pos
    },trans,'swing');
}
function animar(element,delay,pos) {
    $(element).delay(delay).animate({
        'right' : pos
    },trans,'swing');
}
function animao(element,delay,pos) {
    $(element).delay(delay).animate({
        'opacity' : pos
    },trans,'swing');
}
function animacol(element,delay,pos) {
    $(element).delay(delay).animate({
        'color' : pos
    },trans,'swing');
}
function slider(boto,div,boolea){
    $(boto).click(function(){
        $('body').off('mousewheel');
        $(document).off( "keydown" );
        $(div).show();
        if(!boolea){
            $(div+' .sliderfotos').slick();
            boolea=true;
        }
        $(div+' .blau').click(function(){
            $(div).hide();
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
            $(document).keydown(function(e){
                tecla = e.which;
                controlMouse(tecla);
            });
        });
    });
}
function foto(boto,div){
    $(boto).click(function(){
        $('body').off('mousewheel');
        $(document).off( "keydown" );
        $(div).show();
        $(div).click(function(){
            $(div).hide();
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
            $(document).keydown(function(e){
                tecla = e.which;
                controlMouse(tecla);
            });
        });
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