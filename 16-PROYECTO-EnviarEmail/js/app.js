document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: '',
        ccValido: true
    }

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"');
    const btnReset = document.querySelector('#formulario button[type="reset"');
    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputCC.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click',function(e) {
        e.preventDefault();
        resetFormulario();
    })

    function enviarEmail(e) {
        e.preventDefault();
        
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetFormulario();

            // Crear alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10',
                'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alertaExito);

            setTimeout(() => {
               alertaExito.remove();
            }, 3000);
        }, 3000);
    }

    function validar(e) {        
        if(e.target.value.trim() === '' && e.target.id !== 'cc'){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();            
            return;
        }

        // Validar email principal
        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta(`El ${e.target.id} no es valido`, e.target.parentElement);
            email[e.target.id] = '';
            comprobarEmail();            
            return;
        }

        // Validar cc solo si tiene contenido
        if(e.target.id === 'cc'){
            if(e.target.value !== '' && !validarEmail(e.target.value)){
                mostrarAlerta(`El ${e.target.id} no es valido`, e.target.parentElement);
                email.ccValido = false;
                comprobarEmail();
                return;
            }else{
                email.ccValido = true;
            }
        }

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.id] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto de email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, refencia) {
        limpiarAlerta(refencia);

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        // Inyectar el error al formulario
        refencia.appendChild(error);
    }

    function limpiarAlerta(refencia) {        
        const alerta = refencia.querySelector('.bg-red-600'); 
        if(alerta)
            alerta.remove();       
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {        
        const { email: mail, asunto, mensaje, ccValido } = email;

    if(mail === '' || asunto === '' || mensaje === '' || !ccValido){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;            
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;        
    }

    function resetFormulario() {
        // Reiniciar el objeto
        email.email = '';
        email.cc = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }
});