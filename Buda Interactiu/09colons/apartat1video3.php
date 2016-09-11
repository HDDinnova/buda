<video preload autoplay controls>
    <source src="video/PepeSapinya_PledeGentAbans.mp4" type="video/mp4">
    <source src="video/PepeSapinya_PledeGentAbans.ogg" type="video/ogg">
    <source src="video/PepeSapinya_PledeGentAbans.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Pepe Sapiña recorda l’acumulació de barraques i casetes que poblaven el tram final del riu Ebre fins l'illa de Buda
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/PepeSapinya_PledeGentAbans" data-descripcio="Pepe Sapiña - L’acumulació de barraques i casetes dels colons feien de Buda un poble" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>