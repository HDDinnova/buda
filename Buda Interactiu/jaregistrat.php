<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible">
        <title>Buda, l'illa del Delta</title>
        <meta name="description" content="Documental interactiu sobre Buda, la illa del Delta">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href="css/estil.css" rel="stylesheet" type="text/css"/>
        <link href="css/jaregistrat.css" rel="stylesheet" type="text/css"/>
        <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <a class="navbar-brand" href="/">BUDA <span>L'illa del Delta</span></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><img src="img/menu-menu.png" alt=""/></a></li>
                
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
        <!--Fi capçalera-->
        <div class="container-fluid">
            <div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Ups! Pareix que ja estàs registrat, accedeix de nou per poder seguir el teu camí per <strong>Buda, L'illa del Delta</strong></div>
            <h2>Benvingut de nou!</h2>
                <div class="caixa groc col-md-2">
                    <p>Introdueix les teves dades</p>
                    <form class="col-md-10" method="post" action="../login.php">
                        <div class="form-group">
                          <input class="form-control" id="correu" name="correu" type="email" placeholder="Correu" required>
                        </div>
                        <div class="form-group">
                          <input class="form-control" id="contrasenya" name="contrasenya" type="password" placeholder="Contrasenya" required>
                        </div>
                        <button type="submit" class="btn btn-sm">ENTRAR&nbsp;&nbsp;<i class="fa fa-play"></i></button>
                    </form>
                </div>
        </div>
      <script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
      <script src="js/bootstrap.min.js" type="text/javascript"></script>
    </body>
</html>