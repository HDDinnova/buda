<video preload autoplay controls>
    <source src="video/SalvadoMaluquer_Regressio.mp4" type="video/mp4">
    <source src="video/SalvadoMaluquer_Regressio.ogg" type="video/ogg">
    <source src="video/SalvadoMaluquer_Regressio.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Salvador Maluquer explica quines poden ser les causes de la regressió de 
    l’illa de Buda i, en general, del Delta.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="00metaforadelta/video/SalvadoMaluquer_Regressio" data-descripcio="Salvador Maluquer - les causes de la regressió" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>