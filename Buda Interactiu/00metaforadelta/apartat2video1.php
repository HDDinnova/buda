<video preload autoplay controls>
    <source src="video/Buda.mp4" type="video/mp4">
    <source src="video/Buda.ogg" type="video/ogg">
    <source src="video/Buda.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    El vídeo permet observar la regressió que ha experimentat l’illa de Buda al llarg de la 2a meitat del segle XX i la primera dècada del XXI. 
    En concret, els mapes que han servit de base a les animacions corresponen als anys 1945 i 2015.<br>Font: Institut Cartogràfic i Geològic de Catalunya
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="00metaforadelta/video/Buda" data-descripcio="Regressió de l’illa de Buda (1945-2015)" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>