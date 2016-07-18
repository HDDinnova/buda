function menu(){
    $('#menu1').click(function() {
        $('.menu').animate({
          right: '0px'
        }, 200);
        $(window).unbind('wheel');
        $(document).off( "keydown" );
    });
    $('#tancamenu').click(function() {
      $('.menu').animate({
        right: "-285px"
      }, 200);
      ratoli()
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
        $(window).unbind('wheel');
        $(document).off( "keydown" );
        $.ajax({
            url: "../pelicula.html",
            context: document.body
        }).done(function(data) {
            $('#pelicula').html(data);
            $('#zonaactiva').click(function(){
                console.log('Tancar');
                $('#zonaactiva').off('click');
                $('#pelicula').remove();
                ratoli();
            });
        }).error(function(){
            $('#pelicula').load('pelicula.html',function(){
                $('#zonaactiva').click(function(){
                    console.log('Tancar');
                    $('#zonaactiva').off('click');
                    $('#pelicula').remove();
                    ratoli();
                });
            });
        });
    });
    $('#bcredits').click(function(){
        $('body').append("<div id='credits'><div>");
        $(window).unbind('wheel');
        $(document).off( "keydown" );
        $.ajax({
            url: "../credits.html",
            context: document.body
        }).done(function(data) {
            $('#credits').html(data);
            $('#zonaactiva').click(function(){
                console.log('Tancar');
                $('#zonaactiva').off('click');
                $('#credits').remove();
                ratoli();
            });
        }).error(function(){
            $('#credits').load('credits.html',function(){
                $('#zonaactiva').click(function(){
                    console.log('Tancar');
                    $('#zonaactiva').off('click');
                    $('#credits').remove();
                    ratoli()
                });
            });
        });
    });
    $('#bsortir').click(function(){
        var url = (window.location.href).toString();
        window.location.replace('./logout.php?url='+url);
    });
    $('#bsortirmenu').click(function(){
        var url = (window.location.href).toString();
        window.location.replace('../logout.php?url='+url);
    });
}