<video preload autoplay controls>
    <source src="video/Vicentica_CompartirEntreTots.mp4" type="video/mp4">
    <source src="video/Vicentica_CompartirEntreTots.ogg" type="video/ogg">
    <source src="video/Vicentica_CompartirEntreTots.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/Vicentica_CompartirEntreTots" data-descripcio="Vicenta Cardona - Buda, memòria latent" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>