<video poster="video/Sarro_Aus_04.jpg" preload autoplay controls>
    <source src="video/Sarro_Aus_04.mp4" type="video/mp4">
    <source src="video/Sarro_Aus_04.ogg" type="video/ogg">
    <source src="video/Sarro_Aus_04.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Filmació: Artur Sarró (dècada de 1960)
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="04aus/video/Sarro_Aus_04" data-descripcio="Artur Sarró - Les aus de l'illa de Buda (II)" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>