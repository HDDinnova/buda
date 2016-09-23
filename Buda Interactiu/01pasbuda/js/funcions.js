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
            diapo1.fromTo($('#foto1-1'),2,{autoAlpha:0},{autoAlpha:1,onComplete:foto11play})
                .fromTo($('#foto1-1text'),2,{top:'-50%'},{top:'30%',ease:Power3.easeInOut},1)
                .fromTo($('#foto1-1text div'),2,{top:'-300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('.scroll'),2,{bottom:'-50%'},{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            diapo1.addCallback(ratoli);
            function foto11play(){
                $('#foto1-1 video')[0].play();
            }
            break;
        case 10:
            diapo11.tweenTo(0, {onComplete:f10});
            function f10(){
                $('#foto1-1 .tapa').hide();
                ratoli();
            }
            break;
        case 11:
            $('#foto1-1 .tapa').show();
            diapo11 = new TimelineMax();
            diapo11.fromTo($('.scroll'),2,{bottom:'1.5%'},{bottom:'-50%',ease:Power3.easeInOut})
                .fromTo($('#foto1-1text div'),2,{top:'0'},{top:'-150vh',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text'),2,{top:'30%'},{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1 .tapa'),2,{autoAlpha:'0'},{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text2'),2,{left:'-50vw'},{left:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text2 img'),2,{left:'-300px'},{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo11.addCallback(ratoli);
            break;
        case 110:
            diapo12.tweenTo(0, {onComplete:ratoli});
            break;
        case 12:
            diapo12 = new TimelineMax();
            diapo12.fromTo($('#foto1-1foto'),2,{left:'50%'},{left:'0',ease:Power3.easeInOut})
                .fromTo($('#foto1-1foto img'),2,{rotation:-20},{rotation:-5,ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto1-1foto .groc'),2,{left:'300px'},{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo12.addCallback(ratoli);
            $('#apartat2').load('apartat2.php');
            break;
        case 120:
            diapo13.tweenTo(0, {onComplete:apartat2hide});
            function apartat2hide(){
                $('#apartat2').hide();
                ratoli();
            }
            break;
        case 13:
            $('#apartat2').show();
            $('#foto2-1 video')[0].play();
            diapo13 = new TimelineMax();
            diapo13.fromTo($('#foto1-1foto .groc'),2,{left:'0'},{left:'300px',ease:Power3.easeInOut})
                .fromTo($('#foto1-1foto img'),2,{rotation:-5},{rotation:-20,ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1foto'),2,{left:'0'},{left:'50%',ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto1-1foto .groc'),2,{left:'0'},{left:'300px',ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto1-1text2 img'),2,{left:'0'},{left:'-300px',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text2'),2,{left:'0'},{left:'-50vw',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1'),2,{top:'0'},{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1'),2,{top:'100%'},{top:'0',ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto2-1 .videopeu'),2,{left:'-50vw'},{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo13.addCallback(ratoli);
            break;
        case 130:
            diapo14.tweenTo(0, {onComplete:ratoli});
            break;
        case 14:
            diapo14 = new TimelineMax();
            diapo14.fromTo($('#foto2-1 .videopeu'),2,{left:'0'},{left:'-50vw',ease:Power3.easeInOut})
                .fromTo($('#foto2-1 .tapa'),2,{autoAlpha:'0'},{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1 .tapa'),2,{autoAlpha:'0'},{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1text2'),2,{bottom:'105%'},{bottom:'5%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1boto1'),2,{top:'-300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1text2 p'),2,{top:'-300px'},{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo14.addCallback(ratoli);
            video('#foto2-1boto1','apartat2video1.php');
            video('#foto2-1boto2','apartat2video2.php');
            $('#apartat3').load('apartat3.php');
            break;
        case 140:
            diapo15.tweenTo(0, {onComplete:apartat3hide});
            function apartat3hide(){
                $('#apartat3').hide();
                ratoli();
            }
            break;
        case 15:
            $('#apartat3').show();
            diapo15 = new TimelineMax();
            diapo15.fromTo($('#foto2-1boto2'),2,{top:'0'},{top:'300px',ease:Power3.easeInOut})
                .fromTo($('#foto2-1boto1'),2,{top:'0'},{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1text2'),2,{bottom:'5%'},{bottom:'-105%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1'),2,{top:'0'},{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-1'),2,{top:'-100%'},{top:'0',ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto3-1text1'),2,{left:'-50%'},{left:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-1 .tapa'),2,{top:'200%'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-1text2'),2,{bottom:'-110%'},{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-1text2 p'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo15.addCallback(ratoli);
            break;
        case 150:
            $('#video3-1fons')[0].pause();
            diapo16.tweenTo(0, {onComplete:ratoli});
            break;
        case 16:
            diapo16 = new TimelineMax();
            diapo16.fromTo($('#foto3-1text2 img'),2,{top:'0'},{top:'-300px',ease:Power3.easeInOut})
                .fromTo($('#foto3-1text2'),2,{bottom:'10%'},{bottom:'110%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-1 .tapa'),2,{top:'0'},{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-1text1'),2,{left:'0'},{left:'-50%',ease:Power3.easeInOut,onComplete:video31},'-=1.8');
            function video31(){
                $('#video3-1fons')[0].play();
                ratoli();
            }
            $('#video3-1fons').on('ended',function(){
                passar(17);
            });
            break;
        case 160:
            $('#video3-1fons')[0].play();
            diapo17.tweenTo(0, {onComplete:ratoli});
            break;
        case 17:
            $('#video3-1fons')[0].pause();
            diapo17 = new TimelineMax();
            diapo17.fromTo($('#foto3-1'),2,{top:'0'},{top:'100%',ease:Power3.easeInOut})
                .fromTo($('#foto3-2'),2,{top:'-100%'},{top:'0',ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto3-2text1'),2,{right:'-50%'},{right:'5%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-2 .tapa'),2,{top:'200%'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-2text2'),2,{bottom:'-110%'},{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-2text2 p'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo17.addCallback(ratoli);
            break;
        case 170:
            diapo18.tweenTo(0, {onComplete:ratoli});
            break;
        case 18:
            diapo18 = new TimelineMax();
            diapo18.fromTo($('#foto3-2text2 img'),2,{top:'0'},{top:'-300px',ease:Power3.easeInOut})
                .fromTo($('#foto3-2text2'),2,{bottom:'10%'},{bottom:'110%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-2 .tapa'),2,{top:'0'},{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-2text1 strong'),2,{color:'#000000'},{color:'#F58431',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-2text1 strong'),2,{backgroundColor:'#F58431'},{backgroundColor:'#FFFFFF',ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto3-2text1 div'),2,{right:'-200%'},{right:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-2boto'),2,{left:'300px'},{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo18.addCallback(ratoli);
            video('#foto3-2boto','apartat3video.php');
            break;
        case 180:
            $('#video3-2fons')[0].pause();
            diapo19.tweenTo(0, {onComplete:ratoli});
            break;
        case 19:
            diapo19 = new TimelineMax();
            diapo19.fromTo($('#foto3-2boto'),2,{left:'0'},{left:'300px',ease:Power3.easeInOut})
                .fromTo($('#foto3-2text1 div'),2,{right:'0'},{right:'-200%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-2text1'),2,{right:'5%'},{right:'-150%',ease:Power3.easeInOut,onComplete:video32},'-=1.8');
            $('#apartat4').load('apartat4.php');
            function video32(){
                $('#video3-2fons')[0].play();
                ratoli();
            }
            $('#video3-2fons').on('ended',function(){
                passar(20);
            });
            break;
        case 190:
            $('#video3-2fons')[0].play();
            diapo20.tweenTo(0, {onComplete:apartat4hide});
            function apartat4hide(){
                $('#apartat4').hide();
                ratoli();
            }
            break;
        case 20:
            $('#apartat4').show();
            $('#video3-2fons')[0].pause();
            diapo20 = new TimelineMax();
            diapo20.fromTo($('#foto3-2'),2,{top:'0'},{top:'-100%',ease:Power3.easeInOut})
                .fromTo($('#foto4-1'),2,{top:'100%'},{top:'0',ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto4-1text'),2,{top:'140%'},{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-1text p'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-1peu'),2,{left:'-50%'},{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo20.addCallback(ratoli);
            break;
        case 200:
            diapo21.tweenTo(0, {onComplete:ratoli});
            break;
        case 21:
            diapo21 = new TimelineMax();
            diapo21.fromTo($('#foto4-1peu'),2,{left:'0'},{left:'-50%',ease:Power3.easeInOut})
                .fromTo($('#foto4-1text h2'),2,{top:'0'},{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-1text'),2,{top:'40%'},{top:'-140%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-1 .tapa'),2,{autoAlpha:'0'},{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-1text2'),2,{bottom:'-85%'},{bottom:'15%',ease:Power3.easeInOut},'-=1.8');
            diapo21.addCallback(ratoli);
            break;
        case 210:
            diapo22.tweenTo(0, {onComplete:ratoli});
            break;
        case 22:
            diapo22 = new TimelineMax();
            diapo22.fromTo($('#foto4-1text2'),2,{bottom:'15%'},{bottom:'115%',ease:Power3.easeInOut})
                .fromTo($('#foto4-1'),2,{top:'0'},{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-2'),2,{top:'100%'},{top:'0',ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto4-2text'),2,{top:'125%'},{top:'25%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto42p'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-2botons'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-2boto2'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-2boto3'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo22.addCallback(ratoli);
            video('#foto4-2boto1','apartat4video1.php');
            video('#foto4-2boto2','apartat4video2.php');
            video('#foto4-2boto3','apartat4video3.php');
            break;
        case 23:
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            break;
    }
}