<video poster="video/GuillermoBores_JugarAgafarAnguiles.jpg" preload autoplay controls>
    <source src="video/GuillermoBores_JugarAgafarAnguiles.mp4" type="video/mp4">
    <source src="video/GuillermoBores_JugarAgafarAnguiles.ogg" type="video/ogg">
    <source src="video/GuillermoBores_JugarAgafarAnguiles.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Guillermo Borés explica records
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="05pesca/video/GuillermoBores_JugarAgafarAnguiles" data-descripcio="Guillermo Borés explica records" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>