//movimiento inicio
document.addEventListener('DOMContentLoaded', function () {
    var app = document.getElementById('app');
    var typewriter = new Typewriter(app, {
        loop: true,
        cursor: '|',
    });
    typewriter.typeString('Programadora')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Desarrolladora Web')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Vendedora')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Diseñadora gráfica') 
        .pauseFor(1500)
        .deleteAll()
        .start();
});

//movimiento carousel
    var myCarousel = document.querySelector('#carouselExample');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1500, 
        ride: 'carousel'
    });
