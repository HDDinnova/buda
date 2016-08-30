<video poster="video/transbordador_migjorn_02.jpg" preload autoplay controls>
    <source src="video/transbordador_migjorn_02.mp4" type="video/mp4">
    <source src="video/transbordador_migjorn_02.ogg" type="video/ogg">
    <source src="video/transbordador_migjorn_02.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    A finals de juny, per la festivitat de Sant Pere, hi ha la tradició de fer una romeria des del veí municipi de Sant Jaume d'Enveja fins a l'illa de Buda. Quan l'aigua impedeix el pas per la platja, el transbordador pel riu Migjorn és l'únic mitjà per accedir-hi. Així es pot apreciar en aquesta seqüència de la pel·lícula "Buda, l'illa del Delta".
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="01pasbuda/video/transbordador_migjorn_02" data-descripcio="“Buda, l’illa del Delta” - La romeria per Sant Pere" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>