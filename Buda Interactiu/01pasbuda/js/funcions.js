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
        }
    }
}
function diapositiva(id){
    switch (id) {
        case 1:
            diapo1 = new TimelineMax();
            diapo1.fromTo($('#foto1-1'),2,{autoAlpha:0},{autoAlpha:1,onComplete:foto11play()})
                .fromTo($('#foto1-1text'),2,{top:'-50%'},{top:'30%',ease:Power3.easeInOut},1)
                .fromTo($('#foto1-1text p'),2,{top:'-300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('.scroll'),2,{bottom:'-50%'},{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            function foto11play(){
                $('#foto1-1 video')[0].play();
            }
            break;
        case 10:
            diapo11.reverse(0);
            break;
        case 11:
            diapo11 = new TimelineMax({paused:true});
            diapo11.fromTo($('.scroll'),2,{bottom:'1.5%'},{bottom:'-50%',ease:Power3.easeInOut})
                .fromTo($('#foto1-1text p'),2,{top:'0'},{top:'-150vh',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text'),2,{top:'30%'},{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1 .tapa'),2,{autoAlpha:'0'},{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text2'),2,{left:'-50vw'},{left:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto1-1text2 img'),2,{left:'-300px'},{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo11.play();
            break;
        case 110:
            diapo12.reverse(0);
            break;
        case 12:
            diapo12 = new TimelineMax();
            diapo12.fromTo($('#foto1-1foto'),2,{left:'50%'},{left:'0',ease:Power3.easeInOut})
                .fromTo($('#foto1-1foto img'),2,{rotation:-20},{rotation:-5,ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto1-1foto .groc'),2,{left:'300px'},{left:'0',ease:Power3.easeInOut},'-=1.8');
            $('#apartat2').load('apartat2.php');
            break;
        case 120:
            diapo13.reverse(0);
            diapo13.eventCallback("onReverseComplete", apartat2hide);
            function apartat2hide(){
                $('#apartat2').hide();
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
            break;
        case 130:
            diapo14.reverse(0);
            break;
        case 14:
            diapo14 = new TimelineMax();
            diapo14.fromTo($('#foto2-1 .videopeu'),2,{left:'0'},{left:'-50vw',ease:Power3.easeInOut})
                .fromTo($('#foto2-1 .tapa'),2,{autoAlpha:'0'},{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1 .tapa'),2,{autoAlpha:'0'},{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1text2'),2,{bottom:'105%'},{bottom:'5%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1boto1'),2,{top:'-300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto2-1text2 p'),2,{top:'-300px'},{top:'0',ease:Power3.easeInOut},'-=1.8');
            video('#foto2-1boto1','apartat2video1.php');
            video('#foto2-1boto2','apartat2video2.php');
            $('#apartat3').load('apartat3.php');
            break;
        case 140:
            diapo15.reverse(0);
            diapo15.eventCallback("onReverseComplete", apartat3hide);
            function apartat3hide(){
                $('#apartat3').hide();
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
            break;
        case 150:
            $('#video3-1fons')[0].pause();
            diapo16.reverse(0);
            break;
        case 16:
            diapo16 = new TimelineMax();
            diapo16.fromTo($('#foto3-1text2 img'),2,{top:'0'},{top:'-300px',ease:Power3.easeInOut})
                .fromTo($('#foto3-1text2'),2,{bottom:'10%'},{bottom:'110%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-1 .tapa'),2,{top:'0'},{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-1text1'),2,{left:'0'},{left:'-50%',ease:Power3.easeInOut,onComplete:video31()},'-=1.8');
            function video31(){
                $('#video3-1fons')[0].play();
            }
            $('#video3-1fons').on('ended',function(){
                passar(17);
            });
            break;
        case 160:
            $('#video3-1fons')[0].play();
            diapo17.reverse(0);
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
            break;
        case 170:
            diapo18.reverse(0);
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
            video('#foto3-2boto','apartat3video.php');
            break;
        case 180:
            $('#video3-2fons')[0].pause();
            diapo19.reverse(0);
            break;
        case 19:
            diapo19 = new TimelineMax();
            diapo19.fromTo($('#foto3-2boto'),2,{left:'0'},{left:'300px',ease:Power3.easeInOut})
                .fromTo($('#foto3-2text1 div'),2,{right:'0'},{right:'-200%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto3-2text1'),2,{right:'5%'},{right:'-150%',ease:Power3.easeInOut,onComplete:video32()},'-=1.8');
            $('#apartat4').load('apartat4.php');
            function video32(){
                $('#video3-2fons')[0].play();
            }
            $('#video3-2fons').on('ended',function(){
                passar(20);
            });
            break;
        case 190:
            $('#video3-2fons')[0].play();
            diapo20.reverse(0);
            diapo20.eventCallback("onReverseComplete", apartat4hide);
            function apartat4hide(){
                $('#apartat4').hide();
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
            break;
        case 200:
            diapo21.reverse(0);
            break;
        case 21:
            diapo21 = new TimelineMax();
            diapo21.fromTo($('#foto4-1peu'),2,{left:'0'},{left:'-50%',ease:Power3.easeInOut})
                .fromTo($('#foto4-1text h2'),2,{top:'0'},{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-1text'),2,{top:'40%'},{top:'-140%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-1 .tapa'),2,{autoAlpha:'0'},{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-1text2'),2,{bottom:'-85%'},{bottom:'15%',ease:Power3.easeInOut},'-=1.8');
            break;
        case 210:
            diapo22.reverse(0);
            break;
        case 22:
            diapo22 = new TimelineMax();
            diapo22.fromTo($('#foto4-1text2'),2,{bottom:'15%'},{bottom:'115%',ease:Power3.easeInOut})
                .fromTo($('#foto4-1'),2,{top:'0'},{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-2'),2,{top:'100%'},{top:'0',ease:Power3.easeInOut},'-=2')
                .fromTo($('#foto4-2text'),2,{top:'125%'},{top:'25%',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-2text p'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-2botons'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-2boto2'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8')
                .fromTo($('#foto4-2boto3'),2,{top:'300px'},{top:'0',ease:Power3.easeInOut},'-=1.8');
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