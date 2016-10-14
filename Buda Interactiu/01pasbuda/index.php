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
            <source src="../musica/Buda Frag 2 de 7.mp3" type="audio/mpeg">
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
            <div id="foto1-1" class="videofull">
                <video poster="video/08_VoraRiu_1.jpg">
                    <source src="video/08_VoraRiu_1.mp4" type="video/mp4">
                    <source src="video/08_VoraRiu_1.ogg" type="video/ogg">
                    <source src="video/08_VoraRiu_1.webm" type="video/webm">
                </video>
                <div id="foto1-1text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-4 col-md-4 col-sm-9 col-xs-10">
                        <p class="blau">Buda, avui amb unes 1.100 hectàrees de superfície, és una illa fluvial i marítima, que forma un triangle entre el riu Migjorn, la riba dreta de l’actual desembocadura de l’Ebre i la Mediterrània.</p>
                        <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                        <div class="guardartext">
                            <img src="../img/save.png" alt="icona guardar" data-img="01pasbuda/video/08_VoraRiu_1.jpg" data-text="01pasbuda/text/text1.html" onclick="guardarText(this)"/>
                        </div>
                            <?php }
                        ?>
                    </div>
                    <h2 class="blau col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-7 col-md-7 col-sm-9 col-xs-10">El pas de buda</h2>
                </div>
                <div class="scroll">
                    <img src="img/scroll_blau.png" alt="Fes scroll per continuar"/>
                </div>
                <div class="tapa blau"></div>
                <div id="foto1-1text2" class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="col-lg-1 col-md-1">
                        <img id="marca" src="img/marca1.png" alt="icona destacat"/>
                    </div>
                    <p class="col-lg-offset-1 col-md-offset-1 col-lg-11 col-md-11"><strong>En algunes èpoques de l’any només es pot accedir a l’illa de Buda creuant el riu Migjorn amb un petit transbordador o bé creuant el riu Ebre en barca des de la riba esquerra.</strong></p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="01pasbuda/video/08_VoraRiu_1.jpg" data-text="01pasbuda/text/text2.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div id="foto1-1foto" class="col-lg-offset-7 col-md-offset-7 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <img src="foto/_MG_8133.jpg" alt="Pas de buda pel riu ebre"/>
                    <div class="peu col-lg-5 col-md-5 col-lg-offset-9 col-md-offset-9 groc">
                        Pas de Buda pel riu Ebre.<br>Foto: Salvador Maluquer (dècada de 1950).
                    </div>
                </div>
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
    <script src="../js/toastr.min.js" type="text/javascript"></script>
    <script src="../js/apartats.js" type="text/javascript"></script>
    <script src="js/funcions.js" type="text/javascript"></script>
    <script src="js/jquery.rotate.js" type="text/javascript"></script>
    <script src="../js/menu.js" type="text/javascript"></script>
    <?php
        if (isset($_COOKIE['personatge'])){ ?>
    <script>guardarActual(1);</script>
        <?php }
    ?>
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
</html>