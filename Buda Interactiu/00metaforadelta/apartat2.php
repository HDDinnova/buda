<div id="foto1-2" class="fotofons">
    <div id="foto1-2text" class="col-lg-12 col-md-12 col-sm-8 col-xs-8">
        <h2 class="roig col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-5 col-md-5 col-sm-9 col-xs-10">La regressió</h2>
        <div class="clearfix"></div>
        <p class="roig col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-4 col-md-4 col-sm-9 col-xs-10">El repte de la conservació</p>
    </div>
    <p id="foto1-2peu" class="peu col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-2 col-md-3 col-sm-4 col-xs-4">Foto: Salvador Maluquer (dècades de 1950 i  1960).<br>Arxiu Parc Natural del Delta de l’Ebre</p>
    <div class="tapa roig"></div>
    <div id="foto1-2text2">
        <p>
            Han desaparegut ja sota les aigües les antigues basses de Matarranya, Moixarres i el Pradot, situades més prop del front marí i del cap de Tortosa.
        </p>
        <?php
            if (isset($_COOKIE['personatge'])){ ?>
        <div class="guardartext">
            <img src="../img/save.png" alt="icona guardar" data-img="00metaforadelta/foto/IMG007PNDE.jpg" data-text="00metaforadelta/text/text2.html" onclick="guardarText(this)"/>
        </div>
            <?php }
        ?>
        <div class="boto pull-left" id="foto1-2b1">
            <img class="blau" id="foto1-2i1" src="img/play.png" alt="Animació de la regressió patida a Buda">
        </div>
        <div class="boto pull-left" id="foto1-2b2">
            <img class="blau" id="foto1-2i2" src="img/play.png" alt="Animació de la regressió patida a la desembocadura del Delta">
        </div>
    </div>
</div>
<div id="foto1-3" class="videofull">
    <video poster="video/Delta.jpg" preload>
        <source src="video/Delta.mp4" type="video/mp4">
        <source src="video/Delta.ogg" type="video/ogg">
        <source src="video/Delta.webm" type="video/webm">
    </video>
    <div id="foto1-3text">
        <p class="roig">
            El repte més important per a la conservació d’aquest espai és el control de la regressió general de les platges i la subsidència de tot el Delta
        </p>
        <div class="boto pull-left" id="foto1-3b1">
            <img class="blau" id="foto1-3i1" src="img/play.png" alt="Animació de la regressió patida a Buda">
        </div>
        <div class="boto pull-left" id="foto1-3b2">
            <img class="blau" id="foto1-3i2" src="img/play.png" alt="Animació de la regressió patida a la desembocadura del Delta">
        </div>
    </div>
</div>
<div class="final text-center">
    <h2>Moltes felicitats!, has acabat aquesta investigació.</h2>
    <h3>Vols continuar explorant l’illa de Buda?</h3>
    <a href="../01pasbuda"><img src="../menu/01pasbuda.jpg" alt=""/><br><br>EL PAS DE BUDA</a>
</div>