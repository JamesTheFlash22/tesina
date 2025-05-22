// DATI OLIMPIADI (con 2024 Parigi aggiunto)
const olympicsData = [
  { year: 1896, city: "Atene", country: "Grecia", participants: 241, coords: [37.9838, 23.7275] },
  { year: 1900, city: "Parigi", country: "Francia", participants: 997, coords: [48.8566, 2.3522] },
  { year: 1904, city: "St. Louis", country: "USA", participants: 651, coords: [38.6270, -90.1994] },
  { year: 1908, city: "Londra", country: "Regno Unito", participants: 2008, coords: [51.5074, -0.1278] },
  { year: 1912, city: "Stoccolma", country: "Svezia", participants: 2403, coords: [59.3293, 18.0686] },
  { year: 1920, city: "Anversa", country: "Belgio", participants: 2620, coords: [51.2194, 4.4025] },
  { year: 1924, city: "Parigi", country: "Francia", participants: 3081, coords: [48.8566, 2.3522] },
  { year: 1928, city: "Amsterdam", country: "Paesi Bassi", participants: 2884, coords: [52.3676, 4.9041] },
  { year: 1932, city: "Los Angeles", country: "USA", participants: 1337, coords: [34.0522, -118.2437] },
  { year: 1936, city: "Berlino", country: "Germania", participants: 3964, coords: [52.5200, 13.4050] },
  { year: 1948, city: "Londra", country: "Regno Unito", participants: 4000, coords: [51.5074, -0.1278] },
  { year: 1952, city: "Helsinki", country: "Finlandia", participants: 4959, coords: [60.1699, 24.9384] },
  { year: 1956, city: "Melbourne", country: "Australia", participants: 3344, coords: [-37.8136, 144.9631] },
  { year: 1960, city: "Roma", country: "Italia", participants: 5331, coords: [41.9028, 12.4964] },
  { year: 1964, city: "Tokyo", country: "Giappone", participants: 5228, coords: [35.6762, 139.6503] },
  { year: 1968, city: "Città del Messico", country: "Messico", participants: 5581, coords: [19.4326, -99.1332] },
  { year: 1972, city: "Monaco", country: "Germania", participants: 7138, coords: [48.1351, 11.5820] },
  { year: 1976, city: "Montreal", country: "Canada", participants: 6024, coords: [45.5017, -73.5673] },
  { year: 1980, city: "Mosca", country: "URSS", participants: 5407, coords: [55.7558, 37.6173] },
  { year: 1984, city: "Los Angeles", country: "USA", participants: 6829, coords: [34.0522, -118.2437] },
  { year: 1988, city: "Seul", country: "Corea del Sud", participants: 8394, coords: [37.5665, 126.9780] },
  { year: 1992, city: "Barcellona", country: "Spagna", participants: 9356, coords: [41.3851, 2.1734] },
  { year: 1996, city: "Atlanta", country: "USA", participants: 10351, coords: [33.7490, -84.3880] },
  { year: 2000, city: "Sydney", country: "Australia", participants: 10665, coords: [-33.8688, 151.2093] },
  { year: 2004, city: "Atene", country: "Grecia", participants: 10624, coords: [37.9838, 23.7275] },
  { year: 2008, city: "Pechino", country: "Cina", participants: 11028, coords: [39.9042, 116.4074] },
  { year: 2012, city: "Londra", country: "Regno Unito", participants: 10768, coords: [51.5074, -0.1278] },
  { year: 2016, city: "Rio de Janeiro", country: "Brasile", participants: 11238, coords: [-22.9068, -43.1729] },
  { year: 2020, city: "Tokyo", country: "Giappone", participants: 11329, coords: [35.6762, 139.6503] },
  { year: 2024, city: "Parigi", country: "Francia", participants: 0, coords: [48.8566, 2.3522] }
];

// CITAZIONI
const quotes = [
  "L'importante non è vincere ma partecipare. - Pierre de Coubertin",
  "Il più grande spettacolo dopo il Big Bang. - Jesse Owens",
  "Lo sport ha il potere di cambiare il mondo. - Nelson Mandela",
];

// CURIOSITÀ
const curiosities = [
  "Le Olimpiadi moderne sono iniziate nel 1896 ad Atene.",
  "Nel 1936, le Olimpiadi di Berlino furono usate come propaganda nazista.",
  "La torcia olimpica simboleggia il legame tra Olimpia e la città ospitante.",
  "L’edizione 2024 si terrà a Parigi, 100 anni dopo l’ultima volta.",
];

// ------- UI TIMELINE -----------
const timelineDiv = document.getElementById("timeline");
const toggleBtn = document.getElementById("toggleTimelineBtn");

let visibleCount = 10;

function mostraTimeline() {
  timelineDiv.innerHTML = "";
  for (let i = 0; i < Math.min(visibleCount, olympicsData.length); i++) {
    const item = olympicsData[i];
    const div = document.createElement("div");
    div.classList.add("timeline-item", "visible");
    div.innerHTML = `<h3>${item.year} - ${item.city}, ${item.country}</h3>
      <p>Partecipanti: ${item.participants}</p>`;
    timelineDiv.appendChild(div);
  }
}

toggleBtn.onclick = () => {
  if (visibleCount >= olympicsData.length) {
    visibleCount = 10;
    toggleBtn.textContent = "Mostra altri";
  } else {
    visibleCount = olympicsData.length;
    toggleBtn.textContent = "Mostra meno";
  }
  mostraTimeline();
};

mostraTimeline();

// --------- MAPPA --------------
let map;
function initMappa() {
  map = L.map("map").setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 6,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // marker per ogni Olimpiade
  olympicsData.forEach((olymp) => {
    L.marker(olymp.coords)
      .addTo(map)
      .bindPopup(
        `<b>${olymp.year} - ${olymp.city}</b><br>Partecipanti: ${olymp.participants}`
      );
  });
}

// -------- GRAFICO ---------
const ctx = document.getElementById("participantsChart").getContext("2d");
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: olympicsData.map((o) => o.year),
    datasets: [
      {
        label: "Partecipanti",
        data: olympicsData.map((o) => o.participants),
        backgroundColor: "rgba(255, 165, 0, 0.7)",
        borderColor: "rgba(255, 165, 0, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  },
});

// ------- CITAZIONI ------------
const quoteCarousel = document.getElementById("quoteCarousel");
let quoteIndex = 0;
function mostraCitazione() {
  quoteCarousel.textContent = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}
mostraCitazione();
setInterval(mostraCitazione, 6000);

// ------ CURIOSITÀ -------------
const curiositiesDiv = document.getElementById("curiosities");
curiosities.forEach((c) => {
  const p = document.createElement("p");
  p.textContent = "• " + c;
  curiositiesDiv.appendChild(p);
});

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// --- SCROLL TO TOP ---
const scrollTopBtn = document.getElementById("scrollTopBtn");
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- INIZIALIZZAZIONE ---
window.onload = () => {
  initMappa();
};
