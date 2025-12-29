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

const kento = new Cliente('Kento', 400);
console.log(kento.mostrarInformacion());
console.log(kento);
console.log(Cliente.bienvenida());


const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de $${this.saldo}`;
    }
}

const kento2 = new Cliente2('Kento', 400);
console.log(kento2.mostrarInformacion());
console.log(kento2);