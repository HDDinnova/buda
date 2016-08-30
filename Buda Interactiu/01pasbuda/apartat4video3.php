<video poster="video/recup_llaguts.jpg" preload autoplay controls>
    <source src="video/recup_llaguts.mp4" type="video/mp4">
    <source src="video/recup_llaguts.ogg" type="video/ogg">
    <source src="video/recup_llaguts.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Després de dècades, els tres llaguts que formaven la base de la barcassa Isla de Buda van poder ser recuperats i arrenglerats al marge del riu. Tot és a punt per la seva restauració. Seqüència del documental "Buda, l'illa del Delta".
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="01pasbuda/video/recup_llaguts" data-descripcio="“Buda, l’illa del Delta” - La recuperació de la Pinta, la Niña i la Santa Maria" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>