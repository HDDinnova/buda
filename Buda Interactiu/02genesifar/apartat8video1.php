<video preload autoplay controls>
    <source src="video/GuillermoBorés_excursióPerArribarAlFar.mp4" type="video/mp4">
    <source src="video/GuillermoBorés_excursióPerArribarAlFar.ogg" type="video/ogg">
    <source src="video/GuillermoBorés_excursióPerArribarAlFar.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/GuillermoBorés_excursióPerArribarAlFar" data-descripcio="Guillermo Borés - la significació del far per a l’illa de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>