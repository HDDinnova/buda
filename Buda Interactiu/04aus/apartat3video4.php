<video poster="video/SalvadoMaluquer_PrimerAnellament.jpg" preload autoplay controls>
    <source src="video/SalvadoMaluquer_PrimerAnellament.mp4" type="video/mp4">
    <source src="video/SalvadoMaluquer_PrimerAnellament.ogg" type="video/ogg">
    <source src="video/SalvadoMaluquer_PrimerAnellament.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Salvador Maluquer recorda com es va produir el primer anellament d’aus a l’illa de Buda.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="04aus/video/SalvadoMaluquer_PrimerAnellament" data-descripcio="Salvador Maluquer - El primer anellament" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>