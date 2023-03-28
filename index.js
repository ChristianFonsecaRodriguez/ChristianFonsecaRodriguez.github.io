
const images = [
  'img/background/black_cat_background_1.png',
  'img/background/black_cat_background_2.png',
  'img/background/black_cat_background_3.png',
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

