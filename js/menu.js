let burgerButton = document.getElementById('burger-button');
let menu = document.getElementById('menu');

// burguerButton contiene el span con el icono
// burguerButton.addEventListener('que evento', 'que deseo hacer');
burgerButton.addEventListener('touchstart', function() {
    console.log('hola')
  menu.classList.toggle('active');
});