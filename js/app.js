function bienvenida (){
    debugger
    if (localStorage.getItem("nombreUsuario")){
        alert("bienvenido "+ localStorage.getItem("nombreUsuario"))
        }else{
            let usuario = prompt("Ingrese su nombre","")
        if(usuario != ""){
            localStorage.setItem("nombreUsuario", usuario)
            alert ('Gracias por registrarte '+ usuario)
        }            
    }
}

function historial(){
    
}

bienvenida()


