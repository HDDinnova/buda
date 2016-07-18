<video poster="video/BD_TVE_Pesquera_2-encanyissada.jpg" preload autoplay controls>
    <source src="video/BD_TVE_Pesquera_2-encanyissada.mp4" type="video/mp4">
    <source src="video/BD_TVE_Pesquera_2-encanyissada.ogg" type="video/ogg">
    <source src="video/BD_TVE_Pesquera_2-encanyissada.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Arxiu TVE (No-Do). 
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="05pesca/video/BD_TVE_Pesquera_2-encanyissada" data-descripcio="Arxiu TVE (No-Do)." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>