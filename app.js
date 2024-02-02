let listaNumeroSorteados = [];
let numeroMinimo = 1;
let numeroMaximo = 100;
let cantidadMaxima = (numeroMaximo - numeroMinimo) + 1;

// Función principal que establece las condiciones iniciales
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Desafío supremo 1');
    asignarTextoElemento('p', `Elige un número entre ${numeroMinimo} y ${numeroMaximo}`);
    numeroAleatorio = generarNumeroAleatorio(numeroMinimo, numeroMaximo); // Llama a generarNumeroAleatorio aquí
    console.log(listaNumeroSorteados);
    intentos = 1;
    console.log(numeroAleatorio);
}

// Asigna un texto a un elemento HTML identificado por su selector.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Verifica el intento del usuario
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('ingresoNumericoUsuario').value);

    if (isNaN(numeroUsuario)) {
        alert('Por favor, ingresa un número válido.');
        limpiarCaja();
        return;
    }

    let mensaje =
        numeroUsuario === numeroAleatorio ? `¡Lo lograste! En ${intentos} ${intentos === 1 ? 'intento!' : 'intentos!'}` :
        numeroUsuario > numeroAleatorio ? 'El número que ingresaste es superior al número secreto' :
        'El número ingresado es inferior al número secreto';

    if (mensaje.includes('¡Lo lograste!')) {
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    intentos++;
    asignarTextoElemento('p', mensaje);
    limpiarCaja();
}

// Limpia el contenido del campo de entrada
function limpiarCaja() {
    document.querySelector('#ingresoNumericoUsuario').value = '';
}

// Resetea el juego a las condiciones iniciales
function resetearJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

// Genera un número aleatorio en un rango específico
function generarNumeroAleatorio(elemento1, elemento2) {
    if (listaNumeroSorteados.length != cantidadMaxima){
        let numeroGenerado = Math.floor(Math.random() * (elemento2 - elemento1 + 1)) + elemento1;
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio(elemento1, elemento2);
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } else {
        alert('Se acabaron los numeros! Reiniciando Pagina!');
        recargarPagina();
    }
    
}

function recargarPagina() {
    location.reload();
}
// Inicializa las condiciones al cargar la página
condicionesIniciales();
