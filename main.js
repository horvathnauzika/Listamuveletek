import { emberekLISTA } from "./adat.js";
import { megjelenit, tablazatletrehoz } from "./fuggvenyek.js";
import { rendez2, szures } from "./adatKezelo.js";

let rIrany = 1;
init(emberekLISTA);
szuresNevSzerint();

function init(lista) {
  let txt = tablazatletrehoz(lista);
  megjelenit(txt);
  rendezesEsemeny();
}

function szuresNevSzerint() {
  //akkor fusson le, ha a szűrőmezőbe beírok valamit
  const szuroElem = $("#sznev");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szures(emberekLISTA, szoveg));
  });
} // szorgalmi -> egyéb mezők szerinti szűrés

function rendezesEsemeny() {
  //ha rákattintunk a táblázat fejlécére - a név mezőre
  const nevMezoELEM = $(".adatok table th").eq(0); //0. elem
  nevMezoELEM.on("click", function () {
    const lista = rendez2(emberekLISTA, "nev");
    console.log(lista);

    init(lista);

    rIrany *= -1;
    console.log(rIrany);
    // szorgalmi -> tudjunk rendezni a többi mező szerint is
  });
}
