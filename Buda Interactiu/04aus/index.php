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
                <div id="foto1-1text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <h2 class="verd col-lg-8 col-md-8 col-sm-9 col-xs-10">LES AUS DE BUDA</h2>                
                </div>
                <p id="foto1-1peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer</p>
                <div class="scroll">
                    <img src="img/scroll_verd.png" alt="Fes scroll per continuar"/>
                </div>
            </div>
            <div id="foto1-2" class="fotofons">
                <div id="foto1-2text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <h2 class="verd col-lg-7 col-md-7 col-sm-9 col-xs-10">ELS CALAIXOS DE BUDA</h2>
                    <div class="clearfix"></div>
                    <p class="verd col-lg-4 col-md-4 col-sm-9 col-xs-10">Un hàbitat únic per a les aus</p>
                </div>
                <p id="foto1-2peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer (dècada de 1950 i 1960).<br>Arxiu Parc Natural del Delta de l’Ebre.</p>
            </div>
            <div id="foto1-3" class="fotofons">
                <p id="foto1-3peu" class="peu verd col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer (dècada de 1950 i 1960).<br>Arxiu Parc Natural del Delta de l’Ebre.</p>
                <div class="tapa verd"></div>
                <div id="foto1-3text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <img src="img/marca1.png" alt="icona gràfica"/>
                    <div class="clearfix"></div>
                    <p class="col-lg-4 col-md-4 col-sm-9 col-xs-10">Una manera d’avaluar la sostenibilitat d’un hàbitat és mesurar la seua biodiversitat d’organismes vius i ecosistemes que el formen. I Buda és un d’aquests hàbitats, especialment per als ocells.</p>
                </div>
            </div>
            <div id="foto1-4" class="fotofons">
                <p id="foto1-4peu" class="peu verd col-lg-offset-9 col-md-offset-8 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer (dècada de 1950 i 1960).<br>Arxiu Parc Natural del Delta de l’Ebre.</p>
                <div class="tapa verd"></div>
                <div id="foto1-4text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-7 col-md-offset-7 col-sm-offset-1 col-xs-offset-1">
                    <p class="col-lg-4 col-md-4 col-sm-9 col-xs-10">És sobretot a les llacunes dels Calaixos on no és gens difícil veure-hi sobrevolar flamencs, ànecs ó rapinyaires i observar moltes altres aus aquàtiques: limícoles, gavines i xatracs, corbs marins...</p>
                    <div class="clearfix"></div>
                    <div id="foto1-4boto" class="boto">
                        <img class="groc" src="img/play.png" alt="reproduir video">
                    </div>
                </div>
            </div>
            <div id="foto1-5" class="fotofons">
                <p id="foto1-5peu" class="peu verd col-lg-offset-9 col-md-offset-8 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer (dècada de 1950 i 1960).<br>Arxiu Parc Natural del Delta de l’Ebre.</p>
                <div class="tapa verd"></div>
                <div id="foto1-5text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-7 col-md-offset-7 col-sm-offset-1 col-xs-offset-1">
                    <p class="blanc col-lg-4 col-md-4 col-sm-9 col-xs-10">Els Calaixos de Buda són les basses més privilegiades del delta de l’Ebre: aquí nidifiquen, hivernen o són lloc de parada en les migracions d’aquestes aus.</p>
                </div>
            </div>
            <div id="foto1-6" class="fotofons">
                <p id="foto1-6peu" class="peu verd col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer (dècada de 1950 i 1960).<br>Arxiu Parc Natural del Delta de l’Ebre.</p>
                <div class="tapa verd"></div>
                <div id="foto1-6text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <p class="blanc col-lg-4 col-md-4 col-sm-9 col-xs-10">Aquí s’hi concentra una bona part de tots els ocells que habiten el Delta, cridats per la riquesa i qualitat de les aigües i la vegetació que les envolta. Aquest fet va veure’s reconegut el febrer de 1994, quan es va declarar per la Generalitat de Catalunya la reserva natural de fauna silvestre de la part meridional de l’illa de Buda i les llacunes dels Calaixos.</p>
                </div>
                <div class="f">
                    <img id="sarroimg1" src="foto/IMG021PNDE.jpg" alt="Foto històrica 1 del Delta"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="00metaforadelta/foto/IMG001PNDE.jpg" data-descripcio="Foto històrica 1 del Delta" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div class="f">
                    <img id="sarroimg2" src="foto/IMG026PNDE.jpg" alt="Foto històrica 1 del Delta"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="00metaforadelta/foto/IMG001PNDE.jpg" data-descripcio="Foto històrica 1 del Delta" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div class="f">
                    <img id="sarroimg3" src="foto/IMG027PNDE.jpg" alt="Foto històrica 1 del Delta"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="00metaforadelta/foto/IMG001PNDE.jpg" data-descripcio="Foto històrica 1 del Delta" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div class="f">
                    <img id="sarroimg4" src="foto/IMG029PNDE.jpg" alt="Foto històrica 1 del Delta"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="00metaforadelta/foto/IMG001PNDE.jpg" data-descripcio="Foto històrica 1 del Delta" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div class="f">
                    <img id="sarroimg5" src="foto/IMG034PNDE.jpg" alt="Foto històrica 1 del Delta"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="00metaforadelta/foto/IMG001PNDE.jpg" data-descripcio="Foto històrica 1 del Delta" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
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
        <script src="js/Draggable.min.js" type="text/javascript"></script>
        <script src="../js/toastr.min.js" type="text/javascript"></script>
        <script src="../js/apartats.js" type="text/javascript"></script>
        <script src="js/funcions.js" type="text/javascript"></script>
        <script src="js/jquery.rotate.js" type="text/javascript"></script>
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