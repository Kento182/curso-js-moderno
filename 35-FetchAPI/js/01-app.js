const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    fetch('data/datos.txt')
        .then(respuesta => respuesta.text())
        .then(datos => {
            console.log(datos);
        })
        .catch(error => console.log(error));
}