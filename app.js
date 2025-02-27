let amigo = [];

//Función para agregar amigos.

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    
      if (!nombreAmigo){
        alert("Ingresar Nombre");
        return;
      }
      
      let regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+(\s[A-Za-záéíóúÁÉÍÓÚñÑ]+)*$/;
      if (!regex.test(nombreAmigo)){
        alert("Ingresar Nombre Valido, el nombre no puede contener numeros ni caracteres especiales");
        return;
      }

      if (amigo.some((amigo) => nombreAmigo.toLowerCase() === amigo.toLowerCase())) {
        alert(`El nombre ${nombreAmigo.toUpperCase()} ya fué agregado a la lista, ingrese el segundo nombre o el apellido.`);
        document.getElementById("amigo").value = "";
        return;
      }
           
      amigo.push(nombreAmigo);
      inputAmigo.value = "";
      inputAmigo.focus();
      agregarAmigos();
            
}

// funcion para agregar amigos a la lista

function agregarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
      let item = document.createElement("li");
      item.textContent = amigo[i];
      listaAmigos.appendChild(item);      
    }
 
}

//funcion para sortear amigos

function sortearAmigo(){
    if(amigo.length === 0){
      alert("No Hay Amigos Para Sortear");
    return;
    }
    if(amigo.length < 3){
      alert("minimo se necesitan 3 amigos");
      return;
    }
  let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
  let resultado = document.getElementById("resultado");
  resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
  
  let limpiarLista = document.getElementById("listaAmigos");
  limpiarLista.innerHTML = "";

}