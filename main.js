// 1. Animación de entrada Stagger
anime({
    targets: '.reveal',
    translateY: [30, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
    easing: 'easeOutExpo',
    duration: 1500
});

// 2. Control del Modal
const modal = document.getElementById('modal');
const iframe = document.getElementById('modal-iframe');

document.querySelectorAll('.open-modal').forEach(btn => {
    btn.onclick = function() {
        const url = this.getAttribute('data-url');
        iframe.src = url;
        modal.style.display = 'flex';
        
        anime({
            targets: '.modal-window',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutQuart'
        });
    }
});

document.querySelector('.close-modal').onclick = () => {
    modal.style.display = 'none';
    iframe.src = '';
};

// 3. Animación "Latido" para el botón de Alianza
anime({
    targets: '.btn-alianza',
    scale: [1, 1.03],
    duration: 1200,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});

// seccion testimonios
// Lógica del Carrusel de Testimonios
const track = document.querySelector('.testimonios-track');
const items = document.querySelectorAll('.testimonio-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalItems = items.length;

function updateSlider() {
    // Movemos la pista horizontalmente multiplicando el índice por -100
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Vuelve al primero si llegó al final (bucle)
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Vuelve al último si tira para atrás en el primero
    }
    updateSlider();
});