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
            <source src="../musica/Buda Frag 7 de 7.mp3" type="audio/mpeg">
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
                <div id="foto1-1text" class="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                    <h2 class="groc">La cacera a Buda</h2>                
                </div>
                <p id="foto1-1peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Guillermo Barberà</p>
                <div class="scroll">
                    <img src="img/scroll_groc.png" alt="Fes scroll per continuar"/>
                </div>
            </div>
            <div id="foto1-2" class="fotofons">
                <div id="foto1-2text" class="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-lg-offset-8 col-md-offset-8 col-sm-offset-1 col-xs-offset-1">
                    <p><strong>La caça esdevé una activitat cinegètica molt arrelada a Buda. La memòria contada per colons i propietaris, diaris de caça, documents fílmics i fotogràfics, notícies i articles apareguts en la premsa de diferents dècades i altres fonts en són testimoni clau.</strong></p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="07cacera/foto/Santi077.jpg" data-text="07cacera/text/text1.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                    <div class="clearfix"></div>
                    <div id="foto1-2boto1" class="boto">
                        <img class="groc" src="img/foto.png" alt="mostrar fotos">
                    </div>
                    <div class="clearfix"></div>
                    <div id="foto1-2boto2" class="boto col-lg-offset-3">
                        <img class="groc" src="img/foto.png" alt="mostrar fotos">
                    </div>
                    <div class="clearfix"></div>
                    <div id="foto1-2boto3" class="boto col-lg-offset-6">
                        <img class="groc" src="img/play.png" alt="reproduir video">
                    </div>
                </div>
                <p id="foto1-2peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre).</p>
                <div id="fotos1-2fotos" class="slider">
                    <div class="sliderfotos">
                        <div>
                            <img src="foto/Santi108.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)."/>
                            <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                            <div class="guardar">
                                <img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi108.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/>
                            </div>
                                <?php }
                            ?>
                        </div>
                        <div>
                            <img src="foto/Santi133.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)."/>
                            <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                            <div class="guardar">
                                <img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi133.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/>
                            </div>
                                <?php }
                            ?>
                        </div>
                        <div>
                            <img src="foto/Santi185.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)."/>
                            <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                            <div class="guardar">
                                <img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi185.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/>
                            </div>
                                <?php }
                            ?>
                        </div>
                        <div>
                            <img src="foto/Santi159.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)."/>
                            <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                            <div class="guardar">
                                <img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi159.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/>
                            </div>
                                <?php }
                            ?>
                        </div>
                    </div>
                    <div class="blau">
                        <img src="img/tancar.png" alt="icona tancar"/>
                    </div>
                    <div class="groc">
                        Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre).
                    </div>
                </div>
                <div id="foto1-2foto" class="foto">
                    <img src="foto/_MG_9135.jpg" alt="Arxiu família Cabezas"/>
                    <div class="groc">
                        Antonio Cabezas, el farer de Buda
                    </div>
                </div>
            </div>
            <div id="foto1-3" class="fotofons">
                <div id="foto1-3text" class="col-lg-3 col-md-3 col-lg-offset-1 col-md-offset-1">
                    <p class="groc">
                        A primers de segle XX, Buda ja rebia caceres organitzades per membres de classes socials privilegiades.<br>La gran quantitat d’aus a les llacunes de l’illa i del Delta atraïa l’afluència de caçadors provinents de fora, sobretot de Barcelona i altres llocs, amants de la natura i interessats per l’avifauna, que es desplaçaven a propòsit fins a Buda encara que de vegades fos per estar-s’hi només un dia.
                    </p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="07cacera/foto/Santi214.jpg" data-text="07cacera/text/text2.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                    <div class="clearfix"></div>
                    <div class="boto" id="foto1-3boto1">
                        <img class="verdclar" src="img/play.png" alt="Rosa Merino explica com eren els dies de cacera a l’illa de Buda quan ella exercia de mestra dels fills dels colons.">
                    </div>
                    <div class="clearfix"></div>
                    <div class="boto col-lg-offset-3 col-md-offset-3" id="foto1-3boto2">
                        <img class="verdclar" src="img/foto.png" alt="fotos Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)">
                    </div>
                </div>
                <p id="foto1-3peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre).</p>
                <div id="foto1-3foto" class="foto">
                    <img src="foto/Santi198.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)."/>
                </div>
            </div>
            <div id="foto1-4" class="fotofons">
                <div id="foto1-4text" class="col-lg-4 col-md-4 col-lg-offset-1 col-md-offset-1">
                    <p><strong>Els colons de l’illa i altra gent vinguda principalment de Deltebre conduïen els barquets de perxar que servien per entrar els caçadors llacuna endins</strong></p>
                </div>
                <p id="foto1-4peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre).</p>
            </div>
            <div id="foto1-5" class="fotofons">
                <div id="foto1-5text" class="col-lg-3 col-md-3 col-lg-offset-1 col-md-offset-1">
                    <p><strong>Les dues primeres dècades del segle passat, essent propietari de l’illa Lluís G. Pons, diputat a Corts per Berga, s’hi desplaçaven des de Tortosa amb els vapors “Ciudad de Tortosa”, “María” i l’emblemàtic “Anita”, tot navegant riu avall fins a la desembocadura, on s’hi troba l’illa.</strong></p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="07cacera/foto/SaP_584_08.jpg" data-text="07cacera/text/text3.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <p id="foto1-5peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Passarel·la on desembarcaven els vapors que viatjaven fins al far de Buda.<br>Arxiu Col·lecció Joan Salvany. Biblioteca de Catalunya.</p>
            </div>
            <div id="foto1-6" class="fotofons">
                <div id="foto1-6text" class="col-lg-3 col-md-3 col-lg-offset-8 col-md-offset-8">
                    <p><strong><i>De un dia á otro, llegarán á ésta ciudad, varias personas distinguidas de Barcelona, para embarcarse hácia el faro de Buda, realizando una excursión de caza.<br>Se trata de algunos jóvenes, muy conocidos entre la buena sociedad barcelonesa. </i></strong></p>
                </div>
                <p id="foto1-6peu" class="peu col-lg-offset-1 col-md-offset-1">Diario de Tortosa, 16 desembre 1904<br>Núm. 6.955</p>
            </div>
            <div id="foto1-7" class="fotofons">
                <div id="foto1-7text" class="col-lg-4 col-md-4 col-lg-offset-7 col-md-offset-7">
                    <p class="groc">En aquells anys s’hi arribaven a concentrar més de 50 caçadors en el marc d’intensives tirades de caça. És l’època en què es constitueix la societat anomenada “Coto Isla de Buda”, que el 1917 va fer construir un edifici amb habitacions i tot tipus de comoditats per a pernoctar-hi durant les expedicions de caça</p>
                </div>
                <p id="foto1-7peu" class="peu col-lg-offset-1 col-md-offset-1">Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre)</p>
            </div>
            <div id="foto1-8" class="fotofons">
                <div id="foto1-8text" class="col-lg-4 col-md-4 col-lg-offset-7 col-md-offset-7">
                    <p class="groc">La societat “Coto Isla de Buda” era integrada per gent adinerada i de classe burgesa de Barcelona i rodalies: banquers, industrials, terratinents, aristòcrates, comerciants, metges... aficionats cinegètics que tenien fins i tot una seu a Barcelona, on feien trobades i àpats col·lectius per preparar les expedicions a Buda</p>
                </div>
                <p id="foto1-8peu" class="peu col-lg-offset-1 col-md-offset-1">Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre)</p>
                <div class="tapa groc"></div>
                <div class="f">
                    <img id="foto1-8foto1" src="foto/Santi136.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi136.jpg" data-descripcio="Foto històrica 1 del Delta" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div class="f">
                    <img id="foto1-8foto2" src="foto/Santi226.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi226.jpg" data-descripcio="Foto històrica 1 del Delta" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div class="videofons">
                    <video poster="video/arxiu_familia_Batllo.jpg" preload>
                        <source src="video/arxiu_familia_Batllo.mp4" type="video/mp4">
                        <source src="video/arxiu_familia_Batllo.ogg" type="video/ogg">
                        <source src="video/arxiu_familia_Batllo.webm" type="video/webm">
                    </video>
                    <p class="videopeu groc">Filmació d’August Batlló. Cacera d’ànecs a l’illa de Buda (1921).<br>Arxiu Filmoteca de Catalunya.</p>
                </div>
            </div>
            <div id="foto1-9" class="fotofons">
                <p id="foto1-9peu" class="peu col-lg-offset-1 col-md-offset-1">Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre)</p>
                <div class="f">
                    <img id="foto1-9foto1" src="foto/Santi102.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi102.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="f">
                    <img id="foto1-9foto2" src="foto/Santi103.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi103.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="f">
                    <img id="foto1-9foto3" src="foto/Santi114.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi114.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="f">
                    <img id="foto1-9foto4" src="foto/Santi125.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi125.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="f">
                    <img id="foto1-9foto5" src="foto/Santi146.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi146.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="f">
                    <img id="foto1-9foto6" src="foto/Santi147.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi147.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="f">
                    <img id="foto1-9foto7" src="foto/Santi164.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi164.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="f">
                    <img id="foto1-9foto8" src="foto/Santi165.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi165.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="f">
                    <img id="foto1-9foto9" src="foto/Santi167.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi167.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="f">
                    <img id="foto1-9foto10" src="foto/Santi211.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi211.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="f">
                    <img id="foto1-9foto11" src="foto/Santi221.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                    <?php if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar"><img src="../img/save.png" alt="icona guardar" data-foto="07cacera/foto/Santi221.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - La cacera a Buda" onclick="guardarFoto(this)"/></div>
                    <?php } ?>
                </div>
                <div class="tapa groc"></div>
                <div id="foto1-9text" class="col-lg-4 col-md-4 col-lg-offset-1 col-md-offset-1">
                    <p>
                        L’illa va ser adquirida l'any 1924 per Joan i Pere Borés Casalmiglia, qui van continuar amb aquesta activitat cinegètica de tipus lúdic i estretament lligada a les llacunes dels Calaixos, i que compartien amb altres amics i aficionats fidels a la caça a Buda. La família Borés sempre ha estat oberta a rebre aquestes caceres fins avui dia
                    </p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="07cacera/foto/Santi210.jpg" data-text="07cacera/text/text4.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                    <div class="boto pull-right" id="foto1-9boto1">
                        <img class="groc" src="img/foto.png" alt="Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre)">
                    </div>
                    <div class="clearfix"></div>
                    <div class="boto col-lg-offset-12 col-md-offset-12" id="foto1-9boto2">
                        <img class="groc" src="img/play.png" alt="Guillermo Boré explica com s’organitzava dècades enrere la cacera a l’illa de Buda">
                    </div>
                </div>
                <div id="foto1-9foto" class="foto">
                    <img src="foto/Santi133.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)"/>
                </div>
            </div>
            <div id="foto1-10" class="fotofons">
                <div id="foto1-10text" class="col-lg-4 col-md-4 col-lg-offset-1 col-md-offset-1">
                    <p><strong>Actualment, la pràctica de la caça a Buda està regulada a partir de tres àrees</strong></p>
                </div>
                <div class="tapa groc"></div>
                <div id="foto1-10text2" class="col-lg-4 col-md-4 col-lg-offset-1 col-md-offset-1">
                    <p><strong>En primer lloc hi ha una zona privada de caça, propietat de la família Borés, a la qual se cedeix els drets cinegètics, i que anualment renova la seva matrícula i taxa corresponent</strong></p>
                </div>
                <p id="foto1-10peu" class="peu col-lg-offset-1 col-md-offset-1">Foto: Guillermo Barberà.</p>
            </div>
            <div id="foto1-11" class="fotofons">
                <div id="foto1-11text" class="col-lg-4 col-md-4 col-lg-offset-7 col-md-offset-7">
                    <p class="groc">El 1993, un cop la Generalitat de Catalunya va adquirir part de l’illa de Buda, l’administració va optar per controlar la cacera en els terrenys segregats de l’àrea privada a partir d’una resolució en què es regulaven els aprofitaments cinegètics i piscícoles dins d’aquests nous terrenys gestionats pel Parc Natural del delta de l’Ebre</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="07cacera/foto/buda-36.jpg" data-text="07cacera/text/text5.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                    <div class="clearfix"></div>
                    <div class="boto pull-right" id="foto1-11boto">
                        <img class="verdclar" src="img/play.png" alt="Rafel Balada explica la importància de compatibilitzar la cacera amb la conservació">
                    </div>
                </div>
                <p id="foto1-11peu" class="peu col-lg-offset-1 col-md-offset-1">Foto: Guillermo Barberà.</p>
            </div>
            <div id="foto1-12" class="fotofons">
                <div id="foto1-12text" class="col-lg-4 col-md-4 col-lg-offset-7 col-md-offset-7">
                    <p class="groc">L’any 2006, la Direcció General del Medi Natural va declarar terrenys sotmesos al règim cinegètic de caça controlada els terrenys de la badia del Fangar, el Garxal i les platges de l’Illa de Buda, als termes municipals de Deltebre i Sant Jaume d’Enveja.<br>Així doncs, es va passar de l’àrea privada de caça al llarg de la franja marítima de la platja de Buda a una àrea de caça controlada en el mateix tram, de 176 hectàrees de superfície.</p>
                </div>
                <p id="foto1-12peu" class="peu col-lg-offset-1 col-md-offset-1">Foto: Guillermo Barberà.</p>
            </div>
        </div>
        
        <div class="final text-center">
            <h2>Moltes felicitats!, has acabat aquesta investigació.</h2>
            <h3>Vols continuar explorant l’illa de Buda?</h3>
            <a href="../08arros/"><img src="../menu/08arros.jpg" alt=""/><br><br>EL CONREU DE L’ARRÒS A L’ILLA DE BUDA</a>
        </div>
            
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
        <script src="js/jquery.elevateZoom-3.0.8.min.js" type="text/javascript"></script>
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