<video poster="video/Sarro_calaixos_1.jpg" preload autoplay controls>
    <source src="video/Sarro_calaixos_1.mp4" type="video/mp4">
    <source src="video/Sarro_calaixos_1.ogg" type="video/ogg">
    <source src="video/Sarro_calaixos_1.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    El Calaix de Mar (o de Baix) i la part de les llacunes més propera a la mar.<br>Filmació: Artur Sarró (dècada de 1960)
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="01pasbuda/video/Sarro_calaixos_1" data-descripcio="Artur Sarró - El Calaix de Mar (o de Baix) i la part més propera a la mar de l’illa de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>