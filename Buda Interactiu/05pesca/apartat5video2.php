<video poster="video/BD_TVE_PescaVela.jpg" preload autoplay controls>
    <source src="video/BD_TVE_PescaVela.mp4" type="video/mp4">
    <source src="video/BD_TVE_PescaVela.ogg" type="video/ogg">
    <source src="video/BD_TVE_PescaVela.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Arxiu TVE<br>(No-Do). 
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="05pesca/video/BD_TVE_PescaVela" data-descripcio="Arxiu TVE<br>(No-Do)." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>