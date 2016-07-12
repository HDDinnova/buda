<video poster="video/SalvadoMaluquer_PrimeresCatalogacions.jpg" preload autoplay controls>
    <source src="video/SalvadoMaluquer_PrimeresCatalogacions.mp4" type="video/mp4">
    <source src="video/SalvadoMaluquer_PrimeresCatalogacions.ogg" type="video/ogg">
    <source src="video/SalvadoMaluquer_PrimeresCatalogacions.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Salvador Maluquer explica en què consistiren les seves primeres visites al Delta.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="04aus/video/SalvadoMaluquer_PrimeresCatalogacions" data-descripcio="Salvador Maluquer explica en què consistiren les seves primeres visites al Delta." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>