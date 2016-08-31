<video poster="video/IreneMaluquer_ImpressioDeGranQuantitOcells.jpg" preload autoplay controls>
    <source src="video/IreneMaluquer_ImpressioDeGranQuantitOcells.mp4" type="video/mp4">
    <source src="video/IreneMaluquer_ImpressioDeGranQuantitOcells.ogg" type="video/ogg">
    <source src="video/IreneMaluquer_ImpressioDeGranQuantitOcells.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Irene Maluquer, la vídua d’Artur Sarró, explica com el seu germà Salvador va acabar influint en la passió pels ocells i pel Delta que més endavant experimentaria Artur Sarró.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="04aus/video/IreneMaluquer_ImpressioDeGranQuantitOcells" data-descripcio="Irene Maluquer - L’ornitologia, una passió familiar" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>