var trans = 1200;
function diapositiva1(){
    $('#apartat1 video').animate({
        'opacity': 1
    },'slow',function(){
        $('#destacat1').animate({
            'top': '180px'
        },trans,'swing');
        $('#titol1').delay('200').animate({
            'top': '400px'
        },trans,'swing');
    });
    $('#apartat1 video').get(0).play();
}
function diapositiva10(){
    $('#apartat1 video').animate({
        'opacity': 1
    },trans,function(){
        $('#destacat1').animate({
            'top': '180px'
        },trans,'swing');
        $('#titol1').delay('200').animate({
            'top': '400px'
        },trans,'swing');
    });
    $('#apartat1 #tapa').animate({
        'opacity': 0
    },'slow');
    $('#destacat2').animate({
        'left': '-500px'
    },trans,'swing');
    $('#fotobarquesriba').delay('200').show().animate({
        'top': '-50%',
        'right': '-50%',
        rotate: '-45deg'
    },trans,'swing');
}
function diapositiva11(){
    $('#apartat1 #tapa').animate({
        'opacity': 0.8
    },'slow');
    $('#destacat1').animate({
        'top': '-300px'
    },trans,'swing');
    $('#titol1').animate({
        'top': '101%'
    },trans,'swing');
    $('#destacat2').delay('250').animate({
        'left': '5%'
    },trans,'swing');
    $('#fotobarquesriba').rotate('-45deg');
    $('#fotobarquesriba').delay('100').show().animate({
        'top': '90px',
        'right': '180px',
        rotate: '0deg'
    },trans,'swing');
}
function diapositiva20(){
    $('#fotobarquesriba').animate({
        'top': '-50%',
        'right': '-50%',
        rotate: '-45deg'
    },trans,'swing');
    $('#destacat2').animate({
        'left': '-500px'
    },trans,'swing');    
    $('#apartat1 video').animate({
        'bottom': '100'
    },trans,'swing');
    $('#apartat2 video').animate({
        'top': '0'
    },trans,'swing');
    $('#apartat1 #tapa').animate({
        'opacity': 0
    },'slow');
}