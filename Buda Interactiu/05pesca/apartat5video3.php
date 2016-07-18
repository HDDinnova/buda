<video poster="video/Josepet_PerduaPesca.jpg" preload autoplay controls>
    <source src="video/Josepet_PerduaPesca.mp4" type="video/mp4">
    <source src="video/Josepet_PerduaPesca.ogg" type="video/ogg">
    <source src="video/Josepet_PerduaPesca.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Josepet explica com a canviat la pesca a Buda 
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="05pesca/video/Josepet_PerduaPesca" data-descripcio="Josepet explica com a canviat la pesca a Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>