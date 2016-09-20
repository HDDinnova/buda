<video preload autoplay controls>
    <source src="video/CésarDíaz_posicioInternacional_elmesAlt.mp4" type="video/mp4">
    <source src="video/CésarDíaz_posicioInternacional_elmesAlt.ogg" type="video/ogg">
    <source src="video/CésarDíaz_posicioInternacional_elmesAlt.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    César Díaz-Aguado comenta la repercussió nacional de la figura de Lucio del Valle
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/CésarDíaz_posicioInternacional_elmesAlt" data-descripcio="César Díaz-Aguado - la trascendència de la figura de Lucio del Valle per a l’enginyeria civil espanyola del segle XIX" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>