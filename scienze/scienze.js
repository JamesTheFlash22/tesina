const levaSVG = document.getElementById('leva-svg');
const forza = document.getElementById('forza');
const resistenza = document.getElementById('resistenza');
const fulcroX = 300;

const outputMovimento = document.getElementById('output-movimento');

const forzaCircle = forza.querySelector('circle');
const forzaText = forza.querySelector('text');

const resistenzaCircle = resistenza.querySelector('circle');
const resistenzaText = resistenza.querySelector('text');

let dragging = null;
let startX = 0;
let startedDragging = false;

function aggiornaTesto() {
  const cxForza = parseFloat(forzaCircle.getAttribute('cx'));
  forzaText.setAttribute('x', cxForza);
  forzaText.setAttribute('y', 105);
  forzaText.setAttribute('font-size', '16');
  forzaText.textContent = "Forza";

  const cxResistenza = parseFloat(resistenzaCircle.getAttribute('cx'));
  resistenzaText.setAttribute('x', cxResistenza);
  resistenzaText.setAttribute('y', 105);
  resistenzaText.setAttribute('font-size', '10');
  resistenzaText.textContent = "Resistenza";
}

function aggiornaOutput() {
  const forzaX = parseFloat(forzaCircle.getAttribute('cx'));
  const resistenzaX = parseFloat(resistenzaCircle.getAttribute('cx'));

  const dForza = Math.abs(forzaX - fulcroX);
  const dResistenza = Math.abs(resistenzaX - fulcroX);

  let messaggio = "";

  if (dForza > dResistenza) {
    messaggio = "Leva vantaggiosa: la forza ha il braccio più lungo della resistenza.";
  } else if (dForza < dResistenza) {
    messaggio = "Leva svantaggiosa: la forza ha il braccio più corto della resistenza.";
  } else {
    messaggio = "Leva equilibrata: bracci di forza e resistenza uguali.";
  }
  outputMovimento.textContent = messaggio;
}

function onPointerDown(e) {
  dragging = e.target;
  dragging.setPointerCapture(e.pointerId);
  startX = e.clientX;
  startedDragging = false;
}

function onPointerMove(e) {
  if (!dragging) return;
  if (e.buttons !== 1) return;

  // Calcolo spostamento
  const deltaX = Math.abs(e.clientX - startX);
  if (!startedDragging && deltaX < 3) return; // soglia minima per iniziare

  startedDragging = true;

  const svgRect = levaSVG.getBoundingClientRect();
  let posX = e.clientX - svgRect.left;

  // Limiti generali della leva (110 a sinistra, 490 a destra)
  if (posX < 110) posX = 110;
  if (posX > 490) posX = 490;

  // Limiti relativi al fulcro
  if (dragging.parentNode.id === "forza") {
    // La forza può muoversi solo a sinistra del fulcro
    if (posX >= fulcroX - 10) posX = fulcroX - 10;
    forzaCircle.setAttribute('cx', posX);
  } else if (dragging.parentNode.id === "resistenza") {
    // La resistenza può muoversi solo a destra del fulcro
    if (posX <= fulcroX + 10) posX = fulcroX + 10;
    resistenzaCircle.setAttribute('cx', posX);
  }

  aggiornaTesto();
  aggiornaOutput();
}

function onPointerUp(e) {
  if (!dragging) return;
  dragging.releasePointerCapture(e.pointerId);
  dragging = null;
  startedDragging = false;
}

// Applica eventi a entrambi i cerchi
[forza, resistenza].forEach(gruppo => {
  const circle = gruppo.querySelector('circle');
  circle.style.cursor = 'grab';
  circle.style.touchAction = 'none';
  circle.addEventListener('pointerdown', onPointerDown);
  circle.addEventListener('pointermove', onPointerMove);
  circle.addEventListener('pointerup', onPointerUp);
  circle.addEventListener('pointercancel', onPointerUp);
  circle.addEventListener('pointerleave', onPointerUp);
});

aggiornaTesto();
aggiornaOutput();