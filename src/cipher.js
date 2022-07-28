const cipher = {
//Definición de función para codificar el mensaje  
    encode: function (desplazamiento, mensaje){   
    let resultado = "";  
//Uso de condicionales para la validación de test TypeError  
      if(desplazamiento == "" && mensaje == ""){
        throw new TypeError();
      }

      if(desplazamiento == 0 || mensaje == 0){
        throw new TypeError();
      } 

      if(desplazamiento == null && mensaje == []){
        throw new TypeError();
      }

      if(desplazamiento == 0 && mensaje == 0){
        throw new TypeError();
      }
//Definición de ciclo for (inicialización, condicional, expresion final y declaración) para el recorrido del mensaje aplicando formula
      for (let i =0; i < mensaje.length; i++) { 
        let espacios; 
        if (mensaje.length !== " ") {
          let mensajeCodificado =((mensaje.charCodeAt(i)-65 + desplazamiento) %26 + 65);
        resultado += String.fromCharCode (mensajeCodificado); 
        } else if(mensaje.length == " ") {
          espacios = mensaje.charCodeAt(32);
          espacios = String.fromCharCode(32);
          resultado += espacios;
        }
        // verificar si es un espacio
        // si es un espacio no codifiques y concatenar directo al resulto
        // si no es un espacio codificar
                                   
      } 
                         
    return resultado;  
  },
                
//Definición de función para decodificar el mensaje       
  decode: function (desplazamiento, mensaje){      
    let resultado = "";    
//Uso de condicionales para la validación de test TypeError  
      if(desplazamiento == "" && mensaje == ""){
        throw new TypeError();
      }

      if(desplazamiento == 0 || mensaje == 0){
        throw new TypeError();
      } 

      if(desplazamiento == null && mensaje == []){
        throw new TypeError();
      }

      if(desplazamiento == 0 && mensaje == 0){
        throw new TypeError();
      }    

//Definición de ciclo for (inicialización, condicional, expresion final y declaración) para el recorrido del mensaje aplicando formula     
    for (let i =0; i < mensaje.length; i++) {
      
      let mensajeDecodificado = ((mensaje.charCodeAt(i)+65 - desplazamiento) %26 + 65); 
      resultado += String.fromCharCode (mensajeDecodificado);             
    }
      return resultado;   
      
  }
   
};

export default cipher;

// Ejecutar código de cifrado-prueba
/*const cipher = {
  encode: function (desplazamiento, mensaje){
    let resultado = "";

     if (desplazamiento) {
      mensaje = new string(mensaje.toUpperCase());
      console.log(mensaje);
      console.log("desplazamiento = " + desplazamiento);

      let espacios;
      for (let i =0; i < mensaje.length; i++) {
        
        if(mensaje [i] !== " "){
          let resultado = mensaje.charCodeAt([i]);          
          let formula = (resultado - 65 + parseInt(desplazamiento)) % 26 +65;
          console.log("el resultado de la resta "+ formula);
          let mensajeCifrado = String.fromCode ([formula]);
          resultado += mensajeCifrado;
        } else if (mensaje [i] == " "){
          espacios = mensaje.charCodeAt(32);
          espacios = String.fromCharCode(32);
          resultado += espacios;
        }
      }
    console.log(resultado);
    return resultado;
    }
  },

  decode: function (desplazamiento, mensaje) {

  }
  
};

export default cipher;*/
