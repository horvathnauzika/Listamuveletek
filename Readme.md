# Listakezelő függvények gyakorlás 

## Specifikáció

Jelenítsük meg az adatainkat egy táblázatban az adatok div-ben, az űrlap div-ben legyen egy űrlap, amivel ilyen adatokat tudunk a táblázatba beletenni
A táblázat fejlécére kattintva rendezzünk a táblázatot név szerint
Tudjunk törölni a táblázatból egy sort
Legyen egy szűrőmező, ami segítségével névszerint tudjuk szrűni az adatainkat

## Függvények

1. *** tablazatletrehoz(lista); *** - txt - lista alapján készít egy html kódot, ami egy táblázat, visszatérési értéke az elkészült html szöveget minden sor mellett egy törlés ikonnal

2. *** megjelenit(txt); *** - megjeleníti a paraméterben kapott szöveget egy adott html elemben

3. *** rendez(lista); *** - rlista megrendezi a listát az adott paraméter szerint, a megrendezett listát visszaadja, akkor fut le, amikor rákattintunk a táblázat fejlécére  

4. *** szures(lista, keresoszoveg); *** -> visszatérési értéke: egy újabb lista, neve szurtlista -  akkor fog lefutni, ha a szűrőmezőben változás történik (keyup) - a listában a név mezőben keres egyezéseket, és szűri a listát ez alapján - filter

5. *** sorbeszur(lista); *** -> ujLista -  ha a submit gombra kattintunk, akkor fog lefutni a függvény, az űrlap adatokat átalakítjuk egy objektummá és hozzáadjuk a listához (push)

6. *** torol(index, lista); *** - törli a lista indexedik sorát, minden sor mellett lesz egy töröl ikon, amire kattintva megkapjuk az adott sor indexet, és meghívódik a torol függvény
