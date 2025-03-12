 // Aquí tu código
const button1 = document.getElementById("agregar");
let resultados = document.getElementById("lista");

button1.addEventListener("click", function(){
    let añadir = prompt("Que deseas agregar?");
    if (añadir){
            let elementos = document.createElement("li");
            elementos.textContent = añadir;
            resultados.appendChild(elementos);
    }

});





