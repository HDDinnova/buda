<video preload autoplay controls>
    <source src="video/CésarDíaz_RepercusióLucioDelValle.mp4" type="video/mp4">
    <source src="video/CésarDíaz_RepercusióLucioDelValle.ogg" type="video/ogg">
    <source src="video/CésarDíaz_RepercusióLucioDelValle.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    César Díaz-Aguado comenta la repercussió nacional de la figura de Lucio del Valle
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="02genesifar/video/CésarDíaz_RepercusióLucioDelValle" data-descripcio="César Díaz-Aguado - el bicentenari del seu naixement com a oportunitat per divulgar la figura de Lucio del Valle" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>