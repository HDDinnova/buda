<video preload autoplay controls>
    <source src="video/Gustau_Vivar.mp4" type="video/mp4">
    <source src="video/Gustau_Vivar.ogg" type="video/ogg">
    <source src="video/Gustau_Vivar.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Gustau Vivar, director del CASC, explica la troballa del vaixell Deltebre I.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/Gustau_Vivar" data-descripcio="Gustau Vivar - la troballa del Deltebre I" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>