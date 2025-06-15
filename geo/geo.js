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
    <h2 style="text-align:center">Numero di ciclisti africani al Tour (2015–2024)</h2>
    <canvas id="immigrationChart"></canvas>
  `;
  document.body.append(chartSection);

  const ctx = document.querySelector('#immigrationChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
      datasets:[{
        label:'Ciclisti africani al Tour',
        data: [2,3,2,2,2,1,2,3,3,3],
        borderColor:'rgba(0,119,170,1)',
        backgroundColor:'rgba(0,119,170,0.2)',
        fill: true
      }]
    },
    options:{
      responsive:true,
      scales:{
        y:{ beginAtZero:true, title:{ display:true, text:'Numero ciclisti' }},
        x:{ title:{ display:true, text:'Anno' }}
      }
    }
  });
});
