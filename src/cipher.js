const cipher = {
  //Definición de función para codificar el mensaje
  encode: function (desplazamiento, mensaje) {
    //Uso de condicionales para la validación de test TypeError
    if (desplazamiento == undefined && mensaje == undefined) {
      throw new TypeError();
    }

    if (desplazamiento == 0 || mensaje == 0) {
      throw new TypeError();
    }

    /*if (desplazamiento == 0 || mensaje == 0) {
      throw new TypeError();
    }*/

    //Definición de ciclo for (inicialización, condicional, expresion final y declaración) para el recorrido del mensaje aplicando formula
    let resultado = "";
    for (let i = 0; i < mensaje.length; i++) {
      let espacios;
      if (mensaje[i] != " ") {
        let mensajeCodificado =
          ((mensaje.charCodeAt(i) - 65 + desplazamiento) % 26) + 65;
        resultado += String.fromCharCode(mensajeCodificado);
      } else if (mensaje[i] == " ") {
        espacios = mensaje.charCodeAt(32);
        espacios = String.fromCharCode(32);
        resultado += espacios;
      }
    }

    return resultado;
  },
  //Definición de función para decodificar el mensaje
  decode: function (desplazamiento, mensaje) {
    //Uso de condicionales para la validación de test TypeError
    if (desplazamiento == undefined && mensaje == undefined) {
      throw new TypeError();
    }

    if (desplazamiento == 0 || mensaje == 0) {
      throw new TypeError();
    }

    /*if (desplazamiento == null || mensaje == []) {
      throw new TypeError();
    }*/

    /*if (desplazamiento == 0 || mensaje == 0) {
      throw new TypeError();
    }*/

    //Definición de ciclo for (inicialización, condicional, expresion final y declaración) para el recorrido del mensaje aplicando formula
    let resultado = "";
    for (let i = 0; i < mensaje.length; i++) {
      let espacios;
      if (mensaje[i] != " ") {
        let mensajeDecodificado =
          ((mensaje.charCodeAt(i) + 65 - desplazamiento) % 26) + 65;
        resultado += String.fromCharCode(mensajeDecodificado);
      } else if (mensaje[i] == " ") {
        espacios = mensaje.charCodeAt(32);
        espacios = String.fromCharCode(32);
        resultado += espacios;
      }
    }

    return resultado;
  },
};

export default cipher;
