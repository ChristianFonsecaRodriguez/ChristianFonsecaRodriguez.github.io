
const images = [
  'img/background/black_cat_background_2.png',
  'img/background/black_cat_background_3.png',
  
  'img/background/black_cat_background_1.png',
  // Agrega más imágenes aquí
];

let currentIndex = 0;

function changeBackgroundImage() {
  const imageBackground = document.querySelector('.background-image-land');

  if (imageBackground) {
    // Agrega la clase 'fade-out' para iniciar la animación de difuminado
    imageBackground.classList.add('fade-out');

    // Cambia la imagen de fondo después de que termine la animación de difuminado
    setTimeout(() => {
      imageBackground.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;

      // Restaura la opacidad después de cambiar la imagen de fondo
      imageBackground.classList.remove('fade-out');
    }, 1000); // La duración de la animación de difuminado (1000 ms = 1 s)
  }
}

// Cambia la imagen de fondo cada 5 segundos (5000 milisegundos)
setInterval(changeBackgroundImage, 5000);




// const switchBtn = document.getElementById('switch');
const body = document.body;

// const label = document.getElementById('label');

// switchBtn.addEventListener('change', function() {
//   if(this.checked) {
//     body.classList.add('dark-mode');
//     label.innerHTML = 'Dark Mode';
//   } else {
//     body.classList.remove('dark-mode');
//     label.innerHTML = 'Light Mode';
//   }
// });



const switchBtn2 = document.getElementById('switchBtn');
const labelBtn = document.getElementById('labelBtn');
const iconBtn = document.getElementById('iconBtn');



let toggleOn = true;
switchBtn2.addEventListener('click', function() {
  if (toggleOn){
    body.classList.add('dark-mode');
    iconBtn.classList.replace("fa-moon", "fa-sun");
    labelBtn.innerHTML = 'Light mode';
    toggleOn = false;
  } else {
    body.classList.remove('dark-mode');
    iconBtn.classList.replace("fa-sun", "fa-moon");
    labelBtn.innerHTML = 'Dark mode';
    toggleOn = true;
  }
});



// import { incremental } from './main.js';
// incremental = incremental + 1;
// console.log(incremental)

// const switchBtn = document.getElementById('flexSwitchCheckDefault');
// const bodyEl = document.body;

// const label = document.getElementById('label');

// switchBtn.addEventListener('change', function() {
//   if(this.checked) {
//     bodyEl.classList.add('dark-mode');
//     label.innerHTML = 'Dark Mode';
//   } else {
//     bodyEl.classList.remove('dark-mode');
//     label.innerHTML = 'Light Mode';
//   }
// });
