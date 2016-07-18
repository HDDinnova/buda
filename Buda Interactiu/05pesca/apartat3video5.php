<video poster="video/Josepet_anguiles.jpg" preload autoplay controls>
    <source src="video/Josepet_anguiles.mp4" type="video/mp4">
    <source src="video/Josepet_anguiles.ogg" type="video/ogg">
    <source src="video/Josepet_anguiles.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Seqüència descartada de la pel·lícula “Buda, l’illa del Delta”.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="05pesca/video/Josepet_anguiles" data-descripcio="Seqüència descartada de la pel·lícula “Buda, l’illa del Delta”." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>