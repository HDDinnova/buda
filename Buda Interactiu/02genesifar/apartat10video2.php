<video preload autoplay controls>
    <source src="video/AntonioCabezas_elFarEnFlames.mp4" type="video/mp4">
    <source src="video/AntonioCabezas_elFarEnFlames.ogg" type="video/ogg">
    <source src="video/AntonioCabezas_elFarEnFlames.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Antonio Cabezas explica l’episodi del sabotatge del far durant la Guerra Civil.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/AntonioCabezas_elFarEnFlames" data-descripcio="Antonio Cabezas - el sabotatge del far de Buda durant la Guerra Civil II" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>