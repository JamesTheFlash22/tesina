// Pulsante "Scopri le Curiosità" nella Home
const exploreBtn = document.querySelector('.hero button');
exploreBtn.addEventListener('click', () => {
    exploreBtn.style.backgroundColor = exploreBtn.style.backgroundColor === 'rgb(52, 152, 219)' ? '#e74c3c' : '#3498db';
    exploreBtn.textContent = exploreBtn.textContent === 'Scopri le Curiosità' ? 'Esplora Ancora' : 'Scopri le Curiosità';
});

// Espansione delle card al clic
const cards = document.querySelectorAll('.curiosita-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});

// Galleria con effetto parallasse
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryInfo = document.querySelector('.gallery-info');
document.querySelector('.gallery-container').addEventListener('mousemove', (e) => {
    galleryItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.05;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.05;
        item.querySelector('img').style.transform = `translate(${x}px, ${y}px)`;
    });
});
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        galleryInfo.textContent = item.dataset.info;
        galleryInfo.classList.add('active');
        galleryItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});