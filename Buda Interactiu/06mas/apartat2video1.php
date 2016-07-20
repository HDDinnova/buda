<video poster="video/0558_PontFusta_Vaixell.jpg" preload autoplay controls>
    <source src="video/0558_PontFusta_Vaixell.mp4" type="video/mp4">
    <source src="video/0558_PontFusta_Vaixell.ogg" type="video/ogg">
    <source src="video/0558_PontFusta_Vaixell.webm" type="video/webm">
</video>
<div class="blau">
    <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
</div>
<div class="groc">
    Animació del vapor Anita al pont de fusta.
</div>
<?php
    if (isset($_COOKIE['personatge'])){ ?>
<div class="guardar">
    <img src="../img/save.png" alt="icona guardar" data-video="06mas/video/0558_PontFusta_Vaixell" data-descripcio="Animació del vapor Anita al pont de fusta." onclick="guardarVideo(this)"/>
</div>
    <?php }
?>