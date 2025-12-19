function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Silver';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}


// Instanciarlo
const ricardo = new Cliente('Ricardo', 6000);
console.log(ricardo.tipoCliente());
console.log(ricardo.nombreClienteSaldo());
ricardo.retiraSaldo(1000);
console.log(ricardo.nombreClienteSaldo());

console.log(ricardo);