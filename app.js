let amigos = [];


function agregarAmigo() {
    let nuevoAmigo = document.querySelector('#amigo').value;
    if (nuevoAmigo == '') {
        alert('Por favor ingrese un nombre');
    } else {
        amigos.push(nuevoAmigo);
        console.log(amigos)
        return amigos;
    }
    limpiarCaja();
}

function limpiarCaja() {
    let valorCAja = document.querySelector('#amigo').value = '';
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