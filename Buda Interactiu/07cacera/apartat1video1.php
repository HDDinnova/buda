<video poster="video/AntonioCabezas_autosuficiencia.jpg" preload autoplay controls>
    <source src="video/AntonioCabezas_autosuficiencia.mp4" type="video/mp4">
    <source src="video/AntonioCabezas_autosuficiencia.ogg" type="video/ogg">
    <source src="video/AntonioCabezas_autosuficiencia.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Antonio Cabezas, fill del darrer farer del far de Buda, recorda l’abundància de recursos que oferia l’illa.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="07cacera/video/AntonioCabezas_autosuficiencia" data-descripcio="Antonio Cabezas - La cacera a Buda" onclick="guardarVideo(this)"/>
</div>
    <?php }
?>