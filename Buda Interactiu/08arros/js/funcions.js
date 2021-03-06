$('#bso').click(function(){
    if($('#audio')[0].paused){
        $('#audio')[0].play();
    } else {
        $('#audio')[0].pause();
    }
});

function diapositiva(id){
    switch (id) {
        case 1:
            diapo1 = new TimelineMax();
            diapo1.to($('#foto1-1'),2,{top:0,ease:Power3.easeInOut})
                .to($('#foto1-1text'),2,{top:'40%',ease:Power3.easeInOut},'-=1')
                .to($('#foto1-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('.scroll'),2,{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            diapo1.addCallback(ratoli);
            break;
        case 10:
            diapo11.tweenTo(0, {onComplete:ratoli});
            break;
        case 11:
            diapo11 = new TimelineMax();
            diapo11.to($('.scroll'),2,{bottom:'-150%',ease:Power3.easeInOut})
                .to($('#foto1-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1text'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1text2'),2,{top:'35%',ease:Power3.easeInOut},'-=1.8');
            diapo11.addCallback(ratoli);
            break;
        case 110:
            $('#foto1-1video video')[0].pause();
            diapo12.tweenTo(0, {onComplete:ratoli});
            break;
        case 12:
            diapo12 = new TimelineMax();
            diapo12.to($('#foto1-1text2'),2,{top:'235%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1 .tapa'),2,{backgroundColor:'black',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1videopeu'),2,{bottom:'1.5%',ease:Power3.easeInOut,onComplete:f12},'-=1.8');
            diapo12.addCallback(ratoli);
            function f12(){
                $('#foto1-1video video')[0].play();
            }
            break;
        case 120:
            diapo13.tweenTo(0, {onComplete:f120});
            function f120(){
                $('#foto1-1video video')[0].play();
                ratoli();
            }
            break;
        case 13:
            $('#foto1-1video video')[0].pause();
            diapo13 = new TimelineMax();
            diapo13.to($('#foto1-1videopeu'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1video'),2,{top:'200%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-2text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo13.addCallback(ratoli);
            break;
        case 130:
            diapo14.tweenTo(0, {onComplete:f130});
            function f130(){
                $('#foto1-3').hide();
                ratoli();
            }
            break;
        case 14:
            $('#foto1-3').show();
            diapo14 = new TimelineMax();
            diapo14.to($('#foto1-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text'),2,{top:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8');
            diapo14.addCallback(ratoli);
            break;
        case 140:
            diapo15.tweenTo(0, {onComplete:ratoli});
            break;
        case 15:
            diapo15 = new TimelineMax();
            diapo15.to($('#foto1-3text'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-4text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo15.addCallback(ratoli);
            break;
        case 150:
            diapo16.tweenTo(0, {onComplete:ratoli});
            break;
        case 16:
            diapo16 = new TimelineMax();
            diapo16.to($('#foto1-4text'),2,{bottom:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4foto2'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4text2'),2,{bottom:'25%',ease:Power3.easeInOut},'-=1.8');
            diapo16.addCallback(ratoli);
            break;
        case 160:
            $('#foto1-5 video')[0].pause();
            diapo17.tweenTo(0, {onComplete:ratoli});
            break;
        case 17:
            diapo17 = new TimelineMax();
            diapo17.to($('#foto1-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4text2'),2,{bottom:'-225%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-5 .videopeu'),2,{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            diapo17.addCallback(f17);
            function f17(){
                $('#foto1-5 video')[0].play();
                ratoli();
            }
            $('#apartat2').load('apartat2.php');
            break;
        case 170:
            diapo18.tweenTo(0, {onComplete:f170});
            function f170(){
                $('#foto1-5 video')[0].play();
                $('#apartat2').hide();
                ratoli();
            }
            break;
        case 18:
            $('#apartat2').show();
            $('#foto1-5 video')[0].pause();
            diapo18 = new TimelineMax();
            diapo18.to($('#foto1-5 .videopeu'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-1text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text h2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo18.addCallback(ratoli);
            break;
        case 180:
            diapo19.tweenTo(0, {onComplete:ratoli});
            break;
        case 19:
            diapo19 = new TimelineMax();
            diapo19.to($('#foto2-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text'),2,{top:'-240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-2text'),2,{bottom:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo19.addCallback(ratoli);
            break;
        case 190:
            diapo20.tweenTo(0, {onComplete:ratoli});
            break;
        case 20:
            diapo20 = new TimelineMax();
            diapo20.to($('#foto2-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text h2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text'),2,{bottom:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{left:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-3'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo20.addCallback(ratoli);
            break;
        case 200:
            diapo21.tweenTo(0, {onComplete:ratoli});
            break;
        case 21:
            $('#apartat2').show();
            diapo21 = new TimelineMax();
            diapo21.to($('#foto2-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-4text'),2,{top:'25%',ease:Power3.easeInOut},'-=1.8');
            diapo21.addCallback(ratoli);
            break;
        case 210:
            diapo22.tweenTo(0, {onComplete:ratoli});
            break;
        case 22:
            diapo22 = new TimelineMax();
            diapo22.to($('#foto2-4text'),2,{top:'-225%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-5text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo22.addCallback(ratoli);
            break;
        case 220:
            $('#foto2-5video video')[0].pause();
            diapo23.tweenTo(0, {onComplete:ratoli});
            break;
        case 23:
            diapo23 = new TimelineMax();
            diapo23.to($('#foto2-5peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5text h2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5text'),2,{top:'-230%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5 .tapa'),2,{autoAlpha:'.8',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5video .videopeu'),2,{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            diapo23.addCallback(f23);
            function f23(){
                $('#foto2-5video video')[0].play();
                ratoli();
            }
            break;
        case 230:
            diapo24.tweenTo(0, {onComplete:ratoli});
            break;
        case 24:
            $('#foto2-5video video')[0].pause();
            diapo24 = new TimelineMax();
            diapo24.to($('#foto2-5video .videopeu'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5video'),2,{top:'-200%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-6text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-6text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-6peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo24.addCallback(ratoli);
            video('#foto2-6boto','apartat2video1.php');
            break;
        case 240:
            diapo25.tweenTo(0, {onComplete:ratoli});
            break;
        case 25:
            diapo25 = new TimelineMax();
            diapo25.to($('#foto2-6peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-6boto'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-6text'),2,{bottom:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-6'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-7'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-7text'),2,{top:'45%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-7peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo25.addCallback(ratoli);
            break;
        case 250:
            diapo26.tweenTo(0, {onComplete:ratoli});
            break;
        case 26:
            diapo26 = new TimelineMax();
            diapo26.to($('#foto2-7peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-7text'),2,{top:'-245%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-7'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-8'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-8text'),2,{top:'35%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-8text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-8peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo26.addCallback(ratoli);
            break;
        case 260:
            diapo27.tweenTo(0, {onComplete:ratoli});
            break;
        case 27:
            diapo27 = new TimelineMax();
            diapo27.to($('#foto2-8peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-8text h2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-8text'),2,{top:'-235%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-8'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-9text'),2,{top:'35%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo27.addCallback(ratoli);
            break;
        case 270:
            diapo28.tweenTo(0, {onComplete:ratoli});
            break;
        case 28:
            diapo28 = new TimelineMax();
            diapo28.to($('#foto2-9peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9text h2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9text'),2,{top:'-235%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9 .tapa'),2,{autoAlpha:'.8',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9video .videopeu'),2,{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            diapo28.addCallback(f28);
            function f28(){
                $('#foto2-9video video')[0].play();
                ratoli();
            }
            break;
        case 280:
            diapo29.tweenTo(0, {onComplete:f28});
            break;
        case 29:
            $('#apartat3').load('apartat3.php');
            $('#foto2-9video video')[0].pause();
            diapo29 = new TimelineMax();
            diapo29.to($('#foto2-9video .videopeu'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9video'),2,{top:'-200%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9 .tapa'),2,{backgroundColor:'#888D57',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9text2'),2,{top:'50%',ease:Power3.easeInOut},'-=1.8');
            diapo29.addCallback(ratoli);
            break;
        case 290:
            diapo30.tweenTo(0, {onComplete:f290});
            function f290(){
                $('#apartat3').hide();
                ratoli();
            }
            break;
        case 30:
            $('#apartat3').show();
            diapo30 = new TimelineMax();
            diapo30.to($('#foto2-9text2'),2,{top:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-9'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text h2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo30.addCallback(ratoli);
            break;
        case 300:
            $('#foto3-1video video')[0].pause();
            diapo31.tweenTo(0, {onComplete:ratoli});
            break;
        case 31:
            diapo31 = new TimelineMax();
            diapo31.to($('#foto3-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1 .tapa'),2,{autoAlpha:'.8',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video .videopeu'),2,{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            diapo31.addCallback(f31);
            function f31(){
                $('#foto3-1video video')[0].play();
                ratoli();
            }
            break;
        case 310:
            diapo32.tweenTo(0, {onComplete:f31});
            break;
        case 32:
            $('#foto3-1video video')[0].pause();
            diapo32 = new TimelineMax();
            diapo32.to($('#foto3-1video .videopeu'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video'),2,{top:'-200%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1 .tapa'),2,{backgroundColor:'#888D57',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text2'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            video('#foto3-1boto','apartat3video1.php');
            diapo32.addCallback(ratoli);
            break;
        case 320:
            diapo33.tweenTo(0, {onComplete:ratoli});
            break;
        case 33:
            diapo33 = new TimelineMax();
            diapo33.to($('#foto3-1text2 p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text2'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            $('#apartat4').load('apartat4.php');
            diapo33.addCallback(ratoli);
            break;
        case 330:
            diapo34.tweenTo(0, {onComplete:f330});
            function f330(){
                $('#apartat4').hide();
                ratoli();
            }
            break;
        case 34:
            $('#apartat4').show();
            diapo34 = new TimelineMax();
            diapo34.to($('#foto3-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-1text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text h2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo34.addCallback(ratoli);
            break;
        case 35:
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            guardarFinal(8);
            break;
    }
}