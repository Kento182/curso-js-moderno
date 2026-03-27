const paises = [];

const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`${pais} agregado`);
    }, 2000);
})


nuevoPais('Alemania').then(mensaje => {
    console.log(mensaje)
    console.log(paises)
    return nuevoPais('Francia')
}).then(mensaje => {
    console.log(mensaje)
    console.log(paises)
    return nuevoPais('Inglaterra')
}).then(mensaje => {
    console.log(mensaje)
    console.log(paises)
})