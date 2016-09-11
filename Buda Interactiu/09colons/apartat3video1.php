<video preload autoplay controls>
    <source src="video/PepeSapinya_facilFer4duros-peixCarn-noFaltava.mp4" type="video/mp4">
    <source src="video/PepeSapinya_facilFer4duros-peixCarn-noFaltava.ogg" type="video/ogg">
    <source src="video/PepeSapinya_facilFer4duros-peixCarn-noFaltava.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/PepeSapinya_facilFer4duros-peixCarn-noFaltava" data-descripcio="Pepe Sapiña - Buda, memòria latent" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>