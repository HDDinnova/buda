<video preload autoplay controls>
    <source src="video/21_CasaFarBuda_1.mp4" type="video/mp4">
    <source src="video/21_CasaFarBuda_1.ogg" type="video/ogg">
    <source src="video/21_CasaFarBuda_1.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/21_CasaFarBuda_1" data-descripcio="Reconstrucció virtual a partir de fotografies de l’Arxiu Borrell (Arxiu Històric Comarcal del Baix Ebre) - l’interior del far de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>