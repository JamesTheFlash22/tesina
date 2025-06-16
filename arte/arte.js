// Carosello
const slides = document.querySelectorAll('.slide');
const caption = document.querySelector('.caption');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;

// Inizializza i pallini del carosello
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.setAttribute('aria-label', `Vai alla slide ${index + 1}`);
  dotsContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Funzione per mostrare una slide
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');

  const text = slides[index].getAttribute('data-text');
  caption.textContent = text;

  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentSlide = index;
}

// Pulsanti avanti/indietro
document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Mostra la prima slide all'inizio
showSlide(0);

// -----------------------------
// TIMELINE INTERATTIVA
// -----------------------------

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

const timelineEvents = document.querySelectorAll('.timeline-event');
const eventDetails = document.querySelector('.event-details');

// Funzione per aggiornare la visualizzazione del dettaglio
function updateEventDetails(index) {
  const event = futurismEvents[index];
  eventDetails.innerHTML = `
    <h3>${event.year} - ${event.title}</h3>
    <img src="${event.image}" alt="${event.alt}" />
    <p>${event.description}</p>
  `;

  timelineEvents.forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });

  timelineEvents[index].classList.add('active');
  timelineEvents[index].setAttribute('aria-selected', 'true');
}

// Aggiunge l’evento al click sui bottoni della timeline
timelineEvents.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    updateEventDetails(index);
  });
});

// Mostra il primo evento
updateEventDetails(0);
