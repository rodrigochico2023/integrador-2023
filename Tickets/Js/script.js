/* function calcTotal(){
    console.log("Ingreso a calcTotal")

    let cant=document.getElementById("cant").value
    console.log(cant)

    let total=cant*1000
    console.log(total)

    document.getElementById("total").innerHTML=total


} */

function calcTotal() {
    console.log("Ingreso a calcTotal");

    let cant = parseFloat(document.getElementById("cant").value);
    console.log(cant);

    let tipoUsuario = document.getElementById("tipoUsuario").value;
    console.log(tipoUsuario);

    let descuento = 0;

    if (isNaN(cant)) {
        document.getElementById("total").innerHTML = "Ingrese tickets";
        return;
    }

    if (tipoUsuario === "estudiante") {
        descuento = 0.30; // 30% de descuento para alumnos
    } else if (tipoUsuario === "orador") {
        descuento = 0.50; // 50% de descuento para oradores
    }

    let total = cant * 1000 * (1 - descuento);
    console.log(total);

    document.getElementById("total").innerHTML = total.toFixed(2);
}
