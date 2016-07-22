<video poster="video/Mestra_Esglesia-Escola.jpg" preload autoplay controls>
    <source src="video/Mestra_Esglesia-Escola.mp4" type="video/mp4">
    <source src="video/Mestra_Esglesia-Escola.ogg" type="video/ogg">
    <source src="video/Mestra_Esglesia-Escola.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Maria Rosa Merino, primera mestra destinada a l’illa de Buda, explica com es va adaptar l’església del complex en escola.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="06mas/video/Mestra_Esglesia-Escola" data-descripcio="Maria Rosa Merino, primera mestra destinada a l’illa de Buda, explica com es va adaptar l’església del complex en escola." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>