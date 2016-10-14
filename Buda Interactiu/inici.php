<?php
session_start();
if (isset($_COOKIE['personatge'])){
$per=$_COOKIE['personatge'];
switch($per['tipus']){
  case 'lite':
    $c='groc';
    break;
  case 'cine':
    $c='blau';
    break;
  case 'foto':
    $c='roig';
    break;
  case 'orni':
    $c='verd';
    break;
}
require_once 'class/connexio.php';
$db=new connexio();
$f = $db->query('SELECT * FROM fotos WHERE usuari='.$per['id']);
$v = $db->query('SELECT * FROM videos WHERE usuari='.$per['id']);
$t = $db->query('SELECT * FROM textos WHERE usuari='.$per['id']);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Buda, l'illa del Delta</title>
        <meta name="description" content="Documental interactiu sobre Buda, la illa del Delta">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href="css/estil.css" rel="stylesheet" type="text/css"/>
        <link href="css/registre.css" rel="stylesheet" type="text/css"/>
        <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand">BUDA <span>L'illa del Delta</span></a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="./mur.php" id="bmur" class="menutext"><strong>EL MUR</strong></a></li>
                        <li><a href="#" id="bcredits" class="menutext"><strong>CRÈDITS</strong></a></li>
                        <li><a href="#" id="bpeli" class="menutext"><strong>LA PEL·LÍCULA</strong></a></li>
                        <?php if (isset($_COOKIE['personatge'])){ ?>
                        <li><a href="#" id="buser" class="menutext dropdown-toggle" data-toggle="dropdown" role="button"><img src="img/menu-user.png" alt="menú"/>  <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a id="bmodificar" href="#">Modificar dades</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a id="bsortir" href="#">Sortir</a></li>
                            </ul>
                        </li>
                        <?php } ?>
                        <li><a href="#" id="menu1"><img src="img/menu-menu.png" alt="menú"/></a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <!--Fi capçalera-->
        <!--Menú lateral-->
        <div id="m"></div>
        <!--Fi menú lateral-->
        <div class="col-lg-3 col-md-3 col-sm-12">
          <div class="caixa <?=$c?> col-md-12">
              <h2><strong>Enhorabona <?=$per['nom']?>,<br/>el registre s'ha<br/>realitzat correctament</strong></h2>
          </div>
          <div class="caixa <?=$c?> col-md-12">
              <p>Aquest dossier t’acompanyarà durant<br/>la teva visita a l’illa.</p>
              <p>Aquí hi trobaràs documentació que<br/>de ben segur et serà d’utilitat.</p>
              <p></p>
              <a id="start" class="btn btn-sm" href="00metaforadelta/">COMENÇAR&nbsp;&nbsp;<i class="fa fa-play"></i></a>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-12 dossier">
            <div id="botomapa" class="botodossier <?=$c?>"></div>
            <div id="botofoto" class="botodossier"></div>
            <div id="botovideo" class="botodossier"></div>
            <div id="bototext" class="botodossier"></div>
            <div id="botoperfil" class="botodossier"></div>
            <div id="objectes" class="col-md-12">
                <div id="mapa" class="objecte">
                    <h2>Illa de Buda</h2>
                    <a href="06mas/"><img class="icomapa" id="barraca" src="img/ico-barraca.png" alt=""/></a>
                    <a href="07cacera/"><img class="icomapa" id="cacador" src="img/ico-cacador.png" alt=""/></a>
                    <a href="00metaforadelta/"><img class="icomapa" id="escriptor" src="img/ico-escriptor.png" alt=""/></a>
                    <a href="02genesifar/"><img class="icomapa" id="far" src="img/ico-far.png" alt=""/></a>
                    <a href="04aus/"><img class="icomapa" id="flamenc" src="img/ico-flamenc.png" alt=""/></a>
                    <a href="03llacunes/"><img class="icomapa" id="niu" src="img/ico-niu.png" alt=""/></a>
                    <a href="05pesca/"><img class="icomapa" id="peix" src="img/ico-peix.png" alt=""/></a>
                    <a href="08arros/"><img class="icomapa" id="planta" src="img/ico-planta.png" alt=""/></a>
                    <a href="01pasbuda/"><img class="icomapa" id="serp" src="img/ico-serp.png" alt=""/></a>
                    <a href="10vapors/"><img class="icomapa" id="vapor" src="img/ico-vapor.png" alt=""/></a>
                    <a><img class="icomapa" id="vapor2" src="img/ico-vapor2.png" alt=""/></a>
                    <img id="imgmapa" src="img/mapa-illa.png" alt="mapa illa de buda"/>
                </div>
                <div id="fotos" class="objecte">
                    <?php while ($foto = $f->fetch_array(MYSQLI_ASSOC)){ ?>
                    <div class="col-md-6 col-sm-6 col-xs-6 text-center" portafotos>
                        <img src="<?=$foto['foto']?>" alt="<?=$foto['llegenda']?>"/>
                        <p><?=$foto['llegenda']?></p>
                    </div>
                    <?php } ?>
                </div>
                <div id="videos" class="objecte">
                    <?php while ($video = $v->fetch_array(MYSQLI_ASSOC)){ ?>
                    <div class="col-md-6 col-sm-6 col-xs-6 text-center">
                        <video controls poster="<?=$video['video']?>.jpg">
                            <source src="<?=$video['video']?>.mp4" type="video/mp4">
                            <source src="<?=$video['video']?>.ogv" type="video/ogg">
                            <source src="<?=$video['video']?>.webm" type="video/webm">
                        El teu navegador no suporta aquest tipus de video, si us plau, actualitza'l per a una millor experiència
                        </video>
                        <p><?=$video['llegenda']?></p>
                    </div>
                    <?php } ?>
                </div>
                <div id="textos" class="objecte">
                    <?php while ($text = $t->fetch_array(MYSQLI_ASSOC)){ ?>
                    <div class="col-md-3 col-sm-3 col-xs-6 text-center">
                        <img src="<?=$text['imatge']?>" alt="" data-url="<?=$text['url']?>"/>
                    </div>
                    <?php } ?>
                </div>
                <div id="perfil" class="objecte">
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">
                <h3>Investigacions finalitzades</h3>
            <?php while ($acabats = $apfi->fetch_array(MYSQLI_ASSOC)){ ?>
                <div class="col-md-12">
                    <?php switch ($acabats['apartat']) {
                        case 0:?>
                    <div class="col-md-4">
                        <img src="../menu/00metafora.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Metonímia del Delta</p>
                    </div>
                            <?php break;
                        case 1:?>
                    <div class="col-md-4">
                        <img src="../menu/01pasbuda.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Pas de Buda</p>
                    </div>
                            <?php break;
                        case 2:?>
                    <div class="col-md-4">
                        <img src="../menu/02genesifar.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>El Far de Buda</p>
                    </div>
                            <?php break;
                        case 3:?>
                    <div class="col-md-4">
                        <img src="../menu/03llacunes.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Els calaixos de Buda</p>
                    </div>
                            <?php break;
                        case 4:?>
                    <div class="col-md-4">
                        <img src="../menu/04aus.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Les aus de Buda</p>
                    </div>
                            <?php break;
                        case 5:?>
                    <div class="col-md-4">
                        <img src="../menu/05pesca.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Històries de pesca a Buda</p>
                    </div>
                            <?php break;
                        case 6:?>
                    <div class="col-md-4">
                        <img src="../menu/06mas.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>El mas de Buda</p>
                    </div>
                            <?php break;
                        case 7:?>
                    <div class="col-md-4">
                        <img src="../menu/07cacera.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>La cacera a Buda</p>
                    </div>
                            <?php break;
                        case 8:?>
                    <div class="col-md-4">
                        <img src="../menu/08arros.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>El conreu de l'arròs</p>
                    </div>
                            <?php break;
                        case 9:?>
                    <div class="col-md-4">
                        <img src="../menu/09colons.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Els colons de Buda</p>
                    </div>
                            <?php break;
                        case 10:?>
                    <div class="col-md-4">
                        <img src="../menu/10vapors.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Els "vapors" i els grans viatges cap a Buda</p>
                    </div>
                            <?php break;
                    }
                    ?>
                </div>
            <?php } ?>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">
                <h3>Investigació en curs</h3>
            <?php while ($curs = $apac->fetch_array(MYSQLI_ASSOC)){ ?>
                <div class="col-md-12">
                    <?php switch ($curs['apartat']) {
                        case 0:?>
                    <div class="col-md-4">
                        <img src="../menu/00metafora.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Metonímia del Delta</p>
                    </div>
                            <?php break;
                        case 1:?>
                    <div class="col-md-4">
                        <img src="../menu/01pasbuda.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Pas de Buda</p>
                    </div>
                            <?php break;
                        case 2:?>
                    <div class="col-md-4">
                        <img src="../menu/02genesifar.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>El Far de Buda</p>
                    </div>
                            <?php break;
                        case 3:?>
                    <div class="col-md-4">
                        <img src="../menu/03llacunes.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Els calaixos de Buda</p>
                    </div>
                            <?php break;
                        case 4:?>
                    <div class="col-md-4">
                        <img src="../menu/04aus.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Les aus de Buda</p>
                    </div>
                            <?php break;
                        case 5:?>
                    <div class="col-md-4">
                        <img src="../menu/05pesca.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Històries de pesca a Buda</p>
                    </div>
                            <?php break;
                        case 6:?>
                    <div class="col-md-4">
                        <img src="../menu/06mas.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>El mas de Buda</p>
                    </div>
                            <?php break;
                        case 7:?>
                    <div class="col-md-4">
                        <img src="../menu/07cacera.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>La cacera a Buda</p>
                    </div>
                            <?php break;
                        case 8:?>
                    <div class="col-md-4">
                        <img src="../menu/08arros.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>El conreu de l'arròs</p>
                    </div>
                            <?php break;
                        case 9:?>
                    <div class="col-md-4">
                        <img src="../menu/09colons.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Els colons de Buda</p>
                    </div>
                            <?php break;
                        case 10:?>
                    <div class="col-md-4">
                        <img src="../menu/10vapors.jpg">
                    </div>
                    <div class="col-md-8">
                        <p>Els "vapors" i els grans viatges cap a Buda</p>
                    </div>
                            <?php break;
                    }
                    ?>
                </div>
            <?php } ?>
            </div>
        </div>
            </div>            
            <img id="dossier" src="img/dossier-obert.png" alt="Imatge del dossier obert" data-color="<?=$c?>"/>
        </div>
        <div id="imatgegran" class="fons">
            <img id="fotogran" src="" alt="">
        </div>
        <div id="textgran" class="fons center-block">
            <div id="text"></div>
        </div>
        <script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/funcions2.js" type="text/javascript"></script>
        <script src="js/menu.js" type="text/javascript"></script>
        <script>
          $('#m').load('menu/menuinicial.html',function(){
            menu();
          });
        </script>
    </body>
</html>
<?php
$db->close();
 } else {
     header('Location: index2.html');
 }