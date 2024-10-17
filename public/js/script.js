import { barcelona, roma, paris, londres, brasil, indonesia, australia, suiza, peru } from "./ciudades.js";
// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let inicio = document.querySelector('.inicio');
let tituloElement = document.getElementById('titulo');
let subtituloElement = document.getElementById('subtitulo');
let parrafoElement = document.getElementById('parrafo');
let precioElement = document.getElementById('precio');
let imagenElement = document.getElementById('imagen');
// Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // REMOVER la clase "active" (si la hay)
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        // Agregar la clase "active" en el enlace actual
        this.classList.add('active');
        // Obtener el contenido correspondiente según el enlace
        let contenido;
        if (this.textContent === (inicio === null || inicio === void 0 ? void 0 : inicio.textContent)) {
            contenido = {
                titulo: '',
                subtitulo: '',
                parrafo: '',
                precio: '',
                imagen: '',
            };
        }
        else {
            contenido = obtContenido(this.textContent || '');
        }
        // Actualizar el DOM con el contenido
        if (contenido && tituloElement && subtituloElement && parrafoElement && precioElement && imagenElement) {
            tituloElement.innerHTML = contenido.titulo;
            subtituloElement.innerHTML = contenido.subtitulo;
            parrafoElement.innerHTML = contenido.parrafo;
            precioElement.innerHTML = contenido.precio;
            imagenElement.src = contenido.imagen;
        }
    });
});
function obtContenido(enlace) {
    const contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris, // Cambiado a 'París'
        'Londres': londres,
        'Brasil': brasil,
        'Indonesia': indonesia,
        'Australia': australia,
        'Suiza': suiza,
        'Perú': peru
    };
    return contenido[enlace];
}
