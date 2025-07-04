document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.curiosite, .intro'); // Aggiungi .intro
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});
