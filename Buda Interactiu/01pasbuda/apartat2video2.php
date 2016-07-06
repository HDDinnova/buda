<video autoplay controls>
    <source src="video/CeciliaPrats_PasdeBarca.mp4" type="video/mp4">
    <source src="video/CeciliaPrats_PasdeBarca.ogg" type="video/ogg">
    <source src="video/CeciliaPrats_PasdeBarca.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Cecília Prats, esposa de l’ornitòleg Salvador Maluquer, recorda el primer cop que va creuar el pas de Buda per l’Ebre.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="01pasbuda/video/CeciliaPrats_PasdeBarca" data-descripcio="Cecília Prats, esposa de l’ornitòleg Salvador Maluquer, recorda el primer cop que va creuar el pas de Buda per l’Ebre." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>