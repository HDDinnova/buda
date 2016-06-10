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
function activaEvents(){
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
    $(document).keydown(function(e){
        tecla = e.which;
        controlMouse(tecla);
    });
}
function diapositiva(id){
    switch (id) {
        case 1:
            var diapo1 = new TimelineMax();
            diapo1.fromTo($('#foto1-1'),2,{opacity:0},{opacity:1})
                .fromTo($('#foto1-1text'),2,{top:'-50%'},{top:'30%',ease:Power3.easeInOut},1)
                .fromTo($('#foto1-1text h2'),2,{top:'-300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1peu'),2,{left:'-50%'},{left:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('.scroll'),2,{bottom:'-50%'},{bottom:'1.5%',ease:Power3.easeInOut,onComplete:activaEvents()},'-=1.8');
            break;
        case 10:
            var diapo10 = new TimelineMax();
            diapo10.fromTo($('#foto1-1text2 p'),2,{top:'0'},{top:'-300px',ease:Power3.easeInOut})
                .fromTo($('#foto1-1text2'),2,{top:'10%'},{top:'-50%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1 .tapa'),2,{opacity:'.6'},{opacity:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text'),2,{top:'150%'},{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text p'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1peu'),2,{left:'-50%'},{left:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('.scroll'),2,{bottom:'-50%'},{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            break;
        case 11:
            var diapo2 = new TimelineMax();
            diapo2.fromTo($('.scroll'),2,{bottom:'1.5%'},{bottom:'-50%',ease:Power3.easeInOut})
                .fromTo($('#foto1-1peu'),2,{left:'0'},{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text p'),2,{top:'0'},{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text'),2,{top:'30%'},{top:'150%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1 .tapa'),2,{opacity:'0'},{opacity:'.6',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text2'),2,{top:'-50%'},{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text2 p'),2,{top:'-300px'},{top:'0',ease:Power3.easeInOut},'-=1.8');
            video('#foto1-1i','apartat1video.html');
            break;
        case 110:            
            var diapo110 = new TimelineMax();
            diapo110.fromTo($('#foto1-1text3'),2,{bottom:'10%'},{bottom:'110%',ease:Power3.easeInOut})
                    .fromTo($('#foto1-1text2'),2,{top:'150%'},{top:'10%',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-1b'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8');
            break;
        case 12:        
            var diapo110 = new TimelineMax();
            diapo110.fromTo($('#foto1-1b'),2,{top:'0'},{top:'300px',ease:Power3.easeInOut})
                    .fromTo($('#foto1-1text2'),2,{top:'10%'},{top:'150%',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-1text3'),2,{bottom:'110%'},{bottom:'10%',ease:Power3.easeInOut},'-=1.8');
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
            animab('#foto1-1text3','.8','10%');
            break;
        case 13:
            var diapo13 = new TimelineMax();
            var angle=5;
            diapo13.fromTo($('#foto1-1text3'),2,{bottom:'10%'},{bottom:'-90%',ease:Power3.easeInOut})
                    .staggerFromTo($('#foto1-1 .f'),.8,{rotation:90,top:'-80%',left:'-80%'},{rotation:'angle-=5',top:'15%',left:'5%'},0.2)
                    .fromTo($('#foto1-1peufotos'),2,{left:'-50%'},{left:'100px',ease:Power3.easeInOut},'-=1.8');
            $('#foto1-1 .f').click(function(){
                $(this).css('z-index',zi);
            });
            $('#apartat2').load('apartat2.html');
            break;
        case 130:
            animal('#foto1-2peu','0','-50%');
            animat('#foto1-2text p','.2','0');
            animat('#foto1-2text','.4','140%');
            animat('#foto1-2','.6','100%');
            animat('#foto1-1','.6','0');
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
            animal('#foto1-1peufotos','.5','-50%');
            animat('#foto1-1','.8','-100%');
            animat('#foto1-2','.8','0');
            animat('#foto1-2text','1','40%');
            animat('#foto1-2text p','1.2','0');
            animal('#foto1-2peu','1.4','100px');
            break;
        case 140:
            animat('#foto1-2b2','0','300px');
            animat('#foto1-2b1','.2','300px');
            animab('#foto1-2text2','.4','-90%');
            animao('#foto1-2 .tapa','.6','0');
            animat('#foto1-2text','.8','40%');
            animat('#foto1-2text h2','1','0');
            animal('#foto1-2peu','1.2','100px');
            break;
        case 15:
            animal('#foto1-2peu','0','-50%');
            animat('#foto1-2text h2','.2','-300px');
            animat('#foto1-2text','.4','-60%');
            animao('#foto1-2 .tapa','.6','.6');
            animab('#foto1-2text2','.8','10%');
            animat('#foto1-2b1','1','0');
            animat('#foto1-2b2','1.2','0');
            video('#foto1-2i1','apartat2video1.html');
            video('#foto1-2i2','apartat2video2.html');
            break;
        case 150:
            $('#foto1-3 video')[0].pause();
            animat('#foto1-3b2','0','300px');
            animat('#foto1-3b1','.2','300px');
            animat('#foto1-3text','.4','110%');
            animat('#foto1-3','.6','100%');
            animat('#foto1-2','.6','0');
            animab('#foto1-2text2','.8','10%');
            animat('#foto1-2b1','1','0');
            animat('#foto1-2text2 p','1.2','0');
            break;
        case 16:
            animat('#foto1-2text2 p','0','-300px');
            animat('#foto1-2b1','.2','-300px');
            animab('#foto1-2text2','.4','110%');
            animat('#foto1-2','.6','-100%');
            animat('#foto1-3','.6','0');
            animat('#foto1-3text','.8','10%');
            animat('#foto1-3b1','1','0');
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
    },2000);
}
function animat(element,delay,pos) {
    TweenMax.to(element,2,{top:pos,delay:delay,ease:Power3.easeInOut});
}
function animab(element,delay,pos) {
    TweenMax.to(element,2,{bottom:pos,delay:delay,ease:Power3.easeInOut});
}
function animal(element,delay,pos) {
    TweenMax.to(element,2,{left:pos,delay:delay,ease:Power3.easeInOut});
}
function animar(element,delay,pos) {
    TweenMax.to(element,2,{right:pos,delay:delay,ease:Power3.easeInOut});
}
function animao(element,delay,pos) {
    TweenMax.to(element,2,{opacity:pos,delay:delay,ease:Power3.easeInOut});
}
function animacol(element,delay,pos) {
    TweenMax.to(element,2,{color:pos,delay:delay,ease:Power3.easeInOut});
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