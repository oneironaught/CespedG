let currentLang = 'en';

const translations = {
    en: {
        heroTitle: "Lawn Care You Can Count On in the RGV",
        heroSubtitle: "Serving Weslaco, McAllen, Edinburg, Mercedes & the entire Rio Grande Valley, Texas",
        servicesTitle: "Our Most Popular Services",
        service1Title: "Bermuda Lawn Renovation",
        service1Desc: "Full lawn restoration, weed elimination, soil treatment and thick Bermuda establishment.",
        service2Title: "Premium Weekly & Bi-Weekly Mowing",
        service2Desc: "Professional cut, edging, trimming & blowing. Your lawn always looks its best.",
        service3Title: "Pre-Emergent & Weed Control",
        service3Desc: "Keep weeds out before they start. Safe for family & pets.",
        service4Title: "Landscaping & Yard Cleanup",
        service4Desc: "Transform your outdoor space with expert design and maintenance.",
        workTitle: "Real Results in the RGV",
        aboutTitle: "About Césped G",
        aboutText: "We are a local, family-owned lawn care company based in Weslaco, Texas. Specializing in transforming tired yards into beautiful, thick Bermuda lawns that thrive in the Rio Grande Valley heat.",
        testimonialsTitle: "What Our Clients Say",
        testimonial1: "Césped G completely transformed my backyard! Highly recommend their services.",
        testimonial2: "The team is professional and pays attention to detail. My lawn has never looked better!",
        testimonial3: "Exceptional service and very reliable. Césped G is my go-to for all landscaping needs.",
        faqTitle: "Frequently Asked Questions",
        contactTitle: "Ready for a Better Lawn?",
        contactSubtitle: "Get your free quote today. Most quotes returned same day."
    },
    es: {
        heroTitle: "Cuidado de Césped en el que Puedes Confiar en el RGV",
        heroSubtitle: "Sirviendo Weslaco, McAllen, Edinburg, Mercedes y todo el Valle del Río Grande, Texas",
        servicesTitle: "Nuestros Servicios Más Populares",
        service1Title: "Renovación de Césped Bermuda",
        service1Desc: "Restauración completa del césped, eliminación de malezas, tratamiento del suelo y establecimiento de Bermuda grueso.",
        service2Title: "Poda Premium Semanal y Bisemanal",
        service2Desc: "Corte profesional, bordes, recorte y soplado. Tu césped siempre luce su mejor versión.",
        service3Title: "Control Pre-Emergente y de Malezas",
        service3Desc: "Mantén las malezas fuera antes de que aparezcan. Seguro para tu familia y mascotas.",
        service4Title: "Paisajismo y Limpieza de Patio",
        service4Desc: "Transforma tu espacio exterior con diseño y mantenimiento experto.",
        workTitle: "Resultados Reales en el RGV",
        aboutTitle: "Sobre Césped G",
        aboutText: "Somos una empresa local y familiar de cuidado de césped con sede en Weslaco, Texas. Nos especializamos en transformar patios cansados en hermosos céspedes de Bermuda que prosperan en el calor del Valle del Río Grande.",
        testimonialsTitle: "Lo que Dicen Nuestros Clientes",
        testimonial1: "¡Césped G transformó completamente mi patio trasero! Altamente recomendado.",
        testimonial2: "El equipo es profesional y presta atención al detalle. ¡Mi césped nunca se vio mejor!",
        testimonial3: "Servicio excepcional y muy confiable. Césped G es mi opción para todas las necesidades de paisajismo.",
        faqTitle: "Preguntas Frecuentes",
        contactTitle: "¿Listo para un Mejor Césped?",
        contactSubtitle: "Obtén tu cotización gratis hoy. La mayoría se responde el mismo día."
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    document.getElementById('lang-text').textContent = currentLang === 'en' ? 'ES/EN' : 'EN/ES';
    applyTranslations();
}

function applyTranslations() {
    const t = translations[currentLang];
    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
    document.getElementById('services-title').textContent = t.servicesTitle;
    document.getElementById('service1-title').textContent = t.service1Title;
    document.getElementById('service1-desc').textContent = t.service1Desc;
    document.getElementById('service2-title').textContent = t.service2Title;
    document.getElementById('service2-desc').textContent = t.service2Desc;
    document.getElementById('service3-title').textContent = t.service3Title;
    document.getElementById('service3-desc').textContent = t.service3Desc;
    document.getElementById('service4-title').textContent = t.service4Title;
    document.getElementById('service4-desc').textContent = t.service4Desc;
    document.getElementById('work-title').textContent = t.workTitle;
    document.getElementById('about-title').textContent = t.aboutTitle;
    document.getElementById('about-text').innerHTML = t.aboutText;
    document.getElementById('testimonials-title').textContent = t.testimonialsTitle;
    document.getElementById('testimonial1').textContent = t.testimonial1;
    document.getElementById('testimonial2').textContent = t.testimonial2;
    document.getElementById('testimonial3').textContent = t.testimonial3;
    document.getElementById('faq-title').textContent = t.faqTitle;
    document.getElementById('contact-title').textContent = t.contactTitle;
    document.getElementById('contact-subtitle').textContent = t.contactSubtitle;
}

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    answer.classList.toggle('active');
    icon.textContent = answer.classList.contains('active') ? '−' : '+';
}

// ==================== NEW: HAMBURGER MENU (Mobile) ====================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.style.display === 'block';
    mobileMenu.style.display = isOpen ? 'none' : 'block';
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// ==================== NEW: SCROLL ANIMATIONS (Fade-in) ====================
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

fadeElements.forEach(el => observer.observe(el));

// ==================== CONTACT FORM - Auto clear after submit (Formspree) ====================
const form = document.getElementById('quote-form');

if (form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();   // Prevents page reload

        const btn = form.querySelector('button');
        const originalText = btn.textContent;

        // Show loading state
        btn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
        btn.disabled = true;

        // Capture name for thank-you message
        const submittedName = document.getElementById('name').value.trim() || '';

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // ✅ Clear the form immediately
                form.reset();

                const name = submittedName || (currentLang === 'es' ? 'amigo' : 'friend');
                
                alert(currentLang === 'es'
                    ? `¡Gracias ${name}! Te contactaremos en las próximas horas. 🇲🇽`
                    : `Thank you ${name}! We'll get back to you shortly.`);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            alert(currentLang === 'es'
                ? 'Hubo un error. Por favor intenta de nuevo.'
                : 'Something went wrong. Please try again.');
        } finally {
            // Restore button
            btn.textContent = originalText;
            btn.disabled = false;
        }
    });
}

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

console.log('%c✅ Césped G – Fully combined script loaded! (Bilingual + Mobile + Formspree + Animations)', 'color:#4ADE80; font-size:16px;');