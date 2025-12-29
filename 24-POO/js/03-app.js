class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de $${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){    // reescribir un metodo
        return `Bienvenido al cajero de empresas`;
    }
}

const kento = new Cliente('Kento', 400);
const empresa = new Empresa('Codigo con Kento', 4000, 4776767514, `Programacion`);
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());