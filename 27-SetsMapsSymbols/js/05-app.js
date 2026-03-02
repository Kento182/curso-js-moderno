// Symbol
const sym = Symbol()
const sym2 = Symbol()

if(sym === sym2){
    console.log('Son iguales')
}else{
    console.log('Son diferentes')
}


const nombre = Symbol()
const apellido = Symbol()
const persona = {}

persona[nombre] = 'Ricardo'
persona[apellido] = 'González'
persona.tipoCliente = 'Premium'
persona.saldo = 500


console.log(persona)
console.log(persona[nombre])

// Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
    console.log(i)
}


// Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente')
const cliente = {}


cliente[nombreCliente] = 'Kento'

console.log(cliente)
console.log(cliente[nombreCliente])
console.log([nombreCliente])