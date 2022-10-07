const img = document.querySelector(`img`);
img.style.borderRadius= '10%';
img.style.margin= '0 20%';



const ball = document.querySelector(`#ball`);
ball.style.transition= 'all 0.6s';

addEventListener('keydown', () => {
  ball.style.bottom= '600px';
})

addEventListener('keyup', () => {
  ball.style.bottom= '40px';
})



const floor = document.querySelector(`#floor`);
floor.style.transition= 'all 0.6s';

floor.addEventListener('mouseover', () => {
  floor.style.left= '25%';
  floor.textContent= 'Click me !!!!';
})
floor.addEventListener('click', () => {
  floor.style.left= '50%';
  floor.textContent= '';
})