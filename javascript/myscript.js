/*
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let userFirstWord = prompt('Inserisci la prima parola');
let userSecondWord = prompt('Inserisci la seconda parola');

if (userFirstWord.length > userSecondWord.length){

    console.log(userFirstWord + ' ' + userSecondWord);

} else if (userFirstWord.length < userSecondWord.length){

    console.log(userSecondWord + ' ' + userFirstWord);

} else if (userFirstWord.length == userSecondWord.length){

    console.log('Le due parole sono lunghe uguali!');

}

/*
 * Il software deve chiedere per 10 volte all'utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti. 
*/

let numberSum = 0;

for (let i = 0; i < 10; i++){

    numberSum += parseInt(prompt('inserisci un numero'));

}

console.log('la somma dei numeri precedenti è ' + numberSum)

/**
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
*/



/**
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
*/



/**
 * Calcola la somma e la media dei primi 10 numeri
*/



/*
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire cinque parole.
 *	Quando una parola è scritta con tutti i caratteri in maiuscolo stampa un alert,
 *	altrimenti inseriscila nell'array.
 *
*/



/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
*/



/**
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
*/



/**
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
*/

