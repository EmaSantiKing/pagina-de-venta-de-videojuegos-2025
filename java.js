document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("header").innerHTML = "<h1>Mi Sitio Web</h1>";
    document.getElementById("nav").innerHTML = `
        <ul>
            <li><a href='index.html'>Inicio</a></li>
            <li><a href='pagina1.html'>Fotos</a></li>
            <li><a href='pagina2.html'>Contacto</a></li>
        </ul>`;
    document.getElementById("footer").innerHTML = "<p>© 2025 Sitio Web de Valentin Reyes</p>";
});
