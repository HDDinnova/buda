<video poster="video/BD_TVE_PerxaXarxa.jpg" preload autoplay controls>
    <source src="video/BD_TVE_PerxaXarxa.mp4" type="video/mp4">
    <source src="video/BD_TVE_PerxaXarxa.ogg" type="video/ogg">
    <source src="video/BD_TVE_PerxaXarxa.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Peça del NO-DO on es veu el treball a la veïna llacuna de l’Encanyissada.<br>Font: Arxiu TVE. 
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="05pesca/video/BD_TVE_PerxaXarxa" data-descripcio="Peça del NO-DO on es veu el treball a la veïna llacuna de l’Encanyissada.<br>Font: Arxiu TVE." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>