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
            case 37:
                passar(38);
                break;
            case 38:
                passar(39);
                break;
            case 39:
                passar(40);
                break;
            case 40:
                passar(41);
                break;
            case 41:
                passar(42);
                break;
            case 42:
                passar(43);
                break;
            case 43:
                passar(44);
                break;
            case 44:
                passar(45);
                break;
            case 45:
                passar(46);
                break;
            case 46:
                passar(47);
                break;
            case 47:
                passar(48);
                break;
            case 48:
                passar(49);
                break;
            case 49:
                passar(50);
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
            case 37:
                passar(360);
                break;
            case 38:
                passar(370);
                break;
            case 39:
                passar(380);
                break;
            case 40:
                passar(390);
                break;
            case 41:
                passar(400);
                break;
            case 42:
                passar(410);
                break;
            case 43:
                passar(420);
                break;
            case 44:
                passar(430);
                break;
            case 45:
                passar(440);
                break;
            case 46:
                passar(450);
                break;
            case 47:
                passar(470);
                break;
            case 48:
                passar(470);
                break;
            case 49:
                passar(480);
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
            diapo20.tweenTo(0, {onComplete:ratoli});
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
            break;
        case 23:
            diapo23 = new TimelineMax();
            diapo23;
            diapo23.addCallback(ratoli);
            break;
        case 230:
            diapo24.tweenTo(0, {onComplete:ratoli});
            break;
        case 24:
            diapo24 = new TimelineMax();
            diapo24;
            diapo24.addCallback(ratoli);
            break;
        case 240:
            diapo25.tweenTo(0, {onComplete:ratoli});
            break;
        case 25:
            diapo25 = new TimelineMax();
            diapo25;
            diapo25.addCallback(ratoli);
            break;
        case 250:
            diapo26.tweenTo(0, {onComplete:ratoli});
            break;
        case 26:
            diapo26 = new TimelineMax();
            diapo26;
            diapo26.addCallback(ratoli);
            break;
        case 260:
            diapo27.tweenTo(0, {onComplete:ratoli});
            break;
        case 27:
            diapo27 = new TimelineMax();
            diapo27;
            diapo27.addCallback(ratoli);
            break;
        case 270:
            diapo28.tweenTo(0, {onComplete:ratoli});
            break;
        case 28:
            diapo28 = new TimelineMax();
            diapo28;
            diapo28.addCallback(ratoli);
            break;
        case 280:
            diapo29.tweenTo(0, {onComplete:ratoli});
            break;
        case 29:
            diapo29 = new TimelineMax();
            diapo29;
            diapo29.addCallback(ratoli);
            break;
        case 290:
            diapo30.tweenTo(0, {onComplete:ratoli});
            break;
        case 30:
            diapo30 = new TimelineMax();
            diapo30;
            diapo30.addCallback(ratoli);
            break;
        case 300:
            diapo31.tweenTo(0, {onComplete:ratoli});
            break;
        case 31:
            diapo31 = new TimelineMax();
            diapo31;
            diapo31.addCallback(ratoli);
            break;
        case 310:
            diapo32.tweenTo(0, {onComplete:ratoli});
            break;
        case 32:
            diapo32 = new TimelineMax();
            diapo32;
            diapo32.addCallback(ratoli);
            break;
        case 320:
            diapo33.tweenTo(0, {onComplete:ratoli});
            break;
        case 33:
            diapo33 = new TimelineMax();
            diapo33;
            diapo33.addCallback(ratoli);
            break;
        case 330:
            diapo34.tweenTo(0, {onComplete:ratoli});
            break;
        case 34:
            diapo34 = new TimelineMax();
            diapo34;
            diapo34.addCallback(ratoli);
            break;
        case 340:
            diapo35.tweenTo(0, {onComplete:ratoli});
            break;
        case 35:
            diapo35 = new TimelineMax();
            diapo35;
            diapo35.addCallback(ratoli);
            break;
        case 350:
            diapo36.tweenTo(0, {onComplete:ratoli});
            break;
        case 36:
            diapo36 = new TimelineMax();
            diapo36;
            diapo36.addCallback(ratoli);
            break;
        case 360:
            diapo37.tweenTo(0, {onComplete:ratoli});
            break;
        case 37:
            diapo37 = new TimelineMax();
            diapo37;
            diapo37.addCallback(ratoli);
            break;
        case 370:
            diapo38.tweenTo(0, {onComplete:ratoli});
            break;
        case 38:
            diapo38 = new TimelineMax();
            diapo38;
            diapo38.addCallback(ratoli);
            break;
        case 380:
            diapo39.tweenTo(0, {onComplete:ratoli});
            break;
        case 39:
            diapo39 = new TimelineMax();
            diapo39;
            diapo39.addCallback(ratoli);
            break;
        case 390:
            diapo40.tweenTo(0, {onComplete:ratoli});
            break;
        case 40:
            diapo40 = new TimelineMax();
            diapo40;
            diapo40.addCallback(ratoli);
            break;
        case 400:
            diapo41.tweenTo(0, {onComplete:ratoli});
            break;
        case 41:
            diapo41 = new TimelineMax();
            diapo41;
            diapo41.addCallback(ratoli);
            break;
        case 410:
            diapo42.tweenTo(0, {onComplete:ratoli});
            break;
        case 42:
            diapo42 = new TimelineMax();
            diapo42;
            diapo42.addCallback(ratoli);
            break;
        case 420:
            diapo43.tweenTo(0, {onComplete:ratoli});
            break;
        case 43:
            diapo43 = new TimelineMax();
            diapo43;
            diapo43.addCallback(ratoli);
            break;
        case 430:
            diapo44.tweenTo(0, {onComplete:ratoli});
            break;
        case 44:
            diapo44 = new TimelineMax();
            diapo44;
            diapo44.addCallback(ratoli);
            break;
        case 440:
            diapo45.tweenTo(0, {onComplete:ratoli});
            break;
        case 45:
            diapo45 = new TimelineMax();
            diapo45;
            diapo45.addCallback(ratoli);
            break;
        case 450:
            diapo46.tweenTo(0, {onComplete:ratoli});
            break;
        case 46:
            diapo46 = new TimelineMax();
            diapo46;
            diapo46.addCallback(ratoli);
            break;
        case 460:
            diapo47.tweenTo(0, {onComplete:ratoli});
            break;
        case 47:
            diapo47 = new TimelineMax();
            diapo47;
            diapo47.addCallback(ratoli);
            break;
        case 470:
            diapo48.tweenTo(0, {onComplete:ratoli});
            break;
        case 48:
            diapo48 = new TimelineMax();
            diapo48;
            diapo48.addCallback(ratoli);
            break;
        case 480:
            diapo49.tweenTo(0, {onComplete:ratoli});
            break;
        case 49:
            diapo49 = new TimelineMax();
            diapo49;
            diapo49.addCallback(ratoli);
            break;
        case 50:
            $('.final').show();
            $('.final').animate({
                'opacity': '1'
            },3000);
            break;
    }
}