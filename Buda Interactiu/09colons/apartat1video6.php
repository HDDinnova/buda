<video preload autoplay controls>
    <source src="video/GuillermoBores_FaltaDeServeisBasics.mp4" type="video/mp4">
    <source src="video/GuillermoBores_FaltaDeServeisBasics.ogg" type="video/ogg">
    <source src="video/GuillermoBores_FaltaDeServeisBasics.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Guillermo Borés il·lustra l’absència de serveis bàsics en l’època dels colons de Buda.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/GuillermoBores_FaltaDeServeisBasics" data-descripcio="Guillermo Borés - La manca de serveis bàsics durant la colonització de l’illa de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>