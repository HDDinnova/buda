var trans = 1200;
var sona=true;
var mutexvideo=false;
var slider1=slider2=slider3=slider4=slider5=slider6=slider7=slider8=slider9=slider10=false;
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
    },3000);
    
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