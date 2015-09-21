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
                <li><a href="#"><img src="img/menu-menu.png" alt=""/></a></li>
                
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
        <!--Fi capçalera-->
        <div class="col-md-2 col-sm-12">
          <div class="caixa <?=$c?> col-md-12">
              <h2><strong>Enhorabona <?=$per['nom']?>, el registre s'ha realitzat correctament</strong></h2>
          </div>
          <div class="caixa <?=$c?> col-md-12">
              <p>Aquest dossier t’acompanyarà durant la teva visita a l’illa.</p>
              <p>Aquí hi trobaràs documentació que de ben segur et serà d’utilitat.</p>
          </div>
        </div>
        <div class="col-md-10 col-sm-12 dossier">
            <div id="botomapa"></div>
            <div id="botofoto"></div>
            <div id="botovideo"></div>
            <div id="bototext"></div>
            <div id="botoperfil"></div>
            <div id="mapa">
                <h2>Illa de Buda</h2>
                <img src="img/mapa-illa.jpg" alt="mapa illa de buda"/>
            </div>
            <div id="fotos">
              
            </div>
            <img id="dossier" src="img/dossier-obert.png" alt="Imatge del dossier obert"/>
        </div>
    </body>
</html>