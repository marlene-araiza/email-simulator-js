document.addEventListener('DOMContentLoaded', function(){

    const valoresFormulario = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar elementos del interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');

    // EventListeners
    cargarEventListeners();
    function cargarEventListeners() {
        inputEmail.addEventListener('input', validar);
        inputAsunto.addEventListener('input', validar);
        inputMensaje.addEventListener('input', validar);
        btnReset.addEventListener('click', function(e) {
            e.preventDefault();

            // reinciar el objeto
            valoresFormulario.email = '';
            valoresFormulario.asunto = '';
            valoresFormulario.mensaje = '';
            formulario.reset();

            comprobarValoresFormulario();
        })
    }

    // Funciones
    function validar(e){
        if (e.target.value.trim() === "") {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            valoresFormulario[e.target.name] = '';
            comprobarValoresFormulario();
            return;
        } 

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement)
            valoresFormulario[e.target.name] = '';
            comprobarValoresFormulario();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores al objeto email
        valoresFormulario[e.target.name] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto de email
        comprobarValoresFormulario();
    }

    function mostrarAlerta(mensaje, referencia) {
        // Comprobar si ya existe una alerta
        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('P'); 
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alerta');
        

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.alerta');
        if(alerta){
            alerta.remove()
        }
    }

    function validarEmail(email){
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; // regular expression for email
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarValoresFormulario(){
        if(Object.values(valoresFormulario).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        } else {
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }
    
});