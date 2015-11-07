<?php
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
                <li><a href="#"><img src="img/menu-llibreta.png" alt=""/></a></li>
                <li><a href="#"><img src="img/menu-audio.png" alt=""/></a></li>
                <li><a href="#" id="menu1"><img src="img/menu-menu.png" alt=""/></a></li>
                
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
            <div id="botomapa" class="boto <?=$c?>"></div>
            <div id="botofoto" class="boto"></div>
            <div id="botovideo" class="boto"></div>
            <div id="bototext" class="boto"></div>
            <div id="botoperfil" class="boto"></div>
            <div id="objectes" class="col-md-12">
                <div id="mapa" class="objecte">
                    <h2>Illa de Buda</h2>
                    <img class="icomapa" id="barraca" src="img/ico-barraca.png" alt=""/>
                    <img class="icomapa" id="cacador" src="img/ico-cacador.png" alt=""/>
                    <img class="icomapa" id="escriptor" src="img/ico-escriptor.png" alt=""/>
                    <img class="icomapa" id="far" src="img/ico-far.png" alt=""/>
                    <img class="icomapa" id="flamenc" src="img/ico-flamenc.png" alt=""/>
                    <img class="icomapa" id="niu" src="img/ico-niu.png" alt=""/>
                    <img class="icomapa" id="peix" src="img/ico-peix.png" alt=""/>
                    <img class="icomapa" id="planta" src="img/ico-planta.png" alt=""/>
                    <img class="icomapa" id="serp" src="img/ico-serp.png" alt=""/>
                    <img class="icomapa" id="vapor" src="img/ico-vapor.png" alt=""/>
                    <img class="icomapa" id="vapor2" src="img/ico-vapor2.png" alt=""/>
                    <img id="imgmapa" src="img/mapa-illa.jpg" alt="mapa illa de buda"/>
                </div>
                <div id="fotos" class="objecte">
                    <?php while ($foto = $f->fetch_array(MYSQLI_ASSOC)){ ?>
                    <div class="col-md-6 col-sm-6 col-xs-6 text-center" portafotos>
                        <img src="fotos/<?=$per['tipus']?>/<?=$foto['foto']?>" alt="<?=$foto['llegenda']?>"/>
                        <p><?=$foto['llegenda']?></p>
                    </div>
                    <?php } ?>
                </div>
                <div id="videos" class="objecte">
                    <?php while ($video = $v->fetch_array(MYSQLI_ASSOC)){ ?>
                    <div class="col-md-6 col-sm-6 col-xs-6 text-center">
                        <video controls poster="videos/<?=$per['tipus']?>/<?=$video['video']?>.jpg">
                            <source src="videos/<?=$per['tipus']?>/<?=$video['video']?>.mp4" type="video/mp4">
                            <source src="videos/<?=$per['tipus']?>/<?=$video['video']?>.ogv" type="video/ogg">
                            <source src="videos/<?=$per['tipus']?>/<?=$video['video']?>.webm" type="video/webm">
                        El teu navegador no suporta aquest tipus de video, si us plau, actualitza'l per a una millor experiència
                        </video>
                        <p><?=$video['llegenda']?></p>
                    </div>
                    <?php } ?>
                </div>
                <div id="textos" class="objecte">
                    <?php while ($text = $t->fetch_array(MYSQLI_ASSOC)){ ?>
                    <div class="col-md-3 col-sm-3 col-xs-6 text-center">
                        <img src="textos/<?=$per['tipus']?>/<?=$text['imatge']?>" alt="" data-url="textos/<?=$per['tipus']?>/<?=$text['url']?>"/>
                    </div>
                    <?php } ?>
                </div>
                <div id="perfil" class="objecte">
                    
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
        <script>
          $(window).load(function(){
            $('#m').load('menu/menuinicial.html',function(){
                menu();
            });            
        });
        </script>
    </body>
</html>
<?php
$db->close();