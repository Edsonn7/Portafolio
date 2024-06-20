// Contenido de las páginas simuladas
document.addEventListener('DOMContentLoaded', () => {
    // Mapeo de rutas a archivos HTML
    const routes = {
        Edson: 'Views/Edson.html',
        SobreMi: 'Views/SobreMi.html',
        Portfolio: 'Views/Portafolio.html',
        Formacion: 'Views/Formacion.html',
        Habilidad: 'Views/Habilidad.html',
        Contacto: 'Views/Contacto.html',
    };

    // Función para cargar contenido de un archivo HTML
    async function loadContent(route) {
        const content = document.getElementById('content');
        try {
            const response = await fetch(route);
            if (!response.ok) {
                throw new Error('Error en la carga');
            }
            const html = await response.text();
            content.innerHTML = html;
        } catch (error) {
            content.innerHTML = '<h2>404</h2><p>Página no encontrada.</p>';
        }
    }

    // Función para navegar entre rutas
    function navigate(routeKey) {
        const route = routes[routeKey];
        if (route) {
            loadContent(route);
        } else {
            document.getElementById('content').innerHTML = '<h2>404</h2><p>Página no encontrada.</p>';
        }
    }

    // Hacer que la función navigate esté disponible globalmente
    window.navigate = navigate;

    // Navegar a la ruta por defecto (home)
    navigate('Edson');
});

