<video poster="video/Ana_Adams_Mas.jpg" preload autoplay controls>
    <source src="video/Ana_Adams_Mas.mp4" type="video/mp4">
    <source src="video/Ana_Adams_Mas.ogg" type="video/ogg">
    <source src="video/Ana_Adams_Mas.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    L’actriu Ana Adams, interpretant l’artista Beatrice Field, passejant pel menjador del mas a la pel·lícula “Buda, l’illa del Delta”.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="06mas/video/Ana_Adams_Mas" data-descripcio="“Buda, l’illa del Delta” - El mas de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>