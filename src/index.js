//Ejecutar código de cifrado
import cipher from './cipher.js';

console.log(cipher);

//Hacer visible sección para codificar mensajes y ocultar sección grupos principales
function mostrarCodificarMensaje(){
    document.getElementById("codificarMensaje").style.visibility = "visible";
}

function ocultarGruposPrincipales(){
    document.getElementById("gruposPrincipales").style.visibility = "hidden";
}
