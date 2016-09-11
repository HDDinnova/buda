<video preload autoplay controls>
    <source src="video/GuillermoBores_Germanor.mp4" type="video/mp4">
    <source src="video/GuillermoBores_Germanor.ogg" type="video/ogg">
    <source src="video/GuillermoBores_Germanor.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Guillermo Borés explica que la germanor era el principal valor de la convivència entre els colons a l’illa
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/GuillermoBores_Germanor" data-descripcio="Guillermo Borés - Els colons de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>