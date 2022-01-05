const limpiarFormulario = () => {
    document.querySelector('.errorNombre').innerHTML = '';
    document.querySelector('.errorAsunto').innerHTML = '';
    document.querySelector('.errorMensaje').innerHTML = '';
    document.querySelector('.resultado').innerHTML = '';
   
}

const isNotEmpty = (texto, etiqueta) => {
    if (texto.length > 0) {
        return true;
    } else {
        document.querySelector(`.error${etiqueta}`).innerHTML = `El ${etiqueta} es requerido.`;
        return false;
    }
};
const validarContenido = (nombre, asunto, mensaje) => {
    isNotEmpty(nombre, 'Nombre');
    isNotEmpty(asunto, 'Asunto');
    isNotEmpty(mensaje, 'Mensaje');

    return isNotEmpty(nombre, 'Nombre') && isNotEmpty(asunto, 'Asunto') && isNotEmpty(mensaje, 'Mensaje') ? true : false;
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    limpiarFormulario();


    const nombre = document.getElementById('nombre').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    if (validarContenido(nombre, asunto, mensaje)) {
        document.querySelector('.resultado').innerHTML = "el mensaje fue enviado";
        document.getElementById('botton').textContent = "ENVIANDO....";
        alert("El mensaje se esta enviando...!");
        
    }
})
