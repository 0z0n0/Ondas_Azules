/* Variables */

let cardsAmostrar = "";
let contenidoJSON = [];

const URL = "./js/info.json";

const contenidoDOM = document.querySelector("#infoproducto");

document.addEventListener("DOMContentLoaded",obtengoContenido(URL));

/* TEMPLATE HTML */

const retornoCardContenido = (contenido) => {
  const { nombre, material, pintura, imagen } = contenido;
  let HTMLCard = "";

  HTMLCard += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${imagen}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">"${nombre}"</h5>
    <ul>
      <li>Material: ${material}</li>
      <li>Pintura: ${pintura}</li>
    </ul>
  </div>
</div>`;
  return HTMLCard;
};

const retornoCardError = ()=> {
    let HTMLCardError = `<div class="text-center"> 
                            <br><br> 
                            <br><br> 
                            <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                            <br><br> 
                            <i class="large material-icons">sentiment_very_dissatisfied</i> 
                            <br><br> 
                         </div>`
       return HTMLCardError
 }

 /* FETCH */

 function obtengoContenido(URL){
    debugger
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> {
        const contenidoDisponible = data
        contenidoDisponible.forEach(contenido => {
            cardsAmostrar += retornoCardContenido(contenido)
            contenidoDOM.innerHTML = cardsAmostrar
        });
    })
    .catch((error) => {
        contenidoDOM.innerHTML = retornoCardError()
    })
    .finally(data => cargandoDOM.innerHTML = "")
} 

console.log ("en funcionamiento")
