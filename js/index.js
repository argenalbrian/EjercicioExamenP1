function calcular() {
    let subtotal = 0;
    let productos = document.getElementsByTagName("input"); 

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].classList.contains("producto")) { 
            let valor = productos[i].value;

            if (valor === "" || valor * 1 != valor) { 
                alerta("Verifique que los numeros sean validos");
                return;
            }

            subtotal += valor * 1; 
        }
    }

    let descuento = 0;
    let porcentaje = 0;

    if (subtotal >= 1000) {
        if (subtotal < 5000) {
            porcentaje = 10;
        } else if (subtotal < 9000) {
            porcentaje = 20;
        } else if (subtotal < 13000) {
            porcentaje = 30;
        } else {
            porcentaje = 40;
        }
        descuento = subtotal * porcentaje / 100;
    }

    let totalPagar = subtotal - descuento;

    document.getElementById("subtotal").value = "L" + (subtotal * 100 / 100);
    document.getElementById("descuento").value = "L" + (descuento * 100 / 100);
    document.getElementById("totalPagar").value = "L" + (totalPagar * 100 / 100);
    document.getElementById("labelDescuento").textContent = "Descuento " + porcentaje + "%";
}

function limpiar() {
    let productos = document.getElementsByTagName("input");

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].classList.contains("producto")) {
            productos[i].value = "";
        }
    }

    document.getElementById("subtotal").value = "";
    document.getElementById("descuento").value = "";
    document.getElementById("totalPagar").value = "";
    document.getElementById("labelDescuento").textContent = "Descuento 0%";
}


function alerta(mensaje) {
    Swal.fire({
        icon: "warning",
        title: mensaje,
    });
}