// Selectores
const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')

const formulario = document.querySelector('#nueva-cita')
const botonInput = document.querySelector('#nueva-cita button[type="submit"]')
const contenedorCitas = document.querySelector('#citas')


// Eventos
mascotaInput.addEventListener('change', datosCita)
propietarioInput.addEventListener('change', datosCita)
telefonoInput.addEventListener('change', datosCita)
fechaInput.addEventListener('change', datosCita)
horaInput.addEventListener('change', datosCita)
sintomasInput.addEventListener('change', datosCita)

formulario.addEventListener('submit', submitCita)

let editando = false


// Objeto de Cita
const citaObj = {
    id: generarId(),
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}


// Clases
class Notificacion{
    constructor({texto, tipo}){
        this.texto = texto
        this.tipo = tipo

        this.mostrar()
    }

    mostrar(){
        // crear la notificación
        const alerta = document.createElement('DIV')
        alerta.classList.add('text-center', 'fw-bold', 'text-uppercase', 'my-3', 'alert')

        // eliminar alertas duplicadas
        const alertaPrevia = document.querySelector('.alert')
        alertaPrevia?.remove()

        // si es de tipo error agrega una clase
        this.tipo === 'error' ? alerta.classList.add('alert-danger') : alerta.classList.add('alert-success')

        // mensaje de error
        alerta.textContent = this.texto

        // insertar en el DOM
        formulario.parentElement.insertBefore(alerta, formulario)

        // quitar despues de 5 segundos
        setTimeout(() => {
            alerta.remove()
        }, 3000);
    }
}

class AdminCitas{
    constructor(){
        this.citas = []        
    }

    agregar(cita){
        this.citas = [...this.citas, cita]
        this.mostrar()
    }

    editar(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)
        this.mostrar()
    }

    eliminar(id){
        this.citas = this.citas.filter(cita => cita.id !== id)
        this.mostrar()
    }

    mostrar(){
        // limpiar el HTML
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }

        // si hay citas
        if(this.citas.length === 0){
            contenedorCitas.innerHTML = '<p class="fs-4 mt-5 mb-4 text-center text-secondary">No hay pacientes</p>'
            return
        }

        // generando las citas
        this.citas.forEach(cita => {
            const liCita = document.createElement('li')
            liCita.classList.add('mb3', 'bg-white', 'shadow', 'p4', 'rounded-3', 'list-group-item')

            const mascota = document.createElement('P')
            mascota.classList.add('fw-normal', 'mb-3', 'text-secondary')
            mascota.innerHTML = `<span class="font-weight-bold text-uppercase">Mascota: </span> ${cita.mascota}`
            const propietario = document.createElement('P')
            propietario.classList.add('fw-normal', 'mb-3', 'text-secondary')
            propietario.innerHTML = `<span class="font-weight-bold text-uppercase">Propietario: </span> ${cita.propietario}`
            const telefono = document.createElement('P')
            telefono.classList.add('fw-normal', 'mb-3', 'text-secondary')
            telefono.innerHTML = `<span class="font-weight-bold text-uppercase">Teléfono: </span> ${cita.telefono}`
            const fecha = document.createElement('P')
            fecha.classList.add('fw-normal', 'mb-3', 'text-secondary')
            fecha.innerHTML = `<span class="font-weight-bold text-uppercase">Fecha: </span> ${cita.fecha}`
            const hora = document.createElement('P')
            hora.classList.add('fw-normal', 'mb-3', 'text-secondary')
            hora.innerHTML = `<span class="font-weight-bold text-uppercase">Hora: </span> ${cita.hora}`
            const sintomas = document.createElement('P')
            sintomas.classList.add('fw-normal', 'mb-3', 'text-secondary')
            sintomas.innerHTML = `<span class="font-weight-bold text-uppercase">Sintomas: </span> ${cita.sintomas}`

            // Botón Editar
            const btnEditar = document.createElement('button');            
            btnEditar.classList.add('btn', 'btn-primary', 'py-2', 'px-5', 'fw-bold', 'text-uppercase', 'rounded-3', 'd-flex', 'align-items-center', 'gap-2', 'btn-editar');
            btnEditar.innerHTML = 'Editar <svg fill="none" style="height:1.25rem; width:1.25rem;" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
            const clone = structuredClone(cita)
            btnEditar.onclick = () => cargarEdicion(clone)
            // Botón Eliminar
            const btnEliminar = document.createElement('button');            
            btnEliminar.classList.add('btn', 'btn-danger', 'py-2', 'px-5', 'fw-bold', 'text-uppercase', 'rounded-3', 'd-flex', 'align-items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" style="height:1.25rem; width:1.25rem;" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            btnEliminar.onclick = () => this.eliminar(cita.id)

            const contenedorBotones = document.createElement('DIV')
            contenedorBotones.classList.add('d-flex', 'justify-content-between', 'mt-5')

            contenedorBotones.appendChild(btnEditar)
            contenedorBotones.appendChild(btnEliminar)

            // inyectar al HTML
            liCita.appendChild(mascota)
            liCita.appendChild(propietario)
            liCita.appendChild(telefono)
            liCita.appendChild(fecha)
            liCita.appendChild(hora)
            liCita.appendChild(sintomas)
            liCita.appendChild(contenedorBotones)
            contenedorCitas.appendChild(liCita)
        })
    }
}


// Funciones
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

const citas = new AdminCitas()

function submitCita(e){
    e.preventDefault();
    
    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })        
        return
    }

    if(editando){
        citas.editar({...citaObj})
        new Notificacion({
            texto: 'Guardado correctamente',
            tipo: 'exito'
        })
    }else{
        citas.agregar({...citaObj})
        new Notificacion({
            texto: 'Paciente registrado',
            tipo: 'exito'
        })
    }    
    formulario.reset()
    reiniciarObjetoCita()
    botonInput.textContent = 'Crear Cita'
    editando = false
}

function reiniciarObjetoCita(){
    // reinicia el objeto
    // citaObj.id = generarId()
    // citaObj.mascota = ''
    // citaObj.propietario = ''
    // citaObj.telefono = ''
    // citaObj.fecha = ''
    // citaObj.hora = ''
    // citaObj.sintomas = ''

    Object.assign(citaObj, {
        id: generarId(),
        mascota: '',
        propietario: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
}

function generarId(){
    return Math.random().toString(36).substring(2) + Date.now()
}

function cargarEdicion(cita){
    Object.assign(citaObj, cita)

    mascotaInput.value = cita.mascota
    propietarioInput.value = cita.propietario
    telefonoInput.value = cita.telefono
    fechaInput.value = cita.fecha
    horaInput.value = cita.hora
    sintomasInput.value = cita.sintomas

    editando = true

    botonInput.textContent = 'Guardar Cambios'
}