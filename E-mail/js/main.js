// creo le variabili dell'array e dell'input utente

const email = ['mia@email.it', 'sua@email.it', 'nostra@email.it']
const emailUtente = prompt('inserisci quì la tua mail per verificare di poter accedere')

// // creo le variabili per l'accesso il successo o il fallimento

// let success = 'successo'
// let fail = 'negato'

// let access = fail
// // creo il ciclo per controllare se l'input utente è presente nell'array

// for (let i = 0; i < email.length; i++) {
//     if (emailUtente == email[i]) {
//         access = success
//         break
//     }
// }

// // stampo l'alert

// alert(access)

// faccio un controllo con il metodo .includes

if (email.includes(emailUtente)) {
    alert('email presente nei nostro database, puoi accedere!')
} else {
    alert('email non riconosciuta, non puoi accedere')
}