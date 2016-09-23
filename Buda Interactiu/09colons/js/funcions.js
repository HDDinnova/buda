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
                .to($('#foto1-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1')
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
                .to($('#foto1-1text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1text2'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1text2 p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo11.addCallback(ratoli);
            foto('#foto1-1boto','#foto1-1foto');
            break;
        case 110:
            diapo12.tweenTo(0, {onComplete:ratoli});
            break;
        case 12:
            diapo12 = new TimelineMax();
            diapo12.to($('#foto1-1boto'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1text2'),2,{bottom:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-2text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo12.addCallback(ratoli);
            break;
        case 120:
            diapo13.tweenTo(0, {onComplete:ratoli});
            break;
        case 13:
            diapo13 = new TimelineMax();
            diapo13.to($('#foto1-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text'),2,{top:'-180%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text2'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8');
            diapo13.addCallback(ratoli);
            break;
        case 130:
            diapo14.tweenTo(0, {onComplete:ratoli});
            break;
        case 14:
            diapo14 = new TimelineMax();
            diapo14.to($('#foto1-2text2'),2,{top:'-170%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-3text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo14.addCallback(ratoli);
            break;
        case 140:
            diapo15.tweenTo(0, {onComplete:ratoli});
            break;
        case 15:
            diapo15 = new TimelineMax();
            diapo15.to($('#foto1-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text'),2,{top:'-180%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-4text'),2,{bottom:'12%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4boto3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo15.addCallback(ratoli);
            foto('#foto1-4boto1','#foto1-4foto');
            video('#foto1-4boto2','apartat1video2.php');
            video('#foto1-4boto3','apartat1video3.php');
            break;
        case 150:
            diapo16.tweenTo(0, {onComplete:ratoli});
            break;
        case 16:
            diapo16 = new TimelineMax();
            diapo16.to($('#foto1-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4boto2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4boto3'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4text'),2,{bottom:'212%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-5text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo16.addCallback(ratoli);
            break;
        case 160:
            diapo17.tweenTo(0, {onComplete:ratoli});
            break;
        case 17:
            diapo17 = new TimelineMax();
            diapo17.to($('#foto1-5peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5text'),2,{top:'-115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-6text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo17.addCallback(ratoli);
            slider('#foto1-6boto','#foto1-6fotos');
            break;
        case 170:
            diapo18.tweenTo(0, {onComplete:ratoli});
            break;
        case 18:
            diapo18 = new TimelineMax();
            diapo18.to($('#foto1-6boto'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6text'),2,{bottom:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-7'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-7text'),2,{bottom:'3%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-7boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-7boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo18.addCallback(ratoli); slider('#foto1-7boto1','#foto1-7fotos');
            video('#foto1-7boto2','apartat1video4.php');
            break;
        case 180:
            diapo19.tweenTo(0, {onComplete:ratoli});
            break;
        case 19:
            diapo19 = new TimelineMax();
            diapo19.to($('#foto1-7text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-7boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-7text'),2,{bottom:'203%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-7'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-8text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo19.addCallback(ratoli);
            slider('#foto1-8boto','#foto1-8fotos');
            break;
        case 190:
            diapo20.tweenTo(0, {onComplete:ratoli});
            break;
        case 20:
            diapo20 = new TimelineMax();
            diapo20.to($('#foto1-8peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8text'),2,{top:'-115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8'),2,{left:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-9text'),2,{bottom:'7%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo20.addCallback(ratoli);
            video('#foto1-9boto1','apartat1video5.php');
            video('#foto1-9boto2','apartat1video6.php');
            break;
        case 200:
            diapo21.tweenTo(0, {onComplete:ratoli});
            break;
        case 21:
            diapo21 = new TimelineMax();
            diapo21.to($('#foto1-9peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9text'),2,{bottom:'207%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-10text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo21.addCallback(ratoli);
            foto('#foto1-10boto','#foto1-10foto');
            break;
        case 210:
            diapo22.tweenTo(0, {onComplete:ratoli});
            break;
        case 22:
            diapo22 = new TimelineMax();
            diapo22.to($('#foto1-10peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-11text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo22.addCallback(ratoli);
            foto('#foto1-11boto1','#foto1-11foto1');
            foto('#foto1-11boto2','#foto1-11foto2');
            $('#apartat2').load('apartat2.php');
            break;
        case 220:
            diapo23.tweenTo(0, {onComplete:f220});
            function f220(){
                $('#apartat2').hide();
                ratoli();
            }
            break;
        case 23:
            $('#apartat2').show();
            diapo23 = new TimelineMax();
            diapo23.to($('#foto1-11peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11text'),2,{top:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text h2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo23.addCallback(ratoli);
            break;
        case 230:
            $('#foto2-1video video')[0].pause();
            diapo24.tweenTo(0, {onComplete:ratoli});
            break;
        case 24:
            diapo24 = new TimelineMax();
            diapo24.to($('#foto2-1text p'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1 .tapa'),2,{autoAlpha:'.8',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1video .videopeu'),2,{bottom:'3%',ease:Power3.easeInOut},'-=1.8');
            diapo24.addCallback(f24);
            function f24(){
                $('#foto2-1video video')[0].play();
                ratoli();
            }
            break;
        case 240:
            diapo25.tweenTo(0, {onComplete:f24});
            break;
        case 25:
            $('#foto2-1video video')[0].pause();
            diapo25 = new TimelineMax();
            diapo25.to($('#foto2-1video .videopeu'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1video'),2,{top:'200%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo25.addCallback(ratoli);
            $('#apartat3').load('apartat3.php');
            break;
        case 250:
            diapo26.tweenTo(0, {onComplete:f250});
            function f250(){
                $('#apartat3').hide();
                ratoli();
            }
            break;
        case 26:
            $('#apartat3').show();
            diapo26 = new TimelineMax();
            diapo26.to($('#foto2-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-1text'),2,{top:'50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo26.addCallback(ratoli);
            break;
        case 260:
            diapo27.tweenTo(0, {onComplete:ratoli});
            break;
        case 27:
            diapo27 = new TimelineMax();
            diapo27.to($('#foto3-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text'),2,{top:'250%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1videos'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video5'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video4'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo27.addCallback(ratoli);
            video('#foto3-1video1','apartat3video1.php');
            video('#foto3-1video2','apartat3video2.php');
            video('#foto3-1video3','apartat3video3.php');
            video('#foto3-1video4','apartat3video4.php');
            video('#foto3-1video5','apartat3video5.php');
            video('#foto3-1video6','apartat3video6.php');
            break;
        case 270:
            diapo28.tweenTo(0, {onComplete:ratoli});
            break;
        case 28:
            diapo28 = new TimelineMax();
            diapo28.to($('#foto3-1video6'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video5'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video4'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video3'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1videos'),2,{top:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo28.addCallback(ratoli);
            foto('#foto3-2boto2','#foto3-2foto');
            video('#foto3-2boto1','apartat3video7.php');
            $('#apartat4').load('apartat4.php');
            break;
        case 280:
            diapo29.tweenTo(0, {onComplete:f280});
            function f280(){
                $('#apartat4').hide();
                ratoli();
            }
            break;
        case 29:
            $('#apartat4').show();
            diapo29 = new TimelineMax();
            diapo29.to($('#foto3-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-1text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo29.addCallback(ratoli);
            break;
        case 290:
            diapo30.tweenTo(0, {onComplete:ratoli});
            break;
        case 30:
            diapo30 = new TimelineMax();
            diapo30.to($('#foto4-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text'),2,{bottom:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text2'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text2 p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo30.addCallback(ratoli);
            video('#foto4-1boto','apartat4video1.php');
            break;
        case 300:
            diapo31.tweenTo(0, {onComplete:ratoli});
            break;
        case 31:
            diapo31 = new TimelineMax();
            diapo31.to($('#foto4-1boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text2'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo31.addCallback(ratoli);
            video('#foto4-2boto','apartat4video2.php');
            break;
        case 310:
            diapo32.tweenTo(0, {onComplete:ratoli});
            break;
        case 32:
            diapo32 = new TimelineMax();
            diapo32.to($('#foto4-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-3text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3boto1-2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3boto1-1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo32.addCallback(ratoli);
            video('#foto4-3boto1-1','apartat4video3.php');
            video('#foto4-3boto1-2','apartat4video4.php');
            video('#foto4-3boto2','apartat4video5.php');
            $('#apartat5').load('apartat5.php');
            break;
        case 320:
            diapo33.tweenTo(0, {onComplete:f320});
            function f320(){
                $('#apartat5').hide();
                ratoli();
            }
            break;
        case 33:
            $('#apartat5').show();
            diapo33 = new TimelineMax();
            diapo33.to($('#foto4-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3boto1-2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3boto1-1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3text'),2,{bottom:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo33.addCallback(ratoli);
            break;
        case 330:
            diapo34.tweenTo(0, {onComplete:ratoli});
            break;
        case 34:
            diapo34 = new TimelineMax();
            diapo34.to($('#foto5-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-2text'),2,{top:'60%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo34.addCallback(ratoli);
            break;
        case 340:
            diapo35.tweenTo(0, {onComplete:ratoli});
            break;
        case 35:
            diapo35 = new TimelineMax();
            diapo35.to($('#foto5-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2text'),2,{top:'260%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-3text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-3text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo35.addCallback(ratoli);
            foto('#foto5-3boto','#foto5-3foto');
            break;
        case 350:
            diapo36.tweenTo(0, {onComplete:ratoli});
            break;
        case 36:
            diapo36 = new TimelineMax();
            diapo36.to($('#foto5-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-3boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-3text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-4text'),2,{top:'25%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo36.addCallback(ratoli);
            break;
        case 360:
            diapo37.tweenTo(0, {onComplete:ratoli});
            break;
        case 37:
            diapo37 = new TimelineMax();
            diapo37.to($('#foto5-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4text'),2,{top:'225%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-5text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-5text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo37.addCallback(ratoli);
            video('#foto5-5boto','apartat5video1.php');
            break;
        case 370:
            $('#foto5-6 video')[0].pause();
            diapo38.tweenTo(0, {onComplete:ratoli()});
            break;
        case 38:
            diapo38 = new TimelineMax();
            diapo38.to($('#foto5-5peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-5boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-5text'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-6'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-6 .videopeu'),2,{bottom:'0',ease:Power3.easeInOut},'-=1.8');
            diapo38.addCallback(f38);
            function f38(){
                $('#foto5-6 video')[0].play();
                ratoli();
            }
            $('#foto5-6 video').on('ended',function(){
                passar(39);
            });
            $('#apartat6').load('apartat6.php');
            break;
        case 380:
            diapo39.tweenTo(0, {onComplete:f380});
            function f380(){
                $('#apartat6').hide();
                $('#foto5-6 video')[0].play();
                ratoli();
            }
            break;
        case 39:
            $('#foto5-6 video')[0].pause();
            $('#apartat6').show();
            diapo39 = new TimelineMax();
            diapo39.to($('#foto5-6 .videopeu'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-6'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo39.addCallback(ratoli);
            break;
        case 390:
            diapo40.tweenTo(0, {onComplete:ratoli});
            break;
        case 40:
            diapo40 = new TimelineMax();
            diapo40.to($('#foto6-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1text2'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1text2 p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo40.addCallback(ratoli);
            video('#foto6-1boto','apartat6video1.php');
            break;
        case 400:
            $('#foto6-1video video')[0].pause();
            diapo41.tweenTo(0, {onComplete:ratoli});
            break;
        case 41:
            diapo41 = new TimelineMax();
            diapo41.to($('#foto6-1boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1text2'),2,{top:'230%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1video .videopeu'),2,{bottom:'0',ease:Power3.easeInOut},'-=1.8');
            diapo41.addCallback(f41);
            function f41(){
                $('#foto6-1video video')[0].play();
                ratoli();
            }
            $('#foto6-1video video').on('ended',function(){
                passar(42);
            });
            break;
        case 410:
            diapo42.tweenTo(0, {onComplete:f41});
            break;
        case 42:
            $('#foto6-1video video')[0].pause();
            diapo42 = new TimelineMax();
            diapo42.to($('#foto6-1video .videopeu'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-2text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-2boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo42.addCallback(ratoli);
            slider('#foto6-2boto1','#foto6-2slider1');
            slider('#foto6-2boto2','#foto6-2slider2');
            break;
        case 420:
            diapo43.tweenTo(0, {onComplete:ratoli});
            break;
        case 43:
            diapo43 = new TimelineMax();
            diapo43.to($('#foto6-2boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-2boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-2text'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-3text'),2,{top:'50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-3text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo43.addCallback(ratoli);
            foto('#foto6-3boto','#foto6-3foto');
            break;
        case 430:
            diapo44.tweenTo(0, {onComplete:ratoli});
            break;
        case 44:
            diapo44 = new TimelineMax();
            diapo44.to($('#foto6-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-3boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-3text'),2,{top:'250%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-4text'),2,{top:'45%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-4boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo44.addCallback(ratoli);
            video('#foto6-4boto','apartat6video2.php');
            break;
        case 440:
            diapo45.tweenTo(0, {onComplete:ratoli});
            break;
        case 45:
            diapo45 = new TimelineMax();
            diapo45.to($('#foto6-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-4text p'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-4text'),2,{top:'245%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-4'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-5text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo45.addCallback(ratoli);
            break;
        case 450:
            diapo46.tweenTo(0, {onComplete:ratoli});
            break;
        case 46:
            diapo46 = new TimelineMax();
            diapo46.to($('#foto6-5peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-5text'),2,{top:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-5'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-6text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo46.addCallback(ratoli);
            foto('#foto6-6boto1','#foto6-6foto1');
            foto('#foto6-6boto2','#foto6-6foto2');
            break;
        case 460:
            diapo47.tweenTo(0, {onComplete:ratoli});
            break;
        case 47:
            diapo47 = new TimelineMax();
            diapo47.to($('#foto6-6peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6text'),2,{top:'230%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6 .tapa'),2,{autoAlpha:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6text2'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8');
            diapo47.addCallback(ratoli);
            $('#apartat7').load('apartat7.php');
            break;
        case 470:
            diapo48.tweenTo(0, {onComplete:f470});
            function f470(){
                $('#apartat7').hide();
                ratoli();
            }
            break;
        case 48:
            $('#apartat7').show();
            diapo48 = new TimelineMax();
            diapo48.to($('#foto6-6text2'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto7-1text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-1text h2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo48.addCallback(ratoli);
            video('#foto7-1boto','apartat7video1.php');
            break;
        case 480:
            diapo49.tweenTo(0, {onComplete:ratoli});
            break;
        case 49:
            diapo49 = new TimelineMax();
            diapo49.to($('#foto7-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-1boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-1text'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto7-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-2boto3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-2boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-2boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo49.addCallback(ratoli);
            slider('#foto7-2boto1','#foto7-2fotos1');
            slider('#foto7-2boto2','#foto7-2fotos2');
            slider('#foto7-2boto3','#foto7-2fotos3');
            break;
        case 490:
            diapo50.tweenTo(0, {onComplete:ratoli});
            break;
        case 50:
            diapo50 = new TimelineMax();
            diapo50.to($('#foto7-2text p'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-2boto3'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-2boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-2text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-3'),2,{top:'0',ease:Power3.easeInOut},'-=2');
            diapo50.addCallback(f50);
            function f50(){
                $('#foto7-3 video')[0].play();
                ratoli();
            }
            $('#foto7-3 video').on('ended',function(){
                passar(51);
            });
            break;
        case 51:
            $('#foto7-3 video')[0].pause();
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            break;
    }
}