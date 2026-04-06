const cargarAPIbtn = document.querySelector('#cargarAPI');
cargarAPIbtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('https://picsum.photos/list')
        .then(respuesta => respuesta.json())
        .then(datos => {
            mostrarHTML(datos);
        })
        .catch(error => console.log(error));
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('#contenido');
    let html = '';
    datos.forEach(imagen => {
        const {author, post_url} = imagen;
        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver imagen</a>
        `;
    });

    contenido.innerHTML = html;
}