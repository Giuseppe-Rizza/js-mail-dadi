// creazione array con elenco della lista degli ospiti
const listGuests = ["pinkopallo@hotmail.it", "pinkopallo@gmail.com", "pinkopallo@tiscali.it", "pinkopallo@libero.it", "pinkopallo@alice.it", "pinkopallo@virgilio.it", "pinkopallo@yahoo.it", ]

console.log(listGuests);



// richiesta info all'utente (e-mail)
let eMail = (prompt ("Inserisci la tua e-mail)"));

console.log(eMail);



// variabile di messaggio/risultato
let searchEmail = false;


// verifica della presenza dell'e-mail nella lista degli autorizzati all'accesso

for (let i = 0; i < listGuests.length; i++) {

    let ifEmailPresent = listGuests [i];

    if (eMail === ifEmailPresent)
        console.log("Puoi accedere");
        
    if (eMail !== ifEmailPresent)
        console.log("Non puoi accedere");

}