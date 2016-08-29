toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

function ratoli(){
    $(window).bind('wheel',function(e){
        controlMouse(e.originalEvent);
    });
    $(document).keydown(function(e){
        tecla = e.which;
        if (tecla == 38 || tecla == 40){
            controlMouse(tecla);
        }
    });
}

function passar(id){
    diapositiva(id);
    if (id < 100){
        pos=id;
    } else {
        pos=id/10;
    }
}

function tancarvideo(){
    $('.videopopup').hide();
    $('#videos').html('');
    ratoli();
}

function video(boto,video){
    $(boto).click(function(){
        $(window).unbind('wheel');
        $(document).off( "keydown" );
        $('#videos').load(video,function(){
            $('.videopopup').show();
        });
    });
}
function slider(boto,div){
    $(boto).click(function(){
        $(window).unbind('wheel');
        $(document).off( "keydown" );
        $(div).show();
        $(div+' .sliderfotos').slick({
            infinite: false
        });
        $(div+' .blau').click(function(){
            $(div).hide();
            $(div+' .sliderfotos').slick('unslick');
            ratoli();
        });
    });
}
function foto(boto,div){
    $(boto).click(function(){
        $(window).unbind('wheel');
        $(document).off( "keydown" );
        $(div).show();
        $(div).click(function(){
            $(div).hide();
            ratoli();
        });
    });
}
function fotozoom(boto,div,imatge){
    $(boto || imatge).click(function(){
        $(window).unbind('wheel');
        $(document).off( "keydown" );
        $(div).show();
        $(imatge).elevateZoom({
            scrollZoom : true,
            zoomType: "lens",
            lensShape: "square",
            loadingIcon: "true",
            lensSize: 400
        });
        $(div).click(function(){
            $(this).hide();
            $('.zoomContainer').remove();
            ratoli();
        });
    });
}

function guardarVideo(obj){
    var video = $(obj).data('video');
    var desc = $(obj).data('descripcio');
    var user = document.cookie.split(';')[0].split('=')[1];
    
    var url = '{"user":"'+user+'","video":"'+video+'","desc":"'+desc+'"}';
    url = JSON.parse(url);
    
    $.post('../api/savevideo',url,function(data){
        console.log(data);
        toastr["info"]("Video guardat correctament");
    });
}
function guardarFoto(obj){
    var foto = $(obj).data('foto');
    var desc = $(obj).data('descripcio');
    var user = document.cookie.split(';')[0].split('=')[1];
    
    var url = '{"user":"'+user+'","foto":"'+foto+'","desc":"'+desc+'"}';
    url = JSON.parse(url);
    
    $.post('../api/savefoto',url,function(data){
        console.log(data);
        toastr["info"]("Foto guardada correctament");
    });
}
function guardarText(obj){
    var img = $(obj).data('img');
    var text = $(obj).data('text');
    var user = document.cookie.split(';')[0].split('=')[1];
    
    var url = '{"user":"'+user+'","img":"'+img+'","url":"'+text+'"}';
    url = JSON.parse(url);
    
    $.post('../api/savetext',url,function(data){
        console.log(data);
        toastr["info"]("Text guardat correctament");
    });
}