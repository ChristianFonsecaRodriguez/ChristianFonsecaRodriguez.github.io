
const switchBtn = document.getElementById('switch');
const body = document.body;
const righColumn = document.getElementById('rightColumn');
const hrTitled = document.getElementById('hrTitled');


const leftColumn = document.getElementById('leftColumn');


const label = document.getElementById('label');

switchBtn.addEventListener('change', function() {
  if(this.checked) {
    body.classList.add('dark-mode');
    leftColumn.classList.add('dark-mode');
    righColumn.classList.add('dark-mode');
    hrTitled.classList.add('dark-mode');
    label.innerHTML = 'Dark Mode';
  } else {
    body.classList.remove('dark-mode');
    leftColumn.classList.remove('dark-mode');
    righColumn.classList.remove('dark-mode');
    hrTitled.classList.remove('dark-mode');
    label.innerHTML = 'Light Mode';
  }
});
