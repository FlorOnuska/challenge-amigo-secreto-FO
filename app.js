//crear un array para almacenar la lista de amigos
let amigos = [];

// crear una funcion para agregar amigos a la lista, si el input esta vacio alertar con un mensaje y si esta lleno, agregar nombre al array
// luego de agregado limpiar el input
function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo");
    let nombre = nuevoAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor ingrese un nombre');
        return;
    } else {
        amigos.push(nombre);
        console.log(amigos)
    }
    nuevoAmigo.value = "";
}


function recorrerAmigos() {
    let listaDeAmigos = document.getElementById("listaAmigos").value;
    listaDeAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = amigos[i];
        listaDeAmigos.appendChild(nuevoLi);
    console.log(amigos[i]);
}

}