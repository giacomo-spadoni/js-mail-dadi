// creo le variabili dell'array e dell'input utente

const email = ['mia@email.it', 'sua@email.it', 'nostra@email.it']
const emailUtente = prompt('inserisci quì la tua mail per verificare di poter accedere')

// faccio un controllo su tutti i dati dell'array uno per uno con i condizionali ---deprecated---

// if (emailUtente == email[0]) {
//     alert('email presente nei nostro database, puoi accedere!')
// } else if (emailUtente == email[1]) {
//     alert('email presente nei nostro database, puoi accedere!')
// } else if (emailUtente == email[2]) {
//     alert('email presente nei nostro database, puoi accedere!')
// } else {
//     alert('email non riconosciuta, non puoi accedere')
// }

// faccio un controllo con il metodo .includes

if (email.includes(emailUtente)) {
    alert('email presente nei nostro database, puoi accedere!')
} else {
    alert('email non riconosciuta, non puoi accedere')
}