<video preload autoplay controls>
    <source src="video/Deltebre_1_descoberta.mp4" type="video/mp4">
    <source src="video/Deltebre_1_descoberta.ogg" type="video/ogg">
    <source src="video/Deltebre_1_descoberta.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Seqüència de la pel·lícula “Buda, l’illa del Delta”. Treballs d’excavació al vaixell  Deltebre 1 del Centre d’Arqueologia Subaquàtica de Catalunya (CASC)
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/Deltebre_1_descoberta" data-descripcio="“Buda, l'illa del Delta“ - El Thetis, vaixell del Centre d’Arqueologia Subaquàtica de Catalunya (CASC) explora el Deltebre I" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>