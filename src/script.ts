import { barcelona, roma, paris, londres, brasil, indonesia, australia, suiza, peru } from "./ciudades.js";

// Definir interfaces para el contenido
interface Contenido {
    titulo: string;
    subtitulo: string;
    parrafo: string;
    precio: string;
    imagen: string;
}

// Obtener los elementos del DOM
let enlaces: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
let inicio: HTMLElement | null = document.querySelector('.inicio');
let tituloElement: HTMLElement | null = document.getElementById('titulo');
let subtituloElement: HTMLElement | null = document.getElementById('subtitulo');
let parrafoElement: HTMLElement | null = document.getElementById('parrafo');
let precioElement: HTMLElement | null = document.getElementById('precio');
let imagenElement=document.getElementById('imagen') as HTMLImageElement;

// Agregar un evento CLICK a cada enlace
enlaces.forEach(function(enlace: HTMLAnchorElement) {
    enlace.addEventListener('click', function (this: HTMLAnchorElement) {

        // REMOVER la clase "active" (si la hay)
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active');
        });

        // Agregar la clase "active" en el enlace actual
        this.classList.add('active');

        // Obtener el contenido correspondiente según el enlace
        let contenido: Contenido | undefined;
        if (this.textContent === inicio?.textContent) {
            contenido = {
                titulo: '',
                subtitulo: '',
                parrafo: '',
                precio: '',
                imagen: '',
            };
        } else {
            contenido = obtContenido(this.textContent || '');
        }

        // Actualizar el DOM con el contenido
        if (contenido && tituloElement && subtituloElement && parrafoElement && precioElement && imagenElement) {
            tituloElement.innerHTML = contenido.titulo;
            subtituloElement.innerHTML = contenido.subtitulo;
            parrafoElement.innerHTML = contenido.parrafo;
            precioElement.innerHTML = contenido.precio;
            imagenElement.src = contenido.imagen
        }
    });
});

function obtContenido(enlace: string): Contenido | undefined {
    const contenido: { [key: string]: Contenido } = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,  // Cambiado a 'París'
        'Londres': londres,
        'Brasil' : brasil,
        'Indonesia' : indonesia,
        'Australia' : australia,
        'Suiza' : suiza,
        'Perú' : peru
    };
    return contenido[enlace];
}
