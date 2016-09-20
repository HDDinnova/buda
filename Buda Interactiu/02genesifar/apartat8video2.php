<video preload autoplay controls>
    <source src="video/06_tirants.mp4" type="video/mp4">
    <source src="video/06_tirants.ogg" type="video/ogg">
    <source src="video/06_tirants.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/06_tirants" data-descripcio="Reconstrucció virtual - l’estructura del far de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>