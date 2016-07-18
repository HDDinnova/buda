<video poster="video/bores_anys_60.jpg" preload autoplay controls>
    <source src="video/bores_anys_60.mp4" type="video/mp4">
    <source src="video/bores_anys_60.ogg" type="video/ogg">
    <source src="video/bores_anys_60.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Filmació: Arxiu família Borés
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="05pesca/video/bores_anys_60" data-descripcio="Filmació: Arxiu família Borés" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>