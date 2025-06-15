// Riferimenti DOM
const levaSVG = document.getElementById('leva-svg');
const forza = document.getElementById('forza');
const resistenza = document.getElementById('resistenza');
const fulcro = document.getElementById('fulcro');
const outputMovimento = document.getElementById('output-movimento');

const testoForza = forza.querySelector('text');
const testoResistenza = resistenza.querySelector('text');

const fulcroX = 300; // posizione fulcro fissa sull'asse x

// Aggiorna la posizione dei testi dentro i cerchi (forza e resistenza) per farli seguire
function aggiornaTesto() {
  const cxForza = parseFloat(forza.querySelector('circle').getAttribute('cx'));
  const cxResistenza = parseFloat(resistenza.querySelector('circle').getAttribute('cx'));

  // Forza e Resistenza devono stare dentro la pallina e non superare la linea centrale (fulcroX)
  // Forza a sinistra, Resistenza a destra
  const forzaXTesto = Math.min(cxForza, fulcroX - 10);
  const resistenzaXTesto = Math.max(cxResistenza, fulcroX + 10);

  testoForza.setAttribute('x', forzaXTesto);
  testoForza.setAttribute('y', 105);
  testoForza.setAttribute('font-size', '16');
  testoForza.textContent = "Forza";

  testoResistenza.setAttribute('x', resistenzaXTesto);
  testoResistenza.setAttribute('y', 105);
  testoResistenza.setAttribute('font-size', '12'); // più piccolo
  testoResistenza.textContent = "Resistenza";
}

// Funzione che valuta il vantaggio meccanico e aggiorna il messaggio
function aggiornaOutput() {
  const forzaX = parseFloat(forza.querySelector('circle').getAttribute('cx'));
  const resistenzaX = parseFloat(resistenza.querySelector('circle').getAttribute('cx'));

  // Calcolo distanza dal fulcro
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

// Gestione drag & drop per i cerchi Forza e Resistenza
function dragHandler(evt) {
  evt.preventDefault();
  const svgRect = levaSVG.getBoundingClientRect();

  // Calcolo posizione X relativa nel SVG (limiti 110 - 490)
  let posX = evt.clientX - svgRect.left;
  if (posX < 110) posX = 110;
  if (posX > 490) posX = 490;

  // Impedisci che forza superi il fulcro (deve stare a sinistra)
  if (evt.target.parentNode.id === "forza" && posX > fulcroX - 10) {
    posX = fulcroX - 10;
  }
  // Impedisci che resistenza superi il fulcro (deve stare a destra)
  if (evt.target.parentNode.id === "resistenza" && posX < fulcroX + 10) {
    posX = fulcroX + 10;
  }

  // Aggiorna la posizione del cerchio
  evt.target.setAttribute('cx', posX);

  // Aggiorna posizione testo dentro cerchio
  aggiornaTesto();

  // Aggiorna attributi ARIA
  evt.target.parentNode.setAttribute('aria-valuenow', posX);
  evt.target.parentNode.setAttribute('aria-valuetext', `Posizione ${Math.round(posX)}`);

  // Aggiorna output e tipo leva
  aggiornaOutput();
}

function dragStart(evt) {
  evt.target.setPointerCapture(evt.pointerId);
  evt.target.style.cursor = 'grabbing';
}

function dragEnd(evt) {
  evt.target.releasePointerCapture(evt.pointerId);
  evt.target.style.cursor = 'grab';
}

// Inizializza drag su cerchi Forza e Resistenza
[forza, resistenza].forEach(gruppo => {
  const circle = gruppo.querySelector('circle');
  circle.style.cursor = 'grab';
  circle.style.touchAction = 'none';
  circle.addEventListener('pointerdown', dragStart);
  circle.addEventListener('pointermove', (evt) => {
    if (evt.buttons === 1) dragHandler(evt);
  });
  circle.addEventListener('pointerup', dragEnd);
  circle.addEventListener('pointercancel', dragEnd);
});

// --- POPUP CORPO UMANO ---

const leveInfo = {
  primo: {
    titolo: "Leva di primo genere",
    testo: "In questa leva, il fulcro è posizionato tra la forza e la resistenza. Un esempio nel corpo umano è il collo, dove il cranio ruota attorno alla prima vertebra, bilanciando il peso della testa con la forza dei muscoli del collo."
  },
  secondo: {
    titolo: "Leva di secondo genere",
    testo: "Qui la resistenza si trova tra il fulcro e la forza. Nel corpo umano, un esempio è la schiena durante il sollevamento di un carico, dove la colonna vertebrale funge da fulcro, la resistenza è rappresentata dal peso del carico, e la forza proviene dai muscoli lombari."
  },
  terzo: {
    titolo: "Leva di terzo genere",
    testo: "In questo tipo di leva, la forza è applicata tra il fulcro e la resistenza. Il braccio umano è un tipico esempio: il gomito è il fulcro, i muscoli del bicipite applicano la forza, mentre la resistenza è il peso che si solleva con la mano."
  }
};

const popup = document.getElementById('popup-leva');
const popupTitle = document.getElementById('popup-title');
const popupDesc = document.getElementById('popup-desc');
const popupChiudi = document.getElementById('popup-chiudi');

const levaButtons = document.querySelectorAll('.leva-btn');

levaButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tipo = btn.getAttribute('data-tipo');
    popupTitle.textContent = leveInfo[tipo].titolo;
    popupDesc.textContent = leveInfo[tipo].testo;
    popup.classList.add('show');
    popup.removeAttribute('hidden');
    popup.focus();
  });

  btn.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click();
    }
  });
});

// Chiudi popup con bottone
popupChiudi.addEventListener('click', () => {
  popup.classList.remove('show');
  setTimeout(() => {
    popup.setAttribute('hidden', '');
  }, 300);
});

// Chiudi popup cliccando fuori dal contenuto
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.setAttribute('hidden', '');
    }, 300);
  }
});

// Chiudi popup con ESC
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && popup.classList.contains('show')) {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.setAttribute('hidden', '');
    }, 300);
  }
});

// Avvia con testo posizionato correttamente e messaggio di output
aggiornaTesto();
aggiornaOutput();
