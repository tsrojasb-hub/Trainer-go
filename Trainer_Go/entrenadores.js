const entrenadores = [
    {
        id: 1,
        nombre: "Melissa Gonzalez",
        disciplina: "Pilates",
        modalidad: ["individual", "grupal"],
        precio: 70000,
        experiencia: "5 años de experiencia",
        certificacion: "Instructora certificada en pilates",
        imagen: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500"
    },
    {
        id: 2,
        nombre: "Angela Torres",
        disciplina: "yoga",
        modalidad: ["individual", "grupal"],
        precio: 50000,
        experiencia: "4 años de experiencia",
        certificacion: "Instructora certificada en yoga",
        imagen: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500"
    },
    {
        id: 3,
        nombre: "Andres Rodriguez",
        disciplina: "Musculacion",
        modalidad: ["individual", "grupal"],
        precio: 80000,
        experiencia: "7 años de experiencia",
        certificacion: "Profesional en cultura fisica y deporte",
        imagen: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500"
    }

];

function mostrarEntrenadores(lista) {
    const contenedor = document.getElementById("lista-entrenadores");
    contenedor.innerHTML = "";
    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div class="col-12 text-center">
                <h4>No encontramos entrenadores</h4>
                <p>intenta cambiar tus filtros</p>
            </div>
        `;
        return;
    }
    lista.forEach(entrenador => {
        contenedor.innerHTML+= `
        <div class="col-md-4">
            <div class="card h-100 shadow">
                <img
                    src="${entrenador.imagen}"
                    class="card-img-top"
                    alt="${entrenador.nombre}"
                    style="height: 230px; object-fit: cover;"
                >
                <div class="card-body">
                    <h5 class="card-tittle">
                        ${entrenador.nombre}
                    </h5>
                    <p class="card-text">
                        <strong>Disciplina:</strong>
                        ${entrenador.disciplina}
                    </p>
                    <p class="card-text">
                        <strong>Experiencia:</strong>
                        ${entrenador.experiencia}
                    </p>
                    <p class="card-text">
                        <strong>Certificación:</strong>
                        ${entrenador.certificacion}
                    </p>
                    <p class="card-text">
                        <strong>Modalidad:</strong>
                        ${entrenador.modalidad.join(" y ")}
                    </p>
                    <h5>
                        $${entrenador.precio.toLocaleString("es-CO")}
                    </h5>
                    <button
                        class="btn btn-go w-100 btn-reservar"
                        data-id="${entrenador.id}">
                        Reservar entrenamiento
                    </button>
                </div>
            </div>
        </div>
    `;
});
}

document.getElementById("buscar").addEventListener("click", function() {
    const disciplina = document.getElementById("disciplina").value;
    const modalidad = document.getElementById("modalidad").value;
    const precio = document.getElementById("precio").value;
    const resultado = entrenadores.filter(entrenador => {
        const coincideDisciplina =
            disciplina === "" || entrenador.disciplina === disciplina;
        const coincideModalidad =
            modalidad ==="" || entrenador.modalidad.includes(modalidad);
        const coincidePrecio =
            precio === "" || entrenador.precio <= Number(precio);
        return coincideDisciplina && coincideModalidad && coincidePrecio;
    });
    mostrarEntrenadores(resultado);
});

mostrarEntrenadores(entrenadores);