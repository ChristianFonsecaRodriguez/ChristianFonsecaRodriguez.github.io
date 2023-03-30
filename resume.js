
// const switchBtn = document.getElementById('switch');
// const label = document.getElementById('label');

// incremental = incremental + 1;
// console.log(incremental)


const body = document.body;
const righColumn = document.getElementById('rightColumn');
const hrTitled = document.getElementById('hrTitled');
const btnCert = document.getElementById('btnCert');


const leftColumn = document.getElementById('leftColumn');


// switchBtn.addEventListener('change', function() {
//   if(this.checked) {
//     body.classList.add('dark-mode');
//     leftColumn.classList.add('dark-mode');
//     righColumn.classList.add('dark-mode');
//     hrTitled.classList.add('dark-mode');
//     btnCert.classList.replace("btn-secondary", "btn-primary");
//     label.innerHTML = 'Dark Mode';
//   } else {
//     body.classList.remove('dark-mode');
//     leftColumn.classList.remove('dark-mode');
//     righColumn.classList.remove('dark-mode');
//     hrTitled.classList.remove('dark-mode');
//     btnCert.classList.replace("btn-primary", "btn-secondary");
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
    leftColumn.classList.add('dark-mode');
    righColumn.classList.add('dark-mode');
    hrTitled.classList.add('dark-mode');
    btnCert.classList.replace("btn-secondary", "btn-primary");
    iconBtn.classList.replace("fa-moon", "fa-sun");
    labelBtn.innerHTML = 'Light mode';
    toggleOn = false;
  } else {
    body.classList.remove('dark-mode');
    leftColumn.classList.remove('dark-mode');
    righColumn.classList.remove('dark-mode');
    hrTitled.classList.remove('dark-mode');
    btnCert.classList.replace("btn-primary", "btn-secondary");
    iconBtn.classList.replace("fa-sun", "fa-moon");
    labelBtn.innerHTML = 'Dark mode';
    toggleOn = true;
  }
});
