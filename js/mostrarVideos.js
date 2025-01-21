import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(titulo, descripcion, url, id) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
        <img src="${url}" class=".video__imagen" alt="imagen del producto" style="width: 100%; height: 72%; object-fit: contain;">
        <div class="descripcion-video">
            <h3>${titulo}</h3>
            <p>Precio $${descripcion}</p>
            <img src="../img/eliminar.png" data-id="${id}" class="video__eliminar" alt="Eliminar video" style="cursor:pointer"; data-boton-eliminar/>
        </div>
    `;

    return video;
}

async function listarVideos() {
    try {
        const listaAPI = await conexionAPI.listarVideos();
        listaAPI.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.id)));
    } catch {
        lista.innerHTML = '<h2 "mensaje_titulo>Ha ocurrido un problema con la conexión :(</h2>'
    }
}

listarVideos();
//<img src="${imagen}" alt="logo canal alura"></img>