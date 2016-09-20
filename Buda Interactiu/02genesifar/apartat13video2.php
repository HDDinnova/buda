<video preload autoplay controls>
    <source src="video/SalvadoMaluquer_FarPedraCaiguda.mp4" type="video/mp4">
    <source src="video/SalvadoMaluquer_FarPedraCaiguda.ogg" type="video/ogg">
    <source src="video/SalvadoMaluquer_FarPedraCaiguda.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Salvador Maluquer explica les seves sensacions després de la construcció del far de pedra
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/SalvadoMaluquer_FarPedraCaiguda" data-descripcio="Salvador Maluquer - el far de pedra" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>