<video preload autoplay controls>
    <source src="video/Pedro_Parra.mp4" type="video/mp4">
    <source src="video/Pedro_Parra.ogg" type="video/ogg">
    <source src="video/Pedro_Parra.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    A la platja de Buda, Pedro Parra explica les vicissituds del procés constructiu de la carretera d’accés al far
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/Pedro_Parra" data-descripcio="Pedro Parra - explicació des de la platja de Buda del procés de construcció de la carretera que havia de dur al far de pedra" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>