<video preload autoplay controls>
    <source src="video/PedroParra_MusicaAFestesSantPere.mp4" type="video/mp4">
    <source src="video/PedroParra_MusicaAFestesSantPere.ogg" type="video/ogg">
    <source src="video/PedroParra_MusicaAFestesSantPere.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    L’enginyer i constructor Pedro Parra recorda la seva participació a les festes de Buda.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/PedroParra_MusicaAFestesSantPere" data-descripcio="Pedro Parra- Les festes de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>