<video poster="video/SalvadoMaluquer_PrimerNiu.jpg" preload autoplay controls>
    <source src="video/SalvadoMaluquer_PrimerNiu.mp4" type="video/mp4">
    <source src="video/SalvadoMaluquer_PrimerNiu.ogg" type="video/ogg">
    <source src="video/SalvadoMaluquer_PrimerNiu.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Salvador Maluquer explica com fou la troballa del primer niu -en aquest cas,de gavines- al delta de l’Ebre. 
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="04aus/video/SalvadoMaluquer_PrimerNiu" data-descripcio="Salvador Maluquer explica com fou la troballa del primer niu -en aquest cas,de gavines- al delta de l’Ebre." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>