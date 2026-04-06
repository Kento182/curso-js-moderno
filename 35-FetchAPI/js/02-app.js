const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);



function obtenerDatos() {
    fetch('data/empleado.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            mostrarHTML(datos);
        })
        .catch(error => console.log(error));
}


function mostrarHTML({nombre, id, empresa, trabajo}) {
    const contenido = document.querySelector('#contenido');
    contenido.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}