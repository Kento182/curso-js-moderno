// break

// for(let i = 1; i < 10; i++){
//     if(i === 5){
//         console.log(`este es el ${i}`);
//         break;
//     }
//     console.log(`numero ${i}`);
// }


// continue

// for(let i = 1; i < 10; i++){
//     if(i === 5){
//         console.log(`CINCO`);
//         continue;
//     }
//     console.log(`numero ${i}`);
// }


const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200, descuento: true},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento){
        console.log(`${i+1} - ${carrito[i].nombre} - Precio: $${carrito[i].precio} tiene descuento`);
        continue;
    }
    console.log(`${i+1} - ${carrito[i].nombre} - Precio: $${carrito[i].precio}`);    
}