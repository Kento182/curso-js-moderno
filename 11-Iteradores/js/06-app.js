// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar', 'Dormir'];

pendientes.forEach( (pendiente, i) => {
    console.log(`${i} : ${pendiente}`)
})

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

carrito.forEach( (producto, i) => console.log(`${i} - ${producto.nombre} - ${producto.precio}`))

carrito.map( (producto, i) => console.log(`${i} - ${producto.nombre} - ${producto.precio}`))

const nuevoArreglo = carrito.forEach( (producto, i) => `${i} - ${producto.nombre} - ${producto.precio}`)

const nuevoArreglo2 = carrito.map( (producto, i) => `${i} - ${producto.nombre} - ${producto.precio}`)

console.log(nuevoArreglo);
console.log(nuevoArreglo2);