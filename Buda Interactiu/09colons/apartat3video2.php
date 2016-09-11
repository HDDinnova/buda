<video preload autoplay controls>
    <source src="video/Lourdes_ABudaNiLlaminadures.mp4" type="video/mp4">
    <source src="video/Lourdes_ABudaNiLlaminadures.ogg" type="video/ogg">
    <source src="video/Lourdes_ABudaNiLlaminadures.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/Lourdes_ABudaNiLlaminadures" data-descripcio="Lourdes i Juanito - Buda, memòria latent" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>