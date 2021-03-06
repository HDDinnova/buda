<?php
    session_start();
?>
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
            <source src="../musica/Buda Frag 1 de 7.mp3" type="audio/mpeg">
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
            <div class="menuinf">
                <a id="1" href="#">
                    <img src="menu/01illa.jpg" alt="thumbnail apartat illa">
                    <h3>L'ILLA DE BUDA</h3>
                </a>
                <a id="14" href="#">
                    <img src="menu/02regressio.jpg" alt="thumbnail apartat regressio">
                    <h3>LA REGRESSIÓ</h3>
                </a>
            </div>
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
                <div id="foto1-1text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2 class="taronga col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-6 col-md-6 col-sm-9 col-xs-10">L'illa de Buda</h2>
                    <div class="clearfix"></div>
                    <p class="taronga col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-9 col-xs-10">Metonímia del Delta de l’Ebre</p>
                </div>
                <p id="foto1-1peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer (dècades de 1950 i  1960).<br>Arxiu Parc Natural del Delta de l’Ebre</p>
                <div class="scroll">
                    <img src="img/scroll_taronga.png" alt="Fes scroll per continuar"/>
                </div>
                <div class="tapa taronga"></div>
                <div id="foto1-1text2" class="col-lg-11 col-md-11 col-sm-11 col-xs-11 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <p class="col-lg-4 col-md-4 col-sm-9 col-xs-10">Actualment, Buda s’integra dins de diverses figures de protecció del medi natural: espai PEIN “Delta de l’Ebre”, Parc Natural del delta de l’Ebre i Xarxa Natura 2000.</p>
                    <div class="clearfix"></div>
                    <div class="boto" id="foto1-1b">
                        <img class="blau" id="foto1-1i" src="img/play.png" alt="reproduir video de Francesc Vidal">
                    </div>
                </div>
                <div id="foto1-1text3" class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <p class="col-lg-12 col-md-12 col-sm-9 col-xs-10">L’illa de Buda abasta unes 1.100 hectàrees, de les quals unes 250 són arrossars i la resta es reparteixen entre els diferents hàbitats o ambients naturals propis del Delta: els canyissars de les àrees i marges fluvials, les jonqueres i els salicornars dels ambients salobres, i les llacunes litorals anomenades “Calaixos” (Calaix Gran i Calaix de Mar)</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="00metaforadelta/foto/IMG003PNDE.jpg" data-text="00metaforadelta/text/text1.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div class="f">
                    <img id="pnde1" src="foto/IMG001PNDE.jpg" alt="Foto històrica 1 del Delta"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="00metaforadelta/foto/IMG001PNDE.jpg" data-descripcio="Salvador Maluquer - l’illa de Buda (dècada de 1950 i 1960)" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div class="f">
                    <img id="pnde2" src="foto/IMG002PNDE.jpg" alt="Foto històrica 2 del Delta"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="00metaforadelta/foto/IMG002PNDE.jpg" data-descripcio="Salvador Maluquer - l’illa de Buda (dècada de 1950 i 1960)" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div class="f">
                    <img id="pnde3" src="foto/IMG004PNDE.jpg" alt="Foto històrica 3 del Delta"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="00metaforadelta/foto/IMG004PNDE.jpg" data-descripcio="Salvador Maluquer - l’illa de Buda (dècada de 1950 i 1960)" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div class="f">
                    <img id="pnde4" src="foto/IMG010PNDE.jpg" alt="Foto històrica 4 del Delta"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="00metaforadelta/foto/IMG010PNDE.jpg" data-descripcio="Salvador Maluquer - l’illa de Buda (dècada de 1950 i 1960)" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div id="foto1-1peufotos" class="peu groc col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">
                    Fotos: Salvador Maluquer (dècades de 1950 i  1960).<br>Arxiu Parc Natural del Delta de l’Ebre
                </div>
            </div>
        </div>
        <div class="containerapartat" id="apartat2"></div>
        
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
    <script src="js/jquery.mousewheel.min.js" type="text/javascript"></script>
    <script src="js/jquery.rotate.js" type="text/javascript"></script>
    <script src="../js/menu.js" type="text/javascript"></script>
    <?php
        if (isset($_COOKIE['personatge'])){ ?>
    <script>guardarActual(0);</script>
        <?php }
    ?>
    <script>
        var pos = 10;
        $(window).load(function(){
            Draggable.create($('#foto1-1 .f'));
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