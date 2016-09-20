<video preload autoplay controls>
    <source src="video/AntonioSánchez_LaVidaAlFar.mp4" type="video/mp4">
    <source src="video/AntonioSánchez_LaVidaAlFar.ogg" type="video/ogg">
    <source src="video/AntonioSánchez_LaVidaAlFar.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Antonio Sánchez, fill de farer, va néixer al far de Buda
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/AntonioSánchez_LaVidaAlFar" data-descripcio="Antonio Sánchez - els records d’un fill de faroner nascut al far de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>