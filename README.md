# Centro de Mensajeria Área 51

## Índice

* [1. Qué es el Área 51?](#1-qué-es-el-área-51)
* [2. Por qué un Centro de Mensajeria para el Área 51?](#2-por-qué-un-centro-de-mensajeria-para-el-área-51)
* [3. Consideraciones iniciales para el diseño del Centro de Mensajeria](#3-consideraciones-iniciales-para-el-diseño-del-centro-de-mensajeria)
* [4. Instrucciones de uso Centro de Mensajeria](#4-instrucciones-de-uso-centro-de-mensajeria)


***

## 1. Qué es el Área 51

El [área 51](https://cnnespanol.cnn.com/2019/09/20/que-es-el-area-51-y-por-que-causa-tanta-fascinacion-lo-que-sabemos-y-no-sabemos/)
es una instalación de la Fuerza Aérea de EE.UU. en Groom Lake, Nevada. En 2013, la CIA desclasificó documentos que oficialmente reconocían que la zona era una base militar secreta. Fue la primera vez que el Gobierno reconocía la existencia del Área 51.

[![Lo que sabemos sobre el area 51](https://i.ytimg.com/vi/H8NO-TEa5QQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=H8NO-TEa5QQ)

[Link](https://www.youtube.com/watch?v=H8NO-TEa5QQ)



## 2. Por qué un Centro de mensajeria para el Área 51?

Durante décadas, el Área 51 ha sido para muchos un lugar donde el Gobierno de EE.UU. guarda oscuros secretos sobre alienígenas y ovnis. Por lo anterior, cobra gran importancia que la información relacionada con las actividades que se desarrolladan en este lugar sea tratada, por parte de sus empleados, con altos estandares de seguridad a través de la codificación y decodificación de mensajes.


## 3. Consideraciones iniciales para el diseño del Centro de Mensajeria

   * ## Usuarios objetivo
      El Centro de Mensajeria será de uso exclusivo de los empleados con contratación directa con Área 51 Company y cuya clausula de confidencialidad y código de desplazamiento asignado se encuentren vigentes. 

   * ## Prototipo diseño inicial 
      Teniendo en cuenta las 3 áreas con manejo crítico de información como **INVESTIGACIÓN**, **AVISTAMIENTOS** Y **PRUEBAS MILITARES**, se propone un diseño que consta de dos páginas asi:

          * En la página 1 se encontraria la opción de seleccionar el área de interes.
          * En la página 2 se encontrarian las secciones para codificar y decodificar el mensaje según sea la necesidad.

      ![Alt](/Prototipo.jpg)

      
## 4. Instrucciones de uso para la aplicación

  * **Página de Inicio**
    En esta sección encontrarás un pequeño saludo de bienvenida al Centro de Mensajería seguido de un recuadro con las instrucciones o paso a paso para la selección del área de interes y del ingreso de la información necesaria para la codificación o decodificación del mensaje.
     
     ![Alt](/Paginadeinicio.jpg)


  * **Página para la codificación o decodificacón del mensaje**
    El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
    interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no
    te preocupes, lo aprenderás durante este proyecto.


### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.
