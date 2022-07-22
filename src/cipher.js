const cipher = {
  // ...
};

export default cipher;

// Ejecutar código de cifrado-prueba

function codificar (texto, desplazamiento){
  let resultado = "";
  const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  /*desplazamiento = (desplazamiento % 26 + 26) % 26*/
  if (texto) {
      for (let i = 0; i< texto.length; i ++) {
          
              let posicion = ((abecedario.indexOf(texto[i])+desplazamiento));
              resultado += abecedario[posicion];
          }
          
      
  }
  return resultado;
}
