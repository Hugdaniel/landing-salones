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