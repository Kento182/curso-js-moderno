const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});


function buscarClima(e) {
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;
        
    if(ciudad === '' || pais === '') {
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    // Consultar la API
    consultarAPI(ciudad, pais);
}


function mostrarError(mensaje) {
    const alertaExistente = document.querySelector('.bg-red-100');
    if(alertaExistente) {
        alertaExistente.remove();
    }

    const alerta = document.createElement('div');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 
        'mx-auto', 'mt-6', 'text-center');
    alerta.innerHTML = `<strong class="font-bold">Error!</strong>
    <span class="block">${mensaje}</span>
    `;
    container.appendChild(alerta);

    // Eliminar la alerta después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


function consultarAPI(ciudad, pais) {
        const appId = '1ea1f13be6f15bb490db0e1f2ca1ba1d';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        spinner(); // Muestra el spinner mientras se carga la información
        
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => {
                limpiarHTML();  // Limpia el HTML antes de mostrar los resultados
                if(datos.cod === "404") {
                    mostrarError('Ciudad no encontrada');
                    return;
                }

                // Imprime la respuesta en el HTML
                mostrarClima(datos);
            });
}


function mostrarClima(datos) {
    const { name, main: { temp, temp_max, temp_min } } = datos;
    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const climaHTML = document.createElement('div');
    climaHTML.classList.add('text-center', 'text-white');
    climaHTML.innerHTML = `
        <h2 class="text-2xl font-bold">${name}</h2>
        <p class="text-6xl">${centigrados} &#8451;</p>
        <p>Max: ${max} &#8451; Min: ${min} &#8451;</p>
    `;
    resultado.appendChild(climaHTML);
}


const kelvinACentigrados = grados => parseInt(grados - 273.15);


function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}


function spinner() {
    limpiarHTML();
    const spinner = document.createElement('div');
    spinner.classList.add('sk-fading-circle');

    spinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>        
        <div class="sk-circle2 sk-circle"></div>        
        <div class="sk-circle3 sk-circle"></div>        
        <div class="sk-circle4 sk-circle"></div>        
        <div class="sk-circle5 sk-circle"></div>        
        <div class="sk-circle6 sk-circle"></div>        
        <div class="sk-circle7 sk-circle"></div>        
        <div class="sk-circle8 sk-circle"></div>        
        <div class="sk-circle9 sk-circle"></div>        
        <div class="sk-circle10 sk-circle"></div>        
        <div class="sk-circle11 sk-circle"></div>        
        <div class="sk-circle12 sk-circle"></div>
    `;
    resultado.appendChild(spinner);
}