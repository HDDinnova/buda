<video poster="video/Sarro_Pesca2.jpg" preload autoplay controls>
    <source src="video/Sarro_Pesca2.mp4" type="video/mp4">
    <source src="video/Sarro_Pesca2.ogg" type="video/ogg">
    <source src="video/Sarro_Pesca2.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Filmació: Artur Sarró<br>(dècada de 1960) 
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="05pesca/video/Sarro_Pesca2" data-descripcio="Artur Sarró - La pesca a Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>