var app = document.getElementById('app');

var typewriter = new Typewriter (app, {
    loop: true,

});

typewriter.typeString('Analista de Datos y Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Estas hecha para brillar!')
    .pauseFor(2500)
    
    .deleteChars(8)
    .typeString('<strong>Triunfar!</strong>')
    .pauseFor(2500)
    .start();