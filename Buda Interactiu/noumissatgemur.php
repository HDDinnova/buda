<?php
if (isset($_COOKIE['personatge'])){
    
    // Agafa les dades de l'usuari
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
                        <li><a href="#" id="bmur" class="menutext"><strong>EL MUR</strong></a></li>
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
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div class="caixa <?=$c?> col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-left">
                <h2><?php if($per['sexe']=='h'){echo 'Benvingut';}else{echo 'Benvinguda';}?> <strong><?=$per['nom']; ?>,</strong></h2>
            </div>
            <div class="caixa <?=$c?> col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-left">
                <p>Aquí podràs deixar el teu missatge al mur de <strong>Buda, l'illa del delta</strong></p>
            </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12" id="fondomur">
            <div class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-10 col-md-10 col-sm-10 col-xs-10">
                <form action="noumissatge.php" method="post" enctype="multipart/form-data" id="form_noumur">
                    <div class="form-group">
                        <label for="missatge">Missatge</label>
                        <textarea form="form_noumur" name="missatge" class="form-control col-lg-12 col-md-12" rows="4"></textarea>
                    </div>
                    <div class="clearfix"></div>
                    <div class="image-editor">
                        <div class="cropit-preview"></div>
                        <div class="range range-success">
                            <input type="range" class="cropit-image-zoom-input">
                        </div>
                        <input type="file" class="cropit-image-input">
                        <input type="hidden" name="image-data" class="hidden-image-data" />
                    </div>
                    
                    
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
        <script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
        <script src="js/jquery.cropit.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/menu.js" type="text/javascript"></script>
        <script>
            $(function() {
                $('.image-editor').cropit({
                    imageBackground: true,
                    imageBackgroundBorderWidth: 15 // Width of background border
                });
                $('form').submit(function() {
                    // Move cropped image data to hidden input
                    var imageData = $('.image-editor').cropit('export');
                    $('.hidden-image-data').val(imageData);
                    // Print HTTP request params
                    var formValue = $(this).serialize();
                    $('#result-data').text(formValue);
                    // Prevent the form from actually submitting
                    return false;
                });
            });
            $('#m').load('menu/menuinicial.html',function(){
              menu();
            });
        </script>
    </body>
</html>
    
    
<?php } else{
    echo "No login";
}