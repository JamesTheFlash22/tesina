// Canvas per rumore statico
const canvas = document.querySelector('.crt-noise');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function drawNoise() {
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    for (let i = 0; i < imgData.data.length; i += 4) {
        const value = Math.random() * 255;
        imgData.data[i] = value;
        imgData.data[i + 1] = value;
        imgData.data[i + 2] = value;
        imgData.data[i + 3] = 30;
    }
    ctx.putImageData(imgData, 0, 0);
    requestAnimationFrame(drawNoise);
}
drawNoise();

// Suono CRT sintetico
function playCRTSound() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(60, ctx.currentTime);
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + 2);
}

// Suono CRT
function playSound() {
    const crtSound = document.getElementById('crt-sound');
    crtSound.play().catch(() => {
        console.log('Audio file non supportato, suono sintetico attivato');
        playCRTSound();
    });
}

// Stato del pulsante
let isTVOn = false;

// Funzione per reindirizzamento
function redirectToIndex() {
    console.log('Tentativo di reindirizzamento a ../index.html');
    try {
        window.location.href = '../index.html';
    } catch (error) {
        console.error('Errore nel reindirizzamento:', error);
    }
}

// Pulsante Accendi la TV
document.getElementById('power-button').addEventListener('click', () => {
    const crtScreen = document.querySelector('.crt-screen');
    const crtOverlay = document.querySelector('.crt-overlay');
    const crtNoise = document.querySelector('.crt-noise');
    const powerButton = document.getElementById('power-button');
    const entraCanale = document.getElementById('entra-canale');
    if (!isTVOn) {
        // Accensione
        crtScreen.classList.add('active');
        crtOverlay.classList.add('active');
        crtNoise.classList.add('active');
        powerButton.style.display = 'none';
        entraCanale.classList.add('active');
        isTVOn = true;
        playSound();
    }
});

// Pulsante Entra nel Canale
document.getElementById('entra-canale').addEventListener('click', () => {
    const crtScreen = document.querySelector('.crt-screen');
    const crtOverlay = document.querySelector('.crt-overlay');
    const crtNoise = document.querySelector('.crt-noise');
    const powerButton = document.getElementById('power-button');
    const entraCanale = document.getElementById('entra-canale');
    if (isTVOn) {
        // Spegnimento
        crtScreen.style.animation = 'crt-off 2s ease-in-out forwards';
        playSound();
        setTimeout(() => {
            crtScreen.classList.remove('active');
            crtOverlay.classList.remove('active');
            crtNoise.classList.remove('active');
            powerButton.style.display = 'block';
            entraCanale.classList.remove('active');
            redirectToIndex();
        }, 2000);
        isTVOn = false;
    }
});

// Gestione periodi curiosità
const periodoButtons = document.querySelectorAll('.periodo-btn');
const periodi = document.querySelectorAll('.curiosita-periodo');

periodoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const periodo = button.getAttribute('data-periodo');
        periodoButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        periodi.forEach(p => {
            p.classList.remove('active');
            if (p.getAttribute('data-periodo') === periodo) {
                p.classList.add('active');
            }
        });
    });
});

// Inizializza primo periodo
periodoButtons[0].classList.add('active');
periodi[0].classList.add('active');

// Gioco di sintonizzazione
const slider = document.getElementById('sintonizza-slider');
const tvImage = document.getElementById('tv-image');
const interference = document.querySelector('.interference');
const annoSintonizza = document.getElementById('anno-sintonizza');

// Inizializza gli effetti visivi per l'anno 1936 (valore slider = 0)
const initialValue = slider.value;
let initialBlur = 3;
let initialBrightness = 0.5;
let initialInterferenceOpacity = 1;
let initialInterferenceAnimation = 'interference-flicker 0.05s infinite';
let initialGrayscale = 100;
let initialPixelated = 'pixelated';
tvImage.src = 'foto.jpg?t=' + new Date().getTime(); // Forza il caricamento con timestamp
tvImage.style.filter = `grayscale(${initialGrayscale}%) blur(${initialBlur}px) brightness(${initialBrightness})`;
tvImage.style.imageRendering = initialPixelated;
interference.style.opacity = initialInterferenceOpacity;
interference.style.animation = initialInterferenceAnimation;
console.log('Immagine iniziale:', tvImage.src); // Debug

slider.addEventListener('input', () => {
    const value = slider.value;
    let blur, brightness, interferenceOpacity, anno, interferenceAnimation, grayscale, pixelated, imageSrc;

    // Calcola gli intervalli per 10 anni (1936, 1948, 1960, 1964, 1977, 1980, 1988, 1996, 2008, 2024)
    if (value < 10) {
        // 1936
        blur = 3;
        brightness = 0.5;
        interferenceOpacity = 1;
        anno = '1936';
        interferenceAnimation = 'interference-flicker 0.05s infinite';
        grayscale = 100;
        pixelated = 'pixelated';
        imageSrc = 'foto2.jpg';
    } else if (value < 20) {
        // 1948
        blur = 2.8;
        brightness = 0.55;
        interferenceOpacity = 0.95;
        anno = '1948';
        interferenceAnimation = 'interference-flicker 0.06s infinite';
        grayscale = 100;
        pixelated = 'pixelated';
        imageSrc = 'foto2.jpg';
    } else if (value < 30) {
        // 1960
        blur = 2.5;
        brightness = 0.6;
        interferenceOpacity = 0.8;
        anno = '1960';
        interferenceAnimation = 'interference-flicker 0.08s infinite';
        grayscale = 80;
        pixelated = 'pixelated';
        imageSrc = 'foto2.jpg';
    } else if (value < 40) {
        // 1964
        blur = 2;
        brightness = 0.65;
        interferenceOpacity = 0.7;
        anno = '1964';
        interferenceAnimation = 'interference-flicker 0.1s infinite';
        grayscale = 60;
        pixelated = 'auto';
        imageSrc = 'foto2.jpg';
    } else if (value < 50) {
        // 1977
        blur = 1.7;
        brightness = 0.75;
        interferenceOpacity = 0.6;
        anno = '1977';
        interferenceAnimation = 'interference-flicker 0.12s infinite';
        grayscale = 30;
        pixelated = 'auto';
        imageSrc = 'foto.jpg';
    } else if (value < 60) {
        // 1980
        blur = 1.5;
        brightness = 0.8;
        interferenceOpacity = 0.5;
        anno = '1980';
        interferenceAnimation = 'interference-flicker 0.15s infinite';
        grayscale = 20;
        pixelated = 'auto';
        imageSrc = 'foto.jpg';
    } else if (value < 70) {
        // 1988
        blur = 1;
        brightness = 0.85;
        interferenceOpacity = 0.3;
        anno = '1988';
        interferenceAnimation = 'interference-flicker 0.2s infinite';
        grayscale = 10;
        pixelated = 'auto';
        imageSrc = 'foto.jpg';
    } else if (value < 80) {
        // 1996
        blur = 0.5;
        brightness = 0.9;
        interferenceOpacity = 0.2;
        anno = '1996';
        interferenceAnimation = 'interference-flicker 0.25s infinite';
        grayscale = 0;
        pixelated = 'auto';
        imageSrc = 'foto.jpg';
    } else if (value < 90) {
        // 2008
        blur = 0.2;
        brightness = 0.95;
        interferenceOpacity = 0.1;
        anno = '2008';
        interferenceAnimation = 'interference-flicker 0.3s infinite';
        grayscale = 0;
        pixelated = 'auto';
        imageSrc = 'foto.jpg';
    } else {
        // 2024
        blur = 0;
        brightness = 1;
        interferenceOpacity = 0;
        anno = '2024';
        interferenceAnimation = 'none';
        grayscale = 0;
        pixelated = 'auto';
        imageSrc = 'foto.jpg';
    }

    // Aggiorna l'immagine con timestamp per evitare cache
    const newImageSrc = new URL(imageSrc + '?t=' + new Date().getTime(), window.location.href).href;
    if (tvImage.src !== newImageSrc) {
        tvImage.src = imageSrc + '?t=' + new Date().getTime();
        console.log('Immagine aggiornata:', imageSrc, 'per anno:', anno); // Debug
    }

    tvImage.style.filter = `grayscale(${grayscale}%) blur(${blur}px) brightness(${brightness})`;
    tvImage.style.imageRendering = pixelated;
    interference.style.opacity = interferenceOpacity;
    interference.style.animation = interferenceAnimation;
    annoSintonizza.textContent = anno;
});

// Gestisci errori di caricamento delle immagini
tvImage.addEventListener('error', () => {
    console.error('Errore nel caricamento dell\'immagine:', tvImage.src);
});