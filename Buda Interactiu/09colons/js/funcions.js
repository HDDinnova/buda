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
        case 210:
            animal('#foto1-11peu','0','-50%');
            animat('#foto1-11boto2','200','300px');
            animat('#foto1-11boto1','400','300px');
            animat('#foto1-11text','600','210%');
            animat('#foto1-11','800','-100%');
            animat('#foto1-10','800','0');
            animat('#foto1-10text','1000','15%');
            animat('#foto1-10text p','1200','0');
            animal('#foto1-10peu','1400','0');
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
            $('#apartat2').load('apartat2.html');
            break;
        case 220:
            animat('#foto2-1text h2','0','-300px');
            animat('#foto2-1text','200','-190%');
            animat('#foto2-1','400','100%');
            animat('#foto1-11','400','0');
            animat('#foto1-11text','600','10%');
            animat('#foto1-11boto1','800','0');
            animat('#foto1-11text p','1000','0');
            $('#foto1-11peu').delay('1200').animate({
                'left': '0'
            },trans,'swing',function(){            
                $('#apartat2').hide();
            });
            break;
        case 23:
            $('#apartat2').show();
            animal('#foto1-11peu','0','-50%');
            animat('#foto1-11text p','200','-300px');
            animat('#foto1-11boto1','400','-300px');
            animat('#foto1-11text','600','-90%');
            animat('#foto1-11','800','-100%');
            animat('#foto2-1','800','0');
            animat('#foto2-1text','1000','10%');
            animat('#foto2-1text h2','1200','0');
            break;
        case 230:
            $('#foto2-1video video')[0].pause();
            animab('#foto2-1video .videopeu','0','-110%');
            animat('#foto2-1video','200','-200%');
            animao('#foto2-1 .tapa','400','0');
            animat('#foto2-1text','600','10%');
            animat('#foto2-1text p','800','0');
            break;
        case 24:
            animat('#foto2-1text p','0','300px');
            animat('#foto2-1text','200','210%');
            animao('#foto2-1 .tapa','400','.8');
            $('#foto2-1video').delay('600').animate({
                'top': '0'
            },trans,'swing',function(){            
                $('#foto2-1video video')[0].play();
            });
            animab('#foto2-1video .videopeu','800','3%');
            break;
        case 240:
            animal('#foto2-2peu','0','-50%');
            animat('#foto2-2text','200','-190%');
            animat('#foto2-2','400','100%');
            animat('#foto2-1','400','0');
            $('#foto2-1video').delay('600').animate({
                'top': '0'
            },trans,'swing',function(){            
                $('#foto2-1video video')[0].play();
            });
            animab('#foto2-1video .videopeu','800','3%');
            break;
        case 25:
            $('#foto2-1video video')[0].pause();
            animab('#foto2-1video .videopeu','0','-110%');
            animat('#foto2-1video','200','200%');
            animat('#foto2-1','400','-100%');
            animat('#foto2-2','400','0');
            animat('#foto2-2text','600','10%');
            animal('#foto2-2peu','800','0');
            $('#apartat3').load('apartat3.html');
            break;
        case 250:
            animal('#foto3-1peu','0','-50%');
            animat('#foto3-1text','200','-150%');
            animat('#foto3-1','400','100%');
            animat('#foto2-2','400','0');
            animat('#foto2-2text','600','10%');
            $('#foto2-2peu').delay('1200').animate({
                'left': '0'
            },trans,'swing',function(){            
                $('#apartat3').hide();
            });
            break;
        case 26:
            $('#apartat3').show();
            animal('#foto2-2peu','0','-50%');
            animat('#foto2-2text','200','210%');
            animat('#foto2-2','400','-100%');
            animat('#foto3-1','400','0');
            animat('#foto3-1text','600','50%');
            animal('#foto3-1peu','800','0');
            break;
        case 260:
            animat('#foto3-1video1','0','-300px');
            animat('#foto3-1video2','100','-300px');
            animat('#foto3-1video3','200','-300px');
            animat('#foto3-1video4','300','-300px');
            animat('#foto3-1video5','400','-300px');
            animat('#foto3-1videos','500','-180%');
            animao('#foto3-1 .tapa','600','0');
            animat('#foto3-1text','800','50%');
            animal('#foto3-1peu','1000','0');
            break;
        case 27:
            animal('#foto3-1peu','0','-50%');
            animat('#foto3-1text','200','250%');
            animao('#foto3-1 .tapa','400','.6');
            animat('#foto3-1videos','600','20%');
            animat('#foto3-1video5','700','0');
            animat('#foto3-1video4','800','0');
            animat('#foto3-1video3','900','0');
            animat('#foto3-1video2','1000','0');
            animat('#foto3-1video1','1100','0');
            video('#foto3-1video1','apartat3video1.html');
            video('#foto3-1video2','apartat3video2.html');
            video('#foto3-1video3','apartat3video3.html');
            video('#foto3-1video4','apartat3video4.html');
            video('#foto3-1video5','apartat3video5.html');
            video('#foto3-1video6','apartat3video6.html');
            break;
        case 270:
            animal('#foto3-2peu','0','-50%');
            animat('#foto3-2text p','200','-300px');
            animat('#foto3-2boto1','400','-300px');
            animat('#foto3-2text','600','-190%');
            animat('#foto3-2','800','100%');
            animat('#foto3-1','800','0');
            animat('#foto3-1videos','1000','20%');
            animat('#foto3-1video2','1100','0');
            animat('#foto3-1video3','1200','0');
            animat('#foto3-1video4','1300','0');
            animat('#foto3-1video5','1400','0');
            animat('#foto3-1video6','1500','0');
            break;
        case 28:
            animat('#foto3-1video6','0','300px');
            animat('#foto3-1video5','100','300px');
            animat('#foto3-1video4','200','300px');
            animat('#foto3-1video3','300','300px');
            animat('#foto3-1video2','400','300px');
            animat('#foto3-1videos','500','220%');
            animat('#foto3-1','600','-100%');
            animat('#foto3-2','600','0');
            animat('#foto3-2text','800','10%');
            animat('#foto3-2boto1','1000','0');
            animat('#foto3-2text p','1200','0');
            animal('#foto3-2peu','1400','0');
            foto('#foto3-2boto2','#foto3-2foto');
            video('#foto3-2boto1','apartat3video7.html');
            $('#apartat4').load('apartat4.html');
            break;
        case 280:
            animal('#foto4-1peu','0','-50%');
            animat('#foto4-1text p','200','-300px');
            animab('#foto4-1text','400','210%');
            animat('#foto4-1','600','100%');
            animat('#foto3-2','600','0');
            animat('#foto3-2text','800','10%');
            animat('#foto3-2boto1','1000','0');
            animat('#foto3-2boto2','1200','0');
            $('#foto3-2peu').delay('1400').animate({
                'left': '0'
            },trans,'swing',function(){            
                $('#apartat4').hide();
            });
            break;
        case 29:
            $('#apartat4').show();
            animal('#foto3-2peu','0','-50%');
            animat('#foto3-2boto2','200','300px');
            animat('#foto3-2boto1','400','300px');
            animat('#foto3-2text','600','210%');
            animat('#foto3-2','800','-100%');
            animat('#foto4-1','800','0');
            animab('#foto4-1text','1000','10%');
            animat('#foto4-1text p','1200','0');
            animal('#foto4-1peu','1400','0');
            break;
        case 290:
            animat('#foto4-1text2 p','0','-300px');
            animat('#foto4-1text2','200','-210%');
            animao('#foto4-1 .tapa','400','0');
            animab('#foto4-1text','600','10%');
            animat('#foto4-1text h2','800','0');
            animal('#foto4-1peu','1000','0');
            break;
        case 30:
            animal('#foto4-1peu','0','-50%');
            animat('#foto4-1text h2','200','300px');
            animab('#foto4-1text','400','-190%');
            animao('#foto4-1 .tapa','600','.6');
            animat('#foto4-1text2','800','10%');
            animat('#foto4-1text2 p','1000','0');
            video('#foto4-1boto','apartat4video1.html');
            break;
        case 300:
            animal('#foto4-2peu','0','-50%');
            animat('#foto4-2text p','200','-300px');
            animat('#foto4-2text','400','-210%');
            animat('#foto4-2','600','100%');
            animat('#foto4-1','600','0');
            animat('#foto4-1text2','800','10%');
            animat('#foto4-1boto','1000','0');
            break;
        case 31:
            animat('#foto4-1boto','0','300px');
            animat('#foto4-1text2','200','210%');
            animat('#foto4-1','400','-100%');
            animat('#foto4-2','400','0');
            animat('#foto4-2text','600','10%');
            animat('#foto4-2text p','800','0');
            animal('#foto4-2peu','1000','0');
            video('#foto4-2boto','apartat4video2.html');
            break;
        case 310:
            animal('#foto4-3peu','0','-50%');
            animat('#foto4-3text p','200','-300px');
            animat('#foto4-3boto1-1','400','-300px');
            animat('#foto4-3boto1-2','600','-300px');
            animab('#foto4-3text','800','210%');
            animat('#foto4-3','1000','100%');
            animat('#foto4-2','1000','0');
            animat('#foto4-2text','1200','10%');
            animat('#foto4-2boto','1400','0');
            animal('#foto4-2peu','1600','0');
            break;
        case 32:
            animal('#foto4-2peu','0','-50%');
            animat('#foto4-2boto','200','300px');
            animat('#foto4-2text','400','210%');
            animat('#foto4-2','600','-100%');
            animat('#foto4-3','600','0');
            animab('#foto4-3text','800','10%');
            animat('#foto4-3boto1-2','1000','0');
            animat('#foto4-3boto1-1','1200','0');
            animat('#foto4-3text p','1400','0');
            animal('#foto4-3peu','1600','0');
            video('#foto4-3boto1-1','apartat4video3.html');
            video('#foto4-3boto1-2','apartat4video4.html');
            video('#foto4-3boto2','apartat4video5.html');
            $('#apartat5').load('apartat5.html');
            break;
        case 320:
            animal('#foto5-1peu','0','-50%');
            animat('#foto5-1text','200','-210%');
            animat('#foto5-1','400','100%');
            animat('#foto4-3','400','0');
            animab('#foto4-3text','600','10%');
            animat('#foto4-3boto1-1','800','0');
            animat('#foto4-3boto1-2','1000','0');
            animat('#foto4-3boto2','1200','0');
            $('#foto4-3peu').delay('1400').animate({
                'left': '0'
            },trans,'swing',function(){            
                $('#apartat5').hide();
            });
            break;
        case 33:
            $('#apartat5').show();
            animal('#foto4-3peu','0','-50%');
            animat('#foto4-3boto2','200','300px');
            animat('#foto4-3boto1-2','400','300px');
            animat('#foto4-3boto1-1','600','300px');
            animab('#foto4-3text','800','-210%');
            animat('#foto4-3','1000','-100%');
            animat('#foto5-1','1000','0');
            animat('#foto5-1text','1200','10%');
            animal('#foto5-1peu','1400','0');
            break;
        case 330:
            animal('#foto5-2peu','0','-50%');
            animat('#foto5-2text','200','-260%');
            animat('#foto5-2','400','100%');
            animat('#foto5-1','400','0');
            animat('#foto5-1text','600','10%');
            animal('#foto5-1peu','800','0');
            break;
        case 34:
            animal('#foto5-1peu','0','-50%');
            animat('#foto5-1text','200','210%');
            animat('#foto5-1','400','-100%');
            animat('#foto5-2','400','0');
            animat('#foto5-2text','600','60%');
            animal('#foto5-2peu','800','0');
            break;
        case 340:
            animal('#foto5-3peu','0','-50%');
            animat('#foto5-3text p','200','-300px');
            animat('#foto5-3text','400','-210%');
            animat('#foto5-3','600','100%');
            animat('#foto5-2','600','0');
            animat('#foto5-2text','800','60%');
            animal('#foto5-2peu','1000','0');
            break;
        case 35:
            animal('#foto5-2peu','0','-50%');
            animat('#foto5-2text','200','260%');
            animat('#foto5-2','400','-100%');
            animat('#foto5-3','400','0');
            animat('#foto5-3text','600','10%');
            animat('#foto5-3text p','800','0');
            animal('#foto5-3peu','1000','0');
            foto('#foto5-3boto','#foto5-3foto');
            break;
        case 350:
            animal('#foto5-4peu','0','-50%');
            animat('#foto5-4text','200','-225%');
            animat('#foto5-4','400','100%');
            animat('#foto5-3','400','0');
            animat('#foto5-3text','600','10%');
            animat('#foto5-3boto','800','0');
            animal('#foto5-3peu','1000','0');
            break;
        case 36:
            animal('#foto5-3peu','0','-50%');
            animat('#foto5-3boto','200','300px');
            animat('#foto5-3text','400','210%');
            animat('#foto5-3','600','-100%');
            animat('#foto5-4','600','0');
            animat('#foto5-4text','800','25%');
            animal('#foto5-4peu','1000','0');
            break;
        case 360:
            animal('#foto5-5peu','0','-50%');
            animat('#foto5-5text p','200','-300px');
            animat('#foto5-5text','400','-240%');
            animat('#foto5-5','600','100%');
            animat('#foto5-4','600','0');
            animat('#foto5-4text','800','25%');
            animal('#foto5-4peu','1000','0');
            break;
        case 37:
            animal('#foto5-4peu','0','-50%');
            animat('#foto5-4text','200','225%');
            animat('#foto5-4','400','-100%');
            animat('#foto5-5','400','0');
            animat('#foto5-5text','600','40%');
            animat('#foto5-5text p','800','0');
            animal('#foto5-5peu','1000','0');
            video('#foto5-5boto','apartat5video1.html');
            break;
        case 370:
            $('#foto5-6 video')[0].pause();
            animab('#foto5-6 .videopeu','0','-110%');
            animat('#foto5-6','200','-100%');
            animat('#foto5-5text','400','40%');
            animat('#foto5-5boto','600','0');
            animal('#foto5-5peu','800','0');
            break;
        case 38:
            animal('#foto5-5peu','0','-50%');
            animat('#foto5-5boto','200','300px');
            animat('#foto5-5text','400','240%');
            $('#foto5-6').delay('600').animate({
                'top': '0'
            },trans,'swing',function(){            
                $('#foto5-6 video')[0].play();
            });
            animab('#foto5-6 .videopeu','800','0');
            $('#foto5-6 video').on('ended',function(){
                passar(39);
            });
            $('#apartat6').load('apartat6.html');
            break;
        case 380:
            animal('#foto6-1peu','0','-50%');
            animat('#foto6-1text','200','-210%');
            animat('#foto6-1','400','100%');
            $('#foto5-6').delay('400').animate({
                'top': '0'
            },trans,'swing',function(){            
                $('#foto5-6 video')[0].play();
                $('#apartat6').hide();
            });
            animab('#foto5-6 .videopeu','600','0');
            break;
        case 39:
            $('#apartat6').show();
            $('#foto5-6 video')[0].pause();
            animab('#foto5-6 .videopeu','0','-110%');
            animat('#foto5-6','200','-100%');
            animat('#foto6-1','200','0');
            animat('#foto6-1text','400','10%');
            animal('#foto6-1peu','600','0');
            break;
        case 390:
            animat('#foto6-1text2 p','0','-300px');
            animat('#foto6-1text2','200','-230%');
            animao('#foto6-1 .tapa','400','0');
            animat('#foto6-1text','600','10%');
            animal('#foto6-1peu','800','0');
            break;
        case 40:
            animal('#foto6-1peu','0','-50%');
            animat('#foto6-1text','200','210%');
            animao('#foto6-1 .tapa','400','.6');
            animat('#foto6-1text2','600','30%');
            animat('#foto6-1text2 p','800','0');
            video('#foto6-1boto','apartat6video1.html');
            break;
        case 400:
            $('#foto6-1video video')[0].pause();
            animab('#foto6-1video .videopeu','0','-110%');
            animat('#foto6-1video','200','-100%');
            animat('#foto6-1text2','400','30%');
            animat('#foto6-1boto','600','0');
            break;
        case 41:
            animat('#foto6-1boto','0','300px');
            animat('#foto6-1text2','200','230%');
            $('#foto6-1video').delay('400').animate({
                'top': '0'
            },trans,'swing',function(){            
                $('#foto6-1video video')[0].play();
            });
            animab('#foto6-1video .videopeu','600','0');
            $('#foto6-1video video').on('ended',function(){
                passar(42);
            });
            break;
        case 410:
            animat('#foto6-2text p','0','-300px');
            animat('#foto6-2boto1','200','-300px');
            animat('#foto6-2text','400','-240%');
            animat('#foto6-2','600','100%');
            $('#foto6-1').delay('600').animate({
                'top': '0'
            },trans,'swing',function(){            
                $('#foto6-1video video')[0].play();
            });
            animab('#foto6-1video .videopeu','800','0');
            break;
        case 42:
            $('#foto6-1video video')[0].pause();
            animab('#foto6-1video .videopeu','0','-110%');
            animat('#foto6-1','200','-100%');
            animat('#foto6-2','200','0');
            animat('#foto6-2text','400','40%');
            animat('#foto6-2boto1','600','0');
            animat('#foto6-2text p','800','0');
            slider('#foto6-2boto1','#foto6-2slider1');
            slider('#foto6-2boto2','#foto6-2slider2');
            break;
        case 420:
            animal('#foto6-3peu','0','-50%');
            animat('#foto6-3text p','200','-300px');
            animat('#foto6-3text','400','-150%');
            animat('#foto6-3','600','100%');
            animat('#foto6-2','600','0');
            animat('#foto6-2text','800','40%');
            animat('#foto6-2boto1','1000','0');
            animat('#foto6-2boto2','1200','0');
            break;
        case 43:
            animat('#foto6-2boto2','0','300px');
            animat('#foto6-2boto1','200','300px');
            animat('#foto6-2text','400','240%');
            animat('#foto6-2','600','-100%');
            animat('#foto6-3','600','0');
            animat('#foto6-3text','800','50%');
            animat('#foto6-3text p','1000','0');
            animal('#foto6-3peu','1200','0');
            foto('#foto6-3boto','#foto6-3foto');
            break;
        case 430:
            animal('#foto6-4peu','0','-50%');
            animat('#foto6-4boto','200','-300px');
            animat('#foto6-4text','400','-245%');
            animat('#foto6-4','600','100%');
            animat('#foto6-3','600','0');
            animat('#foto6-3text','800','50%');
            animat('#foto6-3boto','1000','0');
            animal('#foto6-3peu','1200','0');
            break;
        case 44:
            animal('#foto6-3peu','0','-50%');
            animat('#foto6-3boto','200','300px');
            animat('#foto6-3text','400','250%');
            animat('#foto6-3','600','-100%');
            animat('#foto6-4','600','0');
            animat('#foto6-4text','800','45%');
            animat('#foto6-4boto','1000','0');
            animal('#foto6-4peu','1200','0');
            video('#foto6-4boto','apartat6video2.html');
            break;
        case 440:
            animal('#foto6-5peu','0','-50%');
            animat('#foto6-5text','200','-220%');
            animat('#foto6-5','400','100%');
            animat('#foto6-4','400','0');
            animat('#foto6-4text','600','45%');
            animat('#foto6-4text p','800','0');
            animal('#foto6-4peu','1000','0');
            break;
        case 45:
            animal('#foto6-4peu','0','-50%');
            animat('#foto6-4text p','200','300px');
            animat('#foto6-4text','400','245%');
            animat('#foto6-4','600','-100%');
            animat('#foto6-5','600','0');
            animat('#foto6-5text','800','20%');
            animal('#foto6-5peu','1000','0');
            break;
        case 450:
            animal('#foto6-6peu','0','-50%');
            animat('#foto6-6text p','200','-300px');
            animat('#foto6-6boto1','400','-300px');
            animat('#foto6-6text','600','-230%');
            animat('#foto6-6','800','100%');
            animat('#foto6-5','800','0');
            animat('#foto6-5text','1000','20%');
            animal('#foto6-5peu','1200','0');
            break;
        case 46:
            animal('#foto6-5peu','0','-50%');
            animat('#foto6-5text','200','220%');
            animat('#foto6-5','400','-100%');
            animat('#foto6-6','400','0');
            animat('#foto6-6text','600','30%');
            animat('#foto6-6boto1','800','0');
            animat('#foto6-6text p','1000','0');
            animal('#foto6-6peu','1200','0');
            foto('#foto6-6boto1','#foto6-6foto1');
            foto('#foto6-6boto2','#foto6-6foto2');
            break;
        case 460:
            animat('#foto6-6text2','0','-240%');
            animao('#foto6-6 .tapa','200','.6');
            animat('#foto6-6text','400','30%');
            animat('#foto6-6boto1','600','0');
            animat('#foto6-6boto2','800','0');
            animal('#foto6-6peu','1000','0');
            break;
        case 47:
            animal('#foto6-6peu','0','-50%');
            animat('#foto6-6boto2','200','300px');
            animat('#foto6-6boto1','400','300px');
            animat('#foto6-6text','600','230%');
            animao('#foto6-6 .tapa','800','0');
            animat('#foto6-6text2','1000','40%');
            $('#apartat7').load('apartat7.html');
            break;
        case 470:
            animal('#foto7-1peu','0','-50%');
            animat('#foto7-1text h2','200','-300px');
            animat('#foto7-1text','400','-240%');
            animat('#foto7-1','600','100%');
            animat('#foto6-6','600','0');
            $('#foto6-6text2').delay('800').animate({
                'top': '40%'
            },trans,'swing',function(){            
                $('#apartat7').hide();
            });
            break;
        case 48:
            $('#apartat7').show();
            animat('#foto6-6text2','0','240%');
            animat('#foto6-6','200','-100%');
            animat('#foto7-1','200','0');
            animat('#foto7-1text','400','40%');
            animat('#foto7-1text h2','600','0');
            animal('#foto7-1peu','800','0');
            video('#foto7-1boto','apartat7video1.html');
            break;
        case 480:
            animat('#foto7-2boto1','0','-300px');
            animat('#foto7-2boto2','200','-300px');
            animat('#foto7-2boto3','400','-300px');
            animat('#foto7-2text','600','-210%');
            animat('#foto7-2','800','100%');
            animat('#foto7-1','800','0');
            animat('#foto7-1text','1000','40%');
            animat('#foto7-1boto','1200','0');
            animal('#foto7-1peu','1400','0');
            break;
        case 49:
            animal('#foto7-1peu','0','-50%');
            animat('#foto7-1boto','200','300px');
            animat('#foto7-1text','400','240%');
            animat('#foto7-1','600','-100%');
            animat('#foto7-2','600','0');
            animat('#foto7-2text','800','10%');
            animat('#foto7-2boto3','1000','0');
            animat('#foto7-2boto2','1200','0');
            animat('#foto7-2boto1','1400','0');
            slider('#foto7-2boto1','#foto7-2fotos1');
            slider('#foto7-2boto2','#foto7-2fotos2');
            slider('#foto7-2boto3','#foto7-2fotos3');
            break;
        case 490:
            $('#foto7-3 video')[0].pause();
            animat('#foto7-3','0','100%');
            animat('#foto7-2','0','0');
            animat('#foto7-2text','200','10%');
            animat('#foto7-2boto2','400','0');
            animat('#foto7-2boto3','600','0');
            animat('#foto7-2text p','800','0');
            break;
        case 50:
            animat('#foto7-2text p','0','300px');
            animat('#foto7-2boto3','200','300px');
            animat('#foto7-2boto2','400','300px');
            animat('#foto7-2text','600','210%');
            animat('#foto7-2','800','-100%');
            $('#foto7-3').delay('800').animate({
                'top': '0'
            },trans,'swing',function(){            
                $('#foto7-3 video')[0].play();
            });
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