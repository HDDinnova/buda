<video preload autoplay controls>
    <source src="video/CésarDíaz_projeccioDelsTresFars.mp4" type="video/mp4">
    <source src="video/CésarDíaz_projeccioDelsTresFars.ogg" type="video/ogg">
    <source src="video/CésarDíaz_projeccioDelsTresFars.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    César Díaz-Aguado, descendent de Lucio del Valle -enginyer del far de Buda-, recorda els detalls de la construcció de l’obra
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/CésarDíaz_projeccioDelsTresFars" data-descripcio="César Díaz-Aguado - els detalls del projecte constructiu del conjunt de fars a les goles de l’Ebre" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>