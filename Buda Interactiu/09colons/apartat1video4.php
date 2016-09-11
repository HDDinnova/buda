<video preload autoplay controls>
    <source src="video/Josepet_TransportPrecari.mp4" type="video/mp4">
    <source src="video/Josepet_TransportPrecari.ogg" type="video/ogg">
    <source src="video/Josepet_TransportPrecari.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Des de la seva vivència d’haver estat tota la vida a l'illa de Buda, Josep del Cadell -Josepet-, recorda com eren les comunicacions antigament
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/Josepet_TransportPrecari" data-descripcio="Josep del Cadell - La vida dels colons a Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>