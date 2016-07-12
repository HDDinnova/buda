<video poster="video/IreneMaluquer_ArturSarro.jpg" preload autoplay controls>
    <source src="video/IreneMaluquer_ArturSarro.mp4" type="video/mp4">
    <source src="video/IreneMaluquer_ArturSarro.ogg" type="video/ogg">
    <source src="video/IreneMaluquer_ArturSarro.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Irene Maluquer, vídua d’Artur Sarró, explica qui fou el seu marit.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="04aus/video/IreneMaluquer_ArturSarro" data-descripcio="Irene Maluquer, vídua d’Artur Sarró, explica qui fou el seu marit." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>