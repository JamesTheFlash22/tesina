const futurismEvents = [
  {
    year: '1909',
    title: 'Pubblicazione del Manifesto del Futurismo',
    description: 'Il 20 febbraio 1909, Filippo Tommaso Marinetti pubblica il Manifesto del Futurismo sul quotidiano francese Le Figaro, dando ufficialmente inizio al movimento. Il manifesto esalta la modernità, la velocità, la tecnologia e la rottura con il passato.',
    image: 'images/manifesto_futurista_1909.jpg',
    alt: 'Manifesto del Futurismo pubblicato sul Le Figaro'
  },
  {
    year: '1912',
    title: 'Scultura futurista e "Forme uniche della continuità nello spazio"',
    description: 'Umberto Boccioni realizza la sua celebre scultura "Forme uniche della continuità nello spazio", che rappresenta il movimento continuo e la fusione tra forma e spazio.',
    image: 'images/forme_uniche_della_continuita_nello_spazio.jpg',
    alt: 'Scultura Forme uniche della continuità nello spazio di Boccioni'
  },
  {
    year: '1914',
    title: 'Espansione del Futurismo in Europa',
    description: 'Il Futurismo si diffonde oltre l’Italia, influenzando artisti e movimenti in tutta Europa, contribuendo alla nascita di avanguardie come il Cubismo sintetico e l’Espressionismo.',
    image: 'images/futurismo_europa_1914.jpg',
    alt: 'Diffusione del Futurismo in Europa'
  },
  {
    year: '1915',
    title: 'Coinvolgimento nella Prima Guerra Mondiale',
    description: 'Molti futuristi vedono nella guerra un’opportunità di rinnovamento culturale e sociale, sostenendo l’idea di una guerra rigeneratrice e innovativa per il futuro.',
    image: 'images/futurismo_guerra_1915.jpg',
    alt: 'Futurismo e Prima Guerra Mondiale (Marinetti in uniforme)'
  }
];


// Riferimenti DOM
const timelineButtons = document.querySelectorAll('.timeline-event');
const eventDetails = document.querySelector('.event-details');

function updateEventDetails(index) {
  const event = futurismEvents[index];
  eventDetails.style.opacity = '0';
  setTimeout(() => {
    eventDetails.innerHTML = `
      <h3>${event.year} - ${event.title}</h3>
      <p>${event.description}</p>
      <img src="${event.image}" alt="${event.alt}" />
    `;
    eventDetails.style.opacity = '1';
  }, 300);
}

// Setup eventi click timeline
timelineButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    if(btn.classList.contains('active')) return;

    // Aggiorna selezione accessibilità
    timelineButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
      b.setAttribute('tabindex', '-1');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    btn.setAttribute('tabindex', '0');
    btn.focus();

    updateEventDetails(i);
  });
});

// Inizializza con primo evento attivo
updateEventDetails(0);
