// Dati dei paesi partecipanti alle Olimpiadi per anno
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

// Creazione del grafico
const ctx = document.getElementById("grafico-partecipanti").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: datiPartecipanti.map(d => d.anno),
        datasets: [{
            label: "Paesi partecipanti",
            data: datiPartecipanti.map(d => d.paesi),
            borderColor: "#ff4081", // Colore in linea con il tema di storia.css
            backgroundColor: "rgba(255, 64, 129, 0.2)",
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