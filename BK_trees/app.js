// app.js

// Datos de ejemplo: animales clasificados por hábitat, tamaño y tipo de alimentación
const animales = [
    { nombre: "León", habitat: "sabana", tamaño: "grande", alimentacion: "carnivoro" },
    { nombre: "Jirafa", habitat: "pradera", tamaño: "grande", alimentacion: "herbivoro" },
    { nombre: "Oso", habitat: "bosque", tamaño: "grande", alimentacion: "omnivoro" },
    { nombre: "Tigre", habitat: "sabana", tamaño: "grande", alimentacion: "carnivoro" },
    { nombre: "Conejo", habitat: "pradera", tamaño: "pequeño", alimentacion: "herbivoro" },
    { nombre: "Zorro", habitat: "bosque", tamaño: "mediano", alimentacion: "omnivoro" }
];

// Función para filtrar animales según hábitat, tamaño y tipo de alimentación seleccionados
function filtrarAnimales(habitat, tamaño, alimentacion) {
    return animales.filter(animal => 
        animal.habitat === habitat && 
        animal.tamaño === tamaño && 
        animal.alimentacion === alimentacion
    );
}

// Función para manejar el envío del formulario
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores seleccionados
    const habitatType = document.getElementById("habitatType").value;
    const sizeType = document.getElementById("sizeType").value;
    const alimentacionType = document.getElementById("alimentacionType").value;

    // Filtrar animales según los criterios seleccionados
    const resultados = filtrarAnimales(habitatType, sizeType, alimentacionType);

    // Mostrar resultados en el área designada
    mostrarResultados(resultados);
});

// Función para mostrar los resultados en la página
function mostrarResultados(resultados) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    resultados.forEach(resultado => {
        const resultElement = document.createElement("div");
        resultElement.classList.add("result");
        resultElement.innerHTML = `<h3>${resultado.nombre}</h3>
                                   <p><strong>Hábitat:</strong> ${resultado.habitat}</p>
                                   <p><strong>Tamaño:</strong> ${resultado.tamaño}</p>
                                   <p><strong>Alimentación:</strong> ${resultado.alimentacion}</p>`;
        resultsDiv.appendChild(resultElement);
    });
}
