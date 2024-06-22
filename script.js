function openPopup() {
    document.getElementById('callPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('callPopup').style.display = 'none';
}

// Scroll Reveal
ScrollReveal().reveal('.hero-intro', {
    distance: '8%',
    origin: 'left',
    opacity: '0.1',
    easing: 'ease-in-out',
    duration: 800,
    scale: 1
});

ScrollReveal().reveal('.hero-img', {
    distance: '8%',
    origin: 'right',
    opacity: '0.1',
    easing: 'ease-in-out',
    duration: 800,
    scale: 1
});

ScrollReveal().reveal(".form-image-container", {
    duration: 800,
    origin: "top",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
        x: 20,
        z: -10
    }
});

ScrollReveal().reveal(".form", {
    duration: 800,
    origin: "bottom",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
        x: 20,
        z: -10
    }
});

ScrollReveal().reveal('.about-img', {
    distance: '8%',
    origin: 'left',
    opacity: '0.1',
    easing: 'ease-in-out',
    duration: 800,
    scale: 1
});

ScrollReveal().reveal('.about-text', {
    distance: '8%',
    origin: 'right',
    opacity: '0.1',
    easing: 'ease-in-out',
    duration: 800,
    scale: 1
});

ScrollReveal().reveal(".service-item h3", {
    duration: 1000,
    origin: "bottom",
    distance: "25%",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.5,
    scale: 0.5
});

ScrollReveal().reveal(".service-item img", {
    duration: 1000,
    origin: "bottom",
    distance: "25%",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.5,
    scale: 0.5
});

ScrollReveal().reveal('.features-glassmorphic', {
    distance: '25%',
    origin: 'bottom',
    opacity: '0.2',
    easing: 'ease-in-out',
    duration: 1200,
    scale: 0.1
});

ScrollReveal().reveal('.features-title', {
    distance: '25%',
    origin: 'bottom',
    opacity: '0.4',
    easing: 'ease-in-out',
    duration: 1200,
    scale: 0.1
});

ScrollReveal().reveal('.features-subtitle', {
    distance: '25%',
    origin: 'bottom',
    opacity: '0.4',
    easing: 'ease-in-out',
    duration: 1200,
    scale: 0.1
});

ScrollReveal().reveal('.contact-img', {
    distance: '8%',
    origin: 'left',
    opacity: '0.1',
    easing: 'ease-in-out',
    duration: 800,
    scale: 1
});

ScrollReveal().reveal('.contact-form', {
    distance: '8%',
    origin: 'right',
    opacity: '0.1',
    easing: 'ease-in-out',
    duration: 800,
    scale: 1
});