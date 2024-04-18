export function rendez2(lista, kulcs, rIrany) {
  /* rlista megrendezi a listát az adott paraméter szerint (név (kulcs) szerint rendezünk), a megrendezett listát visszaadja, akkor fut le, amikor rákattintunk a táblázat fejlécére */
  const rlista = lista.sort(function (e1, e2) {
    // a returnbe negatív vagy pozitív érték kell, a név az szöveges változó, ezért < > operátor értelmezhető, ezért kell egy elágazás
    return e1[kulcs] < e2[kulcs] ? -1 * rIrany : 1 * rIrany;
  });
  return rlista;
}

export function szures(lista, keresoSzoveg) {
  /* szures(lista, keresoszoveg); -> visszatérési értéke: egy újabb lista, neve szurtlista -  akkor fog lefutni, ha a szűrőmezőben változás történik (keyup) - a listában a név mezőben keres egyezéseket, és szűri a listát ez alapján - filter */
  const szurtlista = lista.filter(function (ember) {
    return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtlista;
}

// Szorgalmi
export function szuresKor(lista, keresoSzam) {
  const szurtlista = lista.filter(function (ember) {
    return ember.kor.toString().includes(keresoSzam);
  });
  return szurtlista;
}

// Szorgalmi
export function szuresNem(lista, keresoNem) {
  if (keresoNem.toLowerCase() === "férfi"){
    const szurtlista = lista.filter(function(ember){
      return ember.nem == true;
    })
    return szurtlista;
  }
  else if(keresoNem.toLowerCase() === "nő"){
    const szurtlista = lista.filter(function(ember){
      return ember.nem == false;
    })
    return szurtlista;
  }
  else{
    return lista;
  }
}

// törli a lista indexedik sorát, minden sor mellett lesz egy töröl ikon, amire kattintva megkapjuk az adott sor indexet, és meghívódik a torol függvény
export function torol(lista, index){
  lista.splice(index,1)
  return lista;
}