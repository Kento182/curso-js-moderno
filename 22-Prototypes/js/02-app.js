function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const kento = new Cliente('Kento', 500);


function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`;
}

console.log(formatearCliente(kento));

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const ccyr = new Empresa('CCYR', 4000, 'computo');
console.log(formatearEmpresa(ccyr));