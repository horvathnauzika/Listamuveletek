import { emberekLISTA } from "./adat.js";
import { megjelenit, tablazatletrehoz } from "./fuggvenyek.js";

// függvény, működik a hoisting
function listaKiir() {
  for (let index = 0; index < emberekLISTA.length; index++) {
    const element = emberekLISTA[index];
    console.log(element);
    //console.log(LISTA[index]);
  }
}
listaKiir();

function listaKiir3() {
  // forEach ciklus, LISTA esetén alkalmazható
  //első az objektum (ember) az index pedig a második (i)
  emberekLISTA.forEach(function (ember, i) {
    console.log(ember, i);
  });

  emberekLISTA.forEach((ember, i) => {
    console.log(ember);
  });
}
listaKiir3();

// a 30 évnél idősebbeket írjuk ki
function idosebb30() {
  const oregebbMint30LISTA = emberekLISTA.filter(function (ember) {
    return ember.kor > 30;
  });
  console.log(oregebbMint30LISTA);
}
idosebb30();

// férfiak kilistázása
function ferfiak() {
  const ferfiakLISTA = emberekLISTA.filter(function (ember) {
    return ember.nem;
  });
  console.log(ferfiakLISTA);
}
ferfiak();

// 20 évnél idősebb férfiak
function ferfiak20EvFelett() {
  const ferfiakLISTA = emberekLISTA.filter(function (ember) {
    return ember.nem && ember.kor > 20;
  });
  console.log(ferfiakLISTA);
}
ferfiak20EvFelett();

// rendezett kor szerint növekvő sorrendbe a listát
function rendez() {
  emberekLISTA.sort(function (ember1, ember2) {
    // csökkenő sorrendben az ember2-ből vonom ki az ember1-gyet
    return ember1.kor - ember2.kor;
  });
  console.log(emberekLISTA);
}
rendez();

// Véletlenszerű sorrend
function veletlen() {
  emberekLISTA.sort(function (ember1, ember2) {
    // Véletlenszerűen kapjunk negatív vagy pozitív számot
    return Math.random() - 0.5; // az esetek felében kapunk pozitív vagy negatív számot
  });
  console.log(emberekLISTA);
}
veletlen();

/* Jelenítsük meg az adatainkat egy táblázatban az adatok div-ben, az űrlap div-ben legyen egy űrlap, amivel ilyen adatokat tudunk a táblázatba beletenni
a táblázat fejlécére kattintva rendezzünk a táblázatot név szerint
// Tudjunk törölni a táblázatból egy sort
// Legyen egy szűrőmező, ami segítségével névszerint tudjuk szrűni az adatainkat */

/* Milyen függvények kellenek ezekhez a feladatokhoz?
1. tablazatletrehoz(lista); - txt - lista alapján készít egy html kódot, ami egy táblázat, visszatérési értéke az elkészült html szöveget minden sor mellett egy törlés ikonnal

2. megjelenit(txt); - megjeleníti a paraméterben kapott szöveget egy adott html elemben

3. rendez(lista); - rlista megrendezi a listát az adott paraméter szerint, a megrendezett listát visszaadja, akkor fut le, amikor rákattintunk a táblázat fejlécére  

4. szures(lista, keresoszoveg) -> visszatérési értéke: egy újabb lista, neve szurtlista -  akkor fog lefutni, ha a szűrőmezőben változás történik (keyup) - a listában a név mezőben keres egyezéseket, és szűri a listát ez alapján - filter

5. sorbeszur(lista); -> ujLista -  ha a submit gombra kattintunk, akkor fog lefutni a függvény, az űrlap adatokat átalakítjuk egy objektummá és hozzáadjuk a listához (push)

6. torol(index, lista); - törli a lista indexedik sorát, minden sor mellett lesz egy töröl ikon, amire kattintva megkapjuk az adott sor indexet, és meghívódik a torol függvény

*/
let txt = tablazatletrehoz(emberekLISTA)
megjelenit(txt)