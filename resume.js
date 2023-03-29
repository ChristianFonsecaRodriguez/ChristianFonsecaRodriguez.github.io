
const switchBtn = document.getElementById('switch');
const body = document.body;
const righColumn = document.getElementById('rightColumn');
const hrTitled = document.getElementById('hrTitled');
const btnCert = document.getElementById('btnCert');


const leftColumn = document.getElementById('leftColumn');


const label = document.getElementById('label');

switchBtn.addEventListener('change', function() {
  if(this.checked) {
    body.classList.add('dark-mode');
    leftColumn.classList.add('dark-mode');
    righColumn.classList.add('dark-mode');
    hrTitled.classList.add('dark-mode');
    btnCert.classList.replace("btn-secondary", "btn-primary");
    label.innerHTML = 'Dark Mode';
  } else {
    body.classList.remove('dark-mode');
    leftColumn.classList.remove('dark-mode');
    righColumn.classList.remove('dark-mode');
    hrTitled.classList.remove('dark-mode');
    btnCert.classList.replace("btn-primary", "btn-secondary");
    label.innerHTML = 'Light Mode';
  }
});
