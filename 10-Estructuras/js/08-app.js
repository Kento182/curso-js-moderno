const autenticado = true;

// if en una linea
(autenticado) ? console.log('El usuario esta autenticado') : console.log('No estas autenticado');

if(autenticado){
    console.log('El usuario esta autenticado');
}


const puntaje = 500;

const revisarPuntaje = puntaje =>
{
if(puntaje > 400){
    console.log('Excelente!!!');
    return;
}

if(puntaje > 300){
    console.log('Buen puntaje... felicidades');
    return;
}
}

revisarPuntaje(puntaje);