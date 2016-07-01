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
            diapo16.reverse(0);
            break;
        case 16:
            diapo16 = new TimelineMax();
            
            break;
        case 17:
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            break;
    }
}