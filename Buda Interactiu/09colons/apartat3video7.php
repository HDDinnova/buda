<video preload autoplay controls>
    <source src="video/SalvadoMaluquer_Contactes.mp4" type="video/mp4">
    <source src="video/SalvadoMaluquer_Contactes.ogg" type="video/ogg">
    <source src="video/SalvadoMaluquer_Contactes.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Salvador Maluquer recorda amb gratitud la solidaritat dels colons de Buda quan ell visitava l’illa per observar les aus
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/SalvadoMaluquer_Contactes" data-descripcio="Salvador Maluquer - Record dels colons de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>