<?php
session_start();

if (isset($_COOKIE['personatge'])){
}
$p=$_GET['p'];
    
require_once 'class/connexio.php';
$db = new connexio();

if(isset($p)){
    $offset=($p-1)*8;
} else {
    $offset=0;
}
$query="SELECT * FROM mur WHERE validat=1 ORDER BY data DESC LIMIT 8 OFFSET $offset";
$querytotalrows = "SELECT id FROM mur WHERE validat=1";
$msgs = $db->query($query);
$totalrows = $db->query($querytotalrows);
$numrows = $totalrows->num_rows;
$db->close();
if ($numrows!=0){
    $numpags = $numrows/8;
    if(fmod($numpags, 1)>0){
        $resto=1;
    }
    $numpags = intval($numpags)+$resto;
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
        <div class="col-lg-offset-1 col-md-offset-1 col-lg-10 col-md-10 col-sm-12 col-xs-12">
            
<?php
    $db = new connexio();
    $i=0;
    while ($msg = $msgs->fetch_array(MYSQLI_ASSOC)) {
        $query = "SELECT nom,cognom FROM usuaris WHERE id=".$msg['usuari'];
        $us=$db->query($query);
        $u=$us->fetch_array(MYSQLI_ASSOC);
        $dia = new DateTime($msg['data']);
?>
            
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="fotomur text-center">
                    <img src="<?=$msg['foto']?>" alt="Imatge del mur" class="fotom">
                    <img src="img/polaroid.png" alt="Superposició" class="polaroid"/>
                    <div class="peufoto">
                        <cite><strong><?=utf8_decode($u['nom'])?> <?=utf8_decode($u['cognom'])?></strong></cite>
                        <div class="clearfix"></div>
                        <cite><?=$dia->format('d/m/Y')?></cite>
                    </div>
                </div>
                <div>
                    <p class="text-center"><i><?=  utf8_encode($msg['comentari'])?></i></p>
                </div>
            </div>
            
        <?php
        $i++;
    }
    
    if (isset($_COOKIE['personatge'])){ ?>
    <div class="round-button">
        <div class="round-button-circle">
            <a href="./noumissatgemur.php">+</a>
        </div>
    </div>
    <div class="menu">
        <!-- Menu icon -->
        <div class="icon-close">
            <img id="tancamenu" src="img/close.png" alt="icona tancar">
        </div>

        <!-- Menu -->
        <div class="col-md-12">
            <div class="container">
                <a href="00metaforadelta">
                    <img src="menu/00metafora.jpg" alt="thumbnail apartat metafora">
                    <h3>Metonímia del Delta</h3>
                </a>
                <a href="01pasbuda">
                    <img src="menu/01pasbuda.jpg" alt="thumbnail apartat Pas de Buda">
                    <h3>Pas de Buda</h3>
                </a>
                <a href="02genesifar">
                    <img src="menu/02genesifar.jpg" alt="thumbnail apartat Genesi del Far de Buda">
                    <h3>El Far de Buda</h3>
                </a>
                <a href="03llacunes">
                    <img src="menu/03llacunes.jpg" alt="thumbnail apartat Les Llacunes del delta">
                    <h3>Els calaixos de Buda</h3>
                </a>
                <a href="04aus">
                    <img src="menu/04aus.jpg" alt="thumbnail apartat Les Aus">
                    <h3>Les aus de Buda</h3>
                </a>
                <a href="05pesca">
                    <img src="menu/05pesca.jpg" alt="thumbnail apartat Pesca">
                    <h3>La pesca</h3>
                </a>
                <a href="06mas">
                    <img src="menu/06mas.jpg" alt="thumbnail apartat Mas de Buda">
                    <h3>El mas de Buda</h3>
                </a>
                <a href="07cacera">
                    <img src="menu/07cacera.jpg" alt="thumbnail apartat Cacera a Buda">
                    <h3>La cacera a Buda</h3>
                </a>
                <a href="08arros">
                    <img src="menu/08arros.jpg" alt="thumbnail apartat Arròs">
                    <h3>El conreu de l'arròs</h3>
                </a>
                <a href="09colons">
                    <img src="menu/09colons.jpg" alt="thumbnail apartat Colons">
                    <h3>Els colons de Buda</h3>
                </a>
                <a href="10vapors">
                    <img src="menu/10vapors.jpg" alt="thumbnail apartat Vapors">
                    <h3>Els “vapors” i els grans viatges cap a Buda</h3>
                </a>
            </div>
        </div>
    </div>        
    <?php } else {?>
        <div class="menu">
            <!-- Menu icon -->
            <div class="icon-close">
                <img id="tancamenu" src="img/close.png" alt="icona tancar">
            </div>

            <!-- Menu -->
            <div class="col-md-12">
                <h3>Benvingut a <strong>Buda</strong></h3>
                <p>Introdueix les teves dades per continuar</p>
                <form method="post" action="login.php">
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
    <?php }
        if ($numpags>1){ 
            if ($numpags!=$p){
                if($p<$numpags){?>
            <div class="boto-dreta">
                <a href="./mur.php?p=<?php if(isset($p)){echo $p+1;} else {echo '2';} ?>">
                    <img src="img/dreta.png" alt="passar a la pàgina següent del mur"/>
                </a>
            </div>
        <?php 
                } else { ?>
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div class="caixa roig col-lg-12 col-md-12 col-sm-12 col-xs-12 pull-left">
                <h2><strong>Upps!!</strong> No hi ha més missatges per mostrar.</h2>
            </div>
        </div>
                <?php }
            }
        }
        if ($p>1){
            if ($p==2){ ?>
            <div class="boto-esquerra">
                <a href="./mur.php">
                    <img src="img/esquerra.png" alt="passar a la pàgina anterior del mur"/>
                </a>
            </div>    
            <?php } else { ?>
            <div class="boto-esquerra">
                <a href="./mur.php?p=<?php echo $p-1; ?>">
                    <img src="img/esquerra.png" alt="passar a la pàgina anterior del mur"/>
                </a>
            </div>
            <?php }
        }
    ?>
            
        </div>
        <script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script src="js/menu.js" type="text/javascript"></script>
        <script>
            $(document).ready(function(){
                menu();
            });
        </script>
    </body>
</html>