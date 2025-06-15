window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('mindmap');
  const center = document.getElementById('centralNode');
  const branches = container.querySelectorAll('.branch');
  const svg = document.getElementById('connections');

  const radius = 280; // Raggio invariato

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
      const startX = rectCenter.left + rectCenter.width / 2;
      const startY = rectCenter.top + rectCenter.height / 2;
      // Punto finale ancora più vicino al bordo superiore
      const endX = rectBranch.left + rectBranch.width / 2;
      const endY = rectBranch.top + rectBranch.height / 6; // 1/6 dall'alto per centrare sul titolo

      // Converti in coordinate relative a SVG
      const svgRect = svg.getBoundingClientRect();
      const lineStartX = startX - svgRect.left;
      const lineStartY = startY - svgRect.top;
      const lineEndX = endX - svgRect.left;
      const lineEndY = endY - svgRect.top;

      // Crea una linea curva (path Bezier quadratico)
      const controlX = (lineStartX + lineEndX) / 2;
      const controlY = lineStartY;
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

  // Popup gestione
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popupTitle');
  const popupMessage = document.getElementById('popupMessage');
  const popupLink = document.getElementById('popupLink');
  const closeBtn = document.getElementById('closePopup');

  // Mostra popup con animazione
  function showPopup() {
    popup.style.display = 'flex';
    popup.style.opacity = '0';
    popup.style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
      popup.style.opacity = '1';
      popup.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
    popup.focus();
  }

  function closePopup() {
    popup.style.opacity = '0';
    popup.style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 300);
  }

  closeBtn.addEventListener('click', closePopup);
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && popup.style.display === 'flex') {
      closePopup();
    }
  });

  // Chiudi popup cliccando fuori
  popup.addEventListener('click', e => {
    if (e.target === popup) closePopup();
  });

  // Clic sui rami
  branches.forEach(branch => {
    branch.addEventListener('click', () => {
      const materia = branch.dataset.materia;
      const url = branch.dataset.url;
      popupTitle.textContent = materia;
      popupMessage.textContent = '';
      popupLink.href = url || '#';
      popupLink.style.display = url ? 'inline-block' : 'none';
      showPopup();
    });
  });
});