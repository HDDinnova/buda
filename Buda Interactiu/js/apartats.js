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
        controlMouse(tecla);
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
            activaEvents();
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
            activaEvents();
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