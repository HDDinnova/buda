<video preload autoplay controls>
    <source src="video/Josepet_subsistencia.mp4" type="video/mp4">
    <source src="video/Josepet_subsistencia.ogg" type="video/ogg">
    <source src="video/Josepet_subsistencia.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/Josepet_subsistencia" data-descripcio="Josep del Cadell - Buda, memòria latent" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>