var trans = 1200;
var sona=true;
var mutexvideo=false;
var slider1=slider2=slider3=slider4=slider5=false;
var zi=4;
var tecla;

$('#bso').click(function(){
    if(sona){
        $('#audio')[0].pause();
        sona=false;
        console.log('sona: '+sona);
    } else {
        $('#audio')[0].play();
        sona=true;
        console.log('sona: '+sona);
    }
});
function controlMouse(e){
    $('body').off('mousewheel');
    $(document).off( "keydown" );
    if(e.deltaY<0 || e==40){
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
                passar(2000);
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
            case 50:
                passar(51);
                break;
            case 51:
                passar(52);
                break;
            case 2000:
                passar(2001);
                break;
            case 2001:
                passar(2002);
                break;
            case 2002:
                passar(2003);
                break;
            case 2003:
                passar(2004);
                break;
            case 2004:
                passar(15);
                break;
            case 52:
                passar(53);
                break;
            case 53:
                passar(54);
                break;
            case 54:
                passar(55);
                break;
            case 55:
                passar(56);
                break;
            case 56:
                passar(57);
                break;
            case 57:
                passar(58);
                break;
            case 58:
                passar(59);
                break;
            case 59:
                passar(60);
                break;
            case 60:
                passar(61);
                break;
            case 61:
                passar(62);
                break;
            case 62:
                passar(63);
                break;
            case 63:
                passar(64);
                break;
            case 64:
                passar(65);
                break;
            case 65:
                passar(66);
                break;
            case 66:
                passar(67);
                break;
            case 67:
                passar(68);
                break;
            case 68:
                passar(69);
                break;
            case 69:
                passar(70);
                break;
            case 70:
                passar(71);
                break;
            case 71:
                passar(72);
                break;
            case 72:
                passar(73);
                break;
            case 73:
                passar(74);
                break;
            case 74:
                passar(75);
                break;
            case 75:
                passar(76);
                break;
            case 76:
                passar(77);
                break;
            case 77:
                passar(78);
                break;
            case 78:
                passar(79);
                break;
            default :
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
                $(document).keydown(function(e){
                    tecla = e.which;
                    controlMouse(tecla);
                });
        }
    } else if(e.deltaY>0 || e==38) {
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
                passar(20040);
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
                passar(460);
                break;
            case 48:
                passar(470);
                break;
            case 49:
                passar(480);
                break;
            case 50:
                passar(490);
                break;
            case 51:
                passar(500);
                break;
            case 52:
                passar(510);
                break;
            case 2000:
                passar(140);
                break;
            case 2001:
                passar(20000);
                break;
            case 2002:
                passar(20010);
                break;
            case 2003:
                passar(20020);
                break;
            case 2004:
                passar(20030);
                break;
            case 53:
                passar(520);
                break;
            case 54:
                passar(530);
                break;
            case 55:
                passar(540);
                break;
            case 56:
                passar(550);
                break;
            case 57:
                passar(560);
                break;
            case 58:
                passar(570);
                break;
            case 59:
                passar(580);
                break;
            case 60:
                passar(590);
                break;
            case 61:
                passar(600);
                break;
            case 62:
                passar(610);
                break;
            case 63:
                passar(620);
                break;
            case 64:
                passar(630);
                break;
            case 65:
                passar(640);
                break;
            case 66:
                passar(650);
                break;
            case 67:
                passar(660);
                break;
            case 68:
                passar(670);
                break;
            case 69:
                passar(680);
                break;
            case 70:
                passar(690);
                break;
            case 71:
                passar(700);
                break;
            case 72:
                passar(710);
                break;
            case 73:
                passar(720);
                break;
            case 74:
                passar(730);
                break;
            case 75:
                passar(740);
                break;
            case 76:
                passar(750);
                break;
            case 77:
                passar(760);
                break;
            case 78:
                passar(770);
                break;
            case 79:
                passar(780);
                break;
            case 80:
                passar(790);
                break;
            case 81:
                passar(800);
                break;
            case 82:
                passar(810);
                break;
            case 83:
                passar(820);
                break;
            case 84:
                passar(830);
                break;
            case 85:
                passar(840);
                break;
            case 86:
                passar(850);
                break;
            case 87:
                passar(860);
                break;
            default :
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
                $(document).keydown(function(e){
                    tecla = e.which;
                    controlMouse(tecla);
                });
        }
    } else {
        $(document).keydown(function(e){
            tecla = e.which;
            controlMouse(tecla);
        });
    }
    tecla=0;
}
function diapositiva(id){
    switch (id) {
        case 1:
            $('#foto1-1').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#foto1-1text').show();
                animat('#foto1-1text','0','12%');
                animal('#foto1-1peu','300','0');
                $('.scroll').delay('500').animate({
                    'bottom': '1.5%'
                },trans,'swing',function(){            
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                    $(document).keydown(function(e){
                        tecla = e.which;
                        controlMouse(tecla);
                    });
                });
            });
            break;
        case 10:
            animat('#foto1-2text p','0','-300px');
            animat('#foto1-2text','200','-185%');
            animat('#foto1-2','400','100%');
            animat('#foto1-1','400','0');
            animat('#foto1-1text','600','15%');
            animal('#foto1-1peu','800','0');
            animab('.scroll','1000','1.5%');
            break;
        case 11:
            animab('.scroll','0','-10%');
            animal('#foto1-1peu','200','-50%');
            animat('#foto1-1text','400','-212%');
            animat('#foto1-1','600','-100%');
            animat('#foto1-2','600','0');
            animat('#foto1-2text','800','15%');
            animat('#foto1-2text p','1000','0');
            break;
        case 110:
            animal('#foto1-2peu','0','-50%');
            animat('#foto1-2text2','200','-185%');
            animao('#foto1-2 .tapa','400','0');
            animat('#foto1-2text','600','15%');
            animat('#foto1-2text h2','800','0');
            break;
        case 12:
            animat('#foto1-2text h2','0','300px');
            animat('#foto1-2text','200','215%');
            animao('#foto1-2 .tapa','400','.7');
            animat('#foto1-2text2','600','15%');
            animal('#foto1-2peu','800','0');
            break;
        case 120:
            animacol('#foto1-2peu','0','white');
            animat('#foto1-2text3','200','-185%');
            animao('#foto1-2 .tapa','400','.7');
            animat('#foto1-2text2','600','15%');
            break;
        case 13:
            animat('#foto1-2text2','0','215%');
            animao('#foto1-2 .tapa','200','.5');
            animat('#foto1-2text3','400','15%');
            animacol('#foto1-2peu','600','black');
            break;
        case 130:
            animal('#foto1-3peu','0','-50%');
            animat('#foto1-3text p','200','-300px');
            animat('#foto1-3text','400','-178%');
            animat('#foto1-3','600','100%');
            animat('#foto1-2','600','0');
            animat('#foto1-2text3','800','15%');
            animal('#foto1-2peu','1000','0');
            break;
        case 14:
            animal('#foto1-2peu','0','-50%');
            animat('#foto1-2text3','200','215%');
            animat('#foto1-2','400','-100%');
            animat('#foto1-3','400','0');
            animat('#foto1-3text','600','22%');
            animat('#foto1-3text p','800','0');
            animal('#foto1-3peu','1000','0');
            video('#foto1-3play','apartat1video1.html');
            $('#apartat20').load('apartat20.html');
            break;
        case 140:
            animat('#foto20-1text p','0','-300px');
            animat('#foto20-1text','200','-70%');
            $('#foto20-1').delay('400').animate({
                'opacity': '0'
            },trans,'swing',function(){
                $('#apartat20').hide();
            });
            animat('#foto1-3text','600','22%');
            animat('#play1-3','800','0');
            animal('#foto1-3peu','1000','0');
            break;
        case 15:
            $('#apartat2').show();
            animat('#foto20-4text','0','140%');
            animat('#foto20-4','200','100%');
            animat('#foto2-1','200','0');
            animat('#foto2-1text','400','40%');
            animal('#foto2-1peu','600','0');
            break;
        case 150:
            $('#foto2-1').show();
            animab('#foto2-2text','0','108%');
            animao('#foto2-2peu','200','0');
            animao('#foto2-2','400','0');
            animat('#foto2-1text','600','40%');
            break;
        case 16:
            animat('#foto2-1text','0','140%');
            animao('#foto2-2','200','1');
            $('#foto2-2peu').delay('400').animate({
                'opacity': '1'
            },trans,'swing',function(){
                $('#foto2-1').hide();
            });
            animab('#foto2-2text','600','8%');
            break;
        case  160:
            animal('#foto2-3peu','0','-50%');
            animab('#foto2-3text','200','108%');
            animat('#foto2-3','400','-100%');
            animat('#foto2-2','400','0');
            animab('#foto2-2text','600','8%');
            animal('#foto2-2peu','800','0');
            break;
        case 17:
            animab('#foto2-2text','0','-92%');
            animal('#foto2-2peu','200','-50%');
            animat('#foto2-2','400','100%');
            animat('#foto2-3','400','0');
            animab('#foto2-3text','600','8%');
            animal('#foto2-3peu','800','0');
            break;
        case 170:
            animal('#foto2-4peu','0','-50%');
            animat('#foto2-4text','200','-70%');
            animat('#foto2-4','400','-100%');
            animat('#foto2-3','400','0');
            animab('#foto2-3text','600','8%');
            animal('#foto2-3peu','800','0');
            break;
        case 18:
            animal('#foto2-3peu','0','-50%');
            animab('#foto2-3text','200','-92%');
            animat('#foto2-3','400','100%');
            animat('#foto2-4','400','0');
            animat('#foto2-4text','600','30%');
            animal('#foto2-4peu','800','0');
            break;
        case 180:
            animal('#foto2-5peu','0','-50%');
            animat('#foto2-5text h3','200','-300px');
            animat('#foto2-5text','400','-70%');
            animat('#foto2-5','600','-100%');
            animat('#foto2-4','600','0');
            animat('#foto2-4text','800','30%');
            animal('#foto2-4peu','1000','0');
            break;
        case 19:
            animal('#foto2-4peu','0','-50%');
            animat('#foto2-4text','200','130%');
            animat('#foto2-4','400','100%');
            animat('#foto2-5','400','0');
            animat('#foto2-5text','600','30%');
            animat('#foto2-5text h3','800','0');
            animal('#foto2-5peu','1000','0');
            $('#apartat3').load('apartat3.html');
            break;
        case 190:
            animab('#foto3-1peu','0','-50%');
            animat('#foto3-1text','200','155%');
            $('#foto3-1').delay('400').animate({
                'left': '-100%'
            },trans,'swing',function(){
                $('#apartat3').hide();
            });
            animal('#foto2-5','400','0');
            animat('#foto2-5text','600','30%');
            animat('#foto2-5boto','800','0');
            animal('#foto2-5peu','1000','0');
            break;
        case 20:
            $('#apartat3').show();
            animal('#foto2-5peu','0','-50%');
            animat('#foto2-5boto','200','300px');
            animat('#foto2-5text','400','130%');
            animal('#foto2-5','600','100%');
            animal('#foto3-1','600','0');
            animat('#foto3-1text','800','55%');
            animab('#foto3-1peu','1000','10px');
            break;
        case 200:
            animal('#foto3-2peu p','0','-300px');
            animal('#foto3-2peu','200','-50%');
            animat('#foto3-2text','400','-180%');
            animat('#foto3-2','600','100%');
            animat('#foto3-1','600','0');
            animat('#foto3-1text','800','55%');
            animab('#foto3-1peu','1000','10px');
            break;
        case 21:
            animab('#foto3-1peu','0','-150%');
            animat('#foto3-1text','200','-45%');
            animat('#foto3-1','400','-100%');
            animat('#foto3-2','400','0');
            animat('#foto3-2text','600','20%');
            animal('#foto3-2peu','800','0');
            animal('#foto3-2peu p','1000','0');
            video('#foto3-2play','apartat3video1.html');
            break;
        case 210:
            $('#foto3-3 video')[0].pause();
            animat('#foto3-3','0','100%');
            animat('#foto3-2','0','0');
            animat('#foto3-2text','200','20%');
            animal('#foto3-2peu','400','0');
            animal('#foto3-2peu p','600','0');
            break;
        case 22:
            animal('#foto3-2peu p','0','-300px');
            animal('#foto3-2peu','200','-50%');
            animat('#foto3-2text','400','220%');
            animat('#foto3-2','600','-100%');
            $('#foto3-3').delay('600').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#foto3-3 video')[0].play();
            });
            $('#foto3-3 video').on('ended',function(){
                pos=23;
                diapositiva(23);
            });
            break;
        case 220:
            animal('#foto3-4peu','0','-50%');
            animat('#foto3-4text h3','200','-300px');
            animat('#foto3-4text','400','-185%');
            animat('#foto3-4','600','100%');
            $('#foto3-3').delay('600').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#foto3-3 video')[0].play();
            });
            break;
        case 23:
            $('#foto3-3 video')[0].pause();
            animat('#foto3-3','0','-100%');
            animat('#foto3-4','0','0');
            animat('#foto3-4text','200','15%');
            animat('#foto3-4text h3','400','0');
            animal('#foto3-4peu','600','0');
            video('#foto3-4play','apartat3video2.html');
            break;
        case 230:
            $('#foto3-5 img').animate({
                'top': '-180%',
                'left': '-180%',
                rotate: '90deg'
            },trans,'swing');
            animal('#foto3-5peu','200','-50%');
            animat('#foto3-5text','400','-185%');
            animat('#foto3-5','600','100%');
            animat('#foto3-4','600','0');
            animat('#foto3-4text','800','15%');
            animat('#play3-4','1000','0');
            animal('#foto3-4peu','1100','0');
            break;
        case 24:
            animal('#foto3-4peu','0','-50%');
            animat('#play3-4','200','300px');
            animat('#foto3-4text','400','215%');
            animat('#foto3-4','600','-100%');
            animat('#foto3-5','600','0');
            animat('#foto3-5text','800','15%');
            animal('#foto3-5peu','1000','0');
            $('#foto3-5 img').rotate('90deg');
            $('#foto3-5 img').delay('1100').animate({
                'top': '15%',
                'left': '0',
                rotate: '10deg'
            },trans,'swing');
            $('#apartat4').load('apartat4.html');
            break;
        case 240:
            animat('#foto4-1text','0','120%');            
            $('#foto4-1').delay('200').animate({
                'left': '100%'
            },trans,'swing',function(){
                $('#apartat4').hide();
            });
            animal('#foto3-5','200','0');
            animat('#foto3-5text','400','15%');
            animal('#foto3-5peu','600','0');
            $('#foto3-5 img').delay('800').animate({
                'top': '15%',
                'left': '0',
                rotate: '10deg'
            },trans,'swing');
            break;
        case 25:
            $('#apartat4').show();
            $('#foto3-5 img').animate({
                'top': '115%',
                'left': '180%',
                rotate: '-40deg'
            },trans,'swing');
            animal('#foto3-5peu','200','-50%');
            animat('#foto3-5text','400','115%');
            animal('#foto3-5','600','-100%');
            animal('#foto4-1','600','0');
            animat('#foto4-1text','800','20%');
            break;
        case 250:
            animal('#foto4-2peu','0','-50%');
            $('#foto4-2foto').delay('200').animate({
                'top': '-100%',
                'left': '200%',
                rotate: '-90deg'
            },trans,'swing');
            animat('#play4-2','400','300px');
            animat('#foto4-2text p','600','300px');
            animat('#foto4-2text','800','115%');
            animao('#foto4-1 img','1000','1');
            animat('#foto4-1text','1200','20%');
            break;
        case 26:
            animat('#foto4-1text','0','-180%');
            animao('#foto4-1 img','200','.5');
            animat('#foto4-2text','400','15%');
            animat('#foto4-2text p','600','0');
            animat('#play4-2','800','0');
            $('#foto4-2foto').rotate('-90deg');
            $('#foto4-2foto').delay('1000').animate({
                'top': '15%',
                'left': '0',
                rotate: '10deg'
            },trans,'swing');
            animal('#foto4-2peu','1200','0');
            video('#foto4-2play','apartat4video1.html');
            break;
        case 260:
            animal('#foto4-3peu','0','-50%');
            animab('#foto4-3text','200','-215%');
            animat('#foto4-3','400','-100%');
            animat('#foto4-1','400','0');
            animat('#foto4-2text','600','15%');
            animat('#foto4-2text p','800','0');
            animat('#foto4-2text h2','1000','0');
            $('#foto4-2foto').delay('2200').animate({
                'top': '15%',
                'left': '0',
                rotate: '10deg'
            },trans,'swing');
            animal('#foto4-2peu','1400','0');
            break;
        case 27:
            animal('#foto4-2peu','0','-50%');
            $('#foto4-2foto').delay('200').animate({
                'top': '180%',
                'left': '180%',
                rotate: '-90deg'
            },trans,'swing');
            animat('#foto4-2text h2','400','-300px');
            animat('#foto4-2text p','600','-300px');
            animat('#foto4-2text','800','-185%');
            animat('#foto4-1','1000','100%');
            animat('#foto4-3','1000','0');
            animab('#foto4-3text','1200','15%');
            animal('#foto4-3peu','1400','0');
            break;
        case 270:
            animal('#foto4-4peu','0','-50%');
            animat('#play4-43','200','300px');
            animat('#play4-42','300','300px');
            animat('#play4-41','400','300px');
            animat('#foto4-4text','500','215%');
            animat('#foto4-4','700','-100%');
            animat('#foto4-3','700','0');
            animab('#foto4-3text','900','15%');
            animal('#foto4-3peu','1100','0');
            break;
        case 28:
            animal('#foto4-3peu','0','-50%');
            animab('#foto4-3text','200','215%');
            animat('#foto4-3','400','100%');
            animat('#foto4-4','400','0');
            animat('#foto4-4text','600','15%');
            animat('#play4-41','700','0');
            animat('#play4-42','800','0');
            animat('#play4-43','900','0');
            animal('#foto4-4peu','1100','0');
            video('#foto4-41play','apartat4video2.html');
            video('#foto4-42play','apartat4video3.html');
            video('#foto4-43play','apartat4video4.html');
            $('#foto4-4text span').click(function(){
                $('body').append("<div id='mesinfo'><div>");
                $('body').off('mousewheel');
                $(document).off( "keydown" );
                $.ajax({
                    url: "mesinfo.html",
                    context: document.body
                }).done(function(data) {
                    $('#mesinfo').html(data);
                    $('#zonaactiva').click(function(){
                        $('#zonaactiva').off('click');
                        $('#mesinfo').remove();
                        $('body').on('mousewheel',function(e){
                            controlMouse(e);
                        });
                        $(document).keydown(function(e){
                            tecla = e.which;
                            controlMouse(tecla);
                        });
                    });
                }).error(function(e){
                    console.log(e);
                });
            });
            $('#apartat5').load('apartat5.html');
            break;
        case 280:
            animal('#foto5-1peu','0','-50%');
            animat('#foto5-1text h2','200','300px');
            animat('#foto5-1text','400','225%');
            $('#foto5-1').delay('600').animate({
                'top': '-100%'
            },trans,'swing',function(){
                $('#apartat5').hide();
            });
            animat('#foto4-4','600','0');
            animat('#foto4-4text','800','15%');
            animat('#play4-42','900','0');
            animat('#play4-41','1000','0');
            animat('#foto4-4text p','1100','0');
            animal('#foto4-4peu','1200','0');
            break;
        case 29:
            $('#apartat5').show();
            animal('#foto4-4peu','0','-50%');
            animat('#foto4-4text p','200','-300px');
            animat('#play4-41','300','-300px');
            animat('#play4-42','400','-300px');
            animat('#foto4-4text','500','-215%');
            animat('#foto4-4','600','100%');
            animat('#foto5-1','600','0');
            animat('#foto5-1text','800','25%');
            animat('#foto5-1text h2','1000','0');
            animal('#foto5-1peu','1200','0');
            break;
        case 290:
            animal('#foto5-2peu','0','-50%');
            animat('#foto5-2boto','200','300px');
            animat('#foto5-2text','400','240%');
            animat('#foto5-2','600','-100%');
            animat('#foto5-1','600','0');
            animat('#foto5-1text','800','25%');
            animat('#foto5-1text p','1000','0');
            animal('#foto5-1peu','1200','0');
            break;
        case 30:
            animal('#foto5-1peu','0','-50%');
            animat('#foto5-1text p','200','-300px');
            animat('#foto5-1text','400','-275%');
            animat('#foto5-1','600','100%');
            animat('#foto5-2','600','0');
            animat('#foto5-2text','800','40%');
            animat('#foto5-2boto','1000','0');
            animal('#foto5-2peu','1200','0');
            slider('#foto5-2boto','#foto5-2fotos',slider1);
            break;
        case 300:
            animal('#foto5-3peu','0','-50%');
            animat('#foto5-3boto','200','300px');
            animat('#foto5-3text','400','210%');
            animat('#foto5-3','600','-100%');
            animat('#foto5-2','600','0');
            animat('#foto5-2text','800','40%');
            animat('#foto5-2text p','1000','0');
            animal('#foto5-2peu','1200','0');
            break;
        case 31:
            animal('#foto5-2peu','0','-50%');
            animat('#foto5-2text p','200','-300px');
            animat('#foto5-2text','400','-260%');
            animat('#foto5-2','600','100%');
            animat('#foto5-3','600','0');
            animat('#foto5-3text','800','10%');
            animat('#foto5-3boto','1000','0');
            animal('#foto5-3peu','1200','0');
            break;
        case 310:
            animal('#foto5-4peu','0','-50%');
            animat('#foto5-4boto2','200','300px');
            animat('#foto5-4boto1','400','300px');
            animat('#foto5-4text','600','215%');
            animat('#foto5-4','800','-100%');
            animat('#foto5-3','800','0');
            animat('#foto5-3text','1000','10%');
            animat('#foto5-3text h3','1200','0');
            animal('#foto5-3peu','1400','0');
            break;
        case 32:
            animal('#foto5-3peu','0','-50%');
            animat('#foto5-3text h3','200','-300px');
            animat('#foto5-3text','400','-290%');
            animat('#foto5-3','600','100%');
            animat('#foto5-4','600','0');
            animat('#foto5-4text','800','15%');
            animat('#foto5-4boto1','1000','0');
            animat('#foto5-4boto2','1200','0');
            animal('#foto5-4peu','1400','0');
            video('#foto5-4boto2','apartat5video1.html');
            break;
        case 320:
            animat('#foto5-5boto','0','300px');
            animat('#foto5-5text','200','115%');
            $('#foto5-5').delay('400').animate({
                'opacity': '0'
            },trans,'swing',function(){
                $('#foto5-5').hide();
            });
            animat('#foto5-4text','600','15%');
            animat('#foto5-4boto1','800','0');
            animat('#foto5-4text h3','1000','0');
            animal('#foto5-4peu','1200','0');
            break;
        case 33:
            $('#foto5-5').show();
            animal('#foto5-4peu','0','-50%');
            animat('#foto5-4text h3','200','-300px');
            animat('#foto5-4boto1','400','-300px');
            animat('#foto5-4text','600','-85%');
            animao('#foto5-5','800','1');
            animat('#foto5-5text','1000','15%');
            animat('#foto5-5boto','1200','0');
            video('#foto5-5boto','apartat5video2.html');
            $('#apartat6').load('apartat6.html');
            break;
        case 330:
            animat('#foto6-1text','0','-80%');
            $('#foto6-1').delay('200').animate({
                'left': '100%'
            },trans,'swing',function(){
                $('#apartat6').hide();
            });
            animal('#foto5-5','200','0');
            animat('#foto5-5text','400','15%');
            animat('#foto5-5text p','600','0');
            break;
        case 34:
            $('#apartat6').show();
            animat('#foto5-5text p','0','-300px');
            animat('#foto5-5text','200','-85%');
            animal('#foto5-5','400','-100%');
            animal('#foto6-1','400','0');
            animat('#foto6-1text','600','20%');
            break;
        case 340:
            animat('#foto6-2text','0','-80%');
            animao('#foto6-2','200','0');
            animat('#foto6-1text','400','20%');
            break;
        case 35:
            animat('#foto6-1text','0','120%');
            animao('#foto6-2','200','1');
            animat('#foto6-2text','400','20%');
            break;
        case 350:
            animat('#foto6-3text','0','-190%');
            animat('#foto6-3','200','100%');
            animat('#foto6-2','200','0');
            animat('#foto6-2text','400','20%');
            break;
        case 36:
            animat('#foto6-2text','0','220%');
            animat('#foto6-2','200','-100%');
            animat('#foto6-3','200','0');
            animat('#foto6-3text','400','10%');
            animal('#foto6-3peu','600','0');
            break;
        case 360:
            $('#foto6-4 video')[0].pause();
            animal('#foto6-4peu','0','-50%');
            animat('#foto6-4','200','100%');
            animat('#foto6-3','200','0');
            animat('#foto6-3text','400','10%');
            animal('#foto6-3peu','600','0');
            break;
        case 37:
            animal('#foto6-3peu','0','-50%');
            animat('#foto6-3text','200','210%');
            animat('#foto6-3','400','-100%');
            $('#foto6-4').delay('400').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#foto6-4 video')[0].play();
            });
            animal('#foto6-4peu','600','0');
            $('#foto6-4 video').on('ended',function(){
                pos=38;
                diapositiva(38);
            });
            break;
        case 370:
            animal('#foto6-5peu','0','-50%');
            animat('#foto6-5text p','200','-300px');
            animat('#foto6-5text','400','-180%');
            animat('#foto6-5','600','100%');
            $('#foto6-4').delay('600').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#foto6-4 video')[0].play();
            });
            animal('#foto6-4peu','800','0');
            break;
        case 38:
            $('#foto6-4 video')[0].pause();
            animal('#foto6-4peu','0','-50%');
            animat('#foto6-4','200','-100%');
            animat('#foto6-5','200','0');
            animat('#foto6-5text','400','20%');
            animat('#foto6-5text p','600','0');
            animal('#foto6-5peu','800','0');
            slider('#foto6-5boto','#foto6-5fotos',slider5);
            break;
        case 380:
            animat('#foto6-6text','0','-185%');
            animat('#foto6-6','200','100%');
            animat('#foto6-5','200','0');
            animat('#foto6-5text','400','20%');
            animal('#foto6-5peu','600','0');
            break;
        case 39:
            animal('#foto6-5peu','0','-50%');
            animat('#foto6-5boto','200','300px');
            animat('#foto6-5text','400','220%');
            animat('#foto6-5','600','-100%');
            animat('#foto6-6','600','0');
            animat('#foto6-6text','800','15%');
            break;
        case 390:
            animal('#foto6-7peu','0','105%');
            animat('#foto6-7text','200','-170%');
            animat('#foto6-7','400','100%');
            animat('#foto6-6','400','0');
            animat('#foto6-6text','600','15%');
            break;
        case 40:
            animat('#foto6-6text','0','115%');
            animat('#foto6-6','200','-100%');
            animat('#foto6-7','200','0');
            animat('#foto6-7text','400','30%');
            animal('#foto6-7peu','600','0');
            break;
        case 400:
            animal('#foto6-71','0','0');
            animal('#foto6-72','0','0');
            break;
        case 41:
            animal('#foto6-71','0','-100%');
            animal('#foto6-72','0','0');
            break;
        case 410:
            animal('#foto6-8peu','0','105%');
            animat('#foto6-8text h3','200','-300px');
            animat('#foto6-8boto1','400','-300px');
            animat('#foto6-8boto2','600','-300px');
            animat('#foto6-8text','800','-180%');
            animat('#foto6-8','1000','100%');
            animat('#foto6-7','1000','0');
            animat('#foto6-7text','1200','30%');
            animal('#foto6-7peu','1400','0');
            break;
        case 42:
            animal('#foto6-7peu','0','105%');
            animat('#foto6-7text','200','130%');
            animat('#foto6-7','400','-100%');
            animat('#foto6-8','400','0');
            animat('#foto6-8text','600','20%');
            animat('#foto6-8boto2','800','0');
            animat('#foto6-8boto1','1000','0');
            animat('#foto6-8text h3','1200','0');
            animal('#foto6-8peu','1400','0');
            slider('#foto6-8boto1','#foto6-8fotos',slider2);
            foto('#foto6-8boto3','#foto6-8foto');
            break;
        case 420:
            animal('#foto6-9peu','0','105%');
            animat('#foto6-9text p','200','-300px');
            animat('#foto6-9text','400','-175%');
            animat('#foto6-9','600','100%');
            animat('#foto6-8','600','0');
            animat('#foto6-8text','800','20%');
            animat('#foto6-8boto1','1000','0');
            animat('#foto6-8boto2','1200','0');
            animat('#foto6-8boto3','1400','0');
            animal('#foto6-8peu','1600','105%');
            break;
        case 43:
            animal('#foto6-8peu','0','105%');
            animat('#foto6-8boto3','200','300px');
            animat('#foto6-8boto2','400','300px');
            animat('#foto6-8boto1','600','300px');
            animat('#foto6-8text','800','120%');
            animat('#foto6-8','1000','-100%');
            animat('#foto6-9','1000','0');
            animat('#foto6-9text','1200','25%');
            animat('#foto6-9text p','1400','0');
            animal('#foto6-9peu','1600','0');
            slider('#foto6-9boto','#foto6-9fotos',slider3);
            $('#apartat7').load('apartat7.html');
            break;
        case 430:
            $('#foto7-1 video')[0].pause();
            animat('#foto7-1text p','0','-300px');
            animat('#foto7-1text','200','-80%');
            $('#foto7-1').delay('400').animate({
                'left': '-100%'
            },trans,'swing',function(){
                $('#apartat7').hide();
            });
            animal('#foto6-9','400','0');
            animat('#foto6-9text','600','25%');
            animat('#foto6-9boto','800','0');
            animal('#foto6-9peu','1000','0');
            break;
        case 44:
            $('#apartat7').show();
            animal('#foto6-9peu','0','105%');
            animat('#foto6-9boto','200','300px');
            animat('#foto6-9text','400','125%');
            animal('#foto6-9','600','100%');
            animal('#foto7-1','600','0');
            animat('#foto7-1text','800','20%');
            animat('#foto7-1text p','1000','0');
            break;
        case 440:
            animat('#foto7-2text','0','-80%');
            animat('#foto7-1text','200','20%');
            animat('#foto7-1text h2','400','0');
            break;
        case 45:
            animat('#foto7-1text h2','0','300px');
            animat('#foto7-1text','200','120%');
            animat('#foto7-2text','400','20%');
            $('#foto7-1 video')[0].play();
            break;
        case 450:
            animat('#foto7-3text','0','-70%');
            animat('#foto7-3','200','-100%');
            animat('#foto7-1','200','0');
            animat('#foto7-2text','400','20%');
            $('#foto7-1 video')[0].play();
            break;
        case 46:
            $('#foto7-1 video')[0].pause();
            animat('#foto7-2text','0','120%');
            animat('#foto7-1','200','100%');
            animat('#foto7-3','200','0');
            animat('#foto7-3text','400','30%');
            break;
        case 460:
            animat('#foto7-4text','0','-80%');
            animat('#foto7-4','200','-100%');
            animat('#foto7-3','200','0');
            animat('#foto7-3text','400','30%');
            break;
        case 47:
            animat('#foto7-3text','0','130%');
            animat('#foto7-3','200','100%');
            animat('#foto7-4','200','0');
            animat('#foto7-4text','400','20%');
            break;
        case 470:
            animat('#foto7-5text p','0','-300px');
            animat('#foto7-5text','200','-80%');
            animat('#foto7-5','400','-100%');
            animat('#foto7-4','400','0');
            animat('#foto7-4text','600','20%');
            break;
        case 48:
            animat('#foto7-4text','0','120%');
            animat('#foto7-4','200','100%');
            animat('#foto7-5','200','0');
            animat('#foto7-5text','400','20%');
            animat('#foto7-5text p','600','0');
            slider('#foto7-5boto','#foto7-5fotos',slider4);
            break;
        case 480:
            animat('#foto7-6text p','0','-300px');
            animat('#foto7-6text','200','-80%');
            animat('#foto7-6','400','-100%');
            animat('#foto7-5','400','0');
            animat('#foto7-5text','600','20%');
            animat('#foto7-5boto','800','0');
            break;
        case 49:
            animat('#foto7-5boto','0','300px');
            animat('#foto7-5text','200','120%');
            animat('#foto7-5','400','100%');
            animat('#foto7-6','400','0');
            animat('#foto7-6text','600','20%');
            animat('#foto7-6text p','800','0');
            break;
        case 490:
            animat('#foto7-7text p','0','-300px');
            animat('#foto7-7text i','200','-300px');
            animat('#foto7-7text','400','-90%');
            $('#foto7-7').delay('600').animate({
                'opacity': '0'
            },trans,'swing',function(){
                $('#foto7-7').hide();
            });
            animat('#foto7-6text','800','20%');
            animat('#foto7-6text h2','1000','0');
            break;
        case 50:
            $('#foto7-7').show();
            animat('#foto7-6text h2','0','300px');
            animat('#foto7-6text','200','120%');
            animao('#foto7-7','400','1');
            animat('#foto7-7text','600','10%');
            animat('#foto7-7text i','800','0');
            animat('#foto7-7text p','1000','0');
            break;
        case 500:
            animat('#foto7-8text p','0','-300px');
            animat('#foto7-8text','200','-70%'); 
            $('#foto7-8').delay('400').animate({
                'opacity': '0'
            },trans,'swing',function(){
                $('#foto7-8').hide();
            });
            animat('#foto7-7text','600','10%');
            animat('#foto7-7text i','800','0');
            animat('#foto7-7boto','1000','0');
            break;
        case 51:
            $('#foto7-8').show();
            animat('#foto7-7boto','0','300px');
            animat('#foto7-7text i','200','300px');
            animat('#foto7-7text','400','110%');
            animao('#foto7-8','600','1');
            animat('#foto7-8text','800','30%');
            animat('#foto7-8text p','1000','0');
            video('#foto7-8boto','apartat7video1.html');
            break;
        case 510:
            animat('#foto7-9text p:first','0','-300px');
            animat('#foto7-9text p:last','200','-300px');
            animat('#foto7-9boto1','400','-300px');
            animat('#foto7-9text','600','-75%');
            animat('#foto7-9','800','-100%');
            animat('#foto7-8','800','0');
            animat('#foto7-8text','1000','30%');
            animat('#foto7-8boto','1200','0');
            break;
        case 52:
            animat('#foto7-8boto','0','300px');
            animat('#foto7-8text','200','130%');
            animat('#foto7-8','400','100%');
            animat('#foto7-9','400','0');
            animat('#foto7-9text','600','25%');
            animat('#foto7-9boto1','800','0');
            animat('#foto7-9text p:last','1000','0');
            animat('#foto7-9text p:first','1200','0');
            video('#foto7-9boto1','apartat7video2.html');
            $('#apartat8').load('apartat8.html');
            break;
        case 2000:
            $('#apartat20').show();
            animat('#play1-3','0','300px');
            animat('#foto1-3text','200','222%');
            animal('#foto1-3peu','400','-50%');
            animao('#foto20-1','600','1');
            animat('#foto20-1text','800','30%');
            animat('#foto20-1text p','1000','0');
            break;
        case 20000:
            animat('#foto20-2text p','0','-300px');
            animat('#foto20-2text','200','-75%');
            animao('#foto20-2','400','0');
            animat('#foto20-1text','600','30%');
            animat('#foto20-1text h2','800','0');
            break;
        case 2001:
            animat('#foto20-1text h2','0','300px');
            animat('#foto20-1text','200','130%');
            animao('#foto20-2','400','1');
            animat('#foto20-2text','600','25%');
            animat('#foto20-2text p','800','0');
            video('#foto20-2boto','apartat20video1.html');
            break;
        case 20010:
            animat('#foto20-2text2','0','-75%');
            animat('#foto20-2text','200','25%');
            animat('#foto20-2boto','400','0');
            break;
        case 2002:
            animat('#foto20-2boto','0','300px');
            animat('#foto20-2text','200','125%');
            animat('#foto20-2text2','400','25%');
            break;
        case 20020:
            animal('#foto20-3peu','0','-50%');
            animat('#foto20-3text p','200','-300px');
            animat('#foto20-3text','400','-60%');
            animat('#foto20-3','600','-100%');
            animat('#foto20-2','600','0');
            animat('#foto20-2text2','800','25%');
            break;
        case 2003:
            animat('#foto20-2text2','0','125%');
            animat('#foto20-2','200','100%');
            animat('#foto20-3','200','0');
            animat('#foto20-3text','400','40%');
            animat('#foto20-3text p','600','0');
            animal('#foto20-3peu','800','0');
            break;
        case 20030:
            animat('#foto20-4text','0','-60%');
            $('#foto20-4').delay('200').animate({
                'opacity': '0'
            },trans,'swing',function(){
                $('#foto20-4').hide();
            });
            animat('#foto20-3text','400','40%');
            animat('#foto20-3text h2','600','0');
            animal('#foto20-3peu','800','0');
            break;
        case 2004:
            $('#foto20-4').show();
            animal('#foto20-3peu','0','-50%');
            animat('#foto20-3text h2','200','300px');
            animat('#foto20-3text','400','140%');
            animao('#foto20-4','600','1');
            animat('#foto20-4text','800','40%');
            $('#apartat2').load('apartat2.html');
            break;
        case 20040:
            animal('#foto2-1peu','0','-50%');
            animat('#foto2-1text','200','-60%');
            animat('#foto2-1','400','-100%');
            $('#foto20-4').delay('400').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#apartat2').hide();
            });
            animat('#foto20-4text','600','40%');
            break;
        case 520:
            animal('#foto8-1peu','0','-50%');
            animat('#foto8-1text h2','200','-300px');
            animat('#foto8-1text','400','-65%');
            animat('#foto8-1','600','-100%');
            animat('#foto7-9','600','0');
            animat('#foto7-9text','800','25%');
            animat('#foto7-9text p:last','1000','0');
            animat('#foto7-9boto1','1200','0');
            $('#foto7-9boto2').delay('1400').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#apartat8').hide();
            });
            break;
        case 53:
            $('#apartat8').show();
            animat('#foto7-9boto2','0','300px');
            animat('#foto7-9boto1','200','300px');
            animat('#foto7-9text p:last','400','300px');
            animat('#foto7-9text','600','125%');
            animat('#foto7-9','800','100%');
            animat('#foto8-1','800','0');
            animat('#foto8-1text','1000','35%');
            animat('#foto8-1text h2','1200','0');
            animal('#foto8-1peu','1400','0');
            video('#foto8-1boto','apartat8video1.html');
            break;
        case 530:
            animal('#foto8-2peu','0','-50%');
            animat('#foto8-2text p','200','-300px');
            animat('#foto8-2boto1','400','-300px');
            animat('#foto8-2text','600','-180%');
            animat('#foto8-2','800','100%');
            animat('#foto8-1','800','0');
            animat('#foto8-1text','1000','35%');
            animat('#foto8-1boto','1200','0');
            animal('#foto8-1peu','1400','0');
            break;
        case 54:
            animal('#foto8-1peu','0','-50%');
            animat('#foto8-1boto','200','300px');
            animat('#foto8-1text','400','235%');
            animat('#foto8-1','600','-100%');
            animat('#foto8-2','600','0');
            animat('#foto8-2text','800','20%');
            animat('#foto8-2boto1','1000','0');
            animat('#foto8-2text p','1200','0');
            animal('#foto8-2peu','1400','0');
            foto('#foto8-2boto2','#foto8-2foto');
            break;
        case 540:
            var pausa=0;
            $('#foto8-3fotos .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80%',
                    'left':'-80%'
                },trans);
                pausa+=150;
            });
            animat('#foto8-3text','600','-80%');
            animao('#foto8-3','800','0');
            animat('#foto8-2text','1000','20%');
            animat('#foto8-2boto1','1200','0');
            animat('#foto8-2boto2','1400','0');
            $('#foto8-2peu').delay('1600').animate({
                'left': '0'
            },trans,'swing',function(){
                $('#foto8-3').hide();
                $('#foto8-3fotos').hide();
            });
            break;
        case 55:
            $('#foto8-3').show();
            $('#foto8-3fotos').show();
            animal('#foto8-2peu','0','-50%');
            animat('#foto8-2boto2','200','300px');
            animat('#foto8-2boto1','400','300px');
            animat('#foto8-2text','800','120%');
            animao('#foto8-3','1000','1');
            animat('#foto8-3text','1200','20%');
            var angle=5;
            var posi=45;
            var pausa=1400;
            $('#foto8-3fotos .f').rotate('40deg');
            $('#foto8-3fotos .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'15%',
                    'left':posi+'%',
                    rotate: angle+'deg'
                },trans);
                angle-=3;
                posi+=5;
                pausa+=150;
            });
            $('#foto8-3fotos .f').click(function(){
                $(this).css('z-index',zi);
            });
            break;
        case 550:
            $('#foto8-3').show();
            $('#foto8-3fotos').show();
            animal('#foto8-4peu','0','-50%');
            animat('#foto8-4text p','200','-300px');
            animat('#foto8-4boto1','400','-300px');
            animat('#foto8-4text','600','-180%');
            animat('#foto8-4','800','100%');
            animat('#foto8-3text','1000','20%');
            var angle=5;
            var posi=45;
            var pausa=1200;
            $('#foto8-3fotos .f').rotate('40deg');
            $('#foto8-3fotos .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'15%',
                    'left':posi+'%',
                    rotate: angle+'deg'
                },trans);
                angle-=3;
                posi+=5;
                pausa+=150;
            });
            break;
        case 56:
            var pausa=0;
            $('#foto8-3fotos .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-80%',
                    'left':'180%'
                },trans);
                pausa+=150;
            });
            animat('#foto8-3text','600','220%');
            animat('#foto8-4','800','0');
            animat('#foto8-4text','1000','20%');
            animat('#foto8-4boto1','1200','0');
            animat('#foto8-4text p','1400','0');
            $('#foto8-4peu').delay('1600').animate({
                'left': '0'
            },trans,'swing',function(){
                $('#foto8-3').hide();
                $('#foto8-3fotos').hide();
            });
            video('#foto8-4boto2','apartat8video2.html');
            break;
        case 560:
            animal('#foto8-5','0','100%');
            animal('#foto8-4','0','0');
            animat('#foto8-4text','200','20%');
            animat('#foto8-4boto1','400','0');
            animat('#foto8-4boto2','600','0');
            break;
        case 57:
            animat('#foto8-4boto2','0','300px');
            animat('#foto8-4boto1','200','300px');
            animat('#foto8-4text','400','120%');
            animal('#foto8-4','600','-100%');
            animal('#foto8-5','600','0');
            break;
        case 570:
            animal('#foto8-5','0','0');
            animal('#foto8-6','0','100%');
            break;
        case 58:
            animal('#foto8-5','0','-100%');
            animal('#foto8-6','0','0');
            break;
        case 580:
            animal('#foto8-6','0','0');
            animal('#foto8-7','0','100%');
            break;
        case 59:
            animal('#foto8-6','0','-100%');
            animal('#foto8-7','0','0');
            break;
        case 590:
            animal('#foto8-7','0','0');
            animal('#foto8-8','0','100%');
            break;
        case 60:
            animal('#foto8-7','0','-100%');
            animal('#foto8-8','0','0');
            break;
        case 600:
            animat('#foto8-9boto2','0','300px');
            animat('#foto8-9boto1','200','300px');
            animat('#foto8-9text','400','120%');
            animat('#foto8-9','600','100%');
            animat('#foto8-8','600','0');
            animal('#foto8-4peu','800','0');
            break;
        case 61:
            animal('#foto8-4peu','0','-50%');
            animat('#foto8-8','200','-100%');
            animat('#foto8-9','200','0');
            animat('#foto8-9text','400','20%');
            animat('#foto8-9boto1','600','0');
            $('#foto8-9boto2').delay('800').animate({
                'top': '0'
            },trans,'swing',function(){
                $('#foto8-9 video')[0].play();
            });
            foto('#foto8-9boto1','#foto8-9foto1');
            foto('#foto8-9boto2','#foto8-9foto2');
            break;
        case 610:
            animat('#foto8-10boto3','0','300px');
            animat('#foto8-10boto2','200','300px');
            animat('#foto8-10boto1','400','300px');
            animat('#foto8-10text','600','120%');
            animat('#foto8-10','800','100%');
            animat('#foto8-9','800','0');
            animat('#foto8-9text','1000','20%');
            animat('#foto8-9boto1','1200','0');
            animat('#foto8-9text p','1400','0');
            break;
        case 62:
            animat('#foto8-9text p','0','-300px');
            animat('#foto8-9boto1','200','-300px');
            animat('#foto8-9text','400','-80%');
            animat('#foto8-9','600','-100%');
            animat('#foto8-10','600','0');
            animat('#foto8-10text','800','20%');
            animat('#foto8-10boto1','1000','0');
            animat('#foto8-10boto2','1200','0');
            $('#foto8-10boto3').delay('1400').animate({
                'top': '0'
            },trans,'swing',function(){
                // $('#foto8-10 video')[0].play();
            });
            foto('#foto8-10boto1','#foto8-10foto1');
            foto('#foto8-10boto2','#foto8-10foto2');
            video('#foto8-10boto3','apartat8video3.html');
            break;
        case 620:
            animat('#foto8-11boto2','0','300px');
            animat('#foto8-11boto1','200','300px');
            animat('#foto8-11text','400','135%');
            animat('#foto8-11','600','100%');
            animat('#foto8-10','600','0');
            animat('#foto8-10text','800','20%');
            animat('#foto8-10boto2','1000','0');
            animat('#foto8-10boto1','1200','0');
            animat('#foto8-10text p','1400','0');
            break;
        case 63:
            animat('#foto8-10text p','0','-300px');
            animat('#foto8-10boto1','200','-300px');
            animat('#foto8-10boto2','400','-300px');
            animat('#foto8-10text','600','-80%');
            animat('#foto8-10','800','-100%');
            animat('#foto8-11','800','0');
            animat('#foto8-11text','1000','35%');
            animat('#foto8-11boto1','1200','0');
            $('#foto8-11boto2').delay('1400').animate({
                'top': '0'
            },trans,'swing',function(){
                // $('#foto8-10 video')[0].play();
            });
            foto('#foto8-11boto1','#foto8-11foto1');
            video('#foto8-11boto2','apartat8video4.html');
            break;
        case 630:
            animal('#foto8-12peu','0','-50%');
            animat('#foto8-12text p','200','-300px');
            animat('#foto8-12text','400','-190%');
            animat('#foto8-12','600','100%');
            animat('#foto8-11','600','0');
            animat('#foto8-11text','800','35%');
            animat('#foto8-11boto1','1000','0');
            animat('#foto8-11text p','1200','0');
            break;
        case 64:
            animat('#foto8-11text p','0','-300px');
            animat('#foto8-11boto1','200','-300px');
            animat('#foto8-11text','400','-65%');
            animat('#foto8-11','600','-100%');
            animat('#foto8-12','600','0');
            animat('#foto8-12text','800','10%');
            animat('#foto8-12text p','1000','0');
            animal('#foto8-12peu','1200','0');
            foto('#foto8-12boto','#foto8-12foto');
            break;
        case 640:
            animal('#foto8-13peu','0','-50%');
            animat('#foto8-13text','200','-190%');
            animat('#foto8-13','400','100%');
            animat('#foto8-12','400','0');
            animat('#foto8-12text','600','10%');
            animat('#foto8-12boto','800','0');
            animal('#foto8-12peu','1000','0');
            break;
        case 65:
            animal('#foto8-12peu','0','-50%');
            animat('#foto8-12boto','200','300px');
            animat('#foto8-12text','400','210%');
            animat('#foto8-12','600','-100%');
            animat('#foto8-13','600','0');
            animat('#foto8-13text','800','10%');
            animal('#foto8-13peu','1000','0');
            break;
        case 650:
            animal('#foto8-14peu','0','-50%');
            animat('#foto8-14boto','200','-300px');
            animat('#foto8-14text','400','-180%');
            animat('#foto8-14','600','100%');
            animat('#foto8-13','600','0');
            animat('#foto8-13text','800','10%');
            animal('#foto8-13peu','1000','0');
            break;
        case 66:
            animal('#foto8-13peu','0','-50%');
            animat('#foto8-13text','200','210%');
            animat('#foto8-13','400','-100%');
            animat('#foto8-14','400','0');
            animat('#foto8-14text','600','20%');
            animat('#foto8-14boto','800','0');
            animal('#foto8-14peu','1000','0');
            break;
        case 660:
            animat('#foto8-15boto','0','300px');
            animat('#foto8-15text','200','130%');
            animat('#foto8-15','400','100%');
            animat('#foto8-14','400','0');
            animat('#foto8-14text','600','20%');
            animat('#foto8-14text p','800','0');
            animal('#foto8-14peu','1000','0');
            break;
        case 67:
            animal('#foto8-14peu','0','-50%');
            animat('#foto8-14text p','200','300px');
            animat('#foto8-14text','400','220%');
            animat('#foto8-14','600','-100%');
            animat('#foto8-15','600','0');
            animat('#foto8-15text','800','30%');
            $('#foto8-15boto').delay('1000').animate({
                'top': '0'
            },trans,'swing',function(){
               $('#foto8-15 video')[0].play();
            });
            video('#foto8-15boto','apartat8video5.html');
            $('#apartat9').load('apartat9.html');
            break;
        case 670:
            animat('#foto9-1text','0','-85%');
            animal('#foto9-1','200','-100%');
            animal('#foto8-15','200','0');
            animat('#foto8-15text','400','30%');
            $('#foto8-15boto').delay('600').animate({
                'top': '0'
            },trans,'swing',function(){
               $('#apartat9').hide();
            });
            break;
        case 68:
            $('#apartat9').show();
            animat('#foto8-15boto','0','300px');
            animat('#foto8-15text','200','130%');
            animal('#foto8-15','400','100%');
            animal('#foto9-1','400','0');
            animat('#foto9-1text','600','15%');
            break;
        case 680:
            animat('#foto9-2text','0','215%');
            animat('#foto9-2','200','-100%');
            animat('#foto9-1','200','0');
            animat('#foto9-1text','400','15%');
            break;
        case 69:
            animat('#foto9-1text','0','115%');
            animat('#foto9-1','200','100%');
            animat('#foto9-2','200','0');
            animat('#foto9-2text','400','15%');
            break;
        case 690:
            var pausa=0;
            $('#foto9-2fotos .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'-85%',
                    'left':'-85%'
                },trans);
                pausa+=150;
            });
            animao('#foto9-2 .tapa','200','0');
            break;
        case 70:
            animao('#foto9-2 .tapa','0','.6');
            var pausa=200;
            $('#foto9-2fotos .f').rotate('40deg');
            $('#foto9-2fotos .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'15%',
                    'left':'15%',
                    rotate: '5deg'
                },trans);
                pausa+=150;
            });
            break;
        case 700:
            animat('#foto9-3text1','0','215%');
            animat('#foto9-3','200','-100%');
            animat('#foto9-2','200','0');
            animat('#foto9-2text','400','15%');
            var pausa=600;
            $('#foto9-2fotos .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'15%',
                    'left':'15%'
                },trans);
                pausa+=150;
            });
            break;
        case 71:
            var pausa=0;
            $('#foto9-2fotos .f').each(function(){
                $(this).delay(pausa).animate({
                    'top':'185%',
                    'left':'185%'
                },trans);
                pausa+=150;
            });
            animat('#foto9-2text','200','-85%');
            animat('#foto9-2','400','100%');
            animat('#foto9-3','400','0');
            animat('#foto9-3text1','600','15%');
            break;
        case 710:
            animat('#foto9-3text1','0','15%');
            animat('#foto9-3text2','0','215%');
            break;
        case 72:
            animat('#foto9-3text1','0','-85%');
            animat('#foto9-3text2','0','15%');
            break;
        case 720:
            animat('#foto9-3text3','0','230%');
            animat('#foto9-3text2','0','15%');
            break;
        case 73:
            animat('#foto9-3text2','0','-85%');
            animat('#foto9-3text3','0','30%');
            break;
        case 730:
            animat('#foto9-4text','0','215%');
            animat('#foto9-4','200','-100%');
            animat('#foto9-3','200','0');
            animat('#foto9-3text3','400','30%');
            break;
        case 74:
            animat('#foto9-3text3','0','-170%');
            animat('#foto9-3','200','100%');
            animat('#foto9-4','200','0');
            animat('#foto9-4text','400','15%');
            break;
    }
}
// Funcions de video

function tancarvideo(){
    $('.videopopup').hide();
    $('#videos').html('');
    $('body').on('mousewheel',function(e){
        controlMouse(e);
    });
    $(document).keydown(function(e){
        tecla = e.which;
        controlMouse(tecla);
    });
}

function video(boto,video){
    $(boto).click(function(){
        $('body').off('mousewheel');
        $(document).off( "keydown" );
        $('#videos').load(video,function(){
            $('.videopopup').show();
        });
    });
}

function passar(id){
    $('body').off('mousewheel');
    $(document).off( "keydown" );
    diapositiva(id);
    setTimeout(function(){
        if (id < 100 || id >=2000){
            if (id >= 20000) {
                pos = id/10;
            } else {
                pos=id;
            }
        } else {
            pos=id/10;
        }
        $('body').on('mousewheel',function(e){
            controlMouse(e);
        });
        $(document).keydown(function(e){
            tecla = e.which;
            controlMouse(tecla);
        });
    },2000);
    
}

function animat(element,delay,pos) {
    $(element).delay(delay).animate({
        'top' : pos
    },trans,'swing');
}
function animab(element,delay,pos) {
    $(element).delay(delay).animate({
        'bottom' : pos
    },trans,'swing');
}
function animal(element,delay,pos) {
    $(element).delay(delay).animate({
        'left' : pos
    },trans,'swing');
}
function animar(element,delay,pos) {
    $(element).delay(delay).animate({
        'right' : pos
    },trans,'swing');
}
function animao(element,delay,pos) {
    $(element).delay(delay).animate({
        'opacity' : pos
    },trans,'swing');
}
function animacol(element,delay,pos) {
    $(element).delay(delay).animate({
        'color' : pos
    },trans,'swing');
}
function slider(boto,div,boolea){
    $(boto).click(function(){
        $('body').off('mousewheel');
        $(document).off( "keydown" );
        $(div).show();
        if(!boolea){
            $(div+' .sliderfotos').slick();
            boolea=true;
        }
        $(div+' .blau').click(function(){
            $(div).hide();
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
            $(document).keydown(function(e){
                tecla = e.which;
                controlMouse(tecla);
            });
        });
    });
}
function foto(boto,div){
    $(boto).click(function(){
        $('body').off('mousewheel');
        $(document).off( "keydown" );
        $(div).show();
        $(div).click(function(){
            $(div).hide();
            $('body').on('mousewheel',function(e){
                controlMouse(e);
            });
            $(document).keydown(function(e){
                tecla = e.which;
                controlMouse(tecla);
            });
        });
    });
}
// Funcions Drag$Drop
function drag_start(event){
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' 
            + (parseInt(style.getPropertyValue("top")) - event.clientY)+ ',' + event.target.id;
    event.dataTransfer.setData("Text",str);
}
function drop(event){
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    dm.style.zIndex = zi;
    zi++;
    event.preventDefault();
    return false;
}
function drag_over(event){
    event.preventDefault();
    return false;
}