window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('mindmap');
  const center = document.getElementById('centralNode');
  const branches = container.querySelectorAll('.branch');
  const svg = document.getElementById('connections');

  const radius = 280; // Raggio dei rami
  const centralCircleRadius = 75; // Raggio del cerchio centrale (180px / 2)

  // Posizione centrale nel container
  const centerPos = {
    x: container.clientWidth / 2,
    y: container.clientHeight / 2
  };

  // Posiziona i rami in cerchio con animazione di fade-in
  branches.forEach((branch, i) => {
    const angle = (i / branches.length) * 2 * Math.PI - Math.PI / 2; // Inizia dall'alto
    const x = centerPos.x + radius * Math.cos(angle);
    const y = centerPos.y + radius * Math.sin(angle);

    branch.style.left = `${x}px`;
    branch.style.top = `${y}px`;
    branch.style.transform = 'translate(-50%, -50%)';
    branch.style.opacity = '0'; // Inizia invisibile per l'animazione
    branch.style.transition = 'opacity 0.5s ease, transform 0.3s ease';
    
    // Ritarda leggermente l'animazione per ogni ramo
    setTimeout(() => {
      branch.style.opacity = '1';
    }, i * 100);
  });

  // Traccia linee curve dai rami al centro
  function drawLines() {
    svg.innerHTML = '';
    branches.forEach(branch => {
      const rectBranch = branch.getBoundingClientRect();
      const rectCenter = center.getBoundingClientRect();

      // Calcolo punti nel viewport
      const centerX = rectCenter.left + rectCenter.width / 2;
      const centerY = rectCenter.top + rectCenter.height / 2;
      const endX = rectBranch.left + rectBranch.width / 2;
      const endY = rectBranch.top + rectBranch.height / 6; // 1/6 dall'alto per centrare sul titolo

      // Calcola il punto di partenza esattamente sul bordo del cerchio centrale
      const angle = Math.atan2(endY - centerY, endX - centerX);
      const startX = centerX + Math.cos(angle) * centralCircleRadius;
      const startY = centerY + Math.sin(angle) * centralCircleRadius;

      // Converti in coordinate relative a SVG
      const svgRect = svg.getBoundingClientRect();
      const lineStartX = startX - svgRect.left;
      const lineStartY = startY - svgRect.top;
      const lineEndX = endX - svgRect.left;
      const lineEndY = endY - svgRect.top;

      // Crea una linea curva (path Bezier quadratico) con curvatura originale
      const controlX = (lineStartX + lineEndX) / 2;
      const controlY = lineStartY; // Curvatura originale
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M${lineStartX},${lineStartY} Q${controlX},${controlY} ${lineEndX},${lineEndY}`);
      path.setAttribute('stroke', '#000000'); // Linee nere
      path.setAttribute('stroke-width', '2');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-dasharray', '1000');
      path.setAttribute('stroke-dashoffset', '1000');
      path.style.transition = 'stroke-dashoffset 0.8s ease-in-out';

      svg.appendChild(path);

      // Avvia l'animazione di disegno
      setTimeout(() => {
        path.setAttribute('stroke-dashoffset', '0');
      }, 100);
    });
  }

  drawLines();
  window.addEventListener('resize', () => {
    drawLines();
  });

  // Clic sui rami: apre direttamente il link
  branches.forEach(branch => {
    branch.addEventListener('click', () => {
      const url = branch.dataset.url;
      if (url) {
        window.location.href = url;
      }
    });
  });
});