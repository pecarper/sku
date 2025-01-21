import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo(evento) {
    evento.preventDefault();

    const datosBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarVideo(datosBusqueda);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));
    
    if (busqueda.lenght == 0) {
        lista.innerHTML = `<h2 class="mensaje_titulo">No fueron encontrados elementos para ${datosBusqueda}</h2>`;
    }
    
    //console.log(busqueda);
}

const boton = document.querySelector("[data-boton-busqueda]");
boton.addEventListener("click", evento => filtrarVideo(evento));