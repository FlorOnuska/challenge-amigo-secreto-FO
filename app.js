// array para almacenar la lista de amigos
let amigos = [];

// funcion para agregar amigos a la lista, si el input esta vacio alertar con un mensaje y si esta lleno, agregar nombre al array
// luego de agregado limpiar el input
function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo");
    let nombre = nuevoAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor ingrese un nombre');
        return;
    } else if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert('Ese amigo ya está en la lista');
        nuevoAmigo.value = "";
        return;
    } else {
        amigos.push(nombre);
        console.log(amigos)
    }
    nuevoAmigo.value = "";
    recorrerAmigos()
}

// funcion que recorre array, agrega cada nombre como un elemento <li> a la lista
// chequea que no haya duplicados
// mostrar lista de nombres a medida que se agregan
function recorrerAmigos() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");

    listaDeAmigos.innerHTML = "";
    resultado.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = amigos[i];
        listaDeAmigos.appendChild(nuevoLi);
    }

    
}

// seleccionar nombre del array aleatoreamente y mostrarlo en la pagina al hacer click en sortear
function sortearAmigo() {
    if (amigos.lenght === 0) {
        alert("No hay amigos, agrega algunos primero");
        reutn;
    } else {
        let cantidadAmigos = parseInt(amigos.length);
        let indice = Math.floor(Math.random()*cantidadAmigos);
        let amigoSeleccionado = amigos[indice];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        let liResultado = document.createElement("li");
        liResultado.textContent = "El amigo sorteado es: " + amigoSeleccionado;
        resultado.appendChild(liResultado);
    }
}


        