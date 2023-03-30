
const body = document.body;
const switchBtn2 = document.getElementById('switchBtn');
const labelBtn = document.getElementById('labelBtn');
const iconBtn = document.getElementById('iconBtn');


const cards = document.querySelectorAll('.card-body');



let toggleOn = true;
switchBtn2.addEventListener('click', function() {
  if (toggleOn){

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.replace('bg-light','bg-dark');
        cards[i].classList.replace('text-dark','text-white');
        //divs[i].classList.add('nueva-clase'); // agregar la clase "nueva-clase"
        //divs[i].classList.remove('vieja-clase'); // quitar la clase "vieja-clase"
    }

    body.classList.add('dark-mode');

    iconBtn.classList.replace("fa-moon", "fa-sun");
    labelBtn.innerHTML = 'Light mode';
    toggleOn = false;
  } else {

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.replace('bg-dark','bg-light');
        cards[i].classList.replace('text-white','text-dark');
        // divs[i].classList.add('nueva-clase'); // agregar la clase "nueva-clase"
        // divs[i].classList.remove('vieja-clase'); // quitar la clase "vieja-clase"
    }

    body.classList.remove('dark-mode');
    iconBtn.classList.replace("fa-sun", "fa-moon");
    labelBtn.innerHTML = 'Dark mode';
    toggleOn = true;
  }
  console.log(cards)
});

