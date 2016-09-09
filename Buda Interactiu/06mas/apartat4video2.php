<video poster="video/Sant_Pere_missa.jpg" preload autoplay controls>
    <source src="video/Sant_Pere_missa.mp4" type="video/mp4">
    <source src="video/Sant_Pere_missa.ogg" type="video/ogg">
    <source src="video/Sant_Pere_missa.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Romeria tradicional a l’illa de Buda per la festivitat de Sant Pere. Seqüència de la pel·lícula “Buda, l’illa del Delta”.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="06mas/video/Sant_Pere_missa" data-descripcio="\"Buda, l'illa del Delta\" - La tradicional romeria a Buda per Sant Pere" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>