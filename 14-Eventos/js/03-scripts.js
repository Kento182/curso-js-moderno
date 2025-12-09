const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => {
    console.log('escribiendo...');
})

busqueda.addEventListener('keyup', () => {
    console.log('soltando...');
})

busqueda.addEventListener('blur', () => {
    console.log('saliendo...');
})

busqueda.addEventListener('copy', () => {
    console.log('copiando...');
})

busqueda.addEventListener('paste', () => {
    console.log('pegando...');
})

busqueda.addEventListener('cut', () => {
    console.log('cortando...');
})

busqueda.addEventListener('input', (e) => {
    if(e.target.value === '') {
        console.log('fallo la validación')
    };
})