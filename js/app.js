
const loginButton = document.querySelector('.login');
loginButton.addEventListener('click', login);
const registerButton = document.querySelector('.register');
registerButton.addEventListener('click', register);

function login(){
    //debugger
    const user = JSON.parse(localStorage.getItem("User"))
    const usuario = document.getElementById("userLogin").value
    const password = document.getElementById("passwordLogin").value
    if (user.usuario == usuario && user.password == password) {
        console.log("login ok")
        Toastify({
            text: "Logeo correcto",
            duration: 1500,
            destination: "https://github.com/apvarun/toastify-js",          
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`            
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },            
          }).showToast();
          setTimeout( function() { window.location.href = "index.html"; }, 2500 ); 
    }else{
        swal("Ooops","Algo ha fallado, intentalo otra vez","error")
    }
}

function register(){
  console.log("me estan llamando")
    const user ={
        usuario : document.getElementById("userLogin").value,
        password : document.getElementById("passwordLogin").value,
    }
    localStorage.setItem("User", JSON.stringify(user));
    Toastify({
        text: "Registro correcto",
        duration: 1500,
        destination: "https://github.com/apvarun/toastify-js",          
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`            
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },            
      }).showToast();
      setTimeout( function() { window.location.href = "index.html"; }, 2500 );
}