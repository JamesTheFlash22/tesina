document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const customPopup = document.getElementById('custom-popup');
    const customPopupText = document.getElementById('custom-popup-text');
    const closeButtons = document.querySelectorAll('.close-btn');
    const curiosityBtn = document.getElementById('curiosity-btn');

    // Map subjects to their curiosity actions
    const curiosityActions = {
        'ed-fisica': {
            action: 'navigate',
            url: 'edfisica/edfisica.html'
        },
        'italiano': {
            action: 'navigate',
            url: 'ita/ita.html'
        },
        'storia': {
            action: 'navigate',
            url: 'storia/storia.html'
        },
        'tecnologia': {
            action: 'navigate',
            url: 'tecnologia/tecnologia.html'
        },
        'francese': {
            action: 'popup',
            message: 'Curiosità per Francese: Collegamento con Le Tour de France in preparazione.'
        },
        'geografia': {
            action: 'popup',
            message: 'Curiosità per Geografia: Temi sull’immigrazione in sviluppo.'
        },
        'musica': {
            action: 'popup',
            message: 'Curiosità per Musica: Il jazz e le Olimpiadi, dettagli presto disponibili.'
        },
        'inglese': {
            action: 'popup',
            message: 'Curiosità per Inglese: Analisi di "Billy Elliot" in arrivo.'
        },
        'scienze': {
            action: 'popup',
            message: 'Curiosità per Scienze: Studio sulle leve in contesto olimpico da definire.'
        },
        'arte': {
            action: 'popup',
            message: 'Curiosità per Arte: L’arte in movimento, contenuti in preparazione.'
        },
        'ed-civica': {
            action: 'popup',
            message: 'Curiosità per Ed. Civica: Temi civici legati alle Olimpiadi in sviluppo.'
        }
    };

    // Store current subject for curiosity button
    let currentSubject = '';

    // Open main popup on topic click
    document.querySelectorAll('.topic').forEach(topic => {
        topic.addEventListener('click', (e) => {
            e.preventDefault();
            const subjectClass = topic.classList[1]; // e.g., 'ed-fisica'
            const subjectName = subjectClass.replace('-', ' '); // e.g., 'Ed. Fisica'
            currentSubject = subjectClass; // Store for curiosity button
            popupText.textContent = `Contenuto per ${subjectName}: (da definire).`;
            popup.style.display = 'flex';
            customPopup.style.display = 'none'; // Ensure custom popup is hidden
        });
    });

    // Close both popups
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.style.display = 'none';
            customPopup.style.display = 'none';
        });
    });

    // Handle curiosity button
    curiosityBtn.addEventListener('click', () => {
        const action = curiosityActions[currentSubject] || {
            action: 'popup',
            message: 'Curiosità non disponibile.'
        };

        popup.style.display = 'none'; // Close main popup

        if (action.action === 'navigate') {
            window.location.href = action.url;
        } else {
            customPopupText.textContent = action.message;
            customPopup.style.display = 'flex';
        }
    });

    // Close popups on outside click
    [popup, customPopup].forEach(pop => {
        pop.addEventListener('click', (e) => {
            if (e.target === pop) {
                pop.style.display = 'none';
            }
        });
    });

    // Close popups with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            popup.style.display = 'none';
            customPopup.style.display = 'none';
        }
    });
});