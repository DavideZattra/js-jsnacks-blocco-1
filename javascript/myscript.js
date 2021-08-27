/*
 * Esercizio 1
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// let userFirstWord = prompt('Inserisci la prima parola');
// let userSecondWord = prompt('Inserisci la seconda parola');

// if (userFirstWord.length > userSecondWord.length){

//     console.log(userFirstWord + ' ' + userSecondWord);

// } else if (userFirstWord.length < userSecondWord.length){

//     console.log(userSecondWord + ' ' + userFirstWord);

// } else if (userFirstWord.length == userSecondWord.length){

//     console.log('Le due parole sono lunghe uguali!');

// }

/*
 * Esercizio 2
 * Il software deve chiedere per 10 volte all'utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti. 
*/

// let numberSum = 0;

// for (let i = 0; i < 10; i++){

//     numberSum += parseInt(prompt('inserisci un numero'));

// }

// console.log('la somma dei numeri precedenti è ' + numberSum);

/**
 *   Esercizio 3
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// const gatsbyGuestList = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];

// let flag = false;

// let userName = prompt('Inserisci il tuo nome');

// userName = userName.charAt(0).toUpperCase() + userName.substr(1).toLowerCase();


// for (let i = 0; i < gatsbyGuestList.length; i++){

//     if(userName == gatsbyGuestList[i]){

//         flag = true;

//     }
    
// }

// if (flag == true){

//     console.log('Puoi partecipare alla festa! Ti attendiamo all\' ingresso!');

// } else if (flag == false){

//     console.log('Accesso negato!');

// }


/**
 * Esercizio 4
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
*/

// let numbersContainer = [];

// for (i = 0; i < 6; i++){

//     let userNumber = parseInt(prompt('Inserisci un numero'));

//     if (userNumber % 2 != 0){

//             numbersContainer.push(userNumber)

//     }

// }

// console.log(numbersContainer);

/**
 * Esercizio 5
 * Calcola la somma e la media dei primi 10 numeri
*/

// let numberSum = 0;

// for (let i = 1; i <= 10; i++){

//     numberSum += i;

// }

// let numberAverage = numberSum / 10;

// console.log('La somma è ' + numberSum);
// console.log('La media dei numeri è ' + numberAverage);


/**
 * Esercizio 6
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire 5 parole.
 *	Quando una parola è scritta con tutti i caratteri in maiuscolo stampa un alert,
 *	altrimenti inseriscila nell'array.
 *
*/

// let userWordContainer = [];
// let userWord;

// for (i = 0; i < 5; i++){

//     userWord = prompt('Inserisci una parola');

//     if ( userWord == userWord.toUpperCase() ) {

//         alert('Non scrivere tutto in maiuscolo!!!');

//     } else {

//         userWordContainer.push(userWord);
//     }

// }

// console.log(userWordContainer)



/**
 * Esercizio 7
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
*/

// let numberSum = 0;

// for (let i = 0; i < 5; i++){
    
//     numberSumFor += Math.floor(prompt('Inserisci un numero!'));

// }

// let numberSumWhile = 0;
// let j = 0;

// while ( j < 5){

//     numberSumWhile += Math.floor(prompt('Inserisci un numero!'));

//     j++;
// }

// console.log(numberSumFor)
// console.log(numberSumWhile)

/**
 * Esercizio 7
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
*/

// const listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
// const listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

// let fakeGuest = 0;

// const fakeGuestList = [];

// // for (let i= 0; i<8; i++){
    
// //     fakeGuest = listaNomi[Math.floor(Math.random() * listaNomi.length)] + ' ' + listaCognomi[Math.floor(Math.random() * listaCognomi.length)];

// //     console.log(fakeGuest)

//     // fakeGuestList.push(fakeGuest);


// // }

// let j = 0;

// while ( j < 8){

//     fakeGuest = listaNomi[Math.floor(Math.random() * listaNomi.length)] + ' ' + listaCognomi[Math.floor(Math.random() * listaCognomi.length)];

//     console.log(fakeGuest)

//     fakeGuestList.push(fakeGuest);
    
//     j++;
    
// }

// fakeGuestList.sort();

// for(i=0; i<8; i++){

//         document.getElementById("ms_guest-list").innerHTML += '<li>' + fakeGuestList[i] + '</li>' ;

// }

// console.log(fakeGuestList)


/**
 * Esercizio 8
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
*/

let listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward"];
let listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch"];


for (let i = 0; i < listaCognomi.length; i++){

    if ( listaNomi.length != listaCognomi.length){

        listaNomi.push(listaNomi[i]);
        
    } else if (listaNomi.length == listaCognomi.length){
        
        for (j = 0; j < listaCognomi.length; j++){

            document.getElementById("ms_name-list").innerHTML += '<li>' + listaNomi[j] + '</li>' ;
            document.getElementById("ms_surname-list").innerHTML += '<li>' + listaCognomi[j] + '</li>' ;


        }

    }

    console.log(listaNomi.length);

}