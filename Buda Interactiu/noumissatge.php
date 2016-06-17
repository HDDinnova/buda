<?php

// Recollida de dades
$msg=filter_input(INPUT_POST,'missatge');
$fot=filter_input(INPUT_POST,'fotografia');
$per=$_COOKIE['personatge']['id'];
$dat = date("Y-m-d H:i:s");
$lik=0;
$val=1;

require_once 'class/connexio.php';
$db = new connexio();

$msg = $db->real_escape_string($msg);

$sql = "INSERT INTO mur(comentari,foto,data,usuari,validat) VALUES ('".utf8_decode($msg)."','$fot','$dat',$per,$val)";

if($db->query($sql)){
    $user=$_COOKIE['personatge'];
    switch($user['tipus']){
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
    } ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Buda, l'illa del Delta</title>
        <meta name="description" content="Documental interactiu sobre Buda, la illa del Delta">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href="css/estil.css" rel="stylesheet" type="text/css"/>
        <link href="css/mur.css" rel="stylesheet" type="text/css"/>
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
                        <li><a href="#" id="menu1"><img src="img/menu-menu.png" alt="menú"/></a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <!--Fi capçalera-->
        <!--Menú lateral-->
        <div id="m"></div>
        <!--Fi menú lateral-->
        <div class="col-lg-offset-3 col-md-offset-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="caixa <?=$c?> col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-left">
                <h2>Moltes gràcies <strong><?=$user['nom']; ?></strong></h2>
            </div>
            <div class="caixa <?=$c?> col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-left">
                <p>El teu missatge s'ha registrat correctament i està pendent de validació. Tan aviat s'hagi validat rebràs un correu de confirmació a l'adreça amb que et vas registrar.</p>
            </div>
        </div>
        <script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/menu.js" type="text/javascript"></script>
    </body>
</html>
    
<?php } else {?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Buda, l'illa del Delta</title>
        <meta name="description" content="Documental interactiu sobre Buda, la illa del Delta">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href="css/estil.css" rel="stylesheet" type="text/css"/>
        <link href="css/mur.css" rel="stylesheet" type="text/css"/>
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
                        <li><a href="#" id="menu1"><img src="img/menu-menu.png" alt="menú"/></a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <!--Fi capçalera-->
        <!--Menú lateral-->
        <div id="m"></div>
        <!--Fi menú lateral-->
        <div class="col-lg-offset-3 col-md-offset-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="caixa <?=$c?> col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-left">
                <h2>Ho sentim molt <strong><?=$user['nom']; ?></strong></h2>
            </div>
            <div class="caixa <?=$c?> col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-left">
                <p>Hem tingut un problema per registrar el teu missatge, si us plau, intenta-ho més tard</p>
            </div>
        </div>
        <script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/menu.js" type="text/javascript"></script>
    </body>
</html>
    
<?php }

$db->close();