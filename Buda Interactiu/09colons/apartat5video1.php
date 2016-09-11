<video preload autoplay controls>
    <source src="video/Mestra_PassavaEllaSolaEnBarqueta.mp4" type="video/mp4">
    <source src="video/Mestra_PassavaEllaSolaEnBarqueta.ogg" type="video/ogg">
    <source src="video/Mestra_PassavaEllaSolaEnBarqueta.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Rosa Maria Merino recorda el primer trànsit vogant des de la riba esquerra fins a Buda
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/Mestra_PassavaEllaSolaEnBarqueta" data-descripcio="Maria Rosa Merino - Anècdotes de la vida a l’illa de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>