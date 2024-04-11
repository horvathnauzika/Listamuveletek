export function tablazatletrehoz(lista){
    let txt = "<div class='table-responsive'><table class=' table table-striped'>";
    txt += "<thead>";
    txt += "<tr><th>Név</th></tr><tr><th>Kor</th></tr><tr><th>Nem</th></tr><tr><th></th></tr>"
    txt += "</thead>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
        txt += `<tr>
            <td>${elem.nev}</td>
            <td>${elem.kor}</td>
            <td>${elem.nem?"férfi":"nő"}</td>
            <td><button id="${index}">🗑️</button></td>
        </tr>`
    });
    txt += "</tbody>"
    txt += "</table></div>";
    return txt
}

export function megjelenit(txt){
    const ELEM=$(".adatok")
    ELEM.html(txt)
}