const closeRotate = document.querySelector('.fa-times');
const rotate = document.querySelector('.fa-align-center');
const rotateBall = document.querySelector('.rotate-ball');
const body = document.querySelector('body');

rotate.addEventListener('click', () => {
  body.classList.add('rotate-left');
  rotate.classList.add('right');
  closeRotate.classList.add('left');
});

closeRotate.addEventListener('click', () => {
  body.classList.remove('rotate-left');
  rotate.classList.remove('right');
  closeRotate.classList.remove('left');
});
