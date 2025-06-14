function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.querySelectorAll('.timeline-event').forEach(event => {
  event.addEventListener('mouseenter', e => {
    const popup = document.getElementById('timeline-popup');
    popup.textContent = event.dataset.title + ": " + event.dataset.desc;
    popup.classList.add('visible');
    popup.classList.remove('hidden');
    positionPopup(e, popup);
  });

  event.addEventListener('mousemove', e => {
    const popup = document.getElementById('timeline-popup');
    positionPopup(e, popup);
  });

  event.addEventListener('mouseleave', () => {
    const popup = document.getElementById('timeline-popup');
    popup.classList.remove('visible');
    popup.classList.add('hidden');
  });
});

function positionPopup(e, popup) {
  const padding = 15;
  const x = e.clientX + padding;
  const y = e.clientY + padding;
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  const rect = popup.getBoundingClientRect();

  let posX = x;
  let posY = y;

  if (x + rect.width > winWidth) {
    posX = e.clientX - rect.width - padding;
  }
  if (y + rect.height > winHeight) {
    posY = e.clientY - rect.height - padding;
  }

  popup.style.left = posX + 'px';
  popup.style.top = posY + 'px';
}
