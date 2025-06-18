// Hover effect
document.querySelectorAll('.curiosity').forEach(item => {
  item.addEventListener('mouseenter', () => item.classList.add('hovered'));
  item.addEventListener('mouseleave', () => item.classList.remove('hovered'));
});

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.curiosity').forEach(el => observer.observe(el));

// Grafico dati reali
window.addEventListener('DOMContentLoaded', () => {
  const chartSection = document.createElement('section');
  chartSection.className = 'chart-section';
  chartSection.innerHTML = `
    <h2 style="text-align:center">Numero di immigrati africani in Francia (2015–2024)</h2>
    <canvas id="immigrationChart"></canvas>
  `;
  document.body.append(chartSection);

  const ctx = document.querySelector('#immigrationChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: 'Immigrati africani in Francia (migliaia)',
        data: [2754, 2834, 2945, 3034, 3132, 3254, 3292, 3376, 3474, 3550], // Dati reali fino al 2023, 2024 stimato
        borderColor: 'rgba(0,119,170,1)',
        backgroundColor: 'rgba(0,119,170,0.2)',
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: false, title: { display: true, text: 'Numero immigrati (migliaia)' }},
        x: { title: { display: true, text: 'Anno' }}
      }
    }
  });
});