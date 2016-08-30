<video autoplay controls>
    <source src="video/Sarro_PasBarca_1.mp4" type="video/mp4">
    <source src="video/Sarro_PasBarca_1.ogg" type="video/ogg">
    <source src="video/Sarro_PasBarca_1.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Pas de Buda pel riu Ebre.<br/>Filmació: Artur Sarró(dècada de 1960)
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="01pasbuda/video/Sarro_PasBarca_1" data-descripcio="Artur Sarró - El pas de Buda pel riu Ebre" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>