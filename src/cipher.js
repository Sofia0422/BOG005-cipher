const cipher = {
  encode: function (mensaje, desplazamiento){    
    let resultado = "";    
    let formula = ((resultado - 65 + desplazamiento) %26) + 65;     
      for (let i =0; i < mensaje.length; i++) {
       
              
    }
  },

  decode: function (desplazamiento, mensaje) {

  }
  
};

export default cipher;


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





// Ejecutar código de cifrado-prueba

/*function codificar (texto, desplazamiento){
  let resultado = "";
  const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  /*desplazamiento = (desplazamiento % 26 + 26) % 26*/
  /*if (texto) {
      for (let i = 0; i< texto.length; i ++) {
          
              let posicion = ((abecedario.indexOf(texto[i])+desplazamiento));
              resultado += abecedario[posicion];
          }
          
      
  }
  return resultado;
}*/
