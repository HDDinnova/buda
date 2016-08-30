<video preload autoplay controls>
    <source src="video/Desembocadura.mp4" type="video/mp4">
    <source src="video/Desembocadura.ogg" type="video/ogg">
    <source src="video/Desembocadura.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    El vídeo permet observar l’evolució de la desembocadra  de l’Ebre al llarg de la 2a meitat del segle XX i la primera dècada del XXI. 
    En concret, els mapes que han servit de base a les animacions corresponen als anys 1945 i 2015.<br>Font: Institut Cartogràfic i Geològic de Catalunya
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="00metaforadelta/video/Desembocadura" data-descripcio="Regressió de la desembocadura de l’Ebre (1945-2015)" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>