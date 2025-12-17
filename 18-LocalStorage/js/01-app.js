localStorage.setItem('nombre', 'Kento');

const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
localStorage.setItem('meses', JSON.stringify(meses));