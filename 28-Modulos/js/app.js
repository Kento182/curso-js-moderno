import nuevaFuncion, { ahorro, mostrarInformacion, nombreCliente, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(nombreCliente)
console.log(ahorro)

console.log(mostrarInformacion(nombreCliente, ahorro))

tieneSaldo(ahorro)


const cliente = new Cliente(nombreCliente, ahorro)

console.log(cliente)
console.log(cliente.mostrarInformacion())


// Importar empresa

const empresa = new Empresa('Kento', 100, 'Juegos')
console.log(empresa.mostrarInformacion())


// Export default
nuevaFuncion()