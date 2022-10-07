const firstBtn = document.querySelector('#firstBtn');
const firstPar = document.querySelector('#firstPar');

firstBtn.addEventListener('click', ()=> {
  firstPar.textContent='kazkoks tekstas';
})



const secondBtn = document.querySelector('#secondBtn');
const secondPar = document.querySelector('#secondPar');

secondBtn.addEventListener('click', ()=> {
  secondPar.textContent += ' kitas tekstas asfdfasdffa';
})



const thirdBtn = document.querySelector('#thirdBtn');
const thirdPar = document.querySelector('#thirdPar');

thirdBtn.addEventListener('click', ()=> {
thirdPar.style.color = "red";
})


const fourthBtn = document.querySelector('#fourthBtn');
const fourthPar = document.querySelector('#fourthPar');

fourthBtn.addEventListener('click', ()=> {
fourthPar.textContent='kazkoks teksta lorem bla bla bla';
fourthPar.style.backgroundColor = "green";
})