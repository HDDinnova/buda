<video preload autoplay controls>
    <source src="video/Vicentica_CaigudaDelsDosFars.mp4" type="video/mp4">
    <source src="video/Vicentica_CaigudaDelsDosFars.ogg" type="video/ogg">
    <source src="video/Vicentica_CaigudaDelsDosFars.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Vicenta Cardona explica el seu record de la caiguda del far.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/Vicentica_CaigudaDelsDosFars" data-descripcio="Vicenta Cardona - el record de la caiguda del far de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>