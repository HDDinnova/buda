<video preload autoplay controls>
    <source src="video/SiscoVidal_BudaMetaforaDelta.mp4" type="video/mp4">
    <source src="video/SiscoVidal_BudaMetaforaDelta.ogg" type="video/ogg">
    <source src="video/SiscoVidal_BudaMetaforaDelta.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Francesc Vidal. Director del Parc Natural del Delta de l'Ebre
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="00metaforadelta/video/SiscoVidal_BudaMetaforaDelta" data-descripcio="Francesc Vidal. Director del Parc Natural del Delta de l'Ebre" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>