const salida = document.querySelector('#salida')
const microfono = document.querySelector('#microfono')


microfono.addEventListener('click', ejecutarSpeechAPI)


function ejecutarSpeechAPI() {
    const recognition = new webkitSpeechRecognition()

    recognition.start()

    recognition.onstart = function () {
        salida.classList.add('mostrar')
        salida.textContent = 'Escuchando...'
    }

    recognition.onspeechend = function () {
        salida.textContent = 'Se ha dejado de grabar.'
        recognition.stop()
    }

    recognition.onresult = function (e) {
        const {confidence, transcript} = e.results[0][0]
        salida.textContent = `El texto reconocido es: ${transcript}`
        console.log(confidence * 100)
    }

}