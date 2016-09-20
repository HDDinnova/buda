<video preload autoplay controls>
    <source src="video/CesarDiaz_AnglesosVivint_MuntatgeFar.mp4" type="video/mp4">
    <source src="video/CesarDiaz_AnglesosVivint_MuntatgeFar.ogg" type="video/ogg">
    <source src="video/CesarDiaz_AnglesosVivint_MuntatgeFar.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    César Díaz-Aguado explica l’odissea del muntatge del far a la platja de l’illa de Buda
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/CesarDiaz_AnglesosVivint_MuntatgeFar" data-descripcio="César Díaz-Aguado - l’odissea del muntatge del far de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>