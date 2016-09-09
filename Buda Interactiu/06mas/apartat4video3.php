<video poster="video/Lourdes_Juanito_NiRadio.jpg" preload autoplay controls>
    <source src="video/Lourdes_Juanito_NiRadio.mp4" type="video/mp4">
    <source src="video/Lourdes_Juanito_NiRadio.ogg" type="video/ogg">
    <source src="video/Lourdes_Juanito_NiRadio.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Juanito i Lourdes, habitants de l’illa, recorden antics fragments de vida.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="06mas/video/Lourdes_Juanito_NiRadio" data-descripcio="Lourdes i Juanito - Records de la vida a l’illa" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>