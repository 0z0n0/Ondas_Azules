let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu-bar');
let socialNetwork = document.querySelector('#socialNetwork');
    
  menu_bar.addEventListener('click', function() {
    menu.classList.toggle("menu-toggle")
    menu.classList.toggle("socialNetwork-toggle");   
    
  });

