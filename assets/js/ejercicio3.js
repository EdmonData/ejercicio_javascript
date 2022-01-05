const validarNumero = (valor) => /^[0-9]+$/gim.test(valor);

const resolver = (operacion) => {

    const numero1 = +document.getElementById('valor1').value;
    const numero2 = +document.getElementById('valor2').value;
    const resultado = document.querySelector('.resultado');

    if (!validarNumero(numero1) || !validarNumero(numero2)) {
        resultado.innerHTML = `Operacion Invalida`;
    } else {
        let resultadoOperacion = '';
        (operacion === 'sumar') ? resultadoOperacion = numero1 + numero2 :
            resultadoOperacion = numero1 - numero2 < 0 ? 0 : numero1 - numero2;

        resultado.innerHTML = resultadoOperacion;
    }
}
const btn_sumar = document.getElementById('btn-sumar');
const btn_restar = document.getElementById('btn-restar');

btn_sumar.addEventListener('click', () => {

    resolver('sumar');
});

btn_restar.addEventListener('click', () => {

    resolver('restar');
});