<video preload autoplay controls>
    <source src="video/CésarDíaz_arribadaProjecte.mp4" type="video/mp4">
    <source src="video/CésarDíaz_arribadaProjecte.ogg" type="video/ogg">
    <source src="video/CésarDíaz_arribadaProjecte.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    César Díaz-Aguado, descendent de Lucio del Valle, explica com es va gestar el projecte constructiu del conjunt de fars a les goles de l’Ebre
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/CésarDíaz_exposicioUniversal" data-descripcio="César Díaz-Aguado - els detalls constructius del “Proyecto de torres de hierro para los faros del Ebro” (1860)" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>