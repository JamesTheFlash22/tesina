function zoomImage(img) {
  // Se esiste già l'ingrandita, non crearne un'altra
  if (document.querySelector(".zoomed-img")) return;

  const clone = img.cloneNode();
  clone.classList.add("zoomed-img");
  clone.style.position = "fixed";
  clone.style.top = "50%";
  clone.style.left = "50%";
  clone.style.transform = "translate(-50%, -50%) scale(2)";
  clone.style.zIndex = 10000;
  clone.style.boxShadow = "0 0 30px rgba(243,156,18,0.9)";
  clone.style.borderRadius = "12px";
  clone.style.cursor = "default";
  clone.style.transition = "all 0.3s ease";
  document.body.appendChild(clone);

  // Chiude l'ingrandita cliccando fuori dall'immagine
  function closeZoom(e) {
    if (e.target === clone) return;
    document.body.removeChild(clone);
    window.removeEventListener("click", closeZoom);
  }

  window.addEventListener("click", closeZoom);
}

// Light cursor following effect
const cursorLight = document.getElementById("cursor-light");
window.addEventListener("mousemove", (e) => {
  cursorLight.style.top = e.clientY + "px";
  cursorLight.style.left = e.clientX + "px";
});

// Facts non scontate da mostrare
const facts = [
  "The actor Jamie Bell was chosen for the role of Billy after an extensive nationwide search that involved thousands of boys.",
  "Billy Elliot’s original screenplay was inspired by a short story called 'Dance' written by the screenwriter Lee Hall.",
  "The film’s iconic dance scenes were choreographed by Peter Darling, who later worked on the musical adaptation.",
  "Billy Elliot’s success led to a West End musical that won 10 Olivier Awards, including Best New Musical.",
  "The film and musical helped revive interest in ballet among boys and challenged traditional gender roles in dance."
];


let factIndex = 0;
const factTextEl = document.getElementById("factText");

function showFact() {
  factTextEl.style.opacity = 0;
  setTimeout(() => {
    factTextEl.textContent = facts[factIndex];
    factTextEl.style.opacity = 1;
    factIndex = (factIndex + 1) % facts.length;
  }, 600);
}

setInterval(showFact, 6000);
showFact();
