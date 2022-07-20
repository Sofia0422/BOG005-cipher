//Hacer visible sección para codificar mensajes y ocultar sección grupos principales

let botonGP1 = document.getElementById("botonGP1");
botonGP1.addEventListener ("click", mostrarCodificarMensaje);

let botonGP2 = document.getElementById("botonGP2");
botonGP2.addEventListener ("click", mostrarCodificarMensaje);

let botonGP3 = document.getElementById("botonGP3");
botonGP3.addEventListener ("click", mostrarCodificarMensaje);

function mostrarCodificarMensaje(){
    document.getElementById('codificarMensaje').style.display = "block";
    document.getElementById ("inicio").style.display = "block";
    document.getElementById ("gruposPrincipales").style.display = "none";
    
}

let inicio = document.getElementById("inicio");
inicio.addEventListener ("click", mostrarGruposPrincipales);

function mostrarGruposPrincipales(){
        document.getElementById ("codificarMensaje").style.display = "none";
        document.getElementById ("inicio").style.display = "none";
        document.getElementById ("gruposPrincipales").style.display = "block";
        
}
//Añadir funcionalidad al boton codificar //Construyes tu funcion codificar
/*let cod = document.getElementById("codificar");
cod.addEventListener ("click", codificarMensaje);

function codificarMensaje(){
    alert("Hola");
}*/

//Mostrar Mensaje en mayúsculas
window.addEventListener("load",escribirMensaje, true);

function escribirMensaje () {
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    });
}

//Capturas el valor del input mensaje y del input desplazamiento

document.getElementsById("codificar").addEventListener("click", function (){
    let texto = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value = codificar(texto, desplazamiento);}, true);

document.getElementsById("decodificar").addEventListener("click", function (){
    let texto = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    document.getElementById("mensaje2").value = decodificar(texto, desplazamiento);}, true);


    //Ejecutar código de cifrado
import cipher from './cipher.js';

console.log(cipher);