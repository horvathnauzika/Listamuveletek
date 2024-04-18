import { init } from "./main.js";

export function sorBeszur(lista){
    // 5. *** sorbeszur(lista); *** -> ujLista -  ha a submit gombra kattintunk, akkor fog lefutni a függvény, az űrlap adatokat átalakítjuk egy objektummá és hozzáadjuk a listához(push), újra meghívjuk az init függvényt
    const submitELEM=$("#submit")
    submitELEM.on("click", function(event){
        // leszedjük az alapértelmezett eseménykezelőt
        event.preventDefault()

        const adat={
            nev: $("#nev").val(),
            kor: $("#kor").val(),
            nem: $("input[name~='nem']:checked").val()==="ferfi"? true : false
        }
        console.log($(".valid-feedback").eq(0).css("display"))
        if($(".valid-feedback").eq(0).css("display") == "block" && $(".valid-feedback").eq(1).css("display") == "block")
        lista.push(adat)
        console.log(lista)
        init(lista)
    })
}