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
                <div id="foto1-1text" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2 class="roig col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-6 col-md-7 col-sm-9 col-xs-10">ELS COLONS DE BUDA</h2>                
                </div>
                <p id="foto1-1peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Ramon Fabra<br>(arxiu familiar)</p>
                <div class="scroll">
                    <img src="img/scroll_roig.png" alt="Fes scroll per continuar"/>
                </div>
                <div class="tapa roig"></div>
                <div id="foto1-1text2" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div id="foto1-1boto" class="boto col-lg-offset-12 col-md-offset-12">
                        <img class="groc" src="img/foto.png" alt="mostrar foto">
                    </div>
                    <div class="clearfix"></div>
                    <p>Els colons van  viure a l’illa de Buda des de l’inici de l’expansió de l’activitat agrícola fins la dècada de 1960, un cop consolidada la mecanització de les feines del camp</p>                
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="09colons/foto/ramon_fabra/IMG3.jpg" data-text="09colons/text/text1.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <div id="foto1-1foto" class="foto">
                    <div>
                      <img src="foto/joan_rius/IMG5.jpg" alt="Arxiu família Cabezas"/>
                      <?php
                      if (isset($_COOKIE['personatge'])){ ?>
                      <div class="guardar">
                          <img src="../img/save.png" alt="icona guardar" data-foto="09colons/foto/joan_rius/IMG5.jpg" data-descripcio="Arxiu familiar Joan Rius - Escenes de vida dels colons de l’illa de Buda" onclick="guardarFoto(this)"/>
                      </div>
                          <?php }
                      ?>
                      <div class="groc">
                          Foto: Joan Rius<br>(arxiu familiar)
                      </div>
                    </div>
                </div>
            </div>
            <div id="foto1-2" class="fotofons">
                <div id="foto1-2text" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-5 col-md-6 col-sm-8 col-xs-8">
                    <h2 class="roig">Barraques i casetes</h2>
                </div>
                <p id="foto1-2peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Arxiu Centre Excursionista de Catalunya</p>
                <div class="tapa roig"></div>
                <div id="foto1-2text2" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-8 col-xs-8">
                    <p class="blanc">El paisatge humanitzat de Buda era regnat per les barraques. Elles eren les protagonistes de la vida dels colons a l’Illa. Fetes de fusta, canyes, fang i palla, i arrebossades i pintades amb calç, allotjaven famílies senceres com a habitatge, ja fos de manera permanent durant tot l’any o en els mesos en què s’hi desplaçaven des del poble per a la campanya de l’arròs. En aquest darrer cas, els colons romanien a Buda de març a octubre. Els colons procedien sobretot de La Cava, Jesús i Maria i Sant Jaume d’Enveja.</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="09colons/foto/AFCEC_EMC_X_4734.jpg" data-text="09colons/text/text2.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
            </div>
            <div id="foto1-3" class="fotofons">
                <div id="foto1-3text" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-8 col-xs-8">
                    <p class="roig">Va ser a partir de finals del segle XIX i principis del segle XX quan, amb el conreu de l’arròs a l’Illa, es van bastir moltes barraques per fer d’habitatge als colons i les seves famílies, aïllades vora la riba del riu o la franja marítima de Buda, i també al costat dels camins i les basses, fins i tot algunes agrupades en petits nuclis</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="09colons/foto/_MG_8116.jpg" data-text="09colons/text/text3.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <p id="foto1-3peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer</p>
            </div>
            <div id="foto1-4" class="fotofons">
                <div id="foto1-4text" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-8 col-xs-8">
                    <div id="foto1-4boto1" class="boto col-lg-offset-6 col-md-offset-6">
                        <img class="taronga" src="img/foto.png" alt="mostrar foto">
                    </div>
                    <div class="clearfix"></div>
                    <div id="foto1-4boto2" class="boto col-lg-offset-9 col-md-offset-9">
                        <img class="verdfosc" src="img/play.png" alt="reproduir video">
                    </div>
                    <div class="clearfix"></div>
                    <div id="foto1-4boto3" class="boto col-lg-offset-12 col-md-offset-12">
                        <img class="groc" src="img/play.png" alt="reproduir video">
                    </div>
                    <div class="clearfix"></div>
                    <p class="roig">A Buda, on van arribar a viure més de 300 persones en els anys 50 i 60 del segle passat, a més de les barraques vivenda, s’hi van construir d’altres com a magatzem. D’aquestes, se’n podien trobar escampades per tota l’illa, i servien per guardar-hi estris i eines del camp, arts i ormeigs de pescar o altres equips de treball</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="09colons/foto/_MG_8130.jpg" data-text="09colons/text/text4.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <p id="foto1-4peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer</p>
                <div id="foto1-4foto" class="foto">
                    <img src="foto/Santi172.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)."/>
                    <?php
                      if (isset($_COOKIE['personatge'])){ ?>
                      <div class="guardar">
                          <img src="../img/save.png" alt="icona guardar" data-foto="09colons/foto/Santi172.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - Les construccions associades a la colonització de Buda" onclick="guardarFoto(this)"/>
                      </div>
                          <?php }
                      ?>
                    <div class="groc">
                        Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre).
                    </div>
                </div>
            </div>
            <div id="foto1-5" class="fotofons">
                <div id="foto1-5text" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-8 col-xs-8">
                    <p>Moltes altres barraques es van aixecar per ser refugi per a pagesos, caçadors, pescadors, guardes i pastors, i d’altres també com a corrals per aviram o per ramats. Les barraques vivenda, però, eren les més valorades i cuidades</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="09colons/foto/apartat1foto5.jpg" data-text="09colons/text/text5.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                </div>
                <p id="foto1-5peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre)</p>
            </div>
            <div id="foto1-6" class="fotofons">
                <div id="foto1-6text" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-8 col-xs-8">
                    <div id="foto1-6boto" class="boto col-lg-offset-10 col-md-offset-10">
                        <img class="groc" src="img/text.png" alt="mostrar text">
                    </div>
                    <div class="clearfix"></div>
                    <p>Al reportatge “Les goles de l'Ebre: Notes d'un excursionista”, Lluís Parcerissa expressa les sensacions que li va provocar l’observació d’un conjunt de barraques de pescadors al peu del far</p>
                </div>
                <div id="foto1-6fotos" class="slider">
                    <div class="sliderfotos">
                        <div>
                            <img src="doc/212003_0035_s.jpg" alt=">D’ací i d’allà. Magazine mensual."/>
                        </div>
                        <div>
                            <img src="doc/212003_0036_s.jpg" alt=">D’ací i d’allà. Magazine mensual."/>
                        </div>
                        <div>
                            <img src="doc/212003_0038_s.jpg" alt=">D’ací i d’allà. Magazine mensual."/>
                        </div>
                        <div>
                            <img src="doc/212003_0040_s.jpg" alt=">D’ací i d’allà. Magazine mensual."/>
                        </div>
                        <div>
                            <img src="doc/212003_0042_s.jpg" alt=">D’ací i d’allà. Magazine mensual."/>
                        </div>
                    </div>
                    <div class="blau">
                        <img src="img/tancar.png" alt="icona tancar"/>
                    </div>
                    <div class="groc">
                         D’ací i d’allà. Magazine mensual. Vol VI, núm 7. Juliol 1920.<br>Font: <a href="http://bib.cervantesvirtual.com/servlet/SirveObras/01383842091462951867024/ima0034.htm" target="_blank">Biblioteca virtual Miguel de Cervantes</a>
                    </div>
                </div>
            </div>
            <div id="foto1-7" class="fotofons">
                <div id="foto1-7text" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-8 col-xs-8">
                    <p class="blanc">Les casetes i alguns masos escampats, al costat dels camins, dels arrossars, dels canals i les basses, també eren testimoni i hàbitat dels colons i les seves famílies.</p>
                    <div class="clearfix"></div>
                    <div id="foto1-7boto1" class="boto col-lg-offset-12 col-md-offset-12">
                        <img class="verd" src="img/foto.png" alt="mostrar text">
                    </div>
                    <div class="clearfix"></div>
                    <div id="foto1-7boto2" class="boto col-lg-offset-12 col-md-offset-12">
                        <img class="groc" src="img/play.png" alt="mostrar text">
                    </div>
                </div>
                <p id="foto1-7peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Arxiu familiar Joan Franch</p>
                <div id="foto1-7fotos" class="slider">
                    <div class="sliderfotos">
                        <div>
                            <img src="foto/joan_rius/IMG13.jpg" alt="arxiu Joan Rius"/>
                            <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                            <div class="guardar">
                                <img src="../img/save.png" alt="icona guardar" data-foto="09colons/foto/joan_rius/IMG13.jpg" data-descripcio="Arxiu familiar Joan Rius - Escenes de vida dels colons de l’illa de Buda (II)" onclick="guardarFoto(this)"/>
                            </div>
                                <?php }
                            ?>
                        </div>
                        <div>
                            <img src="foto/joan_rius/IMG17.jpg" alt="arxiu Joan Rius"/>
                            <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                            <div class="guardar">
                                <img src="../img/save.png" alt="icona guardar" data-foto="09colons/foto/joan_rius/IMG17.jpg" data-descripcio="Arxiu familiar Joan Rius - Escenes de vida dels colons de l’illa de Buda (II)" onclick="guardarFoto(this)"/>
                            </div>
                                <?php }
                            ?>
                        </div>
                        <div>
                            <img src="foto/joan_rius/IMG15.jpg" alt="arxiu Joan Rius"/>
                            <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                            <div class="guardar">
                                <img src="../img/save.png" alt="icona guardar" data-foto="09colons/foto/joan_rius/IMG15.jpg" data-descripcio="Arxiu familiar Joan Rius - Escenes de vida dels colons de l’illa de Buda (II)" onclick="guardarFoto(this)"/>
                            </div>
                                <?php }
                            ?>
                        </div>
                    </div>
                    <div class="blau">
                        <img src="img/tancar.png" alt="icona tancar"/>
                    </div>
                    <div class="groc">
                        Arxiu Joan Rius
                    </div>
                </div>
            </div>
            <div id="foto1-8" class="fotofons">
                <div id="foto1-8text" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-8 col-xs-8">
                    <p class="roig">Els masos tenien diverses dependències domèstiques (cuina, menjador o sala gran i estances per dormir) i altres espais annexos de treball (magatzems per als estris i equips del camp; quadres per als animals; corrals per a l’aviram, etc.),  i alguns un forn, un pou o una cisterna. Els masos podien tenir una gran varietat estructural (planta baixa, un pis o dos); en ells hi vivien les famílies més lligades als treballs agrícoles, on s’hi estaven durant bona part de l’any.</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="09colons/foto/Santi150.jpg" data-text="09colons/text/text6.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                    <div class="clearfix"></div>
                    <div id="foto1-8boto" class="boto col-lg-offset-12 col-md-offset-12">
                        <img class="groc" src="img/foto.png" alt="mostrar text">
                    </div>
                </div>
                <p id="foto1-8peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre)</p>
                <div id="foto1-8fotos" class="slider">
                    <div class="sliderfotos">
                        <div>
                            <img src="foto/Santi233.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)."/>
                            <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                            <div class="guardar">
                                <img src="../img/save.png" alt="icona guardar" data-foto="09colons/foto/Santi233.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - Les construccions associades a la colonització de Buda (II)" onclick="guardarFoto(this)"/>
                            </div>
                                <?php }
                            ?>
                        </div>
                        <div>
                            <img src="foto/Santi069.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)."/>
                            <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                            <div class="guardar">
                                <img src="../img/save.png" alt="icona guardar" data-foto="09colons/foto/Santi069.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - Les construccions associades a la colonització de Buda (II)" onclick="guardarFoto(this)"/>
                            </div>
                                <?php }
                            ?>
                        </div>
                        <div>
                            <img src="foto/Santi171.jpg" alt="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre)."/>
                            <?php
                            if (isset($_COOKIE['personatge'])){ ?>
                            <div class="guardar">
                                <img src="../img/save.png" alt="icona guardar" data-foto="09colons/foto/Santi171.jpg" data-descripcio="Arxiu família Borés (gentilesa Museu de les Terres de l’Ebre) - Les construccions associades a la colonització de Buda (II)" onclick="guardarFoto(this)"/>
                            </div>
                                <?php }
                            ?>
                        </div>
                    </div>
                    <div class="blau">
                        <img src="img/tancar.png" alt="icona tancar"/>
                    </div>
                    <div class="groc">
                        Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre).
                    </div>
                </div>
            </div>
            <div id="foto1-9" class="fotofons">
                <div id="foto1-9text" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-12 col-md-12 col-sm-8 col-xs-8">
                    <div id="foto1-9boto1" class="boto col-lg-offset-3 col-md-offset-4">
                        <img class="roig" src="img/play.png" alt="mostrar text">
                    </div>
                    <div class="clearfix"></div>
                    <div id="foto1-9boto2" class="boto col-lg-offset-2 col-md-offset-3">
                        <img class="roig" src="img/play.png" alt="mostrar text">
                    </div>
                </div>
                <p id="foto1-9peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Arxiu família Borés<br>(gentilesa Museu de les Terres de l’Ebre)</p>
            </div>
            <div id="foto1-10" class="fotofons">
                <div id="foto1-10text" class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-8 col-xs-8">
                    <p class="roig">Masos singulars de l’illa de Buda van prendre el nom (i moltes vegades el malnom) de la família de colons que l’habitava. Molt sovint estaven a tocar dels camins que solcaven l’illa i que de vegades també portaven el nom d’aquests (del Carliste, de Nelo, de Guans, etc.)</p>
                    <?php
                        if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardartext">
                        <img src="../img/save.png" alt="icona guardar" data-img="09colons/foto/AFCEC_EMC_X_4735.jpg" data-text="09colons/text/text7.html" onclick="guardarText(this)"/>
                    </div>
                        <?php }
                    ?>
                    <div class="clearfix"></div>
                    <div id="foto1-10boto" class="boto col-lg-offset-12 col-md-offset-12">
                        <img class="groc" src="img/foto.png" alt="mostrar foto">
                    </div>
                </div>
                <p id="foto1-10peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Arxiu Centre Excursionista de Catalunya.</p>            
                <div id="foto1-10foto" class="foto">
                    <img src="foto/Arxiu_Joan_Franch/ranxo_buda_01.jpg" alt="Arxiu Joan Franch"/>
                    <?php
                    if (isset($_COOKIE['personatge'])){ ?>
                    <div class="guardar">
                        <img src="../img/save.png" alt="icona guardar" data-foto="09colons/foto/Arxiu_Joan_Franch/ranxo_buda_01.jpg" data-descripcio="Arxiu familiar Joan Franch - Els colons de Buda" onclick="guardarFoto(this)"/>
                    </div>
                        <?php }
                    ?>
                    <div class="groc">
                        Arxiu Joan Franch
                    </div>
                </div>
            </div>
            <div id="foto1-11" class="fotofons">
                <div id="foto1-11text" class="col-lg-offset-8 col-md-offset-8 col-sm-offset-1 col-xs-offset-1 col-lg-3 col-md-3 col-sm-8 col-xs-8">
                    <p>Algunes d'aquestes construccions han resistit el pas del temps.</p>
                    <div class="clearfix"></div>
                    <div id="foto1-11boto1" class="boto">
                        <img class="groc" src="img/foto.png" alt="mostrar foto">
                    </div>
                    <div class="clearfix"></div>
                    <div id="foto1-11boto2" class="boto">
                        <img class="groc" src="img/foto.png" alt="mostrar foto">
                    </div>
                </div>
                <p id="foto1-11peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Guillermo Barberà.</p>
                <div id="foto1-11foto1" class="foto">
                    <img src="foto/buda-99.jpg" alt="Foto: Guillermo Barberà."/>
                    <div class="groc">
                        Foto: Guillermo Barberà.
                    </div>
                </div>
                <div id="foto1-11foto2" class="foto">
                    <img src="foto/buda-73.jpg" alt="Foto: Guillermo Barberà."/>
                    <div class="groc">
                        Foto: Guillermo Barberà.
                    </div>
                </div>
            </div>
        </div>
        <div class="containerapartat" id="apartat2"></div>
        <div class="containerapartat" id="apartat3"></div>
        <div class="containerapartat" id="apartat4"></div>
        <div class="containerapartat" id="apartat5"></div>
        <div class="containerapartat" id="apartat6"></div>
        <div class="containerapartat" id="apartat7"></div>
        <div class="videopopup">
            <div id="videos"></div>
        </div>
    
        <script src="js/jquery-ui.min.js" type="text/javascript"></script>
        <script src="../js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/TweenMax.min.js" type="text/javascript"></script>
        <!--<script src="js/Draggable.min.js" type="text/javascript"></script>-->
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
