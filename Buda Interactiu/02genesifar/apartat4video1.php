<video preload autoplay controls>
    <source src="video/CésarDíaz_importanciaLuciodelValle.mp4" type="video/mp4">
    <source src="video/CésarDíaz_importanciaLuciodelValle.ogg" type="video/ogg">
    <source src="video/CésarDíaz_importanciaLuciodelValle.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    César Díaz-Aguado comenta la repercussió de la figura del seu avantpassat
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/CésarDíaz_importanciaLuciodelValle" data-descripcio="César Díaz-Aguado - la dimensió de Lucio del Valle, enginyer del far de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>