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
        
        <script src="../js/jquery-2.1.4.min.js" type="text/javascript"></script>
    </head>
    <body>
        <nav class="navbar navbar-default"><?php include '../menu/menusuperior.php'; ?></nav>
        <!--Fi capçalera-->
        <audio loop id="audio">
            <source src="../musica/Buda Frag 3 de 7.mp3" type="audio/mpeg">
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
                <div id="foto1-1text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <p class="verd col-lg-4 col-md-4 col-sm-10 col-xs-10">La serenitat que desprenen les basses de Buda és assimilable a la catarsi. Les aigües minses, el xiuxiueig suau dels
                    canyissars moguts per l’aire, l’olor dolça i penetrant, el cel que s’emmiralla tant si enlluerna el sol com si hi ha
                    núvols, esdevenen un regal per als sentits</p>
                    <div class="clearfix"></div>
                    <h2 class="verd col-lg-6 col-md-6 col-sm-9 col-xs-10">ELS CALAIXOS</h2>                
                </div>
                <p id="foto1-1peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer (dècada de 1950 i 1960).</p>
                <div class="scroll">
                    <img src="img/scroll_verd.png" alt="Fes scroll per continuar"/>
                </div>
                <div class="tapa verd"></div>
                <div id="foto1-1text2" class="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-lg-offset-8 col-md-offset-8 col-sm-offset-1 col-xs-offset-1">
                    <p><strong>Els típics barquets de perxar són el mètode més eficaç per penetrar-hi. Un seguit de petits canals hi permeten accedir.</strong></p>
                    <img src="img/marca1.png" alt="imatge de decoració"/>
                </div>
                <div id="foto1-1video" class="videofull">
                    <video poster="video/Sarro_calaixos_2.jpg" preload controls>
                        <source src="video/Sarro_calaixos_2.mp4" type="video/mp4">
                        <source src="video/Sarro_calaixos_2.ogg" type="video/ogg">
                        <source src="video/Sarro_calaixos_2.webm" type="video/webm">
                    </video>
                    <p class="peu groc col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2">Navegació i passeig pels Calaixos de Buda.<br>Filmació: Artur Sarró (dècada de 1960)</p>
                </div>
            </div>
        </div>
        <div class="containerapartat" id="apartat2"></div>
        <div class="containerapartat" id="apartat3"></div>
        <div class="containerapartat" id="apartat4"></div>
        <div class="containerapartat" id="apartat5"></div>
        <div class="containerapartat" id="apartat6"></div>
        
        <div class="videopopup">
            <div id="videos"></div>
        </div>
    
        <script src="js/jquery-ui.min.js" type="text/javascript"></script>
        <script src="../js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/TweenMax.min.js" type="text/javascript"></script>
        <script src="../js/toastr.min.js" type="text/javascript"></script>
        <script src="../js/apartats.js" type="text/javascript"></script>
        <script src="js/funcions.js" type="text/javascript"></script>
        <script src="js/jquery.rotate.js" type="text/javascript"></script>
        <script src="../js/menu.js" type="text/javascript"></script>
        <script>
            var pos = 10;
            $(window).load(function(){
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
