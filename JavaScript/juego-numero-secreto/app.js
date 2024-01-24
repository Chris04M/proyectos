let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let rangoNumero = 5;

function titulos(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function generarNumeroAleatorio() {
  let numeroGenerado = Math.floor(Math.random() * rangoNumero + 1);
  //Si ya sorteamos todos los números
  if ((listaNumerosSorteados.length == rangoNumero)) {
    titulos('p', 'Ya se sortearon todos los números posibles')
  } else {
    // Si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroAleatorio();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    titulos(
      "p",
      `¡Acertaste! Lo hiciste en ${numeroIntentos} ${
        numeroIntentos == 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      titulos("p", "El número secreto es menor");
    } else {
      titulos("p", "El número secreto es mayor");
    }
    numeroIntentos++;
    limpiarCaja();
  }
  return;
}

function condicionesIniciales() {
  titulos("h1", "Juego del número secreto");
  titulos("p", `Digita un número del 1 al ${rangoNumero}`);
  //Generar número aleatorio
  numeroSecreto = generarNumeroAleatorio();
  //Inicializar el número de intentos
  numeroIntentos = 1;
}

function reiniciarJuego() {
  //Limpiar la caja
  limpiarCaja();
  //Mensaje de inicio
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}