
const images = [
  'img/background/black_cat_background_1.jpg',
  'img/background/black_cat_background_2.jpg',
  'img/background/black_cat_background_3.jpg',
  // Agrega más imágenes aquí
];

let currentIndex = 0;

function changeBackgroundImage() {
  const imageBackground = document.querySelector('.image-background-land');

  if (imageBackground) {
    imageBackground.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }
}

// Cambia la imagen de fondo cada 5 segundos (5000 milisegundos)
setInterval(changeBackgroundImage, 5000);

