const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true    
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
const { disponible } = producto;
console.log(disponible);


// Destructuring con arreglos
const numeros = [10,20,30,40,50];

const [ primero, segundo, ...tercero] = numeros;

console.log(tercero);
console.log(primero);