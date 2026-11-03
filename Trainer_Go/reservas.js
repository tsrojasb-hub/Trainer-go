const listaEntrenadores = document.getElementById("lista-entrenadores")
listaEntrenadores.addEventListener("click", function(event) {
    const boton = event.target.closest(".btn-reservar");
    if (!boton) {
        return;
    }
    const idEntrenador = Number(boton.dataset.id);
    const entrenador = entrenadores.find(function(item) {
        return item.id === idEntrenador;
    });
    if (!entrenador) {
        return;
    }
    document.getElementById("nombreEntrenador").textContent = entrenador.nombre;
    document.getElementById("detalleEntrenador").textContent =
        entrenador.disciplina + " | " +
        entrenador.experiencia + " | $" +
        entrenador.precio.toLocaleString("es-CO");
    const elementoModal = document.getElementById("modalReserva");
    const modal = new bootstrap.Modal(elementoModal);
    modal.show();
});

const formReserva = document.getElementById("formReserva");
formReserva.addEventListener("submit", function(event) {

    event.preventDefault();

    const fecha = document.getElementById("fechaReserva").value;
    const hora = document.getElementById("horaReserva").value;
    const direccion = document.getElementById("direccionReserva").value;
    const pago = document.getElementById("pagoReserva").value;

    const mensaje = document.getElementById("mensajeReserva");

    mensaje.innerHTML = `
        <div class="alert alert-success">
            ¡Solicitud de reserva registrada correctamente!
            <br>
            Fecha: ${fecha}
            <br>
            Hora: ${hora}
            <br>
            Dirección: ${direccion}
            <br>
            Método de pago: ${pago}
        </div>
    `;

});
