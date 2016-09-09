<video poster="video/GuillermoBores_cacadors.jpg" preload autoplay controls>
    <source src="video/GuillermoBores_cacadors.mp4" type="video/mp4">
    <source src="video/GuillermoBores_cacadors.ogg" type="video/ogg">
    <source src="video/GuillermoBores_cacadors.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Guillermo Borés explica com s’organitzava dècades enrere la cacera a l’illa de Buda
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="07cacera/video/GuillermoBores_cacadors" data-descripcio="Guillermo Borés - Repàs històric de la cacera a l’illa de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>