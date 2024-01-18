let numeroMaximoRandom = 10;
let numeroMinimoRandom = 1;
let numeroRandom = 0;
let contadorDeIntentos = 0;
let numerosAleatoriosUtilizados = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.textContent = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
  
  if(numeroUsuario === numeroRandom){
    asignarTextoElemento('p',`Acertaste el número en ${contadorDeIntentos} ${contadorDeIntentos == 1 ? 'intento' : 'intentos'}.`);
    document.querySelector('#reiniciar').removeAttribute('disabled');
  }else {
    if(numeroUsuario > numeroRandom){
      asignarTextoElemento('p','El número secreto es menor');
    } else {
      asignarTextoElemento('p','El número secreto es mayor')
    }
    contadorDeIntentos++;
  }

  limpiarCaja();
  return;
}

function generarNuemeroAleatorio(numeroMaximo, numeroMinimo) {
  let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + numeroMinimo;
  if (numerosAleatoriosUtilizados.includes(numeroAleatorio)){
    return generarNuemeroAleatorio(numeroMaximo, numeroMinimoRandom);
  } else { 
    numerosAleatoriosUtilizados.push(numeroAleatorio);
    return numeroAleatorio;
  }
}

function limpiarCaja() {
  document.querySelector('#numeroUsuario').value = ""
  return;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", "Indica un número del 1 al 10");
  contadorDeIntentos = 1;
  if(numerosAleatoriosUtilizados.length == 10){
    numerosAleatoriosUtilizados = [];
  }
  numeroRandom = generarNuemeroAleatorio(numeroMaximoRandom, numeroMinimoRandom);
  console.log(numeroRandom);
}

function reiniciarJuego() {
  limpiarCaja()
  condicionesIniciales()
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
