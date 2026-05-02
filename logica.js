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
const configurarContacto = () => {
    const linkEmail = document.querySelector('a[href^="mailto:"]');
    if (linkEmail) {
        linkEmail.addEventListener('click', () => {
            console.log("El usuario intentó contactar por email.");
        });
    }
};

// 3. Resaltar la opción del menú según donde estemos
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    const links = document.querySelectorAll('.menu-navegacion a');

    links.forEach(link => {
        const seccion = document.querySelector(link.getAttribute('href'));
        if (
            seccion.offsetTop <= scrollPos + 100 &&
            seccion.offsetTop + seccion.offsetHeight > scrollPos + 100
        ) {
            link.style.color = "#1abc9c"; 
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

// Función para el botón "Volver arriba"
const configurarBotonSubir = () => {
    const btn = document.getElementById("btn-subir");

    // Mostramos/Ocultamos el botón según el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Si bajó más de 300px
            btn.style.display = "block";
            // Un pequeño delay para que la opacidad funcione
            setTimeout(() => btn.style.opacity = "1", 10);
        } else {
            btn.style.opacity = "0";
            // Ocultamos después de la animación
            setTimeout(() => btn.style.display = "none", 300);
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    observarSecciones();
    configurarContacto();
    configurarBotonSubir(); // <--- Llamada nueva
});