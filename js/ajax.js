/* Variables */

let url = 'https://jsonplaceholder.typicode.com/users'
/* fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error=> console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i<data.length; i++){
        body += `<tr class="fst-italic">            
            <td>${data[i].name}</td>
            <td>${data[i].email}</td>
            </tr>`
    }

    document.getElementById('data').innerHTML = body
} */

let url2 = 'info.json'
fetch(url2)
    .then(response => response.json())
    .then(data2 => mostrarData2(data2))
    .catch(error=> console.log(error))

const mostrarData2 = (data2) => {
    console.log(data2)
    let body = ''
    for (let i = 0; i<data2.length; i++){
        body += `
        <div class="col-12 col-md-4">
            <div class="item shadow mb-4 text-center">
                <h3 class="item-title">${data2[i].nombre}</h3>

                <img class="item-image" src="${data2[i].imagen}" alt="mandala Lakshmi">

                <div class="item-details ">                
                    <p class="card-subtitle ">Material: ${data2[i].material}</p>
                    <p class="card-subtitle">Pintura: ${data2[i].pintura}</p>
                    <p class="item-price">Precio: $${data2[i].precio}</p>
                               
                </div>                      
            </div>
        </div>`
    }

    document.getElementById('colgantes').innerHTML = body
}
