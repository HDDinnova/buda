<?php
  $a=filter_input(INPUT_GET, 'a');
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
                  <input class="hidden" id="tipus" name="tipus" value="<?=$a?>">
                  <button type="submit" class="btn btn-sm">REGISTRAR&nbsp;&nbsp;<i class="fa fa-play"></i></button>
              </form>
          </div>
        </div>
        
    </body>
</html>