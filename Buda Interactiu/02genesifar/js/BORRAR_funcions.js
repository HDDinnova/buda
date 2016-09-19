
//        case 98:
//            animal('#foto13-3peu','0','150%');
//            animat('#foto13-3text p:first','200','-300px');
//            animat('#foto13-3text p:last','400','-300px');
//            animat('#foto13-3text','600','-180%');
//            animat('#foto13-3','800','100%');
//            animat('#foto13-4','800','0');
//            animat('#foto13-4text','1000','20%');
//            animat('#foto13-4boto','1200','0');
//            animal('#foto13-4peu','1400','0');
//            foto('#foto13-4boto','#foto13-4foto');
//            break;
//        case 980:
//            animal('#foto13-5peu','0','150%');
//            animat('#foto13-5boto','200','300px');
//            animat('#foto13-5text','400','245%');
//            animat('#foto13-5','600','-100%');
//            animat('#foto13-4','600','0');
//            animat('#foto13-4text','800','20%');
//            animat('#foto13-4text p','1000','0');
//            animal('#foto13-4peu','1200','0');
//            break;
//        case 99:
//            animal('#foto13-4peu','0','150%');
//            animat('#foto13-4text p','200','-300px');
//            animat('#foto13-4text','400','-180%');
//            animat('#foto13-4','600','100%');
//            animat('#foto13-5','600','0');
//            animat('#foto13-5text','800','45%');
//            animat('#foto13-5boto','1000','0');
//            animal('#foto13-5peu','1200','0');
//            foto('#foto13-5boto','#foto13-5foto');
//            break;
//        case 990:
//            animal('#foto13-6peu p','0','300px');
//            animal('#foto13-6peu','200','150%');
//            animat('#foto13-6','400','-100%');
//            animat('#foto13-5','400','0');
//            animat('#foto13-5text','600','45%');
//            animat('#foto13-5boto','800','0');
//            animal('#foto13-5peu','1000','0');
//            break;
//        case 100:
//            animal('#foto13-5peu','0','150%');
//            animat('#foto13-5boto','200','-300px');
//            animat('#foto13-5text','400','-155%');
//            animat('#foto13-5','600','100%');
//            animat('#foto13-6','600','0');
//            animal('#foto13-6peu','800','0');
//            animal('#foto13-6peu p','1000','0');
//            video('#foto13-6boto','apartat13video2.html');
//            break;
//        case 1000:
//            animal('#foto13-7peu','0','150%');
//            animat('#foto13-7text','200','235%');
//            animat('#foto13-7','400','-100%');
//            animat('#foto13-6','400','0');
//            animal('#foto13-6peu','600','0');
//            animal('#foto13-6peu p','800','0');
//            break;
//        case 101:
//            animal('#foto13-6peu p','0','300px');
//            animal('#foto13-6peu','200','150%');
//            animat('#foto13-6','400','100%');
//            animat('#foto13-7','400','0');
//            animat('#foto13-7text','600','35%');
//            animal('#foto13-7peu','800','0');
//            break;
//        case 1010:
//            animat('#foto13-7text2','0','235%');
//            animao('#foto13-7 .tapa','200','0');
//            animat('#foto13-7text','400','35%');
//            animal('#foto13-7peu','600','0');
//            break;
//        case 102:
//            animal('#foto13-7peu','0','150%');
//            animat('#foto13-7text','200','-165%');
//            animao('#foto13-7 .tapa','400','.6');
//            animat('#foto13-7text2','600','35%');
//            break;
//        case 1020:
//            animal('#foto13-8peu','0','150%');
//            animat('#foto13-8boto3','200','300px');
//            animat('#foto13-8boto2','400','300px');
//            animab('#foto13-8botons','600','-185%');
//            animab('#foto13-8text','800','-180%');
//            animat('#foto13-8','1000','-100%');
//            animat('#foto13-7','1000','0');
//            animat('#foto13-7text2','1200','35%');
//            break;
//        case 103:
//            animat('#foto13-7text2','0','-165%');
//            animat('#foto13-7','200','100%');
//            animat('#foto13-8','200','0');
//            animab('#foto13-8text','400','20%');
//            animab('#foto13-8botons','600','15%');
//            animat('#foto13-8boto2','800','0');
//            animat('#foto13-8boto3','1000','0');
//            animal('#foto13-8peu','1200','0');
//            slider('#foto13-8boto1','#foto13-8fotos1',slider10);
//            slider('#foto13-8boto2','#foto13-8fotos2',slider11);
//            video('#foto13-8boto3','apartat13video3.html');
//            break;
//        case 1030:
//            $('#foto13-8video video')[0].pause();
//            animal('#foto13-8videopeu','0','-50%');
//            animat('#foto13-8video','200','200%');
//            animao('#foto13-8 .tapa','400','0'); 
//            animab('#foto13-8text','600','20%');
//            animab('#foto13-8botons','800','15%');
//            animat('#foto13-8boto2','1000','0');
//            animat('#foto13-8boto1','1200','0');
//            animal('#foto13-8peu','1400','0');
//            break;
//        case 104:
//            animal('#foto13-8peu','0','150%');
//            animat('#foto13-8boto1','200','-300px');
//            animat('#foto13-8boto2','400','-300px');
//            animab('#foto13-8botons','600','215%');
//            animab('#foto13-8text','800','220%');
//            animao('#foto13-8 .tapa','1000','.6'); 
//            $('#foto13-8video').delay('1200').animate({
//                'top':'0'
//            },trans,function(){
//                $('#foto13-8video video')[0].play();
//            });
//            animal('#foto13-8videopeu','1400','0');
//            $('#foto13-8video video').on('ended',function(){
//                passar(105);
//            });
//            break;
//        case 1040:
//            animat('#foto13-9text p:last','0','300px');
//            animat('#foto13-9text','200','215%');
//            animat('#foto13-9','400','-100%');
//            animat('#foto13-8','400','0'); 
//            $('#foto13-8video').delay('600').animate({
//                'top':'0'
//            },trans,function(){
//                $('#foto13-8video video')[0].play();
//            });
//            animal('#foto13-8videopeu','800','0');
//            break;
//        case 105:
//            $('#foto13-8video video')[0].pause();
//            animal('#foto13-8videopeu','0','-50%');
//            animat('#foto13-8video','200','-100%');
//            animat('#foto13-8','400','100%');
//            animat('#foto13-9','400','0');
//            animat('#foto13-9text','600','15%');
//            animat('#foto13-9text p:last','800','0');
//            break;
//        case 1050:
//            animat('#foto13-9text2','0','215%');
//            animao('#foto13-9 .tapa','200','0');
//            animat('#foto13-9text','400','15%');
//            animat('#foto13-9text p:first','600','0');
//            break;
//        case 106:
//            animat('#foto13-9text p:first','0','-300px');
//            animat('#foto13-9text','200','-185%');
//            animao('#foto13-9 .tapa','400','.8');
//            animat('#foto13-9text2','600','15%');
//            break;
//        case 1060:
//            $('#foto13-9video video')[0].pause();
//            animal('#foto13-9videopeu','0','-50%');
//            animao('#foto13-9 .tapa','200','.8');
//            animat('#foto13-9text2','400','15%');
//            break;
//        case 107:
//            animat('#foto13-9text2','0','-185%');
//            $('#foto13-9 .tapa').delay('200').animate({
//                'opacity':'0'
//            },trans,function(){
//                $('#foto13-9video video')[0].play();
//            });
//            animal('#foto13-9videopeu','400','0');
//            break;
//        case 1070:
//            animat('#foto13-10text','0','230%');
//            animat('#foto13-10','200','-100%');
//            $('#foto13-9').delay('200').animate({
//                'top':'0'
//            },trans,function(){
//                $('#foto13-9video video')[0].play();
//            });
//            animal('#foto13-9videopeu','400','0');
//            break;
//        case 108:
//            animal('#foto13-9videopeu','0','-50%');
//            animat('#foto13-9','200','100%');
//            animat('#foto13-10','200','0');
//            animat('#foto13-10text','400','30%');
//            break;
//        case 1080:
//            animat('#foto13-10text2','0','230%');
//            animat('#foto13-10text','0','30%');
//            break;
//        case 109:
//            animat('#foto13-10text','0','-70%');
//            animat('#foto13-10text2','0','30%');
//            break;
//    }
//}