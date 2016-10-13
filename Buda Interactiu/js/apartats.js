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

function controlMouse(e){
    $(window).unbind('wheel');
    $(document).off( "keydown" );
    if(e.deltaY>0 || e==40){
        pos++;
        passar(pos);
    } else if(e.deltaY<0 || e==38) {
        if (pos === 10) {
            ratoli();
        } else {
            pos--;
            if (pos === 10) {
                passar(pos);
            } else {
                passar(pos*10);
            }
        }
    }
}

var ultima = '';

function ratoli(e){
    if (ultima !== 'ratoli'){
        $(window).bind('wheel',function(e){
            controlMouse(e.originalEvent);
        });
        $(document).on("keydown",function(e){
            tecla = e.which;
            if (tecla == 38 || tecla == 40){
                controlMouse(tecla);
            }
        });
    }
    ultima = 'ratoli';
}

function passar(id){
    diapositiva(id);
    ultima = 'passar';
//    if (id < 120){
//        pos=id;
//    } else {
//        pos=id/10;
//    }
}

function tancarvideo(){
    $('.videopopup').hide(0,function(){
        $('#videos').html('');
        $(window).unbind('wheel');
        $(document).off( "keydown");
        ultima = 'tancarvideo';
        ratoli('videopopup');
    });
}

function video(boto,video){
    $(boto).click(function(){
        $(document).off( "keydown" );
        $(window).unbind('wheel');
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
        try {
            $(div+' .sliderfotos').slick({
                infinite: false
            });
            $(div+' .blau').on('click',function(){
                $(div).hide(0,function(){
                    $(div+' .sliderfotos').slick('unslick');
                    $(window).unbind('wheel');
                    $(document).off( "keydown");
                    ultima = 'slider';
                    ratoli('slider');
                    $(div+' .blau').off('click');
                });
                
            });
        }
        catch(err) {
            console.log(err);
            $(window).unbind('wheel');
            $(document).off( "keydown" );
        }
    });
}
function foto(boto,div){
    $(boto).click(function(){
        $(window).unbind('wheel');
        $(document).off( "keydown" );
        $(div).show();
        $(div).on('click',function(){
            $(div).hide(0,function(){
                $(window).unbind('wheel');
                $(document).off( "keydown" );
                ultima = 'foto';
                ratoli('foto');
                $(div).off('click');
            });            
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
            $(this).hide(0,function(){
                $('.zoomContainer').remove();
                $(window).unbind('wheel');
                $(document).off( "keydown");
                ultima = 'fotozoom';
                ratoli('fotozoom');
            });
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
function guardarFinal(apartat){
    console.log('GuardarFinal');
    var user = document.cookie.split(';')[0].split('=')[1];
    
    var url = '{"user":"'+user+'","apartat":"'+apartat+'"}';
    url = JSON.parse(url);
    console.log(url);
    
    $.post('../api/apfinal',url,function(data){
        console.log(data);
    });
}