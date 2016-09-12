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
                <div id="foto1-1text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <h2 class="blaufosc col-lg-5 col-md-5 col-sm-9 col-xs-10">LA PESCA</h2>                
                </div>
                <p id="foto1-1peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre).</p>
                <div class="scroll">
                    <img src="img/scroll_blaufosc.png" alt="Fes scroll per continuar"/>
                </div>
            </div>
            <div id="foto1-2" class="fotofons">
                <div id="foto1-2text" class="col-lg-3 col-md-3 col-sm-9 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <h2 class="blaufosc">Una mica d'història...</h2>
                    <div class="clearfix"></div>
                    <p class="blaufosc">L’illa de Buda, concedida pel Reial Patrimoni el 1739 –llavors ocupava unes 6 hectàrees–, va créixer espectacularment en els 150 anys posteriors.</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="05pesca/foto/dreta_1880-bn.jpg" data-text="05pesca/text/text1.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <p id="foto1-2peu" class="peu taronga col-lg-offset-9 col-md-offset-8 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">L’hemidelta dret de l’Ebre (1880).<br>Font: Instituto Nacional de Cartografía.</p>
            </div>
            <div id="foto1-3" class="fotofons">
                <div id="foto1-3text" class="col-lg-4 col-md-4 col-sm-9 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <p class="blaufosc">En dades sobre pesca a les basses del delta de l’Ebre que daten del darrer terç del segle XIX (Fabregat, E.; MMB, 2010), l’any 1881 l’illa de Buda havia crescut fins a més de 1.000 hectàrees. D’aquestes, una bona part corresponien a basses i llacunes.<br>Com que la pràctica totalitat de Buda s’havia format a partir de mitjans del segle XVIII, segurament hi havia molts espais inundats, formats a partir del tancament de braços de mar per barres de sorra creades per l’acció conjunta de l’Ebre i del mar. </p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="05pesca/foto/dreta_1880.jpg" data-text="05pesca/text/text2.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
            </div>
            <div id="foto1-4" class="fotofons">
                <div id="foto1-4text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <div class="col-lg-3 col-md-3 col-sm-9 col-xs-10">
                        <p class="verdfosc">Les basses dels Calaixos, riquíssimes en nutrients pel barreig d’aigua dolça i salada, juntament amb altres factors idonis com la temperatura i la salinitat, han afavorit la presència d’una elevada varietat d’espècies ictiològiques.</p>
                        <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                        <div class="guardartext">
                            <img src="../img/save.png" alt="icona guardar" data-img="05pesca/foto/Santi106.jpg" data-text="05pesca/text/text3.html" onclick="guardarText(this)"/>
                        </div>
                            <?php }
                        ?>
                    </div>
                    <div class="clearfix"></div>
                    <h2 class="verdfosc col-lg-7 col-md-7 col-sm-9 col-xs-10">Els peixos de les llacunes</h2>
                </div>
                <p id="foto1-4peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">La pesca a les llacunes de Buda al primer terç del s.XX.<br>Foto: Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre).</p>
                <div class="tapa verdfosc"></div>
                <div id="foto1-4text2" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <p class="blanc col-lg-3 col-md-3 col-sm-9 col-xs-10">D’aquestes, n’hi ha que són sedentàries, és a dir, que tanquen el seu cicle vital a l’interior de les basses, com el fartet (Lebias ibera) i el barb (Pomatochistus microps).</p>
                </div>
                <div id="foto1-4peixos1" class="peixos col-lg-12 col-md-12">
                    <div class="col-md-5 text-center">
                        <img src="img/fartet.png" alt="imatge del peix fartet"/>
                        <div class="clearfix"></div>
                        <p class="verdfosc col-lg-offset-4 col-md-offset-4 col-lg-4 col-md-4"><strong>fartet</strong><br><em>Lebias ibera</em></p>
                    </div>
                    <div class="col-md-7 text-center">
                        <img src="img/barb.png" alt="imatge del peix barb"/>
                        <div class="clearfix"></div>
                        <p class="verdfosc col-lg-offset-4 col-md-offset-4 col-lg-4 col-md-4"><strong>barb</strong><br><em>Pomatochistus microps</em></p>
                    </div>
                </div>
                <div id="foto1-4peixos2" class="peixos col-lg-12 col-md-12">
                    <div class="col-md-6 text-center">
                    <img src="img/llisa-vera.png" alt="imatge del peix llisa vera"/>
                        <div class="clearfix"></div>
                        <p class="verdfosc col-lg-offset-4 col-md-offset-4 col-lg-4 col-md-4"><strong>Llisa Vera</strong><br><em>Chelon labrosus</em></p>
                    </div>
                    <div class="col-md-6 text-center">
                    <img src="img/llobarro.png" alt="imatge del peix llobarro"/>
                        <div class="clearfix"></div>
                        <p class="verdfosc col-lg-offset-4 col-md-offset-4 col-lg-4 col-md-4"><strong>Llobarro</strong><br><em>Dicentrarchus labrax</em></p>
                    </div>
                </div>
                <div id="foto1-4peixos3" class="peixos col-lg-12 col-md-12">
                    <div class="col-md-6 text-center">
                    <img src="img/anguila.png" alt="imatge del peix llisa anguila"/>
                        <div class="clearfix"></div>
                        <p class="verdfosc col-lg-offset-4 col-md-offset-4 col-lg-4 col-md-4"><strong>Anguila</strong><br><em>Anguilla anguilla</em></p>
                    </div>
                    <div class="col-md-6 text-center">
                    <img src="img/orada.png" alt="imatge del peix orada"/>
                        <div class="clearfix"></div>
                        <p class="verdfosc col-lg-offset-4 col-md-offset-4 col-lg-4 col-md-4"><strong>Orada</strong><br><em>Sparus aurata</em></p>
                    </div>
                </div>
            </div>
            <div id="foto1-5" class="fotofons">
                <div id="foto1-5text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <p class="col-lg-4 col-md-4 col-sm-9 col-xs-10">D’altres s’hi pesquen temporalment segons les èpoques de l’any; són les espècies que fan migracions entre les basses i el mar.</p>
                    <div class="clearfix"></div>
                    <img src="img/marca-1.png" alt="icona gràfica"/>
                </div>
                <p id="foto1-5peu" class="peu verdfosc col-lg-offset-9 col-md-offset-8 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">La pesca a les llacunes de Buda al primer terç del s.XX.<br>Foto: Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre).</p>
            </div>
            <div id="foto1-6" class="fotofons">
                <div id="foto1-6text" class="col-lg-3 col-md-3 col-sm-9 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <p class="verdfosc">A les basses del Delta, i així mateix als Calaixos de Buda, sobretot durant la primavera i l’estiu, el canal que connecta la llacuna amb el riu i el mar roman obert, i l’angula i molts peixos menuts i adults de les badies penetren dins les llacunes buscant-hi aliment i refugi. És a la tardor i a l’hivern quan fan la migració des de les llacunes cap al mar.</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="05pesca/foto/Santi096.jpg" data-text="05pesca/text/text4.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <p id="foto1-6peu" class="peu verdfosc col-lg-offset-9 col-md-offset-8 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">La pesca a les llacunes de Buda al primer terç del s.XX.<br>Foto: Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre).</p>
            </div>
            <div id="foto1-7" class="fotofons">
                <div class="tapa verdfosc"></div>
                <div id="foto1-7text" class="col-lg-3 col-md-3 col-sm-11 col-xs-11 col-lg-offset-8 col-md-offset-8 col-sm-offset-1 col-xs-offset-1">
                    <img src="img/marca-2.png" alt="icona gràfica"/>
                    <div class="clearfix"></div>
                    <p class="blanc">Segons les zones i les èpoques, s’hi pescaven més unes espècies que d’altres, però les més abundants han estat aquestes les principals espècies capturades: l’anguila, la llissa, la carpa, el llobarro i l’orada (muixarra).</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="05pesca/foto/Santi105.jpg" data-text="05pesca/text/text5.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <p id="foto1-7peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre).</p>
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
        <script src="js/Draggable.min.js" type="text/javascript"></script>
        <script src="../js/toastr.min.js" type="text/javascript"></script>
        <script src="js/slick.min.js" type="text/javascript"></script>
        <script src="../js/apartats.js" type="text/javascript"></script>
        <script src="js/funcions.js" type="text/javascript"></script>
        <script src="js/jquery.rotate.js" type="text/javascript"></script>
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