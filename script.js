// js-biglietto-treno

// INPUT
// DOMANDA N-1 DA FARE ALL'UTENTE
let km = prompt("indicare i km da percorrere");

// DOMANDA N-1 DA FARE ALL'UTENTE
let age = prompt("indicare età");

console.log("distanza in km", km , "età", age);


// ELABORAZIONE DEL PREZZO IN BASE AI KM DA PERCORRERE
let price = km * 0.21;
console.log("la somma è: €", price);



// ELABORAZIONE DELLO SCONTO IN BASE ALL'ETà
let discount = 0;
//  SE l'età è > 18  sconto del 20%
if (age < 18){
    discount = price * 0.20
}
//  SE l'età è > 65 sconto del 20%
else if ( age > 65){
    discount = price * 0.40
} 
else { discount = 0}

// PREZZO FINALE

let fprice = price - discount;

console.log("la somma scontata è: €", fprice)

console.log("Totale da pagare: € ", fprice.toFixed(2));

