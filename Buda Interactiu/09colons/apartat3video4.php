<video preload autoplay controls>
    <source src="video/Lourdes_Juanito_Autosuficiencia.mp4" type="video/mp4">
    <source src="video/Lourdes_Juanito_Autosuficiencia.ogg" type="video/ogg">
    <source src="video/Lourdes_Juanito_Autosuficiencia.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/Lourdes_Juanito_Autosuficiencia" data-descripcio="Lourdes i Juanito - Buda, memòria latent (II)" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>