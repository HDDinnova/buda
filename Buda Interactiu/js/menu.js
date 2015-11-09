function menu(){
    $('#menu1').click(function() {
        $('.menu').animate({
          right: '0px'
        }, 200);
    });
    $('#tancamenu').click(function() {
      $('.menu').animate({
        right: "-285px"
      }, 200);
    });
    $('#bso').click(function(){
        if($('#audio')[0].paused){
            $('#audio')[0].play();
        } else {
            $('#audio')[0].pause();
            sona=true;
        }
    });
    $('#bpeli').click(function(){
        $('body').append("<div id='pelicula'><div>");
        $('body').off('mousewheel');
        $.ajax({
            url: "../pelicula.html",
            context: document.body
        }).done(function(data) {
            $('#pelicula').html(data);
            $('#zonaactiva').click(function(){
                console.log('Tancar');
                $('#zonaactiva').off('click');
                $('#pelicula').remove();
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
            });
        }).error(function(){
            $('#pelicula').load('pelicula.html',function(){
                $('#zonaactiva').click(function(){
                    console.log('Tancar');
                    $('#zonaactiva').off('click');
                    $('#pelicula').remove();
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                });
            });
        });
    });
    $('#bcredits').click(function(){
        $('body').append("<div id='credits'><div>");
        $('body').off('mousewheel');
        $.ajax({
            url: "../credits.html",
            context: document.body
        }).done(function(data) {
            $('#credits').html(data);
            $('#zonaactiva').click(function(){
                console.log('Tancar');
                $('#zonaactiva').off('click');
                $('#credits').remove();
                $('body').on('mousewheel',function(e){
                    controlMouse(e);
                });
            });
        }).error(function(){
            $('#credits').load('credits.html',function(){
                $('#zonaactiva').click(function(){
                    console.log('Tancar');
                    $('#zonaactiva').off('click');
                    $('#credits').remove();
                    $('body').on('mousewheel',function(e){
                        controlMouse(e);
                    });
                });
            });
        });
    });
}