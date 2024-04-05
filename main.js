import { emberekLISTA } from "./adat.js";

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
