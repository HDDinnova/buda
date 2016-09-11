<video preload autoplay controls>
    <source src="video/Mestra_BudaUnAltreMon.mp4" type="video/mp4">
    <source src="video/Mestra_BudaUnAltreMon.ogg" type="video/ogg">
    <source src="video/Mestra_BudaUnAltreMon.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Rosa Maria Merino explica anècdotes de la seva experiència com a mestra de l'escola de l’illa de Buda.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="09colons/video/Mestra_BudaUnAltreMon" data-descripcio="Maria Rosa Merino - Anècdotes de la docència a l’illa de Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>