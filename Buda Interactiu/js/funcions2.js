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
};
$('.boto').on('click',function(){
    var color = $('#dossier').data('color');
    switch ($(this).attr('id')){
        case 'botomapa':
            $('#mapa').show();
            $('#fotos').hide();
            $('#videos').hide();
            $('#textos').hide();
            $('#perfil').hide();
            $('.boto').removeClass(color);
            $('#botomapa').addClass(color);
            break;
        case 'botofoto':
            $('#fotos').show();
            $('#mapa').hide();
            $('#videos').hide();
            $('#textos').hide();
            $('#perfil').hide();
            $('.boto').removeClass(color);
            $('#botofoto').addClass(color);
            break;
        case 'botovideo':
            $('#videos').show();
            $('#fotos').hide();
            $('#mapa').hide();
            $('#textos').hide();
            $('#perfil').hide();
            $('.boto').removeClass(color);
            $('#botovideo').addClass(color);
            break;
        case 'bototext':
            $('#textos').show();
            $('#fotos').hide();
            $('#videos').hide();
            $('#mapa').hide();
            $('#perfil').hide();
            $('.boto').removeClass(color);
            $('#bototext').addClass(color);
            break;
        case 'botoperfil':
            $('#perfil').show();
            $('#fotos').hide();
            $('#videos').hide();
            $('#textos').hide();
            $('#mapa').hide();
            $('.boto').removeClass(color);
            $('#botoperfil').addClass(color);
            break;
    }
});

$('#fotos img').on('click',function(){
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
$('#textos img').on('click',function(){
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