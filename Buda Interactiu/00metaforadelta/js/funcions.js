var trans = 1200;
var sona=true;
var mutexvideo=false;
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
$('#mi a').click(function(){
    var d = parseInt($(this).attr('id'));
    if (d==14){
        passar(1);
        passar(11);
        passar(12);
        passar(13);
        passar(14);
    }
    $('#mi').animate({
        bottom: '-160px'
    }, 200);
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
});
function controlMouse(e){
    $(window).unbind('wheel');
    $(document).off( "keydown" );
    if(e.deltaY>0 || e==40){
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
        }
    } else if(e.deltaY<0 || e==38) {
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
        }
    }
}
function diapositiva(id){
    switch (id) {
        case 1:
            diapo1 = new TimelineMax();
            diapo1.fromTo($('#foto1-1'),2,{autoAlpha:0},{autoAlpha:1})
                .fromTo($('#foto1-1text'),2,{top:'-50%'},{top:'30%',ease:Power3.easeInOut},1)
                .fromTo($('#foto1-1text h2'),2,{top:'-300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1peu'),2,{left:'-50%'},{left:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('.scroll'),2,{bottom:'-50%'},{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            diapo1.addCallback(ratoli);
            break;
        case 10:
            diapo2.tweenTo(0, {onComplete:ratoli});
            break;
        case 11:
            diapo2 = new TimelineMax();
            diapo2.fromTo($('.scroll'),2,{bottom:'1.5%'},{bottom:'-50%',ease:Power3.easeInOut})
                .fromTo($('#foto1-1peu'),2,{left:'0'},{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text p'),2,{top:'0'},{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text'),2,{top:'30%'},{top:'150%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1 .tapa'),2,{autoAlpha:'0'},{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text2'),2,{top:'-50%'},{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text2 p'),2,{top:'-300px'},{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo2.addCallback(ratoli);
            video('#foto1-1i','apartat1video.php');
            break;
        case 110:
            diapo12.tweenTo(0, {onComplete:ratoli});
            break;
        case 12:        
            diapo12 = new TimelineMax();
            diapo12.fromTo($('#foto1-1b'),2,{top:'0'},{top:'300px',ease:Power3.easeInOut})
                    .fromTo($('#foto1-1text2'),2,{top:'10%'},{top:'150%',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-1text3'),2,{bottom:'110%'},{bottom:'10%',ease:Power3.easeInOut},'-=1.8');
            diapo12.addCallback(ratoli);
            break;
        case 120:     
            diapo13.tweenTo(0, {onComplete:ratoli});
            $('#foto1-1 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80%',
                    'left':'-80%'
                },trans);
                pausa+=150;
            });
            break;
        case 13:
            diapo13 = new TimelineMax();
            diapo13.fromTo($('#foto1-1text3'),2,{bottom:'10%'},{bottom:'-90%',ease:Power3.easeInOut})
                    .fromTo($('#foto1-1peufotos'),2,{left:'-50%'},{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo13.addCallback(ratoli);
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
            $('#apartat2').load('apartat2.php');
            break;
        case 130:
            diapo14.tweenTo(0, {onComplete:ratoli});
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
            diapo14 = new TimelineMax();
            diapo14.fromTo($('#foto1-1peufotos'),2,{left:'0'},{left:'-50%',ease:Power3.easeInOut},0.5)
                    .fromTo($('#foto1-1'),2,{top:'0'},{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-2'),2,{top:'100%'},{top:'0',ease:Power3.easeInOut},'-=2')
                    .fromTo($('#foto1-2text'),2,{top:'150%'},{top:'40%',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-2text p'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-2peu'),2,{left:'-50%'},{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo14.addCallback(ratoli);
            break;
        case 140:
            diapo15.tweenTo(0, {onComplete:ratoli});
            break;
        case 15:
            diapo15 = new TimelineMax();
            diapo15.fromTo($('#foto1-2peu'),2,{left:'0'},{left:'-50%',ease:Power3.easeInOut})
                    .fromTo($('#foto1-2text h2'),2,{top:'0'},{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-2text'),2,{top:'40%'},{top:'-60%',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-2 .tapa'),2,{autoAlpha:0},{autoAlpha:0.6,ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-2text2'),2,{bottom:'-90%'},{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-2b1'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-2b2'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo15.addCallback(ratoli);
            video('#foto1-2i1','apartat2video1.php');
            video('#foto1-2i2','apartat2video2.php');
            break;
        case 150:
            $('#foto1-3 video')[0].pause();
            diapo16.tweenTo(0, {onComplete:ratoli});
            break;
        case 16:
            diapo16 = new TimelineMax();
            diapo16.fromTo($('#foto1-2text2 p'),2,{top:'0'},{top:'-300px',ease:Power3.easeInOut})
                    .fromTo($('#foto1-2b1'),2,{top:'0'},{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-2text2'),2,{bottom:'10%'},{bottom:'110%',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-2'),2,{top:'0'},{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-3'),2,{top:'100%'},{top:'0',ease:Power3.easeInOut},'-=2')
                    .fromTo($('#foto1-3text'),2,{top:'110%'},{top:'10%',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-3b1'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                    .fromTo($('#foto1-3b2'),2,{top:'300px'},{top:'0',onComplete:foto13play(),ease:Power3.easeInOut},'-=1.8');
            diapo16.addCallback(ratoli);
            function foto13play(){
                $('#foto1-3 video')[0].play();
            }
            video('#foto1-3i1','apartat2video3.php');
            video('#foto1-3i2','apartat2video4.php');
            break;
        case 17:
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            break;
    }
}