<?php
require_once 'class/connexio.php';
$db=new connexio();
$per=$_COOKIE['personatge'];
switch($per['tipus']){
  case 'lite':
    $c='groc';
    break;
  case 'cine':
    $c='blau';
    break;
  case 'foto':
    $c='roig';
    break;
  case 'orni':
    $c='verd';
    break;
}
$f = $db->query('SELECT * FROM fotos WHERE usuari='.$per['id']);
$v = $db->query('SELECT * FROM videos WHERE usuari='.$per['id']);
$t = $db->query('SELECT * FROM textos WHERE usuari='.$per['id']);
?>
<div class="col-lg-offset-1 col-md-offset-1 col-lg-10 col-md-10 col-sm-12 dossierapartat">
    <div class="blau">
        <img src="img/tancar.png" alt="icona tancar" onclick="tancarvideo()"/>
    </div>
    <h1>Llibreta de viatge</h1>
    <div id="objectes" class="col-md-12">
        <div id="botomapa" class="botodossier <?=$c?>"></div>
        <div id="botofoto" class="botodossier"></div>
        <div id="botovideo" class="botodossier"></div>
        <div id="bototext" class="botodossier"></div>
        <div id="botoperfil" class="botodossier"></div>
        <div id="mapa" class="objecte">
<!--            <h2>Illa de Buda</h2>-->
            <a href="../06mas/"><img class="icomapa" id="barraca" src="../img/ico-barraca.png" alt=""/></a>
            <a href="../07cacera/"><img class="icomapa" id="cacador" src="../img/ico-cacador.png" alt=""/></a>
            <a href="../00metaforadelta/"><img class="icomapa" id="escriptor" src="../img/ico-escriptor.png" alt=""/></a>
            <a href="../02genesifar/"><img class="icomapa" id="far" src="../img/ico-far.png" alt=""/></a>
            <a href="../04aus/"><img class="icomapa" id="flamenc" src="../img/ico-flamenc.png" alt=""/></a>
            <a href="../03llacunes/"><img class="icomapa" id="niu" src="../img/ico-niu.png" alt=""/></a>
            <a href="../05pesca/"><img class="icomapa" id="peix" src="../img/ico-peix.png" alt=""/></a>
            <a href="../08arros/"><img class="icomapa" id="planta" src="../img/ico-planta.png" alt=""/></a>
            <a href="../01pasbuda/"><img class="icomapa" id="serp" src="../img/ico-serp.png" alt=""/></a>
            <a href="../10vapors/"><img class="icomapa" id="vapor" src="../img/ico-vapor.png" alt=""/></a>
            <a><img class="icomapa" id="vapor2" src="../img/ico-vapor2.png" alt=""/></a>
            <img id="imgmapa" src="../img/mapa-illa.png" alt="mapa illa de buda"/>
        </div>
        <div id="fotos" class="objecte">
            <?php while ($foto = $f->fetch_array(MYSQLI_ASSOC)){ ?>
            <div class="col-md-6 col-sm-6 col-xs-6 text-center" portafotos>
                <img src="../<?=$foto['foto']?>" alt="<?=$foto['llegenda']?>"/>
                <p><?=$foto['llegenda']?></p>
            </div>
            <?php } ?>
        </div>
        <div id="videos" class="objecte">
            <?php while ($video = $v->fetch_array(MYSQLI_ASSOC)){ ?>
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">
                <video controls poster="../<?=$video['video']?>.jpg">
                    <source src="../<?=$video['video']?>.mp4" type="video/mp4">
                    <source src="../<?=$video['video']?>.ogv" type="video/ogg">
                    <source src="../<?=$video['video']?>.webm" type="video/webm">
                El teu navegador no suporta aquest tipus de video, si us plau, actualitza'l per a una millor experiència
                </video>
                <p><?=$video['llegenda']?></p>
            </div>
            <?php } ?>
        </div>
        <div id="textos" class="objecte">
            <?php while ($text = $t->fetch_array(MYSQLI_ASSOC)){ ?>
            <div class="col-md-3 col-sm-3 col-xs-6 text-center">
                <img src="../<?=$text['imatge']?>" alt="" data-url="../<?=$text['url']?>"/>
            </div>
            <?php } ?>
        </div>
    </div>            
    <img id="dossier" src="../img/dossier-obert.png" alt="Imatge del dossier obert" data-color="<?=$c?>"/>
</div>

<div id="imatgegran" class="fons">
    <img id="fotogran" src="" alt="">
</div>
<div id="textgran" class="fons center-block" style="display: none">
    <div id="text"></div>
</div>
<script>
$('.botodossier').on('click',function(){
    var color = $('#dossier').data('color');
    switch ($(this).attr('id')){
        case 'botomapa':
            $('#mapa').show();
            $('#fotos').hide();
            $('#videos').hide();
            $('#textos').hide();
            $('#perfil').hide();
            $('.botodossier').removeClass(color);
            $('#botomapa').addClass(color);
            break;
        case 'botofoto':
            $('#fotos').show();
            $('#mapa').hide();
            $('#videos').hide();
            $('#textos').hide();
            $('#perfil').hide();
            $('.botodossier').removeClass(color);
            $('#botofoto').addClass(color);
            break;
        case 'botovideo':
            $('#videos').show();
            $('#fotos').hide();
            $('#mapa').hide();
            $('#textos').hide();
            $('#perfil').hide();
            $('.botodossier').removeClass(color);
            $('#botovideo').addClass(color);
            break;
        case 'bototext':
            $('#textos').show();
            $('#fotos').hide();
            $('#videos').hide();
            $('#mapa').hide();
            $('#perfil').hide();
            $('.botodossier').removeClass(color);
            $('#bototext').addClass(color);
            break;
        case 'botoperfil':
            $('#perfil').show();
            $('#fotos').hide();
            $('#videos').hide();
            $('#textos').hide();
            $('#mapa').hide();
            $('.botodossier').removeClass(color);
            $('#botoperfil').addClass(color);
            break;
    }
});

$('#dossierapartat #fotos img').on('click',function(){
    $('#fotogran').attr('src',$(this).attr('src'));
    $('body').css('overflow-y','hidden');
    $('#imatgegran').fadeIn(400);
});
$('#imatgegran').on('click',function(){
    $('body').css('overflow-y','auto');
    $(this).fadeOut(400,function(){
        $('#fotogran').attr('src','');
    }); 
});
$('#dossierapartat #textos img').on('click',function(){
    $('body').css('overflow-y','hidden');
    $('#text').load($(this).data('url'),function(){
        $('#textgran').fadeIn(400);
    });
});
$('#textgran').on('click',function(){
    $('body').css('overflow-y','auto');
    $(this).fadeOut(400,function(){
        $('#text').html('');
    });
});
$('#dossierapartat .blau').on('click',function(){
    $('#dossierapartat').hide();
    $('#dossierapartat').html('');
});
</script>
<?php
$db->close(); 