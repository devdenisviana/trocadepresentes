const participants = [];
const participantInput = document.getElementById('participant');
const participantList = document.getElementById('participant-list');
const addButton = document.getElementById('add-participant');
const drawButton = document.getElementById('draw-button');
const resultDiv = document.getElementById('result');

function sanitizeInput(input) {
    return input.replace(/<[^>]*>/g, '');
}

function addParticipant() {
    const name = sanitizeInput(participantInput.value.trim());
    if (name) {
        participants.push(name);
        updateParticipantList();
        participantInput.value = '';
        participantInput.focus();
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

function updateParticipantList() {
    participantList.innerHTML = '';
    participants.forEach(participant => {
        const li = document.createElement('li');
        li.textContent = participant;
        participantList.appendChild(li);
    });
}

function draw() {
    if (participants.length < 2) {
        alert('Adicione pelo menos dois participantes para realizar o sorteio.');
        return;
    }
    const shuffledParticipants = [...participants].sort(() => Math.random() - 0.5);
    let resultHTML = '';
    for (let i = 0; i < shuffledParticipants.length; i++) {
        const giver = shuffledParticipants[i];
        const receiver = shuffledParticipants[(i + 1) % shuffledParticipants.length];
        resultHTML += `<p>${giver} dará presente para ${receiver}.</p>`;
    }
    resultDiv.innerHTML = resultHTML;
}

addButton.addEventListener('click', addParticipant);
drawButton.addEventListener('click', draw);