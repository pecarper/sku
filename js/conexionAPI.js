async function listarVideos() {
    const conexion = await fetch("http://localhost:3000/productos");
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function enviarVideo(titulo, descripcion, url, id) {
    const conexion = await fetch("http://localhost:3000/productos", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion}`,
            url:url,
            id:id
        })
    })

    const conexionConvertida = conexion.json();

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el producto");
    }
    
    return conexionConvertida;
}

export async function eliminarProducto(id) {
    const respuesta = await fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE'
    });

    if (!respuesta.ok) {
        throw new Error('No se pudo eliminar el video');
    }
}

async function buscarVideo(palabraClave) {
    const conexion = await fetch(`http://localhost:3000/productos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {
    listarVideos, 
    enviarVideo, 
    buscarVideo,
    eliminarProducto
}