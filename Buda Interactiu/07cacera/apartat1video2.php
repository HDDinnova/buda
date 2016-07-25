<video poster="video/Mestra_FeiaBonic-laCacera.jpg" preload autoplay controls>
    <source src="video/Mestra_FeiaBonic-laCacera.mp4" type="video/mp4">
    <source src="video/Mestra_FeiaBonic-laCacera.ogg" type="video/ogg">
    <source src="video/Mestra_FeiaBonic-laCacera.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Rosa Merino explica com eren els dies de cacera a l’illa de Buda quan ella exercia de mestra dels fills dels colons.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="07cacera/video/Mestra_FeiaBonic-laCacera" data-descripcio="Rosa Merino explica com eren els dies de cacera a l’illa de Buda quan ella exercia de mestra dels fills dels colons." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>