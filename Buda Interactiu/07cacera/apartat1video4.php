<video poster="video/RafelBalada_Cacera-PNatural.jpg" preload autoplay controls>
    <source src="video/RafelBalada_Cacera-PNatural.mp4" type="video/mp4">
    <source src="video/RafelBalada_Cacera-PNatural.ogg" type="video/ogg">
    <source src="video/RafelBalada_Cacera-PNatural.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Rafel Balada explica la importància de compatibilitzar la cacera amb la conservació
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="07cacera/video/RafelBalada_Cacera-PNatural" data-descripcio="Rafel Balada - La necessitat de compatibilitzar la cacera amb la conservació" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>