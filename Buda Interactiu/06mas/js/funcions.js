$('#bso').click(function(){
    if($('#audio')[0].paused){
        $('#audio')[0].play();
    } else {
        $('#audio')[0].pause();
    }
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
            case 34:
                passar(35);
                break;
            case 35:
                passar(36);
                break;
            case 36:
                passar(37);
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
            case 34:
                passar(330);
                break;
            case 35:
                passar(340);
                break;
            case 36:
                passar(350);
                break;
        }
    }
}
function diapositiva(id){
    switch (id) {
        case 1:
            diapo1 = new TimelineMax();
            diapo1.to($('#foto1-1'),2,{top:0,ease:Power3.easeInOut})
                .to($('#foto1-1text'),2,{bottom:'15%',ease:Power3.easeInOut},'-=1.5')
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
                .to($('#foto1-1text'),2,{bottom:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-2text'),2,{bottom:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo11.addCallback(ratoli);
            break;
        case 110:
            diapo12.tweenTo(0, {onComplete:ratoli});
            break;
        case 12:
            diapo12 = new TimelineMax();
            diapo12.to($('#foto1-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text'),2,{bottom:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-3text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text img'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo12.addCallback(ratoli);
            break;
        case 120:
            diapo13.tweenTo(0, {onComplete:ratoli});
            break;
        case 13:
            diapo13 = new TimelineMax();
            diapo13.to($('#foto1-3a'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3b'),2,{left:'0',ease:Power3.easeInOut},'-=2');
            diapo13.addCallback(ratoli);
            break;
        case 130:
            diapo14.tweenTo(0, {onComplete:ratoli});
            break;
        case 14:
            diapo14 = new TimelineMax();
            diapo14.to($('#foto1-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text p'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-4text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo14.addCallback(ratoli);
            break;
        case 140:
            diapo15.tweenTo(0, {onComplete:ratoli});
            break;
        case 15:
            diapo15 = new TimelineMax();
            diapo15.to($('#foto1-4a'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4b'),2,{left:'0',ease:Power3.easeInOut},'-=2');
            diapo15.addCallback(ratoli);
            break;
        case 150:
            diapo16.tweenTo(0, {onComplete:ratoli});
            break;
        case 16:
            diapo16 = new TimelineMax();
            diapo16.to($('#foto1-4b'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4c'),2,{left:'0',ease:Power3.easeInOut},'-=2');
            diapo16.addCallback(ratoli);
            break;
        case 160:
            diapo17.tweenTo(0, {onComplete:ratoli});
            break;
        case 17:
            diapo17 = new TimelineMax();
            diapo17.to($('#foto1-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-5text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo17.addCallback(ratoli);
            break;
        case 170:
            diapo18.tweenTo(0, {onComplete:ratoli});
            break;
        case 18:
            diapo18 = new TimelineMax();
            diapo18.to($('#foto1-5a'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5b'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-5peu'),2,{color:'white',ease:Power3.easeInOut},'-=1.8');
            diapo18.addCallback(ratoli);
            break;
        case 180:
            diapo19.tweenTo(0, {onComplete:ratoli});
            break;
        case 19:
            diapo19 = new TimelineMax();
            diapo19.to($('#foto1-5peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5text'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-6text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo19.addCallback(ratoli);
            $('#apartat2').load('apartat2.php');
            break;
        case 190:
            diapo20.tweenTo(0, {onComplete:f190});
            function f190(){
                $('#apartat2').hide();
                ratoli();
            }
            break;
        case 20:
            $('#apartat2').show();
            diapo20 = new TimelineMax();
            diapo20.to($('#foto1-6peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6text'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6'),2,{left:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1peu p'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo20.addCallback(ratoli);
            fotozoom('#foto2-1boto','#foto2-1foto',"#foto2-1fotozoom");
            break;
        case 200:
            diapo21.tweenTo(0, {onComplete:ratoli});
            break;
        case 21:
            diapo21 = new TimelineMax();
            diapo21.to($('#foto2-1peu p'),2,{left:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-2text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2boto3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo21.addCallback(ratoli);
            fotozoom('#foto2-2boto1','#foto2-2foto1',"#foto2-2fotozoom");
            slider('#foto2-2boto2','#foto2-2foto2');
            video('#foto2-2boto3','apartat2video1.php');
            break;
        case 210:
            diapo22.tweenTo(0, {onComplete:ratoli});
            break;
        case 22:
            diapo22 = new TimelineMax();
            diapo22.to($('#foto2-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2boto2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2boto3'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text'),2,{bottom:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-3text'),2,{bottom:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo22.addCallback(ratoli);
            break;
        case 220:
            diapo23.tweenTo(0, {onComplete:ratoli});
            var pausa=0;
            $('#foto2-3 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80%',
                    'left':'-80%'
                },1000);
                pausa+=200;
            });
            break;
        case 23:
            diapo23 = new TimelineMax();
            diapo23.to($('#foto2-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-3 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8');
            diapo23.addCallback(ratoli);
            var angle=5;
            var posi=10;
            var pausa=600;
            $('#foto2-3 .f').rotate('40deg');
            $('#foto2-3 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'10%',
                    'left':posi+'%',
                    rotate: angle+'deg'
                },1000);
                angle-=3;
                posi+=1;
                pausa+=200;
            });
            break;
        case 230:
            diapo24.tweenTo(0, {onComplete:ratoli});
            var angle=5;
            var posi=10;
            var pausa=800;
            $('#foto2-3 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'10%',
                    'left':posi+'%'
                },1000);
                posi+=1;
                pausa+=200;
            });
            break;
        case 24:
            var pausa=0;
            $('#foto2-3 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-180%',
                    'left':'180%'
                },1000);
                pausa+=200;
            });
            diapo24 = new TimelineMax();
            diapo24.to($('#foto2-3text'),2,{bottom:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-4text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo24.addCallback(ratoli);
            $('#apartat3').load('apartat3.php');
            break;
        case 240:
            diapo25.tweenTo(0, {onComplete:f240});
            function f240(){
                $('#apartat3').hide();
                ratoli();
            }
            break;
        case 25:
            $('#apartat3').show();
            diapo25 = new TimelineMax();
            diapo25.to($('#foto2-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-4text'),2,{top:'230%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-1text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo25.addCallback(ratoli);
            video('#foto3-1boto1','apartat3video1.php');
            video('#foto3-1boto2','apartat3video2.php');
            break;
        case 250:
            diapo26.tweenTo(0, {onComplete:ratoli});
            break;
        case 26:
            diapo26 = new TimelineMax();
            diapo26.to($('#foto3-1a'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1b'),2,{left:'0',ease:Power3.easeInOut},'-=2');
            diapo26.addCallback(ratoli);
            break;
        case 260:
            diapo27.tweenTo(0, {onComplete:ratoli});
            break;
        case 27:
            diapo27 = new TimelineMax();
            diapo27.to($('#foto3-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text'),2,{bottom:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-2text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2boto3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo27.addCallback(ratoli);
            video('#foto3-2boto1','apartat3video3.php');
            video('#foto3-2boto3','apartat3video4.php');
            slider('#foto3-2boto2','#foto3-2fotos');
            break;
        case 270:
            diapo28.tweenTo(0, {onComplete:ratoli});
            break;
        case 28:
            diapo28 = new TimelineMax();
            diapo28.to($('#foto3-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2text p'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2boto3'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2text'),2,{top:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-3text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo28.addCallback(ratoli);
            break;
        case 280:
            diapo29.tweenTo(0, {onComplete:ratoli});
            break;
        case 29:
            diapo29 = new TimelineMax();
            diapo29.to($('#foto3-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-4text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo29.addCallback(ratoli);
            video('#foto3-4boto','apartat3video5.php');
            break;
        case 290:
            var pausa=0;
            $('#foto3-4 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80%',
                    'left':'-80%'
                },1000);
                pausa+=200;
            });
            diapo30.tweenTo(0, {onComplete:ratoli});
            break;
        case 30:
            diapo30 = new TimelineMax();
            diapo30.to($('#foto3-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4boto'),2,{top:'-100vh',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4text p'),2,{color:'white',ease:Power3.easeInOut},'-=1.8');
            diapo30.addCallback(ratoli);
            var angle=5;
            var posi=45;
            var pausa=600;
            $('#foto3-4 .f').rotate('40deg');
            $('#foto3-4 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'10%',
                    'left':posi+'%',
                    rotate: angle+'deg'
                },1000);
                angle-=3;
                posi+=1;
                pausa+=200;
            });
            break;
        case 300:
            var posi=45;
            var pausa=0;
            $('#foto3-4 .f').rotate('40deg');
            $('#foto3-4 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'10%',
                    'left':posi+'%'
                },1000);
                posi+=1;
                pausa+=200;
            });
            diapo31.tweenTo(0, {onComplete:ratoli});
            break;
        case 31:
            var pausa=0;
            $('#foto3-4 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-180%',
                    'left':'180%'
                },1000);
                pausa+=200;
            });
            diapo31 = new TimelineMax();
            diapo31.to($('#foto3-4text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-5text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-5boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-5text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo31.addCallback(ratoli);
            video('#foto3-5boto1','apartat3video6.php');
            slider('#foto3-5boto2','#foto3-5fotos');
            $('#apartat4').load('apartat4.php');
            break;
        case 310:
            diapo32.tweenTo(0, {onComplete:f310});
            function f310(){
                $('#apartat4').hide();
                ratoli();
            }
            break;
        case 32:
            $('#apartat4').show();
            diapo32 = new TimelineMax();
            diapo32.to($('#foto3-5peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-5boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-5boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-5text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-5'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo32.addCallback(ratoli);
            video('#foto4-1boto','apartat4video1.php');
            break;
        case 320:
            diapo33.tweenTo(0, {onComplete:ratoli});
            break;
        case 33:
            diapo33 = new TimelineMax();
            diapo33.to($('#foto4-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-2text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2boto3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo33.addCallback(ratoli);
            slider('#foto4-2boto1','#foto4-2fotos');
            video('#foto4-2boto2','apartat4video2.php');
            video('#foto4-2boto3','apartat4video3.php');
            break;
        case 330:
            diapo34.tweenTo(0, {onComplete:ratoli});
            break;
        case 34:
            diapo34 = new TimelineMax();
            diapo34.to($('#foto4-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text p'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2boto3'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-3 .videopeu'),2,{bottom:'10px',ease:Power3.easeInOut},'-=1.8');
            diapo34.addCallback(f34);
            function f34(){
                $('#foto4-3 video')[0].play();
                ratoli();
            }
            $('#foto4-3 video').on('ended',function(){
                passar(35);
            });
            break;
        case 340:
            diapo35.tweenTo(0, {onComplete:ratoli});
            break;
        case 35:
            $('#foto4-3 video')[0].pause();
            diapo35 = new TimelineMax();
            diapo35.to($('#foto4-3 .videopeu'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-4text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo35.addCallback(ratoli);
            break;
        case 350:
            diapo36.tweenTo(0, {onComplete:ratoli});
            break;
        case 36:
            diapo36 = new TimelineMax();
            diapo36.to($('#foto4-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-4text'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-4'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-5text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo36.addCallback(ratoli);
            break;
        case 37:
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            break;
    }
}