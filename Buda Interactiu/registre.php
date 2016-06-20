<?php
session_start();

  $a=$_GET['a'];
  switch($a){
    case 'lite':
      $c='groc';
      $p='Escriptor/a';
      break;
    case 'cine':
      $c='blau';
      $p='Cineasta';
      break;
    case 'foto':
      $c='roig';
      $p='Fotògraf/a';
      break;
    case 'orni':
      $c='verd';
      $p='Ornitòleg/a';
      break;
  }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible">
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
                        <li><a href="#" id="menu1"><img src="img/menu-menu.png" alt="menú"/></a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        
        <?php include 'menu1.php'; ?>
        
        <!--Fi capçalera-->
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="caixa <?=$c?> col-md-12">
              <h2><strong>Personalitza el<br/>teu dossier<br/></strong></h2>
          </div>
          <div class="caixa <?=$c?> col-md-12">
              <img src="img/registre-<?=$a?>.png" alt="icona de <?=$p?>"/>
              <p><strong><?=$p?> <i class="fa fa-caret-down"></i></strong></p>
              <form class="col-md-10" method="post" action="registrar.php">
                  <div class="form-group">
                    <input class="form-control" id="nom" name="nom" type="text" placeholder="Nom" required>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="cognom" name="cognom" type="text" placeholder="Cognom" required>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="edat" name="edat" type="number" placeholder="Edat" required>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="pais" name="pais" type="text" placeholder="País" required>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="correu" name="correu" type="email" placeholder="Correu electrònic" required>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="contrasenya" name="contrasenya" type="password" placeholder="Contrasenya" required>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="valida_contrasenya" name="valida_contrasenya" type="password" placeholder="Valida la contrasenya" required>
                  </div>
                  <input class="hidden" id="tipus" name="tipus" value="<?=$a?>">
                  <button type="submit" class="btn btn-sm">REGISTRAR&nbsp;&nbsp;<i class="fa fa-play"></i></button>
              </form>
          </div>
        </div>
        <div class="col-lg-9 col-md-8 col-sm-12 text-center">
            <img id="dossiertancat" src="img/dossier-tancat.png" alt="image de la carpeta dossier"/>
        </div>
      
      <script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
      <script src="js/funcions.js" type="text/javascript"></script>
      <script src="js/menu.js" type="text/javascript"></script>
      <script>
        $(document).ready(function(){
            menu();
        });
      </script>
    </body>
</html>