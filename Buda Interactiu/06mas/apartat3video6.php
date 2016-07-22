<video poster="video/Arxiu_familia_Bores_arros.jpg" preload autoplay controls>
    <source src="video/Arxiu_familia_Bores_arros.mp4" type="video/mp4">
    <source src="video/Arxiu_familia_Bores_arros.ogg" type="video/ogg">
    <source src="video/Arxiu_familia_Bores_arros.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Arxiu família Borés
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="06mas/video/Arxiu_familia_Bores_arros" data-descripcio="Arxiu família Borés." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>