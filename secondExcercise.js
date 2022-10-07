const img = document.querySelector(`img`);
img.style.borderRadius= '10%';
img.style.margin= 'auto';
img.style.display= 'block';

img.addEventListener('click', () => {
  img.style.display= 'none';
})
img.addEventListener('mouseover', () => {
  img.style.opacity= '50%';
})
img.addEventListener('mouseout', () => {
  img.style.opacity= '100%';
})



const ball = document.querySelector(`.ball`);
ball.style.backgroundColor= "red";
ball.style.width= '400px';
ball.style.height= '400px';
ball.style.borderRadius= '50%';
ball.style.display= 'inline-Block';
ball.style.margin= '10px';

ball.addEventListener('click', ()=> {
  ball.style.display= 'none';
})
ball.addEventListener('mouseover', () => {
  ball.style.backgroundColor= 'pink';
})
ball.addEventListener('mouseout', () => {
  ball.style.backgroundColor= 'red';
})



const block =document.querySelector(`.block`);
block.style.width= '300px';
block.style.height= '300px';
block.style.backgroundColor= 'blue';
block.style.display= 'inline-Block';
block.style.margin= '10px';

block.addEventListener('click', ()=> {
  block.style.display= 'none';
})
block.addEventListener('mouseover', () => {
  block.style.backgroundColor= 'yellow';
})
block.addEventListener('mouseout', () => {
  block.style.backgroundColor= 'blue';
})



const triangle = document.querySelector(`.triangle`);
triangle.style.borderLeft= '200px solid transparent';
triangle.style.borderRight= '200px solid transparent';
triangle.style.borderBottom= '350px solid purple';
triangle.style.width= '0';
triangle.style.height= '0';
triangle.style.display= 'inline-block';
triangle.style.margin= '10px';

triangle.addEventListener('click', () => {
  triangle.style.display= 'none';
})
triangle.addEventListener('mouseover', () => {
  triangle.style.borderBottom= ' 350px solid brown';
})
triangle.addEventListener('mouseout', () => {
  triangle.style.borderBottom= '350px solid purple';
})