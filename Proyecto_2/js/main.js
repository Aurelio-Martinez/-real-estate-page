$(document).ready(() => {

    //cambio header
    $(window).on('scroll', () => {
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        }
    })
    // accion menu lateral
    $('#burger').click( ()=> {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
        $('header').toggleClass('abierto');

    })

    //smooth scroll
    $('a').on('click', function () {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})

