document.addEventListener('DOMContentLoaded', function(){

    // Seleccionar elementos del interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // EventListeners
    cargarEventListeners();
    function cargarEventListeners() {
        inputEmail.addEventListener('blur', validar);
        inputAsunto.addEventListener('blur', validar);
        inputMensaje.addEventListener('blur', validar);
    }

    // Funciones
    function validar(e){
        if (e.target.value.trim() === "") {
            console.log(`El ${e.target.id} no es valido`);
        } else {
            console.log(`${e.target.id} es valido`);
        };

        if (validarEmail(e.target.value)) {
            alert('el email no es valido');
        };
    }

    function validarEmail(email){
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; // regular expression for email
        const resultado = regex.test(email);
        // console.log(resultado);
    }
    
});