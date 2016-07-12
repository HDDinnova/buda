$('#bso').click(function(){
    if($('#audio')[0].paused){
        $('#audio')[0].play();
    } else {
        $('#audio')[0].pause();
    }
});

function controlMouse(e){
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
            case 17:
                passar(18);
                break;
            case 18:
                passar(19);
                break;
            case 19:
                passar(20);
                break;
            case 20:
                passar(21);
                break;
            case 21:
                passar(22);
                break;
            case 22:
                passar(23);
                break;
            case 23:
                passar(24);
                break;
            case 24:
                passar(25);
                break;
            case 25:
                passar(26);
                break;
            case 26:
                passar(27);
                break;
            case 27:
                passar(28);
                break;
            case 28:
                passar(29);
                break;
            case 29:
                passar(30);
                break;
            case 30:
                passar(31);
                break;
            case 31:
                passar(32);
                break;
            case 32:
                passar(33);
                break;
            case 33:
                passar(34);
                break;
        }
    } else if(e.deltaY<0) {
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
            case 17:
                passar(160);
                break;
            case 18:
                passar(170);
                break;
            case 19:
                passar(180);
                break;
            case 20:
                passar(190);
                break;
            case 21:
                passar(200);
                break;
            case 22:
                passar(210);
                break;
            case 23:
                passar(220);
                break;
            case 24:
                passar(230);
                break;
            case 25:
                passar(240);
                break;
            case 26:
                passar(250);
                break;
            case 27:
                passar(260);
                break;
            case 28:
                passar(270);
                break;
            case 29:
                passar(280);
                break;
            case 30:
                passar(290);
                break;
            case 31:
                passar(300);
                break;
            case 32:
                passar(310);
                break;
            case 33:
                passar(320);
                break;
        }
    }
}
function diapositiva(id){
    switch (id) {
        case 1:
            diapo1 = new TimelineMax();
            diapo1.to($('#foto1-1'),2,{left:0,ease:Power3.easeInOut})
                .to($('#foto1-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1')
                .to($('#foto1-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('.scroll'),2,{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            break;
        case 10:
            diapo11.reverse(0);
            break;
        case 11:
            diapo11 = new TimelineMax();
            diapo11.to($('.scroll'),2,{bottom:'-150%',ease:Power3.easeInOut})
                .to($('#foto1-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-2text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text h2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            break;
        case 110:
            diapo12.reverse(0);
            break;
        case 12:
            diapo12 = new TimelineMax();
            diapo12.to($('#foto1-2peu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto1-2text p'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            break;
        case 120:
            diapo13.reverse(0);
            break;
        case 13:
            diapo13 = new TimelineMax();
            diapo13.to($('#foto1-3peu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto1-3 .tapa'),2,{autoAlpha:'.7',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text img'),2,{left:'0',ease:Power3.easeInOut},'-=1.5');
            break;
        case 130:
            diapo14.reverse(0);
            break;
        case 14:
            diapo14 = new TimelineMax();
            diapo14.to($('#foto1-3text img'),2,{left:'-50vw',ease:Power3.easeInOut})
                .to($('#foto1-3text'),2,{bottom:'110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            break;
        case 140:
            diapo15.reverse(0);
            break;
        case 15:
            diapo15 = new TimelineMax();
            diapo15.to($('#foto1-4peu'),2,{left:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4 .tapa'),2,{autoAlpha:'.7',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            video('#foto1-4boto','apartat1video1.php');
            break;
        case 150:
            diapo16.reverse(0);
            break;
        case 16:
            diapo16 = new TimelineMax();
            diapo16.to($('#foto1-4text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4text'),2,{top:'-115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            break;
        case 160:
            diapo17.reverse(0);
            break;
        case 17:
            diapo17 = new TimelineMax();
            diapo17.to($('#foto1-5peu'),2,{left:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5 .tapa'),2,{autoAlpha:'.7',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5text'),2,{bottom:'15%',ease:Power3.easeInOut},'-=1.8');
            break;
        case 170:
            diapo18.reverse(0);
            break;
        case 18:
            diapo18 = new TimelineMax();
            diapo18.to($('#foto1-5text'),2,{bottom:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-6peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            break;
        case 180:
            diapo19.reverse(0);
            break;
        case 19:
            diapo19 = new TimelineMax();
            diapo19.to($('#foto1-6peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6 .tapa'),2,{autoAlpha:'.7',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6text'),2,{bottom:'15%',ease:Power3.easeInOut},'-=1.8');
            break;
        case 190:
            var pausa=0;
            $('#foto1-6 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80%',
                    'left':'-80%',
                    rotate: '40deg'
                },1200);
                pausa+=150;
            });
            break;
        case 20:
            var angle=5;
            var posi=45;
            var pausa=0;
            $('#foto1-6 .f').rotate('40deg');
            $('#foto1-6 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'20%',
                    'left':posi+'%',
                    rotate: angle+'deg'
                },1200);
                angle-=3;
                posi+=1;
                pausa+=150;
            });
            $('#apartat2').load('apartat2.php');
            break;
        case 200:
            var angle=5;
            var posi=45;
            var pausa=600;
            $('#foto1-6 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'20%',
                    'left':posi+'%',
                    rotate: angle+'deg'
                },1200);
                angle-=3;
                posi+=1;
                pausa+=150;
            });
            diapo21.reverse(0);
            break;
        case 21:
            var pausa=0;
            $('#foto1-6 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80%',
                    'left':'180%',
                    rotate: '-40deg'
                },1200);
                pausa+=150;
            });
            $('#apartat2').show();
            diapo21 = new TimelineMax();
            diapo21.to($('#foto1-6text'),2,{bottom:'-215%',ease:Power3.easeInOut},1)
                .to($('#foto1-6'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            break;
        case 210:
            $('#foto2-1video video')[0].pause();
            diapo22.reverse(0);
            break;
        case 22:
            diapo22 = new TimelineMax();
            diapo22.to($('#foto2-1peu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto2-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1video .videopeu'),2,{left:'0',ease:Power3.easeInOut,onComplete: video21},'-=1.8');
            function video21(){
                $('#foto2-1video video')[0].play();
            }
            $('#foto2-1video video').on('ended',function(){
                passar(23);
            });
            break;
        case 220:
            diapo23.reverse(0);
            diapo23.eventCallback("onReverseComplete",video21);
            break;
        case 23:
            $('#foto2-1video video')[0].pause();
            diapo23 = new TimelineMax();
            diapo23.to($('#foto2-1video .videopeu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto2-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-2text'),2,{top:'50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            video('#foto2-2boto1','apartat2video1.php');
            video('#foto2-2boto2','apartat2video2.php');
            $('#apartat3').load('apartat3.php');
            break;
        case 230:
            diapo24.reverse(0);
            diapo24.eventCallback("onReverseComplete",apartat3);
            function apartat3(){
                $('#apartat3').hide();
            }
            break;
        case 24:
            $('#apartat3').show();
            diapo24 = new TimelineMax();
            diapo24.to($('#foto2-2boto2'),2,{top:'300px',ease:Power3.easeInOut})
                .to($('#foto2-2boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text'),2,{top:'250%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-1text'),2,{top:'25%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            break;
        case 240:
            $('#foto3-1video video')[0].pause();
            diapo25.reverse(0);
            break;
        case 25:
            diapo25 = new TimelineMax();
            diapo25.to($('#foto3-1peu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto3-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text'),2,{top:'225%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video'),2,{top:'0',ease:Power3.easeInOut,onComplete:video31},'-=1.8')
                .to($('#foto3-1video .videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            function video31(){
                $('#foto3-1video video')[0].play();
            }
            $('#foto3-1video video').on('ended',function(){
                passar(26);
            });
            break;
        case 250:
            diapo26.reverse(0);
            break;
        case 26:
            $('#foto3-1video video')[0].pause();
            diapo26 = new TimelineMax();
            diapo26.to($('#foto3-1video .videopeu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            break;
        case 260:
            $('#foto3-2video video')[0].pause();
            diapo27.reverse(0);
            break;
        case 27:
            diapo27 = new TimelineMax();
            diapo27.to($('#foto3-2peu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto3-2text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2video'),2,{top:'0',ease:Power3.easeInOut,onComplete:video32},'-=1.8')
                .to($('#foto3-2video .videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            function video32(){
                $('#foto3-2video video')[0].play();
            }
            $('#foto3-2video video').on('ended',function(){
                passar(28);
            });
            break;
        case 270:
            diapo28.reverse(0);
            diapo28.eventCallback("onReverseComplete",video32);
            break;
        case 28:
            $('#foto3-2video video')[0].pause();
            diapo28 = new TimelineMax();
            diapo28.to($('#foto3-2video .videopeu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto3-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-3text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3botons'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3boto4'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3boto3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            video('#foto3-3boto1','apartat3video1.php');
            video('#foto3-3boto2','apartat3video2.php');
            video('#foto3-3boto3','apartat3video3.php');
            video('#foto3-3boto4','apartat3video4.php');
            video('#foto3-3boto5','apartat3video5.php');
            break;
        case 280:
            diapo29.reverse(0);
            break;
        case 29:
            diapo29 = new TimelineMax();
            diapo29.to($('#foto3-3peu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto3-3boto5'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3boto4'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3boto3'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3botons'),2,{top:'230%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3text'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3text2'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8');
            break;
        case 290:
            $('#foto3-3video video')[0].pause();
            diapo30.reverse(0);
            break;
        case 30:
            diapo30 = new TimelineMax();
            diapo30.to($('#foto3-3text2'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3video'),2,{top:'0',ease:Power3.easeInOut,onComplete:video33},'-=1.8')
                .to($('#foto3-3video .videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            function video33(){
                $('#foto3-3video video')[0].play();
            }
            $('#foto3-3video video').on('ended',function(){
                passar(31);
            });
            $('#apartat4').load('apartat4.php');
            break;
        case 300:
            diapo31.reverse(0);
            diapo28.eventCallback("onReverseComplete",apartat4);
            function apartat4(){
                $('#foto3-3video video')[0].play();
                $('#apartat4').hide();
            }
            break;
        case 31:
            $('#foto3-3video video')[0].pause();
            $('#apartat4').show();
            diapo31 = new TimelineMax();
            diapo31.to($('#foto3-3video .videopeu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            break;
        case 310:
            diapo32.reverse(0);
            $('#foto4-1video1 video')[0].pause();
            break;
        case 32:
            diapo32 = new TimelineMax();
            diapo32.to($('#foto4-1peu'),2,{left:'0',ease:Power3.easeInOut})
                .to($('#foto4-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1video1'),2,{top:'0',ease:Power3.easeInOut,onComplete:video41},'-=1.8')
                .to($('#foto4-1video1 .videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            function video41(){
                $('#foto4-1video1 video')[0].play();
            }
            $('#foto4-1video1 video').on('ended',function(){
                passar(33);
            });
            break;
        case 320:
            $('#foto4-1video2 video')[0].pause();
            diapo33.reverse(0);
            diapo33.eventCallback('onReverseComplete',video41);
            break;
        case 33:
            $('#foto4-1video1 video')[0].pause();
            diapo33 = new TimelineMax();
            diapo33.to($('#foto4-1video1 .videopeu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1video1'),2,{top:'-100%',ease:Power3.easeInOut,onComplete:video41},'-=1.8')
                .to($('#foto4-1video2'),2,{top:'0',ease:Power3.easeInOut,onComplete:video42},'-=2')
                .to($('#foto4-1video2 .videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            function video42(){
                $('#foto4-1video2 video')[0].play();
            }
            $('#foto4-1video2 video').on('ended',function(){
                passar(34);
            });
            break;
        case 34:
            $('#foto4-1video2 video')[0].pause();
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            break;
    }
}