<video poster="video/PepeSapinya_MoltPeixABuda.jpg" preload autoplay controls>
    <source src="video/PepeSapinya_MoltPeixABuda.mp4" type="video/mp4">
    <source src="video/PepeSapinya_MoltPeixABuda.ogg" type="video/ogg">
    <source src="video/PepeSapinya_MoltPeixABuda.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Pepe Sapiña, navegant històric de l’Ebre comenta l’abundància de peix que hi havia als entorns de l’illa de Buda.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="05pesca/video/PepeSapinya_MoltPeixABuda" data-descripcio="Pepe Sapiña, navegant històric de l’Ebre comenta l’abundància de peix que hi havia als entorns de l’illa de Buda." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>