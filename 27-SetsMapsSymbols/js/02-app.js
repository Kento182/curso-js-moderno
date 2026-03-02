// WeakSet
const weakset = new WeakSet()

const cliente = {
    nombre: 'Kento',
    saldo: 100
}


weakset.add(cliente)

console.log(weakset)

// weakset.delete(cliente)

console.log(weakset.has(cliente))