import { eliminarProducto } from "./conexionAPI.js";

document.addEventListener("click", async (evento) => {
    if (evento.target && evento.target.matches("[data-boton-eliminar]")) {
        const id = evento.target.getAttribute("data-id");

        try {
            await eliminarProducto(id);
            alert('Producto eliminado exitosamente');
            // Opcional: Remover el elemento del DOM
            evento.target.closest("li").remove();
        } catch(e) {
            alert(e);
        }
    }
});