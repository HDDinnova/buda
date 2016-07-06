<video poster="video/GuillermoBores_Barcassa.jpg" preload autoplay controls>
    <source src="video/GuillermoBores_Barcassa.mp4" type="video/mp4">
    <source src="video/GuillermoBores_Barcassa.ogg" type="video/ogg">
    <source src="video/GuillermoBores_Barcassa.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Guillermo Borés, propietari de la part privada de l’illa, comenta el valor de la barcassa com a símbol d’un temps.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="01pasbuda/video/GuillermoBores_Barcassa" data-descripcio="Guillermo Borés, propietari de la part privada de l’illa, comenta el valor de la barcassa com a símbol d’un temps." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>