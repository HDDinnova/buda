<video preload autoplay controls>
    <source src="video/GuillermoBores_regressioBuda.mp4" type="video/mp4">
    <source src="video/GuillermoBores_regressioBuda.ogg" type="video/ogg">
    <source src="video/GuillermoBores_regressioBuda.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Guillermo Borés explica que en les darreres dècades es calcula que s’han 
    perdut unes 400 hectàrees de llacunes. 
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="00metaforadelta/video/GuillermoBores_regressioBuda" data-descripcio="Guillermo Borés - la pèrdua a les llacunes" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>