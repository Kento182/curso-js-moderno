const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

for(let i = 0; i < carrito.length; i++) {
    console.log(`${i+1} - ${carrito[i].nombre} - Precio: $${carrito[i].precio}`);
}

carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - Precio: $${producto.precio}`);
})