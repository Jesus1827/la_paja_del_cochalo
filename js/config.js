



// Función global para navegar limpia /pages
function navegarA(seccion) {
    const rutaReal = `/pages/${seccion}/index.html`;
    const rutaLimpia = `/${seccion}`;
    window.history.pushState({ seccion }, "", rutaLimpia);
    const contenedor = document.getElementById('main-content');
    
    if (contenedor) {
        fetch(rutaReal)
            .then(response => {
                if (!response.ok) throw new Error("Página no encontrada");
                return response.text();
            })
            .then(html => {
                contenedor.innerHTML = html;
            })
            .catch(err => {
                contenedor.innerHTML = "<h2>Error 404: No se encontró el módulo.</h2>";
            });
    }
}

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.seccion) {
        navegarA(event.state.seccion);
    } else {
        window.location.href = "/";
    }
});