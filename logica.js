// 1. Efecto de "Scroll Revelador"
// Hace que las secciones aparezcan suavemente cuando el usuario baja con el scroll
const observarSecciones = () => {
    const secciones = document.querySelectorAll('section');
    
    const opciones = {
        threshold: 0.2 // Se activa cuando el 20% de la sección es visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, opciones);

    secciones.forEach(seccion => {
        // Estilos iniciales antes de que aparezcan
        seccion.style.opacity = "0";
        seccion.style.transform = "translateY(20px)";
        seccion.style.transition = "all 0.6s ease-out";
        observer.observe(seccion);
    });
};

// 2. Validación simple del enlace de Email
// Muestra un mensaje en consola cuando alguien hace clic en el contacto
const configurarContacto = () => {
    const linkEmail = document.querySelector('a[href^="mailto:"]');
    if (linkEmail) {
        linkEmail.addEventListener('click', () => {
            console.log("El usuario intentó contactar por email.");
        });
    }
};

// 3. Resaltar la opción del menú según donde estemos
// (Opcional pero muy pro)
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    const links = document.querySelectorAll('.menu-navegacion a');

    links.forEach(link => {
        const seccion = document.querySelector(link.getAttribute('href'));
        if (
            seccion.offsetTop <= scrollPos + 100 &&
            seccion.offsetTop + seccion.offsetHeight > scrollPos + 100
        ) {
            link.style.color = "#1abc9c"; // Color activo
        } else {
            link.style.color = "white";
        }
    });
});

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    observarSecciones();
    configurarContacto();
    console.log("Currículum de Noder Durand cargado correctamente.");
});