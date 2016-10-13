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
                .to($('#foto1-1text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.5')
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
                .to($('#foto1-1text'),2,{top:'-250%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-2text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo11.addCallback(ratoli);
            slider('#foto1-2boto1','#fotos1-2fotos');
            foto('#foto1-2boto2','#foto1-2foto');
            video('#foto1-2boto3','apartat1video1.php');
            break;
        case 110:
            diapo12.tweenTo(0, {onComplete:ratoli});
            break;
        case 12:
            diapo12 = new TimelineMax();
            diapo12.to($('#foto1-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2boto3'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-3text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo12.addCallback(ratoli);
            foto('#foto1-3boto2','#foto1-3foto');
            video('#foto1-3boto1','apartat1video2.php');
            break;
        case 120:
            diapo13.tweenTo(0, {onComplete:ratoli});
            break;
        case 13:
            diapo13 = new TimelineMax();
            diapo13.to($('#foto1-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-4text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo13.addCallback(ratoli);
            break;
        case 130:
            diapo14.tweenTo(0, {onComplete:ratoli});
            break;
        case 14:
            diapo14 = new TimelineMax();
            diapo14.to($('#foto1-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-4'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-5text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo14.addCallback(ratoli);
            break;
        case 140:
            diapo15.tweenTo(0, {onComplete:ratoli});
            break;
        case 15:
            diapo15 = new TimelineMax();
            diapo15.to($('#foto1-5peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-5'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-6text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo15.addCallback(ratoli);
            break;
        case 150:
            diapo16.tweenTo(0, {onComplete:ratoli});
            break;
        case 16:
            diapo16 = new TimelineMax();
            diapo16.to($('#foto1-6peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6text'),2,{bottom:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-6'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-7'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-7text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-7peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo16.addCallback(ratoli);
            break;
        case 160:
            diapo17.tweenTo(0, {onComplete:ratoli});
            break;
        case 17:
            diapo17 = new TimelineMax();
            diapo17.to($('#foto1-7peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-7text'),2,{bottom:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-7'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-8text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo17.addCallback(ratoli);
            break;
        case 170:
            var pausa=0;
            $('#foto1-8 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80vh',
                    'left':'-80vw'
                },1000);
                pausa+=200;
            });
            diapo18.tweenTo(0, {onComplete:ratoli});
            break;
        case 18:
            diapo18 = new TimelineMax();
            diapo18.to($('#foto1-8peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8text p'),2,{color:'#EEC41B',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8text p'),2,{backgroundColor:'white',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-8 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8');
            diapo18.addCallback(ratoli);
            var angle=5;
            var posi=10;
            var pausa=600;
            $('#foto1-8 .f').rotate('40deg');
            $('#foto1-8 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'10vh',
                    'left':posi+'vw',
                    rotate: angle+'deg'
                },1000);
                angle-=3;
                posi+=1;
                pausa+=200;
            });
            break;
        case 180:
            var angle=5;
            var posi=10;
            var pausa=400;
            $('#foto1-8 .f').rotate('40deg');
            $('#foto1-8 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'10vh',
                    'left':posi+'vw',
                    rotate: angle+'deg'
                },1000);
                angle-=3;
                posi+=1;
                pausa+=200;
            });
            $('#foto1-8 .videofons video')[0].pause();
            diapo19.tweenTo(0, {onComplete:ratoli});
            break;
        case 19:
            var pausa=0;
            $('#foto1-8 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80vh',
                    'left':'180vw'
                },1000);
                pausa+=200;
            });
            diapo19 = new TimelineMax();
            diapo19
                .to($('#foto1-8text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8 .tapa'),2,{backgroundColor:'black',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8 .videofons'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo19.addCallback(f19);
            function f19(){
                $('#foto1-8 .videofons video')[0].play();
                ratoli()
            }
            $('#foto1-8 .videofons video').on('ended',function(){
                passar(20);
            });
            break;
        case 190:
            var pausa=0;
            $('#foto1-9 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80vh',
                    'left':'-80vw'
                },1000);
                pausa+=200;
            });
            diapo20.tweenTo(0, {onComplete:f19});
            break;
        case 20:
            $('#foto1-8 .videofons video')[0].pause();
            diapo20 = new TimelineMax();
            diapo20.to($('#foto1-8 .videofons'),2,{top:'-200%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-8'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-9peu'),2,{left:'0',ease:Power3.easeInOut},'3');
            diapo20.addCallback(ratoli);
            var angle=5;
            var posi=25;
            var pausa=600;
            $('#foto1-9 .f').rotate('40deg');
            $('#foto1-9 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'10vh',
                    'left':posi+'vw',
                    rotate: angle+'deg'
                },1000);
                angle-=1;
                posi+=1;
                pausa+=200;
            });
            break;
        case 200:
            var angle=5;
            var posi=25;
            var pausa=600;
            $('#foto1-9 .f').rotate('40deg');
            $('#foto1-9 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'10vh',
                    'left':posi+'vw',
                    rotate: angle+'deg'
                },1000);
                angle-=1;
                posi+=1;
                pausa+=200;
            });
            diapo21.tweenTo(0, {onComplete:ratoli});
            break;
        case 21:
            var pausa=0;
            $('#foto1-9 .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80vh',
                    'left':'180vw'
                },1000);
                pausa+=200;
            });
            diapo21 = new TimelineMax();
            diapo21.to($('#foto1-9peu'),2,{left:'-50%',ease:Power3.easeInOut},'2')
                .to($('#foto1-9 .tapa'),2,{autoAlpha:'.5',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo21.addCallback(ratoli);
            foto('#foto1-9boto1','#foto1-9foto');
            video('#foto1-9boto2','apartat1video3.php');
            break;
        case 210:
            diapo22.tweenTo(0, {onComplete:ratoli});
            break;
        case 22:
            diapo22 = new TimelineMax();
            diapo22.to($('#foto1-9text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-9'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-10text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8');
            diapo22.addCallback(ratoli);
            break;
        case 220:
            diapo23.tweenTo(0, {onComplete:ratoli});
            break;
        case 23:
            diapo23 = new TimelineMax();
            diapo23.to($('#foto1-10text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10 .tapa'),2,{autoAlpha:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10text2'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo23.addCallback(ratoli);
            break;
        case 230:
            diapo24.tweenTo(0, {onComplete:ratoli});
            break;
        case 24:
            diapo24 = new TimelineMax();
            diapo24.to($('#foto1-10peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10text2'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-10'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-11text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo24.addCallback(ratoli);
            video('#foto1-11boto','apartat1video4.php');
            break;
        case 240:
            diapo25.tweenTo(0, {onComplete:ratoli});
            break;
        case 25:
            diapo25 = new TimelineMax();
            diapo25.to($('#foto1-11peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-11'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-12'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-12text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-12peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo25.addCallback(ratoli);
            break;
        case 26:
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            guardarFinal(7);
            break;
    }
}