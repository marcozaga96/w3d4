// creare un un contenitore di 76 celle dove inseriamo all'interno dei numeri da 1 => 76.
// richiamare l'id dell'elemento
const allNumber= document.getElementById("number")
// creare un array con i 76 numeri
const newArray= new Array(76);
for (let i = 0; i < newArray.length; i++) {
    newArray[i] = i + 1;
        // crea visivamente i numeri creando un h
    const numberCell = document.createElement("h2")
    numberCell.innerText = i + 1
    // collega l'h creato  al div
    allNumber.appendChild(numberCell)
}
// creare un bottone che richiami numeri random da 1=>76
// richiamare l'id dell'elemento
const button1= document.getElementById("button")
// dargli la possibilità di estrarre un numero random da 1=>76
const numeriCasuali= numberRandom();
function numberRandom() {
    return Math.floor(Math.random()*76)+1;
}
// button1.addEventListener("click",numeriCasuali)
console.log("il numero è:", numeriCasuali);


