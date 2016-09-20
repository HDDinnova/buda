<video preload autoplay controls>
    <source src="video/JMEspinas_FinalDunCami.mp4" type="video/mp4">
    <source src="video/JMEspinas_FinalDunCami.ogg" type="video/ogg">
    <source src="video/JMEspinas_FinalDunCami.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Josep M. Espinàs exposa el tram final del seu viatge al far de Buda.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/JMEspinas_FinalDunCami" data-descripcio="Josep M. Espinàs - l’acostament al far de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>