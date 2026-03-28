window.addEventListener('online', actualizarEstado)
window.addEventListener('offline', actualizarEstado)


function actualizarEstado() {
    const estado = navigator.onLine ? 'online' : 'offline'
    console.log(`El estado de la conexión es: ${estado}`)
}

actualizarEstado()