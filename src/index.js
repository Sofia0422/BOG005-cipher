//Ejecutar código de cifrado
import cipher from './cipher.js';

console.log(cipher);

//Hacer visible sección para codificar mensajes y ocultar sección grupos principales

function mostrarCodificarMensaje(){
    document.getElementById("codificarMensaje").style.display = "block";
}

function ocultarCodificarMensaje(){
    document.getElementById("codificarMensaje").style.display = "none";
}


/*let botonesGP = document.getElementById("botonesGP");
let codificarMensaje = document.getElementById("codificarMensaje");

botonesGP.addEventListener("click", toggleText);

function toggleText(){
    cofificarMensaje.classList.toggle("gruposPrincipales");

    if(codificarMensaje.classList.contains("gruposPrincipales")) {
        botonesGP.innerHTML = "inicio"
    }
    else{
        botonesGP.innerHTML = "inicio"
    }
}*/
