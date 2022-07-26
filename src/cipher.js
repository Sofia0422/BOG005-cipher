const cipher = {
  encode: function (desplazamiento, mensaje){  
    if(!desplazamiento || !mensaje ) {
      throw new TypeError ("Valores Invalidos");
    } 
    let resultado = ""; 
      for (let i =0; i < mensaje.length; i++) {  
        // verificar si es un espacio
        // si es un espacio no codifiques y concatenar directo al resulto
        // si no es un espacio codificar
        let mensajeCodificado =((mensaje.charCodeAt([i])-65 + desplazamiento) %26 + 65);
        resultado += String.fromCharCode (mensajeCodificado);                            
      } 
                         
    return resultado;  
  },
                
      
  decode: function (desplazamiento, mensaje){
    if(!desplazamiento || !mensaje) {
      throw new TypeError ("Valores Invalidos");
    }
    let resultado = "";    
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
