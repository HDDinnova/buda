$('#bso').click(function(){
    if($('#audio')[0].paused){
        $('#audio')[0].play();
    } else {
        $('#audio')[0].pause();
    }
});

diari1 = false;
diari2 = false;

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
                .to($('#foto1-1text'),2,{top:'-240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo11.addCallback(ratoli);
            break;
        case 110:
            diapo12.tweenTo(0, {onComplete:ratoli});
            break;
        case 12:
            diapo12 = new TimelineMax();
            diapo12.to($('#foto1-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2 .tapa'),2,{autoAlpha:'.7',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8');
            diapo12.addCallback(ratoli);
            break;
        case 120:
            diapo13.tweenTo(0, {onComplete:ratoli});
            break;
        case 13:
            diapo13 = new TimelineMax();
            diapo13.to($('#foto1-2text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-3text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo13.addCallback(ratoli);
            $('#apartat2').load('apartat2.php');
            break;
        case 130:
            $('#foto2-1 video')[0].pause();
            diapo14.tweenTo(0, {onComplete:f130});
            function f130(){
                $('#apartat2').hide();
                ratoli();
            }
            break;
        case 14:
            $('#apartat2').show();
            diapo14 = new TimelineMax();
            diapo14.to($('#foto1-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text'),2,{top:'-220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-1text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text h2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo14.addCallback(f14);
            function f14(){
                $('#foto2-1 video')[0].play();
                ratoli();
            }
            break;
        case 140:
            diapo15.tweenTo(0, {onComplete:f14});
            break;
        case 15:
            $('#foto2-1 video')[0].pause();
            diapo15 = new TimelineMax();
            diapo15.to($('#foto2-1text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-2text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2b'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo15.addCallback(ratoli);
            $('#apartat3').load('apartat3.php');
            break;
        case 150:
            diapo16.tweenTo(0, {onComplete:f150});
            function f150(){
                $('#apartat3').hide();
                ratoli();
            }
            break;
        case 16:
            $('#apartat3').show();
            diapo16 = new TimelineMax();
            diapo16.to($('#foto2-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text'),2,{top:'-230%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-1text'),2,{top:'50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo16.addCallback(ratoli);
            break;
        case 160:
            $('#foto3-2 video')[0].pause();
            diapo17.tweenTo(0, {onComplete:ratoli});
            break;
        case 17:
            diapo17 = new TimelineMax();
            diapo17.to($('#foto3-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text'),2,{top:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-2text'),2,{top:'50%',ease:Power3.easeInOut},'-=1.8');
            diapo17.addCallback(f17);
            function f17(){
                $('#foto3-2 video')[0].play();
                ratoli();
            }
            break;
        case 170:
            $('#foto3-3 video')[0].pause();
            diapo18.tweenTo(0, {onComplete:f17});
            break;
        case 18:
            $('#foto3-2 video')[0].pause();
            diapo18 = new TimelineMax();
            diapo18.to($('#foto3-2text'),2,{top:'250%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo18.addCallback(f18);
            function f18(){
                $('#foto3-3 video')[0].play();
                ratoli();
            }
            break;
        case 180:
            $('#foto3-4 video')[0].pause();
            diapo19.tweenTo(0, {onComplete:f18});
            break;
        case 19:
            $('#foto3-3 video')[0].pause();
            diapo19 = new TimelineMax();
            diapo19.to($('#foto3-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-4text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8');
            diapo19.addCallback(f19);
            function f19(){
                $('#foto3-4 video')[0].play();
                ratoli();
            }
            break;
        case 190:
            $('#foto3-5 video')[0].pause();
            diapo20.tweenTo(0, {onComplete:f19});
            break;
        case 20:
            $('#foto3-4 video')[0].pause();
            diapo20 = new TimelineMax();
            diapo20.to($('#foto3-4text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-5text'),2,{top:'60%',ease:Power3.easeInOut},'-=1.8');
            diapo20.addCallback(f20);
            function f20(){
                $('#foto3-5 video')[0].play();
                ratoli();
            }
            break;
        case 200:
            $('#foto3-6 video')[0].pause();
            diapo21.tweenTo(0, {onComplete:f20});
            break;
        case 21:
            $('#foto3-5 video')[0].pause();
            diapo21 = new TimelineMax();
            diapo21.to($('#foto3-5text'),2,{top:'160%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-5'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-6'),2,{top:'0',ease:Power3.easeInOut},'-=2');
            diapo21.addCallback(f21);
            function f21(){
                $('#foto3-6 video')[0].play();
                ratoli();
            }
            break;
        case 210:
            $('#foto3-7 video')[0].pause();
            diapo22.tweenTo(0, {onComplete:f21});
            break;
        case 22:
            $('#foto3-6 video')[0].pause();
            diapo22 = new TimelineMax();
            diapo22.to($('#foto3-6'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-7'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-7text'),2,{top:'60%',ease:Power3.easeInOut},'-=1.8');
            diapo22.addCallback(f22);
            function f22(){
                $('#foto3-7 video')[0].play();
                ratoli();
            }
            break;
        case 220:
            $('#foto3-8 video')[0].pause();
            diapo23.tweenTo(0, {onComplete:f22});
            break;
        case 23:
            $('#foto3-7 video')[0].pause();
            diapo23 = new TimelineMax();
            diapo23.to($('#foto3-7text'),2,{top:'160%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-7'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-8'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-8text'),2,{top:'60%',ease:Power3.easeInOut},'-=1.8');
            diapo23.addCallback(f23);
            function f23(){
                $('#foto3-8 video')[0].play();
                ratoli();
            }
            $('#apartat4').load('apartat4.php');
            break;
        case 230:
            diapo24.tweenTo(0, {onComplete:f230});
            function f230(){
                $('#foto3-8 video')[0].play();
                $('#apartat4').hide();
                ratoli();
            }
            break;
        case 24:
            $('#apartat4').show();
            $('#foto3-8 video')[0].pause();
            diapo24 = new TimelineMax();
            diapo24.to($('#foto3-8text'),2,{top:'160%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-8'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-1text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo24.addCallback(ratoli);
            break;
        case 240:
            diapo25.tweenTo(0, {onComplete:ratoli});
            break;
        case 25:
            diapo25 = new TimelineMax();
            diapo25.to($('#foto4-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text'),2,{top:'115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text2'),2,{bottom:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1diari1'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1diari1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo25.addCallback(ratoli);
            if (!diari1){
                $("#foto4-1diari1zoom").elevateZoom({
                    scrollZoom : true,
                    zoomType: "lens",
                    lensShape: "square",
                    loadingIcon: "true",
                    lensSize: 400
                });
                diari1 = !diari1;
            }
            break;
        case 250:
            diapo26.tweenTo(0, {onComplete:ratoli});
            break;
        case 26:
            diapo26 = new TimelineMax();
            diapo26
                .to($('#foto4-1diari1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1diari1'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1diari2'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1diari2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo26.addCallback(ratoli);
            if (!diari2){
                $("#foto4-1diari2zoom").elevateZoom({
                    scrollZoom : true,
                    zoomType: "lens",
                    lensShape: "square",
                    loadingIcon: "true",
                    lensSize: 400
                });
                diari2 = !diari2;
            }
            break;
        case 260:
            $('#foto4-2 video')[0].pause();
            diapo27.tweenTo(0, {onComplete:ratoli});
            break;
        case 27:
            diapo27 = new TimelineMax();
            diapo27.to($('#foto4-1diari2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1text2'),2,{bottom:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1diari2'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1 .tapa'),2,{backgroundColor:'#000000',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-1 .tapa'),2,{autoAlpha:'.8',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo27.addCallback(f27);
            function f27(){
                $('#foto4-2 video')[0].play();
                ratoli();
            }
            $('#foto4-2 video').on('ended',function(){
                passar(28);
            });
            break;
        case 28:
            $('#foto4-2 video')[0].pause();
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            break;
    }
}