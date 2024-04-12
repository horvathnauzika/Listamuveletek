export function rendez2(lista, kulcs, rIrany) {
  /* rlista megrendezi a listát az adott paraméter szerint (név (kulcs) szerint rendezünk), a megrendezett listát visszaadja, akkor fut le, amikor rákattintunk a táblázat fejlécére */
  const rlista = lista.sort(function (e1, e2) {
    // a returnbe negatív vagy pozitív érték kell, a név az szöveges változó, ezért < > operátor értelmezhető, ezért kell egy elágazás
    return e1[kulcs] < e2[kulcs] ? -1 * rIrany : 1 * rIrany;
  });
  return rlista;
}

// szorgalmi, legyen egy függvény, az ékezetes karaktereket cseréljük ki nem ékezetesekre és utána rendezzük (replaceAll())

export function szures(lista, keresoSzoveg) {
  /* szures(lista, keresoszoveg); -> visszatérési értéke: egy újabb lista, neve szurtlista -  akkor fog lefutni, ha a szűrőmezőben változás történik (keyup) - a listában a név mezőben keres egyezéseket, és szűri a listát ez alapján - filter */
  const szurtlista = lista.filter(function(ember){
    return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  })
  return szurtlista;
}
