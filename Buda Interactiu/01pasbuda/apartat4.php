<div id="imgbarcassa">
    <img src="foto/Diapositiva151.jpg" alt="gent passant amb la barcassa"/>
    <p>Foto: Arxiu Museu de les Terres de l’Ebre</p>
</div>
<div class="blau titol" id="titol4">
    <h3>Els mitjans de transport</h3>
</div>
<div class="blau" id="destacat4">
    <p>La barcassa Isla de Buda</p>
</div>
<div class="blau" id="tapa4-1"></div>
<div id="text4-1">
    <img src="img/marca3.png" alt=""/>
    <p>Les embarcacions utilitzades en el pas han estat diverses, segons els diferents usos. 
        Així, consta la documentació de la canoa “Coto Isla de Buda”, propietat de la societat de caçadors del mateix nom, que es va inscriure a Marina a principis de 1921. 
        D’altra banda, una de les barques que va funcionar els anys cinquanta i seixanta del segle passat va ser la llanxa motora “Correo de Buda”, propietat de Pedro Franch 
        Piñana, administrador de l’illa. Aquesta embarcació no només es va utilitzar al pas, sinó també per navegar des de la Cava a Buda.<br>
        Fins a mitjans del segle XX s’empraria també una barca petita per passar persones o càrregues de poc pes.</p>
</div>
<div id="imgbarcassa2">
    <img src="foto/Diapositiva152.jpg" alt="foto de la barcassa 'isla de buda'"/>
    <p>Foto: Arxiu Museu de les Terres de l’Ebre</p>
</div>
<div class="blau titol" id="titol4-2">
    <h3>"Isla de Buda"</h3>
</div>
<div class="blau" id="destacat4-2">
    <p>Els anys 50, la societat “Explotaciones Agrícolas Pedro Franch Casanova, S.A.”, administradora de Buda, adquereix tres llaüts construïts a Tortosa pel conegut 
        calafat Isaïes Vilàs Panisello: la “Pinta”, la “Niña” i la “Santa Maria”. Amb aquestes tres embarcacions es construiria la barcassa “Isla de Buda”, inscrita com 
        a plataforma flotante para tráfico del río Ebro, ja motoritzada. Va funcionar fins a mitjans dels anys 90, per creuar transversalment el riu des de la zona de 
        Riumar, on actualment es troben els vaixells turístics, fins a l’illa.</p>
</div>
<div class="blau" id="play4">
    <img id="passarro2" src="img/play.png" alt="reproduir video pas sarro">
    <img id="guillermobores" src="img/play.png" alt="reproduir video de Guillermo Borés">
    <img id="recupllaguts" src="img/play.png" alt="reproduir video sobre la recuperació dels llaguts">
</div>
<div class="videopopup">
    <div id="videosapartat4"></div>
</div>
<script>
    $('#passarro2').on('click',function(){
        $('body').off('mousewheel');
        $('#videosapartat4').load('apartat4video1.html',function(){
            $('.videopopup').show();
        });
        
    });
    $('#guillermobores').on('click',function(){
        $('body').off('mousewheel');
        $('#videosapartat4').load('apartat4video2.html',function(){
            $('.videopopup').show();
        });
    });
    $('#recupllaguts').on('click',function(){
        $('body').off('mousewheel');
        $('#videosapartat4').load('apartat4video3.html',function(){
            $('.videopopup').show();
        });
    });
    function tancarvideo4(){
        $('.videopopup').hide();
        $('#videosapartat4').html('');
        $('body').on('mousewheel',function(e){
            controlMouse(e);
        });
    }
</script>