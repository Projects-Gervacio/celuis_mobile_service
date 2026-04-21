// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de scroll para cards (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las cards de servicios y sucursales
document.querySelectorAll('.service-card, .sucursal-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Formulario de contacto
document.querySelector('.contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular envío
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    // Simular delay de envío
    setTimeout(() => {
        alert('¡Mensaje enviado exitosamente! Te contactaremos en breve por WhatsApp. 📱');
        this.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
});

// Efecto de scroll en header (transparencia)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    }
});

// Contador animado para estadísticas (si se agregan)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    updateCounter();
}

// Botones WhatsApp - Abrir chat directamente
document.querySelectorAll('.btn-whatsapp, .btn-primary[href*="wa.me"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const phone = this.getAttribute('href').match(/wa\.me\/(\d+)/)?.[1];
        if (phone) {
            const message = encodeURIComponent('Hola, quiero cotizar una reparación de mi celular 📱');
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        }
    });
});

// Efecto de partículas en hero (opcional - ligero)
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        hero.appendChild(particle);
    }
}

// Agregar partículas solo en desktop
if (window.innerWidth > 768) {
    createParticles();
}

// Menu móvil (para responsive futuro)
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile-open');
}

// Scroll reveal para secciones
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.services, .sucursales, .contacto').forEach(section => {
    sectionObserver.observe(section);
});

// Preloader (carga inicial)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Copiar teléfono al clipboard
document.querySelectorAll('.contacto-item p').forEach(phone => {
    phone.addEventListener('click', function() {
        navigator.clipboard.writeText(this.textContent);
        const original = this.textContent;
        this.textContent = '¡Copiado!';
        setTimeout(() => {
            this.textContent = original;
        }, 2000);
    });
});

// WhatsApp floating button (adicional)
function createFloatingWhatsApp() {
    const floatingBtn = document.createElement('a');
    floatingBtn.className = 'floating-whatsapp';
    floatingBtn.href = 'https://wa.me/524430000000';
    floatingBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    floatingBtn.setAttribute('aria-label', 'WhatsApp');
    document.body.appendChild(floatingBtn);
    
    // Animación de pulso
    setInterval(() => {
        floatingBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            floatingBtn.style.transform = 'scale(1)';
        }, 500);
    }, 3000);
}

createFloatingWhatsApp();

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Reparaciones LUIS - Página cargada correctamente');
});