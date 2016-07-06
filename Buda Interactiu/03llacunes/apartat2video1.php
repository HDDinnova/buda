<video poster="video/Sarro_calaixos_3.jpg" preload autoplay controls>
    <source src="video/Sarro_calaixos_3.mp4" type="video/mp4">
    <source src="video/Sarro_calaixos_3.ogg" type="video/ogg">
    <source src="video/Sarro_calaixos_3.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    El Calaix Gran (o de Dalt).<br>Filmació: Artur Sarró (dècada de 1960)
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="01pasbuda/video/Sarro_calaixos_3" data-descripcio="El Calaix Gran (o de Dalt).<br>Filmació: Artur Sarró (dècada de 1960)" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>