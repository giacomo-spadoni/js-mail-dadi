// creo la variabile per il bottone
const start = document.getElementById('inizio')

// creo la variabile per creare un nuovo div vuoto
const newDiv = document.createElement('div')

// creo l'evento al clicl del bottone
start.addEventListener('click', function () {

    // creo le variabili randomiche per utente e pc
    let numPlayer = Math.floor(Math.random() * 6) + 1
    document.getElementById('giocatore').innerHTML = numPlayer

    let numPc = Math.floor(Math.random() * 6) + 1
    document.getElementById('computer').innerHTML = numPc

    // inserisco una nuova classe al div che sto creando
    newDiv.classList.add('centered')

    // creo la condizione di vittoria
    if (numPlayer > numPc) {
        newDiv.textContent = 'Giocatore hai vinto!'
    } else {
        newDiv.textContent = 'Hai perso...ritenta!'
    }

    // "appendo il div in fondo alla mia section"
    document.querySelector('section').append(newDiv)
})