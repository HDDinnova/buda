<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible">
        <title>Buda, l'illa del Delta</title>
        <meta name="description" content="Documental interactiu sobre Buda, la illa del Delta">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="../css/estil.css" rel="stylesheet" type="text/css"/>
        <link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link href="../css/toastr.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/apartat.css" rel="stylesheet" type="text/css"/>
        <link href="css/slick.css" rel="stylesheet" type="text/css"/>
        <link href="css/slick-theme.css" rel="stylesheet" type="text/css"/>
        
        <script src="../js/jquery-2.2.4.min.js" type="text/javascript"></script>
        <script src="../js/menu.js" type="text/javascript"></script>
    </head>
    <body>
        <nav class="navbar navbar-default"><?php include '../menu/menusuperior.php'; ?></nav>
        <!--Fi capçalera-->
        <audio loop id="audio">
            <source src="../musica/Buda Frag 4 de 7.mp3" type="audio/mpeg">
        </audio>
        <!--Menú lateral-->
        <div id="m"></div>
        <div id="mi">
            <div class="menuinf">
                
            </div>
        </div>
        <!--Fi menú lateral-->
        <div class="containerapartat" id="apartat1">
            <div id="foto1-1" class="fotofons">
                <div id="foto1-1text" class="col-lg-offset-1 col-md-offset-1 col-lg-7 col-md-7">
                    <h2 class="blaufosc">Els “vapors”<br>i els grans viatges cap a Buda</h2>                
                </div>
                <p id="foto1-1peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">El vapor Anita a la passarel·la del far de Buda. Arxiu Borrell (gentilesa Arxiu Històric Comarcal del Baix Ebre)</p>
                <div class="scroll">
                    <img src="img/scroll_blaufosc.png" alt="Fes scroll per continuar"/>
                </div>
            </div>
            <div id="foto1-2" class="fotofons">
                <p id="foto1-2peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">El vapor “Rápido”. Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)</p>
                <div class="tapa blaufosc"></div>
                <div id="foto1-2text" class="col-lg-offset-8 col-md-offset-8 col-lg-3 col-md-3">
                    <p>Entre la segona meitat del segle XIX i el primer terç del segle XX, els vaixells de vapor van constituir l’element més característic i alhora innovador del trànsit fluvial pel tram final de l’Ebre</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="10vapors/foto/Santi082.jpg" data-text="10vapors/text/text1.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
            </div>
            <div id="foto1-3" class="fotofons">
                <div id="foto1-3text" class="col-lg-offset-7 col-md-offset-7 col-lg-4 col-md-4">
                    <p class="blaufosc">Durant aquest període, hi ha constancia de més de 15 vapors que van navegar-hi, fins i tot realitzant navegació de cabotatge, tot sortint a mar i fent escales a diversos ports com Barcelona, Tarragona i Vilanova</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="10vapors/foto/Foto_Tarraconense.jpg" data-text="10vapors/text/text2.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <p id="foto1-3peu" class="peu col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-3">El vapor “Tarraconense” al seu pas per la façana fluvial de Tortosa</p>
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
        <script src="js/slick.min.js" type="text/javascript"></script>
        <script src="../js/apartats.js" type="text/javascript"></script>
        <script src="js/funcions.js" type="text/javascript"></script>
        <script src="js/jquery.rotate.js" type="text/javascript"></script>
        <script src="js/jquery.elevateZoom-3.0.8.min.js" type="text/javascript"></script>
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