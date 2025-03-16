// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();
    // verificamos si el nombre contiene solo letras y espacios
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
    if (!nombre) {
        alert("Por favor, ingrese un nombre.");
    } else if (!regex.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
    } else if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        inputAmigo.value = "";
        mostrarListaAmigos();
    } else {
        alert("Este nombre ya ha sido agregado.");
    }
}
//mostrar la lista de amigos
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
// Sorteamos el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos personas para sortear un amigo secreto.");
        return;
    }

    const amigosSorteados = [...amigos];
    mezclarArreglo(amigosSorteados);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} le dará un regalo a ${amigosSorteados[index]}`;
        resultado.appendChild(li);
    });
}
function mezclarArreglo(arreglo) {
    for (let i = arreglo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Intercambiar elementos
        [arreglo[i], arreglo[j]] = [arreglo[j], arreglo[i]];
    }
}
