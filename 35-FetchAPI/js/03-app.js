const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/empleados.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            mostrarHTML(datos);
        })
        .catch(error => console.log(error));
}


function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido');
    let html = '';
    empleados.forEach(empleado => {
        const {nombre, id, empresa, trabajo} = empleado;
        html += `
            <p>Nombre: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    });

    contenido.innerHTML = html;
}