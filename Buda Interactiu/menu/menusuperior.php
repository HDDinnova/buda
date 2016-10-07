<div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <a class="navbar-brand">BUDA <span>L'illa del Delta</span></a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
            <li><a href="../mur.php" id="bmur" class="menutext"><strong>EL MUR</strong></a></li>
            <li><a href="#" id="bcredits" class="menutext"><strong>CRÈDITS</strong></a></li>
            <li><a href="#" id="bpeli" class="menutext"><strong>LA PEL·LÍCULA</strong></a></li>
             <?php if (isset($_COOKIE['personatge'])){ ?>
            <li><a href="#" id="bdosier"><img src="../img/menu-llibreta.png" alt="mostrar dossier"/></a></li>
            <li><a href="#" id="buser" class="menutext dropdown-toggle" data-toggle="dropdown" role="button"><img src="../img/menu-user.png" alt="menú"/>  <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a id="bmodificar" href="#">Modificar dades</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a id="bsortirmenu" href="#">Sortir</a></li>
                </ul>
            </li>
            <?php } else { ?>
            <li><a href="#" id="buser" class="menutext dropdown-toggle" data-toggle="dropdown" role="button"><img src="../img/menu-user.png" alt="menú"/>  <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li>
                        <label>Introdueix les teves dades d'accés</label>
                        <form method="post" action="../login.php?url=http://<?php echo $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>">
                            <div class="form-group">
                                <input class="form-control" id="correu" name="correu" type="email" placeholder="Correu" required>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="contrasenya" name="contrasenya" type="password" placeholder="Contrasenya" required>
                            </div>
                            <button type="submit" class="btn btn-primary btn-sm">ENTRAR</button>
                        </form>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li><a class="btn btn-link" href="../index2.html">Registrar-se</a></li>
                </ul>
            </li>
            <?php } ?>
            <li><a href="#" id="bso"><img src="../img/menu-audio.png" alt="silenciar"/></a></li>
<!--            <li><a href="#" id="menu2"><img src="../img/menu-vertical.png" alt="menú"/></a></li>-->
            <li><a href="#" id="menu1"><img src="../img/menu-menu.png" alt="menú"/></a></li>
        </ul>
    </div><!-- /.navbar-collapse -->
</div><!-- /.container-fluid -->