// Dati per la mappa (luoghi delle Olimpiadi estive)
const luoghiOlimpiadi = [
    { anno: 1896, citta: "Atene", lat: 37.9838, lng: 23.7275 },
    { anno: 1900, citta: "Parigi", lat: 48.8566, lng: 2.3522 },
    { anno: 1904, citta: "St. Louis", lat: 38.6270, lng: -90.1994 },
    { anno: 1908, citta: "Londra", lat: 51.5074, lng: -0.1278 },
    { anno: 1912, citta: "Stoccolma", lat: 59.3293, lng: 18.0686 },
    { anno: 1920, citta: "Anversa", lat: 51.2213, lng: 4.4051 },
    { anno: 1924, citta: "Parigi", lat: 48.8566, lng: 2.3522 },
    { anno: 1928, citta: "Amsterdam", lat: 52.3676, lng: 4.9041 },
    { anno: 1932, citta: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    { anno: 1936, citta: "Berlino", lat: 52.5200, lng: 13.4050 },
    { anno: 1948, citta: "Londra", lat: 51.5074, lng: -0.1278 },
    { anno: 1952, citta: "Helsinki", lat: 60.1699, lng: 24.9384 },
    { anno: 1956, citta: "Melbourne", lat: -37.8136, lng: 144.9631 },
    { anno: 1960, citta: "Roma", lat: 41.9028, lng: 12.4964 },
    { anno: 1964, citta: "Tokyo", lat: 35.6762, lng: 139.6503 },
    { anno: 1968, citta: "Città del Messico", lat: 19.4326, lng: -99.1332 },
    { anno: 1972, citta: "Monaco", lat: 48.1351, lng: 11.5820 },
    { anno: 1976, citta: "Montreal", lat: 45.5017, lng: -73.5673 },
    { anno: 1980, citta: "Mosca", lat: 55.7558, lng: 37.6173 },
    { anno: 1984, citta: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    { anno: 1988, citta: "Seul", lat: 37.5665, lng: 126.9780 },
    { anno: 1992, citta: "Barcellona", lat: 41.3851, lng: 2.1734 },
    { anno: 1996, citta: "Atlanta", lat: 33.7489, lng: -84.3879 },
    { anno: 2000, citta: "Sydney", lat: -33.8688, lng: 151.2093 },
    { anno: 2004, citta: "Atene", lat: 37.9838, lng: 23.7275 },
    { anno: 2008, citta: "Pechino", lat: 39.9042, lng: 116.4074 },
    { anno: 2012, citta: "Londra", lat: 51.5074, lng: -0.1278 },
    { anno: 2016, citta: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
    { anno: 2020, citta: "Tokyo", lat: 35.6762, lng: 139.6503 },
    { anno: 2024, citta: "Parigi", lat: 48.8566, lng: 2.3522 }
];

// Dati per il grafico (numero di paesi partecipanti per anno)
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

// Carica i paesi da countries.json
let paesi = [];
let currentIndex = 0;
const paesiPerCaricamento = 20;

fetch("countries.json")
    .then(response => response.json())
    .then(data => {
        paesi = data;
        document.getElementById("nazioni-partecipanti").textContent = paesi.length;
        caricaPaesi();
        document.getElementById("mostra-altro").addEventListener("click", caricaPaesi);
    });

function caricaPaesi() {
    const container = document.getElementById("bandiere-container");
    const fine = Math.min(currentIndex + paesiPerCaricamento, paesi.length);
    for (let i = currentIndex; i < fine; i++) {
        const paese = paesi[i];
        const div = document.createElement("div");
        div.className = "bandiera";
        if (paese.placeholder) {
            div.innerHTML = `<div class="ain-placeholder">${paese.codice}</div><span class="nome">${paese.nome}</span>`;
        } else {
            const codiceBandiera = paese.flag || paese.codice.toLowerCase();
            div.innerHTML = `<span class="fi fi-${codiceBandiera}"></span><span class="nome">${paese.nome}</span>`;
        }
        container.appendChild(div);
    }
    currentIndex = fine;
    if (currentIndex >= paesi.length) {
        document.getElementById("mostra-altro").style.display = "none";
    }
}

// Mappa interattiva con Leaflet
const mappa = L.map("mappa-olimpiadi").setView([20, 0], 2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mappa);
luoghiOlimpiadi.forEach(luogo => {
    L.marker([luogo.lat, luogo.lng])
        .addTo(mappa)
        .bindPopup(`${luogo.anno} - ${luogo.citta}`);
});

// Grafico con Chart.js
const ctx = document.getElementById("grafico-partecipanti").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: datiPartecipanti.map(d => d.anno),
        datasets: [{
            label: "Paesi partecipanti",
            data: datiPartecipanti.map(d => d.paesi),
            borderColor: "#003087",
            backgroundColor: "rgba(0, 48, 135, 0.2)",
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

// Contatore animato
const anniOlimpiadi = document.getElementById("anni-olimpiadi");
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