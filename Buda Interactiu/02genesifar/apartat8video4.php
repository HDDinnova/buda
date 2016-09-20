<video preload autoplay controls>
    <source src="video/AntonioCabezas_BonRefugiTempesta.mp4" type="video/mp4">
    <source src="video/AntonioCabezas_BonRefugiTempesta.ogg" type="video/ogg">
    <source src="video/AntonioCabezas_BonRefugiTempesta.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/AntonioCabezas_BonRefugiTempesta" data-descripcio="Antonio Cabezas - la fesomia del far de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>