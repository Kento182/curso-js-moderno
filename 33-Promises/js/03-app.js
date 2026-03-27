const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true
    if (descuento) {
        resolve('Descuento aplicado')
    } else {
        reject('No se pudo aplicar el descuento')
    }
})


aplicarDescuento.then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log(error)
})



// Hay 3 valores posibles para una promesa... 
// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - El promise está pendiente, no se ha cumplido ni rechazado