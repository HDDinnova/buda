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
        }
    }
}
function diapositiva(id){
    switch (id) {
        case 1:
            diapo1 = new TimelineMax();
            diapo1.to($('#foto1-1'),2,{autoAlpha:1})
                .to($('#foto1-1text'),2,{top:'30%',ease:Power3.easeInOut},'-=1')
                .to($('#foto1-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('.scroll'),2,{bottom:'1.5%',ease:Power3.easeInOut},'-=1.8');
            diapo1.addCallback(ratoli);
            break;
        case 10:
            diapo11.tweenTo(0, {onComplete:ratoli});
            break;
        case 11:
            diapo11 = new TimelineMax();
            diapo11.to($('.scroll'),2,{bottom:'-50%',ease:Power3.easeInOut})
                .to($('#foto1-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1text'),2,{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1text2'),2,{top:'25%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1text2 img'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo11.addCallback(ratoli);
            break;
        case 110:
            $('#foto1-1video video')[0].pause();
            diapo12.tweenTo(0, {onComplete:ratoli});
            break;
        case 12:
            diapo12 = new TimelineMax();
            diapo12.to($('#foto1-1text2 img'),2,{left:'100vw',ease:Power3.easeInOut})
                .to($('#foto1-1text2'),2,{top:'125%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1 .tapa'),2,{backgroundColor:'#000000',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1video .peu'),2,{left:'0',ease:Power3.easeInOut,onComplete:video11},'-=1.8');
            function video11(){
                $('#foto1-1video video')[0].play();
                ratoli();
            }
            $('#foto1-1video video').on('ended',function(){
                passar(13);
            });
            $('#apartat2').load('apartat2.php');
            break;
        case 120:
            diapo13.tweenTo(0, {onComplete:hide2});
            function hide2(){
                video11();
                $('#apartat2').hide();
                ratoli();
            }
            break;
        case 13:
            $('#foto1-1video video')[0].pause();
            $('#apartat2').show();
            diapo13 = new TimelineMax();
            diapo13.to($('#foto1-1video .peu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto1-1video'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-1text'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo13.addCallback(ratoli);
            break;
        case 130:
            diapo14.tweenTo(0, {onComplete:ratoli});
            break;
        case 14:
            diapo14 = new TimelineMax();
            diapo14.to($('#foto2-1peu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto2-1text'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text2'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#marcacanyis'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8');
            diapo14.addCallback(ratoli);
            video('#foto2-1boto img','apartat2video1.php');
            break;
        case 140:
            diapo15.tweenTo(0, {onComplete:ratoli});
            break;
        case 15:
            diapo15 = new TimelineMax();
            diapo15.to($('#marcacanyis'),2,{left:'70%',ease:Power3.easeInOut})
                .to($('#foto2-1boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text2'),2,{top:'110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text3'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo15.addCallback(ratoli);
            video('#foto2-1boto2 img','apartat2video2.php');
            $('#apartat3').load('apartat3.php');
            break;
        case 150:
            diapo16.tweenTo(0, {onComplete:hide3});
            function hide3(){
                $('#apartat3').hide();
                ratoli();
            }
            break;
        case 16:
            $('#apartat3').show();
            diapo16 = new TimelineMax();
            diapo16.to($('#marcacanyis'),2,{bottom:'-110%',ease:Power3.easeInOut})
                .to($('#foto2-1text3 p'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text3'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo16.addCallback(ratoli);
            break;
        case 160:
            $('#foto3-1video')[0].pause();
            diapo17.tweenTo(0, {onComplete:ratoli});
            break;
        case 17:
            diapo17 = new TimelineMax();
            diapo17.to($('#foto3-1text h2'),2,{top:'300px',ease:Power3.easeInOut})
                .to($('#foto3-1text'),2,{top:'110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text2'),2,{bottom:'10%',ease:Power3.easeInOut,onComplete:video31},'-=1.8');
            function video31(){
                $('#foto3-1video')[0].play();
                ratoli();
            }
            break;
        case 170:
            $('#foto3-1video2')[0].pause();
            $('#foto3-1video')[0].play();
            diapo18.tweenTo(0, {onComplete:ratoli});
            break;
        case 18:
            $('#foto3-1video')[0].pause();
            diapo18 = new TimelineMax();
            diapo18.to($('#foto3-1text2'),2,{bottom:'-110%',ease:Power3.easeInOut})
                .to($('#foto3-1video'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1video2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-1text3'),2,{top:'10%',ease:Power3.easeInOut,onComplete:video32},'-=1.8');
            function video32(){
                $('#foto3-1video2')[0].play();
                ratoli();
            }
            $('#apartat4').load('apartat4.php');
            break;
        case 180:
            $('#foto3-1video2')[0].play();
            diapo19.tweenTo(0, {onComplete:hide4});
            function hide4(){
                $('#apartat4').hide();
                ratoli();
            }
            break;
        case 19:
            $('#apartat4').show();
            $('#foto3-1video2')[0].pause();
            diapo19 = new TimelineMax();
            diapo19.to($('#foto3-1text3'),2,{top:'210%',ease:Power3.easeInOut})
                .to($('#foto3-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-1text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo19.addCallback(ratoli);
            break;
        case 190:
            diapo20.tweenTo(0, {onComplete:ratoli});
            break;
        case 20:
            diapo20 = new TimelineMax();
            diapo20.to($('#foto4-1peu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto4-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text'),2,{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text p:first-child'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo20.addCallback(ratoli);
            break;
        case 200:
            diapo21.tweenTo(0, {onComplete:ratoli});
            break;
        case 21:
            diapo21 = new TimelineMax();
            diapo21.to($('#foto4-2text p:last-child'),2,{top:'300px',ease:Power3.easeInOut})
                .to($('#foto4-2text'),2,{top:'110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2 .tapa'),2,{autoAlpha:'.8',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2plantes1'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2planta12'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2planta13'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2planta14'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo21.addCallback(ratoli);
            break;
        case 210:
            diapo22.tweenTo(0, {onComplete:ratoli});
            break;
        case 22:
            diapo22 = new TimelineMax();
            diapo22.to($('#foto4-2planta11'),2,{left:'-300px',ease:Power3.easeInOut})
                .to($('#foto4-2planta12'),2,{left:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2planta13'),2,{left:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2plantes1'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2plantes2'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2planta22'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2planta23'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2planta24'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo22.addCallback(ratoli);
            break;
        case 220:
            diapo23.tweenTo(0, {onComplete:ratoli});
            break;
        case 23:
            diapo23 = new TimelineMax();
            diapo23.to($('#foto4-2planta21'),2,{left:'-300px',ease:Power3.easeInOut})
                .to($('#foto4-2planta22'),2,{left:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2planta23'),2,{left:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2plantes2'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2plantes2'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2 .tapa'),2,{autoAlpha:'.4',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text2'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text2 p:last-child'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo23.addCallback(ratoli);
            break;
        case 230:
            diapo24.tweenTo(0, {onComplete:ratoli});
            break;
        case 24:
            diapo24 = new TimelineMax();
            diapo24.to($('#foto4-2text2 p:first-child'),2,{top:'-300px',ease:Power3.easeInOut})
                .to($('#foto4-2text2'),2,{bottom:'110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2animals1'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2animal12'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2animal13'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo24.addCallback(ratoli);
            break;
        case 240:
            diapo25.tweenTo(0, {onComplete:ratoli});
            break;
        case 25:
            diapo25 = new TimelineMax();
            diapo25.to($('#foto4-2animal12'),2,{left:'-300px',ease:Power3.easeInOut})
                .to($('#foto4-2animal11'),2,{left:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2animals1'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2animals2'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2animal22'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2animal23'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo25.addCallback(ratoli);
            $('#apartat5').load('apartat5.php');
            break;
        case 250:
            diapo26.tweenTo(0, {onComplete:hide5});
            function hide5(){
                $('#apartat5').hide();
                ratoli();
            }
            break;
        case 26:
            $('#apartat5').show();
            diapo26 = new TimelineMax();
            diapo26.to($('#foto4-2animal22'),2,{left:'-300px',ease:Power3.easeInOut})
                .to($('#foto4-2animal21'),2,{left:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2animals2'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-1text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo26.addCallback(ratoli);
            break;
        case 260:
            diapo27.tweenTo(0, {onComplete:ratoli});
            break;
        case 27:
            diapo27 = new TimelineMax();
            diapo27.to($('#foto5-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1text2'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1text2 p:first-child'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo27.addCallback(ratoli);
            break;
        case 270:
            $('#foto5-1video video')[0].pause();
            diapo28.tweenTo(0, {onComplete:ratoli});
            break;
        case 28:
            $('#foto5-1video video')[0].currentTime=0;
            diapo28 = new TimelineMax();
            diapo28.to($('#foto5-1text2 p:last-child'),2,{top:'300px',ease:Power3.easeInOut})
                .to($('#foto5-1text2'),2,{bottom:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1video'),2,{autoAlpha:'1',ease:Power3.easeInOut,onComplete:video51},'-=1.8');
            function video51(){
                $('#foto5-1video video')[0].play();
                ratoli();
            }
            $('#foto5-1video video').on('ended',function(){
                passar(29);
            });
            break;
        case 280:
            diapo29.tweenTo(0, {onComplete:ratoli});
            break;
        case 29:
            $('#foto5-1video video')[0].pause();
            diapo29 = new TimelineMax();
            diapo29.to($('#foto5-1'),2,{top:'-100%',ease:Power3.easeInOut})
                .to($('#foto5-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2text p:last-child'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo29.addCallback(ratoli);
            break;
        case 290:
            $('#foto5-2video video')[0].pause();
            diapo30.tweenTo(0, {onComplete:ratoli});
            break;
        case 30:
            $('#foto5-2video video')[0].currentTime=0;
            diapo30 = new TimelineMax();
            diapo30.to($('#foto5-2text p:first-child'),2,{top:'-300px',ease:Power3.easeInOut})
                .to($('#foto5-2text'),2,{top:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2video'),2,{autoAlpha:'1',ease:Power3.easeInOut,onComplete:video52},'-=1.8');
            function video52(){
                $('#foto5-2video video')[0].play();
                ratoli();
            }
            $('#foto5-2video video').on('ended',function(){
                passar(31);
            });
            $('#apartat6').load('apartat6.php');
            break;
        case 300:
            diapo31.tweenTo(0, {onComplete:hide6});
            function hide6(){
                video52();
                $('#apartat6').hide();
                ratoli();
            }
            break;
        case 31:
            $('#foto5-2video video')[0].pause();
            $('#apartat6').show();
            diapo31 = new TimelineMax();
            diapo31.to($('#foto5-2'),2,{top:'-100%',ease:Power3.easeInOut})
                .to($('#foto6-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-1text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo31.addCallback(ratoli);
            break;
        case 310:
            $('#foto6-1video video')[0].pause();
            diapo32.tweenTo(0, {onComplete:ratoli});
            break;
        case 32:
            diapo32 = new TimelineMax();
            diapo32.to($('#foto6-1peu'),2,{left:'-50%',ease:Power3.easeInOut})
                .to($('#foto6-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1video'),2,{top:'0',ease:Power3.easeInOut,onComplete:video61},'-=1.8')
                .to($('#foto6-1text2'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo32.addCallback(ratoli);
            function video61(){
                $('#foto6-1video video')[0].play();
            }
            $('#foto6-1video video').on('ended',function(){
                passar(33);
            });
            break;
        case 33:
            $('#foto6-1video video')[0].pause();
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            break;
    }
}