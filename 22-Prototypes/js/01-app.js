const cliente = {
    nombre: 'Kento',
    saldo: 500
}

console.log(cliente);


function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const kento = new Cliente('Kento', 500);

console.log(kento);