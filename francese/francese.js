// Animazione fade-in per le curiosità
document.addEventListener('DOMContentLoaded', () => {
    const curiosites = document.querySelectorAll('.curiosite');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    curiosites.forEach(curiosite => observer.observe(curiosite));
});