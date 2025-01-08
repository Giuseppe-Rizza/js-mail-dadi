// creazione array con elenco della lista degli ospiti
const listGuests = ["pinkopallo@hotmail.it", "pinkopallo@gmail.com", "pinkopallo@tiscali.it", "pinkopallo@libero.it", "pinkopallo@alice.it", "pinkopallo@virgilio.it", "pinkopallo@yahoo.it", ]


// richiesta info all'utente (e-mail)
let eMail = (prompt ("Inserisci la tua e-mail)"));


// variabile di messaggio/risultato
let result = false;


// verifica della presenza dell'e-mail nella lista degli autorizzati all'accesso

for (let i = 0; i < listGuests.length; i++) {

    // SE l'e-mail è inclusa nella lista
    if (email === listGuests [i]) {
        result = true;
        break;
    }

}
    
        // setto il risultato sull'accesso autorizzato all'utente
        if(result){
            console.log("Sei nella lista, puoi entrare")
        } else {
    // SE l'e-mail non è inclusa nella lista 
        // setto il risultato sull'accesso negato all'utente
        console.log("Non sei nella lista, non puoi entrare")
        }


// indicare all'utente se può accedere o meno --- OUTPUT