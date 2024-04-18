import { emberekLISTA } from "./adat.js";
import { megjelenit, tablazatletrehoz } from "./fuggvenyek.js";
import { rendez2, rendez, szures, szuresKor, szuresNem } from "./adatKezelo.js";

let rIrany = 1;
init(emberekLISTA);
szuresNevSzerint();
szuresKorSzerint();
szuresNemSzerint();


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
}

// Szorgalmi
function szuresKorSzerint() {
  const szuroElem = $("#szkor");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresKor(emberekLISTA, szoveg));
  });
}

// Szorgalmi
function szuresNemSzerint() {
  const szuroElem = $("#sznem");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresNem(emberekLISTA, szoveg));
  });
}

function rendezesEsemeny() {
  //ha rákattintunk a táblázat fejlécére - a név mezőre
  const nevMezoELEM = $(".adatok table th").eq(0); //0. elem
  nevMezoELEM.on("click", function () {
    const lista = rendez2(emberekLISTA, "nev", rIrany);
    console.log(lista);

    init(lista);

    rIrany *= -1;
    console.log(rIrany);
  });
  // Szorgalmi
  const korMezoELEM = $(".adatok table th").eq(1);
  korMezoELEM.on("click", function(){
    const lista = rendez2(emberekLISTA, "kor", rIrany);
    console.log(lista);
    init(lista);
    rIrany *= -1;
    console.log(rIrany)
  });
  // Szorgalmi
  const nemMezoELEM = $(".adatok table th").eq(2);
  nemMezoELEM.on("click", function(){
    const lista = rendez2(emberekLISTA, "nem", rIrany);
    console.log(lista);
    init(lista);
    rIrany *= -1;
    console.log(rIrany)
  })
}
