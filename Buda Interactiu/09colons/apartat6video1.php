<video preload autoplay controls>
    <source src="video/GuillermoBores_FestesBuda_ElPatro.mp4" type="video/mp4">
    <source src="video/GuillermoBores_FestesBuda_ElPatro.ogg" type="video/ogg">
    <source src="video/GuillermoBores_FestesBuda_ElPatro.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Guillermo Borés explica com sorgeix la tradició de celebrar les festes de Buda per Sant Pere
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/GuillermoBores_FestesBuda_ElPatro" data-descripcio="Guillermo Borés - Les festes donaven vida a l’illa de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>