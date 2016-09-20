<video preload autoplay controls>
    <source src="video/Josepet_CaigudaFar.mp4" type="video/mp4">
    <source src="video/Josepet_CaigudaFar.ogg" type="video/ogg">
    <source src="video/Josepet_CaigudaFar.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Josep del Cadell explica el record de la caiguda del far
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/Josepet_CaigudaFar" data-descripcio="Josep del Cadell - el record de la caiguda del far de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>