<video preload autoplay controls>
    <source src="video/CésarDíaz_repercusióFar.mp4" type="video/mp4">
    <source src="video/CésarDíaz_repercusióFar.ogg" type="video/ogg">
    <source src="video/CésarDíaz_repercusióFar.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    César Díaz-Aguado explica la repercussió internacional que va tenir aquell projecte
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/CésarDíaz_repercusióFar" data-descripcio="César Díaz-Aguado - la repercussió internacional del far de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>