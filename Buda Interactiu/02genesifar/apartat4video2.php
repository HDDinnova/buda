<video preload autoplay controls>
    <source src="video/CésarDíaz_exposicioUniversal.mp4" type="video/mp4">
    <source src="video/CésarDíaz_exposicioUniversal.ogg" type="video/ogg">
    <source src="video/CésarDíaz_exposicioUniversal.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    César Díaz-Aguado recorda la presència del far de Buda en el marc de l’Exposició Universal de París de l’any 1867
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/CésarDíaz_exposicioUniversal" data-descripcio="César Díaz-Aguado - els detalls constructius del “Proyecto de torres de hierro para los faros del Ebro” (1860)" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>