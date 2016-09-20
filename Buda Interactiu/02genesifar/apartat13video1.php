<video preload autoplay controls>
    <source src="video/PedroParra_AccesFarPedra_ConstruccioGrua.mp4" type="video/mp4">
    <source src="video/PedroParra_AccesFarPedra_ConstruccioGrua.ogg" type="video/ogg">
    <source src="video/PedroParra_AccesFarPedra_ConstruccioGrua.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Pedro Parra explica el procés de construcció de la carretera d’accés al far de pedra.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/PedroParra_AccesFarPedra_ConstruccioGrua" data-descripcio="Pedro Parra - el projecte de carretera per arribar al far de pedra" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>