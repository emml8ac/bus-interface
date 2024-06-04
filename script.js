document.body.onload = crearAsientos;
var Asientos = []
function crearAsientos() {
    var div2 = document.createElement("div")
    div2.setAttribute("class", "asiento-vacio")
    for (var index = 1; index < 48; index++) {
        var div = document.createElement("div")
        var contenido = document.createTextNode(index)
        var input = document.createElement("input")
        var span = document.createElement("span")
        span.innerHTML = contenido.textContent
        span.setAttribute("class", "nAsiento")
        input.setAttribute("type", "checkbox")
        input.setAttribute("class", "asiento")
        input.setAttribute("id", "AS" + index)
        input.setAttribute("onclick", "seleccionarAsiento(this.id)")
        div.appendChild(input)
        div.setAttribute("class", "asiento")
        div.appendChild(span)
        if (index % 2 == 0) {
            if (index > 25) {
                if (index == 26) {
                    fila2.appendChild(div2)
                    fila2.appendChild(div)
                } else {
                    fila2.appendChild(div)
                }
            } else {
                fila4.appendChild(div)
            }
        } else {
            if (index == 47) {
                fila1.insertBefore(div, document.querySelector(".asiento"));
            } else {
                if (index > 23) {
                    fila1.appendChild(div)
                } else {
                    fila3.appendChild(div)
                }
            }
        }
    }
}
function seleccionarAsiento(idAsiento) {
    var asiento = document.getElementById(idAsiento)
    if (Asientos === undefined) {
        Asientos.push(asiento)
    } else {
        if (Asientos.includes(asiento)) {
            Asientos = removeElement(Asientos, asiento)
        } else {
            Asientos.push(asiento)
        }
    }
}
function removeElement(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}