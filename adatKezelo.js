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

// Szorgalmi
export function rendez(lista, kulcs, rIrany) {
  // a forEach végigmegy az összes elemen és kicseréli az ékezeteket az ekezetCsere függvénnyel, kulcs a "nev" lesz
  lista.forEach(el => {
    el[kulcs] = ekezetCsere(el[kulcs])
  });
  const rlista = lista.sort(function (e1, e2) {
    return e1[kulcs] < e2[kulcs] ? -1 * rIrany : 1 * rIrany;
  });
  return rlista;
}

function isLowerCase(str) {
  return str === str.toLowerCase() &&
         str !== str.toUpperCase();
}

// Szorgalmi -> legyen egy függvény, az ékezetes karaktereket cseréljük ki nem ékezetesekre és utána rendezzük (replaceAll())
function ekezetCsere(szoveg){
  return szoveg.replaceAll(/á|é|í|ó|ö|ő|ü|ű|ú/gi, function(x){
    if(x === "á" || x ==="Á"){
      return isLowerCase(x) ? "a" : "A"
    }
    else if(x === "é" || x ==="É"){
      return isLowerCase(x) ? "e" : "E"
    }
    else if(x === "í" || x ==="Í"){
      return isLowerCase(x) ? "i" : "I"
    }
    else if(x === "ó" || x ==="Ó" || x ==="ö" || x ==="Ö" || x ==="ő" || x ==="Ő"){
      return isLowerCase(x) ? "o" : "O"
    }
    else if(x === "ú" || x ==="Ú" || x ==="ü" || x ==="Ü" || x ==="ű" || x ==="Ű"){
      return isLowerCase(x) ? "u" : "U";
    }
    return x;
  })
}