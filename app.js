let amigo = [];


//Función para agregar amigos.

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    
      if (!nombreAmigo){
        alert("Ingresar Nombre");
        return;
      }
      amigo.push(nombreAmigo);
      inputAmigo.value = "";
      inputAmigo.focus();
      renderizarAmigos();
}  
      
function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo [i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigo.length === 0){
      alert("No Hay Amigos Para Sortear");
    return;
    }
  let amigoSorteado = amigo[Math.floor(Math.random() * amigo.lenght)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El Amigo Sorteado es: ${amigoSorteado}`;

  //let limpiarLista = document.getElementById("listaAmigos");
  //limpiarLista.innerHTML = "";

}
