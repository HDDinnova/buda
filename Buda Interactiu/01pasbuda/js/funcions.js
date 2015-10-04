function diapositiva1(){
    $('#apartat1 video').animate({
        'opacity': 1
    },'slow',function(){
        $('#destacat1').animate({
            'top': '180px'
        },1200,'swing');
        $('#titol1').delay('200').animate({
            'top': '400px'
        },1200,'swing');
    });
    $('#apartat1 video').get(0).play();
}