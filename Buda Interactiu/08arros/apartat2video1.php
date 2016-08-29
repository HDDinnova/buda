<video poster="video/Lourdes_Juanito_ExperienciaDeGarbera.jpg" preload autoplay controls>
    <source src="video/Lourdes_Juanito_ExperienciaDeGarbera.mp4" type="video/mp4">
    <source src="video/Lourdes_Juanito_ExperienciaDeGarbera.ogg" type="video/ogg">
    <source src="video/Lourdes_Juanito_ExperienciaDeGarbera.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Lourdes, habitant de l’illa de Buda, recorda la seva experiència repartint garbes d'arròs als plantadors quan era una nena.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="08arros/video/Lourdes_Juanito_ExperienciaDeGarbera" data-descripcio="Lourdes, habitant de l’illa de Buda, recorda la seva experiència repartint garbes d'arròs als plantadors quan era una nena." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>