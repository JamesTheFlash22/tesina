// scienze.js

// Coordinate iniziali
let forza = document.getElementById("forza");
let resistenza = document.getElementById("resistenza");
let output = document.getElementById("output-movimento");
let svg = document.getElementById("leva-svg");

let isDragging = null;

function aggiornaOutput() {
  let forzaX = parseFloat(forza.querySelector("circle").getAttribute("cx"));
  let resistenzaX = parseFloat(resistenza.querySelector("circle").getAttribute("cx"));
  let fulcroX = 300;

  let vantaggio = "";

  if (Math.abs(forzaX - fulcroX) > Math.abs(resistenzaX - fulcroX)) {
    vantaggio = "Leva vantaggiosa";
  } else if (Math.abs(forzaX - fulcroX) < Math.abs(resistenzaX - fulcroX)) {
    vantaggio = "Leva svantaggiosa";
  } else {
    vantaggio = "Leva indifferente";
  }

  output.textContent = `Stato attuale: ${vantaggio}`;
}

function onMove(evt) {
  if (!isDragging) return;

  let pt = svg.createSVGPoint();
  pt.x = evt.clientX;
  pt.y = evt.clientY;
  let cursorpt = pt.matrixTransform(svg.getScreenCTM().inverse());

  let x = Math.min(490, Math.max(110, cursorpt.x));
  isDragging.setAttribute("cx", x);

  let text = isDragging.parentNode.querySelector("text");
  text.setAttribute("x", x);

  aggiornaOutput();
}

function startDrag(evt) {
  if (evt.target.tagName === "circle") {
    isDragging = evt.target;
  }
}

function stopDrag() {
  isDragging = null;
}

document.addEventListener("mousemove", onMove);
document.addEventListener("mouseup", stopDrag);
forza.addEventListener("mousedown", startDrag);
resistenza.addEventListener("mousedown", startDrag);

// Popup interattivi corpo umano dati
const popupData = {
  testa: {
    titolo: "Leva di primo genere",
    testo: "Il fulcro si trova tra la forza applicata dai muscoli del collo e la resistenza rappresentata dal peso della testa."
  },
  braccio: {
    titolo: "Leva di terzo genere",
    testo: "Il bicipite applica la forza tra il gomito (fulcro) e la mano (resistenza)."
  },
  schiena: {
    titolo: "Leva di secondo genere",
    testo: "Il fulcro è all'estremità della schiena, resistenza al centro e forza applicata in basso."
  }
};

// Funzioni popup
function chiudiPopup(popup) {
  popup.classList.remove("visibile");
  setTimeout(() => popup.remove(), 200);
}

// Chiudi popup click esterno o ESC
document.addEventListener("click", (e) => {
  const popup = document.querySelector(".popup");
  if (popup && !popup.contains(e.target) && !e.target.classList.contains("punto")) {
    chiudiPopup(popup);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup");
    if (popup) chiudiPopup(popup);
  }
});

// Popup click punti
document.querySelectorAll(".punto").forEach(punto => {
  punto.addEventListener("click", () => {
    // Se c’è popup aperto, chiudo
    const oldPopup = document.querySelector(".popup");
    if (oldPopup) chiudiPopup(oldPopup);

    const tipo = punto.dataset.tipo;
    const info = popupData[tipo];

    const popup = document.createElement("div");
    popup.className = "popup visibile";
    popup.innerHTML = `
      <button class="chiudi" aria-label="Chiudi popup">&times;</button>
      <h3>${info.titolo}</h3>
      <p>${info.testo}</p>
    `;

    document.body.appendChild(popup);

    popup.querySelector(".chiudi").addEventListener("click", () => {
      chiudiPopup(popup);
    });
  });
});
