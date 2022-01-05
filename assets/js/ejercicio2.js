const botoneraColores =  document.getElementById('botonera');
const cajaResultadoColores = document.getElementById('caja');

botoneraColores.addEventListener('click', (e) => {
    cajaResultadoColores.style.background = e.target.style.backgroundColor;
})