class Cliente {

    #nombre;

    // constructor(nombre, saldo){
    //     this.#nombre = nombre;
    //     this.saldo = saldo;
    // }

    // mostrarInformacion(){
    //     return `Cliente: ${this.#nombre}, tu saldo es de $${this.saldo}`;
    // }

    // static bienvenida(){
    //     return `Bienvenido al cajero`;
    // }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre
    }
}

// const kento = new Cliente('Kento', 400);
// console.log(kento.mostrarInformacion());
// console.log(kento.#nombre);

const kento = new Cliente();
kento.setNombre('Kento');
console.log(kento.getNombre());