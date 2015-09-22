var menu1 = function(){
    $('#menu1').click(function() {
        $('.menu').animate({
          right: '0px'
        }, 200);
    });
      $('.icon-close').click(function() {
        $('.menu').animate({
          right: "-285px"
        }, 200);
      });
};

$('.boto').on('click',function(){
    switch ($(this).attr('id')){
        case 'botomapa':
            $('#mapa').show();
            $('#fotos').hide();
            $('#videos').hide();
            $('#textos').hide();
            $('#perfil').hide();
            break;
        case 'botofoto':
            $('#fotos').show();
            $('#mapa').hide();
            $('#videos').hide();
            $('#textos').hide();
            $('#perfil').hide();
            break;
        case 'botovideo':
            $('#videos').show();
            $('#fotos').hide();
            $('#mapa').hide();
            $('#textos').hide();
            $('#perfil').hide();
            break;
        case 'bototext':
            $('#textos').show();
            $('#fotos').hide();
            $('#videos').hide();
            $('#mapa').hide();
            $('#perfil').hide();
            break;
        case 'botoperfil':
            $('#perfil').show();
            $('#fotos').hide();
            $('#videos').hide();
            $('#textos').hide();
            $('#mapa').hide();
            break;
    }
});