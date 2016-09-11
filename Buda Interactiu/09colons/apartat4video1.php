<video preload autoplay controls>
    <source src="video/Mestra_CreacioEscola.mp4" type="video/mp4">
    <source src="video/Mestra_CreacioEscola.ogg" type="video/ogg">
    <source src="video/Mestra_CreacioEscola.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Rosa Maria Merino explica els inicis de l’escola de Buda.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/Mestra_CreacioEscola" data-descripcio="Maria Rosa Merino - Els inicis de l’escola de l’illa de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>