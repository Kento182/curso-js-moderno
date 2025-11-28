// Object Literal
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Tableta', 3000);
console.log(producto2);

const producto3 = new Producto('Televisión', 5000);
console.log(producto3);