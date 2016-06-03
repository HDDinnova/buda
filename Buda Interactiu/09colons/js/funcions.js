var trans = 1200;
var sona=true;
var mutexvideo=false;
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
            case 50:
                passar(51);
                break;
            case 51:
                passar(52);
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
            case 79:
                passar(80);
                break;
            case 80:
                passar(81);
                break;
            case 81:
                passar(82);
                break;
            case 82:
                passar(83);
                break;
            case 83:
                passar(84);
                break;
            case 84:
                passar(85);
                break;
            case 85:
                passar(86);
                break;
            case 86:
                passar(87);
                break;
            case 87:
                passar(88);
                break;
            case 88:
                passar(89);
                break;
            case 89:
                passar(90);
                break;
            case 90:
                passar(91);
                break;
            case 91:
                passar(92);
                break;
            case 92:
                passar(93);
                break;
            case 93:
                passar(94);
                break;
            case 94:
                passar(95);
                break;
            case 95:
                passar(96);
                break;
            case 96:
                passar(97);
                break;
            case 97:
                passar(98);
                break;
            case 98:
                passar(99);
                break;
            case 99:
                passar(100);
                break;
            case 100:
                passar(101);
                break;
            case 101:
                passar(102);
                break;
            case 102:
                passar(103);
                break;
            case 103:
                passar(104);
                break;
            case 104:
                passar(105);
                break;
            case 105:
                passar(106);
                break;
            case 106:
                passar(107);
                break;
            case 107:
                passar(108);
                break;
            case 108:
                passar(109);
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
            case 88:
                passar(870);
                break;
            case 89:
                passar(880);
                break;
            case 90:
                passar(890);
                break;
            case 91:
                passar(900);
                break;
            case 92:
                passar(910);
                break;
            case 93:
                passar(920);
                break;
            case 94:
                passar(930);
                break;
            case 95:
                passar(940);
                break;
            case 96:
                passar(950);
                break;
            case 97:
                passar(960);
                break;
            case 98:
                passar(970);
                break;
            case 99:
                passar(980);
                break;
            case 100:
                passar(990);
                break;
            case 101:
                passar(1000);
                break;
            case 102:
                passar(1010);
                break;
            case 103:
                passar(1020);
                break;
            case 104:
                passar(1030);
                break;
            case 105:
                passar(1040);
                break;
            case 106:
                passar(1050);
                break;
            case 107:
                passar(1060);
                break;
            case 108:
                passar(1070);
                break;
            case 109:
                passar(1080);
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
                animat('#foto1-1text','0','10%');
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
            animat('#foto1-1text2 p','0','300px');
            animab('#foto1-1text2','200','-190%');
            animao('#foto1-1 .tapa','400','0');
            animat('#foto1-1text','600','10%');
            animal('#foto1-1peu','800','0');
            animab('.scroll','1000','1.5%');
            break;
        case 11:
            animab('.scroll','0','-10%');
            animal('#foto1-1peu','200','-50%');
            animat('#foto1-1text','400','-210%');
            animao('#foto1-1 .tapa','600','.6');
            animab('#foto1-1text2','800','10%');
            animat('#foto1-1text2 p','1000','0');
            foto('#foto1-1boto','#foto1-1foto');
            break;
        case 110:
            animal('#foto1-2peu','0','-50%');
            animat('#foto1-2text','200','220%');
            animat('#foto1-2','400','-100%');
            animat('#foto1-1','400','0');
            animab('#foto1-1text2','600','10%');
            animat('#foto1-1boto','800','0');
            break;
        case 12:
            animat('#foto1-1boto','0','-300px');
            animab('#foto1-1text2','200','210%');
            animat('#foto1-1','400','100%');
            animat('#foto1-2','400','0');
            animat('#foto1-2text','600','20%');
            animal('#foto1-2peu','800','0');
            break;
        case 120:
            animat('#foto1-2text2','0','230%');
            animao('#foto1-2 .tapa','200','0');
            animat('#foto1-2text','400','20%');
            animal('#foto1-2peu','600','0');
            break;
        case 13:
            animal('#foto1-2peu','0','-50%');
            animat('#foto1-2text','200','-180%');
            animao('#foto1-2 .tapa','400','.6');
            animat('#foto1-2text2','600','30%');
            break;
        case 130:
            animal('#foto1-3peu','0','-50%');
            animat('#foto1-3text','200','220%');
            animat('#foto1-3','400','-100%');
            animat('#foto1-2','400','0');
            animat('#foto1-2text2','600','30%');
            break;
        case 14:
            animat('#foto1-2text2','0','-170%');
            animat('#foto1-2','200','100%');
            animat('#foto1-3','200','0');
            animat('#foto1-3text','400','20%');
            animal('#foto1-3peu','600','0');
            break;
        case 140:
            animal('#foto1-4peu','0','-50%');
            animat('#foto1-4text p','200','300px');
            animat('#foto1-4boto3','400','300px');
            animat('#foto1-4boto2','600','300px');
            animab('#foto1-4text','800','-188%');
            animat('#foto1-4','1000','-100%');
            animat('#foto1-3','1000','0');
            animat('#foto1-3text','1200','20%');
            animal('#foto1-3peu','1400','0');
            break;
        case 15:
            animal('#foto1-3peu','0','-50%');
            animat('#foto1-3text','200','-180%');
            animat('#foto1-3','400','100%');
            animat('#foto1-4','400','0');
            animab('#foto1-4text','600','12%');
            animat('#foto1-4boto2','800','0');
            animat('#foto1-4boto3','1000','0');
            animat('#foto1-4text p','1200','0');
            animal('#foto1-4peu','1400','0');
            foto('#foto1-4boto1','#foto1-4foto');
            video('#foto1-4boto2','apartat1video2.html');
            video('#foto1-4boto3','apartat1video3.html');
            break;
        case 150:
            animal('#foto1-5peu','0','-50%');
            animat('#foto1-5text','200','215%');
            animat('#foto1-5','400','-100%');
            animat('#foto1-4','400','0');
            animab('#foto1-4text','600','12%');
            animat('#foto1-4boto3','800','0');
            animat('#foto1-4boto2','1000','0');
            animat('#foto1-4boto1','1200','0');
            animal('#foto1-4peu','1400','0');
            break;
        case 16:
            animal('#foto1-4peu','0','-50%');
            animat('#foto1-4boto1','200','-300px');
            animat('#foto1-4boto2','400','-300px');
            animat('#foto1-4boto3','600','-300px');
            animab('#foto1-4text','800','212%');
            animat('#foto1-4','1000','100%');
            animat('#foto1-5','1000','0');
            animat('#foto1-5text','1200','15%');
            animal('#foto1-5peu','1400','0');
            break;
        case 160:
            animat('#foto1-6text p','0','300px');
            animab('#foto1-6text','200','-190%');
            animal('#foto1-6','400','100%');
            animal('#foto1-5','400','0');
            animat('#foto1-5text','600','15%');
            animal('#foto1-5peu','800','0');
            break;
        case 17:
            animal('#foto1-5peu','0','-50%');
            animat('#foto1-5text','200','-85%');
            animal('#foto1-5','400','-100%');
            animal('#foto1-6','400','0');
            animab('#foto1-6text','600','10%');
            animat('#foto1-6text p','800','0');
            slider('#foto1-6boto','#foto1-6fotos');
            break;
        case 170:
            animat('#foto1-7boto2','0','300px');
            animat('#foto1-7boto1','200','300px');
            animab('#foto1-7text','400','-197%');
            animat('#foto1-7','600','-100%');
            animat('#foto1-6','600','0');
            animab('#foto1-6text','800','10%');
            animat('#foto1-6boto','1000','0');
            break;
        case 18:
            animat('#foto1-6boto','0','-300px');
            animab('#foto1-6text','200','210%');
            animat('#foto1-6','400','100%');
            animat('#foto1-7','400','0');
            animab('#foto1-7text','600','3%');
            animat('#foto1-7boto1','800','0');
            animat('#foto1-7boto2','1000','0');
            slider('#foto1-7boto1','#foto1-7fotos');
            video('#foto1-7boto2','apartat1video4.html');
            break;
        case 180:
            animal('#foto1-8peu','0','-50%');
            animat('#foto1-8boto','200','300px');
            animat('#foto1-8text','400','215%');
            animat('#foto1-8','600','-100%');
            animat('#foto1-7','600','0');
            animab('#foto1-7text','800','3%');
            animat('#foto1-7boto1','1000','0');
            animat('#foto1-7text p','1200','0');
            break;
        case 19:
            animat('#foto1-7text p','0','-300px');
            animat('#foto1-7boto1','200','-300px');
            animab('#foto1-7text','400','203%');
            animat('#foto1-7','600','100%');
            animat('#foto1-8','600','0');
            animat('#foto1-8text','800','15%');
            animat('#foto1-8boto','1000','0');
            animal('#foto1-8peu','1200','0');
            slider('#foto1-8boto','#foto1-8fotos');
            break;
        case 190:
            animal('#foto1-9peu','0','-50%');
            animat('#foto1-9boto2','200','300px');
            animab('#foto1-9text','400','-93%');
            animal('#foto1-9','600','-100%');
            animal('#foto1-8','600','0');
            animat('#foto1-8text','800','15%');
            animat('#foto1-8text p','1000','0');
            animal('#foto1-8peu','1200','0');
            break;
        case 20:
            animal('#foto1-8peu','0','-50%');
            animat('#foto1-8text p','200','-300px');
            animat('#foto1-8text','400','-85%');
            animal('#foto1-8','600','100%');
            animal('#foto1-9','600','0');
            animab('#foto1-9text','800','7%');
            animat('#foto1-9boto2','1000','0');
            animal('#foto1-9peu','1200','0');
            video('#foto1-9boto1','apartat1video5.html');
            video('#foto1-9boto2','apartat1video6.html');
            break;
        case 200:
            animal('#foto1-10peu','0','-50%');
            animat('#foto1-10boto','200','300px');
            animat('#foto1-10text','400','215%');
            animat('#foto1-10','600','-100%');
            animat('#foto1-9','600','0');
            animab('#foto1-9text','800','7%');
            animat('#foto1-9boto1','1000','0');
            animal('#foto1-9peu','1200','0');
            break;
        case 21:
            animal('#foto1-9peu','0','-50%');
            animat('#foto1-9boto1','200','-300px');
            animab('#foto1-9text','400','207%');
            animat('#foto1-9','600','100%');
            animat('#foto1-10','600','0');
            animat('#foto1-10text','800','15%');
            animat('#foto1-10boto','1000','0');
            animal('#foto1-10peu','1200','0');
            foto('#foto1-10boto','#foto1-10foto');
            break;
        case 22:
            animal('#foto1-10peu','0','-50%');
            animat('#foto1-10text p','200','-300px');
            animat('#foto1-10text','400','-185%');
            animat('#foto1-10','600','100%');
            animat('#foto1-11','600','0');
            animat('#foto1-11text','800','10%');
            animat('#foto1-11boto1','1000','0');
            animat('#foto1-11boto2','1200','0');
            animal('#foto1-11peu','1400','0');
            foto('#foto1-11boto1','#foto1-11foto1');
            foto('#foto1-11boto2','#foto1-11foto2');
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
        if (id < 110 || id >=2000){
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
function slider(boto,div){
    $(boto).click(function(){
        $('body').off('mousewheel');
        $(document).off( "keydown" );
        $(div).show();
        $(div+' .sliderfotos').slick({
            infinite: false
        });
        $(div+' .blau').click(function(){
            $(div).hide();
            $(div+' .sliderfotos').slick('unslick');
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