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
        pos++;
        passar(pos);
    } else if(e.deltaY<0 || e==38) {
        if (pos === 10) {
            ratoli();
        } else {
            pos--;
            if (pos === 11) {
                passar(pos*1000);
            } else {
                (pos === 10 ? passar(pos) : passar(pos*10));
            }
        }
    }
}
function diapositiva(id){
    switch (id) {
        case 1:
            diapo1 = new TimelineMax();
            diapo1.to($('#foto1-1'),2,{top:0,ease:Power3.easeInOut})
                .to($('#foto1-1text'),2,{top:'12%',ease:Power3.easeInOut},'-=1')
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
                .to($('#foto1-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-2text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo11.addCallback(ratoli);
            break;
        case 11000:
            diapo12.tweenTo(0, {onComplete:ratoli});
            break;
        case 12:
            diapo12 = new TimelineMax();
            diapo12.to($('#foto1-2text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text4'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text4-1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo12.addCallback(ratoli);
            break;
        case 1200:
            diapo13.tweenTo(0, {onComplete:ratoli});
            break;
        case 13:
            diapo13 = new TimelineMax();
            diapo13.to($('#foto1-2text4-2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text4'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2 .tapa'),2,{autoAlpha:'.7',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text2'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo13.addCallback(ratoli);
            break;
        case 1300:
            diapo14.tweenTo(0, {onComplete:ratoli});
            break;
        case 14:
            diapo14 = new TimelineMax();
            diapo14.to($('#foto1-2text2'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2 .tapa'),2,{autoAlpha:'.5',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text3'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2peu'),2,{color:'#000000',ease:Power3.easeInOut},'-=1.8');
            diapo14.addCallback(ratoli);
            break;
        case 140:
            diapo15.tweenTo(0, {onComplete:ratoli});
            break;
        case 15:
            diapo15 = new TimelineMax();
            diapo15.to($('#foto1-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2text3'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto1-3text'),2,{top:'22%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo15.addCallback(ratoli);
            video('#foto1-3play','apartat1video1.php');
            $('#apartat20').load('apartat20.php');
            break;
        case 150:
            diapo16.tweenTo(0, {onComplete:f140});
            function f140(){
                $('#apartat20').hide();
                ratoli();
            }
            break;
        case 16:
            $('#apartat20').show();
            diapo16 = new TimelineMax();
            diapo16.to($('#play1-3'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3text'),2,{top:'222%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto1-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-1'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-1text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo16.addCallback(ratoli);
            break;
        case 160:
            diapo17.tweenTo(0, {onComplete:ratoli});
            break;
        case 17:
            diapo17 = new TimelineMax();
            diapo17.to($('#foto20-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-1text'),2,{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-2'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-2text'),2,{top:'25%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo17.addCallback(ratoli);
            video('#foto20-2boto','apartat20video1.php');
            break;
        case 170:
            diapo18.tweenTo(0, {onComplete:ratoli});
            break;
        case 18:
            diapo18 = new TimelineMax();
            diapo18.to($('#foto20-2boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-2text'),2,{top:'125%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-2text2'),2,{top:'25%',ease:Power3.easeInOut},'-=1.8');
            diapo18.addCallback(ratoli);
            break;
        case 180:
            diapo19.tweenTo(0, {onComplete:ratoli});
            break;
        case 19:
            diapo19 = new TimelineMax();
            diapo19.to($('#foto20-2text2'),2,{top:'125%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto20-3text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-3text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo19.addCallback(ratoli);
            break;
        case 190:
            diapo20.tweenTo(0, {onComplete:f180});
            function f180(){
                $('#foto20-4').hide();
                ratoli();
            }
            break;
        case 20:
            $('#foto20-4').show();
            diapo20 = new TimelineMax();
            diapo20.to($('#foto20-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-3text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-3text'),2,{top:'140%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-4'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-4text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8');
            diapo20.addCallback(ratoli);
            $('#apartat2').load('apartat2.php');
            break;
        case 200:
            diapo21.tweenTo(0, {onComplete:f190});
            function f190(){
                $('#apartat2').hide();
                ratoli();
            }
            break;
        case 21:
            $('#apartat2').show();
            diapo21 = new TimelineMax();
            diapo21.to($('#foto20-4text'),2,{top:'140%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto20-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-1text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo21.addCallback(ratoli);
            break;
        case 210:
            $('#foto2-1').show();
            diapo22.tweenTo(0, {onComplete:ratoli});
            break;
        case 22:
            diapo22 = new TimelineMax();
            diapo22.to($('#foto2-1text'),2,{top:'140%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2peu'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2text'),2,{bottom:'8%',ease:Power3.easeInOut},'-=1.8');
            diapo22.addCallback(f21);
            function f21(){
                $('#foto2-1').hide();
                ratoli();
            }
            break;
        case 220:
            diapo23.tweenTo(0, {onComplete:ratoli});
            break;
        case 23:
            diapo23 = new TimelineMax();
            diapo23.to($('#foto2-2text'),2,{bottom:'-108%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-3text'),2,{bottom:'8%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo23.addCallback(ratoli);
            break;
        case 230:
            diapo24.tweenTo(0, {onComplete:ratoli});
            break;
        case 24:
            diapo24 = new TimelineMax();
            diapo24.to($('#foto2-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-3text'),2,{bottom:'-108%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-4text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo24.addCallback(ratoli);
            break;
        case 240:
            diapo25.tweenTo(0, {onComplete:ratoli});
            break;
        case 25:
            diapo25 = new TimelineMax();
            diapo25.to($('#foto2-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-4text'),2,{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto2-5text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5text h3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo25.addCallback(ratoli);
            $('#apartat3').load('apartat3.php');
            break;
        case 250:
            diapo26.tweenTo(0, {onComplete:f240});
            function f240(){
                $('#apartat3').hide();
                ratoli();
            }
            break;
        case 26:
            $('#apartat3').show();
            diapo26 = new TimelineMax();
            diapo26.to($('#foto2-5peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5text'),2,{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto2-5'),2,{left:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-1text'),2,{top:'55%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1peu'),2,{bottom:'10px',ease:Power3.easeInOut},'-=1.8');
            diapo26.addCallback(ratoli);
            break;
        case 260:
            diapo27.tweenTo(0, {onComplete:ratoli});
            break;
        case 27:
            diapo27 = new TimelineMax();
            diapo27.to($('#foto3-1peu'),2,{bottom:'-150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1text'),2,{top:'-45%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-2text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2peu p'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo27.addCallback(ratoli);
            video('#foto3-2play','apartat3video1.php');
            break;
        case 270:
            $('#foto3-3 video')[0].pause();
            diapo28.tweenTo(0, {onComplete:ratoli});
            break;
        case 28:
            diapo28 = new TimelineMax();
            diapo28.to($('#foto3-2peu p'),2,{left:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-2text'),2,{top:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo28.addCallback(f27);
            function f27(){
                $('#foto3-3 video')[0].play();
                ratoli();
            }
            $('#foto3-3 video').on('ended',function(){
                passar(28);
            });
            break;
        case 280:
            diapo29.tweenTo(0, {onComplete:f27});
            break;
        case 29:
            $('#foto3-3 video')[0].pause();
            diapo29 = new TimelineMax();
            diapo29.to($('#foto3-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto3-4text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4text h3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo29.addCallback(ratoli);
            video('#foto3-4play','apartat3video2.php');
            $('#apartat4').load('apartat4.php');
            break;
        case 290:
            diapo30.tweenTo(0, {onComplete:f280});
            function f280(){
                $('#apartat4').hide();
                ratoli();
            }
            break;
        case 30:
            $('#apartat4').show();
            diapo30 = new TimelineMax();
            diapo30.to($('#foto3-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#play3-4'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4text'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto3-4'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-1text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8');
            diapo30.addCallback(ratoli);
            break;
        case 300:
            diapo31.tweenTo(0, {onComplete:ratoli});
            break;
        case 31:
            diapo31 = new TimelineMax();
            diapo31.to($('#foto4-1text'),2,{top:'-220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1 img'),2,{autoAlpha:'.5',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#play4-2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2foto'),2,{top:'15%',left:0,transform:'rotate(10deg)',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo31.addCallback(ratoli);
            video('#foto4-2play','apartat4video1.php');
            break;
        case 310:
            diapo32.tweenTo(0, {onComplete:ratoli});
            break;
        case 32:
            diapo32 = new TimelineMax();
            diapo32.to($('#foto4-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2foto'),2,{top:'180%',left:'180%',transform:'rotate(-90deg)',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text h2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-2text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-3text'),2,{bottom:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo32.addCallback(ratoli);
            break;
        case 320:
            diapo33.tweenTo(0, {onComplete:ratoli});
            break;
        case 33:
            diapo33 = new TimelineMax();
            diapo33.to($('#foto4-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3text'),2,{bottom:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto4-4text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#play4-43'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo33.addCallback(ratoli);
            video('#foto4-43play','apartat4video4.php');
            $('#foto4-4text span').click(function(){
                $('body').append("<div id='mesinfo'><div>");
                $(window).unbind('wheel');
                $(document).off( "keydown" );
                $.ajax({
                    url: "mesinfo.html",
                    context: document.body
                }).done(function(data) {
                    $('#mesinfo').html(data);
                    $('#zonaactiva').click(function(){
                        $('#zonaactiva').off('click');
                        $('#mesinfo').remove();
                        ratoli();
                    });
                }).error(function(e){
                    console.log(e);
                });
            });
            $('#apartat5').load('apartat5.php');
            break;
        case 330:
            diapo34.tweenTo(0, {onComplete:f320});
            function f320(){
                $('#apartat5').hide();
                ratoli();
            }
            break;
        case 34:
            $('#apartat5').show();
            diapo34 = new TimelineMax();
            diapo34.to($('#foto4-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-4text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-4text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto4-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-1text'),2,{top:'25%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1text h2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo34.addCallback(ratoli);
            break;
        case 340:
            diapo35.tweenTo(0, {onComplete:ratoli});
            break;
        case 35:
            diapo35 = new TimelineMax();
            diapo35.to($('#foto5-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1text'),2,{top:'-225%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-2text'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo35.addCallback(ratoli);
            slider('#foto5-2boto','#foto5-2fotos');
            break;
        case 350:
            diapo36.tweenTo(0, {onComplete:ratoli});
            break;
        case 36:
            diapo36 = new TimelineMax();
            diapo36.to($('#foto5-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2text'),2,{top:'-240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-3text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo36.addCallback(ratoli);
            break;
        case 360:
            diapo37.tweenTo(0, {onComplete:ratoli});
            break;
        case 37:
            diapo37 = new TimelineMax();
            diapo37.to($('#foto5-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-3text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto5-4text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo37.addCallback(ratoli);
            video('#foto5-4boto2','apartat5video1.php');
            break;
        case 370:
            diapo38.tweenTo(0, {onComplete:f360});
            function f360(){
                $('#foto5-5').show();
                ratoli();
            }
            break;
        case 38:
            $('#foto5-5').show();
            diapo38 = new TimelineMax();
            diapo38.to($('#foto5-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4text h3'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-4text'),2,{top:'-115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-5'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-5text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-5boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo38.addCallback(ratoli);
            video('#foto5-5boto','apartat5video2.php');
            $('#apartat6').load('apartat6.php');
            break;
        case 380:
            diapo39.tweenTo(0, {onComplete:f370});
            function f370(){
                $('#apartat6').hide();
                ratoli();
            }
            break;
        case 39:
            $('#apartat6').show();
            diapo39 = new TimelineMax();
            diapo39.to($('#foto5-5text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-5text'),2,{top:'-115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto5-5'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-1'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-1text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8');
            diapo39.addCallback(ratoli);
            break;
        case 390:
            diapo40.tweenTo(0, {onComplete:ratoli});
            break;
        case 40:
            diapo40 = new TimelineMax();
            diapo40.to($('#foto6-1text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-2'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-2text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8');
            diapo40.addCallback(ratoli);
            break;
        case 400:
            diapo41.tweenTo(0, {onComplete:ratoli});
            break;
        case 41:
            diapo41 = new TimelineMax();
            diapo41.to($('#foto6-2text'),2,{top:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-3text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo41.addCallback(ratoli);
            break;
        case 410:
            $('#foto6-4 video')[0].pause();
            diapo42.tweenTo(0, {onComplete:ratoli});
            break;
        case 42:
            diapo42 = new TimelineMax();
            diapo42.to($('#foto6-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-3text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo42.addCallback(f41);
            function f41(){
                $('#foto6-4 video')[0].play();
                ratoli();
            }
            $('#foto6-4 video').on('ended',function(){
                passar(41);
            });
            break;
        case 420:
            diapo43.tweenTo(0, {onComplete:f41});
            break;
        case 43:
            $('#foto6-4 video')[0].pause();
            diapo43 = new TimelineMax();
            diapo43.to($('#foto6-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-4'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-5text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-5text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo43.addCallback(ratoli);
            slider('#foto6-5boto','#foto6-5fotos');
            break;
        case 430:
            diapo45.tweenTo(0, {onComplete:ratoli});
            break;
        case 44:
            diapo44 = new TimelineMax();
            diapo44.to($('#foto6-5peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-5boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-5text'),2,{top:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-5'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-6text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8');
            diapo44.addCallback(ratoli);
            break;
        case 440:
            diapo45.tweenTo(0, {onComplete:ratoli});
            break;
        case 45:
            diapo45 = new TimelineMax();
            diapo45.to($('#foto6-6text'),2,{top:'115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-6'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-7'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-7text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-7peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo45.addCallback(ratoli);
            break;
        case 450:
            diapo46.tweenTo(0, {onComplete:ratoli});
            break;
        case 46:
            diapo46 = new TimelineMax();
            diapo46.to($('#foto6-71'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-72'),2,{left:'0',ease:Power3.easeInOut},'-=2');
            diapo46.addCallback(ratoli);
            break;
        case 460:
            diapo47.tweenTo(0, {onComplete:ratoli});
            break;
        case 47:
            diapo47 = new TimelineMax();
            diapo47.to($('#foto6-7peu'),2,{left:'105%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-7text'),2,{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-7'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-8'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-8text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-8boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-8text h3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-8peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo47.addCallback(ratoli);
            slider('#foto6-8boto1','#foto6-8fotos');
            foto('#foto6-8boto3','#foto6-8foto');
            break;
        case 470:
            diapo48.tweenTo(0, {onComplete:ratoli});
            break;
        case 48:
            diapo48 = new TimelineMax();
            diapo48.to($('#foto6-8peu'),2,{left:'105%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-8boto3'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-8boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-8text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-8'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-9'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto6-9text'),2,{top:'25%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-9text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-9peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo48.addCallback(ratoli);
            slider('#foto6-9boto','#foto6-9fotos');
            $('#apartat7').load('apartat7.php');
            break;
        case 480:
            diapo49.tweenTo(0, {onComplete:f470});
            function f470(){
                $('#apartat7').hide();
                ratoli();
            }
            break;
        case 49:
            $('#apartat7').show();
            diapo49 = new TimelineMax();
            diapo49.to($('#foto6-9peu'),2,{left:'105',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-9boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-9text'),2,{top:'125%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto6-9'),2,{left:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-1'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto7-1text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-1text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo49.addCallback(ratoli);
            break;
        case 490:
            $('#foto7-1 video')[0].pause();
            diapo50.tweenTo(0, {onComplete:ratoli});
            break;
        case 50:
            $('#foto7-1 video')[0].play();
            diapo50 = new TimelineMax();
            diapo50.to($('#foto7-1text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-1text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-2text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8');
            diapo50.addCallback(ratoli);
            break;
        case 500:
            diapo51.tweenTo(0, {onComplete:f490});
            function f490(){
                $('#foto7-1 video')[0].play();
                ratoli();
            }
            break;
        case 51:
            $('#foto7-1 video')[0].pause();
            diapo51 = new TimelineMax();
            diapo51.to($('#foto7-2text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto7-3text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8');
            diapo51.addCallback(ratoli);
            break;
        case 510:
            diapo52.tweenTo(0, {onComplete:ratoli});
            break;
        case 52:
            diapo52 = new TimelineMax();
            diapo52.to($('#foto7-3text'),2,{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto7-4text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8');
            diapo52.addCallback(ratoli);
            break;
        case 520:
            diapo53.tweenTo(0, {onComplete:ratoli});
            break;
        case 53:
            diapo53 = new TimelineMax();
            diapo53.to($('#foto7-4text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto7-5text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-5text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo53.addCallback(ratoli);
            slider('#foto7-5boto','#foto7-5fotos');
            break;
        case 530:
            diapo54.tweenTo(0, {onComplete:ratoli});
            break;
        case 54:
            diapo54 = new TimelineMax();
            diapo54.to($('#foto7-5boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-5text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-5'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto7-6text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-6text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo54.addCallback(ratoli);
            break;
        case 540:
            diapo55.tweenTo(0, {onComplete:f530});
            function f530(){
                $('#foto7-7').hide();
                ratoli();
            }
            break;
        case 55:
            $('#foto7-7').show();
            diapo55 = new TimelineMax();
            diapo55.to($('#foto7-6text h2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-6text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-7'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-7text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-7text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo55.addCallback(ratoli);
            break;
        case 550:
            diapo56.tweenTo(0, {onComplete:f540});
            function f540(){
                $('#foto7-8').hide();
                ratoli();
            }
            break;
        case 56:
            $('#foto7-8').show();
            diapo56 = new TimelineMax();
            diapo56.to($('#foto7-7boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-7text'),2,{top:'110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-8'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-8text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-8text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo56.addCallback(ratoli);
            video('#foto7-8boto','apartat7video1.php');
            break;
        case 560:
            diapo57.tweenTo(0, {onComplete:ratoli});
            break;
        case 57:
            diapo57 = new TimelineMax();
            diapo57.to($('#foto7-8boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-8text'),2,{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-8'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto7-9text'),2,{top:'25%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9text p:last'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9text p:first'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo57.addCallback(ratoli);
            break;
        case 570:
            diapo58.tweenTo(0, {onComplete:ratoli});
            break;
        case 58:
            diapo58 = new TimelineMax();
            diapo58.to($('#foto7-9boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9text p:last'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9text'),2,{top:'125%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9text2'),2,{top:'50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9text2 p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9text2foto'),2,{right:'10%',ease:Power3.easeInOut},'-=1.8');
            diapo58.addCallback(ratoli);
            video('#foto7-9boto2','apartat7video2.php');
            $('#apartat8').load('apartat8.php');
            break;
        case 580:
            diapo59.tweenTo(0, {onComplete:f560});
            function f560(){
                $('#apartat8').hide();
                ratoli();
            }
            break;
        case 59:
            $('#apartat8').show();
            diapo59 = new TimelineMax();
            diapo59.to($('#foto7-9text2foto'),2,{right:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9text2'),2,{top:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto7-9'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto8-1text'),2,{top:'35%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-1text h2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo59.addCallback(ratoli);
            video('#foto8-1boto','apartat8video1.php');
            break;
        case 590:
            diapo60.tweenTo(0, {onComplete:ratoli});
            break;
        case 60:
            diapo60 = new TimelineMax();
            diapo60.to($('#foto8-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-1boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-1text'),2,{top:'235%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto8-2text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-2boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-2text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo60.addCallback(ratoli);
            foto('#foto8-2boto1','#foto8-2foto1');
            foto('#foto8-2boto2','#foto8-2foto2');
            break;
        case 600:
            diapo61.tweenTo(0, {onComplete:f580});
            function f580(){
                $('#foto8-3').hide();
                $('#foto8-3fotos').hide();
                ratoli();
            }
            break;
        case 61:
            Draggable.create($('#foto8-3 .f'));
            $('#foto8-3').show();
            $('#foto8-3fotos').show();
            diapo61 = new TimelineMax();
            diapo61.to($('#foto8-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-2boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-2boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-2text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-3'),2,{autoAlpha:'1',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-3text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-3text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-3foto1'),2,{top:'15%',left:'45%',transform:'rotate(5deg)',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-3foto2'),2,{top:'15%',left:'47%',transform:'rotate(2deg)',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-3foto3'),2,{top:'15%',left:'49%',transform:'rotate(-1deg)',ease:Power3.easeInOut},'-=1.8');
            diapo61.addCallback(ratoli);
            video('#foto8-3boto','apartat8video6.php');
            break;
        case 610:
            $('#foto8-3').show();
            $('#foto8-3fotos').show();
            diapo62.tweenTo(0, {onComplete:ratoli});
            break;
        case 62:
            diapo62 = new TimelineMax();
            diapo62.to($('#foto8-3foto1'),2,{top:'-80%',left:'180%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-3foto2'),2,{top:'-80%',left:'180%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-3foto3'),2,{top:'-80%',left:'180%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-3boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-3text'),2,{top:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-4'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-4text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-4text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo62.addCallback(f60);
            video('#foto8-4boto2','apartat8video2.php');
            function f60(){
                $('#foto8-3').hide();
                $('#foto8-3fotos').hide();
                ratoli();
            }
            break;
        case 620:
            diapo63.tweenTo(0, {onComplete:ratoli});
            break;
        case 63:
            diapo63 = new TimelineMax();
            diapo63.to($('#foto8-4boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-4text'),2,{top:'120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-4'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-5'),2,{left:'0',ease:Power3.easeInOut},'-=2');
            diapo63.addCallback(ratoli);
            break;
        case 630:
            diapo64.tweenTo(0, {onComplete:ratoli});
            break;
        case 64:
            diapo64 = new TimelineMax();
            diapo64.to($('#foto8-5'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-6'),2,{left:'0',ease:Power3.easeInOut},'-=2');
            diapo64.addCallback(ratoli);
            break;
        case 640:
            diapo65.tweenTo(0, {onComplete:ratoli});
            break;
        case 65:
            diapo65 = new TimelineMax();
            diapo65.to($('#foto8-6'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-7'),2,{left:'0',ease:Power3.easeInOut},'-=2');
            diapo65.addCallback(ratoli);
            break;
        case 650:
            diapo66.tweenTo(0, {onComplete:ratoli});
            break;
        case 66:
            diapo66 = new TimelineMax();
            diapo66.to($('#foto8-7'),2,{left:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-8'),2,{left:'0',ease:Power3.easeInOut},'-=2');
            diapo66.addCallback(ratoli);
            break;
        case 660:
            $('#foto8-9 video')[0].pause();
            diapo67.tweenTo(0, {onComplete:ratoli});
            break;
        case 67:
            diapo67 = new TimelineMax();
            diapo67.to($('#foto8-4peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-8'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-9'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto8-9text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-9boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-9boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo67.addCallback(f65);
            function f65(){
                $('#foto8-9 video')[0].play();
                ratoli();
            }
            foto('#foto8-9boto1','#foto8-9foto1');
            foto('#foto8-9boto2','#foto8-9foto2');
            break;
        case 670:
            $('#foto8-10 video')[0].pause();
            diapo68.tweenTo(0, {onComplete:f65});
            break;
        case 68:
            $('#foto8-9 video')[0].pause();
            diapo68 = new TimelineMax();
            diapo68.to($('#foto8-9text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-9boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-9text'),2,{top:'-120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-9'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-10'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto8-10text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-10boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-10boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-10boto3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo68.addCallback(f66);
            function f66(){
                $('#foto8-10 video')[0].play();
                ratoli();
            }
            foto('#foto8-10boto1','#foto8-10foto1');
            foto('#foto8-10boto2','#foto8-10foto2');
            video('#foto8-10boto3','apartat8video3.php');
            break;
        case 680:
            $('#foto8-11 video')[0].pause();
            diapo69.tweenTo(0, {onComplete:f66});
            break;
        case 69:
            $('#foto8-10 video')[0].pause();
            diapo69 = new TimelineMax();
            diapo69.to($('#foto8-10text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-10boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-10boto2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-10text'),2,{top:'-120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-10'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-11'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto8-11text'),2,{top:'35%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-11boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-11boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo69.addCallback(f67);
            function f67(){
                $('#foto8-11 video')[0].play();
                ratoli();
            }
            foto('#foto8-11boto1','#foto8-11foto1');
            video('#foto8-11boto2','apartat8video4.php');
            break;
        case 690:
            diapo70.tweenTo(0, {onComplete:f67});
            break;
        case 70:
            $('#foto8-11 video')[0].pause();
            diapo70 = new TimelineMax();
            diapo70.to($('#foto8-11text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-11boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-11text'),2,{top:'-135%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-11'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-12'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto8-12text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-12text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-12peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo70.addCallback(ratoli);
            foto('#foto8-12boto','#foto8-12foto');
            break;
        case 700:
            diapo71.tweenTo(0, {onComplete:ratoli});
            break;
        case 71:
            diapo71 = new TimelineMax();
            diapo71.to($('#foto8-12peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-12boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-12text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-12'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-13'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto8-13text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-13peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo71.addCallback(ratoli);
            break;
        case 710:
            diapo72.tweenTo(0, {onComplete:ratoli});
            break;
        case 72:
            diapo72 = new TimelineMax();
            diapo72.to($('#foto8-13peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-13text'),2,{top:'210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-13'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-14'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto8-14text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-14boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-14peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo72.addCallback(ratoli);
            break;
        case 720:
            $('#foto8-15 video')[0].pause();
            diapo73.tweenTo(0, {onComplete:ratoli});
            break;
        case 73:
            diapo73 = new TimelineMax();
            diapo73.to($('#foto8-14peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-14text p'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-14text'),2,{top:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-14'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-15'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto8-15text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-15boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo73.addCallback(f71);
            function f71(){
                $('#foto8-15 video')[0].play();
                ratoli();
            }
            video('#foto8-15boto','apartat8video5.php');
            $('#apartat9').load('apartat9.php');
            break;
        case 730:
            diapo74.tweenTo(0, {onComplete:f710});
            function f710(){
                $('#foto8-15 video')[0].play();
                $('#apartat9').hide();
                ratoli();
            }
            break;
        case 74:
            $('#foto8-15 video')[0].pause();
            $('#apartat9').show();
            diapo74 = new TimelineMax();
            diapo74.to($('#foto8-15boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-15text'),2,{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto8-15'),2,{left:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-1'),2,{left:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto9-1text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8');
            diapo74.addCallback(ratoli);
            break;
        case 740:
            diapo75.tweenTo(0, {onComplete:ratoli});
            break;
        case 75:
            diapo75 = new TimelineMax();
            diapo75.to($('#foto9-1text'),2,{top:'115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-1text2'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-1text2 p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-1text2foto'),2,{right:'10%',ease:Power3.easeInOut},'-=1.8');
            diapo75.addCallback(ratoli);
            foto('#foto9-1boto','#foto9-1foto')
            break;
        case 750:
            diapo76.tweenTo(0, {onComplete:ratoli});
            break;
        case 76:
            diapo76 = new TimelineMax();
            diapo76.to($('#foto9-1text2foto'),2,{right:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-1boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-1text2'),2,{top:'130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto9-2text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8');
            diapo76.addCallback(ratoli);
            break;
        case 760:
            diapo77.tweenTo(0, {onComplete:ratoli});
        case 77:
            diapo77 = new TimelineMax();
            diapo77.to($('#foto9-2 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=2')
                .to($('#foto9-2fotos'),2,{top:'0',left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-2fotos img'),2,{transform:'rotate(5deg)',ease:Power3.easeInOut},'-=2');
            diapo77.addCallback(ratoli);
            break;
        case 770:
            diapo78.tweenTo(0, {onComplete:ratoli});
            break;
        case 78:
            diapo78 = new TimelineMax();
            diapo78.to($('#foto9-2fotos img'),2,{transform:'rotate(40deg)',ease:Power3.easeInOut},'-=2')
                .to($('#foto9-2fotos'),2,{top:'200%',left:'200%',ease:Power3.easeInOut},'-=2')
                .to($('#foto9-2text'),2,{top:'-115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto9-3text1'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo78.addCallback(ratoli);
            break;
        case 780:
            diapo79.tweenTo(0, {onComplete:ratoli});
            break;
        case 79:
            diapo79 = new TimelineMax();
            diapo79.to($('#foto9-3text1'),2,{top:'-115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-3text2'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8');
            diapo79.addCallback(ratoli);
            break;
        case 790:
            diapo80.tweenTo(0, {onComplete:ratoli});
            break;
        case 80:
            diapo80 = new TimelineMax();
            diapo80.to($('#foto9-3text2'),2,{top:'-115%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-3text3'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8');
            diapo80.addCallback(ratoli);
            break;
        case 800:
            diapo81.tweenTo(0, {onComplete:ratoli});
            break;
        case 81:
            diapo81 = new TimelineMax();
            diapo81.to($('#foto9-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-3text3'),2,{top:'-230%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto9-4text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8');
            diapo81.addCallback(ratoli);
            break;
        case 810:
            diapo82.tweenTo(0, {onComplete:ratoli});
            break;
        case 82:
            diapo82= new TimelineMax();
            diapo82.to($('#foto9-4text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto9-5text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-5boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo82.addCallback(ratoli);
            break;
        case 820:
            diapo83.tweenTo(0, {onComplete:ratoli});
            break;
        case 83:
            Draggable.create($('#foto9-6fotos img'));
            diapo83 = new TimelineMax();
            diapo83.to($('#foto9-5textos'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-5text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-5'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto9-6text'),2,{top:'35%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-6foto1'),2,{top:'15%',left:'15%',transform:'rotate(5deg)',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-6foto2'),2,{top:'25%',left:'5%',transform:'rotate(2deg)',ease:Power3.easeInOut},'-=1.8');
            diapo83.addCallback(ratoli);
            break; 
        case 830:
            diapo84.tweenTo(0, {onComplete:ratoli});
            break;
        case 84:
            Draggable.create($('#foto9-7fotos img'));
            diapo84 = new TimelineMax();
            diapo84.to($('#foto9-6foto2'),2,{top:'200%',left:'200%',transform:'rotate(-90deg)',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-6foto1'),2,{top:'200%',left:'200%',transform:'rotate(-90deg)',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-6text'),2,{top:'135%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-6'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-7'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto9-7text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-7foto1'),2,{top:'15%',left:'5%',transform:'rotate(0deg)',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-7peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo84.addCallback(ratoli);
            break;
        case 840:
            diapo85.tweenTo(0, {onComplete:ratoli});
            break;
        case 85:
            diapo85 = new TimelineMax();
            diapo85.to($('#foto9-7peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-7foto1'),2,{top:'200%',left:'200%',transform:'rotate(-90deg)',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-7text'),2,{top:'-120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-7 .tapa'),2,{autoAlpha:'.5',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-7text2'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-7foto2'),2,{top:'25%',left:'5%',transform:'rotate(0deg)',ease:Power3.easeInOut},'-=1.8');
            diapo85.addCallback(ratoli);
            $('#apartat10').load('apartat10.php');
            break;
        case 850:
            diapo86.tweenTo(0, {onComplete:f820});
            function f820(){
                $('#apartat10').hide();
                ratoli();
            }
            break;
        case 86:
            $('#apartat10').show();
            diapo86 = new TimelineMax();
            diapo86.to($('#foto9-7foto2'),2,{top:'200%',left:'200%',transform:'rotate(-90deg)',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-7text2'),2,{top:'-120%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto9-7'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto10-1text'),2,{top:'45%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo86.addCallback(ratoli);
            break;
        case 860:
            $('#foto10-1b video')[0].pause();
            diapo87.tweenTo(0, {onComplete:ratoli});
            break;
        case 87:
            diapo87 = new TimelineMax();
            diapo87.to($('#foto10-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1text'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1b'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto10-1btext'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1btext p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo87.addCallback(f87);
            video('#foto10-1boto1','apartat10video1.php');
            video('#foto10-1boto2','apartat10video2.php');
            function f87(){
                $('#foto10-1b video')[0].play();
                ratoli();
            }
            break;
        case 870:
            $('#foto10-1c video')[0].pause();
            diapo88.tweenTo(0, {onComplete:f87});
            break;
        case 88:
            $('#foto10-1b video')[0].pause();
            diapo88 = new TimelineMax();
            diapo88.to($('#foto10-1boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1btext'),2,{top:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1b'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1c'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto10-1ctext'),2,{top:'40%',ease:Power3.easeInOut},'-=1.8');
            diapo88.addCallback(f88);
            function f88(){
                $('#foto10-1c video')[0].play();
                ratoli();
            }
            break;
        case 880:
            $('#foto10-1cvideo video')[0].pause();
            diapo89.tweenTo(0, {onComplete:f88});
            break;
        case 89:
            $('#foto10-1c video')[0].pause();
            diapo89 = new TimelineMax();
            diapo89.to($('#foto10-1ctext'),2,{top:'240%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1c .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1cvideo'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1cpeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo89.addCallback(f89);
            function f89(){
                $('#foto10-1cvideo video')[0].play();
                ratoli();
            }
            $('#foto10-1cvideo video').on('ended',function(){
                passar(90);
            });
            break;
        case 890:
            diapo90.tweenTo(0, {onComplete:f89});
            break;
        case 90:
            $('#foto10-1cvideo video')[0].pause();
            diapo90 = new TimelineMax();
            diapo90.to($('#foto10-1cpeu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1cvideo'),2,{top:'200%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-1c'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto10-2text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo90.addCallback(ratoli);
            break;
        case 890:
            diapo91.tweenTo(0, {onComplete:ratoli});
            break;
        case 91:
            diapo91 = new TimelineMax();
            diapo91.to($('#foto10-2peu'),2,{left:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-2text'),2,{top:'230%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-2'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto10-3text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-3boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-3text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo91.addCallback(ratoli);
            break;
        case 910:
            diapo92.tweenTo(0, {onComplete:ratoli});
            break;
        case 92:
            diapo92 = new TimelineMax();
            diapo92.to($('#foto10-3peu'),2,{left:'50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-3boto2'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-3boto1'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-3text'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-3'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto10-4text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-4text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo92.addCallback(ratoli);
            foto('#foto10-4boto','#foto10-4foto');
            break;
        case 920:
            diapo93.tweenTo(0, {onComplete:ratoli});
            break;
        case 93:
            diapo93 = new TimelineMax();
            diapo93.to($('#foto10-4peu'),2,{left:'50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-4boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-4text'),2,{top:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-4'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto10-5text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo93.addCallback(ratoli);
            break;
        case 930:
            diapo94.tweenTo(0, {onComplete:ratoli});
            break;
        case 94:
            diapo94 = new TimelineMax();
            diapo94.to($('#foto10-5peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-5text'),2,{top:'230%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-5'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto10-6text'),2,{top:'35%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-6text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-6peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo94.addCallback(ratoli);
            video('#foto10-6boto','apartat10video3.php');
            break;
        case 940:
            $('#foto10-6video video')[0].pause();
            diapo95.tweenTo(0, {onComplete:ratoli});
            break;
        case 95:
            diapo95 = new TimelineMax();
            diapo95.to($('#foto10-6peu'),2,{left:'50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-6boto'),2,{top:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-6text'),2,{top:'135%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-6 .tapa'),2,{backgroundColor:'#000000',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-6video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-6videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo95.addCallback(f90);
            function f90(){
                $('#foto10-6video video')[0].play();
                ratoli();
            }
            $('#apartat11').load('apartat11.php');
            $('#foto10-6video video').on('ended',function(){
                passar(91);
            });
            break;
        case 950:
            diapo96.tweenTo(0, {onComplete:f900});
            function f900(){
                $('#apartat11').hide();
                f90();
            }
            break;
        case 96:
            $('#foto10-6video video')[0].pause();
            $('#apartat11').show();
            diapo96 = new TimelineMax();
            diapo96.to($('#foto10-6videopeu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-6video'),2,{top:'200%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto10-6'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto11-1text'),2,{top:'45%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo96.addCallback(ratoli);
            break;
        case 960:
            diapo97.tweenTo(0, {onComplete:ratoli});
            break;
        case 97:
            diapo97 = new TimelineMax();
            diapo97.to($('#foto11-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-1text'),2,{top:'-245%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto11-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2boto1'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2boto3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2boto4'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo97.addCallback(ratoli);
            foto('#foto11-2boto1','#foto11-2noticia');
            video('#foto11-2boto2','apartat11video1.php');
            video('#foto11-2boto4','apartat11video2.php');
            slider('#foto11-2boto3','#foto11-2fotos');
            break;
        case 970:
            $('#foto11-2video video')[0].pause();
            diapo98.tweenTo(0, {onComplete:ratoli});
            break;
        case 98:
            diapo98 = new TimelineMax();
            diapo98.to($('#foto11-2peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2boto2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2boto3'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2text'),2,{top:'-110%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2 .tapa'),2,{autoAlpha:'.5',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo98.addCallback(f93);
            function f93(){
                $('#foto11-2video video')[0].play();
                ratoli();
            }
            $('#foto11-2video video').on('ended',function(){
                passar(94);
            });
            break;
        case 980:
            diapo99.tweenTo(0, {onComplete:f93});
            break;
        case 99:
            $('#foto11-2video video')[0].pause();
            diapo99 = new TimelineMax();
            diapo99.to($('#foto11-2videopeu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2video'),2,{top:'-200%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto11-3text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo99.addCallback(ratoli);
            break;
        case 990:
            diapo100.tweenTo(0, {onComplete:ratoli});
            break;
        case 100:
            diapo100 = new TimelineMax();
            diapo100.to($('#foto11-3peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-3text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto11-4text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8');
            diapo100.addCallback(ratoli);
            $('#apartat12').load('apartat12.php');
            break;
        case 1000:
            diapo101.tweenTo(0, {onComplete:f950});
            function f950(){
                $('#apartat12').hide();
                ratoli();
            }
            break;
        case 101:
            $('#apartat12').show();
            diapo101 = new TimelineMax();
            diapo101.to($('#foto11-4text'),2,{top:'-220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto11-5text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-5text p'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-5boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo101.addCallback(ratoli);
            slider('#foto11-5boto','#foto11-5fotos');
            break;
        case 1010:
            diapo102.tweenTo(0, {onComplete:ratoli});
            break;
        case 102:
            diapo102 = new TimelineMax();
            diapo102.to($('#foto11-5text h2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-5text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-5text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-5'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto11-6text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-6boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo102.addCallback(ratoli);
            slider('#foto11-6boto','#foto11-6fotos');
            break;
        case 1020:
            diapo103.tweenTo(0, {onComplete:ratoli});
            break;
        case 103:
            diapo103 = new TimelineMax();
            diapo103.to($('#foto11-6text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-6text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-6'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-7'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto11-7text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-7boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo103.addCallback(ratoli);
            slider('#foto11-7boto','#foto11-7fotos');
            $('#apartat13').load('apartat13.php');
            break;
        case 1030:
            diapo104.tweenTo(0, {onComplete:f980});
            function f980(){
                $('#apartat13').hide();
                ratoli();
            }
            break;
        case 104:
            $('#apartat13').show();
            diapo104 = new TimelineMax();
            diapo104.to($('#foto11-7text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-7text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto11-7'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-1'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-1text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-1peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo104.addCallback(ratoli);
            break;
        case 1040:
            diapo105.tweenTo(0, {onComplete:ratoli});
            break;
        case 105:
            diapo105 = new TimelineMax();
            diapo105.to($('#foto13-1peu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-1text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-1'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-2'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-2text'),2,{top:'10%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-2peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo105.addCallback(ratoli);
            break;
        case 1050:
            $('#foto13-2video video')[0].pause();
            diapo106.tweenTo(0, {onComplete:ratoli});
            break;
        case 106:
            diapo106 = new TimelineMax();
            diapo106.to($('#foto13-2peu'),2,{left:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-2text'),2,{top:'-210%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-2 .tapa'),2,{autoAlpha:'.8',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-2video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-2videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo106.addCallback(f101);
            function f101(){
                $('#foto13-2video video')[0].play();
                ratoli();
            }
            $('#foto13-2video video').on('ended',function(){
                passar(102);
            });
            break;
        case 1060:
            diapo107.tweenTo(0, {onComplete:ratoli});
            break;
        case 107:
            $('#foto13-2video video')[0].pause();
            diapo107 = new TimelineMax();
            diapo107.to($('#foto13-2videopeu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-2video'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-2'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-3'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-3text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-3text p:last'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-3boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-3peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo107.addCallback(ratoli);
            video('#foto13-3boto','apartat13video1.php');
            break;
        case 1070:
            diapo108.tweenTo(0, {onComplete:ratoli});
            break;
        case 108:
            diapo108 = new TimelineMax();
            diapo108.to($('#foto13-3peu'),2,{left:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-3text p:first'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-3text p:last'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-3text'),2,{top:'-220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-3'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-4'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-4text'),2,{top:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-4boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-4peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo108.addCallback(ratoli);
            foto('#foto13-4boto','#foto13-4foto');
            break;
        case 1080:
            diapo109.tweenTo(0, {onComplete:ratoli});
            break;
        case 109:
            diapo109 = new TimelineMax();
            diapo109.to($('#foto13-4peu'),2,{left:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-4text p'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-4text'),2,{top:'-220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-4'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-5'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-5text'),2,{top:'45%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-5boto'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-5peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo109.addCallback(ratoli);
            foto('#foto13-5boto','#foto13-5foto');
            break;
        case 1090:
            diapo110.tweenTo(0, {onComplete:ratoli});
            break;
        case 110:
            diapo110 = new TimelineMax();
            diapo110.to($('#foto13-5peu'),2,{left:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-5boto'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-5text'),2,{top:'-245%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-5'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-6'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-6peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-6peu p'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo110.addCallback(ratoli);
            video('#foto13-6boto','apartat13video2.php');
            break;
        case 1100:
            diapo111.tweenTo(0, {onComplete:ratoli});
            break;
        case 111:
            diapo111 = new TimelineMax();
            diapo111.to($('#foto13-6peu p'),2,{left:'300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-6peu'),2,{left:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-6'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-7'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-7text'),2,{top:'35%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-7peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo111.addCallback(ratoli);
            break;
        case 1110:
            diapo112.tweenTo(0, {onComplete:ratoli});
            break;
        case 112:
            diapo112 = new TimelineMax();
            diapo112.to($('#foto13-7peu'),2,{left:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-7text'),2,{top:'-235%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-7 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-7text2'),2,{top:'35%',ease:Power3.easeInOut},'-=1.8');
            diapo112.addCallback(ratoli);
            break;
        case 1120:
            diapo113.tweenTo(0, {onComplete:ratoli});
            break;
        case 113:
            diapo113 = new TimelineMax();
            diapo113.to($('#foto13-7text2'),2,{top:'-235%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-7'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-8text'),2,{bottom:'20%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8botons'),2,{bottom:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8boto2'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8boto3'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8peu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo113.addCallback(ratoli);
            slider('#foto13-8boto1','#foto13-8fotos1');
            slider('#foto13-8boto2','#foto13-8fotos2');
            video('#foto13-8boto3','apartat13video3.php');
            break;
        case 1130:
            $('#foto13-8video video')[0].pause();
            diapo114.tweenTo(0, {onComplete:ratoli});
            break;
        case 114:
            diapo114 = new TimelineMax();
            diapo114.to($('#foto13-8peu'),2,{left:'150%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8boto1'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8boto2'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8botons'),2,{bottom:'215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8text'),2,{bottom:'220%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8 .tapa'),2,{autoAlpha:'.6',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8video'),2,{top:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo114.addCallback(f109);
            function f109(){
                $('#foto13-8video video')[0].play();
                ratoli();
            }
            $('#foto13-8video video').on('ended',function(){
                passar(110);
            });
            break;
        case 1140:
            diapo115.tweenTo(0, {onComplete:f109});
            break;
        case 115:
            $('#foto13-8video video')[0].pause();
            diapo115 = new TimelineMax();
            diapo115.to($('#foto13-8videopeu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8video'),2,{top:'-100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-8'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-9'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-9text'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-9text p:last'),2,{top:'0',ease:Power3.easeInOut},'-=1.8');
            diapo115.addCallback(ratoli);
            break;
        case 1160:
            diapo111.tweenTo(0, {onComplete:ratoli});
            break;
        case 116:
            diapo116 = new TimelineMax();
            diapo116.to($('#foto13-9text p:first'),2,{top:'-300px',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-9text'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-9 .tapa'),2,{autoAlpha:'.8',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-9text2'),2,{top:'15%',ease:Power3.easeInOut},'-=1.8');
            diapo116.addCallback(ratoli);
            break;
        case 1160:
            $('#foto13-9video video')[0].pause();
            diapo117.tweenTo(0, {onComplete:ratoli});
            break;
        case 117:
            diapo117 = new TimelineMax();
            diapo117.to($('#foto13-9text2'),2,{top:'-215%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-9 .tapa'),2,{autoAlpha:'0',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-9videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo117.addCallback(f112);
            function f112(){
                $('#foto13-9video video')[0].play();
                ratoli();
            }
            break;
        case 1170:
            diapo118.tweenTo(0, {onComplete:f112});
            break;
        case 118:
            $('#foto13-9video video')[0].pause();
            diapo118 = new TimelineMax();
            diapo118.to($('#foto13-9videopeu'),2,{left:'-50%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-9'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-10'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-10text'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8');
            diapo118.addCallback(ratoli);
            break;
        case 1180:
            diapo119.tweenTo(0, {onComplete:ratoli});
            break;
        case 119:
            diapo119 = new TimelineMax();
            diapo119.to($('#foto13-10text'),2,{top:'-130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-10text2'),2,{top:'30%',ease:Power3.easeInOut},'-=1.8');
            diapo119.addCallback(ratoli);
            break;
        case 1190:
            $('#foto13-11video video')[0].pause();
            diapo120.tweenTo(0, {onComplete:ratoli});
            break;
        case 120:
            diapo120 = new TimelineMax();
            diapo120.to($('#foto13-10text2'),2,{top:'-130%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-10'),2,{top:'100%',ease:Power3.easeInOut},'-=1.8')
                .to($('#foto13-11'),2,{top:'0',ease:Power3.easeInOut},'-=2')
                .to($('#foto13-11videopeu'),2,{left:'0',ease:Power3.easeInOut},'-=1.8');
            diapo120.addCallback(f120);
            function f120(){
                $('#foto13-11video video')[0].play();
                ratoli();
            }
            $('#foto13-11video video').on('ended',function(){
                passar(121);
            });
            break;
        case 121:
            $('#foto13-11video video')[0].pause();
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            guardarFinal(2);
            break;
    }
}