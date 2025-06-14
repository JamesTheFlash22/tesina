const luoghiOlimpiadi = [
    { anno: 1896, citta: "Atene", lat: 37.9838, lng: 23.7275, paese: "GR", flagUrl: "https://www.worldometers.info/img/flags/gr-flag.gif" },
    { anno: 1900, citta: "Parigi", lat: 48.8566, lng: 2.3522, paese: "FR", flagUrl: "https://www.worldometers.info/img/flags/fr-flag.gif" },
    { anno: 1904, citta: "St. Louis", lat: 38.6270, lng: -90.1994, paese: "US", flagUrl: "https://www.worldometers.info/img/flags/us-flag.gif" },
    { anno: 1908, citta: "Londra", lat: 51.5074, lng: -0.1278, paese: "GB", flagUrl: "https://www.worldometers.info/img/flags/uk-flag.gif" },
    { anno: 1912, citta: "Stoccolma", lat: 59.3293, lng: 18.0686, paese: "SE", flagUrl: "https://www.worldometers.info/img/flags/sw-flag.gif" },
    { anno: 1920, citta: "Anversa", lat: 51.2213, lng: 4.4051, paese: "BE", flagUrl: "https://www.worldometers.info/img/flags/be-flag.gif" },
    { anno: 1924, citta: "Parigi", lat: 48.8566, lng: 2.3522, paese: "FR", flagUrl: "https://www.worldometers.info/img/flags/fr-flag.gif" },
    { anno: 1928, citta: "Amsterdam", lat: 52.3676, lng: 4.9041, paese: "NL", flagUrl: "https://www.worldometers.info/img/flags/nl-flag.gif" },
    { anno: 1932, citta: "Los Angeles", lat: 34.0522, lng: -118.2437, paese: "US", flagUrl: "https://www.worldometers.info/img/flags/us-flag.gif" },
    { anno: 1936, citta: "Berlino", lat: 52.5200, lng: 13.4050, paese: "DE", flagUrl: "https://www.worldometers.info/img/flags/gm-flag.gif" },
    { anno: 1948, citta: "Londra", lat: 51.5074, lng: -0.1278, paese: "GB", flagUrl: "https://www.worldometers.info/img/flags/uk-flag.gif" },
    { anno: 1952, citta: "Helsinki", lat: 60.1699, lng: 24.9384, paese: "FI", flagUrl: "https://www.worldometers.info/img/flags/fi-flag.gif" },
    { anno: 1956, citta: "Melbourne", lat: -37.8136, lng: 144.9631, paese: "AU", flagUrl: "https://www.worldometers.info/img/flags/as-flag.gif" },
    { anno: 1960, citta: "Roma", lat: 41.9028, lng: 12.4964, paese: "IT", flagUrl: "https://www.worldometers.info/img/flags/it-flag.gif" },
    { anno: 1964, citta: "Tokyo", lat: 35.6762, lng: 139.6503, paese: "JP", flagUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
    { anno: 1968, citta: "Città del Messico", lat: 19.4326, lng: -99.1332, paese: "MX", flagUrl: "https://www.worldometers.info/img/flags/mx-flag.gif" },
    { anno: 1972, citta: "Monaco", lat: 48.1351, lng: 11.5820, paese: "DE", flagUrl: "https://www.worldometers.info/img/flags/gm-flag.gif" },
    { anno: 1976, citta: "Montreal", lat: 45.5017, lng: -73.5673, paese: "CA", flagUrl: "https://www.worldometers.info/img/flags/ca-flag.gif" },
    { anno: 1980, citta: "Mosca", lat: 55.7558, lng: 37.6173, paese: "RU", flagUrl: "https://www.worldometers.info/img/flags/rs-flag.gif" },
    { anno: 1984, citta: "Los Angeles", lat: 34.0522, lng: -118.2437, paese: "US", flagUrl: "https://www.worldometers.info/img/flags/us-flag.gif" },
    { anno: 1988, citta: "Seul", lat: 37.5665, lng: 126.9780, paese: "KR", flagUrl: "https://www.worldometers.info/img/flags/ks-flag.gif" },
    { anno: 1992, citta: "Barcellona", lat: 41.3851, lng: 2.1734, paese: "ES", flagUrl: "https://www.worldometers.info/img/flags/sp-flag.gif" },
    { anno: 1996, citta: "Atlanta", lat: 33.7489, lng: -84.3879, paese: "US", flagUrl: "https://www.worldometers.info/img/flags/us-flag.gif" },
    { anno: 2000, citta: "Sydney", lat: -33.8688, lng: 151.2093, paese: "AU", flagUrl: "https://www.worldometers.info/img/flags/as-flag.gif" },
    { anno: 2004, citta: "Atene", lat: 37.9838, lng: 23.7275, paese: "GR", flagUrl: "https://www.worldometers.info/img/flags/gr-flag.gif" },
    { anno: 2008, citta: "Pechino", lat: 39.9042, lng: 116.4074, paese: "CN", flagUrl: "https://www.worldometers.info/img/flags/ch-flag.gif" },
    { anno: 2012, citta: "Londra", lat: 51.5074, lng: -0.1278, paese: "GB", flagUrl: "https://www.worldometers.info/img/flags/uk-flag.gif" },
    { anno: 2016, citta: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, paese: "BR", flagUrl: "https://www.worldometers.info/img/flags/br-flag.gif" },
    { anno: 2020, citta: "Tokyo", lat: 35.6762, lng: 139.6503, paese: "JP", flagUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
    { anno: 2024, citta: "Parigi", lat: 48.8566, lng: 2.3522, paese: "FR", flagUrl: "https://www.worldometers.info/img/flags/fr-flag.gif" }
];

const datiPartecipanti = [
    { anno: 1896, paesi: 14 },
    { anno: 1900, paesi: 24 },
    { anno: 1904, paesi: 12 },
    { anno: 1908, paesi: 22 },
    { anno: 1912, paesi: 28 },
    { anno: 1920, paesi: 29 },
    { anno: 1924, paesi: 44 },
    { anno: 1928, paesi: 46 },
    { anno: 1932, paesi: 37 },
    { anno: 1936, paesi: 49 },
    { anno: 1948, paesi: 59 },
    { anno: 1952, paesi: 69 },
    { anno: 1956, paesi: 72 },
    { anno: 1960, paesi: 83 },
    { anno: 1964, paesi: 93 },
    { anno: 1968, paesi: 112 },
    { anno: 1972, paesi: 121 },
    { anno: 1976, paesi: 92 },
    { anno: 1980, paesi: 80 },
    { anno: 1984, paesi: 140 },
    { anno: 1988, paesi: 159 },
    { anno: 1992, paesi: 169 },
    { anno: 1996, paesi: 197 },
    { anno: 2000, paesi: 199 },
    { anno: 2004, paesi: 201 },
    { anno: 2008, paesi: 204 },
    { anno: 2012, paesi: 204 },
    { anno: 2016, paesi: 207 },
    { anno: 2020, paesi: 206 },
    { anno: 2024, paesi: 206 }
];

const mappa = L.map("mappa-olimpiadi").setView([20, 0], 2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mappa);

const markers = [];
luoghiOlimpiadi.forEach(luogo => {
    const marker = L.marker([luogo.lat, luogo.lng])
        .addTo(mappa)
        .bindPopup(`
            <div>
                <h3>${luogo.anno} - ${luogo.citta}</h3>
                <img src="${luogo.flagUrl}" alt="Bandiera ${luogo.citta}" class="popup-flag">
            </div>
        `);
    markers.push({ anno: luogo.anno, marker });
});

const ctx = document.getElementById("grafico-partecipanti").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: datiPartecipanti.map(d => d.anno),
        datasets: [{
            label: "Paesi partecipanti",
            data: datiPartecipanti.map(d => d.paesi),
            borderColor: "#009246",
            backgroundColor: "rgba(0, 146, 70, 0.2)",
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

const anniOlimpiadi = document.getElementById("anni-olimpiadi");
let contatoreAttivato = false;
function avviaContatore() {
    if (contatoreAttivato) return;
    contatoreAttivato = true;
    let anni = 0;
    const targetAnni = 2025 - 1896;
    const intervallo = setInterval(() => {
        if (anni < targetAnni) {
            anni++;
            anniOlimpiadi.textContent = anni;
        } else {
            clearInterval(intervallo);
        }
    }, 20);
}

// Caricamento dinamico della timeline
const timelineContainer = document.getElementById("timeline-container");
const mostraAltroBtn = document.getElementById("mostra-altro");
let currentIndex = 0;
const itemsPerLoad = 10;

function caricaNodiTimeline(filteredItems = luoghiOlimpiadi) {
    const fine = Math.min(currentIndex + itemsPerLoad, filteredItems.length);
    for (let i = currentIndex; i < fine; i++) {
        const luogo = filteredItems[i];
        const partecipanti = datiPartecipanti.find(d => d.anno === luogo.anno)?.paesi || "N/D";
        const div = document.createElement("div");
        div.className = `container ${i % 2 === 0 ? "left" : "right"}`;
        div.dataset.year = luogo.anno;
        div.innerHTML = `
            <div class="content">
                <img src="${luogo.flagUrl}" alt="Bandiera ${luogo.citta}" class="timeline-flag">
                <h2>${luogo.anno}</h2>
                <p>${luogo.citta}</p>
            </div>
        `;
        timelineContainer.appendChild(div);

        // Tooltip
        div.addEventListener("mouseover", (e) => {
            const tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.innerHTML = `
                <strong>${luogo.anno} - ${luogo.citta}</strong><br>
                Paese: ${luogo.paese}<br>
                Partecipanti: ${partecipanti} paesi
            `;
            document.body.appendChild(tooltip);
            const rect = div.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        });

        div.addEventListener("mouseout", () => {
            document.querySelectorAll(".tooltip").forEach(t => t.remove());
        });

        // Clic per centrare la mappa
        div.addEventListener("click", () => {
            const marker = markers.find(m => m.anno === luogo.anno)?.marker;
            if (marker) {
                mappa.setView([luogo.lat, luogo.lng], 5);
                marker.openPopup();
                document.querySelectorAll(".container").forEach(i => i.classList.remove("active"));
                div.classList.add("active");
            }
        });
    }
    currentIndex = fine;
    mostraAltroBtn.style.display = currentIndex < filteredItems.length ? "block" : "none";
}

// Inizializza la timeline
caricaNodiTimeline();

// Pulsante "Mostra altro"
mostraAltroBtn.addEventListener("click", () => {
    const filteredItems = getFilteredItems();
    caricaNodiTimeline(filteredItems);
});

// Filtro anni
const yearFilter = document.getElementById("year-filter");
yearFilter.addEventListener("change", () => {
    const filteredItems = getFilteredItems();
    timelineContainer.innerHTML = "";
    currentIndex = 0;
    caricaNodiTimeline(filteredItems);
});

function getFilteredItems() {
    const value = yearFilter.value;
    if (value === "all") return luoghiOlimpiadi;
    const [start, end] = value.split("-").map(Number);
    return luoghiOlimpiadi.filter(luogo => luogo.anno >= start && luogo.anno <= end);
}

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            if (target.id === "mappa") {
                target.classList.add("animate-fadeInUp");
            } else if (target.id === "timeline") {
                target.querySelectorAll(".container").forEach((item, index) => {
                    setTimeout(() => item.classList.add("animate-rotateIn"), index * 200);
                });
            } else if (target.id === "grafico") {
                target.classList.add("animate-fadeInUp");
            } else if (target.id === "frasi") {
                target.querySelectorAll("p").forEach((p, index) => {
                    const animClass = index % 2 === 0 ? "animate-fadeInLeft" : "animate-fadeInRight";
                    setTimeout(() => p.classList.add(animClass), index * 200);
                });
            } else if (target.id === "contatore") {
                target.classList.add("animate-fadeInUp");
                avviaContatore();
            } else if (target.tagName === "HEADER") {
                target.classList.add("animate-fadeIn");
            } else if (target.tagName === "FOOTER") {
                target.classList.add("animate-fadeIn");
            }
            observer.unobserve(target);
        }
    });
}, observerOptions);

document.querySelectorAll("header, section, footer").forEach(element => {
    observer.observe(element);
});
