<video preload autoplay controls>
    <source src="video/JosepetVicentica_Festejar_MassaGentPerFestejar.mp4" type="video/mp4">
    <source src="video/JosepetVicentica_Festejar_MassaGentPerFestejar.ogg" type="video/ogg">
    <source src="video/JosepetVicentica_Festejar_MassaGentPerFestejar.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Josepet i Vicentica recorden com les condicions de vida impedien la intimitat
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/JosepetVicentica_Festejar_MassaGentPerFestejar" data-descripcio="Josep i Vicentica - L’odissea de la intimitat a Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>