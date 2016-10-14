<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible">
        <title>Buda, l'illa del Delta</title>
        <meta name="description" content="Documental interactiu sobre Buda, la illa del Delta">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="../css/registre.css" rel="stylesheet" type="text/css"/>
        <link href="../css/estil.css" rel="stylesheet" type="text/css"/>
        <link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link href="../css/toastr.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/apartat.css" rel="stylesheet" type="text/css"/>
        
        <script src="../js/jquery-2.2.4.min.js" type="text/javascript"></script>
    </head>
    <body>
        <nav class="navbar navbar-default"><?php include '../menu/menusuperior.php'; ?></nav>
        <!--Fi capçalera-->
        <audio loop id="audio">
            <source src="../musica/Buda Frag 6 de 7.mp3" type="audio/mpeg">
        </audio>
        <!----------------------------------------->
        <!----------------------------------------->
        <!--*************************************-->
        <!--***********  Menú lateral  **********-->
        <!--*************************************-->
        <!----------------------------------------->
        <!----------------------------------------->
        <div id="m"></div>
        <div id="mi">
            
        </div>
        <!----------------------------------------->
        <!----------------------------------------->
        <!--*************************************-->
        <!--*********  Fi Menú lateral  *********-->
        <!--*************************************-->
        <!----------------------------------------->
        <!----------------------------------------->
        
        
        <!----------------------------------------->
        <!----------------------------------------->
        <!--*************************************-->
        <!--*************  Dossier  *************-->
        <!--*************************************-->
        <!----------------------------------------->
        <!----------------------------------------->
        <div id="dossierapartat" class="containerapartat">
            
        </div>
        <!----------------------------------------->
        <!----------------------------------------->
        <!--*************************************-->
        <!--************  Fi Dossier  ***********-->
        <!--*************************************-->
        <!----------------------------------------->
        <!----------------------------------------->
        <div class="containerapartat" id="apartat1">
            <div id="foto1-1" class="fotofons">
                <div id="foto1-1text" class="col-lg-8 col-md-8 col-lg-offset-1 col-md-offset-1">
                    <h2 class="verdfosc">EL CONREU DE L’ARRÒS A L’ILLA DE BUDA</h2>                
                </div>
                <p id="foto1-1peu" class="peu col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-3">Foto: Salvador Maluquer.</p>
                <div class="scroll">
                    <img src="img/scroll_verd.png" alt="Fes scroll per continuar"/>
                </div>
                <div class="tapa verdfosc"></div>
                <div id="foto1-1text2" class="col-lg-4 col-md-4 col-lg-offset-1 col-md-offset-1">
                    <p>L’arròs era la vida en majúscula, a Buda. Era l’estímul que ho movia tot: el treball, la quotidianitat, les relacions socials i econòmiques, les costums, les eines i equips per al seu conreu i transformació... fins i tot el paisatge, que, com en tota la Ribera, quedava sotmès als constants canvis de fesomia i color del terreny.</p>              
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="08arros/foto/_MG_8109.jpg" data-text="08arros/text/text1.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div id="foto1-1video" class="videofons">
                    <video poster="video/BD_TVE_Arros.jpg" preload>
                        <source src="video/BD_TVE_Arros.mp4" type="video/mp4">
                        <source src="video/BD_TVE_Arros.ogg" type="video/ogg">
                        <source src="video/BD_TVE_Arros.webm" type="video/webm">
                    </video>
                </div>                    
                <div id="foto1-1videopeu" class="groc videopeu">
                    Reportatge sobre el conreu de l'arròs al delta de l'Ebre.<br>Arxiu TVE (No-Do).
                </div>
            </div>
            <div id="foto1-2" class="fotofons">
                <div id="foto1-2text" class="col-lg-4 col-md-4 col-lg-offset-1 col-md-offset-1">
                    <p class="verdfosc">Amb la construcció del canal de la dreta de l’Ebre l’any 1860, el projecte va continuar avançant fins a dins l’Illa de Buda,  connectant-s’hi amb el canal de la dreta entre els anys 1881-1882, mitjançant un tub soterrat que travessava el braç de Migjorn, quan n’era propietari Joan Folch Cruz, segons afirmen els testimonis orals d’encarregats de l’illa.</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="08arros/foto/Mapa_CHE_1880-bn.jpg" data-text="08arros/text/text2.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                    <div class="clearfix"></div>
                    <h2 class="verdfosc col-lg-10 col-md-10">ELS INICIS</h2>                
                </div>
                <p id="foto1-2peu" class="peu col-lg-offset-1 col-md-offset-1 col-lg-3 col-md-3">Disseny de la canalització de la Dreta de l’Ebre a la dècada de 1880.<br>Font: Confederación Hidrográfica del Ebro.</p>
            </div>
            <div id="foto1-3" class="fotofons">
                <div id="foto1-3text" class="col-lg-4 col-md-4 col-lg-offset-1 col-md-offset-1">
                    <p>A l’abril de l’any 1923 es va atorgar una concessió per Ordre Ministerial al propietari Carlos Casades de Códol, per a fer les obres de construcció d’un sifó d’acer de 900 mm. de diàmetre, que travessaria el riu Migjorn per sota i comunicar el canal de rec de l’illa de Buda, amb una longitud de 72 metres.</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="08arros/foto/Mapa_CHE_1880.jpg" data-text="08arros/text/text3.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
            </div>
            <div id="foto1-4" class="fotofons">
                <div id="foto1-4foto1" class="fotofons"></div>
                <div id="foto1-4foto2" class="fotofons"></div>
                <div id="foto1-4text" class="col-lg-4 col-md-4 col-lg-offset-7 col-md-offset-7">
                    <p><i>Des que l’aigua dolça va entrar dins l’illa a través de les sèquies i canals que s’hi van construir, l’arribada de treballadors dels nuclis de La Cava, Jesús i Maria i Sant Jaume d’Enveja, -a més de forans vinguts sobretot de València i Aragó- van transformar-la fins fer de l’arròs el cultiu predominant.</i></p>
                </div>
                <div id="foto1-4text2" class="col-lg-4 col-md-4 col-lg-offset-7 col-md-offset-7">
                    <p class="verdfosc">Malgrat el pas dels anys, l’arribada de l’aigua de rec als camps de Buda segueix un patró secular. Mitjançant un sistema de comportes, l’aigua del canal de la Dreta de l’Ebre deixa de derivar-se al riu Migjorn per anar a parar mitjançant el tub soterrat a la xarxa de canals i sèquies de l’illa.</p>
                </div>
                <p id="foto1-4peu" class="peu col-lg-offset-1 col-md-offset-1 col-lg-3 col-md-3">Foto: Guillermo Barberà</p>
            </div>
            <div id="foto1-5" class="videofull">
                <video poster="video/soltada_aigua.jpg" preload>
                    <source src="video/soltada_aigua.mp4" type="video/mp4">
                    <source src="video/soltada_aigua.ogg" type="video/ogg">
                    <source src="video/soltada_aigua.webm" type="video/webm">
                </video>
                <p class="groc videopeu">Obertura de les comportes del canal de la Dreta de l’Ebre que permeten l’entrada d’aigua de reg als arrossars de l’illa de Buda</p>
            </div>
        </div>
        <div class="containerapartat" id="apartat2"></div>
        <div class="containerapartat" id="apartat3"></div>
        <div class="containerapartat" id="apartat4"></div>
        
        <div class="videopopup">
            <div id="videos"></div>
        </div>
    
        <script src="js/jquery-ui.min.js" type="text/javascript"></script>
        <script src="../js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/TweenMax.min.js" type="text/javascript"></script>
        <script src="js/Draggable.min.js" type="text/javascript"></script>
        <script src="../js/toastr.min.js" type="text/javascript"></script>
        <script src="../js/apartats.js" type="text/javascript"></script>
        <script src="js/funcions.js" type="text/javascript"></script>
        <script src="js/jquery.rotate.js" type="text/javascript"></script>
        <script src="../js/menu.js" type="text/javascript"></script>
    <?php
        if (isset($_COOKIE['personatge'])){ ?>
    <script>guardarActual(8);</script>
        <?php }
    ?>
        <script>
            var pos = 10;
            $(window).load(function(){
                Draggable.create($('.f'));
                diapositiva(1);
                $('#m').load('../menu/menu.html',function(){
                    menu();
                    $('#menu2').click(function(){
                        $('#mi').animate({
                            bottom: '0'
                        }, 200);
                        $(window).unbind('wheel');
                        $(document).off( "keydown" );
                    });
                });
            });
        </script>
    </body>
</html>