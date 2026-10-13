let carrito = [];

let total = 0;


/* ================= CARRITO ================= */

function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    total = total + precio;

    document.getElementById("contador").innerHTML =
        carrito.length;

    alert(
        nombre +
        " fue agregado al carrito.\n\n" +
        "Precio: $" +
        precio.toLocaleString("es-CO") +
        "\n\n" +
        "Productos en el carrito: " +
        carrito.length
    );
}


/* ================= GTA VI ================= */

function reservarGTA() {

    alert(
        "🎮 GRAND THEFT AUTO VI\n\n" +
        "Esta sección es una demostración para el proyecto académico.\n\n" +
        "Próximamente encontrarás más información."
    );

}


/* ================= CONTACTO ================= */

function enviarFormulario(event) {

    event.preventDefault();

    let nombre =
        document.getElementById("nombre").value;

    alert(
        "¡Mensaje enviado, " +
        nombre +
        "! 🎮\n\n" +
        "Gracias por contactar a GAMEZONE."
    );

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("mensaje").value = "";

}